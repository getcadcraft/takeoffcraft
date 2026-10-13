---
title: Scale presets
summary: Every preset in the Preset list - architectural, engineering and metric - and what each assumes about the PDF.
section: reference
order: 30
keywords: scale, presets, architectural scale, engineering scale, metric scale, ratio, 1/4 inch, 1/8 inch, 1:100, full size
---

The {{ui:Preset}} list in the {{ui:Scale}} group has 30 scales in three groups. A preset sets the open sheet's scale exactly.

Every preset assumes the PDF page is the drawing's real paper size: one inch on the PDF page is one inch of paper (PDF pages measure 72 points per inch). If the PDF was resized, use {{ui:Calibrate}}. Use {{ui:Check}} after setting any scale. See [Set the scale](topic:set-the-scale).

## Architectural

| Preset | One paper inch is |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Engineering

| Preset | One paper inch is |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metric

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:100`, `1:200`, `1:250`, `1:500`, `1:1000`.

A metric ratio means one unit on paper is that many units in reality: at `1:100`, 10 mm on the page is 1 m.

## Calibrated scales

A calibrated scale shows as "Calibrated 1" = 4.002' on 24'-6"" in the bar under the sheet: real feet per paper inch, and the distance you typed. When it is within 0.5% of a preset, the bar adds "(matches 1/4" = 1'-0")" and the sheets list shows the preset's name.

## Unusual PDFs

Some PDFs declare a larger page unit (a "user unit"); TakeoffCraft takes it into account for presets and for the scale shown. Pages rotated in the PDF are measured the same way as upright ones.
