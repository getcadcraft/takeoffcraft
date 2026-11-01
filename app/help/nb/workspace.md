---
title: TakeoffCraft-skjermen
summary: En omvisning i vinduet etter navnene på skjermen - verktøylinjen, arklisten, arket, panelet Poster, tabellen Mengder og statuslinjen.
keywords: skjerm, oppsett, layouter, bånd, prosjektleser, verktøykasse, infoboks, verktøylinje, paneler, arkliste, postpanel, mengder, statuslinje, omvisning, grensesnitt
from: ab1115e0
---

TakeoffCraft fyller nettleservinduet under CadCrafts applinje. Ovenfra og ned og fra venstre mot høyre:

| Del | Hvor | Hva den er til for |
|---|---|---|
| Applinje | Helt øverst | Appnavnet, versjonen, {{ui:Om TakeoffCraft}}, {{ui:Hjelp}} ({{key:F1}}), {{ui:Lagre for frakoblet bruk}}, {{ui:Innstillinger}} ({{key:Mod+,}}), knappen {{ui:Fullskjerm}} og temabryteren {{ui:Papir}} / {{ui:Modell}}. |
| Verktøylinje | Under applinjen | Hver kommando, i grupper: {{ui:Fil}}, {{ui:Eksporter}}, {{ui:Målestokk}}, {{ui:Mengdeuttak}}, {{ui:Rediger}}, {{ui:Visning}}. |
| Ark | Venstre | Hver side i hver åpen PDF, med miniatyrbilde, målestokk og antall markeringer. |
| Arket | Midten | Den åpne siden. Du måler her. |
| Poster | Høyre | Mengdeuttakspostene dine, innstillingene til den valgte posten og den valgte markeringen. |
| Mengder | Nederst | Mengder og kostnader etter post eller ark, og jobbsummen. |
| Statuslinje | Helt nederst | Den levende målingen, meldinger, 45°-tipset og zoom. |

## Verktøylinjen

Hold pekeren over en knapp for å se hva den gjør og tasten den har.

| Gruppe | Knapper |
|---|---|
| {{ui:Fil}} | {{ui:Ny}} (tomt mengdeuttak), {{ui:Åpne tegninger}} ({{key:Mod+O}}), {{ui:Åpne mengdeuttak}} (et `.takeoff.json`-prosjekt), {{ui:Lagre mengdeuttak}} ({{key:Mod+S}}) |
| {{ui:Eksporter}} | Én meny: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Markert PDF}} |
| {{ui:Målestokk}} | {{ui:Kalibrer}} ({{key:K}}), {{ui:Kontroller}} ({{key:D}}), og listen {{ui:Forvalg}} |
| {{ui:Mengdeuttak}} | {{ui:Velg}} ({{key:V}}), {{ui:Linjær}} ({{key:L}}), {{ui:Areal}} ({{key:A}}), {{ui:Sirkel}} ({{key:O}}), {{ui:Bue}} ({{key:R}}, en av/på-bryter), {{ui:Fradrag}} ({{key:E}}, en av/på-bryter), {{ui:Utsparing}} ({{key:X}}), {{ui:Tell}} ({{key:C}}), {{ui:Autotelling}} ({{key:S}}) |
| {{ui:Rediger}} | {{ui:Angre}} ({{key:Mod+Z}}), {{ui:Gjør om}} ({{key:Mod+Y}}), {{ui:Kopier}} ({{key:Mod+C}}), {{ui:Lim inn}} ({{key:Mod+V}}), og {{ui:Mer}}: {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}}, {{ui:Fjern utvalg}} |
| {{ui:Visning}} | {{ui:Tilpass side}} ({{key:F}}), {{ui:Tilpass bredde}} ({{key:W}}) |

Verktøyet du bruker vises nedtrykket. Knappene {{ui:Bue}} og {{ui:Fradrag}} forblir nedtrykket så lenge de er på.

## Ark (til venstre)

- **Søk i ark** filtrerer listen etter arknavn, filnavn eller sideetikett.
- Hvert ark viser et miniatyrbilde (tegnet mens du ruller), navnet og enten målestokken eller **Ingen målestokk**.
- Høyre side av hver rad viser hvor mange markeringer arket har. Mens en post er uthevet, viser den i stedet hvor mange av postens markeringer som ligger på arket.
- Klikk på et ark for å åpne det. {{key:PageDown}} og {{key:PageUp}} går til neste og forrige ark i listen.
- Når et mengdeuttak dekker PDF-er som ikke er åpne, nevner en merknad under listen dem ved navn. Se [Lagre og åpne et mengdeuttak på nytt](topic:save-and-reopen).

Arknavn kommer fra PDF-en: en sideetikett som `A-101` blir arknavnet. En side uten etikett oppkalles etter filen og sidenummeret, som «Plans, side 3». Med flere PDF-er åpne viser ark med etikett også filnavnet.

## Arket (midten)

- Linjen under arket viser arknavnet og målestokken, eller «Ingen målestokk ennå: velg et forvalg eller kalibrer». Knappene: {{ui:MarkupCraft}} (når den appen kan ta PDF-en; se [Start et mengdeuttak og åpne et tegningssett](topic:open-plan-set)), {{ui:Sammenlign}} (en eldre versjon av arket over dette: [Sammenlign et revidert ark](topic:compare-revisions)), «(n) å kontrollere» (markerte markeringer, når det finnes noen) og {{ui:3D}} ([3D-kontrollvisningen](topic:check-in-3d)).
- Før noen PDF er åpen, viser midten en kort veiledning i fem steg.
- Hjulet zoomer ved pekeren. Dra for å panorere. Se [Tastatur og mus](topic:keyboard).
- Mens du bruker {{ui:Autotelling}}, vises en linje med kontrollene øverst på arket.

