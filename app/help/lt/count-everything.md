---
title: Skaičiuoti visą rinkinį
summary: Apibrėžkite simbolių legendą vieną kartą, ir TakeoffCraft suskaičiuos kiekvieną jos simbolį kiekviename atvertame lape vienu paleidimu. Kiekvienas skaičius yra nuoroda į jo lapą, o prieš pridedant galima peržiūrėti.
keywords: skaičiuoti viską, legenda, simbolių legenda, visas rinkinys, kiekvienas lapas, visi lapai, visos durys, visi įrenginiai, prietaisai, žiniaraštis, simboliai, automatinis skaičiavimas, skaičiuoti visus, planų rinkinys, 200 lapų, atitikties lygis, panašūs
from: adc99744
---

{{ui:Skaičiuoti viską}} nuskaito simbolių legendą ir tada suskaičiuoja kiekvieną jos simbolį kiekviename atvertame lape. Tai {{ui:Automatinis skaičiavimas}} visai legendai iš karto. Tai paprastas simbolių atitikimas jūsų lapuose, o ne mokytas modelis, ir niekas neišeina iš jūsų kompiuterio. Prieš pridedant peržiūrėkite skaičius: tai pagalbininkas, o ne garantija.

## Skaičiuoti legendą

1. Atverkite planus. Tinka legenda bet kuriame lape: simboliai su šalia užrašytais pavadinimais.
2. Įrankių juostoje pasirinkite {{ui:Skaičiuoti viską}}.
3. Nubrėžkite stačiakampį aplink legendą: simbolius ir pavadinimus. Pavadinimas be simbolio šalia (SIMBOLIŲ LEGENDA) paliekamas nuošalyje savarankiškai.
   Skydelyje išvardijamas kiekvienas simbolis su jo paveikslėliu ir šalia spausdintu pavadinimu. Pavadinimas tampa pozicijos pavadinimu, todėl jį čia galite pervardyti, jei norite.
4. Nuimkite žymėjimą nuo bet kurio simbolio, kurio nenorite skaičiuoti. Simbolis, kurio negalima ieškoti (per mažas arba tuščias), nurodo priežastį.
5. Pasirinkite {{ui:Skaičiuoti N lapuose}}. Juosta rodo ieškomą lapą; {{ui:Atšaukti}} sustabdo paleidimą. Puslapis lieka naudojamas.

Legendos pačios simboliai to lapo nesuskaičiuojami. Lapas, nubrėžtas kitu masteliu, ieškomas tuo pačiu jo masteliu, o simboliai randami pasukti per 90° kampus.

## Peržiūrėti skaičius

- Kiekvienas simbolis rodo savo sumą, o po ja – nuorodą kiekvienam lapui, kuriame jis yra (pavyzdžiui „E-103: 4“). Spustelėkite ją, kad nueitumėte į tą lapą. Radiniai pažymimi pozicijos spalvos rėmeliais.
- **Spustelėkite rėmelį**, kad atmestumėte radinį. Jis tampa punktyrinis ir perbrauktas; spustelėkite dar kartą, kad grąžintumėte.
- **Perkelkite atitikimo lygį** (nuo 50 % iki 100 %, pradedant nuo jūsų {{ui:Parametrai}} lygio). Didesnis paliekai tik artimus atitikimus. Slankiklis tik filtruoja tai, kas rasta; iš naujo niekas neieškoma.
- Du panašūs simboliai (dvigubas ir keturgubas lizdas) gali atitikti tą pačią vietą. Geresnis atitikimas ją pasiima, o skydelyje nurodoma, kiek tokių vietų buvo, kad galėtumėte patikrinti.
- Lapas, per didelis, kad būtų ieškoma simbolio dydžiu, praleidžiamas, ir skydelyje tai nurodoma.

## Pridėti juos

Pasirinkite {{ui:Pridėti N žymų}}. Kiekvienas simbolis tampa skaičiavimo pozicija su žyma kiekviename radinyje. Pavadinimas, kuris jau yra jūsų skaičiavimo pozicija, panaudojamas iš naujo (nieko nedvigubinama ten, kur jau žymėjote rankiniu būdu). Visas paleidimas yra vienas žingsnis: {{key:Ctrl+Z}} pašalina visas pozicijas ir žymas.

Tai, ką priimate, taip pat patenka į {{ui:Išmokta}}: simboliai įsimenami kiekių skaičiavimo faile kitam kartui.

## Su jūsų asistentu

Jei Parametruose leidžiate asistentus, jie gali perskaityti legendą (legend_open), paleisti skaičiavimą fone (legend_count_start, po to legend_count_status), perskaityti skaičius (legend_count_result) ir juos pridėti (legend_count_add, kuris pirmiausia gali parodyti peržiūrą, ką pridėtų). Tai tas pats paleidimas, kurį matote skydelyje.

## Simboliai bet kokiu kampu

Pažymėkite {{ui:Simboliai bet kokiu kampu}} prieš skaičiuodami, kad rastumėte ir simbolius, nubrėžtus kampu, kuris nėra stačias (įstrižinis sienos kištukas, įrenginys, pasuktas pagal stogo linijas). Tada paieška pasuka kiekvieną simbolį kas 15 laipsnių; apvalus simbolis vis tiek reikalauja vienos paieškos, o neapvalus simbolis gali užtrukti iki šešis kartus ilgiau. Jei planai nubrėžti statmenai, nepažymėkite.

## Verta žinoti

- Reikia simbolių, nubrėžtų taip pat kaip legendoje. Legenda, nubrėžta kitu dydžiu nei lapai, tinka, kai lapų mastelis nustatytas; be mastelių simboliai ieškomi legendos dydžiu.
- Simbolis su siena arba ilga linija, nubrėžta per jį, gali būti praleistas, nes jis nebeatrodo kaip legendos paveikslėlis. Prieš pasitikėdami likusiais, patikrinkite radinius pirmame lape.
- Nuskenuotas lapas be teksto vis tiek veikia: simboliai randami pagal jų eilutes, o pavadinimus įvedate patys.
