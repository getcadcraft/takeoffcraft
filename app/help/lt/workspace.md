---
title: TakeoffCraft ekranas
summary: Ekrano apžvalga pagal ekrane rodomus pavadinimus – įrankių juosta, lapų sąrašas, lapas, Pozicijų skydelis, Kiekių lentelė ir būsenos juosta.
keywords: ekranas, išdėstymas, juostelė, projekto naršyklė, įrankių dėžė, informacijos langelis, įrankių juosta, skydeliai, lapų sąrašas, pozicijų skydelis, kiekiai, būsenos juosta, apžvalga, sąsaja
from: ab1115e0
---

TakeoffCraft užpildo naršyklės langą po CadCraft programos juosta. Iš viršaus į apačią ir iš kairės į dešinę:

| Dalis | Kur | Kam skirta |
|---|---|---|
| Programos juosta | Pats viršus | Programos pavadinimas, versija, {{ui:Apie TakeoffCraft}}, {{ui:Žinynas}} ({{key:F1}}), {{ui:Įrašyti neprisijungus}}, {{ui:Parametrai}} ({{key:Mod+,}}), mygtukas {{ui:Visas ekranas}} ir {{ui:Lapas}} / {{ui:Modelis}} temos jungiklis. |
| Įrankių juosta | Po programos juosta | Visos komandos, grupėmis: {{ui:Failas}}, {{ui:Eksportuoti}}, {{ui:Mastelis}}, {{ui:Kiekiai}}, {{ui:Redaguoti}}, {{ui:Vaizdas}}. |
| Lapai | Kairėje | Kiekvienas atidaryto PDF puslapis su miniatiūra, mastelio ir žymių skaičiumi. |
| Lapas | Viduryje | Atidarytas puslapis. Matuojate čia. |
| Pozicijos | Dešinėje | Jūsų kiekių skaičiavimo pozicijos, pasirinktos pozicijos nustatymai ir pasirinkta žymė. |
| Kiekiai | Apačioje | Kiekiai ir sąnaudos pagal poziciją arba pagal lapą, ir bendra suma. |
| Būsenos juosta | Pati apačia | Gyvas matavimas, pranešimai, 45° patarimas ir mastelis. |

## Įrankių juosta

Užveskite pelę ant bet kurio mygtuko, kad pamatytumėte, ką jis daro, ir kokį klavišą jis turi.

| Grupė | Mygtukai |
|---|---|
| {{ui:Failas}} | {{ui:Naujas}} (tuščias kiekių skaičiavimas), {{ui:Atidaryti PDF}} ({{key:Mod+O}}), {{ui:Atidaryti kiekius}} (`.takeoff.json` projektas), {{ui:Įrašyti kiekius}} ({{key:Mod+S}}) |
| {{ui:Eksportuoti}} | Vienas meniu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Pažymėtas PDF}} |
| {{ui:Mastelis}} | {{ui:Kalibruoti}} ({{key:K}}), {{ui:Tikrinti}} ({{key:D}}) ir {{ui:Iš anksto nustatytas}} sąrašas |
| {{ui:Kiekiai}} | {{ui:Pasirinkti}} ({{key:V}}), {{ui:Linijinis}} ({{key:L}}), {{ui:Plotas}} ({{key:A}}), {{ui:Apskritimas}} ({{key:O}}), {{ui:Lankas}} ({{key:R}}, įjungimo ir išjungimo jungiklis), {{ui:Atskaita}} ({{key:E}}, įjungimo ir išjungimo jungiklis), {{ui:Išpjova}} ({{key:X}}), {{ui:Skaičiuoti}} ({{key:C}}), {{ui:Automatinis skaičiavimas}} ({{key:S}}) |
| {{ui:Redaguoti}} | {{ui:Anuliuoti}} ({{key:Mod+Z}}), {{ui:Perdaryti}} ({{key:Mod+Y}}), {{ui:Kopijuoti}} ({{key:Mod+C}}), {{ui:Įklijuoti}} ({{key:Mod+V}}) ir {{ui:Daugiau}}: {{ui:Iškirpti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Įklijuoti vietoje}}, {{ui:Dubliuoti}}, {{ui:Naikinti}}, {{ui:Pasirinkti viską}}, {{ui:Panaikinti pasirinkimą}} |
| {{ui:Vaizdas}} | {{ui:Pritaikyti lapą}} ({{key:F}}), {{ui:Pritaikyti plotį}} ({{key:W}}) |

