---
title: Was TakeoffCraft aus Ihren Mengenermittlungen lernt
summary: TakeoffCraft behält die Symbole, die Sie mit Auto-Zählen bestätigt haben, Ihre Konditionssätze, die am häufigsten verwendeten Kalkulationsbausteine und Muster, die Sie auf jeder Seite wiederholen, alles in der Datei der Mengenermittlung. Einsehen, verwenden, löschen.
keywords: lernen, gelernt, lernend, assistent, merken, symbole, vorlagen, wie beim letzten auftrag, letzter auftrag, konditionssatz, konditionen, wiederverwenden, kalkulationsbausteine, am häufigsten verwendet, vorschläge, auf jeder seite wiederholen, jede seite, schriftfeld, muster, alles löschen, vergessen, datenschutz
from: 54d99e99
---

TakeoffCraft wird mit jeder Mengenermittlung schneller. Es lernt **nur von dem, was Sie übernehmen**:

- die Symbole, die Sie mit [{{ui:Auto-Zählen}}](topic:auto-count) markiert und dann hinzugefügt haben,
- die Konditionssätze, die Sie speichern,
- die Kalkulationsbausteine, die Sie verwenden (einmal pro Auftrag),
- die Muster von Markierungen, die Sie auf jeder Seite wiederholen.

