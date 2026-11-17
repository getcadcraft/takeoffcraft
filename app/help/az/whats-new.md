---
title: 0.9-da yeniliklər
summary: Uzunluqları metrlə, santimetrlə və ya millimetrlə oxuyun, m2 ilə metrik sahələr və divar sahəsi, 1:75 və 1:150 miqyas hazır seçimləri, çəki və temperatur vahidləri, on üsullu Qövs, canlı kursorlar, İzləmə və insanlar siyahısı.
keywords: yeniliklər, nə yeni var, buraxılış qeydləri, dəyişikliklər, 0.9, uzunluqları belə göstər, metrlər, santimetrlər, millimetrlər, metrik, qlobalı izlə, vahidlər, göstərmə vahidləri, m2, kvadrat metrlər, divar sahəsi, miqyas hazır seçimləri, 1:75, 1:150, çəki, kiloqram, kg, ton, t, lb, temperatur, selsi, farenheyt, qövs, qövs üsulları, 3 nöqtəli qövs, radius, canlı, kursorlar, izləmə, insanlar siyahısı, sinif, ipuçları, tərtibat, dwg, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, hamısını say, legenda, simvol legendası, bütün dəst, qiymət yaddaşı, keçmiş işlər, son iş, tipik qiymət, təchizatçı, anbar, gözləmə müddəti, geri sifariş, sifariş siyahısı, çatışmazlıq, problemlər paneli, köməkçi, dillər, giriş cihazları, alət paneli sətirləri
from: 6182b998
---

Bu, TakeoffCraft 0.8.1-ə nisbətən 0.9-da nəyin dəyişdiyidir. Bu, bu tətbiq üçün kiçik buraxılışdır: uzunluqlar indi metrlə, santimetrlə və ya millimetrlə oxuna bilər, sahələr və miqyaslar metrik işi düzgün izləyir və Qövs on üsulla çəkilir. Canlı sessiyalar da kimin harada olduğunu göstərir.

## Yeni

### Uzunluqları metrlə, santimetrlə və ya millimetrlə oxuyun

- **Uzunluqları belə göstər.** {{ui:Parametrlər}} › {{ui:TakeoffCraft}} bölməsində {{ui:Uzunluqları belə göstər}} var; seçimlər: {{ui:Qlobalı izlə}}, {{ui:Fut-düym}}, m, cm və mm. {{ui:Qlobalı izlə}} {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Vahidlər}} bölməsində ulduzladığınız metrik uzunluq vahidini istifadə edir, heç biri ulduzlanmayıbsa fut-düym. Bu, uzunluqların vərəqdə, status sətrində və panellərdə necə oxunduğunu dəyişir — hündürlükləri, dərinliyi, qalınlığı və səviyyələri də daxil edərək. Hündürlük sahəsinə yazılmış çılpaq rəqəm göstərilən vahiddə oxunur.
- **Yalnız göstərmə üçün.** Miqdarlar, xərclər və ixraclar dəqiq uzunluqlardan hesablanır. 1/16, 1/8 və 1/4 düym seçimi yalnız fut-düym üçün görünür. Bax: [Uzunluqları metrlərlə göstərin](topic:show-lengths-in-meters).
- **Çəki vahidləri.** {{ui:Yazılmış miqdar (çertyojsuz)}} elementi indi lb, TON, kg və ya t ola bilər və vahid başına qiymətləndirilə bilər.
- **Temperatur.** Hər elementin element redaktorunda isteğe bağlı {{ui:Temperatur}} sahəsi var, Selsi və ya Farenheyt dərəcələrində yazılır. {{ui:Parametrlər}} › {{ui:TakeoffCraft}} bölməsində {{ui:Temperaturu belə göstər}} {{ui:Qlobalı izlə}}, °C və ya °F təklif edir.

### Metrik iş üçün sahələr və miqyaslar

