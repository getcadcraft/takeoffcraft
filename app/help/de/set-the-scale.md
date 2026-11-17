---
title: Maßstab festlegen
summary: Geben Sie jedem Blatt einen Maßstab, mit einer Voreinstellung oder durch Kalibrieren an einem bekannten Maß, prüfen Sie ihn, und verstehen Sie, warum Blätter ohne Maßstab nicht in den Summen stehen.
keywords: Maßstab erkennen, Maßstab lesen, Maßstab aus Text, alle Blätter, Maßstab, kalibrieren, Voreinstellung, Maßstab prüfen, überprüfen, bekanntes Maß, ohne Maßstab, kein Maßstab, Verhältnis, Maßstab festlegen
from: 8f0148e6
---

Jedes Blatt hat seinen eigenen Maßstab. Sie legen ihn fest, oder Sie lassen TakeoffCraft ihn aus dem Text der Blätter lesen (unten), und prüfen ihn. Solange ein Blatt keinen Maßstab hat, verweigern {{ui:Länge}}, {{ui:Fläche}}, {{ui:Kreis}} und {{ui:Aussparung}} die Messung darauf. {{ui:Zählen}} und {{ui:Auto-Zählen}} funktionieren ohne Maßstab.

Die Blattliste zeigt den Maßstab jedes Blatts oder **Kein Maßstab**. Die Leiste unter dem geöffneten Blatt zeigt dasselbe.

## Eine Voreinstellung verwenden (wenn das PDF in Originalgröße gedruckt ist)

1. Öffnen Sie das Blatt.
2. Öffnen Sie die Liste {{ui:Voreinstellung}} in der Gruppe {{ui:Maßstab}}.
3. Wählen Sie den auf der Zeichnung gedruckten Maßstab, zum Beispiel `1/8" = 1'-0"` unter Architektur.
   Die Statusleiste zeigt: „Maßstab für dieses Blatt: 1/8" = 1'-0".“
4. Prüfen Sie ihn (unten).

Eine Voreinstellung setzt voraus, dass das PDF die reale Papiergröße hat, für die die Zeichnung gemacht wurde. Wurde das PDF mit „an Seite anpassen“ erstellt oder ist es ein Satz im halben Maßstab, ist die Voreinstellung falsch. Kalibrieren Sie stattdessen.

Die vollständige Liste finden Sie unter [Maßstabsvoreinstellungen](topic:scale-presets).

## Maßstäbe aus dem Text der Blätter lesen

Die meisten Zeichnungen nennen ihren Maßstab: `SCALE: 1/4" = 1'-0"` im Schriftfeld, `1:100` unter einer Ansicht. TakeoffCraft kann ihn lesen und alle Blätter auf einmal festlegen.

1. Öffnen Sie die Liste {{ui:Voreinstellung}} und wählen Sie {{ui:Aus dem Text der Blätter…}} (oben).
2. Die Liste zeigt jedes Blatt: seinen aktuellen Maßstab und was sein Text sagt — **Sagt 1/4" = 1'-0"**, **Kein Maßstab im Text** oder **Sagt: nicht maßstäblich** (NTS).
3. Blätter ohne Maßstab, die einen angeben, sind angehakt. Haken Sie beliebige an oder ab und wählen Sie dann {{ui:Die angehakten Maßstäbe festlegen}}. Ein {{key:Mod+Z}} nimmt sie alle zurück.
4. Prüfen Sie auf jedem Blatt eine Maßangabe mit {{ui:Prüfen}} (unten): Eine Voreinstellung stimmt nur, wenn das PDF in Originalgröße gedruckt ist.

Gelesen werden Architektur- (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), Ingenieur- (`1" = 20'`) und metrische Schreibweisen (`1:50`), die zu einer [Voreinstellung](topic:scale-presets) passen. Nennt ein Blatt mehr als einen Maßstab (ein Plan mit vergrößerten Details), nimmt es den, den es am häufigsten nennt; einer, der nach dem Wort SCALE steht, zählt doppelt. Die anderen werden rot angezeigt, damit Sie sie prüfen können. Ein gescanntes Blatt hat keinen Text: Legen Sie seinen Maßstab von Hand fest.

## An einem bekannten Maß kalibrieren

Verwenden Sie das, wenn es keinen gedruckten Maßstab gibt, dem Sie vertrauen, der Satz skaliert wurde oder das Blatt „nicht maßstäblich“ sagt, aber Maße hat.

