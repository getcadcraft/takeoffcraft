---
title: Aan de slag met TakeoffCraft
summary: Wat TakeoffCraft doet, waar het draait en uw eerste opgemeten en geprijsde post uit een pdf-tekenset.
keywords: start, eerste opmeting, snelstart, introductie, raming, hoeveelhedenstaat, tekenset, pdf
from: 3b9da1fb
---

TakeoffCraft meet tekensets, pdf-bestanden en DWG- of DXF-tekeningen op en zet de metingen om in een geprijsde raming. U opent de bestanden (een tekening telt rechtstreeks vanuit haar blokken: zie [Een DWG- of DXF-tekening openen](topic:open-a-drawing)), geeft elk blad een schaal (een tekening brengt haar eigen schaal mee), maakt **posten** (een wandtype, een vloerafwerking, een armatuur) en klikt op de bladen om ze op te meten. Hoeveelheden, kosten en het totaal van de opdracht worden bijgewerkt terwijl u werkt. U kunt de raming exporteren als rekenblad en als kopie van de pdf-bestanden met uw opmeting erin getekend.

Als u in andere programma's hebt opgemeten, lees dan hierna [Afkomstig van andere opmetingssoftware](topic:coming-from). Sommige dingen werken hier anders.

## Waar het draait

TakeoffCraft draait in uw webbrowser. Open TakeoffCraft en het scherm is meteen klaar; er is niets te installeren.

- **Uw pdf-bestanden blijven op uw computer.** Ze worden door de browser geopend en nooit geüpload. Opslaan is een download.
- Het werkt in actuele versies van Chrome, Edge, Firefox en Safari. Zie [Browsers en computers](common:browsers).
- Het werkt zonder internetverbinding zodra u in de appbalk {{ui:Opslaan voor offline gebruik}} kiest en er {{ui:Klaar voor offline gebruik}} staat. Zie [Offline werken](common:offline).
- Opslaan in de cloud is nog niet beschikbaar. Als desktop-app komt TakeoffCraft in CadCraft Studio, met de andere zeven apps.

## Uw eerste opmeting in tien stappen

Deze uitleg meet één wandtype op en prijst het. Het kost een paar minuten, met elke tekenset die u hebt.

1. Kies {{ui:Tekeningen openen}} in de groep {{ui:Bestand}} van de werkbalk (of druk op {{key:Mod+O}}), selecteer een of meer pdf-bestanden en kies Openen. U kunt de pdf-bestanden ook ergens op de pagina neerzetten.
   De bladen verschijnen links en het eerste blad opent in het midden.
2. Zoek de afgedrukte schaal van het blad in het titelblok of onder een tekeningtitel.
3. Open de lijst {{ui:Voorinstelling}} in de groep {{ui:Schaal}} en kies die schaal, bijvoorbeeld `1/4" = 1'-0"`.
   De balk onderaan het blad zegt nu "Schaal 1/4" = 1'-0"".
4. Kies {{ui:Controleren}} (of druk op {{key:D}}) en klik op de twee uiteinden van een maat die op de tekening staat.
   De uitlezing in de statusbalk linksonder moet overeenkomen met de afgedrukte maat. Zo niet, zie dan [De schaal instellen](topic:set-the-scale).
5. Kies in het paneel {{ui:Posten}} rechts {{ui:Nieuwe post}}, typ een naam als `Binnenwand type A`, laat het soort op {{ui:Lineair (lengte)}} staan en kies {{ui:Toevoegen}}.
6. Kies {{ui:Lineair}} in de werkbalk (of druk op {{key:L}}).
7. Klik op het begin van een wand en dan op elke hoek langs de wand. Dubbelklik, druk op {{key:Enter}} of klik met rechts om de reeks af te sluiten.
   De reeks wordt in de kleur van de post getekend en de lengte verschijnt naast de post.
8. Typ in de posteditor onder {{ui:Posten}} `9'-0"` bij {{ui:Hoogte}}, `0.85` bij {{ui:Materiaal $/LF}} en `1.20` bij {{ui:Arbeid $/LF}}.
   De tabel {{ui:Hoeveelheden}} onderaan toont de lengte, het uitgebreide materiaal en de arbeid, en het {{ui:Totaal van de opdracht}}.
9. Kies {{ui:Opmeting opslaan}} (of druk op {{key:Mod+S}}).
   Uw browser downloadt een `.takeoff.json`-bestand. Het bevat uw posten, schalen en markeringen en opent opnieuw bovenop dezelfde pdf-bestanden.
10. Open het menu {{ui:Exporteren}} in de werkbalk en kies {{ui:XLSX}} om de raming als rekenblad te downloaden.

:::tip
Druk op {{key:Esc}} om te stoppen met wat u doet en terug te gaan naar het gereedschap {{ui:Selecteren}}. {{key:Mod+Z}} maakt elke wijziging ongedaan.
:::

## Wat u hierna leest

- [Het TakeoffCraft-scherm](topic:workspace) noemt elk onderdeel van het venster.
- [Een opmeting beginnen en een tekenset openen](topic:open-plan-set) behandelt meerdere pdf-bestanden en de bladenlijst.
- [Opmetingsposten maken](topic:create-items) legt soorten, eenheden, verlies en tarieven uit.
- [Samenstellingen en formules](topic:assemblies) zet één meting om in stijlen, platen en meer.
- [Toetsenbord en muis](topic:keyboard) noemt elke toets.
