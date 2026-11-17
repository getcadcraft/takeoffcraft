---
title: Simvolu avtomatik say
summary: Simvolu bir dəfə çərçivəyə alın, TakeoffCraft bu vərəqdə və ya açıq bütün vərəqlərdə digərlərini tapsun, uyğunluqları sürüşdürücü ilə yoxlayın və bir addımda əlavə edin.
keywords: istənilən bucaq, fırlanmış, çevrilmiş, başqa miqyas, fərqli miqyas, avtomatik say, avtomatik sayma, simvol axtarışı, simvolları tap, naxış, şablon, uyğunluq, aşkarlamaq, say aləti
from: fa68a6c1
---

{{ui:Avtomatik say}} simvolun bir nüsxəsini çərçivəyə aldıqdan sonra onun hər nüsxəsini tapır. Sonra vərəqdəki uyğunluqlara baxırsınız və qəbul etdiklərinizi say işarəsi kimi əlavə edirsiniz. Bu, köməkçi vasitədir, zəmanət deyil: əlavə etməzdən əvvəl həmişə yoxlayın.

## Simvolları tapın

1. {{ui:Elementlər}} altında say elementi yaradın və ya onu seçin.
2. Simvolun göründüyü vərəqi açın.
3. Alətlər panelində {{ui:Avtomatik say}} seçin və ya {{key:S}} düyməsini basın.
   Vərəqin yuxarısında zolaq görünür: "Bu vərəqdə bir simvolun ətrafına çərçivə çəkin."
4. Yalnız bu vərəqi yox, açıq bütün vərəqləri axtarmaq üçün {{ui:Bütün açıq vərəqləri axtar}} qutusunu işarələyin.
5. Simvolu yaxşı görmək üçün miqyası artırın, sonra bir nüsxəsinin ətrafına sıx çərçivə çəkin. Simvolun bütününü əhatə edin; ətrafdakı boş kağız kəsilib atılır.
   Zolaqda irəliləmə çubuğu və {{ui:Ləğv et}} düyməsi ilə "Axtarılır…" yazısı görünür. Səhifə cavab verməyə davam edir: miqyası dəyişə, sürüşdürə və vərəqlər arasında keçə bilərsiniz. Başqa alət seçsəniz və ya {{key:Esc}} düyməsini basarsanız, axtarış ləğv olunur.
6. Axtarış bitdikdə uyğunluqlar vərəqdə elementin rəngində çərçivələr kimi görünür və zolaqda belə xülasə yazılır: "22 uyğunluq, 19-u əlavə ediləcək (3-ü artıq sayılıb). Qutuya klikləyərək rədd edin və ya bərpa edin."

{{ui:Avtomatik say}} rejimində vərəqdə sürükləmə sürüşdürmək əvəzinə çərçivə çəkir. Sürüşdürmək üçün {{key:Space}} düyməsini basıb saxlayın və sürükləyin, ya da orta düyməni sürükləyin.

## Uyğunluqları yoxlayın

- **Qutuya klikləyin** onu rədd etmək üçün. Rədd edilmiş qutu xətkeşli və üstü çəkilmiş olur. Bərpa etmək üçün yenidən klikləyin.
- **{{ui:Uyğunluq}} sürüşdürücüsünü** hərəkət etdirin (50%-dən 95%-ə qədər, başlanğıcda 75%). Yüksək dəyərdə yalnız yaxın uyğunluqlar qalır; aşağı dəyərdə daha sərbəst uyğunluqlar göstərilir. Sürüşdürücü yalnız tapılanları süzgəcdən keçirir; yenidən axtarış etmir.
- **Artıq sayılıb**: bu elementin say işarəsi olan yerdəki uyğunluqlar əvvəlcədən rədd edilmiş olur ki, heç bir şeyi iki dəfə saymayasınız.
- **Digər vərəqlər**: açıq bütün vərəqlərdə axtardıqda vərəqlər siyahısı və ya {{key:PageDown}} ilə vərəqlər arasında keçin və hər birini yoxlayın. Xülasədə neçə vərəqdə uyğunluq olduğu göstərilir.

## Əlavə edin

