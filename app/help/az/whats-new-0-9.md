---
title: Yeniliklər 0.9-da (əvvəlki)
summary: Uzunluqların metrlə, santimetrlə və ya millimetrlə oxunması, m2 ilə metrik sahələr və divar sahəsi, 1:75 və 1:150 miqyas hazır şablonları, çəki və temperatur vahidləri, on üsulla Qövs, canlı kursorlar, İzlə və iştirakçılar siyahısı.
keywords: yeniliklər 0.9, əvvəlki buraxılış, nə yenidir, yeniliklər, buraxılış qeydləri, dəyişikliklər jurnalı, 0.9, uzunluqları belə göstər, metr, santimetr, millimetr, metrik, qlobalı izlə, vahidlər, göstərilən vahidlər, m2, kvadrat metr, divar sahəsi, miqyas hazır şablonları, 1:75, 1:150, çəki, kiloqram, kq, tonna, ton, lb, temperatur, selsi, farenheyt, qövs, qövs üsulları, 3 nöqtəli qövs, radius, canlı, kursorlar, izlə, iştirakçılar siyahısı, sinif, alət ipucları, tərtibat, yeniliklər, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, hər şeyi say, legenda, simvol legendası, bütün dəst, qiymət yaddaşı, keçmiş işlər, son iş, tipik qiymət, təchizatçı, anbar, çatdırılma müddəti, geri sifariş, sifariş siyahısı, çatışmazlıq, problemlər paneli, köməkçi, dillər, giriş cihazları, alət paneli sətirləri, dwg
from: f4322ba2
---

Bu, 0.8.1 ilə müqayisədə TakeoffCraft 0.9-da nəyin dəyişdiyidir. Bu, bu tətbiq üçün kiçik bir buraxılışdır: uzunluqlar indi metrlə, santimetrlə və ya millimetrlə oxuna bilər, sahələr və miqyaslar metrik iş üçün düzgün işləyir və qövsü on müxtəlif üsulla çəkmək olar. Canlı sessiyalarda da kimin harada olduğu görünür.

## Yeni

### Uzunluqların metrlə, santimetrlə və ya millimetrlə oxunması

