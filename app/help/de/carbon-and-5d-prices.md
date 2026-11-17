---
title: Graue Emissionen und eine 5D-Preistabelle
summary: Carbon summiert die grauen Emissionen der Mengenermittlung aus der Menge jeder Position und einer offenen Faktortabelle und sendet die Sätze der Mengenermittlung als Preistabelle für 5D-Kosten an BimCraft.
keywords: Carbon, graue Emissionen, kgco2e, CO2, Faktoren, a1-a3, Transport, Verschnitt, 5D, Preistabelle, Kosten, BimCraft, EPD
from: f4bff3b8
---

{{ui:Kohlenstoff}} in der Symbolleiste summiert die grauen Emissionen dessen, was Sie gemessen haben, und macht Ihre Sätze zu einer Preistabelle, die das Gebäudemodell verwenden kann. Es ist eine Schätzung, keine Bewertung.

## Graue Emissionen

Die Menge jeder Position wird mit ihrem Verschnitt mit einer Zeile der Faktortabelle multipliziert. Eine Zeile wird über die Wörter des Positionsnamens zugeordnet („Betonplatte“ findet eine Zeile mit dem Stichwort Beton). Die Tabelle ist dieselbe offene Tabelle, die BimCraft verwendet, sodass eine hier geladene Datei dort funktioniert. **Die Zeilen, die mit dem Programm kommen, sind Startwerte: allgemein, ungeprüft und nicht aus einer Datenbank.** Der Dialog sagt das neben den Zahlen. Ersetzen Sie sie durch Ihre eigene Quelle, bevor Sie sich auf eine Zahl verlassen.

1. Wählen Sie {{ui:Kohlenstoff}}. Die gezählten Positionen werden mit ihren Kilogramm CO2e aufgelistet; die Summe steht oben.
2. Setzen Sie den Haken bei {{ui:A4 Transport}} oder {{ui:A5 Baustellenabfall}}, um diese Stufen ebenfalls zu zählen, für die Zeilen, die dafür eine Angabe machen. Die Herstellungsstufe wird immer gezählt.
3. Um für eine Position eine andere Zeile oder keine zu verwenden, nutzen Sie die Liste in ihrer Zeile.
4. {{ui:Faktoren aus einer Datei…}} lädt eine Faktortabelle (JSON oder CSV), die aus Ihrer eigenen Quelle erstellt wurde; ihre Zeilen ersetzen die Startzeilen mit derselben ID. {{ui:Faktoren (JSON)}} speichert Ihre.

Ein Faktor gilt je Meter, Quadratmeter, Kubikmeter, Stück oder Kilogramm. Eine Zeile in Fuß oder Quadratfuß wird umgerechnet. Ein Kilogrammfaktor braucht ein Volumen (Kubikyards oder Kubikmeter) und die Dichte der Zeile. Eine Position, deren Faktor eine Menge braucht, die sie nicht misst, wird unter {{ui:Ausgelassen}} mit dem Grund aufgelistet und nie geschätzt. Die laufende Summe in der Statusleiste zeigt dieselbe Zahl.

Ihre Faktorzeilen, Ihre Auswahl und die gezählten Stufen werden in der Datei der Mengenermittlung gespeichert.

## Eine Preistabelle für 5D-Kosten

{{ui:5D-Preise (JSON)}} und {{ui:5D-Preise (CSV)}} speichern die Sätze der Mengenermittlung als Preistabelle: eine Zeile je bepreister Position mit ihrem Material- und Lohnsatz je Einheit und ihrem Verschnitt. Laden Sie sie im Kostenbereich von BimCraft (Graue Emissionen und 5D-Kosten), um die Aufgaben des Gebäudemodells mit denselben Sätzen zu bepreisen, die das Angebot ergaben. Positionen, die in einer Einheit gemessen werden, die die Tabelle nicht hat, und Positionen ohne Satz werden weggelassen.

## Mit Ihrem Assistenten

Wenn Sie Assistenten in den Einstellungen erlauben, können sie die Kohlenstoffdaten lesen (carbon_check). Das Laden von Faktoren erledigen Sie selbst.

## Gut zu wissen

Nichts wird irgendwohin gesendet. Die Zahlen sind nur so gut wie die Faktoren, die Sie laden.
