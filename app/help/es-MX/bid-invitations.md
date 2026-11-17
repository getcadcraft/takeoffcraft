---
title: Enviar un paquete para licitación
summary: Envíe por correo un paquete de licitación a subcontratistas, deje que escriban precios en una página que no requiere cuenta, mantenga los precios sellados hasta la hora de apertura y tráigalos a la hoja de nivelación.
keywords: enviar para licitación, invitación, invitación a licitar, licitador, subcontratista, invitar, correo, solicitud de precio, licitaciones selladas, apertura de licitación, día de licitación, oferta tardía, fecha límite, recordatorio, registros de subcontratistas, seguro, calificación, csv, conectar, PDF de hojas
from: fb314b2c
---

{{ui:Exportar}} › {{ui:Paquetes de licitación y nivelación…}} › {{ui:Enviar para licitación…}} envía un paquete a las personas que elija. El sitio web envía a cada una un correo con un enlace; ellas abren una página, ven el alcance y escriben un precio por cada línea. Usted ve los precios en la hoja de nivelación, listos para comparar ([Paquetes de licitación y nivelación de ofertas](topic:bid-leveling)).

:::note
El envío **todavía no está abierto a todos.** Mientras la función está en prueba, funciona para cuentas que el equipo de CadCraft haya habilitado; si la suya no lo está, el cuadro de diálogo lo indica. La página del licitador funciona para cada invitación que se haya enviado.
:::

## Antes de enviar

- Necesita una cuenta de CadCraft con una dirección de correo verificada. TakeoffCraft en el navegador le pide **Conectar**: se abre una pestaña en getcadcraft.com, pulse Conectar, y esa pestaña obtiene un inicio de sesión que funciona durante 30 días, solo para paquetes de licitación, hasta que cierre la pestaña de TakeoffCraft. Puede quitarlo en cualquier momento en su página de seguridad. Una ventana de Studio todavía no puede enviar.
- Asigne a cada partida un número CSI: un paquete son las partidas de una división CSI ([Crear partidas de cuantificación](topic:create-items)).
- Escale las hojas en las que están las marcas del paquete, para que las cantidades que ven los licitadores sean medidas.

## Enviar un paquete

1. Elija {{ui:Enviar para licitación…}} bajo el paquete.
2. Llene el título, el proyecto y un mensaje opcional, y la **fecha límite** en su propia zona horaria.
3. Deje marcada **Mantener precios sellados** para ocultar cada precio hasta la **hora de apertura** (no antes de la fecha límite), o desmárquela para ver los precios conforme llegan.
4. Deje marcada la casilla de hojas para enviar un PDF de las hojas que contienen las marcas del paquete, con las marcas dibujadas. Sus precios nunca van en lo que se envía: solo nombres de partida, números CSI, cantidades, unidades y nombres de hoja.
5. Escriba las personas a invitar, una por línea, como `Nombre <nombre@empresa.com>` o solo la dirección, o marque personas de sus registros de subcontratistas. Hasta 60 a la vez, 100 por paquete.
6. Elija {{ui:Enviar invitaciones}}. Cada persona recibe un correo sencillo con su nombre y dirección de correo, la fecha límite y el enlace; las respuestas llegan a usted.

El cuadro de diálogo le dice cuántas se enviaron y nombra a quienes se omitieron: ya invitados a este paquete, que pidieron no recibir invitaciones de licitación, dirección no válida, o por encima de un límite de envío.

## Lo que ve el licitador

Una página en un enlace privado largo, sin inicio de sesión. Muestra quién lo invitó, la fecha límite, si los precios están sellados, su mensaje y el PDF de hojas, luego cada línea con su cantidad. Para cada línea escriben un precio o marcan **No incluido**, y pueden agregar una nota; agregan notas para todo el paquete y hasta 3 archivos (una cotización, una carta de alcance, un certificado). Pueden guardar de nuevo y cambiar sus precios hasta la apertura, o **declinar**, con una casilla para pedir que CadCraft no les envíe más invitaciones de licitación.

## Ofertas selladas y apertura

Antes de la hora de apertura, **nadie** ve un precio, una nota ni un archivo: ni usted, ni en TakeoffCraft, ni en su página de Paquetes de licitación. Usted ve quién fue invitado y si respondió. A la hora de apertura, cada oferta se muestra de una vez. Una oferta guardada después de la fecha límite se acepta y se marca **tardía**; la nivelación sigue listándola, y la tardanza es solo una marca, no una decisión. Después de la apertura, un licitador no puede cambiar un precio. Sin sellado, una oferta es final en cuanto vence.

## Obtener los precios

{{ui:Obtener precios}} consulta al sitio web y agrega cada respuesta al paquete como oferta, marcada **web**. TakeoffCraft también consulta en silencio cada vez que abre el cuadro de diálogo mientras está conectado. Una oferta cuyo licitador guardó una nueva versión se actualiza en su lugar; una oferta que usted editó se queda como la dejó hasta que envíen una nueva versión. Cada consulta es un paso que {{key:Mod+Z}} deshace. Las líneas excluidas llegan como el alcance que la oferta deja fuera, así que la nivelación las completa a su propio costo.

## En el sitio web

Su cuenta tiene dos páginas más cuando ya puede enviar: **Paquetes de licitación** enumera lo que envió, quién respondió, las ofertas tardías y los archivos, y le permite enviar un recordatorio (un enlace nuevo; el anterior deja de funcionar), cerrar, reabrir o cancelar un paquete. **Subcontratistas** guarda un registro por cada empresa: contactos, oficios, respuestas de calificación (años en el negocio, capacidad de fianza, EMR, historial de seguridad, sindicato o taller abierto, referencias), fechas de vencimiento de licencia y seguro, marcadas una vez vencidas o dentro de 30 días, y sus ofertas anteriores. Importe y exporte los registros como CSV: una fila por contacto, con las columnas que muestra la exportación; una empresa que ya tiene se actualiza, nunca se repite.

## Quién ve qué, y por cuánto tiempo

Los precios, notas y archivos de un licitador van a usted y al equipo de CadCraft, que opera la página. Se conservan 24 meses después de la fecha límite, y los archivos 180 días; luego se borran. La dirección de correo del licitador es la que usted escribió; se usa solo para enviar la invitación y cualquier recordatorio de ella. Una dirección recibe como máximo 3 invitaciones al día de todos juntos, y usted puede enviar hasta 200 al día.

## Pendientes de desarrollo

Las adendas, las cartas de adjudicación, una hoja de alcance firmada por licitador y los recordatorios automáticos antes de que venza un seguro todavía no están disponibles. Vea [Pendientes de desarrollo](topic:not-built-yet).
