---
title: 0.7-də yeniliklər (əvvəlki)
summary: DWG və DXF çertyojları öz miqyası ilə vərəq kimi açılır, çertyojun özündən dəqiq saylar və uzunluqlar, seçilmiş subpodratçı təklifi tender paketinin qiyməti kimi, möhürlənmiş qiymətli tender dəvətnamələri, çertyojlar üçün köməkçi alətləri və 3D yoxlama görünüşündən USD.
keywords: 0.7-də yeniliklər, əvvəlki buraxılış, buraxılış qeydləri, dəyişikliklər, 0.7, versiya, yeni xüsusiyyətlər, dwg, dxf, çertyoj, tərtibatlar, model sahəsi, çertyoj miqyası, çertyojdan say, CAD sayı, bloklar, dinamik bloklar, atributlar, qatlar, xref, əlaqəli çertyoj, çertyojdan ölçmə, polixətt, ştrixlama, işarələnmiş PDF, seçilmiş təklif, təklifi istifadə et, təklif üçün göndər, tender dəvətnaməsi, möhürlənmiş təkliflər, təkliflərin açılışı, gecikmiş təklif, subpodratçı qeydləri, csv, köməkçi, mcp, usd, usdz, vahidlər, vahid siyahıları, yığcam, panellər, dialoqlar, portuqal
from: 0e3a424f
---

Bu, TakeoffCraft 0.6-ya nisbətən 0.7-də nəyin dəyişdiyidir. Çertyojlar indi əvvəlcə PDF-ə çap etmədən olduğu kimi açılır, tender paketi isə subpodratçılara göndərilə və qiymətləndirilmiş halda geri qayıda bilər.

## Yeni

### DWG və DXF çertyojları

