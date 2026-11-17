---
title: Introducció de longituds, preus unitaris i percentatges
summary: Què podeu escriure per a distàncies, alçades, preus unitaris en diners i percentatges de pèrdua, amb exemples i els missatges per a les dades que TakeoffCraft no pot llegir.
keywords: entrada, format, peus i polzades, fraccions, peus decimals, mètric, metres, mil·límetres, preu, diners, dòlars, percentatge, pèrdua, escriure
from: 215bbf4d
---

## Longituds

Ho fa servir **Distància real** a {{ui:Calibra}}, i també {{ui:Alçada}} i {{ui:Profunditat}} a l'editor de partides.

| Escriviu | Significa |
|---|---|
| `24'-0"` | 24 peus |
| `24'-6 1/2"` | 24 peus i 6½ polzades |
| `12' 6 1/2"` | 12 peus i 6½ polzades (un espai en lloc del guió) |
| `12'-6-1/2"` | 12 peus i 6½ polzades (guions entre les parts) |
| `24'` | 24 peus |
| `30"` | 30 polzades |
| `6 1/2"` | 6½ polzades |
| `3/4"` | ¾ de polzada |
| `24 ft 6 in` | 24 peus i 6 polzades (també `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 en la unitat per defecte (vegeu més avall) |
| `24.5'` | 24.5 peus |
| `7.5 m` | 7.5 metres |
| `750 cm` | 750 centímetres |
| `7500 mm` | 7,500 mil·límetres |

- Un nombre simple és en **peus** per a la calibració i per a les partides en LF, SF o SY, i en **metres** per a les partides en m o m².
- Les cometes corbes i els signes de prima dels processadors de text (′ ″ ’ ”) funcionen com `'` i `"`. Dues cometes simples `''` compten com a `"`.
- Les comes s'ignoren: `1,200 mm` és 1200 mm.
- Les fraccions necessiten nombres enters a banda i banda: `6 1/2"` funciona, `6.5 1/2"` no.
- Les distàncies zero i negatives no s'accepten.

Missatges:

- "Escriviu una distància, com 24'-0" o 7.5 m." (el camp és buit)
- "Escriviu una distància més gran que zero."
- "Useu peus i polzades (24'-6 1/2"), peus decimals, m, cm o mm." (una unitat desconeguda)
- "No s'ha pogut llegir aquesta distància. Proveu 24'-6 1/2" o 24.5."

Per treure l'alçada o la profunditat d'una partida, buideu el camp.

### Aritmètica

Tots els camps de longitud, i el quadre d'escriptura mentre dibuixeu, també accepten un càlcul amb `+`, `-`, `*`, `/` i parèntesis:
`4+7/16` (4.4375 en la unitat per defecte), `12'6" + 3/4"`, `(24'-0")/3` (8 peus), `2*450mm`.

- Un guió escrit dins d'una longitud forma part d'ella: `24'-6"` són 24 peus i 6 polzades, i `6-1/2` és 6½. Poseu espais al voltant d'un guió per restar: `24' - 6"` és 23'-6".
- Un nombre simple multiplica o divideix una longitud com a nombre; si se li suma a una longitud, és en la unitat per defecte.
- També funcionen `abs`, `round`, `ceil` i `floor`. Un càlcul que no es pot llegir es rebutja i s'indica on hi ha l'error.

## Com es mostren les longituds

Les longituds es mostren en peus, polzades i setzens: `12'-6 1/2"`, `0'-0 3/4"`. Els valors s'arrodoneixen al setzen de polzada més proper per mostrar-los; les quantitats en si no s'arrodoneixen. Els valors decimals es mostren amb dos decimals i separadors de milers, com `1,234.50 LF`.

## Preus unitaris (material i mà d'obra per unitat)

| Escriviu | Significa |
|---|---|
| `12.5` | 12,50 $ |
| `$12.50` | 12,50 $ |
| `1,250` | 1.250,00 $ |
| `0.385` | 0,385 $ (fins a quatre decimals; els que sobrin s'arrodoneixen) |
| (buit) | 0 $ |

Missatge: "Escriviu una quantitat com 12.50." o "Aquesta quantitat és massa gran." Els preus unitaris negatius no s'accepten.

Els imports (material, mà d'obra, totals) es calculen fins al cèntim: quantitat amb pèrdua × preu unitari, arrodonida a la meitat més allunyada de zero, exactament com `ROUND(x, 2)` d'un full de càlcul.

## Pèrdua en percentatge

| Escriviu | Significa |
|---|---|
| `10` | 10 % |
| `7.5%` | 7.5 % |
| (buit) | 0 % |

Fins a dos decimals, de 0 % a 1000 %. Missatges: "Escriviu un percentatge com 10 o 7.5." o "La pèrdua per sobre de 1000% no es permet."

## Noms i unitats

- Noms de partides i de components: fins a 200 caràcters.
- La {{ui:Unitat}} d'un component: qualsevol text de fins a 20 caràcters, com `EA`, `sheets`, `CY` o `gal`. És només una etiqueta; TakeoffCraft no la converteix.

## Fórmules

Les fórmules dels preus descomposts tenen les seves pròpies regles: vegeu [Llenguatge de fórmules](topic:formulas).
