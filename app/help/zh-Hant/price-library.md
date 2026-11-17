---
title: "價格程式庫"
summary: "將你的項目、單價與組合保存在程式庫中，可從 CSV 或過去的估價匯入，將程式庫中的項目加入任何數量計算，並以程式庫更新數量計算的價格。"
keywords: 程式庫, 工種套件, 價目表, 價格手冊, 成本表, 匯入 csv, 單價, 組合, 重複使用, 範本項目, 更新單價, 重新定價
from: 37356c68
---

**價格程式庫**保存你在一次又一次工作中使用的項目：其類型、單位、高度、損耗、材料與人工單價，以及其組合。它保存在此瀏覽器中，獨立於任何數量計算之外，因此你在此開啟的每份數量計算都可使用它。

在{{ui:Items}}面板頂端，以{{ui:Library}}開啟它。

## 填入程式庫

- {{ui:Import CSV…}}會讀取以 CSV 儲存的試算表（見下方欄位）。名稱與類型已存在於程式庫中的項目會被取代；其餘則會新增。無法讀取的列會被略過，並會說明是哪些列及原因。
- 加入此數量計算的項目會將數量計算中的每個項目（含其單價與組合，但不含其標記）複製到程式庫中。
- 由 TakeoffCraft 匯出的估價 CSV（[匯出估價](topic:export-estimate)）可原樣匯入：上一份工作的價格會成為下一份工作的起點。

- {{ui:Trade packs…}}為某一工種加入免費的組合，例如乾牆、電氣或混凝土，不含單價。請參閱[工種套件](topic:trade-packs)。

{{ui:Export CSV}}會將程式庫儲存為 CSV，以保留副本、在試算表中編輯，或提供給同事。{{ui:Clear}}會清空程式庫（需按兩次）。

:::note
程式庫保存在此瀏覽器的儲存空間中。其他瀏覽器、其他電腦或私密視窗各自擁有獨立的程式庫（或完全沒有）。若要移動程式庫，請將其匯出。
:::

## 在數量計算中使用

- 勾選項目（在{{ui:Find in the library}}中輸入以縮小清單），然後選擇{{ui:Add to takeoff}}。它們會連同其組合一併加入，並可用{{key:Mod+Z}}一次復原。若數量計算中已有相同名稱，會加上編號，例如 `Carpet (2)`。
- {{ui:Update prices}}會為數量計算中的項目套用程式庫的損耗與單價，只要名稱與類型與程式庫項目相符；組合元件若名稱相同，也會同樣處理。高度、單位與公式保持不變。按一次{{key:Mod+Z}}即可還原所有舊價格。

## CSV 欄位

第一列為欄位名稱，順序不拘；其他欄位會被忽略。

| 欄位 | 內容 |
|---|---|
| Item (or Name) | 項目名稱。必填。 |
| Type | Linear、Area 或 Count（LF、SF 與 EA 亦可）。留空時，由單位決定。 |
| Unit | LF 或 m；SF、SY 或 m²；EA。留空：使用該類型的一般單位。 |
| Waste % | `10` 或 `10%`。 |
| Material per unit, Labor per unit | 單價，例如 `2.10` 或 `$1,250`。 |
| Height (or Depth) | `9'-0"`、`9`，或公制單位的 `2.7`。 |
| Component, Formula | 有組件名稱（或類型為 `Component`）的列，屬於其上方項目的組合。其單位、損耗與單價各自獨立；其公式使用該項目的字母代號，請參閱[組合與公式](topic:assemblies)。 |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

欄位之間可使用逗號、分號或定位字元（Tab）。
