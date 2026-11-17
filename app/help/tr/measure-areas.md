---
title: Boşluklarla alan ölçün
summary: Zeminleri, tavanları ve döşemeleri çizin, içlerinden boşluklar çıkarın, kavisli kenarlar, daireler ve yuvarlak boşluklar ekleyin ve alanı ile çevreyi okuyun.
keywords: oda doldurma, taşkın doldurma, boya kovası, odanın içine tıklama, otomatik alan, geri çıkarma, back-out, backout, kolon, şaft, birden çok kalemden düş, alan, çokgen, dış hat, fit kare, sf, boşluk, delik, düş, daire, yuvarlak, yay, çevre, zemin, tavan, döşeme
from: 34648db7
---

Bir alan kalemi kapalı alanı ölçer. Her dış hattın içinden boşluklar çıkarılabilir (bir şaft, bir kolon, bir saksı) ve kenarları düz ya da kavisli olabilir.

Başlamadan önce: sayfanın bir ölçeğe ihtiyacı vardır ([Ölçeği ayarlayın](topic:set-the-scale)) ve bir alan kalemine ihtiyacınız vardır ([Metraj kalemleri oluşturun](topic:create-items)).

## Bir alanın dış hattını çizin

1. {{ui:Kalemler}} altındaki alan kalemine tıklayın.
2. Araç çubuğunda {{ui:Alan}}'ı seçin ya da {{key:A}} tuşuna basın.
3. Odanın ya da döşemenin her köşesine sırayla tıklayın. 0°, 45° ve 90° kenarlar için {{key:Shift}} tuşunu basılı tutun.
   Üçüncü noktadan itibaren dış hat dolar ve durum çubuğu "Alan" ve "çevre" gösterir. İlk noktanın etrafında küçük bir halka belirir.
4. Dış hattı kapatın: ilk noktaya (halkasının içinde) tıklayın, {{key:Enter}} tuşuna basın, çift tıklayın ya da sağ tıklayın.
   Alan, kalemin renginde hafifçe doldurulur, fit kare cinsinden etiketlenir ve seçili işaret olur.

{{key:Backspace}} son köşeyi kaldırır; {{key:Esc}} dış hattı atar.

Kendini kesen bir dış hat reddedilir: "Dış hat kendini kesiyor, bu yüzden alanı yanlış olurdu. Kesişmeden yeniden çizin." Sekiz biçimindeki bir şekli bunun yerine iki alan olarak çizin.

## Kavisli kenarlar

