// Všetky texty pre slovenčinu. Importujte z komponentov, nepíšte texty priamo do JSX.

export const content = {
  nav: {
    links: [
      { label: "Čo staviame", href: "#co-staviame" },
      { label: "Projekty", href: "#projekty" },
      { label: "Ako pracujeme", href: "#ako-pracujeme" },
      { label: "O nás", href: "#o-nas" },
    ],
    cta: "Napíšte nám",
    ariaMenu: "Menu",
    ariaClose: "Zavrieť menu",
  },

  hero: {
    eyebrow: "vývojárske štúdio zo Žiliny",
    headline: "Kým iní ešte naceňujú, my už",
    words: ["vyvíjame.", "testujeme.", "nasadzujeme."],
    lead: "Pre tímy, ktoré nemajú vlastných vývojárov. Navrhneme a naprogramujeme ich od začiatku a ostaneme pri nich aj po spustení.",
    primaryCta: "Napíšte nám",
    secondaryCta: "Pozrieť reálny projekt",
    proof: [
      {
        number: "10",
        unit: " dní",
        desc: "Prvá verzia menšieho projektu v Exprese.",
      },
      {
        number: "24",
        unit: " h",
        desc: "Rámcovú cenu v Exprese máte po úvodnom hovore.",
      },
      {
        number: "10",
        unit: " dní",
        desc: "CEE od prvého hovoru po spustenie.",
        link: { label: "Pozrieť príbeh", href: "#projekty" },
      },
    ],
  },

  services: {
    eyebrow: "01 / čo staviame",
    heading: "Menšie aplikácie a produkty pre startupy.",
    lead: "Pre tímy, ktoré nemajú vlastných vývojárov. Navrhneme a naprogramujeme ich od začiatku a ostaneme pri nich aj po spustení.",
    items: [
      {
        no: "01",
        title: "Menšie aplikácie",
        desc: "Klientske portály, rezervácie, interné nástroje. Web, iOS aj Android z jedného kódu.",
        tags: ["Next.js", "Capacitor"],
      },
      {
        no: "02",
        title: "Produkty pre startupy",
        desc: "Prvá verzia, s ktorou idete k používateľom alebo investorom. Ďalšie funkcie pridávame podľa toho, čo používatelia naozaj používajú.",
        tags: ["MVP", "Express"],
      },
      {
        no: "03",
        title: "Prezentačné weby, ktoré niečo robia",
        desc: "Viac stránok, vlastné interakcie, obsah, ktorý si spravujete sami. Ako tento web.",
        tags: ["Next.js", "interakcie"],
      },
      {
        no: "04",
        title: "Dlhodobý vývoj",
        desc: "Ostaneme aj po spustení. Aplikáciu rozvíjame a staráme sa o ňu za mesačný paušál.",
        tags: ["paušál", "údržba"],
      },
    ],
    note: "// Nerobíme rozsiahle firemné systémy ani projekty napojené na hardvér. Jednostránkový web vám spraví aj šablóna.",
  },

  projects: {
    eyebrow: "02 / projekty",
    items: [
      {
        slug: "cee",
        tab: "01 / platforma súťaže",
        type: "platforma na prihlášky a hodnotenie súťaže CEE Startup Voucher, pre MSIC a Inoviu",
        title: "Prihlášky do CEE Startup Voucher",
        desc: "Za 10 dní sme z prvých hovorov definovali MVP, postavili ho, otestovali a spustili, takže prihlášky sa otvorili načas. Ďalšie dva mesiace sme pridávali hodnotenie s pomocou AI, porotu a viac kôl súťaže.",
        metrics: [
          { value: "10", unit: "dní", label: "od prvého hovoru po spustenie prihlášok" },
          { value: "+2", unit: "mesiace", label: "hodnotenie s pomocou AI, porota a viac kôl" },
        ],
        tags: ["Next.js", "AI hodnotenie"],
        timeline: ["Prvý hovor", "Definícia MVP", "Vývoj a testovanie", "Spustenie"],
        placeholder: "CEE Startup Voucher",
        link: null as null | { href: string; label: string },
      },
      {
        slug: "smartgym",
        tab: "02 / fitness aplikácia",
        type: "aplikácia pre fitness centrá",
        title: "SmartGym",
        desc: "Web, iOS a Android z jedného kódu. Na aplikácii pracujeme od januára.",
        metrics: [
          { value: "10+", unit: "mesiacov", label: "vývoja" },
          { value: "3", unit: "platformy", label: "web, iOS a Android z jedného kódu" },
        ],
        tags: ["Capacitor", "App Store"],
        timeline: null as null | string[],
        placeholder: "SmartGym",
        link: null as null | { href: string; label: string },
      },
      {
        slug: "iudicata",
        tab: "03 / vlastný produkt",
        type: "vlastný produkt",
        title: "Iudicata",
        desc: "Vyhľadávanie v judikatúre a legislatíve s pomocou AI. Postavili sme ho celý sami, od nápadu po produkčnú verziu. Vývoj sme zastavili, keď trh obsadili silnejší hráči. Povedať si to včas je tiež zručnosť.",
        metrics: [
          { value: "AI", unit: "", label: "vyhľadávanie v judikatúre a legislatíve" },
          { value: "0→1", unit: "", label: "od nápadu po produkčnú verziu" },
        ],
        tags: ["AI", "vyhľadávanie"],
        timeline: null as null | string[],
        placeholder: "Iudicata",
        link: { href: "https://iudicata.ai", label: "iudicata.ai" } as null | { href: string; label: string },
      },
    ],
  },

  process: {
    eyebrow: "03 / ako pracujeme",
    heading: "Dve tempá. Express, keď sa ponáhľate.",
    lead: "Začína sa vždy rovnako, úvodným hovorom zadarmo. Potom si vyberiete tempo.",
    express: {
      tag: "DoubleB Express",
      title: "Keď to potrebujete hneď.",
      items: [
        "Rámcová cena do 24 hodín po hovore",
        "Začneme aj pred podpisom",
        "Prvá verzia menšieho projektu do 10 pracovných dní",
        "Dohodnutý termín garantujeme",
      ],
      cta: "Chcem Express",
    },
    standard: {
      title: "Keď máte čas premyslieť funkcie.",
      items: [
        "Analýza a cena do 48 hodín po hovore",
        "Funkcie definujeme spolu",
        "Potom podpíšeme a začneme",
      ],
      cta: "Dohodnúť hovor",
    },
    note: "// Rámcovú cenu pripravuje ten z nás, kto bude projekt programovať, z toho, čo sme si povedali na hovore.",
  },

  about: {
    eyebrow: "04 / o nás",
    headingBefore: "Váš produkt pozná ",
    headingReveal: "celé naše štúdio",
    headingAfter: ". Obaja.",
    ariaReveal: "Zobraziť fotky celého štúdia",
    lead: "DoubleB sú dve B: Boris a Barbora. Sme manželia a projekty robíme spolu, preto každý z nás pozná celý projekt, produkt aj kód. Prešli sme cestu od študentov cez zamestnancov po freelancerov. DoubleB je ďalší krok: štúdio, ktoré chce rásť.",
    personItems: [
      "Programuje web aj mobil",
      "Rozumie produktu",
      "Hovorí priamo s klientom",
      "Pozná celý projekt",
    ],
    note: "// Áno, zoznamy sú rovnaké.",
  },

  contact: {
    eyebrow: "05 / kontakt",
    heading: "Napíšte, čo potrebujete postaviť.",
    lead: "Ozveme sa do jedného pracovného dňa a dohodneme úvodný hovor.",
    emailLabel: "kliknutím skopírujete",
    emailLabelMobile: "ťuknutím otvoríte poštu",
    emailCopied: "// skopírované",
    form: {
      name: "Meno",
      email: "E-mail",
      message: "Čo má aplikácia robiť?",
      messagePlaceholder: "Pár viet stačí. Pre koho je a dokedy ju potrebujete.",
      expressLabel: "Potrebujem Express",
      expressNote: "rámcová cena do 24 hodín po hovore",
      submit: "Odoslať",
      success: "// Máme to. Ozveme sa do jedného pracovného dňa.",
      errorPrefix: "// Niečo sa pokazilo. Skúste nám napísať priamo na ",
    },
  },

  footer: {
    tagline: "Vývojárske štúdio zo Žiliny.",
    navLabel: "Navigácia",
    links: [
      { label: "Čo staviame", href: "#co-staviame" },
      { label: "Projekty", href: "#projekty" },
      { label: "Ako pracujeme", href: "#ako-pracujeme" },
      { label: "O nás", href: "#o-nas" },
    ],
    contactLabel: "Kontakt",
    status: "web beží, my tiež",
    copyright: "© 2026 DoubleB dev s.r.o.",
    privacy: { label: "Ochrana súkromia", href: "/ochrana-sukromia" },
  },

  notFound: {
    code: "404",
    title: "Tento riadok sme ešte nenapísali.",
    back: "Späť na úvod",
  },
};
