---
title: Iniciar un cómputo nuevo
summary: Borrá todo y empezá un cómputo vacío sin recargar la página, y guardá antes tu trabajo.
keywords: nuevo, cómputo nuevo, limpiar, restablecer, empezar de nuevo, vacío, cerrar PDF, próximo trabajo
from: 16d392a4
---

{{ui:Nuevo}} cierra todos los PDF y empieza un cómputo vacío en la misma página.

1. Guardá el cómputo actual si querés conservarlo: {{ui:Guardar cómputo}} o {{key:Mod+S}}.
2. Elegí {{ui:Nuevo}} en el grupo {{ui:Archivo}}.
3. Si hay cambios sin guardar, TakeoffCraft pregunta **Cómputo sin guardar**: elegí {{ui:Guardar cómputo primero}} (descarga el proyecto y después limpia), {{ui:Descartar cambios}} o {{ui:Cancelar}}.
   La ventana vuelve a su estado vacío: sin PDF, sin ítems, sin marcas, sin escalas. La barra de estado dice "Nuevo cómputo. Abrí PDF para empezar."

Se borra:

- cada PDF abierto, sus hojas y sus miniaturas,
- ítems, ensambles, marcas y escalas,
- el zoom y la posición de cada hoja,
- el historial de deshacer (no podés deshacer {{ui:Nuevo}}),
- el modo arco, y cualquier búsqueda o revisión de conteo automático.

Tus archivos en disco no se tocan. Para retomar el cómputo anterior, abrí su `.takeoff.json` y sus PDF: ver [Guardar y reabrir un cómputo](topic:save-and-reopen).

:::note
Cada cómputo nuevo empieza sin ítems. Para traer ítems, copialos primero: {{ui:Copiar ítem}} debajo de Ítems (o copiá marcas, que llevan sus ítems), y después {{ui:Pegar}} en el cómputo nuevo. Ver [Copiar, pegar y duplicar marcas](topic:copy-paste). Para los ítems que usás en cada trabajo, guardalos en tu [biblioteca de precios](topic:price-library) y agregalos desde allí, o agregá un [paquete de rubro](topic:trade-packs).
:::
