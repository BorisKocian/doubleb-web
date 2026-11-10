# CodeLine

Riadok kódu z bodiek a paličiek, ktorý oddeľuje sekcie alebo uvádza štítok sekcie.

- Riadok: `db-row` s prvkami `db-dot` (bodka `module-unit`) a `db-pill` (palička `module-pill`), medzera `module-gap`, zaoblenie `radius-pill`. Odsadenie `db-in1`, `db-in2` o `module-indent`.
- Každý riadok má aspoň jednu paličku a najviac jeden prvok `db-on` v `accent`, ostatné `code-bar`. Neaktívne prvky `db-off` v `subtle`.
- Oddeľovač so štítkom: `db-eyebrow`. Za riadkom pokračuje čiara `line` po okraj obsahu; štítok v štýle `label` a `muted`, napríklad „02 / ako pracujeme“.
- Veľký modul `db-row--lg` (`module-unit-lg`, `module-pill-lg`, `module-gap-lg`) len mimo bežného textu: cover, citát, 404, merch.
- Vzor riadku vyberá autor stránky, nikdy náhodne pri každom načítaní. Nikdy nie raster bodiek v pozadí.
