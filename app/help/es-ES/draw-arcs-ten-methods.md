---
title: Dibujar arcos con diez métodos
summary: Elija cómo se dibuja un arco: tres puntos, o inicio, centro, final, ángulo, longitud, dirección o radio.
keywords: arco, arcos, curva, muro curvo, 3 puntos, radio, ángulo, longitud de cuerda, dirección, centro, inicio, final, método de arco
from: 5e3e0db6
---

## Lo que hará

Dibujar un borde curvo en un tramo lineal, un área o un recorte, usando el método de arco que corresponde a las medidas que tiene.

## Pasos

1. Empiece un tramo, un contorno o un recorte y coloque el punto donde empieza la curva.
2. Active {{ui:Arco}} en la barra de herramientas o pulse {{key:R}}.
3. Abra {{ui:Método de arco}} en la barra de la hoja. Solo aparece mientras Arco está activo. Elija 3 puntos, Inicio, Centro, Final, Inicio, Centro, Ángulo, Inicio, Centro, Longitud, Inicio, Final, Ángulo, Inicio, Final, Dirección, Inicio, Final, Radio, Centro, Inicio, Final, Centro, Inicio, Ángulo o Centro, Inicio, Longitud.
4. Siga la barra de estado. Indica qué espera el arco: su centro, punto final, ángulo, longitud, dirección o radio. Haga clic en un punto, o escriba el número (ángulo, longitud, radio y dirección).
5. Cuando se da la última entrada, el arco se añade al tramo. {{key:Esc}} cancela el arco, {{key:Backspace}} retrocede su último paso, y {{key:R}} desactiva Arco.

## Notas

- Se rechaza un arco, con un mensaje en la barra de estado, cuando sus puntos coinciden o están en línea recta, o cuando el radio no puede alcanzar el punto final.
- Su longitud es la longitud exacta del arco, y los archivos antiguos se abren igual. Más: [Medir tramos lineales](topic:measure-linear#arcs-and-curved-walls).
