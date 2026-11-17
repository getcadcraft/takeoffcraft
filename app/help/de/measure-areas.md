---
title: Flächen mit Aussparungen messen
summary: Umreißen Sie Böden, Decken und Platten, schneiden Sie Löcher heraus, fügen Sie gekrümmte Kanten, Kreise und runde Aussparungen hinzu und lesen Sie Fläche und Umfang ab.
keywords: Raumfüllung, Flutfüllung, Farbeimer, in einen Raum klicken, Auto-Fläche, Abzugsfläche, back-out, backout, Stütze, Schacht, von mehreren Positionen abziehen, Fläche, Polygon, Umriss, Quadratfuß, sf, Aussparung, Loch, Abzug, Kreis, rund, Bogen, Umfang, Boden, Decke, Platte
from: 34648db7
---

Eine Flächenposition misst die eingeschlossene Fläche. Jeder Umriss kann Löcher haben (einen Schacht, eine Stütze, einen Pflanzkübel), und seine Kanten können gerade oder gekrümmt sein.

Bevor Sie anfangen: Das Blatt braucht einen Maßstab ([Maßstab festlegen](topic:set-the-scale)), und Sie brauchen eine Flächenposition ([Ermittlungspositionen anlegen](topic:create-items)).

## Eine Fläche umreißen

1. Klicken Sie auf die Flächenposition unter {{ui:Positionen}}.
2. Wählen Sie {{ui:Fläche}} in der Symbolleiste oder drücken Sie {{key:A}}.
3. Klicken Sie nacheinander auf jede Ecke des Raums oder der Platte. Halten Sie {{key:Shift}} für Kanten bei 0°, 45° und 90°.
   Ab dem dritten Punkt füllt sich der Umriss, und die Statusleiste zeigt „Fläche“ und „Umfang“. Um den ersten Punkt erscheint ein kleiner Ring.
4. Schließen Sie den Umriss: Klicken Sie auf den ersten Punkt (innerhalb seines Rings), drücken Sie {{key:Enter}}, doppelklicken Sie oder klicken Sie mit der rechten Taste.
   Die Fläche wird in der Farbe der Position leicht gefüllt, mit ihren Quadratfuß beschriftet und wird zur ausgewählten Markierung.

{{key:Backspace}} entfernt die letzte Ecke; {{key:Esc}} verwirft den Umriss.

Ein Umriss, der sich selbst kreuzt, wird abgelehnt: „Der Umriss kreuzt sich selbst, daher wäre seine Fläche falsch. Zeichnen Sie ihn ohne Kreuzung neu.“ Zeichnen Sie eine Acht stattdessen als zwei Flächen.

## Gekrümmte Kanten

Schalten Sie beim Umreißen den Bogenmodus ein ({{ui:Bogen}} oder {{key:R}}). Klicken Sie nach einer Ecke auf einen Punkt entlang der Kurve und dann dort, wo die Kurve endet. Um den Umriss mit einer Kurve zu schließen, setzen Sie den letzten Klick auf den ersten Punkt. Fläche und Umfang nutzen die exakte Kurve. Drücken Sie {{key:R}} erneut für gerade Kanten. Um eine Kurve nachträglich zu ändern, wählen Sie die Fläche und ziehen Sie den runden Griff in der Mitte des Bogens. Siehe [Lineare Strecken messen](topic:measure-linear#arcs-and-curved-walls).

## Ein Kreis

1. Wählen Sie bei einer Flächenposition {{ui:Kreis}} oder drücken Sie {{key:O}}.
2. Klicken Sie auf den Mittelpunkt.
3. Klicken Sie auf einen beliebigen Punkt am Rand.
   Beim Bewegen zeigt die Statusleiste den Radius und die Fläche. Der Kreis wird als Flächenmarkierung mit exakter Fläche und exaktem Umfang hinzugefügt.

## Einen Raum mit einem Klick füllen

Sind die Räume als geschlossene Wände gezeichnet, nimmt {{ui:Raum}} ({{key:B}}) einen Boden mit einem Klick auf:

1. Wählen Sie eine Flächenposition (etwa einen Bodenbelag) und geben Sie dem Blatt seinen Maßstab.
2. Wählen Sie {{ui:Raum}} in der Gruppe {{ui:Ermittlung}} oder drücken Sie {{key:B}}.
3. Klicken Sie in einen Raum, auf die freie Bodenfläche (nicht auf eine Linie oder Beschriftung).

TakeoffCraft liest die Linien des Blatts, findet den Bereich um den Klick herum und umreißt ihn entlang der inneren Wandflächen, als Fläche der aktuellen Position. Türöffnungen bis **4'-0"** gelten als geschlossen, sodass der Umriss gerade über die Tür läuft; **Einstellungen › TakeoffCraft › Raumfüllung schließt Öffnungen bis** ändert diese Breite (3'-0" bis 8'-0"). Raumnamen, Möbel und Einbauten im Raum erzeugen keine Löcher.

