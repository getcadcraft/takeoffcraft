---
title: Mengen aus einem Gebäudemodell ermitteln
summary: Das IFC-Modell des Architekten öffnen, es in 3D ansehen, Wände, Decken, Türen und Weiteres nach Typ, Material, Layer oder Größe auswählen und ihre Anzahl, Längen, Flächen und Volumen in die Mengenermittlung übernehmen. Eine neuere Fassung des Modells aktualisiert dieselben Mengen.
keywords: Modell, Modellmengenermittlung, 3D-Ansicht, Teil anklicken, Zeile suchen, Material, Layer, Wandschichten, Trockenbau, Dämmung, Türgrößen, Fenstergrößen, Öffnungsliste, CSV, 3D, BIM, IFC, RVT, Gebäudemodell, Mengen, Wände, Decken, Türen, Fenster, Stützen, Räume, nach Typ, nach Geschoss, Aktualisierung, neueres Modell, Entwurfsplanung
from: 8c4c12c9
---

Sie müssen nicht auf den nächsten Plansatz warten. Wenn der Architekt das Gebäudemodell schickt, öffnen Sie es hier und entnehmen Sie die Mengen direkt daraus. Das Modell wird auf Ihrem Computer gelesen; nichts wird irgendwohin gesendet.

## Schritte

1. Wählen Sie in der Symbolleiste {{ui:Modell}} und wählen Sie die `.ifc`-Datei des Modells aus, oder öffnen Sie sie mit {{ui:PDFs öffnen}} wie jede andere Datei.
2. {{ui:Modellmengenermittlung}} öffnet sich mit einer Zeile pro Kategorie und Typ: Wände nach Wandtyp, Decken nach Decktyp, Türen nach Türtyp und so weiter. Jede Zeile zeigt ihre Anzahl und die Einheit, in der diese Kategorie gemessen wird.
3. Stellen Sie {{ui:Gruppieren nach}} auf {{ui:Kategorie}} für eine schnelle Gesamtsumme oder auf {{ui:Kategorie, Typ und Geschoss}}, um jeden Typ nach Geschoss aufzuteilen.
4. Entfernen Sie bei allen Zeilen, die Sie nicht brauchen, das Häkchen. {{ui:Suchen}} grenzt die Liste ein. Das Entfernen eines Häkchens blendet auch die zugehörigen Teile im 3D-Bild aus.
5. Geben Sie dem Modell einen {{ui:Modellname}}, den Sie für den gesamten Auftrag beibehalten, zum Beispiel den Namen des Projekts.
6. Wählen Sie {{ui:Zur Mengenermittlung hinzufügen}}. Jede Menge wird zu einer typisierten Menge in der Positionsliste. Benennen Sie sie, versehen Sie sie mit einem Preis und ordnen Sie Kalkulationsbausteine zu wie bei jeder anderen Position.

## Das Modell in 3D ansehen

{{ui:Modell in 3D anzeigen}} zeichnet das Modell über der Tabelle, mit einer Farbe für jede Zeile (das Farbfeld neben dem Namen der Zeile). Ziehen Sie, um es zu drehen, halten Sie {{key:Shift}} gedrückt und ziehen Sie, um es zu verschieben, nutzen Sie das Mausrad zum Zoomen, und wählen Sie {{ui:Einpassen}} oder {{ui:Zurücksetzen}}, um zurückzukehren.

- **Teil anklicken** im Bild: Seine Zeile wird in der Tabelle ausgewählt, alle Teile dieser Zeile werden hervorgehoben und der Rest blass dargestellt. Klicken Sie dasselbe Teil erneut an, wird, falls es in mehreren Zeilen liegt (eine Wand in ihren Schichten), die nächste Zeile ausgewählt.
- **Zeile anklicken** in der Tabelle, um ihre Teile hervorzuheben. Klicken Sie erneut darauf oder auf eine leere Stelle im Bild, um die Hervorhebung aufzuheben.
- Räume werden nicht gezeichnet, da das Volumen eines Raums das Gebäude verdecken würde.
- Ein sehr großes Modell behält für einige Teile nur einen Quader, damit es in den Arbeitsspeicher passt; das Panel zeigt an, wie viele. Die Zahlen ändern sich nicht.

Wenn dieser Computer 3D nicht darstellen kann, arbeitet die Tabelle wie bisher.

## Nach Material, Layer oder Größe gruppieren

{{ui:Gruppieren nach}} hat drei weitere Optionen:

