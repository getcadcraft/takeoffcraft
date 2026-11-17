---
title: Hesablamanı 3D-də yoxlayın
summary: Açıq vərəqin divarlarını, plitələrini və saylarını çertyojun üstündə görün, onların ətrafında fırlanın və birinə klikləyərək onun işarəsini seçin.
keywords: png, şəkil, rəsm, ekran görüntüsü, yığ, mərtəbələr, səviyyələr, hündürlük, glb, gltf, 3D ixrac, divar qalınlığı, baza hündürlüyü, açılış, qapı başlığı, 3d, üç ölçülü, yoxla, görünüş, divarlar, divar hündürlüyü, plitə, dərinlik, həcm, fırlanma, model, seçmə, izometrik, perspektiv
from: fb16b4f7
---

3D görünüş yoxlamadır, ikinci çertyoj deyil: vərəqin hesablamasını ekranda vərəqin üstündə qaldırır, belə ki, itkin divar, ikiqat plitə və ya səhv say bir baxışda görünür.

Başlamazdan əvvəl: vərəqin miqyası olmalıdır ([Miqyası təyin edin](topic:set-the-scale)). Hündürlüklər və dərinliklər real feet tələb edir, buna görə miqyası olmayan vərəqdə {{ui:3D}} bunu deyir və düz vərəqdə qalır.

## 3D görünüşü açın

1. Yoxlamaq istədiyiniz vərəqi göstərin.
2. Vərəqin adını və miqyasını göstərən zolaqda {{ui:3D}} seçin və ya {{key:3}} basın.
   İlk dəfə 3D görünüş yüklənməsi bir az vaxt aparır. Vərəq yerdə çəkilir və hesablama hər elementin rəngində onun üstündə durur.
3. Geri qayıtmaq üçün yenidən {{ui:3D}} seçin, {{ui:Vərəqə qayıt}} və ya {{key:3}} basın. Çəkmə alətini (Xətti, Sahə, Say və s.) seçmək də geri qaytarır, çünki işarələr düz vərəqdə çəkilir.

Ekranda vərəqi göstərir; vərəqləri vərəqlər siyahısında və ya {{key:PageDown}} və {{key:PageUp}} ilə dəyişin və 3D görünüş izləyir. Bir neçə mərtəbəni eyni anda görmək üçün onları yığın (aşağıda).

## Nə görürsünüz

| İşarə | 3D-də |
|---|---|
| Xətti xətt, hündürlüyü olan element | Xətt boyunca həmin hündürlükdə divar. Əyri xətlər əyriyə uyğun gedir. |
| Xətti xətt, hündürlüyü olmayan element | Vərəqdə xətt. Onu dayandırmaq üçün elementə **Element** altında hündürlük verin. |
| Sahə, dərinliyi olan element | Həmin dərinlikdə plitə, kəsikləri açıq. |
| Sahə, dərinliyi olmayan element | Nazik 2" lövhə, ki, yenə də görünsün. |
| Say | Hər sayılan nöqtədə kiçik dirək. |

Hündürlük xətti elementin {{ui:Hündürlük}} sahəsi, dərinlik isə sahə elementinin {{ui:Dərinlik}} sahəsidir, **Element** altında (bax: [Həcmlərin hesablanması elementləri yaradın](topic:create-items)). Dəyişdirin və 3D görünüş dərhal yenilənir. Vərəq adının altındakı qeyd vərəqdə nə olduğunu deyir, məsələn "Bu vərəq 3D-də: 2 divar, 1 plitə, 3 say", və neçə xəttin və ya sahənin hündürlüyü və ya dərinliyi yoxdur. Kliklər onun üzərindən görünüşə keçir.

Rəqəmlər 3D-də dəyişmir: divarın sahəsi onun dəqiq uzunluğu ilə hündürlüyünün hasilidir, plitənin həcmi isə xalis sahəsi (kontur çıxılmış kəsiklər, əyrilər dəqiq) ilə dərinliyinin hasilidir. Əyrilər ekranda yalnız qısa düz parçalar kimi çəkilir.

## Ətrafa baxın

| Hərəkət | Nə edir |
|---|---|
| Sürükləyin və ya orta düymə ilə sürükləyin | Hesablamanın ətrafında fırlanın. |
| {{key:Shift}} + sürükləyin və ya sağ düymə ilə sürükləyin | Sürüşdürün. |
| Siçan təkəri | Göstəricidə yaxınlaşdırın və uzaqlaşdırın. |
| Trekpadda iki barmaqla sürüşdürmə | Fırlanma ({{key:Shift}} sürüşdürür). Sıxma miqyası dəyişir. |
| {{ui:İzo}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Arxa}}, {{ui:Sol}}, {{ui:Sağ}}, {{ui:Alt}} | Standart görünüşlər, hesablama üzrə çərçivələnir. 3D görünüş {{ui:İzo}}-da açılır. |
| {{ui:Perspektiv}} | Perspektiv açıq və ya bağlı (bağlı olduqda paralel). |
| {{ui:Tam yaxınlaşdırma}} və ya {{key:F}} | Bütün vərəq. |
| {{ui:Vərəq}} | Yerdəki çertyojun göstərilməsini və ya gizlədilməsini dəyişir. |
| Sağ üstdəki görünüş kubu | Hər hansı üzə, kənara və ya küncə klikləyin ki, oradan baxasınız; sürükləyin ki, fırladasınız; kompas halqasını sürükləyin ki, döndərəsiniz; ev düyməsi {{ui:İzo}}-ya qaytarır. |

