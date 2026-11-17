---
title: Geçmiş işlerinizden fiyat hafızası
summary: TakeoffCraft, geçmiş metrajlarda kullandığınız oranları yalnızca bu bilgisayarda hatırlar; böylece yeni bir metraj, geçen sefer ödediğiniz fiyatlardan başlayabilir. Görün, kullanın, unutun.
keywords: fiyat hafızası, fiyatlar, fiyatları hatırla, son iş, geçmiş işler, tipik fiyat, medyan, oranlar, fiyatlandırılmamış, yeniden fiyatlandır, geçmiş bir metrajdan öğren, unut, kütüphane
from: 7279f1a1
---

Araç çubuğundaki {{ui:Fiyatlar}} (dolar işareti), kullandığınız fiyatlar hakkında TakeoffCraft'ın hatırladıklarını açar. Düz bir listedir: her kalem adı için son işlerinizden alınan oranlar. Fiyat kütüphanesinin yanında bu tarayıcıda tutulur (Studio'da kendi web görünümünde), hiçbir zaman bir metraj dosyasının içinde değildir ve hiçbir yere gönderilmez. Eğitilmiş bir model değildir.

## Ne hatırlanır

Bir metrajı kaydettiğinizde, fiyatı olan ve kullanılan her kalem (bir işareti ya da sıfırdan büyük bir yazılı miktarı olan) adı ve türü altında hatırlanır: malzeme oranı, işçilik oranı, fire ve birim. Bir iş, metrajın alındığı plan dosyalarıdır; bu yüzden aynı metrajı yeniden kaydetmek, yeni bir iş eklemek yerine kendi fiyatlarının yerine geçer. Her ad için son 12 iş tutulur.

Eski işlerinizle başlamak için {{ui:Geçmiş bir metrajdan öğren…}} seçeneğini seçin ve kayıtlı bir metraj (.json) seçin. Fiyatlandırılmış, kullanılmış kalemleri aynı biçimde hatırlanır.

Adlar, kelimeleri eşleştiğinde eşleşir; büyük-küçük harf ya da noktalama ne olursa olsun ("2x4 Stud, 8 ft" ile "2x4 stud 8 FT" aynıdır). Başka türde bir kalem için aynı kelimeler (doğrusal bir kalem ile sayım kalemi) aynı fiyat değildir.

## Yeni bir metrajda kullanın

1. Yeni metrajın kalemlerini oluşturun.
2. {{ui:Fiyatlar}} seçeneğini seçin. {{ui:Bu metraj}} altında, hatırlanan bir fiyatı olan her kalemi; üzerinde şu an ne olduğunu, son işin oranlarını, tipik oranları (hatırlanan işlerin orta değerini) ve aralığı görürsünüz.
3. Bir kalemde {{ui:Sonuncuyu kullan}} ya da {{ui:Tipiği kullan}} seçeneğini seçin ya da henüz fiyatı olmayan her kalemi son işten doldurmak için {{ui:Fiyatı olmayan N kalemi hafızadan fiyatlandır}} seçeneğini seçin.

Her kullanım tek bir adımdır: {{key:Ctrl+Z}} onu geri alır. Yalnızca benzer bir adı olan bir kalem bunu belirtir ve düğmeler benzer adın oranlarını kullanır (bir ad diğerinin içindedir). Fit başına hatırlanan bir fiyat, metre başına bir kaleme asla konmaz; adet başına hatırlanan bir fiyat da öyle: iletişim kutusu birimlerin farklı olduğunu söyler ve kalemi olduğu gibi bırakır.

## Görün, değiştirin, unutun

{{ui:Hatırlanan her şey}} her adı, oranları ve iş sayısıyla listeler. Çöp kutusu düğmesi bir adı unutur; {{ui:Tüm fiyatları temizle}} hepsini unutur. Hatırlamayı durdurmak için {{ui:Metrajı kaydettiğimde fiyatlarımı hatırla}} seçeneğini kapatın; zaten orada olanlar, siz unutana kadar kalır. Metrajlarınıza ve fiyat kütüphanenize hiçbir zaman dokunulmaz.

## Asistanınızla

Ayarlar'da asistanlara izin verirseniz, metrajın kalemleri için hatırlananları okuyabilirler (prices_list) ve bunlardan kalemleri fiyatlandırabilirler (prices_apply; önce önizleyebilir). Bu, iletişim kutusundaki listenin aynısıdır.
