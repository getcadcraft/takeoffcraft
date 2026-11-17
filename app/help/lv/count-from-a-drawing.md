---
title: Skaitīt no rasējuma
summary: Skaitiet blokus, objektus slānī vai tekstu tieši no DWG vai DXF: precīzi, ar iekļautiem blokiem, dinamisko bloku variantiem un bloku masīviem vienā atsaukšanas solī.
keywords: skaitīt no rasējuma, CAD skaitīšana, bloku skaitīšana, skaitīt blokus, ievietojums, bloka nosaukums, iekļauti bloki, dinamiskais bloks, variants, MINSERT, masīvs, slānis, objekta tips, apļi, teksts, atribūts, tags, paslēpti slāņi, precīzs skaits, kā, durvis, armatūra
from: 5060e24e
---

{{ui:CAD skaitīšana}} lapas joslā (komanda **Skaitīt no rasējuma** citos izvēlnes stilos) saskaita to, ko DWG vai DXF apgalvo, ka tur ir. Kur {{ui:Automātiski skaitīt}} meklē simbola attēlu un var palaist garām vai atrast nepareizu, šis skaita objektus: katrs bloka `DOOR-36` ievietojums ir viena durvis. Vispirms atveriet rasējumu: [DWG vai DXF rasējuma atvēršana](topic:open-a-drawing).

## Skaitīt bloku

1. Atveriet rasējuma lapu. {{ui:CAD skaitīšana}} atrodas lapas joslā.
2. Izvēlieties to. Logā uzskaitīti bloki ar to, cik no katra ir. Meklējiet pēc nosaukuma, tad izvēlieties vienu.
3. Pārbaudiet rindu zem saraksta: „22 atrasti, 22 jāpievieno.”
4. Zem {{ui:Pievienot}} izvēlieties skaitīšanas vienumu vai atstājiet {{ui:Jaunam skaitīšanas vienumam}} un dodiet nosaukumu.
5. Izvēlieties pievienošanas pogu, kurā minēts skaits: {{ui:Pievienot 22 atzīmes}}. Atzīmes parādās bloka ievietošanas punktos, un vienuma daudzums ir skaits.

Tas ir viens atsaukšanas solis: {{key:Mod+Z}} noņem atzīmes (un jauno vienumu) kopā. Tāme, izklājlapa un atzīmētais PDF apstrādā vienumu kā jebkuru citu skaitīšanas vienumu.

### Ko skaita

- **Katrs bloka nosaukuma ievietojums**, neatkarīgi no mēroga un leņķa, modeļa telpā vai papīra telpā. Bloku nosaukumos lielie un mazie burti nav svarīgi.
- **Bloku masīvi** (MINSERT): katra kopija masīvā ir viena.
- **Iekļautie bloki.** Bloks, kas ievietots citā blokā, tiek skaitīts katrā dziļumā. Saraksts saka „6 citu bloku iekšpusē”; noņemiet atzīmi no {{ui:Skaitīt arī blokus citu bloku iekšpusē}}, lai skaitītu tikai ievietojumus, kas novietoti tieši rasējumā.
- **Dinamiskie bloki.** Dinamiskais bloks tiek skaitīts savā nosaukumā, nevis anonīmajās kopijās (`*U12`), ko fails glabā. Tā stāvokļi uzskaitīti atsevišķi („Single 12, Double 4”): izvēlieties stāvokli, lai skaitītu tikai tos, vai {{ui:Visi varianti}}. Ja fails nenorāda, kādu stāvokli rāda kopija, tās uzskaitītas kā „(stāvoklis nav zināms)”.
- **Slāņa filtrs.** Bloks vairākos slāņos: izvēlieties vienu zem {{ui:Slānī}}.

### Ko neskaita

- **Paslēpti slāņi.** Objekts slānī, kas failā ir izslēgts vai iesaldēts (vai ko paslēpāt sadaļā {{ui:Slāņi}}), tiek izlaists, un rindā norādīts, cik: „3 paslēptos slāņos izlaisti”. Atzīmējiet {{ui:Skaitīt arī tos}}, lai tos iekļautu.
- **Saistītie rasējumi, kas nav atvērti**, netiek skaitīti; logā tas tiek norādīts.
- **Objekti, kas precīzi novietoti viens uz otra tāda paša veida**, tiek skaitīti kā divi (tie ir divi objekti), un logā tas tiek norādīts: parasti tā ir zīmēšanas kļūda, ko vērts pārbaudīt.

## Ko rāda šī lapa vai viss rasējums

- **Ko rāda šī lapa** skaita objektus, ko lapa rāda: izkārtojumā — modeļa objektus tās skatlodziņos (slānis, kas skatlodziņā iesaldēts, tur netiek skaitīts) plus paša izkārtojuma objektus.
- **Viss rasējums, katrs objekts vienreiz** skaita modeļa telpu vienreiz, ar atzīmēm lapā Modelis, un nesaskaita to, ko vairāki izkārtojumi rāda atkārtoti.

Skaitot to, ko rāda izkārtojums, un to, ko rāda Modelis, iegūst vienādu skaitu tiem pašiem objektiem; nepievienojiet abus vienam vienumam.

## Atkārtoti skaitīt

Ja to pašu bloku atkārtoti skaitāt ar to pašu vienumu, pievienojas tikai jaunais: „22 jau saskaitīti.” Katra atzīme attēlo vienu objektu.

## Pēc slāņa un tipa

Izvēlnē {{ui:Pēc slāņa un veida}} izvēlieties slāni un objekta tipu (apļi, polilīnijas, svītrojumi…): „visi apļi slānī E-LITE”. Atzīmējiet {{ui:Skaitīt arī objektus blokos}}, lai iekļautu tos, kas atrodas bloku definīcijās, katrā vietā, kur bloks ievietots.

## Pēc teksta

Izvēlnē {{ui:Pēc teksta}} ierakstiet tekstu, piemēram, `A3`, un norādiet, vai tam jābūt tieši šādam, jāsatur to vai jābūt kā vesels vārds. Teksta objekti, daudzlīniju norādes teksts un bloku **atribūtu vērtības** tiek skaitītas (tagu atribūts `ITEM = A3` tiek atrasts); izvēlieties {{ui:Atribūtā}}, lai skaitītu tikai vienu atribūtu. Visbiežāk sastopamie teksti uzskaitīti, lai uz tiem noklikšķinātu.

## Kad izmantot Automātiski skaitīt

Izmantojiet {{ui:Automātiski skaitīt}} PDF failiem un simboliem rasējumā, kas nav bloki (zīmēti brīvi vai sadalīti). Zīmētus kā blokus skaitiet šeit.
