---
title: Contar desde un plano
summary: Contá bloques, objetos de una capa o texto directamente de un DWG o DXF: exacto, con bloques anidados, variantes de bloques dinámicos y matrices de bloques resueltos, en un solo paso para deshacer.
keywords: contar desde plano, conteo CAD, conteo de bloques, contar bloques, insertar, nombre de bloque, bloques anidados, bloque dinámico, variante, minsert, matriz, capa, tipo de entidad, círculos, texto, atributo, etiqueta, capas ocultas, conteo exacto, cómo, puertas, artefactos
from: 5060e24e
---

{{ui:CAD count}} en la barra de hoja (el comando **Count from the drawing** en los otros estilos de menú) cuenta lo que un DWG o DXF dice que hay. Donde {{ui:Auto count}} busca una imagen de un símbolo y a veces se le escapa uno o encuentra uno falso, esto cuenta los objetos: cada inserción de un bloque llamado `DOOR-36` es una puerta. Primero abrí el plano: [Abrir un plano DWG o DXF](topic:open-a-drawing).

## Contar un bloque

1. Abrí una hoja del plano. {{ui:CAD count}} está en la barra de hoja.
2. Elegilo. La ventana lista los bloques con cuántos hay de cada uno. Buscá por nombre y después elegí uno.
3. Mirá la línea debajo de la lista: "22 found, 22 to add" (22 encontrados, 22 para agregar).
4. Bajo {{ui:Add to}}, elegí un ítem de conteo, o dejá {{ui:A new count item}} y dale un nombre.
5. Elegí el botón agregar, que indica el número: {{ui:Add 22 marks}}. Las marcas aparecen en los puntos de inserción del bloque, y la cantidad del ítem es el conteo.

Es un solo paso para deshacer: {{key:Mod+Z}} quita las marcas (y un ítem nuevo) juntos. La planilla, la hoja de cálculo y el PDF marcado tratan el ítem como cualquier otro ítem de conteo.

### Qué cuenta

- **Cada inserción del nombre del bloque**, sea cual sea su escala y ángulo, en el espacio modelo o en el espacio papel. Los nombres de bloque no distinguen mayúsculas.
- **Matrices de bloques** (MINSERT): cada copia de la matriz cuenta como una.
- **Bloques anidados.** Un bloque colocado dentro de otro bloque cuenta a cualquier profundidad. La lista dice "6 inside other blocks"; desmarcá {{ui:Count blocks inside other blocks too}} para contar solo las inserciones puestas directamente en el plano.
- **Bloques dinámicos.** Un bloque dinámico cuenta bajo su propio nombre, no bajo las copias anónimas (`*U12`) que guarda el archivo. Sus estados se listan aparte ("Single 12, Double 4"): elegí un estado para contar solo esos, o {{ui:Every variant}}. Cuando un archivo no dice qué estado muestra una copia, esas se listan como "(state not known)".
- **Filtro de capa.** Un bloque en varias capas: elegí una bajo {{ui:On layer}}.

### Qué no cuenta

- **Capas ocultas.** Un objeto en una capa apagada o congelada en el archivo (o que ocultaste en {{ui:Layers}}) queda afuera, y la línea dice cuántos: "3 on hidden layers left out" (3 en capas ocultas, omitidos). Marcá {{ui:Count them too}} para incluirlos.
- **Planos vinculados que no están abiertos** no se cuentan; la ventana lo indica.
- **Objetos apilados exactamente sobre otro del mismo tipo** se cuentan como dos (son dos objetos) y la ventana lo indica: suele ser un error de dibujo que conviene revisar.

## Qué muestra esta hoja, o el plano completo

- **Qué muestra esta hoja** cuenta los objetos que muestra la hoja: en un layout, los objetos del modelo dentro de sus ventanas gráficas (una capa congelada en una ventana gráfica no se cuenta allí) más los propios del layout.
- **El plano completo, cada objeto una vez** cuenta el espacio modelo una sola vez, con las marcas en la hoja Model, y no cuenta lo que varios layouts vuelven a mostrar.

Contar lo que muestra un layout y contar lo que muestra Model dan el mismo número para los mismos objetos; no sumes ambos en un mismo ítem.

## Contar de nuevo

Contar otra vez el mismo bloque con el mismo ítem agrega solo lo nuevo: "22 already counted" (22 ya contados). Cada marca representa un objeto.

## Por capa y tipo

En {{ui:By layer and type}} elegí una capa y un tipo de objeto (círculos, polilíneas, sombreados…): "all circles on E-LITE" (todos los círculos en E-LITE). Marcá {{ui:Also count objects inside blocks}} para incluir los que están dentro de definiciones de bloques, en cada lugar donde se inserta el bloque.

## Por texto

En {{ui:By text}} escribí el texto, por ejemplo `A3`, y decí si tiene que ser exactamente eso, contenerlo, o tenerlo como palabra completa. Cuentan los objetos de texto, el texto de multiliderazgo y los **valores de atributos** de bloques (un atributo de etiqueta `ITEM = A3` se encuentra); elegí {{ui:In attribute}} para contar un solo atributo. Los textos más comunes se listan para hacer clic.

## Cuándo usar Conteo automático en su lugar

Usá {{ui:Auto count}} para PDF y para símbolos de un plano que no son bloques (dibujados sueltos, o descompuestos). Si están dibujados como bloques, contalos aquí.
