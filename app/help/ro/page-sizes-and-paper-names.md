---
title: Dimensiuni de pagină și nume de hârtie
summary: Vedeți dimensiunea fiecărei foi în milimetri și inchi și numele hârtiei (seriile A, B și C, ANSI, ARCH) și grupați un set amestecat după dimensiune pentru a găsi foile neobișnuite.
keywords: dimensiune pagină, dimensiune hârtie, nume hârtie, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, arhitectural, mm, inchi, dimensiune personalizată, după dimensiune, dimensiune neobișnuită, set amestecat, scară, set de planșe, mediabox, rotație
from: 9c061c07
---

O scară înseamnă ceva doar pe hârtia potrivită. {{ui:TakeoffCraft}} citește dimensiunea fiecărei foi PDF și denumește hârtia, astfel încât să vedeți o foaie care a fost tipărită la altă dimensiune înainte de a avea încredere într-o măsurătoare făcută pe ea.

## Ce veți face

Verificați dimensiunea foii deschise, apoi grupați întregul set după dimensiune.

## Pași

1. Deschideți planurile ({{ui:Open plans}}).
2. Bara foii de deasupra desenului arată numele hârtiei foii deschise și dimensiunea ei, de exemplu „A1 · 594 × 841 mm”.
3. Fiecare rând din lista {{ui:Sheets}} are sub numele foii o linie cu dimensiunea.
4. Alegeți {{ui:By size}} în antetul {{ui:Sheets}}. Lista grupează foile sub câte un titlu pentru fiecare dimensiune, cel mai mare grup primul, și marchează ca neobișnuită o dimensiune cu doar câteva foi.
5. Alegeți {{ui:By size}} din nou pentru a reveni la ordinea proprie a setului.

O foaie DWG sau DXF nu are hârtie, deci nu i se afișează nicio dimensiune.

## Cum se alege numele

- Dimensiunea provine din caseta paginii din PDF, cu rotația aplicată.
- Numele sunt seriile A și B (ISO 216), seria C (ISO 269), ANSI A până la E și ARCH A până la E.
- O pagină aflată la 2 mm de o dimensiune numită primește acel nume. Orice altă pagină spune „personalizat”, cu cea mai apropiată dimensiune numită și cât de departe este de ea.

## În deviz

Foaia de calcul a devizului are o foaie de lucru {{ui:Page sizes}} cu numărul fiecărei dimensiuni.

:::note
Valorile în inchi pentru ANSI și ARCH au fost introduse din tabelele publicate și nu au fost comparate cu standardele tipărite.
:::
