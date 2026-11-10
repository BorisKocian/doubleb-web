# ProjectFingerprint

Odtlačok projektu: vzor siedmich riadkov kódu vypočítaný z názvu projektu, rovnaký všade, kde sa projekt ukáže.

- Vstup je slug projektu. Z neho hash určí odsadenie (0 až 2 × `module-indent`), počet prvkov v riadku (1 až 3) a dĺžku každého prvku (`module-unit` alebo `module-pill`).
- Zhruba v každom druhom riadku je jeden prvok v `accent`, ostatné `code-bar`. Každý riadok má aspoň jednu paličku.
- Ten istý slug dá vždy ten istý vzor. Použitie: obálka prípadovej štúdie, náhľad pri zdieľaní odkazu, nálepka pre klienta.
- Klientov, ktorých zatiaľ nemenujeme verejne, označujeme popisom a neutrálnym slugom (napr. `fitness-app`). Po súhlase klienta sa slug zmení a s ním aj vzor, preto ho meníme len raz.
