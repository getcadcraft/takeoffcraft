---
title: Klaviatura və siçan
summary: TakeoffCraft-da hər düymə, siçan, trackpad və toxunma əməliyyatı, qruplaşdırılmış şəkildə və platforma fərqləri ilə.
keywords: düymələr, qısayollar, isti düymələr, klaviatura, siçan, trackpad, toxunma, sürüşdür, miqyas, təkər, sağ klik, ikiqat klik, boşluq, shift, kopyala, yapışdır, kəs, dublikat, hamısını seç
from: 6f2c441d
---

Göstərici səhifənin istənilən yerində olduqda və siz sahəyə yazmadıqda hərf düymələri işləyir. Dialoq açıq olduqda onun öz düymələri tətbiq olunur. Hərflər {{key:Shift}} ilə və ya onsuz işləyir.

## Alətlər

| Düymə | Alət |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (bir klik ilə otağı doldurun) |
| {{key:R}} | {{ui:Arc}} aktiv və ya deaktiv (Xətti, Sahə və Deşikdə) |
| {{key:E}} | {{ui:Deduct}} aktiv və ya deaktiv: xəttin növbəti seqmentləri çəkilir, lakin hesablanmır |
| Çəkərkən rəqəm, `@` və ya `#` | {{ui:Type}} qutusunu açır: uzunluq və ya koordinat yazın, {{key:Enter}} nöqtəni yerləşdirir ([Xətti uzunluqların ölçülməsi](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (əvvəlcə sahəni seçin) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | Miqyası {{ui:Check}} |

## Çəkərkən

| Düymə və ya hərəkət | Nə edir |
|---|---|
| Klik | Nöqtə yerləşdirir (Say ilə nöqtə). |
| {{key:P}} | Yol: PDF xəttinin bütün birləşmiş yolunu və ya klikin ətrafındakı konturu seçin ([PDF-in xətlərinin seçilməsi](topic:pick-the-lines)). |
| {{key:F3}} | Çertyojun xəttlərinə tutmanı aktiv və ya deaktiv edir ([Çertyojun xəttlərinə tutma](topic:snap-to-the-drawing)). |
| Klik zamanı saxlanılan {{key:Shift}} | Seqmenti son nöqtədən 0°, 45°, 90° və ya 135°-ə tutur. Qövs nöqtələri və dairələr üçün deyil. |
| İkiqat klik | Xətti bitirir və ya sahəni və ya deşiyi bağlayır. |
| {{key:Enter}} | Xətti bitirir və ya sahəni və ya deşiyi bağlayır. |
| Sağ klik (yerindən tərpətmədən) | Xətti bitirir və ya sahəni və ya deşiyi bağlayır. |
| İlk nöqtəyə klik | Sahəni və ya deşiyi bağlayır (üçüncü nöqtədən etibarən). |
| {{key:Backspace}} və ya {{key:Delete}} | Son nöqtəni silir (əvvəl gözləyən qövs nöqtəsini). |
| {{key:Esc}} | Gözləyən qövs nöqtəsini atır; sonra tamamlanmamış nişanı ləğv edir; sonra {{ui:Select}} alətinə qayıdır. |

## Seçmə və redaktə

| Düymə və ya hərəkət | Nə edir |
|---|---|
| Nişana klik ({{ui:Select}} aləti) | Onu seçir və elementini cari edir. |
| {{key:Shift}} + nişana klik | Seçimə əlavə edir və ya seçimdən çıxarır. |
| {{key:Mod+A}} | Açıq vərəqdəki hər nişanı seçir. |
| Künc tutacağını sürüşdürün | Həmin nöqtəni köçürür ({{key:Shift}} 45°-ə tutur). Bir nişan seçildikdə işləyir. |
| {{key:Delete}} və ya {{key:Backspace}} | Seçilmiş nişanları silir (çəkmədiyiniz zaman). |
| {{key:Esc}} | Heç nəyi seçmir: seçimi və yoxlama xəttini təmizləyir. |
| {{key:Mod+Z}} | Geri qaytarır. |
| {{key:Mod+Y}} və ya {{key:Mod+Shift+Z}} | Təkrarlayır. |

## Kopyalama və yapışdırma

| Düymə | Nə edir |
|---|---|
| {{key:Mod+C}} | Seçilmiş nişanları elementləri ilə birlikdə kopyalayır. |
| {{key:Mod+X}} | Kəsir: seçilmiş nişanları kopyalayır, sonra silir. |
| {{key:Mod+V}} | Yapışdırır: nüsxə göstərici ilə gedir; yerini klik edin. |
| {{key:Mod+Shift+V}} | Yerində yapışdırır: açıq vərəqdə eyni yerə. |
| {{key:Mod+D}} | Seçilmiş nişanların dublikatını yaradır: nüsxə göstərici ilə gedir; yerini klik edin. |
| {{key:Esc}} | Heç nəyi qoymur: göstəricidə olan yapışdırma və ya dublikatı ləğv edir. |

Hərflər tək başına da alət seçir ({{key:C}} {{ui:Count}}, {{key:D}} {{ui:Check}}, {{key:X}} {{ui:Cut-out}}, {{key:V}} {{ui:Select}}, {{key:A}} {{ui:Area}} alətləridir); yalnız {{key:Mod}} ilə birlikdə kopyalayır və yapışdırır. Mətn sahəsində bu düymələr adi kimi mətni kopyalayır və yapışdırır. Bax: [Nişanları kopyalayın, yapışdırın və dublikat yaradın](topic:copy-paste).

:::warning
{{key:Backspace}} siz çəkmədiyiniz zaman seçilmiş nişanı silir. Bu təsadüfən baş verərsə, {{key:Mod+Z}} onu geri qaytarır.
:::

## Fayllar

| Düymə | Nə edir |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Bu iki düymə sahəyə yazarkən də işləyir.

## Görünüş və vərəqlər

| Düymə və ya hərəkət | Nə edir |
|---|---|
| Siçan təkəri | Göstərici yerində yaxınlaşdırır və uzaqlaşdırır. |
| Sürüşdürmə (sol, orta və ya sağ düymə) | Sürüşdürür. {{ui:Auto count}} rejimində sol sürüşdürmə axtarış qutusunu çəkir. |
| {{key:Space}} saxlanılır + sürüşdürmə | Hər alətdə sürüşdürür. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} və ya {{key:=}} | Görünüşün ortasında yaxınlaşdırır. |
| {{key:Minus}} | Görünüşün ortasında uzaqlaşdırır. |
| {{key:PageDown}} / {{key:PageUp}} | Vərəqlər siyahısında növbəti və ya əvvəlki vərəq. |
| {{key:Ctrl+Shift+F}} | Tam ekran rejimləri arasında keçid (hər platformada Control, Mac-da da). |
| {{key:F1}} | Bu kömək panelini yan tərəfdə açır və ya bağlayır. |
| {{key:3}} | Vərəqin 3D yoxlama görünüşü, aktiv və ya deaktiv. |

## 3D görünüş

| Düymə və ya hərəkət | Nə edir |
|---|---|
| Sürüşdürün, və ya orta düymə ilə sürüşdürün | Fırladır. |
| {{key:Shift}} + sürüşdürmə, və ya sağ düymə ilə sürüşdürmə | Sürüşdürür. |
| Siçan təkəri | Göstərici yerində yaxınlaşdırır. Trackpad-də iki barmaqla sürüşdürmə fırladır, sıxma isə yaxınlaşdırır. |
| Klik | Göstərici altındakı nişanı seçir ({{key:Shift}} + klik əlavə edir və ya çıxarır). |
| {{key:F}} və ya {{key:W}} | Hüdudlara sığdırır. |
| {{key:3}} | Düz vərəqə qayıdır. |

Bax: [Hesablamanı 3D-də yoxlayın](topic:check-in-3d).

## Avtomatik say

| Düymə və ya hərəkət | Nə edir |
|---|---|
| Qutu çəkin | Axtarılacaq simvolu qutuya alır (axtarışı başladır). |
| Uyğunluq qutusuna klik edin | Onu rədd edir və ya bərpa edir. |
| {{key:Esc}} | İşləyən axtarışı ləğv edir və ya nəzərdən keçirməni atır. |

## Kömək

| Düymə | Nə edir |
|---|---|
| {{key:F1}} | Kömək panelini açır və ya bağlayır (həmçinin tətbiq paneli düyməsindəki {{ui:Help}}). Hər alətdə işləyir, sahəyə yazarkən də. |
| {{key:Esc}} | Kömək panelini bağlayır. Onun axtarış qutusunda birinci {{key:Esc}} axtarışı təmizləyir. Panel açıq olduqda, vərəqə kliklədikdən sonra basılan {{key:Esc}} əvvəl paneli bağlayır; TakeoffCraft-da ləğv etmək üçün yenidən basın. |

:::mac
Bir çox Mac klaviaturasında yuxarı sıra parlaqlığı və səsi idarə edir. {{key:F1}} ilə birlikdə fn basın, və ya System Settings-də, Keyboard altında "Use F1, F2, etc. keys as standard function keys" seçimini aktiv edin.
:::

## Dialoqlar və sahələr

| Düymə | Nə edir |
|---|---|
| {{key:Enter}} | Sahədə: dəyəri tətbiq edir. Kalibrləmə dialoqunda: {{ui:Set the scale}}. |
| {{key:Esc}} | Dialoqu bağlayır ({{ui:Cancel}} kimi); {{ui:New item}} formasını bağlayır. |
| {{key:Tab}} | Növbəti sahəyə keçir. |

## Platforma qeydləri

:::mac
- {{key:Mod}} Command düymədir: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Tam ekran istisnadır: Control+Shift+F.
- Trackpad-də sağ klik iki barmaqla kliklədir, əgər System Settings-də, Trackpad altında secondary click aktiv edilibsə. TakeoffCraft yalnız ikinci düyməni oxuyur; Control-klik sadə klik kimi qəbul oluna və nöqtə əlavə edə bilər.
- Trackpad-də iki barmaqla sürüşdürmə vərəqi yaxınlaşdırır (sürüşdürmür). Sürüşdürmək üçün basıb sürüşdürün, və ya {{key:Space}} saxlayıb sürüşdürün.
- Page Up və Page Down olmayan klaviaturalarda onlar fn ilə yuxarı və aşağı oxlardır.
- {{key:Backspace}} delete yazılmış düymədir.
:::

:::windows
- {{key:Mod}} Ctrl-dir: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Laptop touchpad-ində iki barmaqla sürüşdürmə vərəqi yaxınlaşdırır. Sürüşdürmək üçün basıb sürüşdürün.
:::

:::linux
- {{key:Mod}} Ctrl-dir. Bəzi masaüstlərində öz Ctrl+Alt və ya Super qısayolları var; TakeoffCraft onlardan heç birini istifadə etmir.
- Touchpad-də iki barmaqla sürüşdürmə vərəqi yaxınlaşdırır. Sürüşdürmək üçün basıb sürüşdürün.
:::

:::touch
TakeoffCraft toxunmanı tək göstərici kimi oxuyur:

- Toxunma nöqtə yerləşdirir, nişanı seçir və ya say nöqtəsi əlavə edir.
- Bir barmaqla sürüşdürmə vərəqi sürüşdürür ({{ui:Auto count}} rejimində axtarış qutusunu çəkir).
- Sıxışdırıb yaxınlaşdırma hələ dəstəklənmir. {{ui:Fit page}} və {{ui:Fit width}} istifadə edin, və ya klaviaturada {{key:Plus}} və {{key:Minus}}.
- Sahəni bağlamaq üçün onun ilk nöqtəsinə toxunun. Xətti bitirmək üçün brauzerinizin ikiqat toxunmanı ikiqat klikə çevirdiyi yerdə ikiqat toxunun, və ya klaviaturada {{key:Enter}} basın.
- Toxunana qədər canlı uzunluq göstəricisi yoxdur, çünki göstəricinin üzərinə gəlmə yoxdur.

Hesablama üçün bu gün daha yaxşı yol klaviatura və siçan və ya trackpad-dir.
:::

## Brauzerin saxladığı düymələr

Brauzerlər bəzi qısayolları özü üçün saxlayır və səhifə onlardan istifadə edə bilməz: sekmənin bağlanması ({{key:Mod+W}}), yeni sekmə və ya pəncərə ({{key:Mod+T}}, {{key:Mod+N}}) və brauzer miqyası ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Buna görə TakeoffCraft vərəqi təkərlə və tək {{key:Plus}} və {{key:Minus}} düymələri ilə yaxınlaşdırır. {{key:Mod+Plus}} səhvən basılsa, bütün səhifə böyüyür; {{key:Mod+0}} onu geri qaytarır. Bax: [Düymələr, siçanlar və trackpad-lər](common:keys).

## Köçür əmri haradadır

Köçür əmri yoxdur: say nöqtəsini seçib sürüşdürün, və ya sahəni və ya xətti seçib künc tutacaqlarını sürüşdürün.
