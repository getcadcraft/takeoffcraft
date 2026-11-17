---
title: Was noch nicht umgesetzt ist
summary: Mengenermittlungs-Funktionen, die dieser Build nicht hat, und was Sie stattdessen heute tun können.
keywords: Grenzen, fehlend, noch nicht, Roadmap, geplant, Behelf, pro Strecke, Cloud, Desktop
from: 94ff90d0
---

TakeoffCraft befindet sich in der Entwicklung. Diese Liste zeigt, was der aktuelle Build nicht kann und wie Sie die Aufgabe trotzdem erledigen.

## Messen

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Einen Punkt in der Mitte einer Strecke oder eines Umrisses einfügen | Die Markierung löschen und neu zeichnen. |
| Auswahl per Rahmen (Fenster) | {{key:Shift}} + Klick auf jede Markierung oder {{key:Mod+A}} für alle Markierungen des Blatts. Siehe [Markierungen kopieren, einfügen und duplizieren](topic:copy-paste). |
| Eine eingefügte Kopie drehen, spiegeln oder skalieren | Auf einem Blatt im selben Maßstab und in derselben Ausrichtung einfügen; den Rest von Hand zeichnen. |
| Einen Maßstab von einem gescannten Blatt oder aus einer grafischen Maßstabsleiste lesen | Eine Voreinstellung wählen oder an der Länge der Leiste {{ui:Kalibrieren}}. |
| Mehr als ein Maßstab je Blatt (Detailbereiche, vergrößerte Pläne) | Den Teil im Maßstab des Blatts messen und, falls der Satz ein solches hat, den Detailbereich auf seinem eigenen vergrößerten Blatt erfassen. |

## Positionen und Preise

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Montageformeln, die die anderen Markierungsarten einer Position verwenden (die Türen einer Raumposition in den Formeln ihres Geschosses) | Formeln verwenden die Summen der Hauptart; die anderen Arten in eigenen Zeilen bepreisen. |
| Montageformeln, die je Strecke berechnet werden | Formeln verwenden die Summen der Position; für Zusatzanteile je Strecke `N` verwenden. |
| Formeln, die die Mengen einer anderen Position verwenden | Die Messung in dieser Position wiederholen oder im Tabellenexport berechnen. |
| Kolonnen bei Montagekomponenten oder ein anderer Arbeitstag als 8 Stunden | Die Kolonne der Position zuweisen; Kolonnentage bei einer anderen Tageslänge als Kolonnenstunden ÷ Ihr Tag ablesen. |
| Markierungen außer Notizen, Wolken und Hervorhebungen (Pfeile, Bemaßungen, Stempel) oder Antworten auf eine Notiz | Im Text der Notiz festhalten; ihren Status ändern, sobald er geklärt ist. |
| Eine Preisbibliothek, die ein Team teilt oder mit Ihrem Konto speichert | Die Bibliothek wird in diesem Browser gehalten: als CSV exportieren und auf dem anderen Computer importieren. |
| Gewerkepakete, die von erfahrenen Kalkulatoren geprüft wurden | Jedes Paket ist ein Startpunkt: Prüfen Sie seine Annahmen gegen Ihre Baustelle und Ihre Produkte, bevor Sie damit bepreisen. Siehe [Gewerkepakete](topic:trade-packs). |
| Preise in Gewerkepaketen | Pakete enthalten nur Montagen: Legen Sie Ihre eigenen Sätze fest oder importieren Sie Ihre Preisliste als CSV. |
| Die Mengenermittlung umbenennen | Der Name stammt von der ersten PDF; benennen Sie die heruntergeladenen Dateien um. |
| Blätter von Hand benennen | Blätter erhalten ihren Namen aus den Seitenbeschriftungen der PDF; suchen Sie nach Dateiname und Seite. |

## Zeichnungen (DWG und DXF)

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Plotstiltabellen, Stiftzuweisungen und CTB-Dateien auf den Blättern einer Zeichnung | Eine Zeichnung wird schwarz gezeichnet oder in ihren Farben für Papier abgedunkelt; Linienstärken stammen aus der Zeichnung. |
| Öffnen einer binären DXF oder einer DWG älter als AutoCAD 2000 | Als ASCII-DXF oder neuere DWG speichern. |
| Eine externe Referenz (Xref) anhand des Ordners finden, in dem sie liegt | Auch die verknüpfte Zeichnung zusammen mit der Hauptzeichnung öffnen: Sie wird anhand des Dateinamens unter den geöffneten Dateien gefunden. |
| 3D-Polylinien, Netze, Volumenkörper und Regionen messen | Nach Layer und Typ zählen oder den Grundriss mit den Werkzeugen {{ui:Linear}} und {{ui:Fläche}} messen. |
| Text in einer markierten PDF aus einer Zeichnung in anderen als lateinischen Schriften | Zeichen, für die Helvetica keine Glyphe hat, erscheinen in der markierten PDF als „?“; die Zeichnung auf dem Bildschirm bleibt unverändert. |
| Eine Übergabe einer Zeichnung an eine andere App aus der Blattleiste | Dieselbe Datei in dieser App öffnen. |
| Eine Zeichnung, die die Mengenermittlung in sich trägt, wie {{ui:PDF mit der Mengenermittlung darin}} es für PDFs tut | {{ui:Ermittlung speichern}}: Die `.takeoff.json` öffnet sich auf derselben Zeichnung wieder, gefunden anhand ihres Inhalts. |
| PDF-Unterlagen, Bilder und OLE-Objekte, die in einer Zeichnung platziert sind, messen oder zählen | Bilder werden nur als Rahmen angezeigt. Die PDF-Unterlage selbst als Blatt öffnen. |

