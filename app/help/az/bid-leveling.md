---
title: Tender paketləri və tender səviyyələndirmə
summary: Smetanı fənlərə görə paketlərə bölün, hər paketin əhatəsini subpodratçılara göndərin, geri gələn tenderləri eyni əhatə üzrə müqayisə edin və seçilmiş tenderi paketin qiyməti kimi istifadə edin.
keywords: tender səviyyələndirmə, səviyyələndirmə, tender paketi, subpodratçı, subtender, əhatə, tıxac, fənn, CSI bölməsi, tenderləri müqayisə et, aşağı tender, tender cədvəli, tenderçi, mükafat, seçilmiş tender, tender istifadə et, subpodratçı qiyməti
from: 856b3088
---

Baş podratçı hər fənnin əhatəsini subpodratçılara göndərir və geri gələnləri müqayisə edir. TakeoffCraft hər ikisini hesablamadan edir: {{ui:İxrac}} › {{ui:Tender paketləri və səviyyələndirmə…}} açın.

## Paketlər

Elementlərinizin istifadə etdiyi hər CSI bölməsi üçün bir paket var (elementin {{ui:CSI nömrəsi}} rəqəmlərinin ilk ikisi, bax: [Həcmlərin hesablanması elementləri yaradın](topic:create-items)). Nömrəsi olmayan elementlər öz paketini yaradır. Hər paket öz elementlərini, işarələrinin neçə vərəqdə olduğunu və bizim öz dəyərini (baza tenderdən material və işçilik, qeydlər əlavə olunmamışdan əvvəl) göstərir.

{{ui:Əhatə CSV}} seçin ki, subpodratçıya göndəriləcək faylı yükləyəsiniz: hər element öz CSI nömrəsi, miqdarı, vahidi və olduğu vərəqlərlə. Qiymət yoxdur. Material təchizatçıları üçün iş kitabının sorğu vərəqində hissələr siyahısı var (bax: [Smetanı ixrac edin](topic:export-estimate)).

## Tenderləri daxil edin

1. Paketin altındakı boş sətirdə tenderçinin adını və tender məbləğini yazın, sonra {{ui:Tender təklifini əlavə et}} seçin.
2. Tender əhatənin bir hissəsini buraxırsa, onun {{ui:Buraxılıb}} siyahısını açın və həmin elementləri işarələyin.
3. Adı və ya məbləği düzəltmək üçün cədvəldə üstündən yazın; × düyməsi tenderi silir.

Hər dəyişiklik {{key:Mod+Z}} ilə geri qaytarılan bir addımdır və tenderlər hesablama ilə birlikdə saxlanılır.

## Tenderlər necə səviyyələndirilir

Tenderlər nadir hallarda eyni əhatəni əhatə edir. Səviyyələndirmə hər buraxılmış elementi öz xərcimizlə **tıxac** ilə doldurur, buna görə hər tender bütün paket üzrə müqayisə olunur:

**Səviyyələndirilmiş = tender + tıxaclar**

Ən aşağı səviyyələndirilmiş tender **Aşağı** işarələnir; bərabərlikdə əvvəl daxil edilən. **Xərcimizə qarşı** səviyyələndirilmiş tender minus paketin bizim öz xərcidir: mənfi o deməkdir ki, aşağıdadır. İlk baxışda ən aşağı görünən tender, çatışmayan əhatəsi hesablandıqda uda bilər.

İş kitabı hər tenderi olan paketi göstərən **Tender səviyyələndirmə** vərəqi alır: bizim smeta, hər tender, onun tıxacları, səviyyələndirilmiş cəm və fərq, canlı düsturlarla, və hər tenderin nəyi buraxdığı.

## Tenderi paketin qiyməti kimi istifadə edin

Tenderdə {{ui:İstifadə et}} seçin, o, smetada bütün paketin qiyməti olur: paketin öz qiymətləndirməsi (elementlər, onların əlavə şərtləri və yığım hissələri) layihənin cəmindən çıxır, elementlər öz tarifləriniz istinad üçün miqdar kimi qalır və **Seçilmiş tender** adlı bir sətr tenderin məbləğini daşıyır. Tenderin buraxdığı elementlər öz xərcinizdə qalır, səviyyələndirmənin artıq saydığı tıxac budur. Başqa tender seçin və ya eyni tenderi yenidən seçib geri alın; hər biri {{key:Mod+Z}} ilə geri qaytarılan bir addımdır.

Tender xülasəsində subtenderlər xərcin içində bir sətrdir: ümumi xərclər, mənfəət və zəmanət onların üzərinə adi xərclər kimi əlavə olunur; satış vergisi (yalnız material üzrə) və işçilik yükü (işçilik üzrə) isə yox. İş kitabının Smeta vərəqi seçilmiş tenderi öz sətri kimi daşıyır və Qeyd bloku onu canlı düsturlarla əlavə edir. Material siyahısı seçilmiş paketin materialını buraxır, çünki subpodratçı onu təmin edir.

Alternativin tender bölməsindəki paket yenidən qiymətləndirilmir: alternativlər və tender bölməsi aralıq cəmləri hələ də öz qiymətlərinizi istifadə edir.

## E-poçtla gələn tenderlər

Tenderləri əllə yazmağa ehtiyac yoxdur. Paketin altındakı {{ui:Təklif üçün göndər…}} hər subpodratçıya hər sətir üçün qiymət yazdığı səhifənin linkini e-poçtla göndərir; {{ui:Qiymətləri al}} onların göndərdiklərini bu cədvələ gətirir. Bax: [Tender üçün paket göndərin](topic:bid-invitations).

:::note
Tenderi əllə yazmaq hələ də işləyir və əllə yazılan tender ilə saytdan gələn yan-yana durur. Saytdan gələn tenderlər **web** (və ya son vaxtdan sonra gələnlər **web, gecikmiş**) işarələnir; qiymətləri yalnız tenderçi yeni versiya göndərdikdə dəyişir, buna görə sizin redaktələriniz həmin vaxta qədər qalır.
:::
