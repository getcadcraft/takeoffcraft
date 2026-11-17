---
title: Hajmlarni hisoblashni 3D da tekshirish
summary: Ochiq varaqning devorlari, plitalari va sanashlarini chizma ustida koʻrib chiqing, ularni aylantiring va bittasini bosib, uning belgisini tanlang.
keywords: png, rasm, tasvir, skrinshot, qavatlar, sathlar, qavatlarga joylash, fasad, glb, gltf, 3D eksporti, devor qalinligi, asos balandligi, teshik, eshik tepasi, 3d, uch oʻlchamli, tekshirish, koʻrinish, devorlar, devor balandligi, plita, chuqurlik, hajm, aylantirish, model, tanlash, izometrik, perspektiva
from: fb16b4f7
---

3D koʻrinish bu ikkinchi chizma emas, tekshiruvdir: u varaqning hajmlarini oʻsha varaqning oʻzida ekranda tik turgʻizadi, shunda yoʻq devor, ikki marta chizilgan plita yoki adashgan sanash bir qarashda koʻrinadi.

Boshlashdan oldin: varaqda masshtab boʻlishi kerak ([Masshtabni belgilash](topic:set-the-scale)). Balandlik va chuqurlik haqiqiy futlarda kerak, shuning uchun masshtabi boʻlmagan varaqda {{ui:3D}} buni aytadi va tekis varaqda qoladi.

## 3D koʻrinishni ochish

1. Tekshirmoqchi boʻlgan varaqni koʻrsating.
2. Varaq nomi va masshtabini koʻrsatadigan panelda {{ui:3D}} ni tanlang yoki {{key:3}} tugmasini bosing.
   Birinchi marta 3D koʻrinish yuklanishi uchun bir lahza kerak boʻladi. Varaq yer ustida chiziladi va hajmlarni hisoblash unda har bir elementning rangida turadi.
3. Qaytish uchun yana {{ui:3D}}, {{ui:Varaqqa qaytish}} ni tanlang yoki {{key:3}} tugmasini bosing. Chizish asbobini (Chiziqli, Maydon, Sanash va hokazo) tanlash ham qaytaradi, chunki belgilar tekis varaqda chiziladi.

U ekranda varaqni koʻrsatadi; varaqlar roʻyxatida yoki {{key:PageDown}} va {{key:PageUp}} bilan varaqlarni almashtiring, 3D koʻrinish ularga ergashadi. Bir vaqtda bir necha qavatni koʻrish uchun ularni qavatlarga joylang (quyida).

## Nimani koʻrasiz

| Belgi | 3D da |
|---|---|
| Chiziqli chiziq, balandligi bor element | Chiziq boʻylab shu balandlikdagi devor. Egri chiziqlar egri boʻylab boradi. |
| Chiziqli chiziq, balandligi yoʻq element | Varaqdagi chiziq. Uni tik turgʻizish uchun **Element** ostida elementga balandlik bering. |
| Maydon, chuqurligi bor element | Shu chuqurlikdagi plita, kesmalari ochiq holda. |
| Maydon, chuqurligi yoʻq element | Yupqa 2" plastina, shunda u baribir koʻrinadi. |
| Sanash | Har bir sanalgan nuqtada kichik ustun. |

Balandlik chiziqli elementning {{ui:Balandlik}} maydoni, chuqurlik esa maydonli elementning {{ui:Chuqurlik}} maydoni boʻlib, **Element** ostida ([Hajm elementlarini yaratish](topic:create-items) ga qarang). Uni oʻzgartiring, 3D koʻrinish darhol yangilanadi. Varaq nomi ostidagi izohda varaqda nima borligi aytiladi, masalan "3D dagi bu varaq: 2 ta devor, 1 ta plita, 3 ta sanash", hamda balandligi yoki chuqurligi boʻlmagan nechta chiziq yoki maydon borligi. Bosishlar uning orqali koʻrinishga oʻtadi.

3D da raqamlar oʻzgarmaydi: devorning maydoni uning aniq uzunligi koʻpaytirilgan balandligi, plitaning hajmi esa uning sof maydoni (kontur minus kesmalar, egri chiziqlar aniq) koʻpaytirilgan chuqurligi. Egri chiziqlar faqat ekranda qisqa toʻgʻri boʻlaklar bilan chiziladi.

## Atrofga qarash

| Harakat | Nima qiladi |
|---|---|
| Sudrash yoki oʻrta tugma bilan sudrash | Hajmlarni hisoblash atrofida aylanish. |
| {{key:Shift}} + sudrash yoki oʻng tugma bilan sudrash | Surish. |
| Sichqoncha gʻildiragi | Kursor turgan joyda kattalashtirish va kichraytirish. |
| Sensorli panelda ikki barmoq bilan surish | Aylanish ({{key:Shift}} suradi). Chimdish kattalashtiradi. |
| {{ui:Iso}}, {{ui:Yuqori}}, {{ui:Old}}, {{ui:Orqa}}, {{ui:Chap}}, {{ui:Oʻng}}, {{ui:Pastki}} | Standart koʻrinishlar, hajmlarni hisoblash boʻyicha kadrlangan. 3D koʻrinish {{ui:Iso}} da ochiladi. |
| {{ui:Perspektiva}} | Perspektiva yoqilgan yoki oʻchirilgan (oʻchirilganda parallel). |
| {{ui:Hammasini kattalashtirish}} yoki {{key:F}} | Butun varaq. |
| {{ui:Varaq}} | Yerdagi chizmani koʻrsatish yoki yashirish. |
| Koʻrinish kubi, yuqori oʻngda | Undan qarash uchun yuzi, qirrasi yoki burchagini bosing; aylantirish uchun uni sudrang; burish uchun kompas halqasini sudrang; uy tugmasi {{ui:Iso}} ga qaytaradi. |

