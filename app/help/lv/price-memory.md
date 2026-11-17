---
title: Cenu atmiņa no jūsu iepriekšējiem darbiem
summary: TakeoffCraft atceras likmes, ko izmantojāt iepriekšējos apjoma aprēķinos, tikai šajā datorā, lai jauns apjoma aprēķins varētu sākties ar to, ko iepriekš samaksājāt. Skatiet to, izmantojiet to, aizmirstiet to.
keywords: cenu atmiņa, cenas, atcerēties cenas, pēdējais darbs, iepriekšējie darbi, tipiska cena, mediāna, likmes, nepiecenotie, pārcenot, mācīties no iepriekšēja apjoma aprēķina, aizmirst, bibliotēka
from: 7279f1a1
---

{{ui:Cenas}} rīkjoslā (dolāra zīme) atver to, ko TakeoffCraft atceras par izmantotajām cenām. Tas ir vienkāršs saraksts: katram vienuma nosaukumam — likmes no jūsu pēdējiem darbiem. Tas tiek glabāts šajā pārlūkprogrammā (programmā Studio — tās pašas tīmekļa skata vietā), blakus cenu bibliotēkai, nekad apjoma aprēķina failā, un nekas nekur netiek sūtīts. Tas nav apmācīts modelis.

## Ko tas atceras

Kad saglabājat apjoma aprēķinu, katrs vienums, kam ir cena un ko izmanto (tam ir atzīme vai ierakstīts daudzums virs nulles), tiek atcerēts pēc sava nosaukuma un veida: materiāla likme, darba likme, atkritumi un mērvienība. Darbs ir tie plānu faili, no kuriem tas veikts, tāpēc, saglabājot to pašu apjoma aprēķinu vēlreiz, tā paša darba cenas tiek aizstātas, nevis pievienots vēl viens darbs. Katram nosaukumam tiek saglabāti pēdējie 12 darbi.

Lai sāktu ar saviem vecākajiem darbiem, izvēlieties {{ui:Mācīties no iepriekšēja apjomu aprēķina…}} un izvēlieties saglabātu apjoma aprēķinu (.json). Tā cenotie, izmantotie vienumi tiek atcerēti tādā pašā veidā.

Nosaukumi sakrīt, ja sakrīt to vārdi, neatkarīgi no burtu lieluma vai pieturzīmēm ("2x4 stīpa, 8 ft" un "2x4 stīpa 8 FT" ir viens un tas pats). Tie paši vārdi citam vienuma veidam (lineārs vienums un skaita vienums) nav tā pati cena.

## Izmantošana jaunā apjoma aprēķinā

1. Izveidojiet jaunā apjoma aprēķina vienumus.
2. Izvēlieties {{ui:Cenas}}. Zem {{ui:Šis apjomu aprēķins}} redzat katru vienumu, kam ir atcerēta cena: ko tam tagad esat piešķīris, pēdējā darba likmes, tipiskās likmes (atcerēto darbu vidējā vērtība) un diapazonu.
3. Izvēlieties {{ui:Izmantot pēdējo}} vai {{ui:Izmantot tipisko}} vienam vienumam, vai {{ui:Cenot N neuzcenotos vienumus no atmiņas}}, lai aizpildītu katru vienumu bez cenas ar pēdējā darba cenām.

Katra izmantošana ir viens solis: {{key:Ctrl+Z}} to atsauc. Vienums, kuram ir tikai līdzīgs nosaukums (viens nosaukums ir otra iekšpusē), par to paziņo, un pogas izmanto līdzīgā nosaukuma likmes. Cena, kas atcerēta par gabalu, nekad netiek piešķirta vienumam par pēdu: dialogs norāda, ka mērvienības atšķiras, un to neskar.

## Apskatīt, mainīt, aizmirst

{{ui:Viss atcerētais}} uzskaita katru nosaukumu ar tā likmēm un darbu skaitu. Miskastes poga aizmirst vienu nosaukumu; {{ui:Dzēst visas cenas}} aizmirst visus. Izslēdziet {{ui:Atcerēties manas cenas, saglabājot apjoma aprēķinu}}, lai pārtrauktu atcerēšanos; jau saglabātais paliek, līdz to aizmirstat. Jūsu apjoma aprēķini un cenu bibliotēka nekad netiek skarti.

## Ar jūsu palīgu

Ja Iestatījumos atļaujat palīgus, tie var lasīt, kas atcerēts apjoma aprēķina vienumiem (prices_list), un cenot vienumus no tā (prices_apply, ko var vispirms parādīt priekšskatījumā). Tas ir tas pats saraksts, kas dialogā.
