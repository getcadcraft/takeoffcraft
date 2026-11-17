---
title: Lo que todavía no está hecho
summary: Funciones de cómputo que esta versión no tiene, y qué hacer hoy en su lugar.
keywords: límites, faltante, todavía no, hoja de ruta, planificado, solución alternativa, por tramo, nube, escritorio
from: 94ff90d0
---

TakeoffCraft está en desarrollo. Esta lista muestra lo que la versión actual no hace, y cómo sacar el trabajo igual.

## Medición

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Insertar un punto en medio de un tramo o de un contorno | Elimine la marca y dibújela de nuevo. |
| Selección por caja (ventana) | {{key:Shift}} + clic en cada marca, o {{key:Mod+A}} para todas las marcas de la hoja. Vea [Copiar, pegar y duplicar marcas](topic:copy-paste). |
| Rotar, reflejar o cambiar la escala de una copia pegada | Pegue en una hoja a la misma escala y con la misma orientación; dibuje el resto a mano. |
| Leer una escala de una hoja escaneada, o de una barra gráfica de escala | Elija la predeterminada, o calibre con la longitud de la barra. |
| Más de una escala por hoja (áreas de detalle, planos ampliados) | Mida la parte a la escala de la hoja, y compute el detalle en su propia hoja ampliada si el juego la tiene. |

## Ítems y precios

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Fórmulas de conjunto que usan otros tipos de marcas del ítem (las puertas de un ítem de ambiente en las fórmulas de su piso) | Las fórmulas usan los totales del tipo principal; ponga precio a los demás tipos en sus propias filas. |
| Fórmulas de conjunto calculadas tramo por tramo | Las fórmulas usan los totales del ítem; use `N` para los extras por tramo. |
| Fórmulas que usan las cantidades de otro ítem | Repita la medición en ese ítem, o calcúlela en la exportación a planilla. |
| Cuadrillas en componentes de conjunto, o una jornada de trabajo distinta de 8 horas | Asigne la cuadrilla al ítem; lea los días-cuadrilla para otra duración de jornada como horas-cuadrilla ÷ su jornada. |
| Marcados distintos de notas, nubes y resaltados (flechas, cotas, sellos), o respuestas a una nota | Escríbalo en el texto de la nota; cambie su estado a medida que se resuelva. |
| Una biblioteca de precios compartida por un equipo, o guardada con su cuenta | La biblioteca se guarda en este navegador: expórtela como CSV e impórtela en la otra computadora. |
| Paquetes de oficios revisados por cómputos profesionales | Cada paquete es un punto de partida: revise sus supuestos con su obra y sus productos antes de poner precio con él. Vea [Paquetes de oficios](topic:trade-packs). |
| Precios en los paquetes de oficios | Los paquetes traen solo conjuntos: ponga sus propias tarifas, o importe su lista de precios como CSV. |
| Cambiar el nombre del cómputo | El nombre sale del primer PDF; cambie el nombre de los archivos descargados. |
| Nombrar las hojas a mano | Las hojas se nombran según las etiquetas de página del PDF; busque por nombre de archivo y página. |

## Planos (DWG y DXF)

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Tablas de estilo de trazado, asignaciones de plumas y archivos CTB en las hojas de un plano | Un plano se dibuja en negro, o en sus colores oscurecidos para papel; los grosores de línea vienen del plano. |
| Abrir un DXF binario, o un DWG anterior a AutoCAD 2000 | Guárdelo como DXF ASCII o como un DWG más nuevo. |
| Encontrar un plano vinculado (xref) por la carpeta donde está | Abra también el archivo del plano vinculado, junto con el principal: se encuentra por nombre de archivo entre los archivos abiertos. |
| Medir polilíneas 3D, mallas, sólidos y regiones | Cuéntelos por capa y tipo, o mida la vista en planta con las herramientas Lineal y Área. |
| Texto en un PDF marcado a partir de un plano en escrituras que no son latinas | Los caracteres que Helvetica no tiene glifo se imprimen como "?" en el PDF marcado; el plano en pantalla no cambia. |
| Pasar un plano a otra aplicación desde la barra de hojas | Abra el mismo archivo en esa aplicación. |
| Un plano que lleva el cómputo adentro, como lo hace {{ui:PDF with the takeoff inside}} con los PDF | {{ui:Save takeoff}}: el `.takeoff.json` se vuelve a abrir en el mismo plano, encontrado por su contenido. |
| Fondos PDF, imágenes y objetos OLE colocados en un plano para medir o contar | Las imágenes se muestran solo como marco. Abra el PDF del fondo como una hoja. |

