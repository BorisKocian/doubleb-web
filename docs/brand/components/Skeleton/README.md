# Skeleton

Načítavanie obsahu ako riadky kódu, ktoré sa píšu zľava doprava, kým sa nezobrazí skutočný obsah.

- Prvky v `subtle`, dĺžky len `module-unit` a `module-pill`, odsadenie `module-indent`.
- Každý prvok sa objaví za `dur-fast` s oneskorením `stagger-type` za predchádzajúcim.
- Tvar skeletonu zodpovedá obsahu, ktorý príde (nadpis, dva riadky textu, štítok).
- Pri `prefers-reduced-motion` sa skeleton nezobrazuje, rovno sa ukáže obsah.
- Skeleton nikdy nesimuluje načítavanie, ktoré nenastáva. Len skutočné čakanie na dáta.
