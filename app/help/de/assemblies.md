---
title: Kalkulationsbausteine und Formeln
summary: Bausteine zu einer Position hinzufügen und Formeln Länge, Fläche oder Anzahl in Ständer, Schwellen, Platten, Beton und Beschläge umrechnen lassen, mit einem durchgerechneten Wandbeispiel.
keywords: Kalkulationsbaustein, Bausteine, Formel, Ständer, Trockenbau, Platten, Schwellen, Beton, Kubikyards, Beschläge, Rezept, typisch, Positionsbestandteile
from: 12891a21
---

Der **Kalkulationsbaustein** einer Position ist eine Liste von Bausteinen, jeweils mit einer Mengenformel sowie eigenem Verschnitt und eigenen Sätzen. Die Formel verwendet die gemessenen Summen der Position. Eine Messung einer Wand liefert also Ständer, Schwellen und Platten zugleich, und sie aktualisieren sich beim Messen.

## Verwendbare Variablen

| Positionstyp | Variablen |
|---|---|
| Linear | `L` Länge, `H` Höhe, `A` Wandfläche (L × H), `N` Anzahl Strecken |
| Fläche | `A` Fläche, `P` Umfang (Umriss + Aussparungen), `H` Tiefe oder Dicke, `N` Anzahl Flächen |
| Anzahl | `N` Anzahl |

Die Werte stehen in der eigenen Einheit der Position: Fuß und Quadratfuß für Positionen in LF und SF, Meter und Quadratmeter für Positionen in m und m². Bei einer Position in SY ist `A` in Quadratyards, während `P` und `H` in Fuß bleiben.

Formeln verwenden `+ - * /` (oder × ÷), Klammern, Zahlen und die Funktionen `ceil`, `floor`, `round`, `min`, `max` und `abs`. Die vollständigen Regeln stehen unter [Formelsprache](topic:formulas).

## Beispiel: eine Innenwand

Angenommen, Sie haben **Innenwand Typ A** als lineare Position ermittelt: 4 Strecken mit insgesamt 120 LF, und {{ui:Höhe}} steht auf `9'-0"`. Die Werte **Gemessen** lauten L = 120, N = 4, A = 1,080 (SF Wand, eine Seite).

1. Wählen Sie die Position unter {{ui:Positionen}}.
2. Wählen Sie unter {{ui:Kalkulationsbaustein}} die Option {{ui:Baustein hinzufügen}}.
   Ein Baustein namens „Baustein“ erscheint, mit der Formel `L` und dem Ergebnis darunter.
3. Geben Sie `Ständer 16 in o.c.` in {{ui:Name}} ein und `EA` in {{ui:Einheit}}.
4. Geben Sie in {{ui:Mengenformel}} `ceil(L * 12 / 16) + N` ein.
   Das Ergebnis aktualisiert sich beim Tippen: „= 94 EA“. Das ist ein Ständer alle 16 in entlang 120 Fuß (90), plus einer zusätzlich, um jede der 4 Strecken abzuschließen.
5. Wählen Sie erneut {{ui:Baustein hinzufügen}} für die Schwellen: Name `Schwellen oben und unten`, Einheit `LF`, Formel `L * 2`. Ergebnis: 240 LF.
6. Fügen Sie die Platten hinzu: Name `Gipskarton 4x8, beidseitig`, Einheit `Platten`, Formel `ceil(A * 2 / 32)`. Ergebnis: 68 Platten (2,160 SF Platten ÷ 32 SF je Platte = 67.5, aufgerundet).
7. Tragen Sie für jeden Baustein {{ui:Verschnitt %}}, {{ui:Material $}} und {{ui:Lohn $}} ein.
   Jeder Baustein erhält unter der Position in {{ui:Mengen}} eine eigene Zeile, wird wie eine Position bepreist, und die {{ui:Auftragssumme}} enthält ihn.

Wenn die Wandkosten vollständig in den Bausteinen liegen, lassen Sie die Material- und Lohnsätze der Position selbst auf 0, sonst werden sie doppelt gezählt.

:::tip
Der Verschnitt wird nach der Formel angewendet und nicht gerundet: 68 Platten mit 10 % Verschnitt ergeben 74.8 Platten. Um ganze Platten zu bestellen, setzen Sie den Verschnitt in die Formel, etwa `ceil(A * 2 / 32 * 1.1)`, und lassen den Verschnitt des Bausteins auf 0.
:::

## Weitere Formeln

| Was | Position | Formel |
|---|---|---|
| Ständer im Abstand von 24 in | Linear | `ceil(L / 2) + N` |
| Dämmstoffmatten, SF | Linear mit Höhe | `A` |
| Farbe, beidseitig, Gallonen zu 350 SF | Linear mit Höhe | `ceil(A * 2 / 350)` |
| Fliesenkartons zu 15 SF, 10 % Zugabe | Fläche | `ceil(A * 1.1 / 15)` |
| Sockel- oder Randleisten, LF | Fläche | `P` |
| Beton, Kubikyards | Fläche mit Tiefe | `A * H / 27` |
| Beton auf ein Viertel Kubikyard aufgerundet | Fläche mit Tiefe | `ceil(A * H / 27 * 4) / 4` |
| Türbänder, drei je Tür | Anzahl | `N * 3` |
| Mindestens ein Karton, einer je 12 | Anzahl | `max(1, ceil(N / 12))` |

## Wenn eine Formel falsch ist

Die Zeile unter der Formel wird zu einer Fehlermeldung, zum Beispiel `"X" is not a measured value here. Use L, H, A, N.` oder `A ")" is missing.` Der Baustein hat dann keine Beträge, seine Zeile unter {{ui:Mengen}} zeigt „Formelfehler: …“, und die Kopfzeile sagt „Unvollständig: 1 Formelfehler (nicht in den Summen)“. Korrigieren Sie die Formel, dann aktualisieren sich die Summen.

Eine Formel, die durch null teilt, ist ebenfalls ein Fehler („Die Formel dividiert durch null.“), zum Beispiel `A / H` bei einer Position ohne Tiefe.

## Grenzen

- Formeln rechnen mit den **Summen** der Position, nicht Strecke für Strecke. `ceil(L * 12 / 16) + N` fügt einen Ständer je Strecke hinzu; eine Rundung je Strecke gibt es noch nicht.
- Eine Formel kann nur die Variablen ihrer eigenen Position verwenden, nicht die einer anderen Position.
- Bis zu 50 Bausteine je Position, 500 Zeichen je Formel.

## Baustein entfernen

Wählen Sie darunter {{ui:Baustein entfernen}}. Sie können dies mit {{key:Mod+Z}} rückgängig machen.