## Conteo automático

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Encontrar símbolos en una hoja sin escala dibujada a otro tamaño | Dele a la hoja su escala, o búsquela con una caja dibujada allí. |
| Encontrar símbolos reflejados | Cuéntelos a mano, o busque de nuevo con una caja alrededor de uno reflejado. |

## Archivos y compartir

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Un solo PDF que muestre las marcas y lleve el cómputo | {{ui:Marked PDF}} para que la gente vea las marcas; {{ui:PDF with the takeoff inside}} para volver a abrir en TakeoffCraft. |
| Un CSV de cantidades por hoja o de las marcas | Use {{ui:XLSX}}: sus hojas By sheet y Marks tienen esos datos. |
| Guardado en la nube | Todavía no está disponible. Guarde los archivos del proyecto en su computadora y haga copias de seguridad. |
| Una aplicación de escritorio de TakeoffCraft por separado | Desde la 0.5, la aplicación de escritorio es CadCraft Studio, con las ocho aplicaciones en una sola instalación. TakeoffCraft también funciona en el navegador. |

## Pantalla y entrada

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Un menú de clic derecho (o de pulsación larga) | Use la barra de herramientas, los paneles y las teclas. Una pulsación larga termina un tramo o un contorno. |
| Girar la vista | Las páginas giradas en el PDF ya se ven derechas. |

## Vista 3D

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Dibujar o editar marcas en 3D | Vuelva a la hoja ({{key:3}}) para dibujar; seleccionar y eliminar funcionan en 3D. |
| Alinear pisos apilados que están trazados en lugares distintos de sus páginas | Apile pisos trazados de la misma forma; revise los demás una hoja por vez. |
| Contar postes de tamaño igual al objeto contado | Cada poste de una hoja tiene el mismo tamaño; marca dónde hay un conteo, no qué es. |

## Ofertas

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Adendas a un paquete que ya se envió, cartas de adjudicación, una hoja de alcance que cada oferente firma | Envíe un paquete nuevo, y escriba usted la adjudicación. [Enviar un paquete para ofertas](topic:bid-invitations) explica lo que sí está hecho. |
| Enviar invitaciones a ofertar desde cualquier cuenta: mientras se prueba, el correo a oferentes externos está desactivado salvo para las cuentas que el equipo de CadCraft habilitó | Descargue el {{ui:Scope CSV}}, envíelo por correo usted mismo y escriba las ofertas. |
| Enviar paquetes de ofertas desde una ventana de Studio | Envíe desde TakeoffCraft en el navegador. |
| Recalcular el área de oferta de una alternativa con una oferta elegida | Las alternativas y los subtotales por área de oferta usan sus propios precios; ajuste la alternativa a mano. |
| Recordatorios automáticos antes de que venza el seguro o la licencia de un subcontratista | La fecha se marca en la página Subcontratistas una vez vencida o dentro de los 30 días; revísela al invitar. |

## Paneles

| Todavía no está hecho | En cambio, hoy |
|---|---|
| Mover la tabla de {{ui:Quantities}} | Solo se mueven los paneles {{ui:Sheets}} e {{ui:Items}}. Vea [Ordenar los paneles](common:arrange-panels). |

## Planillas

El libro XLSX fue revisado en LibreOffice Calc, que recalculó cada total hasta el mismo centavo que TakeoffCraft. Todavía no se abrió en Excel. Si un programa de planillas muestra algo inesperado, la exportación CSV tiene el mismo presupuesto como valores simples.
