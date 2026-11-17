---
title: İxrac sütunları
summary: XLSX ixracının və CSV-nin hər iş vərəqi və sütunu, Smeta vərəqinin daşıdığı düsturlarla.
keywords: ixrac, sütunlar, xlsx, csv, iş vərəqi, smeta vərəqi, vərəqə görə, işarələr, miqyaslar, düsturlar, sahələr
from: fed07851
---

## Smeta (XLSX iş vərəqi və CSV)

Hər element üçün bir sətir, ardınca yığımının hər komponenti üçün bir sətir (girintili). Sonra boş sətir və ümumi cəm.

| Sütun | Məzmun | XLSX-də |
|---|---|---|
| A Element | Element adı (qalın) və ya komponent adı (girintili) | Mətn |
| B Növ | Xətti, Sahə, Say və ya Komponent | Mətn |
| C Vahid | LF, m, SF, SY, m², EA və ya komponentin vahidi | Mətn |
| D Miqdar | Ölçülmüş cəm və ya düsturun nəticəsi | Ədəd |
| E İtki % | İtki | Faiz (0.10 = 10%) |
| F İtkili miqdar | Miqdar × (1 + itki) | Düstur `D*(1+E)` |
| G Vahid başına material | Material dərəcəsi | Ədəd |
| H Vahid başına əmək | Əmək dərəcəsi | Ədəd |
| I Material | Genişləndirilmiş material | Düstur `ROUND(F*G,2)` |
| J Əmək | Genişləndirilmiş əmək | Düstur `ROUND(F*H,2)` |
| K Cəm | Material + əmək | Düstur `I+J` |
| L Qeydlər | İstifadə olunan düstur, düstur xətası, miqyası olmayan vərəqdəki işarələr, divar sahəsi, perimetr | Mətn |

Ümumi cəm sətri: I, J və K sütunlarının üzərində yuxarıdakı bütün sətirlər üzrə `SUM`, və Qeydlərdə bir şey buraxıldıqda "Natamam: yuxarıdakı qeydlərə baxın".

Düstur xətası olan sətirin miqdarı və məbləği yoxdur; qeydi xətanı göstərir. Başlıq sətri dondurulub.

CSV-də eyni sütunlar sadə dəyərləri saxlayır: İtki % faizin ədədidir (10 = 10%), pul isə dollarla iki onluq rəqəmlə yazılır. Cədvəl proqramının düstur kimi qəbul edə biləcəyi mətn (`=`, `+`, `-` və ya `@` ilə başlayan) mətn olaraq qalması üçün əvvəlinə `'` əlavə olunur.

## Vərəqə görə (yalnız XLSX)

| Sütun | Məzmun |
|---|---|
| Vərəq | Vərəq adı (PDF açıq deyilsə, PDF adı ilə) |
| Element | Element adı |
| Miqdar | Həmin elementin həmin vərəqdəki miqdarı, öz vahidində |
| Vahid | Elementin vahidi |
| İşarələr | İşarələrin sayı |

## İşarələr (yalnız XLSX)

Hər işarə üçün bir sətir.

| Sütun | Məzmun |
|---|---|
| Vərəq | Vərəq adı |
| Element | Element adı |
| Növ | Xətti, Sahə və ya Say |
| Miqdar | Uzunluq, xalis sahə və ya 1 |
| Vahid | LF və ya m; SF, SY və ya m²; EA |
| Ətraflı | Xətti: seqment uzunluqları, çıxılanlar "(çıxılır)" ilə işarələnmiş, və "(uzunluq) çəkilib, (uzunluq) çıxılıb". Sahə: kəsiklər olduqda ümumi və kəsik sahələri, və perimetr. Miqyası olmayan işarələr üçün "Vərəqin miqyası yoxdur". |
| Təklif sahəsi | Yalnız hesablamada təklif sahələri olduqda: işarənin sahəsi və ya "Təklif sahəsi yoxdur" |

## Təklif sahəsinə görə (yalnız XLSX, hesablamada təklif sahələri olduqda)

| Sütun | Nə |
|---|---|
| Təklif sahəsi | Sahənin adı və ya "Təklif sahəsi yoxdur" |
| Element | Element, və ya altında girintili komponent |
| Vahid | Elementin və ya komponentin vahidi |
| Miqdar | Həmin sahədə ölçülüb (komponentlər: sahənin cəmləri üzrə düstur) |
| İtkili miqdar | Miqdar × (1 + itki) |
| Material, Əmək, Cəm | Smeta-dakı kimi sentə qədər genişləndirilib |
| Qeydlər | Düstur, xətalar və miqyassız işarələr, Smeta-dakı kimi |

Hər sahə "(ad) cəmi" sətri ilə bitir, onun xərcləri öz sətirləri üzrə `SUM` düsturlarıdır; son sətir, **Bütün təklif sahələri**, cəmləri toplayır. **İşarələr** iş vərəqində sonra yeddinci sütun var: **Təklif sahəsi**.

## Miqyaslar (yalnız XLSX)

Miqyası və ya işarələri olan hər vərəq üçün bir sətir.

| Sütun | Məzmun |
|---|---|
| Vərəq | Vərəq adı |
| Miqyas | Hazır variantın adı, kalibrlənmiş miqyas və ya "Miqyas yoxdur" |
| Necə | "Hazır" və ya "Kalibrlənib (yazdığınız məsafədə)" |
| PDF vahidi başına fut | TakeoffCraft-ın istifadə etdiyi dəqiq miqyas əmsalı |

## Fayl adları

- `(ad).xlsx` və `(ad).csv`, ad hesablamada açılan ilk PDF-dən götürülür.
- CSV UTF-8 formatındadır, bayt sırası işarəsi (BOM) və Windows sətir sonları ilə; hər platformada cədvəl proqramları onu oxuyur.
