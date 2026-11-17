---
title: Lenguaje de fórmulas
summary: Las reglas para las fórmulas de cantidad de ensamblajes: variables, operadores, funciones, redondeo y cada mensaje de error.
keywords: fórmula, expresión, sintaxis, funciones, ceil, floor, round, min, max, abs, variables, operadores, cálculo
from: 4da14575
---

Los componentes de un ensamblaje obtienen su cantidad de una fórmula. Una fórmula es una pequeña expresión aritmética sobre los valores medidos del elemento. Véase [Ensamblajes y fórmulas](topic:assemblies) para ejemplos resueltos.

## Variables

| Tipo de elemento | Variable | Significado |
|---|---|---|
| Lineal | `L` | Longitud total |
| Lineal | `H` | La altura del elemento |
| Lineal | `A` | Área de muro, L × H, menos los huecos de los tramos que los tienen (una medición de BimCraft). Cuando esa medición indica un método de medición, `A` se mide con él: los huecos no mayores que el tamaño mínimo del método se mantienen, y se excluye lo que el método descuenta donde se encuentran los muros. La nota bajo el elemento indica el método |
| Lineal | `N` | Número de tramos |
| Superficie | `A` | Área neta total (contornos menos huecos) |
| Superficie | `P` | Perímetro total, incluidos los bordes de los huecos |
| Superficie | `H` | La profundidad o el espesor del elemento |
| Superficie | `N` | Número de superficies |
| Recuento | `N` | El recuento |

- Las variables están en las unidades del elemento: véase [Unidades](topic:units).
- Las mayúsculas y las minúsculas son iguales: `l` es `L`.
- Solo funcionan las variables del propio tipo del elemento. `P` en un elemento lineal da `"P" no es un valor medido aquí. Use L, H, A, N.`
- Una altura o profundidad vacía es 0.

## Operadores

| Escriba | Significado |
|---|---|
| `+` | Sumar |
| `-` o `−` | Restar, o un valor negativo |
| `*` o `×` | Multiplicar |
| `/` o `÷` | Dividir |
| `( )` | Agrupar |

Multiplicar y dividir van antes que sumar y restar: `L * 2 + 4` es (L × 2) + 4. Use paréntesis si tiene dudas.

Los números pueden tener decimales (`1.333`, `.5`) y exponentes (`1e3` = 1000). Los espacios se ignoran.

## Funciones

| Función | Resultado | Ejemplo |
|---|---|---|
| `ceil(x)` | Redondea hacia arriba a un número entero | `ceil(67.5)` = 68 |
| `floor(x)` | Redondea hacia abajo a un número entero | `floor(67.5)` = 67 |
| `round(x)` | Redondea al entero más cercano; los medios se alejan de cero | `round(2.5)` = 3 |
| `round(x, d)` | Redondea a d decimales (de 0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | El valor más pequeño | `min(N, 10)` |
| `max(a, b, …)` | El valor más grande | `max(1, ceil(N / 12))` |
| `abs(x)` | El valor sin su signo | `abs(-3)` = 3 |

`ceil` y `floor` ignoran el pequeño ruido de redondeo del equipo, así que un valor que debe ser exactamente 1 nunca se redondea a 2.

## Errores

Una fórmula que no se puede leer o calcular muestra su error bajo el campo, y el componente queda fuera de los totales (el encabezado {{ui:Cantidades}} dice "Incompleto"). Mensajes:

| Mensaje | Solución |
|---|---|
| Escriba una fórmula, como L o ceil(L / 1.333) + 1. | La fórmula está vacía. |
| "X" no es un valor medido aquí. Use … | Use una de las variables indicadas. |
| "X" no es una función aquí. Use ceil, floor, round, min, max, abs. | Use una de esas funciones. |
| "#" no está permitido en una fórmula. | Elimine ese carácter (no se permiten unidades, `%`, `$` ni `=`). |
| Falta un ")". / Hay un ")" sin su "(". | Equilibre los paréntesis. |
| Falta un valor antes de ")". | Algo como `max(1, )`: escriba el valor. |
| La fórmula termina demasiado pronto. | Algo como `L *`: termínela. |
| Inesperado "…". ¿Falta un operador? | Dos valores juntos, como `2L`: escriba `2 * L`. |
| ceil() admite 1 valor. | Dé a la función el número correcto de valores. |
| round(x, digits) necesita decimales enteros de 0 a 10. | Use un número entero de decimales. |
| La fórmula divide por cero. | Normalmente H es 0: indique la altura o profundidad del elemento. |
| La fórmula no da un número. | El resultado es demasiado grande para ser un número. |
| Esa fórmula es demasiado larga (500 caracteres como máximo). | Acórtela. |

## Seguro por diseño

Una fórmula solo puede hacer aritmética con las variables y funciones anteriores. No puede ejecutar código ni leer nada más, así que una fórmula en un archivo de proyecto que alguien le envíe es inofensiva.
