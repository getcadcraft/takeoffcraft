---
title: Angebotsübersicht und Angebot
summary: Lohnnebenkosten, Umsatzsteuer, Gemeinkosten, Gewinn und Bürgschaft zur Kalkulation hinzufügen, Ein- und Ausschlüsse schreiben und ein Angebots-PDF zum Senden herunterladen.
keywords: Lohnnebenkosten, Nebenkosten, Lohnabrechnung, Angebot, Gemeinkosten, Gewinn, Zuschlag, Marge, Umsatzsteuer, Bürgschaft, Einschlüsse, Ausschlüsse, Bedingungen, Unterschrift, Auftraggeber, Preis
from: 3208a561
---

Die Kalkulation bepreist, was Sie ermittelt haben. Die **Angebotsübersicht** macht daraus einen Preis: Sie fügt Umsatzsteuer, Gemeinkosten, Gewinn und Bürgschaft hinzu und erstellt ein **Angebots-PDF** mit Ihren Ein- und Ausschlüssen.

Öffnen Sie sie über {{ui:Export}} › {{ui:Angebotsübersicht und Angebot…}}. Alles darin wird mit der Mengenermittlung gespeichert, und jede Änderung kann rückgängig gemacht werden.

## Die Zuschläge

Geben Sie in einem der fünf einen Prozentsatz ein (die anderen lassen Sie auf 0). Sie werden in dieser Reihenfolge berechnet, jeweils auf dem, was darüber steht:

| Zeile | Berechnet als |
|---|---|
| Material, Lohn | Die Summen der Kalkulation (das Basisangebot, wenn die Mengenermittlung [Alternativen](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts) hat). |
| Lohnnebenkosten | Nebenkosten % × Lohn: Lohnabgaben, Versicherungen und Sozialleistungen auf die Löhne Ihrer Kolonnen. |
| **Kosten** | Material + Lohn + Lohnnebenkosten. |
| Umsatzsteuer auf Material | Steuersatz % × Material. |
| Gemeinkosten | Gemeinkostensatz % × (Kosten + Steuer). |
| Gewinn | Gewinnsatz % × (Kosten + Steuer + Gemeinkosten). |
| Bürgschaft | Bürgschaftssatz % × alles darüber. |
| **Angebot** | Die Summe der Zeilen. |

Jede Zeile wird auf den Cent gerundet. Die Arbeitsmappe zeigt dieselben Zeilen unter der Summe des Arbeitsblatts Kalkulation, mit Live-Formeln. Die Übersicht aktualisiert sich beim Tippen: {{key:Enter}} übernimmt einen Prozentsatz. Jede Alternative wird mit denselben Zuschlägen auf ihren eigenen Kosten angezeigt, damit der Auftraggeber sieht, was ihr Wegfall wirklich ändert.

## Das Angebot

Füllen Sie aus, was im Angebot stehen soll:

- **Projekt** (der Name der Mengenermittlung, wenn leer), **An** (der Auftraggeber) und **Von** (Ihr Unternehmen).
- **Einschlüsse** und **Ausschlüsse**: einer pro Zeile; ein führender Strich oder Aufzählungspunkt ist in Ordnung.
- **Bedingungen**: Freitext, etwa „Gültig für 30 Tage.“
- **Positionen und Mengen auflisten**: der Leistungsumfang, Position für Position, mit Mengen und ohne Preise. Entfernen Sie den Haken für ein Pauschalangebot.

Wählen Sie {{ui:Angebots-PDF}}. Das PDF (`<takeoff> - proposal.pdf`) hat das Datum, den Preisblock mit jedem Zuschlag und dem Angebot, die Alternativen, den Leistungsumfang, die Ein- und Ausschlüsse, die Bedingungen und Zeilen zum Unterschreiben und Datieren. Wenn einige Mengen nicht gemessen werden konnten (ein Blatt ohne Maßstab), steht das unter dem Preis.

## In den Exporten

Sobald die Mengenermittlung eine Angebotsübersicht hat, endet die CSV damit, und die Arbeitsmappe erhält ein Arbeitsblatt **Angebotsübersicht** mit jeder Zeile, ihrem Prozentsatz und ihrem Betrag. Siehe [Kalkulation exportieren](topic:export-estimate).
