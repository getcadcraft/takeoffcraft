---
title: Von Hand zählen
summary: Jede Tür, jede Leuchte oder jedes Gerät anklicken, um es zu zählen, die Zählungen prüfen und Fehler korrigieren.
keywords: zählen, je, ea, Einrichtungen, Türen, Geräte, Symbole, Strichliste, Klickzählung, manuelle Zählung
from: 594f2980
---

Eine Zählposition zählt Dinge: Türen, Leuchten, Steckdosen, Sanitäreinrichtungen. Jeder Klick auf dem Blatt fügt eine Zählmarkierung hinzu. Zählen braucht keinen Maßstab.

## Zählen

1. Erstellen Sie eine Zählposition unter {{ui:Positionen}} (Typ {{ui:Zählen}}) oder wählen Sie eine.
2. Wählen Sie {{ui:Zählen}} in der Symbolleiste oder drücken Sie {{key:C}}.
3. Klicken Sie auf jedes Teil auf dem Blatt.
   Jeder Klick setzt einen Punkt in der Farbe der Position, und die Zählung der Position steigt um eins.
4. Wechseln Sie mit {{key:PageDown}} zum nächsten Blatt und zählen Sie weiter. Das Werkzeug bleibt auf {{ui:Zählen}}.
5. Drücken Sie {{key:Esc}}, wenn Sie fertig sind. TakeoffCraft kehrt zu {{ui:Auswählen}} zurück.

Ziehen verschiebt weiterhin den Ausschnitt, und das Mausrad zoomt auch während des Zählens. So können Sie sich auf dem Blatt bewegen, ohne Punkte zu setzen.

:::tip
Klicken Sie auf die Zählposition, um ihre Punkte auf jedem Blatt hervorzuheben. Die Blattliste zeigt dann an, wie viele auf jedem Blatt liegen, was hilft, Blätter zu finden, die Sie noch nicht gezählt haben.
:::

## Eine Zählung korrigieren

- **Einen Punkt entfernen**: Wählen Sie {{ui:Auswählen}} ({{key:V}}), klicken Sie auf den Punkt und drücken Sie {{key:Delete}} oder wählen Sie {{ui:Markierung löschen}}. Oder drücken Sie {{key:Mod+Z}} direkt nach einem falschen Klick.
- **Einen Punkt verschieben**: Wählen Sie ihn aus und ziehen Sie ihn.
- **Unter der falschen Position gezählt**: Wählen Sie den Punkt und die richtige Zählposition in der Liste **Position** unter **Ausgewählte Markierung**.

## Punktgröße, auf dem Bildschirm und im PDF

Die Punkte behalten auf dem Bildschirm unabhängig vom Zoom dieselbe Größe. Zum Ändern öffnen Sie {{ui:Einstellungen}}, den Tab TakeoffCraft, und wählen Sie **Größe der Zählmarkierung**: Extra klein, Klein, Mittel (Standard) oder Groß.

Der PDF-Export ({{ui:Export}} › das markierte PDF) zeichnet jeden Punkt auf Papier in derselben Größe, unabhängig von der Blattgröße: Ein Viewer, der die PDF mit 100 % zeigt, stellt die Punkte so groß dar, wie sie auf dem Bildschirm sind. Würden sich die Punkte auf einem Blatt sonst berühren, macht der Export die Punkte dieses Blattes kleiner, damit jeder lesbar bleibt.

## Viele gleiche Symbole

Bei einem Symbol, das sich auf einem Blatt oft wiederholt, probieren Sie [Auto-Zählen](topic:auto-count): Rahmen Sie eines ein, prüfen Sie, was gefunden wird, und fügen Sie alle in einem Schritt hinzu.

## Zählungen in Formeln verwenden

Die Menge einer Zählposition ist **N**. Komponenten eines Kalkulationsbausteins können sie verwenden, zum Beispiel Scharniere `N * 3` für Türen. Siehe [Kalkulationsbausteine und Formeln](topic:assemblies).
