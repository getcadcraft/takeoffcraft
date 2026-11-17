---
title: Aus einer Zeichnung zählen
summary: Blöcke, Objekte auf einem Layer oder Text direkt aus einer DWG oder DXF zählen: exakt, mit verschachtelten Blöcken, dynamischen Blockvarianten und Blockanordnungen, in einem Rückgängig-Schritt.
keywords: aus Zeichnung zählen, CAD-Zählung, Blockzählung, Blöcke zählen, Einfügen, Blockname, verschachtelte Blöcke, dynamischer Block, Variante, MINSERT, Anordnung, Layer, Objekttyp, Kreise, Text, Attribut, Tag, ausgeblendete Layer, exakte Zählung, Anleitung, Türen, Einrichtungen
from: 5060e24e
---

{{ui:CAD-Zählung}} in der Blattleiste (der Befehl **Zählung aus der Zeichnung** in den anderen Menüstilen) zählt, was eine DWG- oder DXF-Datei an Objekten enthält. Wo {{ui:Auto-Zählen}} nach einem Bild eines Symbols sucht und eines übersehen oder ein falsches finden kann, zählt dies die Objekte: Jede Einfügung eines Blocks mit dem Namen `DOOR-36` ist eine Tür. Öffnen Sie zuerst die Zeichnung: [Eine DWG- oder DXF-Zeichnung öffnen](topic:open-a-drawing).

## Einen Block zählen

1. Öffnen Sie ein Blatt der Zeichnung. {{ui:CAD-Zählung}} ist in der Blattleiste.
2. Wählen Sie es. Das Fenster listet die Blöcke mit der Anzahl jedes Blocks auf. Suchen Sie nach dem Namen und wählen Sie dann einen aus.
3. Prüfen Sie die Zeile unter der Liste: „22 gefunden, 22 hinzuzufügen.“
4. Wählen Sie unter {{ui:Hinzufügen zu}} eine Zählposition oder lassen Sie {{ui:Einer neuen Zählposition}} stehen und geben Sie einen Namen ein.
5. Wählen Sie die Hinzufügen-Schaltfläche, die die Anzahl nennt: {{ui:22 Markierungen hinzufügen}}. Die Markierungen erscheinen an den Einfügepunkten des Blocks, und die Menge der Position ist die Zählung.

Es ist ein Rückgängig-Schritt: {{key:Mod+Z}} entfernt die Markierungen (und eine neue Position) gemeinsam. Die Kalkulation, die Tabelle und das markierte PDF behandeln die Position wie jede andere Zählposition.

### Was gezählt wird

- **Jede Einfügung des Blocknamens**, unabhängig von Maßstab und Winkel, im Modellbereich oder im Papierbereich. Blocknamen unterscheiden nicht zwischen Groß- und Kleinschreibung.
- **Blockanordnungen** (MINSERT): Jede Kopie in der Anordnung zählt als eins.
- **Verschachtelte Blöcke.** Ein Block, der in einem anderen Block platziert ist, wird auf jeder Ebene gezählt. Die Liste sagt „6 in anderen Blöcken“; deaktivieren Sie {{ui:Auch Blöcke in anderen Blöcken zählen}}, um nur Einfügungen zu zählen, die direkt in der Zeichnung platziert sind.
- **Dynamische Blöcke.** Ein dynamischer Block wird unter seinem eigenen Namen gezählt, nicht unter den anonymen Kopien (`*U12`), die die Datei führt. Seine Zustände werden getrennt aufgeführt („Einfach 12, Doppelt 4“): Wählen Sie einen Zustand, um nur diesen zu zählen, oder {{ui:Jede Variante}}. Wenn eine Datei nicht sagt, welchen Zustand eine Kopie zeigt, werden diese als „(Zustand unbekannt)“ aufgeführt.
- **Layer-Filter.** Liegt ein Block auf mehreren Layern, wählen Sie einen unter {{ui:Auf Layer}}.

### Was nicht gezählt wird

- **Ausgeblendete Layer.** Ein Objekt auf einem Layer, der in der Datei ausgeschaltet oder eingefroren ist (oder den Sie in {{ui:Layer}} ausgeblendet haben), wird ausgelassen, und die Zeile sagt wie viele: „3 auf ausgeblendeten Layern ausgelassen“. Setzen Sie ein Häkchen bei {{ui:Diese auch zählen}}, um sie einzuschließen.
- **Verknüpfte Zeichnungen, die nicht geöffnet sind**, werden nicht gezählt; das Fenster weist darauf hin.
- **Objekte, die genau auf einem anderen gleichartigen Objekt liegen**, werden als zwei gezählt (es sind zwei Objekte), und das Fenster weist darauf hin: Es ist meist ein Zeichenfehler, den sich ein Blick lohnt.

## Was dieses Blatt zeigt oder die ganze Zeichnung

- **Was dieses Blatt zeigt** zählt die Objekte, die das Blatt zeigt: auf einem Layout die Modellobjekte in seinen Ansichtsfenstern (ein auf einem Ansichtsfenster eingefrorener Layer wird dort nicht gezählt) plus die eigenen Objekte des Layouts.
- **Die ganze Zeichnung, jedes Objekt einmal** zählt den Modellbereich einmal, mit den Markierungen auf der Registerkarte „Modell“, und zählt nicht, was mehrere Layouts erneut zeigen.

Das Zählen dessen, was ein Layout zeigt, und das Zählen dessen, was Modell zeigt, ergibt für dieselben Objekte dieselbe Zahl; addieren Sie nicht beides zu einer Position.

## Erneut zählen

Wenn Sie denselben Block mit derselben Position erneut zählen, wird nur das Neue hinzugefügt: „22 bereits gezählt.“ Jede Markierung steht für ein Objekt.

## Nach Layer und Typ

Wählen Sie unter {{ui:Nach Layer und Typ}} einen Layer und einen Objekttyp (Kreise, Polylinien, Schraffuren …): „alle Kreise auf E-LITE“. Setzen Sie ein Häkchen bei {{ui:Auch Objekte in Blöcken zählen}}, um die Objekte einzuschließen, die in Blockdefinitionen liegen, an jeder Stelle, an der der Block eingefügt ist.

## Nach Text

Wählen Sie unter {{ui:Nach Text}} den Text, etwa `A3`, und geben Sie an, ob er genau so lautet, ihn enthält oder als ganzes Wort vorkommt. Textobjekte, mehrzeiliger Text mit Führungslinie und die **Attributwerte** von Blöcken werden alle gezählt (ein Tag-Attribut `ITEM = A3` wird gefunden); wählen Sie {{ui:Im Attribut}}, um nur ein Attribut zu zählen. Die häufigsten Texte sind zum Anklicken aufgelistet.

## Wann stattdessen Auto-Zählen verwenden

Verwenden Sie {{ui:Auto-Zählen}} für PDFs und für Symbole in einer Zeichnung, die keine Blöcke sind (lose gezeichnet oder zerlegt). Als Blöcke gezeichnete Symbole zählen Sie hier.
