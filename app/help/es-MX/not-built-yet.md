---
title: "Lo que todavía no está disponible"
summary: "Funciones de cuantificación que esta versión no tiene, y qué hacer en su lugar hoy."
keywords: "límites, faltante, todavía no, hoja de ruta, planeado, solución alternativa, por tramo, nube, escritorio"
from: 94ff90d0
---

TakeoffCraft está en desarrollo. Esta lista indica lo que la versión actual no hace, y cómo sacar el trabajo adelante de todos modos.

## Medición

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Insertar un punto en medio de un tramo o de un contorno | Borre la marca y vuelva a dibujarla. |
| Selección por ventana | {{key:Shift}} + clic en cada marca, o {{key:Mod+A}} para todas las marcas de la hoja. Vea [Copiar, pegar y duplicar marcas](topic:copy-paste). |
| Girar, crear simetría o reescalar una copia pegada | Pegue en una hoja a la misma escala y con la misma orientación; dibuje el resto a mano. |
| Leer una escala de una hoja escaneada o de una barra gráfica de escala | Elija la predefinida, o calibre con la longitud de la barra. |
| Más de una escala por hoja (áreas de detalle, plantas ampliadas) | Mida la parte a la escala de la hoja, y cuantifique el detalle en su propia hoja ampliada si el juego la tiene. |

## Partidas y precios

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Fórmulas de conjunto que usan los otros tipos de marcas de una partida (las puertas de una partida de habitación, en las fórmulas de su nivel) | Las fórmulas usan los totales del tipo principal; precie los otros tipos en sus propias filas. |
| Fórmulas de conjunto calculadas tramo por tramo | Las fórmulas usan los totales de la partida; use `N` para los extras por tramo. |
| Fórmulas que usan las cantidades de otra partida | Repita la medición en esa partida, o calcúlelo en la exportación a hoja de cálculo. |
| Cuadrillas en los componentes de un conjunto, o una jornada laboral distinta de 8 horas | Asigne la cuadrilla a la partida; para otra duración de jornada, lea los días-cuadrilla como horas-cuadrilla ÷ su jornada. |
| Marcas distintas de notas, nubes y resaltados (flechas, cotas, sellos), o respuestas a una nota | Escríbalo en el texto de la nota; cambie su estado al resolverla. |
| Una biblioteca de precios compartida por un equipo, o guardada con su cuenta | La biblioteca se guarda en este navegador: expórtela como CSV e impórtela en la otra computadora. |
| Paquetes por especialidad revisados por presupuestistas en ejercicio | Cada paquete es un punto de partida: revise sus supuestos con su obra y sus productos antes de presupuestar con él. Vea [Paquetes por especialidad](topic:trade-packs). |
| Precios en los paquetes por especialidad | Los paquetes traen solo conjuntos: defina sus propias tarifas, o importe su lista de precios como CSV. |
| Cambiar el nombre de la cuantificación | El nombre sale del primer PDF; cambie el nombre de los archivos descargados. |
| Nombrar las hojas a mano | Las hojas se nombran con las etiquetas de página del PDF; busque por nombre de archivo y página. |

## Dibujos (DWG y DXF)

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Tablas de estilos de trazado, asignaciones de plumas y archivos CTB en las hojas de un dibujo | Un dibujo se dibuja en negro, o en sus colores oscurecidos para papel; los grosores de línea vienen del dibujo. |
| Abrir un DXF binario, o un DWG anterior a AutoCAD 2000 | Guárdelo como DXF ASCII o como DWG más reciente. |
| Encontrar un dibujo vinculado (xref) por la carpeta donde está | Abra también el archivo del dibujo vinculado, junto con el principal: se encuentra por nombre de archivo entre los archivos abiertos. |
| Medir polilíneas 3D, mallas, sólidos y regiones | Cuéntelos por capa y tipo, o mida la vista en planta con las herramientas Lineal y Área. |
| Texto en un PDF marcado a partir de un dibujo en escrituras distintas del latín | Los caracteres que Helvetica no tiene se imprimen como "?" en el PDF marcado; el dibujo en pantalla no cambia. |
| Entregar un dibujo a otra aplicación desde la barra de hojas | Abra el mismo archivo en esa aplicación. |
| Un dibujo que lleva la cuantificación dentro, como lo hace {{ui:PDF con la cuantificación dentro}} con los PDF | {{ui:Guardar cuantificación}}: el `.takeoff.json` se reabre en el mismo dibujo, encontrado por su contenido. |
| Calcos en PDF, imágenes y objetos OLE colocados en un dibujo | Las imágenes se muestran solo como marco. Abra el PDF del calco como hoja. |

