---
title: Qiymət kitabxanası
summary: Elementlərinizi, dərəcələrinizi və yığımlarınızı kitabxanada saxlayın, onu CSV və ya keçmiş smetadan idxal edin, oradan elementləri istənilən hesablamaya əlavə edin və hesablamanın qiymətlərini ondan yeniləyin.
keywords: kitabxana, peşə paketləri, qiymət siyahısı, qiymət kitabı, xərc bazası, csv idxalı, dərəcələr, yığımlar, təkrar istifadə, şablon elementləri, qiymətləri yenilə, yenidən qiymətləndir
from: 37356c68
---

**Qiymət kitabxanası** iş-iş istifadə etdiyiniz elementləri saxlayır: onların növünü, vahidini, hündürlüyünü, israfını, material və əmək dərəcələrini və yığımlarını. O, hər hesablamadan ayrı olaraq bu brauzerdə saxlanılır, ona görə buradakı hər açdığınız hesablama ondan istifadə edə bilər.

Onu {{ui:Elementlər}} panelinin yuxarısındakı {{ui:Kitabxana}} ilə açın.

## Kitabxananı doldurun

- {{ui:CSV idxal et…}} CSV kimi saxlanmış cədvəli oxuyur (aşağıdakı sütunlara bax). Adı və növü artıq kitabxanada olan elementlər dəyişdirilir; qalanları əlavə olunur. Oxuna bilməyən sətirlər atlanır və hansının niyə olduğunu bildirir.
- {{ui:Bu hesablamanın elementlərini əlavə et}} açıq hesablamanın hər elementini dərəcələri və yığımı ilə kitabxanaya kopyalayır (işarələri yox).
- TakeoffCraft-ın ixrac etdiyi smeta CSV-si ([Smetanı ixrac edin](topic:export-estimate)) olduğu kimi idxal olunur: keçən işin qiymətləri növbəti işə başlanğıc verir.

- {{ui:Peşə paketləri…}} bir peşə üçün pulsuz yığımlar əlavə edir, məsələn quru divar, elektrik və ya beton, qiymətsiz. Bax: [Peşə paketləri](topic:trade-packs).

{{ui:CSV ixrac et}} kitabxananı CSV kimi saxlayır: surətini saxlamaq, cədvəl proqramında redaktə etmək və ya həmkarınıza vermək üçün. {{ui:Təmizlə}} onu boşaldır (iki dəfə klik edin).

:::note
Kitabxana bu brauzerin yaddaşında yaşayır. Başqa brauzer, başqa kompüter və ya məxfi pəncərənin öz kitabxanası var (ya da yoxdur). Onu köçürmək üçün ixrac edin.
:::

## Hesablamada istifadə edin

- Elementləri işarələyin ({{ui:Kitabxanada axtar}} daxil edib siyahını daraldın) və {{ui:Hesablamaya əlavə et}} seçin. Onlar yığımları ilə birlikdə bir addımda əlavə olunur və {{key:Mod+Z}} onu geri alır. Hesablamada artıq olan ad nömrə alır, məsələn `Carpet (2)`.
- {{ui:Qiymətləri yenilə}} hesablamanın elementlərinə, adı və növü kitabxana elementi ilə uyğun olan hər biri üçün kitabxananın israf və dərəcələrini verir; eyni adlı yığım komponentləri üçün də eynidir. Hündürlüklər, vahidlər və düsturlar olduğu kimi qalır. Bir {{key:Mod+Z}} bütün köhnə qiymətləri geri qaytarır.

## CSV sütunları

Birinci sətir sütunların adlarını istənilən sırada verir; digər sütunlar nəzərə alınmır.

| Sütun | Nə yazılır |
|---|---|
| Item (və ya Name) | Elementin adı. Mütləqdir. |
| Type | Linear, Area və ya Count (LF, SF və EA da işləyir). Boş olduqda vahid qərar verir. |
| Unit | LF və ya m; SF, SY və ya m²; EA. Boş: növün adi vahidi. |
| Waste % | `10` və ya `10%`. |
| Material per unit, Labor per unit | `2.10` və ya `$1,250` kimi dərəcələr. |
| Height (və ya Depth) | `9'-0"`, `9`, ya da metrik vahidlər üçün `2.7`. |
| Component, Formula | Component adı olan (ya da Type `Component`) sətir yuxarıdakı elementin yığımının bir hissəsidir. Onun Unit, Waste və dərəcələri öz-özlüyündədir; Formula-sı elementin hərflərindən istifadə edir, bax: [Yığımlar və düsturlar](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Sütunlar arasında vergül, nöqtəli vergül və ya tabulyasiya hamısı işləyir.
