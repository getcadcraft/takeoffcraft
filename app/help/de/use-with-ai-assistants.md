---
title: TakeoffCraft mit einem KI-Assistenten verwenden
summary: Lassen Sie Ihren eigenen KI-Assistenten oder Ihr Skript die Mengen und die Kalkulation der Mengenermittlung lesen, Positionen und Markierungen hinzufügen, auf einer DWG oder DXF zählen und messen sowie exportieren: Berechtigungen, Verbindung über CadCraft Studio und das Aktivitätsprotokoll.
keywords: ki, assistent, agent, mcp, model context protocol, skript, automatisierung, mengen, kalkulation, berechtigungen, trennen, aktivität
from: 7fa62ec6
---

## Was Sie hier lernen

Wie Sie einen KI-Assistenten (oder ein selbst geschriebenes Skript) mit TakeoffCraft arbeiten lassen und festlegen, was er ändern darf.

TakeoffCraft hat **keine eigene KI** und sendet nichts irgendwohin. Den Assistenten bringen Sie mit: jedes Programm, das das Model Context Protocol (MCP) spricht. TakeoffCraft stellt ihm lediglich Werkzeuge zur Verfügung, und Sie wählen aus, welche.

## Einschalten

1. Öffnen Sie {{ui:Einstellungen}} (das Zahnrad in der App-Leiste oder {{key:Mod+,}}) und wechseln Sie zur Registerkarte {{ui:TakeoffCraft}}.
2. Setzen Sie unter {{ui:Assistenten}} das Häkchen bei **KI-Assistenten und Skripte dürfen TakeoffCraft verwenden**. Bis dahin ist es ausgeschaltet.
3. Legen Sie fest, was er tun darf: **Lesen** ist zu Beginn angehakt; setzen Sie das Häkchen bei **Bearbeiten**, **Speichern** oder **Export** nur, wenn Sie sie brauchen.

Werkzeuge außerhalb der angehakten Berechtigungen werden dem Assistenten nicht angeboten. Fordert er trotzdem eines an, lehnt TakeoffCraft es ab und schreibt dies in das Aktivitätsprotokoll. Wenn Sie den Schalter ausschalten, werden alle Verbindungen sofort beendet; {{ui:TakeoffCraft-Einstellungen zurücksetzen}} schaltet ihn ebenfalls aus.

## Assistenten verbinden

Assistenten verbinden sich über **CadCraft Studio** auf Ihrem Computer: Studio startet einen kleinen Server, den nur dieser Computer erreichen kann, geschützt durch ein Token, das es bei jedem Start erzeugt. Wählen Sie in Studio {{ui:Assistenten verbinden}} und kopieren Sie die Adresse und das Token in Ihren Assistenten (Studio zeigt die genauen Einstellungen, die Sie einfügen müssen). Geben Sie das Token niemals weiter.

:::note
Ein Browser-Tab kann keine Verbindung für einen Assistenten öffnen: In den Browser-Apps hat der Schalter keine Wirkung, bis Sie CadCraft Studio auf Ihrem Computer verwenden.
:::

## Sie behalten die Kontrolle

- **Jede Änderung ist ein Schritt im Rückgängig-Verlauf**, benannt mit dem Namen des Assistenten (zum Beispiel „Assistent: …“). {{key:Mod+Z}} nimmt die letzte Änderung des Assistenten als Ganzes zurück.
- **Sie sehen, wenn einer verbunden ist.** Eine Schaltfläche in der App-Leiste nennt den Assistenten, solange er verbunden ist; klicken Sie darauf, um zu sehen, was er darf, oder um ihn mit **Trennen** zu trennen.
- **Aktivität.** {{ui:Einstellungen}} › {{ui:TakeoffCraft}} › {{ui:Assistenten}} › {{ui:Aktivität}} listet jeden Aufruf: wann, welches Werkzeug, erledigt oder abgelehnt. {{ui:Protokoll speichern}} behält eine Kopie.

## Was ein Assistent anfordern kann

