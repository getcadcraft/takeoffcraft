---
title: Use TakeoffCraft with an AI assistant
summary: Let your own AI assistant or script read the takeoff's quantities and estimate, add items and marks, count and measure on a DWG or DXF, and export: permissions, connecting through CadCraft Studio, and the activity log.
section: tasks
order: 118
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, quantities, estimate, permissions, disconnect, activity
---

## What you will learn

How to let an AI assistant (or a script you wrote) work with TakeoffCraft, and how to decide what it is allowed to touch.

TakeoffCraft has **no AI of its own** and sends nothing anywhere. You bring the assistant: any program that speaks the Model Context Protocol (MCP). TakeoffCraft only gives it tools, and you choose which.

## Turn it on

1. Open {{ui:Settings}} (the gear in the app bar, or {{key:Mod+,}}) and go to the {{ui:TakeoffCraft}} tab.
2. Under {{ui:Assistants}}, tick **Let AI assistants and scripts use TakeoffCraft**. It is off until you do.
3. Choose what it may do: **Read** is ticked to start with; tick **Edit**, **Save** or **Export** only when you need them.

Tools outside the permissions you ticked are not offered to the assistant, and if it asks for one anyway, TakeoffCraft refuses and writes it in the activity log. Turning the switch off ends every connection at once; {{ui:Reset TakeoffCraft settings}} turns it off too.

## Connect your assistant

Assistants connect through **CadCraft Studio** on your computer: Studio runs a small server only this computer can reach, protected by a token it makes each time it starts. In Studio, choose {{ui:Connect an assistant}} and copy the address and the token into your assistant (Studio shows the exact settings to paste). Never share the token.

:::note
A browser tab can't open a connection for an assistant: in the browser apps the switch has no effect until you use CadCraft Studio on your computer.
:::

## You stay in charge

- **Every change is one undo step**, labelled with the assistant's name for it (for example "Assistant: …"). {{key:Mod+Z}} takes back the assistant's last change as a whole.
- **You know when one is connected.** A button in the app bar names the assistant while it is connected; click it to see what it may do, or to **Disconnect** it.
- **Activity.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}} lists every call: when, which tool, done or refused. {{ui:Save the log}} keeps a copy.

## What an assistant can ask for

| Tool | Permission | What it does |
|---|---|---|
| `app_info`, `sheets_list` | Read | The takeoff open, its PDFs and sheets, each sheet's scale and marks |
| `items_list` | Read | The items with their units, rates and assembly formulas |
| `takeoff_quantities` | Read | Quantities per item or per sheet; marks on sheets with no scale are listed, never counted as zero |
| `takeoff_estimate` | Read | The priced estimate as TakeoffCraft computes it, with its totals |
| `takeoff_export` | Export | TakeoffCraft's own CSV or XLSX export |
| `items_add` | Edit | Adds items with their units, rates and waste |
| `marks_add` | Edit | Measures runs, areas and counts on a sheet. Lengths and areas only on a sheet with a scale, never on an unscaled one |
| `cad_sheets`, `cad_catalog`, `cad_count` | Read | On a DWG or DXF you opened: its sheets and their scales, what can be counted (blocks, layers and types, texts), and exact counts, as {{ui:CAD count}} makes them ([Count from a drawing](topic:count-from-a-drawing)) |
| `cad_count_add` | Edit | Counts in the drawing and puts a count mark on each object found, in one step; counting again adds only what is new |
| `cad_measure` | Edit | Measures a linear or an area item from the drawing's own lines, arcs, polylines and hatches, as {{ui:Measure drawing}} does ([Measure from a drawing](topic:measure-from-a-drawing)); only on a sheet with a scale |
| `usd_export` | Export | A scaled sheet's measured runs, areas and counts as a 3D check model in USD (`.usdz`, `.usda` or `.usdc`), as {{ui:USD package (.usdz)}} in the 3D check view writes it ([Export the 3D check view as USD](topic:usd)) |

With **Edit** ticked, an assistant adds items and marks (each call one undo step); it cannot move, change or delete marks that are already there.

The same quantities and estimate are available without opening TakeoffCraft: the CadCraft MCP server opens a `.takeoff.json` file in a folder you name (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), and `cadcraft info Job.takeoff.json` prints them on the command line. It also opens a DWG or DXF as a new takeoff on its sheets (scaled from the drawing as TakeoffCraft scales them), counts and measures on it with the same `cad_*` tools, adds items and saves the takeoff (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` counts from the command line.

## If something doesn't work

- **The assistant sees no TakeoffCraft tools:** check that the switch is on in this window, and that the window is open in Studio.
- **"needs the export permission":** tick **Export** under {{ui:Assistants}}, then ask again.
- **"401" or "token" errors:** the token changed (Studio restarted, or {{ui:New token}}). Copy the new one into the assistant's settings.

## See also

- [Recipes for AI assistants](common:assistants-recipes): worked examples, each with the tools it calls.
