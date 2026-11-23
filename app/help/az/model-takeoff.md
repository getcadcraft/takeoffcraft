---
title: Bina modelindən həcmlərin hesablanması
summary: Memarın IFC modelini açın, 3D-də baxın, divarları, döşəmələri, qapıları və qalanlarını növə, materiala, qata və ya ölçüyə görə seçin və onların saylarını, uzunluqlarını, sahələrini və həcmlərini hesablamaya gətirin. Modelin yeni nüsxəsi eyni miqdarları yeniləyir.
keywords: model, model üzrə həcmlərin hesablanması, 3D görünüş, hissəyə klik edin, sətri tapın, material, qat, divar qatları, gipsokarton, izolyasiya, qapı ölçüləri, pəncərə ölçüləri, açıqlıqlar cədvəli, csv, 3d, bim, ifc, rvt, bina modeli, miqdarlar, divarlar, döşəmələr, qapılar, pəncərələr, sütunlar, otaqlar, tipə görə, səviyyəyə görə, yeniləmə, yeni model, layihə inkişafı
from: 8c4c12c9
---

Növbəti çertyoj dəstini gözləmək lazım deyil. Memar bina modelini göndərəndə onu burada açın və miqdarları birbaşa ondan götürün. Model kompüterinizdə oxunur; heç yerə göndərilmir.

## Addımlar

1. Alət panelində {{ui:Model}} seçin və modelin `.ifc` faylını seçin, ya da onu hər digər fayl kimi {{ui:Open plans}} ilə açın.
2. {{ui:Model takeoff}} hər kateqoriya və tip üçün bir sətirlə açılır: divarlar divar tipinə görə, döşəmələr döşəmə tipinə görə, qapılar qapı tipinə görə və s. Hər sətir öz sayını və həmin kateqoriyanın hansı vahidlə ölçüldüyünü göstərir.
3. Sürətli cəm üçün {{ui:Group by}} seçimini {{ui:Category}} edin, ya da hər tipi mərtəbəyə görə bölmək üçün {{ui:Category, type and level}} seçin.
4. İstəmədiyiniz sətirlərin işarəsini çıxarın. {{ui:Find}} siyahını daraldır. Sətirin işarəsini çıxarmaq onun hissələrini 3D təsvirdə də gizlədir.
5. Bütün iş boyu saxlayacağınız {{ui:Model name}} verin, məsələn layihənin adı.
6. {{ui:Add to the takeoff}} seçin. Hər miqdar elementlər siyahısında yazılmış miqdara çevrilir. Onu adlandırın, qiymət verin və digər elementlər kimi yığım (assembly) əlavə edin.

## Modeli 3D-də görün

{{ui:Show the model in 3D}} modeli cədvəlin üstündə çəkir, hər sətir üçün bir rəng (sətrin adının yanındakı rəng nişanı). Fırlatmaq üçün sürükləyin, {{key:Shift}} saxlayıb sürükləməklə hərəkət etdirin, yaxınlaşdırmaq üçün çarxdan istifadə edin və geri qayıtmaq üçün {{ui:Fit}} və ya {{ui:Reset}} seçin.

- **Təsvirdə hissəyə klik edin.** Onun sətri cədvəldə seçilir, həmin sətrin bütün hissələri işıqlanır, qalanları solğun olur. Eyni hissəyə yenidən klik etsəniz və o bir neçə sətirdədirsə (qatları olan divar kimi), növbəti sətir seçilir.
- **Cədvəldə sətrə klik edin.** Onun hissələri işıqlanır. Yenə klik edin və ya təsvirdə boş yerə klik edərək ləğv edin.
- Otaqlar çəkilmir, çünki otağın həcmi binanı gizlədərdi.
- Çox böyük model bəzi hissələr üçün yalnız qutu saxlayır ki, yaddaşa sığsın; panel bunların neçə olduğunu göstərir. Rəqəmlər dəyişmir.

Bu kompüter 3D çəkə bilmirsə, cədvəl əvvəlki kimi işləyir.

## Materiala, qata və ya ölçüyə görə qruplaşdırın

{{ui:Group by}} üç əlavə seçimi də var:

