---
title: Notlar, bulutlar ve vurgular
summary: Sayfalardaki soruları ve değişiklikleri notlar, revizyon bulutları ve vurgularla işaretleyin; her birini açık, yanıtlandı ya da kapalı olarak izleyin ve işaretli PDF'de gönderin.
keywords: işaretleme, işaretlemeler, not, yorum, soru, rfi, bulut, revizyon bulutu, vurgu, durum, açık, yanıtlandı, kapalı, inceleme, işaretlemeler listesi
from: 2b395c13
---

İşaretlemeler, metraj yaparken hatırlamanız ya da sormanız gerekenler içindir: "temel tipini doğrulayın", değişen bir duvarın etrafındaki bir revizyon bulutu, planda vurgulanmış bir not. Sayfada bir durumla durur, tek bir yerde listelenir ve işaretli PDF'de yazdırılır. Bunlar **asla sayılmaz**: ne miktar, ne maliyet.

## Bir tane ekleyin

Sayfanın üstündeki çubukta {{ui:İşaretleme}}'yi açın ve seçin:

| İşaretleme | Nasıl |
|---|---|
| {{ui:Not}} | Gideceği yere tıklayın, notu yazın ve {{ui:Ekle}}'yi seçin. Yanında ilk satırı olan yuvarlak bir iğne olarak görünür. |
| {{ui:Bulut}} | Bir köşeye, sonra karşısındaki köşeye tıklayın ve bir not yazın (ya da boş bırakın). Kutunun etrafında dalgalı bir revizyon bulutu çizilir. |
| {{ui:Vurgu}} | İki köşeye tıklayın: isterseniz notla birlikte geçirgen sarı bir kutu. |

İlk köşeden sonra {{key:Esc}} iptal eder. Araç bir sonraki için açık kalır; {{key:V}} {{ui:Seç}} aracına geri döner.

## Durum ve düzenleme

Seçmek için bir işaretlemeye {{ui:Seç}} ile tıklayın. Sağdaki panel **İşaretleme** bölümünü gösterir: türü ve sayfası, **Durum**'u — Açık, Yanıtlandı ya da Kapalı — ve değiştirebileceğiniz metni. {{key:Delete}} (ya da {{ui:Sil}}) onu kaldırır; {{key:Mod+Z}} geri getirir.

Bir notun iğnesi açıkken turuncu, yanıtlandığında mavi, kapandığında gri olur; kapalı bir bulut griye döner.

## Liste

Sağ paneldeki **İşaretlemeler**, metrajdaki her işaretlemeyi durumuyla listeler ve kaç tanesinin hâlâ açık olduğunu belirtir. Hâlâ çözülmesi gerekenleri görmek için **Yalnızca açık olanlar**'ı işaretleyin. Bir satıra tıklayarak sayfasına gidin ve onu seçin.

## Paylaşın

- {{ui:İşaretli PDF}} bunları sayfalara çizer: vurgular, bulutlar ve iğneler; her biri, durumunu büyük harflerle (AÇIK, YANITLANDI, KAPALI) ve metnini gösteren bir kutuyla. İşaretlemesi olan ama metraj işareti olmayan bir sayfa da dahil edilir.
- {{ui:XLSX}}, bir **İşaretlemeler** çalışma sayfası ekler: sayfa, tür, durum ve metin; her biri bir satır.
- Bunlar `.takeoff.json` içinde ve [metrajın içinde olduğu bir PDF'de](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) kaydedilir.
