---
title: Tipveida grupas
summary: Aprēķiniet tipveida vienību, istabu vai stāvu vienreiz un skaitiet to tik reizes, cik tas atkārtojas, mainiet skaitu vēlāk un redziet, kuras atzīmes ir tipveida.
keywords: tipveida, tipveida grupa, atkārtot, atkārtošanas skaits, reizināt, reizes, vienība, viesnīcas istaba, dzīvoklis, tipveida stāvs, x24, kopijas
from: 42c3a372
---

Ēka bieži atkārtojas: 24 identiskas viesnīcas istabas, 6 tipveida stāvi, 40 autostāvvietas ar vienādu ceļa svītrojumu. **Tipveida grupa** ļauj aprēķināt vienu no tām un skaitīt to tik reizes, cik tā atkārtojas, bez kopiju zīmēšanas.

## Tipveida grupas izveide

1. Aprēķiniet vienu vienību: tās sienas, grīdu, kontaktligzdas — jebkurus vienumus.
2. Atlasiet tās atzīmes ar rīku {{ui:Atlasīt}}: noklikšķiniet uz vienas, tad {{key:Shift}} + klikšķis uz pārējām ([Atlasīt atzīmes](topic:copy-paste#select-the-marks)).
3. Zem **Atlasītā atzīme** atveriet {{ui:Tipveida}} un izvēlieties {{ui:Jauna tipveida grupa…}}.
4. Dodiet tai nosaukumu (`Unit A`) un to, cik reizes tā atkārtojas (`24`), tad izvēlieties {{ui:Izveidot grupu}}.

Katrs šo atzīmju daudzums tagad skaitās 24 reizes: 10 ft sienas posms dod 240 ft, 80 SF grīda dod 1,920 SF, divas kontaktligzdas dod 48. Izmaksas seko, un mezglu formulas redz atkārtotās kopsummas (`N` arī skaita katru posmu 24 reizes).

Lapā punktēts rāmis apvelk grupas atzīmes ar tās nosaukumu un skaitu, piemēram, **Unit A ×24**.

## Mainīt vēlāk

Grupas ir uzskaitītas labajā panelī zem **Tipveida grupas**:

- Mainiet skaitli aiz **×**, lai mainītu, cik reizes tas skaitās (no 1 līdz 10,000). Katrs daudzums tiek atjaunināts.
- Pārdēvējiet to nosaukuma lodziņā.
- Lodziņa ikona atlasa tās atzīmes (un parāda to lapu).
- Miskaste dzēš grupu. Tās atzīmes paliek, skaitītas vienreiz.

Lai pievienotu atzīmes grupai vai izņemtu tās, atlasiet tās un izvēlieties grupu (vai {{ui:Nav tipveida (×1)}}) zem {{ui:Tipveida}}.

## Noderīgi zināt

- Grupas atzīmes var atrasties vairākās lapās un būt jebkuru vienumu. Katra atzīme ir ne vairāk kā vienā grupā.
- Ielīmētās kopijas nav grupā: ielīmēta tipveida vienības kopija citādi skaitītos vēl 24 reizes. Izmantojiet grupu "tas pats N reizes", bet kopēšanu un ielīmēšanu kopijām, ko zīmējat.
- Atzīmes ir zīmētas vienreiz, tāpēc 3D skats un atzīmētais PDF rāda vienu vienību; daudzumi, eksporti un lapas tabula to skaita ×N. Excel eksporta lapa **Marks** norāda, kuras atzīmes ir tipveida un cik reizes tās skaitās.
- Ar piedāvājuma laukumiem grupas atzīmes skaitās ×N savā piedāvājuma laukumā.
