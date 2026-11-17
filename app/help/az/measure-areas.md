---
title: Deşiklərlə sahələri ölçmək
summary: Döşəmələri, tavanları və plitələri konturlayın, onlardan deşiklər çıxarın, əyri kənarlar, dairələr və dairəvi deşiklər əlavə edin, sahəni və perimetri oxuyun.
keywords: otağın doldurulması, axıdma ilə doldurma, boya vedrəsi, otağın içinə klik, avtomatik sahə, geri çıxılma, backout, sütun, şaft, bir neçə elementdən çıxılsın, sahə, çoxbucaqlı, kontur, kvadrat fut, sf, deşik, çıxılsın, dairə, dairəvi, qövs, perimetr, döşəmə, tavan, plitə
from: 34648db7
---

Sahə elementi qapalı sahəni ölçür. Hər konturdan deşiklər çıxarıla bilər (şaft, sütun, bağça), kənarları isə düz və ya əyri ola bilər.

Əvvəlcədən: vərəqdə miqyas olmalıdır ([Miqyası təyin edin](topic:set-the-scale)) və sahə elementiniz olmalıdır ([Hesablama elementləri yaradın](topic:create-items)).

## Sahəni konturlayın

1. {{ui:Items}} altında sahə elementinə klik edin.
2. Alət panelində {{ui:Area}} seçin və ya {{key:A}} basın.
3. Otağın və ya plitənin hər küncünə növbə ilə klik edin. 0°, 45° və 90° kənarlar üçün {{key:Shift}} saxlayın.
   Üçüncü nöqtədən etibarən kontur dolur və status sətri "Sahə" və "perimetr" göstərir. İlk nöqtənin ətrafında kiçik halqa görünür.
4. Konturu bağlayın: ilk nöqtəyə (halqasının içində) klik edin, {{key:Enter}} basın, ikiqat klik edin və ya sağ klik edin.
   Sahə elementin rəngində yüngül doldurulur, kvadrat futla etiketlənir və seçilmiş nişan olur.

{{key:Backspace}} son küncü silir; {{key:Esc}} konturu atır.

Özü ilə kəsişən kontur rədd edilir: "Kontur özü ilə kəsişir, ona görə sahəsi səhv olardı. Kəsişmədən yenidən çəkin." Səkkizrəqəm formanı iki sahə kimi çəkin.

## Əyri kənarlar

Konturu çəkərkən qövs rejimini aktiv edin ({{ui:Arc}} və ya {{key:R}}). Bir küncdən sonra əyri boyunca bir nöqtəyə, sonra əyrinin bitdiyi yerə klik edin. Konturu əyri ilə bağlamaq üçün son klik ilk nöqtədə olsun. Sahə və perimetr dəqiq əyridən istifadə edir. Düz kənarlara qayıtmaq üçün {{key:R}} yenidən basın. Sonradan əyrini dəyişmək üçün sahəni seçin və qövsün ortasındakı dairəvi tutacağı sürüşdürün. Bax: [Xətti uzunluqların ölçülməsi](topic:measure-linear#arcs-and-curved-walls).

## Dairə

1. Sahə elementi ilə {{ui:Circle}} seçin və ya {{key:O}} basın.
2. Mərkəzə klik edin.
3. Kənarda istənilən nöqtəyə klik edin.
   Hərəkət edərkən status sətri radiusu və sahəni göstərir. Dairə dəqiq sahə və perimetrlə sahə nişanı kimi əlavə olunur.

## Otağı bir klikdə doldurun

Otaqlar qapalı divarlar kimi çəkilibsə, {{ui:Room}} ({{key:B}}) bir klikdə döşəməni ayırır:

1. Sahə elementi seçin (məsələn, döşəmə örtüyü) və vərəqə miqyas verin.
2. {{ui:Takeoff}} qrupunda {{ui:Room}} seçin və ya {{key:B}} basın.
3. Otağın içinə klik edin, açıq döşəmədə (xəttin və ya yazının üstündə yox).

TakeoffCraft vərəqin xətlərini oxuyur, klik ətrafındakı boşluğu tapır və divarların daxili üzləri boyunca konturlayır, cari elementin sahəsi kimi. Qapı açılışları **4'-0"**-ə qədər qapalı sayılır, buna görə kontur qapı boyunca düz keçir; **Parametrlər › TakeoffCraft › Otaq doldurma açılışları bağlayır** bu eni dəyişir (3'-0" ilə 8'-0" arası). Otağın içindəki otaq adları, mebel və qurğular deşik yaratmır.

Rədd edir və səbəbini deyir, nə vaxt ki:

- klik xətt üzərindədir ("Bu xətt üzərindədir");
- boşluq qapalı deyil: parametrdən geniş açılış doldurmanı vərəqin kənarına qədər aparır. Parametri artırın və ya həmin otağı {{ui:Area}} ilə əl ilə konturlayın;
- boşluq çox kiçikdir (simvol, otaq deyil).

Qapı parametrdən geniş olduqda doldurma növbəti otağa keçir və hər ikisini birlikdə konturlayır: geri qaytarın ({{key:Mod+Z}}), parametri artırın və yenidən klik edin. Konturu sahə kimi yoxlayın: düzəltmək üçün küncləri sürüşdürün. Skan edilmiş vərəq də eyni işləyir, lakin xətləri kifayət qədər tünd olmalıdır; açıq boz xətlər doldurmanı dayandıra bilməz.

## Sahədən deşik çıxarın

