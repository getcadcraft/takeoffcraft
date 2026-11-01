---
title: Archivos que TakeoffCraft abre y guarda
summary: PDF de entrada; archivo de proyecto de cuantificación, hojas de cálculo y PDF con marcas de salida - qué contiene cada uno, adónde va y qué cambia con conexión, sin conexión y entre navegadores.
keywords: archivos, formatos, pdf, takeoff.json, archivo de proyecto, xlsx, csv, pdf marcado, descargar, guardar, abrir, sin conexión
from: 1bf9be65
---

## Qué abre

| Archivo | Cómo | Notas |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir planos}}, {{key:Mod+O}}, o suéltelo en la página | Varios a la vez. Cada página se vuelve una hoja. |
| Proyecto de cuantificación (`.takeoff.json`) | {{ui:Abrir cuantificación}}, o suéltelo en la página | Sus partidas, escalas y marcas. Puede soltarlo junto con sus PDF. |

Los demás archivos que se sueltan en la página se omiten, y la barra de estado los nombra.

- **Los PDF protegidos con contraseña** no se abren: "(nombre) está protegido con contraseña. Abra una copia sin protección."
- **El mismo PDF dos veces** se abre una sola vez: "(nombre) ya está abierto." TakeoffCraft reconoce los archivos por su contenido, no por su nombre.
- **Los PDF escaneados** se abren y se miden como cualquier otro; TakeoffCraft no necesita el texto del PDF.
- **Juegos de planos grandes**: cada PDF se lee completo al abrirse (para obtener su huella), así que un archivo muy grande tarda un momento. Las miniaturas se dibujan una a la vez conforme se desplaza.

## Qué guarda

Cada guardado es una descarga. Nada se escribe de vuelta en sus PDF.

| Usted elige | Obtiene | Qué contiene |
|---|---|---|
| {{ui:Guardar cuantificación}} | `(nombre).takeoff.json` | Partidas, conjuntos, precios, escalas de hoja y todas las marcas, vinculadas a cada PDF por su contenido. Sin páginas de PDF. |
| {{ui:XLSX}} | `(nombre).xlsx` | Cuatro hojas de cálculo: Presupuesto (con fórmulas vivas), Por hoja, Marcas, Escalas. |
| {{ui:CSV}} | `(nombre).csv` | El presupuesto como valores simples, una fila por partida y componente. |
| {{ui:PDF marcado}} | `(nombre del PDF) (cuantificación).pdf` | Una copia de cada PDF abierto que tenga marcas, con la cuantificación dibujada en sus páginas y una leyenda. Un archivo por PDF. |

El nombre se toma del primer PDF que abrió en esta cuantificación. Todavía no hay un cuadro para renombrar: cambie el nombre del archivo descargado si quiere otro.

Vea [Exportar el presupuesto y un PDF marcado](topic:export-estimate) y [Columnas de exportación](topic:export-columns).

## Adónde van las descargas

Su navegador las guarda donde guarda todas las descargas, normalmente la carpeta Descargas. Búsquela en {{pick:mac=Finder|windows=el Explorador de archivos|linux=su administrador de archivos}}. Si su navegador está configurado para preguntar dónde guardar cada archivo, pregunta.

:::chromium
{{ui:PDF marcado}} con varios PDF marcados descarga varios archivos a la vez. Chrome y Edge pueden preguntar una vez si este sitio puede descargar varios archivos. Elija Permitir.
:::

:::safari
Safari guarda en Descargas a menos que haya cambiado la ubicación de descarga en la Configuración de Safari, en General.
:::

## Por qué el archivo de proyecto y los PDF están separados

El archivo `.takeoff.json` contiene solo su cuantificación. Vuelve a encontrar sus PDF por su contenido (una huella de cada archivo), así que:

- Renombrar o mover un PDF no importa.
- Un PDF que otro programa modificó o volvió a guardar cuenta como un archivo distinto, aunque tenga el mismo nombre.
- Las marcas en PDF que no están abiertos siguen contando en los totales.

Vea [Guardar y volver a abrir una cuantificación](topic:save-and-reopen).

## Con y sin conexión

Sus PDF y cuantificaciones nunca salen de su computadora, con o sin conexión. La conexión importa solo para cargar TakeoffCraft.

Para trabajar sin conexión, guarde antes la aplicación, mientras tiene conexión:

1. Elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación, en la parte superior.
   El botón cuenta hacia arriba, "Guardando 12 de 40", mientras guarda.
2. Espere a que diga {{ui:Lista sin conexión}}.

Guardar TakeoffCraft conserva en su navegador la aplicación, esta ayuda, el lector de PDF, el escritor de PDF que usa {{ui:PDF marcado}} y el proceso del conteo automático, unos 6 MB. Cuando dice {{ui:Lista sin conexión}}, todo funciona sin conexión: abrir PDF, medir, {{ui:Conteo automático}}, {{ui:Guardar cuantificación}}, {{ui:XLSX}}, {{ui:CSV}} y {{ui:PDF marcado}}.

| El botón dice | Significado |
|---|---|
| {{ui:Guardar para usar sin conexión}} | Aún no está guardada en este navegador. Elíjalo para guardar. |
| Guardando (n) de (m) | Guardando ahora. |
| {{ui:Lista sin conexión}} | Guardada. Elíjalo para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. |
| {{ui:No se pudo guardar}} | Algunos archivos no se descargaron. Revise su conexión y elíjalo otra vez. |
| {{ui:Sin conexión no disponible}} | Esta ventana del navegador no puede conservar una copia sin conexión (las ventanas privadas y algunas computadoras administradas lo bloquean). |

Más información, incluido cuánto dura una copia guardada en cada navegador: [Trabajar sin conexión](common:offline).

:::offline
Está sin conexión. Si la barra de la aplicación muestra {{ui:Lista sin conexión}}, todo funciona. Si no, las partes que TakeoffCraft aún no ha cargado en esta pestaña (el escritor de PDF para {{ui:PDF marcado}}, el proceso del conteo automático) no pueden cargarse ahora, y {{ui:PDF marcado}} se detiene con "No se pudo escribir el PDF marcado". Su cuantificación está a salvo de cualquier forma: {{ui:Guardar cuantificación}}, {{ui:XLSX}} y {{ui:CSV}} no necesitan conexión. No recargue la pestaña hasta que tenga conexión otra vez.
:::

:::online
Tiene conexión. Antes de una visita a obra o de un vuelo, elija {{ui:Guardar para usar sin conexión}} y espere a que diga {{ui:Lista sin conexión}}.
:::

## Hojas de cálculo

El XLSX conserva fórmulas vivas, así que un programa de hojas de cálculo recalcula el presupuesto al abrir el archivo y lo mantiene correcto cuando usted cambia allí un precio o el desperdicio. El libro se comprobó en LibreOffice Calc, que recalculó todos los totales con el mismo centavo. Todavía no se ha abierto en Excel.

El CSV son valores simples con una marca de orden de bytes, para que los programas de hojas de cálculo lean correctamente caracteres como m².

## Escritorio y nube

:::desktop
Desde la 0.5, la aplicación de escritorio es CadCraft Studio: TakeoffCraft y las otras siete aplicaciones en una sola instalación. No hay un instalador de TakeoffCraft por separado.
:::

El guardado en la nube todavía no está disponible. Conserve sus archivos `.takeoff.json` con los PDF de la obra y respáldelos como cualquier otro archivo. Vea [Adónde van sus archivos](common:your-files).