- **Çertyojda m2 ilə sahələr.** Metrik elementlə ölçülmüş sahə çertyoj etiketində, işarə panelində və cədvəldə SF əvəzinə m2 deyir. Qayda: elementin qiyməti metrikdə olduqda və ya uzunluqlar m, cm və ya mm göstərildikdə m2, əks halda SF.
- **Divar sahəsi.** Hündürlüyü olan xətti element Elementlər siyahısında və elementlər üzrə miqdarlar cədvəlinin altında qeyd sətiri kimi öz divar sahəsini (uzunluq × hündürlük) göstərir.
- **Miqyas hazır seçimləri 1:75 və 1:150.** Onlar {{ui:Miqyas}} qrupunda olan {{ui:Hazır}} siyahısındadır, indi 32 miqyas var. Bax: [Miqyas hazır seçimləri](topic:scale-presets).

### Qövs on üsulla

- {{ui:Qövs}} açıq olanda (alət düyməsi və ya {{key:R}}), vərəq zolağında {{ui:Qövs üsulu}} qutusu görünür: 3 nöqtə, Başlanğıc, Mərkəz, Son, Başlanğıc, Mərkəz, Bucaq, Başlanğıc, Mərkəz, Uzunluq, Başlanğıc, Son, Bucaq, Başlanğıc, Son, İstiqamət, Başlanğıc, Son, Radius, Mərkəz, Başlanğıc, Son, Mərkəz, Başlanğıc, Bucaq və Mərkəz, Başlanğıc, Uzunluq. Bucaq, uzunluq, radius və istiqamət klikləyib və ya yazıla bilər. Xətti boylarda, sahələrdə və kəsiklərdə işləyir. 0.9-dan əvvəl saxlanılmış fayllar eyni cür açılır. Bax: [On üsulla qövs çəkin](topic:draw-arcs-ten-methods).

### Birlikdə işləmək

- **Bir-birinizin kursorlarını görün.** Canlı sessiyada hər nəfərin göstəricisi vərəqdə öz adı və rəngi ilə görünür, seçdiyi işarələrin ətrafında isə kəsik xətli qutu ilə. Başqa vərəqdə olan adamlar həmin vərəqin adı ilə siyahıya düşür. Bax: [Canlı komanda ilə işləyin](topic:work-live).
- **Bir nəfəri izləyin və insanlar siyahısı.** Canlı sessiyada {{ui:İnsanlar}} düyməsi hər nəfəri istifadə etdiyi alət, olduğu vərəq və son redaktə vaxtı ilə siyahıya salır. {{ui:İzlə}} görünüşünüzü onunla birlikdə hərəkət etdirir, və sessiya sahibi {{ui:Hamıdan məni izləmələrini istə}} düyməsindən istifadə edə bilər. Bax: [Canlı sessiyada komanda yoldaşını izləyin](topic:follow-a-teammate).

## Hər tətbiqdə

- **Alət ipuçları və başlanğıc ipucu.** Üzərinə gətirdikdə görünən mətn Bootstrap alət ipucudur; başlanğıc ipucu bağlana bilər.
- **Sürüşən sekme zolaqları.** Panelin sığmayan sekme zolağı kəsilmək əvəzinə sürüşür.
- **Sekme başlıqları.** Brauzer sekmesi `<document> - TakeoffCraft | CadCraft` yazır.
- **Tərtibat.** {{ui:Parametrlər}} daxilindəki tərtibat siyahısı seçilmiş tərtibatı göstərən açılan siyahıdır.
- **Dil.** Seçdiyiniz dil səhifənin özünün çap etdiyi sözlərə də çatır, məsələn Yeni, Aç və Saxla. İngilis dilindən başqa dillər ana dili danışan tərəfindən oxunmamış maşın qaralamalarıdır.

## Dürüst məhdudiyyətlər

