---
title: Əl ilə sayın
summary: Hər qapını, qurğunu və ya cihazı saymaq üçün klik edin, saylarınızı yoxlayın və səhvləri düzəldin.
keywords: say, hər biri, ea, qurğular, qapılar, cihazlar, simvollar, hesab, klik sayı, əl ilə say
from: 594f2980
---

Say elementi şeyləri sayır: qapılar, işıq qurğuları, rozetkalar, santexnika qurğuları. Vərəqdə hər klik bir say nişanı əlavə edir. Saymaq miqyas tələb etmir.

## Sayın

1. {{ui:Elementlər}} altında say elementi yaradın və ya klikləyin ({{ui:Say}} növü).
2. Alətlər panelində {{ui:Say}} seçin və ya {{key:C}} basın.
3. Vərəqdə hər birinə klikləyin.
   Hər klik elementin rəngində nöqtə qoyur və elementin sayı bir artır.
4. Növbəti vərəqə keçin ({{key:PageDown}}) və saymağa davam edin. Alət {{ui:Say}} rejimində qalır.
5. Bitirəndə {{key:Esc}} basın. TakeoffCraft {{ui:Seç}} rejiminə qayıdır.

Sürükləmə hələ də vərəqi sürüşdürür, təkər isə miqyası dəyişir; beləliklə nöqtə əlavə etmədən vərəqin ətrafında gəzə bilərsiniz.

:::tip
Say elementini klikləyin ki, onun nöqtələri bütün vərəqlərdə vurğulansın. Vərəqlər siyahısı sonra hər vərəqdə neçə nöqtə olduğunu göstərir, bu da hələ saymadığınız vərəqləri tapmağa kömək edir.
:::

## Sayı düzəldin

- **Nöqtəni silin**: {{ui:Seç}} ({{key:V}}) seçin, nöqtəni klikləyin və {{key:Delete}} basın və ya {{ui:Nişanı sil}} seçin. Və ya yanlış klikdən dərhal sonra {{key:Mod+Z}} basın.
- **Nöqtəni köçürün**: onu seçin, sonra sürükləyin.
- **Yanlış elementə sayılıb**: nöqtəni seçin və **Seçilmiş nişan** altında **Element** siyahısından düzgün say elementini seçin.

## Nöqtə ölçüsü, ekranda və PDF-də

Nöqtələr nə qədər yaxınlaşdırsanız da ekranda eyni ölçüdə qalır. Dəyişmək üçün {{ui:Parametrlər}} açın, TakeoffCraft tabını və **Say işarəsinin ölçüsü** seçin: Çox kiçik, Kiçik, Orta (defolt) və ya Böyük.

PDF ixracı ({{ui:İxrac}} › {{ui:İşarələnmiş PDF}}) hər nöqtəni vərəq ölçüsündən asılı olmayaraq kağızda eyni ölçüdə çəkir: PDF-i 100% göstərən baxış proqramı nöqtələri ekrandakı kimi böyük göstərir. Vərəqdə nöqtələr toxunacaq qədər yaxındırsa, ixrac həmin vərəqin nöqtələrini kiçildir ki, hər biri oxuna bilsin.

## Eyni simvolları çox saymaq

Vərəqdə çox dəfə təkrarlanan simvol üçün [Avtomatik say](topic:auto-count) sınayın: birini qutuya alın, nəyi tapdığını nəzərdən keçirin və hamısını bir addımda əlavə edin.

## Saylardan düsturlarda istifadə

Say elementinin miqdarı **N**-dir. Yığım komponentləri ondan istifadə edə bilər, məsələn qapılar üçün menteşələr `N * 3`. Bax: [Yığımlar və düsturlar](topic:assemblies).
