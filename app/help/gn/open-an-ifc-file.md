---
title: Traer cantidades desde un archivo IFC 4.3
summary: Abra un archivo IFC 4.3 de una ruta, vía férrea, puente u obra de movimiento de suelo y obtenga un conteo por clase, con las longitudes, áreas y volúmenes que el archivo indica, como cantidades tipificadas.
keywords: ifc, ifc4x3, ifc 4.3, ruta, vía férrea, puente, pavimento, cordón, capa, movimiento de suelo, apoyo, infraestructura, cantidades, bim, civil, cantidades tipificadas
from: 6b08c2c4
---

Un archivo IFC 4.3 puede contener rutas, vías férreas, puentes, obras marítimas y las partes que las forman: pavimentos, capas, cordones, rieles, movimientos de suelo, apoyos, pilotes y más. TakeoffCraft los lee y los convierte en cantidades tipificadas que puede poner precio.

## Abrir el archivo

1. Elija {{ui:Open plans}} en el grupo {{ui:File}}, o presione {{key:Mod+O}}.
2. Seleccione el archivo IFC (puede seleccionarlo junto con PDF), o suéltelo sobre TakeoffCraft.

Se crea una cantidad tipificada por cada clase y tipo predefinido, por ejemplo "Pavimento (flexible): conteo", y, cuando el archivo las indica, "longitud" en m, "área" en m² y "volumen" en m³. La nota de cada ítem dice cuántos elementos se contaron y cuántos no indicaron cantidad. Abrir un archivo más nuevo con el mismo nombre actualiza esas cantidades en lugar de agregar más.

## Qué no hace

- Lee los conjuntos de cantidades (IfcElementQuantity) que trae el archivo. No mide las formas 3D, así que un elemento sin conjunto de cantidades se cuenta, pero no suma longitud, área ni volumen.
- Solo se leen las clases de infraestructura de IFC 4.3. Un archivo de edificio (muros, puertas, losas) no se convierte en cantidades aquí; un archivo que no es IFC 4.3 lo indica y no trae nada.
- Las unidades son las propias del archivo, convertidas a metros.
