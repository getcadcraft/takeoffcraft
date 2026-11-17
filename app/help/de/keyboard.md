---
title: Tastatur und Maus
summary: Jede Taste sowie jede Maus-, Trackpad- und Touch-Aktion in TakeoffCraft, gruppiert, mit den Unterschieden je Plattform.
keywords: Tasten, Tastenkürzel, Shortcuts, Hotkeys, Tastatur, Maus, Trackpad, Touch, Pan, Zoom, Mausrad, Rechtsklick, Doppelklick, Space, Shift, kopieren, einfügen, ausschneiden, duplizieren, alles auswählen
from: 6f2c441d
---

Buchstabentasten funktionieren, wenn der Zeiger irgendwo auf der Seite steht und Sie gerade nicht in einem Feld tippen. Solange ein Dialogfeld offen ist, gelten dessen eigene Tasten. Buchstaben funktionieren mit oder ohne {{key:Shift}}.

## Werkzeuge

| Taste | Werkzeug |
|---|---|
| {{key:V}} | {{ui:Auswählen}} |
| {{key:L}} | {{ui:Länge}} |
| {{key:A}} | {{ui:Fläche}} |
| {{key:O}} | {{ui:Kreis}} |
| {{key:B}} | {{ui:Raum}} (einen Raum mit einem Klick füllen) |
| {{key:R}} | {{ui:Bogen}} ein oder aus (bei Länge, Fläche und Aussparung) |
| {{key:E}} | {{ui:Abzug}} ein oder aus: Die nächsten Segmente einer Strecke werden gezeichnet, aber nicht gezählt |
| Eine Ziffer, `@` oder `#` beim Zeichnen | Das Feld {{ui:Eingabe}} öffnen: Länge oder Koordinaten eingeben, {{key:Enter}} setzt den Punkt ([Lineare Strecken messen](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Aussparung}} (wählen Sie zuerst eine Fläche) |
| {{key:C}} | {{ui:Zählen}} |
| {{key:S}} | {{ui:Auto-Zählen}} |
| {{key:K}} | {{ui:Kalibrieren}} |
| {{key:D}} | Den Maßstab {{ui:Prüfen}} |

## Beim Zeichnen

| Taste oder Aktion | Was sie tut |
|---|---|
| Klick | Einen Punkt setzen (einen Punkt bei Zählen). |
| {{key:P}} | Pfad: den gesamten zusammenhängenden Pfad einer PDF-Linie wählen oder den Umriss um einen Klick ([Linien der PDF wählen](topic:pick-the-lines)). |
| {{key:F3}} | Einrasten an den Linien der Zeichnung ein oder aus ([An den Linien der Zeichnung einrasten](topic:snap-to-the-drawing)). |
| {{key:Shift}} beim Klicken gehalten | Das Segment vom letzten Punkt aus auf 0°, 45°, 90° oder 135° einrasten. Nicht für Bogenpunkte oder Kreise. |
| Doppelklick | Eine Strecke beenden oder eine Fläche bzw. Aussparung schließen. |
| {{key:Enter}} | Eine Strecke beenden oder eine Fläche bzw. Aussparung schließen. |
| Rechtsklick (ohne zu bewegen) | Eine Strecke beenden oder eine Fläche bzw. Aussparung schließen. |
| Klick auf den ersten Punkt | Eine Fläche oder Aussparung schließen (ab dem dritten Punkt). |
| {{key:Backspace}} oder {{key:Delete}} | Den letzten Punkt entfernen (zuerst den ausstehenden Bogenpunkt). |
| {{key:Esc}} | Den ausstehenden Bogenpunkt verwerfen; dann die unfertige Markierung abbrechen; dann zurück zu {{ui:Auswählen}}. |

## Auswählen und Bearbeiten

| Taste oder Aktion | Was sie tut |
|---|---|
| Klick auf eine Markierung (Werkzeug Auswählen) | Sie auswählen und ihre Position zur aktuellen machen. |
| {{key:Shift}} + Klick auf eine Markierung | Sie zur Auswahl hinzufügen oder daraus entfernen. |
| {{key:Mod+A}} | Jede Markierung auf dem geöffneten Blatt auswählen. |
| Eckgriff ziehen | Diesen Punkt verschieben ({{key:Shift}} rastet auf 45° ein). Funktioniert, wenn eine Markierung ausgewählt ist. |
| {{key:Delete}} oder {{key:Backspace}} | Die ausgewählten Markierungen löschen (wenn Sie nicht zeichnen). |
| {{key:Esc}} | Auswahl aufheben: die Auswahl und die Prüflinie löschen. |
| {{key:Mod+Z}} | Rückgängig. |
| {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} | Wiederholen. |

