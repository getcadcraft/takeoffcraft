---
title: Uzunluk, birim fiyat ve yüzde girişi
summary: Mesafeler, yükseklikler, para birim fiyatları ve fire yüzdeleri için neler yazabileceğiniz; örnekler ve TakeoffCraft'ın okuyamadığı girişler için iletiler.
keywords: giriş, biçim, fit inç, kesirler, ondalık fit, metrik, metre, milimetre, birim fiyat, para, dolar, yüzde, fire, yazma
from: 215bbf4d
---

## Uzunluklar

{{ui:Kalibre et}} içindeki **Gerçek mesafe** ile kalem düzenleyicideki {{ui:Yükseklik}} ve {{ui:Derinlik}} alanları tarafından kullanılır.

| Yazdığınız | Anlamı |
|---|---|
| `24'-0"` | 24 fit |
| `24'-6 1/2"` | 24 fit 6½ inç |
| `12' 6 1/2"` | 12 fit 6½ inç (tire yerine boşluk) |
| `12'-6-1/2"` | 12 fit 6½ inç (bölümler arasında tire) |
| `24'` | 24 fit |
| `30"` | 30 inç |
| `6 1/2"` | 6½ inç |
| `3/4"` | ¾ inç |
| `24 ft 6 in` | 24 fit 6 inç (ayrıca `foot`, `feet`, `inch`, `inches`) |
| `24.5` | varsayılan birimde 24.5 (aşağıya bakın) |
| `24.5'` | 24.5 fit |
| `7.5 m` | 7.5 metre |
| `750 cm` | 750 santimetre |
| `7500 mm` | 7,500 milimetre |

- Kalibrasyon için ve LF, SF ya da SY kalemleri için düz bir sayı **fit** cinsindendir; m ya da m² kalemleri için **metre** cinsindendir.
- Word işlemcilerden gelen kıvrık tırnaklar ve kesme işaretleri (′ ″ ’ ”) `'` ve `"` gibi çalışır. İki kesme işareti `''` `"` sayılır.
- Virgüller yok sayılır: `1,200 mm`, 1200 mm'dir.
- Kesirler iki tarafta da tam sayı gerektirir: `6 1/2"` çalışır, `6.5 1/2"` çalışmaz.
- Sıfır ve negatif mesafeler reddedilir.

İletiler:

- "Bir mesafe yazın, ör. 24'-0" veya 7.5 m." (alan boşsa)
- "Sıfırdan büyük bir mesafe yazın."
- "Fit ve inç kullanın (24'-6 1/2"), ondalık fit, m, cm veya mm." (bilinmeyen birim)
- "Bu mesafe okunamadı. 24'-6 1/2" veya 24.5 deneyin."

Bir kalemin yüksekliğini veya derinliğini temizlemek için alanı boşaltın.

### Aritmetik

Her uzunluk alanı ve çizim sırasındaki yazma kutusu, `+`, `-`, `*`, `/` ve parantezlerle bir hesaplamayı da kabul eder:
`4+7/16` (varsayılan birimde 4.4375 inç), `12'6" + 3/4"`, `(24'-0")/3` (8 fit), `2*450mm`.

- Bir uzunluğa yazılan tire hâlâ onun parçasıdır: `24'-6"` 24 fit 6 inçtir ve `6-1/2` 6½'dir. Çıkarmak için tirenin etrafına boşluk koyun: `24' - 6"` 23'-6" olur.
- Düz bir sayı bir uzunluğu sayı olarak çarpar veya böler; bir uzunluğa eklendiğinde varsayılan birimdedir.
- `abs`, `round`, `ceil` ve `floor` da çalışır. Okunamayan bir hesaplama, hatanın nerede olduğu belirtilerek reddedilir.

## Uzunlukların gösterimi

Uzunluklar fit, inç ve on altıncı olarak gösterilir: `12'-6 1/2"`, `0'-0 3/4"`. Değerler gösterim için en yakın 1/16 inça yuvarlanır; miktarların kendisi yuvarlanmaz. Ondalık değerler iki ondalık basamak ve binlik ayraçlarla gösterilir, örneğin `1,234.50 LF`.

## Birim fiyatlar (birim başına malzeme ve işçilik)

| Yazdığınız | Anlamı |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (en fazla dört ondalık; fazlası yuvarlanır) |
| (boş) | $0 |

İleti: "Şuna benzer bir tutar yazın: 12.50." veya "Bu tutar çok büyük." Negatif birim fiyatlar kabul edilmez.

Genişletilmiş tutarlar (malzeme, işçilik, toplamlar) kuruşa kadar hesaplanır: fireli miktar × birim fiyat; yarım değerler sıfırdan uzağa yuvarlanır, tıpkı bir elektronik tablonun `ROUND(x, 2)` işlevi gibi.

## Fire yüzdesi

| Yazdığınız | Anlamı |
|---|---|
| `10` | %10 |
| `7.5%` | %7.5 |
| (boş) | %0 |

En fazla iki ondalık, %0 ile %1000 arası. İletiler: "10 veya 7.5 gibi bir yüzde yazın." veya "%1000'in üzerindeki fire kabul edilmez."

## Adlar ve birimler

- Kalem ve bileşen adları: en fazla 200 karakter.
- Bir bileşenin {{ui:Birim}} değeri: en fazla 20 karakterlik herhangi bir metin, ör. `EA`, `sheets`, `CY`, `gal`. Yalnızca bir etikettir; TakeoffCraft dönüştürme yapmaz.

## Formüller

Birleşim formüllerinin kendi kuralları vardır: bkz. [Formül dili](topic:formulas).
