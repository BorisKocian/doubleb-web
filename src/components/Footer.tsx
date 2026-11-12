import Link from "next/link";
import { site } from "@/config/site";
import { content } from "@/content/sk";

export function Footer() {
  const { links, status, copyright } = content.footer;

  return (
    <footer className="footer">
      <div className="db-wrap footer-main">
        <div>
          <Link href="/" className="db-brand">
            <span className="db-mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/doubleb-znak.svg" alt="" />
            </span>
            {site.name}
          </Link>
          <p>Vývojárske štúdio zo Žiliny.</p>
        </div>

        <nav aria-label="Navigácia">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.legalName} · {site.city}</span>
        </div>
      </div>

      <div className="db-wrap footer-bottom">
        <span>{copyright}</span>
        <span>
          <span className="db-dot db-on" aria-hidden="true" />
          {status}
        </span>
      </div>
    </footer>
  );
}
