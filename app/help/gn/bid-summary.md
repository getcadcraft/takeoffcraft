---
title: Resumen de oferta y propuesta
summary: Agregá cargas laborales, impuesto de venta, gastos generales, ganancia y fianza al presupuesto, escribí las inclusiones y exclusiones, y descargá un PDF de propuesta para enviar.
keywords: oferta, carga laboral, carga, nómina, propuesta, cotización, gastos generales, ganancia, recargo, margen, impuesto de venta, fianza, inclusiones, exclusiones, condiciones, firma, cliente, precio
from: 3208a561
---

El presupuesto valora lo que computaste. El **resumen de oferta** lo convierte en un precio: agrega impuesto de venta, gastos generales, ganancia y fianza, y genera un **PDF de propuesta** con tus inclusiones y exclusiones.

Abrilo desde {{ui:Exportar}} › {{ui:Resumen de oferta y propuesta…}}. Todo queda guardado con el cómputo, y cada cambio se puede deshacer.

## Los recargos

Escribí un porcentaje en cualquiera de los cinco (dejá los demás en 0). Se calculan en este orden, cada uno sobre lo que está encima:

| Línea | Cómo se calcula |
|---|---|
| Material, Mano de obra | Los totales del presupuesto (la oferta base cuando el cómputo tiene [alternativas](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Carga laboral | % de carga × mano de obra: impuestos de nómina, seguros y beneficios sobre los salarios de tus cuadrillas. |
| **Costo** | Material + mano de obra + carga laboral. |
| Impuesto de venta sobre material | % de impuesto × material. |
| Gastos generales | % de gastos generales × (costo + impuesto). |
| Ganancia | % de ganancia × (costo + impuesto + gastos generales). |
| Fianza | % de fianza × todo lo anterior. |
| **Oferta** | La suma de las líneas. |

Cada línea se redondea al centavo. El libro de cálculo muestra las mismas líneas debajo del total de la hoja Presupuesto, con fórmulas activas. El resumen se actualiza mientras escribís: {{key:Enter}} confirma un porcentaje. Cada alternativa se muestra con los mismos recargos sobre su propio costo, para que el propietario vea qué cambia realmente al tomarla.

## La propuesta

Completá lo que debe decir la propuesta:

- **Proyecto** (el nombre del cómputo si está vacío), **Para** (el cliente) y **De** (tu empresa).
- **Inclusiones** y **Exclusiones**: una por línea; un guion o viñeta al principio está bien.
- **Condiciones**: texto libre, como "Válido por 30 días."
- **Listar los ítems y cantidades**: el alcance, ítem por ítem, con cantidades y sin precios. Desmarcalo para una propuesta a suma global.

Elegí {{ui:PDF de propuesta}}. El PDF (`<cómputo> - propuesta.pdf`) tiene la fecha, el bloque de precios con cada recargo y la oferta, las alternativas, el alcance, las inclusiones y exclusiones, las condiciones, y líneas para firmar y fechar. Si algunas cantidades no se pudieron medir (un plano sin escala), lo indica debajo del precio.

## En las exportaciones

Una vez que el cómputo tiene un resumen de oferta, el CSV termina con él y el libro de cálculo recibe una hoja **Resumen de oferta**, con cada línea, su porcentaje y su monto. Ver [Exportar el presupuesto](topic:export-estimate).
