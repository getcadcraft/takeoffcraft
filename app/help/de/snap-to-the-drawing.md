---
title: Auf die Linien der Zeichnung einrasten
summary: Punkte springen beim Messen oder Kalibrieren auf die eigenen Linien der PDF-Datei: Enden, Mittelpunkte, Schnittpunkte oder beliebige Stellen auf einer Linie, mit einer Markierung, die zeigt, welche es ist.
keywords: Fang, Objektfang, Endpunkt, Mittelpunkt, Schnittpunkt, Nächster Punkt, Vektor, Linienwerk, Linien, präzise, exakt, F3, Magnet, Ecke
from: 41d29e9b
---

Die meisten Planmappen sind Vektor-PDFs: Ihre Wände und Kanten sind echte Linien, keine Pixel. Beim Messen rastet TakeoffCraft Ihre Klicks auf diese Linien ein. So beginnt eine Strecke genau an der Ecke einer Wand, und eine Kalibrierung liest das Maß, das in der Zeichnung steht, nicht das Pixel, das Sie getroffen haben.

Der Fang ist beim Start eingeschaltet. Schalten Sie ihn mit {{ui:Fang}} in der Statusleiste oder mit {{key:F3}} ein und aus; die Einstellung wird in diesem Browser gespeichert (sie steht auch unter [Einstellungen](topic:settings)).

## Wonach gefangen wird

Kommt der Zeiger etwa 10 Bildschirmpixel an eine Linie heran, zeigt eine Markierung, wohin der Klick fällt, mit ihrem Namen:

| Markierung | Name | Wo |
|---|---|---|
| Quadrat | **Endpunkt** | Das Ende einer Linie oder eine Ecke, an der Linien zusammentreffen. Die beiden Enden einer Kurve zählen; die Punkte dazwischen nicht. |
| Dreieck | **Mittelpunkt** | Die Mitte einer geraden Linie. |
| Kreuz | **Schnittpunkt** | Wo sich zwei Linien kreuzen oder wo eine an einer anderen endet. |
| Sanduhr | **Auf der Linie** | Der nächstgelegene Punkt auf einer Linie, wenn kein Endpunkt, Mittelpunkt oder Schnittpunkt nahe ist. |

Der nächste Endpunkt, Mittelpunkt oder Schnittpunkt gewinnt. Nur wenn keiner nahe ist, landet der Punkt auf der Linie selbst. Zoomen Sie hinein, um zwischen eng beieinanderliegenden Punkten zu wählen: Die 10 Pixel sind Bildschirmpixel, daher erfassen sie bei stärkerem Zoom einen kleineren Ausschnitt der Zeichnung.

## Wo er wirkt

Der Fang wirkt bei {{ui:Länge}}, {{ui:Fläche}}, {{ui:Kreis}}, {{ui:Aussparung}}, {{ui:Kalibrieren}} und {{ui:Prüfen}} sowie beim Ziehen an der Ecke einer ausgewählten Markierung. Er setzt auch Bogenpunkte. {{ui:Zählen}}, {{ui:Auto-Zählen}} und Einfügen werden nicht gefangen.

Ein gefangener Punkt hat Vorrang vor dem 45°-Fang von {{key:Shift}}. Um im 45°-Winkel weg von den Linien zu zeichnen, schalten Sie zuerst den Fang mit {{key:F3}} aus.

:::tip
Kalibrieren Sie bei eingeschaltetem Fang. Klicken Sie nahe an die beiden Enden einer Bemaßungslinie oder einer Wand, deren Maß Sie kennen: Beide Punkte landen genau auf der Zeichnung, und der Maßstab wird exakt (die Statusleiste nennt dann die Voreinstellung, zu der er passt).
:::

## Blätter, an denen nicht gefangen werden kann

- **Gescannte Blätter** sind Bilder ohne Linien, an denen gefangen werden könnte. Die Statusleiste zeigt „Dieses Blatt hat keine Linien zum Einrasten (eine gescannte Seite ist ein Bild).“, und Punkte landen dort, wo Sie klicken.
- **Sehr große Zeichnungen**: Der Fang liest bis zu 400.000 Liniensegmente pro Blatt. Bei einem Blatt mit mehr meldet er das und fängt nur an den ersten.
- **Text** wird nicht gefangen, außer die PDF zeichnet ihre Buchstaben als Linien (manche Plotter tun das).

Die Linien eines Blatts werden beim ersten Öffnen im Hintergrund gelesen. Bei einem großen Blatt kann es eine Sekunde dauern, bis die Markierungen erscheinen.