Naudojamas įrankis rodomas nuspaustas. Mygtukai {{ui:Lankas}} ir {{ui:Atskaita}} lieka nuspausti, kol įjungti.

## Lapai (kairėje)

- **Ieškoti lapų** filtruoja sąrašą pagal lapo pavadinimą, failo pavadinimą ar puslapio žymą.
- Kiekvienas lapas rodo miniatiūrą (piešiamą slenkant), savo pavadinimą ir arba mastelį, arba **Nėra mastelio**.
- Dešinėje kiekvienos eilutės pusėje rodomas lapo žymių skaičius. Kai pozicija paryškinta, vietoj to rodomas tos pozicijos žymių skaičius šiame lape.
- Spustelėkite lapą, kad jį atidarytumėte. {{key:PageDown}} ir {{key:PageUp}} pereina prie kito ir ankstesnio lapo sąraše.
- Kai kiekių skaičiavimas apima PDF, kurie neatidaryti, po sąrašu esanti pastaba juos įvardija. Žr. [Įrašyti ir vėl atidaryti kiekių skaičiavimą](topic:save-and-reopen).

Lapų pavadinimai ateina iš PDF: puslapio žyma, pavyzdžiui `A-101`, tampa lapo pavadinimu. Puslapis be žymos pavadinamas pagal savo failą ir puslapio numerį, pavyzdžiui „Planai, puslapis 3“. Kai atidaryti keli PDF, lapai su žymomis rodo ir failo pavadinimą.

## Lapas (viduryje)

- Juosta po lapu rodo lapo pavadinimą ir jo mastelį arba pranešimą „Mastelio dar nėra: pasirinkite iš anksto nustatytą arba kalibruokite“. Jos mygtukai: {{ui:MarkupCraft}} (kai ta programa gali priimti PDF; žr. [Pradėkite kiekių skaičiavimą ir atidarykite planų rinkinį](topic:open-plan-set)), {{ui:Palyginti}} (senesnė lapo versija virš šios: [Palyginti pakeistą lapą](topic:compare-revisions)), „(n) patikrinti“ (pažymėtos žymės, kai jų yra) ir {{ui:3D}} ([3D tikrinimo vaizdas](topic:check-in-3d)).
- Kol nėra atidaryto PDF, viduryje rodomas trumpas penkių žingsnių vadovas.
- Ratukas priartina prie žymeklio. Vilkite, kad pastumtumėte. Žr. [Klaviatūra ir pelė](topic:keyboard).
- Kol naudojate {{ui:Automatinis skaičiavimas}}, virš lapo atsiranda juosta su valdikliais.

## Pozicijos (dešinėje)

Viršuje – sąrašas {{ui:Sąmatos sritis}}: pastatas, aukštas ar etapas, į kurį patenka nauji žymės ([Sąmatos sritys](topic:bid-areas)).

- {{ui:Nauja pozicija}} atidaro nedidelę formą: pavadinimą, tipą ({{ui:Linijinė (ilgis)}}, {{ui:Plotas}} arba {{ui:Skaičiuoti}}) ir {{ui:Pridėti}}.
- Sąraše rodoma kiekvienos pozicijos spalva, tipo piktograma, pavadinimas ir kiekis. Spustelėkite poziciją, kad piešiatumėte ja ir paryškintumėte jos žymes visuose lapuose. Dar kartą spustelėkite, kad nebeparyškintumėte.
- Po sąrašu **Pozicija: (name)** yra pozicijos redaktorius: pavadinimas, tipas, spalva, vienetas, aukštis arba gylis, atliekų koeficientas, medžiagų ir darbo įkainiai, išmatuotos reikšmės ir {{ui:Surinkimas}}. Žr. [Kurkite kiekių skaičiavimo pozicijas](topic:create-items).
- **Pasirinkta žymė** pasirodo, kai pažymite žymę: kuriai pozicijai ji priklauso, jos lapas, matavimai ir mygtukai, pavyzdžiui {{ui:Pridėti išpjovą}} ir {{ui:Naikinti žymę}}. Kai pažymėta keletas žymių, ji tampa **Pasirinktomis žymėmis**: kiek kiekvienos pozicijos, ir {{ui:Kopijuoti}}, {{ui:Dubliuoti}}, {{ui:Iškirpti}} ir {{ui:Naikinti žymes}}.
- Pozicijos redaktorius baigiasi {{ui:Kopijuoti elementą}} ir {{ui:Dubliuoti elementą}}: pozicija su jos surinkimu ir sąnaudomis, be žymių. Žr. [Kopijuoti, įklijuoti ir dubliuoti žymes](topic:copy-paste).

