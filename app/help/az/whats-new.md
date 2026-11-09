---
title: 0.8 və 0.8.1-də yeniliklər
summary: Simvol legendasını bütün açıq vərəqlərdə bir işdə say, keçmiş işlərinizin dərəcələrinə görə elementləri qiymətləndir, hesablamanı təchizatçının anbarı və çatdırılma müddətləri ilə yoxla, üçü üçün yeni AI köməkçi alətləri, həmçinin 0.8 üçün ümumi dəyişikliklər və DWG faylları üçün 0.8.1 düzəlişi.
keywords: yeniliklər, nə yeni var, buraxılış qeydləri, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, hamısını say, legenda, simvol legendası, bütün plan dəsti, qiymət yaddaşı, keçmiş işlər, son iş, tipik qiymət, təchizatçı, anbar, çatdırılma müddəti, geriyə sifariş, sifariş siyahısı, çatışmazlıq, problemlər paneli, köməkçi, dillər, giriş cihazları, alət paneli sətirləri, dwg
from: a04adef6
---

Bu, TakeoffCraft 0.8 (2026-11-01 tarixində buraxılıb) və 0.8.1 (2026-11-02) versiyalarında 0.7-yə nisbətən nə dəyişdiyidir. Simvol legendasını indi bütün plan dəstində bir dəfəyə saymaq olar, yeni hesablama keçmiş işlərinizin qiymətlərindən başlaya bilər və hesablama təchizatçının anbarı ilə yoxlanıla bilər. 0.8.1 düzəliş buraxılışıdır.

## Yeni

### Dəstdəki hər şeyi say

- **Legendanı bir dəfə qutuya alın.** Alət panelindəki {{ui:Hamısını say}} simvol legendasını oxuyur: simvolların ətrafına və onların yanındakı adlara bir qutu çəkin. Hər simvol şəkli və adı ilə siyahıda göstərilir və ad elementin adı olur. İstəmədiklərinizin işarəsini çıxarın, sonra {{ui:N vərəqdə say}} seçin. Zolaq axtarılan vərəqi göstərir, {{ui:Ləğv et}} işi dayandırır və səhifə istifadə oluna bilir.
- **Hər vərəq bir işdə.** Hər simvol açıq olan hər vərəqdə sayılır. Başqa miqyasda çəkilmiş vərəq həmin miqyasda axtarılır və simvollar istənilən düz bucaqda döndərilmiş halda tapılır. Legendanın öz simvolları öz vərəqində sayılmır.
- **Hər nəticə əlavə olunmazdan əvvəl nəzərdən keçirin.** Hər cəmin hər vərəq üçün keçidi var ("E-103: 4") və o vərəqə aparır. Tapıntıdakı qutuya klikləyib onu kənarda qoyun, yenidən klik edib geri qaytarın. Uyğunluq səviyyəsi (50%-dən 100%-ə qədər) yalnız tapılanı süzgəcdən keçirir; heç nə yenidən axtarılmır.
- **Bir geri qaytarma addımı.** {{ui:N nişan əlavə et}} hər simvol üçün bir say elementi və hər tapıntıda bir nişan yaradır. Artıq sizin say elementiniz olan ad təkrar istifadə olunur. {{key:Ctrl+Z}} bütün elementləri və nişanları geri alır. Qəbul etdikləriniz {{ui:Öyrənilmiş}} bölməsinə də verilir.
- **İstənilən bucaqda simvollar.** Saymazdan əvvəl {{ui:İstənilən bucaqda simvollar}} işarəsini qoyun ki, düz bucaqda olmayan bir bucaqla döndərilmiş simvolları da tapsın. Axtarış hər simvolu hər 15 dərəcədən bir döndərir və dairəvi olmayan simvol altı dəfəyə qədər çox vaxt apara bilər.
- **Nə olduğu.** Öz vərəqlərinizdə sadə simvol uyğunluğu, öyrədilmiş model yoxdur və heç nə kompüterinizi tərk etmir. Uydurma 200 vərəqlik dəstdə Chrome-da sürətli masa üstü kompüterində başdan sona 9,4 saniyə çəkdi; real plan dəstləri daha yavaş olacaq. Bax: [Dəstdəki hər şeyi say](topic:count-everything).

