---
title: Miqyası təyin edin
summary: Hər vərəqə hazır və ya məlum ölçüdə kalibrləmə ilə miqyas verin, yoxlayın və miqyası olmayan vərəqlərin niyə cəmlərdən kənarda qaldığını anlayın.
keywords: miqyası aşkar et, mətndən miqyas, bütün vərəqlər, miqyas, kalibrlə, hazır, miqyası yoxla, məlum ölçü, miqyassız, miqyas yoxdur, nisbət, miqyası təyin et
from: 8f0148e6
---

Hər vərəqin öz miqyası var. Siz onu təyin edirsiniz və ya TakeoffCraft-a onu vərəqlərin mətnindən oxutmaq olar (aşağıda) və yoxlamaq olar. Vərəqdə miqyas olana qədər {{ui:Xətti}}, {{ui:Sahə}}, {{ui:Dairə}} və {{ui:Deşik}} həmin vərəqdə ölçməkdən imtina edir. {{ui:Say}} və {{ui:Avtomatik say}} miqyassız işləyir.

Vərəqlər siyahısı hər vərəqin miqyasını və ya **Miqyas yoxdur** göstərir. Açıq vərəqin altındakı zolaq da eyni şeyi deyir.

## Hazır istifadə edin (PDF tam ölçüdə çap olunduqda)

1. Vərəqi açın.
2. {{ui:Miqyas}} qrupunda {{ui:Hazır}} siyahısını açın.
3. Çertyojda çap olunmuş miqyası seçin, məsələn Memarlıq altında `1/8" = 1'-0"`.
   Status paneli yazır: "Bu vərəq üçün miqyas: 1/8" = 1'-0"."
4. Yoxlayın (aşağıda).

Hazır PDF-in üçün nəzərdə tutulduğu real kağız ölçüsü olduğunu fərz edir. Əgər PDF-i "səhifəyə sığdır" ilə yaradıblarsa, ya da yarım ölçülü dəstdirsə, hazır yanlışdır. Əvəzinə kalibrləyin.

Hazırların tam siyahısı [Miqyas hazırları](topic:scale-presets) bölməsindədir.

## Vərəqlərin mətnindən miqyasları oxuyun

Çox çertyojlar miqyasını yazır: başlıq blokunda `SCALE: 1/4" = 1'-0"`, baxışın altında `1:100`. TakeoffCraft onu oxuya və bütün vərəqləri eyni anda təyin edə bilər.

1. {{ui:Hazır}} siyahısını açın və (yuxarıda) **Vərəqlərin mətnindən…** seçin.
2. Siyahı hər vərəqi göstərir: onun indiki miqyası və mətninin nə dediyi — **Deyir 1/4" = 1'-0"**, **Mətnində miqyas yoxdur** və ya **Miqyas yoxdur deyir** (NTS).
3. Miqyası olmayan və birini deyən vərəqlər işarələnir. İstənilən işarəni qoyun və ya çıxarın, sonra {{ui:İşarələnmiş miqyasları təyin edin}} seçin. Bir {{key:Mod+Z}} hamısını geri qaytarır.
4. Hər vərəqdə {{ui:Yoxla}} ilə (aşağıda) bir ölçünü yoxlayın: hazır yalnız PDF tam ölçüdə çap olunduqda düzgündür.

O, memarlıq (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), mühəndislik (`1" = 20'`) və metrik (`1:50`) yazılışlarını oxuyur ki, bunlar [hazırlara](topic:scale-presets) uyğun gəlir. Vərəq birdən çox miqyas yazdıqda (təfərrüatlı kəsikləri olan plan), ən çox yazılanı götürür; SCALE sözündən sonra yazılan ikiqat sayılır. Digərləri qırmızı ilə göstərilir ki, yoxlaya biləsiniz. Skanerlənmiş vərəqdə mətn yoxdur: onun miqyasını əl ilə təyin edin.

## Məlum ölçüdə kalibrləyin

Bu, etibar etdiyiniz çap olunmuş miqyas olmadıqda, dəst yenidən ölçüləndikdə, ya da vərəq "miqyas olmadan" yazır, amma ölçüləri var, istifadə olunur.

