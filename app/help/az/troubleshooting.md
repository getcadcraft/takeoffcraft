---
title: Həll yolları
summary: TakeoffCraft-da qarşılaşa biləcəyiniz mesajlar və gözlənilməz hallar üçün səbəblər və düzəlişlər, tətbiqin göstərdiyi kimi sitat gətirilib.
keywords: problemlər, xətalar, işləmir, düzəliş, kömək, rədd, ölçmür, miqyas yoxdur, işarələr itib, ixrac alınmadı, oflayn, toxunma
from: cd319c9b
---

TakeoffCraft əksər rədd etmələri pəncərənin aşağısındakı status panelində izah edir. Aşağıda mesajı tapın.

## Faylların açılması

| Mesaj və ya əlamət | Səbəb | Düzəliş |
|---|---|---|
| PDF oxuyucu yüklənmədi. Yenidən cəhd etmək üçün səhifəni yeniləyin. | Tətbiqin PDF oxuyucusu yüklənmədi, adətən ona görə ki, siz oflayndasınız və tətbiq heç vaxt oflayn istifadə üçün saxlanılmayıb. | Yenidən qoşulun və səhifəni yeniləyin. Sonra {{ui:Oflayn üçün saxla}} seçin və {{ui:Oflayn hazırdır}} gözləyin; bax: [Oflayn işləmə](common:offline). |
| (name) parolla qorunur. Qorunmayan nüsxəni açın. | PDF-in açılması üçün parol lazımdır. | Qorunmayan nüsxə istəyin və ya etibar etdiyiniz PDF proqramında parolu silin. |
| (name) PDF kimi oxuna bilmədi (…) | Fayl zədələnib və ya əslində PDF deyil. | Yenidən yükləyin və ya onu yaradan proqramdan yenidən saxlayın. |
| (name) artıq açıqdır. | Eyni PDF (eyni məzmun) açıqdır. | Edilməli bir şey yoxdur. |
| TakeoffCraft PDF-ləri və .takeoff.json layihələrini açır. Keçildi: … | Digər fayl növləri atılıb. | Əvvəlcə çertyojları PDF-ə çevirin. |
| Faylları atanda heç nə baş vermir | Fayllar brauzer pəncərəsindən kənarda atılıb, ya da brauzer PDF-i yeni sekmədə açıb. | Birbaşa TakeoffCraft səhifəsinin üzərinə atın; "PDF-ləri və ya .takeoff.json faylını buraxın" çərçivəsi işləyəcəyini göstərir. |
| Böyük dəsti açmaq bir az vaxt aparır | Hər PDF onu eyniləşdirmək üçün tam oxunur. | "Açılır (name)…" mesajı itənə qədər gözləyin. Miniatürlər siz sürüşdürdükcə dolur. |

## Ölçmə

