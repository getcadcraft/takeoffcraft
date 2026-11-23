---
title: Kas naujo 0.7 versijoje (ankstesnė)
summary: DWG ir DXF brėžiniai atidaromi kaip lapai su savo mastelį, tikslūs kiekiai ir ilgiai iš paties brėžinio, pasirinktas subrangovo pasiūlymas kaip paketo kaina, pasiūlymų kvietimai su užantspauduotomis kainomis, asistento įrankiai brėžiniams ir USD iš 3D patikros rodinio.
keywords: kas naujo 0.7, ankstesnis leidimas, leidimo pastabos, keitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, dwg, dxf, brėžinys, maketai, modelio erdvė, brėžinio mastelis, skaičiavimas iš brėžinio, brėžinio skaičiavimas, blokai, dinaminiai blokai, atributai, sluoksniai, xref, susietas brėžinys, matuoti brėžinį, polilinija, brūkšniuotė, pažymėtas PDF, pasirinktas pasiūlymas, naudoti pasiūlymą, siųsti pasiūlymams, pasiūlymo kvietimas, užantspauduoti pasiūlymai, pasiūlymų atidarymas, vėlyvas pasiūlymas, subrangovo įrašai, csv, asistentas, mcp, usd, usdz, vienetai, vienetų sąrašai, kompaktiškas, skydeliai, dialogai, portugalų
from: 0e3a424f
---

Tai, kas pasikeitė TakeoffCraft 0.7 versijoje, palyginti su 0.6. Brėžiniai dabar atidaromi tokie, kokie yra, be spausdinimo į PDF, o pasiūlymų paketas gali išeiti subrangovams ir grįžti įkainotas.

## Naujiena

### DWG ir DXF brėžiniai

