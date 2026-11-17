---
title: Hent en tag-liste ind som mængder
summary: En tag-liste eksporteret fra bygningsmodellen (CSV) bliver til typede mængder i mængdeudtrækket, én pr. tag, så modellens antal og arealer står ved siden af det, du har målt.
keywords: tags, tag-liste, bygningsmodel, bimcraft, ifc, mængder, csv, liste, import, typet mængde
from: a60c19b6
---

{{ui:Tags}} på værktøjslinjen henter en tag-liste ind, som BimCraft har gemt som en CSV-fil. Hver særskilt tag bliver til en typet mængde, samme slags som CivilCraft's afgravning og opfyld bliver til.

1. I BimCraft laver du den tag-liste, du ønsker, og gemmer den som CSV.
2. Vælg {{ui:Tags}} og vælg filen.
3. Angiv hvilken kolonne der navngiver linjen ({{ui:Navngiv linjen efter}}, normalt tagget), og hvilken der indeholder tallet ({{ui:Mængde fra}}). Med {{ui:Tæl rækkerne}} tæller hver række som én.
4. Vælg enheden. En længde i millimeter bliver til meter med {{ui:Gang med}} 0.001.
5. {{ui:Tilføj mængderne}}.

Rækker med samme tag lægges sammen. En celle, der ikke er et tal, udelades og tælles i oversigten. Hvis du henter den samme liste igen, opdateres de mængder, du allerede har, i stedet for at der kommer flere; deres navne, priser og spild forbliver dine.

## Godt at vide

En typet mængde måles ikke på et ark, så den har ingen mærker. Intet sendes nogen steder; filen læses her.
