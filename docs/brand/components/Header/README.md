# Header

Horná lišta so znakom, menu a jedným hlavným tlačidlom; na mobile sa menu schová za ikonu z dvoch riadkov kódu.

- Obal: `db-nav` (prilepená hore, výška `nav-height`, spodná čiara `line`). Obsah v `db-wrap`.
- Znak: `db-mark` orezáva JPG zo skupiny Logos na samotný znak. `mix-blend-mode: lighten` skryje čierne pozadie JPG na čiernej. Keď bude SVG, nahraďte ho a orezanie zrušte. V hlasnom režime JPG nefunguje, treba variant na zelenú.
- Menu: `db-menu`, najviac päť položiek. Aktuálna stránka má `aria-current="page"` a pred textom paličku v `accent`. Pri prejdení myšou sa ukáže palička v `code-bar`.
- Hlavné tlačidlo vpravo: `db-btn db-btn--primary db-nav__cta`. Na lište je vždy len jedno.
- Mobil (pod 820 px alebo trieda `db-nav--compact`): ikona `db-burger` sú dva riadky modulu, po otvorení sa horný odsadí o `module-indent`. Panel `db-drawer` má veľké odkazy v Schibsted Grotesk s číslom v JetBrains Mono a `accent`.
- Položky menu sú zatiaľ návrh. Určí ich informačná štruktúra webu.
