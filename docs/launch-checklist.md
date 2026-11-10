# Checklist spustenia v1

Termín: pred finále CEE Startup Voucher, 12. 11. 2026. Všetko nižšie musí byť hotové.

## Základ

- [ ] Doména, nasadenie (Vercel alebo Dokploy) a e-mailová adresa; hodnoty v `src/config/site.ts` a `.env`
- [ ] Hlavná stránka so šiestimi sekciami podľa `docs/web-v1.md`, texty doslova
- [ ] Formulár, ktorý naozaj doručí správu (Server Action + e-mailová služba), a hláška po odoslaní
- [ ] Fotky (`public/team/`) a odkazy na LinkedIn v sekcii O nás
- [ ] Názov, popis a náhľad pri zdieľaní (obrázok podľa obalu design systému, `docs/brand/components/Cover`), ikona už je v `src/app/icon.png`
- [ ] Stránka /ochrana-sukromia a analytika bez cookies
- [ ] QR kód na hlavnú stránku, otestovaný na iPhone aj Androide

## Rozpoznateľné prvky (tiež musia byť)

- [ ] Preklápanie slov v hero (WordFlip)
- [ ] Celé naše štúdio s fotkami (StudioReveal)
- [ ] Odohrané čísla v páse pod hero (PlayedNumber)
- [ ] Odtlačky projektov na kartách (ProjectFingerprint)
- [ ] Stránka 404 (NotFound)

## Kontrola pred spustením

- [ ] 360 × 640 px: hero s tlačidlom na prvej obrazovke, nič nepreteká do strany
- [ ] 1440 px: rozloženie podľa `docs/web-v1.md`
- [ ] Klávesnica: všetko sa dá ovládať, zelený obrys pri zameraní je vidieť
- [ ] Zapnuté obmedzenie pohybu: nič sa nepreklápa ani neprehráva
- [ ] `npm run lint`, `npm run typecheck` a `npm run build` prejdú
- [ ] Lighthouse na mobile: výkon aj prístupnosť aspoň 90
- [ ] Odoslaný testovací formulár prišiel na správny e-mail
