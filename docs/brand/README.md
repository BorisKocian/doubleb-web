DoubleB dev je dvojčlenné vývojárske štúdio zo Žiliny. Obaja programujeme aj rozumieme produktu, takže klient hovorí priamo s tými, čo píšu kód. Staviame webové a mobilné aplikácie pre tímy, ktoré nemajú vlastných vývojárov.

Veľkosti písma a medzery sú návrh. Overte ich na prvej verzii webu a zmeňte v tokenoch, nie v komponentoch.

## Hlavná myšlienka

> Kým iní ešte naceňujú, my už vyvíjame.

Hero stojí na skutočnom procese: rámcová cena do 24 hodín zadarmo a pri expresných projektoch prvá verzia do 10 dní. Pod hero vždy patrí veta s dôkazom („Rámcovú cenu máte do 24 hodín. Pri expresných projektoch prvú verziu do 10 dní.“) a pás s doložiteľnými číslami. Rýchlosť sľubuje veľa firiem, dôkaz takmer nikto.

Interná onlyness (nepublikuje sa): DoubleB je jediné vývojárske štúdio v Žiline, kde každý rozumie produktu aj kódu a každý zvládne celý projekt, takže klient nikdy nečaká na niekoho iného.

## Hlas

Dve vlastnosti:

- **Na rovinu.** Konkrétne, sebavedomo, s číslami, bez nafukovania. Nepovieme „to sa nedá“, povieme, čo to stojí, alebo kto to spraví lepšie.
- **S humorom.** Zo seba a zo situácií, technické a popkultúrne narážky. Nikdy na úkor ľudí ani konkurencie. Porovnanie s celou kategóriou (napríklad agentúry) je v poriadku, výsmech nie. Konkurenciu nikde nemenujeme.

Hraví sme v tóne a v detailoch, seriózni v sľuboch a dôkazoch. Hero, prípadové štúdie, ponuky a čísla sú vecné.

Príklady viet a kde patria:

| Veta | Kde |
| --- | --- |
| Kým iní ešte naceňujú, my už vyvíjame. | hero |
| Rámcovú cenu máte do 24 hodín. | veta pod hero |
| Váš produkt pozná celé naše štúdio. Obaja. | O nás, s interakciou StudioReveal |
| Áno, zoznamy sú rovnaké. | O nás, pod kartami ľudí |
| Vylepšíme váš produkt skôr, než zistíte, že to potrebuje. | sekcia o dlhodobej spolupráci |
| Starosti s vývojom si berieme my. Vám ostanú faktúry. | LinkedIn, výzva na kontakt |
| Povieme vám aj to, ak váš nápad nefunguje. | sekcia pre startupy |
| Kód aj dokumentácia sú vaše. | Ako pracujeme, otázky |

Nepoužívame:

- slová: partner, na mieru, digitálne riešenia, komplexné riešenia, inovatívny, synergia, digitálna transformácia, moderné technológie, posunúť na ďalšiu úroveň
- vzorce typické pre texty od AI: trojslovia a zoznamy po troch, „nie X, ale Y“, dlhé pomlčky, rečnícke otázky typu „Výsledok?“
- dvojité zápory, ktoré sa dajú prečítať opačne
- emoji
- politiku, ani za, ani proti

Klientov menujeme len s ich súhlasom. Dovtedy ich opíšeme („Aplikácia pre fitness centrá“).

## Farby

Dva režimy, dve zelené. Tokeny sa medzi režimami prepínajú samy (`data-theme="hlasny"` na ľubovoľnom obale).

