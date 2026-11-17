---
title: Torpaq işləri və nöqtə hündürlükləri
summary: Plan üzərində nöqtə hündürlüklərini qeyd edin, səth və kəsim-dolğu hesablamaları üçün onları CivilCraft-a verin və burada sadə qazıntı miqdarlarını götürün.
keywords: torpaq işləri, qazıntı, kəsim, dolğu, kəsim və dolğu, şaquli planlaşdırma, nöqtə hündürlüyü, hündürlüklər, topo, səth, üçbucaqlama, civilcraft, nöqtələr, pnezd, xəndək
from: a898e508
---

TakeoffCraft vərəqdə çəkilmiş olanı ölçür. Torpaq işləri yer səthi tələb edir, ona görə CivilCraft ilə paylaşılır: CivilCraft nöqtələrdən səthlər qurur, onları səviyyələndirir və kəsim, dolğu və daşınma hesablayır.

## Burada sadə qazıntı

Bir dərinliyə qazılmış sahə üçün **dərinliyi** olan sahə elementi kifayətdir: həcm = sahə × dərinlik. Ümumi podratçının [ticarət paketi](topic:trade-packs)ndə kütləvi qazıntı elementi (yataq həcmi, boş həcm və yük maşını səfərləri) və kommunal xəndək elementi (uzunluğa və dərinliyə görə qazıntı, döşəmə və geri doldurma) var.

## Səthə nöqtə hündürlükləri CivilCraft üçün

1. Saytın vərəqinin miqyasını təyin edin.
2. **Say** elementi yaradın, məsələn "Mövcud relyef", və vərəqdə hər nöqtə hündürlüyünə klikləyin.
3. Bir işarəni seçin və Seçilmiş işarə panelində onun {{ui:Hündürlük}} dəyərini yazın: `102.5`, `102'-6"` və ya `31.24 m`. Mənfi və sıfır hündürlüklər məqbuldur.
4. {{ui:İxrac}} menyusunu açın və {{ui:Nöqtə hündürlükləri}} seçin. Açıq vərəqin hər qeyd olunmuş nöqtəsi üçün bir sətir olmaqla, Point, Northing, Easting, Elevation və Description sütunlu nöqtə faylı (`.csv`) alırsınız.
5. Həmin faylı CivilCraft-da açın (bax: [Nöqtələri idxal et](app:civilcraft/import-points)). O, nöqtələrdən səth qurur ([Səth qurun](app:civilcraft/build-surface)); oradan səthləri müqayisə edir və kəsim və dolğu verir ([Həcmlər](app:civilcraft/volumes)).

Northing və easting vərəqin öz koordinatlarıdır: səhifənin küncündən miqyasa görə fut ilə ölçülür. Nöqtələr arasındakı məsafələr və həcmlər düzgündür, lakin bunlar saytınızın geodeziya koordinatları deyil. Lazım olduqda onları CivilCraft-da saytın koordinatlarına köçürün.

:::note
Müxtəlif vərəqlərdəki nöqtələr koordinatları paylaşmır, ona görə ixrac yalnız açıq vərəqi götürür. Hündürlüklər hesablama ilə birlikdə saxlanılır və kopyalama və yapışdırma ilə daşınır.
:::

## CivilCraft-dan kəsim və dolğu

CivilCraft-ın torpaq işləri qiymətləndirə biləcəyiniz iki element kimi geri gəlir:

1. CivilCraft-da platformalarınızı və dəhlizlərinizi səviyyələndirin, sonra **Torpaq işləri** altında {{ui:TakeoffCraft-a göndər}} seçin ([Torpaq işləri həcmləri](app:civilcraft/volumes)). O, miqdarlar faylı (`.quantities.json`) yazır.
2. TakeoffCraft-da onu {{ui:Hesablamanı aç}} ilə açın və ya tətbiqə atın. Hesablamanız açıq qalır: fayl **Torpaq işləri: kəsim** və **Torpaq işləri: dolğu** elementlərini əlavə edir, fut layihəsi üçün kubik yardda (CY), metr layihəsi üçün kubmetrdə (m³) [yazılmış miqdarlar](topic:create-items#typed-quantities-no-drawing) kimi. Bu bir addımdır: {{key:Mod+Z}} onu geri qaytarır.
3. Onların adlarını dəyişin, itki, dərəcə və yığımları istədiyiniz kimi təyin edin.

Layihə dəyişdikdə CivilCraft-dan yenidən göndərin və yeni faylı açın: eyni iki element yeni miqdarları alır. Onların adları, dərəcələri, itkisi və yığımları təyin etdiyiniz kimi qalır. Layihənin vahidi dəyişibsə, status paneli bunu bildirir: dərəcələri yoxlayın. Başqa CivilCraft layihəsindən olan fayl öz iki elementini əlavə edir.

Miqdarlar CivilCraft-ın ölçdüyü yataq həcmləridir (şəbəkə üsulu): çəkilmə və şişmə yoxdur. Onları itki kimi əlavə edin, və ya boş həcm üçün `Q * 1.25` kimi düsturla. Element redaktoru hər birinin haradan və nə vaxt gəldiyini göstərir; smetanın qeyd sütunu da bunu deyir.

:::note
Miqdarlar faylı sadə JSON-dur (`"format": "cadcraft-quantities"`), ona görə skript və ya başqa proqram da belə fayl yaza bilər: tətbiq adı, layihə və açar, ad, vahid və miqdarı olan elementlər.
:::
