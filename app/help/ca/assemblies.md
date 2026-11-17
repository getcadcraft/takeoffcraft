---
title: Preus descomposts i fórmules
summary: Afegiu components a un element i deixeu que les fórmules converteixin la seva longitud, àrea o recompte en muntants, carreres i soleres, plaques de cartró-guix, formigó i ferreteria, amb un exemple de mur resolt.
keywords: preu descompost, components, fórmula, muntants, cartró-guix, plaques, carreres, soleres, formigó, iardes cúbiques, ferreteria, recepta, típic, parts de l'element
from: 12891a21
---

El **preu descompost** d'un element és una llista de components, cadascun amb la seva fórmula de quantitat i la seva pròpia pèrdua i tarifes. La fórmula fa servir els totals mesurats de l'element, de manera que un sol amidament d'un mur dona muntants, carreres, soleres i plaques alhora, i s'actualitzen a mesura que mesureu.

## Variables que podeu fer servir

| Tipus d'element | Variables |
|---|---|
| Lineal | `L` longitud, `H` alçada, `A` àrea del mur (L × H), `N` nombre de trams |
| Àrea | `A` àrea, `P` perímetre (contorn + retalls), `H` profunditat o gruix, `N` nombre d'àrees |
| Recompte | `N` recompte |

Els valors són en les unitats pròpies de l'element: peus i peus quadrats per als elements en LF i SF, metres i metres quadrats per als elements en m i m². Per a un element en SY, `A` és en iardes quadrades, mentre que `P` i `H` continuen en peus.

Les fórmules fan servir `+ - * /` (o × ÷), parèntesis, nombres i les funcions `ceil`, `floor`, `round`, `min`, `max` i `abs`. Les regles completes són a [Llenguatge de fórmules](topic:formulas).

## Exemple resolt: un mur interior

Imagineu que heu mesurat **Mur interior tipus A** com a element lineal: 4 trams que sumen 120 LF, amb {{ui:Alçada}} fixada a `9'-0"`. Els valors **Mesurat** són L = 120, N = 4, A = 1,080 (SF de mur, una cara).

1. Seleccioneu l'element sota {{ui:Elements}}.
2. A {{ui:Preu descompost}}, trieu {{ui:Afegeix component}}.
   Apareix un component anomenat "Component", amb la fórmula `L` i el resultat a sota.
3. Escriviu `Muntants 16 in o.c.` a {{ui:Nom}} i `EA` a {{ui:Unitat}}.
4. A {{ui:Fórmula de quantitat}}, escriviu `ceil(L * 12 / 16) + N`.
   El resultat s'actualitza mentre escriviu: "= 94 EA". És un muntant cada 16 polzades al llarg de 120 peus (90), més un de més per tancar cadascun dels 4 trams.
5. Torneu a triar {{ui:Afegeix component}} per a les carreres i soleres: nom `Carreres i soleres`, unitat `LF`, fórmula `L * 2`. Resultat: 240 LF.
6. Afegiu la placa: nom `Placa de guix 4x8, a les dues cares`, unitat `fulls`, fórmula `ceil(A * 2 / 32)`. Resultat: 68 fulls (2,160 SF de placa ÷ 32 SF per full = 67.5, arrodonit a dalt).
7. Ompliu la {{ui:Pèrdua %}}, {{ui:Material $}} i {{ui:Mà d'obra $}} de cada component.
   Cada component té la seva pròpia fila sota l'element a {{ui:Quantitats}}, amb preu com un element, i el {{ui:Total de l'obra}} l'inclou.

Si el cost del mur és tot als components, deixeu els preus unitaris de material i de mà d'obra de l'element en 0, o es comptarà dues vegades.

:::tip
La pèrdua s'aplica després de la fórmula i no s'arrodoneix: 68 fulls amb un 10 % de pèrdua són 74.8 fulls. Per demanar fulls sencers, poseu la pèrdua dins de la fórmula, com `ceil(A * 2 / 32 * 1.1)`, i deixeu la pèrdua del component en 0.
:::

## Més fórmules

| Què | Element | Fórmula |
|---|---|---|
| Muntants cada 24 in entre eixos | Lineal | `ceil(L / 2) + N` |
| Panells d'aïllament, SF | Lineal amb alçada | `A` |
| Pintura, a les dues cares, galons a 350 SF | Lineal amb alçada | `ceil(A * 2 / 350)` |
| Caixes de rajola a 15 SF, un 10 % més | Àrea | `ceil(A * 1.1 / 15)` |
| Sòcol o perfil de vora, LF | Àrea | `P` |
| Formigó, iardes cúbiques | Àrea amb profunditat | `A * H / 27` |
| Formigó arrodonit a un quart d'iarda | Àrea amb profunditat | `ceil(A * H / 27 * 4) / 4` |
| Frontisses, tres per porta | Recompte | `N * 3` |
| Almenys una caixa, una per cada 12 | Recompte | `max(1, ceil(N / 12))` |

## Quan una fórmula és incorrecta

La línia sota la fórmula es converteix en un missatge d'error, per exemple `"X" no és un valor mesurat aquí. Useu L, H, A, N.` o `Falta ")".` El component no té imports, la seva fila a {{ui:Quantitats}} mostra "Error de fórmula: …", i la capçalera diu "Incomplet: 1 error de fórmula (no és als totals)". Corregiu la fórmula i els totals s'actualitzen.

Una fórmula que divideix per zero també és un error ("La fórmula divideix per zero."), per exemple `A / H` en un element sense profunditat.

## Límits

- Les fórmules s'apliquen als **totals** de l'element, no tram per tram. `ceil(L * 12 / 16) + N` afegeix un muntant per tram; encara no hi ha arrodoniment per tram.
- Una fórmula només pot fer servir les variables del seu propi element, no les d'un altre element.
- Fins a 50 components per element i 500 caràcters per fórmula.

## Elimina un component

Trieu {{ui:Elimina el component}} sota el component. Ho podeu desfer amb {{key:Mod+Z}}.
