---
title: Contar desde un dibujo
summary: Cuente bloques, objetos de una capa o texto directamente de un DWG o DXF, de forma exacta, con bloques anidados, variantes de bloques dinámicos y arreglos de bloques, en un solo paso para deshacer.
keywords: contar desde dibujo, conteo CAD, conteo de bloques, contar bloques, insertar, nombre de bloque, bloques anidados, bloque dinámico, variante, minsert, arreglo, capa, tipo de entidad, círculos, texto, atributo, etiqueta, capas ocultas, conteo exacto, cómo, puertas, accesorios
from: 5060e24e
---

{{ui:Conteo CAD}} en la barra de la hoja (el comando **Contar desde el dibujo** en los otros estilos de menú) cuenta lo que un DWG o DXF indica que hay. Donde {{ui:Conteo automático}} busca una imagen de un símbolo y puede omitir uno o encontrar uno falso, esto cuenta los objetos: cada inserción de un bloque llamado `DOOR-36` es una puerta. Abra primero el dibujo: [Abrir un dibujo DWG o DXF](topic:open-a-drawing).

## Contar un bloque

1. Abra una hoja del dibujo. {{ui:Conteo CAD}} está en la barra de la hoja.
2. Elíjalo. La ventana enumera los bloques con cuántos hay de cada uno. Busque por nombre y luego elija uno.
3. Revise la línea debajo de la lista: "22 encontrados, 22 por agregar."
4. En {{ui:Agregar a}}, elija una partida de conteo, o deje {{ui:Un nuevo concepto de conteo}} y dé un nombre.
5. Elija el botón de agregar, que indica el número: {{ui:Agregar 22 marcas}}. Las marcas aparecen en los puntos de inserción del bloque, y la cantidad de la partida es el conteo.

Es un solo paso para deshacer: {{key:Mod+Z}} quita las marcas (y una partida nueva) juntas. El presupuesto, la hoja de cálculo y el PDF marcado tratan la partida como cualquier otra partida de conteo.

### Qué cuenta

- **Cada inserción del nombre del bloque**, sea cual sea su escala y ángulo, en espacio modelo o en espacio de papel. Los nombres de bloque no distinguen mayúsculas de minúsculas.
- **Arreglos de bloques** (MINSERT): cada copia del arreglo cuenta como una.
- **Bloques anidados.** Un bloque colocado dentro de otro bloque cuenta en cada nivel. La lista dice "6 dentro de otros bloques"; desmarque {{ui:Contar también los bloques dentro de otros bloques}} para contar solo las inserciones colocadas directamente en el dibujo.
- **Bloques dinámicos.** Un bloque dinámico cuenta con su propio nombre, no con las copias anónimas (`*U12`) que guarda el archivo. Sus estados se enumeran aparte ("Simple 12, Doble 4"): elija un estado para contar solo esos, o {{ui:Todas las variantes}}. Cuando un archivo no indica qué estado muestra una copia, esas se enumeran como "(estado no conocido)".
- **Filtro de capa.** Un bloque en varias capas: elija una en {{ui:En la capa}}.

### Qué no cuenta

- **Capas ocultas.** Un objeto en una capa que está apagada o inutilizada en el archivo (o que usted ocultó en {{ui:Capas}}) se deja fuera, y la línea indica cuántos: "3 en capas ocultas, omitidos". Marque {{ui:Contar también estos}} para incluirlos.
- **Dibujos vinculados que no están abiertos** no se cuentan; la ventana lo indica.
- **Objetos apilados exactamente sobre otro del mismo tipo** se cuentan como dos (son dos objetos) y la ventana lo indica: normalmente es un descuido de dibujo que vale la pena revisar.

## Lo que muestra esta hoja, o el dibujo completo

- **Lo que muestra esta hoja** cuenta los objetos que muestra la hoja: en una presentación, los objetos del modelo dentro de sus ventanas gráficas (una capa inutilizada en una ventana gráfica no se cuenta allí) más los propios de la presentación.
- **El dibujo completo, cada objeto una vez** cuenta el espacio modelo una vez, con las marcas en la hoja Modelo, y no cuenta lo que varias presentaciones muestran de nuevo.

Contar lo que muestra una presentación y contar lo que muestra Modelo dan el mismo número para los mismos objetos; no sume ambos en una misma partida.

## Volver a contar

Contar el mismo bloque de nuevo con la misma partida agrega solo lo nuevo: "22 ya contados." Cada marca representa un objeto.

## Por capa y tipo

En {{ui:Por capa y tipo}} elija una capa y un tipo de objeto (círculos, polilíneas, sombreados…): "todos los círculos en E-LITE". Marque {{ui:Contar también los objetos dentro de bloques}} para incluir los que están dentro de definiciones de bloque, en cada lugar donde se inserta el bloque.

## Por texto

En {{ui:Por texto}} escriba el texto, como `A3`, y diga si debe ser exactamente ese, contenerlo o tenerlo como palabra completa. Los objetos de texto, el texto de directriz múltiple y los **valores de atributos** de bloque cuentan todos (un atributo de etiqueta `ITEM = A3` se encuentra); elija {{ui:En el atributo}} para contar solo un atributo. Los textos más comunes se listan para hacer clic.

## Cuándo usar Conteo automático

Use {{ui:Conteo automático}} para PDF y para símbolos de un dibujo que no son bloques (dibujados sueltos, o descompuestos). Si están dibujados como bloques, cuéntelos aquí.
