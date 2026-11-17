---
title: Təchizatçı stokunu və çatdırılma müddətlərini yoxlayın
summary: Təchizatçının stok siyahısını (CSV və ya cədvəl) əlavə edin və TakeoffCraft həcmlərin hesablanmasının tələb etdiyini, tullantı daxil olmaqla, ona görə yoxlayır: stokda kifayətdirmi və gözləmə nə qədər çəkir. Çatışmazlıqlar və uzun gözləmələr Problemlər panelində görünür.
keywords: təchizatçı, stok, stokda, çatdırılma müddəti, əlçatanlıq, çatışmazlıq, geri sifariş, sifariş siyahısı, csv, sku, satıcı, materiallar, təchizat, problemlər
from: f11160fb
---

Alətlər panelindəki {{ui:Təchizat}} (yük maşını) həcmlərin hesablanmasının tələblərini təchizatçının stok siyahısı ilə yoxlayır. Vacib təchizatçı sətirləri həcmlərin hesablanmasının öz faylında saxlanılır. Heç nə hara isə göndərilmir və heç nə təchizatçıdan soruşmur: faylı siz gətirirsiniz.

## Fayl

Başlıq sətri olan CSV fayl. Ad və ya SKU sütunu və stok və ya çatdırılma müddəti sütunu lazımdır. Bu başlıqlar tanınır (istənilən sırada, hərflərin böyük-kiçikliyindən asılı olmayaraq): Item, Name, Description və ya Product; SKU, Part və ya Item #; In stock, On hand, Available və ya Quantity; Lead time və ya Delivery days; Unit və ya UOM; Price və ya Cost; Supplier və ya Vendor.

- Stok rəqəm ola bilər (1,200), "In stock" və ya "Out of stock".
- Çatdırılma müddəti "5 days", "2 weeks", "2-3 weeks" (uzun olan istifadə olunur), "3 months", "same day" və ya "backorder" ola bilər. Sadə rəqəm başlıqdakı vahiddə hesab olunur (başlıqda həftə və ya ay göstərilməyibsə, gün).
- Excel faylları oxunmur: əvvəlcə vərəqi CSV kimi saxlayın.

## Həcmlərin hesablanmasını yoxlayın

1. {{ui:Təchizat}} seçin, sonra {{ui:Təchizatçı faylı əlavə edin…}} və CSV-ni seçin. Bir neçə fayl əlavə edə bilərsiniz: ən çox beş fayl, cəmi 2,000 sətir saxlanılır, əvvəlcə elementlərinizə uyğun gələnlər.
2. Miqdarı olan hər element, ikinci şərt və yığım detalı ada görə və ya adındakı SKU-ya görə sətirlə uyğunlaşdırılır. Dəqiq ad olmadıqda oxşar ad (biri digərinin içində) istifadə olunur və bu bildirilir.
3. {{ui:Həcm hesablamasının tələbləri}} altında çatışmayanlar birinci gəlir: "Çatışmır: 120 EA", "Gözləmə müddəti 21 gün", "Geri sifarişdə", "Vahid fərqlidir", "Stok göstəricisi yoxdur" və ya "Stokda". Tələbə tullantı daxildir. Smetanın vahidindən fərqli təchizatçı vahidi (fut əvəzinə ton) bildirilir və heç vaxt müqayisə olunmur. Hər sətrin {{ui:Elementi seç}} düyməsi var, o, elementə keçir.
4. {{ui:Ən uzun gözləmə (gün)}} təyin edin (standart 14). Stokda olmayan və bundan uzun gözləyən element işarələnir, xülasə isə vacib olan ən uzun gözləməni göstərir.
5. {{ui:Sifariş siyahısı (CSV)}} çatışmayan elementləri çatışmayan miqdarla, təchizatçı və çatdırılma müddəti ilə yükləyir. {{ui:Kənarda qoy}} tələbi yoxlamadan çıxarır (bu geri qaytarma addımıdır).

## Spreadsheet files and the price Library

Təchizatçı siyahısı CSV ilə yanaşı Excel iş kitabı (.xlsx) da ola bilər: birinci vərəq eyni sütun adları ilə oxunur. Düsturlar heç vaxt işə salınmır; oxunan fayldakı dəyərdir.

Qiymətləri olan fayl əlavə edildikdən sonra dialoqdakı {{ui:Qiymətləri Kitabxanaya daxil et}} faylın qiymət verdiyi hər [Kitabxana](topic:price-library) qeydinin material qiymətini təyin edir: eyni ad və eyni (və ya qeyd olunmayan) vahid. Əmək haqqı, tullantı, hündürlük və yığımlar olduğu kimi qalır, qeydin qeydində isə qiymətin hansı fayldan gəldiyi yazılır. Metrlə verilmiş qeyd futla verilmiş siyahıdan qiymətləndirilmir, uyğun adı olmayan qeyd isə toxunulmaz qalır; status sətri vahidə görə neçə qeydin ötürüldüyünü göstərir. Yeni qiymətləri bu həcmlərin hesablanmasına gətirmək üçün Kitabxanadan yenidən qiymətləndirin.

## Problemlər panelində

Çatışmazlıq xəbərdarlıqdır, uzun gözləmə isə qeyddir; ortaq Problemlər panelində ("Təchizatçı stoku") hər digər yoxlamanın yanında yerləşirlər. Birini səbəbi ilə qəbul edə bilərsiniz və qəbul həcmlərin hesablanmasında saxlanılır.

## Köməkçinizlə

Parametrlərdə köməkçilərə icazə versəniz, onlar yoxlamanı oxuya bilərlər (supply_check). Təchizatçı faylını əlavə etmək isə sizin işinizdir.

## Bilmək yaxşıdır

Stok rəqəmləri yalnız əlavə etdiyiniz fayl qədər təzədir. Yeniləmək üçün faylı yenidən əlavə edin: eyni adlı fayl əvvəlkini əvəz edir.
