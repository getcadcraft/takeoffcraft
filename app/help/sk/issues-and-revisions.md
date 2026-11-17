---
title: Problémy, revízie a zoznam zmien výkresov
summary: Veďte jednu históriu problémov spolu s modelom architekta. Načítajte problémy, zapisujte pokyny zo stavby, dielenské výkresy a prepojené modely k problému a čítajte zoznam zmien výkresov.
keywords: problém, revízia, revízie, zoznam zmien, zoznam zmien výkresov, register výkresov, pokyn na stavbe, dielenský výkres, prepojený model, verejná súťaž, stavba, história problémov, výkaz výmer, množstvá
from: 8d8f6e68
---

## Čo budete robiť

Pracujte s rovnakou históriou problémov ako zvyšok tímu. Pozrite si, ktoré listy boli vydané v akej revízii, a udalosti na stavbe zapisujte k problému, ku ktorému patria.

## Postup

1. Otvorte **Problémy a revízie**.
2. Zvoľte **Načítať históriu problémov** a vyberte súbor `.issues.json` uložený z BimCraft alebo inej aplikácie. Jeho problémy a záznamy sa pridajú k vašim. Nič sa nenahrádza.
3. Zvoľte **Pridať záznam** pre pokyn na stavbe, dielenský výkres, sadu poznámok, prepojený model alebo poznámku. Vyberte problém, ku ktorému patrí, a jeho stav. Vybraný súbor sa zaznamená podľa názvu, veľkosti a SHA-256; súbor zostane tam, kde je.
4. **Zoznam zmien výkresov** zobrazuje jeden riadok pre každý list a jeden stĺpec pre každý problém. Revízia v zátvorkách bola vydaná znova bez zmeny.
5. **Stiahnuť zoznam zmien (CSV)** uloží problémy, tabuľku listov a záznamy. **Uložiť históriu problémov** zapíše súbor, ktorý čítajú ostatné aplikácie.

## Dobré vedieť

- **Zaznamenať problém** označí vaše zmerané listy, napríklad pri výkaze množstiev. **Zmeny od** potom ukáže, ktoré listy boli zmerané znova po tomto probléme.
- História sa ukladá do súboru výkazu. Každú zmenu možno vrátiť jedným krokom späť.
- Opakované načítanie toho istého súboru nič nepridá dvakrát. Ak dve kópie obsahujú rovnaký záznam, ponechá sa novšia.
