---
title: Izberite črte PDF-ja
summary: Kliknite črto vektorskega PDF-ja, da izmerite celotno povezano pot, ali kliknite znotraj zaprtega obrisa za njegovo površino; prikazana je tolerančna vrednost vrzeli in ena razveljavitev na segment.
keywords: pot, izbor, črte, linije, povezano, ves odsek, sledenje, obris, obseg, vrzel, tolerance, premostitev, segmenti, tabulator, vektor, površina iz črt, p
from: c22526ae
---

Na vektorskem PDF-ju so stene in robovi prave črte. {{ui:Pot}} ({{key:P}}) jih prevzame, kot so narisane: en klik na črto izmeri vse, kar je z njo povezano, od konca do konca, zato stene ne obrisujete tako, da klikate njihova oglišča. List mora imeti merilo. Skenirana stran nima črt za izbor; tam uporabite [Linearno](topic:measure-linear) ali [Površina](topic:measure-areas).

## Izberite pot ali obris

1. Izberite {{ui:Pot}}. Črta pod kazalcem je orisana, druge poti, ki bi lahko bile ta, pa tanko.
2. Kliknite črto: izbere se celotna povezana pot. Vrstica pod orodno vrstico navede njene segmente, dolžino, tolerančno vrednost vrzeli in koliko vrzeli je bilo premoščenih. Pot, ki se vrne na začetek, je zaprta in poroča tudi svoj obseg.
3. Ali kliknite znotraj zaprtega obrisa, stran od katere koli črte: obris okoli te točke je izbran kot površina. Najmanjši pride prvi; {{key:Tab}} poskusi naslednjega večjega.
4. Pritisnite {{key:Enter}} (ali desni klik, ali dvojni klik), da dodate oznake. Izbrana pot postane oznaka **linearne** postavke, obris oznaka **površinske** postavke: aktivna postavka, če ima to vrsto, sicer najnovejša te vrste. Če je ni, se odpre obrazec za novo postavko in nič se ne doda, dokler znova ne pritisnete {{key:Enter}}. Vse izbrano se doda v enem koraku razveljavitve.

## Tolerančna vrednost vrzeli

Risarji pustijo majhne luknje tam, kjer bi se črte morale stikati. Dve črti se združita, kadar sta njuna konca bližje kot **tolerančna vrednost vrzeli**. Začne se pri 1.5 točke na listu (prikazana v čevljih in palcih pri merilu lista), pikčasti obroč te širine pa sledi kazalcu in sedi na vsakem koncu poti pod njim. Vsaka premoščena luknja je na izbrani poti obkrožena oranžno, vrstica pa jih šteje.

{{key:]}} tolerančno vrednost poveča, {{key:[}} zmanjša. Izbrana pot se takoj znova poveže pri novi toleranci. Na stiku pot gre naravnost naprej, po poti, ki se najmanj krivi, in pusti odcep.

## Tipke

| Tipka ali dejanje | Kaj naredi |
|---|---|
| Klik | Izberite pot pod kazalcem ali obris okoli nje. |
| {{key:Shift}} + klik | Dodajte še eno pot ali obris k izbranemu. |
| {{key:Tab}} | Poskusite naslednjo pot pod kazalcem ali naslednji večji obris. |
| {{key:Backspace}} ali {{key:Mod+Z}} | Odstranite zadnji segment zadnje izbrane poti, po enega naenkrat. Pot brez segmentov izgine. Brez izbora je {{key:Mod+Z}} običajna razveljavitev. |
| {{key:[}} in {{key:]}} | Ožja in širša tolerančna vrednost vrzeli. |
| {{key:Enter}} | Dodajte oznake. |
| {{key:Esc}} | Počistite izbor. |

## Dobro je vedeti

- Krivulja v risbi je veriga kratkih ravnih kosov, zato je njena dolžina malenkost manjša od prave dolžine loka. Za natančen lok izmerite iz datoteke risbe ([Merjenje iz risbe](topic:measure-from-a-drawing)).
- Premoščena vrzel se šteje kot ravni preskok čez njo, zato obseg zaprtega obrisa vključuje tudi to.
- Samo poteze in polnila na lastnih poteh strani so črte. Besedilo, narisano kot črke, in slike niso.
