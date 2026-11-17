---
title: Kalkulation und ein markiertes PDF exportieren
summary: Kalkulation als XLSX-Arbeitsmappe mit aktiven Formeln oder als CSV herunterladen sowie Kopien Ihrer PDFs mit der eingezeichneten Ermittlung.
keywords: Angebot, Angebotsübersicht, Export, xlsx, Tabellenkalkulation, Arbeitsmappe, csv, markiertes PDF, Ermittlung drucken, Bericht, teilen, senden, Legende
from: 334f89c7
---

Exporte sind Downloads. Sie werden auf Ihrem Computer aus der Ermittlung und den geöffneten PDFs erstellt. Nichts wird irgendwohin gesendet.

## Die Kalkulation als Tabelle (XLSX)

1. Öffnen Sie das Menü {{ui:Export}} in der Symbolleiste und wählen Sie {{ui:XLSX}}.
   Ihr Browser lädt `(name).xlsx` herunter. Die Statusleiste zeigt „(name).xlsx exportiert (Kalkulation mit aktiven Formeln, nach Blatt, Markierungen, Maßstäben).“ und eine Warnung, wenn die Kalkulation unvollständig ist.
2. Öffnen Sie die Datei in Ihrem Tabellenkalkulationsprogramm.

Die Arbeitsmappe hat vier Arbeitsblätter sowie die folgenden Berichte, sofern zutreffend:

| Arbeitsblatt | Inhalt |
|---|---|
| Kalkulation | Eine Zeile je Position und je Komponente: Menge, Verschnitt, Menge mit Verschnitt, Preise, Material, Lohn, Gesamt, Hinweise. Die Projektsumme unten. |
| Nach Blatt | Menge jeder Position auf jedem Blatt, mit der Anzahl der Markierungen. |
| Markierungen | Jede Markierung: Blatt, Position, Typ, Menge und Detail (Abschnittslängen, Brutto- und Aussparungsflächen, Umfang). |
| Maßstäbe | Jedes Blatt mit Maßstab oder Markierungen: sein Maßstab, wie er festgelegt wurde (Voreinstellung oder kalibriert anhand welcher Strecke) und Fuß je PDF-Einheit. |
| Ermittlungsübersicht | Menge, CSI-Nummer, Markierungen und Blätter jeder Position, ohne Preise. |
| Materialliste | Jedes Teil eines Kalkulationsbausteins über die gesamte Ermittlung addiert (dasselbe Teil bei mehreren Positionen ist eine Zeile), mit Verschnitt und Materialkosten sowie den Positionen, die es verwenden. |
| Angebotsanfrage | Die Materialliste zum Senden an einen Lieferanten: Mengen mit Verschnitt, eine leere Spalte für Einheitspreise sowie Beträge und eine Summe, die sich ausfüllen, sobald Preise eingegeben werden. |
| Nach Division | Material, Lohn und Gesamt nach CSI-MasterFormat-Division, wenn Positionen eine {{ui:CSI-Nummer}} haben. |

Mit einer [Angebotsübersicht](topic:bid-summary) endet das Arbeitsblatt Kalkulation außerdem mit seinen Aufschlägen (Lohnnebenkosten, Umsatzsteuer, Gemeinkosten, Gewinn, Bürgschaft und Angebot) als aktive Formeln.

Das Arbeitsblatt Kalkulation behält **aktive Formeln**: Menge mit Verschnitt, die gerundeten Material- und Lohnbeträge, die Summe jeder Zeile und die Projektsumme. Tabellenkalkulationen berechnen sie neu. Sie können daher einen Preis oder Verschnitt in der Tabelle ändern, und die Summen folgen. Die von TakeoffCraft berechneten Zahlen werden zusätzlich in den Zellen gespeichert und stimmen auf den Cent überein.

Die Hinweisspalte listet die Formel jeder Komponente, Formelfehler, Markierungen auf Blättern ohne Maßstab, Wandfläche und Umfang auf. Wenn etwas ausgelassen wurde, steht in der Zeile der Projektsumme „Unvollständig: siehe die Hinweise oben“.

Die Arbeitsmappe wurde in LibreOffice Calc geprüft, das sie auf dieselben Summen neu berechnet hat. Sie wurde noch nicht in Excel geöffnet. Details spaltenweise stehen unter [Exportspalten](topic:export-columns).

## Die Kalkulation als CSV