## Poster (til høyre)

Øverst er listen {{ui:Tilbudsområde}}: bygningen, etasjen eller fasen nye markeringer havner i ([Tilbudsområder](topic:bid-areas)).

- {{ui:Ny post}} åpner et lite skjema: et navn, en type ({{ui:Linjær (lengde)}}, {{ui:Areal}} eller {{ui:Antall}}) og {{ui:Legg til}}.
- Listen viser fargen, typeikonet, navnet og mengden til hver post. Klikk på en post for å tegne med den og utheve markeringene dens på hvert ark. Klikk på den igjen for å slutte å utheve.
- Under listen er **Post: (navn)** posteditoren: navn, type, farge, enhet, høyde eller dybde, svinn, materiell- og arbeidssatser, de målte verdiene og {{ui:Sammensatt post}}. Se [Lag mengdeuttaksposter](topic:create-items).
- **Valgt markering** vises når du velger en markering: hvilken post den hører til, arket, målingene og knapper som {{ui:Legg til en utsparing}} og {{ui:Slett markering}}. Med flere markeringer valgt blir den til **Valgte markeringer**: hvor mange av hver post, og {{ui:Kopier}}, {{ui:Dupliser}}, {{ui:Klipp ut}} og {{ui:Slett markeringer}}.
- Posteditoren avsluttes med {{ui:Kopier post}} og {{ui:Dupliser post}}: en post med sin sammensatte post og kostnader, uten markeringer. Se [Kopier, lim inn og dupliser markeringer](topic:copy-paste).

## Mengder (nederst)

- {{ui:Etter post}} lister hver post og komponentene i dens sammensatte post med mengde, svinn, satser og utvidede kostnader. Du kan skrive svinn og satser rett i tabellen.
- {{ui:Etter ark}} lister mengden til hver post på hvert ark.
- En advarsel som begynner med **Ufullstendig:** vises når noe er utelatt fra summene.
- {{ui:Jobbsum}} står til høyre i overskriften.
- Pilknappen lengst til høyre skjuler eller viser tabellen for å gi arket mer plass.

Se [Les mengder og kalkylen](topic:read-quantities).

## Statuslinjen (nederst)

Fra venstre mot høyre: den levende målingen mens du tegner (lengde, areal, radius eller et kontrollresultat), boksen {{ui:Skriv}} mens du skriver en lengde, meldinger fra TakeoffCraft, påminnelsen «Shift fanger til 45°» (eller «Fanger til 45°; Shift frigjør vinkelen» når det er slått på i [Innstillinger](topic:settings)), knappen {{ui:Fang}} (fangst mot tegningens linjer, på når den er uthevet; {{key:F3}}), og zoomprosenten.

:::tip
Les statuslinjen når noe ikke skjer. TakeoffCraft forklarer der hvorfor et klikk ble avvist, for eksempel «Dette arket har ingen målestokk ennå».
:::

## Andre layouter

Alt ovenfor er layouten {{ui:CadCraft klassisk}}, utgangspunktet. {{ui:Innstillinger}} ({{key:Mod+,}}) › {{ui:Globalt}} › {{ui:Layout}} tilbyr to til; de samme verktøyene og tastene fungerer i alle tre, og å velge {{ui:CadCraft klassisk}} igjen setter hver kontroll tilbake der den var.

| Layout | I TakeoffCraft |
|---|---|
| {{ui:Bånd og prosjektleser}} | {{ui:Mengdeuttaksbånd}} over toppen ([Menyer, taster og mus](topic:menus-keys-and-mouse)), en linje for verktøyet som kjører, en fane for hvert ark du åpner (en tegnings Modell og layouter er også ark) med målestokkforvalgene og {{ui:Tilpass side}} under arket. Venstre panel har {{ui:Egenskaper}} (den valgte posten, merknaden eller markeringen) over {{ui:Mengdeuttaksleser}}: {{ui:Ark}} (klikk på ett for å åpne det i en fane), {{ui:Betingelser}} (klikk på en for å tegne med den) og {{ui:Kalkyle}} (hver posts sum og jobbsummen); miniatyrbildene er den andre fanen. |
| {{ui:Verktøykasse og infoboks}} | Verktøylinjen over arket, en infoboks med {{ui:Tilbudsområde}}, verktøyet som kjører eller utvalget og arklinjen, en kolonne med mengdeuttaksverktøyene til venstre, en fane for hvert ark, og {{ui:Fang}} og zoom under arket. |

Mens [3D-kontrollvisningen](topic:check-in-3d) er åpen, viker arkfanene og linjen under arket; lukk 3D-visningen for å måle igjen. På en telefon kjører alltid telefonlayouten.

## Fullskjerm og temaer

Knappen {{ui:Fullskjerm}} i applinjen, eller {{key:Ctrl+Shift+F}} (Ctrl på alle plattformer, også på en Mac), går gjennom normal, fullskjerm og fullskjerm med linjene skjult. Med linjene skjult flytter du pekeren til øverste kant for å vise dem igjen.

{{ui:Papir}} er det lyse temaet og {{ui:Modell}} det mørke. I {{ui:Modell}} vises tegningen invertert (lyse linjer på mørkt) bare på skjermen; eksporter endres aldri.
