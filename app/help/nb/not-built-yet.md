---
title: Hva som ikke er bygget ennå
summary: Mengdeuttaksfunksjoner som denne versjonen ikke har, og hva du kan gjøre i stedet i dag.
keywords: begrensninger, mangler, ikke ennå, veikart, planlagt, løsning, per strekning, sky, skrivebord
from: 94ff90d0
---

TakeoffCraft er under utvikling. Denne listen viser hva den nåværende versjonen ikke gjør, og hvordan du kan løse jobben likevel.

## Måling

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Sette inn et punkt midt i en strekning eller kontur | Slett merket og tegn det på nytt. |
| Boksvalg (vindu) | {{key:Shift}} + klikk på hvert merke, eller {{key:Mod+A}} for alle merkene på arket. Se [Kopier, lim inn og dupliser merker](topic:copy-paste). |
| Rotere, speile eller skalere en innlimt kopi | Lim inn på et ark i samme målestokk og samme retning; tegn resten for hånd. |
| Lese en målestokk fra et skannet ark, eller fra en grafisk målestokklinje | Velg et forvalg, eller kalibrer på lengden av linjen. |
| Mer enn én målestokk per ark (detaljområder, forstørrede planer) | Mål delen i arkets målestokk, og ta av detaljen på sitt eget forstørrede ark hvis settet har et. |

## Poster og priser

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Formler for sammensatte poster som bruker en posts andre typer merker (dørene i et romelement i formlene for etasjen) | Formler bruker hovedtypens summer; pris de andre typene på egne rader. |
| Formler for sammensatte poster som regnes ut strekning for strekning | Formler bruker postens summer; bruk `N` for ekstra per strekning. |
| Formler som bruker en annen posts mengder | Gjenta målingen i den posten, eller regn det ut i regnearkeksporten. |
| Mannskap på komponenter i sammensatte poster, eller en arbeidsdag som ikke er 8 timer | Gi mannskapet til posten; regn mannskapsdager for en annen dagslengde som mannskapstimer ÷ din dag. |
| Markeringer annet enn notater, skyer og utheving (piler, mål, stempler), eller svar på et notat | Skriv det i notatets tekst; endre statusen når saken er avklart. |
| Et prisbibliotek som deles i et team, eller som lagres på kontoen din | Biblioteket lagres i denne nettleseren: eksporter det som CSV og importer det på den andre datamaskinen. |
| Fagpakker som er gjennomgått av erfarne kalkulatorer | Hver pakke er et utgangspunkt: kontroller forutsetningene mot jobben og produktene dine før du priser med den. Se [Fagpakker](topic:trade-packs). |
| Priser i fagpakker | Pakkene gir bare sammensatte poster: sett egne satser, eller importer prislisten din som CSV. |
| Gi mengdeuttaket nytt navn | Navnet kommer fra den første PDF-en; gi de nedlastede filene nytt navn. |
| Navngi ark for hånd | Ark navngis etter PDF-ens sidetiketter; søk etter filnavn og side. |

## Tegninger (DWG og DXF)

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Plottstiltabeller, pennetilordninger og CTB-filer på en tegnings ark | En tegning tegnes svart, eller i sine farger mørkere for papir; linjebredder hentes fra tegningen. |
| Åpne en binær DXF, eller en DWG eldre enn AutoCAD 2000 | Lagre den som ASCII-DXF eller nyere DWG. |
| Finne en ekstern referanse (xref) etter mappen den ligger i | Åpne også filen til den eksterne tegningen, sammen med vertstegningen: den finnes etter filnavn blant de åpne filene. |
| Måle 3D-polylinjer, nett, volumlegemer og regioner | Tell dem etter layer og type, eller mål planvisningen med verktøyene Lineær og Areal. |
| Tekst i en markert PDF fra en tegning med andre skrifter enn latinske | Tegn Helvetica ikke har glyf for, skrives ut som «?» i den markerte PDF-en; tegningen på skjermen påvirkes ikke. |
| Overlevere en tegning til en annen app fra arkfeltet | Åpne samme fil i den appen. |
| En tegning som har mengdeuttaket inni seg, slik {{ui:PDF med mengdeuttaket inni}} gjør for PDF-er | {{ui:Lagre mengdeuttak}}: `.takeoff.json` åpnes igjen på samme tegning, funnet etter innholdet. |
| Tegne eller telle PDF-underlag, bilder og OLE-objekter plassert i en tegning | Bilder vises bare som en ramme. Åpne underlags-PDF-en selv som et ark. |

