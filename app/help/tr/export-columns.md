---
title: Dışa aktarım sütunları
summary: XLSX ve CSV dışa aktarımının her çalışma sayfası ve sütunu; Keşif çalışma sayfasının taşıdığı formüllerle birlikte.
keywords: dışa aktar, sütunlar, xlsx, csv, çalışma sayfası, keşif sayfası, sayfaya göre, işaretler, ölçekler, formüller, alanlar
from: fed07851
---

## Keşif (XLSX çalışma sayfası ve CSV)

Her kalem için bir satır, ardından kalemin birleşimindeki her bileşen için bir satır (girintili). Sonra boş bir satır ve iş toplamı.

| Sütun | İçerik | XLSX'te |
|---|---|---|
| A Kalem | Kalem adı (kalın) veya bileşen adı (girintili) | Metin |
| B Tür | Linear, Area, Count veya Component | Metin |
| C Birim | LF, m, SF, SY, m², EA veya bileşenin birimi | Metin |
| D Miktar | Ölçülen toplam veya formül sonucu | Sayı |
| E Fire % | Fire | Yüzde (0.10 = %10) |
| F Fire dahil miktar | Miktar × (1 + fire) | Formül `D*(1+E)` |
| G Birim malzeme | Malzeme birim fiyatı | Sayı |
| H Birim işçilik | İşçilik birim fiyatı | Sayı |
| I Malzeme | Genişletilmiş malzeme | Formül `ROUND(F*G,2)` |
| J İşçilik | Genişletilmiş işçilik | Formül `ROUND(F*H,2)` |
| K Toplam | Malzeme + işçilik | Formül `I+J` |
| L Notlar | Kullanılan formül, formül hatası, ölçeksiz sayfalardaki işaretler, duvar alanı, çevre | Metin |

İş toplamı satırı: yukarıdaki her satır için I, J ve K sütunlarının `SUM` işlemi; bir şey dışarıda bırakıldığında Notlar'da "Eksik: yukarıdaki notlara bakın".

Formül hatası olan bir satırda miktar veya tutar yoktur; notu hatayı verir. Başlık satırı sabitlenmiştir.

CSV'de aynı sütunlar düz değerler taşır: Fire %, yüzde sayısıdır (%10 için 10) ve para iki ondalıklı dolar cinsindendir. Bir elektronik tablonun formül sanabileceği metinler (`=`, `+`, `-` veya `@` ile başlayan) metin olarak kalsın diye başına bir `'` eklenir.

## Sayfaya göre (yalnızca XLSX)

| Sütun | İçerik |
|---|---|
| Sayfa | Sayfa adı (açık değilse PDF adıyla birlikte) |
| Kalem | Kalem adı |
| Miktar | O sayfadaki kalemin miktarı, kendi biriminde |
| Birim | Kalemin birimi |
| İşaretler | İşaret sayısı |

## İşaretler (yalnızca XLSX)

Her işaret için bir satır.

| Sütun | İçerik |
|---|---|
| Sayfa | Sayfa adı |
| Kalem | Kalem adı |
| Tür | Linear, Area veya Count |
| Miktar | Uzunluk, net alan veya 1 |
| Birim | LF veya m; SF, SY veya m²; EA |
| Ayrıntı | Doğrusal: segment uzunlukları; düşülenler "(düşülür)" ile işaretli ve "çizilen (uzunluk) içinden (uzunluk) düşülür". Alan: boşluk varsa brüt ve boşluk alanları ile çevre. Ölçeksiz işaretler için "Sayfanın ölçeği yok". |
| İhale alanı | Yalnızca metrajda ihale alanları varsa: işaretin alanı veya "İhale alanı yok" |

## İhale alanına göre (yalnızca XLSX, metrajda ihale alanları varsa)

| Sütun | İçerik |
|---|---|
| İhale alanı | Alanın adı veya "İhale alanı yok" |
| Kalem | Kalem veya altında girintili bir bileşen |
| Birim | Kalemin veya bileşenin birimi |
| Miktar | O alanda ölçülen (bileşenler: alanın toplamları üzerindeki formül) |
| Fire dahil miktar | Miktar × (1 + fire) |
| Malzeme, İşçilik, Toplam | Keşifteki gibi kuruşa kadar genişletilmiş |
| Notlar | Keşifteki gibi formül, hatalar ve ölçeksiz işaretler |

Her alan, "(ad) ara toplam" satırıyla biter; bu satırın maliyetleri, kendi satırları üzerindeki `SUM` formülleridir. Son satır olan **Tüm ihale alanları**, ara toplamları toplar. **İşaretler** çalışma sayfasının o zaman yedinci sütunu olan **İhale alanı** bulunur.

## Ölçekler (yalnızca XLSX)

Ölçeği veya işareti olan her sayfa için bir satır.

| Sütun | İçerik |
|---|---|
| Sayfa | Sayfa adı |
| Ölçek | Ön ayarın adı, kalibre edilmiş ölçek veya "Ölçek yok" |
| Nasıl | "Ön ayar" veya "Kalibre edildi (yazdığınız mesafe)" |
| PDF birimi başına feet | TakeoffCraft'ın kullandığı tam ölçek faktörü |

## Dosya adları

- `(ad).xlsx` ve `(ad).csv`; ad, metrajda açılan ilk PDF'den gelir.
- CSV, UTF-8 biçimindedir, bayt sıra işaretine ve Windows satır sonlarına sahiptir; her platformdaki elektronik tablo programları bunu okur.
