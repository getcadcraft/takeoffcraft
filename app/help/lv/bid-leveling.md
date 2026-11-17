---
title: Piedāvājumu paketes un piedāvājumu izlīdzināšana
summary: Sadaliet tāmi pa specialitātēm paketēs, nosūtiet katras paketes apjomu apakšuzņēmējiem, salīdziniet atgrieztos piedāvājumus uz viena apjoma un izmantojiet izvēlēto piedāvājumu kā paketes cenu.
keywords: piedāvājumu izlīdzināšana, izlīdzināšana, piedāvājumu pakete, apakšuzņēmējs, apakšuzņēmēja piedāvājums, apjoms, aizpildījums, specialitāte, CSI nodaļa, salīdzināt piedāvājumus, zemākais piedāvājums, piedāvājumu tabula, pretendents, piešķirt, izvēlēts piedāvājums, apakšuzņēmuma cena
from: 856b3088
---

Vispārējais uzņēmējs nosūta katras specialitātes apjomu apakšuzņēmējiem un salīdzina atgrieztos piedāvājumus. TakeoffCraft dara abas lietas no apjomu aprēķina: atveriet {{ui:Export}} › {{ui:Bid packages and leveling…}}.

## Paketes

Ir viena pakete katrai CSI nodaļai, ko izmanto jūsu vienumi (pirmie divi cipari vienuma {{ui:CSI number}}, skatiet [Apjomu aprēķina vienumu izveide](topic:create-items)). Vienumi bez numura veido savu paketi. Katrā paketē rādās tās vienumi, cik lapās ir to atzīmes un mūsu pašu izmaksas (materiāls un darbs pirms uzcenojumiem, no bāzes piedāvājuma).

Izvēlieties {{ui:Scope CSV}}, lai lejupielādētu, ko nosūtīt apakšuzņēmējam: katrs vienums ar CSI numuru, daudzumu, mērvienību un lapām, kurās tas atrodas. Tajā nav cenu. Materiālu piegādātājiem cenu pieprasījuma darbgrāmatā ir detaļu saraksts (skatiet [Tāmes eksportēšana](topic:export-estimate)).

## Ievadīt piedāvājumus

1. Tukšajā rindā zem paketes ierakstiet pretendenta nosaukumu un piedāvājuma summu, un izvēlieties {{ui:Add the bid}}.
2. Ja piedāvājums izslēdz daļu apjoma, atveriet tā {{ui:Left out}} sarakstu un atzīmējiet šos vienumus.
3. Lai labotu nosaukumu vai summu, pārrakstiet to tabulā; poga × noņem piedāvājumu.

Katra izmaiņa ir viens solis, ko {{key:Mod+Z}} atsauc, un piedāvājumi tiek saglabāti kopā ar apjomu aprēķinu.

## Kā piedāvājumi tiek izlīdzināti

Piedāvājumi reti aptver vienu un to pašu apjomu. Izlīdzināšana katru izslēgto vienumu aizpilda ar **aizpildījumu** pēc mūsu pašu izmaksām, tāpēc katrs piedāvājums tiek salīdzināts uz visas paketes:

**Izlīdzināts = piedāvājums + aizpildījumi**

Zemākais izlīdzinātais piedāvājums ir atzīmēts ar **Zemākais**; ja vienāds, tas, kas ievadīts pirmais. **Pret mūsu izmaksām** ir izlīdzinātais piedāvājums mīnus mūsu pašu paketes izmaksas: negatīvs nozīmē zem tām. Piedāvājums, kas šķiet zemākais, var zaudēt, kad tiek ieskaitīts tā trūkstošais apjoms.

Darbgrāmatā ir lapa **Piedāvājumu izlīdzināšana** ar katru paketi, kurai ir piedāvājumi: mūsu tāme, katrs piedāvājums, tā aizpildījumi, izlīdzinātā kopsumma un starpība kā dzīvas formulas, un tas, ko katrs piedāvājums izslēdza.

## Izmantot piedāvājumu kā paketes cenu

Izvēlieties {{ui:Use}} piedāvājumā, un tas kļūst par visas paketes cenu tāmē: paketes pašas cenošana (vienumi, to otrie nosacījumi un mezglu daļas) izkrīt no objekta kopsummas, vienumi paliek kā daudzumi ar mūsu pašu likmēm atsaucei, un viena rinda, **Izvēlētais piedāvājums**, nes piedāvājuma summu. Vienumi, ko piedāvājums izslēdz, paliek pēc mūsu pašu izmaksām, ko izlīdzināšana jau skaitīja kā aizpildījumu. Izvēlieties citu piedāvājumu vai to pašu vēlreiz, lai to atceltu; katrs ir viens solis, ko {{key:Mod+Z}} atsauc.

Piedāvājumu kopsavilkumā apakšuzņēmēju piedāvājumi ir viena rinda izmaksās: virsizdevumi, peļņa un galvojums tiek pieskaitīti klāt kā jebkurām citām izmaksām; pārdošanas nodoklis (tikai no materiāla) un darba slogs (no darba) nē. Darbgrāmatas lapā Tāme izvēlētais piedāvājums ir sava rinda, un uzcenojumu bloks to pieskaita ar dzīvām formulām. Materiālu saraksts izslēdz piešķirtās paketes materiālu, jo apakšuzņēmējs to piegādā.

Paketi alternatīvas tāmes zonā nepārcena: alternatīvas un tāmes zonu starpsummas joprojām izmanto jūsu pašu cenas.

## Piedāvājumi, kas atgriežas pa e-pastu

Jums nav jāievada piedāvājumi ar rokām. {{ui:Send for bids…}} zem paketes nosūta katram apakšuzņēmējam saiti uz lapu, kur viņš ieraksta cenu katrai rindai; {{ui:Get prices}} ievelk to, ko viņi nosūtīja, šajā tabulā. Skatiet [Paketes nosūtīšana cenu aptaujai](topic:bid-invitations).

:::note
Piedāvājuma ievadīšana ar rokām joprojām darbojas, un ar rokām ievadīts piedāvājums un no vietnes ienākušais atrodas blakus. Piedāvājumi, kas atnākuši no vietnes, ir atzīmēti ar **web** (vai **web, novēlots**, ja ienāca pēc termiņa); to cena mainās tikai tad, kad pretendents nosūta jaunu versiju, tāpēc jūsu paša rediģējumi paliek līdz tam.
:::
