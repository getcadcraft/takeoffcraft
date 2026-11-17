---
title: Laukumu mērīšana ar izgriezumiem
summary: Apvelciet grīdas, griestus un pārsegumus, izgrieziet tajos caurumus, pievienojiet izliektas malas, riņķus un apaļus izgriezumus, un nolasiet laukumu un perimetru.
keywords: telpas aizpildīšana, aizpildīšana, krāsas spainis, klikšķis telpā, automātiskais laukums, atskaitījums, kolonna, šahta, atskaitīt no vairākiem vienumiem, laukums, kontūra, kvadrātpēdas, sf, izgriezums, caurums, atskaitīt, riņķis, apaļš, loks, perimetrs, grīda, griesti, pārsegums
from: 34648db7
---

Laukuma vienums mēra ierobežotu laukumu. Katrai kontūrai var izgriezt caurumus (šahtu, kolonnu, puķu kasti), un tās malas var būt taisnas vai izliektas.

Pirms sākat: lapai vajag mērogu ([Iestatīt mērogu](topic:set-the-scale)), un jums vajag laukuma vienumu ([Izveidot apjomu vienumus](topic:create-items)).

## Apvilkt laukumu

1. Noklikšķiniet uz laukuma vienuma zem {{ui:Vienumi}}.
2. Izvēlieties {{ui:Laukums}} rīkjoslā vai nospiediet {{key:A}}.
3. Noklikšķiniet katrā telpas vai pārseguma stūrī pēc kārtas. Turiet {{key:Shift}} 0°, 45° un 90° malām.
   No trešā punkta sākot kontūra aizpildās, un statusa joslā parādās "Laukums" un "perimetrs". Ap pirmo punktu parādās neliels gredzens.
4. Aizveriet kontūru: noklikšķiniet uz pirmā punkta (tā gredzena iekšpusē), nospiediet {{key:Enter}}, veiciet dubultklikšķi vai labo klikšķi.
   Laukums tiek viegli aizpildīts vienuma krāsā, apzīmēts ar savām kvadrātpēdām un kļūst par atlasīto atzīmi.

{{key:Backspace}} noņem pēdējo stūri; {{key:Esc}} izmet kontūru.

Kontūra, kas krustojas pati ar sevi, tiek noraidīta: "Kontūra krustojas pati ar sevi, tāpēc tās laukums būtu nepareizs. Zīmējiet to vēlreiz, bez krustošanās." Astoņnieka formu zīmējiet kā divus laukumus.

## Izliektas malas

Zīmējot kontūru, ieslēdziet loka režīmu ({{ui:Loks}} vai {{key:R}}). Pēc stūra noklikšķiniet punktu gar līkni un tad vietā, kur līkne beidzas. Lai aizvērtu kontūru ar līkni, veiciet pēdējo klikšķi uz pirmā punkta. Laukums un perimetrs izmanto precīzu līkni. Nospiediet {{key:R}} vēlreiz taisnām malām. Lai vēlāk mainītu līkni, atlasiet laukumu un velciet apaļo rokturi loka vidū. Skatiet [Lineāro ķēžu mērīšana](topic:measure-linear#arcs-and-curved-walls).

## Riņķis

1. Ar laukuma vienumu izvēlieties {{ui:Riņķis}} vai nospiediet {{key:O}}.
2. Noklikšķiniet centrā.
3. Noklikšķiniet jebkurā punktā uz malas.
   Kamēr pārvietojat, statusa joslā rādīts rādiuss un laukums. Riņķis tiek pievienots kā laukuma atzīme ar precīzu laukumu un perimetru.

## Aizpildīt telpu ar vienu klikšķi

Kad telpas ir zīmētas kā slēgtas sienas, {{ui:Telpa}} ({{key:B}}) noņem grīdu ar vienu klikšķi:

1. Izvēlieties laukuma vienumu (piemēram, grīdas apdari) un dodiet lapai tās mērogu.
2. Izvēlieties {{ui:Telpa}} grupā {{ui:Apjomu aprēķins}} vai nospiediet {{key:B}}.
3. Noklikšķiniet telpas iekšpusē, atvērtajā grīdā (ne uz līnijas vai uzraksta).

TakeoffCraft nolasa lapas līnijas, atrod telpu ap klikšķi un apvelk to pa sienu iekšējām virsmām kā pašreizējā vienuma laukumu. Durvju ailas līdz **4'-0"** tiek uzskatītas par slēgtām, tāpēc kontūra iet taisni pāri durvju ailai. **Iestatījumi › TakeoffCraft › Telpas aizpildīšana slēdz ailas līdz** maina šo platumu (no 3'-0" līdz 8'-0"). Telpu nosaukumi, mēbeles un iekārtas telpā neveido caurumus.

