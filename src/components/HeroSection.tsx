"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/content/sk";

function useTyping(words: string[]) {
  const [display, setDisplay] = useState(words[0]);
  const [idle, setIdle] = useState(true); // idle = complete word paused
  const wordRef = useRef(0);
  const deletingRef = useRef(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function tick(typedWord: string, deleting: boolean, wordIndex: number) {
      if (!mountedRef.current) return;
      const target = words[wordIndex];
      let delay = deleting ? 48 : 86;
      let next: () => void;

      if (!deleting && typedWord === target) {
        delay = 1900;
        next = () => {
          setIdle(false);
          deletingRef.current = true;
          tick(typedWord, true, wordIndex);
        };
        setIdle(true);
      } else if (deleting && typedWord === "") {
        delay = 180;
        next = () => {
          const nextIdx = (wordIndex + 1) % words.length;
          wordRef.current = nextIdx;
          deletingRef.current = false;
          tick("", false, nextIdx);
        };
      } else if (deleting) {
        const next2 = typedWord.slice(0, -1);
        next = () => {
          setDisplay(next2);
          tick(next2, true, wordIndex);
        };
      } else {
        const next2 = target.slice(0, typedWord.length + 1);
        next = () => {
          setDisplay(next2);
          tick(next2, false, wordIndex);
        };
      }

      setTimeout(next, delay);
    }

    tick(words[0], false, 0);

    return () => {
      mountedRef.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { display, idle };
}

export function HeroSection() {
  const { proof, words, headline, eyebrow, lead, primaryCta, secondaryCta } = content.hero;
  const { display, idle } = useTyping(words);

  const heroRef = useRef<HTMLElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="hero db-wrap" id="top" ref={heroRef}>
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="db-dot db-on" />
            {eyebrow}
          </div>

          <h1>
            {headline}{" "}
            <span className="flip-slot" aria-hidden="true">
              <span className="typed-word">{display}</span>
              <span className={`typing-caret${idle ? " idle" : ""}`} />
            </span>
            <span className="sr-only">{words[0]}</span>
          </h1>

          <p>{lead}</p>

          <div className="hero-actions">
            <a href="#kontakt" className="db-btn db-btn--primary db-btn--lg">
              <span className="db-dot" />
              {primaryCta}
            </a>
            <a className="text-link" href="#projekty">
              <span className="db-dot db-on" />
              {secondaryCta}
            </a>
          </div>
        </div>

        <div className="proof-grid">
          {proof.map((item) => (
            <article key={item.desc}>
              <strong>{item.number}{item.unit}</strong>
              <span>
                {item.desc}
                {item.link && (
                  <> <a href={item.link.href}>{item.link.label}</a></>
                )}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <a
        className={`mobile-sticky-cta${showSticky ? " visible" : ""}`}
        href="#kontakt"
      >
        <span className="db-dot" />
        {content.nav.cta}
      </a>
    </>
  );
}
