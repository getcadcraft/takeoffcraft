---
title: Pradėkite kiekių skaičiavimą ir atidarykite planų rinkinį
summary: Atidarykite vieną ar kelis PDF kaip planų rinkinį, orientuokitės lapuose ir judėkite tarp jų.
keywords: atidaryti, planų rinkinys, keli pdf, keli failai, lapai, brėžiniai, puslapių etiketės, lapų sąrašas, naršyti, įmesti, perdavimas, atidaryti kitoje programoje, žymėjimas
from: ed434468
---

Planų rinkinys dažnai susideda iš kelių PDF: architektūrinių, konstrukcinių, mechaninių. TakeoffCraft atveria juos greta kaip vieną lapų sąrašą, o vienas kiekių skaičiavimas gali apimti visus.

## Atidaryti PDF

1. Pasirinkite {{ui:Atidaryti planus}} grupėje {{ui:Failas}} arba paspauskite {{key:Mod+O}}. (Kitų meniu stiliuose tai vadinama {{ui:Atidaryti PDF…}}.)
2. Failų dialogo lange pasirinkite visus rinkinio PDF. Laikykite {{pick:mac=Command|windows=Ctrl|linux=Ctrl}}, kad pažymėtumėte kelis, arba {{key:Shift}}, kad pažymėtumėte intervalą.
3. Pasirinkite Atidaryti.
   Kol skaitomas kiekvienas failas, rodomas pranešimas „Atidaroma (name)…“. Tada kiekvienas puslapis atsiranda po {{ui:Lapai}}, ir atsidaro pirmasis naujo PDF puslapis.

PDF galite ir nutempti iš {{pick:mac=Finder|windows=File Explorer|linux=jūsų failų tvarkyklė}} ir įmesti bet kur į TakeoffCraft. Tempiant rodomas rėmelis „Įmeskite PDF, DWG ar DXF brėžinius arba .takeoff.json“.

Vėliau pridėti daugiau PDF galite tiesiog pakartoję tai. PDF, kurie jau atverti, praleidžiami.

Pradžios ekrane taip pat rodomi neseniai atverti PDF ir kiekių skaičiavimai naršyklėse, kurios leidžia puslapiui vėl atverti failą (Chrome ir Edge). Spustelėkite vieną, kad jį atvertumėte; naršyklė gali prieš tai paprašyti leidimo. Žr. [Jūsų failai](common:your-files).

:::note
Nieko neįkeliama. Naršyklė skaito PDF jūsų kompiuteryje, ir jie dingsta iš TakeoffCraft, kai uždarote skirtuką arba pasirenkate {{ui:Naujas}}.
:::

## Brėžiniai šalia PDF

{{ui:Atidaryti planus}} priima ir DWG bei DXF brėžinius, vienus arba kartu su PDF: kiekvieno brėžinio modelio erdvė ir maketai tampa lapais tame pačiame sąraše. Žr. [Atidaryti DWG ar DXF brėžinį](topic:open-a-drawing), tada [Skaičiuoti iš brėžinio](topic:count-from-a-drawing).

## PDF, perduotas iš kitos programos

Kita šios programų linijos programa gali perduoti jums PDF, kurį ji turi atvėręs: ji atidaro TakeoffCraft naujame skirtuke, ir PDF atsidaro ten tarsi būtumėte jį įmetę. Būsenos juostoje rašoma „Atidaryta (name), perduota iš (app). Pradinis failas nepakito.“ Nieko neįkeliama; failas praeina per šios naršyklės saugyklą ir iš jos pasišalina, kai atsidaro.

Jei būsenos juostoje rašoma, kad PDF „neatkeliavo“, skirtukas per ilgai laukė arba PDF jau atidarytas kitame skirtuke: atidarykite jį su {{ui:Atidaryti planus}}.

Atvirkščiai, kai MarkupCraft veikia jūsų kompiuteryje ir gali priimti failą, po brėžiniu esančioje lapų juostoje yra mygtukas {{ui:MarkupCraft}}: jis atidaro ekrane esančio lapo PDF MarkupCraft naujame skirtuke, kad būtų peržiūrėtas ir pažymėtas.

## Rasti lapą

- Slinkite kairėje esantį sąrašą {{ui:Lapai}} ir spustelėkite lapą.
- Viršuje esančiame sąraše įveskite į **Ieškoti lapų**, kad filtruotumėte pagal lapo numerį, failo pavadinimą ar puslapio etiketę. Šalia {{ui:Lapai}} skaičius rodo „3 iš 40“, kol įjungtas filtras.
- Paspauskite {{key:PageDown}} kitam lapui ir {{key:PageUp}} ankstesniam. Jie seka filtruotą sąrašą.

:::mac
Mac klaviatūroje be klavišų Page Up ir Page Down paspauskite fn su rodykle aukštyn arba žemyn.
:::

## Kaip pavadinami lapai

- Puslapis, kuriam PDF suteikia etiketę, pavyzdžiui `A-101`, pavadinamas ta etikete.
- Puslapis be etiketės (arba su etikete, kuri tiesiog yra jo puslapio numeris) pavadinamas „(failo pavadinimas), puslapis (n)“.
- Atidarius kelis PDF, lapai su etiketėmis taip pat turi failo pavadinimą: „A-101 — Architektūrinis“.

Lapų pavadinimų įvesti rankiniu būdu kol kas negalima.

## Apžvelgti lapą

- Sukite pelės ratuką, kad priartintumėte prie žymeklio.
- Vilkite kairiuoju arba viduriniu mygtuku, kad slinktumėte. Su {{ui:Automatinis skaičiavimas}} arba kai pradedate ties žymos kampu, laikykite {{key:Space}} vilkdami arba vilkite viduriniu mygtuku.
- Paspauskite {{key:F}} arba pasirinkite {{ui:Pritaikyti lapą}}, kad matytumėte visą lapą; {{key:W}} arba {{ui:Pritaikyti plotį}} pritaiko jo plotį.
- Paspauskite {{key:Plus}} arba {{key:=}}, kad priartintumėte, ir {{key:Minus}}, kad nutolintumėte, nuo vaizdo vidurio.

Kiekvienas lapas prisimena savo mastelį ir padėtį, kol lieka atviras.

## Toliau

Prieš matuodami lapą, jam reikia mastelio: [Nustatyti mastelį](topic:set-the-scale).