### Keçmiş işlərinizdən qiymət yaddaşı

- **TakeoffCraft dərəcələrinizi yadda saxlayır.** Hesablamanı saxlayanda, istifadə olunan hər qiymətləndirilmiş element adı və növü ilə yadda saxlanılır: material dərəcəsi, əmək dərəcəsi, tullantı və vahid. Hər ad üçün son 12 iş saxlanılır. Bu, bu kompüterdə qiymət Kitabxanasının yanında saxlanılır, heç vaxt hesablama faylının içində deyil və heç yerə göndərilmir.
- **Yeni hesablamanı ondan başladın.** Alət panelindəki {{ui:Qiymətlər}} hər element üçün son işin dərəcələrini, tipik dərəcələri və diapazonu göstərir. {{ui:Son işi istifadə et}} və ya {{ui:Tipik dərəcələri istifadə et}} bir elementi qiymətləndirir, {{ui:N qiymətsiz elementi yaddaşdan qiymətləndir}} hələ qiyməti olmayan hər elementi doldurur. Hər istifadə bir geri qaytarma addımıdır.
- **Köhnə işlər.** {{ui:Keçmiş hesablamadan öyrən…}} saxlanılmış hesablamanın (.json) qiymətləndirilmiş elementlərini yadda saxlayır.
- **Gör, dəyiş, unut.** {{ui:Yaddaşda saxlanan hər şey}} bütün adları siyahılayır; zibil qutusu düyməsi birini unudur, {{ui:Bütün qiymətləri təmizlə}} hamısını unudur. Dayandırmaq üçün {{ui:Hesablamanı saxlayanda qiymətlərimi yadda saxla}} seçimini söndürün. Hər ədəd üçün qiymət heç vaxt fut başına elementə verilmir. Bax: [Keçmiş işlərinizdən qiymət yaddaşı](topic:price-memory).

### Təchizatçının anbarı və çatdırılma müddətləri

- **Təchizatçının siyahısı ilə yoxlayın.** Alət panelindəki {{ui:Təchizat}} təchizatçının anbar siyahısını ({{ui:Təchizatçı faylı əlavə edin…}}), CSV və ya elektron cədvəl kimi alır və hesablamanın tələb etdiyini tullantı ilə birlikdə onunla yoxlayır. Beş fayla qədər saxlanılır. Heç nə göndərilmir və heç nə təchizatçıya müraciət etmir: faylı siz gətirirsiniz.
- **Nə deyir.** Qısa elementlər birinci gəlir: "120 EA çatışmır", "Çatdırılma 21 gün", "Geriyə sifarişdə", "Vahid fərqlidir", "Anbar rəqəmi yoxdur" və ya "Anbarda var". {{ui:Ən uzun gözləmə (gün)}} 14-dən başlayır.
- **Sifariş siyahısı.** {{ui:Sifariş siyahısı (CSV)}} çatışmayan elementləri çatışmayan miqdar, təchizatçı və çatdırılma müddəti ilə yükləyir.
- **Qiymətlər Kitabxanaya.** Faylda qiymətlər varsa, {{ui:Qiymətləri Kitabxanaya daxil et}} eyni ad və vahidi olan hər Kitabxana yazısının material qiymətini təyin edir. Hesablamaya gətirmək üçün Kitabxanadan yenidən qiymətləndirin.
- **Problemlər panelində.** Çatışmazlıq xəbərdarlıq, uzun gözləmə isə qeyddir, "Təchizatçı anbarı" altında. Səbəb yazmaqla birini qəbul edə bilərsiniz; səbəb hesablamada saxlanılır. Bax: [Təchizatçı anbarını və çatdırılma müddətlərini yoxlayın](topic:supplier-stock).

### AI köməkçiləri

- **Üçü üçün alətlər.** {{ui:Parametrlər}} bölməsində AI köməkçilərinə icazə verildikdə, köməkçi legendanı oxuya bilər (`legend_open`), sayı işlədə bilər (`legend_count_start`, sonra `legend_count_status` və `legend_count_result`) və onu əlavə edə bilər (`legend_count_add`, əvvəlcə önbaxış göstərə bilər). Yadda saxlanılmış qiymətləri oxuya (`prices_list`) və onlardan elementləri qiymətləndirə bilər (`prices_apply`, əvvəlcə önbaxış göstərə bilər) və təchizatçı yoxlamasını oxuya bilər (`supply_check`). Təchizatçı faylı əlavə etmək hələ də sizin işinizdir. Bax: [TakeoffCraft-ı AI köməkçiləri ilə işlədin](topic:use-with-ai-assistants).

