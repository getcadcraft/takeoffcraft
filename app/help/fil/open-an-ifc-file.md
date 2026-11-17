---
title: "Kumuha ng dami mula sa IFC 4.3 file"
summary: "Magbukas ng IFC 4.3 file ng kalsada, riles, tulay o earthworks, at kumuha ng bilang kada class, kasama ang haba, lawak at volume na sinasabi ng file, bilang typed quantities."
keywords: "ifc, ifc4x3, ifc 4.3, kalsada, riles, tulay, pavement, kerb, course, earthworks, bearing, infrastructure, quantities, bim, civil, typed quantities"
from: 6b08c2c4
---

Maaaring maglaman ang IFC 4.3 file ng mga kalsada, riles, tulay, marine works at ang mga bahaging binubuo ng mga ito: pavement, course, kerb, rail, earthworks, bearing, pile at iba pa. Binabasa ng TakeoffCraft ang mga ito at ginagawang typed quantities na maaari mong presyuhan.

## Buksan ang file

1. Piliin ang {{ui:Buksan ang plano}} sa pangkat na {{ui:File}}, o pindutin ang {{key:Mod+O}}.
2. Piliin ang IFC file (maaari mo itong piliin kasama ng mga PDF), o i-drop ito sa TakeoffCraft.

Isang typed quantity ang nagagawa para sa bawat class at predefined type, halimbawa "Pavement (flexible): count", at, kapag sinasabi ito ng file, "length" sa m, "area" sa m² at "volume" sa m³. Sinasabi ng note sa bawat item kung ilang elemento ang nabilang at ilan ang walang sinasabing dami. Ang pagbubukas ng mas bagong file na may parehong pangalan ay nag-a-update ng mga dami na iyon, sa halip na magdagdag pa ng marami.

## Ang hindi nito ginagawa

- Binabasa nito ang quantity set (IfcElementQuantity) na dala ng file. Hindi nito sinusukat ang 3D shape, kaya ang elementong walang quantity set ay nabibilang pero walang dagdag na haba, lawak o volume.
- Ang mga infrastructure class lang ng IFC 4.3 ang binabasa. Ang building file (pader, pinto, slab) ay hindi ginagawang dami dito; ang file na hindi IFC 4.3 ay nagsasabi nito at walang dinadalang anuman.
- Ang units ay ang sariling units ng file, na kino-convert sa metro.
