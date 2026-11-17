---
title: Măsurarea tronsoanelor liniare
summary: Luați pereți, conducte, profile și alte lungimi ca tronsoane, cu segmente drepte, arce și agățarea la 45 de grade cu Shift.
keywords: liniar, lungime, tronson, polilinie, pereți, lf, picioare liniare, arc, curbă, 45 de grade, ortogonal, agățare, segmente, polylength, deducere, deschidere, ușă, gol, introducere, introdusă, coordonate, distanță, distanță directă, polar
from: c669deff
---

Un articol liniar măsoară lungimea. Fiecare tronson este un lanț de puncte: segmente drepte și arce, unde activați modul arc. Un articol poate avea oricâte tronsoane, pe oricâte foi.

Înainte de a începe: foaia are nevoie de o scară ([Setarea scării](topic:set-the-scale)), iar dvs. aveți nevoie de un articol liniar ([Crearea articolelor de antemăsurătoare](topic:create-items)).

Pe un PDF vectorial, clicurile se agață de liniile proprii ale desenului: capete, mijloace și intersecții ([Agățarea de liniile desenului](topic:snap-to-the-drawing); {{key:F3}} o dezactivează).

## Desenarea unui tronson

1. Faceți clic pe articolul liniar de sub {{ui:Items}}.
2. Alegeți {{ui:Linear}} din bara de instrumente sau apăsați {{key:L}}.
3. Faceți clic pe începutul tronsonului.
4. Faceți clic pe fiecare colț de-a lungul lui.
   Bara de stare arată „Lungime” (tronsonul până la indicator) și „segment” (segmentul pe care îl desenați), în picioare și inci.
5. Încheiați tronsonul: faceți dublu clic pe ultimul punct, apăsați {{key:Enter}} sau faceți clic dreapta.
   Tronsonul este desenat în culoarea articolului și devine marcajul selectat. Lungimea articolului din lista {{ui:Items}} și din tabelul {{ui:Quantities}} crește.

Instrumentul rămâne pe {{ui:Linear}}, deci puteți începe imediat tronsonul următor. Apăsați {{key:Esc}} pentru a reveni la {{ui:Select}}.

În timpul desenării:

- {{key:Backspace}} (sau {{key:Delete}}) elimină ultimul punct.
- {{key:Esc}} aruncă tronsonul neterminat.
- Tragerea deplasează foaia, iar rotița mărește, fără a adăuga puncte.

:::mac
Pe touchpadul unui Mac, clicul dreapta este un clic cu două degete (activați clicul secundar în Setări sistem, la Trackpad). TakeoffCraft citește doar butonul secundar, deci un clic cu {{key:Ctrl}} poate fi socotit clic simplu și poate adăuga un punct. Dublu clic sau {{key:Enter}} încheie întotdeauna.
:::

