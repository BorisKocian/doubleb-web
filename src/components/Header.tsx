"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { content } from "@/content/sk";

const navLinks = content.nav.links;

export function Header() {
  const [open, setOpen] = useState(false);
  // The header CTA stays hidden while the hero (with its own CTA) is on screen,
  // then fades in once the hero scrolls out of view.
  const [heroGone, setHeroGone] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHeroGone(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <header className="header" style={{ position: "sticky", top: 0, zIndex: 30 }}>
      <div className="db-wrap header-inner">
        <Link href="/" className="brand-link" aria-label="DoubleB domov">
          <span className="db-brand">
            <span className="db-mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/doubleb-znak.svg" alt="" />
            </span>
            DoubleB
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Hlavná navigácia">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="#kontakt"
            className={`db-btn db-btn--primary db-nav__cta${heroGone ? "" : " is-hidden"}`}
            aria-hidden={!heroGone}
            tabIndex={heroGone ? undefined : -1}
          >
            <span className="db-dot" />
            {content.nav.cta}
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? content.nav.ariaClose : content.nav.ariaMenu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav db-wrap" aria-label="Mobilná navigácia">
          {navLinks.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
