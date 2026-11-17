---
title: Exportar el presupuesto y un PDF marcado
summary: Descargue el presupuesto como libro XLSX con fórmulas activas o como CSV, y copias de sus PDF con la cuantificación dibujada.
keywords: propuesta, resumen de licitación, exportar, xlsx, hoja de cálculo, libro, csv, pdf marcado, imprimir cuantificación, informe, compartir, enviar, leyenda
from: 334f89c7
---

Las exportaciones son descargas. Se generan en su computadora a partir de la cuantificación y de los PDF abiertos; no se envía nada a ningún lado.

## El presupuesto como hoja de cálculo (XLSX)

1. Abra el menú {{ui:Exportar}} en la barra de herramientas y elija {{ui:XLSX}}.
   Su navegador descarga `(name).xlsx`. La barra de estado dice "Exportado (name).xlsx (presupuesto con fórmulas activas, por hoja, marcas, escalas)." y agrega una advertencia cuando el presupuesto está incompleto.
2. Ábralo en su programa de hojas de cálculo.

El libro tiene cuatro hojas de cálculo, y los informes siguientes cuando aplican:

| Hoja | Contenido |
|---|---|
| Presupuesto | Una fila por partida y por componente: cantidad, desperdicio, cantidad con desperdicio, tarifas, material, mano de obra, total, notas. El total de la obra al final. |
| Por hoja | La cantidad de cada partida en cada hoja, con el número de marcas. |
| Marcas | Cada marca: hoja, partida, tipo, cantidad y detalle (longitudes de tramos, áreas brutas y de recortes, perímetro). |
| Escalas | Cada hoja que tenga escala o marcas: su escala, cómo se definió (preajuste, o calibrada con qué distancia) y pies por unidad de PDF. |
| Resumen de cuantificación | La cantidad de cada partida, su número CSI, marcas y hojas, sin precios. |
| Lista de materiales | Cada pieza de conjunto sumada en toda la cuantificación (la misma pieza usada por varias partidas es una sola línea), con desperdicio y costo de material, y las partidas que la usan. |
| Solicitud de cotización | La lista de materiales para enviar a un proveedor: cantidades con desperdicio, una columna de precio unitario vacía, y los importes y un total que se llenan conforme escribe los precios. |
| Por división | Material, mano de obra y total por división CSI MasterFormat, cuando las partidas tienen un {{ui:Número CSI}}. |

Con un [resumen de licitación](topic:bid-summary), la hoja Presupuesto también termina con sus recargos (cargas laborales, impuesto sobre ventas, gastos generales, utilidad, fianza y la licitación), como fórmulas activas.

La hoja Presupuesto conserva **fórmulas activas**: cantidad con desperdicio, los importes de material y mano de obra redondeados, el total de cada fila y el total de la obra. Los programas de hojas de cálculo las recalculan, así que puede cambiar una tarifa o el desperdicio en la hoja y los totales se actualizan. Los números que calculó TakeoffCraft también se guardan en las celdas, y coinciden al centavo.

La columna de notas indica la fórmula de cada componente, los errores de fórmula, las marcas en hojas sin escala, el área de muros y el perímetro. Cuando algo se omite, la fila de total de la obra dice "Incompleto: vea las notas de arriba".

El libro se verificó en LibreOffice Calc, que lo recalculó con los mismos totales. Todavía no se ha abierto en Excel. Los detalles columna por columna están en [Columnas de exportación](topic:export-columns).

## El presupuesto como CSV

Abra el menú {{ui:Exportar}} y elija {{ui:CSV}}. Obtiene `(name).csv`: las mismas filas y columnas que la hoja Presupuesto, como valores simples (sin fórmulas), y el total de la obra. Úselo para pegarlo en otro sistema de presupuestos o de contabilidad.

El CSV solo tiene el presupuesto; para cantidades por hoja y la lista de marcas, use XLSX. {{ui:Lista de materiales}} en el mismo menú guarda solo la lista de materiales como CSV, para hacer pedidos.

## El presupuesto en Google Sheets

Encima de la tabla de Cantidades, **Copiar para Google Sheets** pone el presupuesto en su portapapeles como texto separado por tabulaciones, con las mismas líneas que el CSV. En una hoja de Google, haga clic en la celda A1 y pegue. TakeoffCraft no inicia sesión en Google y no envía nada ahí.

## Tarifas faltantes y la aprobación

Una línea con cantidad y sin tarifa dice **Sin tarifa** en sus Notas, y la exportación las cuenta en los totales. Cuando el presupuesto fue aprobado, la exportación indica quién lo firmó, cuándo y por qué total. Vea [Tarifas faltantes y firma de aprobación del presupuesto](topic:sign-off-the-estimate).

## Un PDF marcado

1. Abra los PDF cuyas marcas desea dibujar.
2. Abra el menú {{ui:Exportar}} y elija {{ui:PDF marcado}}. Se muestra "Escribiendo el PDF marcado…", y luego su navegador descarga un archivo por cada PDF marcado, con el nombre `(PDF name) (takeoff).pdf`.

En la copia:

- los tramos se dibujan como líneas en el color de su partida,
- las áreas se rellenan ligeramente con un contorno sólido, y los recortes quedan abiertos,
- los conteos son puntos,
- cada página con marcas recibe una pequeña leyenda en su esquina inferior izquierda: el color, el nombre y la cantidad de cada partida en esa página.

Sus PDF originales no se modifican.

Notas:

- Solo se escriben los PDF que están abiertos. Las marcas de PDF que no están abiertos siguen en los totales, pero no se dibujan; ábralos primero.
- Los nombres de la leyenda usan una fuente PDF estándar. Las letras que no puede mostrar se imprimen como "?".
- Un PDF cifrado no puede copiarse con marcas: "Este PDF está protegido con contraseña o cifrado, así que no se puede escribir una copia marcada. La cuantificación en sí está bien; exporte la hoja de cálculo en su lugar."
- La primera {{ui:PDF marcado}} en una pestaña carga el escritor de PDF. Sin conexión, solo está disponible si la barra de la app muestra {{ui:Lista sin conexión}}; vea [Trabajar sin conexión](common:offline).

:::chromium
Si hay varios PDF marcados, Chrome y Edge pueden preguntar una vez si este sitio puede descargar varios archivos. Elija Permitir, o solo obtendrá el primer archivo.
:::

## ¿Nada que exportar?

- {{ui:XLSX}} y {{ui:CSV}} necesitan al menos una partida: "Nada que exportar todavía: cree una partida y mídala."
- {{ui:PDF marcado}} necesita marcas en un PDF abierto: "Todavía no hay marcas en los PDF abiertos."

## Guarde también la cuantificación

Una exportación es un informe. Para seguir trabajando en la cuantificación más adelante, también elija {{ui:Guardar cuantificación}}: vea [Guardar y reabrir una cuantificación](topic:save-and-reopen).

Para agregar gastos generales, utilidad, impuestos y fianza y enviar una propuesta, vea [Resumen de licitación y propuesta](topic:bid-summary).
