---
title: Çertyoj xəttlərinə tutma
summary: Ölçü götürərkən və ya kalibrləyərkən nöqtələr PDF-in öz xəttlərinə tullanır: uclar, orta nöqtələr, kəsişmələr və ya xəttin istənilən yeri, hansının olduğunu göstərən işarə ilə.
keywords: tutma, osnap, obyektə tutma, uc, orta nöqtə, kəsişmə, ən yaxın, vektor, xəttlər, dəqiq, tam, f3, maqnit, künc
from: 41d29e9b
---

Plan dəstlərinin əksəriyyəti vektor PDF-dir: divarları və kənarları real xəttlərdir, piksel deyil. Ölçü götürərkən TakeoffCraft kliklərinizi həmin xəttlərə tutur, belə ki, xətt divarın küncündən dəqiq başlayır və kalibrləmə rəssamın çəkdiyi ölçünü oxuyur, sizin vurduğunuz pikseli yox.

Başlayanda {{ui:Tutma}} açıqdır. Onu status panelindəki {{ui:Tutma}} düyməsi və ya {{key:F3}} ilə söndürüb yandırın; parametr bu brauzerdə saxlanılır (həmçinin [Parametrlər](topic:settings) altındadır).

## Nəyə tutur

Göstərici xəttə təxminən 10 ekran pikseli yaxınlaşanda, klikin hara düşəcəyini adı ilə birlikdə işarə göstərir:

| İşarə | Ad | Harada |
|---|---|---|
| Kvadrat | **Son** | Xəttin sonu və ya xətlərin birləşdiyi künc. Əyrinin iki ucu sayılır; onun boyunca olan nöqtələr yox. |
| Üçbucaq | **Orta nöqtə** | Düz xəttin ortası. |
| Xaç | **Kəsişmə** | İki xəttin kəsişdiyi yer və ya birinin digərində bitdiyi yer. |
| Qum saatı | **Xəttin üzərində** | Son, orta nöqtə və ya kəsişmə yaxın olmadıqda xəttin ən yaxın nöqtəsi. |

Ən yaxın son, orta nöqtə və ya kəsişmə üstünlük alır. Yalnız heç biri yaxın olmadıqda nöqtə birbaşa xəttin üzərinə düşür. Bir-birinə yaxın nöqtələr arasında seçim etmək üçün yaxınlaşdırın: 10 piksel ekran pikselidir, ona görə də daha yüksək miqyasda o, vərəqin daha az hissəsini əhatə edir.

## Harada işləyir

{{ui:Tutma}} {{ui:Xətti}}, {{ui:Sahə}}, {{ui:Dairə}}, {{ui:Deşik}}, {{ui:Kalibrlə}} və {{ui:Yoxla}} alətlərində işləyir, həmçinin seçilmiş işarənin küncünü sürüşdürdükdə. Qövs nöqtələrini də yerləşdirir. {{ui:Say}}, {{ui:Avtomatik say}} və yapışdırma tutulmur.

Tutulmuş nöqtə {{key:Shift}} ilə 45° tutmadan üstündür: xətlərdən kənarda 45° ilə çəkmək üçün əvvəlcə {{key:F3}} ilə Tutmanı söndürün.

:::tip
Tutma açıq olanda kalibrləyin. Bildiyiniz ölçü xəttinin və ya divarın iki ucuna yaxın klikləyin: hər iki nöqtə dəqiq çertyojun üzərinə düşür və miqyas dəqiq alınır (status paneli onda uyğun gələn hazır miqyası adlandırır).
:::

## Tutula bilməyən vərəqlər

- **Skan edilmiş vərəqlər** şəkildir və tutmaq üçün xətt yoxdur. Status paneli bildirir: "Bu vərəqdə tutmaq üçün xətt yoxdur (skan edilmiş səhifə şəkildir)." və nöqtələr klik etdiyiniz yerə düşür.
- **Çox böyük çertyojlar**: tutma hər vərəqdə 400,000 xətt parçasına qədər oxuyur. Daha çoxu olan vərəqdə bunu bildirir və yalnız ilk parçalara tutur.
- **Mətn** tutulmur, PDF hərfləri xətt kimi çəkməyibsə (bəzi plotterlər belə edir).

Vərəqin xətləri onu ilk dəfə açdığınızda fonda oxunur; böyük vərəq işarələr görünməzdən əvvəl bir saniyə çəkə bilər.
