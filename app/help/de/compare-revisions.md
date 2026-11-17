---
title: Eine überarbeitete Zeichnung vergleichen und die Mengenermittlung übertragen
summary: Die alte Zeichnung über ihre Überarbeitung legen, ausrichten, Änderungen sehen und die Mengenermittlung auf das neue Blatt übertragen, wobei zu prüfende Markierungen gekennzeichnet werden.
keywords: Überarbeitung, überarbeitet, vergleichen, Überlagerung, alt, neu, Änderungen, Nachtrag, Bulletin, Neuausgabe, Mengenermittlung übertragen, übertragen, mitnehmen, ausrichten, markiert, prüfen
from: 3a1d9fe0
---

Wenn ein Blatt neu herausgegeben wird, müssen Sie es nicht erneut aufnehmen. Öffnen Sie die alte und die neue PDF, vergleichen Sie die beiden Blätter und übertragen Sie die Mengenermittlung. TakeoffCraft kennzeichnet jede Markierung, deren Zeichnung sich geändert hat, damit Sie diese prüfen und die übrigen behalten.

## Vergleichen

1. Öffnen Sie beide PDFs: den alten und den überarbeiteten Satz ({{ui:PDFs öffnen}}; sie können in einer Datei oder in mehreren liegen).
2. Zeigen Sie das **neue** Blatt an.
3. Wählen Sie {{ui:Vergleichen}} in der Blattleiste unter der Zeichnung.
4. Wählen Sie das alte Blatt in der Liste. TakeoffCraft schlägt das Blatt mit derselben Nummer in der anderen PDF vor oder dieselbe Seite. Wählen Sie **Vergleichen**.

Die alte Zeichnung liegt nun rot über der neuen. Wo beide übereinstimmen, liegen die roten Linien auf den schwarzen; wo sie abweichen, sehen Sie nur rote Linien (entfernt) und nur schwarze Linien (hinzugefügt). Eine Leiste am unteren Rand des Blattes enthält die folgenden Schritte; {{key:Esc}} oder {{ui:Schließen}} beendet den Vergleich.

## Ausrichten

Überarbeitete Blätter werden oft etwas versetzt gedruckt: auf der Seite verschoben oder in leicht anderer Größe. Wenn die rote Zeichnung nicht auf der schwarzen liegt, wählen Sie **Über zwei Punkte ausrichten** und klicken Sie viermal:

1. ein Punkt auf der alten (roten) Zeichnung, etwa eine Stützenmitte oder eine Gebäudeecke,
2. derselbe Punkt auf der neuen (schwarzen) Zeichnung,
3. ein zweiter Punkt auf der roten Zeichnung, weit vom ersten entfernt,
4. derselbe Punkt auf der schwarzen Zeichnung.

Die rote Zeichnung verschiebt, dreht und skaliert sich auf die schwarze. Die Statusleiste zeigt, wie viel größer die neue Zeichnung ist („Größe × 1.000“, wenn sie gleich ist). Zoomen Sie für die Punkte hinein: Je genauer Sie klicken, desto besser die Passung.

## Änderungen finden

Wählen Sie **Änderungen finden**. TakeoffCraft vergleicht die Tinte der beiden Zeichnungen: Tinte nur auf dem alten Blatt wird rot, Tinte nur auf dem neuen Blatt wird blau, und die Statusleiste zählt sie. Linien, die sich um einen Hauch verschoben haben (ein erneuter Druck), zählen nicht als Änderungen.

Es prüft außerdem jede Markierung auf dem alten Blatt und zählt diejenigen, die dort liegen, wo sich die Zeichnung geändert hat:

- eine Strecke oder Fläche, wenn sich die Zeichnung an einem ihrer Enden oder Ecken oder entlang mindestens etwa einem Sechstel ihrer Länge geändert hat;
- eine Zählung, wenn sich direkt daneben etwas geändert hat.

## Mengenermittlung verschieben

Wählen Sie **Mengenermittlung hierher verschieben**. Jede Markierung auf dem alten Blatt wird über die Ausrichtung auf das neue Blatt verschoben, in einem einzigen Rückgängig-Schritt. Die Markierungen neben einer Änderung werden gekennzeichnet: Sie erscheinen mit einem orangefarbenen Leuchtrand, und die Blattleiste zeigt „(n) zu prüfen“.

Hatte das neue Blatt keinen Maßstab, übernimmt es den Maßstab des alten Blattes (angepasst, wenn die Zeichnungen zur Ausrichtung skaliert werden mussten). Hatte es bereits einen anderen Maßstab, fragt TakeoffCraft zuerst nach: Verschobene Markierungen werden im Maßstab des neuen Blattes gemessen.

## Die markierten Stellen prüfen

1. Wählen Sie „(n) zu prüfen“ in der Blattleiste. Die Ansicht zoomt zur nächsten markierten Stelle und wählt sie aus; ihr Bedienfeld sagt, warum sie markiert ist.
2. Korrigieren Sie die Markierung, wenn sich die Zeichnung darunter geändert hat (ziehen Sie an den Ecken, fügen Sie Markierungen hinzu oder löschen Sie sie, oder nehmen Sie sie erneut auf).
3. Wählen Sie **Geprüft** in ihrem Bedienfeld. Die Kennzeichnung verschwindet, und die Zahl in der Blattleiste sinkt.

Die Kennzeichnungen werden mit der Mengenermittlung gespeichert, sodass Sie sie später prüfen können.

:::note
Der Vergleich funktioniert gleichermaßen mit Vektor-PDFs und mit Scans, weil er vergleicht, was gezeichnet ist. Ein verzerrter oder gedehnter Scan lässt sich mit zwei Punkten möglicherweise nur grob ausrichten; prüfen Sie dann mehr Markierungen mit dem Auge.
:::
