"use client";

import { useActionState, useRef, useState } from "react";
import { site } from "@/config/site";
import { content } from "@/content/sk";
import { submitContact } from "@/app/actions";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    e.preventDefault();
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="email-block">
      <a href={`mailto:${site.email}`} onClick={handleClick}>
        {site.email}
      </a>
      <span aria-live="polite">
        {copied ? content.contact.emailCopied : content.contact.emailLabel}
      </span>
    </div>
  );
}

function ContactForm() {
  const { form } = content.contact;
  const [state, formAction, isPending] = useActionState(submitContact, null);

  return (
    <form className="contact-form" action={formAction} noValidate>
      <label>
        {form.name}
        <input required name="name" autoComplete="name" className="db-input" />
      </label>

      <label>
        {form.email}
        <input required type="email" name="email" autoComplete="email" className="db-input" />
      </label>

      <label>
        {form.message}
        <textarea
          required
          name="message"
          className="db-input"
          placeholder={form.messagePlaceholder}
        />
      </label>

      <div className="sr-only" aria-hidden="true">
        <label>
          Firma
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="check">
        <input type="checkbox" name="express" style={{ accentColor: "var(--accent)" }} />
        <span>
          <strong>{form.expressLabel}</strong>
          <small>{form.expressNote}</small>
        </span>
      </label>

      {state?.ok ? (
        <p className="form-success">{form.success}</p>
      ) : (
        <>
          {state?.error && (
            <p className="form-success" role="alert">
              {"// "}{state.error}{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          )}
          <button
            type="submit"
            className="db-btn db-btn--primary"
            disabled={isPending}
            aria-busy={isPending}
          >
            <span className="db-dot" />
            {isPending ? "..." : form.submit}
          </button>
        </>
      )}
    </form>
  );
}

export function ContactSection() {
  const { eyebrow, heading, lead } = content.contact;

  return (
    <section className="section contact db-wrap" id="kontakt">
      <div className="section-head">
        <div className="eyebrow">
          <span className="db-dot db-on" />
          05 / {eyebrow.replace("05 / ", "")}
        </div>
        <h2>{heading}</h2>
        <p>{lead}</p>
      </div>
      <ContactForm />
      <CopyEmail />
    </section>
  );
}
