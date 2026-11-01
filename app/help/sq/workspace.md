---
title: Ekrani i TakeoffCraft
summary: Një tur i dritares sipas emrit në ekran - shiriti i veglave, lista e fletëve, fleta, paneli i Artikujve, tabela e Sasive dhe shiriti i statusit.
keywords: ekran, paraqitje, shirit, shfletues i projektit, kutia e veglave, kutia e informacionit, shiriti i veglave, panele, lista e fletëve, paneli i artikujve, sasitë, shiriti i statusit, tur, ndërfaqe
from: ab1115e0
---

TakeoffCraft mbush dritaren e shfletuesit nën shiritin e aplikacionit CadCraft. Nga lart poshtë dhe nga e majta në të djathtë:

| Pjesa | Vendi | Për çfarë shërben |
|---|---|---|
| Shiriti i aplikacionit | Krye | Emri i aplikacionit, versioni, {{ui:About TakeoffCraft}}, {{ui:Help}} ({{key:F1}}), {{ui:Save for offline}}, {{ui:Settings}} ({{key:Mod+,}}), butoni {{ui:Full screen}} dhe ndërrimi i temës {{ui:Paper}} / {{ui:Model}}. |
| Shiriti i veglave | Nën shiritin e aplikacionit | Çdo komandë, në grupe: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:View}}. |
| Fletët | Majtas | Çdo faqe e çdo PDF-je të hapur, me miniaturë, shkallën e vet dhe numrin e shenjave. |
| Fleta | Mes | Faqja e hapur. Mat këtu. |
| Artikujt | Djathtas | Artikujt e llogaritjes, cilësimet e artikullit të zgjedhur dhe shenja e zgjedhur. |
| Sasitë | Poshtë | Sasitë dhe kostot sipas artikullit ose sipas fletës, dhe totali i punës. |
| Shiriti i statusit | Fund | Matja e drejtpërdrejtë, mesazhet, sugjerimi 45° dhe zmadhimi. |

## Shiriti i veglave

Qëndro me miun mbi çdo buton për të parë çfarë bën dhe tastin e tij.