1. {{ui:Select}} ({{key:V}}) seçin və sahəyə klik edin. Künclərində kvadrat tutacaqlar görünür.
2. Alət panelində {{ui:Cut-out}} seçin (və ya {{key:X}} basın), və ya **Seçilmiş nişan** altında {{ui:Add a cut-out}} seçin.
3. Deşiyin künclərinə, sahənin içində klik edin. Qövs rejimi burada da işləyir.
4. Onu sahə kimi bağlayın: ilk nöqtəyə klik edin, {{key:Enter}} basın, ikiqat klik və ya sağ klik edin.
   Deşik doldurulmadan qalır və status sətri "Deşik əlavə olundu. Başqa birini çəkin və ya Esc basın." deyir.
5. Eyni sahədə daha çox deşik çəkin, və ya {{key:Esc}} basın.

Dairəvi deşik üçün **Seçilmiş nişan** altında {{ui:Add a round cut-out}} seçin, mərkəzinə, sonra kənarda bir nöqtəyə klik edin.

Deşik sahənin içində tam yerləşməlidir və başqa deşiklə üst-üstə düşməməlidir. Əks halda TakeoffCraft rədd edir: "A cut-out has to sit fully inside the area." (Deşik sahənin içində tam yerləşməlidir.) və ya "Cut-outs cannot overlap each other." (Deşiklər bir-birini üst-üstə sala bilməz.)

Son deşiyi çıxarmaq üçün {{ui:Remove last cut-out}} seçin.

## Geri çıxılmalar: sütunlar, şaftlar və bir neçə elementdən çıxılan açılışlar

Deşik bir sahə nişanına aiddir. **Geri çıxılma** bir dəfə çəkilir və seçdiyiniz elementlər üçün onunla üst-üstə düşən hər sahədən çıxılır: sütunları bir dəfə çəkin, onlar döşəmə örtüyündən, tavandan və plitədən birlikdə çıxılır.

1. Onlar üçün "Sütunlar" kimi sahə elementi yaradın.
2. Onun element parametrlərində **Geri çıxılma: nişanları sahələrini digər elementlərdən çıxarır** qutusunu işarələyin. Digər sahə elementlərinizin siyahısı görünür, hamısı işarəli: geri çıxılmaların toxunmamalı olduqları elementləri çıxarın (məsələn, divarlardakı boya).
3. Sütunları adi kimi {{ui:Area}} və ya {{ui:Circle}} ilə çəkin. Hər biri kəsik xətlə çəkilir.

Həmin vərəqdə işarələnmiş elementin hər sahə nişanı geri çıxılmanın əhatə etdiyi hissəni itirir: içəridə olduqda bütün geri çıxılma, kənarı kəsdikdə yalnız üst-üstə düşən hissə və deşiyin içində heç nə. Seçilmiş sahənin paneli **Geri çıxılmalar** və qalan sahəni göstərir. Elementin miqdarı, onun yığım düsturları, qiymətlər, 3D yoxlama görünüşü və ixrac qalan sahədən istifadə edir; smetanın qeydləri geri çıxılmaların nə qədər çıxdığını göstərir. Geri çıxılma elementinin özü öz sahəsini sayır (qiymətləndirmirsinizsə, qiymətləri sıfırda saxlayın).

Geri çıxılma **qabarıq** olmalıdır: düzbucaqlı, dairə və ya içəriyə küncü olmayan istənilən kontur. TakeoffCraft belə olmayanı çəkməyə icazə vermir; L-formalı şaftı iki geri çıxılma kimi çəkin. Geri çıxılmalarda deşik ola bilməz, və bir-birini üst-üstə salan iki geri çıxılmanın hər ikisi sayılır.

Perimetr (`P`) dəyişmir: geri çıxılmalar yalnız sahəni çıxır.

## Sahəni oxuyun

Sahəni seçin. **Seçilmiş nişan** göstərir:

| Sətir | Mənası |
|---|---|
| Sahə | Xalis sahə: kontur minus deşiklər. Element bunu sayır. |
| Kontur | Kontur daxilindəki ümumi sahə (deşik olduqda göstərilir). |
| Deşiklər | Neçə deşik var və onların ümumi sahəsi. |
| Perimetr | Konturun kənar uzunluğu, **üstəgəl** hər deşiyin kənarları ("deşiklərlə"). |

Perimetr deşik kənarlarını qəsdən daxil edir: deşik ətrafında keçən qəliblər və ya əsas üçün. Yalnız xarici kənar lazımdırsa, həmin elementdə deşik saxlamayın, və ya xarici kənarı xətti uzunluq kimi ölçün.

Elementin **Vahid** parametri ümumi nəticənin necə göstərilməsini təyin edir: SF, SY və ya m². **Seçilmiş nişan** paneli və status sətri həmişə kvadrat futu göstərir.

## Sahəni düzəldin

- **Küncü köçürmək**: sahəni seçin və künc tutacağını sürüşdürün (deşiklərin də tutacaqları var). Yeni forma özü ilə kəsişərsə və ya deşiyi kənara itələyirsə, küncü geri qoyurlar: "The point was put back." (Nöqtə geri qoyuldu.)
- **Başqa elementə köçürmək**: **Seçilmiş nişan** altında **Element** siyahısından başqa sahə elementi seçin.
- **Silmək**: {{key:Delete}}, alət panelinin {{ui:More}} menyusunda {{ui:Delete}}, və ya {{ui:Delete mark}}.

## Həcmlər üçün dərinlik

Sahə elementinə {{ui:Depth}} verin (məsələn, plitə üçün `0'-4"`) və yığım komponentində kub yard almaq üçün `A * H / 27` istifadə edin. Bax: [Yığımlar və düsturlar](topic:assemblies).