## Conteo automático

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Encontrar símbolos en una hoja sin escala dibujada a otro tamaño | Asigne a la hoja su escala, o busque con una ventana dibujada allí. |
| Encontrar símbolos simétricos | Cuéntelos a mano, o busque de nuevo con una ventana alrededor de uno simétrico. |

## Archivos y uso compartido

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Un PDF que muestra las marcas y lleva la cuantificación | {{ui:PDF marcado}} para que otros vean las marcas; {{ui:PDF con la cuantificación dentro}} para reabrir en TakeoffCraft. |
| Un CSV de cantidades por hoja o de las marcas | Use {{ui:XLSX}}: sus hojas By sheet y Marks tienen esos datos. |
| Guardado en la nube | Todavía no disponible. Guarde los archivos del proyecto en su computadora y haga una copia de respaldo. |
| Una aplicación de escritorio de TakeoffCraft aparte | A partir de la versión 0.5, la aplicación de escritorio es CadCraft Studio, con las ocho aplicaciones en una sola instalación. TakeoffCraft también funciona en el navegador. |

## Pantalla y entrada

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Un menú con clic derecho (o pulsación larga) | Use la barra de herramientas, los paneles y las teclas. Una pulsación larga termina un tramo o un contorno. |
| Girar la vista | Las páginas giradas en el PDF ya se ven derechas. |

## Vista 3D

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Dibujar o editar marcas en 3D | Vuelva a la hoja ({{key:3}}) para dibujar; seleccionar y borrar funcionan en 3D. |
| Alinear pisos apilados trazados en lugares distintos de sus páginas | Apile pisos trazados de forma igual; revise los demás una hoja a la vez. |
| Contar postes de un tamaño igual al del objeto contado | Todos los postes de una hoja son del mismo tamaño; marcan dónde hay un conteo, no qué es. |

## Licitación

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Adendas a un paquete que ya se envió, cartas de adjudicación, una hoja de alcance que firma cada postor | Envíe un paquete nuevo y escriba la adjudicación usted mismo. [Enviar un paquete para licitación](topic:bid-invitations) explica lo que sí está disponible. |
| Enviar invitaciones a licitar desde cualquier cuenta: mientras se prueba, el correo a postores externos está desactivado, salvo en las cuentas que el equipo de CadCraft habilite | Descargue el {{ui:CSV del alcance}}, envíelo por correo usted mismo y capture las ofertas. |
| Enviar paquetes de licitación desde una ventana de Studio | Envíe desde TakeoffCraft en el navegador. |
| Volver a preciar el área de licitación de una alternativa con una oferta elegida | Las alternativas y los subtotales de las áreas de licitación usan sus propios precios; ajuste la alternativa a mano. |
| Recordatorios automáticos antes de que venza la fecha del seguro o de la licencia de un subcontratista | La fecha se marca en la página de Subcontratistas cuando ya pasó o faltan 30 días o menos; revísela al invitar. |

## Paneles

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Mover la tabla de {{ui:Cantidades}} | Solo se mueven los paneles {{ui:Hojas}} y {{ui:Partidas}}. Vea [Organizar los paneles](common:arrange-panels). |

## Hojas de cálculo

El libro XLSX fue revisado en LibreOffice Calc, que recalculó cada total hasta el mismo centavo que TakeoffCraft. Todavía no se ha abierto en Excel. Si un programa de hojas de cálculo muestra algo inesperado, la exportación CSV contiene el mismo presupuesto como valores simples.
