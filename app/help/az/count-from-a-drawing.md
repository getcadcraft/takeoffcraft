---
title: Çertyojdan say
summary: Blokları, qat üzrə obyektləri və ya mətni birbaşa DWG və ya DXF-dən sayın: dəqiq, daxili blokların, dinamik blok variantlarının və blok massivlərinin idarə olunması ilə, bir geri qaytarma addımında.
keywords: çertyojdan say, CAD sayı, blok sayı, blokları say, insert, blokun adı, daxili bloklar, dinamik blok, variant, minsert, massiv, qat, obyekt növü, dairələr, mətn, atribut, etiket, gizli qatlar, dəqiq say, necə, qapılar, qurğular
from: 5060e24e
---

Vərəq panelində {{ui:CAD sayı}} (digər menyu üslublarında **Çertyojdan say** əmri) DWG və ya DXF-in nəyin olduğunu bildirdiyini sayır. {{ui:Avtomatik say}} simvolun şəklini axtarır və birini qaçıra və ya səhv birini tapa bilir; bu isə obyektləri sayır: `DOOR-36` adlı blokun hər insert-i bir qapıdır. Əvvəl çertyojı açın: [DWG və ya DXF çertyojunun açılması](topic:open-a-drawing).

## Blok sayın

1. Çertyojun vərəqini açın. {{ui:CAD sayı}} vərəq panelindədir.
2. Onu seçin. Pəncərə blokları neçə dənə olduğu ilə siyahılayır. Adına görə axtarın, sonra birini seçin.
3. Siyahının altındakı sətri yoxlayın: "22 tapıldı, 22 əlavə olunacaq."
4. {{ui:Əlavə et}} altında say elementi seçin və ya {{ui:Yeni say maddəsi}} saxlayıb ona ad verin.
5. Sayı göstərən əlavə etmə düyməsini seçin: {{ui:22 nişan əlavə et}}. Nişanlar blokun insert nöqtələrində görünür və elementin miqdarı sayın özüdür.

Bu bir geri qaytarma addımıdır: {{key:Mod+Z}} nişanları (və yeni elementi) birlikdə götürür. Smeta, cədvəl və işarələnmiş PDF elementə digər say elementləri kimi yanaşır.

### Nə sayılır

- **Blok adının hər insert-i**, miqyasından və bucağından asılı olmayaraq, model sahəsində və ya kağız sahəsində. Blok adları böyük-kiçik hərfə fərq qoymur.
- **Blok massivləri** (MINSERT): massivdəki hər surət bir sayılır.
- **İç-içə bloklar.** Başqa blokun içində yerləşən blok hər dərinlikdə sayılır. Siyahı "6 digər blokların içində" deyir; yalnız çertyojda birbaşa yerləşdirilmiş insert-ləri saymaq üçün {{ui:Digər blokların içindəki blokları da say}} işarəsini çıxarın.
- **Dinamik bloklar.** Dinamik blok öz adı ilə sayılır, faylın saxladığı anonim surətlər (`*U12`) ilə yox. Onun vəziyyətləri ayrıca siyahılanır ("Tək 12, İkiqat 4"): yalnız onları saymaq üçün vəziyyət seçin və ya {{ui:Bütün variantlar}}. Fayl surətin hansı vəziyyəti göstərdiyini demədikdə, onlar "(vəziyyət məlum deyil)" kimi siyahılanır.
- **Qat filtri.** Bir neçə qatda olan blok: {{ui:Qatda}} altında birini seçin.

### Nə sayılmır

- **Gizli qatlar.** Faylda söndürülmüş və ya dondurulmuş qatda olan (və ya {{ui:Qatlar}}da gizlətdiyiniz) obyekt çıxarılır və sətir neçə olduğunu deyir: "3 gizli qatda çıxarıldı". Onları da daxil etmək üçün "Bunları da say" işarələyin.
- **Açıq olmayan bağlı çertyojlar** sayılmır; pəncərə bunu deyir.
- **Eyni növ obyektin tam üstündə yığılmış obyektlər** iki sayılır (onlar iki obyektdir) və pəncərə bunu deyir: adətən yoxlamağa dəyər çertyoj səhvidir.

## Bu vərəqin göstərdiyi və ya bütün çertyoj

- **Bu vərəqin göstərdiyi** vərəqin göstərdiyi obyektləri sayır: tərtibatda, onun görünüş pəncərələri (viewport) daxilindəki model obyektləri (görünüş pəncərəsində dondurulmuş qat orada sayılmır) və tərtibatın öz obyektləri.
- **Bütün çertyoj, hər obyekt bir dəfə** model sahəsini bir dəfə sayır, nişanlar Model vərəqində olur və bir neçə tərtibatda təkrar göstərilənləri təkrar saymır.

Tərtibatın göstərdiyini saymaq və Modelin göstərdiyini saymaq eyni obyektlər üçün eyni rəqəm verir; birinə ikisini əlavə etməyin.

## Sayı yenidən sayın

Eyni bloku eyni elementlə yenidən saymaq yalnız yeni olanı əlavə edir: "22 artıq sayılıb". Hər nişan bir obyekti təmsil edir.

## Qat və növ üzrə

{{ui:Qat və növ üzrə}} seçin, qat və obyekt növü seçin (dairələr, polixətlər, ştrixlamalar…): "E-LITE qatında bütün dairələr". Blok təriflərinin içindəki obyektləri də daxil etmək üçün {{ui:Blokların içindəki obyektləri də say}} işarələyin, hər blokun yerləşdirildiyi yerdə.

## Mətn üzrə

{{ui:Mətn üzrə}} seçin, mətni yazın, məsələn `A3`, və onun dəqiq belə olduğunu, onu ehtiva etdiyini və ya bütöv söz olaraq olduğunu deyin. Mətn obyektləri, multileader mətn və blok **atribut dəyərləri** hamısı sayılır (etiket atributu `ITEM = A3` tapılır); yalnız bir atributu saymaq üçün {{ui:Atributda}} seçin. Ən çox rast gələn mətnlər klik üçün siyahılanır.

## Avtomatik say nə vaxt

PDF-lər və çertyojda blok olmayan simvollar üçün {{ui:Avtomatik say}} istifadə edin (sərbəst çəkilmiş və ya parçalanmış). Blok kimi çəkilmişləri burada sayın.
