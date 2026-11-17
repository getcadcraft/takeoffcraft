---
title: Vahidlər
summary: Elementin hesabat verə biləcəyi vahidlər, düstur dəyişənlərinin istifadə etdiyi vahidlər və imperial ilə metrik necə qarışır.
keywords: vahidlər, lf, sf, sy, sq, kvadrat yard, dam kvadratları, akr, hektar, metr, kvadrat metr, ea, ədəd, metrik, imperial, çevirmə, standart vahid
from: b7bf0528
---

## Element vahidləri

| Element tipi | Vahid | Ad |
|---|---|---|
| Xətti | LF | xətti fut (standart) |
| Xətti | m | metr |
| Sahə | SF | kvadrat fut (standart) |
| Sahə | SY | kvadrat yard |
| Sahə | SQ | dam kvadratları (100 kvadrat fut) |
| Sahə | ac | akr |
| Sahə | m² | kvadrat metr |
| Sahə | ha | hektar |
| Say | EA | hər biri |

Onu element redaktorunda istənilən vaxt {{ui:Vahid}} ilə dəyişin, hətta ölçüdən sonra da; kəmiyyət dərhal çevrilir.

{{ui:Vahid}} siyahısında {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} bölməsində aktiv edilmiş vahidlər və həmişə elementin öz vahidi göstərilir. Yeni element orada ulduzlanmış uzunluq və ya sahə vahidi ilə başlayır, əgər o, elementin vahidlərindən biridirsə; əks halda LF və ya SF ilə. Bax: [Vahidlər, yazılmış dəyərlər və vahid siyahıları](common:unit-lists).

## Düstur dəyişənlərinin vahidləri

| Element vahidi | L, P, H | A |
|---|---|---|
| LF | fut | kvadrat fut (divar sahəsi) |
| m | metr | kvadrat metr (divar sahəsi) |
| SF | fut | kvadrat fut |
| SY | fut | kvadrat yard |
| SQ | fut | kvadratlar |
| ac | fut | akr |
| m² | metr | kvadrat metr |
| ha | metr | hektar |

SY elementləri üçün `A` kvadrat yardla, `P` və `H` isə futda qalır. SY elementindən həcm `A * 9 * H / 27` kub yarddır; plitələr üçün SF istifadə etmək daha sadədir.

## Harada vahidlər sabitdir

Bəzi göstəricilər həmişə fut istifadə edir:

- çəkərkən status panelindəki canlı göstərici (fut-düym, SF),
- **Seçilmiş işarə** (fut-düym, LF və SF),
- yoxlamanın nəticəsi (fut-düym, onluq futla və metrlə),
- Excel cədvəlinin **Marks** vərəqində parçaların uzunluqları və perimetrləri (fut-düym).

Element cəmləri, {{ui:Miqdarlar}} cədvəli, düsturlar və Smeta vərəqi elementin öz vahidindən istifadə edir.

## Miqyas və vahidlər ayrıdır

Vərəqin miqyası çertyojun nə qədər böyük olduğunu göstərir; elementin vahidi isə onun necə hesabat veriləcəyini. `1:100` miqyaslı metrik çertyoj LF ilə ölçülə bilər, imperial çertyoj isə m² ilə. Kalibrləmə istənilən vahidi qəbul edir: `24'-6"`, `7.5 m`, `7500 mm`.

## Dəqiqlik

TakeoffCraft klik etdiyiniz nöqtələrdən dəqiq ölçür, real qövs uzunluqları və sahələri daxil olmaqla, və kəmiyyətləri yuvarlaqlaşdırmır. Göstəriş uzunluqları 1/16 düymə, onluq kəsrləri isə iki rəqəmə qədər yuvarlaqlaşdırır. Pul yalnız uzadılmış məbləğlərdə, sentə qədər yuvarlaqlaşdırılır.