## Kopieren und Einfügen

| Taste | Was sie tut |
|---|---|
| {{key:Mod+C}} | Die ausgewählten Markierungen mit ihren Positionen kopieren. |
| {{key:Mod+X}} | Ausschneiden: die ausgewählten Markierungen kopieren und dann löschen. |
| {{key:Mod+V}} | Einfügen: Die Kopie folgt dem Zeiger; klicken Sie, wo sie hinkommt. |
| {{key:Mod+Shift+V}} | An gleicher Position einfügen: dieselbe Stelle auf dem geöffneten Blatt. |
| {{key:Mod+D}} | Die ausgewählten Markierungen duplizieren: Die Kopie folgt dem Zeiger; klicken Sie, wo sie hinkommt. |
| {{key:Esc}} | Nichts ablegen: ein Einfügen oder Duplizieren abbrechen, das am Zeiger hängt. |

Die Buchstaben allein wählen weiterhin Werkzeuge aus ({{key:C}} ist {{ui:Zählen}}, {{key:D}} ist {{ui:Prüfen}}, {{key:X}} ist {{ui:Aussparung}}, {{key:V}} ist {{ui:Auswählen}}, {{key:A}} ist {{ui:Fläche}}); nur {{key:Mod}} zusammen mit ihnen kopiert und fügt ein. In einem Textfeld kopieren und fügen diese Tasten Text wie üblich. Siehe [Markierungen kopieren, einfügen und duplizieren](topic:copy-paste).

:::warning
{{key:Backspace}} löscht die ausgewählte Markierung, wenn Sie nicht zeichnen. Ist das versehentlich passiert, holt {{key:Mod+Z}} sie zurück.
:::

## Dateien

| Taste | Was sie tut |
|---|---|
| {{key:Mod+O}} | {{ui:PDFs öffnen}} |
| {{key:Mod+S}} | {{ui:Ermittlung speichern}} |

Diese beiden funktionieren auch, während Sie in einem Feld tippen.

## Ansicht und Blätter

| Taste oder Aktion | Was sie tut |
|---|---|
| Mausrad | Am Zeiger hinein- und herauszoomen. |
| Ziehen (linke, mittlere oder rechte Taste) | Verschieben. Bei {{ui:Auto-Zählen}} zieht ein Ziehen mit der linken Taste stattdessen das Suchfeld auf. |
| {{key:Space}} gehalten + Ziehen | Verschieben, bei jedem Werkzeug. |
| {{key:F}} | {{ui:Seite einpassen}} |
| {{key:W}} | {{ui:Breite einpassen}} |
| {{key:Plus}} oder {{key:=}} | In der Mitte der Ansicht hineinzoomen. |
| {{key:Minus}} | In der Mitte der Ansicht herauszoomen. |
| {{key:PageDown}} / {{key:PageUp}} | Nächstes bzw. vorheriges Blatt in der Blattliste. |
| {{key:Ctrl+Shift+F}} | Vollbildmodi durchschalten (Control auf jeder Plattform, auch am Mac). |
| {{key:F1}} | Diese Hilfe öffnen oder schließen, ein Bereich an der Seite. |
| {{key:3}} | Die 3D-Prüfansicht des Blatts ein oder aus. |

## 3D-Ansicht

| Taste oder Aktion | Was sie tut |
|---|---|
| Ziehen oder Ziehen mit der mittleren Taste | Kreisen. |
| {{key:Shift}} + Ziehen oder Ziehen mit der rechten Taste | Verschieben. |
| Mausrad | Zoomen am Zeiger. Auf einem Trackpad kreist ein Wischen mit zwei Fingern, und ein Spreizen zoomt. |
| Klick | Die Markierung unter dem Zeiger auswählen ({{key:Shift}} + Klick fügt hinzu oder entfernt). |
| {{key:F}} oder {{key:W}} | Zoom Grenzen. |
| {{key:3}} | Zurück zum flachen Blatt. |

Siehe [Die Ermittlung in 3D prüfen](topic:check-in-3d).

## Auto-Zählen

| Taste oder Aktion | Was sie tut |
|---|---|
| Einen Rahmen ziehen | Das Symbol einrahmen, nach dem gesucht wird (startet die Suche). |
| Klick auf ein Trefferfeld | Es verwerfen oder wiederherstellen. |
| {{key:Esc}} | Eine laufende Suche abbrechen oder die Prüfung verwerfen. |

## Hilfe

