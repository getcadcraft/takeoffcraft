---
title: Birim maliyetler ve formüller
summary: Bir kaleme bileşen ekleyin; formüller kalemin uzunluğunu, alanını ya da sayısını dikmeye, başlığa, levhaya, betona ve donanıma dönüştürsün. Çalışılmış bir duvar örneğiyle.
keywords: birim maliyet, bileşenler, formül, dikme, alçıpan, levha, başlık, beton, küp yarda, donanım, reçete, tipik, kalem parçaları
from: 12891a21
---

Bir kalemin **birim maliyeti**, her biri kendi miktar formülü, fire ve birim oranlarına sahip bileşenlerden oluşan bir listedir. Formül kalemin ölçülen toplamlarını kullanır; bu yüzden bir duvarın tek bir metrajı size aynı anda dikme, başlık ve levha verir ve siz ölçtükçe güncellenirler.

## Kullanabileceğiniz değişkenler

| Kalem türü | Değişkenler |
|---|---|
| Doğrusal | `L` uzunluk, `H` yükseklik, `A` duvar alanı (L × H), `N` çizgi sayısı |
| Alan | `A` alan, `P` çevre (dış hat + boşluklar), `H` derinlik ya da kalınlık, `N` alan sayısı |
| Sayı | `N` sayı |

Değerler kalemin kendi birimindedir: LF ve SF kalemler için fit ve kare fit, m ve m² kalemler için metre ve metrekare. SY kalemde `A` kare yarda cinsindendir, `P` ve `H` ise fit cinsinden kalır.

Formüllerde `+ - * /` (ya da × ÷), parantezler, sayılar ve `ceil`, `floor`, `round`, `min`, `max` ve `abs` işlevleri kullanılabilir. Tüm kurallar için [Formül dili](topic:formulas) konusuna bakın.

## Çalışılmış örnek: bir iç duvar

Diyelim ki **İç duvar tip A** öğesini doğrusal bir kalem olarak metrajladınız: 4 çizgi, toplam 120 LF, {{ui:Yükseklik}} `9'-0"` olarak ayarlı. Ölçülen değerler L = 120, N = 4, A = 1,080 (duvarın SF cinsinden alanı, tek yüz).

1. {{ui:Kalemler}} altında kalemi seçin.
2. {{ui:Montaj}} bölümünde {{ui:Bileşen ekle}}'yi seçin.
   `Bileşen` adlı bir bileşen belirir; formülü `L` ve sonucu altındadır.
3. {{ui:Ad}} alanına `Studs 16 in o.c.`, {{ui:Birim}} alanına `EA` yazın.
4. {{ui:Miktar formülü}} alanına `ceil(L * 12 / 16) + N` yazın.
   Sonuç yazdıkça güncellenir: "= 94 EA". Bu, 120 fit boyunca her 16 inçte bir dikme (90) ve 4 çizginin her birini kapatmak için birer ek dikmedir.
5. Başlıklar için yeniden {{ui:Bileşen ekle}}'yi seçin: ad `Plates, top and bottom`, birim `LF`, formül `L * 2`. Sonuç: 240 LF.
6. Levhayı ekleyin: ad `Gypsum board 4x8, both sides`, birim `sheets`, formül `ceil(A * 2 / 32)`. Sonuç: 68 sheets (2,160 SF levha ÷ levha başına 32 SF = 67.5, yukarı yuvarlanmış).
7. Her bileşenin {{ui:Fire %}}, {{ui:Malzeme $}} ve {{ui:İşçilik $}} alanlarını doldurun.
   Her bileşen, {{ui:Miktarlar}} içinde kalemin altında kendi satırını alır; kalem gibi fiyatlandırılır ve {{ui:İş toplamı}} bunu da içerir.

Duvarın maliyeti tamamen bileşenlerdeyse kalemin kendi malzeme ve işçilik oranlarını 0 bırakın; aksi hâlde iki kez sayılır.

:::tip
Fire formülden sonra uygulanır ve yuvarlanmaz: %10 fireyle 68 levha 74.8 levha olur. Tam levha sipariş etmek için fireyi formülün içine koyun, örneğin `ceil(A * 2 / 32 * 1.1)`, ve bileşenin firesini 0 bırakın.
:::

## Daha fazla formül

| Ne | Kalem | Formül |
|---|---|---|
| 24 inç merkez aralıklı dikmeler | Doğrusal | `ceil(L / 2) + N` |
| Yalıtım battıları, SF | Yüksekliği olan doğrusal | `A` |
| Boya, iki yüz, 350 SF'lik galonlar | Yüksekliği olan doğrusal | `ceil(A * 2 / 350)` |
| 15 SF'lik fayans kolileri, %10 fazla | Alan | `ceil(A * 1.1 / 15)` |
| Kaide ya da kenar pervazı, LF | Alan | `P` |
| Beton, küp yarda | Derinlikli alan | `A * H / 27` |
| Çeyrek yardaya yukarı yuvarlanmış beton | Derinlikli alan | `ceil(A * H / 27 * 4) / 4` |
| Kapı başına üç menteşe | Sayı | `N * 3` |
| En az bir kutu, 12'de bir | Sayı | `max(1, ceil(N / 12))` |

## Formül hatalıysa

Formülün altındaki satır bir hata iletisine dönüşür, örneğin `"X" burada ölçülen bir değer değil. L, H, A, N kullanın.` ya da `")" karakteri eksik.` Bileşenin tutarları olmaz; {{ui:Miktarlar}} içindeki satırı "Formül hatası: …" gösterir ve üst bilgi "Eksik: 1 formül hatası (toplamlarda yok)" der. Formülü düzeltin; toplamlar güncellenir.

Sıfıra bölen bir formül de hatadır ("Formül sıfıra bölüyor."), örneğin derinliği olmayan bir kalemde `A / H`.

## Sınırlar

- Formüller çizgi çizgi değil, kalemin **toplamları** üzerinde çalışır. `ceil(L * 12 / 16) + N` çizgi başına bir dikme ekler; henüz çizgi başına yuvarlama yok.
- Bir formül yalnızca kendi kaleminin değişkenlerini kullanabilir, başka bir kalemin değişkenlerini değil.
- Kalem başına en fazla 50 bileşen, formül başına 500 karakter.

## Bir bileşeni kaldırın

Altındaki {{ui:Bileşeni kaldır}} seçeneğini seçin. {{key:Mod+Z}} ile geri alabilirsiniz.
