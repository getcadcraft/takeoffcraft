---
title: Exportar el presupuesto ha un PDF marcado
summary: Descargá el presupuesto como libro XLSX con fórmulas activas o como CSV, ha copias de tus PDF con el cómputo dibujado.
keywords: propuesta, resumen de oferta, exportar, xlsx, planilla, libro, csv, pdf marcado, imprimir cómputo, informe, compartir, enviar, leyenda
from: 334f89c7
---

Las exportaciones son descargas. Se hacen en tu computadora a partir del cómputo ha de los PDF abiertos; no se envía nada a ningún lado.

## El presupuesto como planilla (XLSX)

1. Abrí el menú {{ui:Export}} de la barra de herramientas ha elegí {{ui:XLSX}}.
   Tu navegador descarga `(name).xlsx`. La barra de estado dice "Exportado (name).xlsx (presupuesto con fórmulas activas, por hoja, marcas, escalas)." ha agrega un aviso cuando el presupuesto está incompleto.
2. Abrilo en tu programa de planillas.

El libro tiene cuatro hojas, ha los informes de abajo cuando corresponde:

| Hoja | Qué contiene |
|---|---|
| Estimate | Una fila por ítem ha por componente: cantidad, desperdicio, cantidad con desperdicio, tasas, material, mano de obra, total, notas. El total de la obra abajo. |
| By sheet | La cantidad de cada ítem en cada hoja, con la cantidad de marcas. |
| Marks | Cada marca: hoja, ítem, tipo, cantidad, ha detalle (longitudes de tramos, áreas brutas ha de recortes, perímetro). |
| Scales | Cada hoja que tenga escala o marcas: su escala, cómo se fijó (preajuste, o calibrada sobre qué distancia), ha pies por unidad de PDF. |
| Takeoff summary | La cantidad de cada ítem, número CSI, marcas ha hojas, sin precios. |
| Material list | Cada pieza de ensamblaje sumada en todo el cómputo (la misma pieza usada por varios ítems es una sola línea), con desperdicio ha costo de material, ha los ítems que la usan. |
| Quote request | La lista de materiales para enviar al proveedor: cantidades con desperdicio, una columna de precio unitario vacía, ha extensiones ha un total que se completa a medida que se escriben los precios. |
| By division | Material, mano de obra ha total por división CSI MasterFormat, cuando los ítems tienen un {{ui:CSI number}}. |

Con un [resumen de oferta](topic:bid-summary), la hoja Estimate también termina con sus recargos (carga de mano de obra, impuesto de venta, gastos generales, ganancia, fianza ha la oferta), como fórmulas activas.

La hoja Estimate mantiene **fórmulas activas**: cantidad con desperdicio, los importes redondeados de material ha mano de obra, el total de cada fila ha el total de la obra. Las planillas las recalculan, así que podés cambiar una tasa o desperdicio en la planilla ha los totales se actualizan. Los números que calculó TakeoffCraft también se guardan en las celdas, ha coinciden al centavo.

La columna de notas lista la fórmula de cada componente, errores de fórmula, marcas en hojas sin escala, área de muro ha perímetro. Cuando algo quedó afuera, la fila del total de la obra dice "Incomplete: see the notes above".

El libro se revisó en LibreOffice Calc, que lo recalculó a los mismos totales. Todavía no se abrió en Excel. Los detalles columna por columna están en [Columnas de exportación](topic:export-columns).

## El presupuesto como CSV

Abrí el menú {{ui:Export}} ha elegí {{ui:CSV}}. Obtenés `(name).csv`: las mismas filas ha columnas que la hoja Estimate, como valores simples (sin fórmulas), ha el total de la obra. Usalo para pegar en otro sistema de presupuestos o contabilidad.

El CSV tiene solo el presupuesto; para cantidades por hoja ha la lista de marcas, usá XLSX. {{ui:Material list}} en el mismo menú guarda solo la lista de materiales como CSV, para pedir.

## El presupuesto en Google Sheets

Arriba de la tabla de Cantidades, **Copiar para Google Sheets** pone el presupuesto en el portapapeles como texto separado por tabulaciones, con las mismas líneas que el CSV. En una hoja de Google, hacé clic en la celda A1 ha pegá. TakeoffCraft no inicia sesión en Google ha no envía nada allí.

## Tasas faltantes ha la aprobación

Una línea con cantidad pero sin tasa dice **No rate** en sus Notes, ha la exportación las cuenta en los totales. Cuando el presupuesto fue aprobado, la exportación indica quién lo aprobó, cuándo ha por qué total. Ver [Tasas faltantes ha firmar la aprobación del presupuesto](topic:sign-off-the-estimate).

## Un PDF marcado

1. Abrí los PDF cuyas marcas querés dibujar.
2. Abrí el menú {{ui:Export}} ha elegí {{ui:Marked PDF}}.
   Aparece "Ojehai PDF marcado…", ha luego tu navegador descarga un archivo por cada PDF marcado, con el nombre `(PDF name) (takeoff).pdf`.

En la copia:

- los tramos se dibujan como líneas del color de su ítem,
- las áreas se rellenan suavemente con un contorno sólido, ha los recortes quedan abiertos,
- los conteos son puntos,
- cada página con marcas tiene una pequeña leyenda en su esquina inferior izquierda: el color de cada ítem, su nombre ha su cantidad en esa página.

Tus PDF originales no cambian.

Notas:

- Solo se escriben los PDF que están abiertos. Las marcas de PDF cerrados quedan en los totales pero no se dibujan; abrí esos PDF primero.
- Los nombres de la leyenda usan una fuente PDF estándar. Las letras que no puede mostrar salen como "?".
- Un PDF cifrado no se puede copiar con marcas: "Este PDF tiene contraseña o está cifrado, así que no se puede escribir una copia marcada. El cómputo en sí está bien; exportá la planilla en su lugar."
- La primera {{ui:Marked PDF}} en una pestaña carga el escritor de PDF. Sin conexión, solo está disponible si la barra de la app muestra {{ui:Offline ready}}; ver [Trabajar sin conexión](common:offline).

:::chromium
Con varios PDF marcados, Chrome y Edge pueden preguntar una vez si este sitio puede descargar varios archivos. Elegí Permitir, o solo obtenés el primer archivo.
:::

## ¿Nada para exportar?

- {{ui:XLSX}} y {{ui:CSV}} necesitan al menos un ítem: "Nada para exportar todavía: creá un ítem ha medilo."
- {{ui:Marked PDF}} necesita marcas en un PDF abierto: "Todavía no hay marcas en los PDF abiertos."

## Guardá también el cómputo

Una exportación es un informe. Para seguir trabajando en el cómputo más tarde, elegí también {{ui:Save takeoff}}: ver [Guardar y reabrir un cómputo](topic:save-and-reopen).

Para agregar gastos generales, ganancia, impuesto y fianza ha enviar una propuesta, ver [Resumen de oferta y propuesta](topic:bid-summary).