Die Füllung lehnt ab und nennt den Grund, wenn:

- der Klick auf einer Linie liegt („Das liegt auf einer Linie“);
- der Bereich nicht geschlossen ist: Eine Öffnung, die breiter als die Einstellung ist, lässt ihn bis zum Blattrand auslaufen. Erhöhen Sie die Einstellung oder umreißen Sie diesen Raum von Hand mit {{ui:Fläche}};
- der Bereich winzig ist (ein Symbol, kein Raum).

Ist eine Tür breiter als die Einstellung, läuft die Füllung in den nächsten Raum und umreißt beide zusammen: Machen Sie es rückgängig ({{key:Mod+Z}}), erhöhen Sie die Einstellung und klicken Sie erneut. Prüfen Sie den Umriss wie jede Fläche: Ziehen Sie die Ecken, um ihn zu korrigieren. Ein gescanntes Blatt funktioniert genauso, aber seine Linien müssen dunkel genug sein; sehr helle graue Linien stoppen die Füllung möglicherweise nicht.

## Ein Loch aus einer Fläche schneiden

1. Wählen Sie {{ui:Auswählen}} ({{key:V}}) und klicken Sie auf die Fläche. Sie zeigt quadratische Griffe an ihren Ecken.
2. Wählen Sie {{ui:Aussparung}} in der Symbolleiste (oder drücken Sie {{key:X}}) oder {{ui:Aussparung hinzufügen}} unter **Ausgewählte Markierung**.
3. Klicken Sie auf die Ecken des Lochs innerhalb der Fläche. Der Bogenmodus funktioniert auch hier.
4. Schließen Sie es wie eine Fläche: Klicken Sie auf seinen ersten Punkt, drücken Sie {{key:Enter}}, doppelklicken Sie oder klicken Sie mit der rechten Taste.
   Das Loch bleibt ungefüllt, und die Statusleiste meldet „Aussparung hinzugefügt. Weitere zeichnen oder Esc drücken.“
5. Zeichnen Sie weitere Löcher in derselben Fläche oder drücken Sie {{key:Esc}}.

Für ein rundes Loch wählen Sie unter **Ausgewählte Markierung** {{ui:Runde Aussparung hinzufügen}}, klicken auf seinen Mittelpunkt und dann auf einen Punkt an seinem Rand.

Eine Aussparung muss ganz innerhalb der Fläche liegen und darf keine andere Aussparung überlappen. Sonst lehnt TakeoffCraft sie ab: „Eine Aussparung muss ganz innerhalb der Fläche liegen.“ oder „Aussparungen dürfen sich nicht überlappen.“

Um das letzte Loch wieder zu entfernen, wählen Sie {{ui:Letzte Aussparung entfernen}}.

## Abzugsflächen: Stützen, Schächte und Öffnungen, von mehreren Positionen abgezogen

Eine Aussparung gehört zu einer Flächenmarkierung. Eine **Abzugsfläche** wird einmal gezeichnet und zieht von jeder Fläche ab, die sie überlappt, und zwar bei den Positionen, die Sie wählen: Zeichnen Sie die Stützen einmal, dann werden sie gemeinsam vom Bodenbelag, der Decke und der Platte abgezogen.

