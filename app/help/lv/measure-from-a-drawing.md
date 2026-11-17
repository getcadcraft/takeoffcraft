---
title: Mērīt no rasējuma
summary: Iegūstiet garumus un laukumus no paša rasējuma līnijām, lokiem, polilīnijām un svītrojumiem, tos izvēloties, ar precīziem lokiem un caurumiem, nevis izsekojot ar klikšķiem.
keywords: mērīt rasējumu, ģeometrija, polilīnija, loks, riņķis, svītrojums, izliekums, precīzs garums, precīzs laukums, izvēlēties, logs, izsekot, no cad, lineārs, laukums
from: fd734246
---

{{ui:Izmērīt rasējumu}} DWG vai DXF lapas joslā ņem paša rasējuma objektus kā atzīmes, tāpēc tos nav jāizseko ar klikšķiem. Polilīnijas garums, loka garums, riņķa laukums un svītrojuma laukums ar tā caurumiem iznāk precīzi, pēc tās pašas aritmētikas, ko apjomu aprēķins izmanto katrai atzīmei.

## Ņemt objektus kā lineāro vai laukuma vienumu

1. Izveidojiet vai noklikšķiniet uz **lineāra** vai **laukuma** vienuma zem {{ui:Vienumi}}. Lapai vajag mērogu.
2. Izvēlieties {{ui:Izmērīt rasējumu}}.
3. Noklikšķiniet uz objektiem lapā, lai tos izvēlētos, vai velciet logu ap tiem: viss, kas ir pilnībā logā, tiek izvēlēts. {{key:Shift}} pievieno logu izvēlētajam; noklikšķiniet uz jau izvēlēta objekta vēlreiz, lai to atceltu. Josla rāda kopējo: "6 ķēdes: 108'-9 1/8" kopā."
4. Izvēlieties pievienošanas pogu, kurā nosaukts skaits un vienums, piemēram, {{ui:Pievienot 6 vienumam Edge}} (vai nospiediet {{key:Enter}}). Katrs objekts kļūst par vienas vienuma atzīmi vienā atsaukšanas solī. {{key:Esc}} notīra to, ko izvēlējāties.

## Ko katrs vienuma tips ņem

- **Lineārs** vienums ņem līnijas, lokus, polilīnijas, riņķus un splainus pēc garuma. Slēgta forma skaitās pēc sava perimetra. Svītrojums tiek izlaists: tam ir laukums, nevis garums, un josla to saka.
- **Laukuma** vienums ņem slēgtas formas: slēgtas polilīnijas, riņķus, 2D cietos ķermeņus un svītrojumus ar caurumiem. Atvērtas ķēdes tiek izlaistas, un josla to saka.

## Precīzi un gandrīz precīzi

Līnijas, loki (jebkurš izliekums), polilīnijas ar izliekumiem un riņķi ir precīzi: garumi un laukumi izmanto loka rādiusu un griezumu, nevis tā attēlu. Elipses, splaini un svītrojumi, kuru robeža veidota no malām, tiek mērīti hordās ar vienu grādu vai smalkāk, kas ir simtdaļprocenta robežās elipsēm un desmitdaļprocenta robežās pārējiem; josla saka, cik no izvēlētajiem objektiem ir šāda tipa līknes.

## No kurienes tas ņem

- **Modelis**: objekti modeļa telpā. **Izkārtojums**: tā paša līnijas un skatu logos ietvertie modeļa objekti, mērogoti caur tiem. Objekts, kas šķērso skatu loga malu, netiek piedāvāts (tas tiktu drukāts apgriezts); objekts, ko rāda divi skatu logi, tiek ņemts vienreiz.
- Tikai slāņi, ko lapa rāda. Bloki tiek skaitīti, nevis mērīti: skatiet [Skaitīt no rasējuma](topic:count-from-a-drawing). 3D polilīnijas, tīkli, cietie ķermeņi un reģioni netiek piedāvāti.