- {{ui:Kategorie und Material}}: Eine Wand, Decke oder ein Dach aus Schichten erhält für das Material jeder Schicht eine eigene Zeile, sodass Trockenbau, Ständer und Dämmung getrennt bepreist werden können. Ein Gebäudeteil mit einem einzigen Material erhält die Zeile dieses Materials, und ein Teil ohne Material steht in einer Zeile namens „Kein Material angegeben“.
- {{ui:Kategorie und Layer}}: dasselbe, mit der Dicke des Layers in der Zeile („Dämmung, 100 mm“).
- {{ui:Kategorie, Typ und Tür- oder Fenstergröße}}: Türen und Fenster werden nach Breite und Höhe aufgeteilt (zum Beispiel 3'-0" × 6'-8" oder 914 × 2,032 mm).

Bei einem Layer ist die Fläche die eigene Wandfläche (bzw. die Grund- oder Oberfläche der Decke oder des Dachs), und das Volumen ist diese Fläche mal der Dicke des Layers. Die Notiz der Zeile sagt, wie viele Zahlen aus einem Layer stammen. Die Layer einer Wand ergeben zusammen das Volumen, das das Modell für sie angibt.

## Zeilen oder Öffnungen als CSV speichern

{{ui:Zeilen als CSV speichern}} speichert die aktivierten Zeilen mit den Einheiten in jeder Überschrift für eine Tabellenkalkulation. {{ui:Öffnungsliste als CSV speichern}} (nur wenn das Modell Türen oder Fenster hat) speichert jede Tür und jedes Fenster nach Typ, Geschoss und Größe mit ihrer Anzahl.

## Was gemessen wird

| Kategorie | Mengen |
|---|---|
| Wände | Anzahl, Länge, Wandfläche (eine Seite, Öffnungen abgezogen), Volumen |
| Decken, Platten, abgehängte Decken und andere Beläge | Anzahl, Grundfläche, Volumen |
| Dächer | Anzahl, Grundfläche, Dachfläche, Volumen |
| Fundamente | Anzahl, Grundfläche, Volumen |
| Stützen, Träger und Stäbe | Anzahl, Länge entlang des Stabes, Volumen |
| Geländer, Rohre, Kanäle und Kabelwege | Anzahl, Länge |
| Treppen | Anzahl, Volumen |
| Räume | Anzahl, Bodenfläche, Volumen |
| Türen, Fenster und alles Übrige | Anzahl |

Wenn der Autor des Modells eine Menge in der Datei angegeben hat, wird diese Zahl verwendet. Andernfalls wird die Zahl aus der Form des Elements gemessen. Jede Menge behält eine Notiz, die angibt, welches davon zutrifft und wie viele Elemente eine Zahl ergeben haben.

:::note
Die aus der Form gemessene Länge einer Wand läuft von Ende zu Ende, sodass zwei Wände, die sich an einer Ecke überlappen, die Ecke beide Male einschließen. Ein Volumen setzt eine geschlossene Form voraus: Ein Element, dessen Form nicht geschlossen ist, wird gezählt und ergibt kein Volumen. Ein gekrümmtes oder abgewinkeltes Wandelement wird als die Hälfte aller seiner senkrechten Flächen gemessen, und seine Notiz sagt das.
:::

## Wenn ein neueres Modell eintrifft

Öffnen Sie die neuere Datei und geben Sie denselben {{ui:Modellname}} ein. Bevor Sie etwas hinzufügen, zeigt das Panel an, wie viele Mengen neu sind, wie viele sich geändert haben und von welchem Wert auf welchen, sowie welche Mengen aus der früheren Fassung nicht mehr im Modell vorkommen. Wählen Sie {{ui:Zur Mengenermittlung hinzufügen}}: Die geänderten Mengen übernehmen ihre neuen Zahlen, und Ihre Namen, Einheitspreise, Verschnitte und Kalkulationsbausteine bleiben erhalten. Mengen, die aus dem Modell verschwunden sind, behalten ihre alten Zahlen; entfernen Sie sie selbst, wenn der Entwurf sie gestrichen hat.

Typ- und Geschossnamen erkennen eine Menge. Benennt der Architekt einen Wandtyp um, kommt sie als neue Menge an, und die alte wird als entfallen aufgeführt.

## Gelesene Dateien

IFC-Dateien (IFC2x3, IFC4 und IFC4.3). Eine IFC-Datei mit Straßen, Schienen oder Brücken bringt ihre Infrastrukturmengen weiterhin direkt mit, wie bisher.

TakeoffCraft liest in dieser Version keine `.rvt`-Dateien. Wenn der Architekt in Revit arbeitet, bitten Sie um einen IFC-Export des Modells (Datei, Exportieren, IFC) und öffnen Sie diesen.

Ein Modell kann auf einmal bis zu 500 Mengen einlesen. Sind es mehr, entfernen Sie das Häkchen bei Zeilen oder gruppieren Sie nach Kategorie.
