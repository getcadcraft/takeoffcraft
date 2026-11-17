---
title: Toetsenbord en muis
summary: Elke toets-, muis-, trackpad- en touchactie in TakeoffCraft, gegroepeerd, met de verschillen per platform.
keywords: toetsen, sneltoetsen, hotkeys, toetsenbord, muis, trackpad, aanraken, verschuiven, zoomen, wiel, rechtsklik, dubbelklik, spatie, shift, kopiëren, plakken, knippen, dupliceren, alles selecteren
from: 6f2c441d
---

Letter-toetsen werken wanneer de aanwijzer ergens op de pagina staat en u niet in een veld typt. Zolang een dialoogvenster open is, gelden de eigen toetsen ervan. Letters werken met of zonder {{key:Shift}}.

## Hulpmiddelen

| Toets | Hulpmiddel |
|---|---|
| {{key:V}} | {{ui:Selecteren}} |
| {{key:L}} | {{ui:Lineair}} |
| {{key:A}} | {{ui:Oppervlakte}} |
| {{key:O}} | {{ui:Cirkel}} |
| {{key:B}} | {{ui:Ruimte}} (vul een ruimte met één klik) |
| {{key:R}} | {{ui:Boog}} aan of uit (bij Lineair, Oppervlakte en Uitsparing) |
| {{key:E}} | {{ui:Aftrekken}} aan of uit: de volgende segmenten van een reeks worden getekend maar niet geteld |
| Een cijfer, `@` of `#` tijdens het tekenen | Het vak {{ui:Invoer}} openen: typ een lengte of coördinaten, {{key:Enter}} plaatst het punt ([Lineaire reeksen meten](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Uitsparing}} (selecteer eerst een oppervlakte) |
| {{key:C}} | {{ui:Tellen}} |
| {{key:S}} | {{ui:Automatisch tellen}} |
| {{key:K}} | {{ui:Ijken}} |
| {{key:D}} | {{ui:Controleren}} van de schaal |

## Tijdens het tekenen

| Toets of actie | Wat het doet |
|---|---|
| Klik | Plaats een punt (een stip, bij Tellen). |
| {{key:P}} | Pad: kies het hele samenhangende pad van een PDF-lijn, of de omlijning rond een klik ([De lijnen van de PDF kiezen](topic:pick-the-lines)). |
| {{key:F3}} | Snappen naar de lijnen van de tekening aan of uit ([Snappen naar de lijnen van de tekening](topic:snap-to-the-drawing)). |
| {{key:Shift}} vast tijdens klikken | Snap het segment naar 0°, 45°, 90° of 135° vanaf het laatste punt. Niet voor boogpunten of cirkels. |
| Dubbelklik | Beëindig een reeks, of sluit een oppervlakte of uitsparing. |
| {{key:Enter}} | Beëindig een reeks, of sluit een oppervlakte of uitsparing. |
| Rechtsklik (zonder te bewegen) | Beëindig een reeks, of sluit een oppervlakte of uitsparing. |
| Klik op het eerste punt | Sluit een oppervlakte of uitsparing (vanaf het derde punt). |
| {{key:Backspace}} of {{key:Delete}} | Verwijder het laatste punt (eerst het wachtende boogpunt). |
| {{key:Esc}} | Laat het wachtende boogpunt los; annuleer daarna de onafgemaakte markering; ga daarna terug naar {{ui:Selecteren}}. |

## Selecteren en bewerken

| Toets of actie | Wat het doet |
|---|---|
| Klik op een markering (hulpmiddel Selecteren) | Selecteer hem en maak zijn post actief. |
| {{key:Shift}} + klik op een markering | Voeg hem toe aan de selectie, of haal hem eruit. |
| {{key:Mod+A}} | Selecteer elke markering op het open blad. |
| Sleep een hoekgreep | Verplaats dat punt ({{key:Shift}} snapt naar 45°). Werkt wanneer één markering is geselecteerd. |
| {{key:Delete}} of {{key:Backspace}} | Verwijder de geselecteerde markeringen (wanneer u niet tekent). |
| {{key:Esc}} | Selectie opheffen: wis de selectie en de controlelijn. |
| {{key:Mod+Z}} | Ongedaan maken. |
| {{key:Mod+Y}} of {{key:Mod+Shift+Z}} | Opnieuw. |

