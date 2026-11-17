---
title: Contar desde un dibujo
summary: Cuente bloques, objetos de una capa o texto directamente de un DWG o DXF: exacto, con bloques anidados, variantes de bloques dinámicos y matrices de bloques tratados, en un solo paso de deshacer.
keywords: contar desde dibujo, recuento CAD, recuento de bloques, contar bloques, inserción, nombre de bloque, bloques anidados, bloque dinámico, variante, minsert, matriz, capa, tipo de entidad, círculos, texto, atributo, etiqueta, capas ocultas, recuento exacto, cómo, puertas, luminarias
from: 5060e24e
---

{{ui:Recuento CAD}} en la barra de la hoja (el comando **Contar desde el dibujo** en los otros estilos de menú) cuenta lo que dice un DWG o DXF que hay. Donde {{ui:Autorrecuento}} busca una imagen de un símbolo y puede pasar por alto uno o encontrar uno falso, esto cuenta los objetos: cada inserción de un bloque llamado `DOOR-36` es una puerta. Abra antes el dibujo: [Abrir un dibujo DWG o DXF](topic:open-a-drawing).

## Contar un bloque

1. Abra una hoja del dibujo. {{ui:Recuento CAD}} está en la barra de la hoja.
2. Elíjalo. La ventana enumera los bloques con cuántos hay de cada uno. Busque por nombre y luego elija uno.
3. Compruebe la línea bajo la lista: «22 encontrados, 22 por añadir».
4. Bajo {{ui:Añadir a}}, elija una partida de recuento, o deje {{ui:Un elemento de recuento nuevo}} y dele un nombre.
5. Elija el botón de añadir, que indica el número: {{ui:Añadir 22 marcas}}. Las marcas aparecen en los puntos de inserción del bloque, y la cantidad de la partida es el recuento.

Es un solo paso de deshacer: {{key:Mod+Z}} quita las marcas (y una partida nueva) juntas. El presupuesto, la hoja de cálculo y el PDF anotado tratan la partida como cualquier otra partida de recuento.

### Qué cuenta

- **Cada inserción del nombre del bloque**, sea cual sea su escala y ángulo, en el espacio modelo o en el espacio papel. Los nombres de bloque no distinguen mayúsculas.
- **Matrices de bloques** (MINSERT): cada copia de la matriz cuenta como una.
- **Bloques anidados.** Un bloque colocado dentro de otro bloque se cuenta a cualquier profundidad. La lista dice «6 dentro de otros bloques»; desmarque {{ui:Contar también los bloques dentro de otros bloques}} para contar solo las inserciones colocadas directamente en el dibujo.
- **Bloques dinámicos.** Un bloque dinámico se cuenta bajo su propio nombre, no bajo las copias anónimas (`*U12`) que guarda el archivo. Sus estados se listan aparte («Simple 12, Doble 4»): elija un estado para contar solo esos, o {{ui:Todas las variantes}}. Cuando un archivo no indica qué estado muestra una copia, esas se listan como «(estado no conocido)».
- **Filtro de capa.** Un bloque en varias capas: elija una bajo {{ui:En la capa}}.

### Qué no cuenta

- **Capas ocultas.** Un objeto en una capa desactivada o inmovilizada en el archivo (o que usted ocultó en {{ui:Capas}}) se deja fuera, y la línea indica cuántos: «3 en capas ocultas dejados fuera». Marque {{ui:Contarlos también}} para incluirlos.
- **Dibujos vinculados que no están abiertos** no se cuentan; la ventana lo indica.
- **Objetos superpuestos exactamente sobre otro del mismo tipo** se cuentan como dos (son dos objetos) y la ventana lo indica: normalmente es un descuido de dibujo que merece revisarse.

## Lo que muestra esta hoja, o el dibujo completo

- **Lo que muestra esta hoja** cuenta los objetos que muestra la hoja: en una presentación, los objetos del modelo dentro de sus ventanas gráficas (una capa inmovilizada en una ventana gráfica no se cuenta allí) más los propios de la presentación.
- **El dibujo completo, cada objeto una vez** cuenta el espacio modelo una vez, con las marcas en la hoja Modelo, y no cuenta lo que varias presentaciones muestran de nuevo.

Contar lo que muestra una presentación y contar lo que muestra el Modelo dan el mismo número para los mismos objetos; no sume ambos en una misma partida.

## Volver a contar

Contar de nuevo el mismo bloque con la misma partida añade solo lo nuevo: «22 ya contados». Cada marca representa un objeto.

## Por capa y tipo

En {{ui:Por capa y tipo}} elija una capa y un tipo de objeto (círculos, polilíneas, sombreados…): «todos los círculos en E-LITE». Marque {{ui:Contar también los objetos dentro de bloques}} para incluir los que hay dentro de definiciones de bloque, en cada lugar donde se inserta el bloque.

## Por texto

En {{ui:Por texto}} escriba el texto, como `A3`, e indique si es exactamente ese, si lo contiene o si lo tiene como palabra completa. Se cuentan los objetos de texto, el texto de multidirectriz y los **valores de atributo** de bloque (un atributo de etiqueta `ITEM = A3` se encuentra); elija {{ui:En el atributo}} para contar solo un atributo. Los textos más comunes se listan para hacer clic.

## Cuándo usar Autorrecuento en su lugar

Use {{ui:Autorrecuento}} para PDF y para símbolos de un dibujo que no son bloques (dibujados sueltos, o descompuestos). Si están dibujados como bloques, cuéntelos aquí.
