---
title: Tender üçün paket göndərin
summary: Tender paketini subpodratçılara e-poçtla göndərin, onlara hesab tələb etməyən səhifədə qiymət yazmağa icazə verin, qiymətləri açılış vaxtına qədər möhürlü saxlayın və onları səviyyələndirmə vərəqinə gətirin.
keywords: tender üçün göndər, dəvətnamə, tender dəvətnaməsi, tenderçi, subpodratçı, dəvət, e-poçt, qiymət sorğusu, möhürlü tenderlər, tender açılışı, tender günü, gecikmiş təklif, son tarix, xatırlatma, subpodratçı qeydləri, sığorta, ixtisas, csv, qoşul, vərəq pdf
from: fb314b2c
---

{{ui:İxrac}} › {{ui:Tender paketləri və səviyyələndirmə…}} › {{ui:Təklif üçün göndər…}} seçilmiş insanlara bir paket göndərir. Sayt hər biri üçün link e-poçtla göndərir; onlar səhifəni açır, əhatəni görür və hər sətir üçün qiymət yazır. Qiymətləri səviyyələndirmə vərəqində müqayisə üçün hazır görürsünüz ([Tender paketləri və tender səviyyələndirmə](topic:bid-leveling)).

:::note
Göndərmə **hələ hamıya açıq deyil.** Funksiya sınaqdan keçirilən zaman CadCraft komandası tərəfindən aktiv edilmiş hesablar üçün işləyir; sizinki deyilsə, dialoq bunu deyir. Tenderçinin səhifəsi göndərilmiş hər dəvətnamə üçün işləyir.
:::

## Göndərməzdən əvvəl

- Təsdiqlənmiş e-poçtu olan CadCraft hesabınız olmalıdır. Brauzerdə TakeoffCraft **Qoşul** düyməsini tələb edir: getcadcraft.com-da səhifə açılır, siz Qoşul basırsınız və həmin səhifə 30 gün işləyən, yalnız tender paketləri üçün, TakeoffCraft pəncərəsini bağlamağa qədər keçərli giriş əldə edir. Bunu istənilən vaxt təhlükəsizlik səhifənizdən silə bilərsiniz. Studio pəncərəsi hələ göndərə bilməz.
- Hər elementə CSI nömrəsi verin: paket bir CSI bölməsinin elementləridir ([Həcmlərin hesablanması elementləri yaradın](topic:create-items)).
- Paketin işarələri olan vərəqləri miqyaslayın ki, tenderçilərin gördüyü miqdarlar ölçülmüş olsun.

## Paket göndərin

1. Paketin altında {{ui:Təklif üçün göndər…}} seçin.
2. Başlıq, layihə və istəyə bağlı mesajı doldurun, və öz vaxt qurşağınızda **son vaxt** qeyd edin.
3. **Qiymətləri möhürlü saxla** işarəli qalsın ki, bütün qiymətlər **açılış vaxtına** qədər gizli olsun (son vaxtdan əvvəl deyil), ya da qiymətləri gəldikcə görmək üçün işarəni silin.
4. **Vərəqlər** qutusu işarəli qalsın ki, paketin işarələri olan vərəqlərin PDF-i işarələrlə birlikdə göndərilsin. Sizin qiymətləriniz göndərilənə heç vaxt daxil olmur: yalnız elementlərin adları, CSI nömrələri, miqdarlar, vahidlər və vərəq adları.
5. Dəvət ediləcək insanları, hər sətirdə bir, `Name <name@company.com>` və ya sadəcə ünvan kimi yazın, ya da subpodratçı qeydlərinizdən işarə qoyun. Bir dəfəyə 60-a qədər, paketə 100-ə qədər.
6. {{ui:Dəvətnamələri göndər}} seçin. Hər adam sizin adınız və e-poçt ünvanınızla, son vaxtla və linklə bir sadə e-poçt alır; cavablar sizə gedir.

Dialoq neçə nəfərə göndərildiyini deyir və ötürülən adları göstərir: bu paketə artıq dəvət edilmiş, tender dəvətnaməsi almamağı xahiş edən, düzgün olmayan ünvan və ya göndərmə limiti aşan.

## Tenderçi nə görür

