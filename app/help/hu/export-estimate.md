---
title: A költségvetés és egy jelölt PDF exportálása
summary: Töltse le a költségvetést élő képletekkel rendelkező XLSX-munkafüzetként vagy CSV-ként, valamint a PDF-ek másolatait a rajzolt mennyiségkimutatással.
keywords: ajánlat, ajánlati összesítő, export, xlsx, táblázat, munkafüzet, csv, jelölt pdf, mennyiségkimutatás nyomtatása, jelentés, megosztás, küldés, jelmagyarázat
from: 334f89c7
---

Az exportok letöltések. A számítógépén készülnek a mennyiségkimutatásból és a megnyitott PDF-ekből; semmi nem kerül máshova.

## A költségvetés táblázatként (XLSX)

1. Nyissa meg az eszköztár {{ui:Exportálás}} menüjét, és válassza a {{ui:XLSX}} lehetőséget.
   A böngésző letölti a `(name).xlsx` fájlt. Az állapotsor ezt írja: „Exportálva: (name).xlsx (költségvetés élő képletekkel, lapok szerint, jelölésekkel, méretarányokkal).”, és figyelmeztetést ad, ha a költségvetés hiányos.
2. Nyissa meg a táblázatkezelő programjával.

A munkafüzet négy munkalapot tartalmaz, és az alábbi jelentéseket, ha alkalmazhatók:

| Munkalap | Tartalom |
|---|---|
| Költségvetés | Soronként egy tétel és összetevő: mennyiség, hulladék, mennyiség hulladékkal, egységárak, anyag, munkadíj, összesen, megjegyzések. Alul az összesen sor. |
| Lapok szerint | Minden tétel mennyisége minden lapon, a jelölések számával. |
| Jelölések | Minden jelölés: lap, tétel, típus, mennyiség és részletek (szakaszhosszak, bruttó és kivágási területek, kerület). |
| Méretarányok | Minden lap, amelynek van méretaránya vagy jelölése: a méretaránya, a beállítás módja (előre beállított, vagy kalibrálva melyik távolságon), és a láb PDF-egységenként. |
| Mennyiségkimutatás-összefoglaló | Minden tétel mennyisége, CSI-száma, jelölései és lapjai, árak nélkül. |
| Anyaglista | Minden összetevő összesítve a mennyiségkimutatásban (ugyanaz az alkatrész több tételben is egy sor), hulladékkal és anyagköltséggel, valamint a használó tételekkel. |
| Ajánlatkérés | Az anyaglista beszállítónak küldhető formában: mennyiségek hulladékkal, üres egységár-oszloppal, valamint a kiterjesztett összegek és az összeg, amelyek az árak beírásával töltődnek ki. |
| Szakáganként | Anyag, munkadíj és összeg CSI MasterFormat szakáganként, ha a tételekhez meg van adva a {{ui:CSI-szám}}. |

Ha van [ajánlati összesítő](topic:bid-summary), a Költségvetés munkalap is az ajánlati felárakkal ér véget (munkadíj-terhelés, forgalmi adó, rezsi, nyereség, kötvény és az ajánlat), élő képletekként.

A Költségvetés munkalap megtartja az **élő képleteket**: a mennyiséget hulladékkal, az anyag- és munkadíjösszegek kerekítését, soronként az összeget és az összesen sort. A táblázatkezelő újraszámolja őket, így ha a táblázatban módosít egy egységárat vagy hulladékot, az összegek követik a változást. A TakeoffCraft által számolt értékek is el vannak mentve a cellákban, és cent pontossággal egyeznek.

A megjegyzések oszlop felsorolja az összetevők képleteit, a képlethibákat, a méretarány nélküli lapokon lévő jelöléseket, a falfelületet és a kerületet. Ha valami kimaradt, az összesen sor azt írja: „Hiányos: lásd a fenti megjegyzéseket”.

A munkafüzetet a LibreOffice Calcban ellenőrizték, amely ugyanazokat az összegeket számolta ki. Excelben még nem nyitották meg. Oszloponkénti részletek: [Exportoszlopok](topic:export-columns).

## A költségvetés CSV-ben

