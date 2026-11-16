"use client";

import { useEffect, useState } from "react";
import { content } from "@/content/sk";

// Lepiace tlačidlo na mobile. Je mimo <main>, inak by ho pätička (ďalší z-index
// vo vrstve stránky) prekreslila. Ukáže sa, keď hero zmizne, a skryje sa, keď je
// na obrazovke kontakt alebo pätička, kde už tlačidlo netreba.
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const targets = [
      document.getElementById("kontakt"),
      document.querySelector("footer"),
    ].filter((el): el is HTMLElement => el !== null);
    if (!hero) return;

    let heroOnScreen = true;
    const onScreen = new Set<Element>();
    const update = () => setVisible(!heroOnScreen && onScreen.size === 0);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        heroOnScreen = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );
    const endObs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      update();
    });

    heroObs.observe(hero);
    targets.forEach((el) => endObs.observe(el));
    return () => {
      heroObs.disconnect();
      endObs.disconnect();
    };
  }, []);

  return (
    <div className={`db-sticky-cta${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <a
        href="#kontakt"
        className="db-btn db-btn--primary db-btn--lg"
        tabIndex={visible ? undefined : -1}
      >
        <span className="db-dot" />
        {content.nav.cta}
      </a>
    </div>
  );
}
