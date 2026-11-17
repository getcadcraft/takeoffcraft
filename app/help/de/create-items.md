---
title: Positionen der Mengenermittlung erstellen
summary: Erstellen Sie Längen-, Flächen- und Zählpositionen und legen Sie ihre Einheit, Höhe oder Tiefe, den Verschnitt sowie die Material- und Lohnsätze fest.
keywords: Kolonne, Leistungsrate, Kolonnenstärke, Lohn, Stunden, Mannstunden, Personenstunden, Lohnstunden, Kolonnentage, Position, neue Position, Bedingung, mehrere Bedingungen, auch messen, mehrere Typen, Raum, Länge, Fläche, Anzahl, Einheit, Höhe, Tiefe, Verschnitt, Material, Lohn, Satz, Farbe, Kosten
from: 7fa5effc
---

Eine **Position** ist eine Sache, die Sie messen und bepreisen: ein Wandtyp, ein Bodenbelag, eine Decke, eine Tür, eine Leuchte. Jede Markierung, die Sie zeichnen, gehört zu einer Position. Andere Programme nennen diese Bedingungen.

Jede Position hat einen Typ (und kann auch andere Arten von Markierungen aufnehmen, siehe [Eine Position, mehrere Arten von Markierungen](topic:create-items#one-item-several-kinds-of-marks)):

| Typ | Sie zeichnen | Es weist aus | Einheiten |
|---|---|---|---|
| Länge | Zusammenhängende Punktfolgen | Länge, Anzahl der Strecken und Wandfläche, wenn eine Höhe vorhanden ist | LF oder m |
| Fläche | Geschlossene Umrisse, mit Aussparungen | Fläche, Umfang, Anzahl der Flächen | SF, SY, SQ, ac, ha oder m² |
| Zählen | Ein Klick pro Ding | Wie viele | EA |
| Eingegebene Menge | Nichts: Sie geben die Menge ein | Die eingegebene Zahl (oder eine aus CivilCraft übernommene) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha oder m² |

## Eingegebene Mengen (ohne Zeichnung)

Manche Dinge in einer Kalkulation werden nie gezeichnet: Baustelleneinrichtung, Genehmigungen, eine Reserve, ein Pauschalnachunternehmen, die Abtragung und Auftrag, die CivilCraft berechnet hat. Machen Sie daraus eine **eingegebene Menge**:

1. Wählen Sie {{ui:Neue Position}}, geben Sie einen Namen ein, wählen Sie {{ui:Eingegebene Menge (keine Zeichnung)}} und wählen Sie {{ui:Hinzufügen}}.
2. Wählen Sie im Positionseditor die {{ui:Einheit}} (LS für einen Pauschalbetrag) und geben Sie die {{ui:Menge}} ein: `1`, `2.5` oder `1,250`.
3. Legen Sie Verschnitt und Sätze fest wie bei jeder anderen Position. Die Formeln einer Baugruppe verwenden `Q`, die Menge, zum Beispiel `ceil(Q / 12)` Lkw-Ladungen.

Eine eingegebene Menge nimmt keine Markierungen auf und macht die Kalkulation nie unvollständig. Hat das Takeoff Angebotsbereiche, hat der Editor außerdem {{ui:Angebotsbereich}}: Die Menge zählt dann in diesem Bereich, seinen Alternativen und seinen Summen, genau wie eine Markierung dort. Aus einer anderen App übernommene Mengen nennen ihre Herkunft; siehe [Erdarbeiten und Höhenkoten](topic:earthwork#cut-and-fill-from-civilcraft).

## Eine Position erstellen

1. Wählen Sie im Bereich {{ui:Positionen}} rechts {{ui:Neue Position}}.
2. Geben Sie einen Namen ein, zum Beispiel `Innenwand Typ A` oder `Teppichfliese`.
3. Wählen Sie den Typ: {{ui:Länge (linear)}}, {{ui:Fläche}} oder {{ui:Zählen}}.
4. Wählen Sie {{ui:Hinzufügen}} (oder drücken Sie {{key:Enter}}).
   Die Position erscheint in der Liste mit ihrer eigenen Farbe, wird zur Position, mit der Sie zeichnen, und ihr Editor öffnet sich unter der Liste. Die Statusleiste zeigt, welches Werkzeug Sie als Nächstes wählen sollten.

Drücken Sie {{key:Esc}} im Formular, um es zu schließen, ohne eine Position hinzuzufügen.

:::tip
Wenn Sie zuerst ein Messwerkzeug wählen, verwendet TakeoffCraft die letzte Position des passenden Typs oder öffnet das Formular {{ui:Neue Position}} mit bereits gewähltem Typ.
:::

## Die Position wählen, mit der Sie zeichnen

Klicken Sie in der Liste auf eine Position. Sie wird zur Position, der neue Markierungen zugeordnet werden, und ihre Markierungen werden auf jedem Blatt hervorgehoben, während die anderen verblassen. Hat das geöffnete Blatt keine ihrer Markierungen, springt TakeoffCraft zu einem Blatt, das welche hat. Klicken Sie die Position erneut an, um das Hervorheben zu beenden; sie bleibt die Position, mit der Sie zeichnen.

Klicken Sie mit dem Werkzeug {{ui:Auswählen}} auf eine Markierung, wird auch deren Position zur aktuellen.

## Die Position einrichten

Der Positionseditor (**Position: (Name)**) hat diese Felder. Jedes Feld wird gespeichert, sobald Sie es verlassen oder {{key:Enter}} drücken, und jede Änderung kann rückgängig gemacht werden.

| Feld | Was es bewirkt |
|---|---|
| {{ui:Name}} | Wird in der Liste, in den Tabellen und in den Exporten angezeigt. |
| {{ui:Eingabe}} | Länge, Fläche oder Zählen. Das Feld ist gesperrt, sobald die Position Markierungen hat („Eine Position mit Markierungen behält ihren Typ“). |
| {{ui:Farbe}} | Die Farbe ihrer Markierungen auf dem Bildschirm und im markierten PDF. |
| {{ui:Einheit}} | In welcher Einheit die Menge ausgewiesen wird: LF oder m für Länge; SF, SY, SQ, ac, ha oder m² für Fläche; EA für Zählen. |
| {{ui:Auch messen}} | Die anderen Arten von Markierungen, die die Position aufnimmt, jede mit eigener Einheit. Siehe unten. |
| {{ui:Höhe}} (Länge) | Eine Wandhöhe. Die Position weist dann zusätzlich die Wandfläche aus (Länge × Höhe). Strecken, die aus einem BimCraft-Modell stammen, tragen ihre Türen und Fenster: Diese werden einmal abgezogen, und die Position nennt die Bruttofläche, die Öffnungen und die Nettofläche. Ein Takeoff aus einem BimCraft-Projekt, das eine Aufmaßmethode gewählt hat, wird hier nach dieser Methode gemessen (der Hinweis nennt sie mit ihrer Quelle und sagt, dass sie von einem Kostenplaner nicht geprüft ist); die Methode lässt sich in TakeoffCraft nicht ändern. Steine oder Blöcke und Mörtel aus einem Wandtyp kommen als zwei Komponenten: die zu bestellenden Einheiten und das Mörtelvolumen. |
| {{ui:Tiefe}} (Fläche) | Eine Tiefe oder Dicke, die in Formeln von Baugruppen verwendet wird (zum Beispiel Betonvolumen). |
| {{ui:Verschnitt %}} | Wird vor der Bepreisung zur Menge addiert: 10 bedeutet Menge × 1.10. |
| {{ui:Material $/LF}} | Materialkosten je Einheit. Die Bezeichnung folgt der Einheit: $/SF, $/EA usw. |
| {{ui:Lohn $/LF}} | Lohnkosten je Einheit. |
| {{ui:CSI-Nummer}} | Ihre CSI-MasterFormat-Nummer, zum Beispiel `09 21 16` (oder nur die Abteilung, `09`). Das Arbeitsblatt By division gruppiert Kosten danach. Positionen aus [Gewerkepaketen](topic:trade-packs) haben sie bereits. |

Höhe und Tiefe nehmen Fuß und Zoll (`9'-0"`, `8' 6"`) oder Dezimalfuß (`9`) für imperiale Einheiten sowie Meter (`2.7`, `2700 mm`) für metrische Einheiten. Sätze nehmen Beträge wie `12.50` oder `$1,250` mit bis zu vier Dezimalstellen an. Siehe [Längen-, Satz- und Prozenteingabe](topic:entry-formats).

Unter den Feldern zeigt **Gemessen** die Summen, die die Formeln der Position verwenden können, mit ihren Buchstaben: Länge (L), Strecken (N), Wandfläche (A) bei Längen; Fläche (A), Umfang (P), Flächen (N) bei Flächen; Anzahl (N) bei Zählen.

## Eine Position, mehrere Arten von Markierungen

Manche Dinge werden auf mehr als eine Art gemessen: Ein Raum hat einen Boden (eine Fläche), einen Sockel entlang seiner Wände (eine Länge) und Türen (eine Anzahl). Statt drei Positionen machen Sie eine:

1. Erstellen Sie die Position mit ihrem Haupttyp, etwa eine Flächenposition `Raum 101`.
2. Setzen Sie im Editor unter {{ui:Auch messen}} den Haken bei {{ui:Länge}}, {{ui:Zählen}} oder bei beiden. Jede Art bekommt daneben eine Einheit.
3. Zeichnen Sie mit jedem Werkzeug, dessen Art die Position aufnimmt: Mit `Raum 101` als aktueller Position zeichnet {{ui:Fläche}} den Boden, {{ui:Länge}} den Sockel und {{ui:Zählen}} die Türen. TakeoffCraft fragt nicht nach einer weiteren Position.

Die Positionsliste zeigt jede Menge (`50.00 SF + 2 EA`). In der Mengentabelle hat die Zeile der Position ihre Hauptmenge, und jede weitere Art bekommt eine eigene Zeile darunter, etwa **Raum 101 (Zählen)**, mit eigenem Verschnitt und eigenen Material- und Lohnsätzen. Die Exporte, die Blatttabelle und die Legende des markierten PDFs führen sie genauso auf.

Die Felder des Haupttyps gehören weiterhin nur zu diesem Typ: Höhe oder Tiefe, Dachneigung, Abzugsflächen und die 3D-Form gelten nur für dessen Markierungen. Ein für eine Flächenposition gezeichneter Sockel wird einfach entlang des Grundrisses gemessen und erscheint in 3D flach. Formeln von Baugruppen verwenden die Summen des Haupttyps.

Eine Art lässt sich nur abwählen, solange die Position keine Markierungen dieser Art hat; löschen Sie sie oder verschieben Sie sie vorher unter **Ausgewählte Markierung** auf eine andere Position. Markierungen können zu jeder Position verschoben werden, die ihre Art aufnimmt.

Weiter unten steht der {{ui:Kalkulationsbaustein}}: Komponenten wie Ständer oder Platten, jede mit eigener Formel und eigenen Sätzen. Siehe [Baugruppen und Formeln](topic:assemblies).

Ganz unten ändern {{ui:Nach oben}} und {{ui:Nach unten}} den Platz der Position in der Liste und in den Exporten, und {{ui:Position löschen}} entfernt sie mit allen ihren Markierungen (nach Rückfrage; Sie können es rückgängig machen).

Flächenpositionen haben außerdem **Dachneigung** (Dachflächen, auf der Schräge gemessen: [Dächer und Neigungen](topic:roofs-and-slopes)) und **Abzugsfläche** (ihre Markierungen werden von den Flächen anderer Positionen abgezogen: [Flächen messen](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Längenpositionen haben ein **Gefälle** (Eben, Ortgang, Grat oder Kehle) und bei Ortgang und Grat außerdem eine **Dachneigung**.

## Sätze in der Tabelle

Sie können {{ui:Verschnitt %}} sowie Material- und Lohnsätze auch direkt in die Tabelle {{ui:Mengen}} unten eingeben ({{ui:Nach Position}}). Es ist dieselbe Einstellung wie im Editor.

## So funktioniert die Bepreisung

Für jede Position und jede Komponente einer Baugruppe gilt:

1. **Mit Verschnitt** = Menge × (1 + Verschnitt %).
2. **Material** = mit Verschnitt × Material je Einheit, auf den Cent gerundet.
3. **Lohn** = mit Verschnitt × Lohn je Einheit, auf den Cent gerundet.
4. **Summe** = Material + Lohn.

Die {{ui:Auftragssumme}} addiert jede Position und jede Komponente. Eine Position kann eigene Sätze und zugleich eine Baugruppe haben; beide werden gezählt. Lassen Sie daher die Sätze der Position auf 0, wenn ihre Komponenten die Kosten tragen.

## Lohn nach Kolonne

Statt eines Lohnsatzes je Einheit kann der Lohn einer Position aus einer Kolonne stammen: wie viel sie pro Stunde leistet, wie viele Personen sie umfasst und was jede verdient. Setzen Sie im Positionseditor unter {{ui:Lohn nach Kolonne}} den Haken bei {{ui:Lohn aus einer Kolonne bepreisen}} und füllen Sie aus:

| Feld | Beispiel |
|---|---|
| {{ui:Leistung}} | `20` LF pro Stunde (in der Einheit der Position) für die ganze Kolonne |
| {{ui:Kolonnenstärke}} | `2` Personen |
| {{ui:Lohn $/Stunde je Person}} | `45` |

TakeoffCraft berechnet aus der Menge mit Verschnitt:

- **Kolonnenstunden** = Menge ÷ Leistung (110 LF ÷ 20 = 5.5),
- **Personenstunden** = Kolonnenstunden × Kolonnenstärke (11),
- **Kolonnentage** = Kolonnenstunden ÷ 8 (0.69),
- **Lohn** = Personenstunden × Lohn ($495.00).

Der Editor zeigt das Ergebnis und den daraus folgenden Satz ($4.50/LF). Der eigene Lohnsatz der Position ist dann nur noch lesbar, im Editor und in der Tabelle. Die Kopfzeile der Tabelle {{ui:Mengen}} ergänzt die Personenstunden und Kolonnentage des Auftrags. Die Exporte vermerken die Stunden jeder Kolonne, und in der Arbeitsmappe ist die Lohnzelle eine Formel auf die Kolonne (`ROUND(F2/20*2*45,2)`). Entfernen Sie den Haken, um wieder zu einem Satz je Einheit zurückzukehren.

## Metrische Positionen

Wählen Sie m (Länge) oder m² (Fläche) als Einheit. Mengen, Höhen und Formelwerte sind dann in Metern. Der Blattmaßstab kann jede Voreinstellung oder Kalibrierung sein; Einheiten und Maßstäbe sind unabhängig voneinander.

## Weiter

- [Längen messen](topic:measure-linear)
- [Flächen mit Aussparungen messen](topic:measure-areas)
- [Von Hand zählen](topic:count-by-hand)
