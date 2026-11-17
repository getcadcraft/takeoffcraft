---
title: Fagpakker
summary: Legg til gratis sammensatte poster for et fag i prisbiblioteket ditt, fjern dem i ett trinn, og del ditt eget bibliotek som en pakke.
keywords: fagpakke, pakke, sammensatte poster, maler, startelementer, elektro, gips, stomme, maling, betong, gulv, murverk, takarbeid, kledning, tømrerarbeid, rørlegging, vvs, isolasjon, anlegg, terrasse, hovedentreprenør, csi, masterformat, cc0, legg til, fjern, del
from: d3c036be
---

En **fagpakke** er et sett med ferdige poster for ett fag: hver med sin enhet, sin høyde eller dybde, sitt svinn og sin **sammensatte post**, altså delene og formlene som gjør en målt strekning, flate eller telling om til materialer. En gipsvegg, for eksempel, gir sporet, stenderne, platene, skruene, teipen og sparkelmassen.

Pakker legges til i ditt [prisbibliotek](topic:price-library), og derfra legger du postene deres til i et hvilket som helst mengdeuttak.

## Legg til en pakke

1. Åpne {{ui:Bibliotek}} øverst i panelet {{ui:Poster}}, deretter {{ui:Fagpakker…}}.
2. Velg {{ui:Enheter}}: imperisk (LF, SF), metrisk (m, m²) eller begge. Hver sammensatt post finnes i begge systemene.
3. Velg {{ui:Legg til}} ved siden av en pakke.

Pakkens poster vises i biblioteket, merket med pakkens navn. For å bruke dem, huk av dem i biblioteket og velg {{ui:Legg til i mengdeuttak}}.

:::note
**En pakke gir ingen priser.** Postene viser «Angi din pris» i biblioteket. Prisene er dine: skriv dem inn i biblioteket eller postredigeringen, eller importer prislisten din som en CSV og bruk {{ui:Oppdater priser}}.
:::

Har du allerede en post med samme navn og type i biblioteket, lar pakken din stå urørt. Legger du til en pakke på nytt, erstattes pakkens egne poster med den nye versjonen.

## Fjern en pakke

I {{ui:Fagpakker…}} velger du {{ui:Fjern}} ved siden av en pakke du har lagt til, og så en gang til for å bekrefte. Alle poster som kom fra den, forsvinner fra biblioteket i ett trinn. Poster du allerede har lagt til i et mengdeuttak, blir værende i det mengdeuttaket.

## Hva en pakke inneholder

Velg {{ui:Kilder og detaljer}} under en pakke for å se hva hver sammensatt post er skrevet ut fra: byggeforskrifter, standarder og fagforeningers monteringsveiledninger. I biblioteket holder du pekeren over en post for å lese dens kilder og forutsetninger, for eksempel stenderavstand eller malingens utbytte. Kontroller dem mot jobben din og produktenes datablad, og endre formlene der de avviker (se [Sammensatte poster og formler](topic:assemblies)).

Hver pakke er merket **Startpakke: ikke gjennomgått av en kalkulatør ennå** inntil erfarne kalkulatører har gjennomgått den.

Hver post bærer også sitt CSI MasterFormat-nummer, for eksempel `09 21 16`.

## Del biblioteket ditt som en pakke

{{ui:Eksporter som pakke…}} i biblioteket lagrer det som en pakkefil (`.ccpack.json`) som alle kan legge til med {{ui:Åpne en pakkefil…}}. Som standard utelates postene som kom fra pakker du har lagt til, og filen har ingen priser. Hak av for {{ui:Ta med mine priser som eksempelpriser}} for å sende prisene dine også: de sendes merket med regionen og datoen du oppgir, og den som legger til pakken, velger om de skal brukes.

Pakkefiler er rene data, aldri programmer. TakeoffCraft kontrollerer hver del av en fil før den brukes, og utelater alt den ikke kan lese.