- **Tichý režim je predvolený:** `bg` čistá čierna, text `ink`, odseky `ink-soft`, popisky `muted`, zelená `accent` len ako akcent.
- **Hlasný režim** (`bg` je zelená #00FF00): len hero na eventoch, merch, roll-upy a grafiky. Veľká zelená plocha kričí, preto je vzácna.
- Dve zelené: `accent` (#32E94D, pôvodná zelená jemne stlmená do bielej) je bežný akcent, `accent-strong` (#00FF00 z loga, odtieň 120°) je len pre plochu hlavných tlačidiel. Zelenú nikdy neposúvajte k žltej: limetky okolo 70° na čiernej majú v Žiline iné štúdiá. Stlmujte len do bielej, nie do čiernej; inak žiadne ďalšie varianty, tiene ani prechody.
- Zelené plochy na stránke sú len hlavné tlačidlá (v `accent-strong`). Inak je zelená (`accent`) na paličkách modulu, číslach, lehotách a preklápanom slove.
- Text na čiernej nie je čisto biely (`ink` #E8EAE8). Na OLED displejoch sa tak lepšie číta a pri scrollovaní menej rozmazáva.
- Dlhý text nikdy v `accent`. Text na zelenej ploche je vždy `on-accent`.
- `subtle` a `line` sú len dekorácia, nikdy text ani rámik ovládacieho prvku. Rámiky polí a vedľajších tlačidiel sú `muted`.
- Červenú ani inú signálnu farbu nemáme. Chyby hlási text v `ink` s „// “ na začiatku.

## Písmo

| Úloha | Písmo | Kde |
| --- | --- | --- |
| Nadpisy | Schibsted Grotesk, tučná | `hero`, `h1`, `h2`, otázky, citáty, wordmark DoubleB |
| Text | Hanken Grotesk | `lead`, `body`, `small`, tlačidlá, polia formulára |
| Kód | JetBrains Mono | `number`, `label`: štítky sekcií, lehoty, čísla, terminál |

Všetky tri sú z Google Fonts a podporujú slovenskú diakritiku. Nadpisy nie sú pätkové. Inter ani Plus Jakarta Sans nepoužívajte, majú ich takmer všetci okolo nás.

```html
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..900&family=Hanken+Grotesk:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet">
```

Štítky (`label`) píšte malými písmenami. Čísla v štýle `number` vždy v `accent`, jednotka za nimi v `ink`.

## Modul: kód ako tvar

Bodky a paličky z loga sú riadky kódu, ako ich vidno v minimape editora alebo v skeletone. Pravidlá:

1. **Riadok je riadok kódu.** Len dve dĺžky: bodka (`module-unit`) a palička (`module-pill`, teda 2 jednotky plus medzera). Medzera `module-gap` je 25 % jednotky. Riadky sa môžu odsadzovať o `module-indent`.
2. **Každý riadok má aspoň jednu paličku**, presne ako v logu. Palička je to, čo nás odlišuje; samotné bodky má na trhu viac značiek.
3. **Zelená znamená, že niečo pribudlo alebo je aktívne,** ako zelené riadky v git diffe. V riadku je v `accent` najviac jeden prvok. Ostatné `code-bar`, neaktívne `subtle`.
4. **Pohyb je písanie.** Riadky vznikajú zľava doprava s oneskorením `stagger-type`. Nič nebliká náhodne.

Zaoblenie prvkov je vždy `radius-pill`. Vo veľkom (cover, citát, 404, merch, LinkedIn) platí `module-unit-lg`, `module-gap-lg`, `module-pill-lg`.

Nikdy: raster bodiek v pozadí, logo rozpadnuté na animované častice, pilulkové tlačidlá.

## Rozloženie

- Obsah je v `db-wrap`: najviac `layout-max` široký, okraje `layout-gutter`.
- Horná lišta má výšku `nav-height` a je prilepená hore.
- Sekcie sú od seba `space-5`. Každá začína SectionHeader: štítok „0N / názov“ s čiarou, nadpis `h1` (najviac 820 px), úvod `lead` (najviac 760 px), potom `space-4` k obsahu.
- Pod 820 px sa všetko skladá do jedného stĺpca. Minimapa v hero sa na mobile skryje.
- Karty a panely: `surface`, rámik `line`, `radius-lg`, vnútri `space-3`. Tieňe nepoužívame.

## Komponenty

Triedy všetkých komponentov sú v `components/bundle.css` a berú hodnoty len z tokenov. Obal stránky má triedu `db`.

- **Základ:** Button (aj odkaz v texte a štítok technológie), Lists.
- **Modul:** CodeLine, Skeleton, DiffProgress, ProjectFingerprint.
- **Stránka:** Header, HeroSection, SectionHeader, ServiceList, CaseCard, ProcessSteps, TeamSection, Quote, FAQ, ContactForm, Footer. HomePage ukazuje, ako idú spolu.
- **Hero:** WordFlip, jediný preklápaný prvok na webe.
- **Hravé momenty, každý najviac raz na stránke:** StudioReveal, PlayedNumber, Terminal, NotFound, CopyEmail.

## Stavy a prístupnosť

- Zameranie klávesnicou: obrys 2 px v `accent` s odsadením 3 px. V oboch režimoch má kontrast nad 15 : 1.
- Prejdenie myšou: bodka sa natiahne na paličku za `dur-fast`. To isté platí pre zameranie klávesnicou.
- Aktívne alebo vybrané: palička v `accent` (menu, otázky, voľby vo formulári, kroky postupu).
- Text má aspoň 4,5 : 1 na svojom pozadí v oboch režimoch. Kontrasty sú v poznámkach k farbám.
- Pri `prefers-reduced-motion` sa nič nepreklápa ani neodohráva, prechody sú okamžité.

## Pohyb

- Tri rýchlosti: `dur-fast` 120 ms (hover), `dur-mid` 240 ms (prechody), `dur-slow` 560 ms (veľké momenty). Tempo webu je 0,8×.
- Jedna krivka pre všetko: `ease-standard`.
- Preklápanie slov v hero (WordFlip): `dur-flip` 750 ms, pauza `pause-flip` 2,1 s, hĺbka `flip-depth` 80 px, posun `flip-offset` 35 %. Staré slovo odchádza hore, nové prichádza zdola. Slová: vyvíjame, testujeme, nasadzujeme. Bez blikajúceho kurzora.
- Písanie riadku kódu: `stagger-type` 120 ms na prvok.

## Hravé interakcie

Päť pravidiel pre každý hravý moment:

1. Ukáže niečo pravdivé: ľudí, čísla, proces alebo kód. Nič nie je len dekorácia.
2. Nič neblokuje. Obsah a tlačidlá fungujú aj bez interakcie, na mobile hover nahrádza klik.
3. Na obrazovke je najviac jeden moment naraz.
4. Používa len systém: `accent`, modul, tri rýchlosti, písanie kódu.
5. Humor zo seba, nie z iných.

Schválené: Celé naše štúdio, Odohrané čísla, žiara modulu pozadia pod kurzorom a na mobile pod prstom, Skrytý terminál (kláves /), chybová stránka 404 s chýbajúcim riadkom, kopírovanie e-mailu na klik.

## Ikonografia

Ikony nepoužívame. Značky a stavy robí modul (bodka, palička), šípky a lomky sú znaky písma. Žiadne emoji.

## Logo

Znak z bodiek a paličiek v bielej a v `accent` na čiernej je v skupine Logos. Zatiaľ je len ako JPG na čiernom pozadí: v lište a pätičke ho orezáva `db-mark` a čierne pozadie skryje `mix-blend-mode: lighten`. Na zelenej ploche JPG nepoužívajte. Wordmark DoubleB sa sádza v Schibsted Grotesk, tučná, vedľa znaku.
