---
title: IFC 4.3 faylından miqdarları gətirin
summary: Yol, dəmiryolu, körpü və torpaq işlərinin IFC 4.3 faylını açın və sinif üzrə say, faylın bildirdiyi uzunluqlar, sahələr və həcmlərlə birlikdə yazılmış miqdarlar kimi alın.
keywords: ifc, ifc4x3, ifc 4.3, yol, dəmiryolu, körpü, asfalt, bordür, təbəqə, torpaq işləri, dayaq, infrastruktur, miqdarlar, bim, mülki, yazılmış miqdarlar
from: 6b08c2c4
---

IFC 4.3 faylı yolları, dəmiryollarını, körpüləri, dəniz işlərini və onları təşkil edən hissələri saxlaya bilər: asfalt örtükləri, təbəqələr, bordürlər, relslər, torpaq işləri, dayaqlar, qazıqlar və s. TakeoffCraft bunları oxuyur və qiymətləndirə biləcəyiniz yazılmış miqdarlara çevirir.

## Faylı açın

1. **Fayl** qrupunda {{ui:Planları aç}} seçin və ya {{key:Mod+O}} basın.
2. IFC faylını seçin (PDF-lərlə birlikdə seçə bilərsiniz) və ya TakeoffCraft-a buraxın.

Hər sinif və əvvəlcədən təyin olunmuş növ üçün bir yazılmış miqdar yaradılır, məsələn "Asfalt (elastik): say", və fayl bunları bildirdikdə "uzunluq" m ilə, "sahə" m² ilə və "həcm" m³ ilə. Hər elementin qeydi neçə elementin sayıldığını və neçəsinin miqdar bildirmədiyini göstərir. Eyni adlı daha yeni faylı açmaq əlavə etmək əvəzinə həmin miqdarları yeniləyir.

## Nə etmir

- Faylın daşıdığı miqdar dəstlərini (IfcElementQuantity) oxuyur. 3D formaları ölçmür, ona görə miqdar dəsti olmayan element sayılır, amma uzunluq, sahə və ya həcm əlavə etmir.
- Yalnız IFC 4.3-ün infrastruktur sinifləri oxunur. Bina faylı (divarlar, qapılar, döşəmələr) burada miqdarlara çevrilmir; IFC 4.3 olmayan fayl bunu bildirir və heç nə gətirmir.
- Vahidlər faylın öz vahidləridir və metrlərə çevrilir.
