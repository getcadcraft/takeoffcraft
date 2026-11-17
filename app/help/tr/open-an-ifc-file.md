---
title: IFC 4.3 dosyasından miktarları içe aktarma
summary: Bir yol, demiryolu, köprü veya toprak işinin IFC 4.3 dosyasını açın ve dosyanın belirttiği uzunluk, alan ve hacimlerle birlikte, sınıf başına bir sayım alın; bunlar tipli miktarlar olarak eklenir.
keywords: ifc, ifc4x3, ifc 4.3, yol, demiryolu, köprü, kaplama, kaplama tabakası, bordür, toprak işleri, mesnet, kazık, altyapı, miktarlar, bim, inşaat mühendisliği, tipli miktarlar
from: 6b08c2c4
---

Bir IFC 4.3 dosyası; yolları, demiryollarını, köprüleri, deniz yapılarını ve bunları oluşturan parçaları içerebilir: kaplamalar, tabakalar, bordürler, raylar, toprak işleri, mesnetler, kazıklar ve daha fazlası. TakeoffCraft bunları okur ve fiyatlandırabileceğiniz tipli miktarlara dönüştürür.

## Dosyayı açın

1. {{ui:Dosya}} grubunda {{ui:Planları aç}} seçeneğini seçin ya da {{key:Mod+O}} tuşuna basın.
2. IFC dosyasını seçin (PDF'lerle birlikte de seçebilirsiniz) ya da dosyayı TakeoffCraft'a sürükleyip bırakın.

Her sınıf ve önceden tanımlı tip için bir tipli miktar oluşturulur; örneğin "Kaplama (esnek): sayım" ve dosya bunları belirtiyorsa, m cinsinden "uzunluk", m² cinsinden "alan" ve m³ cinsinden "hacim". Her kalemin notu kaç öğenin sayıldığını ve kaçının miktar belirtmediğini söyler. Aynı adlı daha yeni bir dosyayı açmak, bu miktarları çoğaltmak yerine günceller.

## Dosyanın yapmadığı şeyler

- Dosyanın taşıdığı miktar kümelerini (IfcElementQuantity) okur. 3B şekilleri ölçmez; bu nedenle miktar kümesi olmayan bir öğe sayılır ama uzunluk, alan ya da hacme katkı sağlamaz.
- Yalnızca IFC 4.3'ün altyapı sınıfları okunur. Bir bina dosyası (duvarlar, kapılar, döşemeler) burada miktarlara dönüştürülmez; IFC 4.3 olmayan bir dosya bunu belirtir ve hiçbir şey getirmez.
- Birimler dosyanın kendi birimleridir ve metreye çevrilir.
