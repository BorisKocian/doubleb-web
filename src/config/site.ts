// Jediné miesto pre údaje o firme a odkazy. Hodnoty označené TODO ešte nie sú rozhodnuté.
export const site = {
  name: "DoubleB",
  legalName: "DoubleB dev s.r.o.",
  city: "Žilina",
  title: "DoubleB · vývojárske štúdio zo Žiliny",
  description:
    "Menšie aplikácie a produkty pre startupy. S DoubleB Express máte rámcovú cenu do 24 hodín po prvom hovore.",

  // TODO: doména ešte nie je. Zmeňte aj NEXT_PUBLIC_SITE_URL v .env.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // TODO: e-mail ešte nie je.
  email: "ahoj@doubleb.example",
  // TODO: doplniť IČO.
  ico: "",

  people: {
    boris: { name: "Boris", linkedin: "" /* TODO */, photo: "/team/boris.jpg" },
    barbora: { name: "Barbora", linkedin: "" /* TODO */, photo: "/team/barbora.jpg" },
  },

  links: {
    iudicata: "https://iudicata.ai",
    ceeVoucher: "https://www.ceestartup.network/voucher",
  },
} as const;
