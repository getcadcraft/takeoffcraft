---
title: 搭配AI助理使用TakeoffCraft
summary: 讓你自己的AI助理或指令稿讀取數量計算的數量與估價、在DWG或DXF上新增項目與標記、計數與量測，並匯出：權限、透過CadCraft Studio連接，以及活動紀錄。
keywords: AI, 助理, agent, mcp, model context protocol, 指令稿, 自動化, 數量, 估價, 權限, 中斷連線, 活動
from: 7fa62ec6
---

## 你將學到的內容

如何讓AI助理（或你自己寫的指令稿）與TakeoffCraft協作，以及如何決定它可以操作哪些內容。

TakeoffCraft**本身不含AI**，也不會把任何資料傳送到別處。助理需由你自行提供：任何能使用 Model Context Protocol（MCP）的程式都可以。TakeoffCraft只會提供工具，而要開放哪些工具由你決定。

## 開啟此功能

1. 開啟{{ui:設定}}（應用程式列中的齒輪，或{{key:Mod+,}}），然後前往{{ui:TakeoffCraft}}索引標籤。
2. 在{{ui:助理}}下勾選**允許AI助理與指令稿使用TakeoffCraft**。在你勾選之前，此功能預設為關閉。
3. 選擇它可以執行的操作：**讀取**預設已勾選；只有在需要時才勾選**編輯**、**儲存**或**匯出**。

未勾選的權限範圍以外的工具不會提供給助理；即使助理仍要求使用，TakeoffCraft也會拒絕，並將其寫入活動紀錄。關閉此開關會立即中斷所有連線；{{ui:重設TakeoffCraft設定}}也會將其關閉。

## 連接你的助理

助理會透過你電腦上的**CadCraft Studio**連接：Studio會執行一個僅本機電腦可連到的小型伺服器，並以每次啟動時產生的權杖加以保護。在Studio中選擇{{ui:連接助理}}，然後將位址與權杖複製到你的助理中（Studio會顯示要貼上的確切設定）。切勿分享權杖。

:::note
瀏覽器分頁無法為助理開啟連線：在瀏覽器版應用程式中，此開關在你使用電腦上的CadCraft Studio之前不會生效。
:::

## 由你掌控

- **每一項變更都是一個復原步驟**，並以助理的名稱標示（例如「助理：…」）。{{key:Mod+Z}}會整體復原助理的最後一項變更。
- **你能知道何時有助理已連接。**連接期間，應用程式列中的按鈕會顯示助理名稱；按一下即可查看它可執行的操作，或**中斷連線**。
- **活動。**{{ui:設定}} › {{ui:TakeoffCraft}} › {{ui:助理}} › {{ui:活動}}會列出每一次呼叫：時間、使用的工具，以及已完成或已拒絕。{{ui:儲存紀錄}}會保留一份副本。

## 助理可以要求的操作

| 工具 | 權限 | 功能 |
|---|---|---|
| `app_info`, `sheets_list` | 讀取 | 目前開啟的數量計算、其PDF與圖紙，以及每張圖紙的比例與標記 |
| `items_list` | 讀取 | 項目及其單位、單價與組合公式 |
| `takeoff_quantities` | 讀取 | 依項目或依圖紙列出數量；沒有比例的圖紙上的標記會列出，但絕不計為零 |
| `takeoff_estimate` | 讀取 | TakeoffCraft計算的估價，含其合計 |
| `takeoff_export` | 匯出 | TakeoffCraft自身的CSV或XLSX匯出 |
| `items_add` | 編輯 | 新增項目及其單位、單價與損耗 |
| `marks_add` | 編輯 | 在圖紙上量測段、面積與計數。長度與面積只在有比例的圖紙上量測，沒有比例的圖紙絕不量測 |
| `cad_sheets`, `cad_catalog`, `cad_count` | 讀取 | 在你開啟的DWG或DXF上：其圖紙與比例、可計數的內容（區塊、圖層與類型、文字），以及精確計數，即{{ui:CAD 計數}}產生的結果（[從圖形計數](topic:count-from-a-drawing)） |
| `cad_count_add` | 編輯 | 在圖形中計數，並在一步內為每個找到的物件放置計數標記；再次計數只會新增尚未計入的部分 |
| `cad_measure` | 編輯 | 從圖形本身的直線、圓弧、聚合線與填滿量測線性或面積項目，即{{ui:量測圖形}}的做法（[從圖形量測](topic:measure-from-a-drawing)）；僅限有比例的圖紙 |
| `usd_export` | 匯出 | 將有比例圖紙上已量測的段、面積與計數匯出為USD三維檢查模型（`.usdz`、`.usda`或`.usdc`），即3D檢查視圖中的{{ui:USD 封裝（.usdz）}}所產生的結果（[將3D檢查視圖匯出為USD](topic:usd)） |

勾選**編輯**後，助理可新增項目與標記（每次呼叫為一個復原步驟）；但它無法移動、變更或刪除已存在的標記。

不開啟TakeoffCraft也能取得相同的數量與估價：CadCraft MCP伺服器會開啟你指定資料夾中的`.takeoff.json`檔案（`takeoff_open`、`takeoff_quantities`、`takeoff_estimate`、`takeoff_export`），而`cadcraft info Job.takeoff.json`會在指令列中印出這些內容。它也能將DWG或DXF以新數量計算開啟（依TakeoffCraft的方式將圖紙按圖形比例縮放），使用相同的`cad_*`工具進行計數與量測，新增項目並儲存數量計算（`takeoff_save`）；`cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101`可從指令列計數。

## 若功能無法正常運作

- **助理看不到任何TakeoffCraft工具：**請確認此視窗中的開關已開啟，且該視窗已在Studio中開啟。
- **"needs the export permission"：**請在{{ui:助理}}下勾選**匯出**，然後再次提出要求。
- **"401"或"token"錯誤：**權杖已變更（Studio已重新啟動，或{{ui:新權杖}}）。請將新權杖複製到助理的設定中。

## 另請參閱

- [AI助理的操作範例](common:assistants-recipes)：實作範例，每個範例都附上它所呼叫的工具。
