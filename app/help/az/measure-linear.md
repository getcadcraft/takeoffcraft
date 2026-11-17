---
title: Xətti uzunluqların ölçülməsi
summary: Divarları, boruları, kənarlıqları və digər uzunluqları xətt kimi alın: düz seqmentlər, qövslər və Shift ilə 45 dərəcəyə tutma.
keywords: xətti, uzunluq, xətt, polixətt, divarlar, lf, xətti fut, qövs, əyri, 45 dərəcə, ortho, tutma, seqmentlər, polylength, çıxılsın, açılış, qapı, boşluq, yaz, yazılmış, koordinatlar, məsafə, birbaşa məsafə, polyar
from: c669deff
---

Xətti element uzunluğu ölçür. Hər xətt nöqtələr zəncirindən ibarətdir: düz seqmentlər, və qövs rejimini aktiv etdiyiniz yerdə qövslər. Elementin istənilən sayda xətti istənilən sayda vərəqdə ola bilər.

Əvvəlcədən: vərəqdə miqyas olmalıdır ([Miqyası təyin edin](topic:set-the-scale)) və xətti elementiniz olmalıdır ([Hesablama elementləri yaradın](topic:create-items)).

Vektor PDF-də kliklərləriniz çertyojun öz xətlərinə tutulur: uclara, orta nöqtələrə və kəsişmələrə ([Çertyojun xəttlərinə tutma](topic:snap-to-the-drawing); {{key:F3}} onu söndürür).

## Xətt çəkin

1. {{ui:Items}} altında xətti elementə klik edin.
2. Alət panelində {{ui:Linear}} seçin və ya {{key:L}} basın.
3. Xəttin başlanğıcına klik edin.
4. Boyunca hər küncə klik edin.
   Status sətri "Uzunluq" (indiyə qədər olan xətt, göstəriciyə qədər) və "seqment" (çəkdiyiniz seqment) göstərir, fut və düymlə.
5. Xətti bitirin: son nöqtəyə ikiqat klik edin, {{key:Enter}} basın və ya sağ klik edin.
   Xətt elementin rəngində çəkilir və seçilmiş nişan olur. {{ui:Items}} siyahısında və {{ui:Quantities}} cədvəlində elementin uzunluğu artır.

{{ui:Linear}} alətinin üzərində qalır, buna görə növbəti xətti dərhal başlaya bilərsiniz. Seçmə alətinə qayıtmaq üçün {{key:Esc}} basın.

Çəkərkən:

- {{key:Backspace}} (və ya {{key:Delete}}) son nöqtəni silir.
- {{key:Esc}} bitməmiş xətti atır.
- Sürüşdürmə vərəqi sürüşdürür, təkər isə nöqtə əlavə etmədən yaxınlaşdırır.

:::mac
Mac trackpad-də sağ klik iki barmaqla klikdir (Trackpad altında, System Settings-də secondary click aktiv edilməlidir). TakeoffCraft yalnız ikinci düyməni oxuyur, buna görə Control-klik sadə klik kimi qəbul oluna və nöqtə əlavə edə bilər. İkiqat klik və ya {{key:Enter}} həmişə bitirir.
:::

