---
title: Matavimas pagal brėžinį
summary: Imkite ilgius ir plotus tiesiai iš brėžinio linijų, lankų, polilinijų ir brūkšniuočių, pasirinkdami jas, su tiksliais lankais ir skylėmis, o ne braižydami spustelėjimais.
keywords: matuoti brėžinį, geometrija, polilinija, lankas, apskritimas, brūkšniuotė, išlinkis, tikslus ilgis, tikslus plotas, pasirinkti, langas, nubraižyti, iš CAD, tiesinis, plotas
from: fd734246
---

{{ui:Matuoti brėžinį}} DWG arba DXF lapo žymių juostoje paima paties brėžinio objektus kaip žymes, todėl jų nereikia braižyti spustelėjimais. Polilinijos ilgis, lanko ilgis, apskritimo plotas ir brūkšniuotės plotas su jos skylėmis išeina tikslūs – pagal tą pačią aritmetiką, kurią kiekių skaičiavimas naudoja kiekvienai žymei.

## Objektų paėmimas kaip tiesinės ar plotų pozicijos

1. Sukurkite arba spustelėkite **tiesinę** arba **plotų** poziciją po {{ui:Pozicijos}}. Lapui reikia mastelio.
2. Pasirinkite {{ui:Matuoti brėžinį}}.
3. Spustelėkite objektus lape, kad juos pasirinktumėte, arba aplink juos vilkite langą: pasirenkama viskas, kas visiškai į jį patenka. {{key:Shift}} prideda langą prie jau pasirinktų; spustelėkite pasirinktą objektą dar kartą, kad jį atsisakytumėte. Juostoje rodoma suma: „6 ruožai: 108'-9 1/8“ iš viso.
4. Pasirinkite pridėjimo mygtuką, kuriame nurodytas skaičius ir pozicija, pavyzdžiui, {{ui:Pridėti 6 į „Kraštas“}} (arba paspauskite {{key:Enter}}). Kiekvienas objektas tampa viena pozicijos žyme vienu anuliavimo žingsniu. {{key:Esc}} išvalo tai, ką pasirinkote.

## Ką priima kiekviena pozicijos rūšis

- **Tiesinė** pozicija priima linijas, lankus, polilinijas, apskritimus ir splainus pagal ilgį. Uždara figūra skaičiuojama pagal perimetrą. Brūkšniuotė neįtraukiama: ji turi plotą, o ne ilgį, ir juosta tai nurodo.
- **Plotų** pozicija priima uždaras figūras: uždaras polilinijas, apskritimus, 2D kietuosius kūnus ir brūkšniuotes su jų skylėmis. Atviri ruožai neįtraukiami, ir juosta tai nurodo.

## Tiksliai ir beveik tiksliai

Linijos, lankai (bet koks išlinkis), polilinijos su išlinkiais ir apskritimai yra tikslūs: ilgiai ir plotai naudoja lanko spindulį ir apėjimą, o ne jo paveikslėlį. Elipsės, splainai ir brūkšniuotės, kurių riba sudaryta iš kraštinių, matuojamos stygomis, kurių kampas – vienas laipsnis ar smulkesnis; tikslumas – iki 0,01 % elipsėms ir iki 0,1 % kitiems. Juosta nurodo, kiek iš pasirinktų objektų yra tokios kreivės.

## Iš kur ima

- **Modelis**: objektai modelio erdvėje. **Maketas**: jo paties linijos ir modelio objektai rėmelyje, mastelį įgaunantys per jį. Objektas, kertantis rėmelio kraštą, nesiūlomas (jis būtų spausdinamas nukirptas); objektas, kurį rodo du rėmeliai, paimamas vieną kartą.
- Tik sluoksniai, kuriuos rodo lapas. Blokai skaičiuojami, o ne matuojami: žr. [Skaičiuoti pagal brėžinį](topic:count-from-a-drawing). 3D polilinijos, tinkleliai, kietieji kūnai ir sritys nesiūlomi.
