---
title: Contar todo en el juego
summary: Encuadrá una vez la leyenda de símbolos y TakeoffCraft cuenta cada símbolo en todas las hojas abiertas en una sola corrida. Cada conteo es un vínculo a su hoja, y revisás antes de agregar nada.
keywords: contar todo, leyenda, leyenda de símbolos, juego completo, cada hoja, todas las hojas, cada puerta, cada artefacto, dispositivos, planilla, símbolos, conteo automático, contar todo, juego de planos, 200 hojas, nivel de coincidencia, parecidos
from: adc99744
---

{{ui:Count everything}} lee una leyenda de símbolos y después cuenta cada símbolo de ella en todas las hojas abiertas. Es {{ui:Auto count}} para una leyenda completa de una vez. Es solo búsqueda de símbolos iguales en tus propias hojas, no un modelo entrenado, y nada sale de tu computadora. Revisá los conteos antes de agregarlos: es una ayuda, no una garantía.

## Contar una leyenda

1. Abrí los planos. Sirve una leyenda en cualquier hoja: los símbolos con sus nombres al lado.
2. Elegí {{ui:Count everything}} en la barra de herramientas.
3. Arrastrá un recuadro alrededor de la leyenda, símbolos y nombres. Un título sin símbolo al lado (SYMBOL LEGEND) queda afuera por sí solo.
   El panel lista cada símbolo con su imagen y el nombre impreso al lado. El nombre pasa a ser el nombre del ítem, así que renómbralo aquí si querés.
4. Desmarcá los símbolos que no querés contar. Un símbolo que no se puede buscar (muy chico, o en blanco) indica por qué.
5. Elegí {{ui:Count on N sheets}}. Una barra muestra la hoja que se busca; {{ui:Cancel}} detiene la corrida. La página sigue usable.

Los propios símbolos de la leyenda no se cuentan en su hoja. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto.

## Revisar los conteos

- Cada símbolo muestra su total y, debajo, un vínculo por cada hoja que tenga alguno ("E-103: 4"). Hacé clic en uno para ir a esa hoja. Los hallazgos se encuadran en el color del ítem.
- **Hacé clic en un recuadro** para dejar afuera ese hallazgo. Queda punteado y tachado; hacé clic otra vez para volver a incluirlo.
- **Mové el nivel de coincidencia** (50% a 100%, empezando en tu nivel de Configuración). Más alto deja solo coincidencias cercanas. El control solo filtra lo encontrado; no vuelve a buscar.
- Dos símbolos parecidos (una toma doble y una cuádruple) pueden coincidir en el mismo lugar. La mejor coincidencia se lo queda y el panel dice en cuántos lugares pasó, para que los revises.
- Una hoja demasiado grande para buscar al tamaño del símbolo se omite, y el panel lo dice.

## Agregarlos

Elegí {{ui:Add N marks}}. Cada símbolo se convierte en un ítem de conteo con una marca en cada hallazgo. Un nombre que ya es un ítem de conteo tuyo se reutiliza (nada se duplica donde ya marcaste a mano). Toda la corrida es un solo paso: {{key:Ctrl+Z}} quita todos los ítems y marcas.

Lo que aceptás también alimenta {{ui:Learned}}: los símbolos quedan recordados en el archivo del cómputo para la próxima vez.

## Con tu asistente

Si permitís asistentes en Configuración, pueden leer una leyenda (legend_open), correr el conteo en segundo plano (legend_count_start, y después legend_count_status), leer los conteos (legend_count_result) y agregarlos (legend_count_add, que puede mostrar antes una vista previa de lo que agregaría). Es la misma corrida que ves en el panel.

## Símbolos en cualquier ángulo

Marcá {{ui:Symbols at any angle}} antes de contar para encontrar también símbolos dibujados en un ángulo que no es recto (un taco diagonal en pared, un artefacto girado para seguir un techo). La búsqueda entonces gira cada símbolo cada 15 grados; un símbolo redondo sigue necesitando una búsqueda, y uno no redondo puede tardar hasta seis veces más. Dejalo desmarcado para planos dibujados a escuadra.

## Bueno saber

- Necesita símbolos dibujados de la misma manera que en la leyenda. Una leyenda dibujada a distinto tamaño que las hojas está bien cuando las escalas de las hojas están fijadas; sin escalas, los símbolos se buscan al tamaño de la leyenda.
- Un símbolo con una pared o una línea larga que lo atraviesa puede pasar desapercibido, porque ya no se parece a la imagen de la leyenda. Revisá los hallazgos de la primera hoja antes de confiar en el resto.
- Un escaneo sin texto igual funciona: los símbolos se encuentran por sus filas, y vos escribís los nombres.
