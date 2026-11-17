---
title: Emisiones, revisiones y registro de cambios del dibujo
summary: Mantenga un solo historial de emisiones con el modelo del arquitecto: lea las emisiones, registre instrucciones de obra, planos de taller y modelos vinculados contra una emisión, y consulte el registro de cambios del dibujo.
keywords: emisión, revisión, revisiones, registro de cambios, registro de cambios del dibujo, registro de planos, instrucción de obra, plano de taller, modelo vinculado, licitación, construcción, historial de emisiones, catálogo de conceptos, cuantificación
from: 8d8f6e68
---

## Qué hará

Trabaje con el mismo historial de emisiones que el resto del equipo. Vea qué planos salieron en cada revisión, y registre lo que ocurre en obra contra la emisión a la que pertenece.

## Pasos

1. Abra **Emisiones y revisiones**.
2. Elija **Leer un historial de emisiones** y seleccione el archivo `.issues.json` guardado desde BimCraft u otra app. Sus emisiones y registros se agregan a los suyos. No se reemplaza nada.
3. Elija **Agregar un registro** para una instrucción de obra, un plano de taller, un conjunto de marcas, un modelo vinculado o una nota. Seleccione la emisión a la que corresponde y su estado. Un archivo que elija se registra por su nombre, tamaño y SHA-256; el archivo se queda donde está.
4. **Registro de cambios del dibujo** muestra una fila por cada plano y una columna por cada emisión. Una revisión entre corchetes se volvió a emitir sin cambios.
5. **Descargar el registro de cambios (CSV)** guarda las emisiones, la tabla de planos y los registros. **Guardar el historial de emisiones** escribe un archivo que leen las demás apps.

## Conviene saber

- **Registrar una emisión** emite sus planos medidos, por ejemplo con un catálogo de conceptos. **Cambios desde** indica entonces qué planos se volvieron a medir después de esa emisión.
- El historial se guarda en el archivo de cuantificación. Cada cambio se puede deshacer en un solo paso.
- Leer el mismo archivo dos veces no agrega nada por duplicado. Cuando dos copias contienen el mismo registro, se conserva la más reciente.
