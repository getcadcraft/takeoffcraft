---
title: Lo que aún no está disponible
summary: Funciones de medición que esta versión no tiene y qué hacer hoy en su lugar.
keywords: límites, falta, aún no, hoja de ruta, previsto, alternativa, por recorrido, nube, escritorio
from: 94ff90d0
---

TakeoffCraft está en desarrollo. Esta lista recoge lo que la versión actual no hace y cómo sacar el trabajo adelante igualmente.

## Medición

| Aún no disponible | En su lugar, hoy |
|---|---|
| Insertar un punto en medio de un recorrido o de un contorno | Borre la marca y vuelva a dibujarla. |
| Selección por ventana (recuadro) | {{key:Shift}} + clic en cada marca, o {{key:Mod+A}} para todas las marcas de la hoja. Consulte [Copiar, pegar y duplicar marcas](topic:copy-paste). |
| Girar, reflejar o reescalar una copia pegada | Pegue en una hoja a la misma escala y con la misma orientación; dibuje el resto a mano. |
| Leer una escala de una hoja escaneada o de una barra gráfica de escala | Elija el preajuste, o calibre con la longitud de la barra. |
| Más de una escala por hoja (áreas de detalle, plantas ampliadas) | Mida la parte a la escala de la hoja, y mida el detalle en su propia hoja ampliada si el juego la tiene. |

## Partidas y precios

| Aún no disponible | En su lugar, hoy |
|---|---|
| Fórmulas de montaje que usan otros tipos de marcas de una partida (las puertas de una partida de local en las fórmulas de su planta) | Las fórmulas usan los totales del tipo principal; precie los otros tipos en sus propias filas. |
| Fórmulas de montaje calculadas tramo a tramo | Las fórmulas usan los totales de la partida; use `N` para los extras por tramo. |
| Fórmulas que usan las cantidades de otra partida | Repita la medición en esa partida, o calcúlelo en la hoja de cálculo exportada. |
| Cuadrillas en los componentes de montaje, o una jornada laboral distinta de 8 horas | Asigne la cuadrilla a la partida; para otra duración de jornada, calcule los días de cuadrilla como horas de cuadrilla ÷ su jornada. |
| Anotaciones distintas de notas, nubes y resaltados (flechas, cotas, sellos), o respuestas en una nota | Escríbalo en el texto de la nota, y cambie su estado a medida que se resuelva. |
| Una biblioteca de precios compartida por un equipo, o guardada con su cuenta | La biblioteca se guarda en este navegador: expórtela como CSV e impórtela en el otro ordenador. |
| Paquetes de oficio revisados por estimadores de obra | Cada paquete es un punto de partida: compruebe sus supuestos con su obra y sus productos antes de presupuestar con él. Consulte [Paquetes de oficio](topic:trade-packs). |
| Precios en los paquetes de oficio | Los paquetes solo aportan montajes: fije sus propias tarifas, o importe su lista de precios como CSV. |
| Cambiar el nombre de la medición | El nombre sale del primer PDF; renombre los archivos descargados. |
| Nombrar las hojas a mano | Las hojas se nombran con las etiquetas de página del PDF; busque por nombre de archivo y página. |

## Dibujos (DWG y DXF)

| Aún no disponible | En su lugar, hoy |
|---|---|
| Tablas de estilos de trazado, asignación de plumas y archivos CTB en las hojas de un dibujo | Un dibujo se dibuja en negro, o en sus colores oscurecidos para papel; los grosores de línea vienen del dibujo. |
| Abrir un DXF binario, o un DWG anterior a AutoCAD 2000 | Guárdelo como DXF ASCII o como DWG más reciente. |
| Encontrar un dibujo vinculado (xref) por la carpeta en la que está | Abra también el archivo del dibujo vinculado junto con el principal: se encuentra por nombre de archivo entre los archivos abiertos. |
| Medir polilíneas 3D, mallas, sólidos y regiones | Cuéntelos por capa y tipo, o mida la vista en planta con las herramientas Lineal y Área. |
| Texto en un PDF anotado de un dibujo con escrituras distintas de la latina | Los caracteres para los que Helvetica no tiene glifo se imprimen como "?" en el PDF anotado; el dibujo en pantalla no cambia. |
| Pasar un dibujo a otra aplicación desde la barra de hojas | Abra el mismo archivo en esa aplicación. |
| Un dibujo que lleva la medición dentro, como hace {{ui:PDF con la medición dentro}} con los PDF | {{ui:Guardar medición}}: el `.takeoff.json` se reabre en el mismo dibujo, que se encuentra por su contenido. |
| PDF de fondo, imágenes y objetos OLE colocados en un dibujo, para dibujar o contar | Las imágenes se muestran solo como marco. Abra el PDF de fondo como hoja. |

