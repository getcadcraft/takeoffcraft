---
title: Plan takımındaki her şeyi sayın
summary: Bir simge açıklamasını bir kez kutuya alın; TakeoffCraft açık her sayfadaki her simgeyi tek bir çalıştırmada sayar. Her sayım sayfasına bir bağlantıdır ve hiçbir şey eklenmeden önce gözden geçirirsiniz.
keywords: hepsini say, açıklama, simge açıklaması, tüm takım, her sayfa, tüm sayfalar, her kapı, her armatür, cihazlar, liste, simgeler, otomatik say, plan takımı, 200 sayfa, eşleşme düzeyi, benzer görünen
from: adc99744
---

{{ui:Hepsini say}}, bir simge açıklamasını okur ve sonra açık her sayfadaki her simgeyi sayar. Tüm bir açıklama için bir kez yapılan {{ui:Otomatik say}}'dır. Bu, kendi sayfalarınızda düz simge eşleştirmedir; eğitilmiş bir model değildir ve hiçbir şey bilgisayarınızdan çıkmaz. Eklemeden önce sayımları gözden geçirin: bu bir yardımcıdır, bir garanti değildir.

## Bir açıklamayı sayın

1. Planları açın. Herhangi bir sayfadaki açıklama işe yarar: simgeler, yanlarında adlarıyla.
2. Araç çubuğunda {{ui:Hepsini say}} seçin.
3. Açıklamanın etrafına, simgeleri ve adları içine alacak şekilde bir kutu sürükleyin. Yanında simge olmayan bir başlık (SYMBOL LEGEND) tek başına dışarıda bırakılır.
   Panel her simgeyi resmi ve yanındaki yazılı adıyla listeler. Ad kalemin adı olur; isterseniz burada yeniden adlandırın.
4. Sayılmasını istemediğiniz simgelerin işaretini kaldırın. Aranamayan bir simge (çok küçük ya da boş) nedenini söyler.
5. {{ui:N sayfada say}} seçin. Bir çubuk aranan sayfayı gösterir; {{ui:İptal}} çalıştırmayı durdurur. Sayfa kullanılmaya devam eder.

Açıklamanın kendi simgeleri, kendi sayfasında sayılmaz. Başka bir ölçekte çizilmiş bir sayfa o ölçekte aranır ve simgeler herhangi bir dik açıda döndürülmüş olarak bulunur.

## Sayımları gözden geçirin

- Her simge toplamını ve altında, içinde herhangi bir simge olan her sayfa için bir bağlantı gösterir ("E-103: 4"). Birine tıklayın, o sayfaya gidin. Bulunanlar kalemin rengiyle kutulanır.
- **Bir kutuya tıklayın**: o bulguyu dışarıda bırakın. Kesikli çizgili ve üstü çizili olur; yeniden dahil etmek için tekrar tıklayın.
- **Eşleşme düzeyini ayarlayın** (%50 ila %100, Ayarlar'daki düzeyinizden başlayarak). Yükseltmek yalnızca yakın eşleşmeleri tutar. Kaydırıcı yalnızca bulunanları süzer; yeniden arama yapılmaz.
- Birbirine benzeyen iki simge (çift ve dörtlü priz) aynı yeri eşleştirebilir. Daha iyi eşleşme onu alır ve panel bunun kaç yerde olduğunu söyler; böylece kontrol edebilirsiniz.
- Simgenin boyutunda aramak için çok büyük olan bir sayfa atlanır ve panel bunu söyler.

## Ekleyin

{{ui:N işaret ekle}} seçin. Her simge, her bulguda bir işareti olan bir sayım kalemi olur. Zaten sizin bir sayım kaleminiz olan bir ad yeniden kullanılır (elle işaretlediğiniz yere hiçbir şey çift eklenmez). Tüm çalıştırma tek bir adımdır: {{key:Ctrl+Z}} tüm kalemleri ve işaretleri geri alır.

Kabul ettikleriniz {{ui:Öğrenilenler}}'e de beslenir: simgeler bir sonraki sefer için metrajın dosyasında hatırlanır.

## Asistanınızla

Ayarlar'da asistanlara izin verirseniz, bir açıklamayı okuyabilir (legend_open), sayımı arka planda çalıştırabilir (legend_count_start, sonra legend_count_status), sayımları okuyabilir (legend_count_result) ve ekleyebilir (legend_count_add; bu, önce ne ekleyeceğini önizleyebilir). Bu, panelde gördüğünüz çalıştırmanın aynısıdır.

## Her açıdaki simgeler

Saymadan önce {{ui:Her açıdaki simgeler}} seçeneğini işaretleyin; dik açı olmayan bir açıyla çizilmiş simgeleri de bulmak için (eğik bir duvar dübeli, bir çatıyı izlemek için döndürülmüş bir armatür). Arama o zaman her simgeyi her 15 derecede bir döndürür; yuvarlak bir simge yine tek bir arama gerektirir ve yuvarlak olmayan bir simge altı kata kadar uzun sürebilir. Dik çizilmiş planlar için kapalı bırakın.

## İyi bilinmesi gerekenler

- Açıklamadakiyle aynı biçimde çizilmiş simgelere ihtiyacı vardır. Sayfaların ölçekleri ayarlandığında, açıklamanın sayfalardan farklı boyutta çizilmiş olması sorun değildir; ölçekler yoksa simgeler açıklamanın boyutunda aranır.
- Üzerinden bir duvar ya da uzun bir çizgi geçen bir simge kaçırılabilir, çünkü açıklamanın resmine artık benzemez. Diğerlerine güvenmeden önce ilk sayfadaki bulguları kontrol edin.
- Metni olmayan bir tarama yine çalışır: simgeler satırlarına göre bulunur ve adları siz yazarsınız.
