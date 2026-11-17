---
title: Revize bir sayfayı karşılaştırın ve metrajı taşıyın
summary: Eski sayfayı revizyonunun üzerine koyun, hizalayın, neyin değiştiğini görün ve metrajı işaretlenen işaretlerle birlikte yeni sayfaya taşıyın.
keywords: revizyon, revize, karşılaştır, bindirme, eski, yeni, değişiklikler, ek, bülten, yeniden yayın, metrajı taşı, aktar, taşı, hizala, işaretli, denetle
from: 3a1d9fe0
---

Bir sayfa yeniden yayınlandığında, onu yeniden metraj almanız gerekmez. Eski PDF'i ve yenisini açın, iki sayfayı karşılaştırın ve metrajı karşıya taşıyın. TakeoffCraft çizimin değiştiği her işareti işaretler; bunları denetler, gerisini tutarsınız.

## Karşılaştırın

1. İki PDF'i de açın: eski takım ve revize olan ({{ui:Planları aç}}; bunlar tek dosyada ya da birkaç dosyada olabilir).
2. **Yeni** sayfayı gösterin.
3. Çizimin altındaki sayfa çubuğunda {{ui:Karşılaştır}} seçin.
4. Listeden eski sayfayı seçin. TakeoffCraft, diğer PDF'te aynı numaralı sayfayı ya da aynı sayfayı önerir. **Karşılaştır**'ı seçin.

Eski çizim artık yeni çizimin üzerinde kırmızı olarak durur. İkisinin aynı olduğu yerlerde kırmızı çizgiler siyahların üzerine oturur; farklı olduğu yerlerde yalnızca kırmızı çizgiler (kaldırılan) ve yalnızca siyah çizgiler (eklenen) görürsünüz. Sayfanın altındaki çubukta aşağıdaki adımlar bulunur; {{key:Esc}} ya da {{ui:Kapat}} karşılaştırmayı bitirir.

## Hizalayın

Revize sayfalar genellikle biraz kaydırılmış basılır: sayfada yer değiştirmiş ya da biraz farklı boyutta. Kırmızı çizim siyahın üzerine oturmuyorsa **İki noktayla hizala**'yı seçin ve dört kez tıklayın:

1. eski (kırmızı) çizimde bir nokta, örneğin bir kolon merkezi ya da bir bina köşesi,
2. yeni (siyah) çizimde aynı nokta,
3. kırmızı çizimde, ilkinden uzak ikinci bir nokta,
4. siyah çizimde aynı nokta.

Kırmızı çizim, siyahın üzerine oturacak şekilde taşınır, döndürülür ve ölçeklenir. Durum çubuğu yeni çizimin ne kadar büyük olduğunu söyler ("boyut × 1.000", aynı olduğunda). Seçimler için yakınlaştırın: tıklamanız ne kadar yakınsa uyum o kadar iyi olur.

## Neyin değiştiğini bulun

**Değişiklikleri bul**'u seçin. TakeoffCraft iki çizimin mürekkebini karşılaştırır: yalnızca eski sayfadaki mürekkep kırmızı olur, yalnızca yeni sayfadaki mürekkep mavi olur ve durum çubuğu bunları sayar. Birkaç kıl kadar oynamış çizgiler (yeniden çizim) değişiklik sayılmaz.

Ayrıca eski sayfadaki her işarete bakar ve çizimin değiştiği yerde olanları sayar:

- bir seri ya da alan, çizim uçlarından ya da köşelerinden birinde değiştiyse ya da uzunluğunun yaklaşık altıda birinden fazlası boyunca değiştiyse;
- bir sayım, hemen yanında bir şey değiştiyse.

## Metrajı taşıyın

**Metrajı buraya taşı**'yı seçin. Eski sayfadaki her işaret, hizalama üzerinden yeni sayfaya, tek bir geri alma adımında taşınır. Bir değişikliğin yanındaki işaretler işaretlenir: turuncu bir halo ile çizilirler ve sayfa çubuğu "(n) denetlenecek" gösterir.

Yeni sayfanın ölçeği yoksa, eski sayfanın ölçeğini alır (çizimlerin hizalanması için ölçeklenmesi gerekiyorsa ayarlanır). Zaten farklı bir ölçeği varsa, TakeoffCraft önce sorar: taşınan işaretler yeni sayfanın ölçeğinde ölçülür.

## İşaretlenen işaretleri denetleyin

1. Sayfa çubuğundaki "(n) denetlenecek" seçeneğini seçin. Bir sonraki işaretlenen işarete yakınlaştırır ve onu seçer; panelinde neden işaretlendiği yazar.
2. Çizim altında değiştiyse işareti düzeltin (köşelerini sürükleyin, işaret ekleyin ya da silin ya da yeniden ölçün).
3. Panelinde **Denetlendi**'yi seçin. İşaret kalkar ve sayfa çubuğundaki sayı azalır.

İşaretler metrajla birlikte kaydedilir; böylece onları daha sonra denetleyebilirsiniz.

:::note
Karşılaştırma, çizilen şeyi karşılaştırdığı için vektör PDF'lerde ve taramalarda aynı şekilde çalışır. Eğik ya da gerilmiş bir tarama yalnızca iki noktayla kabaca hizalanabilir; o zaman daha fazla işareti gözle kontrol edin.
:::
