---
title: Lieferantenbestand und Lieferzeiten prüfen
summary: Fügen Sie die Bestandsliste eines Lieferanten (CSV oder Tabelle) hinzu. TakeoffCraft prüft damit, was die Mengenermittlung braucht, einschließlich Verschnitt: genug auf Lager und wie lang die Wartezeit ist. Fehlmengen und lange Wartezeiten erscheinen im Bereich „Probleme“.
keywords: Lieferant, Bestand, auf Lager, Lieferzeit, Verfügbarkeit, Fehlmenge, Nachbestellung, Bestellliste, csv, SKU, Verkäufer, Materialien, Lieferung, Probleme
from: f11160fb
---

{{ui:Lieferung}} in der Symbolleiste (der Lkw) prüft, was Ihre Mengenermittlung braucht, gegen die Bestandsliste eines Lieferanten. Die relevanten Zeilen des Lieferanten werden in der eigenen Datei der Mengenermittlung gespeichert. Nichts wird irgendwohin gesendet, und niemand fragt beim Lieferanten nach: Die Datei bringen Sie mit.

## Die Datei

Eine CSV-Datei mit einer Kopfzeile. Sie braucht eine Spalte für Name oder SKU sowie eine Spalte für Bestand oder Lieferzeit. Diese Kopfzeilen werden erkannt (beliebige Reihenfolge, Groß- und Kleinschreibung egal): Item, Name, Description oder Product; SKU, Part oder Item #; In stock, On hand, Available oder Quantity; Lead time oder Delivery days; Unit oder UOM; Price oder Cost; Supplier oder Vendor.

- Der Bestand kann eine Zahl sein (1,200), "In stock" oder "Out of stock".
- Eine Lieferzeit kann "5 days", "2 weeks", "2-3 weeks" (es zählt der längere Wert), "3 months", "same day" oder "backorder" sein. Eine reine Zahl gilt in der Einheit der Kopfzeile (Tage, sofern die Kopfzeile nicht Wochen oder Monate nennt).
- Excel-Dateien werden nicht gelesen: Speichern Sie das Blatt zuerst als CSV.

## Die Mengenermittlung prüfen

1. Wählen Sie {{ui:Lieferung}}, dann {{ui:Lieferantendatei hinzufügen…}} und die CSV-Datei. Sie können mehrere hinzufügen: bis zu fünf Dateien, insgesamt 2,000 Zeilen, wobei zuerst die Zeilen behalten werden, die zu Ihren Positionen passen.
2. Jede Position, jede Zweitbedingung und jedes Teil eines Kalkulationsbausteins mit Menge wird über den Namen einer Zeile zugeordnet, oder über die SKU im Namen. Ein ähnlicher Name (einer ist im anderen enthalten) wird verwendet, wenn kein genauer vorhanden ist, und das wird angezeigt.
3. Unter {{ui:Was die Mengenermittlung braucht}} stehen die knappen Fälle zuerst: „Fehlmenge 120 EA“, „Lieferzeit 21 Tage“, „Nachbestellt“, „Einheit weicht ab“, „Kein Bestandswert“ oder „Auf Lager“. Der Bedarf schließt den Verschnitt ein. Eine Lieferanteneinheit, die nicht die der Kalkulation ist (eine Tonne statt eines Fußes), wird gemeldet und nie verglichen. Jede Zeile hat {{ui:Posten wählen}}, das zur Position springt.
4. Stellen Sie {{ui:Längste gewünschte Wartezeit (Tage)}} ein (Standard 14). Eine Position, die nicht auf Lager ist und länger als das wartet, wird markiert, und die Zusammenfassung nennt die längste relevante Wartezeit.
5. {{ui:Bestellliste (CSV)}} lädt die Fehlmengen herunter, mit der fehlenden Menge, dem Lieferanten und der Lieferzeit. {{ui:Auslassen}} nimmt einen Bedarf aus der Prüfung heraus (das ist ein Rückgängig-Schritt).

## Tabellendateien und die Preisbibliothek

Die Liste eines Lieferanten kann eine Excel-Arbeitsmappe (.xlsx) sein, genauso wie eine CSV-Datei: Das erste Blatt wird gelesen, mit denselben Spaltennamen. Formeln werden nie ausgeführt; gelesen wird der Wert, den die Datei enthält.

Sobald eine Datei mit Preisen hinzugefügt wurde, setzt {{ui:Preise in die Bibliothek}} im Dialog den Materialpreis jedes Eintrags der [Bibliothek](topic:price-library), den die Datei bepreist: gleicher Name und eine Einheit, die gleich ist (oder nicht angegeben). Lohn, Verschnitt, Höhe und Kalkulationsbausteine bleiben, wie sie sind, und die Notiz des Eintrags sagt, aus welcher Datei der Preis stammt. Ein Eintrag in Metern wird nicht aus einer Liste in Fuß bepreist, und einer ohne passenden Namen bleibt unberührt. Die Statuszeile sagt, wie viele wegen der Einheit übersprungen wurden. Bepreisen Sie aus der Bibliothek neu, um die neuen Preise in diese Mengenermittlung zu übernehmen.

## Im Bereich „Probleme“

Eine Fehlmenge ist eine Warnung und eine lange Wartezeit ein Hinweis, im gemeinsamen Bereich „Probleme“ („Lieferantenbestand“), damit sie bei allen anderen Prüfungen stehen. Sie können eine mit Begründung akzeptieren; die Akzeptanz wird in der Mengenermittlung gespeichert.

## Mit Ihrem Assistenten

Wenn Sie Assistenten in den {{ui:Einstellungen}} erlauben, können sie die Prüfung lesen (supply_check). Das Hinzufügen einer Lieferantendatei übernehmen Sie selbst.

## Gut zu wissen

Die Bestandszahlen sind nur so aktuell wie die Datei, die Sie hinzufügen. Fügen Sie die Datei erneut hinzu, um sie zu aktualisieren: Eine Datei mit demselben Namen ersetzt die frühere.
