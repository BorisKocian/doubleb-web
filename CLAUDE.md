@AGENTS.md

# DoubleB web

Prezentačný web vývojárskeho štúdia DoubleB dev s.r.o. zo Žiliny. Prvá verzia (v1) musí byť nasadená pred finále CEE Startup Voucher 12. 11. 2026, kde ju ľudia otvoria z QR kódu na telefóne.

V tomto repozitári je všetko, čo potrebuješ: štruktúra a texty, design system s referenčnými ukážkami, rozhodnutia o značke a výskum konkurencie. Nič si nedomýšľaj. Keď niečo chýba, opýtaj sa.

## Čítaj v tomto poradí

1. `docs/web-v1.md`: čo stavať, sekcia po sekcii, s finálnymi textami a správaním na mobile. Zdroj pravdy pre v1.
2. `docs/brand/README.md`: pravidlá značky (farby, písmo, modul, pohyb, hravé interakcie, hlas).
3. `docs/brand/components/<Názov>/`: README s pravidlami komponentu a `preview.html` s referenčnou implementáciou (čisté HTML a JS). Tie prepíš do Reactu, nevymýšľaj nové.
4. `docs/decisions.md`: positioning, čo o klientoch smieme povedať, čo nepoužívať.
5. `docs/launch-checklist.md`: čo musí byť hotové pred spustením.

## Stack

- Next.js 16 (App Router), React 19, TypeScript. Pred písaním kódu si prečítaj príslušné návody v `node_modules/next/dist/docs/` (pozri AGENTS.md).
- Čisté CSS, žiadny Tailwind ani UI knižnica. Nové závislosti pridávaj len po dohode.
- Písma cez `next/font/google` v `src/app/layout.tsx`, prepojené na tokeny v `src/app/globals.css`.

## Štruktúra

```
docs/                  kontext (texty, značka, rozhodnutia, výskum)
public/brand/          logo (JPG, čierne pozadie)
public/team/           fotky do sekcie O nás
scripts/build-tokens.mjs  generuje src/styles/tokens.css z docs/brand/tokens.json
src/app/               stránky (layout, page, not-found, ochrana-sukromia)
src/config/site.ts     údaje o firme, odkazy a zástupné hodnoty (TODO)
src/styles/tokens.css  CSS premenné a triedy písma, GENEROVANÉ, needitovať
src/styles/doubleb.css triedy komponentov z design systému (prefix db-)
src/app/globals.css    prepojenie písiem, mobilné veľkosti nadpisov
```

Odporúčané pre komponenty: `src/components/<Názov>.tsx` a texty v `src/content/sk.ts`, aby sa dali neskôr ľahko preložiť do angličtiny.

## Ako stavať

| Sekcia | Komponenty v design systéme | Poznámka |
| --- | --- | --- |
| Hlavička | Header | menu ako kotvy, mobilné menu, lepiace tlačidlo dole na mobile |
| Hero | HeroSection, WordFlip, PlayedNumber | minimapa len na desktope |
| Čo staviame | SectionHeader, ServiceList | |
| Projekty | CaseCard, ProjectFingerprint | CEE je veľká karta cez dva stĺpce |
| Ako pracujeme | karty v štýle `db-case`, Lists (`db-ul--accent`) | nový layout: dve karty, Express prvý |
| O nás | TeamSection, StudioReveal | fotky z `public/team/` |
| Kontakt | ContactForm, CopyEmail | Server Action, e-mail na klik |
| Pätička | Footer | bez terminálu vo v1 |
| 404 | NotFound | `src/app/not-found.tsx` |

Celú stránku poskladanú dokopy ukazuje `docs/brand/components/HomePage/preview.html`. Texty v nej sú staršie, platia texty z `docs/web-v1.md`.

## Hravé prvky (povinné vo v1)

Na evente si web niekto pozrie za päť sekúnd. Tieto prvky sú to, čo si zapamätá, preto nie sú voliteľné:

- **WordFlip:** preklápanie posledného slova v hero (vyvíjame, testujeme, nasadzujeme). Web Animations API, hodnoty z tokenov (`--dur-flip`, `--pause-flip`, `--flip-depth`, `--flip-offset`, `--ease-standard`). Rezervuj šírku najdlhšieho slova. Čítačka číta len aktuálne slovo.
- **PlayedNumber:** čísla v páse pod hero sa raz dopočítajú od nuly, keď sa pás objaví (IntersectionObserver, `--dur-slow`, `--stagger-type`).
- **StudioReveal:** „celé naše štúdio“ je `button`; hover, fokus aj ťuknutie ukážu fotky oboch. Na mobile karta pod textom.
- **ProjectFingerprint:** sedem riadkov modulu zo slugu projektu (FNV-1a hash a xorshift ako v `CaseCard/preview.html`). Je to čistá funkcia, počítaj ju na serveri, aby nevznikol rozdiel pri hydratácii. Každý riadok má aspoň jednu paličku.
- **NotFound:** riadok modulu s chýbajúcou paličkou.

Pri `prefers-reduced-motion: reduce` sa nič nepreklápa ani neprehráva, ukáže sa konečný stav. Klientske komponenty (`"use client"`) len tam, kde je stav alebo animácia.

## Pravidlá, ktoré sa neporušujú

- Texty preber doslova z `docs/web-v1.md`. Nevymýšľaj čísla, klientov, citáty ani funkcie. Klientov nad rámec `docs/decisions.md` nemenuj.
- Žiadne hex farby v kóde. Len CSS premenné z tokenov (`var(--accent)` a pod.). Zmena tokenu: uprav `docs/brand/tokens.json` a spusti `npm run tokens`.
- Zelené sú dve: bežný akcent `--accent` (jemne do bielej stlmená zelená, #32E94D) a sýta neónová `--accent-strong` (#00FF00). Neón je len na ploche hlavných tlačidiel; bodky, paličky, čísla, lehoty a preklápané slovo sú `--accent`. Zelené plochy sú len hlavné tlačidlá.
- Modul: každý riadok má aspoň jednu paličku a najviac jeden prvok v `--accent`. Žiadny raster bodiek v pozadí.
- Tlačidlá majú `--radius-md`, nikdy nie sú pilulky.
- Nové texty (hlášky, alt texty, aria-label) píš v hlase značky: na rovinu, bez slov zo zoznamu v `docs/decisions.md`, bez trojslovia, bez „nie X, ale Y“, bez dlhých pomlčiek, bez emoji.
- Zástupné hodnoty (doména, e-mail, IČO, LinkedIn) ber len zo `src/config/site.ts`, nikdy ich nepíš priamo do komponentov.

## Mobil a prístupnosť

- Najprv 360 × 640 px, potom desktop. Zlom na jeden stĺpec pri 820 px (pozri `src/styles/doubleb.css`).
- Klikateľné prvky aspoň 44 px na výšku, polia formulára písmo aspoň 16 px.
- Hover efekty majú na mobile ekvivalent pri stlačení. E-mail na mobile otvára poštu, na desktope sa kopíruje.
- Zameranie klávesnicou: zelený obrys z `.db :focus-visible`. Sémantické HTML, `lang="sk"`.

## Príkazy

```
npm install
npm run dev        # vývoj na http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm run tokens     # znova vygeneruje src/styles/tokens.css
```

Premenné prostredia sú v `.env.example` (skopíruj do `.env.local`).

## Kedy je hotovo

Keď prejde celý `docs/launch-checklist.md`. Po každej sekcii skontroluj web na 360 px aj 1440 px.
