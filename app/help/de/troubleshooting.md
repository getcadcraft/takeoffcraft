---
title: Fehlerbehebung
summary: Symptome, Ursachen und Lösungen für die Meldungen und Überraschungen, die Ihnen in TakeoffCraft begegnen können, zitiert so, wie die App sie anzeigt.
keywords: Probleme, Fehler, funktioniert nicht, Lösung, Hilfe, abgelehnt, misst nicht, kein Maßstab, fehlende Markierungen, Export fehlgeschlagen, offline, Touch
from: cd319c9b
---

TakeoffCraft erklärt die meisten Ablehnungen in der Statusleiste unten im Fenster. Suchen Sie unten die Meldung.

## Dateien öffnen

| Meldung oder Symptom | Ursache | Lösung |
|---|---|---|
| Der PDF-Leser konnte nicht geladen werden. Laden Sie die Seite neu, um es erneut zu versuchen. | Der PDF-Leser der App wurde nicht geladen, meist weil Sie offline sind und die App nie für die Offline-Nutzung gespeichert wurde. | Stellen Sie die Verbindung her und laden Sie neu. Wählen Sie dann {{ui:Für Offline speichern}} und warten Sie auf {{ui:Offline bereit}}; siehe [Offline arbeiten](common:offline). |
| (name) ist passwortgeschützt. Öffnen Sie eine ungeschützte Kopie. | Die PDF braucht ein Passwort zum Öffnen. | Fragen Sie nach einer ungeschützten Kopie oder entfernen Sie das Passwort in einem vertrauenswürdigen PDF-Programm. |
| (name) konnte nicht als PDF gelesen werden (…) | Die Datei ist beschädigt oder keine echte PDF. | Laden Sie sie erneut herunter oder speichern Sie sie in dem Programm neu, das sie erstellt hat. |
| (name) ist bereits geöffnet. | Dieselbe PDF (gleicher Inhalt) ist bereits geöffnet. | Nichts zu tun. |
| TakeoffCraft öffnet PDFs und .takeoff.json-Projekte. Übersprungen: … | Andere Dateitypen wurden verworfen. | Wandeln Sie Zeichnungen zuerst in PDF um. |
| Nichts passiert, wenn ich Dateien ablege | Die Dateien wurden außerhalb des Browserfensters abgelegt, oder der Browser hat die PDF in einem neuen Tab geöffnet. | Legen Sie die Dateien auf der TakeoffCraft-Seite selbst ab. Der Rahmen „PDFs oder eine .takeoff.json ablegen“ zeigt an, wann es funktioniert. |
| Das Öffnen einer großen Planmappe dauert eine Weile | Jede PDF wird vollständig gelesen, um sie zu identifizieren. | Warten Sie, bis die Meldung „(name) wird geöffnet…“ verschwindet. Miniaturansichten erscheinen beim Scrollen. |

## Messen