Tas atsakās, norādot iemeslu, kad:

- klikšķis ir uz līnijas ("Tas ir uz līnijas");
- telpa nav slēgta: aila, kas ir platāka par iestatījumu, ļauj telpai izplūst līdz lapas malai. Palieliniet iestatījumu vai apvelciet šo telpu ar roku ar {{ui:Laukums}};
- telpa ir sīka (simbols, nevis telpa).

Kad durvis ir platākas par iestatījumu, aizpildījums izplūst līdz nākamajai telpai un apvelk abas kopā: atsauciet ({{key:Mod+Z}}), palieliniet iestatījumu un noklikšķiniet vēlreiz. Pārbaudiet kontūru kā jebkuru laukumu: velciet tās stūrus, lai to izlabotu. Skenēta lapa darbojas tāpat, bet tās līnijām jābūt pietiekami tumšām; gaiši pelēka līnija var neapturēt aizpildījumu.

## Izgriezt caurumu laukumā

1. Izvēlieties {{ui:Atlasīt}} ({{key:V}}) un noklikšķiniet uz laukuma. Tam parādās kvadrātveida rokturi stūros.
2. Izvēlieties {{ui:Izgriezums}} rīkjoslā (vai nospiediet {{key:X}}), vai {{ui:Pievienot izgriezumu}} zem **Atlasītā atzīme**.
3. Noklikšķiniet caurumu stūros laukuma iekšpusē. Loka režīms šeit arī darbojas.
4. Aizveriet to kā laukumu: noklikšķiniet uz pirmā punkta, nospiediet {{key:Enter}}, veiciet dubultklikšķi vai labo klikšķi.
   Caurums paliek neaizpildīts, un statusa joslā rakstīts "Izgriezums pievienots. Zīmējiet citu vai nospiediet Esc."
5. Zīmējiet vēl caurumus tajā pašā laukumā vai nospiediet {{key:Esc}}.

Apaļam caurumam izvēlieties {{ui:Pievienot apaļu izgriezumu}} zem **Atlasītā atzīme**, noklikšķiniet tā centrā un tad punktā uz malas.

Izgriezumam jābūt pilnībā laukuma iekšpusē un tas nedrīkst pārklāties ar citu izgriezumu. Citādi TakeoffCraft to noraida: "Izgriezumam jāatrodas pilnībā laukuma iekšpusē." vai "Izgriezumi nevar pārklāties savā starpā."

Lai izņemtu pēdējo caurumu, izvēlieties {{ui:Noņemt pēdējo izgriezumu}}.

## Atskaitījumi: kolonnas, šahtas un atveres, kas atskaitītas no vairākiem vienumiem

Izgriezums pieder vienai laukuma atzīmei. **Atskaitījums** tiek zīmēts vienreiz un tiek atskaitīts no katra laukuma, ko tas pārklāj, izvēlētajiem vienumiem: zīmējiet kolonnas vienreiz, un tās tiek atskaitītas no grīdas apdares, griestiem un pārseguma vienlaikus.

