# CaseCard

Karta projektu: odtlačok projektu, typ projektu, jedno číslo, dve vety a odkaz na celý príbeh.

- Obal `db-cases` (tri stĺpce, na mobile jeden), karta `db-case` je celá odkaz. Plocha `surface`, rámik `line`, pri prejdení myšou `muted`.
- Odtlačok v `db-case__fp`: sedem riadkov z ProjectFingerprint (z rovnakého slugu vždy rovnaký vzor).
- Typ projektu v štýle `label` a `muted`. Meno klienta len so súhlasom, dovtedy popis („Aplikácia pre fitness centrá“).
- Jedno číslo v štýle `number` a `accent` s popisom v štýle `label`. Číslo musí byť doložiteľné.
- Text v `ink-soft`, najviac dve vety. Štítky `db-tag`, najviac tri.
- Odkaz `db-case__more` s bodkou, ktorá sa pri prejdení myšou natiahne na paličku.
