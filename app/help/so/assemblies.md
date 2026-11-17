---
title: Isku-dhisyada iyo qaacidooyinka
summary: Ku dar qaybaha walxa, oo qaacidooyinku ha u beddelaan dherer, bal ama tiro dhagaxyo, saxano, xaashiyo loox, kontaree iyo qalab, iyadoo la isticmaalayo darbi la shaqeeyey.
keywords: isku-dhis, qaybaha, qaacido, dhagaxyo, saxano, xaashiyo loox, kontaree, yard kuwaad, qalab, cunto, caadi, qaybaha walxa
from: 12891a21
---

Isku-dhisku ee walxa (**assembly**) waa liis qaybo ah, mid kastaa leeyahay qaacido tiro iyo qashin iyo heerarkiisa. Qaacidadu waxay isticmaashaa wadarta la cabbiray ee walxa, sidaas darteed hal cabbir oo darbi ah waxay kuu siinaysaa dhagaxyo, saxano iyo loox isla mar, waxayna cusboonaanayaan marka aad cabbirto.

## Doorsoomayaasha aad isticmaali karto

| Nooca walxa | Doorsoomayaasha |
|---|---|
| Khadka | `L` dherer, `H` joog, `A` bedka darbiga (L × H), `N` tirada socodsiinta |
| Bedka | `A` bedka, `P` wareegga (kontuur + goyn), `H` qoto ama dhumucda, `N` tirada bedadka |
| Tiro | `N` tiro |

Qiimaha waxaa lagu qoraa unugyada walxa: feet iyo square feet walxyada LF iyo SF, mitir iyo square mitir walxyada m iyo m². Walxa SY, `A` waa square yard, `P` iyo `H` waxay ku sii jiraan feet.

Qaacidooyinku waxay isticmaalaan `+ - * /` (ama × ÷), qawsyo, lambarro, iyo hawlaha `ceil`, `floor`, `round`, `min`, `max` iyo `abs`. Xeerarka oo dhan waxay ku jiraan [Luuqadda qaacidada](topic:formulas).

## Tusaale la shaqeeyey: darbi gudaha

Waxaad cabbirtay **Darbiga gudaha nooca A** sida walxa khadka ah: 4 socodsiin oo wadarteeda 120 LF, iyo {{ui:Height}} oo la dejiyay `9'-0"`. Qiimaha **La cabbiray** wuxuu akhrinayaa L = 120, N = 4, A = 1,080 (SF darbi, hal dhinac).

1. Dooro walxa hoosta {{ui:Items}}.
2. Ku {{ui:Assembly}}, dooro {{ui:Add component}}.
   Qayb magaceeda "Component" ayaa soo muuqda, qaacidadeeda `L` iyo natiijadeeda hoosteeda.
3. Ku qor `Studs 16 in o.c.` {{ui:Name}} gudahana `EA` {{ui:Unit}}.
4. {{ui:Quantity formula}} ku qor `ceil(L * 12 / 16) + N`.
   Natiijadu way cusboonaanaysaa markaad qorto: "= 94 EA". Taasi waa hal dhagax kasta 16 inch oo ku socda 120 feet (90), oo lagu daray mid kale si loo xidho 4 socodsiin kasta.
5. Mar kale dooro {{ui:Add component}} saxanada: magaca `Plates, top and bottom`, unugga `LF`, qaacidada `L * 2`. Natiijo: 240 LF.
6. Ku dar loox: magaca `Gypsum board 4x8, both sides`, unugga `sheets`, qaacidada `ceil(A * 2 / 32)`. Natiijo: 68 xaashi (2,160 SF loox ÷ 32 SF xaashi kasta = 67.5, oo la soo wareejiyay).
7. Buuxi {{ui:Waste %}}, {{ui:Material $}} iyo {{ui:Labor $}} qayb kasta.
   Qayb kasta waxay leedahay safkeeda u gaar ah hoosta walxa ee {{ui:Quantities}}, waana lagu qiimeeyaa sida walxa, {{ui:Job total}} waxay ku jirtaa.

Haddii kharashka darbiga oo dhan ku jiro qaybaha, ka dhig heerarka agabka iyo shaqada ee walxa 0, si aan wax mar labo ah loo tirin.

:::tip
Qashinka waxaa lagu dabaqaa qaacidada ka dib, mana wareegna: 68 xaashi oo leh 10% qashin waa 74.8 xaashi. Si aad u dalbato xaashiyo oo dhan, geli qashinka gudaha qaacidada, sida `ceil(A * 2 / 32 * 1.1)`, oo qashinka qaybta ka dhig 0.
:::

## Qaacido kale

| Waxa | Walxa | Qaacido |
|---|---|---|
| Dhagaxyo 24 in dhexdhexaad | Khadka | `ceil(L / 2) + N` |
| Dahaadhka dhareeraha, SF | Khadka leh joog | `A` |
| Rang, labada dhinac, galoon 350 SF | Khadka leh joog | `ceil(A * 2 / 350)` |
| Katoonada tiilasha 15 SF, 10% dheeraad | Bedka | `ceil(A * 1.1 / 15)` |
| Saldhig ama xadka, LF | Bedka | `P` |
| Kontaree, yard kuwaad | Bedka leh qoto | `A * H / 27` |
| Kontaree lagu wareejiyay rubuc yard | Bedka leh qoto | `ceil(A * H / 27 * 4) / 4` |
| Dhegaha, saddex albaab kasta | Tiro | `N * 3` |
| Ugu yaraan hal kartoon, mid kasta 12 | Tiro | `max(1, ceil(N / 12))` |

## Marka qaacidadu khaldan tahay

Khadka hoosta qaacidada wuxuu noqdaa fariin khalad, tusaale `"X" is not a measured value here. Use L, H, A, N.` ama `A ")" is missing.` Qaybtaas ma leh tirooyin, safkeeda ee {{ui:Quantities}} wuxuu muujinayaa "Khalad qaacido: …", headerka wuxuuna leeyahay "Dhammaystirna la'aan: 1 khalad qaacido (lama soo koobin wadarta)". Qaacidada saxda ka dib, wadarta way cusboonaanaysaa.

Qaacido u qaybisa eber sidoo kale waa khalad ("The formula divides by zero."), tusaale `A / H` walxa aan qoto lahayn.

## Xaddidaadaha

- Qaacidooyinku waxay ku shaqeeyaan **wadarta** walxa, ma aha socodsiin socodsiin. `ceil(L * 12 / 16) + N` wuxuu ku daraa hal dhagax socodsiin kasta; weli ma jiro wareejin socodsiin kasta.
- Qaacidu waxay isticmaali kartaa doorsoomayaasha walxa u gaar ah oo keliya, ma aha kuwa walxa kale.
- Ilaa 50 qayb walxa kasta, iyo 500 xaraf qaacido kasta.

## Ka saar qaybta

Dooro {{ui:Remove component}} hoosteeda. Waxaad ku noqon kartaa {{key:Mod+Z}}.
