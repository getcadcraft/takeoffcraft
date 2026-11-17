---
title: Tedarikçi stokunu ve tedarik sürelerini denetleyin
summary: Tedarikçinin stok listesini (CSV ya da elektronik tablo) ekleyin; TakeoffCraft metrajın ihtiyaç duyduklarını, fireyle birlikte, buna karşı denetler: yeterli stok var mı ve bekleme ne kadar uzun. Eksikler ve uzun beklemeler Sorunlar panelinde görünür.
keywords: tedarikçi, stok, stokta, tedarik süresi, bulunabilirlik, eksik, ön sipariş, sipariş listesi, csv, sku, satıcı, malzemeler, tedarik, sorunlar
from: f11160fb
---

Araç çubuğundaki {{ui:Tedarik}} (kamyon) simgesi, metrajınızın ihtiyaç duyduklarını bir tedarikçinin stok listesine karşı denetler. Tedarikçinin sizin için önemli satırları metrajın kendi dosyasında tutulur. Hiçbir şey bir yere gönderilmez ve hiçbir şey bir tedarikçiye sorulmaz: dosyayı siz getirirsiniz.

## Dosya

Başlık satırı olan bir CSV dosyası. Bir ad ya da SKU sütunu ile bir stok ya da tedarik süresi sütunu gerekir. Tanınan başlıklar (sıra ve büyük/küçük harf fark etmez): Item, Name, Description ya da Product; SKU, Part ya da Item #; In stock, On hand, Available ya da Quantity; Lead time ya da Delivery days; Unit ya da UOM; Price ya da Cost; Supplier ya da Vendor.

- Stok bir sayı (1,200), "In stock" ya da "Out of stock" olabilir.
- Tedarik süresi "5 days", "2 weeks", "2-3 weeks" (daha uzun olan kullanılır), "3 months", "same day" ya da "backorder" olabilir. Çıplak bir sayı başlığın birimindedir (başlıkta weeks ya da months yazmadıkça gündür).
- Excel dosyaları okunmaz: önce sayfayı CSV olarak kaydedin.

## Metrajı denetleyin

1. {{ui:Tedarik}} seçin, sonra {{ui:Tedarikçi dosyası ekle…}} ve CSV'yi seçin. Birden fazla ekleyebilirsiniz: en fazla beş dosya, toplam 2.000 satır tutulur; önce kalemlerinizle eşleşenler.
2. Her kalem, ikinci koşul ve birimi olan montaj parçası adıyla bir satıra eşleştirilir; ya da adındaki SKU ile. Tam bir eşleşme yoksa benzer bir ad kullanılır (biri diğerinin içinde) ve bunu belirtir.
3. {{ui:Metrajın gereksinimleri}} altında eksik olanlar önce gelir: "120 EA eksik", "Tedarik süresi 21 gün", "Ön siparişte", "Birim farklı", "Stok bilgisi yok" ya da "Stokta". İhtiyaç fireyi de içerir. Tahminin biriminden farklı bir tedarikçi birimi (örneğin fit yerine ton) bildirilir ve asla karşılaştırılmaz. Her satırda {{ui:Kalemi seç}} vardır; kalemine gider.
4. {{ui:İstenen en uzun bekleme (gün)}} alanını ayarlayın (varsayılan 14). Stokta olmayan ve bundan uzun bekleyen bir kalem işaretlenir; özet önemli olan en uzun beklemeyi adlandırır.
5. {{ui:Sipariş listesi (CSV)}} eksik kalemleri, eksik miktarla, tedarikçi ve tedarik süresiyle indirir. {{ui:Dışarıda bırak}} bir ihtiyacı denetimin dışına çıkarır (bu bir geri alma adımıdır).

## Elektronik tablo dosyaları ve fiyat Kütüphanesi

Tedarikçi listesi, CSV'nin yanında bir Excel çalışma kitabı (.xlsx) da olabilir: ilk sayfa aynı sütun adlarıyla okunur. Formüller asla çalıştırılmaz; dosyanın tuttuğu değer okunur.

Fiyat içeren bir dosya eklendikten sonra iletişim kutusundaki {{ui:Fiyatlar kütüphaneye}} her [Kütüphane](topic:price-library) kaydının malzeme fiyatını, dosyanın fiyatladığı kayıt için ayarlar: aynı ad ve aynı birim (ya da birim belirtilmemiş). İşçilik, fire, yükseklik ve montajlar olduğu gibi kalır; kaydın notu fiyatın hangi dosyadan geldiğini söyler. Metre cinsinden bir kayıt, fit cinsinden bir listeden fiyatlandırılmaz; eşleşen adı olmayan kayıt olduğu gibi bırakılır; durum satırı birim nedeniyle kaç kaydın atlandığını söyler. Yeni fiyatları bu metraja getirmek için Kütüphane'den yeniden fiyatlandırın.

## Sorunlar panelinde

Eksik bir durum bir uyarıdır, uzun bir bekleme bir nottur; ikisi de ortak Sorunlar panelinde ("Tedarik stoku") diğer tüm denetimlerle birlikte durur. Birini bir nedenle kabul edebilirsiniz; kabul metrajda kaydedilir.

## Asistanınızla

Ayarlar'da asistanlara izin verirseniz denetimi okuyabilirler (supply_check). Tedarikçi dosyası eklemek size aittir.

## Bilmeniz gerekenler

Stok rakamları yalnızca eklediğiniz dosya kadar güncel olur. Yenilemek için dosyayı yeniden ekleyin: aynı adlı bir dosya öncekinin yerine geçer.
