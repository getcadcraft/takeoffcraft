---
title: Tender bölmələri
summary: Qeydləri bina, mərtəbə və ya mərhələ üzrə etiketləyin, işi bir vaxtda bir bölməyə hesablayın və hər bölmə üçün miqdarları və xərcləri oxuyun.
keywords: əlavə alternativ, çıxılan alternativ, baza tender, alternativlər, tender bölməsi, bölmə, bina, mərtəbə, səviyyə, mərhələ, zona, alternativ, bölgü, bölünmə, tipik mərtəbə, aralıq cəm, bölməyə görə
from: 64f3d41c
---

Tender bölməsi işin ayrıca qiymətləndirdiyiniz hissəsidir: bina, mərtəbə, mərhələ, qanad. Hər işarə yalnız bir tender bölməsində ola bilər. Miqdarlar və smeta hər bölmə üçün oxuna bilər, hər birinin aralıq cəmi ilə, layihənin cəmi isə hamısının cəmi olaraq qalır.

## Tender bölməsi yaradın

1. {{ui:Elementlər}} panelinin yuxarısında {{ui:Tender bölməsi}} siyahısını açın.
2. **Yeni tender bölməsi…** seçin, "Bina A" və ya "Səviyyə 2" kimi ad yazın və **Yarat** seçin.
   Yeni bölmə cari olur. Status paneli yazır: "Yeni işarələr (ad)-a düşür. Digər tender bölmələrindəki işarələr solğun göstərilir."

## Bölməyə hesablayın

Siyahıda tender bölməsi seçili olduqda, hər yeni işarə ora düşür: xətlər, sahələr, dairələr, saylar, {{ui:Avtomatik say}} əlavə etdikləri və yapışdırdığınız hər şey. Digər tender bölmələrindəki və heç birində olmayan işarələr vərəqdə solğun göstərilir ki, nəyin harada olduğunu görəsiniz.

Siyahıda **Tender bölməsi yoxdur** seçin ki, onsuz hesablayasınız; bu halda heç nə solğunlaşmır.

:::tip
Tipik mərtəbələr: Səviyyə 2-ni hesablayın, onun işarələrini seçin ({{key:Mod+A}} vərəqdə), kopyalayın, siyahıdan Səviyyə 3-ü seçin və yapışdırın. Kopyalar Səviyyə 3-ə düşür. Mərtəbələr eynidirsə və onları ayırmağa ehtiyac yoxdursa, [tipik qrup](topic:typical-groups) bir mərtəbəni bir neçə dəfə say edir.
:::

## İşarələri başqa bölməyə keçirin

Bir və ya bir neçə işarə seçin ({{key:Shift}} + klik və ya {{key:Mod+A}}). **Seçilmiş işarə** (və ya **Seçilmiş işarələr**) altında {{ui:Tender bölməsi}} sahəsində bölməni seçin. Status paneli yazır: "3 işarə Səviyyə 2-yə köçürüldü." Bu bir geri qaytarma addımıdır.

## Adını dəyişin, sırasını dəyişin və ya silin

Siyahıda **Tender bölmələrini idarə et…** seçin. Adı dəyişmək üçün üstündən yazın, sırasını dəyişmək üçün oxlardan istifadə edin (cədvəllər və iş kitabı ona uyğun gəlir) və ya zibil qutusu ilə birini silin. Tender bölməsini silmək onun işarələrini saxlayır: onlar artıq heç bir tender bölməsində olmur. Hər dəyişikliyi {{key:Mod+Z}} geri qaytarır.

## Miqdarları bölməyə görə oxuyun

{{ui:Miqdarlar}} cədvəlində {{ui:Bölməyə görə}} seçin (tender bölməsi olduqda görünür). Hər bölmədə onun ehtiva etdiyi elementlər miqdarı, vahidi və cəmi ilə, sonra aralıq cəm sətri göstərilir. Heç bir tender bölməsində olmayan işarələr sonda **Tender bölməsi yoxdur** kimi gəlir. Elementin sətrinə klikləyin ki, elementi vurğulayasınız və həmin bölməni cari edəsiniz.

Yığımlar hər bölmə üçün öz cəmlərindən hesablanır. `ceil(L / 4)` kimi yuvarlaqlaşdıran düstur, bölmələr birlikdə cəmi bütün iş üçün olduğundan bir az çox verə bilər; bu, tender bölmə-bölmə qiymətləndirildikdə də olacaq.

## Alternativlər: baza tender plus əlavələr və çıxılmalar

Tender bölməsi **alternativ** ola bilər: sahibinin tendere əlavə edə və ya ondan çıxara biləcəyi iş. **Tender bölmələrini idarə et…** bölməsində hər bölmənin adının yanında siyahı var:

| Seçim | Nə edir |
|---|---|
| {{ui:Baza tender}} | Tenderdə, adi kimi. |
| {{ui:Əlavə alternativ}} | Ayrıca qiymətləndirilir və **baza tenderdən kənarda qalır**: xalçanın yüksəldilməsi, əlavə örtük. |
| {{ui:Çıxılan alternativ}} | Baza tenderdədir və çıxılma kimi təklif olunur: "örtüyü sil". |

Alternativin işini adi bölmə kimi onun tender bölməsinə hesablayın. Alternativ olduqdan sonra:

- {{ui:Miqdarlar}} cədvəlinin başlığı {{ui:Layihənin cəmi}} əvəzinə **Baza tender** yazır: əlavə alternativlər olmadan bütün hesablama.
- {{ui:Bölməyə görə}} alternativlərin hər biri üçün bir sətrlə və baza tender ilə bitir: əlavə üçün **+$300.00**, çıxılma üçün **−$1,050.00**.
- Alternativ yalnız onda işarələri olan elementləri, onların yığımları ilə qiymətləndirir, buna görə başqa elementin yığım hissəsi içəri sızmır.

İxrac fayllarında CSV baza tender və alternativlərlə bitir, iş kitabında isə **Alternativlər** vərəqi olur: baza tender, hər alternativin elementləri və dəyişikliyi, və hər əlavə alternativ götürülmüş baza tender.

## İxracda

{{ui:XLSX}} **Tender bölməsinə görə** vərəqi əlavə edir: hər bölmənin elementləri və komponentləri miqdar, miqdar və itki ilə, material, işçilik və cəmi ilə, hər bölmə üçün aralıq cəm (`SUM` düsturu) və sonda **Bütün tender bölmələri**. **İşarələr** vərəqinə **Tender bölməsi** sütunu əlavə olunur. Tender bölmələri olmayan hesablama əvvəlki kimi ixrac olunur. Bax: [İxrac sütunları](topic:export-columns).

Tender bölmələri işarələrlə birlikdə layihə faylında saxlanılır.
