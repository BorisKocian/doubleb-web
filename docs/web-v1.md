# Web v1: štruktúra, texty a správanie

Zdroj pravdy pre prvú verziu webu. Texty sú finálne pre v1: preberajte ich doslova, bez dopĺňania.
Vznikol z workshopu 10. 11. 2026 (pôvodný dokument: https://claude.ai/artifact/3wSpUQuoWUNBxrRTAuor5g).

## Rozsah v1

Na finále CEE Startup Voucher 12. 11. 2026 (Nová Synagóga, Žilina) spúšťame jednu stránku, ktorá ukáže štýl, referencie a cestu ku kontaktu. Ceny, platby a detail Expressu prídu vo v2 po cenovom workshope.

Vo v1 je len to, čo už platí:

- Úvodný hovor je zadarmo.
- Express: rámcová cena do 24 hodín po hovore, začíname aj pred podpisom, prvá verzia do 10 dní pri menších projektoch, dohodnutý termín garantujeme.
- Štandard: cena a analýza do 48 hodín po hovore.
- Na formulár odpovedáme do jedného pracovného dňa.

Na webe nie sú ceny, hodinová sadzba ani „projekty od …“.

Vo v2: podstránky /express a /postup, platby, pravidlo pre platenú definíciu funkcií, prípadová štúdia CEE s číslami a citátom, anglická verzia, skrytý terminál.

## Mapa stránky

| Stránka | Verzia | Obsah |
| --- | --- | --- |
| / | v1 | Hero, Čo staviame, Projekty, Ako pracujeme, O nás, Kontakt |
| /ochrana-sukromia | v1 | Formulár a analytika bez cookies |
| 404 (not-found) | v1 | Riadok kódu s chýbajúcou paličkou |
| /express | v2 | Čo sa zmestí do 10 dní, cena, najbližší voľný termín |
| /postup | v2 | Kroky Štandardu, platby, otázky |
| /projekty/cee | v2 | Prípadová štúdia |
| /en/… | v2 | Anglická záloha |

**Menu:** Čo staviame · Projekty · Ako pracujeme · O nás, vpravo tlačidlo „Napíšte nám“. Položky sú kotvy na hlavnej stránke (`#co-staviame`, `#projekty`, `#ako-pracujeme`, `#o-nas`, `#kontakt`).

**Hlavná akcia** je všade jedna: „Napíšte nám“ vedie na formulár v sekcii Kontakt. QR kód z eventu vedie na hlavnú stránku.

## Hlavná stránka, sekcia po sekcii

Komponent v zátvorke odkazuje na `docs/brand/components/<Názov>/` (README s pravidlami a preview.html s referenčnou implementáciou).

### Hlavička (Header)

- Znak (orezaný JPG, trieda `db-mark`) a wordmark DoubleB.
- Menu podľa mapy vyššie, aktuálna sekcia pri scrollovaní má `aria-current`.
- Mobil: ikona z dvoch riadkov kódu, menu cez celú obrazovku s číslovanými odkazmi.
- Mobil: keď hero zmizne z obrazovky, dole sa objaví lepiace tlačidlo „Napíšte nám“. Pláva samo, bez lišty, okolo neho je vidno stránku. Od spodného okraja je zdvihnuté o `space-4`, aby Safari nezafarbilo svoju lištu jeho zelenou. Keď je na obrazovke kontakt alebo pätička, tlačidlo sa skryje.

### 1. Hero (HeroSection, WordFlip, PlayedNumber)

Hero nesie Express: práve v ňom platí veta doslova, preto ho pomenujeme hneď pod nadpisom.

- **Štítok:** vývojárske štúdio zo Žiliny
- **Nadpis:** Kým iní ešte naceňujú, my už [vyvíjame / testujeme / nasadzujeme]
- **Veta pod ním:** S DoubleB Express máte rámcovú cenu do 24 hodín po prvom hovore. Prvú verziu menšieho projektu do 10 dní.
- **Tlačidlá:** „Napíšte nám“ (hlavné, na `#kontakt`) a „Ako funguje Express“ (vedľajšie, na `#ako-pracujeme`)
- **Minimapa** vpravo (len desktop).

Pás čísel pod hero (čísla sa pri prvom zobrazení dopočítajú od nuly, PlayedNumber):

| Číslo | Popis |
| --- | --- |
| 24 h | rámcová cena v Exprese po úvodnom hovore |
| 10 dní | prvá verzia menšieho projektu v Exprese |
| 10 dní | od prvého hovoru po spustenie prihlášok do CEE Startup Voucher (odkaz na `#projekty`) |

### 2. Čo staviame (SectionHeader, ServiceList)

- **Štítok:** 01 / čo staviame
- **Nadpis:** Menšie aplikácie a produkty pre startupy.
- **Úvod:** Pre tímy, ktoré nemajú vlastných vývojárov. Navrhneme a naprogramujeme ich od začiatku a ostaneme pri nich aj po spustení.

| # | Názov | Text | Štítky |
| --- | --- | --- | --- |
| 01 | Menšie aplikácie | Klientske portály, rezervácie, interné nástroje. Web, iOS aj Android z jedného kódu. | Next.js, Capacitor |
| 02 | Produkty pre startupy | Prvá verzia, s ktorou idete k používateľom alebo investorom. Ďalšie funkcie pridávame podľa toho, čo používatelia naozaj používajú. | MVP, Express |
| 03 | Prezentačné weby, ktoré niečo robia | Viac stránok, vlastné interakcie, obsah, ktorý si spravujete sami. Ako tento web. | Next.js, interakcie |
| 04 | Dlhodobý vývoj | Ostaneme aj po spustení. Aplikáciu rozvíjame a staráme sa o ňu za mesačný paušál. | paušál, údržba |

**Riadok pod zoznamom:** Nerobíme rozsiahle firemné systémy ani projekty napojené na hardvér. Jednostránkový web vám spraví aj šablóna.

### 3. Projekty (SectionHeader, CaseCard, ProjectFingerprint)

CEE je hlavná karta: na finále ju uvidia ľudia, ktorí platformu sami používali. SmartGym ostane menší a bez dôrazu, Iudicata ukáže, že rozmýšľame ako produkt.

- **Štítok:** 02 / projekty
- **Nadpis:** Prihlášky do CEE Startup Voucher

**CEE** (veľká karta, na desktope cez dva stĺpce, slug `cee`)

- Typ: platforma na prihlášky a hodnotenie súťaže CEE Startup Voucher, pre MSIC a Inoviu
- Číslo: 10 dní od prvého hovoru po spustenie prihlášok
- Text: Za 10 dní sme z prvých hovorov definovali MVP, postavili ho, otestovali a spustili, takže prihlášky sa otvorili načas. Ďalšie dva mesiace sme pridávali hodnotenie s pomocou AI, porotu a viac kôl súťaže.
- Štítky: Next.js, AI hodnotenie
- Odkaz: zatiaľ žiadny (prípadová štúdia vo v2)

**SmartGym** (menšia karta, slug `smartgym`)

- Typ: aplikácia pre fitness centrá
- Číslo: 10+ mesiacov vývoja
- Text: Web, iOS a Android z jedného kódu. Na aplikácii pracujeme od januára.
- Štítky: Capacitor, App Store

**Iudicata** (menšia karta, slug `iudicata`)

- Typ: vlastný produkt
- Text: Vyhľadávanie v judikatúre a legislatíve s pomocou AI. Postavili sme ho celý sami, od nápadu po produkčnú verziu. Vývoj sme zastavili, keď trh obsadili silnejší hráči. Povedať si to včas je tiež zručnosť.
- Štítky: AI, vyhľadávanie
- Odkaz: https://iudicata.ai

Každá karta má odtlačok projektu vypočítaný zo slugu.

### 4. Ako pracujeme: dve tempá

Dve karty vedľa seba, Express prvý a zvýraznený (zelený štítok, zelené odrážky `db-ul--accent`). Vizuálne vychádzajú z kariet `db-case` (plocha `surface`, rámik `line`, `radius-lg`).

- **Štítok:** 03 / ako pracujeme
- **Nadpis:** Dve tempá. Express, keď sa ponáhľate.
- **Úvod:** Začína sa vždy rovnako, úvodným hovorom zadarmo. Potom si vyberiete tempo.

**DoubleB Express**

- Podnadpis: Keď to potrebujete hneď.
- Rámcová cena do 24 hodín po hovore
- Začneme aj pred podpisom
- Prvá verzia menšieho projektu do 10 dní
- Dohodnutý termín garantujeme

**Štandard**

- Podnadpis: Keď máte čas premyslieť funkcie.
- Analýza a cena do 48 hodín po hovore
- Funkcie definujeme spolu, potom podpíšeme a začneme

**Poznámka pod kartami:** Rámcovú cenu pripravuje ten z nás, kto bude projekt programovať, z toho, čo sme si povedali na hovore.

### 5. O nás (TeamSection, StudioReveal)

Sekcia stojí na princípe, ľudia sú dôkaz: každý, kto na projekte robí, pozná celý projekt. Po prvom zamestnancovi sa zmení len „Obaja.“ na „Všetci.“ a pribudne karta.

- **Štítok:** 04 / o nás
- **Nadpis:** Váš produkt pozná celé naše štúdio. Obaja.
  „celé naše štúdio“ je tlačidlo: po prejdení myšou alebo ťuknutí ukáže fotky oboch (StudioReveal).
- **Príbeh:** DoubleB sú dve B: Boris a Barbora. Sme manželia a projekty robíme spolu, preto každý z nás pozná celý projekt, produkt aj kód. Prešli sme cestu od študentov cez zamestnancov po freelancerov. DoubleB je ďalší krok: štúdio, ktoré chce rásť.

Dve karty ľudí s fotkou, menom, odkazom na LinkedIn a rovnakým zoznamom:

- Programuje web aj mobil
- Rozumie produktu
- Hovorí priamo s klientom
- Pozná celý projekt

**Pointa pod kartami:** Áno, zoznamy sú rovnaké. Keď jeden z nás chýba, druhý pokračuje bez odovzdávania.

### 6. Kontakt (ContactForm, CopyEmail)

- **Štítok:** 05 / kontakt
- **Nadpis:** Napíšte, čo potrebujete postaviť.
- **Úvod:** Ozveme sa do jedného pracovného dňa a dohodneme úvodný hovor.
- **E-mail** veľkým písmom, pod ním „kliknutím skopírujete“ (desktop). Na mobile ťuknutie otvorí poštu (`mailto:`).

Formulár:

1. Meno
2. E-mail
3. Čo má aplikácia robiť? (nápoveda v poli: Pár viet stačí. Pre koho je a dokedy ju potrebujete.)
4. Zaškrtávacie pole „Potrebujem Express“, pod ním drobným písmom: rámcová cena do 24 hodín po hovore

Tlačidlo „Odoslať“. Po odoslaní: „Máme to. Ozveme sa do jedného pracovného dňa.“
Chyba pri odoslaní: správa v štýle `label` začínajúca „// “ a e-mail ako záloha.

### Pätička (Footer)

- DoubleB a veta: Vývojárske štúdio zo Žiliny.
- Odkazy: Čo staviame, Projekty, Ako pracujeme, O nás
- Kontakt: e-mail, LinkedIn Borisa, LinkedIn Barbory
- DoubleB dev s.r.o., Žilina, IČO, odkaz na ochranu súkromia
- © 2026 DoubleB dev s.r.o.

Vstup do terminálu (`~ $`) je až vo v2.

### Stránka 404 (NotFound)

Veľký riadok modulu, v ktorom chýba palička (prerušovaný obrys v `accent`), pod ním „404“, veta „Tento riadok sme ešte nenapísali.“ a odkaz „Späť na úvod“.

### Ochrana súkromia

Krátka stránka: kto spracúva údaje (DoubleB dev s.r.o.), čo zbiera formulár (meno, e-mail, text), načo (odpoveď na dopyt), ako dlho ich držíme, kontakt. Analytika bez cookies, preto web nemá cookie lištu. Text je potrebné doplniť.

## Mobil a desktop

Na finále väčšina ľudí otvorí web z QR kódu na telefóne, preto testujte najprv na 360 × 640 px. Zlom na jeden stĺpec je pri 820 px.

| Sekcia | Desktop | Mobil |
| --- | --- | --- |
| Menu | položky v lište, tlačidlo vpravo | ikona z dvoch riadkov kódu, menu cez celú obrazovku; po odscrollovaní hero lepiace tlačidlo „Napíšte nám“ dole, pri kontakte a pätičke sa skryje |
| Hero | nadpis 64 px, minimapa vpravo | nadpis 40 px, bez minimapy; nadpis, veta a tlačidlo sa zmestia na prvú obrazovku |
| Pás čísel | tri vedľa seba | pod sebou, číslo a popis v jednom riadku |
| Čo staviame | číslo, názov a text v troch stĺpcoch | všetko pod sebou, štítky sa zalamujú |
| Projekty | CEE cez dva stĺpce, ostatné vedľa seba | pod sebou, CEE prvá |
| Ako pracujeme | dve karty vedľa seba | pod sebou, Express prvý |
| O nás | dve karty vedľa seba | pod sebou |
| Kontakt | text vľavo, formulár vpravo | text, e-mail a formulár pod sebou |

Hravé prvky na mobile:

- Preklápanie slov: rovnaké ako na desktope. Rezervujte šírku najdlhšieho slova („nasadzujeme“), aby riadok neposkakoval.
- Celé naše štúdio: otvorí sa ťuknutím a zavrie ďalším. Karta s fotkami je pod textom, nikdy cezň.
- Odohrané čísla: prehrajú sa raz, keď sa pás prvýkrát objaví na obrazovke.
- Bodka na paličku: na mobile pri stlačení tlačidla, nie pri prejdení myšou.
- Žiara pozadia: na desktope modul pozadia zozelenie okolo kurzora. Na mobile zozelenie pod prstom pri ťuknutí aj pri scrollovaní, výraznejšie a s hrubšou čiarou než na desktope, aby bolo vidno okolo prsta. Drží sa, kým je prst na displeji a kým stránka po švihnutí ešte ide, potom ostane `dur-mid` a za `dur-slow` dohasne. Ťuknutie na odkaz, tlačidlo alebo pole formulára žiaru nespustí.
- E-mail: na desktope klik skopíruje adresu, na mobile ťuknutie otvorí poštu.
- Všetko klikateľné má aspoň 44 px na výšku, polia formulára písmo aspoň 16 px, inak iPhone pri písaní priblíži stránku.
- Pri zapnutom obmedzení pohybu sa nič nepreklápa ani neprehráva.