1. Legen Sie dafür eine Flächenposition an, etwa „Stützen“.
2. Setzen Sie in den Einstellungen der Position den Haken bei **Abzugsfläche: Ihre Markierungen nehmen ihre Fläche aus anderen Positionen heraus**. Eine Liste Ihrer anderen Flächenpositionen erscheint, alle angehakt: Entfernen Sie den Haken bei denen, die die Abzugsflächen nicht berühren sollen (etwa Farbe an den Wänden).
3. Ermitteln Sie die Stützen wie üblich mit {{ui:Fläche}} oder {{ui:Kreis}}. Jede wird gestrichelt gezeichnet.

Jede Flächenmarkierung einer angehakten Position auf demselben Blatt verliert den Teil, den eine Abzugsfläche abdeckt: die ganze Abzugsfläche, wenn sie innen liegt, nur der überlappende Teil, wenn sie die Kante kreuzt, und nichts innerhalb einer Aussparung. Das Bedienfeld der gewählten Fläche zeigt **Abzugsflächen** und die verbleibende Fläche. Menge, Berechnungsformeln der Kalkulationsbausteine, Kosten, 3D-Prüfansicht und Export nutzen alle die verbleibende Fläche; die Notizen der Kalkulation sagen, wie viel die Abzugsflächen abgezogen haben. Die Abzugsflächen-Position selbst zählt ihre eigene Fläche (lassen Sie ihre Kosten auf null, wenn Sie sie nicht bepreisen).

Eine Abzugsfläche muss **konvex** sein: ein Rechteck, ein Kreis oder ein Umriss ohne einwärts gerichtete Ecke. TakeoffCraft lehnt eine nicht konvexe Abzugsfläche ab; zeichnen Sie einen L-förmigen Schacht als zwei Abzugsflächen. Abzugsflächen können keine Aussparungen haben, und zwei sich überlappende Abzugsflächen zählen beide.

Der Umfang (`P`) ändert sich nicht: Abzugsflächen nehmen nur Fläche weg.

## Die Fläche ablesen

Wählen Sie die Fläche. **Ausgewählte Markierung** zeigt:

| Zeile | Bedeutung |
|---|---|
| Fläche | Die Nettofläche: Umriss minus Aussparungen. Das zählt die Position. |
| Umriss | Die Bruttofläche innerhalb des Umrisses (wird angezeigt, wenn es Aussparungen gibt). |
| Aussparungen | Wie viele Löcher und ihre Gesamtfläche. |
| Umfang | Die Kantenlänge des Umrisses, **plus** die Kanten jeder Aussparung („mit Aussparungen“). |

Der Umfang enthält die Kanten der Aussparungen absichtlich, etwa für Schalungskanten oder Sockel, die auch um ein Loch herumlaufen. Brauchen Sie nur die äußere Kante, halten Sie Löcher aus dieser Position heraus oder messen Sie die äußere Kante als lineare Strecke.

Die {{ui:Einheit}} der Position bestimmt, wie die Summe angegeben wird: SF, SY oder m². Das Bedienfeld **Ausgewählte Markierung** und die Statusleiste zeigen immer Quadratfuß.

## Eine Fläche korrigieren

- **Eine Ecke verschieben**: Wählen Sie die Fläche und ziehen Sie einen Eckgriff (Löcher haben auch Griffe). Würde die neue Form sich selbst kreuzen oder ein Loch nach außen drücken, wird die Ecke zurückgesetzt: „Der Punkt wurde zurückgesetzt.“
- **In eine andere Position verschieben**: Wählen Sie eine andere Flächenposition in der Liste **Position** unter **Ausgewählte Markierung**.
- **Löschen**: {{key:Delete}}, {{ui:Löschen}} im Menü {{ui:Mehr}} der Symbolleiste oder {{ui:Markierung löschen}}.

## Tiefe für Volumen

Geben Sie der Flächenposition eine {{ui:Tiefe}} (zum Beispiel `0'-4"` für eine Platte) und nutzen Sie `A * H / 27` in einem Kalkulationsbaustein-Bestandteil, um Kubikyards zu erhalten. Siehe [Kalkulationsbausteine und Formeln](topic:assemblies).
