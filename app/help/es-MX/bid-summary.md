---
title: Resumen de licitación y propuesta
summary: Agregue cargas sociales sobre mano de obra, impuesto sobre la venta, indirectos, utilidad y fianza al presupuesto, escriba inclusiones y exclusiones, y descargue una propuesta en PDF para enviar.
keywords: licitación, carga social, cargas sociales, nómina, propuesta, cotización, indirectos, utilidad, recargo, margen, impuesto sobre la venta, fianza, inclusiones, exclusiones, términos, firma, cliente, precio
from: 3208a561
---

El presupuesto calcula lo que cuantificó. El **resumen de licitación** lo convierte en un precio: suma impuesto sobre la venta, indirectos, utilidad y fianza, y genera una **propuesta en PDF** con sus inclusiones y exclusiones.

Abra desde {{ui:Exportar}} › {{ui:Resumen de licitación y propuesta…}}. Todo lo que hay ahí se guarda con la cuantificación, y cada cambio se puede deshacer.

## Los recargos

Escriba un porcentaje en cualquiera de los cinco (deje los demás en 0). Se calculan en este orden, cada uno sobre lo que está arriba:

| Línea | Se calcula como |
|---|---|
| Material, Mano de obra | Los totales del presupuesto (la propuesta base cuando la cuantificación tiene [alternativas](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Carga social sobre mano de obra | % de carga × mano de obra: impuestos de nómina, seguros y prestaciones sobre los salarios de sus cuadrillas. |
| **Costo** | Material + mano de obra + carga social. |
| Impuesto sobre la venta del material | % de impuesto × material. |
| Indirectos | % de indirectos × (costo + impuesto). |
| Utilidad | % de utilidad × (costo + impuesto + indirectos). |
| Fianza | % de fianza × todo lo anterior. |
| **Propuesta** | La suma de las líneas. |

Cada línea se redondea al centavo. El libro muestra las mismas líneas bajo el total de la hoja Presupuesto, con fórmulas vivas. El resumen se actualiza mientras escribe: {{key:Enter}} confirma un porcentaje. Cada alternativa se muestra con los mismos recargos sobre su propio costo, para que el propietario vea lo que realmente cambia al tomarla.

## La propuesta

Llene lo que la propuesta debe decir:

- **Proyecto** (el nombre de la cuantificación si está vacío), **Para** (el cliente) y **De** (su empresa).
- **Inclusiones** y **Exclusiones**: una por línea; un guion o viñeta al inicio está bien.
- **Términos**: texto libre, como "Válida por 30 días."
- **Listar las partidas y cantidades**: el alcance, partida por partida, con cantidades y sin precios. Desmárquelo para una propuesta a suma alzada.

Elija {{ui:Propuesta en PDF}}. El PDF (`<takeoff> - proposal.pdf`) tiene la fecha, el bloque de precio con cada recargo y la propuesta, las alternativas, el alcance, las inclusiones y exclusiones, los términos, y líneas para firmar y fechar. Si algunas cantidades no se pudieron medir (una hoja sin escala), lo indica bajo el precio.

## En las exportaciones

Una vez que la cuantificación tiene un resumen de licitación, el CSV termina con él y el libro obtiene una hoja **Resumen de licitación**, con cada línea, su porcentaje y su importe. Vea [Exportar el presupuesto](topic:export-estimate).
