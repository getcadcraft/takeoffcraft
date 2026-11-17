---
title: "Ofis tərtibatı: qruplaşdırma, aralıq cəmlər, başlıq və Standart siyasətlərinizdən götürülən sütun başlıqları"
summary: Standart siyasətlər əlavəsini aktivləşdirin: smeta, vərəq üzrə miqdarlar, ixraclar və köməkçinin oxuduqları ofisinizin cədvəl tərtibatını götürür, BimCraft cədvəllərinin götürdüyü eyni tərtibatı.
keywords: ofis standartı, ofis tərtibatı, standart siyasətlər, əlavə, cədvəl tərtibatı, növə görə qruplaşdır, vərəqə görə qruplaşdır, aralıq cəm, cəmlər, başlıq, sütun başlıqları, böyük hərflər, smeta tərtibatı, ixrac tərtibatı, parametrlər
from: cfd2f30a
---

## Nə edəcəksiniz

TakeoffCraft cədvəllərini ofisinizin verdiyi kimi tərtib etdirin, hər hesablamada ayrıca quraşdırmadan. Tərtibat bir dəfə Standart siyasətlərdə təyin olunur və bu kompüterdəki bütün tətbiqlər üçün keçərlidir: BimCraft-da və ya CadCraft-da nə təyin etsəniz, TakeoffCraft onu istifadə edir, və əksinə.

## Addımlar

1. **Parametrlər › Əlavələr** açın və **Standart siyasətlər**i aktivləşdirin. Bu, siz etməyincə söndürülüdür; söndürülü olduqda və ya heç nə təyin edilmədikdə TakeoffCraft əvvəlki kimidir.
2. **Parametrlər › Qlobal › Standart siyasətlər** açın və **Cədvəl tərtibatı (ofis standartı)** tapın:

| Siyasət | TakeoffCraft-da nə edir |
|---|---|
| Cədvəlləri qruplaşdır | **Növ** smetanı element növünə görə qruplaşdırır (Xətti, Sahə, Say, Yazılmış miqdar). **Səviyyə** miqdarları vərəqə görə, onların vərəqinə görə qruplaşdırır. **Otaq** və **Qruplaşdırma yoxdur** hər ikisini qruplaşdırılmadan buraxır |
| Cədvəllərdə cəmlər | **Hər qrupun altında aralıq cəm və ümumi cəm** hər qrupun altına aralıq cəm əlavə edir. Layihənin ümumi cəmi həmişə qalır |
| Cədvəl başlığı | Cədvəlin üstündə bir sətir, məsələn `{schedule}: ofis tərtibatı` |
| Sütun başlıqları | Yazıldığı kimi, BÖYÜK HƏRFLƏRLƏ və ya Hər Sözün Böyük Hərfi ilə |

3. Parametrləri bağlayın. Cədvəllər dərhal uyğunlaşır.

## Tərtibatı nə təyin edir

- **Miqdarlar › Elementə görə** və **Vərəqə görə**: qrup başlıqları, hər qrupun altında aralıq cəm, başlıq və sütun başlıqlarının yazılışı. Başlığın altındakı sətir ofis standartınızın hansı hissələri təyin etdiyini bildirir. Sətirlər eyni sətirlərdir: dərəcələri və israfı hələ də onlara yazırsınız və rəqəmləri klik edib onların işarələrini seçirsiniz. Komponent və ya ikinci şərt öz elementinin altında qalır.
- **İxrac olunan smeta** (CSV və XLSX): eyni qruplar və aralıq cəmlər. İş kitabında aralıq cəm öz qrupu üzərində `SUBTOTAL` düsturudur, ümumi layihə cəmi də belədir, beləliklə heç nə iki dəfə sayılmır.
- **Köməkçinin oxuduqları**: `takeoff_estimate` və `takeoff_quantities` (vərəq üzrə) qruplar, sətirlər və aralıq cəmləri olan bir `layout` bloku əlavə edir və ofisin hansı hissələri təyin etdiyini bildirir.

## Nəyi öz halında saxlayır

- **Miqdarlar › Sahəyə görə** öz qruplaşdırmasını (tender sahəsinə görə) göstərir və onu saxlayır.
- Layihənin **ümumi cəmi**, tender xülasəsinin işarələmələri və alternativlər yenidən qruplaşdırılmır.
- Cədvəldə sütunu olmayan qruplaşdırma buraxılır: smetada səviyyə yoxdur, vərəq üzrə miqdarlarda növ yoxdur.

## Yaxşı bilmək üçün

- Siyasətlər bu brauzerdə bütün CadCraft tətbiqləri üçün saxlanılır və Standart siyasətlər faylında gedir (eyni yerdə **Fayla saxla** / **Fayldan yüklə**), beləliklə ofis bir faylı paylaşır.
- Qruplaşdırma ilə ixrac olunmuş CSV smeta oxumaq üçündür. Smetanı qiymət kitabxanası kimi geri gətirmək üçün onu heç bir qruplaşdırma olmadan ixrac edin.
- BimCraft-ın bu standartdakı tərəfi: cədvəllər, quraşdırmalar və ixraclar. TakeoffCraft-ın hələ öz siyasətləri yoxdur, ona görə Parametrlər › TakeoffCraft altında Standart siyasətlər bölməsi yoxdur.