Dış hat çizerken yay modunu açın ({{ui:Yay}} ya da {{key:R}}). Bir köşeden sonra eğri boyunca bir noktaya, sonra eğrinin bittiği yere tıklayın. Dış hattı bir eğriyle kapatmak için, bu son tıklamayı ilk noktaya yapın. Alan ve çevre tam eğriyi kullanır. Düz kenarlar için yeniden {{key:R}} tuşuna basın. Sonradan bir eğriyi değiştirmek için alanı seçin ve yayın ortasındaki yuvarlak tutamacı sürükleyin. Bkz. [Doğrusal koşuları ölçün](topic:measure-linear#arcs-and-curved-walls).

## Bir daire

1. Bir alan kalemiyle {{ui:Daire}}'yi seçin ya da {{key:O}} tuşuna basın.
2. Merkeze tıklayın.
3. Kenardaki herhangi bir noktaya tıklayın.
   Hareket ettirdikçe durum çubuğu yarıçapı ve alanı gösterir. Daire, tam alan ve çevreye sahip bir alan işareti olarak eklenir.

## Tek tıkla bir odayı doldurun

Odalar kapalı duvarlar olarak çizilmişse, {{ui:Oda}} ({{key:B}}) tek tıkla bir zemini alır:

1. Bir alan kalemi seçin (örneğin bir zemin kaplaması) ve sayfaya ölçeğini verin.
2. {{ui:Metraj}} grubunda {{ui:Oda}}'yı seçin ya da {{key:B}} tuşuna basın.
3. Bir odanın içine, açık zeminde tıklayın (bir çizgi ya da etiketin üstüne değil).

TakeoffCraft sayfanın çizgilerini okur, tıklamanın çevresindeki alanı bulur ve duvarların iç yüzleri boyunca geçerli kalemin bir alanı olarak dış hattını çizer. **4'-0"**'a kadar olan kapı açıklıkları kapalı sayılır, böylece dış hat kapı boşluğunun üzerinden düz geçer; **Ayarlar › TakeoffCraft › Oda doldurma şu genişliğe kadar açıklıkları kapatır** bu genişliği değiştirir (3'-0" ile 8'-0" arası). Odanın içindeki oda adları, mobilyalar ve armatürler boşluk oluşturmaz.

Şu durumlarda nedenini belirterek reddeder:

- tıklama bir çizginin üzerindedir ("Bu bir çizginin üzerinde");
- alan kapalı değildir: ayardan geniş bir açıklık, alanın sayfa kenarına kadar taşmasına izin verir. Ayarı yükseltin ya da o odayı elle {{ui:Alan}} ile çizin;
- alan çok küçüktür (bir oda değil, bir sembol).

Bir kapı ayardan geniş olduğunda, doldurma bir sonraki odaya taşar ve ikisini birlikte çizer: geri alın ({{key:Mod+Z}}), ayarı yükseltin ve yeniden tıklayın. Dış hattı herhangi bir alan gibi kontrol edin: düzeltmek için köşelerini sürükleyin. Taranmış bir sayfa da aynı şekilde çalışır, ancak çizgileri yeterince koyu olmalıdır; açık gri çizgiler doldurmayı durdurmayabilir.

## Bir alandan boşluk kesin

1. {{ui:Seç}} ({{key:V}}) seçin ve alana tıklayın. Köşelerinde kare tutamaçlar gösterir.
2. Araç çubuğunda {{ui:Boşluk}}'u seçin ({{key:X}} tuşuna basın) ya da **Seçili işaret** altında {{ui:Boşluk ekle}}'yi seçin.
3. Boşluğun köşelerine, alanın içinde tıklayın. Yay modu burada da çalışır.
4. Bir alan gibi kapatın: ilk noktasına tıklayın, {{key:Enter}} tuşuna basın, çift tıklayın ya da sağ tıklayın.
   Boşluk doldurulmadan bırakılır ve durum çubuğu "Boşluk eklendi. Bir tane daha çizin ya da Esc'ye basın." der.
5. Aynı alanda daha fazla boşluk çizin ya da {{key:Esc}} tuşuna basın.

Yuvarlak bir boşluk için **Seçili işaret** altında {{ui:Yuvarlak boşluk ekle}}'yi seçin, merkezine, sonra kenarındaki bir noktaya tıklayın.

Bir boşluk tamamen alanın içinde olmalı ve başka bir boşlukla çakışmamalıdır. Aksi halde TakeoffCraft onu reddeder: "Bir boşluk tamamen alanın içinde olmalıdır." ya da "Boşluklar birbiriyle çakışamaz."

Son boşluğu yeniden çıkarmak için {{ui:Son boşluğu kaldır}}'ı seçin.

## Geri çıkarmalar: birden çok kalemden çıkarılan kolonlar, şaftlar ve açıklıklar

Bir boşluk tek bir alan işaretine aittir. Bir **geri çıkarma** bir kez çizilir ve seçtiğiniz kalemler için, çakıştığı her alandan çıkar: kolonları bir kez çizin, böylece zemin kaplamasından, tavandan ve döşemeden birlikte düşerler.

1. Bunlar için bir alan kalemi oluşturun, örneğin "Kolonlar".
2. Kalemin ayarlarında **Geri çıkarma: işaretleri alanlarını diğer kalemlerden çıkarır** kutusunu işaretleyin. Diğer alan kalemlerinizin listesi, hepsi işaretli olarak görünür: geri çıkarmaların dokunmaması gerekenlerin işaretini kaldırın (örneğin duvarlardaki boya).
3. Kolonları her zamanki gibi {{ui:Alan}} ya da {{ui:Daire}} ile ölçün. Her biri kesikli çizilir.

Aynı sayfadaki, işaretli bir kalemin her alan işareti, geri çıkarmanın kapsadığı kısmı kaybeder: içinde kalırsa tüm geri çıkarma, kenarı kestiğinde yalnızca çakışan kısım ve bir boşluğun içinde hiçbir şey. Seçili alanın panelinde **Geri çıkarmalar** ve kalan alan gösterilir. Kalemin miktarı, birim maliyet formülleri, maliyetler, 3B denetim görünümü ve dışa aktarma hepsi kalan alanı kullanır; keşifin notları geri çıkarmaların ne kadar çıkardığını söyler. Geri çıkarma kaleminin kendi alanını sayar (fiyatlandırmıyorsanız maliyetlerini sıfır bırakın).

Bir geri çıkarma **dışbükey** olmalıdır: bir dikdörtgen, bir daire ya da içe dönük köşesi olmayan herhangi bir dış hat. TakeoffCraft dışbükey olmayanı çizmeyi reddeder; L biçimli bir şaftı iki geri çıkarma olarak çizin. Geri çıkarmaların boşlukları olamaz ve birbiriyle çakışan iki geri çıkarma ikisi de sayılır.

Çevre (`P`) değişmez: geri çıkarmalar yalnızca alanı çıkarır.

## Alanı okuyun

Alanı seçin. **Seçili işaret** şunları gösterir:

| Satır | Anlamı |
|---|---|
| Alan | Net alan: dış hat eksi boşluklar. Kalemin saydığı budur. |
| Dış hat | Dış hattın içindeki brüt alan (boşluklar varsa gösterilir). |
| Boşluklar | Kaç delik olduğu ve toplam alanları. |
| Çevre | Dış hattın kenar uzunluğu, **artı** her boşluğun kenarları ("boşluklarla birlikte"). |

Çevre, kenar kalıpları ya da bir delik etrafından geçen taban gibi şeyler için bilerek boşluk kenarlarını da içerir. Yalnızca dış kenara ihtiyacınız varsa, o kalemden boşlukları çıkarın ya da dış kenarı doğrusal koşu olarak ölçün.

Kalemin {{ui:Birim}} değeri toplamın nasıl bildirileceğine karar verir: SF, SY ya da m². **Seçili işaret** paneli ve durum çubuğu her zaman fit kare gösterir.

## Bir alanı düzeltin

- **Bir köşeyi taşıyın**: alanı seçin ve bir köşe tutamacını sürükleyin (boşlukların da tutamaçları vardır). Yeni şekil kendini keserse ya da bir boşluğu dışarı iterse, köşe geri alınır: "Nokta geri alındı."
- **Başka bir kaleme taşıyın**: **Seçili işaret** altındaki **Kalem** listesinden başka bir alan kalemi seçin.
- **Sil**: {{key:Delete}}, araç çubuğunun {{ui:Daha fazla}} menüsündeki {{ui:Sil}} ya da {{ui:İşareti sil}}.

## Hacimler için derinlik

Alan kalemine bir {{ui:Derinlik}} verin (örneğin bir döşeme için `0'-4"`) ve kübik yarda elde etmek için bir montaj bileşeninde `A * H / 27` kullanın. Bkz. [Montajlar ve formüller](topic:assemblies).
