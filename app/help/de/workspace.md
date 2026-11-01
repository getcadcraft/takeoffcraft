---
title: Der Bildschirm von TakeoffCraft
summary: Ein Rundgang durch das Fenster mit den Namen auf dem Bildschirm - die Symbolleiste, die Blattliste, das Blatt, der Bereich Positionen, die Tabelle Mengen und die Statusleiste.
keywords: Bildschirm, Layout, Layouts, Menüband, Projektbrowser, Werkzeugpalette, Infofeld, Symbolleiste, Bereiche, Blattliste, Positionen, Mengen, Statusleiste, Rundgang, Oberfläche
from: ab1115e0
---

TakeoffCraft füllt das Browserfenster unter der CadCraft-App-Leiste. Von oben nach unten und von links nach rechts:

| Teil | Wo | Wozu er dient |
|---|---|---|
| App-Leiste | Ganz oben | Der App-Name, die Version, {{ui:Über TakeoffCraft}}, {{ui:Hilfe}} ({{key:F1}}), {{ui:Für Offline speichern}}, {{ui:Einstellungen}} ({{key:Mod+,}}), die Schaltfläche {{ui:Vollbild}} und der Designschalter {{ui:Papier}} / {{ui:Modell}}. |
| Symbolleiste | Unter der App-Leiste | Jeder Befehl, in Gruppen: {{ui:Datei}}, {{ui:Export}}, {{ui:Maßstab}}, {{ui:Ermittlung}}, {{ui:Bearbeiten}}, {{ui:Ansicht}}. |
| Blätter | Links | Jede Seite jedes geöffneten PDFs, mit Miniaturansicht, Maßstab und Anzahl der Markierungen. |
| Das Blatt | Mitte | Die geöffnete Seite. Hier messen Sie. |
| Positionen | Rechts | Ihre Positionen der Mengenermittlung, die Einstellungen der ausgewählten Position und die ausgewählte Markierung. |
| Mengen | Unten | Mengen und Kosten nach Position oder nach Blatt sowie die Auftragssumme. |
| Statusleiste | Ganz unten | Die laufende Messung, Meldungen, der 45°-Hinweis und der Zoom. |

## Die Symbolleiste

Halten Sie den Zeiger über eine Schaltfläche, um zu sehen, was sie tut und welche Taste sie hat.

| Gruppe | Schaltflächen |
|---|---|
| {{ui:Datei}} | {{ui:Neu}} (leere Mengenermittlung), {{ui:PDFs öffnen}} ({{key:Mod+O}}), {{ui:Ermittlung öffnen}} (ein Projekt `.takeoff.json`), {{ui:Ermittlung speichern}} ({{key:Mod+S}}) |
| {{ui:Export}} | Ein Menü: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Markiertes PDF}} |
| {{ui:Maßstab}} | {{ui:Kalibrieren}} ({{key:K}}), {{ui:Prüfen}} ({{key:D}}) und die Liste {{ui:Voreinstellung}} |
| {{ui:Ermittlung}} | {{ui:Auswählen}} ({{key:V}}), {{ui:Länge}} ({{key:L}}), {{ui:Fläche}} ({{key:A}}), {{ui:Kreis}} ({{key:O}}), {{ui:Bogen}} ({{key:R}}, ein Ein/Aus-Schalter), {{ui:Abzug}} ({{key:E}}, ein Ein/Aus-Schalter), {{ui:Aussparung}} ({{key:X}}), {{ui:Zählen}} ({{key:C}}), {{ui:Auto-Zählen}} ({{key:S}}) |
| {{ui:Bearbeiten}} | {{ui:Rückgängig}} ({{key:Mod+Z}}), {{ui:Wiederholen}} ({{key:Mod+Y}}), {{ui:Kopieren}} ({{key:Mod+C}}), {{ui:Einfügen}} ({{key:Mod+V}}) und {{ui:Mehr}}: {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Alles auswählen}}, {{ui:Auswahl aufheben}} |
| {{ui:Ansicht}} | {{ui:Seite einpassen}} ({{key:F}}), {{ui:Breite einpassen}} ({{key:W}}) |

Das Werkzeug, das Sie gerade nutzen, wird gedrückt dargestellt. Die Schaltflächen {{ui:Bogen}} und {{ui:Abzug}} bleiben gedrückt, solange sie eingeschaltet sind.

## Blätter (links)

