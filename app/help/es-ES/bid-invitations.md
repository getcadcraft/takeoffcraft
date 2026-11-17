---
title: Enviar un paquete para licitar
summary: Envíe por correo un paquete de licitación a los subcontratistas, deje que escriban sus precios en una página que no necesita cuenta, mantenga los precios cerrados hasta la hora de apertura y tráigalos a la hoja de nivelación.
keywords: enviar para licitar, invitación, invitación a licitar, licitador, subcontratista, invitar, correo, solicitud de precio, ofertas cerradas, apertura de ofertas, día de licitación, oferta tardía, fecha límite, recordatorio, fichas de subcontratistas, seguro, calificación, csv, conectar, pdf de hojas
from: fb314b2c
---

{{ui:Exportar}} › {{ui:Paquetes de oferta y nivelación…}} › {{ui:Enviar a licitación…}} envía un paquete a las personas que elija. El sitio web envía a cada una un correo con un enlace; abren una página, ven el alcance y escriben un precio para cada línea. Usted ve los precios en la hoja de nivelación, listos para comparar ([Paquetes de licitación y nivelación de ofertas](topic:bid-leveling)).

:::note
El envío **todavía no está abierto a todo el mundo.** Mientras la función se prueba, funciona para las cuentas que el equipo de CadCraft ha habilitado; si la suya no lo está, el cuadro de diálogo lo indica. La página del licitador funciona para cada invitación que se haya enviado.
:::

## Antes de enviar

- Necesita una cuenta de CadCraft con una dirección de correo verificada. TakeoffCraft en el navegador le pide que **Conecte**: se abre una pestaña en getcadcraft.com, pulse Conectar, y esa pestaña obtiene un inicio de sesión que dura 30 días, solo para paquetes de licitación, hasta que cierre la pestaña de TakeoffCraft. Puede eliminarlo en cualquier momento en su página de seguridad. Una ventana de Studio todavía no puede enviar.
- Asigne a cada partida un número CSI: un paquete son las partidas de una división CSI ([Crear partidas de medición](topic:create-items)).
- Escale las hojas en las que están las marcas del paquete, para que las cantidades que ven los licitadores estén medidas.

## Enviar un paquete

1. Elija {{ui:Enviar a licitación…}} bajo el paquete.
2. Complete el título, el proyecto y un mensaje opcional, y la **hora límite** en su propia zona horaria.
3. Deje marcado **Mantener precios cerrados** para ocultar cada precio hasta la **hora de apertura** (no antes de la hora límite), o desmárquelo para ver los precios a medida que llegan.
4. Deje marcada la casilla de hojas para enviar un PDF de las hojas que contienen las marcas del paquete, con las marcas dibujadas. Sus precios nunca van en lo que se envía: solo nombres de partida, números CSI, cantidades, unidades y nombres de hoja.
5. Escriba las personas a invitar, una por línea, como `Nombre <nombre@empresa.com>` o solo la dirección, o marque personas de sus fichas de subcontratistas. Hasta 60 a la vez, 100 por paquete.
6. Elija {{ui:Enviar invitaciones}}. Cada persona recibe un correo sencillo con su nombre y dirección de correo, la hora límite y el enlace; las respuestas llegan a usted.

El cuadro de diálogo indica cuántas se enviaron y nombra a quien se omitió: ya invitado a este paquete, pedido que no reciba invitaciones de licitación, dirección no válida, o por encima de un límite de envío.

## Lo que ve el licitador

Una página con un enlace privado largo, sin inicio de sesión. Muestra quién lo invitó, la hora límite, si los precios están cerrados, su mensaje y el PDF de hojas, y después cada línea con su cantidad. Para cada línea escribe un precio o marca **No incluido**, y puede añadir una nota; añade notas para todo el paquete y hasta 3 archivos (una oferta, una carta de alcance, un certificado). Puede guardar de nuevo y cambiar sus precios hasta la apertura, o **rechazar**, con una casilla para pedir que CadCraft no le envíe más invitaciones de licitación.

## Ofertas cerradas y apertura

Antes de la hora de apertura **nadie** ve un precio, una nota ni un archivo: ni usted, ni en TakeoffCraft, ni en su página de Paquetes de licitación. Usted ve quién fue invitado y si ha respondido. A la hora de apertura, todas las ofertas se muestran a la vez. Una oferta guardada después de la hora límite se acepta y se marca **tardía**; la nivelación sigue incluyéndola, y que sea tardía es una marca, no un veredicto. Tras la apertura, un licitador no puede cambiar un precio. Sin cierre, una oferta es definitiva en cuanto vence la fecha límite.

## Obtener los precios

{{ui:Obtener precios}} consulta al sitio web y añade cada respuesta al paquete como una oferta, marcada **web**. TakeoffCraft también consulta en silencio cada vez que abre el cuadro de diálogo mientras esté conectado. Una oferta cuyo licitador ha guardado una versión nueva se actualiza en su lugar; una oferta que usted editó se queda como la dejó hasta que envíen una versión nueva. Cada extracción es un paso que {{key:Mod+Z}} deshace. Las líneas excluidas llegan como el alcance que la oferta deja fuera, así que la nivelación las completa a su propio coste.

## En el sitio web

Su cuenta tiene dos páginas más cuando puede enviar: **Paquetes de licitación** enumera lo que envió, quién respondió, las ofertas tardías y los archivos; le permite enviar un recordatorio (un enlace nuevo; el anterior deja de funcionar), cerrar, reabrir o cancelar un paquete. **Subcontratistas** guarda una ficha de cada empresa: contactos, oficios, respuestas de calificación (años en el negocio, capacidad de afianzamiento, EMR, historial de seguridad, sindicado o abierto, referencias), fechas de vencimiento de licencia y seguro, marcadas una vez vencidas o dentro de 30 días, y sus ofertas anteriores. Importe y exporte las fichas en CSV: una fila por contacto, con las columnas que muestra la exportación; una empresa que ya tiene se actualiza, nunca se repite.

## Quién ve qué, y durante cuánto tiempo

Los precios, notas y archivos de un licitador llegan a usted y al equipo de CadCraft, que gestiona la página. Se conservan 24 meses después de la fecha límite, y los archivos 180 días; después se eliminan. La dirección de correo del licitador es la que usted introdujo; se usa solo para enviar la invitación y los recordatorios correspondientes. Una dirección recibe como máximo 3 invitaciones al día entre todos, y usted puede enviar hasta 200 al día.

## Aún no disponible

Adendas, cartas de adjudicación, una hoja de alcance firmada por cada licitador y recordatorios automáticos antes de que venza un seguro no están disponibles todavía. Consulte [Aún no disponible](topic:not-built-yet).
