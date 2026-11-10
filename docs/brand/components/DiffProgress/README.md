# DiffProgress

Postup projektu zobrazený ako git diff: hotové kroky pribudnú so znamienkom + a zelenou paličkou.

- Hotový krok: znamienko + v `accent` (JetBrains Mono), riadok s prvou paličkou v `accent` a druhou v `code-bar`, text v `ink`.
- Budúci krok: bodka a palička v `subtle`, text v `muted`. Každý riadok má paličku.
- Prechod medzi stavmi trvá `dur-mid` s krivkou `ease-standard`.
- Kroky pre web (proces DoubleB): Úvodný hovor, Rámcová cena do 24 h, Potvrdenie, Prvá verzia. Poskytuje ich autor stránky.
- Na webe sa kroky dopĺňajú pri scrollovaní, nie v slučke. Pri `prefers-reduced-motion` sa zobrazia hneď všetky.
