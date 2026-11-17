---
title: TakeoffCraft parametrləri
summary: Düymləri 1/16, 1/8 və ya 1/4-ə qədər göstərin, yeni elementləri israf faizi ilə başladın, Avtomatik say sürgüsünün harada başlayacağını seçin, çertyojun xətlərinə və ya Shift olmadan 45°-ə tutun, Otaq doldurmasının nə qədər geniş qapını bağladığını təyin edin və 3D baxışın künc göstəricisini seçin.
keywords: parametrlər, üstünlüklər, seçimlər, dəqiqlik, kəsrlər, düymlər, yuvarlaqlaşdırma, israf, standart israf, avtomatik say, hədd, uyğunluq, sürgü, tutma, 45, bucaq, shift, görünüş kubu, ox işarəsi, künc göstəricisi, 3d
from: bca3f0ed
---

{{ui:Parametrlər}} tətbiq panelindəki dişli və ya {{key:Mod+,}} ilə açılır. İlk sekmə, {{ui:TakeoffCraft}}, yalnız bu tətbiqə aid parametrləri saxlayır; {{ui:Ümumi}} isə hər CadCraft tətbiqinin paylaşdığı parametrləri saxlayır (mövzu, panellər, alətlər paneli). TakeoffCraft parametrləri yalnız tətbiqdə mövcuddur: onları burada dəyişirsiniz və bu brauzer onları yadda saxlayır. {{ui:TakeoffCraft parametrlərini sıfırla}} onları başlanğıc vəziyyətinə qaytarır.

## Fut və düym

Uzunluqları ən yaxın **1/16"** (başlanğıc), **1/8"** və ya **1/4"**-ə qədər göstərin. Bu, uzunluqların vərəqdə, panellərdə, miqdarlarda və status panelində necə oxunduğunu dəyişir.

Yalnız göstəriş yuvarlaqlaşdırılır. Miqdarlar, qiymətlər və ixraclar dəqiq uzunluqlardan hesablanır, ixraclar isə həmişə 1/16" göstərir.

## İlkin israf

Hər yeni elementin başladığı israf faizi: 0% (başlanğıc), 2%, 3%, 5%, 7.5%, 10%, 15% və ya 20%. Hər element üçün başqa israf yazmaq hələ də mümkündür: element redaktorunda və ya birbaşa miqdarlar cədvəlində. Mövcud elementləriniz öz israfını saxlayır.

## Avtomatik say: uyğunluq sürgüsünün başlanğıcı

[Avtomatik say](topic:auto-count) axtarışı bitdikdə {{ui:Uyğunluq}} sürgüsünün harada durduğu, 50%-dən 95%-ə qədər; 75% başlanğıcdır. Aşağı olduqda rədd etməyiniz üçün daha çox oxşar təklif olunur; yüksək olduqda daha az. Hər baxış zamanı sürgünü yenə də hərəkət etdirə bilərsiniz.

## Çertyojun öz xətlərinə tutma

Başlanğıcda aktivdir. Ölçəndə və ya kalibrləyəndə PDF-in xəttinə yaxın nöqtə onun son nöqtəsinə, orta nöqtəsinə, kəsişməsinə və ya ona ən yaxın nöqtəyə tullanır. {{key:F3}} və status panelindəki {{ui:Tutma}} onu da aç-bağlayır. Ətraflı: [Çertyojun xətlərinə tutma](topic:snap-to-the-drawing).

## Otaq doldurma: bağladığı açılış genişliyi

{{ui:Otaq doldurma açıqlıqları bağlayır, enə qədər}} {{ui:Otaq}} alətinin bağlı sayacağı qapı açılışının və ya boşluğun nə qədər geniş olduğunu təyin edir: 3'-0"-dan 8'-0"-ə qədər, başlanğıcda 4'-0". Ən geniş qapınızdan geniş olsa, otaq növbəti otağa keçir; qapıdan dar olsa, otaq açıq qalır. Bax: [Otağı bir kliklə doldurun](topic:measure-areas#fill-a-room-with-one-click).

## 45°-ə Shift saxlamadan tutma

Başlanğıcda deaktivdir. Aktiv olduqda xətlər, konturlar, kəsiklər və sürüklənən künclər son nöqtədən {{key:Shift}} saxlamadan 0°, 45°, 90° və ya 135°-də gedir; istənilən bucaqda klikləmək üçün {{key:Shift}} basın. Status paneli sonra yazır: "45°-ə tutulur; Shift bucağı azad edir". Yayın əyrisi üzərində klik etdiyiniz nöqtə və dairələr heç vaxt tutulmur; yayın ucu isə tutulur.

## Say işarəsinin ölçüsü

Say nöqtələri nə qədər böyükdür: {{ui:Çox kiçik}}, {{ui:Kiçik}}, {{ui:Orta}} (başlanğıc: nöqtələrin həmişə olduğu ölçü) və ya {{ui:Böyük}}. Ölçü ekranda hər miqyasda saxlanılır, işarələnmiş PDF isə hər nöqtəni kağızda vərəq ölçüsündən asılı olmayaraq eyni ölçüdə çəkir, buna görə 100%-də PDF ekrandakı kimi görünür. Ətraflı: [Əllə say](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Künc göstəricisi

Yalnız [3D yoxlama baxışı](topic:check-in-3d) üçün: {{ui:Görünüş kubu}} (başlanğıc: sağ yuxarıda kub, klikləmək, sürükləmək və çevirmək üçün), {{ui:Ox işarəsi}} (sağ aşağıda kiçik X, Y, Z işarəsi) və ya {{ui:Yoxdur}}. Dərhal dəyişir və bu brauzerdə saxlanılır. Düz vərəq heç vaxt birini göstərmir.

## Yol aləti: birləşdirdiyi ən böyük boşluq

{{ui:Yol aləti: birləşdirdiyi ən böyük boşluq}} iki xətt ucunun bir yol sayılması üçün nə qədər aralı ola biləcəyidir, PDF nöqtələrində (0.05-dən 60-a qədər; başlanğıcda 1.5). Çertyojun xətləri tez-tez bir tük qısa dayanır. Böyük olduqda daha çox birləşdirir; kiçik olduqda xətləri ayrı saxlayır. {{key:[}} və {{key:]}} seçim zamanı dəyişdirir və bu xana onu izləyir. Bax: [Xətləri seçin](topic:pick-the-lines).
