---
title: "Biblioteca de precios"
summary: "Guarde sus partidas, tarifas y conjuntos en una biblioteca, impórtela desde un CSV o un presupuesto anterior, agregue partidas de ella a cualquier cuantificación y actualice los precios de una cuantificación desde ella."
keywords: "biblioteca, paquetes por especialidad, lista de precios, catálogo de precios, base de costos, importar csv, tarifas, conjuntos, reutilizar, partidas plantilla, actualizar precios, repreciar"
from: 37356c68
---

La **biblioteca de precios** guarda las partidas que usa obra tras obra: su tipo, unidad, altura, desperdicio, tarifas de material y de mano de obra, y su conjunto. Se guarda en este navegador, aparte de cualquier cuantificación, así que cada cuantificación que abra aquí puede usarla.

Ábrala con {{ui:Biblioteca}}, arriba del panel {{ui:Partidas}}.

## Llenar la biblioteca

- {{ui:Importar CSV…}} lee una hoja de cálculo guardada como CSV (vea las columnas abajo). Las partidas cuyo nombre y tipo ya están en la biblioteca se reemplazan; las demás se agregan. Las filas que no puede leer se omiten, e indica cuáles y por qué.
- {{ui:Agregar las partidas de esta cuantificación}} copia a la biblioteca cada partida de la cuantificación abierta, con sus tarifas y su conjunto (no sus marcas).
- El CSV del presupuesto que exporta TakeoffCraft ([Exportar el presupuesto](topic:export-estimate)) se importa tal cual: los precios del trabajo anterior sirven de base para el siguiente.

- {{ui:Paquetes por especialidad…}} agrega conjuntos gratuitos para una especialidad, como tablaroca, eléctrica o concreto, sin precios. Vea [Paquetes por especialidad](topic:trade-packs).

{{ui:Exportar CSV}} guarda la biblioteca como CSV, para tener una copia, editarla en una hoja de cálculo o dársela a un colega. {{ui:Vaciar}} la deja vacía (haga clic dos veces).

:::note
La biblioteca vive en el almacenamiento de este navegador. Otro navegador, otra computadora o una ventana privada tienen la suya (o ninguna). Expórtela para moverla.
:::

## Usarla en una cuantificación

- Marque partidas (escriba en {{ui:Buscar en la biblioteca}} para acotar la lista) y elija {{ui:Agregar a la cuantificación}}. Se agregan con sus conjuntos en un solo paso que {{key:Mod+Z}} deshace. Un nombre que ya está en la cuantificación recibe un número, como `Alfombra (2)`.
- {{ui:Actualizar precios}} asigna a las partidas de la cuantificación el desperdicio y las tarifas de la biblioteca, para cada partida cuyo nombre y tipo coincidan con una partida de la biblioteca, y lo mismo para los componentes de conjunto con el mismo nombre. Las alturas, unidades y fórmulas no cambian. Un {{key:Mod+Z}} devuelve todos los precios anteriores.

## Las columnas del CSV

La primera fila nombra las columnas, en cualquier orden; las demás columnas se ignoran.

| Columna | Qué va en ella |
|---|---|
| Item (o Name) | El nombre de la partida. Obligatorio. |
| Type | Linear, Area o Count (LF, SF y EA también funcionan). Si está vacío, decide la unidad. |
| Unit | LF o m; SF, SY o m²; EA. Vacío: la unidad habitual del tipo. |
| Waste % | `10` o `10%`. |
| Material per unit, Labor per unit | Tarifas como `2.10` o `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, o `2.7` para unidades métricas. |
| Component, Formula | Una fila con un nombre de Component (o el Type `Component`) es parte del conjunto de la partida de arriba. Su Unit, Waste y tarifas son propios; su Formula usa las letras de la partida; vea [Conjuntos y fórmulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Tabique tipo A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Postes 16 in. o.c.,ceil(L / 1.333) + N
Piso VCT,Area,SF,5,1.85,1.10,,,
Contactos dúplex,Count,EA,,3.50,45,,,
```

Las comas, los punto y comas o los tabuladores entre columnas funcionan.
