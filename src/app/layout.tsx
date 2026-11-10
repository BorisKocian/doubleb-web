import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { site } from "@/config/site";

// Poradie importov je dôležité: tokeny, potom triedy komponentov, potom globálne úpravy.
import "@/styles/tokens.css";
import "@/styles/doubleb.css";
import "./globals.css";

// Písma podľa design systému (docs/brand/README.md, časť Písmo).
// latin-ext kvôli slovenskej diakritike. Premenné --nf-* prepájame na tokeny v globals.css.
const display = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--nf-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--nf-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--nf-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "sk_SK",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sk"
      data-theme="tichy"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="db">{children}</body>
    </html>
  );
}
