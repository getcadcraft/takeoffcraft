---
title: Magsimula ng bagong takeoff
summary: Burahin ang lahat at magsimula ng walang lamang takeoff nang hindi nire-reload ang page, at i-save muna ang iyong gawa.
keywords: bago, bagong takeoff, new, new takeoff, clear, reset, start over, walang laman, empty, isara ang pdf, close pdfs, susunod na trabaho, next job
from: 16d392a4
---

Isinasara ng {{ui:New}} ang bawat PDF at nagsisimula ng walang lamang takeoff sa parehong page.

1. I-save ang kasalukuyang takeoff kung gusto mo itong itago: {{ui:Save takeoff}} o {{key:Mod+S}}.
2. Piliin ang {{ui:New}} sa grupong {{ui:File}}.
3. Kung may mga pagbabagong hindi pa na-save, magtatanong ang TakeoffCraft ng **Hindi pa na-save na takeoff**: piliin ang {{ui:Save takeoff first}} (dina-download nito ang project, pagkatapos nililinis), {{ui:Discard changes}}, o {{ui:Cancel}}.
   Bumabalik ang window sa walang lamang estado nito: walang PDF, walang item, walang mark, walang scale. Sinasabi ng status bar: "Bagong takeoff. Buksan ang mga PDF para magsimula."

Ang nililinis:

- bawat bukas na PDF, ang mga sheet at thumbnail nito,
- mga item, assembly, mark at scale,
- ang zoom at posisyon ng bawat sheet,
- ang undo history (hindi mo ma-undo ang {{ui:New}}),
- ang arc mode, at anumang auto count search o review.

Hindi nagagalaw ang mga file mo sa disk. Para kunin muli ang lumang takeoff, buksan ang `.takeoff.json` at mga PDF nito: tingnan ang [I-save at buksan muli ang takeoff](topic:save-and-reopen).

:::note
Walang item ang bawat bagong takeoff sa simula. Para dalhin ang mga item, kopyahin muna ang mga ito: {{ui:Copy item}} sa ilalim ng Items (o kopyahin ang mga mark, na may dalang item), pagkatapos {{ui:Paste}} sa bagong takeoff. Tingnan ang [Kopyahin, i-paste at i-duplicate ang mga mark](topic:copy-paste). Para sa mga item na ginagamit mo sa bawat trabaho, itago ang mga ito sa iyong [price library](topic:price-library) at idagdag mula roon, o magdagdag ng [trade pack](topic:trade-packs).
:::