- **Uzunluqları belə göstər.** {{ui:Settings}} › {{ui:TakeoffCraft}} bölməsində {{ui:Show lengths as}} var, onun seçimləri: {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm və mm. {{ui:Follow Global}} {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} bölməsində ulduzla qeyd etdiyiniz metrik uzunluq vahidindən istifadə edir, heç bir vahid qeyd edilməyibsə, fut-düym. Bu, uzunluqların vərəqdə, status sətrində və panellərdə, o cümlədən hündürlüklərdə, dərinlikdə, qalınlıqda və səviyyələrdə necə oxunmasını dəyişir. Hündürlük sahəsinə yazılmış çılpaq rəqəm göstərilən vahiddə oxunur.
- **Yalnız göstərmə.** Miqdarlar, xərclər və ixraclar dəqiq uzunluqlardan hesablanır. 1/16, 1/8 və 1/4 düym seçimi yalnız fut-düym üçün görünür. Bax: [Uzunluqları metrlə göstərmək](topic:show-lengths-in-meters).
- **Çəki vahidləri.** {{ui:Typed quantity (no drawing)}} elementi indi lb, TON, kg və ya t ola bilər və vahid başına qiymətləndirilə bilər.
- **Temperatur.** Hər elementin element redaktorunda isteğe bağlı {{ui:Temperature}} sahəsi var, dərəcə C və ya F ilə yazılır. {{ui:Settings}} › {{ui:TakeoffCraft}} bölməsində {{ui:Show temperatures as}} seçimi {{ui:Follow Global}}, °C və ya °F təklif edir.

### Metrik iş üçün sahələr və miqyaslar

- **Vərəqdə m2 ilə sahələr.** Metrik elementlə ölçülmüş sahə indi cədvəldə olduğu kimi çertyojdakı etiketdə və işarə panelində də SF yox, m2 kimi göstərilir. Qayda: element metrik qiymətləndirilirsə və ya uzunluqlar m, cm və ya mm ilə göstərilirsə m2, əks halda SF.
- **Divar sahəsi.** Hündürlüyü olan xətti element Elementlər siyahısında və elementlər üzrə miqdarlar cədvəlinin altında qeyd sətri kimi öz divar sahəsini (uzunluq × hündürlük) də göstərir.
- **Miqyas hazır şablonları 1:75 və 1:150.** Onlar {{ui:Scale}} qrupunda, {{ui:Preset}} siyahısındadır; qrupda indi 32 miqyas var. Bax: [Miqyas hazır şablonları](topic:scale-presets).

### Qövsün on üsulla çəkilməsi

- {{ui:Arc}} aktiv olduqda (alət paneli düyməsi və ya {{key:R}}), vərəq panelində {{ui:Arc method}} qutusu görünür: 3 nöqtə, Başlanğıc, Mərkəz, Son; Başlanğıc, Mərkəz, Bucaq; Başlanğıc, Mərkəz, Uzunluq; Başlanğıc, Son, Bucaq; Başlanğıc, Son, İstiqamət; Başlanğıc, Son, Radius; Mərkəz, Başlanğıc, Son; Mərkəz, Başlanğıc, Bucaq və Mərkəz, Başlanğıc, Uzunluq. Bucaq, uzunluq, radius və istiqamət klik edilə və ya yazıla bilər. Xətti sıralarda, sahələrdə və kəsiklərdə işləyir. 0.9-dan əvvəl saxlanmış fayllar eyni cür açılır. Bax: [Qövsləri on üsulla çəkin](topic:draw-arcs-ten-methods).

### Birlikdə işləmək

- **Bir-birinin kursorlarını görün.** Canlı sessiyada hər şəxsin göstəricisi adı və rəngi ilə vərəqdə görünür, seçdikləri işarələrin ətrafında isə qırıq çərçivə olur. Başqa vərəqdə olan adamlar həmin vərəqin adı ilə siyahıda verilir. Bax: [Başqaları ilə canlı işləyin](topic:work-live).
- **Iştirakçını izləyin və iştirakçılar siyahısı.** Canlı sessiyada {{ui:İştirakçılar}} düyməsi hər şəxsi, onun işlətdiyi alət, olduğu vərəq və son redaktə vaxtı ilə siyahıya salır. {{ui:Follow}} görünüşünüzü onunkilə birlikdə hərəkət etdirir, sessiyanın sahibi isə {{ui:Ask everyone to follow me}} seçimindən istifadə edə bilər. Bax: [Canlı sessiyada yoldaşınızı izləyin](topic:follow-a-teammate).

## Hər tətbiqdə

- **Alət ipucları və başlanğıc ipucu.** Üzərinə gətirmə mətni Bootstrap alət ipucudur və başlanğıc ipucu bağlana bilər.
- **Sürüşən nişan zolaqları.** Panelin yerə sığmayan nişan zolağı kəsilmək əvəzinə sürüşür.
- **Nişan başlıqları.** Brauzer nişanı `<document> - TakeoffCraft | CadCraft` yazısını göstərir.
- **Tərtibat.** {{ui:Settings}} bölməsindəki tərtibat siyahısı seçilmiş tərtibatı göstərən açılan siyahıdır.
- **Dil.** Seçdiyiniz dil indi səhifənin özünün çap etdiyi sözlərə də çatır, məsələn Yeni, Aç və Saxla. İngilis dilindən başqa dillər ana dili danışan biri oxuyana qədər maşın qaralamasıdır.

## Açıq məhdudiyyətlər

- Uzunluq göstərilməsi, çəki və temperatur vahidləri və yeni şablonlar testlərlə və səhifədə yoxlanılıb. Hər vahiddə hər panel əl ilə yoxlanılmayıb.
- İştirakçılar siyahısı real müəllim və şagird sinfi ilə əl ilə yoxlanılmayıb.
- İngilis dilindən başqa dillər maşın qaralamasıdır.
- Windows quraşdırıcıları kodla imzalanmayıb (Ətraflı məlumat, sonra Yenə də işlət). macOS disk təsviri notarizasiya olunmayıb (sağ klik, sonra Aç).

## Əvvəlki: 0.8 və 0.8.1

Bu, 0.7 ilə müqayisədə TakeoffCraft 0.8 (2026-11-01 buraxılıb) və 0.8.1 (2026-11-02) versiyalarında nəyin dəyişdiyidir. Simvol legendası indi bütün dəst üzrə bir dəfəyə sayıla bilər, yeni hesablama keçmiş işlərinizin qiymətlərindən başlaya bilər və hesablama təchizatçının anbar siyahısı ilə yoxlanıla bilər. 0.8.1 düzəliş buraxılışıdır.

### Yeni

**Dəstdəki hər şeyi say**

- **Legendanı bir dəfə çərçivəyə alın.** Alət panelindəki {{ui:Count everything}} simvol legendasını oxuyur: simvolların və onların yanında yazılmış adların ətrafına qutu çəkin. Hər simvol şəkli və adı ilə siyahıya düşür, ad isə elementin adına çevrilir. İstəmədiklərinizin işarəsini çıxarın, sonra N vərəqdə say seçin. Zolaq axtarılan vərəqi göstərir, {{ui:Cancel}} işi dayandırır, səhifə isə işlək qalır.
- **Bütün vərəqlər bir işdə.** Hər simvol açıq olan hər vərəqdə sayılır. Başqa miqyasda çəkilmiş vərəq həmin miqyasda axtarılır, simvollar istənilən düz bucaqla döndərilmiş halda da tapılır. Legendanın öz simvolları öz vərəqində sayılmır.
- **Əlavə etməzdən əvvəl baxın.** Hər cəmin hər vərəq üçün keçidi var ("E-103: 4"), o keçid həmin vərəqə aparır. Tapıntıdakı qutuya klik edib onu çıxarın, yenidən klik edib geri qaytarın. Uyğunluq səviyyəsi (50%-dən 100%-ə qədər) yalnız tapılanı süzgəcdən keçirir; heç nə yenidən axtarılmır.
- **Bir geri qaytarma addımı.** {{ui:Add N marks}} hər simvol üçün say elementi və hər tapıntıda işarə yaradır. Artıq sizin say elementiniz olan ad yenidən istifadə olunur. {{key:Ctrl+Z}} bütün elementləri və işarələri geri qaytarır. Qəbul etdiklərinizi {{ui:Learned}} də qeyd edir.
- **İstənilən bucaqda simvollar.** Saymadan əvvəl {{ui:Symbols at any angle}} seçimini işarələsəniz, düz bucaq olmayan bucaqla döndərilmiş simvolları da tapır. Axtarış hər simvolu hər 15 dərəcədə döndərir, dairəvi olmayan simvol isə altı dəfəyə qədər çox vaxt apara bilər.
- **Nədir.** Yalnız öz vərəqlərinizdə sadə simvol uyğunlaşdırması, öyrədilmiş model yoxdur və heç nə kompüterinizdən çıxmır. Süni 200 vərəqlik dəstdə sürətli masaüstündə Chrome-da başdan sona 9.4 saniyə çəkdi; real plan dəstləri daha yavaş olacaq. Bax: [Dəstdəki hər şeyi say](topic:count-everything).

**Keçmiş işlərinizdən qiymət yaddaşı**

- **TakeoffCraft dərəcələrinizi yadda saxlayır.** Hesablamanı saxlayanda istifadə olunan hər qiymətləndirilmiş element adı və tipi ilə yadda qalır: material dərəcəsi, əmək dərəcəsi, tullantı və vahid. Hər ad üçün son 12 iş saxlanılır. Bu, qiymət Kitabxanası ilə yanaşı bu kompüterdə saxlanılır, heç vaxt hesablama faylının içində deyil və heç yerə göndərilmir.
- **Yeni hesablamanı ondan başladın.** Alət panelindəki {{ui:Prices}} hər element üçün son işin dərəcələrini, tipik dərəcələri və diapazonu göstərir. {{ui:Use last}} və ya {{ui:Use typical}} bir elementə qiymət verir, {{ui:Price N unpriced items from memory}} isə hələ qiyməti olmayan hər elementi doldurur. Hər istifadə bir geri qaytarma addımıdır.
- **Köhnə iş.** {{ui:Learn from a past takeoff…}} saxlanmış hesablamanın (.json) qiymətləndirilmiş elementlərini yadda saxlayır.
- **Görün, dəyişin, unudun.** {{ui:Everything remembered}} hər adı siyahılayır; zibil qutusu düyməsi birini unudur, {{ui:Clear all prices}} isə hamısını. Dayandırmaq üçün {{ui:Remember my prices when I save a takeoff}} seçimini söndürün. Hər ədəd üçün qiymət heç vaxt fut üzrə elementə verilmir. Bax: [Keçmiş işlərinizdən qiymət yaddaşı](topic:price-memory).

**Təchizatçı anbarı və çatdırılma müddətləri**

- **Təchizatçının siyahısı ilə yoxlayın.** Alət panelindəki {{ui:Supply}} təchizatçının anbar siyahısını ({{ui:Add a supplier file…}}) — CSV və ya cədvəl — götürür və hesablamanın tələb etdiklərini, tullantı daxil olmaqla, onunla yoxlayır. Beş fayla qədər saxlanılır. Heç nə göndərilmir və heç nə təchizatçıdan soruşulmur: faylı özünüz gətirirsiniz.
- **Nə deyir.** Çatmayan elementlər birinci gəlir: "120 EA çatmır", "Çatdırılma müddəti 21 gün", "Geri sifarişdədir", "Vahid fərqlidir", "Anbar rəqəmi yoxdur" və ya "Anbarda var". {{ui:Longest wait wanted (days)}} 14-dən başlayır.
- **Sifariş siyahısı.** {{ui:Order list (CSV)}} çatmayan elementləri çatmayan miqdar, təchizatçı və çatdırılma müddəti ilə endirir.
- **Qiymətlər Kitabxanaya.** Faylda qiymətlər varsa, {{ui:Prices into the Library}} eyni ad və vahidə malik hər Kitabxana girişinin material qiymətini təyin edir. Onları hesablamaya gətirmək üçün Kitabxanadan yenidən qiymətləndirin.
- **Problemlər panelində.** Çatışmazlıq xəbərdarlıqdır, uzun gözləmə isə qeyddir; hər ikisi "Təchizatçı anbarı" altında görünür. Səbəblə birini qəbul edə bilərsiniz və səbəb hesablamada saxlanılır. Bax: [Təchizatçı anbarını və çatdırılma müddətlərini yoxlayın](topic:supplier-stock).

**AI köməkçiləri**

- **Üçü üçün alətlər.** {{ui:Settings}} bölməsində köməkçilərə icazə verildikdə, köməkçi simvol legendasını oxuya (`legend_open`), sayı işə sala (`legend_count_start`, sonra `legend_count_status` və `legend_count_result`) və onu əlavə edə bilər (`legend_count_add`, əvvəlcədən baxış mümkündür). Yadda saxlanmış qiymətləri oxuya (`prices_list`) və onlardan elementlərə qiymət verə bilər (`prices_apply`, əvvəlcədən baxış mümkündür), təchizatçı yoxlamasını da oxuya bilər (`supply_check`). Təchizatçı faylı əlavə etmək yalnız sizin işinizdir. Bax: [TakeoffCraft-ı AI köməkçiləri ilə işlədin](topic:use-with-ai-assistants).

**Hər tətbiqdə**

- **Dillər.** Ümumilikdə əlli dörd dil var; on yenisi: Litva, Latış, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filippin, Suahili və Özbək. İngilis dilindən başqa dillər ana dili danışan biri oxuyana qədər maşın qaralamasıdır.
- **Giriş cihazları.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} trackpad, siçanın yan düymələri, qələm, 3D siçan, oyun pultu və ya MIDI kontrollerin nə etdiyini hər tətbiq üçün və ya yalnız biri üçün təyin edir. Bax: [Trackpad, 3D siçan və ya kontrolleri işlədin](common:input-devices).
- **Alət paneli sətirləri.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} {{ui:Wrap}} (başlanğıc), {{ui:2 rows}} və {{ui:1 row}} təklif edir; yerə sığmayan qruplar yana sürüşür. Bax: [Panelləri təşkil edin](common:arrange-panels).
- **Problemlər paneli.** Xəbərdarlıqların və qeydlərin ümumi paneli indi yuxarıdakı təchizatçı anbarı yoxlamasını digər yoxlamalarla yanaşı göstərir.
- **Əlavələr.** Əlavələr hesabınızın siyahısını izləyir. Bax: [Əlavələr və hesab siyahınız](common:addons-basics).
- **AI-nizi qoşun.** CadCraft Studio mərkəzdir: köməkçinizi səkkiz tətbiqin hamısı üçün bir dəfə qoşun. Studio-nun öz AI-si yoxdur.

