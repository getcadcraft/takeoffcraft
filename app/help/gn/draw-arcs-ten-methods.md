---
title: Dibujar arcos con diez métodos
summary: Elegí cómo se dibuja un arco: tres puntos, o inicio, centro, fin, ángulo, longitud, dirección o radio.
keywords: arco, arcos, curva, muro curvo, 3 puntos, radio, ángulo, longitud de cuerda, dirección, centro, inicio, fin, método de arco
from: 5e3e0db6
---

## Qué vas a hacer

Dibujar un borde curvo en un tramo lineal, un área o un recorte, usando el método de arco que coincide con las dimensiones que tenés.

## Pasos

1. Iniciá un tramo, un contorno o un recorte y colocá el punto donde empieza la curva.
2. Activá {{ui:Arc}} en la barra de herramientas o presioná {{key:R}}.
3. Abrí {{ui:Arc method}} en la barra de hoja. Aparece solo mientras Arc está activo. Elegí 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle o Center, Start, Length.
4. Seguí la barra de estado. Indica lo que el arco espera: su centro, punto final, ángulo, longitud, dirección o radio. Hacé clic en un punto, o escribí el número (ángulo, longitud, radio y dirección).
5. Cuando se da la última entrada, el arco se agrega al tramo. {{key:Esc}} cancela el arco, {{key:Backspace}} deshace su último paso, y {{key:R}} desactiva Arc.

## Notas

- Un arco se rechaza, con un mensaje en la barra de estado, cuando sus puntos coinciden o están en línea recta, o cuando el radio no puede llegar al punto final.
- Su longitud es la longitud exacta del arco, y los archivos antiguos se abren igual. Más: [Medir tramos lineales](topic:measure-linear#arcs-and-curved-walls).
