---
title: Incorporar cantidades desde un archivo IFC 4.3
summary: Abra un archivo IFC 4.3 de una carretera, una vía férrea, un puente o unas obras de tierra, y obtenga un recuento por clase, con las longitudes, áreas y volúmenes que indica el archivo, como cantidades tipificadas.
keywords: ifc, ifc4x3, ifc 4.3, carretera, vía férrea, puente, pavimento, bordillo, capa, movimiento de tierras, apoyo, infraestructura, cantidades, bim, civil, cantidades tipificadas
from: 6b08c2c4
---

Un archivo IFC 4.3 puede contener carreteras, vías férreas, puentes, obras marítimas y las partes que los forman: pavimentos, capas, bordillos, carriles, movimientos de tierras, apoyos, pilotes y más. TakeoffCraft los lee y los convierte en cantidades tipificadas que puede presupuestar.

## Abrir el archivo

1. Elija {{ui:Abrir PDF}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Seleccione el archivo IFC (puede seleccionarlo junto con PDF), o suéltelo sobre TakeoffCraft.

Se crea una cantidad tipificada por cada clase y tipo predefinido, por ejemplo "Pavimento (flexible): recuento", y, cuando el archivo las indica, "longitud" en m, "área" en m² y "volumen" en m³. La nota de cada partida indica cuántos elementos se contaron y cuántos no declaraban ninguna cantidad. Al abrir un archivo más reciente con el mismo nombre, se actualizan esas cantidades en lugar de añadir más.

## Lo que no hace

- Lee los conjuntos de cantidades (IfcElementQuantity) que trae el archivo. No mide las formas 3D, así que un elemento sin conjunto de cantidades se cuenta, pero no suma longitud, área ni volumen.
- Solo se leen las clases de infraestructura de IFC 4.3. Un archivo de edificación (muros, puertas, losas) no se convierte aquí en cantidades; un archivo que no es IFC 4.3 lo indica y no importa nada.
- Las unidades son las del propio archivo, convertidas a metros.
