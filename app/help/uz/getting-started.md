---
title: TakeoffCraft bilan boshlash
summary: TakeoffCraft nima qilishi, qayerda ishlashi va PDF rejalar toʻplamidan birinchi oʻlchangan hamda narxlangan elementingiz.
keywords: boshlash, birinchi hajm, tez boshlash, kirish, smeta, miqdor hajmi, rejalar toʻplami, pdf
from: 3b9da1fb
---

TakeoffCraft rejalar toʻplamlarini, PDF fayllarni va DWG yoki DXF chizmalarini oʻlchaydi hamda oʻlchovlarni narxlangan smetaga aylantiradi. Siz fayllarni ochasiz (chizma bloklaridan toʻgʻridan-toʻgʻri sanaladi, qarang: [DWG yoki DXF chizmani ochish](topic:open-a-drawing)), har bir varaqqa masshtab berasiz (chizma oʻzinikini olib keladi), **elementlar** yaratasiz (devor turi, pol pardozi, jihoz) va varaqlarda bosib, ularning hajmini olasiz. Miqdorlar, xarajatlar va umumiy jami siz ishlagan sari yangilanadi. Smetani elektron jadval sifatida va hajmingiz chizilgan PDF nusxasi sifatida eksport qilishingiz mumkin.

Agar boshqa dasturlarda hajm hisoblagan boʻlsangiz, keyin [Boshqa hajm dasturlaridan kelish](topic:coming-from) ni oʻqing. Bu yerda baʼzi narsalar boshqacha ishlaydi.

## Qayerda ishlaydi

TakeoffCraft veb brauzeringizda ishlaydi. TakeoffCraft ni oching va ekran darhol tayyor boʻladi; oʻrnatish kerak emas.

- **PDF fayllaringiz kompyuteringizda qoladi.** Ularni brauzer ochadi va hech qachon yuklanmaydi. Saqlash bu yuklab olish.
- Joriy Chrome, Edge, Firefox va Safari da ishlaydi. Qarang: [Brauzerlar va kompyuterlar](common:browsers).
- Ilova panelida {{ui:Oflayn uchun saqlash}} ni tanlab, {{ui:Oflayn tayyor}} yozuvi chiqqach, internet aloqasisiz ham ishlaydi. Qarang: [Oflayn ishlash](common:offline).
- Bulutga saqlash hali mavjud emas. Ish stoli ilovasi uchun TakeoffCraft boshqa yetti ilova bilan CadCraft Studio ichida keladi.

## Oʻn qadamda birinchi hajmingiz

Bu qoʻllanma bitta devor turini oʻlchaydi va narxlaydi. Ixtiyoriy rejada bir necha daqiqa oladi.

1. Asboblar panelining {{ui:Fayl}} guruhida {{ui:Rejalarni ochish}} ni tanlang (yoki {{key:Mod+O}} ni bosing), bir yoki bir nechta PDF tanlang va Ochish ni tanlang. PDF larni sahifaning istalgan joyiga ham tashlashingiz mumkin.
   Varaqlar chapda paydo boʻladi, birinchi varaq oʻrtada ochiladi.
2. Varaqning chop etilgan masshtabini uning sarlavha blokida yoki chizma nomi ostidan toping.
3. {{ui:Masshtab}} guruhidagi {{ui:Oldindan oʻrnatilgan}} roʻyxatini oching va shu masshtabni tanlang, masalan `1/4" = 1'-0"`.
   Varaq pastidagi panel endi "Masshtab 1/4" = 1'-0"" deydi.
4. {{ui:Tekshirish}} ni ({{key:D}}) tanlang va chizmada bosilgan oʻlchamning ikki uchini bosing.
   Chap pastdagi holat panelidagi koʻrsatkich chizmada chop etilgan oʻlchamga mos kelishi kerak. Agar mos kelmasa, qarang: [Masshtabni oʻrnatish](topic:set-the-scale).
5. Oʻng tomondagi {{ui:Elementlar}} panelida {{ui:Yangi element}} ni tanlang, `Ichki devor turi A` kabi nom kiriting, turni {{ui:Chiziqli (uzunlik)}} da qoldiring va {{ui:Qoʻshish}} ni tanlang.
6. Asboblar panelida {{ui:Chiziqli}} ni tanlang (yoki {{key:L}} ni bosing).
7. Devorning boshini, keyin uning har bir burchagini bosing. Ikki marta bosing, {{key:Enter}} ni bosing yoki oʻng tugmani bosib yoʻlni tugating.
   Yoʻl elementning rangida chiziladi va uning uzunligi element yonida koʻrinadi.
8. {{ui:Elementlar}} ostidagi element tahrirlagichida {{ui:Balandlik}} maydoniga `9'-0"`, {{ui:Material $/LF}} ga `0.85` va {{ui:Ish haqi $/LF}} ga `1.20` kiriting.
   Pastdagi {{ui:Miqdorlar}} jadvalida uzunlik, hisoblangan material va ish haqi hamda {{ui:Umumiy jami}} koʻrsatiladi.
9. {{ui:Hajmlarni saqlash}} ni tanlang ({{key:Mod+S}}).
   Brauzeringiz `.takeoff.json` faylini yuklab oladi. Unda elementlaringiz, masshtablaringiz va belgilaringiz boʻladi va xuddi shu PDF lar ustida qayta ochiladi.
10. Asboblar panelidagi {{ui:Eksport}} menyusini oching va smetani elektron jadval sifatida yuklab olish uchun {{ui:XLSX}} ni tanlang.

:::tip
Har qanday amalni toʻxtatib, {{ui:Tanlash}} asbobiga qaytish uchun {{key:Esc}} ni bosing. {{key:Mod+Z}} har qanday oʻzgarishni bekor qiladi.
:::

## Keyin nimani oʻqish

- [TakeoffCraft ekrani](topic:workspace) oynaning har bir qismini nomlaydi.
- [Hajm boshlash va rejalar toʻplamini ochish](topic:open-plan-set) bir nechta PDF va varaqlar roʻyxatini qamrab oladi.
- [Hajm elementlarini yaratish](topic:create-items) turlar, birliklar, chiqindi va stavkalarni tushuntiradi.
- [Yigʻmalar va formulalar](topic:assemblies) bitta oʻlchovni karkas ustunlari, taxta varaqlari va boshqalarga aylantiradi.
- [Klaviatura va sichqoncha](topic:keyboard) har bir tugmani sanaydi.
