---
title: 用 AI 助手使用 TakeoffCraft
summary: 让自己的 AI 助手或脚本读取算量的工程量和造价估算，在 DWG 或 DXF 上添加项目和标记、计数和测量，并导出：权限、通过 CadCraft Studio 连接，以及活动日志。
keywords: ai, 助手, agent, mcp, model context protocol, 脚本, 自动化, 工程量, 造价估算, 权限, 断开连接, 活动
from: 7fa62ec6
---

## 本页内容

如何让 AI 助手（或自行编写的脚本）与 TakeoffCraft 协同工作，以及如何决定它可以操作的内容。

TakeoffCraft **本身不含 AI**，也不会向任何地方发送任何内容。助手需自行提供：任何支持模型上下文协议（MCP）的程序均可。TakeoffCraft 只向助手提供工具，可自行选择提供哪些。

## 开启

1. 打开 {{ui:设置}}（应用栏中的齿轮图标，或 {{key:Mod+,}}），进入 {{ui:TakeoffCraft}} 选项卡。
2. 在 {{ui:助手}} 下，勾选 **允许 AI 助手和脚本使用 TakeoffCraft**。在此之前该功能处于关闭状态。
3. 选择它可以执行的操作：**读取** 默认已勾选；仅在需要时才勾选 **编辑**、**保存** 或 **导出**。

未授予权限范围之外的工具不会提供给助手；即使助手仍请求使用，TakeoffCraft 也会拒绝，并将该请求记入活动日志。关闭此开关会立即断开所有连接；{{ui:重置 TakeoffCraft 设置}} 也会将其关闭。

## 连接助手

助手通过本机的 **CadCraft Studio** 连接：Studio 运行一个仅本机可访问的小型服务器，并由每次启动时生成的令牌进行保护。在 Studio 中选择 {{ui:连接助手}}，然后将地址和令牌复制到助手中（Studio 会显示需要粘贴的具体设置）。切勿分享令牌。

:::note
浏览器标签页无法为助手建立连接：在浏览器版应用中，除非使用本机的 CadCraft Studio，否则该开关不会生效。
:::

## 保持掌控

- **每项更改都是一个撤销步骤**，并以助手的名称标注（例如“Assistant: …”）。{{key:Mod+Z}} 会将助手的最后一次更改整体撤销。
- **随时可知是否已连接。** 应用栏中的一个按钮会在助手连接期间显示其名称；点击它可查看其权限，或**断开连接**。
- **活动。** {{ui:设置}} › {{ui:TakeoffCraft}} › {{ui:助手}} › {{ui:活动}} 列出每次调用：时间、工具、是否完成或被拒绝。{{ui:保存日志}} 会保存一份副本。

## 助手可以请求的内容

| 工具 | 权限 | 作用 |
|---|---|---|
| `app_info`, `sheets_list` | 读取 | 当前打开的算量、其 PDF 和图纸，以及每张图纸的比例和标记 |
| `items_list` | 读取 | 项目及其单位、单价和组合公式 |
| `takeoff_quantities` | 读取 | 按项目或按图纸的工程量；未设比例的图纸上的标记会列出，但绝不会计为零 |
| `takeoff_estimate` | 读取 | TakeoffCraft 计算的造价估算及其合计 |
| `takeoff_export` | 导出 | TakeoffCraft 自身的 CSV 或 XLSX 导出 |
| `items_add` | 编辑 | 添加带有单位、单价和损耗的项目 |
| `marks_add` | 编辑 | 在图纸上测量线段、面积和计数。长度和面积仅限已设比例的图纸，未设比例的图纸上绝不测量 |
| `cad_sheets`, `cad_catalog`, `cad_count` | 读取 | 在已打开的 DWG 或 DXF 中：其图纸及比例、可计数的内容（块、图层和类型、文字），以及精确计数，与 {{ui:CAD 计数}} 生成的结果相同（[从图形计数](topic:count-from-a-drawing)） |
| `cad_count_add` | 编辑 | 在图形中计数，并在一步中为找到的每个对象添加计数标记；再次计数时只添加新增部分 |
| `cad_measure` | 编辑 | 根据图形自身的直线、圆弧、多段线和填充测量线性或面积项目，与 {{ui:测量图形}} 的做法相同（[从图形测量](topic:measure-from-a-drawing)）；仅限已设比例的图纸 |
| `usd_export` | 导出 | 将已设比例图纸上测量的线段、面积和计数导出为 USD 三维检查模型（`.usdz`、`.usda` 或 `.usdc`），与三维检查视图中 {{ui:USD 包（.usdz）}} 生成的结果相同（[将三维检查视图导出为 USD](topic:usd)） |

勾选 **编辑** 后，助手可以添加项目和标记（每次调用为一个撤销步骤）；它无法移动、更改或删除已有的标记。

无需打开 TakeoffCraft 也可获取相同的工程量和造价估算：CadCraft MCP 服务器可在你指定的文件夹中打开 `.takeoff.json` 文件（`takeoff_open`、`takeoff_quantities`、`takeoff_estimate`、`takeoff_export`），而 `cadcraft info Job.takeoff.json` 可在命令行中输出这些内容。它还可以将 DWG 或 DXF 作为新算量打开到其图纸上（比例与 TakeoffCraft 的缩放方式相同，取自图形），使用相同的 `cad_*` 工具在其上计数和测量，添加项目并保存算量（`takeoff_save`）；`cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` 可在命令行中计数。

## 出现问题时

- **助手看不到 TakeoffCraft 工具：** 检查此窗口中的开关是否已开启，并且该窗口已在 Studio 中打开。
- **“needs the export permission”：** 在 {{ui:助手}} 下勾选 **导出**，然后重新请求。
- **“401”或“token”错误：** 令牌已更改（Studio 重启，或点击了 {{ui:新令牌}}）。将新令牌复制到助手的设置中。

## 另请参阅

- [面向 AI 助手的示例](common:assistants-recipes)：完整示例，每个示例均列出其调用的工具。
