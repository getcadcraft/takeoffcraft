---
title: Bir etiket listesini miktar olarak içe aktarın
summary: Yapı modelinden dışa aktarılan bir etiket listesi (CSV), metrajda her etiket için tipli bir miktara dönüşür; modelin sayıları ve alanları ölçtüklerinizin yanında durur.
keywords: etiketler, etiket listesi, yapı modeli, bimcraft, ifc, miktarlar, csv, liste, içe aktarma, tipli miktar
from: a60c19b6
---

{{ui:Etiketler}} araç çubuğundaki, BimCraft'ın CSV dosyası olarak kaydettiği bir etiket listesini getirir. Her farklı etiket, CivilCraft'ın kazı ve dolgusunun dönüştüğü türden bir tipli miktara dönüşür.

1. BimCraft'ta istediğiniz etiket listesini oluşturun ve CSV olarak kaydedin.
2. {{ui:Etiketler}} seçin ve dosyayı seçin.
3. Satırı hangi sütunun adlandırdığını ({{ui:Satırı şuna göre adlandır}}, genellikle etiket) ve sayıyı hangi sütunun tuttuğunu ({{ui:Miktar şuradan}}) belirtin. {{ui:Satırları say}} ile her satır bir sayılır.
4. Birimi seçin. Milimetre cinsinden bir uzunluk, {{ui:Şununla çarp}} 0.001 ile metreye döner.
5. {{ui:Miktarları ekle}}.

Aynı etikete sahip satırlar birlikte toplanır. Sayı olmayan bir hücre dışarıda bırakılır ve özette sayılır. Aynı listeyi yeniden getirmek, zaten sahip olduğunuz miktarları ekleyip çoğaltmak yerine günceller; adları, birim fiyatları ve fireleri sizde kalır.

## Bilmeniz gerekenler

Tipli bir miktar bir sayfada ölçülmez, bu yüzden işareti yoktur. Hiçbir şey bir yere gönderilmez; dosya burada okunur.