| Werkzeug | Berechtigung | Was es tut |
|---|---|---|
| `app_info`, `sheets_list` | Lesen | Die geöffnete Mengenermittlung, ihre PDFs und Blätter, den Maßstab und die Markierungen jedes Blatts |
| `items_list` | Lesen | Die Positionen mit ihren Einheiten, Einheitspreisen und Formeln der Kalkulationsbausteine |
| `takeoff_quantities` | Lesen | Mengen je Position oder je Blatt; Markierungen auf Blättern ohne Maßstab werden aufgelistet, nie als null gezählt |
| `takeoff_estimate` | Lesen | Die bepreiste Kalkulation, so wie TakeoffCraft sie berechnet, mit ihren Summen |
| `takeoff_export` | Export | Der eigene CSV- oder XLSX-Export von TakeoffCraft |
| `items_add` | Bearbeiten | Fügt Positionen mit ihren Einheiten, Einheitspreisen und Verschnitt hinzu |
| `marks_add` | Bearbeiten | Misst Strecken, Flächen und Zählungen auf einem Blatt. Längen und Flächen nur auf einem Blatt mit Maßstab, nie auf einem unskalierten |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lesen | Bei einer geöffneten DWG oder DXF: ihre Blätter und Maßstäbe, was gezählt werden kann (Blöcke, Layer und Typen, Texte) sowie genaue Zählungen, so wie {{ui:CAD-Zählung}} sie erstellt ([Aus einer Zeichnung zählen](topic:count-from-a-drawing)) |
| `cad_count_add` | Bearbeiten | Zählt in der Zeichnung und setzt in einem Schritt eine Zählmarkierung auf jedes gefundene Objekt; erneutes Zählen fügt nur Neues hinzu |
| `cad_measure` | Bearbeiten | Misst eine lineare oder flächige Position aus den Linien, Bögen, Polylinien und Schraffuren der Zeichnung, so wie {{ui:Zeichnung messen}} es tut ([Aus einer Zeichnung messen](topic:measure-from-a-drawing)); nur auf einem Blatt mit Maßstab |
| `usd_export` | Export | Die gemessenen Strecken, Flächen und Zählungen eines skalierten Blatts als 3D-Prüfmodell in USD (`.usdz`, `.usda` oder `.usdc`), so wie {{ui:USD-Paket (.usdz)}} es in der 3D-Prüfansicht schreibt ([Die 3D-Prüfansicht als USD exportieren](topic:usd)) |

Mit angehakter **Bearbeiten** fügt ein Assistent Positionen und Markierungen hinzu (jeder Aufruf ist ein Schritt im Rückgängig-Verlauf); bereits vorhandene Markierungen kann er weder verschieben noch ändern oder löschen.

Dieselben Mengen und Kalkulationen sind auch ohne geöffnetes TakeoffCraft verfügbar: Der CadCraft-MCP-Server öffnet eine `.takeoff.json`-Datei in einem Ordner Ihrer Wahl (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), und `cadcraft info Job.takeoff.json` gibt sie in der Befehlszeile aus. Er öffnet außerdem eine DWG oder DXF als neue Mengenermittlung auf ihren Blättern (skaliert aus der Zeichnung, so wie TakeoffCraft es tut), zählt und misst darauf mit denselben `cad_*`-Werkzeugen, fügt Positionen hinzu und speichert die Mengenermittlung (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` zählt aus der Befehlszeile.

## Wenn etwas nicht funktioniert

- **Der Assistent sieht keine TakeoffCraft-Werkzeuge:** Prüfen Sie, ob der Schalter in diesem Fenster eingeschaltet ist und ob das Fenster in Studio geöffnet ist.
- **„needs the export permission“:** Setzen Sie unter {{ui:Assistenten}} das Häkchen bei **Export** und fragen Sie dann erneut.
- **„401“- oder „token“-Fehler:** Das Token hat sich geändert (Studio wurde neu gestartet oder {{ui:Neues Token}} wurde verwendet). Kopieren Sie das neue Token in die Einstellungen des Assistenten.

## Siehe auch

- [Rezepte für KI-Assistenten](common:assistants-recipes): ausgearbeitete Beispiele, jeweils mit den Werkzeugen, die sie aufrufen.
