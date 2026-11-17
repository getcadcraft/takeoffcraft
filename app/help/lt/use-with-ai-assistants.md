---
title: Naudoti TakeoffCraft su DI asistentu
summary: Leiskite savo DI asistentui ar skriptui skaityti kiekių skaičiavimo kiekius ir sąmatą, pridėti elementus ir žymas, skaičiuoti ir matuoti DWG ar DXF, eksportuoti: leidimai, prisijungimas per CadCraft Studio ir veiklos žurnalas.
keywords: di, ai, asistentas, agentas, mcp, modelio konteksto protokolas, skriptas, automatizavimas, kiekiai, sąmata, leidimai, atjungti, veikla
from: 7fa62ec6
---

## Ką sužinosite

Kaip leisti DI asistentui (ar jūsų parašytam skriptui) dirbti su TakeoffCraft ir kaip nuspręsti, ką jis gali liesti.

TakeoffCraft **neturi savo DI** ir niekur nieko neišsiunčia. DI asistentą pasirenkate patys: bet kokia programa, kalbanti Modelio konteksto protokolu (Model Context Protocol, MCP). TakeoffCraft jam tik suteikia įrankius, o pasirenkate, kuriuos.

## Įjunkite

1. Atidarykite {{ui:Parametrai}} (krumpliaratis programos juostoje arba {{key:Mod+,}}) ir eikite į skirtuką {{ui:TakeoffCraft}}.
2. Skyriuje {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir skriptams naudoti TakeoffCraft**. Iš pradžių tai išjungta.
3. Pasirinkite, ką jis gali daryti: **Skaitymas** pažymėtas iš pradžių; **Redaguoti**, **Įrašyti** ar **Eksportuoti** pažymėkite tik tada, kai reikia.

Įrankiai, kurių pažymėti leidimai neapima, asistentui nesiūlomi, o jei jis vis tiek jų prašo, TakeoffCraft atsisako ir įrašo tai veiklos žurnale. Išjungus jungiklį, visi ryšiai nutrūksta iš karto; {{ui:Atstatyti TakeoffCraft parametrus}} jį taip pat išjungia.

## Prijunkite savo asistentą

Asistentai prisijungia per **CadCraft Studio** jūsų kompiuteryje: Studio paleidžia nedidelį serverį, kurį pasiekia tik šis kompiuteris, ir apsaugo jį prieigos raktu, kurį sukuria kiekvieną kartą paleidžiant. Studio lange pasirinkite {{ui:Prijungti asistentą}} ir nukopijuokite adresą bei prieigos raktą į savo asistentą (Studio parodo tiksliai, ką įklijuoti). Prieigos rakto niekada neatskleiskite.

:::note
Naršyklės skirtukas negali atidaryti ryšio asistentui: naršyklės programose jungiklis neveikia, kol nenaudojate CadCraft Studio savo kompiuteryje.
:::

## Jūs išlaikote kontrolę

- **Kiekvienas pakeitimas – vienas anuliavimo žingsnis**, pažymėtas asistento pavadinimu (pavyzdžiui, „Asistentas: …“). {{key:Mod+Z}} atšaukia visą paskutinį asistento pakeitimą.
- **Žinote, kada jis prijungtas.** Programos juostos mygtukas įsijungus nurodo asistentą; spustelėkite jį, kad pamatytumėte, ką jis gali daryti, arba kad galėtumėte **Atjungti** jį.
- **Veikla.** {{ui:Parametrai}} › {{ui:TakeoffCraft}} › {{ui:Asistentai}} › {{ui:Veikla}} išvardija kiekvieną iškvietimą: kada, kurį įrankį, ar įvykdytą, ar atmestą. {{ui:Įrašyti žurnalą}} išsaugo jo kopiją.

## Ko gali paprašyti asistentas

| Įrankis | Leidimas | Ką daro |
|---|---|---|
| `app_info`, `sheets_list` | Skaitymas | Atidarytas kiekių skaičiavimas, jo PDF failai ir lapai, kiekvieno lapo mastelis ir žymos |
| `items_list` | Skaitymas | Elementai su vienetais, įkainiais ir surinkimų formulėmis |
| `takeoff_quantities` | Skaitymas | Kiekiai pagal elementą ar pagal lapą; žymos lapuose be mastelio išvardijamos, bet niekada neskaičiuojamos kaip nulis |
| `takeoff_estimate` | Skaitymas | Įkainota sąmata, kaip ją apskaičiuoja TakeoffCraft, su bendromis sumomis |
| `takeoff_export` | Eksportuoti | TakeoffCraft pačios CSV ar XLSX eksportas |
| `items_add` | Redaguoti | Prideda elementus su vienetais, įkainiais ir atliekomis |
| `marks_add` | Redaguoti | Matuoja bėgius, plotus ir kiekius lape. Ilgiai ir plotai tik lape, kuriam nustatytas mastelis, niekada – be jo |
| `cad_sheets`, `cad_catalog`, `cad_count` | Skaitymas | Atidarytame DWG ar DXF: jo lapai ir jų masteliai, kas gali būti suskaičiuota (blokai, sluoksniai ir tipai, tekstai) bei tikslūs kiekiai, kaip juos sukuria {{ui:Brėžinio skaičiavimas}} ([Skaičiuoti iš brėžinio](topic:count-from-a-drawing)) |
| `cad_count_add` | Redaguoti | Skaičiuoja brėžinyje ir kiekvienam rastam objektui uždeda kiekio žymą vienu veiksmu; pakartotinai skaičiuojant pridedama tik naujų |
| `cad_measure` | Redaguoti | Matuoja linijinį ar plotinį elementą pagal paties brėžinio linijas, lankus, polilinijas ir brūkšniuotes, kaip tai daro {{ui:Matuoti brėžinį}} ([Matuoti iš brėžinio](topic:measure-from-a-drawing)); tik lape, kuriam nustatytas mastelis |
| `usd_export` | Eksportuoti | Lapo, kuriam nustatytas mastelis, išmatuoti bėgiai, plotai ir kiekiai kaip 3D patikros modelis USD formatu (`.usdz`, `.usda` arba `.usdc`), kaip tai įrašo {{ui:USD paketas (.usdz)}} 3D patikros rodinyje ([Eksportuoti 3D patikros rodinį kaip USD](topic:usd)) |

Su pažymėtu **Redaguoti** asistentas prideda elementus ir žymas (kiekvienas iškvietimas – vienas anuliavimo žingsnis); jis negali perkelti, pakeisti ar ištrinti jau esančių žymų.

Tie patys kiekiai ir sąmata pasiekiami ir neatidarius TakeoffCraft: CadCraft MCP serveris atidaro `.takeoff.json` failą jūsų nurodytame aplanke (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), o `cadcraft info Job.takeoff.json` juos išveda komandinėje eilutėje. Jis taip pat atidaro DWG ar DXF kaip naują kiekių skaičiavimą jo lapuose (mastelis nustatomas iš brėžinio, kaip tai daro TakeoffCraft), skaičiuoja ir matuoja juos tais pačiais `cad_*` įrankiais, prideda elementus ir įrašo kiekių skaičiavimą (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` skaičiuoja iš komandinės eilutės.

## Jei kas neveikia

- **Asistentas nemato TakeoffCraft įrankių:** patikrinkite, ar šiame lange jungiklis įjungtas ir ar langas atidarytas Studio.
- **„needs the export permission“:** pažymėkite **Eksportuoti** skyriuje {{ui:Asistentai}}, tada paprašykite dar kartą.
- **Klaidos „401“ arba „token“:** raktas pasikeitė (Studio buvo paleistas iš naujo arba {{ui:Naujas prieigos raktas}}). Nukopijuokite naują raktą į asistento parametrus.

## Žr. taip pat

- [Receptai DI asistentams](common:assistants-recipes): veikiantys pavyzdžiai, kiekvienas su įrankiais, kuriuos jis iškviečia.
