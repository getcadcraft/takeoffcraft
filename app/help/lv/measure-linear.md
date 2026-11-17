---
title: Lineāro ķēžu mērīšana
summary: Apjomiet sienas, cauruļvadus, apdari un citus garumus kā ķēdes ar taisniem posmiem, lokiem un Shift 45 grādu pieķeršanos.
keywords: lineārs, garums, ķēde, polilīnija, sienas, lf, lineārās pēdas, loks, līkne, 45 grādi, ortho, pieķeršanās, posmi, polilīnijas garums, atskaitīt, atvere, durvis, sprauga, ievade, koordinātas, attālums, tiešais attālums, polārais
from: c669deff
---

Lineārs vienums mēra garumu. Katra ķēde ir punktu virkne: taisni posmi un loki, ja ieslēdzat loka režīmu. Vienumam var būt jebkurš ķēžu skaits jebkurā lapu skaitā.

Pirms sākat: lapai vajag mērogu ([Iestatīt mērogu](topic:set-the-scale)), un jums vajag lineāro vienumu ([Izveidot apjomu vienumus](topic:create-items)).

Vektoru PDF jūsu klikšķi pieķeras paša rasējuma līnijām: galiem, viduspunktiem un krustpunktiem ([Pieķerties rasējuma līnijām](topic:snap-to-the-drawing); {{key:F3}} to izslēdz).

## Zīmēt ķēdi

1. Noklikšķiniet uz lineārā vienuma zem {{ui:Vienumi}}.
2. Izvēlieties {{ui:Lineārs}} rīkjoslā vai nospiediet {{key:L}}.
3. Noklikšķiniet ķēdes sākumā.
4. Noklikšķiniet katrā stūrī gar to.
   Statusa josla rāda "Garums" (ķēde līdz šim brīdim līdz rādītājam) un "posms" (posms, ko zīmējat), pēdās un collās.
5. Pabeidziet ķēdi: veiciet dubultklikšķi uz pēdējā punkta, nospiediet {{key:Enter}} vai veiciet labo klikšķi.
   Ķēde tiek zīmēta vienuma krāsā un kļūst par atlasīto atzīmi. Vienuma garums sarakstā {{ui:Vienumi}} un tabulā {{ui:Daudzumi}} pieaug.

Rīks paliek ieslēgts uz {{ui:Lineārs}}, tāpēc nākamo ķēdi varat sākt uzreiz. Nospiediet {{key:Esc}}, lai atgrieztos pie {{ui:Atlasīt}}.

Zīmējot:

- {{key:Backspace}} (vai {{key:Delete}}) noņem pēdējo punktu.
- {{key:Esc}} izmet nepabeigto ķēdi.
- Vilkšana panorē lapu, un ritenis tālina, nepievienojot punktus.

:::mac
Uz Mac skārienpaliktņa labais klikšķis ir divu pirkstu klikšķis (ieslēdziet sekundāro klikšķi sistēmas iestatījumos sadaļā Trackpad). TakeoffCraft nolasa tikai sekundāro pogu, tāpēc Control-klikšķis var tikt uzskatīts par parastu klikšķi un pievienot punktu. Dubultklikšķis vai {{key:Enter}} vienmēr pabeidz.
:::