| Mesaj və ya əlamət | Səbəb | Düzəliş |
|---|---|---|
| Əvvəlcə PDF açın. | Heç bir vərəq açıq deyil. | PDF açın. |
| Bu vərəqin hələ miqyası yoxdur, ona görə ölçülə bilmir. Əvvəlcə hazır miqyas seçin və ya kalibrləyin (saymaq miqyassız işləyir). | Xətti, sahə, dairə və deşik alətləri miqyas tələb edir. | [Miqyası təyin edin](topic:set-the-scale). |
| Əvvəlcə xətti element yaradın (Elementlər altında adını verin), sonra vərəqdə klikləyin. | Belə tipli element yoxdur. | Açılmış {{ui:Yeni element}} formasını doldurun və {{ui:Əlavə et}} seçin. |
| Əvvəlcə ölçüləcək elementi seçin (Elementlər paneli). | Cari element silinib. | {{ui:Elementlər}} altında elementi klikləyin. |
| Xəttə ən azı iki nöqtə lazımdır. | Bir kliklədən sonra bitirdiniz. | Ən azı iki nöqtəyə klikləyin. |
| Sahəyə ən azı üç nöqtə lazımdır. | Künc çox azdır. | Ən azı üç küncə klikləyin. |
| Kontur özünü kəsir, ona görə sahə yanlış olardı. Kəsişmədən yenidən çəkin. | Səkkizrəqəm forması. | İki sahə kimi çəkin, ya da konturu sıra ilə kənar boyunca dolanın. |
| Bu nöqtələr heç bir sahəni əhatə etmir. | Bütün nöqtələr bir xəttin üzərindədir. | Məkanı əhatə edən küncləri klikləyin. |
| Əvvəlcə sahə işarəsi seçin (Seç aləti), sonra Deşik seçin və içində deşik çəkin. | {{ui:Deşik}} seçilmiş sahə tələb edir. | {{key:V}} basın, sahəyə klikləyin, sonra {{key:X}}. |
| Deşik tam sahənin içində yerləşməlidir. | Deşik konturu kəsir və ya kənara çıxır. | Deşiyi sahənin içində çəkin. |
| Deşiklər bir-birinin üzərinə düşə bilməz. | İki deşik üst-üstə düşür. | Hər ikisini əhatə edən bir deşik çəkin, ya da onları ayrı saxlayın. |
| … Nöqtə geri qaytarıldı. | Sürüklənən künc konturun özünü kəsməsinə və ya deşiyin kənara çıxmasına səbəb olardı. | Forması düzgün saxlayan yerə sürükləyin. |
| Dairənin kənarında, mərkəzdən uzaqda nöqtəyə klikləyin. | İkinci klik mərkəzə çox yaxın idi. | Daha uzağa klikləyin. |
| Kliklər nöqtə əlavə etmək əvəzinə vərəqi sürüşdürür | Düymə basılı olarkən göstərici bir neçə pikseldən çox hərəkət etdi; bu sürükləmə sayılır. | Hərəkət etmədən klikləyin, xüsusən trekpadda. |
| Shift tutmur | Qövsdə nöqtə qoyursunuz və ya dairə çəkirsiniz. | 45° tutma yalnız düz parçalara aiddir. |
| Nöqtələr yaxındakı xəttə tullanır | {{ui:Tutma}} (çertyoj xəttlərinə tutma) açıqdır. | Xətlər arasında klikləmək üçün yaxınlaşdırın, ya da {{key:F3}} basaraq Tutmanı söndürün. |
| Tutma işarəsi görünmür | Tutma söndürülüb, vərəq skandır, ya da alət tutmur ({{ui:Say}}, {{ui:Avtomatik say}}, yapışdırma). | {{key:F3}} basın; skanda tutmaq üçün xətt yoxdur. |
| Uzunluq yanlışdır | Miqyas yanlışdır (çox vaxt hazır miqyasla ölçüsü dəyişdirilmiş PDF). | Məlum ölçüdə {{ui:Yoxla}} istifadə edin, sonra {{ui:Kalibrlə}}. |

## Miqyas

| Mesaj və ya əlamət | Səbəb | Düzəliş |
|---|---|---|
| Daha uzaq iki nöqtə seçin. | Kalibrləmə nöqtələri demək olar ki, bir-birinin üstündədir. | Daha uzun ölçüdə kalibrləyin. |
| Kalibrləmə dialoqunda mesaj, məsələn "Bu məsafə oxuna bilmədi" | Məsafə TakeoffCraft-ın oxuya bilmədiyi formadadır. | Bax: [Uzunluq, dərəcə və faiz daxil etmə](topic:entry-formats). |
| Bu vərəqin hələ miqyası yoxdur, ona görə yoxlamaq üçün heç nə yoxdur. Kalibrləyin və ya hazır seçin. | Miqyassız vərəqdə {{ui:Yoxla}}. | Əvvəlcə miqyas təyin edin. |
| {{ui:Hazır}} siyahısı boz rəngdədir | Heç bir vərəq açıq deyil. | PDF açın. |

## Kəmiyyətlər və düsturlar