- **Atidarykite brėžinį kaip lapus.** {{ui:Atidaryti planus}} grupėje {{ui:Failas}} ({{key:Mod+O}} arba nuvilkite failus) priima DWG ir DXF brėžinius kartu su PDF. Modelio erdvė ir kiekvienas maketas tampa lapais sąraše {{ui:Lapai}}, o kiekių skaičiavimas gali apimti brėžinius ir PDF kartu. Nieko neįkeliama. Žr. [Atidaryti DWG ar DXF brėžinį](topic:open-a-drawing).
- **Mastelį nustato brėžinys.** Maketas prasideda nuo didžiausio jo vaizdo mastelio, pavadinto kaip paruoštas nustatymas, kai toks yra, pavyzdžiui 1/2" = 1'-0". Modelis prasideda brėžinio vienetais. Brėžinys be vienetų rodo „No scale“, kol jo nesukalibruojate. {{ui:Kalibruoti}}, {{ui:Tikrinti}} ir {{ui:Iš anksto nustatytas}} vis dar turi pirmenybę. Žr. [Mastelis](topic:open-a-drawing#the-scale).
- **Sluoksniai ir susieti brėžiniai.** {{ui:Sluoksniai}} lapo juostoje rodo arba slepia brėžinio sluoksnius. Sluoksniai, kuriuos failas išjungė arba įšaldė, pradžioje paslėpti ir neskaičiuojami, nebent pasirinksite kitaip. Susietas brėžinys (xref), atidarytas šalia pagrindinio, nubraižomas ir suskaičiuojamas ten, kur įterptas; kol jis neatidarytas, būsenos juostoje rašoma,ko trūksta. Žr. [Sluoksniai](topic:open-a-drawing#layers).
- **Pažymėtas PDF veikia su brėžiniu.** {{ui:Eksportuoti}} › {{ui:Pažymėtas PDF}} pirma nupiešia pažymėtus brėžinio lapus kaip PDF, todėl kopijoje matomos jūsų žymos ir legenda be spausdinimo žingsnio. Piešiama juodai arba brėžinio spalvomis, be spausdinimo stilių lentelių. Žr. [Pažymėtas PDF](topic:export-estimate#a-marked-pdf).

### Tikslūs kiekiai ir ilgiai iš brėžinio

- **Suskaičiuokite, kas brėžinyje nurodyta.** {{ui:Brėžinio skaičiavimas}} lapo juostoje suskaičiuoja bloką pagal pavadinimą (įskaitant įdėtus blokus, dinaminių blokų būsenas ir blokų masyvus), viską vieno tipo viename sluoksnyje arba tekstą ar atributo reikšmę. Skaičiuojama tai, ką lapas rodo, arba visas brėžinys vieną kartą. Žymų pridėjimas – vienas anuliavimo žingsnis, o pakartotinis skaičiavimas prideda tik naujus. {{ui:Automatinis skaičiavimas}} lieka PDF ir simboliams, kurie nėra blokai. Žr. [Skaičiuoti iš brėžinio](topic:count-from-a-drawing).
- **Matuokite iš paties brėžinio linijų.** {{ui:Matuoti brėžinį}} paima linijas, lankus, polilinijas, apskritimus, brūkšniuotes ir užpildytas figūras, kurias spustelite arba pažymite langu, kaip linijinio ar plotinio elemento žymas. Lankai, iškilimai ir brūkšniuotės skylės išmatuojami tiksliai; elipsės ir splainai matuojami smulkiomis stygomis, ir juosta tai nurodo. Žr. [Matuoti iš brėžinio](topic:measure-from-a-drawing).

### Pasiūlymai

- **Naudokite subrangovo pasiūlymą kaip paketo kainą.** {{ui:Eksportuoti}} › {{ui:Pasiūlymų paketai ir išlyginimas…}}, spustelėkite {{ui:Naudoti}} prie pasiūlymo. Paketo elementai lieka kaip kiekiai, viena eilutė **Pasirinktas pasiūlymas** nešioja kainą, elementai, kurių pasiūlymas neįtraukia, lieka jūsų savikaina, o bendrosios išlaidos, pelnas ir garantija taikomi jam. Pasiūlymų keitimas – vienas anuliavimo žingsnis; sąsiuvinis ir pasiūlymų santrauka jį perima. Žr. [Naudoti pasiūlymą kaip paketo kainą](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Siųskite paketą pasiūlymams.** {{ui:Siųsti pasiūlymams…}} po paketu kiekvienam subrangovui išsiunčia el. laišku nuorodą į puslapį, kuriam nereikia paskyros: jie mato apimtį ir lapus kaip PDF, įveda kainą kiekvienoje eilutėje arba ją pažymi kaip neįtrauktą, prideda pastabų ir iki trijų failų arba atsisako. {{ui:Gauti kainas}} įkelia grįžusias kainas į išlyginimo lapą, pažymėtas **web**. Siuntimas atviras tik paskyroms, kurioms CadCraft komanda įjungė bandymo metu (žr. toliau). Žr. [Siųsti paketą pasiūlymams](topic:bid-invitations).
- **Paslėptos iki atidarymo.** Kainos gali likti paslėptos iki atidarymo laiko, kurį nustatote: iki tol kainos niekas nemato, įskaitant jus. Atidarymo metu visi pasiūlymai rodomi iš karto, o pasiūlymas, pateiktas po termino, pažymimas kaip vėluojantis. Žr. [Užantspauduoti pasiūlymai ir atidarymas](topic:bid-invitations#sealed-bids-and-the-opening).
- **Subrangovų įrašai.** Jūsų paskyra getcadcraft.com saugo kiekvienos įmonės kontaktus, sritis, kvalifikacijos atsakymus ir draudimo bei licencijų datas (pažymimos, kai jau praėjo arba įvyksta per 30 dienų), kartu su ankstesniais pasiūlymais. Importuokite ir eksportuokite juos kaip CSV ir pasirinkite, kai siunčiate paketą. Žr. [Svetainėje](topic:bid-invitations#on-the-website).

### DI asistentai

- **Asistentai gali papildyti kiekių skaičiavimą.** Su pažymėtu **Redaguoti** jūsų asistentas gali pridėti elementus (`items_add`) ir matuoti bėgius, plotus ir kiekius lape (`marks_add`; ilgiai ir plotai tik lape, kuriam nustatytas mastelis), kiekvienas iškvietimas – vienas anuliavimo žingsnis.
- **Brėžinių įrankiai asistentams.** Atidarytame DWG ar DXF asistentas gali išvardyti jo lapus ir tai, ką galima suskaičiuoti, tiksliai skaičiuoti, pridėti kiekio žymas ir matuoti pagal brėžinio geometriją. Neatidarius TakeoffCraft, CadCraft MCP serveris atidaro brėžinį kaip naują kiekių skaičiavimą ir jį įrašo, o `cadcraft count` skaičiuoja iš komandinės eilutės. Žr. [Ko gali paprašyti asistentas](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D patikros rodinys kaip USD.** {{ui:USD paketas (.usdz)}} šalia {{ui:GLB}} 3D patikros rodinyje įrašo kiekvieną sieną, perdangą, plokštę, skaičiavimo žymą ir bėgį kaip atskirą objektą, pavadintą pagal jo elementą ir turintį savo kiekį, metrais. Asistentas gali ir jį eksportuoti (`usd_export`). Žr. [Eksportuoti 3D patikros rodinį kaip USD](topic:usd).

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais, kuriuos nustato vienetų apibrėžimai (JAV apžvalgos pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, ir jie išnyksta iš vienetų sąrašų; pažymėkite vieną – ir naujas darbas prasidės juo. Failas visada išsaugo savo vienetą. TakeoffCraft elemento {{ui:Vienetas}} sąrašai seka jungiklius, naujas elementas prasideda pažymėtu ilgio ar ploto vienetu, kvadratiniai stogo vienetai (SQ), akrai ir hektarai yra nauji ploto vienetai, o ilgio laukelis priima bet kurio vieneto žymą, pavyzdžiui `3 yd`. Žr. [Vienetai, įvedamos reikšmės ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie pasitraukia.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} telpa daugiau ekrane (jutikliniai ekranai ir telefonai išlaiko savo didelius mygtukus). Kiekvienas šoninis skydelis turi siaurą pavadinimo juostą: vilkite jį, kad prikabintumėte arba atplėštumėte, nuvilkite ant kito skydelio juostos, kad dalintųsi vienu rėmu kaip skirtukais, prisekite, kad jis slystų iki krašto, arba paslėpkite ir grąžinkite iš krašto. Žr. [Sutvarkyti skydelius](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Vilkite dialogą už pavadinimo juostos, kad jis nestovėtų brėžinio kelyje; jis grįžta ten, kur paliktas. Dukart spustelėkite pavadinimo juostą, kad jį vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt pavyzdinių užklausų jūsų asistentui (sutvarkyti brėžinį, išspausdinti rinkinį, patikrinti brėžinius, uždavinėti modeliui klausimus, susumuoti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji iškviečia, ir reikiamais leidimais, kiekviena paleidžiama mūsų testais. Programose DI nėra. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** naujai pasirodo {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}}. Ji, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, dar neperžiūrėtus gimtosios kalbos. Pagalbos temos – anglų kalba.
- **CadCraft Studio** nurodo, kodėl atnaujinimo patikra nepavyko (dar nėra failo jūsų sistemai, nėra tinklo, neteisingas parašas), o ne tik „Done“, ir nebeatkuria „Kas naujo“ kortelės, kurią uždarėte, kol nėra naujesnio leidimo.

## Dar ne šioje versijoje

- **0.7 nepasirašyta kodu.** Parašas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar nepasiekė. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje pirmą kartą dešiniuoju pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Atvira}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Pasiūlymų kvietimai išjungti daugumai paskyrų. Kol funkcija bandoma, laiškai išoriniams dalyviams siunčiami tik iš paskyrų, kurias CadCraft komanda įjungė. Jau išsiųstų kvietimų dalyvių puslapiai veikia visiems. Visi kiti: atsisiųskite {{ui:Aprašo CSV}}, išsiųskite jį patys el. paštu ir įveskite pasiūlymus.
- CadCraft Studio langas negali siųsti pasiūlymų kvietimų: jis nurodo naudoti TakeoffCraft naršyklėje. Kiekių skaičiavimo, turinčio išsiųstų prašymų, atidarymas, išlyginimas ir pasiūlymo pasirinkimas Studio veikia.
- Papildymai, pasiūlymo priėmimo raštai, apimties lapas, kurį kiekvienas dalyvis pasirašo patvirtindamas, ir automatiniai priminimai prieš baigiantis draudimo datai dar nesukurti. Pasirinktas pasiūlymas nepakeičia alternatyvaus pasiūlymo ploto kainos.
- Brėžiniai: spausdinimo stilių lentelės ir CTB failai netaikomi, dvejetainis DXF atmetamas (įrašykite kaip ASCII DXF arba DWG), susieti brėžiniai randami tik tarp atidarytų failų pagal failo pavadinimą, o PDF pagrindai, paveikslėliai ir OLE objektai brėžinyje nepiešiami ir neskaičiuojami. Skaičiavimai ir masteliai patikrinti pavyzdiniais brėžiniais, dar ne tikrų darbų brėžiniais, atidarytais programoje, kuri juos sukūrė.
- Asistentas gali pridėti elementus ir žymas, bet negali perkelti, pakeisti ar ištrinti jau esančių žymų.

Visa kita – [Dar nesukurta](topic:not-built-yet).
