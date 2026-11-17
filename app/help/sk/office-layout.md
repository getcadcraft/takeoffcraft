---
title: "Kancelárske rozloženie: zoskupenie, medzisúčty, názov a nadpisy z vašich predvolených pravidiel"
summary: "Zapnite doplnok Predvolené pravidlá a odhad, množstvá podľa listu, exporty aj to, čo číta asistent, sa riadia rozložením tabuliek vašej kancelárie, rovnakým, aké používajú tabuľky v BimCraft."
keywords: kancelárska norma, kancelárske rozloženie, predvolené pravidlá, doplnok, rozloženie tabuliek, zoskupiť podľa typu, zoskupiť podľa listu, medzisúčet, súčty, názov, nadpisy, veľké písmená, rozloženie odhadu, rozloženie exportu, nastavenia
from: cfd2f30a
---

## Čo urobíte

Nechajte TakeoffCraft rozložiť jeho tabuľky tak, ako ich vydáva vaša kancelária, bez nastavovania v každom výkaze. Rozloženie sa nastaví raz v Predvolené pravidlá a platí pre všetky aplikácie na tomto počítači: čo nastavíte v BimCraft alebo CadCraft, používa TakeoffCraft, a naopak.

## Postup

1. Otvorte **Nastavenia › Doplnky** a zapnite **Predvolené pravidlá**. Je vypnuté, kým ho nezapnete; ak je vypnuté alebo nič nie je nastavené, TakeoffCraft je presne taký, aký bol.
2. Otvorte **Nastavenia › Globálne › Predvolené pravidlá** a nájdite **Rozloženie tabuliek (kancelárska norma)**:

| Pravidlo | Čo robí v TakeoffCraft |
|---|---|
| Zoskupiť tabuľky podľa | **Typ** zoskupí odhad podľa typu položky (Lineárne, Plocha, Počet, Typované množstvo). **Úroveň** zoskupí množstvá podľa listu podľa ich listu. **Miestnosť** a **Bez zoskupenia** nechajú obe nezoskupené |
| Súčty v tabuľkách | **Medzisúčet pod každou skupinou a celkový súčet** pridá medzisúčet pod každú skupinu. Celkový súčet zákazky ostáva vždy |
| Názov tabuľky | Riadok nad tabuľkou, napríklad `{schedule}: kancelárske rozloženie` |
| Nadpisy stĺpcov | Ako napísané, VEĽKÝMI PÍSMENAMI alebo S veľkými začiatočnými písmenami |

3. Zatvorte Nastavenia. Tabuľky sa hneď prispôsobia.

## Čo rozloženie ovplyvní

- **Množstvá › Podľa položky** a **Podľa listu**: nadpisy skupín, medzisúčet pod každou skupinou, názov a štýl nadpisov. Riadok pod názvom hovorí, ktoré časti nastavila vaša kancelárska norma. Riadky sú tie isté: sadzby a odpad do nich stále zadávate a kliknutím na čísla vyberiete ich značky. Komponent alebo druhá podmienka zostane pod svojou položkou.
- **Exportovaný odhad** (CSV a XLSX): tie isté skupiny a medzisúčty. V zošite je medzisúčet vzorec `SUBTOTAL` nad svojou skupinou a celkový súčet je tiež taký, takže nič sa nepočíta dvakrát.
- **Čo číta asistent**: `takeoff_estimate` a `takeoff_quantities` (podľa listu) pridajú blok `layout` so skupinami, riadkami a medzisúčtami a uvedú, ktoré časti nastavila kancelária.

## Čo si ponecháva vlastné

- **Množstvá › Podľa oblasti** má vlastné zoskupenie (podľa oblasti ponuky) a ponecháva si ho.
- **Celkový súčet zákazky**, prirážky súhrnu ponuky a alternatívy sa nezoskupujú nanovo.
- Zoskupenie, pre ktoré tabuľka nemá stĺpec, sa vynechá: odhad nemá úroveň a množstvá podľa listu nemajú typ.

## Dobré vedieť

- Pravidlá sa uchovávajú v tomto prehliadači pre každú aplikáciu CadCraft a putujú v súbore Predvolené pravidlá (**Uložiť do súboru** / **Načítať zo súboru** na tom istom mieste), takže kancelária zdieľa jeden súbor.
- Odhad exportovaný ako CSV so skupinami slúži na čítanie. Ak ho chcete vrátiť ako cenovú knižnicu, exportujte ho bez nastaveného zoskupenia.
- Strana BimCraft rovnakej normy: tabuľky, nastavenia a exporty. TakeoffCraft zatiaľ nemá vlastné pravidlá, takže v Nastavenia › TakeoffCraft nie je sekcia Predvolené pravidlá.
