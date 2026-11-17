---
title: Pastabos, debesys ir paryškinimai
summary: Žymėkite klausimus ir pakeitimus lapuose pastabomis, revizijų debesimis ir paryškinimais, sekite kiekvieno būseną kaip atvirą, atsakytą ar uždarytą ir siųskite juos pažymėtame PDF.
keywords: žymėjimas, žymėjimai, pastaba, komentaras, klausimas, RFI, debesys, revizijos debesis, paryškinimas, būsena, atvira, atsakyta, uždaryta, peržiūra, žymėjimų sąrašas
from: 2b395c13
---

Žymėjimai skirti tam, ką reikia prisiminti ar paklausti braižant kiekius: „patvirtinti pagrindo tipą“, revizijos debesis aplink pakeistą sieną, paryškinta pastaba plane. Jie stovi lape su būsena, surašyti vienoje vietoje ir spausdinami pažymėtame PDF. Jie **niekada neskaičiuojami**: nei kiekio, nei kainos.

## Pridėti vieną

Atidarykite {{ui:Žymėjimas}} juostoje virš lapo ir pasirinkite:

| Žymėjimas | Kaip |
|---|---|
| {{ui:Pastaba}} | Spustelėkite, kur ji turi būti, įrašykite pastabą ir pasirinkite {{ui:Pridėti}}. Ji rodoma kaip apvalus smeigtukas, šalia – pirmoji jos eilutė. |
| {{ui:Debesys}} | Spustelėkite vieną kampą, tada priešingą ir įrašykite pastabą (arba palikite tuščią). Aplink langelį nubrėžiamas banguotas revizijos debesis. |
| {{ui:Paryškinimas}} | Spustelėkite du kampus: permatomas geltonas langelis, jei norite – su pastaba. |

Paspaudus {{key:Esc}} po pirmo kampo, veiksmas atšaukiamas. Įrankis lieka įjungtas kitam; {{key:V}} grąžina į {{ui:Pasirinkti}}.

## Būsena ir redagavimas

Spustelėkite žymėjimą su {{ui:Pasirinkti}}, kad jį pasirinktumėte. Dešiniajame skydelyje rodoma **Žymėjimas**: jo tipas ir lapas, jo **Būsena** – Atvira, Atsakyta arba Uždaryta – ir tekstas, kurį galite keisti. {{key:Delete}} (arba {{ui:Naikinti}}) pašalina jį; {{key:Mod+Z}} jį grąžina.

Pastabos smeigtukas yra oranžinis, kol atviras, mėlynas, kai atsakytas, ir pilkas, kai uždarytas; uždarytas debesis tampa pilkas.

## Sąrašas

**Žymėjimai** dešiniajame skydelyje išvardija visus kiekių skaičiavimo žymėjimus su jų būsenomis ir nurodo, kiek jų dar atvira. Pažymėkite **Tik atviri**, kad matytumėte, ką dar reikia išspręsti. Spustelėkite eilutę, kad nueitumėte į jos lapą ir ją pasirinktumėte.

## Bendrinimas

- {{ui:Pažymėtas PDF}} nubraižo juos ant puslapių: paryškinimus, debesis ir smeigtukus, kiekvieną su langeliu, kuriame didžiosiomis raidėmis nurodyta būsena (ATVIRA, ATSAKYTA, UŽDARYTA) ir tekstas. Įtraukiamas ir puslapis, kuriame yra žymėjimų, bet nėra kiekių žymių.
- {{ui:XLSX}} prideda darbalapį **Žymėjimai**: lapas, tipas, būsena ir tekstas, po vieną eilutę kiekvienam.
- Jie įrašomi `.takeoff.json` faile ir [PDF faile su kiekių skaičiavimu viduje](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
