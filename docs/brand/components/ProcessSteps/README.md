# ProcessSteps

Časová os spolupráce s konkrétnymi lehotami a poznámka, z čoho vzniká rýchla cena.

- Obal `db-steps` (päť stĺpcov, na mobile pod sebou), krok `db-step`. Hotové alebo aktívne kroky majú `db-step--on`: horná čiara v `accent`, ostatné v `subtle`.
- Lehota v štýle `label` a `accent` (napr. „1. deň“, „do 24 h“), názov kroku v Schibsted Grotesk 22 px, popis v štýle `small` a `ink-soft`.
- Lehoty sú len tie, ktoré naozaj dodržíme. „Do 7 dní“ vždy s dovetkom, že platí pre expresné projekty.
- Pod osou vždy `db-note` s vysvetlením, prečo je cena rýchla. Rýchla cena bez vysvetlenia pôsobí ako prepis zadania.
- Na stránke s procesom môže poradie krokov ožiť ako DiffProgress pri scrollovaní.
