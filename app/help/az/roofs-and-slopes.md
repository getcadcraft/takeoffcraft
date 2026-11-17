---
title: Damlar və meyllər
summary: Sahəyə meyl verin ki, damın səthini plandan ölçə biləsiniz, yan kənarları, bucaqları və daxili bucaqları isə yamac boyunca ölçün.
keywords: dam, meyl, yamac, meyl əmsalı, qalxma, üfüq, 6:12, yan kənar, bucaq, daxili bucaq, fronton, kvadrat, meylli sahə, həqiqi uzunluq, plan sahəsi
from: 38225b60
---

Dam planı hər dam səthini yuxarıdan baxıldığı kimi düz göstərir. Damın özü isə daha böyükdür: 6:12 meyilli səth planından təqribən 12% çoxdur və onun meylli kənarları göründüyündən uzundur. Elementə meylini verin və TakeoffCraft yamac boyunca ölçər.

## Meyli yazmaq

Meyl dam planındakı meyl simvollarında olduğu kimi, hər 12 üfüq vahidinə düşən qalxmadır. Onu `6:12`, `6/12` və ya sadəcə `6` kimi yazın; başqa üfüq də işləyir (`4:10` 4.8:12 deməkdir). Dərəcə işarəsi ilə bucaq da işləyir: `26.57°`. Boş və ya `0` düz deməkdir.

## Dam sahələri

1. Dam örtüyü üçün sahə elementi yaradın və ya mövcudunu açın.
2. Onun parametrlərində **Meyl** yazın, məsələn `6:12`.
3. Hər dam səthini planda adi qayda ilə {{ui:Sahə}} ilə konturlayın.

Hər səth planda sahəsini meyl əmsalına vurur: √(1 + (qalxma ÷ 12)²), 6:12-də 1.118, 12:12-də 1.414. Səthi seçin ki, onun **Sahəsi** (yamacda), **Plan sahəsi** və **Meyl əmsalı** görünsün.

Başqa meyli olan səthlər üçün səthi seçin və panelində öz **Meylini** yazın. Elementinkini istifadə etmək üçün boş buraxın. 3D yoxlama baxışı, yığımlar (`A` meylli sahədir), qiymətlər və ixrac hamısı meylli sahəni istifadə edir. Meylli səthdəki çıxılmalar, məsələn dam işıqlandırıcıları, eyni meyl ilə çıxılır.

Perimetr (`P`) plan perimetri olaraq qalır. Ətəkləri, yan kənarları, bucaqları və daxili bucaqları aşağıda göstərildiyi kimi kəsik (uzunluq) kimi ölçün.

## Yan kənarlar, bucaqlar və daxili bucaqlar

1. "Yan kənar" və ya "Bucaqlar" kimi xətti element yaradın.
2. Onun **Yamacını** **Yan kənar** (frontonun yan kənarı kimi meylli kənar) və ya **Bucaq və ya daxili bucaq** (iki səthin birləşdiyi xətt) olaraq təyin edin və dam səthlərinin **Meylini** yazın.
3. {{ui:Xətti}} ilə planda kəsikləri çəkin.

Yan kənar onun plan uzunluğunu meyl əmsalına vurur. Bucaq və ya daxili bucaq eyni meylli iki səth arasında planda 45° keçir, buna görə həqiqi uzunluğu plan uzunluğunun √(1 + (qalxma ÷ 12)² ÷ 2) qədərdir: 6:12-də 1.061, 12:12-də 1.225.

Bir kəsik onları qarışdıra bilər. Onu seçin: panelindəki hər seqmentin yamac siyahısı var — **Elementinki**, **Səviyyə**, **Yan kənar** və ya **Bucaq və ya daxili bucaq** — və seqmentin yamac boyunca uzunluğu. Kəsiyin öz **Meyli** paneldə elementinkini bütün seqmentləri üçün əvəz edir. Panel həmçinin **Plan uzunluğunu** göstərir, vərəqdəki etiketlər isə yamac boyunca uzunluqları göstərir.

Çıxılmalar hələ də işləyir: çıxılmış seqment meylli və ya meylsiz olsun, heç nə saymır.

:::note
Bucaqlar və daxili bucaqlar hər iki səthin eyni meylə malik olduğunu fərz edir. Fərqli meylli səthlər üçün bucağı həqiqi uzunluğu ilə başqa yerdə ölçün, ya da ekvivalent meyli olan yan kənar kimi çəkin.
:::
