---
title: Keçmiş işlərinizdən qiymət yaddaşı
summary: TakeoffCraft keçmiş hesablamalarda istifadə etdiyiniz dərəcələri yalnız bu kompüterdə yadda saxlayır, beləliklə yeni hesablama son dəfə ödədiklərinizdən başlaya bilər. Görün, istifadə edin, unudun.
keywords: qiymət yaddaşı, qiymətlər, qiymətləri yadda saxla, son iş, keçmiş işlər, tipik qiymət, median, dərəcələr, qiymətsiz, yenidən qiymətləndir, keçmiş hesablamadan öyrən, unut, kitabxana
from: 7279f1a1
---

{{ui:Qiymətlər}} alətlər zolağındakı (dollar işarəsi) düymə istifadə etdiyiniz qiymətlər haqqında TakeoffCraft-ın yadda saxladıqlarını açır. Bu sadə siyahıdır: hər element adı üçün son işlərinizdən dərəcələr. O, bu brauzerdə qiymət kitabxanasının yanında saxlanılır (Studio-da öz veb görünüşündə), heç vaxt hesablama faylının içində yox və heç yerə göndərilmir. Bu, öyrədilmiş model deyil.

## Nə yadda saxlanılır

Hesablamanı saxlayanda qiyməti olan və istifadə olunan hər element (işarəsi var və ya yazılmış miqdarı sıfırdan böyükdür) adı və növü ilə yadda qalır: material dərəcəsi, əmək dərəcəsi, israf və vahid. İş, üzərində işləndiyi plan fayllarıdır, ona görə eyni hesablamanı yenidən saxlamaq öz qiymətlərini əvəz edir, başqa iş əlavə etmir. Hər ad üçün son 12 iş saxlanılır.

Köhnə işlərinizlə başlamaq üçün {{ui:Keçmiş hesablamadan öyrən…}} seçin və saxlanmış hesablamanı (.json) seçin. Onun qiymətli, istifadə olunmuş elementləri eyni qaydada yadda saxlanılır.

Adlar sözləri uyğun gəldikdə uyğun sayılır, hərf registri və durğu işarələrindən asılı olmayaraq ("2x4 Stud, 8 ft" və "2x4 stud 8 FT" eynidir). Eyni sözlər başqa növ elementdə (xətti element və say elementi) eyni qiymət sayılmır.

## Yeni hesablamada istifadə edin

1. Yeni hesablamanın elementlərini yaradın.
2. {{ui:Qiymətlər}} seçin. {{ui:Bu hesablama}} altında qiyməti yadda saxlanmış hər elementi, indi onda nə olduğunu, son işin dərəcələrini, tipik dərəcələri (yadda saxlanmış işlərin ortası) və diapazonu görürsünüz.
3. Bir elementdə {{ui:Son işi istifadə et}} və ya {{ui:Tipik dərəcələri istifadə et}} seçin, ya da qiyməti olmayan bütün elementləri son işdən doldurmaq üçün {{ui:Yaddaşdan N qiymətsiz elementə qiymət ver}} seçin.

Hər istifadə bir addımdır: {{key:Ctrl+Z}} onu geri alır. Adı başqa adın içində olan oxşar elementdə bunu bildirir və düymələr oxşar adın dərəcələrini istifadə edir. Hər ədəd üzrə (per each) yadda saxlanmış qiymət heç vaxt fut üzrə elementə verilmir: dialoq vahidlərin fərqli olduğunu bildirir və ona toxunmur.

## Görün, dəyişin, unudun

{{ui:Yaddaşda saxlanan hər şey}} hər adı dərəcələri və iş sayı ilə sadalayır. Zibil qutusu düyməsi bir adı unudur; {{ui:Bütün qiymətləri təmizlə}} hamısını unudur. Yadda saxlamağı dayandırmaq üçün {{ui:Hesablamanı saxlayanda qiymətlərimi yadda saxla}} söndürün; artıq olanlar siz unutana qədər qalır. Hesablamalarınıza və qiymət Kitabxanasına heç vaxt toxunulmur.

## Köməkçinizlə

Parametrlərdə köməkçilərə icazə versəniz, onlar hesablamanın elementləri üçün yadda saxlanılanı oxuya (prices_list) və ondan qiymət verə bilərlər (prices_apply, əvvəlcədən baxış göstərə bilər). Bu, dialoqdakı siyahının eynisidir.
