# doubleb-web

Web vývojárskeho štúdia DoubleB dev s.r.o. zo Žiliny. Next.js 16, TypeScript, čisté CSS s tokenmi z nášho design systému.

Prvá verzia musí byť hotová pred finále CEE Startup Voucher, 12. 11. 2026.

## Spustenie

```
npm install
cp .env.example .env.local
npm run dev
```

Web beží na http://localhost:3000.

## Kde čo je

| Čo | Kde |
| --- | --- |
| Čo stavať a všetky texty v1 | `docs/web-v1.md` |
| Pravidlá značky (farby, písmo, modul, pohyb, hlas) | `docs/brand/README.md` |
| Komponenty: pravidlá a referenčné ukážky | `docs/brand/components/` |
| Positioning, čo smieme povedať o klientoch | `docs/decisions.md` |
| Checklist pred spustením | `docs/launch-checklist.md` |
| Analýza konkurencie | `docs/research/competitors-report.md` |
| Údaje o firme a zástupné hodnoty | `src/config/site.ts` |
| Tokeny (generované) a štýly komponentov | `src/styles/` |
| Pokyny pre Claude Code a iných agentov | `CLAUDE.md`, `AGENTS.md` |

## Práca s Claude Code

Otvorte priečinok v Claude Code a napíšte napríklad: „Postav hlavnú stránku podľa docs/web-v1.md, začni hlavičkou a hero.“ Všetko potrebné si prečíta z `CLAUDE.md`.

## Tokeny

Farby, písmo, medzery a pohyb sú v `docs/brand/tokens.json`. Po zmene spustite `npm run tokens`, ktorý prepíše `src/styles/tokens.css`. Ten súbor needitujte ručne.

## Zdroje mimo repozitára

- Design system DoubleB (živé ukážky): https://claude.ai/artifact/LTVjoYz9dZ2TLDAyrUfhB6
- Dokument so štruktúrou a textami v1: https://claude.ai/artifact/3wSpUQuoWUNBxrRTAuor5g

Od vytvorenia repozitára platí za zdroj pravdy `docs/` v repozitári.
