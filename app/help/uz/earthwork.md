---
title: Yer ishlari va nuqtaviy balandliklar
summary: Sayt rejasida nuqtaviy balandliklarni belgilang, ularni sirt hamda kesish va toʻldirish uchun CivilCraft'ga uzating va bu yerda oddiy qazish miqdorlarini oling.
keywords: yer ishlari, qazish, kesish, toʻldirish, kesish va toʻldirish, vertikal rejalashtirish, nuqtaviy balandlik, balandliklar, topo, sirt, triangulyatsiya, civilcraft, nuqtalar, pnezd, xandaq
from: a898e508
---

TakeoffCraft varaqda chizilgan narsalarni oʻlchaydi. Yer ishlari yer sirtini talab qiladi, shuning uchun u CivilCraft bilan birgalikda ishlatiladi: CivilCraft nuqtalardan sirtlar quradi, ularni vertikal rejalashtiradi va kesish, toʻldirish hamda tashishni hisoblaydi.

## Bu yerda oddiy qazish

Bir chuqurlikka qazilgan poydevor uchun **chuqurlik** koʻrsatilgan maydon elementi yetarli: hajm = maydon × chuqurlik. Umumiy pudratchining [ixtisoslashgan toʻplami](topic:trade-packs) ommaviy qazish elementiga ega (tabiiy hajm, boʻshashgan hajm va yuk mashinalari) hamda kommunal xandaq elementiga ega (uzunlik va chuqurlik boʻyicha qazish, tagʻ qatlami va koʻmish).

## Nuqtaviy balandliklar CivilCraft uchun

1. Sayt varagʻining masshtabini belgilang.
2. **Sanash** turidagi element yarating, masalan "Mavjud relyef", va varaqdagi har bir nuqtaviy balandlikni bosing.
3. Belgini tanlang va Tanlangan belgi panelida uning {{ui:Elevation}} qiymatini kiriting: `102.5`, `102'-6"` yoki `31.24 m`. Manfiy va nol balandliklar ham mumkin.
4. {{ui:Export}} menyusini oching va {{ui:Spot elevations}} ni tanlang. Siz nuqtalar faylini (`.csv`) olasiz: Point, Northing, Easting, Elevation va Description ustunlari bilan, ochiq varaqning belgilangan nuqtalari uchun har bir nuqtaga bitta qator.
5. Faylni CivilCraft'da oching (qarang: [Nuqtalarni import qilish](app:civilcraft/import-points)). U nuqtalardan sirtni quradi ([Sirt qurish](app:civilcraft/build-surface)); undan keyin sirtlarni solishtiradi va kesish hamda toʻldirishni beradi ([Hajmlar](app:civilcraft/volumes)).

Northing va Easting bu varaqning oʻz koordinatalari boʻlib, futlarda, sahifa burchagidan uning masshtabida oʻlchanadi: nuqtalar orasidagi masofalar va hajmlar toʻgʻri, lekin ular saytning geodezik koordinatalari emas. Kerak boʻlganda ularni CivilCraft'da saytning koordinatalariga koʻchiring.

:::note
Turli varaqlardagi nuqtalar koordinatalarni bogʻlamaydi, shuning uchun eksport faqat ochiq varaqni oladi. Balandliklar hajmlarni hisoblash bilan birga saqlanadi va nusxalash hamda qoʻyish orqali uzatiladi.
:::

## CivilCraft'dan kesish va toʻldirish

CivilCraft'ning yer ishlari ikkita sotiladigan element sifatida qaytadi:

1. CivilCraft'da maydonchalar va yoʻlaklarni vertikal rejalashtiring, soʻngra **Yer ishlari** ostida {{ui:Send to TakeoffCraft}} ni tanlang ([Yer ishlari hajmlari](app:civilcraft/volumes)). U miqdorlar faylini (`.quantities.json`) saqlaydi.
2. TakeoffCraft'da uni {{ui:Open takeoff}} bilan oching yoki ilovaga tashlang. Hajmlar hisobingiz ochiq qoladi: fayl **Earthwork: cut** va **Earthwork: fill** elementlarini [turdagi miqdorlar](topic:create-items#typed-quantities-no-drawing) sifatida qoʻshadi: fut loyiha uchun kub yard (CY), metr loyiha uchun kub metr (m³) hisobida. Bu bitta qadam: {{key:Mod+Z}} uni qaytaradi.
3. Ularni xohlaganingizcha qayta nomlang, chiqindi, stavkalar va yigʻmalarni sozlang.

Loyiha oʻzgarganda, CivilCraft'dan yana yuboring va yangi faylni oching: xuddi shu ikki element yangi miqdorlarni oladi. Ularning nomlari, stavkalari, chiqindisi va yigʻmalari siz belgilagandek qoladi. Agar loyihaning birligi oʻzgargan boʻlsa, holat satrida shu haqda aytiladi: stavkalarni tekshiring. Boshqa CivilCraft loyihasidan kelgan fayl oʻzining ikkita elementini qoʻshadi.

Miqdorlar CivilCraft tomonidan oʻlchanganidek tabiiy hajmlardir (toʻr usuli): qisqarish va koʻpayish yoʻq. Ularni chiqindi sifatida qoʻshing yoki boʻshashgan hajm uchun `Q * 1.25` kabi formula bilan. Element tahrirlagichi har birining qayerdan va qachon kelganini koʻrsatadi; smetaning izohlar ustuni ham buni aytadi.

:::note
Miqdorlar fayli oddiy JSON (`"format": "cadcraft-quantities"`) boʻlgani uchun uni skript yoki boshqa dastur ham yozishi mumkin: ilova nomi, loyiha, hamda kalit, nom, birlik va miqdorga ega elementlar.
:::