## Autotelling

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Finne symboler på et ark uten målestokk der symbolene har en annen størrelse | Gi arket sin målestokk, eller søk i det med en boks tegnet der. |
| Finne speilvendte symboler | Tell dem for hånd, eller søk på nytt med en boks rundt et speilvendt symbol. |

## Filer og deling

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Én PDF som både viser merkene og har mengdeuttaket | {{ui:Markert PDF}} for at andre skal se merkene; {{ui:PDF med mengdeuttaket inni}} for å åpne den igjen i TakeoffCraft. |
| En CSV med mengder per ark eller av merkene | Bruk {{ui:XLSX}}: arkene Per ark og Merker har dem. |
| Lagring i skyen | Ikke tilgjengelig ennå. Lagre prosjektfilene på datamaskinen din og ta sikkerhetskopi av dem. |
| Et eget TakeoffCraft-skrivebordsprogram | Fra 0.5 er skrivebordsprogrammet CadCraft Studio, med alle åtte appene i én installasjon. TakeoffCraft kjører også i nettleseren. |

## Skjerm og inndata

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| En høyreklikkmeny (eller langt trykk) | Bruk verktøylinjen, panelene og tastene. Et langt trykk avslutter en strekning eller kontur. |
| Rotere visningen | Sider som er rotert i PDF-en, vises allerede rette. |

## 3D-visning

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Tegne eller redigere merker i 3D | Gå tilbake til arket ({{key:3}}) for å tegne; velg og slett fungerer i 3D. |
| Justere etasjer som er plottet forskjellig på sidene deres | Stable etasjer som er plottet likt; kontroller de andre ett ark om gangen. |
| Telle stolper i samme størrelse som det som telles | Alle stolper på et ark har samme størrelse; de viser hvor en telling er, ikke hva den er. |

## Tilbud

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Tillegg til en pakke som allerede er sendt, tildelingsbrev, et omfangsark som hver budgiver signerer | Send en ny pakke, og skriv tildelingen selv. [Send en pakke for tilbud](topic:bid-invitations) beskriver det som er bygget. |
| Sende tilbudsinvitasjoner fra en hvilken som helst konto: mens det testes, er e-post til eksterne budgivere slått av, unntatt for kontoer CadCraft-teamet har slått på | Last ned {{ui:Omfang som CSV}}, send den på e-post selv, og skriv inn tilbudene. |
| Sende tilbudspakker fra et Studio-vindu | Send fra TakeoffCraft i nettleseren. |
| Prise om et alternativs tilbudsområde med et valgt tilbud | Alternativer og delsummer for tilbudsområder bruker dine egne priser; juster alternativet for hånd. |
| Automatiske påminnelser før en underentreprenørs forsikring eller lisensdato utløper | Datoen markeres på siden Underentreprenører når den er passert eller innen 30 dager; kontroller den når du inviterer. |

## Paneler

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Flytte tabellen {{ui:Mengder}} | Bare panelene {{ui:Ark}} og {{ui:Poster}} kan flyttes. Se [Ordne panelene](common:arrange-panels). |

## Regneark

XLSX-arbeidsboken er kontrollert i LibreOffice Calc, som regnet ut hver sum til samme øre som TakeoffCraft. Den er ikke åpnet i Excel ennå. Viser et regnearkprogram noe uventet, inneholder CSV-eksporten den samme kalkylen som rene verdier.