Öffnen Sie das Menü {{ui:Export}} und wählen Sie {{ui:CSV}}. Sie erhalten `(name).csv`: dieselben Zeilen und Spalten wie im Arbeitsblatt Kalkulation als reine Werte (ohne Formeln) sowie die Projektsumme. Verwenden Sie sie zum Einfügen in ein anderes Kalkulations- oder Buchhaltungssystem.

Die CSV enthält nur die Kalkulation. Für Mengen nach Blatt und die Markierungsliste verwenden Sie XLSX. {{ui:Materialliste}} im selben Menü speichert nur die Materialliste als CSV zum Bestellen.

## Die Kalkulation in Google Sheets

Über der Mengentabelle legt **Für Google Sheets kopieren** die Kalkulation als tabulatorgetrennten Text in Ihre Zwischenablage, mit denselben Zeilen wie die CSV. Klicken Sie in einem Google Sheet auf Zelle A1 und fügen Sie ein. TakeoffCraft meldet sich nicht bei Google an und sendet dorthin nichts.

## Fehlende Preise und die Freigabe

Eine Zeile mit Menge, aber ohne Preis, zeigt **Kein Preis** in ihrer Spalte Hinweise, und der Export führt sie unter den Summen auf. Wurde die Kalkulation freigegeben, nennt der Export, wer wann und für welche Summe freigegeben hat. Siehe [Fehlende Preise und Freigabe der Kalkulation](topic:sign-off-the-estimate).

## Ein markiertes PDF

1. Öffnen Sie die PDFs, deren Markierungen gezeichnet werden sollen.
2. Öffnen Sie das Menü {{ui:Export}} und wählen Sie {{ui:Markiertes PDF}}.
   „Markiertes PDF wird geschrieben…“ wird angezeigt. Dann lädt Ihr Browser je markiertem PDF eine Datei herunter, benannt `(PDF-Name) (Ermittlung).pdf`.

In der Kopie gilt:

- Strecken werden als Linien in der Farbe ihrer Position gezeichnet,
- Flächen werden leicht mit durchgehendem Umriss gefüllt, Aussparungen bleiben offen,
- Zählungen sind Punkte,
- jede Seite mit Markierungen erhält unten links eine kleine Legende: Farbe, Name und Menge jeder Position auf dieser Seite.

Ihre Original-PDFs werden nicht verändert.

Hinweise:

- Nur geöffnete PDFs werden geschrieben. Markierungen auf nicht geöffneten PDFs bleiben in den Summen, werden aber nicht gezeichnet. Öffnen Sie diese PDFs zuerst.
- Namen in der Legende verwenden eine Standard-PDF-Schrift. Buchstaben, die sie nicht darstellen kann, werden als „?“ gedruckt.
- Ein verschlüsseltes PDF kann nicht mit Markierungen kopiert werden: „Dieses PDF ist passwortgeschützt oder verschlüsselt, daher kann keine markierte Kopie geschrieben werden. Die Ermittlung selbst ist in Ordnung. Exportieren Sie stattdessen die Tabelle.“
- Das erste {{ui:Markiertes PDF}} in einer Registerkarte lädt den PDF-Schreiber. Offline ist er nur verfügbar, wenn die App-Leiste {{ui:Offline bereit}} anzeigt. Siehe [Offline arbeiten](common:offline).

:::chromium
Bei mehreren markierten PDFs fragen Chrome und Edge möglicherweise einmal, ob diese Website mehrere Dateien herunterladen darf. Wählen Sie Zulassen. Sonst erhalten Sie nur die erste Datei.
:::

## Nichts zu exportieren?

- {{ui:XLSX}} und {{ui:CSV}} brauchen mindestens eine Position: „Noch nichts zu exportieren: Erstellen Sie eine Position und ermitteln Sie sie.“
- {{ui:Markiertes PDF}} braucht Markierungen auf einem geöffneten PDF: „Noch keine Markierungen auf den geöffneten PDFs.“

## Auch die Ermittlung speichern

Ein Export ist ein Bericht. Um später an der Ermittlung weiterzuarbeiten, wählen Sie außerdem {{ui:Ermittlung speichern}}. Siehe [Ermittlung speichern und wieder öffnen](topic:save-and-reopen).

Um Gemeinkosten, Gewinn, Steuer und Bürgschaft hinzuzufügen und ein Angebot zu senden, siehe [Angebotsübersicht und Angebot](topic:bid-summary).
