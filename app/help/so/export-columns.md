---
title: Tiirarka dhoofinta
summary: Xaashi kasta iyo tiir kasta oo ka mid ah dhoofinta XLSX iyo CSV, oo leh qaacidooyinka uu xaashida Qiyaas kharash ku haysto.
keywords: dhoofin, tiirar, xlsx, csv, xaashi, xaashida qiyaasta, sida xaashiga, calaamadaha, miisaamaha, qaacidooyin, goobaha
from: fed07851
---

## Qiyaas kharash (xaashida XLSX iyo CSV)

Hal safka shay kasta, ku xigta safka qayb kasta oo isku-dhiskiisa ku jira (faraq lagu galay). Kadib safka madhan iyo wadarta guud ee shaqada.

| Tiir | Waxa ku jira | XLSX-ka gudihiisa |
|---|---|---|
| A Shay | Magaca shayga (qoraal qalin) ama magaca qaybta (faraq lagu galay) | Qoraal |
| B Nooca | Linear, Area, Count ama Component | Qoraal |
| C Unug | LF, m, SF, SY, m², EA, ama unugga qaybta | Qoraal |
| D Tiro | Wadarta la cabbiray, ama natiijada qaacidda | Tiro |
| E Qashin % | Qashinka | Boqolkiiba (0.10 = 10%) |
| F Tiro oo qashin leh | Tiro × (1 + qashin) | Qaacid `D*(1+E)` |
| G Alaab halka unug kasta | Qiimaha alaabta | Tiro |
| H Shaqo halka unug kasta | Qiimaha shaqada | Tiro |
| I Alaab | Alaabta la wareejiyay | Qaacid `ROUND(F*G,2)` |
| J Shaqo | Shaqada la wareejiyay | Qaacid `ROUND(F*H,2)` |
| K Wadar | Alaab + shaqo | Qaacid `I+J` |
| L Fiiro gaar ah | Qaacidda la isticmaalay, khaladka qaacidda, calaamadaha xaashiyada aan miisaan lahayn, aagga darbiga, perimeter-ka | Qoraal |

Safka wadarta guud: `SUM` oo ah tiirarka I, J iyo K ee safafka kor ku yaal oo dhan, iyo "Dhammaystirnayn ma aha: eeg fiiro gaarka kor ku yaal" tiirka Fiiro gaar ah marka wax laga tago.

Safka leh khalad qaacidda ma leeyahay tiro ama lacag; fiiro gaarkiisa ayaa sheegaya khaladka. Safka koowaad ayaa la xiray.

CSV-ga, tiirarka isku mid ah waxay haystaan qiimayaal caadi ah, Qashin % waa tiro boqolkiiba ah (10 oo u taagan 10%), lacagta waa doolar oo leh laba tobanle. Qoraal uu barnaamijka miiska xisaabta u qaadan karo qaacid (oo ku bilaabma `=`, `+`, `-` ama `@`) waxaa hor dhigan `'`, si u sii ahaato qoraal.

## Sida xaashiga (XLSX oo keliya)

| Tiir | Waxa ku jira |
|---|---|
| Xaashi | Magaca xaashiga (oo leh magaca PDF marka aan la furin) |
| Shay | Magaca shayga |
| Tiro | Tirada shaygaas xaashigaas, unugga shayga |
| Unug | Unugga shayga |
| Calaamadaha | Tirada calaamadaha |

## Calaamadaha (XLSX oo keliya)

Hal safka calaamad kasta.

| Tiir | Waxa ku jira |
|---|---|
| Xaashi | Magaca xaashiga |
| Shay | Magaca shayga |
| Nooca | Linear, Area ama Count |
| Tiro | Dherer, aagga net-ka, ama 1 |
| Unug | LF ama m; SF, SY ama m²; EA |
| Faahfaahin | Linear: dherarka qaybaha, qaybaha laga jaray oo lagu calaamadiyay "(deduct)", iyo "deducts (length) of (length) drawn". Area: aagga guud iyo kuwa la jaray marka ay jiraan, iyo perimeter-ka. "Sheet has no scale" calaamadaha aan miisaan lahayn. |
| Aagga tartanka | Kaliya marka xisaabintu leedahay aagag tartan: aagga calaamadda, ama "No bid area" |

## Sida aagga tartanka (XLSX oo keliya, marka xisaabintu leedahay aagag tartan)

| Tiir | Waxa ku jira |
|---|---|
| Aagga tartanka | Magaca aagga, ama "No bid area" |
| Shay | Shayga, ama qayb faraq lagu galay hoostiisa |
| Unug | Unugga shayga ama qaybta |
| Tiro | La cabbiray aagga (qaybaha: qaacidda ku saleysan wadarta aagga) |
| Tiro oo qashin leh | Tiro × (1 + qashin) |
| Alaab, Shaqo, Wadar | La wareejiyay ilaa sentiga, sida Qiyaas kharash |
| Fiiro gaar ah | Qaacidda, khaladaadka iyo calaamadaha aan miisaan lahayn, sida Qiyaas kharash |

Aag kasta wuxuu ku dhammaadaa safka "(magaca) subtotal" oo kharashkiisu yahay qaacidooyin `SUM` oo ku saleysan safafkiisa; safka ugu dambeeya, **All bid areas**, wuxuu ku daraa subtotal-yada. Xaashida **Calaamadaha** kadib waxay leedahay tiir todobaad, **Aagga tartanka**.

## Miisaamaha (XLSX oo keliya)

Hal safka xaashi kasta oo leh miisaan ama calaamado.

| Tiir | Waxa ku jira |
|---|---|
| Xaashi | Magaca xaashiga |
| Miisaan | Magaca preset-ka, ama miisaanka la calibrate-ay, ama "No scale" |
| Sidee | "Preset", ama "Calibrated on (the distance you typed)" |
| Feet halkii unug PDF | Qiimaha saxda ah ee miisaanka ee TakeoffCraft isticmaasho |

## Magacyada faylalka

- `(name).xlsx` iyo `(name).csv`, halkaas oo magaca laga qaado PDF-ka ugu horreeya ee la furay xisaabinta.
- CSV-ga waa UTF-8 oo leh calaamadda bytes-ka ee bilowga iyo xariiqyada Windows, taas oo barnaamijyada miiska xisaabta ee dhammaan nidaamyada akhristaan.
