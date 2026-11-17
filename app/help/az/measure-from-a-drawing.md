---
title: Çertyojdan ölçmək
summary: Uzunluqları və sahələri çertyojun öz xətlərindən, qövslərindən, polixəttlərindən və ştrixlamalarından seçməklə alın, klikləməklə izləmək əvəzinə dəqiq qövslər və deşiklərlə.
keywords: çertyojdan ölçü, həndəsə, polixətt, qövs, çevrə, ştrixlama, bulge, dəqiq uzunluq, dəqiq sahə, seçmək, pəncərə, izləmə, CAD-dən, xətti, sahə
from: fd734246
---

{{ui:Measure drawing}} DWG və ya DXF vərəqinin vərəq çubuğunda çertyojun öz obyektlərini nişan kimi götürür, buna görə onları klikləməklə izləmirsiniz. Polixəttin uzunluğu, qövsün uzunluğu, dairənin sahəsi və deşikləri olan ştrixlamanın sahəsi hesablama üçün istifadə olunan eyni hesablamadan dəqiq çıxır.

## Obyektləri xətti və ya sahə elementi kimi götürün

1. {{ui:Items}} altında **xətti** və ya **sahə** elementi yaradın və ya ona klik edin. Vərəqə miqyas lazımdır.
2. {{ui:Measure drawing}} seçin.
3. Vərəqdəki obyektlərə klik edib seçin, və ya onların ətrafına pəncərə çəkin: tamamilə içində olan hər şey seçilir. {{key:Shift}} pəncərəni seçilənlərə əlavə edir; seçilmiş obyektə yenidən klik etsəniz çıxarılır. Çubuq ümumi nəticəni göstərir: "6 runs: 108'-9 1/8" in all." (6 xətt: cəmi 108'-9 1/8".)
4. Əlavə etmə düyməsini seçin, bu say və elementi adlandırır, məsələn {{ui:Add 6 to Edge}} (və ya {{key:Enter}} basın). Hər obyekt elementin bir nişanına çevrilir, bir geri qaytarma addımında. {{key:Esc}} seçilənləri təmizləyir.

## Hər elementin nə götürdüyü

- **Xətti** element xətləri, qövsləri, polixəttləri, dairələri və splaynları uzunluğu ilə götürür. Qapalı forma perimetri ilə sayılır. Ştrixlama kənarda qalır: onun sahəsi var, uzunluğu yox, və çubuq bunu deyir.
- **Sahə** elementi qapalı formaları götürür: qapalı polixəttləri, dairələri, 2D cisimləri və deşikləri olan ştrixlamaları. Açıq xətlər kənarda qalır və çubuq bunu deyir.

## Dəqiq və demək olar ki, dəqiq

Xətlər, qövslər (istənilən bulge ilə), bulge-li polixəttlər və dairələr dəqiqdir: uzunluqlar və sahələr qövsün radiusundan və bucağından istifadə edir, onun şəklindən yox. Ellipslər, splaynlar və kənarlardan təşkil olunmuş sərhədli ştrixlamalar bir dərəcəlik və ya daha incə akkordlarla ölçülür: ellipslərdə yüzdə bir faizin, qalanlarda onda birin daxilində. Çubuq seçdiyiniz bu tip əyrilərin sayını göstərir.

## Mənbə

- **Model**: model fəzasında obyektlər. **Tərtibat**: onun öz xətləri və viewport daxilindəki model obyektləri, viewport vasitəsilə miqyaslanır. Viewport kənarını keçən obyekt təklif olunmur (çap olunanda kəsilir); iki viewport-un göstərdiyi obyekt bir dəfə götürülür.
- Yalnız vərəqin göstərdiyi qatlar. Bloklar ölçülmür, sayılır: bax [Çertyojdan sayma](topic:count-from-a-drawing). 3D polixəttlər, meshlər, cisimlər və regionlar təklif olunmur.
