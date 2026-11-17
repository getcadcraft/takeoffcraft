---
title: Iniciar una nueva cuantificación
summary: Borrar todo y empezar una cuantificación vacía sin recargar la página, poniendo antes a salvo su trabajo.
keywords: nueva, nueva cuantificación, borrar, restablecer, empezar de nuevo, vacía, cerrar PDF, siguiente trabajo
from: 16d392a4
---

Con {{ui:New}} se cierran todos los PDF y se inicia una cuantificación vacía en la misma página.

1. Guarde la cuantificación actual si quiere conservarla: {{ui:Save takeoff}} o {{key:Mod+S}}.
2. Elija {{ui:New}} en el grupo {{ui:File}}.
3. Si hay cambios sin guardar, TakeoffCraft pregunta **Cuantificación sin guardar**: elija {{ui:Save takeoff first}} (descarga el proyecto y luego borra), {{ui:Discard changes}}, o {{ui:Cancel}}.
   La ventana vuelve a su estado vacío: sin PDF, sin partidas, sin marcas y sin escalas. La barra de estado dice "Nueva cuantificación. Abra PDF para comenzar."

Se borra:

- cada PDF abierto, sus hojas y sus miniaturas,
- partidas, conjuntos, marcas y escalas,
- el zoom y la posición de cada hoja,
- el historial de deshacer (no puede deshacer {{ui:New}}),
- el modo de arco, y cualquier búsqueda o revisión de conteo automático.

Sus archivos en disco no se modifican. Para recuperar la cuantificación anterior, abra su `.takeoff.json` y sus PDF: vea [Guardar y reabrir una cuantificación](topic:save-and-reopen).

:::note
Cada nueva cuantificación empieza sin partidas. Para traer partidas, cópielas primero: {{ui:Copy item}} en {{ui:Items}} (o copie marcas, que llevan sus partidas), y luego {{ui:Paste}} en la nueva cuantificación. Vea [Copiar, pegar y duplicar marcas](topic:copy-paste). Para las partidas que usa en cada trabajo, guárdelas en su [biblioteca de precios](topic:price-library) y agréguelas desde ahí, o agregue un [paquete de oficio](topic:trade-packs).
:::
