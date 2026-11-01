---
title: Kas naujo 0.7 versijoje
summary: DWG ir DXF brėžiniai atidaromi kaip lapai su savo masteliu, tikslūs skaičiai ir ilgiai iš paties brėžinio, pasirinktas subrangovo pasiūlymas kaip paketo kaina, pasiūlymų kvietimai su uždaromis kainomis, asistento įrankiai brėžiniams ir USD iš 3D tikrinimo vaizdo.
keywords: kas naujo, išleidimo pastabos, pakeitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, dwg, dxf, brėžinys, išdėstymai, modelio erdvė, brėžinio mastelis, skaičiavimas iš brėžinio, brėžinio skaičiavimas, blokai, dinaminiai blokai, atributai, sluoksniai, išorinė nuoroda, susietas brėžinys, matuoti brėžinį, polilinija, brūkšniuotė, pažymėtas pdf, pasirinktas pasiūlymas, naudoti pasiūlymą, siųsti pasiūlymams, pasiūlymo kvietimas, uždari pasiūlymai, pasiūlymų atidarymas, vėlyvas pasiūlymas, subrangovų įrašai, csv, asistentas, mcp, usd, usdz, vienetai, vienetų sąrašai, kompaktiškas, skydeliai, dialogai, portugalų
from: ad4f0df1
---

Tai, kas pasikeitė TakeoffCraft 0.7 versijoje, palyginti su 0.6. Brėžiniai dabar atidaromi tokie, kokie yra, be iš pradžių spausdinimo į PDF, o pasiūlymų paketą galima išsiųsti subrangovams ir gauti atgal įkainuotą.

## Naujovės

### DWG ir DXF brėžiniai