Burchakda koʻrinish kubi, kichik X, Y, Z oʻqlari belgisi yoki hech narsa koʻrinadi: buni {{ui:Sozlamalar}} da, TakeoffCraft yorligʻida, **Burchak koʻrsatkichi** ostida tanlang ([TakeoffCraft sozlamalari](topic:settings)). Tekis varaqda burchak koʻrsatkichi yoʻq.

:::touch
Bir barmoq aylantiradi; ikki barmoq chimdib kattalashtiradi va surish uchun siljiydi. Bir marta bosish tanlaydi.
:::

## Qalinligi, asosi va teshiklari bor devorlar

Balandligi bor chiziqli element yupqa lenta sifatida turadi. Uni haqiqiy devor sifatida koʻrish uchun elementga sozlamalarida **3D da** ostida shakl bering:

- **Devor qalinligi** (8", 0.2 m): devor chizgan chiziqingiz markazida joylashgan qattiq jismga aylanadi, burchaklari qiyshiq kesilgan holda.
- **Asos balandligi**: devor poldan shuncha yuqoridan boshlanadi (soffit, yuqori shkaf qatori). Maydon elementlarida ham bor: 9'-0" balandlikdagi plafon.
- **Teshik tepasi**: ayirilgan kesma (eshik, [Chiziq qismini ayirish](topic:measure-linear#deduct-a-part-of-a-run)) devorni shu balandlikdan yuqorida saqlaydi, shunda eshik eshik sifatida koʻrinadi. Uning yoʻqligida ayirilgan kesma tepagacha boʻshliq qoldiradi.

Bular faqat 3D koʻrinishni shakllantiradi: miqdorlar (uzunlik, devor maydoni, xarajatlar) oʻzgarishsiz qoladi.

## Qavatlarni joylash

1. Har bir qavatning PDF fayllarini oching.
2. 3D koʻrinishda {{ui:Darajalar…}} ni tanlang va har bir qavatning balandligini kiriting, masalan `0` birinchi qavat uchun va keyingisi uchun `12'`. Boʻsh qoldirilsa, varaq chiqarib tashlanadi.
3. {{ui:Qavatlarga joylash}} ni tanlang. Darajasi bor har bir varaq oʻz hajmlarini oʻz balandligida koʻrsatadi; ekrandagi varaq oʻz qavati ostida yotadi, boshqalari konturlar bilan koʻrsatiladi. Izohda nechta qavat joylanganligi aytiladi.

Varaqlar sahifadagi oʻrni boʻyicha tekislanadi, shuning uchun bu bir xil chizilgan qavat rejalari uchun ishlaydi (bir xil varaq oʻlchami va joylashuvi). Darajasi bor, lekin masshtabi yoʻq varaq chiqarib tashlanadi va izohda shunday deyiladi. Bir vaqtda bitta varaq uchun yana {{ui:Qavatlarga joylash}} ni tanlang. Darajalar hajmlarni hisoblash bilan birga saqlanadi.

## 3D koʻrinishni rasm sifatida saqlash

3D panelida {{ui:PNG}} ni tanlang — ekrandagi koʻrinishning rasmi (`… 3D.png`); {{key:Shift}} + {{ui:PNG}} bosilsa, u ikki barobar katta boʻladi (`… 3D@2x.png`), chop etish uchun.

## 3D koʻrinishni model sifatida saqlash

3D panelida {{ui:GLB}} ni tanlang. Koʻrinish koʻrsatgan narsaning — ekrandagi qavat yoki barcha joylangan qavatlarning — `.glb` faylini (glTF, ikkilik) olasiz, uni boshqa 3D dasturlar ochadi: har bir belgi uchun bitta obyekt, elementi nomi bilan, elementning rangida, metrda, Y yuqoriga qaragan holda. Varaqning oʻzi va konturlar unda yoʻq.

## 3D dan belgini tanlash

Devor, plita, plastina yoki ustunni bosing. Uning belgisi tanlangan belgiga aylanadi, xuddi uni varaqda bosgandek: u **Tanlangan belgi** ostida koʻrinadi, uning elementi joriy boʻladi va holat satrida uning uzunligi va balandligi, yoki maydoni, chuqurligi va kub yardlari beriladi. {{key:Shift}} + bosish belgilarni tanlovga qoʻshadi yoki undan chiqaradi. {{key:Delete}} tanlangan belgilarni oʻchiradi, {{key:Mod+Z}} ularni qaytaradi; {{key:Esc}} hech narsani tanlamaydi. Varaqqa qaytganda, xuddi shu belgilar tanlangan holda qoladi.

:::tip
Chizma mavzuga ergashadi: Model da yerdagi varaq tekis koʻrinish kabi qorongʻi boʻladi.
:::
