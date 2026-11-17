---
title: Ein Symbol automatisch zählen
summary: Umranden Sie ein Symbol, lassen Sie TakeoffCraft die anderen auf diesem Blatt oder auf allen geöffneten Blättern finden, prüfen Sie die Treffer mit dem Schieberegler und fügen Sie sie in einem Schritt hinzu.
keywords: beliebiger Winkel, gedreht, gewendet, anderer Maßstab, unterschiedlicher Maßstab, Auto-Zählen, automatisches Zählen, Symbolsuche, Symbole finden, Muster, Vorlage, Übereinstimmung, erkennen, Zählwerkzeug
from: fa68a6c1
---

{{ui:Auto-Zählen}} findet jede Kopie eines Symbols, nachdem Sie eines umrandet haben. Anschließend prüfen Sie die Treffer auf dem Blatt und fügen die akzeptierten als Zählmarken hinzu. Das ist eine Hilfe, keine Garantie: Prüfen Sie immer, bevor Sie hinzufügen.

## Symbole finden

1. Erstellen oder klicken Sie eine Zählposition unter {{ui:Positionen}}.
2. Öffnen Sie ein Blatt, auf dem das Symbol erscheint.
3. Wählen Sie {{ui:Auto-Zählen}} in der Symbolleiste oder drücken Sie {{key:S}}.
   Am oberen Rand des Blatts erscheint eine Leiste: „Ziehen Sie einen Rahmen um ein Symbol auf diesem Blatt.“
4. Um alle geöffneten Blätter statt nur dieses zu durchsuchen, aktivieren Sie {{ui:Alle geöffneten Blätter durchsuchen}}.
5. Zoomen Sie so weit heran, dass das Symbol gut zu erkennen ist, und ziehen Sie dann einen Rahmen eng um eine Kopie. Nehmen Sie das ganze Symbol mit auf; leeres Papier darum wird abgeschnitten.
   Die Leiste zeigt „Suche läuft…“ mit einem Fortschrittsbalken und einer Schaltfläche {{ui:Abbrechen}}. Die Seite reagiert weiter: Sie können zoomen, verschieben und zwischen Blättern wechseln. Wenn Sie ein anderes Werkzeug wählen oder {{key:Esc}} drücken, wird die Suche abgebrochen.
6. Wenn sie fertig ist, erscheinen die Treffer als Rahmen in der Farbe der Position auf dem Blatt, und die Leiste zeigt eine Zusammenfassung, etwa „22 Übereinstimmungen, 19 zum Hinzufügen (3 bereits gezählt). Klicken Sie auf einen Rahmen, um ihn abzulehnen oder wiederherzustellen.“

Im Modus {{ui:Auto-Zählen}} zieht das Ziehen auf dem Blatt einen Rahmen, statt zu verschieben. Zum Verschieben halten Sie {{key:Space}} gedrückt und ziehen, oder Sie ziehen mit der mittleren Maustaste.

## Treffer prüfen

- **Klicken Sie auf einen Rahmen**, um ihn abzulehnen. Ein abgelehnter Rahmen ist gestrichelt und durchgestrichen. Klicken Sie erneut, um ihn wiederherzustellen.
- **Bewegen Sie den Schieberegler {{ui:Übereinstimmung}}** (50 % bis 95 %, Start bei 75 %). Höher zeigt nur enge Übereinstimmungen, niedriger zeigt lockerere. Der Schieberegler filtert nur das Gefundene; er sucht nicht erneut.
- **Bereits gezählt**: Treffer an einer Stelle, die schon eine Zählmarke dieser Position hat, beginnen abgelehnt, damit Sie nichts doppelt zählen.
- **Andere Blätter**: Wenn Sie alle geöffneten Blätter durchsucht haben, wechseln Sie mit der Blattliste oder {{key:PageDown}} zwischen den Blättern und prüfen jedes. Die Zusammenfassung nennt, auf wie vielen Blättern es Treffer gibt.

## Hinzufügen

Wählen Sie {{ui:Hinzufügen}}. Die Schaltfläche zeigt die Anzahl, z. B. „19 Marken hinzufügen“.
Die Zählmarken werden in der Mitte jedes akzeptierten Rahmens hinzugefügt: „19 Zählmarken zu „Duplex-Steckdose“ hinzugefügt. Ctrl+Z entfernt alle.“

