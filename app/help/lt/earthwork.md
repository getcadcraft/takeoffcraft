---
title: Žemės darbai ir taškų aukščiai
summary: Pažymėkite taškų aukščius situacijos plane, perduokite juos CivilCraft paviršiui ir pjūviui bei pylimui, o čia paimkite paprastus kasimo kiekius.
keywords: žemės darbai, kasimas, iškasimas, pylimas, kasimas ir pylimas, vertikalusis planavimas, taško aukštis, aukščiai, topografija, paviršius, triangiliacija, civilcraft, taškai, pnezd, tranšėja
from: a898e508
---

TakeoffCraft matuoja tai, kas nubrėžta lape. Žemės darbams reikia žemės paviršiaus, todėl jis bendrinamas su CivilCraft, kuris sudaro paviršius iš taškų, juos formuoja nuolydžiais ir apskaičiuoja kasimo, pylimo ir išvežimo kiekius.

## Paprastas kasimas čia

Pamatui, iškasamam vienodu gyliu, pakanka ploto elemento su **gyliu**: tūris = plotas × gylis. Bendrųjų darbų [rinkinyje](topic:trade-packs) yra bendro kasimo elementas (natūralaus grunto tūris, puraus grunto tūris ir sunkvežimių kiekiai) ir inžinerinių tinklų tranšėjos elementas (kasimas, paklotė ir užpylimas pagal ilgį ir gylį).

## Taškų aukščiai CivilCraft

1. Nustatykite situacijos lapo mastelį.
2. Sukurkite „Skaičius“ tipo elementą, pavyzdžiui „Esamas gruntas“, ir spustelėkite kiekvieną taško aukštį lape.
3. Pasirinkite žymę ir pasirinktos žymės skydelyje įveskite jos {{ui:Aukštis}}: `102.5`, `102'-6"` arba `31.24 m`. Neigiami ir nuliniai aukščiai tinka.
4. Atidarykite {{ui:Eksportuoti}} meniu ir pasirinkite {{ui:Taškų aukščiai}}. Gausite taškų failą (`.csv`) su stulpeliais Point, Northing, Easting, Elevation ir Description, po vieną eilutę kiekvienam pažymėtam atidaryto lapo taškui.
5. Atidarykite tą failą CivilCraft (žr. [Importuoti taškus](app:civilcraft/import-points)). Iš taškų jis sudaro paviršių ([Sudaryti paviršių](app:civilcraft/build-surface)); toliau jis palygina paviršius ir pateikia kasimą bei pylimą ([Tūriai](app:civilcraft/volumes)).

Northing ir easting yra paties lapo koordinatės pėdomis, matuojamos nuo lapo kampo pagal jo mastelį: atstumai ir tūriai tarp taškų yra tikri, bet tai nėra jūsų statybvietės geodezinės koordinatės. Kai reikia, perkelkite jas į statybvietės koordinates CivilCraft.

:::note
Taškai iš skirtingų lapų neturi bendrų koordinačių, todėl eksportuojamas tik atidarytas lapas. Aukščiai įrašomi kartu su kiekių skaičiavimu ir perkeliami kopijuojant bei įklijuojant.
:::

## Pjūvis ir pylimas iš CivilCraft

CivilCraft žemės darbų rezultatai grįžta kaip du elementai, kuriuos galite įkainoti:

1. CivilCraft sudarykite savo aikšteles ir koridorius, tada pasirinkite {{ui:Siųsti į TakeoffCraft}} skyriuje **Earthwork** ([Žemės darbų tūriai](app:civilcraft/volumes)). Failas įrašomas kaip kiekių failas (`.quantities.json`).
2. TakeoffCraft atidarykite jį naudodami {{ui:Atidaryti kiekius}} arba tiesiog numeskite jį ant programos. Kiekių skaičiavimas lieka atidarytas: failas prideda **Earthwork: cut** ir **Earthwork: fill** kaip [tipizuotus kiekius](topic:create-items#typed-quantities-no-drawing) kubiniais jardais (CY), jei projektas pėdų, arba kubiniais metrais (m³), jei metrų projektas. Tai vienas žingsnis: {{key:Mod+Z}} jį atšaukia.
3. Pervardykite juos, nustatykite atliekas, normas ir sudėtis, kaip norite.

Pasikeitus projektui, iš CivilCraft siųskite iš naujo ir atidarykite naują failą: tie patys du elementai gauna naujus kiekius. Jų pavadinimai, normos, atliekos ir sudėtys lieka tokios, kokias nustatėte. Jei pasikeitė projekto vienetas, būsenos juostoje tai nurodoma: patikrinkite normas. Failas iš kito CivilCraft projekto prideda savo du elementus.

Kiekiai yra natūralaus grunto tūriai, kaip juos išmatavo CivilCraft (tinklelio metodu): be susitraukimo ar išsipūtimo. Pridėkite juos kaip atliekas arba su formule, pavyzdžiui `Q * 1.25`, purajam tūriui. Elemento redaktorius rodo, iš kur ir kada atsirado kiekvienas, o sąmatos pastabų stulpelyje tai nurodoma taip pat.

:::note
Kiekių failas yra paprastas JSON (`"format": "cadcraft-quantities"`), todėl scenarijus ar kita programa taip pat gali jį parašyti: programos pavadinimą, projektą ir elementus su raktu, pavadinimu, vienetu ir kiekiu.
:::
