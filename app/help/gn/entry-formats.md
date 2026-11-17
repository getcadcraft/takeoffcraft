---
title: Ingreso de longitudes, tasas ha porcentajes
summary: Loque podés escribir para distancias, alturas, tasas de dinero ha porcentajes de desperdicio, con ejemplos ha los mensajes para entradas que TakeoffCraft ndoikuaái.
keywords: ingreso, formato, pies pulgadas, fracciones, pies decimales, métrico, metros, milímetros, tasa, dinero, dólares, porcentaje, desperdicio, escribir
from: 215bbf4d
---

## Longitudes

Oñeporu **Distancia real** en {{ui:Calibrate}}, ha {{ui:Height}} ha {{ui:Depth}} en el editor de ítems.

| Escribís | Significa |
|---|---|
| `24'-0"` | 24 pies |
| `24'-6 1/2"` | 24 pies 6½ pulgadas |
| `12' 6 1/2"` | 12 pies 6½ pulgadas (un espacio en vez del guion) |
| `12'-6-1/2"` | 12 pies 6½ pulgadas (guiones entre las partes) |
| `24'` | 24 pies |
| `30"` | 30 pulgadas |
| `6 1/2"` | 6½ pulgadas |
| `3/4"` | ¾ de pulgada |
| `24 ft 6 in` | 24 pies 6 pulgadas (también `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 en la unidad predeterminada (ver abajo) |
| `24.5'` | 24.5 pies |
| `7.5 m` | 7.5 metros |
| `750 cm` | 750 centímetros |
| `7500 mm` | 7.500 milímetros |

- Un número solo va en **pies** para calibrar ha para ítems en LF, SF o SY, ha en **metros** para ítems en m o m².
- Las comillas curvas ha los signos de prima de los procesadores de texto (′ ″ ’ ”) funcionan como `'` y `"`. Dos apóstrofes `''` cuentan como `"`.
- Las comas se ignoran: `1,200 mm` es 1200 mm.
- Las fracciones necesitan números enteros de ambos lados: `6 1/2"` anda, `6.5 1/2"` ndoikói.
- Distancias cero ha negativas ndojerechazái.

Mensajes:

- "Escribí una distancia, como 24'-0" o 7.5 m." (el campo está vacío)
- "Escribí una distancia mayor que cero."
- "Usá pies y pulgadas (24'-6 1/2"), pies decimales, m, cm o mm." (unidad desconocida)
- "No se pudo leer esa distancia. Probá con 24'-6 1/2" o 24.5."

Para borrar la altura o profundidad de un ítem, dejá vacío el campo.

### Aritmética

Cada campo de longitud, ha la caja de escritura mientras dibujás, también acepta un cálculo con `+`, `-`, `*`, `/` ha paréntesis:
`4+7/16` (4.4375 en la unidad predeterminada), `12'6" + 3/4"`, `(24'-0")/3` (8 pies), `2*450mm`.

- Un guion escrito dentro de una longitud sigue siendo parte de ella: `24'-6"` es 24 pies 6 pulgadas ha `6-1/2` es 6½. Poné espacios alrededor de un guion para restar: `24' - 6"` es 23'-6".
- Un número solo multiplica o divide una longitud como número; sumado a una longitud, va en la unidad predeterminada.
- `abs`, `round`, `ceil` ha `floor` también funcionan. Un cálculo que no se puede leer se rechaza, con el lugar donde falló.

## Cómo se muestran las longitudes

Las longitudes se muestran en pies, pulgadas ha dieciseisavos: `12'-6 1/2"`, `0'-0 3/4"`. Los valores se redondean al 1/16 de pulgada más cercano para mostrar; las cantidades en sí no se redondean. Los valores decimales se muestran con dos decimales ha separadores de miles, como `1,234.50 LF`.

## Tasas (material ha mano de obra por unidad)

| Escribís | Significa |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (hasta cuatro decimales; los demás se redondean) |
| (vacío) | $0 |

Mensaje: "Escribí un importe, como 12.50." o "Ese importe es demasiado grande." No se aceptan tasas negativas.

Los importes extendidos (material, mano de obra, totales) se calculan al centavo: cantidad con desperdicio × tasa, redondeado de mitad hacia afuera de cero, igual que `ROUND(x, 2)` de una planilla.

## Porcentaje de desperdicio

| Escribís | Significa |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (vacío) | 0% |

Hasta dos decimales, de 0% a 1000%. Mensajes: "Escribí un porcentaje, como 10 o 7.5." o "No se permite un desperdicio mayor a 1000%."

## Nombres y unidades

- Nombres de ítems y componentes: hasta 200 caracteres.
- {{ui:Unit}} de un componente: cualquier texto de hasta 20 caracteres, como `EA`, `sheets`, `CY`, `gal`. Es solo una etiqueta; TakeoffCraft no la convierte.

## Fórmulas

Las fórmulas de ensamblaje tienen sus propias reglas: ver [Lenguaje de fórmulas](topic:formulas).
