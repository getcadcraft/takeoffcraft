---
title: Markierungen kopieren, einfügen und duplizieren
summary: Markierungen mit ihren Positionen kopieren, dort einfügen, wo Sie klicken, oder an derselben Stelle auf einem anderen Blatt; außerdem duplizieren, ausschneiden, löschen und alles auswählen, jeweils mit einem Rückgängig-Schritt.
keywords: kopieren, einfügen, ausschneiden, duplizieren, an gleicher Position einfügen, Zwischenablage, alles auswählen, Auswahl aufheben, mehrere Markierungen, typisches Geschoss, wiederholen, gleicher Plan, anderes Blatt, Position kopieren, Position duplizieren
from: e20e9024
---

Die Gruppe {{ui:Bearbeiten}} der Symbolleiste enthält {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}} und {{ui:Einfügen}}. Ihr Menü {{ui:Mehr}} enthält den Rest, jeweils mit seiner Taste: {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Alles auswählen}} und {{ui:Auswahl aufheben}}. Jede davon lässt sich mit {{key:Mod+Z}} mit einem Schritt rückgängig machen.

## Die Markierungen auswählen

1. Wählen Sie {{ui:Auswählen}} ({{key:V}}) und klicken Sie auf eine Markierung.
2. Halten Sie {{key:Shift}} gedrückt und klicken Sie auf weitere Markierungen, um sie hinzuzufügen. {{key:Shift}} + Klick auf eine ausgewählte Markierung nimmt sie wieder heraus.
3. Oder drücken Sie {{key:Mod+A}} ({{ui:Alles auswählen}}), um jede Markierung auf dem geöffneten Blatt zu wählen.

Bei mehreren ausgewählten Markierungen zeigt der rechte Bereich **Ausgewählte Markierungen**: wie viele von jeder Position, mit {{ui:Kopieren}}, {{ui:Duplizieren}}, {{ui:Ausschneiden}} und {{ui:Markierungen löschen}}. Eckgriffe erscheinen nur, wenn eine einzelne Markierung ausgewählt ist. {{key:Esc}} ({{ui:Auswahl aufheben}}) hebt die Auswahl auf.

## Kopieren und dort einfügen, wo Sie klicken

1. Wählen Sie die Markierungen aus und drücken Sie {{key:Mod+C}} ({{ui:Kopieren}}). Die Markierungen werden mit ihren Positionen kopiert, einschließlich des Kalkulationsbausteins, des Verschnitts und der Kosten jeder Position.
2. Gehen Sie zu dem Blatt, auf das sie sollen (es kann dasselbe Blatt sein).
3. Drücken Sie {{key:Mod+V}} ({{ui:Einfügen}}). Eine gestrichelte Kopie folgt dem Zeiger.
4. Klicken Sie, wohin sie soll. Die Mitte der kopierten Markierungen landet am Zeiger.

{{key:Esc}} bricht ab und fügt nichts hinzu. Die eingefügten Markierungen sind danach ausgewählt, sodass {{key:Delete}} oder {{key:Mod+Z}} sie wieder entfernt.

In derselben Mengenermittlung gehen eingefügte Markierungen auf **dieselben Positionen**, sodass sich ihre Mengen zu diesen Positionen addieren. In einer anderen Mengenermittlung (anderer Tab oder nach {{ui:Neu}}) wird eine Position mit gleichem Namen und Typ verwendet; andernfalls wird die Position mit ihrem Kalkulationsbaustein hinzugefügt. Trägt bereits eine Position eines anderen Typs den Namen, heißt die hinzugefügte Position „(Name) (Kopie)“.

Eingefügte Markierungen kommen in den Angebotsbereich, der oben im Bedienfeld {{ui:Positionen}} gewählt ist (oder in keinen). Siehe [Angebotsbereiche](topic:bid-areas).

## An gleicher Position einfügen

{{key:Mod+Shift+V}} ({{ui:An gleicher Position einfügen}}) setzt die Kopie genau an dieselbe Stelle auf dem geöffneten Blatt, nach ihrer Lage auf der Seite. Verwenden Sie es für ein typisches Geschoss: Nehmen Sie Geschoss 2 auf, kopieren Sie, öffnen Sie Geschoss 3 und fügen Sie an gleicher Position ein.

An gleicher Position einfügen braucht ein Blatt **derselben Größe** wie das, von dem Sie kopiert haben. Auf einem Blatt anderer Größe sagt TakeoffCraft das und fügt nichts ein; verwenden Sie stattdessen {{ui:Einfügen}} und klicken Sie. Auf dem Blatt, von dem Sie kopiert haben, landet die Kopie über den Originalen.

## Der Maßstab muss übereinstimmen

Längen und Flächen hängen vom Maßstab des Blattes ab. Eine Strecke, die bei 1/4" = 1'-0" 10' misst, würde auf einem Blatt mit 1/8" = 1'-0" 20' messen. Deshalb fügt TakeoffCraft Strecken und Flächen nur auf einem Blatt mit **demselben Maßstab** wie dem Blatt ein, von dem sie stammen, und sagt klar, wenn das nicht zutrifft:

- Das geöffnete Blatt hat noch keinen Maßstab: Geben Sie ihm zuerst einen ([Maßstab festlegen](topic:set-the-scale)), dann fügen Sie ein.
- Das geöffnete Blatt hat einen anderen Maßstab: Die Meldung nennt beide Maßstäbe. Fügen Sie auf einem Blatt mit demselben Maßstab ein.
- Zählungen brauchen keinen Maßstab: Kopierte Zählungen werden überall eingefügt.

## Duplizieren

{{key:Mod+D}} ({{ui:Duplizieren}}) kopiert die ausgewählten Markierungen und legt die Kopie sofort an den Zeiger; klicken Sie, wohin sie soll. Nichts wird hinzugefügt, bis Sie klicken, und {{key:Esc}} lässt nichts zurück. Duplizieren ändert nicht, was {{ui:Einfügen}} einfügt.

## Ausschneiden und löschen

- {{key:Mod+X}} ({{ui:Ausschneiden}}) kopiert die ausgewählten Markierungen und löscht sie. Fügen Sie sie dort ein, wo sie hingehören, oder machen Sie das Ausschneiden rückgängig.
- {{key:Delete}} oder {{key:Backspace}} ({{ui:Löschen}}) löscht die ausgewählten Markierungen, ohne sie zu kopieren.

## Eine Position kopieren

Der Positionseditor (unter **Positionen**) endet mit:

- {{ui:Position kopieren}}: kopiert die Position mit Kalkulationsbaustein, Verschnitt und Kosten, ohne Markierungen. {{ui:Einfügen}} fügt dann eine Kopie davon zu dieser Mengenermittlung oder einer anderen hinzu.
- {{ui:Position duplizieren}}: fügt sofort eine Kopie hinzu, benannt „(Name) (Kopie)“.

:::tip
Die Kopie bleibt auf diesem Computer: Sie wird in diesem Tab und im Speicher des Browsers gehalten, sodass ein anderer TakeoffCraft-Tab sie einfügen kann. Nichts wird hochgeladen, und die Zwischenablage des Systems wird nicht verwendet, daher lassen sich keine Markierungen in andere Programme einfügen.
:::

:::note
Eine Kopie stammt jeweils von einem Blatt. Markierungen werden unverändert eingefügt: Eine Kopie lässt sich noch nicht drehen oder spiegeln.
:::
