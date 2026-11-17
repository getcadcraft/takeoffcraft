---
title: Dächer und Neigungen
summary: Geben Sie einer Fläche ihre Neigung, um die Dachfläche aus dem Plan zu messen, und messen Sie Ortgänge, Grate und Kehlen entlang ihrer Schräge.
keywords: Dach, Neigung, Gefälle, Neigungsfaktor, Anstieg, Lauf, 6:12, Ortgang, Grat, Kehle, Giebel, Dachdeckung, Dachquadrate, geneigte Fläche, wahre Länge, Grundrissfläche
from: 38225b60
---

Ein Dachgrundriss zeigt jede Dachebene flach, von oben gesehen. Das Dach selbst ist größer: Eine Ebene mit 6:12 hat etwa 12 % mehr Fläche als ihr Grundriss, und ihre geneigten Kanten sind länger, als sie aussehen. Geben Sie der Position ihre Neigung, dann misst TakeoffCraft entlang der Schräge.

## Eine Neigung eingeben

Eine Neigung ist der Anstieg je 12 Einheiten Lauf, wie auf den Neigungssymbolen des Dachgrundrisses. Geben Sie sie als `6:12`, `6/12` oder nur `6` ein; auch ein anderer Lauf funktioniert (`4:10` entspricht 4.8:12). Ein Winkel funktioniert mit dem Gradzeichen: `26.57°`. Leer oder `0` bedeutet flach.

## Dachflächen

1. Legen Sie eine Flächenposition für die Dachdeckung an oder öffnen Sie die vorhandene.
2. Geben Sie in deren Einstellungen die **Neigung** ein, zum Beispiel `6:12`.
3. Umranden Sie jede Dachebene im Plan wie üblich mit {{ui:Fläche}}.

Jede Ebene zählt ihre Grundrissfläche mal den Neigungsfaktor: √(1 + (Anstieg ÷ 12)²), also 1.118 bei 6:12 und 1.414 bei 12:12. Wählen Sie eine Ebene aus, um ihre **Fläche** (auf der Schräge), ihre **Grundrissfläche** und den **Neigungsfaktor** zu sehen.

Ebenen mit einer anderen Neigung: Wählen Sie die Ebene aus und geben Sie in ihrem Bereich ihre eigene **Neigung** ein. Lassen Sie das Feld leer, um die Neigung der Position zu verwenden. Die 3D-Prüfansicht, die Kalkulationsbausteine (`A` ist die geneigte Fläche), die Kosten und der Export verwenden alle die geneigte Fläche. Abzugsflächen auf einer geneigten Ebene, etwa Dachfenster, werden mit derselben Neigung abgezogen.

Der Umfang (`P`) bleibt der Grundrissumfang. Messen Sie Traufen, Ortgänge, Grate und Kehlen als Strecken (siehe unten).

## Ortgänge, Grate und Kehlen

1. Legen Sie eine Längenposition an, etwa „Ortgangkante“ oder „Grate“.
2. Setzen Sie ihre **Neigungsart** auf **Ortgang** (eine geneigte Kante, wie bei einem Giebel) oder auf **Grat oder Kehle** (die Linie, an der sich zwei Ebenen treffen), und geben Sie die **Neigung** der Dachebenen ein.
3. Zeichnen Sie die Strecken im Plan mit {{ui:Länge}}.

Ein Ortgang zählt seine Grundrisslänge mal den Neigungsfaktor. Ein Grat oder eine Kehle verläuft im Grundriss unter 45° zwischen zwei Ebenen gleicher Neigung; daher ist ihre wahre Länge ihre Grundrisslänge mal √(1 + (Anstieg ÷ 12)² ÷ 2): 1.061 bei 6:12, 1.225 bei 12:12.

Eine Strecke kann beides mischen. Wählen Sie sie aus: Jedes Segment in ihrem Bereich hat eine Liste der Neigungsart — **Wie Position** (die Einstellung der Position), **Eben**, **Ortgang** oder **Grat oder Kehle** — und seine Länge entlang der Schräge. Die eigene **Neigung** einer Strecke im Bereich ersetzt die der Position für alle ihre Segmente. Der Bereich zeigt außerdem die **Grundrisslänge**, und die Beschriftungen auf dem Blatt zeigen die Längen entlang der Schräge.

Abzüge wirken weiterhin: Ein abgezogenes Segment zählt nichts, ob geneigt oder nicht.

:::note
Grate und Kehlen setzen voraus, dass beide Ebenen dieselbe Neigung haben. Bei Ebenen mit unterschiedlichen Neigungen messen Sie den Grat anderswo nach seiner wahren Länge oder zeichnen ihn als Ortgang mit einer gleichwertigen Neigung.
:::