## Auto-Zählen

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Symbole auf einem Blatt finden, dessen Maßstab nicht in anderer Größe gezeichnet ist | Dem Blatt seinen Maßstab geben oder es mit einem dort gezeichneten Rahmen durchsuchen. |
| Gespiegelte Symbole finden | Diese von Hand zählen oder mit einem Rahmen um ein gespiegeltes Symbol erneut suchen. |

## Dateien und Freigabe

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Eine PDF, die sowohl die Markierungen zeigt als auch die Mengenermittlung trägt | {{ui:Markiertes PDF}} für Personen, die die Markierungen sehen sollen; {{ui:PDF mit der Mengenermittlung darin}}, um sie in TakeoffCraft wieder zu öffnen. |
| Eine CSV der Mengen je Blatt oder der Markierungen | {{ui:XLSX}} verwenden: Die Arbeitsblätter „Nach Blatt“ und „Markierungen“ enthalten sie. |
| Cloud-Speicherung | Noch nicht verfügbar. Projektdateien auf Ihrem Computer speichern und sichern. |
| Eine eigene TakeoffCraft-Desktop-App | Ab 0.5 ist die Desktop-App CadCraft Studio, mit allen acht Apps in einer Installation. TakeoffCraft läuft auch im Browser. |

## Bildschirm und Eingabe

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Ein Kontextmenü per Rechtsklick (oder langem Drücken) | Die Symbolleiste, die Bereiche und die Tasten verwenden. Ein langes Drücken beendet eine Strecke oder einen Umriss. |
| Die Ansicht drehen | Seiten, die in der PDF gedreht sind, erscheinen bereits aufrecht. |

## 3D-Ansicht

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Markierungen in 3D zeichnen oder bearbeiten | Zurück zum Blatt ({{key:3}}) wechseln, um zu zeichnen; Auswählen und Löschen funktionieren in 3D. |
| Übereinanderliegende Geschosse ausrichten, die auf ihren Seiten an verschiedenen Stellen gezeichnet sind | Nur Geschosse übereinanderstapeln, die gleich gezeichnet sind; die anderen Blatt für Blatt prüfen. |
| Pfosten zählen, deren Größe dem gezählten Objekt entspricht | Jeder Pfosten auf einem Blatt hat dieselbe Größe; er markiert, wo gezählt wird, nicht was gezählt wird. |

## Angebote

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Nachträge zu einem bereits versandten Paket, Zuschlagsschreiben, ein Leistungsumfang-Blatt, das jeder Bieter unterzeichnet | Ein neues Paket senden und den Zuschlag selbst schreiben. [Ein Paket für Angebote senden](topic:bid-invitations) beschreibt, was umgesetzt ist. |
| Angebotseinladungen von jedem Konto versenden: Solange sie getestet wird, ist E-Mail an externe Bieter ausgeschaltet, außer für Konten, die das CadCraft-Team freigeschaltet hat | {{ui:Leistungsumfang-CSV}} herunterladen, selbst per E-Mail senden und die Angebote eintragen. |
| Angebotspakete aus einem Studio-Fenster senden | Im Browser aus TakeoffCraft senden. |
| Den Angebotsbereich einer Alternativposition mit einem gewählten Angebot neu bepreisen | Alternativpositionen und Zwischensummen der Angebotsbereiche verwenden Ihre eigenen Preise; die Alternative von Hand anpassen. |
| Automatische Erinnerungen vor Ablauf des Versicherungs- oder Lizenzdatums eines Nachunternehmers | Das Datum wird auf der Seite Nachunternehmer markiert, sobald es überschritten ist oder innerhalb von 30 Tagen liegt; beim Einladen prüfen. |

## Bereiche

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Die Tabelle {{ui:Mengen}} verschieben | Nur die Bereiche {{ui:Blätter}} und {{ui:Positionen}} lassen sich verschieben. Siehe [Bereiche anordnen](common:arrange-panels). |

## Tabellenkalkulation

Die XLSX-Arbeitsmappe wurde in LibreOffice Calc geprüft, das jede Summe auf denselben Cent wie TakeoffCraft neu berechnet hat. In Excel wurde sie noch nicht geöffnet. Zeigt ein Tabellenprogramm etwas Unerwartetes, enthält der CSV-Export dieselbe Kalkulation als reine Werte.
