---
title: Formelsprache
summary: Die Regeln für Mengenformeln von Kalkulationsbausteinen: Variablen, Operatoren, Funktionen, Rundung und jede Fehlermeldung.
keywords: Formel, Ausdruck, Syntax, Funktionen, ceil, floor, round, min, max, abs, Variablen, Operatoren, Berechnung
from: 4da14575
---

Komponenten eines Kalkulationsbausteins erhalten ihre Menge aus einer Formel. Eine Formel ist ein kleiner Rechenausdruck über die gemessenen Werte der Position. Durchgerechnete Beispiele finden Sie unter [Kalkulationsbausteine und Formeln](topic:assemblies).

## Variablen

| Positionstyp | Variable | Bedeutung |
|---|---|---|
| Linear | `L` | Gesamtlänge |
| Linear | `H` | Höhe der Position |
| Linear | `A` | Wandfläche, L × H, abzüglich der Öffnungen der Strecken, die sie tragen (eine Ermittlung aus BimCraft). Nennt diese Ermittlung eine Messmethode, wird `A` nach ihr gemessen: Öffnungen, die nicht größer als die kleinste Größe der Methode sind, bleiben enthalten. Was die Methode an Wandanschlüssen abzieht, bleibt unberücksichtigt. Der Hinweis unter der Position nennt die Methode |
| Linear | `N` | Anzahl der Strecken |
| Fläche | `A` | Gesamte Nettofläche (Umrisse minus Aussparungen) |
| Fläche | `P` | Gesamter Umfang, einschließlich der Kanten der Aussparungen |
| Fläche | `H` | Tiefe oder Dicke der Position |
| Fläche | `N` | Anzahl der Flächen |
| Zählen | `N` | Die Anzahl |

- Variablen sind in den Einheiten der Position: siehe [Einheiten](topic:units).
- Groß- und Kleinschreibung sind gleich: `l` ist `L`.
- Nur die Variablen des eigenen Typs der Position funktionieren. `P` bei einer linearen Position ergibt `"P" ist hier kein gemessener Wert. Verwenden Sie L, H, A, N.`
- Eine leere Höhe oder Tiefe ist 0.

## Operatoren

| Schreibweise | Bedeutung |
|---|---|
| `+` | Addieren |
| `-` oder `−` | Subtrahieren oder ein negativer Wert |
| `*` oder `×` | Multiplizieren |
| `/` oder `÷` | Dividieren |
| `( )` | Gruppieren |

Multiplikation und Division gehen vor Addition und Subtraktion: `L * 2 + 4` ist (L × 2) + 4. Setzen Sie im Zweifel Klammern.

Zahlen können Dezimalstellen (`1.333`, `.5`) und Exponenten haben (`1e3` = 1000). Leerzeichen werden ignoriert.

## Funktionen

| Funktion | Ergebnis | Beispiel |
|---|---|---|
| `ceil(x)` | Auf eine ganze Zahl aufrunden | `ceil(67.5)` = 68 |
| `floor(x)` | Auf eine ganze Zahl abrunden | `floor(67.5)` = 67 |
| `round(x)` | Auf die nächste ganze Zahl runden, Hälften von null weg | `round(2.5)` = 3 |
| `round(x, d)` | Auf d Nachkommastellen runden (0 bis 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Der kleinste Wert | `min(N, 10)` |
| `max(a, b, …)` | Der größte Wert | `max(1, ceil(N / 12))` |
| `abs(x)` | Der Wert ohne Vorzeichen | `abs(-3)` = 3 |

`ceil` und `floor` ignorieren winzige Rundungsfehler des Computers. Ein Wert, der genau 1 sein soll, wird daher nie auf 2 aufgerundet.

## Fehler

Eine Formel, die nicht gelesen oder berechnet werden kann, zeigt ihren Fehler unter dem Feld. Die Komponente bleibt aus den Summen heraus (die Kopfzeile {{ui:Mengen}} sagt „Unvollständig“). Meldungen:

| Meldung | Abhilfe |
|---|---|
| „Eine Formel eingeben, z. B. L oder ceil(L / 1.333) + 1.“ | Die Formel ist leer. |
| „"X" ist hier kein gemessener Wert. Verwenden Sie …“ | Verwenden Sie eine der aufgeführten Variablen. |
| „"X" ist hier keine Funktion. Verwenden Sie ceil, floor, round, min, max, abs.“ | Verwenden Sie eine dieser Funktionen. |
| „"#" ist in einer Formel nicht erlaubt.“ | Entfernen Sie dieses Zeichen (Einheiten, `%`, `$` und `=` sind nicht erlaubt). |
| „Eine ")" fehlt.“ / „Es gibt eine ")" ohne ihre "(".“ | Gleichen Sie die Klammern aus. |
| „Vor ")" fehlt ein Wert.“ | Etwas wie `max(1, )`: Ergänzen Sie den Wert. |
| „Die Formel endet zu früh.“ | Etwas wie `L *`: Vervollständigen Sie die Formel. |
| „Unerwartetes "…". Fehlt ein Operator?“ | Zwei Werte nebeneinander, wie `2L`: Schreiben Sie `2 * L`. |
| „ceil() braucht genau 1 Wert.“ | Geben Sie der Funktion die richtige Anzahl an Werten. |
| „round(x, digits) braucht ganze Stellen von 0 bis 10.“ | Verwenden Sie eine ganze Zahl an Nachkommastellen. |
| „Die Formel teilt durch null.“ | Meist ist H 0: Legen Sie die Höhe oder Tiefe der Position fest. |
| „Die Formel ergibt keine Zahl.“ | Das Ergebnis ist zu groß, um eine Zahl zu sein. |
| „Diese Formel ist zu lang (höchstens 500 Zeichen).“ | Kürzen Sie sie. |

## Sicher durch Konstruktion

Eine Formel kann nur mit den oben genannten Variablen und Funktionen rechnen. Sie kann keinen Code ausführen und nichts anderes lesen. Eine Formel in einer Projektdatei, die Ihnen jemand sendet, ist daher harmlos.
