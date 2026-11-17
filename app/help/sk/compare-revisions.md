---
title: Porovnanie revidovaného listu a presun výkazu výmer
summary: Preložte starý list cez jeho revíziu, zarovnajte ich, pozrite, čo sa zmenilo, a presuňte výkaz výmer na nový list so značkami na kontrolu označenými.
keywords: revízia, revidovaný, porovnanie, prekrytie, starý, nový, zmeny, dodatok, oznámenie, znovu vydanie, presun výkazu, prenos, prenesenie, zarovnanie, označené, kontrola
from: 3a1d9fe0
---

Keď je list znovu vydaný, nemusíte ho znova odmerať. Otvorte starý PDF a nový, porovnajte oba listy a presuňte výkaz výmer. TakeoffCraft označí každú značku, kde sa výkres zmenil, takže tieto skontrolujete a ostatné ponecháte.

## Porovnanie

1. Otvorte oba PDF: starú sadu a revidovanú ({{ui:Otvoriť plány}}; môžu byť v jednom súbore alebo vo viacerých).
2. Zobrazte **nový** list.
3. Vyberte {{ui:Porovnať}} na paneli listu pod výkresom.
4. Vyberte starý list v zozname. TakeoffCraft navrhne list s rovnakým číslom v druhom PDF, alebo rovnakú stranu. Vyberte **Porovnať**.

Starý výkres teraz leží nad novým v červenej farbe. Tam, kde sa oba zhodujú, červené čiary sedia na čiernych; kde sa líšia, vidíte len červené čiary (odstránené) a len čierne čiary (pridané). Pás dole na liste obsahuje kroky nižšie; {{key:Esc}} alebo {{ui:Zavrieť}} ukončí porovnávanie.

## Zarovnanie

Revidované listy sú často vykreslené mierne mimo: posunuté na strane alebo v mierne inej veľkosti. Ak červený výkres nesedí na čiernom, vyberte **Zarovnať podľa dvoch bodov** a kliknite štyrikrát:

1. bod na starom (červenom) výkrese, napríklad stred stĺpa alebo roh budovy,
2. rovnaký bod na novom (čiernom) výkrese,
3. druhý bod na červenom výkrese, ďaleko od prvého,
4. rovnaký bod na čiernom výkrese.

Červený výkres sa posunie, otočí a zmení mierku na čierny. Stavový riadok hovorí, koľkokrát je nový výkres väčší („veľkosť × 1.000“, keď je rovnaký). Priblížte pri výbere bodov: čím presnejšie kliknete, tým lepšie zarovnanie.

## Zistite, čo sa zmenilo

Vyberte **Nájsť zmeny**. TakeoffCraft porovná čiary oboch výkresov: čiary len na starom liste sa zobrazia červeno, čiary len na novom liste sa zobrazia modro a stavový riadok ich spočíta. Čiary posunuté o vlások (nové vykreslenie) sa nepočítajú ako zmeny.

Prechádza aj každú značku na starom liste a počíta tie, ktoré sa nachádzajú tam, kde sa výkres zmenil:

- úsek alebo plocha, keď sa výkres zmenil na jednom z ich koncov alebo rohov, alebo pozdĺž aspoň približne šestiny ich dĺžky;
- počet, keď sa čokoľvek zmenilo hneď vedľa neho.

## Presun výkazu výmer

Vyberte **Presunúť výkaz sem**. Každá značka na starom liste sa presunie na nový cez zarovnanie, v jednom kroku späť. Tie vedľa zmeny sa označia: sú nakreslené s oranžovou aureolou a panel listu ukáže „(n) na kontrolu“.

Ak nový list nemal mierku, prevezme mierku starého listu (upravenú, keď sa výkresy museli zmeniť kvôli zarovnaniu). Ak už mal inú mierku, TakeoffCraft sa najprv opýta: presunuté značky sa merajú v mierke nového listu.

## Kontrola označených značiek

1. Vyberte „(n) na kontrolu“ na paneli listu. Priblíži sa na ďalšiu označenú značku a vyberie ju; jej panel uvedie, prečo je označená.
2. Opravte značku, ak sa výkres pod ňou zmenil (ťahajte jej rohy, pridajte alebo zmažte značky, alebo ju odstráňte a znova nakreslite).
3. Vyberte **Skontrolované** v jej paneli. Označenie zmizne a počet na paneli listu klesne.

Označenia sa ukladajú spolu s výkazom výmer, takže ich môžete skontrolovať neskôr.

:::note
Porovnávanie funguje na vektorových PDF aj na skenoch, lebo porovnáva to, čo je nakreslené. Sken, ktorý je skosený alebo natiahnutý, sa môže zarovnať len približne dvomi bodmi; vtedy skontrolujte ďalšie značky okom.
:::
