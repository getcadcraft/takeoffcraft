---
title: Hent mængder fra en IFC 4.3-fil
summary: Åbn en IFC 4.3-fil med en vej, jernbane, bro eller jordarbejder, og få et antal pr. klasse med de længder, arealer og volumener, filen angiver, som typede mængder.
keywords: ifc, ifc4x3, ifc 4.3, vej, jernbane, bro, belægning, kantsten, lag, jordarbejder, oplager, infrastruktur, mængder, bim, civil, typede mængder
from: 6b08c2c4
---

En IFC 4.3-fil kan indeholde veje, jernbaner, broer, marine anlæg og de dele, de består af: belægninger, lag, kantsten, skinner, jordarbejder, oplager, pæle og mere. TakeoffCraft læser dem og gør dem til typede mængder, du kan prisætte.

## Åbn filen

1. Vælg {{ui:Åbn tegninger}} i gruppen {{ui:Fil}}, eller tryk på {{key:Mod+O}}.
2. Vælg IFC-filen (du kan vælge den sammen med PDF'er), eller slip den på TakeoffCraft.

Der laves én typet mængde for hver klasse og foruddefineret type, for eksempel »Belægning (fleksibel): antal«, og, når filen angiver dem, »længde« i m, »areal« i m² og »volumen« i m³. Noten på hver post siger, hvor mange elementer der blev talt, og hvor mange der ikke angav en mængde. Åbnes en nyere fil med samme navn, opdateres disse mængder i stedet for at tilføje flere.

## Hvad den ikke gør

- Den læser de mængdesæt (IfcElementQuantity), filen indeholder. Den måler ikke 3D-formerne, så et element uden mængdesæt tælles, men tilføjer ingen længde, areal eller volumen.
- Kun infrastrukturklasserne i IFC 4.3 læses. En bygningsfil (vægge, døre, dæk) omdannes ikke til mængder her; en fil, der ikke er IFC 4.3, siger det og henter intet ind.
- Enhederne er filens egne, omregnet til meter.