- **Blätter durchsuchen** filtert die Liste nach Blattname, Dateiname oder Seitenbezeichnung.
- Jedes Blatt zeigt eine Miniaturansicht (beim Scrollen gezeichnet), seinen Namen und entweder seinen Maßstab oder **Kein Maßstab**.
- Die rechte Seite jeder Zeile zeigt, wie viele Markierungen das Blatt hat. Ist eine Position hervorgehoben, zeigt sie stattdessen, wie viele Markierungen dieser Position auf dem Blatt sind.
- Klicken Sie auf ein Blatt, um es zu öffnen. {{key:PageDown}} und {{key:PageUp}} springen zum nächsten und vorigen Blatt der Liste.
- Umfasst eine Mengenermittlung PDFs, die nicht geöffnet sind, nennt ein Hinweis unter der Liste sie. Siehe [Eine Mengenermittlung speichern und wieder öffnen](topic:save-and-reopen).

Blattnamen stammen aus dem PDF: Eine Seitenbezeichnung wie `A-101` wird zum Blattnamen. Eine Seite ohne Bezeichnung wird nach ihrer Datei und Seitenzahl benannt, etwa „Plans, Seite 3“. Sind mehrere PDFs geöffnet, zeigen Blätter mit Bezeichnung zusätzlich den Dateinamen.

## Das Blatt (Mitte)

- Die Leiste unter dem Blatt zeigt den Blattnamen und seinen Maßstab oder „Noch kein Maßstab: Voreinstellung wählen oder kalibrieren“. Ihre Schaltflächen: {{ui:MarkupCraft}} (wenn diese App das PDF übernehmen kann; siehe [Eine Mengenermittlung beginnen und einen Plansatz öffnen](topic:open-plan-set)), {{ui:Vergleichen}} (eine ältere Fassung des Blatts über diesem: [Ein überarbeitetes Blatt vergleichen](topic:compare-revisions)), „(n) zu prüfen“ (gekennzeichnete Markierungen, falls vorhanden) und {{ui:3D}} (die [3D-Prüfansicht](topic:check-in-3d)).
- Solange kein PDF geöffnet ist, zeigt die Mitte eine kurze Anleitung in fünf Schritten.
- Das Rad zoomt am Zeiger. Ziehen verschiebt die Ansicht. Siehe [Tastatur und Maus](topic:keyboard).
- Während Sie {{ui:Auto-Zählen}} nutzen, erscheint oben am Blatt eine Leiste mit seinen Bedienelementen.

## Positionen (rechts)

Oben die Liste {{ui:Angebotsbereich}}: das Gebäude, das Geschoss oder die Phase, in die neue Markierungen kommen ([Angebotsbereiche](topic:bid-areas)).

- {{ui:Neue Position}} öffnet ein kleines Formular: einen Namen, einen Typ ({{ui:Länge (linear)}}, {{ui:Fläche}} oder {{ui:Anzahl}}) und {{ui:Hinzufügen}}.
- Die Liste zeigt Farbe, Typsymbol, Name und Menge jeder Position. Klicken Sie auf eine Position, um mit ihr zu zeichnen und ihre Markierungen auf jedem Blatt hervorzuheben. Klicken Sie erneut, um die Hervorhebung zu beenden.
- Unter der Liste ist **Position: (Name)** der Positionseditor: Name, Typ, Farbe, Einheit, Höhe oder Tiefe, Verschnitt, Material- und Lohnpreise, die gemessenen Werte und der {{ui:Kalkulationsbaustein}}. Siehe [Positionen der Mengenermittlung anlegen](topic:create-items).
- **Ausgewählte Markierung** erscheint, wenn Sie eine Markierung auswählen: zu welcher Position sie gehört, ihr Blatt, ihre Maße und Schaltflächen wie {{ui:Aussparung hinzufügen}} und {{ui:Markierung löschen}}. Bei mehreren ausgewählten Markierungen wird daraus **Ausgewählte Markierungen**: wie viele je Position, und {{ui:Kopieren}}, {{ui:Duplizieren}}, {{ui:Ausschneiden}} und {{ui:Markierungen löschen}}.
- Der Positionseditor endet mit {{ui:Position kopieren}} und {{ui:Position duplizieren}}: eine Position mit ihrem Kalkulationsbaustein und ihren Kosten, ohne Markierungen. Siehe [Markierungen kopieren, einfügen und duplizieren](topic:copy-paste).

## Mengen (unten)