| Grupi | Butonat |
|---|---|
| {{ui:File}} | {{ui:New}} (llogaritje e re bosh), Hap PDF-et ({{key:Mod+O}}), {{ui:Open takeoff}} (një projekt `.takeoff.json`), {{ui:Save takeoff}} ({{key:Mod+S}}) |
| {{ui:Export}} | Një menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} |
| {{ui:Scale}} | {{ui:Calibrate}} ({{key:K}}), {{ui:Check}} ({{key:D}}), dhe lista {{ui:Preset}} |
| {{ui:Takeoff}} | {{ui:Select}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Circle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, një ndërrues ndezur/fikur), {{ui:Deduct}} ({{key:E}}, një ndërrues ndezur/fikur), {{ui:Cut-out}} ({{key:X}}), {{ui:Count}} ({{key:C}}), {{ui:Auto count}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}), dhe {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |
| {{ui:View}} | {{ui:Fit page}} ({{key:F}}), {{ui:Fit width}} ({{key:W}}) |

Vegla që po përdor shfaqet e shtypur. Butonat {{ui:Arc}} dhe {{ui:Deduct}} mbeten të shtypur ndërsa janë të ndezur.

## Fletët (majtas)

- **Kërko fletët** filtron listën sipas emrit të fletës, emrit të skedarit ose etiketës së faqes.
- Çdo fletë shfaq një miniaturë (vizatohet ndërsa lëviz), emrin e saj, dhe ose shkallën e saj ose **Pa shkallë**.
- Ana e djathtë e çdo rreshti tregon sa shenja ka fleta. Ndërsa një artikull është i theksuar, shfaq sa nga shenjat e atij artikulli janë në fletë.
- Kliko një fletë për ta hapur. {{key:PageDown}} dhe {{key:PageUp}} kalojnë te fleta tjetër dhe e mëparshme në listë.
- Kur një llogaritje mbulon PDF-të që nuk janë hapur, një shënim nën listë i emëron. Shih [Ruaj dhe rihap një llogaritje](topic:save-and-reopen).

Emrat e fletëve merren nga PDF-i: një etiketë faqe si `A-101` bëhet emri i fletës. Një faqe pa etiketë merr emrin e skedarit dhe numrin e faqes, si "Planimetritë, faqja 3". Me disa PDF të hapura, fletët me etiketë shfaqin edhe emrin e skedarit.

## Fleta (në mes)

- Shiriti nën fletë shfaq emrin e fletës dhe shkallën e saj, ose "Ende pa shkallë: zgjidh një të gatshme ose kalibro". Butonat e tij: {{ui:MarkupCraft}} (kur ai aplikacion mund ta marrë PDF-në; shih [Fillo një llogaritje dhe hap një grup planimetrish](topic:open-plan-set)), {{ui:Compare}} (një version më i vjetër i fletës mbi këtë: [Krahaso një fletë të rishikuar](topic:compare-revisions)), "(n) për kontroll" (shenja të shënuara, kur ka) dhe {{ui:3D}} (pamja [3D e kontrollit](topic:check-in-3d)).
- Para se të hapet ndonjë PDF, mes shfaq një udhëzues të shkurtër me pesë hapa.
- Rrota e miut zmadhon te treguesi. Tërhiq për të lëvizur pamjen. Shih [Tastiera dhe miu](topic:keyboard).
- Ndërsa përdor {{ui:Auto count}}, lart fletës shfaqet një shirit me kontrollet e tij.

## Artikujt (djathtas)

Lart, lista {{ui:Bid area}}: ndërtesa, kati ose faza ku futen shenjat e reja ([Zonat e ofertimit](topic:bid-areas)).

- {{ui:New item}} hap një formular të vogël: një emër, një lloj ({{ui:Linear (length)}}, {{ui:Area}} ose {{ui:Count}}) dhe {{ui:Add}}.
- Lista shfaq ngjyrën, ikonën e llojit, emrin dhe sasinë e çdo artikulli. Kliko një artikull për të vizatuar me të dhe për të theksuar shenjat e tij në çdo fletë. Kliko sërish për të ndaluar theksimin.
- Nën listë, **Artikulli: (name)** është redaktuesi i artikullit: emri, lloji, ngjyra, njësia, lartësia ose thellësia, humbja, normat e materialit dhe punës, vlerat e matura, dhe {{ui:Assembly}}. Shih [Krijo artikuj llogaritjeje](topic:create-items).
- **Shenja e zgjedhur** shfaqet kur zgjedh një shenjë: cilit artikull i përket, fleta e saj, matjet e saj, dhe butona si {{ui:Add a cut-out}} dhe {{ui:Delete mark}}. Me disa shenja të zgjedhura bëhet **Shenjat e zgjedhura**: sa nga secili artikull, dhe {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} dhe {{ui:Delete marks}}.
- Redaktuesi i artikullit mbaron me {{ui:Copy item}} dhe {{ui:Duplicate item}}: një artikull me montimin dhe kostot e tij, pa shenja. Shih [Kopjo, ngjit dhe dyfisho shenjat](topic:copy-paste).

## Sasitë (poshtë)

- {{ui:By item}} liston çdo artikull dhe përbërësit e montimit të tij me sasi, humbje, norma dhe kosto të plota. Mund të shkruash humbjen dhe normat direkt në tabelë.
- {{ui:By sheet}} liston sasinë e çdo artikulli në çdo fletë.
- Një paralajmërim që fillon me **E paplotë:** shfaqet kur diçka është lënë jashtë totaleve.
- {{ui:Job total}} është në të djathtë të kokës.
- Butoni me shigjetë në skajin e djathtë fsheh ose shfaq tabelën për t'i dhënë fletës më shumë hapësirë.

Shih [Lexo sasitë dhe preventivin](topic:read-quantities).

## Shiriti i statusit (poshtë)

Nga e majta në të djathtë: matja e drejtpërdrejtë ndërsa vizaton (gjatësi, sipërfaqe, rreze ose rezultat kontrolli), kutia {{ui:Type}} ndërsa shkruan një gjatësi, mesazhet nga TakeoffCraft, kujtesa "Shift kap në 45°" (ose "Kap në 45°; Shift liron këndin" kur kjo është e ndezur te [Cilësimet](topic:settings)), butoni {{ui:Snap}} (kapja në vijat e vizatimit, i ndezur kur është i theksuar; {{key:F3}}), dhe përqindja e zmadhimit.

:::tip
Lexo shiritin e statusit kur nuk ndodh diçka. TakeoffCraft shpjegon atje pse refuzoi një klikim, për shembull "Kjo fletë ende nuk ka shkallë".
:::

## Paraqitje të tjera

Gjithçka më lart është paraqitja {{ui:CadCraft classic}}, ajo e nisjes. {{ui:Settings}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} ofron dy të tjera; të njëjtat vegla dhe tastet funksionojnë në të tre, dhe zgjedhja e {{ui:CadCraft classic}} përsëri vendos çdo kontroll aty ku ishte.

| Paraqitja | Në TakeoffCraft |
|---|---|
| {{ui:Ribbon and project browser}} | {{ui:Takeoff ribbon}} përgjatë krye ([Menutë, tastet dhe miu](topic:menus-keys-and-mouse)), një shirit për veglën që po përdoret, një skedë për çdo fletë që hap (Model dhe paraqitjet e një vizatimi janë gjithashtu fletë) me të gatshmet e shkallës dhe {{ui:Fit page}} nën fletë. Paneli i majtë mban {{ui:Properties}} (artikullin, shënimin ose shenjën e zgjedhur) mbi {{ui:Takeoff browser}}: {{ui:Sheets}} (kliko një për ta hapur në një skedë), {{ui:Conditions}} (kliko një për të vizatuar me të) dhe {{ui:Estimate}} (totali i çdo artikulli dhe totali i punës); miniaturat janë skeda e tij e dytë. |
| {{ui:Toolbox and info box}} | Shiriti i veglave mbi fletë, një kuti informacioni me {{ui:Bid area}}, veglën që po përdoret ose zgjedhjen dhe shiritin e fletës, një kolonë me veglat e llogaritjes majtas, një skedë për çdo fletë, dhe {{ui:Snap}} dhe zmadhimi nën fletë. |

Ndërsa [pamja 3D e kontrollit](topic:check-in-3d) është e hapur, skedat e fletës dhe shiriti nën fletë largohen; mbyll pamjen 3D për të matur përsëri. Në telefon, paraqitja për telefon funksionon gjithmonë.

## Ekrani i plotë dhe temat

Butoni {{ui:Full screen}} te shiriti i aplikacionit, ose {{key:Ctrl+Shift+F}} (Control në çdo platformë, edhe në Mac), kalon ciklikisht mes normales, ekranit të plotë dhe ekranit të plotë me shiritat e fshehur. Me shiritat të fshehur, lëvize treguesin te skaji i sipërm për t'i shfaqur sërish.

{{ui:Paper}} është tema e çelët dhe {{ui:Model}} ajo e errët. Në {{ui:Model}} vizatimi shfaqet i kthyer (vija të çelëta mbi të errët) vetëm në ekran; eksportet nuk ndryshohen kurrë.