| Meldung oder Symptom | Ursache | Lösung |
|---|---|---|
| Öffnen Sie zuerst eine PDF. | Es ist kein Blatt geöffnet. | Öffnen Sie eine PDF. |
| Dieses Blatt hat noch keinen Maßstab, daher kann es nicht gemessen werden. Wählen Sie zuerst eine Voreinstellung für den Maßstab oder kalibrieren Sie (Zählungen funktionieren auch ohne). | Die Werkzeuge Länge, Fläche, Kreis und Aussparung brauchen einen Maßstab. | [Maßstab festlegen](topic:set-the-scale). |
| Legen Sie zuerst eine Position vom Typ Länge an (benennen Sie sie unter {{ui:Positionen}}) und klicken Sie dann auf das Blatt. | Es gibt keine Position dieses Typs. | Füllen Sie das geöffnete Formular {{ui:Neue Position}} aus und wählen Sie {{ui:Hinzufügen}}. |
| Wählen Sie zuerst eine Position für die Mengenermittlung (Bereich {{ui:Positionen}}). | Die aktuelle Position wurde gelöscht. | Klicken Sie auf eine Position unter {{ui:Positionen}}. |
| Eine Strecke braucht mindestens zwei Punkte. | Sie haben nach einem Klick abgeschlossen. | Klicken Sie mindestens zwei Punkte an. |
| Eine Fläche braucht mindestens drei Punkte. | Zu wenige Ecken. | Klicken Sie mindestens drei Ecken an. |
| Der Umriss kreuzt sich selbst, daher wäre seine Fläche falsch. Zeichnen Sie ihn ohne Kreuzung neu. | Eine Form wie eine Acht. | Zeichnen Sie sie als zwei Flächen, oder fahren Sie der Reihe nach am Rand entlang. |
| Diese Punkte umschließen keine Fläche. | Alle Punkte liegen auf einer Linie. | Klicken Sie Ecken an, die einen Raum umschließen. |
| Wählen Sie zuerst eine Flächenmarkierung (Werkzeug {{ui:Auswählen}}), dann {{ui:Aussparung}}, und zeichnen Sie die Öffnung darin. | {{ui:Aussparung}} braucht eine ausgewählte Fläche. | Drücken Sie {{key:V}}, klicken Sie die Fläche an, dann {{key:X}}. |
| Eine Aussparung muss ganz innerhalb der Fläche liegen. | Die Öffnung kreuzt den Umriss oder verlässt ihn. | Zeichnen Sie die Öffnung innerhalb der Fläche. |
| Aussparungen dürfen sich nicht überlappen. | Zwei Öffnungen überlappen sich. | Zeichnen Sie eine Öffnung um beide, oder halten Sie sie getrennt. |
| … Der Punkt wurde zurückgesetzt. | Eine gezogene Ecke würde den Umriss sich selbst kreuzen lassen oder eine Öffnung nach außen schieben. | Ziehen Sie an eine Stelle, die die Form gültig hält. |
| Klicken Sie einen Punkt am Kreisrand an, abseits des Mittelpunkts. | Der zweite Klick war zu nah am Mittelpunkt. | Klicken Sie weiter außen. |
| Klicks verschieben das Blatt, statt Punkte hinzuzufügen | Der Zeiger hat sich bei gedrückter Taste mehr als einige Pixel bewegt; das gilt als Ziehen. | Klicken Sie ohne Bewegung, besonders auf einem Trackpad. |
| {{key:Shift}} rastet nicht ein | Sie setzen einen Punkt auf einem Bogen oder zeichnen einen Kreis. | Der 45°-Fang gilt nur für gerade Abschnitte. |
| Punkte springen auf eine nahe Linie | Der Fang auf die Linien der Zeichnung ist eingeschaltet. | Zoomen Sie hinein, um zwischen Linien zu klicken, oder drücken Sie {{key:F3}}, um den {{ui:Fang}} auszuschalten. |
| Keine Fangmarkierung erscheint | {{ui:Fang}} ist aus, das Blatt ist ein Scan, oder das Werkzeug fängt nicht ein ({{ui:Zählen}}, {{ui:Auto-Zählen}}, Einfügen). | Drücken Sie {{key:F3}}. Bei einem Scan gibt es keine Linien zum Einrasten. |
| Die Länge stimmt nicht | Der Maßstab ist falsch (oft eine skalierte PDF mit einer Voreinstellung). | Verwenden Sie {{ui:Prüfen}} an einem bekannten Maß, dann {{ui:Kalibrieren}}. |

## Maßstab

