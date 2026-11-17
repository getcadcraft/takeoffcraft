---
title: Miqdarları və smetanı oxuyun
summary: Elementə görə və vərəqə görə Miqdarlar cədvəlindən istifadə edin, layihənin ümumi cəmini, vurğulamanı və Natamam xəbərdarlığını oxuyun.
keywords: miqdarlar, cəmlər, elementə görə, vərəqə görə, layihənin ümumi cəmi, smeta, xülasə, hesabat, vurğulama, natamam, xərclər
from: 069d41f1
---

Pəncərənin aşağısındakı {{ui:Miqdarlar}} cədvəli sizin canlı smetanızdır. Siz çəkdiyiniz, sildiyiniz, miqyasını dəyişdiyiniz və ya tarifi redaktə etdiyiniz anda dəyişir. Miqdarlar heç vaxt saxlanılmır; hər dəfə işarələrdən yenidən ölçülür, buna görə köhnələ bilməzlər.

## Elementə görə

Seçin {{ui:Elementə görə}} (standart). Hər elementin bir sətri var, onun hər yığım tərkib hissəsi isə altında ayrıca sətirdə göstərilir.

| Sütun | Mənası |
|---|---|
| Element | Ad, elementin rəngi ilə. "+(n) miqyassız" o deməkdir ki, bəzi işarələr miqyası olmayan vərəqlərdədir. |
| Miqdar | Elementin vahidində ölçülmüş ümumi cəm (tərkib hissələri üçün: düsturun nəticəsi). |
| Vahid | LF, m, SF, SY, m², EA və ya tərkib hissəsinin vahidi. |
| İsraf % | Burada və ya element redaktorunda yazılır. |
| İsraf ilə | Miqdar × (1 + israf). |
| Material/vahid, Əmək/vahid | Tariflər; onları burada yaza bilərsiniz. |
| Material, Əmək | İsraf ilə × tarif, sentə qədər yuvarlaqlaşdırılmış. |
| Cəm | Material + əmək. |

Son sətir, **Layihənin ümumi cəmi**, material, əmək və cəm sütunlarını toplayır. Eyni cəm cədvəl başlığının sağında da göstərilir.

İsraf və ya tarif xanasına yazın və tətbiq etmək üçün {{key:Enter}} basın və ya kənara klikləyin. TakeoffCraft-ın oxuya bilmədiyi dəyər qırmızı ilə konturlanır və status paneli səbəbi göstərir, məsələn "Məbləği 12.50 kimi yazın."

Elementin sətrinə klikləyin: onun işarələri bütün vərəqlərdə vurğulanır və onları olan vərəqə keçid edilir (eyni ilə {{ui:Elementlər}} altında klikləmək kimi).

## Vərəqə görə

Hər vərəqdə hər elementin miqdarını və işarələrin sayını görmək üçün {{ui:Vərəqə görə}} seçin. Sətrə klikləyin ki, həmin element vurğulanmış halda vərəq açılsın. Bütün vərəqlərin ölçüldüyünü yoxlamaq və ya miqdarları mərtəbəyə və ya iş sahəsinə görə bölmək üçün istifadə edin.

## Bölməyə görə

Hesablamada təklif sahələri olduqda, {{ui:Bölməyə görə}} hər sahənin elementlərini və aralıq cəmini göstərir. Bax: [Təklif sahələri](topic:bid-areas).

## Natamam xəbərdarlığı

Cəmlərdən nəsə kənarda qaldıqda, başlıq xəbərdarlıq göstərir, məsələn:

"Natamam: 1 düstur xətası, miqyası olmayan vərəqlərdə 6 işarə (cəmlərə daxil deyil)"

- **Düstur xətaları**: yığım tərkib hissəsinin düsturu hesablana bilmir. Onun sətrində "Düstur xətası: …" yazılır. Bax: [Yığımlar və düsturlar](topic:assemblies#when-a-formula-is-wrong).
- **Miqyası olmayan vərəqlərdəki işarələr**: bu vərəqlərə miqyas verin. Bax: [Miqyası təyin edin](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Eyni qeydlər ixrac olunan cədvələ də düşür, beləliklə natamam smeta heç vaxt tam kimi görünmür.

## Elementi vurğulayın

{{ui:Elementlər}} altında və ya cədvəldə elementə klikləyin. Onun işarələri bütün vərəqlərdə tam parlaqlıqda qalır, qalanları solur. Vərəqlər siyahısında hər vərəqdə "(n) vurğulanıb" göstərilir. Vurğulamanı dayandırmaq üçün elementə yenidən klikləyin.

## Yan paneldə element cəmləri

{{ui:Elementlər}} siyahısındakı hər element də öz miqdarını göstərir. Element redaktorunun **Ölçülmüş** bloku düsturların istifadə etdiyi dəyərləri göstərir: uzunluq, sıra və divar sahəsi; sahə, perimetr və sahələrin sayı; və ya say.

## PDF-lər açıq olmayanda işarələr

Hesablama bu dəfə açmadığınız PDF-lərdəki işarələri də əhatə edə bilər. Onlar hər cəmdə yenə sayılır; vərəqlər siyahısı həmin PDF-lərin adlarını göstərir. Bax: [Hesablamanı saxlayın və yenidən açın](topic:save-and-reopen).

## Daha çox yer

{{ui:Miqdarlar}} başlığının sağındakı ox düyməsi cədvəli gizlədir ki, vərəqə daha çox yer qalsın. Cədvəli geri gətirmək üçün onu yenidən seçin.
