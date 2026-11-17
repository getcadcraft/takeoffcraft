---
title: Automātiski saskaitīt simbolu
summary: Apvelciet vienu simbolu, ļaujiet TakeoffCraft atrast pārējos šajā lapā vai visās atvērtajās lapās, pārskatiet atbilstības ar slīdni un pievienojiet tās vienā solī.
keywords: jebkurš leņķis, pagriezts, apgriezts, cits mērogs, dažāds mērogs, automātiskā skaitīšana, automātiska skaitīšana, simbolu meklēšana, atrast simbolus, raksts, veidne, atbilstība, noteikt, skaitīšanas rīks
from: fa68a6c1
---

{{ui:Auto count}} atrod katru simbola kopiju pēc tam, kad esat apvilcis vienu. Pēc tam pārskatiet atbilstības lapā un pievienojiet pieņemtās kā skaitīšanas atzīmes. Tas ir palīgs, nevis garantija: vienmēr pārskatiet pirms pievienošanas.

## Atrast simbolus

1. Izveidojiet vai noklikšķiniet skaitīšanas vienumu sadaļā {{ui:Items}}.
2. Atveriet lapu, kurā parādās simbols.
3. Rīkjoslā izvēlieties {{ui:Auto count}} vai nospiediet {{key:S}}.
   Lapas augšdaļā parādīsies josla: "Velciet rāmi ap vienu simbolu šajā lapā."
4. Lai meklētu visās atvērtajās lapās, nevis tikai šajā, atzīmējiet {{ui:Search all open sheets}}.
5. Tuviniet, lai simbols būtu viegli saskatāms, un velciet rāmi cieši ap vienu tā kopiju. Iekļaujiet visu simbolu; tam apkārtējā tukšā papīra daļa tiek apgriezta.
   Joslā redzams "Meklē…" ar progresa joslu un pogu {{ui:Cancel}}. Lapa paliek atsaucīga: varat tuvināt, panoramēt un pārvietoties starp lapām. Izvēloties citu rīku vai nospiežot {{key:Esc}}, meklēšana tiek atcelta.
6. Kad meklēšana ir pabeigta, atbilstības parādās lapā kā rāmji vienuma krāsā, un joslā redzams kopsavilkums, piemēram, "22 atbilstības, 19 jāpievieno (3 jau saskaitītas). Noklikšķiniet uz rāmja, lai to noraidītu vai atjaunotu."

{{ui:Auto count}} laikā velkot pa lapu tiek zīmēts rāmis, nevis panoramēts. Lai panoramētu, turiet nospiestu {{key:Space}} un velciet, vai velciet ar vidējo pogu.

## Pārskatīt atbilstības

- **Noklikšķiniet uz rāmja**, lai to noraidītu. Noraidīts rāmis ir punktēts un pārsvītrots. Noklikšķiniet vēlreiz, lai to atjaunotu.
- **Pārvietojiet slīdni {{ui:Match}}** (no 50% līdz 95%, sākot ar 75%). Augstāka vērtība rāda tikai ciešas atbilstības; zemāka rāda vaļīgākas. Slīdnis tikai filtrē atrasto; tas neveic jaunu meklēšanu.
- **Jau saskaitīts**: atbilstības vietās, kur jau ir šī vienuma skaitīšanas atzīme, sākumā tiek noraidītas, lai nekas netiktu saskaitīts divreiz.
- **Citas lapas**: ja meklējāt visās atvērtajās lapās, pārvietojieties starp lapām ar lapu sarakstu vai ar {{key:PageDown}} un pārskatiet katru. Kopsavilkumā norādīts, cik lapām ir atbilstības.

## Pievienot tās

Izvēlieties {{ui:Add}}. Poga parāda, cik atzīmes pievienot, piemēram, "Pievienot 19 atzīmes".
Skaitīšanas atzīmes tiek pievienotas katra pieņemtā rāmja centrā: "Vienumam "Duplex receptacle" pievienotas 19 skaitīšanas atzīmes. Ctrl+Z noņem tās visas."

Visa partija ir viens atsaukšanas solis, tāpēc viens {{key:Mod+Z}} to noņem.

Lai atmestu pārskatīšanu, nepievienojot neko, izvēlieties {{ui:Discard}} vai nospiediet {{key:Esc}}. Izvēloties citu rīku, pārskatīšana arī tiek atmesta.

## Ko tas atrod un ko palaiž garām

TakeoffCraft salīdzina zīmējumu pēc pikseļiem ar apvilkto simbolu.

- Tas atrod simbolu, kas pagriezts par 0°, 90°, 180° un 270°. Lai to atrastu arī jebkurā leņķī, atzīmējiet {{ui:Any angle (slower)}} automātiskās skaitīšanas joslā, pirms velkat rāmi: tas pārbauda ik pēc 15°, tad precizē katru atradumu līdz grādam un pusei. Tas aizņem apmēram sešas reizes ilgāk. Spoguļattēlā simbols netiek atrasts (ja vien simbols spoguļattēlā neizskatās tāpat).
- Ja ir atzīmēts {{ui:Search all open sheets}}, lapa citā mērogā tiek meklēta simbolam tajā piemērotajā izmērā: simbols, kas zīmēts mērogā uz 1/8" plāna, ir uz pusi mazāks nekā uz 1/4" plāna, un tomēr tiek atrasts. Šāda lapa tiek meklēta arī pēc rāmja paša izmēra — birkām un simboliem, kas uz katras lapas iespiesti vienā izmērā. Tam nepieciešams mērogs abās lapās; lapa bez mēroga tiek meklēta tikai pēc rāmja izmēra.
- Ļoti līdzīgi simboli var sakrist savā starpā: divkāršs un četrkāršs kontaktligzdas simbols vai divas birkas, kas atšķiras par vienu burtu. Paceliet slīdni, līdz paliek tikai pareizie, un pārējos noraidiet ar roku.
- Simbols, ko šķērso citas līnijas, šrafējums vai teksts, saņem zemāku vērtējumu un var prasīt zemāku slīdņa iestatījumu.
- Ļoti mazi rāmji tiek noraidīti: "Šis rāmis ir pārāk mazs. Velciet to ap visu simbolu." Tukšs rāmis arī tiek noraidīts: "Šis rāmis ir gandrīz tukšs. Velciet to ap simbolu."
- Lapa, kas šim simbolam izmērā būtu ļoti liela, tiek izlaista, un kopsavilkumā rakstīts "1 lapa bija pārāk liela, lai to meklētu ar šī simbola izmēru." Apvelciet lielāku simbolu vai saskaitiet šo lapu ar roku.

Ja nekas nav atrasts, statusa joslā rakstīts: "Nav atbilstību. Pazeminiet atbilstības slīdni vai apvelciet simbolu precīzāk."

## Ātrums un pārlūkprogrammas

Meklēšana notiek fona procesā, tāpēc lapa paliek atsaucīga, un to jebkurā brīdī var atcelt. Katra lapa vispirms tiek uzzīmēta darba izmērā pašā lapā, kas var uz brīdi apturēt ļoti lielas lapas darbību. Tas darbojas jaunākajās Chrome, Edge, Firefox un Safari pārlūkprogrammās. Meklējot daudzās lapās, prasa ilgāku laiku; progresa josla virzās lapu pa lapai. Bezsaistē automātiskā skaitīšana darbojas, kad lietotnes joslā redzams {{ui:Offline ready}}: {{ui:Save for offline}} saglabā arī fona procesu. Skatiet [Darbs bezsaistē](common:offline).