- Uzunluq göstərilməsi, çəki və temperatur vahidləri və yeni hazır seçimlər testlərlə və səhifədə yoxlanılıb. Hər panel hər vahiddə əl ilə yoxlanılmayıb.
- İnsanlar siyahısı müəllim və tələbələrin real sinfi ilə əl ilə yoxlanılmayıb.
- İngilis dilindən başqa dillər maşın qaralamalarıdır.
- Windows quraşdırıcıları kod imzası ilə imzalanmayıb ({{ui:Ətraflı məlumat}}, sonra {{ui:Yenə də işə sal}}). macOS disk şəkli notarizasiya olunmayıb (sağ klik, sonra {{ui:Açıq}}).

## Əvvəlki: 0.8 və 0.8.1

Bu, TakeoffCraft 0.8-də (2026-11-01 buraxılıb) və 0.8.1-də (2026-11-02) 0.7-yə nisbətən nəyin dəyişdiyidir. Simvol legendası indi bütün dəst üzrə bir dəfəyə sayıla bilər, yeni hesablama keçmiş işlərinizin qiymətləri ilə başlaya bilər və hesablama təchizatçının anbarı ilə yoxlanıla bilər. 0.8.1 düzəliş buraxılışıdır.

### Yeni

**Dəstdəki hər şeyi sayın**

- **Legendanı bir dəfə qutuya alın.** Alət panelindəki {{ui:Hamısını say}} simvol legendasını oxuyur: simvolların və yanlarında yazılmış adların ətrafında qutu çəkin. Hər simvol şəkli və adı ilə siyahıya düşür, ad isə elementin adı olur. İstəmədiklərinizin işarəsini çıxarın, sonra {{ui:N vərəqdə say}} seçin. Zolaq hansı vərəqin axtarıldığını göstərir, {{ui:Ləğv et}} işi dayandırır və səhifə istifadə oluna bilən qalır.
- **Hər vərəqdə bir işlə.** Hər simvol açıq olan hər vərəqdə sayılır. Başqa miqyasda çəkilmiş vərəq o miqyasda axtarılır, simvollar isə hər sağ bucaqda döndərilmiş halda tapılır. Legendanın öz simvolları öz vərəqində sayılmır.
- **Əlavə edilməzdən əvvəl baxış.** Hər cəmin hər vərəq üçün keçidi var ("E-103: 4") və o vərəqə aparır. Tapıntıda qutuya klikləyib onu kənarda buraxın, yenidən klikləyib geri qaytarın. Uyğunluq səviyyəsi (50%-dən 100%-ə) yalnız tapılanı süzgəcdən keçirir; heç nə yenidən axtarılmır.
- **Bir geri qaytarma addımı.** {{ui:N işarə əlavə et}} hər tapıntıda işarəsi olan hər simvol üçün say elementi yaradır. Artıq sizin say elementiniz olan ad təkrar istifadə olunur. {{key:Ctrl+Z}} bütün elementləri və işarələri geri qaytarır. Qəbul etdikləriniz {{ui:Öyrənilmiş}} bölməsinə də düşür.
- **İstənilən bucaqda simvollar.** Saymazdan əvvəl {{ui:İstənilən bucaqda simvollar}} işarələyin ki, düz bucaq olmayan bucaqla döndərilmiş simvollar da tapılsın. Axtarış hər simvolu hər 15 dərəcədən bir döndərir və dairəvi olmayan simvol altı dəfəyə qədər uzun çəkə bilər.
- **Nə olduğu.** Öz vərəqlərinizdə sadə simvol uyğunlaşdırması; öyrədilmiş model yoxdur və heç nə kompüterinizdən çıxmır. 200 vərəqli uydurma dəstdə Chrome-da sürətli masaüstündə başdan sona 9,4 saniyə çəkdi; real plan dəstləri daha yavaş olacaq. Bax: [Dəstdəki hər şeyi sayın](topic:count-everything).

**Keçmiş işlərinizdən qiymət yaddaşı**

