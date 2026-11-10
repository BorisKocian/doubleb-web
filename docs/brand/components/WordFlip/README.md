# WordFlip

Hero veta, v ktorej sa posledné slovo preklápa: nové slovo čaká za aktuálnym, v polovici pohybu si vymenia miesto a staré skončí za novým.

- Veta: „Kým iní ešte naceňujú, my už [vyvíjame / testujeme / nasadzujeme].“ Slová dodáva autor stránky, najlepšie dve až štyri a podobne dlhé.
- Nadpis v štýle `hero` (Schibsted Grotesk, tučná), preklápané slovo v `accent`, zvyšok v `ink`.
- Jedno preklopenie trvá `dur-flip`, medzi preklopeniami je pauza `pause-flip`, krivka `ease-standard`.
- Hĺbka `flip-depth`, vertikálny posun `flip-offset`. Smer: staré slovo odchádza hore, nové prichádza zdola.
- Bez blikajúceho kurzora. Na stránke je to jediný preklápaný prvok.
- Prístupnosť: čítačka obrazovky číta len aktuálne slovo. Pri `prefers-reduced-motion` ostane prvé slovo a nepreklápa sa.
- Pod hero vždy subline s dôkazom v štýle `lead` a farbe `ink-soft`.
