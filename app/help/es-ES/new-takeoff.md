---
title: Iniciar una medición nueva
summary: Borre todo y empiece una medición vacía sin recargar la página, y guarde antes su trabajo.
keywords: nueva, nueva medición, borrar, restablecer, empezar de nuevo, vacía, cerrar PDF, siguiente trabajo
from: 16d392a4
---

{{ui:Nueva}} cierra todos los PDF y empieza una medición vacía en la misma página.

1. Guarde la medición actual si quiere conservarla: {{ui:Guardar medición}} o {{key:Mod+S}}.
2. Elija {{ui:Nueva}} en el grupo {{ui:Archivo}}.
3. Si hay cambios sin guardar, TakeoffCraft pregunta **Medición sin guardar**: elija {{ui:Guardar la medición primero}} (descarga el proyecto y luego lo borra), {{ui:Descartar cambios}}, o {{ui:Cancelar}}.
   La ventana vuelve a su estado vacío: sin PDF, sin partidas, sin marcas y sin escalas. La barra de estado indica «Nueva medición. Abra PDF para empezar.»

Se borra lo siguiente:

- cada PDF abierto, sus hojas y sus miniaturas,
- partidas, composiciones, marcas y escalas,
- el zoom y la posición de cada hoja,
- el historial de deshacer (no se puede deshacer {{ui:Nueva}}),
- el modo de arco, y cualquier búsqueda o revisión de autorrecuento.

Sus archivos en disco no se tocan. Para recuperar la medición anterior, abra su `.takeoff.json` y sus PDF: consulte [Guardar y volver a abrir una medición](topic:save-and-reopen).

:::note
Cada medición nueva empieza sin partidas. Para traer partidas, cópielas antes: {{ui:Copiar partida}} bajo {{ui:Partidas}} (o copie marcas, que llevan consigo sus partidas), y luego {{ui:Pegar}} en la medición nueva. Consulte [Copiar, pegar y duplicar marcas](topic:copy-paste). Para las partidas que usa en todos los trabajos, guárdelas en su [biblioteca de precios](topic:price-library) y añádalas desde allí, o añada un [paquete de oficio](topic:trade-packs).
:::
