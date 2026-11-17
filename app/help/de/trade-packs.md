---
title: Gewerkepakete
summary: Fügen Sie Ihrer Preisbibliothek kostenlose Kalkulationsbausteine für ein Gewerk hinzu, entfernen Sie sie mit einem Schritt und teilen Sie Ihre eigene Bibliothek als Paket.
keywords: Gewerkepaket, Paket, Kalkulationsbausteine, Vorlagen, Startpositionen, Elektro, Trockenbau, Ständerwerk, Malerarbeiten, Beton, Bodenbeläge, Mauerwerk, Dacheindeckung, Außenverkleidung, Zimmerei, Sanitär, HLK, Dämmung, Garten- und Landschaftsbau, Terrassen, Generalunternehmer, csi, masterformat, cc0, hinzufügen, entfernen, teilen
from: d3c036be
---

Ein **Gewerkepaket** ist eine Sammlung fertiger Positionen für ein Gewerk: jede mit ihrer Einheit, ihrer Höhe oder Tiefe, ihrem Verschnitt und ihrem **Kalkulationsbaustein**, den Teilen und Formeln, die eine gemessene Strecke, Fläche oder Zählung in Materialien umrechnen. Eine Trockenbauwand bringt zum Beispiel ihre U-Profile, Ständer, Platten, Schrauben, Fugenband und Spachtelmasse mit.

Pakete werden zu Ihrer [Bibliothek](topic:price-library) hinzugefügt, und von dort fügen Sie deren Positionen jeder Mengenermittlung hinzu.

## Ein Paket hinzufügen

1. Öffnen Sie {{ui:Bibliothek}} oben im Bereich {{ui:Positionen}}, dann {{ui:Gewerkepakete…}}.
2. Wählen Sie die {{ui:Einheiten}}: imperial (LF, SF), metrisch (m, m²) oder beides. Jeder Kalkulationsbaustein kommt in beiden Systemen.
3. Wählen Sie {{ui:Hinzufügen}} neben einem Paket.

Die Positionen des Pakets erscheinen in der Bibliothek, mit dem Namen des Pakets markiert. Um sie zu verwenden, markieren Sie sie in der Bibliothek und wählen {{ui:Zur Mengenermittlung hinzufügen}}.

:::note
**Ein Paket bringt keine Preise mit.** Seine Positionen zeigen in der Bibliothek „Satz festlegen“. Die Sätze legen Sie selbst fest: Geben Sie sie in der Bibliothek oder im Positionseditor ein, oder importieren Sie Ihre Preisliste als CSV-Datei und verwenden {{ui:Preise aktualisieren}}.
:::

Hat Ihre Bibliothek bereits eine Position mit demselben Namen und Typ, lässt das Paket Ihre Position unverändert. Wenn Sie ein Paket erneut hinzufügen, werden seine eigenen Positionen durch die neue Version ersetzt.

## Ein Paket entfernen

Wählen Sie in {{ui:Gewerkepakete…}} neben einem Paket, das Sie hinzugefügt haben, {{ui:Entfernen}} und dann noch einmal zur Bestätigung. Jede Position, die daher stammt, verlässt die Bibliothek in einem Schritt. Positionen, die Sie bereits einer Mengenermittlung hinzugefügt haben, bleiben in dieser Mengenermittlung.

## Was in einem Paket steckt

Wählen Sie unter einem Paket {{ui:Quellen und Details}}, um zu sehen, woraus jeder Kalkulationsbaustein geschrieben wurde: Bauvorschriften, Normen und die Montageanleitungen von Fachverbänden. In der Bibliothek zeigen Sie mit dem Zeiger auf eine Position, um deren Quellen und Annahmen zu lesen, etwa den Ständerabstand oder die Ergiebigkeit eines Anstrichs. Prüfen Sie sie anhand Ihres Auftrags und der Datenblätter Ihrer Produkte, und ändern Sie die Formeln, wo sie abweichen (siehe [Kalkulationsbausteine und Formeln](topic:assemblies)).

Jedes Paket ist mit **Starter: noch nicht von einem Kalkulator geprüft** markiert, bis erfahrene Kalkulatoren es geprüft haben.

Jede Position trägt außerdem ihre CSI-MasterFormat-Nummer, etwa `09 21 16`.

## Ihre Bibliothek als Paket teilen

{{ui:Als Paket exportieren…}} in der Bibliothek speichert sie als Paketdatei (`.ccpack.json`), die jeder mit {{ui:Eine Paketdatei öffnen…}} hinzufügen kann. Standardmäßig lässt sie die Positionen aus, die aus Paketen stammen, die Sie hinzugefügt haben, und sie enthält keine Sätze. Setzen Sie den Haken bei {{ui:Meine Sätze als Beispielsätze einschließen}}, um auch Ihre Sätze mitzuschicken: Sie werden mit der Region und dem Datum gekennzeichnet, die Sie angeben, und wer das Paket hinzufügt, entscheidet, ob er sie verwendet.

Paketdateien sind reine Daten, nie Programme. TakeoffCraft prüft jeden Teil einer Paketdatei, bevor es sie verwendet, und lässt alles aus, was es nicht lesen kann.