- {{ui:Category and material}}: qatlardan qurulmuş divar, döşəmə və ya dam hər qatın materialı üçün ayrı sətir verir, beləliklə gipsokarton, dayaqlar və izolyasiya ayrıca qiymətləndirilə bilər. Tək materialı olan bina hissəsi həmin materialın sətrini alır, materialı olmayan isə "Material adı verilməyib" sətrində saxlanır.
- {{ui:Category and layer}}: eynidir, lakin sətirdə qatın qalınlığı göstərilir ("İzolyasiya, 100 mm" kimi).
- {{ui:Category, type and door or window size}}: qapılar və pəncərələr en və hündürlüyünə görə bölünür (məsələn 3'-0" × 6'-8" və ya 914 × 2,032 mm).

Qat üçün sahə divarın öz üzüdür (və ya döşəmənin, damın plan və ya səth sahəsidir), həcm isə həmin sahə ilə qatın qalınlığının hasilidir. Sətirin qeydi neçə rəqəmin qatdan gəldiyini göstərir. Bir divarın qatları modelin həmin divar üçün göstərdiyi həcmə bərabər olaraq toplanır.

## Sətirləri və ya açıqlıqları CSV kimi saxlayın

{{ui:Save rows as CSV}} seçdiyiniz sətirləri hər başlıqda vahidləri ilə birlikdə cədvəl proqramı üçün saxlayır. {{ui:Save openings schedule as CSV}} (yalnız modeldə qapılar və ya pəncərələr olduqda) hər qapı və pəncərəni tipinə, səviyyəsinə və ölçüsünə görə sayı ilə birlikdə saxlayır.

## Nə ölçülür

| Kateqoriya | Kəmiyyətlər |
|---|---|
| Divarlar | say, uzunluq, divar sahəsi (bir üz, açıqlıqlar çıxılmaqla), həcm |
| Döşəmələr, plitələr, tavanlar və digər örtüklər | say, plan sahəsi, həcm |
| Damlar | say, plan sahəsi, dam səthi, həcm |
| Bünövrələr | say, plan sahəsi, həcm |
| Sütunlar, tirlər və digər elementlər | say, elementin boyu üzrə uzunluq, həcm |
| Məhəccərlər, borular, hava kanalları və kabel xətləri | say, uzunluq |
| Pillələr | say, həcm |
| Otaqlar | say, döşəmə sahəsi, həcm |
| Qapılar, pəncərələr və qalanları | say |

Modelin müəllifi faylda bir kəmiyyəti göstəribsə, həmin rəqəm istifadə olunur. Əks halda rəqəm elementin formasından ölçülür. Hər kəmiyyət hansının istifadə olunduğunu və neçə elementin rəqəm verdiyini göstərən qeydi saxlayır.

:::note
Formadan ölçülən divarın uzunluğu başdan sona gedir, buna görə küncdə üst-üstə düşən iki divar künci hər ikisində əhatə edir. Həcm üçün qapalı forma lazımdır: forması qapalı olmayan element sayılır, lakin həcm vermir. Əyri və ya künclü divar elementi bütün şaquli üzlərinin yarısı kimi ölçülür və qeyd bunu göstərir.
:::

## Yeni model gələndə

Yeni faylı açın və eyni {{ui:Model name}} yazın. Heç nə əlavə etməzdən əvvəl panel neçə kəmiyyətin yeni olduğunu, neçəsinin dəyişdiyini və nədən nəyə dəyişdiyini, habelə əvvəlki nüsxədən hansı kəmiyyətlərin modeldə artıq olmadığını göstərir. {{ui:Add to the takeoff}} seçin: dəyişən kəmiyyətlər yeni rəqəmləri alır, adlarınız, dərəcələriniz, tullantınız və yığımlarınız qalır. Modeldən çıxmış kəmiyyətlər köhnə rəqəmlərini saxlayır; layihə onları çıxarıbsa, özünüz silin.

Kəmiyyəti tanıyan şey tip və səviyyə adlarıdır. Memar divar tipinin adını dəyişsə, o yeni kəmiyyət kimi gəlir və köhnəsi itmiş kimi siyahıya salınır.

## Oxunan fayllar

IFC faylları (IFC2x3, IFC4 və IFC4.3). Yollar, relslər və ya körpülər olan IFC faylı infrastruktur kəmiyyətlərini əvvəlki kimi birbaşa gətirir.

TakeoffCraft bu buraxılışda `.rvt` fayllarını oxumur. Memar Revit-də işləyirsə, modelin IFC ixracını istəyin (File, Export, IFC) və onu açın.

Bir model eyni anda 500-ə qədər kəmiyyət gətirə bilər. Daha çox olarsa, sətirlərin işarəsini çıxarın və ya kateqoriyaya görə qruplaşdırın.
