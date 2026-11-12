"use client";

import { useRef, useState } from "react";
import { site } from "@/config/site";
import { content } from "@/content/sk";

function PersonThumb({ name }: { name: string }) {
  return (
    <div className="db-sr-person">
      <div className="db-sr-avatar" aria-hidden="true">
        <div className="db-row"><span className="db-pill" /><span className="db-dot db-on" /></div>
        <div className="db-row db-in1"><span className="db-dot" /><span className="db-pill" /></div>
        <div className="db-row"><span className="db-pill" /><span className="db-dot" /></div>
      </div>
      <span className="label">{name}</span>
    </div>
  );
}

export function StudioReveal() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { headingReveal, ariaReveal } = content.about;

  const people = [site.people.boris, site.people.barbora];

  return (
    <span className="db-sr-wrap">
      <button
        ref={btnRef}
        type="button"
        className="db-sr-btn"
        aria-expanded={open}
        aria-label={ariaReveal}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {headingReveal}
      </button>

      {/* Desktop popup */}
      <span
        className={`db-sr-pop${open ? " is-open" : ""}`}
        aria-hidden="true"
      >
        {people.map((p) => (
          <PersonThumb key={p.name} name={p.name} />
        ))}
      </span>

      {/* Mobile card — toggled below heading via CSS display:flex */}
      <span
        className={`db-sr-card${open ? " db-sr-card--open" : ""}`}
        aria-hidden="true"
      >
        {people.map((p) => (
          <PersonThumb key={p.name} name={p.name} />
        ))}
      </span>
    </span>
  );
}
