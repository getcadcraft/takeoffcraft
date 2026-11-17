---
title: 从其他算量软件迁移
summary: 专用算量程序和PDF批注工具的使用习惯如何对应到TakeoffCraft，以及容易出错的差异。
keywords: 切换, 迁移, 条件, 组件, 测量工具, 批注列表, 工程量关联, 算量习惯, 差异, 比较
from: 12004ce5
---

如果你用PlanSwift做过算量，或者用过Bluebeam Revu的测量工具，TakeoffCraft的大部分内容会很熟悉：图纸集、每张图纸的比例、测量的对象，以及计价后的总计。各部分的组合方式在某些地方有所不同，这些地方列在下面。

如果你用过PlanSwift或On-Screen Takeoff，可以在{{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}中选择{{ui:Takeoff desk}}菜单样式：菜单栏包含文件、编辑、视图、比例、算量、分项、批注和导出，上方是一排算量工具，比例预设位于图纸栏中。参见[菜单、按键和鼠标](topic:menus-keys-and-mouse)。

## 习惯对照

| 你习惯的做法 | 在TakeoffCraft中 |
|---|---|
| 打开一个保存图纸的作业或项目（PlanSwift） | 同时打开PDF和`.takeoff.json`项目文件。项目只保存算量数据，PDF仍是你自己的文件。 |
| 带有备注、云线和高亮的批注列表（Bluebeam） | 图纸栏上的{{ui:Markup}}：带状态（待处理、已答复、已关闭）的备注、云线和高亮，列在**批注**下，并绘制在标记PDF中。参见[备注、云线和高亮](topic:markups)。 |
| 保存在PDF内的测量结果（Bluebeam） | 算量数据保存在`.takeoff.json`文件中。{{ui:Marked PDF}}写出一份带有算量内容的副本，用于分享；{{ui:PDF with the takeoff inside}}写出一份携带算量数据的副本，可在TakeoffCraft中重新打开。 |
| 算量分项（PlanSwift），保存在工具集中的自定义测量工具（Bluebeam） | {{ui:Items}}下的**分项**：名称、类型、颜色、单位、高度或深度、损耗和单价。 |
| 带公式的组件和组合（PlanSwift） | 分项的{{ui:Assembly}}：带公式的组件，公式使用`L H A N P`。 |
| 设置页面比例，或进行校准（两者皆有） | 按图纸设置：{{ui:Scale}}组中的{{ui:Preset}}列表或{{ui:Calibrate}}。{{ui:Check}}用于测量已知尺寸。 |
| 将一个比例应用到页面范围 | 尚未实现：逐张设置图纸。 |
| 同一图纸上使用不同比例的视口（Bluebeam） | 尚未实现：每张图纸只能有一个比例。 |
| 多段线长度和面积工具（Bluebeam），线性和面积算量（PlanSwift） | {{ui:Linear}}({{key:L}})和{{ui:Area}}({{key:A}})。 |
| 按住Shift画直线 | {{key:Shift}}按45°步长捕捉，思路相同。 |
| 捕捉到图纸线条 | 默认开启：端点、中点、交点以及线上最近点，按{{key:F3}}可关闭，与CAD程序一致。 |
| 计数工具（两者皆有） | {{ui:Count}}({{key:C}})。 |
| 在图纸中可视搜索符号（Bluebeam） | {{ui:Auto count}}({{key:S}})：框选一个符号，检查后添加。 |
| 面积中的洞口或扣减 | 在选中的面积上使用{{ui:Cut-out}}({{key:X}})，以及圆形洞口。 |
| 线性段上的扣减 | 沿线段直接画过开口，按{{key:E}}（{{ui:Deduct}}）扣除开口。参见[测量线性段](topic:measure-linear)。 |
| 多段线中的弧线段 | {{ui:Arc}}({{key:R}})：在曲线上点击一点，再点击其终点。 |
| 带工程量列的批注列表（Bluebeam） | {{ui:Quantities}}表，{{ui:By item}}或{{ui:By sheet}}。 |
| 带单价的估价表（PlanSwift） | 同一表格：每单位的损耗、材料和人工，以及合价，{{ui:Job total}}。 |
| 导出到Excel | 带实时公式的{{ui:XLSX}}，或{{ui:CSV}}。 |
| 按Esc停止工具 | 按{{key:Esc}}取消，并返回{{ui:Select}}。 |
| 右键单击结束 | 此处右键单击也可结束线段或闭合面积。没有右键菜单。 |

## 容易出错的差异

**算量数据不在PDF内。** 你的任何操作都不会改动PDF。保存`.takeoff.json`文件，并与图纸放在一起。把标记PDF发给别人，并不会发送可编辑的算量数据：请发送项目文件和原始PDF，或者发送[内含算量的PDF](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf)。

**PDF按内容匹配，而不是按文件名。** 以旧文件名保存的修订图纸，对TakeoffCraft而言是一个新文件，没有比例也没有标记。旧标记仍保留在旧版本上，并继续计入。参见[保存并重新打开算量](topic:save-and-reopen#when-a-pdf-has-changed)。

**未设置比例的标记不计入，而不是按零计算。** 如果图纸没有比例，其线段和面积不计入，表格会显示“未完成”。在许多程序中你只会看到0。参见[设置比例](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero)。

**不会猜测页面尺寸。** 预设假定PDF按实际大小打印。按一半大小或“适合页面”输出的PDF需要使用{{ui:Calibrate}}。始终使用{{ui:Check}}。

**一个分项，一种主类型，需要时可加其他类型。** 分项为线性、面积或计数，一旦有标记，其类型即锁定。同时给出面积和周长的条件是面积分项：其周长即变量`P`。同时有长度和面积的墙是带高度的线性分项。对于多条件分项，例如带地面、踢脚线和门的房间，请在**同时测量**下勾选其他类型：每种类型各自占一行计价。参见[一个分项，多种标记](topic:create-items#one-item-several-kinds-of-marks)。

**公式基于合计值计算。** 组合公式使用分项在所有图纸上的合计值，而不是逐条计算。`N`（线段或面积的数量）用于每条的附加项，例如每面墙多一根龙骨。

**周长包括洞口。** 面积的`P`会加上其孔洞的边。参见[测量带洞口的面积](topic:measure-areas#read-the-area)。

**拖动即平移。** 除{{ui:Auto count}}外，所有工具下在图纸上按住左键拖动都会平移。无需切换到平移工具。滚轮用于缩放，不用于滚动。

**是恢复副本，而不是云端。** TakeoffCraft会在此浏览器中保留你工作的一份副本，并在崩溃后提供恢复（[如果标签页或浏览器停止运行](topic:save-and-reopen#if-the-tab-or-the-browser-stops)），但算量需要你自己保存：{{key:Mod+S}}。云端保存尚未实现。

**一切都在浏览器中。** 无需安装，图纸也从不上传。对于桌面应用，TakeoffCraft随其他七个应用一起在CadCraft Studio中提供。

## 尚未实现的功能

按图纸划分的比例区域尚未实现。完整列表及替代做法参见[尚未实现的内容](topic:not-built-yet)。
