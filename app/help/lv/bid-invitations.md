---
title: Paketes nosūtīšana cenu aptaujai
summary: Nosūtiet piedāvājumu paketi apakšuzņēmējiem pa e-pastu, ļaujiet tiem ierakstīt cenas lapā, kurai nav vajadzīgs konts, turiet cenas slēgtas līdz atvēršanas laikam un ievelciet tās izlīdzināšanas lapā.
keywords: nosūtīt cenu aptaujai, uzaicinājums, cenu aptaujas uzaicinājums, pretendents, apakšuzņēmējs, uzaicināt, e-pasts, cenu pieprasījums, slēgti piedāvājumi, piedāvājumu atvēršana, piedāvājumu diena, novēlots piedāvājums, termiņš, atgādinājums, apakšuzņēmēju ieraksti, apdrošināšana, kvalifikācija, csv, savienot, lapu PDF
from: fb314b2c
---

{{ui:Export}} › {{ui:Bid packages and leveling…}} › {{ui:Send for bids…}} nosūta vienu paketi izvēlētajiem cilvēkiem. Tīmekļa vietne katram no viņiem nosūta e-pasta saiti; viņi atver lapu, redz apjomu un ieraksta cenu katrai rindai. Jūs redzat cenas izlīdzināšanas lapā, gatavas salīdzināšanai ([Piedāvājumu paketes un piedāvājumu izlīdzināšana](topic:bid-leveling)).

:::note
**Sūtīšana vēl nav atvērta visiem.** Kamēr funkcija tiek pārbaudīta, tā darbojas kontiem, kurus CadCraft komanda ir iespējojusi; ja jūsu konts nav iespējots, dialogs to pateiks. Pretendenta lapa darbojas katram nosūtītajam uzaicinājumam.
:::

## Pirms sūtīšanas

- Jums nepieciešams CadCraft konts ar apstiprinātu e-pasta adresi. TakeoffCraft pārlūkprogrammā lūdz **Savienot**: atveras cilne getcadcraft.com, jūs nospiežat Savienot, un šī cilne saņem pierakstīšanos, kas darbojas 30 dienas, tikai piedāvājumu paketēm, līdz aizverat TakeoffCraft cilni. To var jebkurā brīdī noņemt savā drošības lapā. Studio logs vēl nevar sūtīt.
- Katram vienumam dodiet CSI numuru: pakete ir viena CSI nodaļas vienumi ([Apjomu aprēķina vienumu izveide](topic:create-items)).
- Iestatiet mērogu lapām, kurās ir paketes atzīmes, lai pretendentu redzamie daudzumi būtu izmērīti.

## Paketes nosūtīšana

1. Zem paketes izvēlieties {{ui:Send for bids…}}.
2. Aizpildiet nosaukumu, projektu un pēc izvēles ziņojumu, un **termiņu** savā laika joslā.
3. Atstājiet atzīmētu **Glabāt cenas slēgtas**, lai paslēptu visas cenas līdz **atvēršanas laikam** (ne agrāk par termiņu), vai noņemiet atzīmi, lai redzētu cenas, kad tās ienāk.
4. Atstājiet atzīmētu lapu lodziņu, lai nosūtītu PDF ar lapām, kurās ir paketes atzīmes, un ar uzzīmētām atzīmēm. Jūsu cenas nekad nav sūtītajā: tikai vienumu nosaukumi, CSI numuri, daudzumi, mērvienības un lapu nosaukumi.
5. Ierakstiet uzaicināmos, katru jaunā rindā, kā `Vārds <vārds@uzņēmums.lv>` vai tikai adresi, vai atzīmējiet cilvēkus no apakšuzņēmēju ierakstiem. Līdz 60 vienlaikus, 100 vienai paketei.
6. Izvēlieties {{ui:Send invitations}}. Katrs saņem vienu vienkāršu e-pastu ar jūsu vārdu un e-pasta adresi, termiņu un saiti; atbildes tiek sūtītas jums.

Dialogs parāda, cik nosūtīts, un nosauc ikvienu izlaisto: jau uzaicināts šai paketei, lūdzis nesūtīt piedāvājumu uzaicinājumus, nederīga adrese vai pārsniegts sūtīšanas limits.

## Ko redz pretendents