:::touch
Uz skārienekrāna pieskarieties, lai novietotu punktus, vilciet ar vienu pirkstu, lai panorētu, un saspiediet ar diviem, lai tuvinātu. Pabeidziet ar ilgu nospiešanu, dubultpieskārienu vai {{ui:Pabeigt}} joslā zem lapas ({{ui:Atpakaļ}} atgriež pēdējo punktu). Skatiet [Problēmu novēršana](topic:troubleshooting#touch-screens).
:::

## Taisnas līnijas 45° soļos

Turiet {{key:Shift}}, kamēr novietojat punktu. Posms no pēdējā punkta pieķeras tuvākajam 0°, 45°, 90° vai 135° virzienam, saglabājot garumu, ko vilkāt pa to. Statusa josla atgādina: "Shift pieķer 45°".

Loka režīmā tas attiecas uz to, kur loks beidzas: loka horda iet 45° soļos no vietas, kur tas sākas. Punkts, uz kura noklikšķināt uz līknes, nekad netiek pieķerts.

## Loki un izliektas sienas

1. Zīmējot ķēdi, novietojiet punktu, kur līkne sākas.
2. Ieslēdziet loka režīmu: izvēlieties {{ui:Loks}} rīkjoslā vai nospiediet {{key:R}}. Poga paliek nospiesta.
3. Noklikšķiniet jebkurā punktā uz līknes, kaut kur tās vidū.
   Statusa josla pievieno "(loks: noklikšķiniet, kur tas beidzas)", un priekšskatījums liecas caur jūsu punktu.
4. Noklikšķiniet, kur līkne beidzas.
   Loks tiek pievienots. Tā garums ir precīzs loka garums, nevis virkne īsu hordu.
5. Noklikšķiniet citu punktu nākamajā līknē un tās galu, lai turpinātu zīmēt lokus, vai nospiediet {{key:R}} vēlreiz, lai atgrieztos pie taisniem posmiem.

{{key:Backspace}} vai {{key:Esc}} vispirms atmet gaidošo punktu uz līknes; nospiediet vēlreiz, lai noņemtu punktus kā parasti.

## Ievadīt garumus un koordinātas

Pēc pirmā punkta varat ierakstīt, kur atrodas nākamais, nevis noklikšķināt. Ierakstiet ciparu, `@` vai `#`: statusa joslā atveras lodziņš {{ui:Ievade}} ar to, ko ierakstījāt. Nospiediet {{key:Enter}}, lai novietotu punktu; lodziņš paliek atvērts nākamajam.

| Ievade | Nākamais punkts iet |
|---|---|
| `12'6"` | 12'-6" no pēdējā punkta, virzienā uz rādītāju (norādiet virzienu, tad ierakstiet garumu) |
| `12'6"<45` | 12'-6" leņķī 45°, skaitot pretēji pulksteņrādītājam no ekrāna labās puses (`<90` ir augšup, `<-90` lejup) |
| `@6',-4'` | 6' pa labi un 4' lejup no pēdējā punkta |
| `6',4'` (vai `#6',4'`) | 6' pa labi un 4' augšup no šīs ķēdes pirmā punkta |

Garumi tiek ievadīti kā visur TakeoffCraft ([Ievades formāti](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pēdas), `30"`, `3.2 m`. "Pa labi" un "augšup" ir tā, kā redzat lapu, arī tad, kad PDF lapa ir pagriezta.

{{key:Enter}} uz tukša lodziņa pabeidz ķēdi, tāpat kā {{key:Enter}} uz lapas; {{key:Esc}} aizver lodziņu un ļauj ķēdei turpināties. Ievadītie punkti iet pa tiem pašiem noteikumiem kā klikšķi: atskaitījumi, loki un laukuma aizvēršana darbojas visi. Tas pats lodziņš darbojas {{ui:Laukums}} un {{ui:Izgriezums}}; pēc riņķa centra tas ņem rādiusu.

## Atskaitīt daļu no ķēdes

Sienas ķēde, kas iet garām durvīm vai veikala logam, var tikt zīmēta taisni cauri, un tomēr skaitīta tikai siena: posmi pāri atverei ir **atskaitījumi**. Tie tiek zīmēti punktēti un plāni, un netiek skaitīti.

Zīmējot:

1. Novietojiet punktu, kur atvere sākas.
2. Izvēlieties {{ui:Atskaitīt}} rīkjoslā vai nospiediet {{key:E}}. Poga paliek nospiesta, un statusa josla saka, ka nākamie posmi ir atskaitījumi.
3. Noklikšķiniet, kur atvere beidzas. Posms tiek zīmēts punktēts; "Garums" statusa joslā to izlaiž.
4. Nospiediet {{key:E}} vēlreiz un turpiniet gar sienu.

Pēc zīmēšanas: atlasiet ķēdi. Zem **Atlasītā atzīme** katram posmam ir {{ui:Atskaitīt}} lodziņš: atzīmējiet, lai atskaitītu šo posmu, noņemiet atzīmi, lai to atkal skaitītu. Katra izmaiņa ir viens atsaukšanas solis.

Ķēdei vienmēr paliek vismaz viens skaitāms posms. Panelis tad rāda **Atskaitījumi** (atskaitītais garums) un **Uzzīmēts** (visa ķēde); **Garums**, vienuma daudzums, sienas laukums un izmaksas visi izmanto garumu bez atskaitījumiem. 3D pārbaudes skats atstāj spraugu sienā, atzīmētais PDF zīmē atskaitījumus punktēti, un eksportētā lapa **Atzīmes** tos uzskaita.

Stūra pārvietošana saglabā atskaitījumus. Punktu pievienošana vai noņemšana (ķēdi zīmējot no jauna) sākas bez tiem.

## Aplūkot ķēdes informāciju

Izvēlieties {{ui:Atlasīt}} ({{key:V}}) un noklikšķiniet uz ķēdes. Labajā pusē **Atlasītā atzīme** rāda:

- vienumu, kuram tā pieder (izvēlieties citu lineāro vienumu sarakstā, lai pārvietotu ķēdi tur),
- lapu,
- **Garums** pēdās un collās un LF,
- posmu skaitu **Posmi** un **Sienas laukumu**, ja vienumam ir augstums,
- katra posma garumu, aiz lokiem rakstīts "(loks)", un tā {{ui:Atskaitīt}} lodziņu.

Lapā katrs atlasītās ķēdes posms ir apzīmēts ar savu garumu.

## Labot ķēdi

- **Pārvietot punktu**: atlasiet ķēdi un velciet vienu no tās kvadrātveida stūra rokturiem. Turiet {{key:Shift}}, lai pārvietotais posms pieķertos 45° soļiem. Lokam paliek tā izliekums.
- **Saliekt loku**: atlasīta ķēde rāda apaļu rokturi katra loka vidū. Velciet to: loks iet caur vietu, kur atlaižat, tāpēc tas izliecas vairāk, mazāk vai otrādi. Ja to velk uz taisnās līnijas starp tā galiem, tas kļūst par taisnu posmu. {{key:Mod+Z}} to atsauc ("Saliekt loku").
- **Dzēst ķēdi**: atlasiet to un nospiediet {{key:Delete}}, izvēlieties {{ui:Dzēst}} rīkjoslas izvēlnē {{ui:Vairāk}} vai {{ui:Dzēst atzīmi}} panelī.
- **Atsaukt**: {{key:Mod+Z}}; atkārtot ar {{key:Mod+Y}}.

Vēl nevar ievietot punktu ķēdes vidū. Dzēsiet ķēdi un zīmējiet to no jauna.

## Sienas laukums

Dodiet lineārajam vienumam {{ui:Augstums}} (piemēram, `9'-0"`). Tad tas parāda **Sienas laukums (A)** = garums × augstums, SF (vai m² metriskam vienumam), un sienas laukums nonāk eksporta izklājlapas piezīmju kolonnā. Izmantojiet to mezglos dēļiem, krāsai vai siltumizolācijai: skatiet [Mezgli un formulas](topic:assemblies).
