---
title: Hesablamalarınızdan nəyi öyrənib
summary: TakeoffCraft Avtomatik say ilə təsdiq etdiyiniz simvolları, şərt dəstlərinizi, ən çox istifadə etdiyiniz yığımları və hər səhifədə təkrarladığınız nümunələri saxlayır — hamısı hesablamanın öz faylının içində. Baxın, istifadə edin, silin.
keywords: öyrən, öyrənilmiş, öyrənmə, köməkçi, yadda saxla, simvollar, şablonlar, eyni son iş, son iş, şərt dəsti, şərtlər, təkrar istifadə, yığımlar, ən çox istifadə olunan, təkliflər, hər səhifədə təkrarla, hər səhifə, başlıq bloku, nümunə, hamısını təmizlə, unut, məxfilik
from: 54d99e99
---

TakeoffCraft hesablamaları ilə nə qədər çox iş görsəniz, bir o qədər sürətli olur. O, **yalnız qəbul etdiklərinizdən** öyrənir:

- [Avtomatik say](topic:auto-count) ilə qutuya aldığınız və sonra əlavə etdiyiniz simvollar,
- saxladığınız şərt dəstləri,
- istifadə etdiyiniz yığımlar (işə görə bir dəfə),
- hər səhifədə təkrarladığınız işarə nümunələri.

Bu, öz vərəqlərinizdə sadə uyğunlaşdırmadır, Avtomatik say-ın apardığı eyni axtarışdır. Bu öyrədilmiş model deyil. Öyrəndiyi hər şey **bu hesablamanın faylında** (`.takeoff.json`) saxlanılır və heç yerə göndərilmir. Növbəti işə aparmaq üçün [Son işlə eyni](topic:what-it-learned#same-as-last-job) istifadə edin.

Hamısına baxmaq üçün alət panelində {{ui:Öyrənilmiş}} seçin (lampa, {{ui:Avtomatik say}} yanında).

## Simvollar

{{ui:Avtomatik say}} ilə simvolu qutuya alıb {{ui:Əlavə et}} seçdiyiniz zaman, qutuya aldığınız simvol qəbul etdiyiniz uyğunluq səviyyəsi ilə saxlanılır.

- {{ui:Öyrənilmiş}} bölməsində {{ui:Bu vərəqdə tap}} və ya {{ui:Hər vərəqdə tap}} seçin. Adi Avtomatik say yoxlaması açılır: qutuya klikləyib onu kənarda saxlayın, sürgünü hərəkət etdirin, sonra əlavə edin. Siz etmədikcə heç nə əlavə olunmur.
- Öyrənilmiş simvolunun hələ heç biri olmayan vərəqi açanda üstdəki zolaq {{ui:Tap …}} təklif edir. {{ui:İndi yox}} həmin vərəq üçün onu gizlədir.
- Hesablamada həmin adda element yoxdursa, işarələri əlavə etmək elementi də əlavə edir (bir geri qaytarma addımı).
- Eyni elementin simvolunu yenidən əlavə etmək onu tanıyan elementə sayılır; fərqli görünüşlü simvol ikinci bir simvol kimi saxlanılır.
- Avtomatik say kimi, simvolu sağ bucaqda və fərqli miqyaslı vərəqlərdə də tapır.

## Şərt dəstləri

Dəst hesablamanın şərtlərini (vahidləri, dərəcələri, itkisi və yığımları ilə elementləri) işarəsiz saxlayır.

1. {{ui:Öyrənilmiş}} bölməsində {{ui:Bu hesablamanın şərtlərini dəst kimi saxla…}} seçin və ona ad verin. Eyni adlı dəst əvəz olunur.
2. Dəsti olan hesablamada {{ui:Əlavə et}} hələ olmayan şərtləri əlavə edir. Eyni ad və növə malik şərtlərə toxunulmur. Bu bir geri qaytarma addımıdır.

## Son işlə eyni

Son işinizin faylı öyrəndiklərini saxlayır. Yeni işi ondan başlatmaq üçün:

1. Yeni planları açın, sonra {{ui:Öyrənilmiş}} › {{ui:Son işlə eyni…}} seçin.
2. Son işin `.takeoff.json` faylını seçin.
3. Nəyi gətirəcəyinizi işarələyin: onun şərtlərini (yalnız bu hesablamada olmayanları) və öyrəndiklərini (simvollar, dəstlər, yığımlar, nümunələr). Sonra {{ui:Gətir}}.

Onun şərtləri də həmin işin adı ilə dəst kimi saxlanılır. Onun işarələri və miqdarları öz faylında qalır. Hər şey bir geri qaytarma addımıdır.

## Ən çox istifadə etdiyiniz yığımlar

Yığımı olan element, miqdarı olduqda və hesablamanı saxladıqda, işə görə bir dəfə istifadə olunmuş sayılır. İş, onun götürüldüyü plan fayllarının dəstidir, buna görə eyni hesablamanı yenidən saxlamaq ikiqat saymır. {{ui:Ən çox istifadə etdiyiniz yığımlar}} altındakı siyahı ən çox istifadə etdiklərinizi əvvələ qoyur. Bu hesablamada artıq olanları çıxarır. {{ui:Əlavə et}} onu sonuncu istifadə etdiyiniz kimi, bütün hissələri ilə əlavə edir.

## Hər səhifədə təkrarla

Dəstin hər səhifəsində eyni olan işarələr üçün, məsələn başlıq bloku saymaq və ya tipik detal:

1. Bir vərəqdə işarələri seçin ([İşarələri seçin](topic:copy-paste#select-the-marks)).
2. {{ui:Öyrənilmiş}} bölməsində {{ui:Seçilmiş işarələri hər səhifədə təkrarla…}} seçin, nümunəyə ad verin və təsdiq edin.

Onlar açıq olan hər başqa səhifəyə **eyni ölçüdə**, eyni yerdə, bir geri qaytarma addımında düşür. Uzunluqlar və sahələr yalnız eyni miqyaslı səhifələrə düşür; saylar həmin ölçüdəki istənilən səhifəyə düşür. Onları artıq olan səhifə ötürülür. Nümunə saxlanılır, buna görə sonra açdığınız səhifələr zolaqda təklif alır, və ya siyahıdakı {{ui:Hər səhifədə təkrarla}} düyməsindən istifadə edə bilərsiniz.

## Baxın, silin

Öyrənilən hər şey {{ui:Öyrənilmiş}} bölməsində siyahılanır. Zibil qutusu bir şeyi silir. {{ui:Hamısını təmizlə}} öyrənilən hər şeyi silir və elementlərinizi və işarələrinizi toxunulmaz qoyur. Hər ikisi hesablamanı bağlayana qədər geri qaytarıla bilər və hər ikisi hesablama ilə birlikdə saxlanılır.

Bu hesablamada öyrənməni dayandırmaq üçün {{ui:Bu hesablamadan öyrən}} seçimini söndürün. Heç nə yeni öyrənilmir və siyahıda olanlar siz silənə qədər qalır.

## Yaxşı bilmək üçün

- TakeoffCraft-ın köhnə versiyaları öyrənilmiş şeyləri olan faylı normal açır. Həmin hissəni nəzərə almırlar və faylı yenidən saxlasalar, onu atırlar.
- Öyrənilmiş simvol qutuya aldığınız şəklin kiçik təsviridir, faylda saxlanılır (hər biri bir neçə kilobayt).
- Öyrənilmiş simvollar Avtomatik say kimi axtarılır, buna görə eyni məhdudiyyətlər tətbiq olunur: [Simvolu Avtomatik say ilə sayın](topic:auto-count).