| Taste | Was sie tut |
|---|---|
| {{key:F1}} | Den Hilfebereich öffnen oder schließen (auch die Schaltfläche {{ui:Hilfe}} in der Anwendungsleiste). Es funktioniert bei jedem Werkzeug, auch während Sie in einem Feld tippen. |
| {{key:Esc}} | Den Hilfebereich schließen. Im Suchfeld löscht das erste Esc die Suche. Ist der Bereich offen, schließt ein Esc nach einem Klick auf das Blatt zuerst den Bereich; drücken Sie erneut, um in TakeoffCraft abzubrechen. |

:::mac
Auf vielen Mac-Tastaturen steuert die oberste Reihe Helligkeit und Lautstärke. Drücken Sie fn zusammen mit F1, oder aktivieren Sie in den Systemeinstellungen unter „Tastatur“ die Option „F1, F2 usw. Tasten als Standardfunktionstasten verwenden“.
:::

## Dialogfelder und Felder

| Taste | Was sie tut |
|---|---|
| {{key:Enter}} | In einem Feld: den Wert übernehmen. Im Kalibrierungsdialog: {{ui:Maßstab festlegen}}. |
| {{key:Esc}} | Ein Dialogfeld schließen (wie {{ui:Abbrechen}}); das Formular {{ui:Neue Position}} schließen. |
| {{key:Tab}} | Zum nächsten Feld wechseln. |

## Hinweise zur Plattform

:::mac
- {{key:Mod}} ist die Befehlstaste: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Vollbild ist die Ausnahme: Control+Shift+F.
- Der Rechtsklick ist ein Klick mit zwei Fingern auf dem Trackpad, sobald der sekundäre Klick in den Systemeinstellungen unter „Trackpad“ aktiviert ist. TakeoffCraft liest nur die sekundäre Taste; ein Control-Klick kann als einfacher Klick gewertet werden und einen Punkt hinzufügen.
- Zwei Finger, die auf einem Trackpad scrollen, zoomen das Blatt (sie scrollen es nicht). Zum Verschieben drücken und ziehen Sie oder halten Sie {{key:Space}} und ziehen.
- Bild auf und Bild ab sind fn zusammen mit den Pfeiltasten nach oben und unten auf Tastaturen, die diese Tasten nicht haben.
- Die Rücktaste ist die Taste mit der Beschriftung „delete“.
:::

:::windows
- {{key:Mod}} ist Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Auf einem Laptop-Touchpad zoomt ein Scrollen mit zwei Fingern das Blatt. Zum Verschieben drücken und ziehen Sie.
:::

:::linux
- {{key:Mod}} ist Ctrl. Manche Desktops haben eigene Kürzel mit Ctrl+Alt oder Super; TakeoffCraft nutzt keines davon.
- Auf einem Touchpad zoomt ein Scrollen mit zwei Fingern das Blatt. Zum Verschieben drücken und ziehen Sie.
:::

:::touch
TakeoffCraft liest Touch als einen einzigen Zeiger:

- Tippen setzt einen Punkt, wählt eine Markierung aus oder fügt einen Zählpunkt hinzu.
- Ziehen mit einem Finger verschiebt das Blatt (bei {{ui:Auto-Zählen}} zieht es das Suchfeld auf).
- Zoomen per Spreizen wird noch nicht unterstützt. Verwenden Sie {{ui:Seite einpassen}} und {{ui:Breite einpassen}} oder auf einer Tastatur {{key:Plus}} und {{key:Minus}}.
- Zum Schließen einer Fläche tippen Sie auf ihren ersten Punkt. Zum Beenden einer Strecke doppeltippen Sie dort, wo Ihr Browser einen Doppeltipp als Doppelklick wertet, oder drücken Sie auf einer Tastatur {{key:Enter}}.
- Es gibt keine Live-Längenanzeige, bis Sie tippen, weil es kein Schweben über dem Blatt gibt.

Eine Tastatur mit Maus oder Trackpad ist heute der bessere Weg für die Mengenermittlung.
:::

## Tasten, die der Browser behält

Browser behalten einige Tastenkürzel für sich, und eine Seite kann sie nicht nutzen: Registerkarte schließen ({{key:Mod+W}}), neue Registerkarte oder neues Fenster ({{key:Mod+T}}, {{key:Mod+N}}) und Browserzoom ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Deshalb zoomt TakeoffCraft das Blatt mit dem Mausrad und mit den einfachen Tasten {{key:Plus}} und {{key:Minus}}. Drücken Sie {{key:Mod+Plus}} versehentlich, wird die ganze Seite größer; {{key:Mod+0}} stellt sie zurück. Siehe [Tasten, Mäuse und Trackpads](common:keys).

## Wo Verschieben zu finden ist

Es gibt keinen Befehl Verschieben: Wählen Sie einen Zählpunkt aus und ziehen Sie ihn, oder wählen Sie eine Fläche oder eine Linie aus und ziehen Sie ihre Eckgriffe.
