---
title: 從其他數量計算軟體遷移
summary: 說明專業計量程式與 PDF 標記工具的習慣如何對應到 TakeoffCraft，以及容易出錯的差異。
keywords: 切換軟體, 遷移, 條件, 零件, 量測工具, 標記清單, 數量連結, 數量計算習慣, 差異, 比對
from: 12004ce5
---

如果你用過 PlanSwift，或用 Bluebeam Revu 的量測工具做過數量計算，TakeoffCraft 的大部分功能會很熟悉：圖紙集、每張圖紙的比例、要量測的項目，以及計價後的總額。各部分的組合方式在某些地方不同，這些地方列在下面。

如果你熟悉 PlanSwift 或 On-Screen Takeoff，可在 {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}} 中選擇 {{ui:Takeoff desk}} 功能表樣式：上方是功能表列（File、Edit、View、Scale、Takeoff、Items、Markup、Export），下方是一排數量計算工具，圖紙列上則有比例預設值。請參閱 [功能表、快速鍵與滑鼠](topic:menus-keys-and-mouse)。

## 習慣對照

| 原本的習慣 | 在 TakeoffCraft 中 |
|---|---|
| 開啟會儲存圖紙的工程或專案（PlanSwift） | 同時開啟 PDF 與 `.takeoff.json` 專案檔。專案只儲存數量計算結果；PDF 仍是你自己的檔案。 |
| 含附註、修訂雲形與螢光標示的標記清單（Bluebeam） | 圖紙列上的 {{ui:Markup}}：附註、修訂雲形與螢光標示，各有狀態（Open、Answered、Closed），列在 **Markups** 下，並繪製在已標記的 PDF 中。請參閱 [附註、修訂雲形與螢光標示](topic:markups)。 |
| 以標記形式儲存在 PDF 內的量測結果（Bluebeam） | 數量計算儲存在 `.takeoff.json` 檔案中。{{ui:Marked PDF}} 會寫出一份附有數量計算繪圖的副本，供分享；{{ui:PDF with the takeoff inside}} 會寫出一份攜帶數量計算的副本，可在 TakeoffCraft 中重新開啟。 |
| 數量計算項目（PlanSwift），工具箱中儲存的自訂量測工具（Bluebeam） | {{ui:Items}} 面板中的 **項目**：名稱、類型、顏色、單位、高度或深度、損耗與單價。 |
| 含公式的零件與組合（PlanSwift） | 項目的 {{ui:Assembly}}：以 `L H A N P` 變數撰寫公式的元件。 |
| 設定圖紙比例或校正（兩者皆是） | 每張圖紙上的 {{ui:Preset}} 清單，或 {{ui:Scale}} 群組中的 {{ui:Calibrate}}。{{ui:Check}} 用來量測已知尺寸。 |
| 將同一比例套用到一段頁面範圍 | 尚未支援：請逐張設定。 |
| 同一張圖紙上不同比例的視埠（Bluebeam） | 尚未支援：每張圖紙只能有一個比例。 |
| 聚合線長度與面積工具（Bluebeam），線性與面積計量（PlanSwift） | {{ui:Linear}}（{{key:L}}）與 {{ui:Area}}（{{key:A}}）。 |
| 按住 Shift 畫直線 | {{key:Shift}} 會以 45° 為單位貼齊，原理相同。 |
| 貼齊圖紙上的線條 | 預設開啟：端點、中點、交點與線上最近點。按 {{key:F3}} 可關閉，與 CAD 程式相同。 |
| 計數工具（兩者皆是） | {{ui:Count}}（{{key:C}}）。 |
| 以圖像搜尋符號（Bluebeam） | {{ui:Auto count}}（{{key:S}}）：框選一個符號，檢視結果後再新增。 |
| 面積中的開孔或扣除 | 在選取的面積上使用 {{ui:Cut-out}}（{{key:X}}），以及圓形開孔。 |
| 線性段上的扣除 | 將線段直接畫過開口，然後按 {{key:E}}（{{ui:Deduct}}）扣除開口。請參閱 [量測線性段](topic:measure-linear)。 |
| 聚合線中的圓弧段 | {{ui:Arc}}（{{key:R}}）：先點擊曲線上的一點，再點擊終點。 |
| 含數量欄位的標記清單（Bluebeam） | {{ui:Quantities}} 表格，可選 {{ui:By item}} 或 {{ui:By sheet}}。 |
| 含單價的估價表格（PlanSwift） | 同一表格：每單位的損耗、材料與人工、延伸合計，以及 {{ui:Job total}}。 |
| 匯出至 Excel | {{ui:XLSX}}，含即時公式；或 {{ui:CSV}}。 |
| 按 Escape 停止工具 | {{key:Esc}} 會取消，並回到 {{ui:Select}}。 |
| 按右鍵結束 | 這裡的右鍵也用來結束線段或封閉面積。沒有右鍵功能表。 |

