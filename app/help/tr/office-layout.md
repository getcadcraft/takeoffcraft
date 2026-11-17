---
title: "Ofis düzeni: Varsayılan İlkelerinizdeki gruplama, ara toplamlar, başlık ve sütun başlıkları"
summary: Varsayılan İlkeler eklentisini açın; keşif, sayfaya göre miktarlar, dışa aktarımlar ve bir asistanın okuduğu veriler, BimCraft listelerinin de kullandığı aynı ofis liste düzenini alır.
keywords: ofis standardı, ofis düzeni, varsayılan ilkeler, eklenti, liste düzeni, türe göre grupla, sayfaya göre grupla, ara toplam, toplamlar, başlık, sütun başlıkları, büyük harf, keşif düzeni, dışa aktarım düzeni, ayarlar
from: cfd2f30a
---

## Ne yapacaksınız

TakeoffCraft tablolarını ofisinizin yayımladığı biçimde düzenlemesini sağlayın; her metrajda ayrı ayrı kurmanız gerekmez. Düzen bir kez, Varsayılan İlkeler'de ayarlanır ve bu bilgisayardaki her uygulama için geçerlidir: BimCraft ya da CadCraft'ta ne ayarlarsanız TakeoffCraft onu kullanır; tersi de geçerlidir.

## Adımlar

1. **Ayarlar › Eklentiler**'i açın ve **Varsayılan İlkeler**'i açın. Siz açana kadar kapalıdır; kapalıyken ya da hiçbir şey ayarlanmamışken TakeoffCraft tam olarak eskisi gibidir.
2. **Ayarlar › Genel › Varsayılan İlkeler**'i açın ve **Liste düzeni (ofis standardı)** bölümünü bulun:

| İlke | TakeoffCraft'ta ne yapar |
|---|---|
| Listeleri şuna göre grupla | **Tür**, keşfi kalem türüne göre gruplar (Doğrusal, Alan, Sayım, Tipli miktar). **Seviye**, miktarları kendi sayfalarına göre, sayfa bazında gruplar. **Oda** ve **Gruplama yok** ikisini de gruplamadan bırakır |
| Listelerde toplamlar | **Her grubun altında ara toplam ve toplam** her grubun altına ara toplam ekler. İş toplamı her zaman kalır |
| Liste başlığı | Tablonun üstünde bir satır, örneğin `{schedule}: ofis düzeni` |
| Sütun başlıkları | Olduğu gibi, BÜYÜK HARFLERLE ya da Baş Harfleri Büyük |

3. Ayarlar'ı kapatın. Tablolar hemen buna uyar.

## Düzeni neler etkiler

- **Miktarlar › Kaleme göre** ve **Sayfaya göre**: grup başlıkları, her grubun altında bir ara toplam, başlık ve sütun başlığı biçimi. Başlığın altındaki bir satır, ofis standardınızın hangi bölümleri belirlediğini söyler. Satırlar aynı satırlardır: birim fiyatlarını ve fireyi yine bunlara girersiniz ve rakamlara tıklayarak işaretlerini seçersiniz. Bir bileşen ya da ikinci bir koşul, kendi kaleminin altında kalır.
- **Dışa aktarılan keşif** (CSV ve XLSX): aynı gruplar ve ara toplamlar. Çalışma kitabında bir ara toplam, kendi grubu üzerinde bir `SUBTOTAL` formülüdür; iş toplamı da bir formüldür, böylece hiçbir şey iki kez sayılmaz.
- **Bir asistanın okuduğu veriler**: `takeoff_estimate` ve `takeoff_quantities` (sayfaya göre) grupları, satırları ve ara toplamları içeren bir `layout` bloğu ekler ve ofisin hangi bölümleri ayarladığını belirtir.

## Kendi düzenini koruyanlar

- **Miktarlar › Alana göre** kendi gruplamasını (teklif alanına göre) belirtir ve onu korur.
- **İş toplamı**, teklif özetinin işaretlemeleri ve alternatifler yeniden gruplanmaz.
- Tablonun sütunu olmayan bir gruplama dışarıda bırakılır: keşifte seviye, sayfaya göre miktarlarda ise tür yoktur.

## İyi bilinmesi gerekenler

- İlkeler, her CadCraft uygulaması için bu tarayıcıda tutulur ve Varsayılan İlkeler dosyasıyla taşınır (aynı yerdeki **Dosyaya kaydet** / **Dosyadan yükle**); böylece bir ofis tek bir dosyayı paylaşır.
- Grup içeren CSV olarak dışa aktarılan bir keşif okumak içindir. Bir keşfi fiyat kütüphanesi olarak geri almak için, hiçbir gruplama ayarlı değilken dışa aktarın.
- Aynı standardın BimCraft tarafı: listeler, kurulumlar ve dışa aktarımlar. TakeoffCraft'ın henüz kendi ilkeleri yoktur; bu yüzden Ayarlar › TakeoffCraft altında bir Varsayılan İlkeler bölümü yoktur.
