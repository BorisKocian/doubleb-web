# ContactForm

Kontaktná sekcia: výzva, sľub odozvy, e-mail na klik a krátky formulár s polami ako podčiarknuté riadky.

- Polia `db-field` s popisom v štýle `label` a `muted`. Vstup `db-input`: bez rámika, spodná čiara `muted` (kontrast nad 3 : 1), text 18 px v `ink`, placeholder v `muted`.
- Zameranie: spodná čiara 2 px v `accent`. Chyba (`db-field--error`, `aria-invalid`): čiara 2 px v `ink` a správa v štýle `label` a `ink` začínajúca „// “. Červenú nepoužívame, v palete nie je.
- Výber z možností: `db-chip` s `aria-pressed`. Vybraná možnosť má rámik a paličku v `accent`.
- Najviac štyri polia. Odoslanie je hlavné tlačidlo `db-btn--primary db-btn--lg` s textom, čo sa stane („Odoslať zadanie“).
- Sľub odozvy pri formulári musí sedieť s procesom: najprv hovor, rámcová cena do 24 hodín po ňom.
- E-mail na klik sa správa ako CopyEmail. Adresa v ukážke je zástupná.
