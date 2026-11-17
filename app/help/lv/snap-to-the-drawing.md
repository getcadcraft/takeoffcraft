---
title: Piesaiste rasējuma līnijām
summary: Punkti pārlec uz paša PDF līniju zīmējuma, kamēr mērāt vai kalibrējat: galapunkti, vidpunkti, krustpunkti vai jebkur uz līnijas, ar marķieri, kas norāda, kurš punkts ir izvēlēts.
keywords: piesaiste, osnap, objektu piesaiste, galapunkts, vidpunkts, krustpunkts, tuvākais, vektors, līniju zīmējums, līnijas, precīzi, precīzs, f3, magnēts, stūris
from: 41d29e9b
---

Vairums rasējumu komplektu ir vektora PDF: to sienas un malas ir īstas līnijas, nevis pikseļi. Kamēr mērāt, TakeoffCraft piesaista jūsu klikšķus šīm līnijām, tāpēc posms sākas tieši sienas stūrī, un kalibrēšana nolasa izmēru, ko rasētājs ir zīmējis, nevis pikseli, kuru trāpījāt.

Piesaiste ir ieslēgta, kad sākat. Ieslēdziet vai izslēdziet to ar {{ui:Piesaiste}} statusa joslā vai ar {{key:F3}}; iestatījums tiek saglabāts šajā pārlūkprogrammā (tas ir arī sadaļā [Iestatījumi](topic:settings)).

## Uz ko tā piesaista

Kad rādītājs ir tuvāk par aptuveni 10 ekrāna pikseļiem līnijai, marķieris parāda, kur nonāks klikšķis, un tā nosaukumu:

| Marķieris | Nosaukums | Kur |
|---|---|---|
| Kvadrāts | **Galapunkts** | Līnijas gals vai stūris, kur saskaras līnijas. Līknes abi galapunkti skaitās; punkti gar tās līkni nē. |
| Trīsstūris | **Vidpunkts** | Taisnas līnijas vidus. |
| Krusts | **Krustpunkts** | Vieta, kur divas līnijas krustojas vai kur viena beidzas uz citas. |
| Smilšu pulkstenis | **Uz līnijas** | Tuvākais punkts uz līnijas, ja neviens galapunkts, vidpunkts vai krustpunkts nav tuvu. |

Tuvākais galapunkts, vidpunkts vai krustpunkts uzvar. Tikai tad, ja neviens nav tuvu, punkts tiek novietots uz pašas līnijas. Tuviniet, lai izvēlētos starp punktiem, kas atrodas tuvu cits citam: 10 pikseļi ir ekrāna pikseļi, tātad lielākā tuvinājumā tie aptver mazāku lapas daļu.

## Kur tas darbojas

Piesaiste darbojas {{ui:Lineārs}}, {{ui:Laukums}}, {{ui:Riņķis}}, {{ui:Izgriezums}}, {{ui:Kalibrēt}} un {{ui:Pārbaudīt}} rīkos, kā arī tad, kad velkat izvēlētās atzīmes stūri. Tā arī novieto loka punktus. {{ui:Skaitīt}}, {{ui:Automātiski skaitīt}} un ielīmēšana netiek piesaistītas.

Piesaistīts punkts ir svarīgāks par {{key:Shift}} 45° piesaisti: lai zīmētu 45° leņķī prom no līnijām, vispirms izslēdziet piesaisti ar {{key:F3}}.

:::tip
Kalibrējiet ar ieslēgtu piesaisti. Noklikšķiniet tuvu divām izmēra līnijas vai zināmas sienas galiem: abi punkti precīzi nonāk uz rasējuma, un mērogs iznāk precīzs (statusa josla tad nosauc iepriekš iestatīto mērogu, ar kuru tas sakrīt).
:::

## Lapas, uz kurām piesaiste nedarbojas

- **Skenētas lapas** ir attēli bez līnijām, uz kurām piesaistīt. Statusa joslā rakstīts "This sheet has no lines to snap to (a scanned page is a picture)." (Šai lapai nav līniju, uz kurām piesaistīt; skenēta lapa ir attēls.), un punkti tiek novietoti tur, kur noklikšķiniet.
- **Ļoti lieli rasējumi**: piesaiste nolasa līdz 400 000 līniju segmentiem katrā lapā. Lapā ar vairāk tā to norāda un piesaista tikai pirmajiem.
- **Teksts** netiek piesaistīts, ja vien PDF burtus nezīmē kā līnijas (dažus plotterus tā dara).

Lapas līnijas tiek nolasītas pirmo reizi, kad to atverat, fonā; liela lapa var prasīt sekundi, pirms parādās marķieri.
