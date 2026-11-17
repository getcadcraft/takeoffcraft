---
title: Unidades
summary: As unidades que pode informar un elemento, as que usan as variables das súas fórmulas, e como se mesclan o imperial e o métrico.
keywords: unidades, lf, sf, sy, sq, iardas cadradas, cadros de cuberta, acres, hectáreas, metros, metros cadrados, ea, cada, métrico, imperial, conversión, unidade por defecto
from: b7bf0528
---

## Unidades do elemento

| Tipo de elemento | Unidade | Nome |
|---|---|---|
| Lineal | LF | pés lineais (por defecto) |
| Lineal | m | metros |
| Superficie | SF | pés cadrados (por defecto) |
| Superficie | SY | iardas cadradas |
| Superficie | SQ | cadros de cuberta (100 pés cadrados) |
| Superficie | ac | acres |
| Superficie | m² | metros cadrados |
| Superficie | ha | hectáreas |
| Contar | EA | cada |

Cámbiaa con {{ui:Unidade}} no editor de elementos en calquera momento, mesmo despois de medir; a cantidade convértese de inmediato.

A lista {{ui:Unidade}} mostra as unidades activadas en {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Unidades}}, e sempre a unidade propia do elemento. Un elemento novo comeza na unidade de lonxitude ou superficie marcada cunha estrela alí, cando é unha das do elemento; se non, en LF ou SF. Ver [Unidades, valores escritos e listas de unidades](common:unit-lists).

## Unidades das variables de fórmula

| Unidade do elemento | L, P, H | A |
|---|---|---|
| LF | pés | pés cadrados (superficie de muro) |
| m | metros | metros cadrados (superficie de muro) |
| SF | pés | pés cadrados |
| SY | pés | iardas cadradas |
| SQ | pés | cadros |
| ac | pés | acres |
| m² | metros | metros cadrados |
| ha | metros | hectáreas |

Para os elementos SY, `A` está en iardas cadradas, mentres `P` e `H` seguen en pés. Un volume dun elemento SY é `A * 9 * H / 27` iardas cúbicas; usar SF para as laxes é máis simple.

## Onde as unidades están fixas

Algunhas lecturas usan sempre pés:

- a lectura en directo da barra de estado mentres debuxas (pés e polgadas, SF),
- **Marca seleccionada** (pés e polgadas, LF e SF),
- o resultado da comprobación (pés e polgadas, con pés decimais e metros),
- as lonxitudes dos segmentos e os perímetros na folla Marcas da folla de cálculo (pés e polgadas).

Os totais dos elementos, a táboa {{ui:Cantidades}}, as fórmulas e a folla Estimación usan a unidade propia do elemento.

## Escalas e unidades son separadas

A escala dunha folla indica o tamaño do debuxo; a unidade dun elemento indica como informalo. Un debuxo métrico a `1:100` pode medirse en LF, e un debuxo imperial en m². Calibrar acepta calquera unidade: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisión

TakeoffCraft mide exactamente a partir dos puntos que fas clic, incluídas as lonxitudes e superficies reais dos arcos, e non redondea as cantidades. A visualización redondea as lonxitudes a 1/16 de polgada e os decimais a dúas cifras. Os importes monetarios redondeanse só nos importes extendidos, ao céntimo.
