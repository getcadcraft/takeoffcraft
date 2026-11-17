---
title: "開始數量計算並開啟圖紙集"
summary: "一次開啟一或多個 PDF 作為圖紙集，找到圖紙中的位置，並在圖紙之間移動。"
keywords: 開啟, 圖紙集, 多個 pdf, 多個檔案, 圖紙, 頁面標籤, 圖紙清單, 瀏覽, 拖放, 交接, 在其他應用程式中開啟, 標記
from: ed434468
---

圖紙集通常包含多個 PDF：建築、結構、機械。TakeoffCraft 會將它們並排開啟為一份圖紙清單，且一份數量計算可涵蓋全部圖紙。

## 開啟 PDF

1. 在{{ui:File}}群組中選擇{{ui:Open plans}}，或按{{key:Mod+O}}。（其他功能表樣式稱此為{{ui:Open PDFs…}}。）
2. 在檔案對話方塊中，選取圖紙集的所有 PDF。按住{{pick:mac=Command|windows=Ctrl|linux=Ctrl}}可選取多個檔案，或按住{{key:Shift}}選取範圍。
3. 選擇「開啟」。
   讀取每個檔案時會顯示「正在開啟（名稱）…」訊息。之後，每一頁會出現在{{ui:Sheets}}下，並開啟第一個新 PDF 的第一頁。

也可以從{{pick:mac=Finder|windows=檔案總管|linux=檔案管理員}}拖曳 PDF，並放到 TakeoffCraft 的任何位置。拖曳時會出現「放入 PDF、DWG 或 DXF 圖形，或 .takeoff.json」畫面。

稍後要新增更多 PDF，請重複相同步驟。已開啟的 PDF 會被略過。

起始畫面也會列出最近開啟的 PDF 與數量計算，前提是瀏覽器允許頁面再次開啟檔案（Chrome 與 Edge）。點擊其中一項即可開啟；瀏覽器可能會先要求權限。請參閱[檔案](common:your-files)。

:::note
未上傳任何內容。瀏覽器會在本機讀取 PDF，關閉分頁或選擇{{ui:New}}後，它們便會從 TakeoffCraft 中移除。
:::

## 圖形與 PDF 並列

{{ui:Open plans}}也可開啟 DWG 與 DXF 圖形，可單獨或與 PDF 一併開啟：每個圖形的模型空間與配置都會成為同一清單中的圖紙。請參閱[開啟 DWG 或 DXF 圖形](topic:open-a-drawing)，然後參閱[從圖形計數](topic:count-from-a-drawing)。

## 由其他應用程式交來的 PDF

同系列的其他應用程式可將其開啟中的 PDF 交給 TakeoffCraft：它會在新分頁中開啟 TakeoffCraft，且該 PDF 會像被拖放一樣開啟。狀態列會顯示「已開啟（名稱），來自（應用程式）。原始檔案未變更。」未上傳任何內容；檔案會經過此瀏覽器自身的儲存空間，開啟後即從中移除。

若狀態列顯示 PDF「未送達」，表示分頁等待太久，或該 PDF 已在另一分頁中開啟：請以{{ui:Open plans}}開啟。

反過來，當 MarkupCraft 在同一台電腦上執行且能接收檔案時，圖形下方的圖紙列會有{{ui:MarkupCraft}}按鈕：它會在新分頁中以 MarkupCraft 開啟畫面上圖紙的 PDF，供審閱與標記。

## 尋找圖紙

- 捲動左側的{{ui:Sheets}}清單，然後點擊圖紙。
- 在清單頂端的**搜尋圖紙**中輸入文字，可依圖紙編號、檔名或頁面標籤篩選。篩選時，{{ui:Sheets}}旁的計數會顯示「3 of 40」這類內容。
- 按{{key:PageDown}}前往下一張圖紙，按{{key:PageUp}}前往上一張。切換順序依篩選後的清單。

:::mac
在沒有 Page Up 與 Page Down 鍵的 Mac 鍵盤上，請同時按 fn 與上或下方向鍵。
:::

## 圖紙命名方式

- 若 PDF 為頁面提供標籤（例如 `A-101`），則以該標籤命名。
- 沒有標籤的頁面（或標籤僅為頁碼）會命名為「（檔名），第（n）頁」。
- 開啟多個 PDF 時，有標籤的圖紙也會附上檔名：「A-101 — Architectural」。

目前無法手動輸入圖紙名稱。

## 檢視圖紙

- 滾動滑鼠滾輪，可在指標位置縮放。
- 以左鍵或中鍵拖曳可平移。使用{{ui:Auto count}}時，或從標記的角點開始拖曳時，請按住{{key:Space}}並拖曳，或以中鍵拖曳。
- 按{{key:F}}或選擇{{ui:Fit page}}可查看整張圖紙；按{{key:W}}或選擇{{ui:Fit width}}可符合寬度。
- 按{{key:Plus}}或{{key:=}}放大，按{{key:Minus}}縮小，以檢視中心為準。

每張圖紙在開啟期間會記住自己的縮放與位置。

## 下一步

量測圖紙前，需要先設定比例：[設定比例](topic:set-the-scale)。