## Kopiëren en plakken

| Toets | Wat het doet |
|---|---|
| {{key:Mod+C}} | Kopieer de geselecteerde markeringen, met hun posten. |
| {{key:Mod+X}} | Knippen: kopieer de geselecteerde markeringen en verwijder ze daarna. |
| {{key:Mod+V}} | Plakken: de kopie volgt de aanwijzer; klik waar hij moet komen. |
| {{key:Mod+Shift+V}} | Plakken op dezelfde plaats: dezelfde plek op het open blad. |
| {{key:Mod+D}} | Dupliceer de geselecteerde markeringen: de kopie volgt de aanwijzer; klik waar hij moet komen. |
| {{key:Esc}} | Niets neerzetten: annuleer een plakken of dupliceren dat aan de aanwijzer hangt. |

De losse letters kiezen nog steeds hulpmiddelen ({{key:C}} is {{ui:Tellen}}, {{key:D}} is {{ui:Controleren}}, {{key:X}} is {{ui:Uitsparing}}, {{key:V}} is {{ui:Selecteren}}, {{key:A}} is {{ui:Oppervlakte}}); alleen {{key:Mod}} samen met deze toetsen kopieert en plakt. In een tekstveld kopiëren en plakken deze toetsen gewoon tekst. Zie [Markeringen kopiëren, plakken en dupliceren](topic:copy-paste).

:::warning
{{key:Backspace}} verwijdert de geselecteerde markering wanneer u niet tekent. Gebeurt dat per ongeluk, dan haalt {{key:Mod+Z}} hem terug.
:::

## Bestanden

| Toets | Wat het doet |
|---|---|
| {{key:Mod+O}} | {{ui:Tekeningen openen}} |
| {{key:Mod+S}} | {{ui:Opmeting opslaan}} |

Deze twee werken ook wanneer u in een veld typt.

## Weergave en bladen

| Toets of actie | Wat het doet |
|---|---|
| Muiswiel | Zoom in en uit bij de aanwijzer. |
| Slepen (linker, middelste of rechter knop) | Verschuiven. In {{ui:Automatisch tellen}} tekent een linker slepen het zoekvak. |
| {{key:Space}} vast + slepen | Verschuiven, in elk hulpmiddel. |
| {{key:F}} | {{ui:Pagina passend}} |
| {{key:W}} | {{ui:Breedte passend}} |
| {{key:Plus}} of {{key:=}} | Zoom in op het midden van het beeld. |
| {{key:Minus}} | Zoom uit op het midden van het beeld. |
| {{key:PageDown}} / {{key:PageUp}} | Volgend of vorig blad in de bladenlijst. |
| {{key:Ctrl+Shift+F}} | Wissel door de volledig-schermmodi (Control op elk platform, ook op een Mac). |
| {{key:F1}} | Open of sluit deze help, een paneel aan de zijkant. |
| {{key:3}} | De 3D-controleweergave van het blad, aan of uit. |

## 3D-weergave

| Toets of actie | Wat het doet |
|---|---|
| Slepen, of slepen met de middelste knop | Draaien. |
| {{key:Shift}} + slepen, of slepen met de rechter knop | Verschuiven. |
| Muiswiel | Zoom bij de aanwijzer. Op een trackpad draait een tweevingerveeg en zoomt een knijpbeweging. |
| Klik | Selecteer de markering onder de aanwijzer ({{key:Shift}} + klik voegt toe of haalt eruit). |
| {{key:F}} of {{key:W}} | Alles tonen. |
| {{key:3}} | Terug naar het platte blad. |

Zie [Controleer de opmeting in 3D](topic:check-in-3d).

## Automatisch tellen

| Toets of actie | Wat het doet |
|---|---|
| Sleep een vak | Omkader het symbool waarnaar gezocht wordt (start het zoeken). |
| Klik op een treffervak | Verwerp het, of herstel het. |
| {{key:Esc}} | Annuleer een lopend zoeken, of gooi de controle weg. |

## Help

