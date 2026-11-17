---
title: Debuxar arcos con dez métodos
summary: Escolla como se debuxa un arco: tres puntos, ou inicio, centro, fin, ángulo, lonxitude, dirección ou radio.
keywords: arco, arcos, curva, muro curvo, 3 puntos, radio, ángulo, lonxitude de corda, dirección, centro, inicio, fin, método do arco
from: 5e3e0db6
---

## O que vai facer

Debuxar unha borda curva nun tramo lineal, nunha área ou nun recorte, usando o método de arco que corresponde ás dimensións que ten.

## Pasos

1. Comece un tramo, un contorno ou un recorte e coloque o punto onde comeza a curva.
2. Active {{ui:Arco}} na barra de ferramentas ou prema {{key:R}}.
3. Abra {{ui:Método do arco}} na barra da folla. Só se mostra mentres Arco está activo. Escolla 3 puntos, Inicio, Centro, Fin, Inicio, Centro, Ángulo, Inicio, Centro, Lonxitude, Inicio, Fin, Ángulo, Inicio, Fin, Dirección, Inicio, Fin, Radio, Centro, Inicio, Fin, Centro, Inicio, Ángulo ou Centro, Inicio, Lonxitude.
4. Siga a barra de estado. Indica o que espera o arco: o seu centro, punto final, ángulo, lonxitude, dirección ou radio. Faga clic nun punto, ou escriba o número (ángulo, lonxitude, radio e dirección).
5. Cando se dá a última entrada, o arco engádese ao tramo. {{key:Esc}} cancela o arco, {{key:Backspace}} retira o seu último paso, e {{key:R}} desactiva Arco.

## Notas

- Un arco rexéitase, cunha mensaxe na barra de estado, cando os seus puntos coinciden ou están en liña, ou cando o radio non pode chegar ao punto final.
- A súa lonxitude é a do arco exacto, e os ficheiros antigos ábrense igual. Máis: [Medir tramos lineais](topic:measure-linear#arcs-and-curved-walls).