- {{ui:Nach Position}} listet jede Position und die Komponenten ihres Kalkulationsbausteins mit Menge, Verschnitt, Preisen und erweiterten Kosten. Verschnitt und Preise können Sie direkt in die Tabelle eintippen.
- {{ui:Nach Blatt}} listet die Menge jeder Position auf jedem Blatt.
- Eine Warnung, die mit **Unvollständig:** beginnt, erscheint, wenn etwas in den Summen fehlt.
- {{ui:Auftragssumme}} steht rechts in der Kopfzeile.
- Die Pfeilschaltfläche ganz rechts blendet die Tabelle aus oder ein, um dem Blatt mehr Platz zu geben.

Siehe [Mengen und die Kalkulation lesen](topic:read-quantities).

## Statusleiste (unten)

Von links nach rechts: die laufende Messung beim Zeichnen (Länge, Fläche, Radius oder ein Prüfergebnis), das Feld {{ui:Eingabe}}, während Sie eine Länge eintippen, Meldungen von TakeoffCraft, die Erinnerung „Umschalt rastet auf 45° ein“ (oder „Rastet auf 45° ein; Umschalt gibt den Winkel frei“, wenn das in den [Einstellungen](topic:settings) eingeschaltet ist), die Schaltfläche {{ui:Fang}} (Fang an den Linien der Zeichnung, eingeschaltet, wenn hervorgehoben; {{key:F3}}) und der Zoomwert in Prozent.

:::tip
Lesen Sie die Statusleiste, wenn etwas nicht geschieht. TakeoffCraft erklärt dort, warum es einen Klick abgelehnt hat, zum Beispiel „Dieses Blatt hat noch keinen Maßstab.“
:::

## Andere Layouts

Alles oben Beschriebene ist das Layout {{ui:CadCraft klassisch}}, der Start. {{ui:Einstellungen}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} bietet zwei weitere; dieselben Werkzeuge und Tasten funktionieren in allen dreien, und wer wieder {{ui:CadCraft klassisch}} wählt, bringt jedes Bedienelement an seinen alten Platz zurück.

| Layout | In TakeoffCraft |
|---|---|
| {{ui:Menüband und Projektbrowser}} | Das {{ui:Menüband Mengenermittlung}} quer oben ([Menüs, Tasten und Maus](topic:menus-keys-and-mouse)), eine Leiste für das laufende Werkzeug, eine Registerkarte für jedes geöffnete Blatt (Modell und Layouts einer Zeichnung sind ebenfalls Blätter) mit den Maßstabsvoreinstellungen und {{ui:Seite einpassen}} unter dem Blatt. Der linke Bereich enthält {{ui:Eigenschaften}} (die ausgewählte Position, Notiz oder Markierung) über dem {{ui:Mengenermittlungs-Browser}}: {{ui:Blätter}} (anklicken, um eines in einer Registerkarte zu öffnen), {{ui:Konditionen}} (anklicken, um mit einer zu zeichnen) und {{ui:Kalkulation}} (Summe jeder Position und Auftragssumme); die Miniaturansichten sind seine zweite Registerkarte. |
| {{ui:Werkzeugpalette und Infofeld}} | Die Symbolleiste über dem Blatt, ein Infofeld mit dem {{ui:Angebotsbereich}}, dem laufenden Werkzeug oder der Auswahl und der Blattleiste, links eine Spalte mit den Werkzeugen der Mengenermittlung, eine Registerkarte für jedes Blatt sowie {{ui:Fang}} und Zoom unter dem Blatt. |

Solange die [3D-Prüfansicht](topic:check-in-3d) geöffnet ist, treten die Blattregisterkarten und die Leiste unter dem Blatt zur Seite; schließen Sie die 3D-Ansicht, um wieder zu messen. Auf einem Telefon läuft immer das Telefon-Layout.

## Vollbild und Designs

Die Schaltfläche {{ui:Vollbild}} in der App-Leiste oder {{key:Ctrl+Shift+F}} (Control auf jeder Plattform, auch auf dem Mac) schaltet durch normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Bei ausgeblendeten Leisten bewegen Sie den Zeiger an den oberen Rand, um sie wieder einzublenden.

{{ui:Papier}} ist das helle Design und {{ui:Modell}} das dunkle. In {{ui:Modell}} wird die Zeichnung nur auf dem Bildschirm invertiert dargestellt (helle Linien auf dunklem Grund); Exporte werden nie verändert.
