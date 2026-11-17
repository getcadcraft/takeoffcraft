---
title: TakeoffCraft-Einstellungen
summary: Zoll bis 1/16, 1/8 oder 1/4 anzeigen, neue Positionen mit einem Verschnittprozentsatz beginnen, festlegen, wo der Schieberegler für Auto-Zählen startet, an den Linien der Zeichnung oder auf 45° einrasten, ohne Shift zu halten, festlegen, wie breit eine Tür sein darf, damit die Raumfüllung sie schließt, und den Eckindikator der 3D-Ansicht wählen.
keywords: Einstellungen, Voreinstellungen, Optionen, Genauigkeit, Brüche, Zoll, Rundung, Verschnitt, Standardverschnitt, Auto-Zählen, Schwelle, Übereinstimmung, Schieberegler, Fang, 45, Winkel, Shift, ViewCube, Achsensymbol, Eckindikator, 3D
from: bca3f0ed
---

Öffnen Sie {{ui:Einstellungen}} mit dem Zahnrad in der App-Leiste oder mit {{key:Mod+,}}. Der erste Reiter, {{ui:TakeoffCraft}}, enthält die Einstellungen, die zu dieser App gehören; {{ui:Allgemein}} enthält jene, die alle CadCraft-Apps gemeinsam nutzen (Design, Bereiche, Symbolleiste). Die Einstellungen von TakeoffCraft gelten nur in der App: Sie ändern sie hier, und dieser Browser merkt sie sich. {{ui:TakeoffCraft-Einstellungen zurücksetzen}} setzt sie auf den Anfangszustand zurück.

## Fuß und Zoll

Zeigen Sie Längen auf die nächsten **1/16"** (Anfangswert), **1/8"** oder **1/4"** gerundet an. Das ändert, wie Längen auf dem Blatt, in den Bereichen, in den Mengen und in der Statusleiste gelesen werden.

Nur die Anzeige wird gerundet. Mengen, Kosten und Exporte werden aus den genauen Längen berechnet, und die Exporte zeigen immer 1/16".

## Anfänglicher Verschnitt

Der Verschnittprozentsatz, mit dem jede neue Position beginnt: 0 % (Anfangswert), 2 %, 3 %, 5 %, 7.5 %, 10 %, 15 % oder 20 %. Sie können für jede Position weiterhin einen anderen Verschnitt eingeben, im Positionseditor oder direkt in der Mengentabelle. Vorhandene Positionen behalten ihren eigenen Verschnitt.

## Auto-Zählen: wo der Schieberegler für die Übereinstimmung startet

Wo der Schieberegler {{ui:Übereinstimmung}} steht, wenn eine Suche mit [Auto-Zählen](topic:auto-count) endet, von 50 % bis 95 %; 75 % ist der Anfangswert. Niedriger bietet Ihnen mehr ähnliche Treffer zum Ablehnen; höher bietet weniger. Sie können den Schieberegler während jeder Prüfung weiterhin verschieben.

## An den Linien der Zeichnung einrasten

Am Anfang an. Während Sie messen oder kalibrieren, springt ein Punkt nahe einer Linie des PDFs zu deren Ende, deren Mitte, einem Kreuzungspunkt oder dem nächsten Punkt darauf. {{key:F3}} und {{ui:Fang}} in der Statusleiste schalten sie ebenfalls ein und aus. Mehr: [An den Linien der Zeichnung einrasten](topic:snap-to-the-drawing).

## Raumfüllung: wie breit eine Öffnung geschlossen wird

{{ui:Raumfüllung schließt Öffnungen bis}} legt fest, wie breit eine Türöffnung oder Lücke sein darf, damit das Werkzeug {{ui:Raum}} sie als geschlossen behandelt: von 3'-0" bis 8'-0", Anfangswert 4'-0". Breiter als Ihre breiteste Tür lässt einen Raum in den nächsten übergehen; schmaler als eine Tür lässt den Raum offen. Siehe [Einen Raum mit einem Klick füllen](topic:measure-areas#fill-a-room-with-one-click).

## Auf 45° einrasten, ohne Shift zu halten

Am Anfang aus. Ist sie an, gehen Strecken, Umrisse, Aussparungen und gezogene Ecken ohne Halten von {{key:Shift}} auf 0°, 45°, 90° oder 135° vom letzten Punkt aus; halten Sie {{key:Shift}}, um in jedem Winkel zu klicken. Die Statusleiste zeigt dann „Rastet auf 45° ein; Shift gibt den Winkel frei“. Der Punkt, den Sie auf der Bogenkurve anklicken, und Kreise rasten nie ein; das Ende eines Bogens rastet ein.

## Größe der Zählmarkierung

Wie groß die Zählpunkte sind: {{ui:Sehr klein}}, {{ui:Klein}}, {{ui:Mittel}} (Anfangswert: die Größe, die die Punkte immer hatten) oder {{ui:Groß}}. Die Größe bleibt auf dem Bildschirm bei jeder Zoomstufe gleich, und das markierte PDF zeichnet jeden Punkt auf dem Papier in derselben Größe, unabhängig von der Blattgröße, sodass das PDF bei 100 % so aussieht wie der Bildschirm. Mehr: [Von Hand zählen](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Eckindikator

Nur für die [3D-Prüfansicht](topic:check-in-3d): {{ui:ViewCube}} (Anfangswert: ein Würfel oben rechts, den Sie anklicken, ziehen und drehen können), {{ui:Achsensymbol}} (eine kleine X-, Y-, Z-Markierung unten rechts) oder {{ui:Keine}}. Die Änderung wirkt sofort und wird in diesem Browser gespeichert. Das flache Blatt zeigt nie einen.

## Pfadwerkzeug: die größte Lücke, die es verbindet

{{ui:Pfadwerkzeug: größte Lücke zum Verbinden}} ist, wie weit zwei Linienenden auseinanderliegen dürfen und trotzdem als ein Pfad gelten, in PDF-Punkten (0.05 bis 60; Anfangswert 1.5). Die Linien einer Zeichnung enden oft einen Hauch voreinander. Größer verbindet mehr; kleiner hält Linien getrennt. {{key:[}} und {{key:]}} ändern ihn, während Sie auswählen, und dieses Feld folgt. Siehe [Linien auswählen](topic:pick-the-lines).
