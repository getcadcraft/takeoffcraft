---
title: Problēmu novēršana
summary: Simptomi, cēloņi un risinājumi ziņojumiem un pārsteigumiem, ar kuriem var sastapties TakeoffCraft, citēti tā, kā lietotne tos rāda.
keywords: problēmas, kļūdas, nedarbojas, labošana, palīdzība, noraidīts, nemēra, nav mēroga, trūkst atzīmju, eksports neizdevās, bezsaiste, skāriens
from: cd319c9b
---

TakeoffCraft paskaidro lielāko daļu atteikumu statusa joslā loga apakšā. Atrodiet tālāk esošo ziņojumu.

## Failu atvēršana

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| PDF lasītājs nevarēja ielādēt. Lai mēģinātu vēlreiz, pārlādējiet lapu. | Lietotnes PDF lasītājs nav ielādējies, parasti tāpēc, ka esat bezsaistē un lietotne nekad nav saglabāta darbam bezsaistē. | Atjaunojiet savienojumu un pārlādējiet. Pēc tam izvēlieties {{ui:Saglabāt bezsaistei}} un nogaidiet {{ui:Gatavs darbam bezsaistē}}; skatiet [Darbs bezsaistē](common:offline). |
| (name) ir aizsargāts ar paroli. Atveriet kopiju bez aizsardzības. | PDF atvēršanai vajag paroli. | Pieprasiet kopiju bez aizsardzības vai noņemiet paroli PDF programmā, kurai uzticaties. |
| (name) nevarēja nolasīt kā PDF (…) | Fails ir bojāts vai patiesībā nav PDF. | Lejupielādējiet to vēlreiz vai saglabājiet no programmas, kas to izveidoja. |
| (name) jau ir atvērts. | Tas pats PDF (tāds pats saturs) ir atvērts. | Nav jādara nekas. |
| TakeoffCraft atver PDF un .takeoff.json projektus. Izlaists: … | Citi failu tipi tika izlaisti. | Vispirms pārveidojiet rasējumus PDF. |
| Nekas nenotiek, kad nometu failus | Faili tika nomesti ārpus pārlūka loga, vai pārlūks atvēra PDF jaunā cilnē. | Nometiet uz pašas TakeoffCraft lapas; rāmis "Nometiet PDF failus vai .takeoff.json" rāda, kad tas darbosies. |
| Lielas komplekta atvēršana aizņem laiku | Katrs PDF tiek nolasīts pilnībā, lai to identificētu. | Nogaidiet, līdz pazūd ziņojums "Opening (name)…". Sīkbildes tiek aizpildītas, ritinot. |

