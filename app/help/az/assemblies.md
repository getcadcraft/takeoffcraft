---
title: Yığımlar və düsturlar
summary: Elementə komponentlər əlavə edin və düsturlar onun uzunluğunu, sahəsini və ya sayını şpilkalara, lövhələrə, gipskarton vərəqlərinə, betona və furnituraya çevirsin; işlənmiş divar nümunəsi ilə.
keywords: yığım, komponentlər, düstur, şpilkalar, gipskarton, vərəqlər, lövhələr, beton, cubic yards, furnitura, resept, tipik, element hissələri
from: 12891a21
---

Elementin **yığımı** hər biri miqdar düsturu və öz itki və tarifləri olan komponentlərin siyahısıdır. Düstur elementin ölçülmüş cəmlərindən istifadə edir, ona görə divarın bir həcmlərinin hesablanması sizə eyni anda şpilkalar, lövhələr və gipskarton verir və siz ölçdükcə onlar yenilənir.

## İstifadə edə biləcəyiniz dəyişənlər

| Element növü | Dəyişənlər |
|---|---|
| Xətti | `L` uzunluq, `H` hündürlük, `A` divar sahəsi (L × H), `N` xəttlərin sayı |
| Sahə | `A` sahə, `P` perimetr (kontur + kəsiklər), `H` dərinlik və ya qalınlıq, `N` sahələrin sayı |
| Say | `N` say |

Qiymətlər elementin öz vahidlərindədir: LF və SF elementlər üçün feet və square feet, m və m² elementlər üçün meters və square meters. SY elementi üçün `A` square yards ilə, `P` və `H` isə feet ilə qalır.

Düsturlarda `+ - * /` (və ya × ÷), mötərizələr, ədədlər və `ceil`, `floor`, `round`, `min`, `max` və `abs` funksiyaları istifadə olunur. Tam qaydalar [Düstur dili](topic:formulas) bölməsindədir.

## İşlənmiş nümunə: daxili divar

Fərz edin ki, **Daxili divar tipi A**-nı xətti element kimi hesablamısınız: cəmi 120 LF olan 4 xətt, {{ui:Hündürlük}} `9'-0"` olaraq təyin edilib. Onun **ölçülmüş** qiymətləri belədir: L = 120, N = 4, A = 1,080 (divarın SF-i, bir üz).

1. {{ui:Elementlər}} altında elementi seçin.
2. {{ui:Yığım}} bölməsində {{ui:Komponent əlavə et}} seçin.
   "Komponent" adlı komponent görünür; altında düstur `L` və onun nəticəsi yazılır.
3. {{ui:Ad}} sahəsinə `Studs 16 in o.c.` yazın, {{ui:Vahid}} sahəsinə isə `EA` yazın.
4. {{ui:Miqdar düsturu}} sahəsinə `ceil(L * 12 / 16) + N` yazın.
   Nəticə yazdıqca yenilənir: "= 94 EA". Bu, 120 feet boyunca hər 16 inches-də bir şpilka (90) və 4 xəttin hər birini bağlamaq üçün əlavə bir şpilkadır.
5. Lövhələr üçün yenidən {{ui:Komponent əlavə et}} seçin: ad `Plates, top and bottom`, vahid `LF`, düstur `L * 2`. Nəticə: 240 LF.
6. Gipskarton əlavə edin: ad `Gypsum board 4x8, both sides`, vahid `sheets`, düstur `ceil(A * 2 / 32)`. Nəticə: 68 sheets (2,160 SF gipskarton ÷ 32 SF bir vərəqdə = 67.5, yuxarı yuvarlaqlaşdırılıb).
7. Hər komponentin {{ui:İtki %}}, {{ui:Material $}} və {{ui:İşçilik $}} sahələrini doldurun.
   Hər komponent {{ui:Miqdarlar}} cədvəlində elementin altında öz sətrini alır, element kimi qiymətləndirilir və {{ui:Layihənin cəmi}} ona daxildir.

Divarın dəyəri tamamilə komponentlərdədirsə, elementin öz material və işçilik tariflərini 0-da saxlayın, əks halda o, iki dəfə hesablanar.

:::tip
İtki düsturdan sonra tətbiq olunur və yuvarlaqlaşdırılmır: 10% itki ilə 68 sheets 74.8 sheets edir. Tam vərəqlər sifariş etmək üçün itkini düsturun içinə qoyun, məsələn `ceil(A * 2 / 32 * 1.1)`, və komponentin itkisini 0 saxlayın.
:::

## Digər düsturlar

| Nə | Element | Düstur |
|---|---|---|
| 24 in mərkəzlə şpilkalar | Xətti | `ceil(L / 2) + N` |
| İzolyasiya matları, SF | Hündürlüklü xətti | `A` |
| Boya, iki üz, 350 SF-də gallon | Hündürlüklü xətti | `ceil(A * 2 / 350)` |
| 15 SF-də kafel qutuları, 10% artıq | Sahə | `ceil(A * 1.1 / 15)` |
| Baza və ya kənar bəzək, LF | Sahə | `P` |
| Beton, cubic yards | Dərinlikli sahə | `A * H / 27` |
| Beton çeyrək yard-a yuvarlaqlaşdırılıb | Dərinlikli sahə | `ceil(A * H / 27 * 4) / 4` |
| Menteşələr, qapı başına üç | Say | `N * 3` |
| Ən azı bir qutu, hər 12-yə bir | Say | `max(1, ceil(N / 12))` |

## Düstur səhv olduqda

Düsturun altındakı sətr xəta mesajına çevrilir, məsələn `"X" is not a measured value here. Use L, H, A, N.` və ya `A ")" is missing.` Bu halda komponentin məbləğləri olmur, {{ui:Miqdarlar}} cədvəlində onun sətri "Düstur xətası: …" göstərir və başlıqda "Natamam: 1 düstur xətası (cəmlərə daxil deyil)" yazılır. Düsturu düzəldin, cəmlər yenilənəcək.

Sıfıra bölən düstur da xətadır ("Düstur sıfıra bölür."), məsələn dərinliyi olmayan elementdə `A / H`.

## Məhdudiyyətlər

- Düsturlar elementin **cəmləri** üzrə işləyir, xətt-xətt deyil. `ceil(L * 12 / 16) + N` hər xəttə bir şpilka əlavə edir; hələ hər xətt üzrə yuvarlaqlaşdırma yoxdur.
- Düstur yalnız öz elementinin dəyişənlərindən istifadə edə bilər, başqa elementin dəyişənlərindən yox.
- Hər elementə ən çox 50 komponent, hər düstura 500 simvol.

## Komponenti silin

Altındakı {{ui:Komponenti sil}} seçin. Onu {{key:Mod+Z}} ilə geri qaytara bilərsiniz.
