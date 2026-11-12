"use server";

export type ContactState = { ok: boolean; error?: string } | null;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { ok: false, error: "Vyplňte prosím všetky polia." };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return { ok: false, error: "Skontrolujte e-mailovú adresu." };
  }

  // TODO: wire up email service (e.g. Resend)
  return { ok: true };
}
