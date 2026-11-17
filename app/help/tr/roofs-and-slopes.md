---
title: Çatılar ve eğimler
summary: Bir alana eğimini verin; çatı yüzeyini plandan ölçün ve beşik kenarlarını, kırmaları ve vadileri eğim boyunca ölçün.
keywords: çatı, eğim, eğim katsayısı, yükselme, ilerleme, 6:12, beşik kenarı, kırma, vadi, beşik çatı, çatı kaplaması, kare, eğimli alan, gerçek uzunluk, plan alanı
from: 38225b60
---

Bir çatı planı, her çatı düzlemini yukarıdan görüldüğü gibi düz gösterir. Gerçek çatı ise daha büyüktür: 6:12 eğimli bir düzlemin yüzeyi planından yaklaşık %12 daha fazladır ve eğimli kenarları göründüğünden daha uzundur. Kaleme eğimini verin; TakeoffCraft eğim boyunca ölçer.

## Eğim yazma

Eğim, plandaki eğim sembollerinde olduğu gibi, her 12 birim ilerlemeye karşılık gelen yükselmedir. `6:12`, `6/12` ya da sadece `6` olarak yazın; başka bir oran da olur (`4:10`, 4.8:12'dir). Derece işaretiyle bir açı da olur: `26.57°`. Boş ya da `0` düz demektir.

## Çatı alanları

1. Çatı kaplaması için bir alan kalemi oluşturun ya da mevcut olanı açın.
2. Ayarlarında **Eğim** alanına `6:12` gibi eğimi yazın.
3. Her çatı düzlemini, her zamanki gibi {{ui:Area}} ile plan üzerinde çevreleyin.

Her düzlem, plan alanını eğim katsayısıyla çarpar: √(1 + (yükselme ÷ 12)²); 6:12'de 1.118, 12:12'de 1.414. Bir düzlemi seçerek **Alan** değerini (eğim üzerinde), **Plan alanı** değerini ve **Eğim katsayısı** değerini görün.

Başka eğimli düzlemler: düzlemi seçin ve kendi **Eğim** değerini panelinde yazın. Boş bırakırsanız kalemin eğimi kullanılır. 3B kontrol görünümü, birim maliyetler (`A` eğimli alandır), maliyetler ve dışa aktarma eğimli alanı kullanır. Eğimli bir düzlemdeki geri çıkarmalar, örneğin çatı pencereleri, aynı eğimle düşülür.

Çevre (`P`) plan çevresi olarak kalır. Saçakları, beşik kenarlarını, kırmaları ve vadileri aşağıda anlatıldığı gibi koşu olarak ölçün.

## Beşik kenarları, kırmalar ve vadiler

1. "Beşik kenarı" ya da "Kırmalar" gibi doğrusal bir kalem oluşturun.
2. Panelinde **Eğim** değerini **Beşik kenarı** (beşiğin kenarı gibi eğimli bir kenar) ya da **Kırma veya vadi** (iki düzlemin birleştiği çizgi) olarak seçin ve çatı düzlemlerinin **Eğim** değerini yazın.
3. {{ui:Linear}} ile plan üzerinde koşuları çizin.

Bir beşik kenarı, plan uzunluğunu eğim katsayısıyla çarpar. Bir kırma ya da vadi, plan üzerinde 45° açıyla, aynı eğimli iki düzlem arasında uzanır; bu yüzden gerçek uzunluğu plan uzunluğu × √(1 + (yükselme ÷ 12)² ÷ 2) ile bulunur: 6:12'de 1.061, 12:12'de 1.225.

Tek bir koşu ikisini birden içerebilir. Onu seçin: panelindeki her bölümün bir eğim listesi vardır — **Kalemin** (kalemin ayarı), **Düz**, **Beşik kenarı** ya da **Kırma veya vadi** — ve eğim boyunca uzunluğu. Koşunun kendi **Eğim** değeri, panelinde, tüm bölümleri için kalemin yerine geçer. Panel ayrıca **Plan uzunluğu** değerini gösterir ve sayfadaki etiketler eğim boyunca uzunlukları gösterir.

Düşülecekler yine çalışır: düşülen bir bölüm, eğimli ya da değil, hiçbir şey saymaz.

:::note
Kırmalar ve vadiler, iki düzlemin de aynı eğime sahip olduğunu varsayar. Farklı eğimli düzlemler için kırmayı gerçek uzunluğuyla başka bir yerde ölçün ya da eşdeğer bir eğimle beşik kenarı olarak çizin.
:::