Es ist reiner Abgleich auf Ihren eigenen Blättern, dieselbe Suche, die Auto-Zählen ausführt. Es ist kein trainiertes Modell. Alles, was es lernt, wird **in der Datei dieser Mengenermittlung** (`.takeoff.json`) gespeichert, und nichts wird irgendwohin gesendet. Um es in den nächsten Auftrag mitzunehmen, verwenden Sie [Wie beim letzten Auftrag](topic:what-it-learned#same-as-last-job).

Wählen Sie {{ui:Gelernt}} in der Werkzeugleiste (die Glühbirne neben {{ui:Auto-Zählen}}), um alles zu sehen.

## Symbole

Wenn Sie ein Symbol mit {{ui:Auto-Zählen}} markieren und {{ui:Hinzufügen}} wählen, wird das markierte Symbol zusammen mit der von Ihnen akzeptierten Trefferstufe gespeichert.

- Wählen Sie in {{ui:Gelernt}} die Option {{ui:Auf diesem Blatt finden}} oder {{ui:Auf jedem Blatt finden}}. Es öffnet sich die übliche Prüfung von Auto-Zählen: Klicken Sie auf eine Box, um sie auszuschließen, verschieben Sie den Schieberegler und fügen Sie sie dann hinzu. Erst dann wird etwas hinzugefügt.
- Wenn Sie ein Blatt öffnen, auf dem noch keines der gelernten Symbole vorkommt, bietet eine Leiste oben {{ui:Finden …}} dafür an. {{ui:Nicht jetzt}} blendet sie für dieses Blatt aus.
- Wenn die Mengenermittlung keine Position dieses Namens hat, fügt das Hinzufügen der Markierungen auch die Position hinzu (ein Schritt im Rückgängig-Verlauf).
- Ein erneutes Hinzufügen des Symbols derselben Position zählt zu dem bereits bekannten dazu; ein anders aussehendes Symbol wird als zweites gespeichert.
- Wie bei Auto-Zählen findet es das Symbol auch im rechten Winkel und auf Blättern mit anderem Maßstab.

## Konditionssätze

Ein Satz speichert die Konditionen einer Mengenermittlung (Positionen mit ihren Einheiten, Einheitspreisen, Verschnitt und Kalkulationsbausteinen), ohne Markierungen.

1. Wählen Sie in {{ui:Gelernt}} die Option {{ui:Konditionen dieser Mengenermittlung als Satz speichern…}} und geben Sie ihm einen Namen. Ein Satz mit demselben Namen wird ersetzt.
2. In einer Mengenermittlung, die den Satz hat, fügt {{ui:Hinzufügen}} die Konditionen hinzu, die ihr noch fehlen. Konditionen mit gleichem Namen und gleichem Typ bleiben unverändert. Es ist ein Schritt im Rückgängig-Verlauf.

## Wie beim letzten Auftrag

Die Datei Ihres letzten Auftrags enthält, was er gelernt hat. So starten Sie einen neuen Auftrag damit:

1. Öffnen Sie die neuen Pläne und wählen Sie {{ui:Gelernt}} › {{ui:Wie beim letzten Auftrag…}}.
2. Wählen Sie die `.takeoff.json` des letzten Auftrags.
3. Markieren Sie, was übernommen werden soll: seine Konditionen (nur die, die diese Mengenermittlung noch nicht hat) und was er gelernt hat (Symbole, Sätze, Kalkulationsbausteine, Muster). Dann {{ui:Hereinholen}}.

Seine Konditionen werden außerdem als Satz gespeichert, der nach diesem Auftrag benannt ist. Seine Markierungen und Mengen bleiben in seiner eigenen Datei. Das Ganze ist ein Schritt im Rückgängig-Verlauf.

## Am häufigsten verwendete Kalkulationsbausteine

Eine Position mit einem Kalkulationsbaustein gilt als einmal pro Auftrag verwendet, wenn sie eine Menge hat und Sie die Mengenermittlung speichern. Ein Auftrag ist die Menge der Plandateien, aus denen er erstellt wird; deshalb zählt das erneute Speichern derselben Mengenermittlung nicht doppelt. Die Liste unter {{ui:Am häufigsten verwendete Kalkulationsbausteine}} stellt die am häufigsten verwendeten zuerst. Sie lässt die aus, die diese Mengenermittlung schon hat. {{ui:Hinzufügen}} fügt einen so hinzu, wie Sie ihn zuletzt verwendet haben, mit allen seinen Teilen.

## Auf jeder Seite wiederholen

Für Markierungen, die auf jeder Seite eines Satzes gleich sind, etwa eine Zählung von Schriftfeldern oder ein typisches Detail:

1. Wählen Sie die Markierungen auf einem Blatt aus ([Markierungen auswählen](topic:copy-paste#select-the-marks)).
2. Wählen Sie in {{ui:Gelernt}} die Option {{ui:Ausgewählte Markierungen auf jeder Seite wiederholen…}}, benennen Sie das Muster und bestätigen Sie.

Sie werden auf jede andere offene Seite **derselben Größe** gesetzt, an dieselbe Stelle, als ein Schritt im Rückgängig-Verlauf. Strecken und Flächen kommen nur auf Seiten mit demselben Maßstab; Zählungen auf jede Seite dieser Größe. Eine Seite, die sie bereits hat, wird übersprungen. Das Muster wird gespeichert, daher erhalten später geöffnete Seiten das Angebot in der Leiste, oder Sie verwenden {{ui:Auf jeder Seite wiederholen}} in der Liste.

## Einsehen, löschen

Alles Gelernte ist in {{ui:Gelernt}} aufgelistet. Der Papierkorb löscht ein einzelnes Element. {{ui:Alles löschen}} löscht alles Gelernte und lässt Ihre Positionen und Markierungen unverändert. Beides kann bis zum Schließen der Mengenermittlung rückgängig gemacht werden, und beides wird mit der Mengenermittlung gespeichert.

Um das Lernen in einer Mengenermittlung zu beenden, deaktivieren Sie {{ui:Aus dieser Mengenermittlung lernen}}. Es wird nichts Neues gelernt, und was aufgelistet ist, bleibt, bis Sie es löschen.

## Gut zu wissen

- Ältere Versionen von TakeoffCraft öffnen eine Datei mit Gelerntem normal. Sie ignorieren diesen Teil und verwerfen ihn, wenn sie die Datei erneut speichern.
- Ein gelerntes Symbol ist ein kleines Bild dessen, was Sie markiert haben, und wird in der Datei gespeichert (je wenige Kilobyte).
- Gelernte Symbole werden wie bei Auto-Zählen durchsucht, daher gelten dieselben Grenzen: [Ein Symbol mit Auto-Zählen zählen](topic:auto-count).
