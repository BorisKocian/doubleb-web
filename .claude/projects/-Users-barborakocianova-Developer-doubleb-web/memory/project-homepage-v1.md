---
name: project-homepage-v1
description: Homepage v1 implementation status — what's built, what's pending, key architecture decisions
metadata:
  type: project
---

Homepage v1 implemented Nov 11, 2026 based on `claude-build-brief.md` (found in Downloads).

**Why:** Deadline is CEE Startup Voucher finale 2026-11-12; web must be live for QR code scan at event.

**What's built:**
- `src/app/page.tsx` — full page assembly
- `src/content/sk.ts` — all Slovak texts (single source of truth)
- `src/app/actions.ts` — Server Action for contact form (TODO: wire email service)
- `src/components/BackgroundCanvas.tsx` — fixed dot/pill grid canvas, cursor-reactive
- `src/components/Header.tsx` — sticky glass nav, mobile drawer burger
- `src/components/HeroSection.tsx` — typing effect hero + mobile sticky CTA (IntersectionObserver)
- `src/components/ProjectFingerprint.tsx` — server-side FNV-1a deterministic fingerprint
- `src/components/ServicesSection.tsx` — interactive selector/detail panel
- `src/components/ProjectsSection.tsx` — tab-based project switcher
- `src/components/ProcessSection.tsx` — Express/Standard tempo cards with glow hover
- `src/components/StudioReveal.tsx` — dashed-underline button reveals team popup
- `src/components/AboutSection.tsx` — team cards (module placeholders until photos arrive)
- `src/components/ContactSection.tsx` — email copy (desktop) / mailto (mobile) + form
- `src/components/Footer.tsx` — footer with nav, contact, copyright

**New CSS added to end of `src/styles/doubleb.css`:** canvas, glass nav, sticky CTA, cursor blink, services layout, projects tabs, tempo cards, StudioReveal, email button.

**What's still needed (launch-checklist.md):**
- Real email service wired into `src/app/actions.ts`
- Team photos: `public/team/boris.jpg` and `public/team/barbora.jpg` (480×480px min)
- LinkedIn URLs for Boris and Barbora in `src/config/site.ts`
- Real domain + NEXT_PUBLIC_SITE_URL in .env
- IČO in `src/config/site.ts`
- 404 page (`src/app/not-found.tsx`)
- `/ochrana-sukromia` privacy page
- OG image

**Architecture:** typing effect uses recursive setTimeout state machine; canvas uses requestAnimationFrame batching; ProjectFingerprint is server component (no hydration issues); `useActionState` from React 19 for form.

**How to apply:** When continuing work, check launch-checklist.md for remaining items. Photos and TODOs in site.ts are the most blocking items.