Lapa ar garu privātu saiti, bez pierakstīšanās. Tā rāda, kas uzaicināja, termiņu, vai cenas ir slēgtas, jūsu ziņojumu un lapu PDF, pēc tam katru rindu ar tās daudzumu. Katrai rindai pretendents ieraksta cenu vai atzīmē **Nav iekļauts**, un var pievienot piezīmi; piezīmes tiek pievienotas visai paketei un līdz 3 failiem (piedāvājums, apjoma vēstule, sertifikāts). Viņi var saglabāt vēlreiz un mainīt cenas līdz atvēršanas laikam, vai **atteikties**, ar lodziņu, lai lūgtu CadCraft nesūtīt viņiem piedāvājumu uzaicinājumus.

## Slēgti piedāvājumi un atvēršana

Pirms atvēršanas laika **neviens** neredz cenu, piezīmi vai failu: ne jūs, ne TakeoffCraft, ne jūsu lapā Bid packages — "Piedāvājumu paketes". Jūs redzat, kas uzaicināts un vai atbildējis. Atvēršanas laikā visi piedāvājumi parādās uzreiz. Piedāvājums, kas saglabāts pēc termiņa, tiek pieņemts un atzīmēts **novēlots**; izlīdzināšana to joprojām uzskaita, un novēlotība ir atzīme, nevis lēmums. Pēc atvēršanas pretendents nevar mainīt cenu. Bez slēgšanas piedāvājums ir galīgs, tiklīdz tas ir iesniegts līdz termiņam.

## Cenu ievilkšana

{{ui:Get prices}} pajautā vietnei un pievieno katru atbildi paketei kā piedāvājumu, atzīmētu **web**. TakeoffCraft arī klusi pajautā katru reizi, kad atverat dialogu, kamēr tas ir savienots. Piedāvājums, kura pretendents ir saglabājis jaunu versiju, tiek atjaunināts vietā; piedāvājums, ko jūs esat rediģējis, paliek tāds, kā atstājāt, līdz viņi nosūta jaunu versiju. Katra ievilkšana ir viens solis, ko {{key:Mod+Z}} atsauc. Rindas, ko piedāvājums izslēdz, tiek pārnestas kā darba daļa, ko piedāvājums neaptver, tāpēc izlīdzināšana tās aizpilda pēc jūsu pašu izmaksām.

## Vietnē

Jūsu kontam pēc nosūtīšanas spējas ir divas lapas: **Bid packages** — "Piedāvājumu paketes" uzskaita nosūtītās paketes, kas atbildēja, novēlotos piedāvājumus un failus, ļauj nosūtīt atgādinājumu (jaunu saiti; vecā pārstāj darboties), aizvērt, atkal atvērt vai atcelt paketi; **Subcontractors** — "Apakšuzņēmēji" glabā ierakstu katram uzņēmumam: kontaktus, specialitātes, kvalifikācijas atbildes (darbības gadi, galvojuma kapacitāte, EMR, drošības ieraksts, arodbiedrība vai atvērta darbavieta, atsauksmes), licenču un apdrošināšanas derīguma beigu datumus, kas atzīmēti, kad tie ir beigušies vai paliek 30 dienu laikā, un to pagātnes piedāvājumus. Importējiet un eksportējiet ierakstus kā CSV: viena rinda katram kontaktam ar eksporta kolonnām; uzņēmums, kas jau ir jūsu sarakstā, tiek atjaunināts, nekad nedublēts.

## Kas ko redz un cik ilgi

Pretendenta cenas, piezīmes un faili nonāk pie jums un pie CadCraft komandas, kas uztur lapu. Tie tiek glabāti 24 mēnešus pēc termiņa, failus — 180 dienas; pēc tam tie tiek dzēsti. Pretendenta e-pasta adrese ir tā, ko ievadījāt; to izmanto tikai uzaicinājuma un tā atgādinājuma nosūtīšanai. Viena adrese vienlaikus no visiem saņem ne vairāk kā 3 uzaicinājumus dienā, un jūs varat nosūtīt līdz 200 dienā.

## Vēl nav izveidots

Papildinājumi, piešķiršanas vēstules, katram pretendentam parakstīts apjoma lapa un automātiski atgādinājumi pirms apdrošināšanas datuma beigām vēl nav izveidoti. Skatiet [Vēl neizveidots](topic:not-built-yet).
