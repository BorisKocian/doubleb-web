"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Projektový screenshot sa dá otvoriť vo väčšom. Natívny <dialog> (showModal)
// rieši pascu fokusu, Escape aj vrstvu nad pozadím, nemusíme to písať ručne.
export function ProjectMedia({ src, alt, width, height }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Keby sa komponent odpojil s otvoreným oknom, nikdy nenecháme zamknutý scroll.
  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    []
  );

  function openLightbox() {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    dialogRef.current?.close();
  }

  return (
    <figure className="case-media">
      <button
        ref={triggerRef}
        type="button"
        className="case-media__trigger"
        aria-label={`Zväčšiť obrázok: ${alt}`}
        onClick={openLightbox}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={alt}
        onClose={() => {
          document.body.style.overflow = "";
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeLightbox();
        }}
      >
        <div className="lightbox__inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" />
          <button
            type="button"
            className="lightbox__close"
            aria-label="Zavrieť"
            onClick={closeLightbox}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </dialog>
    </figure>
  );
}