### 0.8.1-də düzəlişlər

- **DWG sinif bölməsi.** DWG faylının sinif bölməsi səhv tip kimi oxunurdu. Bu, TakeoffCraft-da və digər dörd tətbiqdə düzəldilib.
- **Studio işləyərkən dili dəyişə bilir.** Əvvəl Studio və onun paketlənmiş variantları yalnız ingilis dilində idi. Bu, masaüstü versiyasında hər platformada sınaqdan keçirilməyib; dil dəyişmirsə bizə bildirin.

### Bu versiyada hələ yoxdur

- **Kodla imzalanmayıb.** Windows xəbərdarlıq verə bilər; Mac-da ilk dəfə sağ klik edib {{ui:Open}} seçin. Mağaza versiyaları (Microsoft Store, Google Play, App Store) gözləmədədir, iPad və iPhone versiyası 0.8.1 üçün yenidən qurulmayıb.
- **Studio yenilənmələri.** Windows quraşdırıcısı və Linux paketləri gündə bir dəfə yoxlayır və əvvəlcə soruşur. Portativ zip yalnız xəbər verir; macOS və APK özlərini yeniləmir. 0.8 macOS .dmg buraxılışı izləyir.
- **AI-nizi qoşun.** Studio daxilində bir kliklə qoşulma, brauzerdə AI üçün hosted konnektor, Studio daxilində öz API açarınız və dərc olunmuş MCP paketi bu versiyada vəd olunmur.
- **Hər şeyi say.** Legendada olduğu kimi çəkilmiş simvollar tələb olunur; divar və ya uzun xətt keçən simvol buraxıla bilər. Güzgü simvolları tapılmır, miqyası olmayan və başqa ölçüdə çəkilmiş vərəq isə legendanın ölçüsündə axtarılır. Qalanına etibar etməzdən əvvəl ilk vərəqdəki tapıntıları yoxlayın.
- **Təchizatçı anbarı.** Anbar rəqəmləri yalnız əlavə etdiyiniz fayl qədər təzədir. Yoxlama heç vaxt təchizatçıdan soruşmur.
- **Dillər.** Tamil dilinin tətbiq paneli daşır.

Qalan hər şey [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir. Ondan əvvəlki buraxılış üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).