1. Izveidojiet laukuma vienumu tām, piemēram, "Kolonnas".
2. Tā vienuma iestatījumos atzīmējiet **Atskaitījums: tā atzīmes atskaita savu laukumu no citiem vienumiem**. Parādās jūsu citu laukuma vienumu saraksts, visi atzīmēti: noņemiet atzīmi no tiem, kurus atskaitījumi nedrīkst skart (piemēram, krāsa uz sienām).
3. Veiciet kolonnu apjomu ar {{ui:Laukums}} vai {{ui:Riņķis}}, kā parasti. Katra tiek zīmēta punktētā līnijā.

Katra atzīmētā vienuma laukuma atzīme tajā pašā lapā zaudē daļu, ko pārklāj atskaitījums: visu atskaitījumu, ja tas atrodas iekšpusē, tikai pārklājošo daļu, ja tas šķērso malu, un neko izgriezuma iekšpusē. Atlasītā laukuma panelis rāda **Atskaitījumi** un atlikušo laukumu. Vienuma daudzums, tā mezglu formulas, izmaksas, 3D pārbaudes skats un eksports izmanto atlikušo laukumu; tāmes piezīmes norāda, cik daudz atskaitījumi atņēma. Pats atskaitījuma vienums skaita savu laukumu (atstājiet tā izmaksas nulles, ja to necenojat).

Atskaitījumam jābūt **izliektam**: taisnstūrim, riņķim vai jebkurai kontūrai bez iekšēja stūra. TakeoffCraft atsakās to zīmēt, ja tā nav; L formas šahtu zīmējiet kā divus atskaitījumus. Atskaitījumiem nevar būt izgriezumi, un divi savstarpēji pārklājoši atskaitījumi skaitās abi.

Perimetrs (`P`) nemainās: atskaitījumi atskaita tikai laukumu.

## Nolasīt laukumu

Atlasiet laukumu. **Atlasītā atzīme** rāda:

| Rinda | Nozīme |
|---|---|
| Laukums | Tīrais laukums: kontūra mīnus izgriezumi. Tas ir, ko vienums skaita. |
| Kontūra | Bruto laukums kontūras iekšpusē (rāda, ja ir izgriezumi). |
| Izgriezumi | Cik caurumu un to kopējais laukums. |
| Perimetrs | Kontūras malas garums **plus** katra izgriezuma malas ("ar izgriezumiem"). |

Perimetrs iekļauj izgriezumu malas tīši, piemēram, malu veidnēm vai pamatnei, kas iet arī ap caurumu. Ja jums vajag tikai ārējo malu, turiet caurumus ārpus šī vienuma vai mēriet ārējo malu kā lineāro ķēdi.

Vienuma {{ui:Mērvienība}} nosaka, kā kopējais rādītājs tiek ziņots: SF, SY vai m². Panelis **Atlasītā atzīme** un statusa josla vienmēr rāda kvadrātpēdas.

## Labot laukumu

- **Pārvietot stūri**: atlasiet laukumu un velciet stūra rokturi (caurumiem arī ir rokturi). Ja jaunā forma krustotos pati ar sevi vai izspiestu caurumu ārpus laukuma, stūris tiek atgriezts: "Punkts tika atgriezts."
- **Pārvietot uz citu vienumu**: izvēlieties citu laukuma vienumu sarakstā **Vienums** zem **Atlasītā atzīme**.
- **Dzēst**: {{key:Delete}}, {{ui:Dzēst}} rīkjoslas izvēlnē {{ui:Vairāk}} vai {{ui:Dzēst atzīmi}}.

## Dziļums tilpumiem

Dodiet laukuma vienumam {{ui:Dziļums}} (piemēram, `0'-4"` pārsegumam) un izmantojiet `A * H / 27` mezgla komponentē, lai iegūtu kubikjardus. Skatiet [Mezgli un formulas](topic:assemblies).
