---
title: Formula language
summary: The rules for assembly quantity formulas - variables, operators, functions, rounding and every error message.
section: reference
order: 40
keywords: formula, expression, syntax, functions, ceil, floor, round, min, max, abs, variables, operators, calculation
---

Assembly components get their quantity from a formula. A formula is a small arithmetic expression over the item's measured values. See [Assemblies and formulas](topic:assemblies) for worked examples.

## Variables

| Item type | Variable | Meaning |
|---|---|---|
| Linear | `L` | Total length |
| Linear | `H` | The item's height |
| Linear | `A` | Wall area, L × H |
| Linear | `N` | Number of runs |
| Area | `A` | Total net area (outlines minus cut-outs) |
| Area | `P` | Total perimeter, including cut-out edges |
| Area | `H` | The item's depth or thickness |
| Area | `N` | Number of areas |
| Count | `N` | The count |

- Variables are in the item's units: see [Units](topic:units).
- Upper and lower case are the same: `l` is `L`.
- Only the variables of the item's own type work. `P` on a linear item gives `"P" is not a measured value here. Use L, H, A, N.`
- An empty height or depth is 0.

## Operators

| Write | Meaning |
|---|---|
| `+` | Add |
| `-` or `−` | Subtract, or a negative value |
| `*` or `×` | Multiply |
| `/` or `÷` | Divide |
| `( )` | Group |

Multiply and divide go before add and subtract: `L * 2 + 4` is (L × 2) + 4. Use parentheses when in doubt.

Numbers can have decimals (`1.333`, `.5`) and exponents (`1e3` = 1000). Spaces are ignored.

## Functions

| Function | Result | Example |
|---|---|---|
| `ceil(x)` | Round up to a whole number | `ceil(67.5)` = 68 |
| `floor(x)` | Round down to a whole number | `floor(67.5)` = 67 |
| `round(x)` | Round to the nearest whole number, halves away from zero | `round(2.5)` = 3 |
| `round(x, d)` | Round to d decimals (0 to 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | The smallest value | `min(N, 10)` |
| `max(a, b, …)` | The largest value | `max(1, ceil(N / 12))` |
| `abs(x)` | The value without its sign | `abs(-3)` = 3 |

`ceil` and `floor` ignore tiny computer rounding noise, so a value that should be exactly 1 is never rounded up to 2.

## Errors

A formula that cannot be read or worked out shows its error under the field, and the component is left out of the totals (the {{ui:Quantities}} header says "Incomplete"). Messages:

| Message | Fix |
|---|---|
| Type a formula, like L or ceil(L / 1.333) + 1. | The formula is empty. |
| "X" is not a measured value here. Use … | Use one of the listed variables. |
| "X" is not a function here. Use ceil, floor, round, min, max, abs. | Use one of those functions. |
| "#" is not allowed in a formula. | Remove that character (units, `%`, `$` and `=` are not allowed). |
| A ")" is missing. / There is a ")" without its "(". | Balance the parentheses. |
| A value is missing before ")". | Something like `max(1, )`: fill in the value. |
| The formula ends too soon. | Something like `L *`: finish it. |
| Unexpected "…". Is an operator missing? | Two values side by side, like `2L`: write `2 * L`. |
| ceil() takes 1 value. | Give the function the right number of values. |
| round(x, digits) needs whole digits from 0 to 10. | Use a whole number of decimals. |
| The formula divides by zero. | Usually H is 0: set the item's height or depth. |
| The formula does not give a number. | The result is too large to be a number. |
| That formula is too long (500 characters at most). | Shorten it. |

## Safe by design

A formula can only do arithmetic with the variables and functions above. It cannot run code or read anything else, so a formula in a project file someone sends you is harmless.
