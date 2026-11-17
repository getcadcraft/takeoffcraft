---
title: Fagpakker
summary: Tilføj gratis samlinger for et fag til dit prisbibliotek, fjern dem i ét trin, og del dit eget bibliotek som en pakke.
keywords: fagpakke, pakke, samlinger, skabeloner, startposter, el, gips, stomme, maling, beton, gulvbelægning, murværk, tagdækning, facadebeklædning, tømrerarbejde, VVS, hvac, isolering, anlæg, terrasse, hovedentreprenør, csi, masterformat, cc0, tilføj, fjern, del
from: d3c036be
---

En **fagpakke** er et sæt færdiglavede poster til ét fag: hver med sin enhed, sin højde eller dybde, sit spild og sin **samling**, de dele og formler, der omsætter en målt længde, et areal eller en tælling til materialer. En gipsvæg bringer for eksempel sit spor, sine stolper, plader, skruer, tape og spartelmasse med.

Pakker tilføjes til dit [prisbibliotek](topic:price-library), og derfra tilføjer du deres poster til ethvert mængdeudtræk.

## Tilføj en pakke

1. Åbn {{ui:Bibliotek}} øverst i panelet {{ui:Poster}}, og derefter {{ui:Fagpakker…}}.
2. Vælg {{ui:Enheder}}: imperiale (LF, SF), metriske (m, m²) eller begge. Hver samling findes i begge systemer.
3. Vælg {{ui:Tilføj}} ud for en pakke.

Pakkens poster vises i biblioteket, mærket med pakkens navn. For at bruge dem markerer du dem i biblioteket og vælger {{ui:Tilføj til mængdeudtræk}}.

:::note
**En pakke medbringer ingen priser.** Dens poster viser »angiv din pris« i biblioteket. Priserne er dine: skriv dem ind i biblioteket eller postredigeringen, eller importér din prisliste som en CSV og brug {{ui:Opdatér priser}}.
:::

Hvis du allerede har en post med samme navn og type i dit bibliotek, lader pakken din være, som den er. Tilføjer du en pakke igen, erstattes dens egne poster med den nye version.

## Fjern en pakke

I {{ui:Fagpakker…}} vælger du {{ui:Fjern}} ud for en pakke, du har tilføjet, og derefter igen for at bekræfte. Hver post, der kom fra den, forlader biblioteket i ét trin. Poster, du allerede har tilføjet til et mængdeudtræk, bliver i det mængdeudtræk.

## Hvad er i en pakke

Vælg {{ui:Kilder og detaljer}} under en pakke for at se, hvad hver samling er skrevet ud fra: bygningsreglementet, standarder og fagforeningers monteringsvejledninger. I biblioteket holder du markøren over en post for at læse dens kilder og forudsætninger, såsom stolpeafstand eller en malings udbytte pr. flade. Kontrollér dem mod dit projekt og dine produkters datablade, og ændr formlerne hvor de afviger (se [Samlinger og formler](topic:assemblies)).

Hver pakke er markeret **Starter: ikke gennemgået af en kalkulator endnu**, indtil praktiserende kalkulatorer har gennemgået den.

Hver post har også sit CSI MasterFormat-nummer, for eksempel `09 21 16`.

## Del dit bibliotek som en pakke

{{ui:Eksportér som pakke…}} i biblioteket gemmer det som en pakkefil (`.ccpack.json`), som alle kan tilføje med {{ui:Åbn en pakkefil…}}. Som standard udelades de poster, der kom fra pakker, du har tilføjet, og den indeholder ingen priser. Markér {{ui:Tag mine priser med som eksempelpriser}} for også at sende dine priser med: de sendes mærket med den region og den dato, du angiver, og den, der tilføjer pakken, vælger selv, om de skal bruges.

Pakkefiler er rene data, aldrig programmer. TakeoffCraft kontrollerer hver del af en pakke, før den bruges, og udelader alt, den ikke kan læse.
