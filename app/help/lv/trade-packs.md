---
title: Nozares pakotnes
summary: Pievienojiet nozares bezmaksas mezglus savai cenu bibliotēkai, noņemiet tos vienā solī un kopīgojiet savu bibliotēku kā pakotni.
keywords: nozares pakotne, pakotne, mezgli, veidnes, sākuma vienumi, elektrība, ģipškartons, karkass, krāsošana, betons, grīdas segums, mūrēšana, jumta segums, apšuvums, galdniecība, santehnika, hvac, siltumizolācija, ainavu veidošana, terase, ģenerāluzņēmējs, csi, masterformat, cc0, pievienot, noņemt, kopīgot
from: d3c036be
---

**Nozares pakotne** ir gatavu vienumu kopa vienai nozarei: katram ir sava mērvienība, augstums vai dziļums, atkritumi un savs **mezgls**, t. i., daļas un formulas, kas izmērītu posmu, laukumu vai skaitu pārvērš materiālos. Piemēram, ģipškartona starpsiena ietver savas sliedes, stenderus, plāksnes, skrūves, lenti un špaktele.

Pakotnes tiek pievienotas jūsu [cenu bibliotēkai](topic:price-library), un no turienes jūs pievienojat to vienumus jebkuram apjomu aprēķinam.

## Pakotnes pievienošana

1. Atveriet {{ui:Bibliotēka}} {{ui:Vienumi}} paneļa augšdaļā, tad {{ui:Nozares pakotnes…}}.
2. Izvēlieties {{ui:Mērvienības}}: angļu (LF, SF), metriskās (m, m²) vai abas. Katrs mezgls ir pieejams abās sistēmās.
3. Izvēlieties {{ui:Pievienot}} blakus pakotnei.

Pakotnes vienumi parādās bibliotēkā, atzīmēti ar pakotnes nosaukumu. Lai tos izmantotu, atzīmējiet tos bibliotēkā un izvēlieties {{ui:Pievienot apjomu aprēķinam}}.

:::note
**Pakotne nenes cenas.** Tās vienumi bibliotēkā rāda "set your rate" (iestatiet savu likmi). Likmes ir jūsu: ievadiet tās bibliotēkā vai vienuma redaktorā, vai importējiet savu cenu sarakstu kā CSV un izmantojiet {{ui:Atjaunināt cenas}}.
:::

Ja bibliotēkā jau ir vienums ar tādu pašu nosaukumu un tipu, pakotne atstāj jūsu vienumu, kā tas ir. Pakotnes pievienošana atkārtoti aizstāj tās pašas vienumus ar jauno versiju.

## Pakotnes noņemšana

{{ui:Nozares pakotnes…}} izvēlieties {{ui:Noņemt}} blakus pakotnei, ko pievienojāt, tad vēlreiz, lai apstiprinātu. Katrs vienums, kas no tās nāca, vienā solī pazūd no bibliotēkas. Vienumi, ko jau pievienojāt apjomu aprēķinam, paliek tajā apjomu aprēķinā.

## Kas ir pakotnē

Izvēlieties {{ui:Avoti un informācija}} zem pakotnes, lai redzētu, no kā katrs mezgls ir rakstīts: būvnormatīviem, standartiem un nozares asociāciju uzstādīšanas rokasgrāmatām. Bibliotēkā novietojiet rādītāju virs vienuma, lai izlasītu tā avotus un pieņēmumus, piemēram, stenderu soli vai krāsas izklāšanas normu. Pārbaudiet tos pret savu objektu un produktu datu lapām un mainiet formulas tur, kur tās atšķiras (skatiet [Mezgli un formulas](topic:assemblies)).

Katra pakotne ir atzīmēta ar **Sākuma versija: vēl nav pārskatījis tāmētājs**, līdz to ir pārskatījuši praktizējoši tāmētāji.

Katram vienumam ir arī sava CSI MasterFormat numurs, piemēram, `09 21 16`.

## Kopīgot savu bibliotēku kā pakotni

{{ui:Eksportēt kā pakotni…}} bibliotēkā saglabā to kā pakotnes failu (`.ccpack.json`), ko ikviens var pievienot ar {{ui:Atvērt pakotnes failu…}}. Pēc noklusējuma tajā nav vienumu, kas nāca no pievienotajām pakotnēm, un likmes tajā nav. Atzīmējiet {{ui:Iekļaut manas likmes kā paraugcenas}}, lai nosūtītu arī savas likmes: tās tiek izsūtītas ar norādītu reģionu un datumu, un ikviens, kas pievieno pakotni, izvēlas, vai tās izmantot.

Pakotņu faili ir vienkārši dati, nekad programmas. TakeoffCraft pārbauda katru to daļu, pirms to izmanto, un izlaiž visu, ko nevar nolasīt.
