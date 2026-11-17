---
title: Buraxılışlar, revizyonlar və çertyoj dəyişiklik jurnalı
summary: Memarın modeli ilə eyni buraxılış tarixçəsini saxlayın: buraxılışları oxuyun, sahə təlimatlarını, emal çertyojlarını və əlaqəli modelləri buraxılışa görə qeyd edin və çertyoj dəyişiklik jurnalına baxın.
keywords: buraxılış, revizyon, revizyonlar, dəyişiklik jurnalı, çertyoj dəyişiklik jurnalı, çertyoj reyestri, sahə təlimatı, emal çertyoju, əlaqəli model, tender, tikinti, buraxılış tarixçəsi, miqdar siyahısı, hesablama
from: 8d8f6e68
---

## Nə edəcəksiniz

Komandanın qalan hissəsi ilə eyni buraxılış tarixçəsi üzərində işləyin. Hansı vərəqlərin hansı revizyonla göndərildiyini görün və sahədə baş verənləri aid olduğu buraxılışla əlaqələndirin.

## Addımlar

1. **Buraxılışlar və revizyonlar** bölməsini açın.
2. **Buraxılış tarixçəsini oxu** seçin və BimCraft və ya başqa tətbiqdən saxlanmış `.issues.json` faylını seçin. Onun buraxılışları və qeydləri sizinkilərə əlavə olunur. Heç nə əvəz olunmur.
3. Sahə təlimatı, emal çertyoju, qeyd dəsti, əlaqəli model və ya qeyd üçün **Qeyd əlavə et** seçin. Hansı buraxılışa aid olduğunu və onun statusunu seçin. Seçdiyiniz fayl adı, ölçüsü və SHA-256 ilə qeyd olunur; fayl öz yerində qalır.
4. **Çertyoj dəyişiklik jurnalı** hər vərəq üçün bir sətir, hər buraxılış üçün bir sütun göstərir. Mötərizədəki revizyon dəyişiklik olmadan yenidən buraxılıb.
5. **Dəyişiklik jurnalını yüklə (CSV)** buraxılışları, vərəqlər cədvəlini və qeydləri saxlayır. **Buraxılış tarixçəsini saxla** digər tətbiqlərin oxuduğu fayl yazır.

## Yaxşı bilmək

- **Buraxılışı qeyd et** ölçülmüş vərəqlərinizi buraxır, məsələn miqdar siyahısı ilə. **Sonra dəyişikliklər** həmin buraxılışdan sonra hansı vərəqlərin yenidən ölçüldüyünü göstərir.
- Tarixçə hesablama faylında saxlanılır. Hər dəyişiklik bir "Geri qaytar" addımıdır.
- Eyni faylı iki dəfə oxumaq heç nəyi iki dəfə əlavə etmir. Eyni qeydi ehtiva edən iki nüsxə olduqda daha yeni olan saxlanılır.