| Meldung oder Symptom | Ursache | Lösung |
|---|---|---|
| Wählen Sie zwei Punkte, die weiter auseinanderliegen. | Die Kalibrierpunkte liegen fast aufeinander. | Kalibrieren Sie an einem längeren Maß. |
| Eine Meldung im Kalibrierdialog, etwa „Diese Strecke konnte nicht gelesen werden“ | Die Strecke steht in einer Form, die TakeoffCraft nicht lesen kann. | Siehe [Eingabe von Länge, Satz und Prozent](topic:entry-formats). |
| Dieses Blatt hat noch keinen Maßstab, daher gibt es nichts zu prüfen. Kalibrieren Sie es oder wählen Sie eine Voreinstellung. | {{ui:Prüfen}} auf einem Blatt ohne Maßstab. | Legen Sie zuerst einen Maßstab fest. |
| Die Liste {{ui:Voreinstellung}} ist ausgegraut | Es ist kein Blatt geöffnet. | Öffnen Sie eine PDF. |

## Mengen und Formeln

| Meldung oder Symptom | Ursache | Lösung |
|---|---|---|
| Unvollständig: … (nicht in den Summen) | Ein Formelfehler oder Markierungen auf Blättern ohne Maßstab. | Siehe [Mengen und Kalkulation lesen](topic:read-quantities#the-incomplete-warning). |
| +(n) ohne Maßstab neben einer Position | Einige ihrer Markierungen liegen auf Blättern ohne Maßstab. | Geben Sie diesen Blättern einen Maßstab. |
| Formelfehler: … | Die Formel kann nicht berechnet werden. | Siehe [Formelsprache](topic:formulas#errors). |
| Diese Position hat Markierungen, daher kann ihr Typ nicht geändert werden. | Der Typ ist gesperrt, sobald es Markierungen gibt. | Legen Sie eine neue Position des anderen Typs an und zeichnen Sie die Markierungen damit neu. |
| Eine Position braucht einen Namen. | Das Namensfeld wurde geleert. | Geben Sie einen Namen ein. |
| Geben Sie einen Betrag wie 12.50 ein. / Geben Sie einen Prozentwert wie 10 oder 7.5 ein. | Ein Satz oder Verschnitt konnte nicht gelesen werden. | Siehe [Eingabe von Länge, Satz und Prozent](topic:entry-formats). |
| Eine Summe wirkt doppelt | Die Position hat eigene Sätze und Bestandteile, die dieselben Kosten tragen. | Setzen Sie die eigenen Sätze der Position auf 0, wenn ihre Bestandteile die Kosten tragen. |
| Die Markierungen dieser Position liegen auf PDFs, die nicht geöffnet sind. | Sie haben eine Position angeklickt, deren Markierungen alle auf PDFs liegen, die Sie nicht geöffnet haben. | Öffnen Sie diese PDFs. Ihre Namen stehen unter {{ui:Blätter}}. |

## Auto-Zählen

| Meldung oder Symptom | Ursache | Lösung |
|---|---|---|
| Dieser Rahmen ist zu klein. Zeichnen Sie ihn um das ganze Symbol. | Der Rahmen ist winzig. | Zoomen Sie hinein und umrahmen Sie das ganze Symbol. |
| Dieser Rahmen ist fast leer. Zeichnen Sie ihn um ein Symbol. | Der Rahmen enthält nur Papier. | Umrahmen Sie das Symbol selbst. |
| Keine Treffer. Senken Sie den Regler {{ui:Übereinstimmung}} oder umrahmen Sie das Symbol enger. | Nichts hat genug Punkte erreicht. | Umrahmen Sie das Symbol eng, oder ziehen Sie den Regler {{ui:Übereinstimmung}} weiter nach unten. |
| Zu viele Treffer, darunter falsche Symbole | Ähnliche Symbole erreichen nahe an das echte Symbol heran. | Erhöhen Sie den Regler {{ui:Übereinstimmung}} und klicken Sie falsche Rahmen an, um sie abzulehnen. |
| Treffer fehlen auf anderen Blättern | Diese Blätter zeichnen das Symbol in anderer Größe oder in einem Winkel, der kein 90°-Schritt ist. | Durchsuchen Sie diese Blätter mit einem dort gezeichneten Rahmen, oder zählen Sie von Hand. |
| (n) Blätter waren zu groß, um bei dieser Symbolgröße durchsucht zu werden. | Das Blatt wäre bei der Arbeitsgröße zu groß. | Umrahmen Sie ein größeres Symbol, oder zählen Sie dieses Blatt von Hand. |
| Die Suche ist fehlgeschlagen: … | Die Suche im Hintergrund wurde beendet. | Versuchen Sie es erneut. Laden Sie die Seite neu, falls es sich wiederholt (speichern Sie vorher). Offline funktioniert es nur, wenn die App-Leiste {{ui:Offline bereit}} anzeigt. |
| Ziehen zeichnet einen Rahmen statt zu verschieben | So arbeitet {{ui:Auto-Zählen}}. | Halten Sie {{key:Space}} und ziehen Sie, oder ziehen Sie mit der mittleren Maustaste. |

## Speichern und Exportieren

| Meldung oder Symptom | Ursache | Lösung |
|---|---|---|
| Noch nichts zu exportieren: Legen Sie eine Position an und ermitteln Sie sie. | Es gibt keine Positionen. | Legen Sie zuerst eine Position an. |
| Noch keine Markierungen auf den geöffneten PDFs. | {{ui:Markiertes PDF}} hat auf den geöffneten PDFs nichts zu zeichnen. | Öffnen Sie die PDFs, die Markierungen haben. |
| Diese PDF ist passwortgeschützt oder verschlüsselt, daher kann keine markierte Kopie geschrieben werden. … | Die PDF ist verschlüsselt. | Exportieren Sie stattdessen {{ui:XLSX}}, oder verwenden Sie eine unverschlüsselte Kopie der PDF (sie braucht dann eine eigene Mengenermittlung, da es eine andere Datei ist). |
| Das markierte PDF konnte nicht geschrieben werden: … | Oft: offline, und die App wurde nicht für Offline gespeichert, daher fehlt der PDF-Schreiber. | Gehen Sie online und wählen Sie {{ui:Markiertes PDF}} erneut. Um es zu vermeiden, wählen Sie {{ui:Für Offline speichern}} und warten Sie auf {{ui:Offline bereit}}. |
| Nur ein markiertes PDF wurde heruntergeladen | Der Browser hat mehrere Downloads gleichzeitig blockiert. | Erlauben Sie mehrere Downloads für diese Seite und exportieren Sie erneut. |
| (file) ist kein TakeoffCraft-Projekt (es ist kein gültiges JSON). / Dies ist keine TakeoffCraft-Projektdatei. | Falsche oder beschädigte Datei. | Wählen Sie die Datei `.takeoff.json`. |
| Dieses Projekt wurde mit einer neueren Version von TakeoffCraft gespeichert. Öffnen Sie es dort. | Die Datei stammt aus einer neueren Version. | Öffnen Sie sie in der neueren Version. |
| (n) Markierungen waren beschädigt und wurden ausgelassen. | Ein Teil der Datei war beschädigt oder wurde von Hand bearbeitet. | Der Rest wurde geöffnet. Zeichnen Sie die fehlenden Markierungen neu, oder öffnen Sie eine ältere Kopie. |
| Markierungen fehlen nach dem erneuten Öffnen | Die PDFs sind nicht geöffnet, oder eine von ihnen hat sich geändert. | Siehe [Mengenermittlung speichern und erneut öffnen](topic:save-and-reopen#when-a-pdf-has-changed). |
| Der Browser fragt „Seite verlassen?“ | Es gibt nicht gespeicherte Änderungen. | Bleiben Sie und speichern Sie mit {{key:Mod+S}}. |

## Tasten und Maus

| Symptom | Ursache | Lösung |
|---|---|---|
| Buchstabentasten bewirken nichts | Der Cursor steht in einem Feld (Suche, Positionseditor, Tabelle). | Klicken Sie auf das Blatt oder drücken Sie {{key:Tab}}, um das Feld zu verlassen. |
| Das Mausrad zoomt statt zu scrollen | Das Mausrad zoomt das Blatt immer. | Ziehen Sie zum Verschieben. |
| Die ganze Seite ist größer oder kleiner geworden | Browserzoom ({{key:Mod+Plus}} oder {{key:Mod+Minus}}). | Drücken Sie {{key:Mod+0}}. Zoomen Sie das Blatt mit dem Mausrad oder den einzelnen Tasten {{key:Plus}} und {{key:Minus}}. |
| Eine Markierung verschwand, als ich {{key:Backspace}} drückte | {{key:Backspace}} löscht die ausgewählte Markierung, wenn Sie nicht zeichnen. | {{key:Mod+Z}} holt sie zurück. |
| Rechtsklick beendet auf dem Mac nicht | Ein Ctrl-Klick kommt als normaler Klick an. | Verwenden Sie einen Zwei-Finger-Klick mit eingeschaltetem Sekundärklick, oder drücken Sie {{key:Enter}}. |

## Touchscreens

Auf einem Touchscreen:

- **Tippen** setzt einen Punkt (oder wählt mit {{ui:Auswählen}} eine Markierung aus). Ein Finger, der zieht, verschiebt.
- **Zwei Finger** ziehen zusammen oder auseinander, um um den Punkt zwischen ihnen zu zoomen, und verschieben, wenn sie sich gemeinsam bewegen. Setzen Sie einen zweiten Finger auf, wird abgebrochen, was der erste begonnen hat, sodass ein Zoom nie einen Punkt hinterlässt.
- **Beenden** Sie eine Strecke oder einen Umriss mit einem **langen Drücken** (dem Rechtsklick), einem **Doppeltippen** oder mit {{ui:Fertig}} in der Leiste unten am Blatt. Dieselbe Leiste hat {{ui:Hinten}} (den letzten Punkt zurücknehmen) und {{ui:Abbrechen}}. Flächen schließen sich außerdem, wenn Sie den ersten Punkt antippen.
- Finger haben größere Ziele: Punkte rasten ein, schließen sich und werden aus größerer Entfernung gewählt, und die Eckgriffe sind größer.

Das Eingeben von Längen braucht eine Tastatur. Die Bildschirmtastatur funktioniert, wenn das Feld {{ui:Eingabe}} den Fokus hat.

Auf einem Tablet machen eine Tastatur und eine Maus oder ein Trackpad die Mengenermittlung viel einfacher.

## Offline arbeiten

| Schaltfläche oder Symptom | Ursache | Lösung |
|---|---|---|
| {{ui:Speichern nicht möglich}} | Einige Dateien der App wurden beim Speichern für die Offline-Nutzung nicht heruntergeladen. | Prüfen Sie Ihre Verbindung und wählen Sie die Schaltfläche erneut. |
| {{ui:Offline nicht verfügbar}} | Private Fenster und einige verwaltete Computer blockieren Offline-Kopien. | Verwenden Sie ein normales Fenster oder einen anderen Browser. |
| „Speichern…“ startet nie | Sie sind offline; Speichern braucht eine Verbindung. | Speichern Sie online. |
| Die App ist nach einem Update veraltet | Die Offline-Kopie stammt von einem früheren Tag. | Wählen Sie online {{ui:Offline bereit}} und dann {{ui:Erneut speichern (neueste Version holen)}}. |
| Sie wollen den Speicherplatz zurück | Die Offline-Kopie ist etwa 6 MB groß. | Wählen Sie {{ui:Offline bereit}} und dann {{ui:Offline-Kopie entfernen}}. |

Siehe [Offline arbeiten](common:offline).

## Immer noch Probleme

Laden Sie die Seite neu, wenn die App nicht mehr reagiert. Ihre Mengenermittlung geht beim Neuladen verloren, sofern Sie sie nicht gespeichert haben. Speichern Sie deshalb möglichst vorher mit {{key:Mod+S}}. Bei Fragen zum Browser siehe [Browser und Computer](common:browsers).
