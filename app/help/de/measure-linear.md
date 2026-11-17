---
title: Lineare Strecken messen
summary: Wände, Leitungen, Zuschnitte und andere Längen als Strecken erfassen, mit geraden Segmenten, Bögen und dem Einrasten auf 45 Grad mit Shift.
keywords: linear, Länge, Strecke, Polylinie, Wände, LF, lineare Fuß, Bogen, Kurve, 45 Grad, Ortho, Einrasten, Segmente, Polylänge, Abzug, Öffnung, Tür, Lücke, Eingabe, eingegeben, Koordinaten, Abstand, direkter Abstand, polar
from: c669deff
---

Eine lineare Position misst Länge. Jede Strecke ist eine Folge von Punkten: gerade Segmente und Bögen, wenn Sie den Bogenmodus einschalten. Eine Position kann beliebig viele Strecken auf beliebig vielen Blättern haben.

Bevor Sie anfangen: Das Blatt braucht einen Maßstab ([Maßstab festlegen](topic:set-the-scale)), und Sie brauchen eine lineare Position ([Ermittlungspositionen anlegen](topic:create-items)).

Auf einer Vektor-PDF rasten Ihre Klicks auf die eigenen Linien der Zeichnung ein: Enden, Mittelpunkte und Kreuzungen ([An den Linien der Zeichnung einrasten](topic:snap-to-the-drawing); {{key:F3}} schaltet es aus).

## Eine Strecke zeichnen

1. Klicken Sie auf die lineare Position unter {{ui:Positionen}}.
2. Wählen Sie {{ui:Länge}} in der Symbolleiste oder drücken Sie {{key:L}}.
3. Klicken Sie auf den Anfang der Strecke.
4. Klicken Sie auf jede Ecke entlang der Strecke.
   Die Statusleiste zeigt „Länge“ (die bisherige Strecke bis zum Zeiger) und „Segment“ (das Segment, das Sie zeichnen), in Fuß und Zoll.
5. Beenden Sie die Strecke: Doppelklicken Sie auf den letzten Punkt, drücken Sie {{key:Enter}} oder klicken Sie mit der rechten Taste.
   Die Strecke wird in der Farbe der Position gezeichnet und wird zur ausgewählten Markierung. Die Länge der Position in der Liste {{ui:Positionen}} und in der Tabelle {{ui:Mengen}} steigt.

Das Werkzeug bleibt auf {{ui:Länge}}, sodass Sie sofort die nächste Strecke beginnen können. Drücken Sie {{key:Esc}}, um zu {{ui:Auswählen}} zurückzukehren.

Beim Zeichnen:

- {{key:Backspace}} (oder {{key:Delete}}) entfernt den letzten Punkt.
- {{key:Esc}} verwirft die unfertige Strecke.
- Ziehen verschiebt das Blatt, und das Mausrad zoomt, ohne Punkte hinzuzufügen.

:::mac
Auf einem Mac-Trackpad ist der Rechtsklick ein Klick mit zwei Fingern (aktivieren Sie den sekundären Klick in den Systemeinstellungen unter „Trackpad“). TakeoffCraft liest nur die sekundäre Taste, daher kann ein Control-Klick als einfacher Klick gewertet werden und einen Punkt hinzufügen. Doppelklick oder {{key:Enter}} beenden immer.
:::

