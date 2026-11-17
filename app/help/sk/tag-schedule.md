---
title: Import tabuľky značiek ako množstiev
summary: Tabuľka značiek exportovaná z modelu budovy (CSV) sa stane typizovanými množstvami vo výkaze výmer, jedno na značku, takže počty a plochy z modelu budú vedľa toho, čo ste namerali.
keywords: značky, tabuľka značiek, model budovy, bimcraft, ifc, množstvá, csv, tabuľka, import, typizované množstvo
from: a60c19b6
---

{{ui:Štítky}} na paneli nástrojov importuje tabuľku značiek, ktorú BimCraft uložil ako CSV súbor. Každá rozlíšiteľná značka sa stane typizovaným množstvom, rovnakého druhu, aký sa pri výkope a násype vytvára v CivilCraft.

1. V BimCraft vytvorte požadovanú tabuľku značiek a uložte ju ako CSV.
2. Vyberte {{ui:Štítky}} a zvoľte súbor.
3. Určte, ktorý stĺpec pomenúva riadok ({{ui:Pomenovať riadok podľa}}, zvyčajne značka) a ktorý obsahuje číslo ({{ui:Množstvo z}}). S {{ui:Spočítať riadky}} sa každý riadok počíta ako jeden.
4. Vyberte jednotku. Dĺžka v milimetroch sa zmení na metre pomocou {{ui:Vynásobiť}} 0.001.
5. {{ui:Pridať množstvá}}.

Riadky s rovnakou značkou sa spočítajú. Bunka, ktorá nie je číslo, sa vynechá a uvedie sa v súhrne. Opätovný import tej istej tabuľky aktualizuje množstvá, ktoré už máte, namiesto pridávania ďalších; ich názvy, sadzby a odpad zostanú vaše.

## Dobre vedieť

Typizované množstvo sa nemeria na liste, takže nemá žiadne značky. Nič sa nikam neodosiela; súbor sa tu prečíta.