Uzun şəxsi link olan səhifə, giriş tələb etmir. Onları kimin dəvət etdiyini, son vaxtı, qiymətlərin möhürlü olub-olmadığını, mesajınızı və vərəqlər PDF-ini göstərir, sonra hər sətiri miqdarı ilə. Hər sətir üçün qiymət yazır və ya **Daxil deyil** işarələyir və qeyd əlavə edə bilər; bütün paket üçün qeydlər və 3 fayla qədər (təklif, əhatə məktubu, sertifikat) əlavə edə bilər. Açılışa qədər yenidən saxlaya və qiymətlərini dəyişə bilərlər, ya da **rədd et** seçə bilərlər, CadCraft-ın onlara bir daha tender dəvətnaməsi göndərməməsi üçün qutu ilə.

## Möhürlü tenderlər və açılış

Açılış vaxtından əvvəl **heç kim** heç bir qiymət, qeyd və ya fayl görmür: nə siz, nə TakeoffCraft-da, nə də Tender paketləri səhifənizdə. Dəvət edilənləri və cavab verib-vermədiklərini görürsünüz. Açılış vaxtında hər tender bir anda görünür. Son vaxtdan sonra saxlanılan tender qəbul olunur və **gecikmiş** işarələnir; səviyyələndirmə onu hələ də siyahıya salır, gecikmə isə işarədir, qərar deyil. Açılışdan sonra tenderçi qiyməti dəyişə bilməz. Möhürləmə olmadıqda, tender son vaxt keçəndən sonra qətidir.

## Qiymətləri alın

{{ui:Qiymətləri al}} saytdan sorğu edir və hər cavabı paketə **web** işarəli tender kimi əlavə edir. TakeoffCraft qoşulu olduqda, hər dəfə dialoqu açdığınızda da səssizcə soruşur. Tenderçi yeni versiya saxladıqda tender yerində yenilənir; siz redaktə etdiyiniz tender isə onlar yeni versiya göndərənə qədər olduğu kimi qalır. Hər çəkmə bir addımdır və {{key:Mod+Z}} onu geri qaytarır. Buraxılmış sətirlər tenderin buraxdığı əhatə kimi gəlir, buna görə səviyyələndirmə onları öz xərcinizlə doldurur.

## Saytda

Göndərə bildiyiniz zaman hesabınızda daha iki səhifə olur. **Tender paketləri** göndərdiklərinizi, cavab verənləri, gecikmiş tenderləri və faylları göstərir; xatırlatma göndərməyə (yeni link; köhnə işləməz), paketi bağlamağa, yenidən açmağa və ya ləğv etməyə imkan verir. **Subpodratçılar** hər şirkət üçün qeyd saxlayır: əlaqələr, sənayə sahələri, ixtisas cavabları (fəaliyyət illəri, zəmanət tutumu, EMR, təhlükəsizlik qeydi, həmkarlar və ya açıq sex, istinadlar), lisenziya və sığorta bitmə tarixləri (bitdikdən sonra və ya 30 gün ərzində işarələnir) və keçmiş tenderləri. Qeydləri CSV kimi idxal və ixrac edin: hər əlaqə üçün bir sətr, ixrac göstərdiyi sütunlarla; artıq olan şirkət yenilənir, heç vaxt təkrarlanmır.

## Kim nəyi görür və nə qədər saxlanılır

Tenderçinin qiymətləri, qeydləri və faylları sizə və səhifəni işlədən CadCraft komandasına gedir. Son vaxtdan sonra 24 ay, faylları 180 gün saxlanılır; sonra silinir. Tenderçinin e-poçt ünvanı sizin daxil etdiyinizdir; yalnız həmin dəvətnamə və onun xatırlatması üçün göndərilir. Bir ünvana hər kəsdən birlikdə gündə ən çox 3 dəvətnamə gedə bilər, siz gündə 200-ə qədər göndərə bilərsiniz.

## Hələ hazır deyil

Əlavə sənədlər, təsdiq məktubları, hər tenderçi üçün imzalanmış əhatə vərəqi və sığorta tarixi bitməzdən əvvəl avtomatik xatırlatmalar hazır deyil. Bax: [Hələ hazır deyil](topic:not-built-yet).