Die gesamte Auswahl ist ein einziger Rückgängig-Schritt, daher entfernt ein {{key:Mod+Z}} sie alle.

Um die Prüfung ohne Hinzufügen zu verwerfen, wählen Sie {{ui:Verwerfen}} oder drücken Sie {{key:Esc}}. Auch die Wahl eines anderen Werkzeugs verwirft sie.

## Was gefunden wird und was nicht

TakeoffCraft vergleicht die Zeichnung als Pixel mit dem umrandeten Symbol.

- Es findet das Symbol, wenn es um 0°, 90°, 180° und 270° gedreht ist. Aktivieren Sie {{ui:Beliebiger Winkel (langsamer)}} in der Leiste von Auto-Zählen, bevor Sie den Rahmen ziehen, um es auch in jedem beliebigen Winkel zu finden: Es probiert alle 15° und verfeinert jeden Treffer danach auf ein halbes Grad genau. Das dauert etwa sechsmal so lange. Ein gespiegeltes Symbol findet es nicht (außer das Symbol sieht gespiegelt gleich aus).
- Wenn {{ui:Alle geöffneten Blätter durchsuchen}} aktiviert ist, wird ein Blatt mit einem anderen Maßstab in der Größe durchsucht, die das Symbol dort hat: Ein Gerät, das auf einem Grundriss im Maßstab 1/8" maßstäblich gezeichnet ist, ist halb so groß wie auf einem Plan im Maßstab 1/4" und wird trotzdem gefunden. Ein solches Blatt wird außerdem in der Größe des Rahmens durchsucht, für Kennzeichnungen und Symbole, die auf jedem Blatt in einer Größe gedruckt sind. Dafür ist ein Maßstab auf beiden Blättern nötig; ein Blatt ohne Maßstab wird nur in der Größe des Rahmens durchsucht.
- Sehr ähnliche Symbole können einander treffen: eine Duplex- und eine Quad-Steckdose oder zwei Gerätekennzeichnungen, die sich um einen Buchstaben unterscheiden. Erhöhen Sie den Schieberegler, bis nur die richtigen übrig bleiben, und lehnen Sie den Rest von Hand ab.
- Ein Symbol, das von anderen Linien, Schraffuren oder Text gekreuzt wird, erzielt eine niedrigere Bewertung und braucht womöglich eine niedrigere Einstellung des Schiebereglers.
- Sehr kleine Rahmen werden abgelehnt: „Dieser Rahmen ist zu klein. Ziehen Sie ihn um das ganze Symbol.“ Ein leerer Rahmen wird ebenfalls abgelehnt: „Dieser Rahmen ist fast leer. Ziehen Sie ihn um ein Symbol.“
- Ein Blatt, das für die Größe, die dieses Symbol braucht, sehr groß wäre, wird übersprungen, und die Zusammenfassung lautet „1 Blatt war zu groß, um es bei dieser Symbolgröße zu durchsuchen.“ Umranden Sie ein größeres Symbol oder zählen Sie dieses Blatt von Hand.

Wenn nichts gefunden wird, zeigt die Statusleiste: „Keine Übereinstimmungen. Senken Sie den Schieberegler für die Übereinstimmung oder umranden Sie das Symbol enger.“

## Geschwindigkeit und Browser

Die Suche läuft in einem Hintergrundprozess, daher bleibt die Seite reaktionsschnell und Sie können jederzeit abbrechen. Jedes Blatt wird zuerst in der Arbeitsgröße auf der Seite selbst gezeichnet, was bei einem sehr großen Blatt kurz zu einer Pause führen kann. Es läuft in aktuellen Versionen von Chrome, Edge, Firefox und Safari. Das Durchsuchen vieler Blätter dauert länger; der Fortschrittsbalken bewegt sich Blatt für Blatt. Offline funktioniert Auto-Zählen, wenn die App-Leiste {{ui:Offline bereit}} anzeigt: {{ui:Für Offline speichern}} behält auch den Hintergrundprozess. Siehe [Offline arbeiten](common:offline).