- **Çertyojları vərəq kimi açın.** {{ui:Planları aç}} ({{ui:Fayl}} qrupunda, {{key:Mod+O}}, və ya faylları buraxın) PDF-lərin yanında DWG və DXF çertyojlarını qəbul edir. Model sahəsi və hər tərtibat {{ui:Vərəqlər}} siyahısında vərəq olur və hesablama çertyojları və PDF-ləri birlikdə əhatə edə bilər. Heç nə yüklənmir. Bax: [DWG və ya DXF çertyojunu açın](topic:open-a-drawing).
- **Miqyas çertyojdan gəlir.** Tərtibat ən böyük görünüş pəncərəsinin miqyası ilə başlayır; hazır seçim olduqda ad ilə göstərilir, məsələn 1/2" = 1'-0". Model çertyojun vahidləri ilə başlayır. Vahidi olmayan çertyoj kalibrləyənə qədər "Miqyas yoxdur" deyir. {{ui:Kalibrlə}}, {{ui:Yoxla}} və {{ui:Hazır}} hələ də üstün gəlir. Bax: [Miqyas](topic:open-a-drawing#the-scale).
- **Qatlar və əlaqəli çertyojlar.** Vərəq zolağında {{ui:Qatlar}} çertyojun qatlarını göstərir və ya gizlədir. Faylın söndürdüyü və ya dondurduğu qatlar gizli başlayır və siz seçmədikcə sayılmır. Yanında açılmış əlaqəli çertyoj (xref) onun daxil edildiyi yerdə çəkilir və sayılır; açılana qədər status sətri nə çatmadığını göstərir. Bax: [Qatlar](topic:open-a-drawing#layers).
- **İşarələnmiş PDF çertyojdan işləyir.** {{ui:İxrac}} › {{ui:İşarələnmiş PDF}} çertyojun işarələnmiş vərəqlərini əvvəlcə PDF kimi çəkir, buna görə nüsxə çap addımı olmadan işarələrinizi və legendanızı göstərir. Qara və ya çertyojun rənglərində çəkilir, çap üslubu cədvəlləri olmadan. Bax: [İşarələnmiş PDF](topic:export-estimate#a-marked-pdf).

### Çertyojdan dəqiq saylar və uzunluqlar

- **Çertyojun dediyi şeyi sayın.** Vərəq zolağındakı {{ui:CAD sayı}} bloku adına görə sayır (daxili bloklar, dinamik blok vəziyyətləri və blok massivləri daxil), qatda bir növ hər şeyi və ya mətn və ya atribut dəyərini. Vərəqin göstərdiyini və ya bütün çertyojun bir dəfəyə sayır. İşarələri əlavə etmək bir geri qaytarma addımıdır, yenidən saymaq yalnız yeni olanı əlavə edir. {{ui:Avtomatik say}} PDF-lər və blok olmayan simvollar üçün qalır. Bax: [Çertyojdan say](topic:count-from-a-drawing).
- **Çertyojun öz xətlərindən ölçün.** {{ui:Çertyojdan ölçü}} klikləyib və ya pəncərə ilə seçdiyiniz xətləri, qövsləri, polixətləri, çevrələri, ştrixlamaları və solidləri xətti və ya sahə elementinin işarələri kimi götürür. Qövslər, bulcuqlar və ştrixlamanın dəlikləri dəqiq çıxır; ellipslər və splaynlar incə akkordlarla ölçülür və panel bunu deyir. Bax: [Çertyojdan ölçmə](topic:measure-from-a-drawing).

### Tenderlər

- **Subpodratçının təklifini tender paketinin qiyməti kimi istifadə edin.** {{ui:İxrac}} › {{ui:Tender paketləri və səviyyələndirmə…}} bölməsində təklifdə {{ui:İstifadə et}} seçin. Paketin elementləri miqdar olaraq qalır, bir **Seçilmiş təklif** sətiri qiyməti daşıyır, təklifin buraxdığı elementlər öz xərcinizdə qalır, overhead, mənfəət və zəmanət isə ona tətbiq olunur. Təklifləri dəyişmək bir geri qaytarma addımıdır; iş kitabı və təklif xülasəsi onu daşıyır. Bax: [Təklifi paketin qiyməti kimi istifadə edin](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Paketi təklif üçün göndərin.** Paketin altındakı {{ui:Təklif üçün göndər…}} hər subpodratçıya hesab tələb etməyən səhifənin linkini e-poçtla göndərir: onlar həcmi və vərəqləri PDF kimi görür, hər sətrə qiymət yazır və ya daxil olmadığını işarələyir, qeydlər və üç fayla qədər əlavə edir, ya da imtina edirlər. {{ui:Qiymətləri al}} qayıdanları səviyyələndirmə vərəqinə **veb** işarəsi ilə gətirir. Göndərmək yalnız CadCraft komandasının sınaq zamanı aktivləşdirdiyi hesablara açıqdır (aşağıya bax). Bax: [Paketi təklif üçün göndərin](topic:bid-invitations).
- **Açılışa qədər möhürlənib.** Qiymətlər təyin etdiyiniz açılış vaxtına qədər möhürlənmiş qala bilər: ona qədər heç kim qiyməti görmür, siz də daxil. Açılışda hər təklif bir anda görünür və son tarixdən sonra gələn təklif gecikmiş kimi işarələnir. Bax: [Möhürlənmiş təkliflər və açılış](topic:bid-invitations#sealed-bids-and-the-opening).
- **Subpodratçı qeydləri.** getcadcraft.com-dakı hesabınız hər şirkətin əlaqələrini, ixtisaslarını, ixtisas cavablarını və sığorta və lisenziya tarixlərini saxlayır (keçmiş və ya 30 gün ərzində olanlar işarələnir), keçmiş təklifləri ilə birlikdə. CSV kimi idxal və ixrac edin və paket göndərəndə onları seçin. Bax: [Veb saytda](topic:bid-invitations#on-the-website).

### AI köməkçilər

- **Köməkçilər hesablamaya əlavə edə bilər.** **Redaktə** işarələnəndə öz köməkçiniz elementlər (`items_add`) və vərəqdə xətt boyları, sahələr və saylar (`marks_add`; uzunluqlar və sahələr yalnız miqyaslı vərəqdə) əlavə edə bilər, hər çağırış bir geri qaytarma addımıdır.
- **Çertyojlar üçün köməkçi alətləri.** Açıq DWG və ya DXF-də köməkçi vərəqlərini və nəyin sayıla biləcəyini siyahıya sala, dəqiq sayа, sayma işarələri əlavə edə və çertyojun həndəsəsindən ölçə bilər. TakeoffCraft açıq olmadan CadCraft MCP serveri çertyoju yeni hesablama kimi açır və saxlayır, `cadcraft count` isə komanda sətrindən sayır. Bax: [Köməkçinin nə istəyə biləcəyi](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D yoxlama görünüşü USD kimi.** 3D yoxlama görünüşündə {{ui:GLB}} yanındakı {{ui:USD paketi (.usdz)}} hər divarı, döşəməni, lövhəni, say dirəyini və xətti öz obyekti kimi yazır; elementinin adı ilə adlandırılır və miqdarını metrlərlə daşıyır. Köməkçi də onu ixrac edə bilər (`usd_export`). Bax: [3D yoxlama görünüşünü USD kimi ixrac edin](topic:usd).

## Bütün tətbiqlərdə

- **Vahidlər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} uzunluq, sahə, həcm, bucaq və meyl üçün hər biri öz siyahısına malikdir, vahidlərin təriflərinin verdiyi dəqiq ölçülərlə (ABŞ survey futu öz vahididir). İstifadə etmədiyiniz vahidləri söndürün, onlar vahid siyahılarından çıxır; birini ulduzlayın və yeni iş ondan başlayır. Fayl həmişə öz vahidini saxlayır. TakeoffCraft-da elementin {{ui:Vahid}} siyahıları açarları izləyir, yeni element ulduzlanmış uzunluq və ya sahə vahidi ilə başlayır, dam örtüyü kvadratları (SQ), akr və hektarlar yeni sahə vahidləridir, uzunluq qutusu istənilən vahidin işarəsini qəbul edir, məsələn `3 yd`. Bax: [Vahidlər, yazılmış dəyərlər və vahid siyahıları](common:unit-lists).
- **Daha sıx tərtibat və yığılan panellər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Tərtibat sıxlığı}} › {{ui:Yığcam}} ekrana daha çox sığdırır (sensor ekranlar və telefonlar böyük düymələrini saxlayır). Hər yan panelinin incə başlıq zolağı var: onu sürüklədikdə paneli bağlaya və ya üzdürə, başqa panelin zolağına buraxdıqda bir çərçivəni sekmələr kimi bölüşdürə, kənara sürüşmək üçün bərkidə və ya gizlədib kənardan geri gətirə bilərsiniz. Bax: [Panelləri düzəldin](common:arrange-panels#make-the-layout-denser).
- **Dialoqlar hərəkət edir.** Dialoqu başlıq zolağından sürükləyib çertyojun yolundan kənara çəkin; buraxdığınız yerə geri qayıdır. Başlıq zolağına iki dəfə klikləsəniz yenidən mərkəzə gəlir. Bax: [Dialoqu köçürün](common:arrange-panels#move-a-dialog).
- **AI köməkçilər üçün ssenarilər.** Öz köməkçiniz üçün on işlənmiş sorğu (çertyojun səliqələşdirilməsi, dəsti çap etmək, çertyojların yoxlanılması, modelə sual vermək, hesablamanı yekunlaşdırmaq, detal variantını sınamaq…), hər biri çağırdığı alətlər və ehtiyac duyduğu icazələrlə, və hər biri bizim testlərimizlə təkrar oynadılır. Tətbiqlərin içində AI yoxdur. Bax: [AI köməkçilər üçün ssenarilər](common:assistants-recipes).
- **Dillər.** **Português (Portugal)** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Dil}} daxilində yenidir. O, **Português (Brasil)**, **Español (México)** və **Bahasa Indonesia** indi tətbiqlərin hər sözünə malikdir, ana dili danışan tərəfindən hələ oxunmamış qaralamalar kimi. Yardım mövzuları ingilis dilindədir.
- **CadCraft Studio** yeniləmə yoxlaması niyə uğursuz olduğunu deyir (sisteminiz üçün hələ fayl yoxdur, şəbəkə yoxdur, pis imza) və yalnız "Hazırdır" yazmır; bağladığınız Yeniliklər kartını yeni buraxılış olana qədər geri qaytarmağı dayandırır.

## Bu versiyada hələ yoxdur

- **0.7 kod imzası ilə imzalanmayıb.** İmzalama və Microsoft Store paketi 0.8-ə keçirildi, çünki sertifikat yoxlaması hələ gəlməyib. getcadcraft.com/download-da hər faylın yanındakı SHA-256-ı yoxlayın. Windows-da SmartScreen quraşdırıcını dayandırarsa, {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də ilk dəfə CadCraft Studio-ya sağ klik edib {{ui:Açıq}} seçin. CadCraft Studio hələ tətbiq mağazasında deyil və hələ iPad və ya iPhone quruluşu yoxdur.
- {{ui:Vahidlər}} daxilindəki bucaq və meyl siyahıları saxlanılır, lakin hələ heç bir qutu onları oxumur.
- **Tender dəvətnamələri hesabların çoxu üçün söndürülüb.** Sınaq zamanı xaricdəki təklifçilərə poçt yalnız CadCraft komandasının aktivləşdirdiyi hesablardan gedir. Artıq göndərilmiş hər dəvətnamə üçün təklifçilərin səhifələri işləyir. Qalanlar: {{ui:Əhatə CSV}} yükləyin, özünüz e-poçtla göndərin və təklifləri yazın.
- CadCraft Studio pəncərəsi hələ tender dəvətnaməsi göndərə bilmir: brauzerdə TakeoffCraft-ı istifadə etməyi deyir. Göndərilmiş sorğuları olan hesablamanı açmaq, səviyyələndirmə və təklif seçmək Studio-da işləyir.
- Əlavələr (addenda), podrat müqavilə məktubları, hər təklifçinin imzaladığı kapsam vərəqi və sığorta tarixi bitməzdən əvvəl avtomatik xatırlatmalar hələ qurulmayıb. Seçilmiş təklif alternativ təklifçinin sahəsini yenidən qiymətləndirmir.
- Çertyojlar: çap üslubu cədvəlləri və CTB faylları tətbiq olunmur, ikili DXF rədd edilir (onu ASCII DXF və ya DWG kimi saxlayın), əlaqəli çertyojlar yalnız açıq fayllar arasında fayl adına görə tapılır, çertyojdakı PDF altlıqları, şəkillər və OLE obyektləri çəkilmir və sayılmır. Saylar və miqyaslar nümunə çertyojlarda yoxlanılıb, hələ onları yaradan proqramda açılmış real işdən olan çertyojlarda yox.
- Köməkçi elementlər və işarələr əlavə edə bilər, lakin artıq olan işarələri hərəkət etdirə, dəyişə və ya silə bilmir.

Qalan hər şey [Hələ qurulmayıb](topic:not-built-yet) bölməsindədir.