| Toets | Wat het doet |
|---|---|
| {{key:F1}} | Open of sluit het helppaneel (ook de knop {{ui:Help}} in de appbalk). Het werkt in elk hulpmiddel, ook terwijl u in een veld typt. |
| {{key:Esc}} | Sluit het helppaneel. In het zoekvak wist de eerste Esc de zoekopdracht. Terwijl het paneel open is, sluit een Esc die u indrukt na het klikken op het blad eerst het paneel; druk nogmaals om te annuleren in TakeoffCraft. |

:::mac
Op veel Mac-toetsenborden regelen de bovenste toetsen helderheid en geluid. Druk op fn met F1, of zet "Gebruik F1-, F2-enz. toetsen als standaard functietoetsen" aan in Systeeminstellingen, onder Toetsenbord.
:::

## Dialoogvensters en velden

| Toets | Wat het doet |
|---|---|
| {{key:Enter}} | In een veld: pas de waarde toe. In het ijkdialoogvenster: {{ui:De schaal instellen}}. |
| {{key:Esc}} | Sluit een dialoogvenster (als {{ui:Annuleren}}); sluit het formulier {{ui:Nieuwe post}}. |
| {{key:Tab}} | Ga naar het volgende veld. |

## Platformnotities

:::mac
- {{key:Mod}} is de Command-toets: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Volledig scherm is de uitzondering: Control+Shift+F.
- Rechtsklik is een tweevingerklik op een trackpad, zodra secundaire klik aanstaat in Systeeminstellingen, onder Trackpad. TakeoffCraft leest alleen de secundaire knop; een Control-klik kan als gewone klik tellen en een punt toevoegen.
- Twee vingers scrollen op een trackpad zoomt het blad (het scrolt het niet). Om te verschuiven, drukt u en sleept u, of houdt u {{key:Space}} vast en sleept u.
- Page Up en Page Down zijn fn met de pijltjestoetsen omhoog en omlaag op toetsenborden die die niet hebben.
- Backspace is de toets met het label delete.
:::

:::windows
- {{key:Mod}} is Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Op een touchpad van een laptop zoomt een tweevingerscroll het blad. Om te verschuiven, drukt u en sleept u.
:::

:::linux
- {{key:Mod}} is Ctrl. Sommige bureaubladen hebben eigen sneltoetsen met Ctrl+Alt of Super; TakeoffCraft gebruikt er geen van.
- Op een touchpad zoomt een tweevingerscroll het blad. Om te verschuiven, drukt u en sleept u.
:::

:::touch
TakeoffCraft leest aanraking als één aanwijzer:

- Tikken plaatst een punt, selecteert een markering of voegt een telstip toe.
- Slepen met één vinger verschuift het blad (in {{ui:Automatisch tellen}} tekent het het zoekvak).
- Knijpen om te zoomen wordt nog niet ondersteund. Gebruik {{ui:Pagina passend}} en {{ui:Breedte passend}}, of {{key:Plus}} en {{key:Minus}} op een toetsenbord.
- Om een oppervlakte te sluiten, tikt u op het eerste punt. Om een reeks te beëindigen, dubbeltikt u waar uw browser een dubbeltik als dubbelklik ziet, of drukt u op {{key:Enter}} op een toetsenbord.
- Er is geen live lengteweergave totdat u tikt, omdat er geen hover is.

Een toetsenbord met muis of trackpad is vandaag de betere manier om op te meten.
:::

## Toetsen die de browser behoudt

Browsers houden een paar sneltoetsen voor zichzelf, en een pagina kan die niet gebruiken: het tabblad sluiten ({{key:Mod+W}}), een nieuw tabblad of venster ({{key:Mod+T}}, {{key:Mod+N}}) en browserzoom ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Daarom zoomt TakeoffCraft het blad met het wiel en met de losse toetsen {{key:Plus}} en {{key:Minus}}. Drukt u per ongeluk op {{key:Mod+Plus}}, dan wordt de hele pagina groter; {{key:Mod+0}} zet dat terug. Zie [Toetsen, muizen en trackpads](common:keys).

## Waar Verplaatsen zit

Er is geen opdracht Verplaatsen: selecteer een telstip en sleep hem, of selecteer een oppervlakte of een lijn en sleep de hoekgrepen ervan.
