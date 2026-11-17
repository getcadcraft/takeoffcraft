---
title: Traer cantidades dun ficheiro IFC 4.3
summary: Abra un ficheiro IFC 4.3 dunha estrada, ferrocarril, ponte ou movemento de terras e obteña unha conta por clase, cos lonxitudes, superficies e volumes que indica o ficheiro, como cantidades tipificadas.
keywords: ifc, ifc4x3, ifc 4.3, estrada, ferrocarril, ponte, firme, bordillo, capa, movemento de terras, apoio, infraestrutura, cantidades, bim, civil, cantidades tipificadas
from: 6b08c2c4
---

Un ficheiro IFC 4.3 pode conter estradas, ferrocarrís, pontes, obras mariñas e as partes que as forman: firmes, capas, bordillos, carrís, movementos de terras, apoios, pilotes e máis. TakeoffCraft lee esas partes e convírteas en cantidades tipificadas que pode prezar.

## Abrir o ficheiro

1. Escolla {{ui:Abrir planos}} no grupo {{ui:Ficheiro}}, ou prema {{key:Mod+O}}.
2. Seleccione o ficheiro IFC (pode seleccionalo cos PDF), ou solteo sobre TakeoffCraft.

Faise unha cantidade tipificada por cada clase e tipo predefinido, por exemplo "Firme (flexible): contaxe", e, cando o ficheiro as indica, "lonxitude" en m, "superficie" en m² e "volume" en m³. A nota de cada elemento indica cantos elementos se contaron e cantos non indicaron cantidade. Abrir un ficheiro máis novo co mesmo nome actualiza esas cantidades en lugar de engadir máis.

## O que non fai

- Le os conxuntos de cantidades (IfcElementQuantity) que leva o ficheiro. Non mide as formas 3D, polo que un elemento sen conxunto de cantidades cóntase pero non engade lonxitude, superficie nin volume.
- Só se len as clases de infraestrutura de IFC 4.3. Un ficheiro de edificio (muros, portas, laxes) non se converte aquí en cantidades; un ficheiro que non é IFC 4.3 di iso e non traé nada.
- As unidades son as propias do ficheiro, convertidas a metros.