{{ui:Əlavə et}} düyməsini seçin. Düymədə neçə işarə olduğu yazılır, məsələn "19 işarə əlavə et".
Say işarələri qəbul edilmiş hər qutunun mərkəzinə əlavə olunur: "\"Duplex receptacle\" elementinə 19 say işarəsi əlavə edildi. Hamısını silmək üçün Ctrl+Z basın."

Bütün dəstə bir geri qaytarma addımıdır, buna görə bir {{key:Mod+Z}} onların hamısını silir.

Əlavə etmədən baxışı ləğv etmək üçün {{ui:At}} seçin və ya {{key:Esc}} basın. Başqa alət seçmək də onu ləğv edir.

## Nəyi tapır, nəyi qaçırır

TakeoffCraft çertyoju, pikselləri ilə, çərçivəyə aldığınız simvolla müqayisə edir.

- Simvolu 0°, 90°, 180° və 270° döndərilmiş halda tapır. Onu istənilən bucaq altında da tapmaq üçün çərçivə çəkməzdən əvvəl avtomatik say zolağında {{ui:İstənilən bucaq altında (yavaş)}} qutusunu işarələyin: alqoritm hər 15°-dən bir yoxlayır, sonra hər tapıntını bir yarım dərəcəyə qədər dəqiqləşdirir. Bu, təxminən altı dəfə çox vaxt aparır. Güzgü əksini tapmır (simvol güzgüdə də eyni görünürsə istisna olmaqla).
- {{ui:Bütün açıq vərəqləri axtar}} işarələnəndə başqa miqyasda olan vərəq simvolun həmin vərəqdəki ölçüsündə axtarılır: 1/8" planda miqyasa uyğun çəkilmiş qurğu 1/4" planda olduğundan iki dəfə kiçikdir, yenə də tapılır. Belə vərəq həmçinin çərçivənin öz ölçüsündə axtarılır — bütün vərəqlərdə eyni ölçüdə çap olunmuş etiketlər və simvollar üçün. Bunun üçün hər iki vərəqdə miqyas olmalıdır; miqyası olmayan vərəq yalnız çərçivənin ölçüsündə axtarılır.
- Çox oxşar simvollar bir-birinə uyğun gələ bilər: dupleks və dördlü rozetka, yaxud bir hərfdə fərqlənən iki qurğu etiketi. Yalnız düzgün olanlar qalana qədər sürüşdürücünü qaldırın, qalanlarını əllə rədd edin.
- Digər xətlər, ştrixlama və ya mətnlə kəsişən simvol daha aşağı bal alır və sürüşdürücünün daha aşağı qiymətini tələb edə bilər.
- Çox kiçik çərçivələr qəbul edilmir: "Bu çərçivə çox kiçikdir. Simvolun bütününün ətrafına çəkin." Boş çərçivə də qəbul edilmir: "Bu çərçivə demək olar ki, boşdur. Simvolun ətrafına çəkin."
- Bu simvol üçün tələb olunan ölçüdə çox böyük olacaq vərəq atlanır və xülasədə "1 vərəq bu simvol ölçüsündə axtarış üçün çox böyük olduğundan atlandı." yazılır. Daha böyük simvolu çərçivəyə alın, ya da həmin vərəqi əllə sayın.

Heç nə tapılmasa, status zolağında yazılır: "Uyğunluq yoxdur. Uyğunluq sürüşdürücüsünü aşağı salın və ya simvolu daha sıx çərçivəyə alın."

## Sürət və brauzerlər

Axtarış fon prosesində işləyir, buna görə səhifə cavab verməyə davam edir və istənilən vaxt ləğv edə bilərsiniz. Hər vərəq əvvəlcə iş ölçüsündə səhifənin özündə çəkilir; çox böyük vərəq bir az dayana bilər. Cari Chrome, Edge, Firefox və Safari-də işləyir. Çox vərəqdə axtarış daha uzun çəkir; irəliləmə çubuğu vərəq-vərəq hərəkət edir. Oflayn rejimdə avtomatik say yalnız tətbiq zolağında {{ui:Oflayn hazırdır}} göründükdə işləyir: {{ui:Oflayn üçün saxla}} isə fon prosesini də saxlayır. Bax: [Oflayn işləmə](common:offline).
