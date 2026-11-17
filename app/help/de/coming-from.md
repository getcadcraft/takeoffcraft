---
title: Umstieg von anderer Mengenermittlungssoftware
summary: Wie die Gewohnheiten spezialisierter Mengenermittlungsprogramme und PDF-Markierungswerkzeuge in TakeoffCraft wiederzufinden sind und welche Unterschiede häufig Probleme bereiten.
keywords: Umstieg, migrieren, Bedingungen, Teile, Messwerkzeuge, Markierungsliste, Mengenverknüpfung, Mengenermittlungsgewohnheiten, Unterschiede, vergleichen
from: 12004ce5
---

Wenn Sie bereits mit PlanSwift oder mit den Messwerkzeugen in Bluebeam Revu Mengen ermittelt haben, wird Ihnen der größte Teil von TakeoffCraft vertraut vorkommen: ein Planset, ein Maßstab je Blatt, Dinge, die Sie messen, und eine bepreiste Summe. Das Zusammenspiel der Teile ist an einigen Stellen anders; diese Stellen stehen unten.

Wenn Sie PlanSwift oder On-Screen Takeoff kennen, wählen Sie in {{ui:Einstellungen}} › {{ui:TakeoffCraft}} › {{ui:Menüs, Tasten und Maus}} den Menüstil {{ui:Ermittlungsarbeitsplatz}}: eine Menüleiste mit Datei, Bearbeiten, Ansicht, Maßstab, Mengenermittlung, {{ui:Positionen}}, {{ui:Markierung}} und {{ui:Export}} über einer Reihe von Ermittlungswerkzeugen, mit den Maßstabsvorgaben in der Blattleiste. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).

## Gewohnheiten zugeordnet

| Sie sind gewohnt | In TakeoffCraft |
|---|---|
| Ein Projekt öffnen, das die Pläne speichert (PlanSwift) | Öffnen Sie die PDFs und die Projektdatei `.takeoff.json` nebeneinander. Das Projekt speichert nur die Mengenermittlung; die PDFs bleiben Ihre eigenen Dateien. |
| Eine Liste der Markierungen mit Notizen, Wolken und Hervorhebungen (Bluebeam) | {{ui:Markierung}} in der Blattleiste: Notizen, Wolken und Hervorhebungen mit einem Status (Offen, Beantwortet, Geschlossen), aufgelistet unter **Markierungen** und im markierten PDF gezeichnet. Siehe [Notizen, Wolken und Hervorhebungen](topic:markups). |
| Als Markierungen in der PDF gespeicherte Messungen (Bluebeam) | Die Mengenermittlung liegt in der Datei `.takeoff.json`. {{ui:Markiertes PDF}} schreibt eine Kopie mit darin gezeichneter Mengenermittlung zum Weitergeben; {{ui:PDF mit der Mengenermittlung darin}} schreibt eine Kopie, die die Mengenermittlung enthält, zum erneuten Öffnen in TakeoffCraft. |
| Mengenermittlungspositionen (PlanSwift), eigene Messwerkzeuge im Werkzeugkasten (Bluebeam) | **Positionen** unter {{ui:Positionen}}: Name, Typ, Farbe, Einheit, Höhe oder Tiefe, Verschnitt, Sätze. |
| Teile und Baugruppen mit Formeln (PlanSwift) | Der {{ui:Kalkulationsbaustein}} der Position: Komponenten mit einer Formel, die `L H A N P` verwendet. |
| Den Blattmaßstab festlegen oder kalibrieren (beides) | Liste {{ui:Voreinstellung}} oder {{ui:Kalibrieren}} in der Gruppe {{ui:Maßstab}}, je Blatt. {{ui:Prüfen}} misst eine bekannte Maßangabe. |
| Einen Maßstab auf einen Seitenbereich anwenden | Noch nicht: Jedes Blatt einzeln festlegen. |
| Ansichtsfenster mit unterschiedlichen Maßstäben auf einem Blatt (Bluebeam) | Noch nicht: ein Maßstab je Blatt. |
| Polylängen- und Flächenwerkzeuge (Bluebeam), lineare und Flächenermittlung (PlanSwift) | {{ui:Länge}} ({{key:L}}) und {{ui:Fläche}} ({{key:A}}). |
| Shift gedrückt halten für gerade Linien | {{key:Shift}} rastet in 45°-Schritten ein, dieselbe Idee. |
| Einrasten an den Linien der Zeichnung | Standardmäßig an: Enden, Mittelpunkte, Schnittpunkte und der nächste Punkt auf einer Linie, mit {{key:F3}} zum Ausschalten, wie in CAD-Programmen. |
| Zählwerkzeug (beide) | {{ui:Zählen}} ({{key:C}}). |
| Visuelle Suche nach Symbolen (Bluebeam) | {{ui:Auto-Zählen}} ({{key:S}}): ein Symbol einrahmen, prüfen, hinzufügen. |
| Aussparungen oder Abzüge in Flächen | {{ui:Aussparung}} ({{key:X}}) auf einer ausgewählten Fläche, und runde Aussparungen. |
| Abzüge bei linearen Strecken | Die Strecke durchgehend zeichnen und für die Öffnung {{key:E}} ({{ui:Abzug}}) drücken. Siehe [Lineare Strecken messen](topic:measure-linear). |
| Bogensegmente in einer Polylinie | {{ui:Bogen}} ({{key:R}}): einen Punkt auf der Kurve anklicken, dann ihr Ende. |
| Die Markierungsliste mit Mengenspalten (Bluebeam) | Die Tabelle {{ui:Mengen}}, {{ui:Nach Position}} oder {{ui:Nach Blatt}}. |
| Kalkulationsraster mit Preisen (PlanSwift) | Dieselbe Tabelle: Verschnitt, Material und Lohn je Einheit, Gesamtbeträge und {{ui:Auftragssumme}}. |
| Export nach Excel | {{ui:XLSX}} mit aktiven Formeln oder {{ui:CSV}}. |
| Escape, um ein Werkzeug zu beenden | {{key:Esc}} bricht ab und wechselt zu {{ui:Auswählen}}. |
| Rechtsklick zum Beenden | Auch hier beendet der Rechtsklick eine Strecke oder schließt eine Fläche. Es gibt kein Rechtsklickmenü. |