- **Atidaryti brėžinį kaip lapus.** {{ui:Atidaryti planus}} grupėje {{ui:Failas}} ({{key:Mod+O}}, arba įvilkite failus) priima DWG ir DXF brėžinius kartu su PDF. Modelio erdvė ir kiekvienas išdėstymas tampa lapais sąraše {{ui:Lapai}}, o kiekių skaičiavimas gali apimti brėžinius ir PDF kartu. Nieko neįkeliama. Žr. [Atidaryti DWG ar DXF brėžinį](topic:open-a-drawing).
- **Mastelį paima iš brėžinio.** Išdėstymas pradedamas nuo savo didžiausio vaizdo lango mastelio, įvardyto kaip iš anksto nustatytas, kai jis toks yra, pavyzdžiui 1/2" = 1'-0". Modelis pradedamas brėžinio vienetais. Brėžinys be vienetų rodo „Nėra mastelio“, kol jo nekalibruojate. {{ui:Kalibruoti}}, {{ui:Tikrinti}} ir {{ui:Iš anksto nustatytas}} vis tiek turi pirmenybę. Žr. [Mastelis](topic:open-a-drawing#the-scale).
- **Sluoksniai ir susieti brėžiniai.** {{ui:Sluoksniai}} lapo juostoje rodo arba slepia brėžinio sluoksnius. Sluoksniai, kuriuos failas išjungė arba užšaldė, pradžioje paslėpti ir neskaičiuojami, nebent pasirinksite kitaip. Susietas brėžinys (išorinė nuoroda), atidarytas šalia savo pagrindinio brėžinio, nubrėžiamas ir skaičiuojamas ten, kur jis įterptas; kol jis neatidarytas, būsenos juosta nurodo, kas trūksta. Žr. [Sluoksniai](topic:open-a-drawing#layers).
- **Pažymėtas PDF veikia su brėžiniu.** {{ui:Eksportuoti}} › {{ui:Pažymėtas PDF}} pirmiausia nubraižo brėžinio pažymėtus lapus kaip PDF, todėl kopija rodo jūsų žymes ir legendą be atskiro spausdinimo žingsnio. Brėžinys nubraižomas juodai arba brėžinio spalvomis, be spausdinimo stilių lentelių. Žr. [Pažymėtas PDF](topic:export-estimate#a-marked-pdf).

### Tikslūs skaičiai ir ilgiai iš brėžinio

- **Skaičiuokite tai, ką brėžinys rodo.** {{ui:Brėžinio skaičiavimas}} lapo juostoje suskaičiuoja bloką pagal pavadinimą (įskaitant įdėtus blokus, dinaminių blokų būsenas ir blokų masyvus), visus vieno tipo objektus sluoksnyje arba teksto ar atributo reikšmę. Skaičiuojama tai, ką rodo lapas, arba visas brėžinys vieną kartą. Žymių pridėjimas yra vienas atšaukiamas žingsnis, o pakartotinai skaičiuojant pridedama tik nauja. {{ui:Automatinis skaičiavimas}} lieka PDF ir simboliams, kurie nėra blokai. Žr. [Skaičiavimas iš brėžinio](topic:count-from-a-drawing).
- **Matuokite pagal brėžinio linijas.** {{ui:Matuoti brėžinį}} paima linijas, lankus, polilinijas, apskritimus, brūkšniuotes ir kietuosius kūnus, kuriuos spragtelite arba apibrėžiate langeliu, kaip linijinės ar ploto pozicijos žymes. Lankai, išgaubimai ir brūkšniuotės skylės išeina tiksliai; elipsės ir kreivės matuojamos smulkiomis stygomis, ir juosta tai nurodo. Žr. [Matavimas pagal brėžinį](topic:measure-from-a-drawing).

### Pasiūlymai

- **Subrangovo pasiūlymą naudokite kaip paketo kainą.** {{ui:Eksportuoti}} › {{ui:Pasiūlymų paketai ir išlyginimas…}}, pasirinkite {{ui:Naudoti}} prie pasiūlymo. Paketo pozicijos lieka kaip kiekiai, viena eilutė **Pasirinktas pasiūlymas** nešioja kainą, pozicijos, kurių pasiūlymas neapima, lieka jūsų savikaina, o pridėtinės išlaidos, pelnas ir garantinis įsipareigojimas taikomi jai. Pasiūlymo keitimas yra vienas atšaukiamas žingsnis; darbo knyga ir pasiūlymų santrauka jį perneša. Žr. [Naudoti pasiūlymą kaip paketo kainą](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Siųsti paketą pasiūlymams.** {{ui:Siųsti pasiūlymams…}} po paketu el. paštu kiekvienam subrangovui išsiunčia nuorodą į puslapį, kuriam nereikia paskyros: jie mato aprašą ir lapus kaip PDF, kiekvienoje eilutėje įveda kainą arba pažymi, kad neįtraukta, prideda pastabų ir iki trijų failų arba atsisako. {{ui:Gauti kainas}} įkelia tai, kas grįžo, į išlyginimo lapą, pažymėtą **web**. Siuntimas atviras tik paskyroms, kurias CadCraft komanda įjungė, kol tai bandoma (žr. žemiau). Žr. [Paketo siuntimas pasiūlymams](topic:bid-invitations).
- **Uždari iki atidarymo.** Kainos gali likti uždarytos iki jūsų nustatyto atidarymo laiko: iki tol niekas kainos nemato, įskaitant jus. Atidarymo metu visi pasiūlymai rodomi iš karto, o pasiūlymas, pateiktas po termino, pažymimas kaip **vėluojantis**. Žr. [Uždari pasiūlymai ir atidarymas](topic:bid-invitations#sealed-bids-and-the-opening).
- **Subrangovų įrašai.** Jūsų paskyra getcadcraft.com saugo kiekvienos įmonės kontaktus, darbų sritis, kvalifikacijos atsakymus ir draudimo bei licencijų datas (pažymėtas, kai jos pasibaigusios arba pasibaigs per 30 dienų), kartu su jų ankstesniais pasiūlymais. Importuokite ir eksportuokite juos kaip CSV ir rinkitės, kai siunčiate paketą. Žr. [Svetainėje](topic:bid-invitations#on-the-website).

### DI asistentai

- **Asistentai gali papildyti kiekių skaičiavimą.** Pažymėjus **Redaguoti**, jūsų asistentas gali pridėti pozicijų (`items_add`) ir išmatuoti ruožus, plotus bei skaičius lape (`marks_add`; ilgiai ir plotai tik lape, kuriam nustatytas mastelis). Kiekvienas kvietimas yra vienas atšaukiamas žingsnis.
- **Brėžinių įrankiai asistentams.** Atidarytame DWG ar DXF asistentas gali išvardyti savo lapus ir tai, ką galima suskaičiuoti, suskaičiuoti tiksliai, pridėti skaičiavimo žymes ir matuoti pagal brėžinio geometriją. Kai TakeoffCraft neatidarytas, CadCraft MCP serveris atidaro brėžinį kaip naują kiekių skaičiavimą ir jį įrašo, o `cadcraft count` skaičiuoja iš komandinės eilutės. Žr. [Ką asistentas gali paprašyti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D tikrinimo vaizdas kaip USD.** {{ui:USD paketas (.usdz)}} šalia {{ui:GLB}} 3D tikrinimo vaizde įrašo kiekvieną sieną, perdangą, plokštę, skaičiavimo stulpelį ir ruožą kaip atskirą objektą, pavadintą pagal savo poziciją ir turintį savo kiekį metrais. Asistentas gali jį eksportuoti taip pat (`usd_export`). Žr. [Eksportuoti 3D tikrinimo vaizdą kaip USD](topic:usd).

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais, kuriuos nurodo vienetų apibrėžtys (JAV geodezinė pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, ir jie išeina iš vienetų sąrašų; pažymėkite vieną žvaigždute, ir naujas darbas prasideda juo. Failas visada išlaiko savo vienetą. TakeoffCraft pozicijos {{ui:Vienetas}} sąrašai seka šiuos jungiklius, nauja pozicija prasideda pažymėtu ilgio ar ploto vienetu, stogo kvadratai (SQ), akrai ir hektarai yra nauji ploto vienetai, o ilgio laukelis priima bet kurio vieneto žymą, pavyzdžiui `3 yd`. Žr. [Vienetai, įvesti dydžiai ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie tvarkingai pasitraukia.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} telpa daugiau ekrane (lietimui jautrūs ekranai ir telefonai išlaiko didelius mygtukus). Kiekvienas šoninis skydelis turi plonąją pavadinimo juostą: vilkite, kad prijungtumėte ar atplėštumėte skydelį; numeskite ant kito skydelio juostos, kad dalytųsi vienu rėmu kaip skirtukai; prisekite, kad jis pasitrauktų į kraštą, arba paslėpkite ir grąžinkite iš krašto. Žr. [Išdėstyti skydelius](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Dialogą vilkite už pavadinimo juostos, kad jis netrukdytų brėžiniui; jis grįžta ten, kur jį paliekate. Dukart spustelėkite pavadinimo juostą, kad jis vėl centruotųsi. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt parengtų užklausų jūsų asistentui (sutvarkyti brėžinį, išspausdinti rinkinį, patikrinti brėžinius, užduoti klausimus modeliui, sudėti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji kviečia, ir leidimais, kurių reikia; kiekvieną pakartoja mūsų testai. Programose DI nėra. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** nauja skiltyje {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}}. Ji, taip pat **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, dar neperžiūrėtus gimtosios kalbos specialisto. Žinyno temos pateikiamos anglų kalba.
- **CadCraft Studio** nurodo, kodėl atnaujinimo patikra nepavyko (failo jūsų sistemai dar nėra, nėra tinklo, neteisingas parašas), o ne tik „Atlikta“, ir nebeatkuria užvertos kortelės „Kas naujo“, kol nėra naujesnio leidimo.

## Dar nėra šioje versijoje

- **0.7 nepasirašyta kodu.** Pasirašymas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patikra dar nepateikta. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje pirmą kartą dešiniuoju pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Atvira}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampų ir nuolydžių sąrašai skiltyje {{ui:Vienetai}} išsaugomi, bet kol kas joks laukelis jų nenaudoja.
- **Pasiūlymų kvietimai išjungti daugumai paskyrų.** Kol funkcija bandoma, laiškai išoriniams pasiūlymų teikėjams išsiunčiami tik iš paskyrų, kurias įjungė CadCraft komanda. Pasiūlymų teikėjų puslapiai veikia kiekvienam jau išsiųstam kvietimui. Visi kiti: atsisiųskite {{ui:Aprašo CSV}}, išsiųskite jį patys el. paštu ir įveskite pasiūlymus.
- CadCraft Studio langas dar negali siųsti pasiūlymų kvietimų: jis nurodo naudoti TakeoffCraft naršyklėje. Atidarant kiekių skaičiavimą su išsiųstomis užklausomis, išlyginimas ir pasiūlymo pasirinkimas Studio veikia.
- Papildymai, sutarčių skyrimo raštai, kiekvieno teikėjo pasirašomas aprašo lapas ir automatiniai priminimai prieš pasibaigiant draudimo datai nesukurti. Pasirinktas pasiūlymas neperskaičiuoja alternatyvaus pasiūlymo {{ui:Sąmatos sritis}} kainos.
- **Brėžiniai:** plot style lentelės ir CTB failai netaikomi, dvejetainis DXF atmetamas (įrašykite jį kaip ASCII DXF arba DWG), susieti brėžiniai randami tik tarp atidarytų failų pagal failo pavadinimą, o PDF pagrindai, paveikslėliai ir OLE objektai brėžinyje nepiešiami ir neskaičiuojami. Skaičiai ir mastelių nustatymai patikrinti pavyzdiniais brėžiniais, dar ne tikro darbo brėžiniais, atidarytais programoje, kuri juos sukūrė.
- Asistentas gali pridėti pozicijų ir žymių, bet negali perkelti, pakeisti ar ištrinti jau esančių žymių.

Viskas kita yra [Dar neįgyvendinta](topic:not-built-yet).