- **TakeoffCraft qiymətlərinizi yadda saxlayır.** Hesablamanı saxlayanda istifadə olunan hər qiymətli element adı və növü ilə yadda qalır: material dərəcəsi, işçi dərəcəsi, itki və vahid. Hər ad üçün son 12 iş saxlanılır. Bu, bu kompüterdə Kitabxananın yanında saxlanılır, heç vaxt hesablama faylının içində deyil və heç yerə göndərilmir.
- **Yeni hesablamanı ondan başladın.** Alət panelindəki {{ui:Qiymətlər}} hər element üçün son işin dərəcələrini, tipik dərəcələri və diapazonu göstərir. {{ui:Son işi istifadə et}} və ya {{ui:Tipik dərəcələri istifadə et}} bir elementi qiymətləndirir, və qiyməti olmayan hər elementi doldurmaq üçün {{ui:N qiymətsiz elementi yaddaşdan qiymətləndir}} düyməsi var. Hər istifadə bir geri qaytarma addımıdır.
- **Köhnə işlər.** {{ui:Keçmiş hesablamadan öyrən…}} saxlanılmış hesablamanın (.json) qiymətli elementlərini yadda saxlayır.
- **Ona baxın, dəyişin, unudun.** {{ui:Yaddaşda saxlanan hər şey}} hər adı siyahılayır; zibil düyməsi birini unudur, {{ui:Bütün qiymətləri təmizlə}} isə hamısını. Dayandırmaq üçün {{ui:Hesablamanı saxlayanda qiymətlərimi yadda saxla}} seçimini söndürün. Element başına qiymət heç vaxt fut başına elementə qoyulmur. Bax: [Keçmiş işlərdən qiymət yaddaşı](topic:price-memory).

**Təchizatçı anbarı və gözləmə müddəti**

- **Təchizatçının siyahısı ilə yoxlayın.** Alət panelindəki {{ui:Təchizat}} təchizatçının anbar siyahısını ({{ui:Təchizatçı faylı əlavə edin…}}) — CSV və ya cədvəl — qəbul edir və hesablamanın tələb etdiyini itki ilə birlikdə yoxlayır. Beşə qədər fayl saxlanılır. Heç nə göndərilmir və heç nə təchizatçıdan soruşulmur: faylı siz gətirirsiniz.
- **Nə deyir.** Qısa elementlər birinci gəlir: "120 EA çatışmır", "Gözləmə müddəti 21 gün", "Geri sifarişdədir", "Vahid fərqlidir", "Anbar rəqəmi yoxdur" və ya "Anbarda var". {{ui:Ən uzun gözləmə (gün)}} 14-dən başlayır.
- **Sifariş siyahısı.** {{ui:Sifariş siyahısı (CSV)}} çatışmayan miqdarla, təchizatçı və gözləmə müddəti ilə qısa elementləri yükləyir.
- **Qiymətlər Kitabxanaya.** Faylda qiymətlər varsa, {{ui:Qiymətləri Kitabxanaya daxil et}} eyni ad və vahidli hər Kitabxana girişinin material qiymətini təyin edir. Onları hesablamaya gətirmək üçün Kitabxanadan yenidən qiymətləndirin.
- **Problemlər panelində.** Çatışmazlıq xəbərdarlıqdır, uzun gözləmə isə qeyddir, "Təchizat anbarı" altında. Birini səbəblə qəbul edə bilərsiniz və səbəb hesablamada saxlanılır. Bax: [Təchizat anbarını və gözləmə müddətlərini yoxlayın](topic:supplier-stock).

**AI köməkçilər**

- **Üçü üçün alətlər.** {{ui:Parametrlər}}-də köməkçilərə icazə verildikdə köməkçi legendanı oxuya bilər (`legend_open`), sayı işlədə bilər (`legend_count_start`, sonra `legend_count_status` və `legend_count_result`) və əlavə edə bilər (`legend_count_add`, əvvəl baxa bilər). Yaddaşda qalmış qiymətləri oxuya (`prices_list`) və onlardan elementləri qiymətləndirə bilər (`prices_apply`, əvvəl baxa bilər), və təchizat yoxlamasını oxuya bilər (`supply_check`). Təchizatçı faylı əlavə etmək sizə qalır. Bax: [TakeoffCraft-ı AI köməkçi ilə işlədin](topic:use-with-ai-assistants).

