---
title: Formül dili
summary: Birleşim miktar formüllerinin kuralları - değişkenler, işleçler, işlevler, yuvarlama ve her hata iletisi.
keywords: formül, ifade, sözdizimi, işlevler, ceil, floor, round, min, max, abs, değişkenler, işleçler, hesaplama
from: 4da14575
---

Birleşim bileşenlerinin miktarı bir formülden gelir. Formül, kalemin ölçülen değerleri üzerinde küçük bir aritmetik ifadedir. Çalışılmış örnekler için bkz. [Birleşimler ve formüller](topic:assemblies).

## Değişkenler

| Kalem türü | Değişken | Anlamı |
|---|---|---|
| Linear | `L` | Toplam uzunluk |
| Linear | `H` | Kalemin yüksekliği |
| Linear | `A` | Duvar alanı, L × H, açıklıklar çıkarılmış (BimCraft'tan bir metraj). Metrajda bir ölçüm yöntemi adı varsa `A` o yöntemle ölçülür: yöntemin en küçük boyutuna kadar olan açıklıklar dahil edilir ve duvarların birleştiği yerde yöntemin dışarıda bıraktığı kısım çıkarılır. Kalemin altındaki not yöntemin adını verir. |
| Linear | `N` | Koşu sayısı |
| Area | `A` | Toplam net alan (dış hatlar eksi boşluklar) |
| Area | `P` | Toplam çevre, boşluk kenarları dahil |
| Area | `H` | Kalemin derinliği veya kalınlığı |
| Area | `N` | Alan sayısı |
| Count | `N` | Sayı |

- Değişkenler kalemin birimindedir: bkz. [Birimler](topic:units).
- Büyük ve küçük harf aynıdır: `l`, `L` ile aynıdır.
- Yalnızca kalemin kendi türünün değişkenleri çalışır. Doğrusal bir kalemde `P` şu iletiyi verir: `"P" burada ölçülmüş bir değer değil. L, H, A, N kullanın.`
- Boş yükseklik veya derinlik 0'dır.

## İşleçler

| Yazın | Anlamı |
|---|---|
| `+` | Topla |
| `-` veya `−` | Çıkar veya negatif değer |
| `*` veya `×` | Çarp |
| `/` veya `÷` | Böl |
| `( )` | Grupla |

Çarpma ve bölme, toplama ve çıkarmadan önce yapılır: `L * 2 + 4`, (L × 2) + 4'tür. Emin değilseniz parantez kullanın.

Sayılar ondalık olabilir (`1.333`, `.5`) ve üstel olabilir (`1e3` = 1000). Boşluklar yok sayılır.

## İşlevler

| İşlev | Sonuç | Örnek |
|---|---|---|
| `ceil(x)` | Bir tam sayıya yukarı yuvarla | `ceil(67.5)` = 68 |
| `floor(x)` | Bir tam sayıya aşağı yuvarla | `floor(67.5)` = 67 |
| `round(x)` | En yakın tam sayıya yuvarla, yarım değerler sıfırdan uzağa | `round(2.5)` = 3 |
| `round(x, d)` | d ondalık basamağa yuvarla (0 ila 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | En küçük değer | `min(N, 10)` |
| `max(a, b, …)` | En büyük değer | `max(1, ceil(N / 12))` |
| `abs(x)` | İşaretsiz değer | `abs(-3)` = 3 |

`ceil` ve `floor`, bilgisayarın küçük yuvarlama gürültüsünü yok sayar; böylece tam 1 olması gereken bir değer asla 2'ye yuvarlanmaz.

## Hatalar

Okunamayan veya hesaplanamayan bir formül, hatasını alanın altında gösterir ve bileşen toplamların dışında bırakılır ({{ui:Miktarlar}} başlığı "Eksik" yazar). İletiler:

| İleti | Çözüm |
|---|---|
| Bir formül yazın, ör. L veya ceil(L / 1.333) + 1. | Formül boş. |
| "X" burada ölçülmüş bir değer değil. Şunlardan birini kullanın: … | Listelenen değişkenlerden birini kullanın. |
| "X" burada bir işlev değil. ceil, floor, round, min, max, abs kullanın. | Bunlardan birini kullanın. |
| "#" bir formülde kullanılamaz. | Bu karakteri kaldırın (birimler, `%`, `$` ve `=` kullanılamaz). |
| Bir ")" eksik. / ")" karakterinin karşılığı olan "(" yok. | Parantezleri dengeleyin. |
| ")" öncesinde bir değer eksik. | `max(1, )` gibi: değeri doldurun. |
| Formül erken bitiyor. | `L *` gibi: tamamlayın. |
| Beklenmeyen "…". Bir işleç eksik mi? | Yan yana iki değer, ör. `2L`: `2 * L` yazın. |
| ceil() 1 değer alır. | İşleve doğru sayıda değer verin. |
| round(x, digits) 0 ila 10 arasında tam bir basamak ister. | Tam sayıda ondalık kullanın. |
| Formül sıfıra böler. | Genellikle H 0'dır: kalemin yüksekliğini veya derinliğini ayarlayın. |
| Formül bir sayı vermiyor. | Sonuç bir sayı olamayacak kadar büyük. |
| Bu formül çok uzun (en fazla 500 karakter). | Kısaltın. |

## Tasarımla güvenli

Bir formül yalnızca yukarıdaki değişkenler ve işlevlerle aritmetik yapabilir. Kod çalıştıramaz veya başka hiçbir şeyi okuyamaz; bu nedenle birinin size gönderdiği bir proje dosyasındaki formül zararsızdır.
