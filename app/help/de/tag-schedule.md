---
title: Eine Tag-Liste als Mengen übernehmen
summary: Eine aus dem Gebäudemodell exportierte Tag-Liste (CSV) wird zu typisierten Mengen in der Mengenermittlung, eine je Tag, sodass die Zählungen und Flächen des Modells neben dem stehen, was Sie gemessen haben.
keywords: Tags, Tag-Liste, Gebäudemodell, BimCraft, IFC, Mengen, csv, Liste, Import, typisierte Menge
from: a60c19b6
---

{{ui:Tags}} in der Symbolleiste übernimmt eine Tag-Liste, die BimCraft als CSV-Datei gespeichert hat. Jeder unterschiedliche Tag wird zu einer typisierten Menge, derselben Art, zu der die Ab- und Auftragsmengen von CivilCraft werden.

1. Erstellen Sie in BimCraft die gewünschte Tag-Liste und speichern Sie sie als CSV-Datei.
2. Wählen Sie {{ui:Tags}} und die Datei.
3. Legen Sie fest, welche Spalte die Zeile benennt ({{ui:Zeile benennen nach}}, meist der Tag) und welche die Zahl enthält ({{ui:Menge aus}}). Mit {{ui:Zeilen zählen}} zählt jede Zeile als eins.
4. Wählen Sie die Einheit. Eine Länge in Millimetern wird mit {{ui:Multiplizieren mit}} 0.001 zu Metern.
5. {{ui:Mengen hinzufügen}}.

Zeilen mit demselben Tag werden addiert. Eine Zelle, die keine Zahl ist, bleibt außen vor und wird in der Zusammenfassung gezählt. Wenn Sie dieselbe Liste erneut übernehmen, werden die bereits vorhandenen Mengen aktualisiert, statt weitere hinzuzufügen. Ihre Namen, Sätze und Ihr Verschnitt bleiben erhalten.

## Gut zu wissen

Eine typisierte Menge wird nicht auf einem Blatt gemessen und hat daher keine Markierungen. Nichts wird irgendwohin gesendet; die Datei wird hier gelesen.
