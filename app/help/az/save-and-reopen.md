---
title: Hesablamanı saxlayın və yenidən açın
summary: Hesablamanı .takeoff.json layihəsi kimi saxlayın, eyni PDF-lərlə yenidən açın və PDF itəndə və ya dəyişəndə nə baş verdiyini öyrənin.
keywords: hesablama PDF-in içində, qoşma, saxla, aç, yenidən aç, layihə, takeoff.json, davam et, dəyişmiş PDF, itmiş PDF, ehtiyat nüsxə, avtomatik saxlama, bərpa, çöküş
from: bd5080a6
---

Hesablama kiçik layihə faylı kimi saxlanılır, `(ad).takeoff.json`. Elementlərinizi, yığımlarınızı, tarifləri, hər vərəqin miqyasını və hər işarəni saxlayır. PDF-ləri **saxlamır**; onları məzmununa görə yenidən tapır.

## Saxlamaq

1. {{ui:Fayl}} qrupunda {{ui:Hesablamanı saxla}} seçin və ya {{key:Mod+S}} basın.
   Brauzeriniz `(ad).takeoff.json` faylını yükləyir. Status paneli yazır: "(ad).takeoff.json saxlanıldı. O, eyni PDF-lər üzərində yenidən açılır (məzmununa görə uyğunlaşdırılırlar)."
2. Faylı layihənin PDF-lərinin yanına köçürün ki, ikisi birlikdə qalsın.

Hər saxlama yeni fayl yükləyir. Brauzeriniz ikinci faylı `(ad) (1).takeoff.json` adlandıra bilər; ən yenisini saxlayın.

Ad bu hesablamada açdığınız ilk PDF-dən götürülür.

:::note
{{ui:Hesablamanı saxla}} hesablamanı fayl kimi saxlamağın yeganə yoludur. İşləyərkən TakeoffCraft bu brauzerdə bərpa nüsxəsi də saxlayır (aşağıya bax), bulud saxlaması isə hələ mövcud deyil. Saxlanılmamış dəyişikliklərlə nişanı bağlamağa cəhd etsəniz, brauzer çıxmağın təsdiqini soruşur.
:::

## PDF-in içində hesablamanı saxlayın

{{ui:İxrac}} › {{ui:Hesablaması daxil edilmiş PDF}} açıq hər PDF-in nüsxəsini `Plans (with takeoff).pdf` kimi adlandırılmış şəkildə yükləyir və bütün hesablamanı qoşma kimi daşıyır: elementləri, işarələri, miqyasları, təklif sahələrini, `.takeoff.json`-un saxladığı hər şeyi. Səhifələri dəyişməz qalır, buna görə orijinal kimi görünür və çap olunur; digər PDF oxuyucuları hesablamanı öz qoşmalarında göstərir.

Bu PDF-i TakeoffCraft-da açın (PDF-ləri necə açsanız, elə) və o soruşur **Bu PDF-in içində hesablama var**: onu geri almaq üçün {{ui:Hesablamanı açın}} seçin, ya da yalnız çertyoju açmaq üçün {{ui:Yalnız PDF}} seçin. Nüsxə ondan yaradıldığı PDF-in yerini tutur, buna görə hər ikisindən saxlanılmış `.takeoff.json` hər ikisində açılır.

Bir neçə PDF ilə hər nüsxə bütün hesablamanı daşıyır; onları birlikdə açın. Nüsxədən yenidən saxlamaq içindəki hesablamanı əvəz edir, ikinci bir hesablama əlavə etmir. `.takeoff.json` hələ də saxlanılmalı fayldır: o kiçikdir və avtomatik saxlama və masaüstü tətbiqinin yazdığı odur.

## Brauzer və ya nişan dayananda

Hər dəyişiklikdən bir neçə saniyə sonra TakeoffCraft hesablamanın nüsxəsini bu brauzerin öz yaddaşında saxlayır, PDF-lər birlikdə 64 MB və ya daha az olduqda onlarla birlikdə. Heç nə yüklənmir. Hesablamanı saxlayanda, yenisini başlatanda və ya başqa layihə açanda nüsxə silinir.