Künc görünüş kubunu, kiçik X, Y, Z ox işarəsini və ya heç nə göstərir: {{ui:Parametrlər}} bölməsində, TakeoffCraft sekmesində, **Künc göstəricisi** altında seçin ([TakeoffCraft parametrləri](topic:settings)). Düz vərəqdə künc göstəricisi yoxdur.

:::touch
Bir barmaqla fırlanır; iki barmaqla sıxma miqyası dəyişir və sürüşdürmə. Toxunma seçir.
:::

## Qalınlığı, bazası və açılışları olan divarlar

Hündürlüyü olan xətti element nazik zolaq kimi durur. Onu real divar kimi görmək üçün elementə **3D-də** parametrlərində forma verin:

- **Divar qalınlığı** (8", 0.2 m): divar çəkdiyiniz xətt üzərində mərkəzləşən bərk olur, künclər kəsilmiş.
- **Baza hündürlüyü**: divar döşəmədən bu qədər yuxarıdan başlayır (dam altı, yuxarı şkaf sırası). Sahə elementlərində də var: 9'-0"-də tavan.
- **Açılış başlığı**: çıxılan seqment (qapı, [Xəttin bir hissəsini çıxın](topic:measure-linear#deduct-a-part-of-a-run)) divarı həmin hündürlükdən yuxarıda saxlayır, beləliklə qapı qapı kimi görünür. Olmadan, çıxılan seqment yuxarıya qədər boşluq buraxır.

Bunlar yalnız 3D görünüşü formalaşdırır: kəmiyyətlər (uzunluq, divar sahəsi, xərclər) olduğu kimi qalır.

## Mərtəbələri yığın

1. Hər mərtəbənin PDF-lərini açın.
2. 3D görünüşdə {{ui:Səviyyələr…}} seçin və hər mərtəbənin yüksəkliyini yazın, məsələn yer mərtəbəsi üçün `0`, növbəti üçün `12'`. Boş qoyulan vərəq kənarda qalır.
3. {{ui:Yığ}} seçin. Səviyyəsi olan hər vərəq hesablamanı öz hündürlüyündə göstərir; ekranda olan vərəq öz mərtəbəsinin altında yatır, digərləri konturla göstərilir. Qeyd neçə mərtəbənin yığıldığını deyir.

Vərəqlər səhifədəki yerlərinə görə düzülür, buna görə bu, eyni cür çap olunmuş mərtəbə planları üçün işləyir (eyni vərəq ölçüsü və yer). Səviyyəsi olan, amma miqyası olmayan vərəq buraxılır və qeyd bunu deyir. Tək vərəq üçün {{ui:Yığ}} yenidən seçin. Səviyyələr hesablama ilə saxlanılır.

## 3D görünüşü şəkil kimi saxlayın

3D zolağında {{ui:PNG}} seçin — görünüşün ekrandakı şəkli (`… 3D.png`); {{key:Shift}} + klik {{ui:PNG}} onu iki dəfə böyük edir (`… 3D@2x.png`), çap üçün.

## 3D görünüşü model kimi saxlayın

3D zolağında {{ui:GLB}} seçin. Görünüşün göstərdiyinin `.glb` faylını alırsınız (glTF, binary) — ekranda olan mərtəbə və ya bütün yığılmış mərtəbələr — digər 3D proqramların açdığı: hər işarə üçün bir obyekt, elementin adı ilə, elementin rəngində, metres ilə və Y yuxarı. Vərəqin özü və konturlar buna daxil deyil.

## 3D-dən işarə seçin

Divara, döşəməyə, plitəyə və ya dirəyə klikləyin. Onun işarəsi seçilmiş işarə olur, tam olaraq vərəqdə klik etmiş kimi: **Seçilmiş işarə** altında görünür, elementi cari olur və status paneli onun uzunluğunu və hündürlüyünü, ya da sahəsini, dərinliyini və cubic yards-ını verir. {{key:Shift}} + klik seçimə işarə əlavə edir və ya çıxarır. {{key:Delete}} seçilmiş işarələri silir və {{key:Mod+Z}} onları geri qaytarır; {{key:Esc}} heç birini seçmir. Vərəqə qayıdanda eyni işarələr seçili qalır.

:::tip
Çertyoj mövzuya uyğun gəlir: Model rejimində yerdəki vərəq düz görünüş kimi qaralır.
:::
