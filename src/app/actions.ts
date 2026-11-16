"use server";

import { site } from "@/config/site";
import { content } from "@/content/sk";

export type ContactState = { ok: boolean; error?: string } | null;

const MAX_LENGTH = { name: 200, email: 320, message: 5000 };

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const express = formData.get("express") === "on";

  // Skryté pole: človek ho nevidí, bot ho vyplní. Tvárime sa, že prešlo.
  if (formData.get("company")) {
    return { ok: true };
  }

  if (!name || !email || !message) {
    return { ok: false, error: "Vyplňte prosím všetky polia." };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email) || email.length > MAX_LENGTH.email) {
    return { ok: false, error: "Skontrolujte e-mailovú adresu." };
  }

  if (name.length > MAX_LENGTH.name || message.length > MAX_LENGTH.message) {
    return { ok: false, error: "Správa je pridlhá. Skráťte ju prosím." };
  }

  const sendError = content.contact.form.errorPrefix.replace(/^\/\/ /, "").trim();

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Kontaktný formulár: chýba RESEND_API_KEY");
    return { ok: false, error: sendError };
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    `${site.name} web <web@${site.email.split("@")[1]}>`;

  const subject = `${express ? "[Express] " : ""}Dopyt z webu: ${name}`;
  const text = [
    `Meno: ${name}`,
    `E-mail: ${email}`,
    `Express: ${express ? "áno" : "nie"}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, reply_to: email, subject, text }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("Kontaktný formulár: Resend vrátil", res.status, await res.text());
      return { ok: false, error: sendError };
    }
  } catch (err) {
    console.error("Kontaktný formulár: odoslanie zlyhalo", err);
    return { ok: false, error: sendError };
  }

  return { ok: true };
}
