---
title: Biblioteca de precios
summary: Guarde sus partidas, tarifas y montajes en una biblioteca, impórtela desde un CSV o un presupuesto anterior, añada partidas de ella a cualquier medición y actualice desde ella los precios de una medición.
keywords: biblioteca, paquetes de oficio, lista de precios, libro de precios, base de datos de costes, importar csv, tarifas, montajes, reutilizar, partidas plantilla, actualizar precios, repreciar
from: 37356c68
---

La **biblioteca de precios** guarda las partidas que usa trabajo tras trabajo: su tipo, unidad, altura, desperdicio, tarifas de material y de mano de obra, y su montaje. Se guarda en este navegador, aparte de cualquier medición, así que toda medición que abra aquí puede usarla.

Ábrala con {{ui:Biblioteca}} en la parte superior del panel {{ui:Partidas}}.

## Llenar la biblioteca

- {{ui:Importar CSV…}} lee una hoja de cálculo guardada como CSV (vea las columnas más abajo). Las partidas cuyo nombre y tipo ya están en la biblioteca se sustituyen; las demás se añaden. Las filas que no puede leer se omiten, e indica cuáles y por qué.
- {{ui:Añadir las partidas de esta medición}} copia en la biblioteca cada partida de la medición abierta, con sus tarifas y su montaje (no sus marcas).
- La estimación en CSV que exporta TakeoffCraft ([Exportar la estimación](topic:export-estimate)) se importa tal cual: los precios del último trabajo sirven de base para el siguiente.

- {{ui:Paquetes de oficio…}} añade montajes gratuitos para un oficio, como tabiquería, electricidad u hormigón, sin precios. Consulte [Paquetes de oficio](topic:trade-packs).

{{ui:Exportar CSV}} guarda la biblioteca como CSV, para tener una copia, editarla en una hoja de cálculo o dársela a un compañero. {{ui:Vaciar}} la vacía (haga clic dos veces).

:::note
La biblioteca está en el almacenamiento de este navegador. Otro navegador, otro ordenador o una ventana privada tienen la suya (o ninguna). Expórtela para llevarla.
:::

## Usarla en una medición

- Marque partidas (escriba en {{ui:Buscar en la biblioteca}} para acotar la lista) y elija {{ui:Añadir a la medición}}. Se añaden con sus montajes en un solo paso, que {{key:Mod+Z}} deshace. Un nombre que ya está en la medición recibe un número, como `Carpet (2)`.
- {{ui:Actualizar precios}} da a las partidas de la medición el desperdicio y las tarifas de la biblioteca, para cada partida cuyo nombre y tipo coincidan con los de una partida de la biblioteca, y lo mismo para los componentes de montaje con el mismo nombre. Alturas, unidades y fórmulas se mantienen. Un solo {{key:Mod+Z}} devuelve todos los precios antiguos.

## Las columnas del CSV

La primera fila nombra las columnas, en cualquier orden; las demás columnas se ignoran.

| Columna | Qué va en ella |
|---|---|
| Item (o Name) | El nombre de la partida. Obligatorio. |
| Type | Linear, Area o Count (LF, SF y EA también valen). Si queda vacío, decide la unidad. |
| Unit | LF o m; SF, SY o m²; EA. Vacío: la unidad habitual del tipo. |
| Waste % | `10` o `10%`. |
| Material per unit, Labor per unit | Tarifas como `2.10` o `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, o `2.7` para unidades métricas. |
| Component, Formula | Una fila con un nombre de Component (o con el Type `Component`) forma parte del montaje de la partida de encima. Su Unit, Waste y tarifas son propios; su Formula usa las letras de la partida, vea [Montajes y fórmulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Los separadores entre columnas pueden ser comas, punto y coma o tabuladores.
