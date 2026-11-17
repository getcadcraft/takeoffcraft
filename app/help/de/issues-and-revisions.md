---
title: Ausgaben, Revisionen und Änderungsprotokoll der Zeichnungen
summary: Führen Sie einen Ausgabeverlauf mit dem Modell des Architekten: Lesen Sie die Ausgaben ein, erfassen Sie Bauanweisungen, Werkstattzeichnungen und verknüpfte Modelle zu einer Ausgabe und lesen Sie das Änderungsprotokoll der Zeichnungen.
keywords: Ausgabe, Revision, Revisionen, Änderungsprotokoll, Zeichnungsänderungsprotokoll, Planregister, Bauanweisung, Werkstattzeichnung, verknüpftes Modell, Ausschreibung, Bau, Ausgabeverlauf, Leistungsverzeichnis, Ermittlung
from: 8d8f6e68
---

## Was Sie tun

Arbeiten Sie mit demselben Ausgabeverlauf wie das restliche Team. Sehen Sie, welche Blätter in welcher Revision herausgegeben wurden, und ordnen Sie das, was auf der Baustelle passiert, der Ausgabe zu, zu der es gehört.

## Schritte

1. Öffnen Sie **Ausgaben und Revisionen**.
2. Wählen Sie **Ausgabeverlauf einlesen** und die Datei `.issues.json`, die aus BimCraft oder einer anderen App gespeichert wurde. Ihre Ausgaben und Einträge werden hinzugefügt. Nichts wird ersetzt.
3. Wählen Sie **Eintrag hinzufügen** für eine Bauanweisung, eine Werkstattzeichnung, einen Markierungssatz, ein verknüpftes Modell oder eine Notiz. Wählen Sie die Ausgabe, zu der er gehört, und seinen Status. Eine Datei, die Sie wählen, wird mit Name, Größe und SHA-256 erfasst; die Datei bleibt, wo sie ist.
4. **Änderungsprotokoll** zeigt eine Zeile für jedes Blatt und eine Spalte für jede Ausgabe. Eine Revision in Klammern wurde unverändert erneut herausgegeben.
5. **Änderungsprotokoll herunterladen (CSV)** speichert die Ausgaben, die Blatttabelle und die Einträge. **Ausgabeverlauf speichern** schreibt eine Datei, die die anderen Apps lesen.

## Gut zu wissen

- **Ausgabe erfassen** gibt Ihre aufgemessenen Blätter aus, zum Beispiel mit einem Leistungsverzeichnis. **Änderungen seit** zeigt dann, welche Blätter nach dieser Ausgabe erneut aufgemessen wurden.
- Der Verlauf wird in der Ermittlungsdatei gespeichert. Jede Änderung ist ein Rückgängig-Schritt.
- Wenn Sie dieselbe Datei zweimal einlesen, wird nichts doppelt hinzugefügt. Enthalten zwei Kopien denselben Eintrag, bleibt der neuere erhalten.
