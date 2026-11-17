---
title: Zonat e ofertimit
summary: Shëno shenjat sipas ndërtesës, katit ose fazës, llogarit një zonë në çdo kohë, dhe lexo sasitë dhe kostot për çdo zonë.
keywords: shto alternativë, zbrit alternativën, ofertë bazë, alternativa, zonë ofertimi, zonë, ndërtesë, kat, nivel, fazë, zonë, alternativë, ndarje, ndaj, kat tipik, nëntotal, sipas zonës
from: 64f3d41c
---

Një zonë ofertimi është një pjesë e punës që çmon veçmas: një ndërtesë, një kat, një fazë, një krah. Çdo shenjë mund të jetë në një zonë ofertimi. Sasitë dhe preventivi mund të lexohen atëherë për çdo zonë, me një nëntotal për secilën, ndërsa totali i punës mbetet shuma e gjithçkaje.

## Krijo një zonë ofertimi

1. Në krye të panelit {{ui:Artikujt}}, hap listën {{ui:Zona e ofertimit}}.
2. Zgjidh **Zonë e re ofertimi…**, shkruaj një emër si "Ndërtesa A" ose "Niveli 2", dhe zgjidh **Krijoje**.
   Zona e re bëhet ajo aktuale. Shiriti i gjendjes thotë "Shenjat e reja shkojnë te (emri). Shenjat në zona të tjera ofertimi zbehen."

## Llogarit në një zonë

Ndërsa një zonë ofertimi është zgjedhur në listë, çdo shenjë e re shkon brenda saj: vijat, sipërfaqet, rrethet, numërimet, shenjat që shton {{ui:Numërim automatik}}, dhe ajo që ngjit. Shenjat në zona të tjera ofertimi, dhe ato në asnjë, zbehen në fletë, që të shohësh çfarë i përket çfarësdo.

Zgjidh **Pa zonë ofertimi** në listë për të llogaritur pa një; atëherë asgjë nuk zbehet.

:::tip
Katet tipike: llogarit Nivelin 2, zgjidh shenjat e tij ({{key:Mod+A}} në fletë), kopjoji, zgjidh Nivelin 3 në listë dhe ngjit. Kopjet shkojnë te Niveli 3. Kur katet janë të njëjta dhe nuk ke nevojë t'i ndash, një [grup tipik](topic:typical-groups) numëron një kat disa herë.
:::

## Zhvendos shenjat në një zonë tjetër

Zgjidh një shenjë ose disa ({{key:Shift}} + klik, ose {{key:Mod+A}}). Nën **Shenja e zgjedhur** (ose **Shenjat e zgjedhura**), zgjidh zonën te fusha {{ui:Zona e ofertimit}}. Shiriti i gjendjes thotë "3 shenja u zhvendosën te Niveli 2." Është një hap zhbërjeje.

## Riemërto, rirendit ose fshi

Zgjidh **Menaxho zonat e ofertimit…** në listë. Shkruaj mbi një emër për ta riemërtuar, përdor shigjetat për të ndryshuar renditjen (tabelat dhe libri i punës e ndjekin), ose fshi një me koshin. Fshirja e një zone ofertimi i mban shenjat e saj: ato janë atëherë në asnjë zonë ofertimi. {{key:Mod+Z}} zhbën çdo ndryshim.

## Lexo sasitë sipas zonës

Në tabelën {{ui:Sasitë}}, zgjidh {{ui:Sipas zonës}} (shfaqet pasi llogaritja ka një zonë ofertimi). Çdo zonë liston artikujt që mban, me sasinë, njësinë dhe totalin e tyre, pastaj një rresht nëntotali. Shenjat pa zonë ofertimi vijnë të fundit, si **Pa zonë ofertimi**. Kliko një rresht artikulli për ta theksuar artikullin dhe për ta bërë atë zonë aktuale.

Montimet llogariten për çdo zonë nga totalet e vetë asaj zone. Një formulë që rrumbullos lart, si `ceil(L / 4)`, mund të japë atëherë pak më shumë në zonat së bashku sesa për gjithë punën, ashtu siç do të ndodhte në një ofertë të çmuar zonë pas zone.

## Alternativat: ofertë bazë plus shtesa dhe zbritje

Një zonë ofertimi mund të jetë një **alternativë**: punë që pronari mund ta shtojë në ofertë, ose ta heqë prej saj. Te **Menaxho zonat e ofertimit…**, çdo zonë ka një listë pranë emrit të saj:

| Zgjedhja | Çfarë bën |
|---|---|
| {{ui:Oferta bazë}} | Në ofertë, si zakonisht. |
| {{ui:Shto alternativë}} | Çmohet veçmas dhe **lihet jashtë ofertës bazë**: një përmirësim tapeti, një strehë shtesë. |
| {{ui:Zbrit alternativën}} | Në ofertën bazë, dhe ofrohet si zbritje: "fshi strehën". |

Llogarit punën e një alternative në zonën e saj të ofertimit si çdo zonë tjetër. Pasi llogaritja ka një alternativë:

- Koka e tabelës {{ui:Sasitë}} thotë **Oferta bazë** në vend të Totali i punës: e gjithë llogaritja pa shtesat alternative.
- {{ui:Sipas zonës}} përfundon me ofertën bazë dhe një rresht për çdo alternativë: **+$300.00** për një shtesë, **−$1,050.00** për një zbritje.
- Një alternativë çmon vetëm artikujt që kanë shenja në të, me montimet e tyre, kështu që një pjesë montimi e një artikulli tjetër nuk hyn pa dashje.

Në eksportet, CSV përfundon me ofertën bazë dhe alternativat, dhe libri i punës merr një fletë pune **Alternativat**: oferta bazë, artikujt e çdo alternative dhe ndryshimin e tij, dhe ofertën bazë me të gjitha shtesat alternative të hequra.

## Në eksport

{{ui:XLSX}} shton një fletë pune **Sipas zonës së ofertimit**: artikujt dhe përbërësit e çdo zone me sasinë, sasinë me humbje, materialin, punën dhe totalin, një nëntotal për çdo zonë (një formulë `SUM`) dhe **Të gjitha zonat e ofertimit** në fund. Fleta e punës **Shenjat** merr një kolonë **Zona e ofertimit**. Një llogaritje pa zona ofertimi eksportohet si më parë. Shih [Kolonat e eksportit](topic:export-columns).

Zonat e ofertimit ruhen në skedarin e projektit bashkë me shenjat.