| Mesaj və ya əlamət | Səbəb | Düzəliş |
|---|---|---|
| Natamam: … (cəmdə yoxdur) | Düstur xətası və ya miqyası olmayan vərəqlərdə işarələr. | Bax: [Kəmiyyətləri və smetanı oxuyun](topic:read-quantities#the-incomplete-warning). |
| Elementin yanında +(n) miqyassız | Bəzi işarələri miqyası olmayan vərəqlərdədir. | Həmin vərəqlərə miqyas verin. |
| Düstur xətası: … | Düstur hesablana bilmir. | Bax: [Düstur dili](topic:formulas#errors). |
| Bu elementin işarələri var, ona görə tipi dəyişə bilməz. | İşarələr olduqda tip kilidlənir. | Başqa tipdə yeni element yaradın və işarələri onunla yenidən çəkin. |
| Elementin adı lazımdır. | Ad sahəsi boşaldılıb. | Ad yazın. |
| 12.50 kimi məbləğ yazın. / 10 və ya 7.5 kimi faiz yazın. | Dərəcə və ya tullantı oxuna bilmədi. | Bax: [Uzunluq, dərəcə və faiz daxil etmə](topic:entry-formats). |
| Cəm iki dəfə görünür | Elementin eyni dəyəri daşıyan öz dərəcələri və komponentləri var. | Komponentləri dəyəri daşıdıqda elementin öz dərəcələrini 0 təyin edin. |
| Bu elementin işarələri açılmamış PDF-lərdədir. | Bütün işarələri açmadığınız PDF-lərdə olan elementə klikləmisiniz. | Həmin PDF-ləri açın; adları {{ui:Vərəqlər}} altında siyahılanır. |

## Avtomatik say

| Mesaj və ya əlamət | Səbəb | Düzəliş |
|---|---|---|
| Bu qutu çox kiçikdir. Bütün simvolun ətrafında çəkin. | Qutu çox kiçikdir. | Yaxınlaşdırın və bütün simvolu qutuya alın. |
| Bu qutu demək olar ki, boşdur. Simvolun ətrafında çəkin. | Qutuda yalnız kağız var. | Simvolun özünü qutuya alın. |
| Uyğunluq yoxdur. {{ui:Uyğunluq}} sürgüsünü aşağı salın və ya simvolu daha sıx qutuya alın. | Heç nə kifayət qədər yüksək bal toplamadı. | Simvolu sıx qutuya alın, ya da {{ui:Uyğunluq}} sürgüsünü aşağı sürükləyin. |
| Həddindən artıq uyğunluq, yanlış simvollar daxil olmaqla | Oxşar simvollar həqiqi simvola yaxın bal toplayır. | {{ui:Uyğunluq}} sürgüsünü yuxarı qaldırın və onları rədd etmək üçün yanlış qutulara klikləyin. |
| Digər vərəqlərdə uyğunluq yoxdur | Həmin vərəqlər simvolu başqa ölçüdə və ya 90° addımına uyğun gəlməyən bucaqda çəkir. | Həmin vərəqlərdə orada çəkilmiş qutu ilə axtarın, ya da əllə sayın. |
| (n) vərəq bu simvol ölçüsündə axtarmaq üçün çox böyük idi. | Vərəq iş ölçüsündə çox böyük olardı. | Daha böyük simvolu qutuya alın, ya da həmin vərəqi əllə sayın. |
| Axtarış uğursuz oldu: … | Fon axtarışı dayandı. | Yenidən cəhd edin; təkrarlanırsa səhifəni yeniləyin (əvvəlcə saxlayın). Oflayn rejimdə yalnız tətbiq paneli {{ui:Oflayn hazırdır}} göstərdikdə işləyir. |
| Sürükləmə sürüşdürmək əvəzinə qutu çəkir | {{ui:Avtomatik say}} belə işləyir. | {{key:Space}} tutun və sürükləyin, ya da orta düymə ilə sürükləyin. |

## Saxlama və ixrac

| Mesaj və ya əlamət | Səbəb | Düzəliş |
|---|---|---|
| Hələ ixrac ediləcək heç nə yoxdur: element yaradın və onu ölçün. | Heç bir element yoxdur. | Əvvəlcə element yaradın. |
| Açıq PDF-lərdə hələ heç bir işarə yoxdur. | {{ui:İşarələnmiş PDF}} açıq PDF-lərdə çəkəcək heç nə yoxdur. | İşarəsi olan PDF-ləri açın. |
| Bu PDF parolla qorunur və ya şifrələnib, ona görə işarələnmiş nüsxə yazıla bilmir. … | PDF şifrələnib. | Əvəzinə {{ui:XLSX}} ixrac edin, ya da PDF-in şifrələnməmiş nüsxəsindən istifadə edin (bu, başqa fayl olduğu üçün öz həcmlərinin hesablanmasını tələb edir). |
| İşarələnmiş PDF yazıla bilmədi: … | Çox vaxt: oflayn, tətbiq oflayn istifadə üçün saxlanılmayıb, ona görə PDF yazıcısı yoxdur. | Onlayn olun və yenidən {{ui:İşarələnmiş PDF}} seçin. Qarşısını almaq üçün {{ui:Oflayn üçün saxla}} seçin və {{ui:Oflayn hazırdır}} gözləyin. |
| Yalnız bir işarələnmiş PDF yükləndi | Brauzer bir neçə yükləməni eyni anda blokladı. | Bu sayt üçün bir neçə yükləməyə icazə verin və yenidən ixrac edin. |
| (file) TakeoffCraft layihəsi deyil (düzgün JSON deyil). / Bu TakeoffCraft layihə faylı deyil. | Səhv fayl və ya zədələnmiş fayl. | `.takeoff.json` faylını seçin. |
| Bu layihə daha yeni TakeoffCraft ilə saxlanılıb. Onu orada açın. | Fayl daha yeni versiyadan gəlir. | Onu daha yeni versiyada açın. |
| (n) işarə zədələndi və kənarda qaldı. | Faylın bir hissəsi zədələnib və ya əllə redaktə olunub. | Qalanı açıldı. Çatışmayan işarələri yenidən çəkin, ya da köhnə nüsxəni açın. |
| Yenidən açdıqdan sonra işarələr itib | PDF-lər açıq deyil, ya da onlardan biri dəyişib. | Bax: [Həcmlərin hesablanmasını saxlayın və yenidən açın](topic:save-and-reopen#when-a-pdf-has-changed). |
| Brauzer "Saytdan çıxılsın?" soruşur | Saxlanmamış dəyişikliklər var. | Qalın və {{key:Mod+S}} ilə saxlayın. |

## Düymələr və siçan

| Əlamət | Səbəb | Düzəliş |
|---|---|---|
| Hərf düymələri heç nə etmir | Kursor sahədədir (axtarış, element redaktoru, cədvəl). | Vərəqə klikləyin, ya da {{key:Tab}} ilə sahədən çıxın. |
| Təkər sürüşdürmək əvəzinə yaxınlaşdırır | Təkər həmişə vərəqi yaxınlaşdırır. | Sürüşdürmək üçün sürükləyin. |
| Bütün səhifə böyüdü və ya kiçildi | Brauzer miqyası ({{key:Mod+Plus}} və ya {{key:Mod+Minus}}). | {{key:Mod+0}} basın. Vərəqi təkərlə və ya təmiz {{key:Plus}} və {{key:Minus}} ilə yaxınlaşdırın. |
| Backspace basanda işarə yox oldu | Çəkmədiyiniz zaman Backspace seçilmiş işarəni silir. | {{key:Mod+Z}} onu geri qaytarır. |
| Mac-də sağ klik bitirmir | Control-klik adi klik kimi qəbul olunur. | İkinci klik aktiv olduqda iki barmaqla klikləyin, ya da {{key:Enter}} basın. |

## Toxunma ekranları

Toxunma ekranında:

- **Toxunma** nöqtə qoyur (ya da {{ui:Seç}} ilə işarə seçir). Bir barmaqla sürükləmə sürüşdürür.
- **İki barmaq** aralarındakı nöqtə ətrafında yaxınlaşdırmaq üçün sıxılır və birlikdə hərəkət etdikdə sürüşdürür. İkinci barmağı qoymaq birincinin başladığını ləğv edir, ona görə sıxma heç vaxt nöqtə qoymur.
- Xətti və ya konturu **uzun basmaqla** (sağ klik), **ikiqat toxunmaqla** və ya vərəqin altındakı paneldə {{ui:Bitir}} ilə **bitirin**. Eyni panel də {{ui:Arxa}} (son nöqtəni geri götürür) və {{ui:Ləğv et}} düymələrinə malikdir. Sahələr də ilk nöqtəyə toxunmaqla bağlanır.
- Barmaqlar üçün hədəflər böyükdür: nöqtələr daha uzaqdan tutulur, yaxınlaşır və seçilir, künc tutacaqları daha böyükdür.

Uzunluqları yazmaq üçün klaviatura lazımdır; ekran klaviaturası {{ui:Yaz}} qutusu aktiv olduqda işləyir.

Planşetdə klaviatura və siçan və ya trekpad həcmlərin hesablanmasını xeyli asanlaşdırır.

## Oflayn işləmə

| Düymə və ya əlamət | Səbəb | Düzəliş |
|---|---|---|
| {{ui:Saxlamaq alınmadı}} | Oflayn istifadə üçün saxlanılarkən tətbiqin bəzi faylları yüklənmədi. | Bağlantınızı yoxlayın və düyməni yenidən seçin. |
| {{ui:Oflayn mövcud deyil}} | Məxfi pəncərələr və bəzi idarə olunan kompüterlər oflayn nüsxələri bloklayır. | Adi pəncərədən və ya başqa brauzerdən istifadə edin. |
| "Saxlanılır…" heç başlamır | Oflaynsınız; saxlamaq bağlantı tələb edir. | Onlayn olarkən saxlayın. |
| Yeniləmədən sonra tətbiq köhnədir | Oflayn nüsxə əvvəlki gündəndir. | Onlayn olarkən {{ui:Oflayn hazırdır}} seçin, sonra {{ui:Yenidən saxla (ən yeni versiyanı al)}}. |
| Yeri geri istəyirsiniz | Oflayn nüsxə təxminən 6 MB-dır. | {{ui:Oflayn hazırdır}} seçin, sonra {{ui:Oflayn nüsxəni sil}}. |

Bax: [Oflayn işləmə](common:offline).

## Hələ də problem var

Tətbiq cavab verməyi dayandırarsa səhifəni yeniləyin. Saxlamasanız, yeniləmədə həcmlərin hesablanması itir, ona görə mümkünsə əvvəlcə {{key:Mod+S}} ilə saxlayın. Brauzer sualları üçün bax: [Brauzerlər və kompüterlər](common:browsers).
