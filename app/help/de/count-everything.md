---
title: Alles im Planset zählen
summary: Eine Symbollegende einmal umrahmen, dann zählt TakeoffCraft jedes Symbol darin auf jedem offenen Blatt in einem Lauf. Jede Zählung ist ein Link zu ihrem Blatt, und Sie prüfen, bevor etwas hinzugefügt wird.
keywords: alles zählen, Legende, Symbollegende, ganzes Planset, jedes Blatt, alle Blätter, jede Tür, jede Einrichtung, Geräte, Zeitplan, Symbole, Auto-Zählen, alles zählen, Satz von Plänen, 200 Blätter, Trefferstufe, ähnlich aussehend
from: adc99744
---

{{ui:Alles zählen}} liest eine Symbollegende und zählt danach jedes Symbol darin auf jedem offenen Blatt. Es ist {{ui:Auto-Zählen}} für eine ganze Legende auf einmal. Es ist reiner Symbolabgleich auf Ihren eigenen Blättern, kein trainiertes Modell, und nichts verlässt Ihren Computer. Prüfen Sie die Zählungen, bevor Sie sie hinzufügen: Es ist eine Hilfe, keine Garantie.

## Eine Legende zählen

1. Öffnen Sie die Pläne. Eine Legende auf einem beliebigen Blatt genügt: die Symbole mit ihren Namen daneben.
2. Wählen Sie {{ui:Alles zählen}} in der Symbolleiste.
3. Ziehen Sie einen Rahmen um die Legende, Symbole und Namen. Ein Titel ohne Symbol daneben (SYMBOL LEGEND) wird allein ausgelassen.
   Das Bedienfeld listet jedes Symbol mit seinem Bild und dem Namen, der daneben gedruckt ist. Der Name wird zum Namen der Position, benennen Sie ihn hier also um, wenn Sie möchten.
4. Entfernen Sie den Haken bei jedem Symbol, das Sie nicht zählen möchten. Ein Symbol, das sich nicht durchsuchen lässt (zu klein oder leer), nennt den Grund.
5. Wählen Sie {{ui:Auf N Blättern zählen}}. Ein Balken zeigt das gerade durchsuchte Blatt; {{ui:Abbrechen}} stoppt den Lauf. Die Seite bleibt benutzbar.

Die Symbole der Legende selbst werden auf ihrem Blatt nicht gezählt. Ein Blatt mit einem anderen Maßstab wird in diesem Maßstab durchsucht, und die Symbole werden in jedem rechten Winkel gedreht gefunden.

## Zählungen prüfen

- Jedes Symbol zeigt seine Summe und darunter einen Link je Blatt mit Treffern („E-103: 4“). Klicken Sie darauf, um zu diesem Blatt zu gehen. Die Treffer sind in der Farbe der Position eingerahmt.
- **Klicken Sie auf einen Rahmen**, um diesen Treffer auszulassen. Er wird gestrichelt und durchgestrichen; klicken Sie erneut, um ihn zurückzuholen.
- **Verschieben Sie die Trefferstufe** (50 % bis 100 %, beginnend bei Ihrem Wert unter {{ui:Einstellungen}}). Höhere Werte behalten nur enge Treffer. Der Schieberegler filtert nur das Gefundene; es wird nicht erneut gesucht.
- Zwei ähnlich aussehende Symbole (eine Doppel- und eine Vierfachsteckdose) können dieselbe Stelle treffen. Der bessere Treffer gewinnt, und das Bedienfeld sagt, an wie vielen Stellen das passiert ist, damit Sie sie prüfen können.
- Ein Blatt, das für die Größe des Symbols zu groß ist, wird übersprungen, und das Bedienfeld sagt es.

## Hinzufügen

Wählen Sie {{ui:N Markierungen hinzufügen}}. Jedes Symbol wird zu einer Zählposition mit einer Markierung auf jedem Treffer. Ein Name, der bereits eine Ihrer Zählpositionen ist, wird wiederverwendet; nichts wird doppelt, wo Sie bereits von Hand markiert haben. Der ganze Lauf ist ein Schritt: {{key:Ctrl+Z}} nimmt alle Positionen und Markierungen zurück.

Was Sie übernehmen, fließt auch in {{ui:Gelernt}} ein: Die Symbole werden in der Datei der Mengenermittlung für das nächste Mal gemerkt.

## Mit Ihrem Assistenten

Wenn Sie Assistenten in den Einstellungen erlauben, können sie eine Legende lesen (legend_open), den Lauf im Hintergrund starten (legend_count_start, dann legend_count_status), die Zählungen lesen (legend_count_result) und sie hinzufügen (legend_count_add, das zuvor anzeigen kann, was es hinzufügen würde). Es ist derselbe Lauf, den Sie im Bedienfeld sehen.

## Symbole in beliebigem Winkel

Setzen Sie vor dem Zählen ein Häkchen bei {{ui:Symbole in beliebigem Winkel}}, um auch Symbole zu finden, die in einem anderen als rechten Winkel gezeichnet sind (ein diagonaler Dübel, eine Leuchte, die einem Dach folgt). Die Suche dreht dann jedes Symbol alle 15 Grad; ein rundes Symbol braucht noch eine Suche, und ein nicht rundes Symbol kann bis zu sechsmal so lange dauern. Lassen Sie es aus bei rechtwinklig gezeichneten Plänen.

## Gut zu wissen

- Es braucht Symbole, die genauso gezeichnet sind wie in der Legende. Eine Legende in einer anderen Größe als die Blätter ist in Ordnung, wenn die Maßstäbe der Blätter festgelegt sind; ohne Maßstäbe werden die Symbole in der Größe der Legende gesucht.
- Ein Symbol, durch das eine Wand oder eine lange Linie hindurchgezeichnet ist, kann übersehen werden, weil es nicht mehr wie das Bild der Legende aussieht. Prüfen Sie die Treffer auf dem ersten Blatt, bevor Sie dem Rest vertrauen.
- Ein Scan ohne Text funktioniert trotzdem: Die Symbole werden anhand ihrer Reihen gefunden, und Sie tippen die Namen ein.
