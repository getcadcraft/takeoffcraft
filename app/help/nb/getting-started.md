---
title: Kom i gang med TakeoffCraft
summary: Hva TakeoffCraft gjør, hvor det kjører, og din første målte og prissatte post fra et PDF-tegningssett.
keywords: start, første mengdeuttak, hurtigstart, introduksjon, kalkyle, mengdeuttak, tegningssett, pdf
from: 3b9da1fb
---

TakeoffCraft måler tegningssett, PDF-er og DWG- eller DXF-tegninger, og gjør målingene om til en prissatt kalkyle. Du åpner filene (en tegning telles rett fra blokkene sine: se [Åpne en DWG- eller DXF-tegning](topic:open-a-drawing)), gir hvert ark en målestokk (en tegning har sin egen), lager **poster** (en veggtype, et gulvbelegg, en armatur) og klikker på arkene for å ta dem ut. Mengder, kostnader og jobbsummen oppdateres underveis. Du kan eksportere kalkylen som et regneark og en kopi av PDF-ene med mengdeuttaket ditt tegnet inn.

Hvis du har drevet med mengdeuttak i andre programmer, les [Hvis du kommer fra annen mengdeuttaksprogramvare](topic:coming-from) neste. Noen ting fungerer annerledes her.

## Hvor det kjører

TakeoffCraft kjører i nettleseren din. Åpne TakeoffCraft, så er skjermen klar med en gang; det er ingenting å installere.

- **PDF-ene dine blir på datamaskinen din.** De åpnes av nettleseren og lastes aldri opp. Lagring er en nedlasting.
- Det fungerer i nylige versjoner av Chrome, Edge, Firefox og Safari. Se [Nettlesere og datamaskiner](common:browsers).
- Det fungerer uten internettilkobling når du har valgt {{ui:Lagre for frakoblet bruk}} i applinjen og den sier {{ui:Klar frakoblet}}. Se [Arbeide frakoblet](common:offline).
- Lagring i skyen er ikke tilgjengelig ennå. Som skrivebordsapp følger TakeoffCraft med i CadCraft Studio, sammen med de sju andre appene.

## Ditt første mengdeuttak i ti steg

Denne gjennomgangen måler én veggtype og setter pris på den. Det tar noen minutter på hvilken som helst tegning du har.

1. Velg {{ui:Åpne tegninger}} i gruppen {{ui:Fil}} i verktøylinjen (eller trykk {{key:Mod+O}}), velg én eller flere PDF-er og velg Åpne. Du kan også slippe PDF-ene hvor som helst på siden.
   Arkene vises til venstre, og det første arket åpnes i midten.
2. Finn arkets påtrykte målestokk i tegningshodet eller under en tegningstittel.
3. Åpne listen {{ui:Forvalg}} i gruppen {{ui:Målestokk}} og velg den målestokken, for eksempel `1/4" = 1'-0"`.
   Linjen nederst på arket sier nå «Målestokk 1/4" = 1'-0"».
4. Velg {{ui:Kontroller}} (eller trykk {{key:D}}) og klikk på de to endene av et mål som er påtrykt tegningen.
   Avlesningen i statuslinjen nederst til venstre bør stemme med det påtrykte målet. Hvis den ikke gjør det, se [Angi målestokken](topic:set-the-scale).
5. I panelet {{ui:Poster}} til høyre velger du {{ui:Ny post}}, skriver et navn som `Innervegg type A`, lar typen stå på {{ui:Linjær (lengde)}} og velger {{ui:Legg til}}.
6. Velg {{ui:Linjær}} i verktøylinjen (eller trykk {{key:L}}).
7. Klikk på starten av en vegg, deretter på hvert hjørne langs den. Dobbeltklikk, trykk {{key:Enter}} eller høyreklikk for å avslutte strekningen.
   Strekningen tegnes i postens farge, og lengden vises ved siden av posten.
8. I posteditoren under {{ui:Poster}} skriver du `9'-0"` i {{ui:Høyde}}, `0.85` i {{ui:Materiell $/LF}} og `1.20` i {{ui:Arbeid $/LF}}.
   Tabellen {{ui:Mengder}} nederst viser lengden, utvidet materiell og arbeid, og {{ui:Jobbsum}}.
9. Velg {{ui:Lagre mengdeuttak}} (eller trykk {{key:Mod+S}}).
   Nettleseren laster ned en `.takeoff.json`-fil. Den inneholder postene, målestokkene og markeringene dine, og åpnes på nytt oppå de samme PDF-ene.
10. Åpne menyen {{ui:Eksporter}} i verktøylinjen og velg {{ui:XLSX}} for å laste ned kalkylen som et regneark.

:::tip
Trykk {{key:Esc}} for å stoppe det du holder på med og gå tilbake til verktøyet {{ui:Velg}}. {{key:Mod+Z}} angrer en hvilken som helst endring.
:::

## Hva du leser videre

- [TakeoffCraft-skjermen](topic:workspace) navngir hver del av vinduet.
- [Start et mengdeuttak og åpne et tegningssett](topic:open-plan-set) dekker flere PDF-er og arklisten.
- [Lag mengdeuttaksposter](topic:create-items) forklarer typer, enheter, svinn og satser.
- [Sammensatte poster og formler](topic:assemblies) gjør én måling om til stendere, plater og mer.
- [Tastatur og mus](topic:keyboard) lister hver tast.
