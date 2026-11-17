---
title: Yenidən işlənmiş vərəqi müqayisə edin və hesablamanı köçürün
summary: Köhnə vərəqi revizyasının üstünə qoyun, düzləşdirin, nəyin dəyişdiyinə baxın və hesablamanı yeni vərəqə dəyişən nişanlar yoxlanılmaq üçün işarələnmiş halda köçürün.
keywords: revizya, yenidən işlənmiş, müqayisə, üst-üstə, köhnə, yeni, dəyişikliklər, əlavə sənəd, bülleten, yenidən buraxılış, hesablamanı köçür, köçürmə, daşımaq, düzləşdirmək, işarələnmiş, yoxla
from: 3a1d9fe0
---

Vərəq yenidən buraxılanda onu yenidən hesablamağa ehtiyac yoxdur. Köhnə və yeni PDF-ləri açın, iki vərəqi müqayisə edin və hesablamanı köçürün. TakeoffCraft çertyojun dəyişdiyi hər nişanı işarələyir, ona görə onları yoxlayır və qalanını saxlayırsınız.

## Müqayisə

1. Hər iki PDF-i açın: köhnə dəst və yenidən işlənmiş dəst ({{ui:Planları aç}}; onlar bir faylda və ya bir neçə faylda ola bilər).
2. **Yeni** vərəqi göstərin.
3. Çertyojun altında vərəq panelində {{ui:Müqayisə et}} seçin.
4. Siyahıdan köhnə vərəqi seçin. TakeoffCraft digər PDF-də eyni nömrəli vərəqi və ya eyni səhifəni təklif edir. **Müqayisə et** seçin.

Köhnə çertyoj indi yenisinin üstündə qırmızı rənglə yerləşir. Razılaşdıqları yerlərdə qırmızı xətlər qara xətlərin üstünə düşür; fərqli olduqları yerlərdə yalnız qırmızı xətlər görürsünüz (silinib) və yalnız qara xətlər (əlavə olunub). Vərəqin altındakı zolaqda aşağıdakı addımlar var; {{key:Esc}} və ya {{ui:Bağla}} müqayisəni bitirir.

## Düzləşdirin

Yenidən işlənmiş vərəqlər tez-tez bir az səhv çap olunur: səhifədə yerdəyişmə və ya bir az fərqli ölçü. Əgər qırmızı çertyoj qara üstünə düşmürsə, **İki nöqtə ilə düzləşdir** seçin və dörd dəfə klikləyin:

1. köhnə (qırmızı) çertyojda bir nöqtə, məsələn sütunun mərkəzi və ya binanın küncü,
2. yeni (qara) çertyojda eyni nöqtə,
3. qırmızı çertyojda ikinci nöqtə, birincidən uzaqda,
4. qara çertyojda eyni nöqtə.

Qırmızı çertyoj qara üzərinə hərəkət edir, fırlanır və miqyaslanır. Status zolağı yeni çertyojun nə qədər böyük olduğunu deyir ("ölçü × 1.000", eyni olduqda). Seçimlər üçün yaxınlaşdırın: nə qədər yaxın klikləsəniz, uyğunluq bir o qədər yaxşı olur.

## Dəyişiklikləri tapın

**Dəyişiklikləri tap** seçin. TakeoffCraft iki çertyojun mürəkkəbini müqayisə edir: yalnız köhnə vərəqdə olan mürəkkəb qırmızıya, yalnız yeni vərəqdə olan mürəkkəb maviyə çevrilir və status zolağı onları sayır. Bir tük qədər yerini dəyişmiş xətlər (yenidən çap) dəyişiklik kimi sayılmır.

Həmçinin köhnə vərəqdəki hər nişana baxır və dəyişikliyin olduğu yerdə olanları sayır:

- xətt və ya sahə, çertyoj onun uclarından və ya künclərindən birində, ya da uzunluğunun təxminən altıda bir hissəsi boyunca dəyişdikdə;
- say, yanında bir şey dəyişdikdə.

## Hesablamanı köçürün

**Hesablamanı burada köçür** seçin. Köhnə vərəqdəki hər nişan düzləşmə vasitəsilə yeni vərəqə bir geri qaytarma addımında köçürülür. Dəyişikliyin yanında olanlar işarələnir: narıncı halo ilə çəkilir və vərəq panelində "(n) yoxlanılsın" yazılır.

Yeni vərəqin miqyası yoxdursa, köhnə vərəqin miqyasını alır (çertyojlar düzləşmək üçün miqyaslanmalı olduqda tənzimlənir). Əgər artıq fərqli miqyası varsa, TakeoffCraft əvvəlcə soruşur: köçürülmüş nişanlar yeni vərəqin miqyasında ölçülür.

## İşarələnmiş nişanları yoxlayın

1. Vərəq panelində "(n) yoxlanılsın" seçin. Növbəti işarələnmiş nişana yaxınlaşır və onu seçir; onun paneli niyə işarələndiyini göstərir.
2. Çertyoj altında dəyişibsə, nişanı düzəldin (küncləri sürükləyin, nişan əlavə edin və ya silin, ya da yenidən götürün).
3. Onun panelində **Yoxlandı** seçin. İşarə gedir və vərəq panelindəki say azalır.

İşarələr hesablama ilə birlikdə saxlanılır, ona görə onları sonra da yoxlaya bilərsiniz.

:::note
Müqayisə həm vektor PDF-lərdə, həm də skanlarda işləyir, çünki çəkilmiş olanı müqayisə edir. Əyilmiş və ya uzadılmış skan yalnız iki nöqtə ilə təxmini düzə bilər; belə halda daha çox nişanı gözlə yoxlayın.
:::
