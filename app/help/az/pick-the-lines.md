---
title: PDF-in xətlərini seçin
summary: Vektor PDF-in xəttinə klik edərək onun bütün birləşmiş yolunu ölçün, ya da bağlı konturun içinə klik edərək sahəsini alın; boşluq tolerantlığı göstərilir və hər seqment üçün bir geri alma var.
keywords: yol, seçmə, xətlər, birləşmiş, bütün xətt, izləmə, kontur, perimetr, boşluq, tolerantlıq, körpü, seqmentlər, tab, vektor, xətlərdən sahə, p
from: c22526ae
---

Vektor PDF-də divarlar və kənarlar həqiqi xəttdir. {{ui:Yol}} ({{key:P}}) onları çəkildiyi kimi götürür: xəttə bir klik ona birləşmiş hər şeyi, başdan sona, ölçür, ona görə divarı küncləri klik etmədən izləmirsiniz. Vərəqin miqyası olmalıdır. Skan edilmiş səhifənin seçiləcək xətləri yoxdur; orada [Xətti](topic:measure-linear) və ya [Sahə](topic:measure-areas) istifadə edin.

## Yol və ya kontur seçin

1. {{ui:Yol}} seçin. Göstərici altındakı xətt konturlanır, digər mümkün yollar isə incə göstərilir.
2. Xəttə klik edin: bütün birləşmiş yol seçilir. Alətlər zolağının altındakı zolaq seqmentləri, uzunluğu, boşluq tolerantlığını və neçə boşluğun körpülənməsini göstərir. Başladığı yerə qayıdan yol bağlıdır və perimetrini də bildirir.
3. Və ya heç bir xəttdən uzaqda, bağlı konturun içinə klik edin: həmin nöqtə ətrafındakı kontur sahə kimi seçilir. Ən kiçiyi birinci gəlir; {{key:Tab}} növbəti böyük konturu sınayır.
4. İşarələri əlavə etmək üçün {{key:Enter}} (ya da sağ klik, ya da ikiqat klik) basın. Seçilmiş yol **xətti** elementin işarəsinə, kontur **sahə** elementinin işarəsinə çevrilir: aktiv element bu növdədirsə o, əks halda həmin növdə ən yeni element. Heç biri yoxdursa, yeni element formu açılır və siz yenidən {{key:Enter}} basana qədər heç nə əlavə olunmur. Seçilmiş hər şey bir geri alma addımında əlavə olunur.

## Boşluq tolerantlığı

Çertyojçular xətlərin birləşməli olduğu yerdə kiçik boşluqlar buraxırlar. İki xəttin uclarının məsafəsi **boşluq tolerantlığından** az olduqda onlar birləşir. Başlanğıc vərəqdə 1.5 nöqtədir (vərəqin miqyasında futla və düymlə göstərilir) və həmin genişlikdə nöqtəli halqa göstəricini izləyir və altındakı yolun hər ucunda durur. Körpülənmiş hər boşluq seçilmiş yolda narıncı rənglə halqalanır, zolaq onları sayır.

{{key:]}} tolerantlığı genişləndirir, {{key:[}} daraldır. Seçilmiş yol yeni tolerantlıqla dərhal yenidən birləşir. Qovşaqda yol ən az bükülən istiqamətdə düz davam edir və budağı buraxır.

## Düymələr

| Düymə və ya hərəkət | Nə edir |
|---|---|
| Klik | Göstərici altındakı yolu, ya da onun ətrafındakı konturu seçir. |
| {{key:Shift}} + klik | Seçilmişə başqa yol və ya kontur əlavə edir. |
| {{key:Tab}} | Göstərici altındakı növbəti yolu, ya da növbəti böyük konturu sınayır. |
| {{key:Backspace}} və ya {{key:Mod+Z}} | Son seçilmiş yolun son seqmentini çıxarır, hər dəfə bir seqment. Seqmenti qalmayan yol silinir. Heç nə seçilməyibsə, {{key:Mod+Z}} adi geri alma əmridir. |
| {{key:[}} və {{key:]}} | Daha dar və daha geniş boşluq tolerantlığı. |
| {{key:Enter}} | İşarələri əlavə edir. |
| {{key:Esc}} | Seçilmişi təmizləyir. |

## Yaxşı bilmək üçün

- Çertyojdakı əyri qısa düz parçaların zənciridir, ona görə onun uzunluğu həqiqi qövsdən bir az azdır. Dəqiq qövs üçün çertyojun öz faylını ölçün ([Çertyojdan ölçün](topic:measure-from-a-drawing)).
- Körpülənmiş boşluq onun üzərindən düz bir sıçrayış sayılır, ona görə bağlı konturun perimetri də onu daxil edir.
- Yalnız səhifənin öz yollarındakı xətlər və doldurmalar xəttdir. Hərflər kimi çəkilmiş mətn və şəkillər deyil.
