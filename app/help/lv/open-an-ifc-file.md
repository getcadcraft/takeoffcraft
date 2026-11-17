---
title: Iegūt daudzumus no IFC 4.3 faila
summary: Atveriet ceļa, dzelzceļa, tilta vai zemes darbu IFC 4.3 failu un iegūstiet skaitu pa klasēm ar garumiem, laukumiem un tilpumiem, ko fails norāda, kā tipizētus daudzumus.
keywords: ifc, ifc4x3, ifc 4.3, ceļš, dzelzceļš, tilts, segums, apmale, kārta, zemes darbi, balsts, infrastruktūra, daudzumi, bim, civilie, tipizēti daudzumi
from: 6b08c2c4
---

IFC 4.3 fails var saturēt ceļus, dzelzceļus, tiltus, jūras būves un to daļas: segumus, kārtas, apmales, sliedes, zemes darbus, balstus, pāļus un citas. TakeoffCraft tās nolasa un pārvērš tipizētos daudzumos, kurus varat cenot.

## Faila atvēršana

1. Izvēlieties {{ui:Atvērt plānus}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+O}}.
2. Atlasiet IFC failu (to var atlasīt kopā ar PDF) vai nometiet to TakeoffCraft logā.

Katram klases un iepriekš noteiktā veida pārim tiek izveidots viens tipizēts daudzums, piemēram, "Segums (elastīgs): skaits", un, ja fails tos norāda, arī "garums" m, "laukums" m² un "tilpums" m³. Piezīme pie katra vienuma norāda, cik elementi saskaitīti un cik nenorādīja daudzumu. Atverot jaunāku failu ar tādu pašu nosaukumu, šie daudzumi tiek atjaunināti, nevis pievienoti.

## Ko tas nedara

- Tas nolasa daudzumu kopas (IfcElementQuantity), ko fails satur. Tas nemēra 3D formas, tāpēc elements bez daudzumu kopas tiek saskaitīts, bet nepievieno garumu, laukumu vai tilpumu.
- Tiek nolasītas tikai IFC 4.3 infrastruktūras klases. Ēku failu (sienas, durvis, pārsegumi) šeit nepārvērš daudzumos; fails, kas nav IFC 4.3, par to paziņo un neko neieved.
- Mērvienības ir paša faila, pārvērstas metros.