1. Öffnen Sie das Blatt und zoomen Sie auf ein langes Maß, das Sie kennen, etwa einen Rasterabstand oder ein Gesamtmaß des Gebäudes. Je länger, desto genauer.
2. Wählen Sie {{ui:Kalibrieren}} in der Gruppe {{ui:Maßstab}} oder drücken Sie {{key:K}}.
3. Klicken Sie auf ein Ende des Maßes. Zoomen Sie für Genauigkeit an jedes Ende heran; Sie können zwischen den Klicks zoomen und verschieben.
4. Klicken Sie auf das andere Ende. Halten Sie {{key:Shift}}, um die Linie bei 0°, 45° oder 90° zu halten.
   Der Dialog **Dieses Blatt kalibrieren** öffnet sich.
5. Geben Sie die reale Strecke unter **Reale Strecke** ein, zum Beispiel `24'-6 1/2"`, `24.5` (Dezimalfuß), `30"` oder `7.5 m`. Siehe [Eingabeformate für Länge, Einheitspreis und Prozent](topic:entry-formats).
6. Wählen Sie {{ui:Maßstab festlegen}}.
   Die Statusleiste zeigt den Maßstab als „1" = (n)'“. Liegt er innerhalb von 0.5 % einer Voreinstellung, nennt sie diese, zum Beispiel „was zu 1/4" = 1'-0" passt (wählen Sie diese Voreinstellung für einen exakten Maßstab)“.
   TakeoffCraft kehrt zum Werkzeug {{ui:Auswählen}} zurück.

Passt die Kalibrierung zu einer Voreinstellung, ergibt die Wahl dieser Voreinstellung einen exakten Maßstab, statt eines, der davon abhängt, wo Sie geklickt haben.

## Maßstab prüfen

Prüfen Sie einen neuen Maßstab immer an einem zweiten Maß.

1. Wählen Sie {{ui:Prüfen}} in der Gruppe {{ui:Maßstab}} oder drücken Sie {{key:D}}.
2. Klicken Sie auf beide Enden eines Maßes, das auf der Zeichnung gedruckt ist.
   Die Statusleiste zeigt „Prüfung: 12'-6"“ mit derselben Länge in Dezimalfuß und Metern, und die Prüflinie bleibt mit ihrer Länge auf dem Blatt.
3. Vergleichen Sie sie mit dem gedruckten Maß. Weicht sie ab, kalibrieren Sie an einem längeren Maß.

Drücken Sie {{key:Esc}}, um die Prüflinie zu entfernen.

## Einen Maßstab ändern

Wählen Sie eine andere Voreinstellung oder kalibrieren Sie erneut. Hat das Blatt bereits Messungen, fragt TakeoffCraft **Maßstab dieses Blatts ändern?** und sagt, wie viele Messungen neu gemessen werden. Wählen Sie {{ui:Maßstab ändern}}. Jede Strecke und Fläche auf dem Blatt wird im neuen Maßstab neu gemessen. Sie können es mit {{key:Mod+Z}} rückgängig machen.

## Warum Blätter ohne Maßstab nicht als null gezählt werden

Eine Markierung auf einem Blatt ohne Maßstab hat keine echte Länge oder Fläche. TakeoffCraft zählt sie nie als null, denn das würde Ihre Kalkulation stillschweigend zu niedrig machen. Stattdessen:

- lässt es diese Markierungen aus den Summen,
- zeigt es „+(n) ohne Maßstab“ neben der Position in {{ui:Mengen}},
- zeigt es „Unvollständig: (n) Markierungen auf Blättern ohne Maßstab (nicht in den Summen)“ in der Kopfzeile der Tabelle,
- schreibt es die Anzahl in die Notizenspalte des Tabellenexports.

Das kann passieren, wenn Sie ein Projekt öffnen, dessen Maßstäbe nie festgelegt wurden. Geben Sie dem Blatt einen Maßstab, dann werden die Markierungen sofort gezählt. Zählmarkierungen werden immer gezählt; sie brauchen keinen Maßstab.

## Tipps

- Legen Sie den Maßstab jedes Blatts, das Sie messen werden, vorher fest. Suchen Sie in der Blattliste nach **Kein Maßstab**, um die übrigen zu finden (das Suchfeld betrifft Blattnamen, nicht Maßstäbe).
- Details und vergrößerte Pläne auf demselben Blatt verwenden oft einen anderen Maßstab. TakeoffCraft hat einen Maßstab pro Blatt; siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
- Metrische Zeichnungen: Wählen Sie eine metrische Voreinstellung wie `1:100` oder kalibrieren Sie mit einem metrischen Maß wie `6000 mm`.
