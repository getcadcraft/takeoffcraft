---
title: Biblioteca de precios
summary: Guarde sus ítems, tarifas y conjuntos en una biblioteca, impórtela desde un CSV o un presupuesto anterior, agregue ítems de ella a cualquier cómputo y actualice los precios de un cómputo desde ella.
keywords: biblioteca, paquetes de oficios, lista de precios, libro de precios, base de costos, importar csv, tarifas, conjuntos, reutilizar, ítems plantilla, actualizar precios, repreciar
from: 37356c68
---

La **biblioteca de precios** guarda los ítems que usa trabajo tras trabajo: su tipo, unidad, altura, desperdicio, tarifas de material y mano de obra, y su conjunto. Se guarda en este navegador, aparte de cualquier cómputo, así que cada cómputo que abra aquí puede usarla.

Ábrala con {{ui:Library}} en la parte superior del panel {{ui:Items}}.

## Llenar la biblioteca

- {{ui:Import CSV…}} lee una planilla guardada como CSV (vea las columnas abajo). Los ítems cuyo nombre y tipo ya están en la biblioteca se reemplazan; los demás se agregan. Las filas que no puede leer se omiten, e indica cuáles y por qué.
- {{ui:Agregar los ítems de este cómputo}} copia cada ítem del cómputo abierto a la biblioteca, con sus tarifas y su conjunto (no sus marcas).
- El CSV de presupuesto que exporta TakeoffCraft ([Exportar el presupuesto](topic:export-estimate)) se importa tal como es: los precios del trabajo anterior sirven de base para el siguiente.

- {{ui:Trade packs…}} agrega conjuntos gratuitos para un oficio, como durlock, electricidad u hormigón, sin precios. Vea [Paquetes de oficios](topic:trade-packs).

{{ui:Export CSV}} guarda la biblioteca como CSV, para tener una copia, para editarla en una planilla o para dársela a un colega. {{ui:Clear}} la vacía (haga clic dos veces).

:::note
La biblioteca vive en el almacenamiento de este navegador. Otro navegador, otra computadora o una ventana privada tienen la suya (o ninguna). Expórtela para moverla.
:::

## Usarla en un cómputo

- Marque ítems (escriba en {{ui:Find in the library}} para reducir la lista) y elija {{ui:Add to takeoff}}. Se agregan con sus conjuntos en un solo paso que {{key:Mod+Z}} deshace. Un nombre que ya está en el cómputo recibe un número, como `Alfombra (2)`.
- {{ui:Update prices}} da a los ítems del cómputo el desperdicio y las tarifas de la biblioteca, para cada ítem cuyo nombre y tipo coinciden con un ítem de la biblioteca, y lo mismo para los componentes de conjunto con el mismo nombre. Las alturas, unidades y fórmulas se mantienen. Un solo {{key:Mod+Z}} devuelve todos los precios anteriores.

## Las columnas del CSV

La primera fila nombra las columnas, en cualquier orden; las demás columnas se ignoran.

| Columna | Qué va en ella |
|---|---|
| Item (o Name) | El nombre del ítem. Obligatorio. |
| Type | Linear, Area o Count (LF, SF y EA también sirven). Si está vacía, decide la unidad. |
| Unit | LF o m; SF, SY o m²; EA. Vacía: la unidad habitual del tipo. |
| Waste % | `10` o `10%`. |
| Material per unit, Labor per unit | Tarifas como `2.10` o `$1,250`. |
| Height (o Depth) | `9'-0"`, `9`, o `2.7` para unidades métricas. |
| Component, Formula | Una fila con un nombre de Component (o el Type `Component`) es parte del conjunto del ítem de arriba. Su Unit, Waste y tarifas son propias; su Formula usa las letras del ítem, vea [Conjuntos y fórmulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Las comas, punto y comas o tabulaciones entre columnas funcionan todas.