## 容易造成困擾的差異

**數量計算不在 PDF 內。** 你的任何操作都不會更動 PDF。請儲存 `.takeoff.json` 檔案，並與圖紙放在一起。把已標記的 PDF 寄給別人，並不會寄出可編輯的數量計算：請寄送專案檔與原始 PDF，或寄送 [附有數量計算的 PDF](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf)。

**PDF 依內容配對，而非依檔名。** 若修訂後的圖紙以舊檔名儲存並覆蓋舊檔，TakeoffCraft 會將它視為新檔案，沒有比例也沒有標記。舊標記仍留在舊版本上，並且繼續計算。請參閱 [儲存與重新開啟數量計算](topic:save-and-reopen#when-a-pdf-has-changed)。

**未設定比例的標記會被排除，而不是計為零。** 若圖紙沒有比例，其線段與面積都不會計入，表格會顯示 "Incomplete"。許多程式只會顯示 0。請參閱 [設定比例](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero)。

**不會猜測頁面尺寸。** 預設值假設 PDF 以原尺寸列印。半尺寸或「符合頁面」的 PDF 需要使用 {{ui:Calibrate}}。請務必使用 {{ui:Check}}。

**一個項目只有一種主要類型，需要時可再加其他類型。** 項目為線性、面積或計數其中之一，一旦有標記，類型就會鎖定。若某條件同時給出面積與其周長，它就是面積項目：周長為變數 `P`。同時有長度與面積的牆，是帶有高度的線性項目。對於多條件項目，例如有地板、踢腳線與門的房間，請勾選 {{ui:Also measure}} 下的其他類型：每一種各自列為一行計價。請參閱 [一個項目，多種標記](topic:create-items#one-item-several-kinds-of-marks)。

**公式以合計值運算。** 組合公式使用項目在所有圖紙上的合計值，而非逐段計算。`N`（線段或面積的數量）用於每段的額外數量，例如每面牆多一根立柱。

**周長包含開孔。** 面積的 `P` 會加上其孔洞的邊緣。請參閱 [量測含開孔的面積](topic:measure-areas#read-the-area)。

**拖曳即平移。** 在除 {{ui:Auto count}} 以外的所有工具中，在圖紙上以左鍵拖曳即可平移。你無須切換到平移工具。滾輪用於縮放，而非捲動。

**是復原複本，不是雲端。** TakeoffCraft 會在此瀏覽器中保留你工作的複本，並在當機後提供復原（[若分頁或瀏覽器停止運作](topic:save-and-reopen#if-the-tab-or-the-browser-stops)）。但數量計算仍須由你儲存：{{key:Mod+S}}。目前尚未提供雲端儲存。

**一切都在瀏覽器中執行。** 無需安裝，圖紙也絕不會上傳。若要使用桌面應用程式，TakeoffCraft 位於 CadCraft Studio 中，與其他七個應用程式並列。

## 尚未提供

每張圖紙的比例範圍尚未實作。完整清單與替代做法請參閱 [尚未實作的功能](topic:not-built-yet)。