## Mērīšana

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| Vispirms atveriet PDF. | Nav atvērta neviena lapa. | Atveriet PDF. |
| Šai lapai vēl nav mēroga, tāpēc to nevar izmērīt. Vispirms izvēlieties iepriekš iestatītu mērogu vai kalibrējiet (skaitīšana darbojas arī bez tā). | Lineārajiem, laukuma, riņķa un izgriezuma rīkiem vajadzīgs mērogs. | [Iestatiet mērogu](topic:set-the-scale). |
| Vispirms izveidojiet lineāru vienumu (nosauciet to panelī Vienumi), tad noklikšķiniet uz lapas. | Nav tāda tipa vienuma. | Aizpildiet atvērto {{ui:Jauns vienums}} veidlapu un izvēlieties {{ui:Pievienot}}. |
| Vispirms izvēlieties vienumu, ko aprēķināt (panelis Vienumi). | Pašreizējais vienums tika dzēsts. | Noklikšķiniet uz vienuma zem {{ui:Vienumi}}. |
| Posmam vajadzīgi vismaz divi punkti. | Jūs pabeidzāt pēc viena klikšķa. | Noklikšķiniet vismaz uz diviem punktiem. |
| Laukumam vajadzīgi vismaz trīs punkti. | Pārāk maz stūru. | Noklikšķiniet vismaz uz trim stūriem. |
| Kontūra krustojas pati ar sevi, tāpēc tās laukums būtu nepareizs. Zīmējiet to vēlreiz bez krustošanās. | Astoņnieka forma. | Zīmējiet to kā divus laukumus vai ejiet gar malu pēc kārtas. |
| Šie punkti neaptver laukumu. | Visi punkti atrodas uz vienas līnijas. | Noklikšķiniet uz stūriem, kas aptver telpu. |
| Vispirms atlasiet laukuma atzīmi (rīks Atlasīt), tad izvēlieties Izgriezums un zīmējiet caurumu tā iekšpusē. | {{ui:Izgriezums}} prasa atlasītu laukumu. | Nospiediet {{key:V}}, noklikšķiniet uz laukuma, tad {{key:X}}. |
| Izgriezumam jāatrodas pilnībā laukuma iekšpusē. | Caurums krustojas ar kontūru vai iziet ārpus tās. | Zīmējiet caurumu laukuma iekšpusē. |
| Izgriezumi nevar pārklāties savā starpā. | Divi caurumi pārklājas. | Zīmējiet vienu caurumu ap abiem vai turiet tos atsevišķi. |
| … Punkts tika atgriezts vietā. | Velkams stūris liktu kontūrai krustoties pašai ar sevi vai izstumtu caurumu ārpus. | Velciet uz vietu, kas saglabā derīgu formu. |
| Noklikšķiniet punktu uz riņķa malas, tālu no tā centra. | Otrais klikšķis bija pārāk tuvu centram. | Noklikšķiniet tālāk. |
| Klikšķi panoramē lapu, nevis pievieno punktus | Rādītājs kustējās vairāk nekā dažus pikseļus, kamēr poga bija nospiesta; tas tiek uzskatīts par vilkšanu. | Noklikšķiniet, nekustinot, īpaši skārienpaliktnī. |
| Shift nepiesaista | Jūs novietojat punktu uz loka vai zīmējat riņķi. | 45° piesaiste attiecas tikai uz taisniem posmiem. |
| Punkti pārlec uz tuvējo līniju | Piesaiste rasējuma līnijām ir ieslēgta. | Tuviniet, lai noklikšķinātu starp līnijām, vai nospiediet {{key:F3}}, lai izslēgtu piesaisti. |
| Piesaistes marķieris neparādās | Piesaiste ir izslēgta, lapa ir skenējums vai rīks nepiesaista (Skaitīt, Automātiski skaitīt, ielīmēšana). | Nospiediet {{key:F3}}; skenējumā nav līniju, uz kurām piesaistīt. |
| Garums ir nepareizs | Mērogs ir nepareizs (bieži PDF, kas mainīts izmērā ar iepriekš iestatītu mērogu). | Izmantojiet {{ui:Pārbaudīt}} uz zināma izmēra, tad {{ui:Kalibrēt}}. |

## Mērogs

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| Izvēlieties divus punktus tālāk viens no otra. | Kalibrēšanas punkti gandrīz atrodas viens uz otra. | Kalibrējiet pēc garāka izmēra. |
| Ziņojums kalibrēšanas dialogā, piemēram, "Attālumu nevarēja nolasīt" | Attālums ir tādā formātā, ko TakeoffCraft nevar nolasīt. | Skatiet [Garuma, likmes un procentu ievadi](topic:entry-formats). |
| Šai lapai vēl nav mēroga, tāpēc nav ko pārbaudīt. Kalibrējiet to vai izvēlieties iepriekš iestatītu. | {{ui:Pārbaudīt}} lapā bez mēroga. | Vispirms iestatiet mērogu. |
| Saraksts {{ui:Iepriekš iestatīts}} ir pelēks | Nav atvērta neviena lapa. | Atveriet PDF. |

