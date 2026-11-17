---
title: Exportar el presupuesto y un PDF anotado
summary: Descargue el presupuesto como libro XLSX con fórmulas activas o como CSV, y copias de sus PDF con la medición dibujada.
keywords: propuesta, resumen de oferta, exportar, xlsx, hoja de cálculo, libro, csv, pdf anotado, imprimir medición, informe, compartir, enviar, leyenda
from: 334f89c7
---

Las exportaciones son descargas. Se generan en su equipo a partir de la medición y de los PDF abiertos; no se envía nada a ningún sitio.

## El presupuesto como hoja de cálculo (XLSX)

1. Abra el menú {{ui:Exportar}} de la barra de herramientas y elija {{ui:XLSX}}.
   Su navegador descarga `(nombre).xlsx`. La barra de estado indica "Exportado (nombre).xlsx (presupuesto con fórmulas activas, por plano, marcas, escalas)." y muestra una advertencia cuando el presupuesto está incompleto.
2. Ábralo en su programa de hojas de cálculo.

El libro tiene cuatro hojas, y los informes siguientes cuando corresponda:

| Hoja | Contenido |
|---|---|
| Presupuesto | Una fila por elemento y por componente: cantidad, desperdicio, cantidad con desperdicio, precios, material, mano de obra, total y notas. El total de la obra al final. |
| Por plano | La cantidad de cada elemento en cada plano, con el número de marcas. |
| Marcas | Cada marca: plano, elemento, tipo, cantidad y detalle (longitudes de tramos, áreas brutas y de huecos, perímetro). |
| Escalas | Cada plano que tiene escala o marcas: su escala, cómo se fijó (predefinida, o calibrada con qué distancia) y pies por unidad de PDF. |
| Resumen de medición | La cantidad de cada elemento, su número CSI, sus marcas y sus planos, sin precios. |
| Lista de materiales | Cada pieza de ensamblaje sumada en toda la medición (la misma pieza usada por varios elementos es una sola línea), con desperdicio y coste de material, y los elementos que la usan. |
| Solicitud de presupuesto | La lista de materiales para enviar a un proveedor: cantidades con desperdicio, una columna de precio unitario vacía, y extensiones y un total que se rellenan a medida que se escriben los precios. |
| Por división | Material, mano de obra y total por división CSI MasterFormat, cuando los elementos tienen un {{ui:Número CSI}}. |

Con un [resumen de oferta](topic:bid-summary), la hoja Presupuesto termina además con sus márgenes (carga de mano de obra, impuesto de ventas, gastos generales, beneficio, fianza y oferta), como fórmulas activas.

La hoja Presupuesto conserva **fórmulas activas**: cantidad con desperdicio, importes redondeados de material y mano de obra, total de cada fila y total de la obra. Las hojas de cálculo las recalculan, así que puede cambiar un precio o un desperdicio en la hoja y los totales se actualizan. Los números que calculó TakeoffCraft también se guardan en las celdas, y coinciden al céntimo.

La columna de notas enumera la fórmula de cada componente, los errores de fórmula, las marcas en planos sin escala, el área de muro y el perímetro. Cuando algo queda fuera, la fila del total de la obra dice "Incompleto: vea las notas de arriba".

El libro se ha comprobado en LibreOffice Calc, que lo recalculó con los mismos totales. Todavía no se ha abierto en Excel. El detalle columna por columna está en [Columnas de exportación](topic:export-columns).

## El presupuesto como CSV

Abra el menú {{ui:Exportar}} y elija {{ui:CSV}}. Obtendrá `(nombre).csv`: las mismas filas y columnas que la hoja Presupuesto, como valores simples (sin fórmulas), y el total de la obra. Úselo para pegarlo en otro sistema de presupuestos o de contabilidad.

El CSV solo contiene el presupuesto; para las cantidades por plano y la lista de marcas, use XLSX. {{ui:Lista de materiales}} en el mismo menú guarda solo la lista de materiales como CSV, para hacer pedidos.

## El presupuesto en Google Sheets

Encima de la tabla de {{ui:Cantidades}}, **Copiar para Google Sheets** pone el presupuesto en el portapapeles como texto separado por tabulaciones, con las mismas líneas que el CSV. En una hoja de Google, haga clic en la celda A1 y pegue. TakeoffCraft no inicia sesión en Google y no envía nada allí.

## Precios que faltan y aprobación

Una línea con cantidad y sin precio indica **Sin precio** en sus Notas, y la exportación las cuenta bajo los totales. Cuando el presupuesto se aprobó, la exportación indica quién lo aprobó, cuándo y por qué total. Véase [Precios que faltan y aprobación del presupuesto](topic:sign-off-the-estimate).

## Un PDF anotado

1. Abra los PDF cuyas marcas quiere dibujar.
2. Abra el menú {{ui:Exportar}} y elija {{ui:PDF anotado}}.
   Aparece "Escribiendo el PDF anotado…" y después su navegador descarga un archivo por cada PDF anotado, con el nombre `(nombre del PDF) (medición).pdf`.

En la copia:

- los tramos se dibujan como líneas del color de su elemento,
- las superficies se rellenan con un color suave y un contorno sólido, y los huecos quedan abiertos,
- los recuentos son puntos,
- cada página con marcas recibe una pequeña leyenda en su esquina inferior izquierda: el color, el nombre y la cantidad de cada elemento en esa página.

Sus PDF originales no se modifican.

Notas:

- Solo se escriben los PDF abiertos. Las marcas de los PDF que no están abiertos siguen en los totales, pero no se dibujan; ábralos antes.
- Los nombres de la leyenda usan una fuente PDF estándar. Las letras que no puede mostrar se imprimen como "?".
- Un PDF cifrado no se puede copiar con marcas: "Este PDF tiene contraseña o está cifrado, así que no se puede escribir una copia con marcas. La medición en sí está bien; exporte la hoja de cálculo en su lugar."
- La primera vez que usa {{ui:PDF anotado}} en una pestaña, se carga el escritor de PDF. Sin conexión, solo está disponible si la barra de la aplicación muestra {{ui:Listo sin conexión}}; véase [Trabajar sin conexión](common:offline).

:::chromium
Con varios PDF anotados, Chrome y Edge pueden preguntar una vez si este sitio puede descargar varios archivos. Elija Permitir; de lo contrario, solo obtendrá el primer archivo.
:::

## ¿Nada que exportar?

- {{ui:XLSX}} y {{ui:CSV}} necesitan al menos un elemento: "Nada que exportar todavía: cree un elemento y mídalo."
- {{ui:PDF anotado}} necesita marcas en un PDF abierto: "Todavía no hay marcas en los PDF abiertos."

## Guarde también la medición

Una exportación es un informe. Para seguir trabajando en la medición más adelante, elija también {{ui:Guardar medición}}: véase [Guardar y reabrir una medición](topic:save-and-reopen).

Para añadir gastos generales, beneficio, impuestos y fianza, y enviar una propuesta, véase [Resumen de oferta y propuesta](topic:bid-summary).
