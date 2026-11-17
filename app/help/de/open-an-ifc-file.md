---
title: Mengen aus einer IFC-4.3-Datei übernehmen
summary: Eine IFC-4.3-Datei einer Straße, Bahn, Brücke oder von Erdarbeiten öffnen und eine Zählung je Klasse erhalten, mit den Längen, Flächen und Volumen, die die Datei angibt, als typisierte Mengen.
keywords: ifc, ifc4x3, ifc 4.3, Straße, Bahn, Brücke, Befestigung, Bordstein, Schicht, Erdarbeiten, Lager, Infrastruktur, Mengen, bim, civil, typisierte Mengen
from: 6b08c2c4
---

Eine IFC-4.3-Datei kann Straßen, Bahnen, Brücken, Wasserbauwerke und deren Teile enthalten: Befestigungen, Schichten, Bordsteine, Schienen, Erdarbeiten, Lager, Pfähle und mehr. TakeoffCraft liest sie und macht daraus typisierte Mengen, die Sie bepreisen können.

## Die Datei öffnen

1. Wählen Sie {{ui:PDFs öffnen}} in der Gruppe {{ui:Datei}} oder drücken Sie {{key:Mod+O}}.
2. Wählen Sie die IFC-Datei (Sie können sie zusammen mit PDFs wählen) oder ziehen Sie sie auf TakeoffCraft.

Für jede Klasse und jeden vordefinierten Typ wird eine typisierte Menge erstellt, zum Beispiel „Befestigung (flexibel): Zählen“, und, wenn die Datei sie angibt, „Länge“ in m, „Fläche“ in m² und „Volumen“ in m³. Die Notiz an jeder Position sagt, wie viele Elemente gezählt wurden und wie viele keine Menge angaben. Das Öffnen einer neueren Datei mit demselben Namen aktualisiert diese Mengen, statt weitere hinzuzufügen.

## Was sie nicht tut

- Sie liest die Mengensätze (IfcElementQuantity), die die Datei enthält. Sie misst die 3D-Formen nicht; ein Element ohne Mengensatz wird gezählt, trägt aber keine Länge, Fläche oder kein Volumen bei.
- Nur die Infrastrukturklassen von IFC 4.3 werden gelesen. Eine Gebäudedatei (Wände, Türen, Decken) wird hier nicht in Mengen umgewandelt; eine Datei, die nicht IFC 4.3 ist, meldet das und übernimmt nichts.
- Die Einheiten sind die der Datei, umgerechnet in Meter.