1. Vərəqi açın və bildiyiniz uzun ölçüyə yaxınlaşın, məsələn şəbəkə xətləri arasındakı məsafə və ya bütöv bina ölçüsü. Nə qədər uzun olsa, bir o qədər dəqiqdir.
2. {{ui:Miqyas}} qrupunda {{ui:Kalibrlə}} seçin və ya {{key:K}} basın.
3. Ölçünün bir ucuna klikləyin. Dəqiqlik üçün hər ucuna yaxınlaşın; klikləmələr arasında yaxınlaşıb sürüşdürə bilərsiniz.
4. Digər ucuna klikləyin. Xətti 0°, 45° və ya 90°-də saxlamaq üçün {{key:Shift}} basın.
   **Bu vərəqi kalibrlə** dialoqu açılır.
5. **Real məsafə** xanasına real məsafəni yazın, məsələn `24'-6 1/2"`, `24.5` (onluq fut), `30"` və ya `7.5 m`. Bax: [Uzunluq, tarif və faiz daxiletmə](topic:entry-formats).
6. {{ui:Miqyası təyin et}} seçin.
   Status paneli miqyası "1" = (n)'" kimi göstərir və hazıra 0.5% daxilində olduqda hansını uyğun gəldiyini deyir, məsələn "bu, 1/4" = 1'-0" ilə uyğundur (dəqiq miqyas üçün həmin hazırı seçin)".
   TakeoffCraft {{ui:Seç}} alətinə qayıdır.

Kalibrləmə hazıra uyğun gəldikdə, həmin hazırı seçmək klikləmə yerindən asılı olmayaraq dəqiq miqyas verir.

## Miqyası yoxlayın

Yeni miqyası həmişə ikinci ölçüdə yoxlayın.

1. {{ui:Miqyas}} qrupunda {{ui:Yoxla}} seçin və ya {{key:D}} basın.
2. Çertyojda çap olunmuş ölçünün hər iki ucuna klikləyin.
   Status paneli yazır: "Yoxlama: 12'-6"" eyni uzunluq onluq futda və metrdə, yoxlama xətti isə uzunluğu ilə birlikdə vərəqdə qalır.
3. Onu çap olunmuş ölçü ilə müqayisə edin. Fərqlidirsə, daha uzun ölçüdə kalibrləyin.

Yoxlama xəttini silmək üçün {{key:Esc}} basın.

## Miqyası dəyişin

Başqa hazır seçin və ya yenidən kalibrləyin. Vərəqdə artıq ölçülər varsa, TakeoffCraft **Bu vərəqin miqyasını dəyişək?** soruşur və neçə ölçünün yenidən ölçüləcəyini deyir. {{ui:Miqyası dəyiş}} seçin. Vərəqdəki hər kəsik və sahə yeni miqyasda yenidən ölçülür. {{key:Mod+Z}} ilə geri qaytara bilərsiniz.

## Miqyassız vərəqlər niyə sıfır sayılmır

Miqyası olmayan vərəqdəki işarənin real uzunluğu və ya sahəsi yoxdur. TakeoffCraft onu heç vaxt sıfır saymır, çünki bu smetanızı görünməz şəkildə həddindən artıq aşağı salardı. Əvəzində:

- həmin işarələri cəmlərdən kənarda qoyur,
- {{ui:Miqdarlar}}-da elementin yanında "+(n) miqyassız" göstərir,
- cədvəl başlığında "Natamam: (n) işarə miqyası olmayan vərəqlərdədir (cəmlərə daxil deyil)" göstərir,
- sayını ixrac olunan cədvəlin qeyd sütununa yazır.

Bu, miqyası heç vaxt təyin olunmamış layihəni açdıqda baş verə bilər. Vərəqə miqyas verin, işarələr dərhal sayılır. Say işarələri həmişə sayılır; onlar miqyas tələb etmir.

## Məsləhətlər

- Başlamazdan əvvəl ölçəcəyiniz hər vərəqə miqyas təyin edin. Qalanları tapmaq üçün vərəqlər siyahısında **Miqyas yoxdur** axtarın (axtarış qutusu vərəq adlarına baxır, miqyaslara yox).
- Eyni vərəqdəki təfərrüatlar və böyüdülmüş planlar çox vaxt başqa miqyas istifadə edir. TakeoffCraft vərəq üçün bir miqyas saxlayır; bax: [Hələ hazır olmayanlar](topic:not-built-yet).
- Metrik çertyojlar: `1:100` kimi metrik hazır seçin və ya `6000 mm` kimi metrik məsafə ilə kalibrləyin.