:::touch
Auf einem Touchscreen tippen Sie, um Punkte zu setzen, ziehen Sie mit einem Finger, um zu verschieben, und zoomen Sie mit zwei Fingern durch Spreizen. Beenden Sie mit einem langen Druck, einem Doppeltipp oder mit {{ui:Fertig}} in der Leiste unter dem Blatt ({{ui:Hinten}} nimmt den letzten Punkt zurück). Siehe [Fehlerbehebung](topic:troubleshooting#touch-screens).
:::

## Gerade Linien in 45°-Schritten

Halten Sie {{key:Shift}} gedrückt, während Sie einen Punkt setzen. Das Segment vom letzten Punkt rastet auf die nächste Richtung 0°, 45°, 90° oder 135° ein und behält dabei die Länge, die Sie entlang dieser Richtung gezogen haben. Die Statusleiste erinnert Sie: „Shift rastet auf 45° ein“.

Im Bogenmodus gilt das für das Ende eines Bogens: Die Sehne des Bogens liegt in 45°-Schritten vom Anfang aus. Der Punkt, den Sie auf der Kurve anklicken, wird nie eingerastet.

## Bögen und gekrümmte Wände

1. Setzen Sie beim Zeichnen einer Strecke den Punkt, an dem die Kurve beginnt.
2. Schalten Sie den Bogenmodus ein: Wählen Sie {{ui:Bogen}} in der Symbolleiste oder drücken Sie {{key:R}}. Die Schaltfläche bleibt gedrückt.
3. Klicken Sie auf einen beliebigen Punkt der Kurve, irgendwo in ihrer Mitte.
   Die Statusleiste ergänzt „(Bogen: dort klicken, wo er endet)“, und die Vorschau biegt sich durch Ihren Punkt.
4. Klicken Sie dort, wo die Kurve endet.
   Der Bogen wird hinzugefügt. Seine Länge ist die exakte Bogenlänge, nicht eine Kette kurzer Sehnen.
5. Klicken Sie auf einen weiteren Punkt der nächsten Kurve und dann auf ihr Ende, um weiter Bögen zu zeichnen, oder drücken Sie {{key:R}} erneut, um zu geraden Segmenten zurückzukehren.

{{key:Backspace}} oder {{key:Esc}} verwerfen zuerst den ausstehenden Punkt auf der Kurve; drücken Sie erneut, um Punkte wie üblich zu entfernen.

## Längen und Koordinaten eingeben

Nach dem ersten Punkt können Sie eingeben, wohin der nächste gehört, statt zu klicken. Tippen Sie eine Ziffer, `@` oder `#`: Ein Feld {{ui:Eingabe}} öffnet sich in der Statusleiste mit dem, was Sie getippt haben. Drücken Sie {{key:Enter}}, um den Punkt zu setzen; das Feld bleibt für den nächsten offen.

| Eingabe | Der nächste Punkt liegt |
|---|---|
| `12'6"` | 12'-6" vom letzten Punkt entfernt, in Richtung des Zeigers (zeigen Sie die Richtung, dann geben Sie die Länge ein) |
| `12'6"<45` | 12'-6" unter 45°, gegen den Uhrzeigersinn von der rechten Bildschirmseite gezählt (`<90` ist oben, `<-90` unten) |
| `@6',-4'` | 6' nach rechts und 4' nach unten vom letzten Punkt |
| `6',4'` (oder `#6',4'`) | 6' nach rechts und 4' nach oben vom ersten Punkt dieser Strecke |

Längen werden eingegeben wie überall in TakeoffCraft ([Eingabeformate](topic:entry-formats)): `12'-6 1/2"`, `12.5` (Fuß), `30"`, `3.2 m`. „Rechts“ und „oben“ beziehen sich darauf, wie Sie das Blatt sehen, auch wenn die PDF-Seite gedreht ist.

{{key:Enter}} in einem leeren Feld beendet die Strecke, wie {{key:Enter}} auf dem Blatt; {{key:Esc}} schließt das Feld und lässt die Strecke weiterlaufen. Eingegebene Punkte folgen denselben Regeln wie Klicks: Abzüge, Bögen und das Schließen einer Fläche funktionieren alle. Dasselbe Feld funktioniert bei {{ui:Fläche}} und {{ui:Aussparung}}; nach dem Mittelpunkt eines Kreises nimmt es den Radius.

## Einen Teil einer Strecke abziehen

Eine Wandstrecke, die an einer Tür oder einem Schaufenster vorbeiführt, kann durchgehend gezeichnet werden und zählt trotzdem nur die Wand: Die Segmente über die Öffnung sind **Abzüge**. Sie werden gestrichelt und dünn gezeichnet und nicht gezählt.

Beim Zeichnen:

1. Setzen Sie den Punkt, an dem die Öffnung beginnt.
2. Wählen Sie {{ui:Abzug}} in der Symbolleiste oder drücken Sie {{key:E}}. Die Schaltfläche bleibt gedrückt, und die Statusleiste sagt, dass die nächsten Segmente Abzüge sind.
3. Klicken Sie dort, wo die Öffnung endet. Das Segment wird gestrichelt gezeichnet; „Länge“ in der Statusleiste lässt es aus.
4. Drücken Sie {{key:E}} erneut und arbeiten Sie an der Wand entlang weiter.

Nach dem Zeichnen: Wählen Sie die Strecke aus. Unter **Ausgewählte Markierung** hat jedes Segment ein Kästchen {{ui:Abzug}}: Setzen Sie den Haken, um dieses Segment abzuziehen, entfernen Sie ihn, um es wieder zu zählen. Jede Änderung ist ein Rückgängig-Schritt.

Eine Strecke behält immer mindestens ein Segment, das zählt. Das Bedienfeld zeigt dann **Abzüge** (die abgezogene Länge) und **Gezeichnet** (die ganze Strecke); **Länge**, die Menge der Position, die Wandfläche und die Kosten nutzen die Länge ohne Abzüge. Die 3D-Prüfansicht lässt eine Lücke in der Wand, das markierte PDF zeichnet die Abzüge gestrichelt, und das exportierte Blatt **Markierungen** listet sie auf.

Einen Eckpunkt zu verschieben behält die Abzüge. Punkte hinzuzufügen oder zu entfernen (indem Sie die Strecke neu zeichnen) startet ohne sie.

## Die Details einer Strecke ansehen

Wählen Sie {{ui:Auswählen}} ({{key:V}}) und klicken Sie auf die Strecke. **Ausgewählte Markierung** rechts zeigt:

- die Position, zu der sie gehört (wählen Sie in der Liste eine andere lineare Position, um die Strecke dorthin zu verschieben),
- das Blatt,
- **Länge** in Fuß und Zoll und in LF,
- die Anzahl der **Segmente** und die **Wandfläche**, wenn die Position eine Höhe hat,
- die Länge jedes Segments, mit „(Bogen)“ nach Bögen, und sein Kästchen {{ui:Abzug}}.

Auf dem Blatt wird jedes Segment der ausgewählten Strecke mit seiner Länge beschriftet.

## Eine Strecke korrigieren

- **Einen Punkt verschieben**: Wählen Sie die Strecke und ziehen Sie einen ihrer quadratischen Eckgriffe. Halten Sie {{key:Shift}}, um das verschobene Segment auf 45°-Schritte einzurasten. Ein Bogen behält seine Ausbuchtung.
- **Einen Bogen biegen**: Eine ausgewählte Strecke zeigt in der Mitte jedes Bogens einen runden Griff. Ziehen Sie ihn: Der Bogen verläuft durch die Stelle, an der Sie loslassen, sodass er stärker, schwächer oder in die andere Richtung gewölbt ist. Auf die gerade Linie zwischen seinen Enden gezogen, wird er zu einem geraden Segment. {{key:Mod+Z}} macht es rückgängig („Bogen biegen“).
- **Eine Strecke löschen**: Wählen Sie sie aus und drücken Sie {{key:Delete}}, wählen Sie {{ui:Löschen}} im Menü {{ui:Mehr}} der Symbolleiste oder {{ui:Markierung löschen}} im Bedienfeld.
- **Rückgängig**: {{key:Mod+Z}}; wiederholen mit {{key:Mod+Y}}.

Sie können noch keinen Punkt in die Mitte einer Strecke einfügen. Löschen Sie die Strecke und zeichnen Sie sie neu.

## Wandfläche

Geben Sie der linearen Position eine {{ui:Höhe}} (zum Beispiel `9'-0"`). Sie meldet dann **Wandfläche (A)** = Länge × Höhe, in SF (oder m² bei einer metrischen Position), und die Wandfläche geht in die Notizspalte des Tabellenexports. Nutzen Sie sie in Kalkulationsbausteinen für Platten, Farbe oder Dämmung: siehe [Kalkulationsbausteine und Formeln](topic:assemblies).
