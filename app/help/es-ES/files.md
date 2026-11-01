---
title: Archivos que TakeoffCraft abre y guarda
summary: PDF de entrada; archivo de proyecto de medición, hojas de cálculo y PDF con marcas de salida. Qué contiene cada uno, adónde va y qué cambia con conexión, sin conexión y entre navegadores.
keywords: archivos, formatos, pdf, takeoff.json, archivo de proyecto, xlsx, csv, pdf marcado, descargar, guardar, abrir, sin conexión
from: 1bf9be65
---

## Qué abre

| Archivo | Cómo | Notas |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir PDF}}, {{key:Mod+O}}, o soltarlo en la página | Varios a la vez. Cada página se convierte en una hoja. |
| Proyecto de medición (`.takeoff.json`) | {{ui:Abrir medición}}, o soltarlo en la página | Sus partidas, escalas y marcas. Puede soltarlo junto con sus PDF. |

Los demás archivos que suelte en la página se omiten, y la barra de estado los nombra.

- **Los PDF protegidos con contraseña** no se abren: «(nombre) está protegido con contraseña. Abra una copia sin protección».
- **El mismo PDF dos veces** se abre una sola vez: «(nombre) ya está abierto». TakeoffCraft reconoce los archivos por su contenido, no por su nombre.
- **Los PDF escaneados** se abren y se miden como cualquier otro; TakeoffCraft no necesita el texto del PDF.
- **Juegos de planos grandes**: cada PDF se lee entero al abrirlo (para obtener su huella), así que un archivo muy grande tarda un momento. Las miniaturas se dibujan de una en una a medida que se desplaza.

## Qué guarda

Cada guardado es una descarga. No se escribe nada de vuelta en sus PDF.

| Usted elige | Obtiene | Qué contiene |
|---|---|---|
| {{ui:Guardar medición}} | `(nombre).takeoff.json` | Partidas, conjuntos, precios, escalas de las hojas y todas las marcas, asociadas a cada PDF por su contenido. Sin páginas de PDF. |
| {{ui:XLSX}} | `(nombre).xlsx` | Cuatro hojas de cálculo: Presupuesto (con fórmulas vivas), Por hoja, Marcas, Escalas. |
| {{ui:CSV}} | `(nombre).csv` | El presupuesto como valores simples, una fila por partida y componente. |
| {{ui:PDF anotado}} | `(nombre del PDF) (medición).pdf` | Una copia de cada PDF abierto que tenga marcas, con la medición dibujada en sus páginas y una leyenda. Un archivo por PDF. |

El nombre se toma del primer PDF que abrió en esta medición. Todavía no hay un cuadro para cambiarlo: cambie el nombre del archivo descargado si quiere otro.

Vea [Exportar el presupuesto y un PDF con marcas](topic:export-estimate) y [Columnas de exportación](topic:export-columns).

## Adónde van las descargas

Su navegador las guarda donde guarda todas las descargas, normalmente la carpeta Descargas. Encuéntrela en {{pick:mac=el Finder|windows=el Explorador de archivos|linux=su gestor de archivos}}. Si su navegador está configurado para preguntar dónde guardar cada archivo, lo pregunta.

:::chromium
{{ui:PDF anotado}} con varios PDF marcados descarga varios archivos a la vez. Chrome y Edge pueden preguntar una vez si este sitio puede descargar varios archivos. Elija Permitir.
:::

:::safari
Safari guarda en Descargas salvo que haya cambiado la ubicación de descarga en los Ajustes de Safari, en General.
:::

## Por qué el archivo de proyecto y los PDF están separados

El archivo `.takeoff.json` contiene solo su medición. Vuelve a encontrar sus PDF por su contenido (una huella de cada archivo), así que:

- Cambiar el nombre de un PDF o moverlo no importa.
- Un PDF que otro programa modificó o volvió a guardar cuenta como un archivo distinto, aunque tenga el mismo nombre.
- Las marcas de PDF que no están abiertos siguen contando en los totales.

Vea [Guardar y volver a abrir una medición](topic:save-and-reopen).

## Con conexión y sin conexión

Sus PDF y mediciones nunca salen de su ordenador, con conexión o sin ella. La conexión solo importa para cargar el propio TakeoffCraft.

Para trabajar sin conexión, guarde antes la aplicación, mientras tiene conexión:

1. Elija {{ui:Guardar para uso sin conexión}} en la barra de la aplicación, en la parte superior.
   El botón cuenta hacia arriba, «Guardando 12 de 40», mientras guarda.
2. Espere a {{ui:Listo sin conexión}}.

Guardar TakeoffCraft conserva en su navegador la aplicación, esta ayuda, el lector de PDF, el escritor de PDF que usa {{ui:PDF anotado}} y el proceso del recuento automático, unos 6 MB. Cuando dice {{ui:Listo sin conexión}}, todo funciona sin conexión: abrir PDF, medir, {{ui:Autorrecuento}}, {{ui:Guardar medición}}, {{ui:XLSX}}, {{ui:CSV}} y {{ui:PDF anotado}}.

| El botón dice | Significado |
|---|---|
| {{ui:Guardar para uso sin conexión}} | Todavía no guardada en este navegador. Elíjalo para guardar. |
| Guardando (n) de (m) | Guardando ahora. |
| {{ui:Listo sin conexión}} | Guardada. Elíjalo para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. |
| {{ui:No se pudo guardar}} | Algunos archivos no se descargaron. Compruebe su conexión y vuelva a elegirlo. |
| {{ui:Sin conexión no disponible}} | Esta ventana del navegador no puede conservar una copia sin conexión (las ventanas privadas y algunos ordenadores gestionados la bloquean). |

Más información, incluido cuánto dura una copia guardada en cada navegador: [Trabajar sin conexión](common:offline).

:::offline
Está sin conexión. Si la barra de la aplicación muestra {{ui:Listo sin conexión}}, todo funciona. Si no, las partes que TakeoffCraft aún no ha cargado en esta pestaña (el escritor de PDF para {{ui:PDF anotado}}, el proceso del recuento automático) no se pueden cargar ahora, y {{ui:PDF anotado}} se detiene con «No se pudo escribir el PDF anotado». Su medición está a salvo en cualquier caso: {{ui:Guardar medición}}, {{ui:XLSX}} y {{ui:CSV}} no necesitan conexión. No recargue la pestaña hasta que vuelva a tener conexión.
:::

:::online
Tiene conexión. Antes de una visita a obra o de un vuelo, elija {{ui:Guardar para uso sin conexión}} y espere a {{ui:Listo sin conexión}}.
:::

## Hojas de cálculo

El XLSX conserva fórmulas vivas, así que un programa de hojas de cálculo recalcula el presupuesto al abrir el archivo y lo mantiene correcto cuando usted cambia allí un precio o el desperdicio. El libro se ha comprobado en LibreOffice Calc, que recalculó todos los totales hasta el mismo céntimo. Todavía no se ha abierto en Excel.

El CSV son valores simples con una marca de orden de bytes, para que los programas de hojas de cálculo lean correctamente caracteres como m².

## Escritorio y nube

:::desktop
Desde la 0.5, la aplicación de escritorio es CadCraft Studio: TakeoffCraft y las otras siete aplicaciones en una sola instalación. No hay un instalador de TakeoffCraft aparte.
:::

El guardado en la nube todavía no está disponible. Conserve sus archivos `.takeoff.json` con los PDF de la obra y haga copias de seguridad como con cualquier otro archivo. Vea [Adónde van sus archivos](common:your-files).