### Bütün tətbiqlərdə

- **Dillər.** Cəmi əlli dörd dil; on yenisi var (Litva, Latviya, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filippin, Suahili və Özbək). İngilis dilindən başqa dillər ana dilində danışan biri oxuyana qədər maşın qaralamalarıdır.
- **Giriş cihazları.** {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Giriş cihazları}} trackpad, siçanın yan düymələri, qələm, 3D siçan, oyun kontrolleri və MIDI kontrollerinin nə etdiyini təyin edir, bütün tətbiqlər üçün və ya bir tətbiq üçün. Bax: [Trackpad, 3D siçan və ya kontrollerdən istifadə edin](common:input-devices).
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} {{ui:Sarma}} (başlanğıc), {{ui:2 sətir}} və {{ui:1 sətir}} təklif edir; yerə sığmayan qruplar üfüqi sürüşür. Bax: [Panelləri düzəldin](common:arrange-panels).
- **Problemlər paneli.** Xəbərdarlıq və qeydlərin ümumi paneli indi yuxarıdakı təchizatçı anbarı yoxlamasını da daşıyır, digər yoxlamaların yanında.
- **Əlavələr.** Əlavələr hesabınızın siyahısını izləyir. Bax: [Əlavələr və hesabınızın siyahısı](common:addons-basics).
- **AI-nizi qoşun.** CadCraft Studio mərkəzdir: köməkçinizi səkkiz tətbiqin hamısı üçün bir dəfə qoşun. Studio-nun öz AI-si yoxdur.

## 0.8.1-də düzəldilib

- **DWG sinifləri bölməsi.** DWG faylının sinifləri bölməsi səhv növ kimi oxunurdu. Bu, TakeoffCraft-da və digər dörd tətbiqdə düzəldilib.
- **Studio işləyərkən dili dəyişə bilir.** Əvvəllər Studio və onun paketlənmiş nəşrləri yalnız ingilis dilində idi. Bu, masa üstü quruluşda hər platformada sınaqdan keçirilməyib; dil dəyişmirsə bizə bildirin.

## Bu versiyada hələ yoxdur

- **Kod imzası yoxdur.** Windows xəbərdarlıq edə bilər; Mac-da ilk dəfə sağ klikləyib {{ui:Aç}} seçin. Mağaza quruluşları (Microsoft Store, Google Play, App Store) gözləmədədir və iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- **Studio yenilənmələri.** Windows quraşdırıcısı və Linux paketləri gündə bir dəfə yoxlayır və əvvəlcə soruşur. Portativ zip yalnız xəbər verir, macOS və APK özü yenilənmir. 0.8 macOS .dmg buraxılışı izləyir.
- **AI-nizi qoşun.** Studio daxilində bir kliklə qoşulma, brauzerdə AI üçün hostinq edilən konnektor, Studio daxilində öz API açarınız və dərc olunmuş MCP paketi bu versiyada vəd edilmir.
- **Dəstdəki hər şeyi say.** Legendada olduğu kimi çəkilmiş simvollar lazımdır və divar və ya uzun xətt keçən simvol buraxıla bilər. Güzgü simvolları tapılmır, miqyası olmayan və başqa ölçüdə çəkilmiş vərəq legendanın ölçüsündə axtarılır. Birinci vərəqdəki tapıntılara güvənməzdən əvvəl yoxlayın.
- **Təchizatçı anbarı.** Anbar rəqəmləri yalnız əlavə etdiyiniz fayl qədər təzədir. Yoxlama heç vaxt təchizatçıdan soruşmur.
- **Dillər.** Tamil dilində tətbiq paneli daşır.

Qalan hər şey [Hələ qurulmayıb](topic:not-built-yet) bölməsindədir. 0.7 buraxılışı üçün [0.7-də yeniliklər](topic:whats-new-0-7) bax.
