---
title: Exportspalten
summary: Jedes Arbeitsblatt und jede Spalte des XLSX-Exports und der CSV, mit den Formeln, die das Arbeitsblatt Kalkulation enthält.
keywords: Export, Spalten, xlsx, csv, Arbeitsblatt, Kalkulation, nach Blatt, Markierungen, Maßstäbe, Formeln, Felder
from: fed07851
---

## Kalkulation (XLSX-Arbeitsblatt und CSV)

Eine Zeile je Position, gefolgt von einer Zeile je Komponente ihres Kalkulationsbausteins (eingerückt). Dann folgen eine leere Zeile und die Projektsumme.

| Spalte | Inhalt | Im XLSX |
|---|---|---|
| A Position | Name der Position (fett) oder Name der Komponente (eingerückt) | Text |
| B Typ | Linear, Fläche, Zählen oder Komponente | Text |
| C Einheit | LF, m, SF, SY, m², EA oder die Einheit der Komponente | Text |
| D Menge | Gemessene Summe oder das Ergebnis der Formel | Zahl |
| E Verschnitt % | Verschnitt | Prozent (0.10 = 10 %) |
| F Menge mit Verschnitt | Menge × (1 + Verschnitt) | Formel `D*(1+E)` |
| G Material je Einheit | Materialpreis | Zahl |
| H Lohn je Einheit | Lohnpreis | Zahl |
| I Material | Materialbetrag | Formel `ROUND(F*G,2)` |
| J Lohn | Lohnbetrag | Formel `ROUND(F*H,2)` |
| K Gesamt | Material + Lohn | Formel `I+J` |
| L Hinweise | Verwendete Formel, Formelfehler, Markierungen auf Blättern ohne Maßstab, Wandfläche, Umfang | Text |

Zeile Projektsumme: `SUM` über die Spalten I, J und K aller Zeilen darüber. Wenn etwas ausgelassen wurde, steht in den Hinweisen „Unvollständig: siehe die Hinweise oben“.

Eine Zeile mit Formelfehler hat keine Menge und keine Beträge; ihr Hinweis nennt den Fehler. Die Kopfzeile ist fixiert.

In der CSV enthalten dieselben Spalten reine Werte. Verschnitt % ist eine Zahl in Prozent (10 für 10 %), und Geldbeträge stehen in Dollar mit zwei Nachkommastellen. Text, den eine Tabellenkalkulation für eine Formel halten könnte (beginnend mit `=`, `+`, `-` oder `@`), erhält ein führendes `'`, damit er Text bleibt.

## Nach Blatt (nur XLSX)

| Spalte | Inhalt |
|---|---|
| Blatt | Blattname (mit dem PDF-Namen, wenn es nicht geöffnet ist) |
| Position | Name der Position |
| Menge | Menge dieser Position auf diesem Blatt, in ihrer Einheit |
| Einheit | Einheit der Position |
| Markierungen | Anzahl der Markierungen |

## Markierungen (nur XLSX)

Eine Zeile je Markierung.

| Spalte | Inhalt |
|---|---|
| Blatt | Blattname |
| Position | Name der Position |
| Typ | Linear, Fläche oder Zählen |
| Menge | Länge, Nettofläche oder 1 |
| Einheit | LF oder m; SF, SY oder m²; EA |
| Detail | Linear: die Abschnittslängen, abgezogene mit „(abziehen)“ markiert, und „Abzüge (Länge) von (Länge) gezeichnet“. Fläche: Brutto- und Aussparungsflächen, wenn es Aussparungen gibt, und der Umfang. „Blatt hat keinen Maßstab“ für Markierungen ohne Maßstab. |
| Angebotsbereich | Nur wenn die Ermittlung Angebotsbereiche hat: die Fläche der Markierung oder „Kein Angebotsbereich“ |

## Nach Angebotsbereich (nur XLSX, wenn die Ermittlung Angebotsbereiche hat)

| Spalte | Inhalt |
|---|---|
| Angebotsbereich | Name des Bereichs oder „Kein Angebotsbereich“ |
| Position | Die Position oder eine eingerückte Komponente darunter |
| Einheit | Einheit der Position oder Komponente |
| Menge | In diesem Bereich gemessen (Komponenten: die Formel auf den Summen des Bereichs) |
| Menge mit Verschnitt | Menge × (1 + Verschnitt) |
| Material, Lohn, Gesamt | Auf den Cent berechnet, wie in der Kalkulation |
| Hinweise | Formeln, Fehler und Markierungen ohne Maßstab, wie in der Kalkulation |

Jeder Bereich endet mit einer Zeile „Zwischensumme (Name)“, deren Kosten `SUM`-Formeln über ihre Zeilen sind. Die letzte Zeile, **Alle Angebotsbereiche**, addiert die Zwischensummen. Das Arbeitsblatt **Markierungen** hat dann eine siebte Spalte, **Angebotsbereich**.

## Maßstäbe (nur XLSX)

Eine Zeile je Blatt mit Maßstab oder Markierungen.

| Spalte | Inhalt |
|---|---|
| Blatt | Blattname |
| Maßstab | Name der Voreinstellung, der kalibrierte Maßstab oder „Kein Maßstab“ |
| Festlegung | „Voreinstellung“ oder „Kalibriert anhand (der eingegebenen Strecke)“ |
| Fuß je PDF-Einheit | Der exakte Maßstabsfaktor, den TakeoffCraft verwendet |

## Dateinamen

- `(name).xlsx` und `(name).csv`. Der Name stammt vom ersten PDF, das in der Ermittlung geöffnet wurde.
- Die CSV ist UTF-8 mit Byte-Order-Mark und Windows-Zeilenenden, die Tabellenkalkulationen auf allen Plattformen lesen.
