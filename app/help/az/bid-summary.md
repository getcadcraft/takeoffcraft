---
title: Tender xülasəsi və təklif
summary: Smetaya işçilik yükü, satış vergisi, ümumi xərclər, mənfəət və zəmanət əlavə edin, daxil olanları və daxil olmayanları yazın və göndərmək üçün təklif PDF-i yükləyin.
keywords: tender, işçilik yükü, yük, bordro, təklif, kotirovka, ümumi xərclər, mənfəət, qeyd, marja, satış vergisi, zəmanət, daxil olanlar, daxil olmayanlar, şərtlər, imza, müştəri, qiymət
from: 3208a561
---

Smeta ölçdüyünüzü qiymətləndirir. **Tender xülasəsi** onu qiymətə çevirir: satış vergisi, ümumi xərclər, mənfəət və zəmanət əlavə edir və daxil olanlar və daxil olmayanlarla **təklif PDF-i** yaradır.

Bunu {{ui:İxrac}} › {{ui:Tender xülasəsi və təklif…}} seçimindən açın. Hər şey hesablama ilə saxlanılır və hər dəyişiklik geri qaytarıla bilər.

## Qeydlər

Beşdən istənilən birinə faiz yazın (qalanlarını 0-da saxlayın). Onlar bu ardıcıllıqla hesablanır, hər biri özündən yuxarıdakı üzərində:

| Sətir | Necə hesablanır |
|---|---|
| Material, İşçilik | Smetanın cəmləri (hesablamada [alternativlər](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts) olduqda baza tender). |
| İşçilik yükü | Yük % × işçilik: işçilərinizin əmək haqqından vergilər, sığorta və güzəştlər. |
| **Xərc** | Material + işçilik + işçilik yükü. |
| Materialdan satış vergisi | Vergi % × material. |
| Ümumi xərclər | Ümumi xərclər % × (xərc + vergi). |
| Mənfəət | Mənfəət % × (xərc + vergi + ümumi xərclər). |
| Zəmanət | Zəmanət % × yuxarıdakı hər şey. |
| **Tender** | Sətirlərin cəmi. |

Hər sətir qəpiyə yuvarlaqlaşdırılır. İş kitabı eyni sətirləri Smeta vərəqinin cəmi altında canlı düsturlarla göstərir. Xülasə siz yazdıqca yenilənir: faizi {{key:Enter}} ilə təsdiqləyirsiniz. Hər alternativ öz xərcində eyni qeydlərlə göstərilir, beləliklə sahib onu dəyişdirməyin real təsirini görür.

## Təklif

Təklifin nə deməli olduğunu doldurun:

- **Layihə** (boş olduqda hesablamanın adı), **Kimə** (müştəri) və **Kimdən** (sizin şirkətiniz).
- **Daxil olanlar** və **Daxil olmayanlar**: hər sətirdə bir; əvvəldə tire və ya bullet olması problem deyil.
- **Şərtlər**: sərbəst mətn, məsələn "30 gün üçün keçərlidir."
- **Elementləri və miqdarları siyahıla**: əhatə, element-element, miqdarlarla və qiymətsiz. Bağlanmış (lump-sum) təklif üçün işarəni silin.

{{ui:Təklif PDF-i}} seçin. PDF (`<takeoff> - proposal.pdf`) tarixi, hər qeyd və tenderi olan qiymət bloku, alternativləri, əhatəni, daxil olanları və daxil olmayanları, şərtləri və imzalayıb tarixləndirmək üçün xətləri ehtiva edir. Bəzi miqdarları ölçmək mümkün olmadıqda (miqyası olmayan vərəq), bu qiymətin altında deyilir.

## İxracda

Hesablamanın tender xülasəsi olduqda CSV onunla bitir və iş kitabı **Tender xülasəsi** vərəqi alır: hər sətir, onun faizi və məbləği ilə. Bax: [Smetanı ixrac edin](topic:export-estimate).
