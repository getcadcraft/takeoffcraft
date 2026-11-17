---
title: DWG və ya DXF çertyojunu açın
summary: DWG və ya DXF faylını vərəqlər kimi açın (model fəzası və hər tərtibat), çertyojun verdiyi miqyasla başlayın, qatlarını göstərin və ya gizlədin, əlaqəli çertyojları gətirin.
keywords: dwg, dxf, cad, çertyoj, çertyoj açmaq, tərtibatlar, model fəzası, kağız fəzası, vərəqlər, vahidlər, insunits, görünüş pəncərəsinin miqyası, xref, əlaqəli çertyoj, qatlar, dondurulmuş, PDF-siz, çap etmədən
from: d8c3f504
---

TakeoffCraft DWG və ya DXF çertyojunu PDF kimi açır: onu əvvəlcə PDF-ə çap etməyə ehtiyac yoxdur. Çertyojun özündən saymaq dəqiqdir, çünki çertyoj hər obyektin nə olduğunu bilir. Bax: [Çertyojdan say](topic:count-from-a-drawing).

## Çertyoju açın

1. **Fayl** qrupunda {{ui:Planları aç}} seçin və ya {{key:Mod+O}} basın.
2. DWG və ya DXF faylını seçin. Bir neçəsini, PDF-lərlə birlikdə də seçə bilərsiniz.
3. **Aç** seçin.

Çertyoj fayllarını da PDF kimi TakeoffCraft-a buraxa bilərsiniz. Heç nə yüklənmir: brauzer faylı kompüterinizdə oxuyur.

TakeoffCraft AutoCAD 2000-dən 2018-ə qədər DWG və R12-dən 2018-ə qədər ASCII DXF oxuyur. Binar DXF-i rədd edir (onu ASCII və ya DWG kimi saxlayın), nə DWG, nə də DXF olan faylı da rədd edir və səbəbini bildirir. Zədələnmiş fayl oxuna bilən hissəsi ilə açılır və bunu mesaj bildirir; onun sayları natamam ola bilər.

## Vərəqlər

- **Model** çertyojun model fəzasıdır.
- **Hər tərtibat** (kağız fəzası sekmesi) sekmə adı ilə, sekmə sırası ilə adlanan bir vərəqdir. Tərtibat modeli öz görünüş pəncərələri vasitəsilə, çap olunduğu kimi göstərir.

Yaxınlaşdırma, sürüşdürmə, çertyojun öz xətlərinə yapışma, işarələr, qeydlər, {{ui:Kalibrlə}} və digərləri PDF-dəki kimi işləyir. Çertyojun vərəqləri hesablamada faylın adı və məzmununun barmaq izi ilə, PDF kimi, saxlanır: eyni faylı yenidən açın, işarələr öz vərəqlərindədir.

## Miqyas

Vərəq çertyojun verdiyi miqyasla başlayır:

- **Tərtibat** öz ən böyük görünüş pəncərəsinin miqyasını götürür. 1/2" = 1'-0" kimi miqyas hansı hazır miqyas olduğu adla göstərilir; hər hansı digəri "Çertyojun görünüş pəncərəsindən: 1" = 2.5'"" kimi göstərilir. Əgər tərtibatın görünüş pəncərələri başqa miqyaslardadırsa, ən böyüyü vərəqin miqyasını təyin edir: qalanlarını {{ui:Yoxla}} ilə yoxlayın.
- **Model** çertyojun vahidlərini (düym, millimetr, fut…) miqyas kimi götürür: "Çertyoj vahidləri (düym)".
- **Vahidsiz çertyoj** (çertyoj heç vaxt vahidin düym və ya millimetr olduğunu bildirmir) miqyassızdır: vərəqdə "Miqyas yoxdur" yazılır və orada ölçmə rədd olunur, miqyası olmayan PDF-də olduğu kimi. Saymaq miqyas tələb etmir. Ona miqyas vermək üçün {{ui:Kalibrlə}} istifadə edin.

{{ui:Kalibrlə}}, {{ui:Yoxla}} və {{ui:Hazır}} siyahısı miqyası istənilən vaxt dəyişir və çertyojunkundan üstün gəlir. Hazır siyahısı Modeldə sönüqdür, çünki kağız ölçüsü yoxdur.

## Qatlar

Vərəq zolağında {{ui:Qatlar}} çertyojun qatlarını, hər birində bu vərəqdə neçə obyekt olduğu ilə sadalayır. Faylda söndürülmüş və ya dondurulmuş qatlar gizli başlayır. Qatı gizlətmək üçün qutunu işarəsiz qoyun, gizli qatı göstərmək üçün işarələyin: vərəq yenidən çəkilir, gizli olanlar saydan və {{ui:Çertyojdan ölçü}} üçün təklif olunan obyektlərdən kənarda qalır, gizli qatları da saymağı xahiş etməsəniz. {{ui:Hamısını göstər}} bütün qatları göstərir; {{ui:Faylın qatlarına qayıt}} dəyişikliklərinizi geri alır. Qat seçimləri bu sessiyaya aiddir, hesablama faylına yox.

## Əlaqəli çertyojlar (xref-lər)

Başqa çertyojları əlaqələndirən çertyoj onları yerləşdirildikləri yerdə göstərir. TakeoffCraft əlaqəli çertyojları **açıq fayllar** arasında fayl adına görə tapır: ana çertyojunu və əlaqəli çertyojunu birlikdə (ya da bir-birinin ardınca) açın. Bu vaxta qədər status zolağı neçə əlaqəli çertyojun tapılmadığını, onların çəkdiklərinin itdiyini bildirir və saylar bunu göstərir.

## Məhdudiyyətlər

- TakeoffCraft-ın oxuya və ya yerləşdirə bilmədiyi obyektlər (proxy obyektlər, naməlum siniflər) say pəncərəsində növünə görə sadalanır; heç bir söz demədən heç vaxt atılmır.
- Çox böyük çertyojlar hissə-hissə çəkilir və saylar bir həddə çatanda dayanır və bunu bildirir. Belə çertyojun PDF çapını açın.
- Çertyoj qara və öz rənglərində, ağ kağız üçün tündləşdirilmiş şəkildə çəkilir. Çap üslub cədvəlləri və qələm təyinatları tətbiq olunmur.
