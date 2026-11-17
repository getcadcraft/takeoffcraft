---
title: Biblioteka cena
summary: Čuvaj stavke, stope i sklopove u biblioteci, uvezi je iz CSV-a ili ranijeg predračuna, dodaj stavke iz nje u bilo koji predmer i ažuriraj cene predmera iz nje.
keywords: biblioteka, paketi za struku, cenovnik, knjiga cena, baza troškova, uvoz csv, stope, sklopovi, ponovna upotreba, stavke šablona, ažuriraj cene, ponovno cenjenje
from: 37356c68
---

**Biblioteka cena** čuva stavke koje koristiš posao za poslom: njihov tip, jedinicu, visinu, otpad, stope za materijal i rad, i njihov sklop. Čuva se u ovom pregledaču, odvojeno od predmera, pa svaki predmer koji otvoriš ovde može da je koristi.

Otvori je sa {{ui:Biblioteka}} na vrhu panela {{ui:Stavke}}.

## Napuni biblioteku

- {{ui:Uvezi CSV…}} čita tabelu sačuvanu kao CSV (vidi kolone ispod). Stavke čiji su naziv i tip već u biblioteci se zamenjuju; ostale se dodaju. Redovi koje ne može da pročita se preskaču, a kaže koji su i zašto.
- {{ui:Dodaj stavke ovog predmera}} kopira svaku stavku otvorenog predmera u biblioteku, sa njenim stopama i sklopom (ne i sa oznakama).
- CSV procene koju TakeoffCraft izvozi ([Izvezi procenu](topic:export-estimate)) uvozi se onakav kakav je: cene prošlog posla su polazna tačka za sledeći.

- {{ui:Paketi za struku…}} dodaje besplatne sklopove za struku, kao što su gips-karton, elektro ili beton, bez cena. Pogledaj [Paketi za struku](topic:trade-packs).

{{ui:Izvezi CSV}} snima biblioteku kao CSV, da zadržiš kopiju, izmeniš je u proračunskoj tabeli ili je daš kolegi. {{ui:Isprazni}} je prazni (klikni dvaput).

:::note
Biblioteka živi u skladištu ovog pregledača. Drugi pregledač, drugi računar ili privatni prozor imaju svoju (ili nemaju je). Izvezi je da je premestiš.
:::

## Koristi je u predmeru

- Označi stavke (ukucaj u {{ui:Pronađi u biblioteci}} da suziš spisak) i izaberi {{ui:Dodaj u predmer}}. Dodaju se sa svojim sklopovima u jednom koraku koji {{key:Mod+Z}} poništava. Naziv koji već postoji u predmeru dobija broj, kao `Tepih (2)`.
- {{ui:Ažuriraj cene}} daje stavkama predmera otpad i stope iz biblioteke, za svaku stavku čiji se naziv i tip poklapaju sa stavkom biblioteke, i isto za komponente sklopa istog naziva. Visine, jedinice i formule ostaju kakve jesu. Jedan {{key:Mod+Z}} vraća sve stare cene.

## Kolone CSV-a

Prvi red imenuje kolone, bilo kojim redom; ostale kolone se ignorišu.

| Kolona | Šta ide u nju |
|---|---|
| Item (or Name) | Naziv stavke. Obavezno. |
| Type | Linear, Area ili Count (rade i LF, SF i EA). Ako je prazno, odlučuje jedinica. |
| Unit | LF ili m; SF, SY ili m²; EA. Prazno: uobičajena jedinica tog tipa. |
| Waste % | `10` ili `10%`. |
| Material per unit, Labor per unit | Stope kao `2.10` ili `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, ili `2.7` za metričke jedinice. |
| Component, Formula | Red sa nazivom komponente (ili tipom `Component`) je deo sklopa stavke iznad njega. Njegova jedinica, otpad i stope su njegovi; njegova formula koristi slova stavke, pogledaj [Sklopovi i formule](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Zarezi, tačka-zarezi ili tabulatori između kolona rade podjednako.
