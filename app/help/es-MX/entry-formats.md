---
title: Entrada de longitudes, tarifas y porcentajes
summary: Lo que puede escribir para distancias, alturas, tarifas de dinero y porcentajes de desperdicio, con ejemplos y los mensajes para entradas que TakeoffCraft no puede leer.
keywords: entrada, formato, pies y pulgadas, fracciones, pies decimales, métrico, metros, milímetros, tarifa, dinero, dólares, porcentaje, desperdicio, escritura
from: 215bbf4d
---

## Longitudes

Lo usa **Distancia real** en {{ui:Calibrar}}, y {{ui:Altura}} y {{ui:Profundidad}} en el editor de partidas.

| Usted escribe | Significa |
|---|---|
| `24'-0"` | 24 pies |
| `24'-6 1/2"` | 24 pies 6½ pulgadas |
| `12' 6 1/2"` | 12 pies 6½ pulgadas (un espacio en lugar del guion) |
| `12'-6-1/2"` | 12 pies 6½ pulgadas (guiones entre las partes) |
| `24'` | 24 pies |
| `30"` | 30 pulgadas |
| `6 1/2"` | 6½ pulgadas |
| `3/4"` | ¾ de pulgada |
| `24 ft 6 in` | 24 pies 6 pulgadas (también `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 en la unidad predeterminada (vea abajo) |
| `24.5'` | 24.5 pies |
| `7.5 m` | 7.5 metros |
| `750 cm` | 750 centímetros |
| `7500 mm` | 7,500 milímetros |

- Un número simple está en **pies** para la calibración y para partidas en LF, SF o SY, y en **metros** para partidas en m o m².
- Las comillas tipográficas y las marcas de prima de los procesadores de texto (′ ″ ’ ”) funcionan como `'` y `"`. Dos apóstrofos `''` cuentan como `"`.
- Las comas se ignoran: `1,200 mm` es 1200 mm.
- Las fracciones necesitan números enteros a ambos lados: `6 1/2"` funciona, `6.5 1/2"` no.
- Las distancias cero y negativas no se aceptan.

Mensajes:

- "Escriba una distancia, como 24'-0" o 7.5 m." (el campo está vacío)
- "Escriba una distancia mayor que cero."
- "Use pies y pulgadas (24'-6 1/2"), pies decimales, m, cm o mm." (una unidad desconocida)
- "No se pudo leer esa distancia. Pruebe con 24'-6 1/2" o 24.5."

Para borrar la altura o la profundidad de una partida, vacíe el campo.

### Aritmética

Cada campo de longitud, y el cuadro de escritura mientras dibuja, también acepta un cálculo con `+`, `-`, `*`, `/` y paréntesis:
`4+7/16` (4.4375 en la unidad predeterminada), `12'6" + 3/4"`, `(24'-0")/3` (8 pies), `2*450mm`.

- Un guion escrito en una longitud sigue siendo parte de ella: `24'-6"` son 24 pies 6 pulgadas, y `6-1/2` es 6½. Ponga espacios alrededor de un guion para restar: `24' - 6"` es 23'-6".
- Un número simple multiplica o divide una longitud como número; si se suma a una longitud, está en la unidad predeterminada.
- `abs`, `round`, `ceil` y `floor` también funcionan. Un cálculo que no se puede leer se rechaza, indicando dónde está el error.

## Cómo se muestran las longitudes

Las longitudes se muestran en pies, pulgadas y dieciseisavos: `12'-6 1/2"`, `0'-0 3/4"`. Los valores se redondean al dieciseisavo de pulgada más cercano para mostrarlos; las cantidades en sí no se redondean. Los valores decimales se muestran con dos decimales y separadores de miles, como `1,234.50 LF`.

## Tarifas (material y mano de obra por unidad)

| Usted escribe | Significa |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (hasta cuatro decimales; los demás se redondean) |
| (vacío) | $0 |

Mensaje: "Escriba un importe como 12.50." o "Ese importe es demasiado grande." No se aceptan tarifas negativas.

Los importes extendidos (material, mano de obra, totales) se calculan al centavo: cantidad con desperdicio × tarifa, redondeados con la mitad alejándose de cero, exactamente como `ROUND(x, 2)` de una hoja de cálculo.

## Porcentaje de desperdicio

| Usted escribe | Significa |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (vacío) | 0% |

Hasta dos decimales, de 0% a 1000%. Mensajes: "Escriba un porcentaje como 10 o 7.5." o "No se permite un desperdicio superior al 1000%."

## Nombres y unidades

- Nombres de partidas y componentes: hasta 200 caracteres.
- La {{ui:Unidad}} de un componente: cualquier texto de hasta 20 caracteres, como `EA`, `hojas`, `CY`, `gal`. Es solo una etiqueta; TakeoffCraft no la convierte.

## Fórmulas

Las fórmulas de conjuntos tienen sus propias reglas: vea [Lenguaje de fórmulas](topic:formulas).