## Kiekiai (apačioje)

- {{ui:Pagal poziciją}} išvardija kiekvieną poziciją ir jos surinkimo komponentus su kiekiu, atliekų koeficientu, įkainiais ir išplėstomis sąnaudomis. Atliekų koeficientus ir įkainius galite įrašyti tiesiai į lentelę.
- {{ui:Pagal lapą}} išvardija kiekvienos pozicijos kiekį kiekviename lape.
- Įspėjimas, prasidedantis **Neužbaigta:**, pasirodo, kai kažkas išleista iš sumų.
- {{ui:Bendra suma}} yra antraštės dešinėje.
- Mygtukas su rodykle toliausiai dešinėje slepia arba rodo lentelę, kad lape būtų daugiau vietos.

Žr. [Skaitykite kiekius ir sąmatą](topic:read-quantities).

## Būsenos juosta (apačioje)

Iš kairės į dešinę: gyvas matavimas, kol braižote (ilgis, plotas, spindulys arba patikros rezultatas), laukelis {{ui:Įvedimas}}, kai rašote ilgį, TakeoffCraft pranešimai, priminimas „Shift prilimpa prie 45°“ (arba „Prilimpa prie 45°; Shift atlaisvina kampą“, kai tai įjungta [Parametruose](topic:settings)), mygtukas {{ui:Prilipti}} (prilipimas prie brėžinio linijų, įjungtas, kai paryškintas; {{key:F3}}), ir mastelio procentas.

:::tip
Žiūrėkite į būsenos juostą, kai kas nevyksta. TakeoffCraft ten paaiškina, kodėl atmetė spragtelėjimą, pavyzdžiui „Šis lapas dar neturi mastelio“.
:::

## Kiti išdėstymai

Viskas aukščiau yra {{ui:CadCraft klasikinis}} išdėstymas, pradžia. {{ui:Parametrai}} ({{key:Mod+,}}) › {{ui:Visuotiniai}} › {{ui:Išdėstymas}} siūlo dar du; tie patys įrankiai ir klavišai veikia visuose trijuose, o pasirinkus {{ui:CadCraft klasikinis}} vėl viskas grįžta į savo vietas.

| Išdėstymas | TakeoffCraft |
|---|---|
| {{ui:Juostelė „Kiekių skaičiavimas“}} ir projekto naršyklė | Juostelė „Kiekių skaičiavimas“ viršuje ([Meniu, klavišai ir pelė](topic:menus-keys-and-mouse)), veikiančio įrankio juosta, skirtukas kiekvienam atidarytam lapui (brėžinio Modelis ir išdėstymai taip pat yra lapai) su mastelių nustatymais ir {{ui:Pritaikyti lapą}} po lapu. Kairysis skydelis laiko {{ui:Savybės}} (pasirinktą poziciją, pastabą ar žymę) virš {{ui:Kiekių naršyklė}}: {{ui:Lapai}} (spustelėkite vieną, kad atidarytumėte jį skirtuke), {{ui:Sąlygos}} (spustelėkite vieną, kad piešiatumėte ja) ir {{ui:Sąmata}} (kiekvienos pozicijos suma ir bendra suma); miniatiūros yra jo antras skirtukas. |
| {{ui:Įrankių dėžė ir informacijos langelis}} | Įrankių juosta virš lapo, informacijos langelis su {{ui:Sąmatos sritis}}, veikiančiu įrankiu arba pasirinkimu ir lapo juosta, kairėje – kiekių skaičiavimo įrankių stulpelis, skirtukas kiekvienam lapui, o {{ui:Prilipti}} ir mastelis – po lapu. |

Kol [3D tikrinimo vaizdas](topic:check-in-3d) atidarytas, lapų skirtukai ir juosta po lapu pasitraukia; uždarykite 3D vaizdą, kad vėl matuotumėte. Telefone visada veikia telefono išdėstymas.

## Visas ekranas ir temos

Mygtukas {{ui:Visas ekranas}} programos juostoje arba {{key:Ctrl+Shift+F}} (Control visose platformose, taip pat Mac) perjungia tarp įprasto, viso ekrano ir viso ekrano su paslėptomis juostomis. Kai juostos paslėptos, pelę perkelkite į viršutinį kraštą, kad jos vėl pasirodytų.

{{ui:Lapas}} yra šviesi tema, {{ui:Modelis}} – tamsi. Temoje {{ui:Modelis}} brėžinys rodomas apverstas (šviesios linijos tamsiame fone), tik ekrane; eksportai niekada nekeičiami.
