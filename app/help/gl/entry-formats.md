---
title: Entrada de lonxitudes, tarifas e porcentaxes
summary: O que pode escribir para distancias, alturas, tarifas en diñeiro e porcentaxes de perda, con exemplos e as mensaxes para entradas que TakeoffCraft non pode ler.
keywords: entrada, formato, pés e polgadas, fraccións, pés decimais, métrico, metros, milímetros, tarifa, diñeiro, dólares, porcentaxe, perda, escribir
from: 215bbf4d
---

## Lonxitudes

Úsase en **Distancia real** de {{ui:Calibrar}}, e en {{ui:Altura}} e {{ui:Profundidade}} no editor de elementos.

| Vostede escribe | Significa |
|---|---|
| `24'-0"` | 24 pés |
| `24'-6 1/2"` | 24 pés e 6½ polgadas |
| `12' 6 1/2"` | 12 pés e 6½ polgadas (un espazo no lugar do guión) |
| `12'-6-1/2"` | 12 pés e 6½ polgadas (guións entre as partes) |
| `24'` | 24 pés |
| `30"` | 30 polgadas |
| `6 1/2"` | 6½ polgadas |
| `3/4"` | ¾ de polgada |
| `24 ft 6 in` | 24 pés e 6 polgadas (tamén `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 na unidade predeterminada (vexa abaixo) |
| `24.5'` | 24.5 pés |
| `7.5 m` | 7.5 metros |
| `750 cm` | 750 centímetros |
| `7500 mm` | 7 500 milímetros |

- Un número simple está en **pés** para a calibración e para os elementos en LF, SF ou SY, e en **metros** para os elementos en m ou m².
- As comiñas tipográficas e as marcas de prima dos procesadores de texto (′ ″ ’ ”) funcionan como `'` e `"`. Dúas apóstrofes `''` contan como `"`.
- As comas ignóranse: `1,200 mm` é 1200 mm.
- As fraccións necesitan números enteiros nos dous lados: `6 1/2"` funciona, `6.5 1/2"` non.
- As distancias cero e negativas non se aceptan.

Mensaxes:

- "Escriba unha distancia, como 24'-0" ou 7.5 m." (o campo está baleiro)
- "Escriba unha distancia maior que cero."
- "Use pés e polgadas (24'-6 1/2"), pés decimais, m, cm ou mm." (unidade descoñecida)
- "Non se puido ler esa distancia. Probe con 24'-6 1/2" ou 24.5."

Para borrar a altura ou a profundidade dun elemento, deixe o campo baleiro.

### Aritmética

Todos os campos de lonxitude, e a caixa de escritura mentres debuxa, admiten tamén un cálculo con `+`, `-`, `*`, `/` e parénteses:
`4+7/16` (4.4375 na unidade predeterminada), `12'6" + 3/4"`, `(24'-0")/3` (8 pés), `2*450mm`.

- Un guión escrito dentro dunha lonxitude segue formando parte dela: `24'-6"` son 24 pés e 6 polgadas, e `6-1/2` é 6½. Deixe espazos arredor dun guión para restar: `24' - 6"` é 23'-6".
- Un número simple multiplica ou divide unha lonxitude como número; sumado a unha lonxitude, está na unidade predeterminada.
- `abs`, `round`, `ceil` e `floor` tamén funcionan. Un cálculo que non se pode ler recházase, indicando onde se produciu o erro.

## Como se mostran as lonxitudes

As lonxitudes mostran pés, polgadas e dezaseisavos: `12'-6 1/2"`, `0'-0 3/4"`. Os valores redondéanse ao 1/16 de polgada máis próximo para a visualización; as cantidades en si non se redondean. Os valores decimais mostran dúas cifras decimais e separadores de miles, como `1,234.50 LF`.

## Tarifas (material e man de obra por unidade)

| Vostede escribe | Significa |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (ata catro decimais; os máis redondéanse) |
| (baleiro) | $0 |

Mensaxe: "Escriba unha cantidade, como 12.50." ou "Esa cantidade é demasiado grande." As tarifas negativas non se aceptan.

Os importes estendidos (material, man de obra, totais) calcúlanse ao céntimo: cantidade con perda × tarifa, redondeada cara a fóra nos empates, exactamente como `ROUND(x, 2)` dunha folla de cálculo.

## Porcentaxe de perda

| Vostede escribe | Significa |
|---|---|
| `10` | 10 % |
| `7.5%` | 7.5 % |
| (baleiro) | 0 % |

Ata dous decimais, de 0 % a 1000 %. Mensaxes: "Escriba unha porcentaxe, como 10 ou 7.5." ou "Non se permite unha perda superior ao 1000 %."

## Nomes e unidades

- Nomes de elementos e de compoñentes: ata 200 caracteres.
- A {{ui:Unidade}} dun compoñente: calquera texto de ata 20 caracteres, como `EA`, `follas`, `CY`, `gal`. É só unha etiqueta; TakeoffCraft non a converte.

## Fórmulas

As fórmulas dos conxuntos teñen regras propias: consulte [Linguaxe de fórmulas](topic:formulas).
