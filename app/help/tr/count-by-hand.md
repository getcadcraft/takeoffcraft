---
title: Elle sayın
summary: Her kapıya, armatüre ya da cihaza tıklayarak sayın, sayımlarınızı denetleyin ve hataları düzeltin.
keywords: say, her biri, ea, armatürler, kapılar, cihazlar, simgeler, sayım, tıklayarak say, elle say
from: 594f2980
---

Bir sayım kalemi şeyleri sayar: kapılar, ışık armatürleri, prizler, tesisat armatürleri. Sayfadaki her tıklama bir sayım işareti ekler. Sayım bir ölçek gerektirmez.

## Sayın

1. {{ui:Kalemler}} altında bir sayım kalemi oluşturun ya da tıklayın ({{ui:Say}} türü).
2. Araç çubuğunda {{ui:Say}} seçin ya da {{key:C}} tuşuna basın.
3. Sayfadaki her birine tıklayın.
   Her tıklama, kalemin rengiyle bir nokta koyar ve kalemin sayısı bir artar.
4. Sonraki sayfaya geçin ({{key:PageDown}}) ve saymaya devam edin. Araç {{ui:Say}} üzerinde kalır.
5. Bitirdiğinizde {{key:Esc}} tuşuna basın. TakeoffCraft {{ui:Seç}}'e döner.

Sayarken sürüklemek hâlâ kaydırır ve tekerlek hâlâ yakınlaştırır; böylece noktalar eklemeden sayfada dolaşabilirsiniz.

:::tip
Sayım kalemine tıklayarak noktalarını her sayfada vurgulayın. Sayfalar listesi, her sayfada kaç tane olduğunu gösterir; henüz saymadığınız sayfaları bulmanıza yardımcı olur.
:::

## Sayımı düzeltin

- **Bir noktayı kaldırın**: {{ui:Seç}} ({{key:V}}) seçin, noktaya tıklayın ve {{key:Delete}} tuşuna basın ya da {{ui:İşareti sil}} seçin. Ya da yanlış bir tıklamadan hemen sonra {{key:Mod+Z}} tuşuna basın.
- **Bir noktayı taşıyın**: noktayı seçin, sonra sürükleyin.
- **Yanlış kalem altında sayıldıysa**: noktayı seçin ve **Seçili işaret** altındaki **Kalem** listesinden doğru sayım kalemini seçin.

## Nokta boyutu, ekranda ve PDF'te

Noktalar, ne kadar yakınlaştırırsanız yakınlaştırın, ekranda aynı boyutta kalır. Değiştirmek için {{ui:Ayarlar}}'ı açın, TakeoffCraft sekmesini seçin ve **Sayım işaretçisi boyutu** seçeneğini seçin: Çok küçük, Küçük, Orta (varsayılan) ya da Büyük.

PDF dışa aktarma ({{ui:Dışa aktar}} › {{ui:İşaretli PDF}}) her noktayı sayfa boyutu ne olursa olsun kâğıtta aynı boyutta çizer: PDF'i %100 gösteren bir görüntüleyici, noktaları ekrandaki boyutlarıyla gösterir. Bir sayfadaki noktalar hâlâ birbirine değecekse, dışa aktarma o sayfanın noktalarını küçültür ki her biri okunabilsin.

## Çok sayıda aynı simge

Bir sayfada çok kez tekrarlanan bir simge için [Otomatik say](topic:auto-count) deneyin: birini kutuya alın, bulduklarını gözden geçirin ve hepsini tek adımda ekleyin.

## Sayımları formüllerde kullanma

Bir sayım kaleminin miktarı **N**'dir. Montaj bileşenleri bunu kullanabilir; örneğin kapılar için menteşeler `N * 3`. Bkz. [Montajlar ve formüller](topic:assemblies).
