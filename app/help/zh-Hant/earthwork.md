---
title: 土方工程與高程點
summary: 在場地圖紙上標記高程點，交給 CivilCraft 建立曲面並計算挖填方，並在此計算簡單的開挖數量。
keywords: 土方工程, 開挖, 挖方, 填方, 挖填方, 整地, 高程點, 高程, 地形, 曲面, 三角網, civilcraft, 點, pnezd, 溝槽
from: a898e508
---

TakeoffCraft 量測圖紙上繪製的內容。土方工程需要地表曲面，因此與 CivilCraft 共用：CivilCraft 會從點建立曲面、整平，並計算挖方、填方與運土量。

## 此處的簡易開挖

若基地以單一深度開挖，只要面積項目具有**深度**即可：體積 = 面積 × 深度。一般承包商的[工種套件](topic:trade-packs)提供大量開挖項目（實方、鬆方與卡車車次），以及管線溝槽項目（依長度與深度計算開挖、墊層與回填）。

## 為 CivilCraft 標記高程點

1. 設定場地圖紙的比例尺。
2. 建立**計數**項目，例如「現有地面」，然後在圖紙上逐一點選每個高程點。
3. 選取標記，在「已選取的標記」面板中輸入其{{ui:Elevation}}：`102.5`、`102'-6"` 或 `31.24 m`。負值與零的高程皆可。
4. 開啟{{ui:Export}}功能表，選擇{{ui:Spot elevations}}。會得到一個點位檔案（`.csv`），包含 Point、Northing、Easting、Elevation 與 Description 欄位，每個已標記的點各一列，僅限目前開啟的圖紙。
5. 在 CivilCraft 中開啟該檔案（見[匯入點](app:civilcraft/import-points)）。它會從這些點建立曲面（[建立曲面](app:civilcraft/build-surface)）；接著可比較曲面，並計算挖方與填方（[體積](app:civilcraft/volumes)）。

Northing 與 easting 是圖紙本身的座標，以英尺為單位，從頁面角落依比例量測：點與點之間的距離與體積是正確的，但它們不是基地的測量座標。需要時，在 CivilCraft 中將其轉換為基地座標。

:::note
不同圖紙的點不共用座標，因此匯出只包含目前開啟的圖紙。高程會與數量計算一併儲存，並隨複製與貼上一起帶過去。
:::

## 來自 CivilCraft 的挖填方

CivilCraft 的土方結果會以兩個可計價的項目回傳：

1. 在 CivilCraft 中整平平台與路廊，然後在**土方**下選擇{{ui:傳送到 TakeoffCraft}}（[土方量](app:civilcraft/volumes)）。它會儲存一個數量檔案（`.quantities.json`）。
2. 在 TakeoffCraft 中以{{ui:Open takeoff}}開啟它，或直接拖放到應用程式上。數量計算會保持開啟：該檔案會新增 **Earthwork: cut** 與 **Earthwork: fill**，作為[無圖形的型別數量](topic:create-items#typed-quantities-no-drawing)，單位為立方碼（CY，英尺專案）或立方公尺（m³，公尺專案）。這只是一個步驟：{{key:Mod+Z}} 可將其復原。
3. 重新命名，並依需要設定損耗、單價與組合。

設計變更時，請在 CivilCraft 中重新傳送，並開啟新的檔案：同樣的兩個項目會取得新的數量。它們的名稱、單價、損耗與組合會保留你原本的設定。若專案單位已變更，狀態列會顯示，請檢查單價。來自其他 CivilCraft 專案的檔案會新增它自己的兩個項目。

數量為 CivilCraft 以格網法量測的實方，未計入收縮或膨脹。若要計入，請將其加為損耗，或使用如 `Q * 1.25` 的公式計算鬆方。項目編輯器會顯示每個項目的來源與時間；估價的附註欄也會說明。

:::note
數量檔案為純 JSON（`"format": "cadcraft-quantities"`），因此腳本或其他程式也能寫入：包含應用程式名稱、專案，以及具有鍵、名稱、單位與數量的項目。
:::
