---
title: Mastelio nustatymas
summary: Kiekvienam lapui nustatykite mastelį pagal išankstinį nustatymą arba kalibruodami pagal žinomą matmenį, patikrinkite jį ir suprask, kodėl lapai be mastelio nepatenka į sumas.
keywords: aptikti mastelį, nuskaityti mastelį, mastelis iš teksto, visi lapai, mastelis, kalibruoti, išankstinis nustatymas, tikrinti mastelį, patikrinti, žinomas matmuo, be mastelio, nėra mastelio, santykis, nustatyti mastelį
from: 8f0148e6
---

Kiekvienas lapas turi savo mastelį. Jį nustatote jūs arba leidžiate TakeoffCraft nuskaityti jį iš lapų teksto (žemiau) ir patikrinti. Kol lapas jo neturi, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} ir {{ui:Cut-out}} atsisako matuoti jame. {{ui:Count}} ir {{ui:Auto count}} veikia be mastelio.

Lapų sąraše rodomas kiekvieno lapo mastelis arba **Nėra mastelio**. Juosta po atidarytu lapu sako tą patį.

## Naudoti išankstinį nustatymą (kai PDF spausdintas natūraliu dydžiu)

1. Atidarykite lapą.
2. Atidarykite sąrašą {{ui:Preset}} grupėje {{ui:Scale}}.
3. Pasirinkite brėžinyje nurodytą mastelį, pavyzdžiui, `1/8" = 1'-0"` skyriuje Architektūrinis.
   Būsenos juostoje rašoma: "Šio lapo mastelis: 1/8" = 1'-0"."
4. Patikrinkite jį (žemiau).

Išankstinis nustatymas daro prielaidą, kad PDF yra tikras popieriaus dydis, kuriam brėžinys buvo sukurtas. Jei PDF sukurtas su „pritaikyti prie lapo“ arba tai yra pusės dydžio rinkinys, išankstinis nustatymas neteisingas. Vietoj jo kalibruokite.

Pilnas sąrašas yra [Iš anksto nustatyti masteliai](topic:scale-presets).

## Skaityti mastelius iš lapų teksto

Dauguma brėžinių nurodo savo mastelį: `SCALE: 1/4" = 1'-0"` antraštės bloke, `1:100` po vaizdu. TakeoffCraft gali jį perskaityti ir nustatyti visiems lapams vienu metu.

1. Atidarykite sąrašą {{ui:Preset}} ir pasirinkite „Iš lapų teksto…“ (viršuje).
2. Sąraše rodomi visi lapai: jų dabartinis mastelis ir tai, ką sako jų tekstas – **Nurodo 1/4" = 1'-0"**, **Tekste mastelio nėra** arba **Nurodoma „ne mastelyje“** (NTS).
3. Lapai be mastelio, kurie jį nurodo, pažymimi varnele. Pažymėkite arba nuimkite žymę bet kuriam, tada pasirinkite {{ui:Set the ticked scales}}. Vienas {{key:Mod+Z}} visus juos atšaukia.
4. Patikrinkite vieną matmenį kiekviename lape su {{ui:Check}} (žemiau): išankstinis nustatymas tinka tik tada, kai PDF atspausdintas natūraliu dydžiu.