Nyissa meg az {{ui:Exportálás}} menüt, és válassza a {{ui:CSV}} lehetőséget. A `(name).csv` fájl ugyanazokat a sorokat és oszlopokat tartalmazza, mint a Költségvetés munkalap, egyszerű értékekként (képletek nélkül), az összesen sorral együtt. Más becslő- vagy számviteli rendszerbe való beillesztéshez használja.

A CSV csak a költségvetést tartalmazza; a lapok szerinti mennyiségekhez és a jelöléslistához használja az XLSX-et. Ugyanebben a menüben a {{ui:Anyaglista}} csak az anyaglistát menti CSV-ként, rendeléshez.

## A költségvetés Google Táblázatokban

A mennyiségek táblázat fölött a **Másolás Google Táblázatokhoz** gomb a költségvetést tabulátorral elválasztott szövegként másolja a vágólapra, ugyanazokkal a sorokkal, mint a CSV. Egy Google Táblázatban kattintson az A1 cellára, és illessze be. A TakeoffCraft nem jelentkezik be a Google-be, és oda semmit sem küld.

## Hiányzó egységárak és a jóváhagyás

A mennyiséggel, de egységár nélkül rendelkező sor a megjegyzésében **Nincs egységár** feliratot kap, és az exportálás ezeket az összegek alatt számolja. Ha a költségvetést jóváhagyták, az export megnevezi, ki írta alá, mikor, és milyen összegre. Lásd [Hiányzó egységárak és a költségvetés jóváhagyása](topic:sign-off-the-estimate).

## Jelölt PDF

1. Nyissa meg azokat a PDF-eket, amelyeknek a jelöléseit ki szeretné rajzolni.
2. Nyissa meg az {{ui:Exportálás}} menüt, és válassza a {{ui:Jelölt PDF}} lehetőséget.
   Megjelenik a „A jelölt PDF írása…” üzenet, majd a böngésző letölti a fájlokat: jelölt PDF-enként egy fájlt, `(PDF name) (takeoff).pdf` néven.

A másolatban:

- a vonalas mérések a tételük színével rajzolódnak ki,
- a területek halványan kitöltöttek, tömör körvonallal, a kivágások nyitva maradnak,
- a darabszámok pöttyök,
- minden jelölt lap bal alsó sarkában kis jelmagyarázat áll: minden tétel színe, neve és mennyisége azon a lapon.

Az eredeti PDF-ek nem változnak.

Megjegyzések:

- Csak a megnyitott PDF-ek íródnak. A nem megnyitott PDF-eken lévő jelölések benne maradnak az összegekben, de nem rajzolódnak ki; ezeket előbb nyissa meg.
- A jelmagyarázat neveihez szabványos PDF-betűtípust használunk. Az általa meg nem jeleníthető betűk „?” jelként nyomtatódnak.
- Jelöléssel nem másolható titkosított PDF: „Ez a PDF jelszóval védett vagy titkosított, ezért jelölt másolat nem írható. A mennyiségkimutatás rendben van; exportálja helyette a táblázatot.”
- A fül első {{ui:Jelölt PDF}} gombja betölti a PDF-írót. Offline csak akkor érhető el, ha az alkalmazássáv megjeleníti az {{ui:Offline használatra kész}} feliratot; lásd [Munka offline](common:offline).

:::chromium
Több jelölt PDF esetén a Chrome és az Edge egyszer rákérdezhet, hogy az oldal letölthet-e több fájlt. Válassza az Engedélyezés lehetőséget, különben csak az első fájl kerül letöltésre.
:::

## Nincs mit exportálni?

- Az {{ui:XLSX}} és a {{ui:CSV}} legalább egy tételt igényel: „Még nincs mit exportálni: hozzon létre egy tételt, és mérje ki.”
- A {{ui:Jelölt PDF}} megnyitott PDF-en lévő jelöléseket igényel: „A megnyitott PDF-eken még nincs jelölés.”

## Mentse a mennyiségkimutatást is

Az export jelentés. Ha később tovább szeretné dolgozni a mennyiségkimutatást, válassza a {{ui:Mennyiségkimutatás mentése}} lehetőséget is: lásd [Mennyiségkimutatás mentése és újranyitása](topic:save-and-reopen).

Rezsi, nyereség, adó és kötvény hozzáadásához, valamint ajánlat küldéséhez lásd [Ajánlati összesítő és ajánlat](topic:bid-summary).
