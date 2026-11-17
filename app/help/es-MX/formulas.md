---
title: Lenguaje de fórmulas
summary: Las reglas para las fórmulas de cantidad de conjuntos: variables, operadores, funciones, redondeo y cada mensaje de error.
keywords: fórmula, expresión, sintaxis, funciones, ceil, floor, round, min, max, abs, variables, operadores, cálculo
from: 4da14575
---

Los componentes de conjuntos obtienen su cantidad de una fórmula. Una fórmula es una pequeña expresión aritmética sobre los valores medidos de la partida. Vea [Conjuntos y fórmulas](topic:assemblies) para ver ejemplos resueltos.

## Variables

| Tipo de partida | Variable | Significado |
|---|---|---|
| Lineal | `L` | Longitud total |
| Lineal | `H` | Altura de la partida |
| Lineal | `A` | Área de muro, L × H, menos las aberturas de los tramos que las contienen (una cuantificación de BimCraft). Cuando esa cuantificación indica un método de medición, `A` se mide con él: las aberturas no mayores que el tamaño mínimo del método se mantienen, y lo que el método descuenta donde se unen los muros se omite. La nota bajo la partida indica el método |
| Lineal | `N` | Número de tramos |
| Área | `A` | Área neta total (contornos menos recortes) |
| Área | `P` | Perímetro total, incluidas las aristas de los recortes |
| Área | `H` | Profundidad o espesor de la partida |
| Área | `N` | Número de áreas |
| Conteo | `N` | El conteo |

- Las variables están en las unidades de la partida: vea [Unidades](topic:units).
- Mayúsculas y minúsculas son iguales: `l` es `L`.
- Solo funcionan las variables del tipo de la partida. `P` en una partida lineal da `"P" no es un valor medido aquí. Use L, H, A, N.`
- Una altura o profundidad vacía es 0.

## Operadores

| Escriba | Significado |
|---|---|
| `+` | Sumar |
| `-` o `−` | Restar, o un valor negativo |
| `*` o `×` | Multiplicar |
| `/` o `÷` | Dividir |
| `( )` | Agrupar |

Multiplicar y dividir van antes que sumar y restar: `L * 2 + 4` es (L × 2) + 4. Use paréntesis cuando tenga dudas.

Los números pueden tener decimales (`1.333`, `.5`) y exponentes (`1e3` = 1000). Los espacios se ignoran.

## Funciones

| Función | Resultado | Ejemplo |
|---|---|---|
| `ceil(x)` | Redondea hacia arriba a un número entero | `ceil(67.5)` = 68 |
| `floor(x)` | Redondea hacia abajo a un número entero | `floor(67.5)` = 67 |
| `round(x)` | Redondea al número entero más cercano, con las mitades alejándose de cero | `round(2.5)` = 3 |
| `round(x, d)` | Redondea a d decimales (de 0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | El valor más pequeño | `min(N, 10)` |
| `max(a, b, …)` | El valor más grande | `max(1, ceil(N / 12))` |
| `abs(x)` | El valor sin su signo | `abs(-3)` = 3 |

`ceil` y `floor` ignoran el pequeño ruido de redondeo de la computadora, así que un valor que debe ser exactamente 1 nunca se redondea a 2.

## Errores

Una fórmula que no se puede leer o calcular muestra su error debajo del campo, y el componente se omite de los totales (el encabezado {{ui:Cantidades}} dice "Incompleto"). Mensajes:

| Mensaje | Solución |
|---|---|
| Escriba una fórmula, por ejemplo L o ceil(L / 1.333) + 1. | La fórmula está vacía. |
| "X" no es un valor medido aquí. Use … | Use una de las variables indicadas. |
| "X" no es una función aquí. Use ceil, floor, round, min, max, abs. | Use una de esas funciones. |
| "#" no se permite en una fórmula. | Quite ese carácter (no se permiten unidades, `%`, `$` ni `=`). |
| Falta un ")". / Hay un ")" sin su "(". | Equilibre los paréntesis. |
| Falta un valor antes de ")". | Algo como `max(1, )`: escriba el valor. |
| La fórmula termina demasiado pronto. | Algo como `L *`: complétela. |
| "…" inesperado. ¿Falta un operador? | Dos valores juntos, como `2L`: escriba `2 * L`. |
| ceil() recibe 1 valor. | Dé a la función el número correcto de valores. |
| round(x, digits) necesita dígitos enteros de 0 a 10. | Use un número entero de decimales. |
| La fórmula divide entre cero. | Por lo general H es 0: defina la altura o profundidad de la partida. |
| La fórmula no da un número. | El resultado es demasiado grande para ser un número. |
| Esa fórmula es demasiado larga (500 caracteres como máximo). | Acórtela. |

## Seguro por diseño

Una fórmula solo puede hacer operaciones aritméticas con las variables y funciones de arriba. No puede ejecutar código ni leer nada más, así que una fórmula en un archivo de proyecto que alguien le envíe es inofensiva.