Jis nuskaito architektūrinius (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inžinerinius (`1" = 20'`) ir metrinius (`1:50`) žymėjimus, atitinkančius [išankstinį nustatymą](topic:scale-presets). Kai lape nurodoma daugiau nei vienas mastelis (planas su padidintomis detalėmis), imamas tas, kurio rašoma dažniausiai, o po žodžio SCALE nurodytas skaičiuojamas dukart; kiti rodomi raudonai, kad galėtumėte patikrinti. Nuskenuotas lapas teksto neturi: jo mastelį nustatykite rankiniu būdu.

## Kalibruoti pagal žinomą matmenį

Naudokite tai, kai nėra patikimo spausdinto mastelio, rinkinys buvo pakeistas dydžiu arba lape nurodyta „ne mastelyje“, bet yra matmenų.

1. Atidarykite lapą ir priartinkite ilgą matmenį, kurį žinote, pavyzdžiui, tinklelio linijų atstumą arba bendrą pastato matmenį. Kuo ilgesnis, tuo tiksliau.
2. Grupėje {{ui:Scale}} pasirinkite {{ui:Calibrate}} arba paspauskite {{key:K}}.
3. Spustelėkite vieną matmens galą. Priartinkite kiekvieną galą tikslumui; galite artinti ir slinkti tarp spustelėjimų.
4. Spustelėkite kitą galą. Laikykite {{key:Shift}}, kad linija liktų 0°, 45° arba 90°.
   Atsidaro dialogas **Kalibruoti šį lapą**.
5. Lauke **Tikras atstumas** įveskite tikrąjį atstumą, pavyzdžiui, `24'-6 1/2"`, `24.5` (dešimtainės pėdos), `30"` arba `7.5 m`. Žr. [Ilgio, įkainio ir procentų įvedimas](topic:entry-formats).
6. Pasirinkite {{ui:Set the scale}}.
   Būsenos juostoje mastelis rodomas kaip "1" = (n)'", o jei jis yra 0,5 % ribose nuo išankstinio nustatymo, nurodoma, kuris, pavyzdžiui, „atitinka 1/4" = 1'-0" (pasirinkite tą išankstinį nustatymą tiksliam mastelio dydžiui)“.
   TakeoffCraft grįžta į įrankį {{ui:Select}}.

Kai kalibravimas atitinka išankstinį nustatymą, pasirinkus tą išankstinį nustatymą gaunamas tikslus mastelis, o ne toks, kuris priklauso nuo to, kur spustelėjote.

## Patikrinti mastelį

Visada tikrinkite naują mastelį ant antro matmens.

1. Grupėje {{ui:Scale}} pasirinkite {{ui:Check}} arba paspauskite {{key:D}}.
2. Spustelėkite abu brėžinyje atspausdinto matmens galus.
   Būsenos juostoje rodoma „Check: 12'-6"“ su tuo pačiu ilgiu dešimtainėmis pėdomis ir metrais, o patikrinimo linija lieka lape su savo ilgiu.
3. Palyginkite su spausdintu matmeniu. Jei skiriasi, kalibruokite pagal ilgesnį matmenį.

Spauskite {{key:Esc}}, kad išvalytumėte patikrinimo liniją.

## Keisti mastelį

Pasirinkite kitą išankstinį nustatymą arba vėl kalibruokite. Jei lape jau yra matavimų, TakeoffCraft klausia **Keisti šio lapo mastelį?** ir nurodo, kiek matavimų bus išmatuota iš naujo. Pasirinkite {{ui:Change the scale}}. Kiekvienas ruožas ir plotas lape išmatuojamas iš naujo pagal naują mastelį. Tai galite anuliuoti su {{key:Mod+Z}}.

## Kodėl lapai be mastelio neskaičiuojami kaip nulis

Žymė lape be mastelio neturi tikro ilgio ar ploto. TakeoffCraft jos niekada neskaičiuoja kaip nulio, nes tai tyliai padarytų sąmatą per mažą. Vietoj to ji:

- palieka tas žymes iš sumų,
- rodo "+(n) be mastelio" šalia pozicijos {{ui:Quantities}},
- antraštės lentelėje rodo „Neužbaigta: (n) žymių lapuose be mastelio (neįskaičiuota į sumas)“,
- įrašo skaičių į skaičiuoklės eksporto pastabų stulpelį.

Tai gali nutikti atidarius projektą, kurio mastelių niekada nenustatyta. Nustatykite lapui mastelį, ir žymės iš karto įskaičiuojamos. Skaičiavimo žymės visada įskaičiuojamos; joms mastelis nereikalingas.

## Patarimai

- Prieš pradėdami nustatykite mastelį kiekvienam lapui, kurį matuosite. Ieškokite lapų sąraše **Nėra mastelio**, kad rastumėte likusius (paieškos laukelis žiūri į lapų pavadinimus, ne į mastelius).
- Detalės ir padidinti planai tame pačiame lape dažnai naudoja kitą mastelį. TakeoffCraft turi vieną mastelį lapui; žr. [Kas dar nesukurta](topic:not-built-yet).
- Metriniai brėžiniai: pasirinkite metrinį išankstinį nustatymą, pavyzdžiui `1:100`, arba kalibruokite metriniu atstumu, pavyzdžiui `6000 mm`.