## Daudzumi un formulas

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| Nepilnīgs: … (nav kopsummās) | Formulas kļūda vai atzīmes lapās bez mēroga. | Skatiet [Daudzumu un tāmes lasīšana](topic:read-quantities#the-incomplete-warning). |
| +(n) bez mēroga blakus vienumam | Daļa no tā atzīmēm atrodas lapās bez mēroga. | Iestatiet šīm lapām mērogu. |
| Formulas kļūda: … | Formulu nevar aprēķināt. | Skatiet [Formulu valoda](topic:formulas#errors). |
| Šim vienumam ir atzīmes, tāpēc tā tipu nevar mainīt. | Tips tiek bloķēts, kad ir atzīmes. | Izveidojiet jaunu citu tipa vienumu un ar to pārzīmējiet atzīmes. |
| Vienumam vajag nosaukumu. | Nosaukuma lauks tika iztukšots. | Ievadiet nosaukumu. |
| Ievadiet summu, piemēram, 12.50. / Ievadiet procentus, piemēram, 10 vai 7.5. | Likmi vai atkritumus nevarēja nolasīt. | Skatiet [Garuma, likmes un procentu ievadi](topic:entry-formats). |
| Kopsumma šķiet divkārša | Vienumam ir savas likmes un komponentes, kas nes to pašu izmaksu. | Iestatiet vienuma pašas likmes uz 0, kad komponentes nes izmaksu. |
| Šī vienuma atzīmes atrodas PDF, kas nav atvērti. | Jūs noklikšķinājāt uz vienuma, kura visas atzīmes atrodas PDF, ko neesat atvēruši. | Atveriet tos PDF; to nosaukumi ir uzskaitīti zem {{ui:Lapas}}. |

## Automātiski skaitīt

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| Šis rāmis ir pārāk mazs. Zīmējiet to ap visu simbolu. | Rāmis ir sīks. | Tuviniet un ievelciet visu simbolu rāmī. |
| Šis rāmis gandrīz tukšs. Zīmējiet to ap simbolu. | Rāmī ir tikai papīrs. | Ievelciet pašu simbolu rāmī. |
| Nav sakritību. Pazeminiet {{ui:Atbilstība}} slīdni vai ievelciet simbolu stingrāk rāmī. | Neviens nesasniedza pietiekami augstu vērtējumu. | Ievelciet simbolu rāmī stingrāk vai pavelciet {{ui:Atbilstība}} slīdni zemāk. |
| Par daudz sakritību, tostarp nepareizi simboli | Līdzīgi simboli gūst vērtējumu tuvu īstajam. | Paaugstiniet {{ui:Atbilstība}} slīdni un noklikšķiniet uz nepareizajiem rāmjiem, lai tos noraidītu. |
| Citās lapās trūkst sakritību | Šajās lapās simbols ir zīmēts citā izmērā vai leņķī, kas nav 90° solis. | Meklējiet šajās lapās ar rāmi, kas tur uzzīmēts, vai skaitiet ar roku. |
| (n) lapas bija pārāk lielas meklēšanai šajā simbola izmērā. | Lapa būtu pārāk liela darba izmērā. | Ievelciet lielāku simbolu rāmī vai skaitiet šo lapu ar roku. |
| Meklēšana neizdevās: … | Fona meklēšana apstājās. | Mēģiniet vēlreiz; ja atkārtojas, pārlādējiet lapu (vispirms saglabājiet). Bezsaistē tas darbojas tikai tad, kad lietotnes joslā parādās {{ui:Gatavs darbam bezsaistē}}. |
| Vilkšana zīmē rāmi, nevis panoramē | Tā darbojas {{ui:Automātiski skaitīt}}. | Turiet {{key:Space}} un velciet vai velciet ar vidējo pogu. |

## Saglabāšana un eksportēšana

| Ziņojums vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| Nav ko eksportēt: izveidojiet vienumu un aprēķiniet to. | Vienumu nav. | Vispirms izveidojiet vienumu. |
| Atvērtajos PDF vēl nav atzīmju. | {{ui:Atzīmēts PDF}} nav, ko zīmēt atvērtajos PDF. | Atveriet PDF, kuros ir atzīmes. |
| Šis PDF ir aizsargāts ar paroli vai šifrēts, tāpēc atzīmēto kopiju nevar ierakstīt. … | PDF ir šifrēts. | Eksportējiet {{ui:XLSX}}, vai izmantojiet PDF kopiju bez šifrēšanas (tai tad vajadzīgs sava apjomu aprēķins, jo tas ir cits fails). |
| Atzīmēto PDF nevarēja ierakstīt: … | Bieži: esat bezsaistē, un lietotne nav saglabāta darbam bezsaistē, tāpēc PDF rakstītājs nav pieejams. | Pārejiet tiešsaistē un vēlreiz izvēlieties {{ui:Atzīmēts PDF}}. Lai to novērstu, izvēlieties {{ui:Saglabāt bezsaistei}} un nogaidiet {{ui:Gatavs darbam bezsaistē}}. |
| Lejupielādējās tikai viens atzīmēts PDF | Pārlūks bloķēja vairākas lejupielādes vienlaikus. | Atļaujiet šai vietnei vairākas lejupielādes un eksportējiet vēlreiz. |
| (file) nav TakeoffCraft projekts (tas nav derīgs JSON). / Šis nav TakeoffCraft projekta fails. | Nepareizs fails vai bojāts. | Izvēlieties `.takeoff.json` failu. |
| Šo projektu saglabāja jaunāka TakeoffCraft versija. Atveriet to tur. | Fails ir no jaunākas versijas. | Atveriet to jaunākajā versijā. |
| (n) atzīmes tika sabojātas un izlaistas. | Daļa no faila tika sabojāta vai rediģēta ar roku. | Pārējais atvērās. Pārzīmējiet trūkstošās atzīmes vai atveriet vecāku kopiju. |
| Pēc atkārtotas atvēršanas trūkst atzīmju | PDF nav atvērti vai viens no tiem ir mainīts. | Skatiet [Apjomu aprēķina saglabāšana un atkārtota atvēršana](topic:save-and-reopen#when-a-pdf-has-changed). |
| Pārlūks jautā, vai pamest vietni | Ir nesaglabātas izmaiņas. | Paliekiet un saglabājiet ar {{key:Mod+S}}. |

## Taustiņi un pele

| Simptoms | Cēlonis | Risinājums |
|---|---|---|
| Burtu taustiņi nedara neko | Kursors atrodas laukā (meklēšana, vienuma redaktors, tabula). | Noklikšķiniet uz lapas vai nospiediet {{key:Tab}}, lai izietu no lauka. |
| Ritenis tuvina, nevis ritina | Ritenis vienmēr tuvina lapu. | Velciet, lai panoramētu. |
| Visa lapa kļuva lielāka vai mazāka | Pārlūka tālummaiņa ({{key:Mod+Plus}} vai {{key:Mod+Minus}}). | Nospiediet {{key:Mod+0}}. Tuviniet lapu ar riteni vai vienkāršo {{key:Plus}} un {{key:Minus}}. |
| Atzīme pazuda, kad nospiedu Backspace | Backspace dzēš atlasīto atzīmi, ja nezīmējat. | {{key:Mod+Z}} to atgriež. |
| Labais klikšķis nepabeidz Mac datorā | Control-klikšķis tiek uztverts kā parasts klikšķis. | Izmantojiet divu pirkstu klikšķi ar ieslēgtu sekundāro klikšķi vai nospiediet {{key:Enter}}. |

## Skārienekrāni

Skārienekrānā:

- **Pieskaršanās** novieto punktu (vai atlasa atzīmi ar {{ui:Atlasīt}}). Viena pirksta vilkšana panoramē.
- **Divi pirksti** saspiež, lai tuvinātu ap punktu starp tiem, un panoramē, kad kustas kopā. Otra pirksta novietošana atceļ to, ko sāka pirmais, tāpēc saspiešana nekad neatstāj punktu.
- **Pabeidziet** posmu vai kontūru ar **ilgu nospiešanu** (labais klikšķis), **divreiz pieskaroties** vai ar {{ui:Pabeigt}} joslā lapas apakšā. Tajā pašā joslā ir {{ui:Aizmugure}} (atgriež pēdējo punktu) un {{ui:Atcelt}}. Laukumus var slēgt arī, pieskaroties pirmajam punktam.
- Pirkstiem ir lielāki mērķi: punkti piesaistās, slēdzas un tiek izvēlēti no lielāka attāluma, un stūru rokturi ir lielāki.

Garumu ievadei vajadzīga tastatūra; ekrāna tastatūra darbojas, kad ir aktīvs {{ui:Ievade}} lauks.

Planšetdatorā tastatūra un pele vai skārienpaliktnis padara apjomu aprēķinu daudz vieglāku.

## Darbs bezsaistē

| Poga vai simptoms | Cēlonis | Risinājums |
|---|---|---|
| {{ui:Neizdevās saglabāt}} | Daļa no lietotnes failiem netika lejupielādēti, saglabājot darbam bezsaistē. | Pārbaudiet savienojumu un izvēlieties pogu vēlreiz. |
| {{ui:Bezsaiste nav pieejama}} | Privātie logi un daži pārvaldītie datori bloķē kopijas bezsaistei. | Izmantojiet parastu logu vai citu pārlūku. |
| "Saving…" nekad nesākas | Esat bezsaistē; saglabāšanai vajadzīgs savienojums. | Saglabājiet tiešsaistē. |
| Lietotne ir veca pēc atjaunināšanas | Kopija bezsaistei ir no agrākas dienas. | Tiešsaistē izvēlieties {{ui:Gatavs darbam bezsaistē}}, tad {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}}. |
| Vēlaties atgūt vietu | Kopija bezsaistei ir aptuveni 6 MB. | Izvēlieties {{ui:Gatavs darbam bezsaistē}}, tad {{ui:Noņemt bezsaistes kopiju}}. |

Skatiet [Darbs bezsaistē](common:offline).

## Joprojām nedarbojas

Pārlādējiet lapu, ja lietotne pārstāj reaģēt. Jūsu apjomu aprēķins pazūd pārlādējot, ja vien to nesaglabājāt, tāpēc, ja varat, vispirms saglabājiet ar {{key:Mod+S}}. Pārlūka jautājumos skatiet [Pārlūkprogrammas un datori](common:browsers).
