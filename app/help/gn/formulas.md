---
title: Lenguaje de fórmulas
summary: Las reglas para las fórmulas de cantidad de ensamblajes: variables, operadores, funciones, redondeo ha cada mensaje de error.
keywords: fórmula, expresión, sintaxis, funciones, ceil, floor, round, min, max, abs, variables, operadores, cálculo
from: 4da14575
---

Los componentes de un ensamblaje reciben su cantidad de una fórmula. Una fórmula es una pequeña expresión aritmética sobre los valores medidos del ítem. Ver [Ensamblajes ha fórmulas](topic:assemblies) para ejemplos resueltos.

## Variables

| Tipo de ítem | Variable | Significado |
|---|---|---|
| Linear | `L` | Longitud total |
| Linear | `H` | Altura del ítem |
| Linear | `A` | Área de muro, L × H, menos las aberturas de los tramos que las tienen (un cómputo de BimCraft). Cuando ese cómputo indica un método de medición, `A` se mide con él: las aberturas no mayores que el tamaño mínimo del método se quedan, ha se deja afuera lo que el método descuenta donde los muros se encuentran. La nota debajo del ítem indica el método |
| Linear | `N` | Cantidad de tramos |
| Area | `A` | Área neta total (contornos menos recortes) |
| Area | `P` | Perímetro total, incluidos los bordes de los recortes |
| Area | `H` | Profundidad o espesor del ítem |
| Area | `N` | Cantidad de áreas |
| Count | `N` | La cuenta |

- Las variables van en las unidades del ítem: ver [Unidades](topic:units).
- Mayúsculas ha minúsculas son lo mismo: `l` es `L`.
- Solo funcionan las variables del tipo propio del ítem. `P` en un ítem linear da `"P" no es un valor medido aquí. Usá L, H, A, N.`
- Una altura o profundidad vacía vale 0.

## Operadores

| Se escribe | Significado |
|---|---|
| `+` | Sumar |
| `-` o `−` | Restar, o un valor negativo |
| `*` o `×` | Multiplicar |
| `/` o `÷` | Dividir |
| `( )` | Agrupar |

Multiplicar ha dividir van antes que sumar ha restar: `L * 2 + 4` es (L × 2) + 4. Usá paréntesis cuando tengas dudas.

Los números pueden tener decimales (`1.333`, `.5`) ha exponentes (`1e3` = 1000). Los espacios se ignoran.

## Funciones

| Función | Resultado | Ejemplo |
|---|---|---|
| `ceil(x)` | Redondea hacia arriba a un número entero | `ceil(67.5)` = 68 |
| `floor(x)` | Redondea hacia abajo a un número entero | `floor(67.5)` = 67 |
| `round(x)` | Redondea al entero más cercano, mitades alejadas de cero | `round(2.5)` = 3 |
| `round(x, d)` | Redondea a d decimales (0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | El valor más chico | `min(N, 10)` |
| `max(a, b, …)` | El valor más grande | `max(1, ceil(N / 12))` |
| `abs(x)` | El valor sin su signo | `abs(-3)` = 3 |

`ceil` ha `floor` ignoran el ruido mínimo de redondeo de la computadora, así que un valor que debería ser exactamente 1 nunca se redondea a 2.

## Errores

Una fórmula que no se puede leer ni calcular muestra su error debajo del campo, ha el componente queda afuera de los totales (el encabezado de {{ui:Quantities}} dice "Incompleto"). Mensajes:

| Mensaje | Solución |
|---|---|
| "Escribí una fórmula, como L o ceil(L / 1.333) + 1." | La fórmula está vacía. |
| "X" no es un valor medido aquí. Usá … | Usá una de las variables listadas. |
| "X" no es una función aquí. Usá ceil, floor, round, min, max, abs. | Usá una de esas funciones. |
| "#" no está permitido en una fórmula. | Quitá ese carácter (no se permiten unidades, `%`, `$` ni `=`). |
| Falta un ")". / Hay un ")" sin su "(". | Equilibrá los paréntesis. |
| Falta un valor antes de ")". | Algo como `max(1, )`: completá el valor. |
| La fórmula termina demasiado pronto. | Algo como `L *`: terminala. |
| Inesperado "…". ¿Falta un operador? | Dos valores juntos, como `2L`: escribí `2 * L`. |
| ceil() recibe 1 valor. | Dale a la función la cantidad correcta de valores. |
| round(x, digits) necesita decimales enteros de 0 a 10. | Usá una cantidad entera de decimales. |
| La fórmula divide por cero. | Generalmente H es 0: definí la altura o profundidad del ítem. |
| La fórmula no da un número. | El resultado es demasiado grande para ser un número. |
| Esa fórmula es demasiado larga (500 caracteres como máximo). | Acortala. |

## Seguro por diseño

Una fórmula solo puede hacer aritmética con las variables ha funciones de arriba. No puede ejecutar código ni leer otra cosa, así que una fórmula en un archivo de proyecto que alguien te envíe es inofensiva.
