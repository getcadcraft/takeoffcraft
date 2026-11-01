---
title: Pradžia su TakeoffCraft
summary: Ką daro TakeoffCraft, kur veikia ir jūsų pirmoji išmatuota bei įkainuota pozicija iš PDF planų rinkinio.
keywords: pradžia, pirmas kiekių skaičiavimas, greitas startas, įvadas, sąmata, kiekių skaičiavimas, planų rinkinys, pdf
from: 3b9da1fb
---

TakeoffCraft matuoja planų rinkinius, PDF failus ir DWG bei DXF brėžinius, o matavimus paverčia įkainuota sąmata. Atidarote failus (brėžinys skaičiuojamas tiesiai iš savo blokų: žr. [Atidaryti DWG ar DXF brėžinį](topic:open-a-drawing)), kiekvienam lapui nustatote mastelį (brėžinys turi savo), kuriate **pozicijas** (sienos tipą, grindų apdailą, įrangą) ir spragtelite lapuose, kad jas nuskaitytumėte. Kiekiai, sąnaudos ir bendra suma atsinaujina dirbant. Sąmatą galite eksportuoti kaip skaičiuoklę, o PDF kopiją – su nubrėžtu kiekių skaičiavimu.

Jei kiekių skaičiavimą esate atlikę kitomis programomis, pirmiausia perskaitykite [Kiekių skaičiavimas iš kitos programinės įrangos](topic:coming-from). Čia kai kas veikia kitaip.

## Kur veikia

TakeoffCraft veikia jūsų naršyklėje. Atidarykite TakeoffCraft, ir ekranas iš karto paruoštas; nieko įdiegti nereikia.

- **Jūsų PDF lieka jūsų kompiuteryje.** Naršyklė juos atidaro ir niekada neįkelia. Įrašymas yra atsisiuntimas.
- Veikia dabartiniuose Chrome, Edge, Firefox ir Safari. Žr. [Naršyklės ir kompiuteriai](common:browsers).
- Veikia be interneto ryšio, kai pasirenkate {{ui:Įrašyti neprisijungus}} viršutinėje programos juostoje ir atsiranda {{ui:Paruošta neprisijungus}}. Žr. [Darbas neprisijungus](common:offline).
- Debesies įrašymas dar nepasiekiamas. Darbalaukio programa yra CadCraft Studio, kartu su kitomis septyniomis programomis.

## Pirmasis kiekių skaičiavimas per dešimt žingsnių

Ši instrukcija išmatuoja vieną sienos tipą ir jį įkainuoja. Tai užtrunka kelias minutes su bet kuriuo jūsų planu.

1. Pasirinkite {{ui:Atidaryti planus}} įrankių juostos grupėje {{ui:Failas}} (arba paspauskite {{key:Mod+O}}), pasirinkite vieną ar kelis PDF ir pasirinkite Atidaryti. PDF taip pat galite nuvilkti bet kur puslapyje.
   Lapai atsiranda kairėje, o pirmasis lapas atsidaro viduryje.
2. Raskite lapo atspausdintą mastelį jo antraštės bloke arba po brėžinio pavadinimu.
3. Grupėje {{ui:Mastelis}} atidarykite {{ui:Iš anksto nustatytas}} sąrašą ir pasirinkite tą mastelį, pavyzdžiui `1/4" = 1'-0"`.
   Juosta lapo apačioje dabar rodo „Mastelis 1/4" = 1'-0"“.
4. Pasirinkite {{ui:Tikrinti}} (arba paspauskite {{key:D}}) ir spragtelėkite du brėžinyje atspausdinto matmens galus.
   Būsenos juostos rodmuo apačioje kairėje turi atitikti atspausdintą matmenį. Jei ne, žr. [Nustatyti mastelį](topic:set-the-scale).
5. Dešinėje esančiame skydelyje {{ui:Pozicijos}} pasirinkite {{ui:Nauja pozicija}}, įveskite pavadinimą, pavyzdžiui `Vidaus sienos tipas A`, palikite tipą {{ui:Linijinė (ilgis)}} ir pasirinkite {{ui:Pridėti}}.
6. Įrankių juostoje pasirinkite {{ui:Linijinis}} (arba paspauskite {{key:L}}).
7. Spragtelėkite sienos pradžioje, tada kiekviename kampe palei ją. Du kartus spragtelėkite, paspauskite {{key:Enter}} arba spustelėkite dešiniuoju pelės mygtuku, kad užbaigtumėte ruožą.
   Ruožas nubrėžiamas pozicijos spalva, o jo ilgis atsiranda šalia pozicijos.
8. Pozicijos redaktoriuje, esančiame po {{ui:Pozicijos}}, įveskite `9'-0"` į {{ui:Aukštis}}, `0.85` į {{ui:Medžiaga $/LF}} ir `1.20` į {{ui:Darbas $/LF}}.
   Apačioje esanti lentelė {{ui:Kiekiai}} rodo ilgį, išplėstas medžiagų ir darbo sąnaudas bei {{ui:Bendra suma}}.
9. Pasirinkite {{ui:Įrašyti kiekius}} (arba paspauskite {{key:Mod+S}}).
   Naršyklė atsisiunčia failą `.takeoff.json`. Jame yra jūsų pozicijos, mastelių ir žymės, ir jis vėl atsidaro su tais pačiais PDF.
10. Atidarykite meniu {{ui:Eksportuoti}} įrankių juostoje ir pasirinkite {{ui:XLSX}}, kad atsisiųstumėte sąmatą kaip skaičiuoklę.

:::tip
Paspauskite {{key:Esc}}, kad nutrauktumėte, ką darote, ir grįžtumėte prie įrankio {{ui:Pasirinkti}}. {{key:Mod+Z}} anuliuoja bet kurį pakeitimą.
:::

## Ką skaityti toliau

- [TakeoffCraft ekranas](topic:workspace) pavadinimais nurodo kiekvieną lango dalį.
- [Pradėkite kiekių skaičiavimą ir atidarykite planų rinkinį](topic:open-plan-set) aprašo kelis PDF ir lapų sąrašą.
- [Kurkite kiekių skaičiavimo pozicijas](topic:create-items) paaiškina tipus, vienetus, atliekų koeficientus ir įkainius.
- [Surinkimai ir formulės](topic:assemblies) vieną matavimą paverčia stovais, plokščių lakštais ir kt.
- [Klaviatūra ir pelė](topic:keyboard) išvardija visus klavišus.