## Recuento automático

| Aún no disponible | En su lugar, hoy |
|---|---|
| Encontrar símbolos en una hoja sin escala dibujada a otro tamaño | Asigne a la hoja su escala, o búsquelos con un recuadro dibujado allí. |
| Encontrar símbolos reflejados | Cuéntelos a mano, o busque de nuevo con un recuadro alrededor de uno reflejado. |

## Archivos y compartir

| Aún no disponible | En su lugar, hoy |
|---|---|
| Un PDF que muestre las marcas y lleve la medición a la vez | {{ui:PDF anotado}} para que la gente vea las marcas; {{ui:PDF con la medición dentro}} para reabrir en TakeoffCraft. |
| Un CSV de cantidades por hoja o de las marcas | Use {{ui:XLSX}}: sus hojas Por hoja y Marcas las contienen. |
| Guardado en la nube | Todavía no disponible. Guarde los archivos del proyecto en su ordenador y haga copias de seguridad. |
| Una aplicación de escritorio de TakeoffCraft independiente | Desde la versión 0.5, la aplicación de escritorio es CadCraft Studio, con las ocho aplicaciones en una sola instalación. TakeoffCraft también funciona en el navegador. |

## Pantalla y entrada

| Aún no disponible | En su lugar, hoy |
|---|---|
| Un menú con el botón derecho (o con pulsación larga) | Use la barra de herramientas, los paneles y las teclas. Una pulsación larga termina un recorrido o un contorno. |
| Girar la vista | Las páginas que están giradas en el PDF ya se ven derechas. |

## Vista 3D

| Aún no disponible | En su lugar, hoy |
|---|---|
| Dibujar o editar marcas en 3D | Vuelva a la hoja ({{key:3}}) para dibujar; seleccionar y borrar sí funcionan en 3D. |
| Alinear plantas apiladas trazadas en lugares distintos de sus páginas | Apile plantas trazadas de forma igual; revise las demás una hoja cada vez. |
| Contar postes con el tamaño del objeto contado | Cada poste de una hoja tiene el mismo tamaño; marca dónde está un recuento, no qué es. |

## Licitación

| Aún no disponible | En su lugar, hoy |
|---|---|
| Adendas a un paquete que ya se envió, cartas de adjudicación, una hoja de alcance que firma cada licitador | Envíe un paquete nuevo y redacte la adjudicación usted mismo. [Enviar un paquete de licitación](topic:bid-invitations) explica lo que sí está disponible. |
| Enviar invitaciones a licitar desde cualquier cuenta: mientras se prueba, el correo a licitadores externos está desactivado salvo en las cuentas que el equipo de CadCraft haya habilitado | Descargue el {{ui:CSV del alcance}}, envíelo usted por correo y escriba las ofertas. |
| Enviar paquetes de licitación desde una ventana de Studio | Envíelos desde TakeoffCraft en el navegador. |
| Repreciar el área de oferta de una alternativa con una oferta elegida | Las alternativas y los subtotales de áreas de oferta usan sus propios precios; ajuste la alternativa a mano. |
| Recordatorios automáticos antes de que venza el seguro o la licencia de un subcontratista | La fecha se marca en la página de Subcontratistas cuando ya ha pasado o faltan 30 días; compruébela al invitar. |

## Paneles

| Aún no disponible | En su lugar, hoy |
|---|---|
| Mover la tabla de {{ui:Cantidades}} | Solo se mueven los paneles {{ui:Hojas}} y {{ui:Partidas}}. Consulte [Organizar los paneles](common:arrange-panels). |

## Hojas de cálculo

El libro XLSX se ha comprobado en LibreOffice Calc, que recalculó cada total hasta el mismo céntimo que TakeoffCraft. Todavía no se ha abierto en Excel. Si un programa de hojas de cálculo muestra algo inesperado, la exportación CSV contiene la misma estimación como valores simples.
