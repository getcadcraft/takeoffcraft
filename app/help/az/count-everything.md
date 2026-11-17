---
title: Dəstdə hər şeyi sayın
summary: Simvol legendasını bir dəfə qutuya alın və TakeoffCraft bir işləmədə hər açıq vərəqdə ondakı hər simvolu sayır. Hər say öz vərəyinə keçiddir və əlavə edilməzdən əvvəl nəzərdən keçirirsiniz.
keywords: hamısını say, legenda, simvol legendası, bütün dəst, hər vərəq, bütün vərəqlər, hər qapı, hər qurğu, cihazlar, cədvəl, simvollar, avtomatik say, plan dəsti, 200 vərəq, uyğunluq səviyyəsi, oxşar
from: adc99744
---

{{ui:Hamısını say}} simvol legendasını oxuyur və sonra hər açıq vərəqdə ondakı hər simvolu sayır. Bu, bütün legenda üçün bir dəfəyə {{ui:Avtomatik say}} deməkdir. Bu, öz vərəqləriniz üzərində sadə simvol uyğunlaşdırmasıdır, öyrədilmiş model deyil və heç nə kompüterinizdən çıxmır. Əlavə etməzdən əvvəl sayları nəzərdən keçirin: bu köməkçidir, zəmanət deyil.

## Legendanı sayın

1. Planları açın. Hər hansı vərəqdəki legenda kifayətdir: simvollar yanlarında adları ilə.
2. Alətlər panelində {{ui:Hamısını say}} seçin.
3. Legendanı, simvolları və adları qutuya alın. Simvol olmayan başlıq (SYMBOL LEGEND) təkbaşına çıxarılır.
   Panel hər simvolu onun şəkli və yanında çap olunmuş adla siyahılayır. Ad elementin adına çevrilir, ona görə istəsəniz burada adını dəyişin.
4. İstəmədiyiniz simvolun işarəsini çıxarın. Axtarıla bilməyən simvol (çox kiçik və ya boş) bunun səbəbini deyir.
5. {{ui:N vərəqdə say}} seçin. Axtarılan vərəqi göstərən zolaq görünür; {{ui:Ləğv et}} işləməni dayandırır. Səhifə istifadə olunmağa davam edir.

Legendanın öz simvolları öz vərəqində sayılmır. Başqa miqyasda çəkilmiş vərəq həmin miqyasda axtarılır və simvollar hər düz bucaqda fırladılaraq tapılır.

## Sayları nəzərdən keçirin

- Hər simvol öz cəmini və altında, tapıntısı olan hər vərəq üçün keçidi göstərir ("E-103: 4"). Keçidi klikləyin və həmin vərəqə gedin. Tapıntılar elementin rəngində qutuya alınır.
- **Qutunu klikləyin** ki, o tapıntı çıxarılsın. O, qırıq və üstü xətlənmiş olur; yenidən klikləsəniz geri gəlir.
- **Uyğunluq səviyyəsini hərəkət etdirin** (50%-dən 100%-ə, Parametrlərdəki səviyyədən başlayaraq). Yüksək səviyyə yalnız yaxın uyğunluqları saxlayır. Sürgü yalnız tapılanı süzür; heç nə yenidən axtarılmır.
- Bir-birinə oxşayan iki simvol (ikiqat və dörd rozetka) eyni yeri uyğunlaşdıra bilər. Daha yaxşı uyğunluq onu götürür və panel bu cür neçə yer olduğunu deyir ki, yoxlaya biləsiniz.
- Simvolun ölçüsündə axtarmaq üçün çox böyük vərəq atlanır və panel bunu deyir.

## Əlavə edin

{{ui:N nişan əlavə et}} seçin. Hər simvol hər tapıntıda nişanı olan say elementinə çevrilir. Adı artıq sizin say elementiniz olan ad təkrar istifadə olunur (artıq əl ilə işarələdiyiniz yerdə heç nə ikiqat olmur). Bütün işləmə bir addımdır: {{key:Ctrl+Z}} hər elementi və nişanı geri götürür.

Qəbul etdikləriniz {{ui:Öyrənilmiş}} siyahısını da qidalandırır: simvollar növbəti dəfə üçün hesablamanın faylında yadda saxlanılır.

## Köməkçinizlə

Parametrlərdə köməkçilərə icazə versəniz, onlar legendanı oxuya bilər (legend_open), sayı fonda işlədə bilər (legend_count_start, sonra legend_count_status), sayları oxuya bilər (legend_count_result) və əlavə edə bilər (legend_count_add; əvvəl nəyi əlavə edəcəyini göstərə bilər). Bu, panelində gördüyünüz eyni işləmədir.

## İstənilən bucaqda simvollar

Saymazdan əvvəl {{ui:İstənilən bucaqda simvollar}} işarələyin ki, düz bucaqda olmayan bucaqda çəkilmiş simvolları da tapsın (diaqonal divar fişi, dam izləyən qurğu). Axtarış hər 15 dərəcədə hər simvolu fırladır; dairəvi simvol hələ də bir axtarış tələb edir, dairəvi olmayan simvol isə altı dəfə uzun çəkə bilər. Kvadrat çəkilmiş planlar üçün söndürülmüş qoyun.

## Yaxşı bilmək üçün

- Legendadakı kimi eyni üsulla çəkilmiş simvollar lazımdır. Legenda vərəqlərdən fərqli ölçüdə çəkilibsə, vərəqlərin miqyası təyin olunduqda problem yoxdur; miqyas olmadan simvollar legendanın ölçüsündə axtarılır.
- Simvolun içindən divar və ya uzun xətt keçirsə, buraxıla bilər, çünki o artıq legendanın şəklinə oxşamır. Qalanına etibar etməzdən əvvəl ilk vərəqdəki tapıntıları yoxlayın.
- Mətnsiz skan da işləyir: simvollar sətirlərinə görə tapılır və adları siz yazırsınız.
