---
title: "Knjižnica cijena"
summary: "Čuvajte stavke, stope i sklopove u knjižnici, uvezite je iz CSV-a ili prošle procjene, dodajte stavke iz nje u bilo koji predmjer i ažurirajte cijene predmjera iz nje."
keywords: "knjižnica, paketi struke, cjenik, baza troškova, uvoz csv, stope, sklopovi, ponovna uporaba, predlošci stavki, ažuriraj cijene, ponovno cijenjenje"
from: 37356c68
---

**Knjižnica cijena** čuva stavke koje koristite iz posla u posao: njihovu vrstu, jedinicu, visinu, gubitak, stope za materijal i rad te njihov sklop. Čuva se u ovom pregledniku, odvojeno od svakog predmjera, pa je može koristiti svaki predmjer koji ovdje otvorite.

Otvorite je s {{ui:Knjižnica}} na vrhu ploče {{ui:Stavke}}.

## Punjenje knjižnice

- {{ui:Uvezi CSV…}} čita proračunsku tablicu spremljenu kao CSV (vidi stupce u nastavku). Stavke čiji su naziv i vrsta već u knjižnici se zamjenjuju; ostale se dodaju. Redci koje ne može pročitati se preskaču, a kaže koji su i zašto.
- {{ui:Dodaj stavke ovog predmjera}} kopira svaku stavku otvorenog predmjera u knjižnicu, sa stopama i sklopom (ne s oznakama).
- Procjena u CSV-u koju TakeoffCraft izvozi ([Izvoz procjene](topic:export-estimate)) uvozi se kakva jest: cijene prošlog posla služe kao početak sljedećeg.

- {{ui:Paketi struke…}} dodaje besplatne sklopove za struku, poput gipsanih radova, elektroinstalacija ili betona, bez cijena. Vidi [Paketi struke](topic:trade-packs).

{{ui:Izvezi CSV}} sprema knjižnicu kao CSV, za čuvanje kopije, uređivanje u tabličnom programu ili za davanje kolegi. {{ui:Očisti}} je prazni (kliknite dvaput).

:::note
Knjižnica živi u pohrani ovog preglednika. Drugi preglednik, drugo računalo ili privatni prozor imaju svoju (ili nikakvu). Izvezite je da je premjestite.
:::

## Koristite je u predmjeru

- Označite stavke (upišite u {{ui:Pronađi u knjižnici}} da suzite popis) i odaberite {{ui:Dodaj u predmjer}}. Dodaju se sa svojim sklopovima u jednom koraku koji {{key:Mod+Z}} poništava. Naziv koji već postoji u predmjeru dobiva broj, poput `Carpet (2)`.
- {{ui:Ažuriraj cijene}} daje stavkama predmjera gubitak i stope iz knjižnice, za svaku stavku čiji se naziv i vrsta podudaraju sa stavkom knjižnice, a isto i za sastavne dijelove sklopa istog naziva. Visine, jedinice i formule ostaju kakve jesu. Jedan {{key:Mod+Z}} vraća sve stare cijene.

## Stupci CSV-a

Prvi redak imenuje stupce, bilo kojim redoslijedom; drugi stupci se zanemaruju. Nazivi stupaca i vrijednosti koje se upisuju ostaju kao u aplikaciji.

| Stupac | Što ide u njega |
|---|---|
| Item (or Name) | Naziv stavke. Obavezno. |
| Type | Linear, Area ili Count (LF, SF i EA također rade). Ako je prazno, odlučuje jedinica. |
| Unit | LF ili m; SF, SY ili m²; EA. Prazno: uobičajena jedinica vrste. |
| Waste % | `10` ili `10%`. |
| Material per unit, Labor per unit | Stope poput `2.10` ili `$1,250`. |
| Height (or Depth) | `9'-0"`, `9` ili `2.7` za metričke jedinice. |
| Component, Formula | Redak s nazivom sastavnog dijela (ili vrstom `Component`) je dio sklopa stavke iznad njega. Njegova jedinica, gubitak i stope su njegovi vlastiti; njegova formula koristi slova stavke, vidi [Sklopovi i formule](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Zarezi, točka-zarezi ili tabulatori između stupaca svi rade.
