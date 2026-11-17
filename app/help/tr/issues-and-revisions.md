---
title: Sorunlar, revizyonlar ve çizim değişiklik günlüğü
summary: Mimarın modeliyle tek bir sorun geçmişi tutun: sorunları içe aktarın, şantiye talimatlarını, imalat çizimlerini ve bağlı modelleri bir soruna göre kaydedin ve çizim değişiklik günlüğünü okuyun.
keywords: sorun, revizyon, revizyonlar, değişiklik günlüğü, çizim değişiklik günlüğü, çizim kaydı, şantiye talimatı, imalat çizimi, bağlı model, ihale, inşaat, sorun geçmişi, metraj cetveli, metraj
from: 8d8f6e68
---

## Ne yapacaksınız

Ekibin geri kalanıyla aynı sorun geçmişi üzerinde çalışın. Hangi sayfaların hangi revizyonla yayınlandığını görün ve sahadaki işleri ait oldukları soruna göre kaydedin.

## Adımlar

1. **Sorunlar ve revizyonlar**'ı açın.
2. **Bir sorun geçmişi okuyun**'u seçin ve BimCraft'tan ya da başka bir uygulamadan kaydedilmiş `.issues.json` dosyasını seçin. Sorunları ve kayıtları sizinkilere eklenir. Hiçbir şey değiştirilmez.
3. Bir şantiye talimatı, bir imalat çizimi, bir işaretleme kümesi, bir bağlı model ya da bir not için **Kayıt ekle**'yi seçin. Kaydın ait olduğu sorunu ve durumunu seçin. Seçtiğiniz dosya adı, boyutu ve SHA-256 ile kaydedilir; dosya bulunduğu yerde kalır.
4. **Çizim değişiklik günlüğü** her sayfa için bir satır, her sorun için bir sütun gösterir. Parantez içindeki revizyon, değişiklik yapılmadan yeniden yayınlanmıştır.
5. **Değişiklik günlüğünü indirin (CSV)** sorunları, sayfa tablosunu ve kayıtları kaydeder. **Sorun geçmişini kaydet** diğer uygulamaların okuyabildiği bir dosya yazar.

## İyi bilinmesi gerekenler

- **Bir sorun kaydedin** ölçtüğünüz sayfaları bir sorun olarak kaydeder; örneğin bir metraj cetveliyle. **Sonrasında değişenler** ise bu sorundan sonra hangi sayfaların yeniden ölçüldüğünü gösterir.
- Geçmiş metraj dosyasına kaydedilir. Her değişiklik tek bir geri al adımıdır.
- Aynı dosyayı iki kez okumak hiçbir şeyi iki kez eklemez. İki kopya aynı kaydı içeriyorsa daha yeni olan tutulur.
