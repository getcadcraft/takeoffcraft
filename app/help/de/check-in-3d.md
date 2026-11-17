---
title: Die Mengenermittlung in 3D prüfen
summary: Die Wände, Decken und Anzahlen des offenen Blatts auf der Zeichnung stehend sehen, sie umkreisen und eine anklicken, um ihre Markierung auszuwählen.
keywords: png, Bild, Bildschirmfoto, Stapel, Geschosse, Ebenen, Ansicht, glb, gltf, 3D exportieren, Wandstärke, Sockelhöhe, Öffnung, Sturzhöhe, 3D, drei D, prüfen, Ansicht, Wände, Wandhöhe, Decke, Tiefe, Volumen, umkreisen, Modell, Auswahl, isometrisch, Perspektive
from: fb16b4f7
---

Die 3D-Ansicht ist eine Prüfung, kein zweiter Plan: Sie stellt die Mengenermittlung des Blatts auf dem Bildschirm auf das Blatt selbst, sodass eine fehlende Wand, eine doppelte Decke oder eine verirrte Zählung auf einen Blick auffällt.

Vorab braucht das Blatt einen Maßstab ([Maßstab festlegen](topic:set-the-scale)). Höhen und Tiefen brauchen echte Maße in Fuß. Auf einem Blatt ohne Maßstab sagt {{ui:3D}} das und bleibt bei der flachen Ansicht.

## Die 3D-Ansicht öffnen

1. Zeigen Sie das Blatt, das Sie prüfen möchten.
2. Wählen Sie {{ui:3D}} in der Leiste, die den Namen und den Maßstab des Blatts zeigt, oder drücken Sie {{key:3}}.
   Beim ersten Mal braucht die 3D-Ansicht einen Moment zum Laden. Das Blatt wird auf dem Boden gezeichnet, und die Mengenermittlung steht darauf, in der Farbe jeder Position.
3. Um zurückzukehren, wählen Sie {{ui:3D}} erneut, {{ui:Zurück zum Blatt}} oder drücken Sie {{key:3}}. Die Wahl eines Zeichenwerkzeugs (Linear, Fläche, Anzahl und so weiter) führt ebenfalls zurück, da Markierungen auf dem flachen Blatt gezeichnet werden.

Sie zeigt das Blatt auf dem Bildschirm; wechseln Sie Blätter in der Blattliste oder mit {{key:PageDown}} und {{key:PageUp}}, und die 3D-Ansicht folgt. Um mehrere Geschosse gleichzeitig zu sehen, stapeln Sie sie (unten).

## Was Sie sehen

| Markierung | In 3D |
|---|---|
| Lineare Strecke, Position mit Höhe | Eine Wand dieser Höhe entlang der Strecke. Gekrümmte Strecken folgen der Kurve. |
| Lineare Strecke, Position ohne Höhe | Eine Linie auf dem Blatt. Geben Sie der Position unter **Position** eine Höhe, um sie aufzustellen. |
| Fläche, Position mit Tiefe | Eine Platte dieser Tiefe, mit offenen Aussparungen. |
| Fläche, Position ohne Tiefe | Eine dünne Platte von 2", damit sie sichtbar bleibt. |
| Anzahl | Ein kleiner Pfosten auf jedem gezählten Punkt. |

Die Höhe ist das Feld {{ui:Höhe}} einer linearen Position, die Tiefe das Feld {{ui:Tiefe}} einer Flächenposition, unter **Position** (siehe [Mengenermittlungspositionen anlegen](topic:create-items)). Ändern Sie sie, und die 3D-Ansicht aktualisiert sich sofort. Die Notiz unter dem Blattnamen sagt, was das Blatt enthält, zum Beispiel „Dieses Blatt in 3D: 2 Wände, 1 Decke, 3 Anzahlen“, und wie viele Strecken oder Flächen keine Höhe oder Tiefe haben. Klicks gehen durch die Notiz hindurch zur Ansicht.

Die Zahlen ändern sich in 3D nicht: Die Fläche einer Wand ist ihre exakte Länge mal ihre Höhe, und das Volumen einer Decke ist ihre Nettofläche (Umriss minus Aussparungen, Kurven exakt) mal ihre Tiefe. Kurven werden nur auf dem Bildschirm als kurze gerade Stücke gezeichnet.

## Umschauen

| Aktion | Was sie bewirkt |
|---|---|
| Ziehen, oder mit der mittleren Maustaste ziehen | Um die Mengenermittlung kreisen. |
| {{key:Shift}} + Ziehen, oder mit der rechten Maustaste ziehen | Verschieben (Pan). |
| Mausrad | Hinein- und herauszoomen am Mauszeiger. |
| Zwei-Finger-Wischen auf dem Trackpad | Umkreisen ({{key:Shift}} verschiebt). Eine Pinch-Geste zoomt. |
| {{ui:Iso}}, {{ui:Oben}}, {{ui:Vorne}}, {{ui:Hinten}}, {{ui:Links}}, {{ui:Rechts}}, {{ui:Unten}} | Standardansichten, auf die Mengenermittlung ausgerichtet. Die 3D-Ansicht öffnet sich in {{ui:Iso}}. |
| {{ui:Perspektive}} | Perspektive ein oder aus (parallel, wenn aus). |
| {{ui:Zoom Grenzen}} oder {{key:F}} | Das ganze Blatt. |
| {{ui:Blatt}} | Den Plan auf dem Boden ein- oder ausblenden. |
| Der Ansichtswürfel oben rechts | Klicken Sie auf eine Fläche, Kante oder Ecke, um von dort zu sehen; ziehen Sie ihn, um zu kreisen; ziehen Sie seinen Kompassring, um zu drehen; die Hausschaltfläche führt zurück zu {{ui:Iso}}. |

