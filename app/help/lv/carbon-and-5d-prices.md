---
title: Iemiesotais ogleklis un 5D cenu tabula
summary: Ogleklis saskaita apjomu aprēķina iemiesoto oglekli no katra vienuma daudzuma un atvērtas koeficientu tabulas un nosūta jūsu likmes uz BimCraft kā cenu tabulu 5D izmaksām.
keywords: ogleklis, iemiesotais ogleklis, kgco2e, co2, koeficienti, A1-A3, transports, atkritumi, 5d, cenu tabula, izmaksas, bimcraft, EPD
from: f4bff3b8
---

{{ui:Carbon}} rīkjoslā saskaita iemiesoto oglekli no tā, ko esat izmērījis, un pārvērš jūsu likmes cenu tabulā, ko ēkas modelis var izmantot. Tas ir aprēķins, nevis novērtējums.

## Iemiesotais ogleklis

Katra vienuma daudzums ar tā atkritumiem tiek reizināts ar koeficientu tabulas rindu. Rinda tiek saskaņota pēc vienuma nosaukuma vārdiem ("betona plāksne" atrod rindu ar atslēgas vārdu betons). Tabula ir tā pati atvērtā tabula, ko izmanto BimCraft, tāpēc šeit ielādēts fails darbojas arī tur. **Rindas, kas nāk kopā ar programmu, ir sākotnējās vērtības: vispārīgas, nepārbaudītas un nav no nevienas datubāzes.** Dialogs to saka blakus cipariem; pirms paļaušanās uz skaitli aizstājiet tās ar savu avotu.

1. Izvēlieties {{ui:Carbon}}. Saskaitītie vienumi ir uzskaitīti ar to kilogramiem CO2e; kopsumma ir augstāk.
2. Atzīmējiet {{ui:A4 transport}} vai {{ui:A5 site waste}}, lai saskaitītu arī šos posmus rindām, kas tiem dod vērtību. Ražošanas posms vienmēr tiek saskaitīts.
3. Lai vienumam izmantotu citu rindu vai nevienu, izmantojiet sarakstu tā rindā.
4. {{ui:Factors from a file…}} ielādē koeficientu tabulu (JSON vai CSV), kas izveidota no jūsu avota; tās rindas aizstāj sākotnējās rindas ar to pašu id. {{ui:Factors (JSON)}} saglabā jūsējo.

Koeficients ir uz metru, kvadrātmetru, kubikmetru, vienumu vai kilogramu. Līnija, kas mērīta pēdās vai kvadrātpēdās, tiek pārrēķināta. Kilogramu koeficientam nepieciešams tilpums (kubikjardi vai kubikmetri) un rindas blīvums. Vienums, kura koeficientam vajadzīgs daudzums, ko tas neizmēra, ir uzskaitīts zem {{ui:Left out}} ar iemeslu un nekad nav uzminēts. Statusa joslā skrienošā kopsumma rāda to pašu skaitli.

Jūsu koeficientu rindas, jūsu izvēles un posmi, ko skaitāt, tiek saglabāti apjomu aprēķina failā.

## Cenu tabula 5D izmaksām

{{ui:5D prices (JSON)}} un {{ui:5D prices (CSV)}} saglabā apjomu aprēķina likmes kā cenu tabulu: viena rinda katram cenotajam vienumam ar tā materiāla un darba likmi par vienību un tā atkritumiem. Ielādējiet to BimCraft izmaksu panelī (Iemiesotais ogleklis un 5D izmaksas), lai cenotu ēkas modeļa uzdevumus ar tām pašām likmēm, kas veidoja piedāvājumu. Vienumi, kas mērīti vienībā, kādas tabulā nav, un vienumi bez likmes tiek izlaisti.

## Ar jūsu asistentu

Ja iestatījumos atļaujat asistentus, tie var nolasīt oglekli (carbon_check). Koeficientu ielādi veicat jūs.

## Labi zināt

Nekas nekur netiek nosūtīts. Skaitļi ir tik labi, cik labi ir koeficienti, ko ielādējat.
