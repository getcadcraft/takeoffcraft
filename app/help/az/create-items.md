---
title: Smeta elementləri yaradın
summary: Xətti, sahə və say elementləri yaradın, onların vahidini, hündürlüyünü və ya dərinliyini, itkisini, material və əmək dərəcələrini təyin edin.
keywords: briqada, istehsal dərəcəsi, briqadanın tərkibi, əmək haqqı, saat, adam-saat, briqada-gün, əmək saatları, element, yeni element, şərt, çoxşərtli, həm də ölçün, bir neçə növ, otaq, xətti, sahə, say, vahid, hündürlük, dərinlik, itki, material, əmək, dərəcə, rəng, dəyər
from: 7fa5effc
---

Bir **element** ölçdüyünüz və qiymətləndirdiyiniz bir şeydir: divar növü, döşəmə örtüyü, tavan, qapı, işıq qurğusu. Çəkdiyiniz hər işarə bir elementə aiddir. Başqa proqramlar bunlara **şərt** deyir.

Hər elementin növü var (və ona başqa növ işarələr də aid edilə bilər, bax [Bir element, bir neçə növ işarə](topic:create-items#one-item-several-kinds-of-marks)):

| Növ | Çəkirsiniz | Hesabat verir | Vahidlər |
|---|---|---|---|
| Xətti | Birləşmiş nöqtələrdən ibarət xətlər | Uzunluq, xətlərin sayı və hündürlük olduqda divar sahəsi | LF və ya m |
| Sahə | Kəsiklərlə bağlı konturlar | Sahə, perimetr, sahələrin sayı | SF, SY, SQ, ac, ha və ya m² |
| Say | Hər şey üçün bir klik | Neçə ədəd | EA |
| Yazılmış miqdar | Heç nə: miqdarı özünüz yazırsınız | Yazdığınız rəqəm (və ya CivilCraft-dan gətirilən) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha və ya m² |

## Yazılmış miqdarlar (çertyojsuz)

Smetadakı bəzi şeylər heç vaxt çəkilmir: mobilizasiya, icazələr, ehtiyat məbləğ, bağlanmış subpodratçı işi, CivilCraft-ın hesabladığı kəsmə və doldurma. Onları **Yazılmış miqdar** edin:

1. {{ui:Yeni element}} seçin, ad yazın, {{ui:Yazılmış miqdar (çertyojsuz)}} seçin və {{ui:Əlavə et}} düyməsini seçin.
2. Element redaktorunda {{ui:Vahid}} seçin (bağlanmış məbləğ üçün LS) və {{ui:Miqdar}} yazın: `1`, `2.5` və ya `1,250`.
3. İtkini və dərəcələri hər digər element kimi təyin edin. Yığım düsturları miqdarı bildirən `Q` hərfini istifadə edir, məsələn `ceil(Q / 12)` yük maşını reysi.

Yazılmış miqdar heç bir işarə almır və heç vaxt smetanı natamam etmir. Tender bölmələri olduqda redaktorda həmçinin {{ui:Tender bölməsi}} var: miqdar orada, onun alternativlərində və cəmlərində, sanki orada işarə olmuş kimi sayılır. Başqa proqramdan gətirilən miqdarlarda mənbə göstərilir, bax [Kəsmə-doldurma və nöqtə hündürlükləri](topic:earthwork#cut-and-fill-from-civilcraft).

## Element yaradın

1. Sağdakı {{ui:Elementlər}} panelində {{ui:Yeni element}} seçin.
2. Ad yazın, məsələn `Daxili divar, növ A` və ya `Xalça plitəsi`.
3. Növü seçin: {{ui:Xətti (uzunluq)}}, {{ui:Sahə}} və ya {{ui:Say}}.
4. {{ui:Əlavə et}} seçin (və ya {{key:Enter}} basın).
   Element siyahıda öz rəngi ilə görünür, onunla çəkdiyiniz element olur və onun redaktoru siyahının altında açılır. Status zolağı növbəti hansı aləti seçməyiniz lazım olduğunu göstərir.

Elementi əlavə etmədən formanı bağlamaq üçün formada {{key:Esc}} basın.

:::tip
Əvvəlcə ölçmə alətini seçsəniz, TakeoffCraft həmin növün sonuncu elementini istifadə edir, ya da həmin növ artıq seçilmiş {{ui:Yeni element}} formasını açır.
:::

## Çəkdiyiniz elementi seçin

Siyahıda elementə klikləyin. O, yeni işarələrin aid olduğu element olur və onun işarələri bütün vərəqlərdə vurğulanır, digərləri solğunlaşır. Açıq vərəqdə onun işarəsi yoxdursa, TakeoffCraft işarəsi olan vərəqə keçir. Elementə yenidən klikləyin ki, vurğulama dayansın; o, yenə də çəkdiyiniz element olaraq qalır.

{{ui:Seç}} aləti ilə işarəyə klikləmək də onun elementini cari edir.

## Elementi quraşdırın

Element redaktorunda (**Element: (ad)**) bu sahələr var. Hər biri sahəni tərk etdikdə və ya {{key:Enter}} basdıqda saxlanılır, hər dəyişiklik geri qaytarıla bilir.

| Sahə | Nə edir |
|---|---|
| {{ui:Ad}} | Siyahıda, cədvəllərdə və ixrac fayllarında göstərilir. |
| {{ui:Yaz}} | Xətti, Sahə və ya Say. Elementin işarəsi olduqdan sonra kilidlənir ("İşarəsi olan element öz növünü saxlayır"). |
| {{ui:Rəng}} | İşarələrinin ekranda və işarələnmiş PDF-də rəngi. |
| {{ui:Vahid}} | Miqdarın hansı vahidlə göstərildiyi: xətti üçün LF və ya m; sahə üçün SF, SY, SQ, ac, ha və ya m²; say üçün EA. |
| {{ui:Həm də ölçün}} | Elementin qəbul etdiyi digər işarə növləri, hər birinin öz vahidi ilə. Aşağıya bax. |
| {{ui:Hündürlük}} (xətti) | Divar hündürlüyü. Element bundan sonra divar sahəsini də (uzunluq × hündürlük) göstərir. BimCraft modelindən gələn xətlər öz qapı və pəncərələrini də daşıyır: onlar bir dəfə çıxılır və element ümumi sahəni, açılışları və xalis sahəni göstərir. BimCraft layihəsindən olan və ölçmə üsulu seçilmiş smeta həmin üsulla burada da ölçülür (qeyddə üsul və mənbəyi adlandırılır və bunun miqdar üzrə mühəndis tərəfindən yoxlanılmadığı deyilir); üsulu TakeoffCraft-da dəyişmək olmur. Divar növündən gələn kərpiclər və ya bloklar və məhlul iki komponent kimi gəlir: sifariş ediləcək vahidlər və məhlulun həcmi. |
| {{ui:Dərinlik}} (sahə) | Dərinlik və ya qalınlıq, yığım düsturlarında istifadə olunur (məsələn beton həcmi). |
| {{ui:İtki %}} | Qiymətləndirmədən əvvəl miqdara əlavə olunur: 10 deməkdir miqdar × 1.10. |
| {{ui:Material $/LF}} | Vahid üzrə material dəyəri. Etiket vahidi izləyir: $/SF, $/EA və s. |
| {{ui:Əmək $/LF}} | Vahid üzrə əmək dəyəri. |
| {{ui:CSI nömrəsi}} | CSI MasterFormat nömrəsi, məsələn `09 21 16` (və ya yalnız bölmə, `09`). İş kitabçasında "Bölmə üzrə" vərəqi xərcləri bunun üzrə qruplaşdırır. [Peşə paketləri](topic:trade-packs) elementlərində bu artıq var. |

Hündürlük və dərinlik İngilis ölçü vahidləri üçün fut və düym (`9'-0"`, `8' 6"`) və ya onluq fut (`9`) qəbul edir, metrik vahidlər üçün isə metr (`2.7`, `2700 mm`). Dərəcələr `12.50` və ya `$1,250` kimi, dörd onluq işarəyə qədər yazılır. Bax: [Uzunluq, dərəcə və faiz daxiletməsi](topic:entry-formats).

Sahələrin altında **Ölçülən** göstərir elementin düsturlarında istifadə oluna bilən cəmləri, hərflərlə birlikdə: xətti üçün Uzunluq (L), Xətlər (N), Divar sahəsi (A); sahə üçün Sahə (A), Perimetr (P), Sahələr (N); say üçün Say (N).

## Bir element, bir neçə növ işarə

Bəzi şeylər bir neçə yolla ölçülür: otağın döşəməsi (sahə), divar boyu plintus (uzunluq) və qapılar (say) var. Üç element yerinə bir element yaradın:

1. Elementi əsas növü ilə yaradın, məsələn `Otaq 101` adlı sahə elementi.
2. Onun redaktorunda {{ui:Həm də ölçün}} altında {{ui:Xətti}}, {{ui:Say}} və ya hər ikisini işarələyin. Hər birinin yanında vahid görünür.
3. Elementin qəbul etdiyi növə uyğun hər hansı alətlə çəkin: `Otaq 101` cari olanda {{ui:Sahə}} döşəməsini, {{ui:Xətti}} plintusunu, {{ui:Say}} qapılarını çəkir. TakeoffCraft başqa element soruşmur.

Element siyahısı hər miqdarı göstərir (`50.00 SF + 2 EA`). Miqdarlar cədvəlində elementin sətrində əsas miqdar olur, hər digər növ üçün altında ayrıca sətir çıxır, məsələn **Otaq 101 (say)**, öz itki və material və əmək dərəcələri ilə. İxraclar, vərəq üzrə cədvəl və işarələnmiş PDF-in legendası onları eyni qaydada sadalayır.

Əsas növün sahələri öz növünə aiddir: hündürlük və ya dərinlik, meyl, geri çıxarmalar və 3D forma yalnız onun işarələrinə tətbiq olunur. Sahə elementi üçün çəkilmiş baza xətti planda sadəcə uzunluq üzrə ölçülür və 3D-də düz görünür. Yığım düsturları əsas növün cəmlərini istifadə edir.

Növ yalnız elementdə onun işarələri olmadıqda söndürülə bilər; əvvəlcə onları silin və ya **Seçilmiş işarə** altında başqa elementə köçürün. İşarələr öz növünü qəbul edən istənilən elementə köçürülə bilər.

Daha aşağıda {{ui:Yığım}} var: taxta karkas və ya lövhə kimi komponentlər, hər birinin öz düsturu və dərəcələri ilə. Bax: [Yığımlar və düsturlar](topic:assemblies).

Ən aşağıda {{ui:Yuxarı köçür}} və {{ui:Aşağı köçür}} elementin siyahıdakı və ixraclardakı yerini dəyişir, {{ui:Elementi sil}} isə onu bütün işarələri ilə birlikdə silir (soruşduqdan sonra; geri qaytarmaq olar).

Sahə elementlərində həmçinin **Meyl** (dam müstəvilərinin yamacda ölçüldüyü: [Damlar və yamaclar](topic:roofs-and-slopes)) və **Geri çıxarma** (işarələri digər elementlərin sahələrindən çıxır: [Sahələrin ölçülməsi](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)) var. Xətti elementlərdə **Yamac** (Səviyyə, Yan (Rake), Künc (Hip) və ya Vadi) və yan və künc üçün **Meyl** var.

## Cədvəldə dərəcələr

İtki %, material və əmək dərəcələrini birbaşa altdakı {{ui:Miqdarlar}} cədvəlində ({{ui:Elementə görə}}) də yaza bilərsiniz. Bu redaktordakı eyni ayarlardır.

## Qiymətləndirmə necə işləyir

Hər element və hər yığım komponenti üçün:

1. **İtki ilə** = miqdar × (1 + itki %).
2. **Material** = itki ilə × vahid üzrə material, sentə qədər yuvarlaqlaşdırılır.
3. **Əmək** = itki ilə × vahid üzrə əmək, sentə qədər yuvarlaqlaşdırılır.
4. **Cəm** = material + əmək.

{{ui:Layihənin cəmi}} hər elementi və hər komponenti toplayır. Element öz dərəcələrini və eyni zamanda yığımı daşıya bilər; hər ikisi sayılır, buna görə komponentləri dəyəri daşıdıqda elementin dərəcələrini 0 saxlayın.

## Briqada üzrə əmək

Elementin əməyi vahid üzrə əmək dərəcəsi əvəzinə briqadadan gələ bilər: briqada saatda nə qədər istehsal edir, neçə nəfərdir və hər biri nə qazanır. Element redaktorunda {{ui:Briqada üzrə əmək}} altında {{ui:Əməyi briqadadan qiymətləndirin}} qutusunu işarələyin və doldurun:

| Sahə | Nümunə |
|---|---|
| {{ui:İstehsal}} | `20` LF saatda (elementin vahidi ilə) bütün briqada üçün |
| {{ui:Briqadanın tərkibi}} | `2` nəfər |
| {{ui:Hər nəfər üçün saatlıq əmək haqqı, $}} | `45` |

TakeoffCraft itki ilə miqdardan hesablayır:

- **briqada-saatı** = miqdar ÷ istehsal (110 LF ÷ 20 = 5.5),
- **adam-saatı** = briqada-saatı × briqadanın tərkibi (11),
- **briqada-günü** = briqada-saatı ÷ 8 (0.69),
- **əmək** = adam-saatı × əmək haqqı ($495.00).

Redaktor nəticəni və ona çatan dərəcəni göstərir ($4.50/LF). Elementin öz əmək dərəcəsi bundan sonra yalnız oxunandır, həm redaktorda, həm cədvəldə. {{ui:Miqdarlar}} cədvəlinin başlığı işin adam-saatını və briqada-gününü əlavə edir. İxraclar hər briqadanın saatlarını qeyd edir, iş kitabçasında isə əmək xanası briqadaya bağlı düsturdur (`ROUND(F2/20*2*45,2)`). Vahid üzrə dərəcəyə qayıtmaq üçün qutunu sönün.

## Metrik elementlər

Vahid kimi m (xətti) və ya m² (sahə) seçin. Miqdarlar, hündürlüklər və düstur dəyərləri o zaman metrlə olur. Vərəqin miqyası istənilən hazır və ya kalibrləmə ola bilər; vahidlər və miqyaslar bir-birindən asılı deyil.

## Növbəti

- [Xətti xətləri ölçün](topic:measure-linear)
- [Kəsiklərlə sahələri ölçün](topic:measure-areas)
- [Əllə say](topic:count-by-hand)
