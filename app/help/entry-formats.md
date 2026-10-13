---
title: Length, rate and percent entry
summary: What you can type for distances, heights, money rates and waste percentages, with examples and the messages for input TakeoffCraft cannot read.
section: reference
order: 20
keywords: input, format, feet inches, fractions, decimal feet, metric, meters, millimeters, rate, money, dollars, percent, waste, typing
---

## Lengths

Used by **Real distance** in {{ui:Calibrate}}, and by {{ui:Height}} and {{ui:Depth}} in the item editor.

| You type | It means |
|---|---|
| `24'-0"` | 24 feet |
| `24'-6 1/2"` | 24 feet 6½ inches |
| `12' 6 1/2"` | 12 feet 6½ inches (a space instead of the dash) |
| `12'-6-1/2"` | 12 feet 6½ inches (dashes between the parts) |
| `24'` | 24 feet |
| `30"` | 30 inches |
| `6 1/2"` | 6½ inches |
| `3/4"` | ¾ inch |
| `24 ft 6 in` | 24 feet 6 inches (also `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 in the default unit (see below) |
| `24.5'` | 24.5 feet |
| `7.5 m` | 7.5 meters |
| `750 cm` | 750 centimeters |
| `7500 mm` | 7,500 millimeters |

- A plain number is in **feet** for calibration and for items in LF, SF or SY, and in **meters** for items in m or m².
- Curly quotes and the prime marks from word processors (′ ″ ’ ”) work like `'` and `"`. Two apostrophes `''` count as `"`.
- Commas are ignored: `1,200 mm` is 1200 mm.
- Fractions need whole numbers on both sides: `6 1/2"` works, `6.5 1/2"` does not.
- Zero and negative distances are refused.

Messages:

- "Type a distance, like 24'-0" or 7.5 m." (the field is empty)
- "Type a distance greater than zero."
- "Use feet and inches (24'-6 1/2"), decimal feet, m, cm or mm." (an unknown unit)
- "That distance could not be read. Try 24'-6 1/2" or 24.5."

To clear an item's height or depth, empty the field.

## How lengths are shown

Lengths show as feet, inches and sixteenths: `12'-6 1/2"`, `0'-0 3/4"`. Values round to the nearest 1/16 inch for display; the quantities themselves are not rounded. Decimal values show with two decimals and thousands separators, like `1,234.50 LF`.

## Rates (material and labor per unit)

| You type | It means |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (up to four decimals; more are rounded) |
| (empty) | $0 |

Message: "Type an amount like 12.50." or "That amount is too large." Negative rates are not accepted.

Extended amounts (material, labor, totals) are worked out to the cent: quantity with waste × rate, rounded half away from zero, exactly like a spreadsheet's `ROUND(x, 2)`.

## Waste percent

| You type | It means |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (empty) | 0% |

Up to two decimals, from 0% to 1000%. Messages: "Type a percentage like 10 or 7.5." or "Waste above 1000% is not allowed."

## Names and units

- Item and component names: up to 200 characters.
- A component's {{ui:Unit}}: any text up to 20 characters, like `EA`, `sheets`, `CY`, `gal`. It is a label only; TakeoffCraft does not convert it.

## Formulas

Assembly formulas have their own rules: see [Formula language](topic:formulas).
