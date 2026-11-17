---
title: Die Linien der PDF auswählen
summary: Klicken Sie auf eine Linie einer Vektor-PDF, um ihren ganzen zusammenhängenden Pfad zu messen, oder in einen geschlossenen Umriss für seine Fläche, mit der angezeigten Lückentoleranz und einem Rückgängig je Segment.
keywords: Pfad, auswählen, Linienführung, Linien, verbunden, ganze Strecke, nachzeichnen, Umriss, Umfang, Lücke, Toleranz, überbrücken, Segmente, Tab, Vektor, Fläche aus Linien, p
from: c22526ae
---

Bei einer Vektor-PDF sind Wände und Kanten echte Linien. {{ui:Pfad}} ({{key:P}}) nimmt sie so, wie sie gezeichnet sind: Ein Klick auf eine Linie misst alles, was an ihr hängt, von Ende zu Ende, sodass Sie eine Wand nicht durch Klicken auf ihre Ecken nachzeichnen müssen. Das Blatt braucht einen Maßstab. Eine gescannte Seite hat keine Linien zum Auswählen; verwenden Sie dort [Linear](topic:measure-linear) oder [Fläche](topic:measure-areas).

## Einen Pfad oder einen Umriss auswählen

1. Wählen Sie {{ui:Pfad}}. Die Linie unter dem Zeiger wird umrandet, die anderen Pfade, die sie sein könnte, dünn.
2. Klicken Sie auf eine Linie: Der ganze zusammenhängende Pfad wird ausgewählt. Die Leiste unter der Symbolleiste zeigt seine Segmente, seine Länge, die Lückentoleranz und wie viele Lücken überbrückt wurden. Ein Pfad, der zu seinem Start zurückkehrt, ist geschlossen und meldet außerdem seinen Umfang.
3. Oder klicken Sie in einen geschlossenen Umriss, abseits jeder Linie: Der Umriss um diesen Punkt wird als Fläche ausgewählt. Der kleinste kommt zuerst; {{key:Tab}} probiert den nächstgrößeren.
4. Drücken Sie {{key:Enter}} (oder klicken Sie rechts, oder doppelklicken Sie), um die Markierungen hinzuzufügen. Ein ausgewählter Pfad wird eine Markierung einer **linearen** Position, ein Umriss eine Markierung einer **Flächen**-Position: die aktive Position, wenn sie diese Art hat, sonst die neueste dieser Art. Ohne eine solche öffnet sich das Formular für eine neue Position, und nichts wird hinzugefügt, bis Sie erneut {{key:Enter}} drücken. Alles Ausgewählte wird in einem einzigen Rückgängig-Schritt hinzugefügt.

## Die Lückentoleranz

Zeichner lassen kleine Lücken, wo Linien sich treffen sollten. Zwei Linien verbinden sich, wenn ihre Enden näher beieinander liegen als die **Lückentoleranz**. Sie beginnt bei 1.5 Punkt auf dem Blatt (in Fuß und Zoll am Maßstab des Blatts angezeigt), und ein gestrichelter Ring dieser Breite folgt dem Zeiger und sitzt auf jedem Ende des Pfads darunter. Jede überbrückte Lücke wird bei einem ausgewählten Pfad orange umringt, und die Leiste zählt sie.

{{key:]}} macht die Toleranz breiter, {{key:[}} schmaler. Ein ausgewählter Pfad wird sofort mit der neuen Toleranz neu verbunden. An einer Verzweigung geht der Pfad geradeaus weiter, in der Richtung, die am wenigsten knickt, und verlässt den Zweig.

## Tasten

| Taste oder Aktion | Was sie tut |
|---|---|
| Klick | Den Pfad unter dem Zeiger oder den Umriss darum auswählen. |
| {{key:Shift}} + Klick | Einen weiteren Pfad oder Umriss zur Auswahl hinzufügen. |
| {{key:Tab}} | Den nächsten Pfad unter dem Zeiger oder den nächstgrößeren Umriss probieren. |
| {{key:Backspace}} oder {{key:Mod+Z}} | Das letzte Segment vom zuletzt ausgewählten Pfad nehmen, ein Segment nach dem anderen. Ein Pfad ohne Segmente verschwindet. Ohne Auswahl ist {{key:Mod+Z}} das gewöhnliche Rückgängig. |
| {{key:[}} und {{key:]}} | Schmalere und breitere Lückentoleranz. |
| {{key:Enter}} | Die Markierungen hinzufügen. |
| {{key:Esc}} | Die Auswahl aufheben. |

## Gut zu wissen

- Eine Kurve in der Zeichnung ist eine Kette kurzer gerader Stücke, daher ist ihre Länge etwas kürzer als der echte Bogen. Für einen exakten Bogen messen Sie die eigene Datei der Zeichnung ([Aus einer Zeichnung messen](topic:measure-from-a-drawing)).
- Eine überbrückte Lücke zählt als gerader Sprung darüber, daher enthält der Umfang eines geschlossenen Umrisses sie.
- Nur Striche und Füllungen in den eigenen Pfaden der Seite sind Linien. Als Buchstaben gezeichneter Text und Bilder sind es nicht.
