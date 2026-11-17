---
title: Kopijuoti, įklijuoti ir dubliuoti žymas
summary: Kopijuokite žymas kartu su pozicijomis, įklijuokite ten, kur spustelėsite, arba tą pačią vietą kitame lape, dubliuokite, iškirpkite, ištrinkite ir pasirinkite visas; kiekvieną veiksmą galima anuliuoti vienu žingsniu.
keywords: kopijuoti, įklijuoti, iškirpti, dubliuoti, įklijuoti vietoje, iškarpinė, pasirinkti viską, panaikinti pasirinkimą, kelios žymos, tipinis aukštas, kartoti, tas pats planas, kitas lapas, kopijuoti poziciją, dubliuoti poziciją
from: e20e9024
---

Įrankių juostos grupėje {{ui:Redaguoti}} yra {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}} ir {{ui:Įklijuoti}}. Jos meniu {{ui:Daugiau}} yra likusieji, kiekvienas su savo klavišu: {{ui:Iškirpti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Įklijuoti vietoje}}, {{ui:Dubliuoti}}, {{ui:Naikinti}}, {{ui:Pasirinkti viską}} ir {{ui:Panaikinti pasirinkimą}}. Kiekvienas iš jų anuliuojamas vienu žingsniu su {{key:Mod+Z}}.

## Pasirinkti žymas

1. Pasirinkite {{ui:Pasirinkti}} ({{key:V}}) ir spustelėkite žymą.
2. Laikydami {{key:Shift}}, spustelėkite daugiau žymų, kad jas pridėtumėte. {{key:Shift}} + spustelėjimas pasirinktai žymai ją vėl pašalina.
3. Arba paspauskite {{key:Mod+A}} ({{ui:Pasirinkti viską}}), kad pasirinktumėte visas atverto lapo žymas.

Kai pasirinktos kelios žymos, dešiniajame skydelyje rodoma **Pasirinktos žymos**: kiek kiekvienos pozicijos, su {{ui:Kopijuoti}}, {{ui:Dubliuoti}}, {{ui:Iškirpti}} ir {{ui:Naikinti žymes}}. Kampų rankenėlės rodomos tik tada, kai pasirinkta viena žyma. {{key:Esc}} ({{ui:Panaikinti pasirinkimą}}) išvalo pasirinkimą.

## Kopijuoti ir įklijuoti ten, kur spustelėsite

1. Pasirinkite žymas ir paspauskite {{key:Mod+C}} ({{ui:Kopijuoti}}). Žymos nukopijuojamos kartu su savo pozicijomis, įskaitant kiekvienos pozicijos surinkimą, atliekas ir kainas.
2. Eikite į lapą, kuriame jas norite (gali būti tas pats lapas).
3. Paspauskite {{key:Mod+V}} ({{ui:Įklijuoti}}). Punktyrinė kopija seka žymeklį.
4. Spustelėkite, kur ją dėti. Nukopijuotų žymų vidurys nusileidžia ten, kur žymeklis.

{{key:Esc}} atšaukia ir nieko nepridedama. Įklijuotos žymos paskui pasirenkamos, todėl {{key:Delete}} arba {{key:Mod+Z}} jas vėl pašalina.

Tame pačiame kiekių skaičiavime įklijuotos žymos patenka į **tas pačias pozicijas**, todėl jų kiekiai prisideda prie tų pozicijų. Kitame kiekių skaičiavime (kitame skirtuke arba po {{ui:Naujas}}) naudojama pozicija su tuo pačiu pavadinimu ir tipu; kitu atveju pozicija pridedama su savo surinkimu. Jei pavadinimą jau turi kito tipo pozicija, pridėta pozicija pavadinama „(pavadinimas) (kopija)“.

Įklijuotos žymos patenka į sąmatos sritį, pasirinktą {{ui:Pozicijos}} skydelio viršuje (arba į jokią). Žr. [Sąmatos sritys](topic:bid-areas).

## Įklijuoti vietoje

{{key:Mod+Shift+V}} ({{ui:Įklijuoti vietoje}}) padeda kopiją tiksliai toje pačioje vietoje atverto lapo, pagal jos padėtį puslapyje. Naudokite tipiniam aukštui: išmatuokite 2 aukštą, nukopijuokite, atverkite 3 aukštą ir įklijuokite vietoje.

Įklijuoti vietoje reikia lapo **to paties dydžio** kaip tas, iš kurio kopijavote. Lape kitokio dydžio TakeoffCraft apie tai praneša ir nieko neįklijuoja; vietoje to naudokite {{ui:Įklijuoti}} ir spustelėkite. Lape, iš kurio kopijavote, kopija patenka ant originalų.

## Mastelis turi sutapti

Ilgiai ir plotai priklauso nuo lapo mastelio. Ruožas, kuris matuojamas 10' esant 1/4" = 1'-0", būtų 20' lape, kurio mastelis 1/8" = 1'-0". Todėl TakeoffCraft įklijuoja ruožus ir plotus tik į lapą, kurio **mastelis toks pat** kaip lapo, iš kurio jie atėjo, ir aiškiai pasako, kai taip nėra:

- atverto lapo mastelis dar nenustatytas: pirmiausia nustatykite jį ([Nustatyti mastelį](topic:set-the-scale)), tada įklijuokite;
- atverto lapo mastelis kitoks: pranešime nurodomi abu mastelius. Įklijuokite lape su tuo pačiu masteliu;
- skaičiavimams mastelis nereikalingas: nukopijuoti skaičiavimai įklijuojami bet kur.

## Dubliuoti

{{key:Mod+D}} ({{ui:Dubliuoti}}) nukopijuoja pasirinktas žymas ir iškart padeda kopiją ant žymeklio; spustelėkite, kur ją dėti. Nieko nepridedama, kol nespustelėsite, o {{key:Esc}} nepalieka nieko. Dubliavimas nekeičia to, ką įklijuoja {{ui:Įklijuoti}}.

## Iškirpti ir ištrinti

- {{key:Mod+X}} ({{ui:Iškirpti}}) nukopijuoja pasirinktas žymas ir jas ištrina. Įklijuokite jas ten, kur jos priklauso, arba anuliuokite iškirpimą.
- {{key:Delete}} arba {{key:Backspace}} ({{ui:Naikinti}}) ištrina pasirinktas žymas nekopijuodamos.

## Kopijuoti poziciją

Pozicijos redaktorius (skiltyje **Pozicijos**) baigiasi:

- {{ui:Kopijuoti elementą}}: nukopijuoja poziciją su jos surinkimu, atliekomis ir kainomis, be žymų. {{ui:Įklijuoti}} tada prideda jos kopiją į šį kiekių skaičiavimą arba į kitą.
- {{ui:Dubliuoti elementą}}: iškart prideda kopiją pavadinimu „(pavadinimas) (kopija)“.

:::tip
Kopija lieka šiame kompiuteryje: ji saugoma šiame skirtuke ir naršyklės saugykloje, todėl kitas TakeoffCraft skirtukas gali ją įklijuoti. Niekas neįkeliama, o sistemos iškarpinė nenaudojama, todėl žymų į kitas programas įklijuoti negalima.
:::

:::note
Kopija imama iš vieno lapo vienu metu. Žymos įklijuojamos tokios, kokios yra: kopijos pasukti arba veidrodžiu atspindėti dar negalima.
:::
