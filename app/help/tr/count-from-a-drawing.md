---
title: Bir çizimden sayın
summary: Blokları, bir katmandaki nesneleri ya da metni doğrudan bir DWG ya da DXF dosyasından sayın: tam olarak, iç içe bloklar, dinamik blok varyantları ve blok dizileri işlenmiş olarak, tek bir geri alma adımında.
keywords: çizimden say, cad sayımı, blok sayımı, blokları say, insert, blok adı, iç içe bloklar, dinamik blok, varyant, minsert, dizi, katman, nesne türü, daireler, metin, öznitelik, etiket, gizli katmanlar, tam sayım, nasıl yapılır, kapılar, armatürler
from: 5060e24e
---

{{ui:CAD sayımı}} sayfa çubuğunda (diğer menü stillerinde **Çizimden say** komutu) bir DWG ya da DXF dosyasının orada olduğunu söylediği şeyleri sayar. {{ui:Otomatik say}} bir simgenin resmini arar ve birini kaçırabilir ya da yanlış birini bulabilir; bu ise nesneleri sayar: `DOOR-36` adlı bloğun her eklemesi bir kapıdır. Önce çizimi açın: [DWG ya da DXF çizimi açın](topic:open-a-drawing).

## Bir blok sayın

1. Çizimin bir sayfasını açın. {{ui:CAD sayımı}} sayfa çubuğunda bulunur.
2. Seçin. Pencere blokları, her birinden kaç tane olduğuyla listeler. Ada göre arayın, sonra birini seçin.
3. Listenin altındaki satıra bakın: "22 bulundu, 22 eklenecek."
4. {{ui:Şuna ekle}} altında bir sayım kalemi seçin ya da {{ui:Yeni bir sayım kalemi}} bırakın ve bir ad verin.
5. Sayıyı adlandıran ekleme düğmesini seçin: {{ui:22 işaret ekle}}. İşaretler bloğun ekleme noktalarında görünür ve kalemin miktarı sayıdır.

Bu tek bir geri alma adımıdır: {{key:Mod+Z}} işaretleri (ve yeni bir kalemi) birlikte kaldırır. Metraj, elektronik tablo ve işaretli PDF kalemi diğer sayım kalemleri gibi ele alır.

### Neyi sayar

- **Blok adının her eklemesi**, ölçeği ve açısı ne olursa olsun, model uzayında ya da kağıt uzayında. Blok adları büyük/küçük harfe duyarsızdır.
- **Blok dizileri** (MINSERT): dizideki her kopya bir tanedir.
- **İç içe bloklar.** Başka bir blokun içine yerleştirilmiş bir blok her derinlikte sayılır. Liste "diğer bloklar içinde 6" der; yalnızca çizimde doğrudan yerleştirilen eklemeleri saymak için {{ui:Başka blokların içindeki blokları da say}} seçeneğinin işaretini kaldırın.
- **Dinamik bloklar.** Bir dinamik blok, dosyanın tuttuğu anonim kopyalar (`*U12`) yerine kendi adıyla sayılır. Durumları ayrı listelenir ("Tek 12, Çift 4"): yalnızca bir durumu saymak için bir durum seçin ya da {{ui:Her varyant}}. Dosya bir kopyanın hangi durumu gösterdiğini söylemiyorsa, bunlar "(durum bilinmiyor)" olarak listelenir.
- **Katman filtresi.** Birkaç katmanda bulunan bir blok için {{ui:Katmanda}} altında birini seçin.

### Saymadıkları

- **Gizli katmanlar.** Dosyada kapalı ya da donmuş bir katmandaki nesne (ya da {{ui:Katmanlar}}'da gizlediğiniz bir nesne) dışarıda bırakılır ve satır kaç tane olduğunu söyler: "3 gizli katmanda, dışarıda bırakıldı". Dahil etmek için {{ui:Bunları da say}} seçeneğini işaretleyin.
- **Bağlantılı çizimler açık değilse** sayılmaz; pencere bunu söyler.
- **Tam olarak aynı türden başka bir nesnenin üzerine yığılmış nesneler** iki nesne olarak sayılır (gerçekten iki nesnedirler) ve pencere bunu söyler: genellikle bakılmaya değer bir çizim hatasıdır.

## Bu sayfanın gösterdiği ya da tüm çizim

- **Bu sayfanın gösterdiği** sayfanın gösterdiği nesneleri sayar: bir yerleşimde, görünüm pencereleri içindeki model nesneleri (bir görünüm penceresinde donmuş bir katman orada sayılmaz) artı yerleşimin kendi nesneleri.
- **Tüm çizim, her nesne bir kez**, model uzayını bir kez sayar, işaretleri Model sayfasında bırakır ve birden çok yerleşimin tekrar gösterdiklerini saymaz.

Bir yerleşimin gösterdiğini saymak ve Model'in gösterdiğini saymak aynı nesneler için aynı sayıyı verir; ikisini de tek bir kaleme eklemeyin.

## Sayımları yeniden sayın

Aynı bloğu aynı kalemle yeniden saymak yalnızca yeni olanı ekler: "22 zaten sayıldı." Her işaret bir nesneyi temsil eder.

## Katmana ve türe göre

{{ui:Katman ve türe göre}} seçeneğinde bir katman ve bir nesne türü seçin (daireler, çoklu çizgiler, taralamalar…): "E-LITE üzerindeki tüm daireler". Blokların içindeki nesneleri de saymak için {{ui:Blokların içindeki nesneleri de say}} seçeneğini işaretleyin; bunlar blok tanımlarında, bloğun eklendiği her yerde dahil edilir.

## Metne göre

{{ui:Metne göre}} seçeneğinde metni yazın, örneğin `A3`, ve tam olarak bu olduğunu, bunu içerdiğini ya da tam bir sözcük olarak içerdiğini belirtin. Metin nesneleri, çok satırlı metin ve blok **öznitelik değerleri** hepsi sayılır (bir etiket özniteliği `ITEM = A3` bulunur); yalnızca bir özniteliği saymak için {{ui:Özniteliğde}} seçin. En yaygın metinler tıklanabilir olarak listelenir.

## Bunun yerine Otomatik say ne zaman kullanılır

PDF'ler için ve bir çizimdeki blok olmayan simgeler için {{ui:Otomatik say}} kullanın (serbest çizilmiş ya da patlatılmış). Blok olarak çizilmişlerse, burada sayın.