:::touch
Pe un ecran tactil, atingeți pentru a plasa puncte, trageți cu un deget pentru a deplasa și ciupiți cu două degete pentru a mări. Încheiați printr-o apăsare lungă, o dublă atingere sau {{ui:Finish}} din bara de sub foaie ({{ui:Back}} readuce ultimul punct). Vezi [Depanare](topic:troubleshooting#touch-screens).
:::

## Linii drepte din pași de 45°

Țineți {{key:Shift}} când plasați un punct. Segmentul de la ultimul punct se agață de cea mai apropiată direcție de 0°, 45°, 90° sau 135°, păstrând lungimea trasă de-a lungul ei. Bara de stare vă amintește: „Shift agață la 45°”.

În modul arc, se aplică la capătul arcului: coarda arcului merge în pași de 45° de la locul unde începe. Punctul pe care faceți clic pe curbă nu este agățat niciodată.

## Arce și pereți curbi

1. În timp ce desenați un tronson, plasați punctul unde începe curba.
2. Activați modul arc: alegeți {{ui:Arc}} din bara de instrumente sau apăsați {{key:R}}. Butonul rămâne apăsat.
3. Faceți clic pe orice punct al curbei, undeva pe la mijlocul ei.
   Bara de stare adaugă „(arc: faceți clic unde se termină)”, iar previzualizarea se curbează prin punctul ales.
4. Faceți clic unde se termină curba.
   Arcul este adăugat. Lungimea sa este lungimea exactă a arcului, nu un șir de coarde scurte.
5. Faceți clic pe un alt punct al curbei următoare și pe capătul ei, pentru a continua să desenați arce, sau apăsați din nou {{key:R}} pentru a reveni la segmente drepte.

{{key:Backspace}} sau {{key:Esc}} aruncă mai întâi punctul în așteptare de pe curbă; apăsați din nou pentru a elimina puncte ca de obicei.

## Introducerea lungimilor și a coordonatelor

După primul punct, puteți tasta unde ajunge următorul, în loc să faceți clic. Tastați o cifră, `@` sau `#`: o casetă {{ui:Type}} se deschide în bara de stare, cu ce ați tastat. Apăsați {{key:Enter}} pentru a plasa punctul; caseta rămâne deschisă pentru următorul.

| Tastat | Următorul punct merge |
|---|---|
| `12'6"` | 12'-6" de la ultimul punct, spre indicator (arătați direcția, apoi tastați lungimea) |
| `12'6"<45` | 12'-6" la 45°, numărate în sens invers acelor de ceasornic de la dreapta ecranului (`<90` este în sus, `<-90` în jos) |
| `@6',-4'` | 6' la dreapta și 4' în jos de la ultimul punct |
| `6',4'` (sau `#6',4'`) | 6' la dreapta și 4' în sus de la primul punct al acestui tronson |

Lungimile se tastează ca peste tot în TakeoffCraft ([Formate de introducere](topic:entry-formats)): `12'-6 1/2"`, `12.5` (picioare), `30"`, `3.2 m`. „Dreapta” și „sus” sunt cum vedeți foaia, și atunci când pagina PDF este rotită.

{{key:Enter}} pe o casetă goală încheie tronsonul, ca {{key:Enter}} pe foaie; {{key:Esc}} închide caseta și lasă tronsonul să continue. Punctele tastate urmează aceleași reguli ca clicurile: scăderile, arcele și închiderea unei arii funcționează toate. Aceeași casetă funcționează în {{ui:Area}} și {{ui:Cut-out}}; după centrul unui cerc, ia raza.

## Scăderea unei părți dintr-un tronson

Un tronson de perete care trece pe lângă o ușă sau o vitrină poate fi desenat drept până la capăt și totuși să numere doar peretele: segmentele peste deschidere sunt **scăderi**. Ele sunt desenate punctat și subțire și nu sunt numărate.

În timpul desenării:

1. Plasați punctul unde începe deschiderea.
2. Alegeți {{ui:Deduct}} din bara de instrumente sau apăsați {{key:E}}. Butonul rămâne apăsat, iar bara de stare spune că următoarele segmente sunt scăderi.
3. Faceți clic unde se termină deschiderea. Segmentul este desenat punctat; „Lungime” din bara de stare îl lasă afară.
4. Apăsați din nou {{key:E}} și continuați de-a lungul peretelui.

După desenare: selectați tronsonul. Sub **Marcaj selectat**, fiecare segment are o casetă {{ui:Deduct}}: bifați-o pentru a scădea segmentul, debifați-o pentru a-l număra din nou. Fiecare modificare este un pas de anulare.

Un tronson păstrează întotdeauna cel puțin un segment care se numără. Panoul arată atunci **Scăderi** (lungimea scăzută) și **Desenat** (tronsonul întreg); **Lungimea**, cantitatea articolului, aria peretelui și costurile folosesc toate lungimea fără scăderi. Vizualizarea 3D de verificare lasă un gol în perete, PDF-ul marcat desenează scăderile punctat, iar foaia exportată **Marcaje** le listează.

Mutarea unui colț păstrează scăderile. Adăugarea sau eliminarea punctelor (prin desenarea din nou a tronsonului) începe fără ele.

## Detaliile unui tronson

Alegeți {{ui:Select}} ({{key:V}}) și faceți clic pe tronson. **Marcaj selectat** din dreapta arată:

- articolul din care face parte (alegeți alt articol liniar din listă pentru a muta tronsonul acolo),
- foaia,
- **Lungimea** în picioare și inci și în LF,
- numărul de **Segmente** și **Aria peretelui** atunci când articolul are o înălțime,
- lungimea fiecărui segment, cu „(arc)” după arce, și caseta sa {{ui:Deduct}}.

Pe foaie, fiecare segment al tronsonului selectat este etichetat cu lungimea sa.

## Remedierea unui tronson

- **Mutarea unui punct**: selectați tronsonul, apoi trageți unul dintre mânerele pătrate de colț. Țineți {{key:Shift}} pentru a agăța segmentul mutat la pași de 45°. Un arc își păstrează bulge-ul.
- **Îndoirea unui arc**: un tronson selectat arată un mâner rotund în mijlocul fiecărui arc. Trageți-l: arcul trece prin locul unde ați lăsat, deci se curbează mai mult, mai puțin sau în sens invers. Trăgând peste linia dreaptă dintre capete, devine segment drept. {{key:Mod+Z}} îl anulează („Îndoire arc”).
- **Ștergerea unui tronson**: selectați-l și apăsați {{key:Delete}}, alegeți {{ui:Delete}} din meniul {{ui:More}} al barei de instrumente sau {{ui:Delete mark}} din panou.
- **Anulare**: {{key:Mod+Z}}; refacere cu {{key:Mod+Y}}.

Nu puteți încă insera un punct în mijlocul unui tronson. Ștergeți tronsonul și desenați-l din nou.

## Aria peretelui

Dați articolului liniar o {{ui:Height}} (de exemplu `9'-0"`). Atunci raportează **Aria peretelui (A)** = lungime × înălțime, în SF (sau m² pentru un articol metric), iar aria peretelui intră în coloana de note a exportului în tabel. Folosiți-o în ansambluri pentru placaj, vopsea sau izolație: vezi [Ansambluri și formule](topic:assemblies).
