---
title: Emisiones, revisiones y registro de cambios de planos
summary: Mantenga un único historial de emisiones con el modelo del arquitecto: lea las emisiones, registre instrucciones de obra, planos de taller y modelos vinculados frente a una emisión, y consulte el registro de cambios de planos.
keywords: emisión, revisión, revisiones, registro de cambios, registro de planos, instrucción de obra, plano de taller, modelo vinculado, licitación, construcción, historial de emisiones, presupuesto, medición
from: 8d8f6e68
---

## Qué hará

Trabaje con el mismo historial de emisiones que el resto del equipo. Vea qué planos se enviaron en cada revisión y registre lo que ocurre en obra frente a la emisión a la que pertenece.

## Pasos

1. Abra **Emisiones y revisiones**.
2. Elija **Leer un historial de emisiones** y seleccione el archivo `.issues.json` guardado desde BimCraft u otra aplicación. Sus emisiones y registros se añaden a los suyos. No se reemplaza nada.
3. Elija **Añadir un registro** para una instrucción de obra, un plano de taller, un conjunto de anotaciones, un modelo vinculado o una nota. Seleccione la emisión a la que se refiere y su estado. Un archivo que elija se registra por su nombre, tamaño y SHA-256; el archivo permanece donde está.
4. **Registro de cambios de planos** muestra una fila por cada plano y una columna por cada emisión. Una revisión entre corchetes se volvió a emitir sin cambios.
5. **Descargar el registro de cambios (CSV)** guarda las emisiones, la tabla de planos y los registros. **Guardar el historial de emisiones** escribe un archivo que leen las demás aplicaciones.

## Good to know

- **Registrar una emisión** emite sus planos medidos, por ejemplo con un presupuesto. **Cambios desde** indica qué planos se volvieron a medir después de esa emisión.
- El historial se guarda en el archivo de medición. Cada cambio es un paso de Deshacer.
- Leer dos veces el mismo archivo no añade nada por duplicado. Cuando dos copias contienen el mismo registro, se conserva la más reciente.
