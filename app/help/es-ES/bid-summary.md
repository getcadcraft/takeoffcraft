---
title: Resumen de oferta y propuesta
summary: Añada cargas de mano de obra, impuesto de venta, gastos generales, beneficio y fianza al presupuesto, redacte las inclusiones y exclusiones, y descargue un PDF de propuesta para enviar.
keywords: oferta, carga de mano de obra, carga, nóminas, propuesta, cotización, gastos generales, beneficio, margen, impuesto de venta, fianza, inclusiones, exclusiones, condiciones, firma, cliente, precio
from: 3208a561
---

El presupuesto valora lo que midió. El **resumen de oferta** lo convierte en un precio: añade impuesto de venta, gastos generales, beneficio y fianza, y genera una **propuesta en PDF** con sus inclusiones y exclusiones.

Ábralo desde {{ui:Exportar}} › {{ui:Resumen de oferta y propuesta…}}. Todo lo que contiene se guarda con la medición, y cada cambio puede deshacerse.

## Los márgenes

Escriba un porcentaje en cualquiera de los cinco (deje los demás en 0). Se calculan en este orden, cada uno sobre lo que está por encima:

| Línea | Cálculo |
|---|---|
| Material, Mano de obra | Los totales del presupuesto (la oferta base cuando la medición tiene [alternativas](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Carga de mano de obra | % de carga × mano de obra: cotizaciones sociales, seguros y prestaciones sobre los salarios de sus cuadrillas. |
| **Coste** | Material + mano de obra + carga de mano de obra. |
| Impuesto de venta sobre material | % de impuesto × material. |
| Gastos generales | % de gastos generales × (coste + impuesto). |
| Beneficio | % de beneficio × (coste + impuesto + gastos generales). |
| Fianza | % de fianza × todo lo anterior. |
| **Oferta** | La suma de las líneas. |

Cada línea se redondea al céntimo. El libro muestra las mismas líneas bajo el total de la hoja Presupuesto, con fórmulas activas. El resumen se actualiza mientras escribe: {{key:Enter}} confirma un porcentaje. Cada alternativa se muestra con los mismos márgenes sobre su propio coste, para que el propietario vea lo que realmente cambia al aceptarla.

## La propuesta

Rellene lo que debe decir la propuesta:

- **Proyecto** (el nombre de la medición si está vacío), **Para** (el cliente) y **De** (su empresa).
- **Inclusiones** y **Exclusiones**: una por línea; un guion o una viñeta al inicio están bien.
- **Condiciones**: texto libre, como "Válido durante 30 días."
- **Enumerar las partidas y cantidades**: el alcance, partida a partida, con cantidades y sin precios. Desmárquelo para una propuesta a tanto alzado.

Elija {{ui:Propuesta en PDF}}. El PDF (`<takeoff> - proposal.pdf`) tiene la fecha, el bloque de precios con cada margen y la oferta, las alternativas, el alcance, las inclusiones y exclusiones, las condiciones, y líneas para firmar y fechar. Si algunas cantidades no se pudieron medir (una hoja sin escala), se indica bajo el precio.

## En las exportaciones

Una vez que la medición tiene un resumen de oferta, el CSV termina con él y el libro tiene una hoja **Resumen de oferta**, con cada línea, su porcentaje y su importe. Consulte [Exportar el presupuesto](topic:export-estimate).
