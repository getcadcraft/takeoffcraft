---
title: 土方与高程点
summary: 在场地图纸上标注高程点，交给 CivilCraft 生成曲面并计算挖填方，并在此计算简单的挖方工程量。
keywords: 土方, 挖方, 挖填, 填方, 挖填方, 场地平整, 高程点, 标高, 地形, 曲面, 三角网, civilcraft, 点, PNEZD, 沟槽
from: a898e508
---

TakeoffCraft 测量图纸上绘制的内容。土方需要地面曲面，因此与 CivilCraft 共用：CivilCraft 根据点生成曲面、进行场地平整，并计算挖方、填方和土方调配。

## 此处的简单挖方

对于按同一深度挖掘的基础范围，带有**深度**的面积项目即可满足需要：体积 = 面积 × 深度。总承包商[专业包](topic:trade-packs)中有大体积挖方项目（天然方、松散方和车次），以及管线沟槽项目（按长度和深度计算的挖方、垫层和回填）。

## 为 CivilCraft 标注高程点

1. 设置场地图纸的比例。
2. 新建一个**计数**项目，例如“现状地面”，然后在图纸上逐个点击各高程点。
3. 在所选标记面板中选择一个标记，并在{{ui:标高}}中输入其标高：`102.5`、`102'-6"` 或 `31.24 m`。负数和零标高均可。
4. 打开{{ui:导出}}菜单，选择{{ui:高程点}}。得到一个点文件（`.csv`），包含 Point、Northing、Easting、Elevation 和 Description 列，每个已标记的点占一行，仅包含当前打开图纸上的点。
5. 在 CivilCraft 中打开该文件（参见[导入点](app:civilcraft/import-points)）。CivilCraft 会根据这些点生成曲面（[生成曲面](app:civilcraft/build-surface)）；之后可以比较曲面并计算挖填方量（[体积](app:civilcraft/volumes)）。

Northing 和 Easting 是图纸自身的坐标，单位为英尺，按比例从页面角点量取：点与点之间的距离和体积是准确的，但它们不是场地的测量坐标。需要时可在 CivilCraft 中将其转换为场地坐标。

:::note
不同图纸上的点不共用坐标，因此导出仅包含当前打开的图纸。标高随算量一同保存，并随复制和粘贴带入。
:::

## 来自 CivilCraft 的挖填方

CivilCraft 的土方结果会以两个可计价的项目返回：

1. 在 CivilCraft 中对场地平台和道路模型进行场地平整，然后在**土方**下选择{{ui:发送到TakeoffCraft}}（[土方体积](app:civilcraft/volumes)）。它会保存一个工程量文件（`.quantities.json`）。
2. 在 TakeoffCraft 中使用{{ui:打开算量}}打开该文件，或将其拖放到应用上。算量保持打开状态：该文件会添加 **Earthwork: cut** 和 **Earthwork: fill** 两个[类型化工程量](topic:create-items#typed-quantities-no-drawing)，单位为立方码（CY）（英尺项目）或立方米（m³）（米项目）。这是一步操作：{{key:Mod+Z}} 可将其撤销。
3. 按需重命名这些项目，并设置损耗、单价和组合。

设计变更后，请在 CivilCraft 中重新发送并打开新文件：同样的两个项目会获得新的工程量。它们的名称、单价、损耗和组合保持原样。若项目单位已更改，状态栏会提示：请核对单价。来自其他 CivilCraft 项目的文件会添加各自的两个项目。

这些工程量是 CivilCraft 按方格网法测得的天然方，未计入收缩或膨胀。可将其作为损耗计入，或使用公式（例如松散方使用 `Q * 1.25`）。项目编辑器会显示每项的来源和时间；造价估算的备注列中也有说明。

:::note
工程量文件是纯 JSON（`"format": "cadcraft-quantities"`），因此脚本或其他程序同样可以生成：包含应用名称、项目，以及带有键、名称、单位和数量的项目。
:::