## Unterschiede, die häufig Probleme bereiten

**Die Mengenermittlung befindet sich nicht in Ihrer PDF.** Nichts, was Sie tun, ändert Ihre PDFs. Speichern Sie die Datei `.takeoff.json` und bewahren Sie sie bei den Zeichnungen auf. Wenn Sie jemandem das markierte PDF senden, erhält er keine bearbeitbare Mengenermittlung: Senden Sie die Projektdatei und die Original-PDFs oder ein [PDF mit der Mengenermittlung darin](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDFs werden anhand des Inhalts zugeordnet, nicht anhand des Namens.** Ein überarbeitetes Blatt, das unter dem alten Dateinamen gespeichert wurde, ist für TakeoffCraft eine neue Datei ohne Maßstab und ohne Markierungen. Ihre alten Markierungen bleiben auf der alten Version und werden weiter gezählt. Siehe [Mengenermittlung speichern und erneut öffnen](topic:save-and-reopen#when-a-pdf-has-changed).

**Markierungen ohne Maßstab werden ausgelassen, nicht als Null gezählt.** Hat ein Blatt keinen Maßstab, zählen seine Strecken und Flächen nicht, und die Tabelle zeigt „Unvollständig“. In vielen Programmen würden Sie einfach 0 sehen. Siehe [Maßstab festlegen](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Es gibt kein Erraten der Seitengröße.** Voreinstellungen gehen davon aus, dass die PDF in Originalgröße gedruckt ist. Eine halb große oder „an Seite anpassen“ skalierte PDF braucht {{ui:Kalibrieren}}. Verwenden Sie immer {{ui:Prüfen}}.

**Eine Position, ein Haupttyp, weitere auf Wunsch.** Eine Position ist linear, Fläche oder Zählung, und ihr Typ wird gesperrt, sobald sie Markierungen hat. Eine Bedingung, die sowohl eine Fläche als auch deren Umfang liefert, ist eine Flächenposition: Ihr Umfang ist die Variable `P`. Eine Wand mit Länge und Fläche ist eine lineare Position mit einer Höhe. Für eine Position mit mehreren Bedingungen, etwa einen Raum mit Boden, Sockel und Türen, setzen Sie unter **Auch messen** Häkchen bei den anderen Arten: Jede wird in einer eigenen Zeile bepreist. Siehe [Eine Position, mehrere Arten von Markierungen](topic:create-items#one-item-several-kinds-of-marks).

**Formeln rechnen mit Summen.** Formeln von Kalkulationsbausteinen verwenden die Summen der Position über alle Blätter, nicht jede Strecke einzeln. `N` (die Anzahl der Strecken oder Flächen) ist für Zuschläge je Strecke vorgesehen, etwa einen zusätzlichen Ständer je Wand.

**Der Umfang schließt Aussparungen ein.** `P` einer Fläche addiert die Kanten ihrer Öffnungen. Siehe [Flächen mit Aussparungen messen](topic:measure-areas#read-the-area).

**Ziehen verschiebt den Ausschnitt.** Ein Ziehen mit der linken Maustaste auf dem Blatt verschiebt in jedem Werkzeug außer {{ui:Auto-Zählen}}. Sie müssen nie zu einem Verschiebewerkzeug wechseln. Das Mausrad zoomt; es scrollt nicht.

**Eine Wiederherstellungskopie, keine Cloud.** TakeoffCraft behält eine Kopie Ihrer Arbeit in diesem Browser und bietet sie nach einem Absturz wieder an ([Wenn der Tab oder der Browser hängen bleibt](topic:save-and-reopen#if-the-tab-or-the-browser-stops)). Die Mengenermittlung müssen Sie aber selbst speichern: {{key:Mod+S}}. Cloud-Speicherung ist noch nicht verfügbar.

**Alles läuft im Browser.** Es ist nichts zu installieren, und die Pläne werden nie hochgeladen. Als Desktop-App gibt es TakeoffCraft in CadCraft Studio, zusammen mit den anderen sieben Apps.

## Noch nicht verfügbar

Bereiche mit Maßstab je Blatt sind noch nicht umgesetzt. Die vollständige Liste und was Sie stattdessen tun können, finden Sie unter [Was noch nicht umgesetzt ist](topic:not-built-yet).
