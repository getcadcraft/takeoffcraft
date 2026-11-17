---
title: TakeoffCraft'ın metrajlarınızdan öğrendikleri
summary: TakeoffCraft, Otomatik say ile onayladığınız sembolleri, koşul takımlarınızı, en çok kullandığınız birim maliyetleri ve her sayfada tekrarladığınız işaret kalıplarını metrajın kendi dosyasının içinde saklar. Görün, kullanın, silin.
keywords: öğren, öğrenilenler, öğrenme, asistan, hatırla, semboller, şablonlar, geçen işle aynı, geçen iş, koşul takımı, koşullar, yeniden kullan, birim maliyetler, en çok kullanılan, öneriler, her sayfada yinele, her sayfa, künye, kalıp, tümünü temizle, unut, gizlilik
from: 54d99e99
---

TakeoffCraft, onunla ne kadar çok metraj yaparsanız o kadar hızlanır. Yalnızca kabul ettiklerinizden öğrenir:

- [Otomatik say](topic:auto-count) ile bir sembolü kutuya alıp ardından eklediğiniz semboller,
- kaydettiğiniz koşul takımları,
- kullandığınız birim maliyetler (iş başına bir kez),
- her sayfada tekrarladığınız işaret kalıpları.

Bu, kendi sayfalarınızda basit bir eşleştirmedir; Otomatik say'ın yaptığı aramanın aynısıdır. Eğitilmiş bir model değildir. Öğrendiği her şey **bu metrajın dosyasında** (`.takeoff.json`) tutulur ve hiçbir yere gönderilmez. Bir sonraki işe taşımak için [Geçen işle aynı](topic:what-it-learned#same-as-last-job) özelliğini kullanın.

Araç çubuğundaki {{ui:Learned}} öğesini seçin (ampul simgesi, {{ui:Auto count}} öğesinin yanında) ve hepsini görün.

## Semboller

{{ui:Auto count}} ile bir sembolü kutuya alıp {{ui:Add}} seçtiğinizde, kutuya aldığınız sembol kabul ettiğiniz eşleşme düzeyiyle birlikte saklanır.

- {{ui:Learned}} içinde {{ui:Find on this sheet}} ya da {{ui:Find on every sheet}} seçin. Olağan Otomatik say incelemesi açılır: dışarıda bırakmak için bir kutuya tıklayın, kaydırıcıyı hareket ettirin, sonra ekleyin. Siz yapana kadar hiçbir şey eklenmez.
- Henüz öğrenilmiş bir sembolün hiçbirinin olmadığı bir sayfayı açtığınızda, üstteki bir çubuk onun için {{ui:Find …}} seçeneğini sunar. {{ui:Not now}} o sayfa için çubuğu gizler.
- Metrajda bu adda bir kalem yoksa, işaretleri eklemek kalemi de ekler (tek bir geri alma adımı).
- Aynı kalemin sembolünü yeniden eklemek, bildiği sembole sayılır; farklı görünen bir sembol ikinci bir sembol olarak saklanır.
- Otomatik say gibi, sembolü dik açıda ve başka ölçekteki sayfalarda da bulur.

## Koşul takımları

Bir takım, metrajın koşullarını (birimleri, birim fiyatları, fireleri ve birim maliyetleriyle kalemleri) işaretler olmadan saklar.

1. {{ui:Learned}} içinde {{ui:Save this takeoff's conditions as a set…}} seçin ve bir ad verin. Aynı adla bir takım varsa o değiştirilir.
2. Takımı içeren bir metrajda {{ui:Add}} seçildiğinde, sahip olmadığı koşulları ekler. Aynı ad ve türdeki koşullara dokunulmaz. Tek bir geri alma adımıdır.

## Geçen işle aynı

Son işinizin dosyası neyi öğrendiğini tutar. Yeni bir işi ondan başlatmak için:

1. Yeni planları açın, sonra {{ui:Learned}} › {{ui:Same as last job…}} seçin.
2. Son işin `.takeoff.json` dosyasını seçin.
3. Neyi getireceğinizi işaretleyin: koşulları (yalnızca bu metrajda olmayanları) ve öğrendikleri şeyleri (semboller, takımlar, birim maliyetler, kalıplar). Sonra {{ui:Bring them in}} seçin.

Koşulları ayrıca o işin adıyla bir takım olarak da saklanır. İşaretleri ve miktarları kendi dosyasında kalır. Bütün bu işlem tek bir geri alma adımıdır.

## En çok kullandığınız birim maliyetler

Bir birim maliyeti olan bir kalem, miktarı olduğunda ve metrajı kaydettiğinizde iş başına bir kez kullanılmış sayılır. Bir iş, üzerinden metraj alınan plan dosyalarının kümesidir; bu yüzden aynı metrajı yeniden kaydetmek iki kez saymaz. {{ui:Assemblies you use most}} altındaki liste, en çok kullandıklarınızı başa koyar. Bu metrajda zaten olanları listeden çıkarır. {{ui:Add}} seçildiğinde, birini son kullandığınız gibi tüm parçalarıyla birlikte ekler.

## Her sayfada yinele

Bir takımdaki her sayfada aynı olan işaretler için, örneğin künye sayımı ya da tipik bir detay:

1. Bir sayfadaki işaretleri seçin ([İşaretleri seçin](topic:copy-paste#select-the-marks)).
2. {{ui:Learned}} içinde {{ui:Repeat the selected marks on every page…}} seçin, kalıba bir ad verin ve onaylayın.

Bunlar, **aynı boyuttaki** diğer açık her sayfaya, aynı yere, tek bir geri alma adımında konur. Uzunluklar ve alanlar yalnızca aynı ölçekteki sayfalara; sayılar o boyuttaki herhangi bir sayfaya konur. Zaten bunları içeren bir sayfa atlanır. Kalıp saklanır; bu yüzden daha sonra açtığınız sayfalar çubukta teklifi görür ya da listedeki {{ui:Repeat on every page}} öğesini kullanabilir.

## Görün, silin

Öğrenilen her şey {{ui:Learned}} içinde listelenir. Çöp kutusu tek bir şeyi siler. {{ui:Clear all}} öğrenilen her şeyi siler ve kalemlerinize ve işaretlerinize dokunmaz. İkisi de metrajı kapatana kadar geri alınabilir ve ikisi de metrajla birlikte kaydedilir.

Bir metrajda öğrenmeyi durdurmak için {{ui:Learn from this takeoff}} seçeneğinin işaretini kaldırın. Yeni bir şey öğrenilmez; listelenenler siz silene kadar kalır.

## İyi bilmeniz gerekenler

- TakeoffCraft'ın eski sürümleri öğrenilmiş şeyler içeren bir dosyayı normal açar. Bu bölümü yok sayarlar ve dosyayı yeniden kaydederlerse onu atarlar.
- Öğrenilen bir sembol, kutuya aldığınız şeyin küçük bir resmidir ve dosyada tutulur (her biri birkaç kilobayt).
- Öğrenilen semboller de Otomatik say gibi aranır; bu yüzden aynı sınırlar geçerlidir: [Bir sembolü otomatik say](topic:auto-count).
