---
title: Skrár sem TakeoffCraft opnar og vistar
summary: PDF-skjöl inn, verkefnaskrá fyrir magntöku, töflureiknar og merkt PDF-skjöl út – hvað hvert inniheldur, hvert það fer og hvað breytist á netinu, án nettengingar og milli vafra.
keywords: skrár, snið, pdf, takeoff.json, verkefnaskrá, xlsx, csv, merkt pdf, sækja, vista, opna, án nettengingar
from: 1bf9be65
---

## Hvað það opnar

| Skrá | Hvernig | Athugasemdir |
|---|---|---|
| PDF (`.pdf`) | {{ui:Opna teikningar}}, {{key:Mod+O}}, eða dragðu á síðuna | Nokkrar í einu. Hver síða verður að blaði. |
| Verkefnaskrá fyrir magntöku (`.takeoff.json`) | {{ui:Opna magntöku}}, eða dragðu á síðuna | Liðirnir þínir, mælikvarðar og merki. Þú getur dregið hana ásamt PDF-skjölunum sem tilheyra henni. |

Aðrar skrár sem eru dregnar á síðuna eru sleppt og stöðustikan nefnir þær.

- **PDF-skjöl sem eru varin lykilorði** opnast ekki: „(name) er varið lykilorði. Opnaðu afrit án varnar.“
- **Sama PDF-skjalið tvisvar** er opnað einu sinni: „(name) er þegar opið.“ TakeoffCraft þekkir skrár eftir efni þeirra, ekki nöfnum.
- **Skönnuð PDF-skjöl** opnast og mælast eins og önnur; TakeoffCraft þarf ekki texta í PDF-skjalinu.
- **Stór teikningasett**: hvert PDF-skjal er lesið í heild þegar það opnast (til að búa til fingrafar af því), þannig að mjög stór skrá tekur smástund. Smámyndir eru teiknaðar eina í einu þegar þú flettir.

## Hvað það vistar

Sérhver vistun sækir skrá. Ekkert er skrifað aftur í PDF-skjölin þín.

| Þú velur | Þú færð | Hvað er í henni |
|---|---|---|
| {{ui:Vista magntöku}} | `(name).takeoff.json` | Liðir, samsetningar, einingarverð, mælikvarðar blaða og öll merki, tengd hverju PDF-skjali eftir efni þess. Engar PDF-síður. |
| {{ui:XLSX}} | `(name).xlsx` | Fjögur reiknublöð: {{ui:Kostnaðaráætlun}} (með lifandi formúlum), {{ui:Eftir blaði}}, Merki, Mælikvarðar. |
| {{ui:CSV}} | `(name).csv` | Kostnaðaráætlunin sem einföld gildi, ein röð fyrir hvern lið og hvern þátt. |
| {{ui:Merkt PDF}} | `(PDF name) (takeoff).pdf` | Afrit af hverju opnu PDF-skjali sem hefur merki, með magntökunni teiknaðri á síðurnar og skýringu. Ein skrá fyrir hvert PDF-skjal. |

Nafnið er tekið af fyrsta PDF-skjalinu sem þú opnaðir í þessari magntöku. Enn er enginn reitur til að endurnefna: endurnefndu sóttu skrána ef þú vilt annað nafn.

Sjá [Flytja út kostnaðaráætlun og merkt PDF](topic:export-estimate) og [Dálkar í útflutningi](topic:export-columns).

## Hvert sóttu skrárnar fara

Vafrinn vistar þær þar sem hann vistar allt sem er sótt, yfirleitt í möppuna Niðurhal. Finndu hana í {{pick:mac=Finder|windows=Skráarkönnuður|linux=skráastjóranum þínum}}. Ef vafrinn er stilltur á að spyrja hvar vista eigi hverja skrá, þá spyr hann.

:::chromium
{{ui:Merkt PDF}} með nokkrum merktum PDF-skjölum sækir nokkrar skrár í einu. Chrome og Edge gætu spurt einu sinni hvort þessi vefsíða megi sækja margar skrár. Veldu Leyfa.
:::

:::safari
Safari vistar í Niðurhal nema þú hafir breytt staðsetningu niðurhals í stillingum Safari, undir Almennt.
:::

## Af hverju verkefnaskráin og PDF-skjölin eru aðskilin

`.takeoff.json`-skráin geymir aðeins magntökuna þína. Hún finnur PDF-skjölin sín aftur eftir efni þeirra (fingrafari af hverri skrá), þannig að:

