---
title: Hajmlarni hisoblash elementlarini yaratish
summary: Chiziqli, maydon va sanash elementlarini yarating, ularning birligi, balandligi yoki chuqurligi, chiqindisi hamda material va mehnat stavkalarini belgilang.
keywords: brigada, ishlab chiqarish stavkasi, brigada tarkibi, ish haqi, soat, odam-soat, ishchi-soat, brigada-kun, mehnat soatlari, element, yangi element, sharoit, koʻp sharoitli, boshqa turdagi belgilar, xona, chiziqli, maydon, sanash, birlik, balandlik, chuqurlik, chiqindi, material, mehnat, stavka, rang, narx
from: 7fa5effc
---

**Element** — bu siz oʻlchaydigan va narxlaydigan bitta narsa: devor turi, pol pardozi, shift, eshik, yoritish moslamasi. Chizgan har bir belgi biror elementga tegishli. Boshqa dasturlar bularni sharoit deb atashadi.

Har bir elementning turi bor (va boshqa turdagi belgilarni ham qabul qilishi mumkin, qarang: [Bitta element, bir necha tur belgilar](topic:create-items#one-item-several-kinds-of-marks)):

| Kiritish | Chizish | Hisobot beradi | Birliklar |
|---|---|---|---|
| Chiziqli | Ulangan nuqtalar qatorlari | Uzunlik, qatorlar soni va balandlik bo'lsa devor maydoni | LF yoki m |
| Maydon | Kesimlari bor yopiq konturlar | Maydon, perimetr, maydonlar soni | SF, SY, SQ, ac, ha yoki m² |
| Sanash | Har bir narsaga bir bosish | Necha dona | EA |
| Kiritilgan miqdor | Hech narsa: miqdorni kiritasiz | Siz kiritgan son (yoki CivilCraft dasturidan olingan) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha yoki m² |

## Kiritilgan miqdor (chizmasiz)

Hisob-kitobdagi ba'zi narsalar hech qachon chizilmaydi: mobilizatsiya, ruxsatnomalar, zaxira, qatʼiy summali subpudrat shartnomasi, CivilCraft dasturi hisoblagan kesish va toʻldirish. Ularni **Kiritilgan miqdor (chizmasiz)** qiling:

1. {{ui:Yangi element}} ni tanlang, nom kiriting, {{ui:Kiritilgan miqdor (chizmasiz)}} ni tanlang va {{ui:Qoʻshish}} ni tanlang.
2. Element tahrirlovchisida {{ui:Birlik}} ni tanlang (qatʼiy summa uchun LS) va {{ui:Miqdor}} ni kiriting: `1`, `2.5` yoki `1,250`.
3. Chiqindi va stavkalarni boshqa elementlar kabi belgilang. Yigʻmaning formulalari `Q` harfidan foydalanadi — bu miqdor, masalan `ceil(Q / 12)` yuk mashinasi reysi.

Kiritilgan miqdor hech qanday belgi olmaydi va hisob-kitobni hech qachon toʻliq emas deb qilmaydi. Hajmlarni hisoblashda hisob maydonlari boʻlsa, tahrirlovchida {{ui:Hisob maydoni}} ham bor: miqdor oʻsha maydonda, uning muqobillarida va jamilarida xuddi shu joyda belgi sanalgandek hisobga olinadi. Boshqa ilovadan olingan miqdorlarda manbasi koʻrsatiladi, qarang: [Yer ishlari va nuqtaviy balandliklar](topic:earthwork#cut-and-fill-from-civilcraft).

## Element yaratish

1. Oʻng tomondagi {{ui:Elementlar}} panelida {{ui:Yangi element}} ni tanlang.
2. Nom kiriting, masalan `Ichki devor turi A` yoki `Gilam plitkasi`.
3. Turini tanlang: {{ui:Chiziqli (uzunlik)}}, {{ui:Maydon}} yoki {{ui:Sanash}}.
4. {{ui:Qoʻshish}} ni tanlang (yoki {{key:Enter}} ni bosing).
   Element roʻyxatda oʻz rangi bilan paydo boʻladi, u chizish uchun element boʻladi va uning tahrirlovchisi roʻyxat ostida ochiladi. Holat satri keyingi tanlanadigan asbobni koʻrsatadi.

Shaklni elementsiz qoʻshmasdan yopish uchun shakl ichida {{key:Esc}} ni bosing.

:::tip
Avval oʻlchash asbobini tanlasangiz, TakeoffCraft shu turdagi oxirgi elementdan foydalanadi yoki shu tur tanlangan holda {{ui:Yangi element}} shaklini ochadi.
:::

## Chizish uchun elementni tanlang

Roʻyxatdagi elementni bosing. U yangi belgilar tushadigan element boʻladi, uning belgilari har bir varaqda ajratib koʻrsatiladi, boshqalari xiralashadi. Ochiq varaqda uning belgilari boʻlmasa, TakeoffCraft belgilari bor varaqqa oʻtadi. Ajratib koʻrsatishni toʻxtatish uchun elementni yana bosing; u baribir chizish uchun element boʻlib qoladi.

{{ui:Tanlash}} asbobi bilan belgini bosish ham uning elementini joriy qiladi.

## Elementni sozlash

Element tahrirlovchisida (**Element: (nom)**) quyidagi maydonlar bor. Har biri maydondan chiqqanda yoki {{key:Enter}} bosilganda saqlanadi va har bir oʻzgarishni bekor qilish mumkin.

| Maydon | Vazifasi |
|---|---|
| {{ui:Nom}} | Roʻyxatda, jadvallarda va eksportda koʻrsatiladi. |
| {{ui:Kiritish}} | Chiziqli, Maydon yoki Sanash. Elementda belgilar boʻlsa, qulflanadi ("Belgilari bor element oʻz turini saqlaydi"). |
| {{ui:Rang}} | Belgilarining rangi ekranda va belgilangan PDF da. |
| {{ui:Birlik}} | Miqdor qaysi birlikda hisobot qilinishi: chiziqli uchun LF yoki m; maydon uchun SF, SY, SQ, ac, ha yoki m²; sanash uchun EA. |
| {{ui:Yana oʻlchash}} | Element qabul qiladigan boshqa tur belgilar, har biri oʻz birligi bilan. Pastga qarang. |
| {{ui:Balandlik}} (chiziqli) | Devor balandligi. Shunda element devor maydonini ham hisobot qiladi (uzunlik × balandlik). BimCraft modelidan olingan qatorlar oʻz eshik va derazalarini olib keladi: ular bir marta chiqariladi va element umumiy maydonni, teshiklarni hamda sof maydonni koʻrsatadi. BimCraft loyihasidan oʻlchash usuli tanlangan hisob-kitob shu yerda ham oʻsha usul bilan oʻlchanadi (izohda usul va manbasi koʻrsatiladi hamda miqdor muhandisi tomonidan tekshirilmagani aytiladi); usulni TakeoffCraft ichida oʻzgartirib boʻlmaydi. Devor turidan olingan gʻisht yoki blok va qorishma ikki komponent boʻlib keladi: buyurtma qilinadigan birliklar va qorishma hajmi. |
| {{ui:Chuqurlik}} (maydon) | Qalinlik yoki chuqurlik, yigʻma formulalarida ishlatiladi (masalan, beton hajmi). |
| {{ui:Chiqindi %}} | Narxlashdan oldin miqdorga qoʻshiladi: 10 degani miqdor × 1.10. |
| {{ui:Material $/LF}} | Birlik boshiga material narxi. Yorliq birlikka amal qiladi: $/SF, $/EA va hokazo. |
| Mehnat $/LF | Birlik boshiga mehnat narxi. |
| {{ui:CSI raqami}} | CSI MasterFormat raqami, masalan `09 21 16` (yoki faqat boʻlim, `09`). Ishchi kitobdagi "By division" varagi xarajatlarni shu boʻyicha guruhlaydi. [Savdo toʻplamlari](topic:trade-packs) elementlarida uning raqami allaqachon bor. |

Balandlik va chuqurlik imperial birliklar uchun futlar va dyuymlarda (`9'-0"`, `8' 6"`) yoki oʻnli futlarda (`9`), metrik birliklar uchun esa metrda (`2.7`, `2700 mm`) kiritiladi. Stavkalar `12.50` yoki `$1,250` kabi, toʻrt kasr xonagacha kiritiladi. Qarang: [Uzunlik, stavka va foiz kiritish](topic:entry-formats).

Maydonlar pastida **Oʻlchangan** boʻlimi elementning formulalari ishlata oladigan jamilarni harflari bilan koʻrsatadi: chiziqli uchun Uzunlik (L), Qatorlar (N), Devor maydoni (A); maydon uchun Maydon (A), Perimetr (P), Maydonlar (N); sanash uchun Soni (N).

## Bitta element, bir necha tur belgilar

Ba'zi narsalar bir necha usulda oʻlchanadi: xonada pol (maydon), devor boʻylab plintus (uzunlik) va eshiklar (sanash) bor. Uchta element oʻrniga bitta yarating:

1. Elementni asosiy turi bilan yarating, masalan maydon elementi `Xona 101`.
2. Uning tahrirlovchisida {{ui:Yana oʻlchash}} ostida {{ui:Chiziqli}}, {{ui:Sanash}} yoki ikkalasini belgilang. Har biri yonida oʻz birligi chiqadi.
3. Element qabul qiladigan turdagi istalgan asbob bilan chizing: `Xona 101` joriy boʻlganda {{ui:Maydon}} uning polini, {{ui:Chiziqli}} plintusini, {{ui:Sanash}} esa eshiklarini chizadi. TakeoffCraft boshqa element soʻramaydi.

Elementlar roʻyxatida har bir miqdor koʻrsatiladi (`50.00 SF + 2 EA`). Miqdorlar jadvalida elementning qatorida asosiy miqdor boʻladi, har bir boshqa tur esa pastida alohida qator oladi, masalan **Xona 101 (sanash)**, oʻz chiqindi, material va mehnat stavkalari bilan. Eksportlar, har varaq jadvali va belgilangan PDF ning legendasi ularni xuddi shunday sanab beradi.

Asosiy turning maydonlari oʻzida qoladi: balandlik yoki chuqurlik, qiyalik, orqaga chiqarish va 3D shakli faqat uning belgilariga tegishli. Maydon elementi uchun chizilgan plintus chizigʻi plan boʻylab oddiy oʻlchanadi va 3D da tekis koʻrinadi. Yigʻma formulalari asosiy turning jamilaridan foydalanadi.

Turni faqat unda shu tur belgilari boʻlmaganda olib tashlash mumkin; avval ularni oʻchiring yoki **Tanlangan belgi** boʻlimida boshqa elementga koʻchiring. Belgilar oʻz turini qabul qiladigan istalgan elementga koʻchirilishi mumkin.

Pastda {{ui:Yigʻma}} joylashgan: shpilka yoki taxta kabi komponentlar, har birining oʻz formulasi va stavkalari bilan. Qarang: [Yigʻmalar va formulalar](topic:assemblies).

Eng pastda: {{ui:Yuqoriga}} va {{ui:Pastga}} elementning roʻyxat va eksportdagi oʻrnini oʻzgartiradi, {{ui:Elementni oʻchirish}} esa uni barcha belgilari bilan birga oʻchiradi (avval soraydi; uni bekor qilish mumkin).

Maydon elementlarida **Qiyalik** (tomlar tekisliklari qiyalikda oʻlchanadi: [Tomlar va qiyaliklar](topic:roofs-and-slopes)) va **Orqaga chiqarish** (ularning belgilari boshqa elementlar maydonidan chiqariladi: [Maydonlarni oʻlchash](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)) ham bor. Chiziqli elementlarda **Nishablik** (Tekis, Yonbosh, Tizma yoki vodiy) bor va yonbosh hamda tizmalar uchun **Qiyalik**.

## Jadvaldagi stavkalar

Siz {{ui:Chiqindi %}}, material va mehnat stavkalarini toʻgʻridan-toʻgʻri pastdagi {{ui:Miqdorlar}} jadvaliga kiritishingiz mumkin ({{ui:Element boʻyicha}}). Bu tahrirlovchidagi bilan bir xil sozlama.

## Narxlash qanday ishlaydi

Har bir element va har bir yigʻma komponenti uchun:

1. **Chiqindi bilan** = miqdor × (1 + chiqindi %).
2. **Material** = chiqindi bilan × birlik boshiga material, tiyingacha yaxlitlanadi.
3. **Mehnat** = chiqindi bilan × birlik boshiga mehnat, tiyingacha yaxlitlanadi.
4. **Jami** = material + mehnat.

{{ui:Umumiy jami}} har bir element va har bir komponentni qoʻshadi. Element oʻz stavkalariga va yigʻmaga bir vaqtda ega boʻlishi mumkin; ikkalasi ham hisobga olinadi, shuning uchun komponentlari narxni olib yursa, elementning stavkalarini 0 da qoldiring.

## Brigada boʻyicha mehnat

Birlik boshiga mehnat stavkasi oʻrniga elementning mehnati brigadadan olinishi mumkin: brigada soatiga qancha ishlaydi, necha kishi va har biri qancha topadi. Element tahrirlovchisida {{ui:Brigada boʻyicha mehnat}} ostida {{ui:Mehnatni brigada boʻyicha narxlash}} katakchasini belgilang va toʻldiring:

| Maydon | Misol |
|---|---|
| {{ui:Ishlab chiqarish}} | `20` LF soatiga (elementning birligida) butun brigada uchun |
| {{ui:Brigada tarkibi}} | `2` kishi |
| {{ui:Ish haqi $/soat har biriga}} | `45` |

TakeoffCraft chiqindi bilan miqdordan quyidagilarni hisoblaydi:

- **brigada-soatlar** = miqdor ÷ ishlab chiqarish (110 LF ÷ 20 = 5.5),
- **ishchi-soatlar** = brigada-soatlar × brigada tarkibi (11),
- **brigada-kunlar** = brigada-soatlar ÷ 8 (0.69),
- **mehnat** = ishchi-soatlar × ish haqi ($495.00).

Tahrirlovchi natijani va u chiqadigan stavkani koʻrsatadi ($4.50/LF). Elementning oʻz mehnat stavkasi keyin faqat oʻqish uchun boʻladi, tahrirlovchida ham, jadvalda ham. {{ui:Miqdorlar}} jadvali sarlavhasi ishning ishchi-soatlari va brigada-kunlarini qoʻshadi. Eksportlar har bir brigadaning soatlarini izohlaydi, ishchi kitobda esa mehnat katakchasi brigadaga bogʻliq formula boʻladi (`ROUND(F2/20*2*45,2)`). Birlik boshiga stavkaga qaytish uchun katakchani olib tashlang.

## Metrik elementlar

Birlik sifatida m (chiziqli) yoki m² (maydon) tanlang. Miqdorlar, balandliklar va formula qiymatlari shunda metrda boʻladi. Varaq masshtabi istalgan oldindan oʻrnatilgan yoki kalibrlangan boʻlishi mumkin; birliklar va masshtablar bir-biridan mustaqil.

## Keyingi

- [Chiziqli uzunliklarni oʻlchash](topic:measure-linear)
- [Kesimlari bor maydonlarni oʻlchash](topic:measure-areas)
- [Qoʻlda sanash](topic:count-by-hand)
