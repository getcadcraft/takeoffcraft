---
title: Aus einer Zeichnung messen
summary: Übernehmen Sie Längen und Flächen aus den eigenen Linien, Bögen, Polylinien und Schraffuren der Zeichnung, indem Sie sie auswählen, mit exakten Bögen und Löchern, statt durch Klicks nachzuzeichnen.
keywords: Zeichnung messen, Geometrie, Polylinie, Bogen, Kreis, Schraffur, Ausbuchtung, exakte Länge, exakte Fläche, auswählen, Fenster, nachzeichnen, aus CAD, linear, Fläche
from: fd734246
---

{{ui:Zeichnung messen}} in der Blattleiste eines DWG- oder DXF-Blatts übernimmt die eigenen Objekte der Zeichnung als Markierungen, sodass Sie sie nicht per Klick nachzeichnen müssen. Die Länge einer Polylinie, die Länge eines Bogens, die Fläche eines Kreises und die Fläche einer Schraffur mit ihren Löchern ergeben sich exakt, nach derselben Rechnung, die die Ermittlung für jede Markierung nutzt.

## Objekte als lineare oder Flächenposition übernehmen

1. Erstellen Sie eine **lineare** oder eine **Flächen**-Position oder klicken Sie auf eine solche unter {{ui:Positionen}}. Das Blatt braucht einen Maßstab.
2. Wählen Sie {{ui:Zeichnung messen}}.
3. Klicken Sie auf die Objekte auf dem Blatt, um sie auszuwählen, oder ziehen Sie ein Fenster darum: Alles, was vollständig darin liegt, wird ausgewählt. {{key:Shift}} fügt ein Fenster zur Auswahl hinzu; klicken Sie auf ein ausgewähltes Objekt erneut, um es abzuwählen. Die Leiste zeigt die Summe: „6 Strecken: 108'-9 1/8" insgesamt.“
4. Wählen Sie die Schaltfläche zum Hinzufügen, die Anzahl und Position nennt, etwa {{ui:6 zu Edge hinzufügen}} (oder drücken Sie {{key:Enter}}). Jedes Objekt wird zu einer Markierung der Position, in einem Rückgängig-Schritt. {{key:Esc}} hebt die Auswahl auf.

## Was jede Art von Position übernimmt

- Eine **lineare** Position übernimmt Linien, Bögen, Polylinien, Kreise und Splines nach ihrer Länge. Eine geschlossene Form zählt nach ihrem Umfang. Eine Schraffur bleibt außen vor: Sie hat eine Fläche, keine Länge, und die Leiste sagt es.
- Eine **Flächen**-Position übernimmt geschlossene Formen: geschlossene Polylinien, Kreise, 2D-Volumenkörper und Schraffuren mit ihren Löchern. Offene Strecken bleiben außen vor, und die Leiste sagt es.

## Exakt und nahezu exakt

Linien, Bögen (jede Ausbuchtung), Polylinien mit Ausbuchtungen und Kreise sind exakt: Längen und Flächen nutzen den Radius und den Winkelbereich des Bogens, nicht ein Bild davon. Ellipsen, Splines und Schraffuren, deren Begrenzung aus Kanten besteht, werden in Sehnen von einem Grad oder feiner gemessen; das liegt bei Ellipsen innerhalb eines Hundertstel Prozents und bei den übrigen innerhalb eines Zehntel Prozents. Die Leiste sagt, wie viele der gewählten Objekte Kurven dieser Art sind.

## Woher es übernimmt

- **Modell**: Objekte im Modellbereich. **Ein Layout**: seine eigenen Linien und die Modellobjekte innerhalb eines Ansichtsfensters, skaliert über dieses. Ein Objekt, das den Rand eines Ansichtsfensters kreuzt, wird nicht angeboten (es würde beschnitten gedruckt); ein Objekt, das zwei Ansichtsfenster zeigen, wird nur einmal übernommen.
- Nur Layer, die das Blatt zeigt. Blöcke werden gezählt, nicht gemessen: siehe [Aus einer Zeichnung zählen](topic:count-from-a-drawing). 3D-Polylinien, Netze, Körper und Regionen werden nicht angeboten.