**Bütün tətbiqlərdə**

- **Dillər.** Cəmi əlli dörd dil; on yenidir (Litva, Latış, Bosniya, Marathi, Telugu, Albanca, Afrikaans, Filippin, Svahili və Özbək). İngilis dilindən başqa dillər ana dili danışanın hələ oxumadığı maşın qaralamalarıdır.
- **Giriş cihazları.** {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Giriş cihazları}} trackpad, siçanın yan düymələri, qələm, 3D siçan, oyun kontrolleri və ya MIDI kontrollerinin nə etdiyini təyin edir — hər tətbiq üçün və ya bir tətbiq üçün. Bax: [Trackpad, 3D siçan və ya kontroller istifadə edin](common:input-devices).
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} {{ui:Sarma}} (başlanğıc), {{ui:2 sətir}} və {{ui:1 sətir}} təklif edir; yerə sığmayan qruplar yana sürüşür. Bax: [Panelləri düzəldin](common:arrange-panels).
- **Problemlər paneli.** Xəbərdarlıqların və qeydlərin ümumi paneli yuxarıdakı təchizat anbarı yoxlamasını indi digər yoxlamalarla birlikdə daşıyır.
- **Əlavələr.** Əlavələr hesab siyahınızı izləyir. Bax: [Əlavələr və hesab siyahınız](common:addons-basics).
- **AI köməkçini qoşun.** CadCraft Studio mərkəzdir: köməkçinizi səkkiz tətbiq üçün bir dəfə qoşun. Studio-nun öz AI-ı yoxdur.

### Versiya 0.8.1-də düzəldilib

- **DWG sinifləri bölməsi.** DWG faylının sinifləri bölməsi yanlış növ kimi oxunurdu. Bu, TakeoffCraft-da və digər dörd tətbiqdə düzəldilib.
- **Studio işləyərkən dili dəyişə bilir.** Əvvəl Studio və onun paketlənmiş nəşrləri yalnız ingiliscə idi. Bu, masaüstü quruluşda hər platformada yoxlanılmayıb; dil dəyişmirsə, bizə bildirin.

### Bu versiyada hələ yoxdur

- **Kod imzası yoxdur.** Windows xəbərdarlıq edə bilər; Mac-də ilk dəfə sağ klik edib {{ui:Açıq}} seçirsiniz. Mağaza quruluşları (Microsoft Store, Google Play, App Store) gözləmədədir, iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- **Studio yeniləmələri.** Windows quraşdırıcısı və Linux paketləri gündə bir dəfə yoxlayır və əvvəl soruşur. Portativ zip yalnız xəbər verir, macOS və APK özü yenilənmir. 0.8 macOS .dmg buraxılışı izləyir.
- **AI köməkçini qoşun.** Studio içində bir kliklə qoşulma, brauzer üçün hostlanmış AI konnektoru, Studio içində öz API açarınız və dərc olunmuş MCP paketi bu versiyada vəd edilməyib.
- **Hamısını say.** Legendadakı kimi çəkilmiş simvollar tələb edir; divar və ya uzun xətt keçən simvol buraxıla bilər. Güzgü simvolları tapılmır; miqyası olmayan və başqa ölçüdə çəkilmiş vərəq legendanın ölçüsündə axtarılır. Qalanına etibar etməzdən əvvəl birinci vərəqdəki tapıntıları yoxlayın.
- **Təchizat anbarı.** Anbar rəqəmləri yalnız əlavə etdiyiniz fayl qədər yenidir. Yoxlama heç vaxt təchizatçıdan soruşmur.
- **Dillər.** Tamil dilində tətbiq paneli sığmır.

Qalan hər şey [Hələ qurulmayıb](topic:not-built-yet) bölməsindədir. Əvvəlki buraxılış üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).
