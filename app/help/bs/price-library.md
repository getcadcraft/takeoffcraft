---
title: Biblioteka cijena
summary: Čuvajte stavke, stope i sklopove u biblioteci, uvezite je iz CSV-a ili ranije procjene, dodajte stavke iz nje u bilo koji predmjer i ažurirajte cijene predmjera iz nje.
keywords: biblioteka, paketi za struku, cjenovnik, knjiga cijena, baza troškova, uvoz CSV, stope, sklopovi, ponovna upotreba, šablon stavke, ažuriranje cijena, ponovno određivanje cijena
from: 37356c68
---

**Biblioteka cijena** čuva stavke koje koristite iz posla u posao: njihov tip, jedinicu, visinu, otpad, stope za materijal i rad, i njihov sklop. Čuva se u ovom pregledniku, odvojeno od svakog predmjera, pa je može koristiti svaki predmjer koji otvorite ovdje.

Otvorite je pomoću {{ui:Library}} na vrhu panela {{ui:Items}}.

## Punite biblioteku

- {{ui:Import CSV…}} čita tabelu sačuvanu kao CSV (vidi kolone ispod). Stavke čiji su naziv i tip već u biblioteci se zamjenjuju; ostale se dodaju. Redovi koje ne može pročitati se preskaču, a program kaže koji su i zašto.
- {{ui:Add this takeoff's items}} kopira svaku stavku otvorenog predmjera u biblioteku, sa njenim stopama i sklopom (ne sa oznakama).
- CSV procjene koju TakeoffCraft izvozi ([Izvoz procjene](topic:export-estimate)) uvozi se kakav jeste: cijene posljednjeg posla služe kao polazna tačka za sljedeći.
- {{ui:Trade packs…}} dodaje besplatne sklopove za struku, kao što su gips-karton, elektro ili beton, bez cijena. Vidi [Paketi za struku](topic:trade-packs).

{{ui:Export CSV}} čuva biblioteku kao CSV, da zadržite kopiju, da je uredite u tabelarnom programu ili da je date kolegi. {{ui:Clear}} je isprazni (kliknite dvaput).

:::note
Biblioteka živi u memoriji ovog preglednika. Drugi preglednik, drugi računar ili privatni prozor imaju svoju (ili nijednu). Izvezite je da je premjestite.
:::

## Koristite je u predmjeru

- Označite stavke (ukucajte u {{ui:Find in the library}} da suzite listu) i izaberite {{ui:Add to takeoff}}. Dodaju se sa svojim sklopovima u jednom koraku koji {{key:Mod+Z}} poništava. Naziv koji već postoji u predmjeru dobija broj, kao `Tepih (2)`.
- {{ui:Update prices}} daje stavkama predmjera otpad i stope iz biblioteke, za svaku stavku čiji se naziv i tip podudaraju sa stavkom iz biblioteke, i isto za komponente sklopa istog naziva. Visine, jedinice i formule ostaju kakve jesu. Jedno {{key:Mod+Z}} vraća sve stare cijene.

## Kolone CSV-a

Prvi red imenuje kolone, bilo kojim redom; ostale kolone se ignorišu.

| Kolona | Šta ide u nju |
|---|---|
| Item (or Name) | Naziv stavke. Obavezno. |
| Type | Linear, Area ili Count (LF, SF i EA također rade). Ako je prazno, odlučuje jedinica. |
| Unit | LF ili m; SF, SY ili m²; EA. Prazno: uobičajena jedinica tipa. |
| Waste % | `10` ili `10%`. |
| Material per unit, Labor per unit | Stope poput `2.10` ili `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, ili `2.7` za metričke jedinice. |
| Component, Formula | Red sa nazivom komponente (ili tipom `Component`) je dio sklopa stavke iznad njega. Njegova jedinica, otpad i stope su njegovi; njegova formula koristi slova stavke, vidi [Sklopovi i formule](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Pregradni zid tip A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Podkonstrukcija 16 in. o.c.,ceil(L / 1.333) + N
VCT podna obloga,Area,SF,5,1.85,1.10,,,
Dupleks utičnice,Count,EA,,3.50,45,,,
```

Zarezi, tačke sa zarezom ili tabulatori između kolona – svi rade.
