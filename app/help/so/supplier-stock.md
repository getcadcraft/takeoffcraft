---
title: Hubi kaydka bixiyaha iyo waqtiyada keenista
summary: Ku dar liiska kaydka bixiyaha (CSV ama buug-shaqo) TakeoffCraft wuxuu hubiyaa waxa xisaabintu u baahan tahay, iyo qashinka ku jira, isagoo ka eegaya; intuu ku filan yahay kaydka iyo intee la sugayo. Yaraanta iyo sugista dheer waxay ka muuqdaan guddiga Dhibaatooyinka.
keywords: bixiye, kayd, ku jira kaydka, waqtiga keenista, diyaar, yaraan, dalab dib u dhac, liiska dalabka, csv, sku, iibiye, agabka, bixin, dhibaatooyin
from: f11160fb
---

{{ui:Bixin}} oo ku yaal qalabka (baabuurka) waxay hubisaa waxa xisaabintaadu u baahan tahay ka eegaysa liiska kaydka bixiyaha. Safafka bixiyaha ee muhiimka ah waxay ku kaydsan yihiin faylka xisaabintaada. Waxba looma dirin meel, bixiyaha lama weydiiyo: adigaa keenaya faylka.

## Faylka

Fayl CSV ah oo leh safka madasha (header). Waxa loo baahan yahay tiir magac ama SKU ah iyo tiir kayd ama waqtiga keenista ah. Madasha la aqoonsanayo (ayaa kala horreeya, xarfaha weyn iyo yar ma muhiimka): Item, Name, Description ama Product; SKU, Part ama Item #; In stock, On hand, Available ama Quantity; Lead time ama Delivery days; Unit ama UOM; Price ama Cost; Supplier ama Vendor.

- Kaydku wuxuu noqon karaa tiro (1,200), "In stock" ama "Out of stock".
- Waqtiga keenista wuxuu noqon karaa "5 days", "2 weeks", "2-3 weeks" (kan dheer ayaa la isticmaalaa), "3 months", "same day" ama "backorder". Tiro kaliya waa unugga madasha (maalmo, marka madashu aan sheegin toddobaad ama bil).
- Faylasha Excel lama akhriyo: marka hore kaydi xaashiga CSV.

## Hubi xisaabinta

1. Dooro {{ui:Bixin}}, kadibna {{ui:Ku dar fayl bixiye…}} oo dooro CSV-ga. Ku dar wax ka badan: ilaa shan fayl, 2,000 safaf oo wadar ah ayaa la hayaa, kuwa shayadaada la waafaqa ayaa marka hore.
2. Shay kasta, shuruud labaad iyo qayb isku-dhis oo leh tiro waxaa lagu xidhaa safka magac ama SKU magaceeda ku jira. Magac u eg (mid ku jira mid kale) waa la isticmaalaa marka magac sax ah aanu jirin, waanana la sheegaa.
3. Hoos {{ui:Waxa xisaabintu u baahan tahay}}, kuwa gaaban ayaa hore u yimaadda: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" ama "In stock". Baahiga wuxuu ku jiraa qashinka. Unugga bixiyaha oo aan ahayn kii qiyaasta (tan halka fut) waa la sheegaa oo weligeed looma isbarbar dhigo. Safka kasta wuxuu leeyahay {{ui:Dooro shayga}}, kaas oo kugu geeya shayga.
4. Deji {{ui:Waqtiga ugu dheer ee la doonayo (maalmo)}} (caadi ahaan 14). Shay aan kayd ku jirin oo sugaysa wakhti ka dheer taas waa la calaamadiyaa, koobku wuxuu magacaabaa sugista ugu dheer ee muhiimka ah.
5. {{ui:Liiska dalabka (CSV)}} wuxuu soo dejiyaa shayada gaaban, tirada ay ka yar yihiin, bixiyaha iyo waqtiga keenista. {{ui:Ka reeb}} wuxuu baahiga ka saaraa hubinta (waa tallaabo ka noqo).

## Buug-shaqada iyo Maktabadda qiimaha

Liiska bixiyaha wuxuu noqon karaa buug-shaqo Excel (.xlsx) sidoo kale CSV-ga: xaashiga ugu horreeya ayaa la akhriyaa, iyadoo la isticmaalayo magacyada tiirarka isku mid ah. Qaacidooyinka lama fuliyo; qiimaha uu faylku hayo ayaa la akhriyaa.

Markii fayl leh qiimayaal la daro, {{ui:Qiimayaasha Maktabadda}} oo ku yaal sanduuqa hadalka wuxuu dejiyaa qiimaha agabka ee kasta oo [Maktabadda](topic:price-library) ah oo faylku qiimeeyo: isla magac, iyo unug isku mid ah (ama aan la sheegin). Shaqada, qashinka, dhererka iyo isku-dhisyada way sii joogaan sidooda, qoraalka qaybtana wuxuu sheegayaa faylka qiimaha laga soo qaatay. Qaybta mitirka ah lama qiimeeyo liis fut ah, kaas oo aan magac u dhigmin waa la reebaa; xariiqda xaaladda ayaa sheegaysa inta laga reebay unugga. Ku qiimee mar kale Maktabadda si qiimaha cusub ugu yimaado xisaabintan.

## Guddiga Dhibaatooyinka

Yaraanta waa digniin, sugista dheer waa ogeysiis, oo ku jira guddiga la wadaago ee Dhibaatooyinka ("Bixinta alaabta"), sidaas darteed waxay la jiraan hubin kasta oo kale. Waxaad aqbali kartaa mid sabab la sheegay, aqbalaaddaasna waa lagu kaydiyaa xisaabinta.

## Kaaliyahaaga

Haddii aad oggolaysid kaaliyayaasha Dejinta, way akhrin karaan hubinta (supply_check). Ku dar fayl bixiye waa shaqada adigaa leh.

## Waxa la xusuusto

Tirooyinka kaydka waxay sax yihiin sida cusub faylka aad daratay. Dib u dar faylka si aad u cusboonaysiiso: fayl magac isku mid ah ayaa kii hore beddelaya.
