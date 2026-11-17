---
title: Enviar un paquete para ofertas
summary: Enviá por correo un paquete de ofertas a subcontratistas, dejá que escriban precios en una página que no requiere cuenta, mantené los precios sellados hasta la hora de apertura y pasalos a la hoja de nivelación.
keywords: enviar para ofertas, invitación, invitación a ofertar, oferente, subcontratista, invitar, correo, pedido de precio, ofertas selladas, apertura de ofertas, día de ofertas, oferta tardía, fecha límite, recordatorio, registros de subcontratistas, seguro, calificación, csv, conectar, PDF de planos
from: fb314b2c
---

{{ui:Exportar}} › {{ui:Paquetes de oferta y nivelación…}} › {{ui:Emondo oferta haguã…}} envía un paquete a las personas que elijas. El sitio web envía a cada una un correo con un enlace; abren una página, ven el alcance y escriben un precio para cada línea. Vos ves los precios en la hoja de nivelación, listos para comparar ([Paquetes de oferta y nivelación](topic:bid-leveling)).

:::note
El envío **todavía no está abierto a todos.** Mientras la función está en prueba, funciona para las cuentas que habilitó el equipo de CadCraft; si la tuya no lo está, el cuadro de diálogo lo dice. La página del oferente funciona para cada invitación enviada.
:::

## Antes de enviar

- Necesitás una cuenta de CadCraft con correo electrónico verificado. TakeoffCraft en el navegador te pide **Conectar**: se abre una pestaña en getcadcraft.com, presionás Conectar, y esa pestaña recibe un acceso que dura 30 días, solo para paquetes de oferta, hasta que cierres la pestaña de TakeoffCraft. Podés quitarlo en cualquier momento desde tu página de seguridad. Una ventana de Studio todavía no puede enviar.
- Dale a cada ítem un número CSI: un paquete son los ítems de una división CSI ([Crear ítems de cómputo](topic:create-items)).
- Escalá los planos donde están las marcas del paquete, para que las cantidades que ven los oferentes estén medidas.

## Enviar un paquete

1. Elegí {{ui:Emondo oferta haguã…}} debajo del paquete.
2. Completá el título, el proyecto y un mensaje opcional, y la **fecha límite** en tu propia zona horaria.
3. Dejá marcado **Mantener precios sellados** para ocultar todos los precios hasta la **hora de apertura** (no antes de la fecha límite), o desmarcalo para ver los precios a medida que llegan.
4. Dejá marcada la casilla de planos para enviar un PDF de los planos que tienen las marcas del paquete, con las marcas dibujadas. Tus precios nunca van en lo enviado: solo nombres de ítems, números CSI, cantidades, unidades y nombres de planos.
5. Escribí las personas a invitar, una por línea, como `Nombre <nombre@empresa.com>` o solo la dirección, o marcá personas de tus registros de subcontratistas. Hasta 60 a la vez, 100 por paquete.
6. Elegí {{ui:Enviar invitaciones}}. Cada persona recibe un correo simple con tu nombre y tu correo, la fecha límite y el enlace; las respuestas van a vos.

El cuadro de diálogo indica cuántas se enviaron y nombra a quien se omitió: ya invitada a este paquete, pidió no recibir invitaciones de ofertas, dirección no válida, o superó un límite de envío.

## Lo que ve el oferente

Una página con un enlace privado largo, sin inicio de sesión. Muestra quién lo invitó, la fecha límite, si los precios están sellados, tu mensaje y el PDF de planos, y luego cada línea con su cantidad. Para cada línea escribe un precio o marca **No incluido**, y puede agregar una nota; agrega notas para todo el paquete y hasta 3 archivos (una cotización, una carta de alcance, un certificado). Puede guardar de nuevo y cambiar sus precios hasta la apertura, o **rechazar**, con una casilla para pedir que CadCraft no le envíe más invitaciones de ofertas.

## Ofertas selladas y apertura

Antes de la hora de apertura **nadie** ve un precio, una nota ni un archivo: ni vos, ni en TakeoffCraft, ni en tu página de Paquetes de oferta. Ves quién fue invitado y si respondió. A la hora de apertura, todas las ofertas se muestran a la vez. Una oferta guardada después de la fecha límite se acepta y se marca **tardía**; la nivelación igual la lista, y la tardanza es una marca, no un fallo. Después de la apertura el oferente no puede cambiar un precio. Sin sellado, una oferta es definitiva una vez vencida.

## Obtener los precios

{{ui:Eipapa precio}} consulta al sitio web y agrega cada respuesta al paquete como oferta, marcada **web**. TakeoffCraft también consulta en silencio cada vez que abrís el cuadro de diálogo mientras está conectado. Una oferta cuyo oferente guardó una nueva versión se actualiza en su lugar; una oferta que editaste queda como la dejaste hasta que envíen una nueva versión. Cada consulta es un paso que {{key:Mod+Z}} deshace. Las líneas excluidas llegan como el alcance que la oferta deja afuera, así que la nivelación las completa a tu propio costo.

## En el sitio web

Tu cuenta tiene dos páginas más una vez que podés enviar: **Paquetes de oferta** lista lo que enviaste, quién respondió, las ofertas tardías y los archivos, y te permite enviar un recordatorio (un enlace nuevo; el anterior deja de funcionar), cerrar, reabrir o cancelar un paquete; **Subcontratistas** guarda un registro por cada empresa: contactos, rubros, respuestas de calificación (años en el negocio, capacidad de fianza, EMR, registro de seguridad, sindicato o taller abierto, referencias), fechas de vencimiento de licencia y seguro, marcadas una vez vencidas o dentro de 30 días, y sus ofertas anteriores. Importá y exportá los registros como CSV: una fila por contacto, con las columnas que muestra la exportación; una empresa que ya tenés se actualiza, nunca se repite.

## Quién ve qué, y por cuánto tiempo

Los precios, notas y archivos del oferente van a vos y al equipo de CadCraft, que opera la página. Se guardan 24 meses después de la fecha límite, y los archivos 180 días; luego se eliminan. La dirección de correo del oferente es la que ingresaste; se usa solo para enviar la invitación y los recordatorios correspondientes. Una dirección recibe como máximo 3 invitaciones por día entre todos, y podés enviar hasta 200 por día.

## Todavía no está hecho

Adendas, cartas de adjudicación, una hoja de alcance firmada por oferente y recordatorios automáticos antes de que venza una fecha de seguro no están hechos. Ver [Todavía no disponible](topic:not-built-yet).