:::touch
Toxunma ekranında nöqtə yerləşdirmək üçün toxunun, sürüşdürmək üçün bir barmaqla sürüşdürün və yaxınlaşdırmaq üçün iki barmaqla sıxın. Uzun basma, ikiqat toxunma və ya vərəqin altındakı {{ui:Finish}} paneli ilə bitirin ({{ui:Back}} son nöqtəni geri alır). Bax: [Problemlərin həlli](topic:troubleshooting#touch-screens).
:::

## 45°-lik addımlarla düz xətlər

Nöqtə yerləşdirərkən {{key:Shift}} saxlayın. Son nöqtədən olan seqment ən yaxın 0°, 45°, 90° və ya 135° istiqamətinə tutulur, sürüşdürdüyünüz uzunluğu saxlayaraq. Status sətri xatırladır: "Shift snaps to 45°" (Shift 45°-ə tutur).

Qövs rejimində bu qövsün bitdiyi yerə tətbiq olunur: qövsün akkordu başladığı yerdən 45°-lik addımlarla gedir. Əyrinin üzərində klik etdiyiniz nöqtə heç vaxt tutulmur.

## Qövslər və əyri divarlar

1. Xətti çəkərkən əyrinin başladığı nöqtəni yerləşdirin.
2. Qövs rejimini aktiv edin: alət panelində {{ui:Arc}} seçin və ya {{key:R}} basın. Düymə basılı qalır.
3. Əyrinin üzərində istənilən nöqtəyə, ortasında bir yerə klik edin.
   Status sətri "(arc: click where it ends)" (qövs: bitdiyi yerə klik edin) əlavə edir və önizləmə sizin nöqtənizdən əyilir.
4. Əyrinin bitdiyi yerə klik edin.
   Qövs əlavə olunur. Onun uzunluğu dəqiq qövs uzunluğudur, qısa akkordların zənciri deyil.
5. Növbəti əyrinin üzərindəki nöqtəyə və sonuna klik edərək qövs çəkməyə davam edin, və ya düz seqmentlərə qayıtmaq üçün {{key:R}} yenidən basın.

{{key:Backspace}} və ya {{key:Esc}} əvvəl əyridəki gözləyən nöqtəni atır; adi qaydada nöqtələri silmək üçün yenidən basın.

## Uzunluqları və koordinatları yazın

İlk nöqtədən sonra növbəti nöqtənin harada olacağını klik etmək əvəzinə yaza bilərsiniz. Rəqəm, `@` və ya `#` yazın: status sətrində yazdıqlarınızla {{ui:Type}} qutusu açılır. Nöqtəni yerləşdirmək üçün {{key:Enter}} basın; qutu növbəti üçün açıq qalır.

| Yazı | Növbəti nöqtə gedir |
|---|---|
| `12'6"` | Son nöqtədən 12'-6" məsafədə, göstəricinin istiqamətində (istiqaməti göstərin, sonra uzunluğu yazın) |
| `12'6"<45` | 12'-6" məsafədə 45° bucaqla, ekranın sağından saat əleyhinə sayılır (`<90` yuxarıdır, `<-90` aşağıdır) |
| `@6',-4'` | Son nöqtədən 6' sağa və 4' aşağı |
| `6',4'` (və ya `#6',4'`) | Bu xəttin ilk nöqtəsindən 6' sağa və 4' yuxarı |

Uzunluqlar TakeoffCraft-da hər yerdə olduğu kimi yazılır ([Giriş formatları](topic:entry-formats)): `12'-6 1/2"`, `12.5` (fut), `30"`, `3.2 m`. "Sağ" və "yuxarı" vərəqi gördüyünüz kimi başa düşülür, PDF səhifəsi çevrilsə də.

{{key:Enter}} boş qutuda xətti bitirir, vərəqdəki kimi; {{key:Esc}} qutunu bağlayır və xətti davam etdirir. Yazılmış nöqtələr klikdəki qaydalarla işləyir: çıxılmalar, qövslər və sahənin bağlanması hamısı işləyir. Eyni qutu {{ui:Area}} və {{ui:Cut-out}} rejimlərində də işləyir; dairənin mərkəzindən sonra radiusu qəbul edir.

## Xəttin bir hissəsini çıxın

Qapı və ya vitrin keçən divar xətti düz çəkilə bilər və yalnız divarı saymaq olar: açılış boyunca seqmentlər **çıxılmalardır**. Onlar xətt kimi və nazik çəkilir və hesablanmır.

Çəkərkən:

1. Açılışın başladığı nöqtəni yerləşdirin.
2. Alət panelində {{ui:Deduct}} seçin və ya {{key:E}} basın. Düymə basılı qalır və status sətri növbəti seqmentlərin çıxılma olduğunu deyir.
3. Açılışın bitdiyi yerə klik edin. Seqment xətt ilə çəkilir; status sətrində "Uzunluq" onu çıxır.
4. {{key:E}} yenidən basın və divar boyunca davam edin.

Çəkildikdən sonra: xətti seçin. **Seçilmiş nişan** altında hər seqmentin {{ui:Deduct}} qutusu var: həmin seqmenti çıxmaq üçün işarələyin, yenidən saymaq üçün işarəni silin. Hər dəyişiklik bir geri qaytarma addımıdır.

Xəttin həmişə ən azı bir sayılan seqmenti qalır. Panel **Çıxılmalar** (çıxılan uzunluq) və **Çəkilib** (bütün xətt) göstərir; **Uzunluq**, elementin miqdarı, divarın sahəsi və qiymətlər çıxılmadan uzunluqdan istifadə edir. 3D yoxlama görünüşü divarda boşluq buraxır, işarələnmiş PDF çıxılmaları xətt ilə çəkir və ixrac olunan **Nişanlar** vərəqi onları sadalayır.

Künc köçürülməsi çıxılmaları saxlayır. Nöqtə əlavə etmək və ya silmək (xətti yenidən çəkməklə) çıxılmasız başlayır.

## Xəttin detallarına baxın

{{ui:Select}} ({{key:V}}) seçin və xəttə klik edin. Sağdakı **Seçilmiş nişan** göstərir:

- ona aid olan element (xətti siyahıda başqa xətti elementə seçməklə köçürə bilərsiniz),
- vərəq,
- **Uzunluq** fut və düymlə və LF ilə,
- **Seqmentlər** sayı və elementin hündürlüyü varsa **Divar sahəsi**,
- hər seqmentin uzunluğu, qövslərdən sonra "(arc)" ilə, və onun {{ui:Deduct}} qutusu.

Vərəqdə seçilmiş xəttin hər seqmenti öz uzunluğu ilə etiketlənir.

## Xəttə düzəliş edin

- **Nöqtəni köçürmək**: xətti seçin, sonra onun kvadrat künc tutacaqlarından birini sürüşdürün. Köçürülən seqmenti 45° addımlarla tutmaq üçün {{key:Shift}} saxlayın. Qövs öz bulge-ni saxlayır.
- **Qövsü əymək**: seçilmiş xətt hər qövsün ortasında dairəvi tutacaq göstərir. Onu sürüşdürün: qövs buraxdığınız yerdən keçir, buna görə daha çox, az və ya əks tərəfə əyilir. Onun uçları arasındakı düz xəttə sürüşdürülsə, düz seqmentə çevrilir. {{key:Mod+Z}} onu geri alır ("Bend arc").
- **Xətti silmək**: onu seçin və {{key:Delete}} basın, alət panelində {{ui:More}} menyusunda {{ui:Delete}} seçin, və ya paneldə {{ui:Delete mark}}.
- **Geri qaytar**: {{key:Mod+Z}}; təkrarlamaq üçün {{key:Mod+Y}}.

Xəttin ortasına nöqtə əlavə etmək hələ mümkün deyil. Xətti silin və yenidən çəkin.

## Divar sahəsi

Xətti elementə {{ui:Height}} verin (məsələn `9'-0"`). Onda **Divar sahəsi (A)** = uzunluq × hündürlük, SF-də (metrik elementdə m²) hesabat verir və divar sahəsi cədvəl ixracının qeydlər sütununa düşür. Yığımlarda lövhə, boya və ya izolyasiya üçün istifadə edin: bax [Yığımlar və düsturlar](topic:assemblies).