Nişan çöksə, brauzer və ya kompüter dayansa, ya da saxlanılmamış dəyişikliklərlə çıxsanız, TakeoffCraft növbəti dəfə açıldıqda **İşinizi bərpa edək?** soruşur və hesablamanı adı ilə siyahıda göstərir. Onu geri almaq üçün **Bərpa et** seçin: elementlər, işarələr və miqyaslar qayıdır, PDF-lər saxlanılmışdırsa yenidən açılır. Status paneli yazır: "(ad) bərpa olundu. Hələ fayla saxlanılmayıb: Hesablamanı saxla onu saxlayır." PDF-lər saxlamaq üçün çox böyük olduqda, onları yenidən açın; işarələr öz vərəqlərində görünəcək. Ətraflı: [İşinizi bərpa edin](common:recover).

## Yenidən açmaq

1. TakeoffCraft-ı açın.
2. `.takeoff.json` faylını və PDF-lərini birlikdə səhifəyə atın. Ya da PDF-lər üçün {{ui:Planları aç}}, layihə üçün {{ui:Hesablamanı aç}} seçin, hər hansı sırada.
   Status paneli yazır: "(ad) açıldı: 12 element, 340 işarə." Hər vərəq miqyasını geri alır və işarələr öz vərəqlərində görünür.

PDF-lərin sırası əhəmiyyət kəsb etmir, adları və qovluqları da. TakeoffCraft hər PDF-i məzmununun barmaq izi ilə tanıyır.

Cari hesablamanın saxlanılmamış dəyişiklikləri olduqda layihə açsanız, TakeoffCraft əvvəl soruşur: **Ləğv et**, **Dəyişikliklərdən imtina et** və ya **Əvvəl hesablamanı saxla**. Layihəni açmaq cari elementləri və işarələri əvəz edir; artıq açıq olan PDF-lər açıq qalır.

## PDF itəndə

Layihəni bütün PDF-ləri olmadan açsanız, status paneli əlavə edir: "Onun işarələrini görmək üçün PDF-lərini açın (Vərəqlər siyahısı altında)." Vərəqlər siyahısının altında qeyd deyir:

"Bu hesablama açıq olmayan PDF-ləri də əhatə edir. Onların miqdarları sayılır; işarələrinə baxmaq və redaktə etmək üçün onları açın:"

Ardınca fayl adları və ölçüləri gəlir. Onların işarələri hər cəmdə və ixracda hələ də sayılır, ölçüldükləri miqyaslarla. Həmin işarələrə baxmaq və redaktə etmək üçün PDF-ləri açın.

## PDF dəyişəndə

Yenidən işlənmiş və ya başqa proqramla yenidən saxlanılmış PDF fərqli məzmuna malikdir, buna görə TakeoffCraft üçün **başqa fayldır**, eyni adda olsa belə. Vərəqlər siyahısının altındakı qeydə görə belə fayl deyir: "bu adlı fayl açıqdır, lakin məzmunu fərqlidir".

- İşarələr köhnə versiyaya bağlı qalır. Onlar köhnə yerləri və miqyasları ilə sayılmağa davam edir.
- Yenidən işlənmiş PDF miqyası və işarəsi olmayan yeni vərəqlər kimi açılır.

Hesablamanı revizyona keçirmək üçün hər iki PDF-i açın və yeni vərəqdə {{ui:Müqayisə et}} istifadə edin: [Yenidən işlənmiş vərəqi müqayisə edin və hesablamanı köçürün](topic:compare-revisions).

## Zədələnmiş və ya yad fayl

TakeoffCraft hər layihə faylını istifadə etməzdən əvvəl yoxlayır. Görə biləcəyiniz mesajlar:

- "(fayl) TakeoffCraft layihəsi deyil (düzgün JSON deyil)."
- "Bu TakeoffCraft layihə faylı deyil."
- "Bu layihə daha yeni TakeoffCraft ilə saxlanılıb. Onu orada açın."
- "3 işarə zədələndi və kənarda qaldı." (qalanı açılır)

## Geri qaytarma tarixçəsi

Geri qaytarma tarixçəsi layihəni açanda təzədən başlayır. Saxlamaq onu təmizləmir.