In der Ecke erscheint ein Ansichtswürfel, ein kleines Achsensymbol X, Y, Z oder nichts. Wählen Sie das unter {{ui:Einstellungen}} auf der Registerkarte TakeoffCraft unter **Eckanzeige** ([TakeoffCraft-Einstellungen](topic:settings)). Das flache Blatt hat keine Eckanzeige.

:::touch
Ein Finger kreist; zwei Finger zoomen mit einer Pinch-Geste und verschieben (Pan). Ein Tippen wählt aus.
:::

## Wände mit Dicke, Sockel und Öffnungen

Eine lineare Position mit Höhe steht als dünner Streifen. Um sie als echte Wand zu sehen, geben Sie der Position ihre Form unter **Im 3D** in ihren Einstellungen:

- **Wandstärke** (8", 0.2 m): Die Wand wird zu einem Körper, zentriert auf der gezeichneten Linie, mit auf Gehrung geschnittenen Ecken.
- **Sockelhöhe**: Die Wand beginnt so weit über dem Boden (eine Untersicht, ein oberer Schrankzug). Flächenpositionen haben sie ebenfalls: eine Decke auf 9'-0".
- **Sturzhöhe**: Ein abgezogenes Segment (eine Tür, [Teil einer Strecke abziehen](topic:measure-linear#deduct-a-part-of-a-run)) hält die Wand über dieser Höhe, sodass eine Tür als Tür erscheint. Ohne Sturzhöhe lässt ein abgezogenes Segment eine Lücke bis nach oben.

Diese Angaben formen nur die 3D-Ansicht: Die Mengen (Länge, Wandfläche, Kosten) bleiben, wie sie waren.

## Die Geschosse stapeln

1. Öffnen Sie die PDFs aller Geschosse.
2. Wählen Sie in der 3D-Ansicht {{ui:Höhenlagen…}} und geben Sie die Höhe jedes Geschosses ein, etwa `0` für das Erdgeschoss und `12'` für das nächste. Ein leeres Feld lässt ein Blatt aus.
3. Wählen Sie {{ui:Stapeln}}. Jedes Blatt mit einer Höhenlage zeigt seine Mengenermittlung auf seiner Höhe; das Blatt auf dem Bildschirm liegt unter seinem eigenen Geschoss, die anderen sind umrandet. Die Notiz sagt, wie viele Geschosse gestapelt sind.

Blätter richten sich nach ihrer Lage auf der Seite aus, sodass dies für gleich gezeichnete Grundrisse funktioniert (gleiche Blattgröße und Position). Ein Blatt mit Höhenlage, aber ohne Maßstab wird ausgelassen, und die Notiz sagt das. Wählen Sie {{ui:Stapeln}} erneut, um ein Blatt nach dem anderen zu zeigen. Die Höhenlagen werden mit der Mengenermittlung gespeichert.

## Die 3D-Ansicht als Bild speichern

Wählen Sie {{ui:PNG}} in der 3D-Leiste für ein Bild der Ansicht, wie sie auf dem Bildschirm ist (`… 3D.png`). {{key:Shift}} + Klick auf {{ui:PNG}} macht es doppelt so groß (`… 3D@2x.png`), für den Druck.

## Die 3D-Ansicht als Modell speichern

Wählen Sie {{ui:GLB}} in der 3D-Leiste. Sie erhalten eine Datei `.glb` (glTF, binär) mit dem, was die Ansicht zeigt – das Geschoss auf dem Bildschirm oder alle gestapelten Geschosse. Andere 3D-Programme öffnen sie: ein Objekt je Markierung, benannt nach ihrer Position, in deren Farbe, in Metern mit Y nach oben. Das Blatt selbst und die Umrisse sind nicht enthalten.

## Eine Markierung aus 3D auswählen

Klicken Sie auf eine Wand, Decke, Platte oder einen Pfosten. Ihre Markierung wird zur ausgewählten Markierung, genau wie beim Klick auf dem Blatt: Sie erscheint unter **Ausgewählte Markierung**, ihre Position wird aktuell, und die Statusleiste zeigt ihre Länge und Höhe oder ihre Fläche, Tiefe und Kubikyards. {{key:Shift}} + Klick fügt Markierungen zur Auswahl hinzu oder nimmt sie heraus. {{key:Delete}} löscht die ausgewählten Markierungen, und {{key:Mod+Z}} bringt sie zurück; {{key:Esc}} wählt keine aus. Zurück auf dem Blatt bleiben dieselben Markierungen ausgewählt.

:::tip
Die Zeichnung folgt dem Design: Im Modell wird das Blatt auf dem Boden dunkel, wie die flache Ansicht.
:::