- Það skiptir ekki máli þótt PDF-skjal sé endurnefnt eða fært.
- PDF-skjal sem var breytt eða vistað aftur í öðru forriti telst vera önnur skrá, jafnvel með sama nafni.
- Merki á PDF-skjölum sem eru ekki opin telja samt í heildartölunum.

Sjá [Vista og opna magntöku aftur](topic:save-and-reopen).

## Á netinu og án nettengingar

PDF-skjölin þín og magntökur fara aldrei úr tölvunni þinni, hvort sem þú ert á netinu eða ekki. Tengingin skiptir aðeins máli þegar TakeoffCraft sjálft er hlaðið inn.

Til að vinna án tengingar skaltu fyrst vista forritið meðan þú ert á netinu:

1. Veldu {{ui:Vista til notkunar án nettengingar}} á forritastikunni efst.
   Hnappurinn telur upp, „Vistar 12 af 40“, meðan hann vistar.
2. Bíddu eftir {{ui:Tilbúið án nettengingar}}.

Þegar TakeoffCraft er vistað geymir vafrinn forritið, þessa hjálp, PDF-lesarann, PDF-ritarann sem {{ui:Merkt PDF}} notar og sjálftalningarvinnsluna, um 6 MB. Þegar stendur {{ui:Tilbúið án nettengingar}} virkar allt án nettengingar: opnun PDF-skjala, mæling, {{ui:Sjálftalning}}, {{ui:Vista magntöku}}, {{ui:XLSX}}, {{ui:CSV}} og {{ui:Merkt PDF}}.

| Hnappurinn segir | Merking |
|---|---|
| {{ui:Vista til notkunar án nettengingar}} | Ekki vistað í þessum vafra ennþá. Veldu hann til að vista. |
| Vistar (n) af (m) | Er að vista núna. |
| {{ui:Tilbúið án nettengingar}} | Vistað. Veldu hann fyrir {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}}. |
| {{ui:Ekki tókst að vista}} | Sumar skrár sóttust ekki. Athugaðu tenginguna og veldu hann aftur. |
| {{ui:Notkun án nettengingar er ekki í boði}} | Þessi vafragluggi getur ekki geymt afrit án nettengingar (einkagluggar og sumar stýrðar tölvur loka fyrir það). |

Meira, þar á meðal hversu lengi vistað afrit endist í hverjum vafra: [Vinna án nettengingar](common:offline).

:::offline
Þú ert án nettengingar. Ef forritastikan sýnir {{ui:Tilbúið án nettengingar}} virkar allt. Ef ekki, þá geta þeir hlutar sem TakeoffCraft hefur ekki hlaðið inn í þessum flipa (PDF-ritarinn fyrir {{ui:Merkt PDF}}, sjálftalningarvinnslan) ekki hlaðist núna, og {{ui:Merkt PDF}} hættir með „Ekki tókst að skrifa merkt PDF“. Magntakan þín er samt örugg: {{ui:Vista magntöku}}, {{ui:XLSX}} og {{ui:CSV}} þurfa enga tengingu. Ekki endurhlaða flipann fyrr en þú ert aftur á netinu.
:::

:::online
Þú ert á netinu. Áður en þú ferð á vettvang eða í flug skaltu velja {{ui:Vista til notkunar án nettengingar}} og bíða eftir {{ui:Tilbúið án nettengingar}}.
:::

## Töflureiknar

XLSX-skráin heldur lifandi formúlum, þannig að töflureiknir endurreiknar kostnaðaráætlunina þegar hún er opnuð og heldur henni réttri þegar þú breytir einingarverði eða affalli þar. Vinnubókin hefur verið prófuð í LibreOffice Calc, sem endurreiknaði hverja heildartölu upp á sama sent. Hún hefur ekki verið opnuð í Excel ennþá.

CSV-skráin er einföld gildi með bæti-röðunarmerki (BOM), þannig að töflureiknar lesa stafi eins og m² rétt.

## Skjáborð og ský

:::desktop
Frá 0.5 er skjáborðsforritið CadCraft Studio: TakeoffCraft og hin sjö forritin í einni uppsetningu. Það er enginn sérstakur TakeoffCraft uppsetningarpakki.
:::

Skýjavistun er ekki í boði ennþá. Geymdu `.takeoff.json`-skrárnar þínar með PDF-skjölum verksins og taktu afrit af þeim eins og af hverri annarri skrá. Sjá [Hvert skrárnar þínar fara](common:your-files).
