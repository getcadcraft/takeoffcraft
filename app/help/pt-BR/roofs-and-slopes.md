---
title: Telhados e inclinações
summary: Dê a uma área o seu caimento para medir a superfície do telhado a partir da planta, e meça rakes, espigões e rincões ao longo da inclinação deles.
keywords: telhado, caimento, inclinação, fator de inclinação, elevação, avanço, 6:12, rake, espigão, rincão, empena, cobertura, squares, área inclinada, comprimento real, área em planta
from: 38225b60
---

A planta de um telhado mostra cada plano do telhado plano, visto de cima. O telhado em si é maior: um plano com caimento de 6:12 tem cerca de 12% mais superfície do que a sua planta, e as bordas inclinadas são mais longas do que parecem. Dê ao item o seu caimento e o TakeoffCraft mede ao longo da inclinação.

## Digitar um caimento

O caimento é a elevação por 12 de avanço, como nos símbolos de caimento da planta do telhado. Digite como `6:12`, `6/12` ou apenas `6`; outro avanço também funciona (`4:10` equivale a 4.8:12). Um ângulo funciona com o símbolo de grau: `26.57°`. Em branco ou `0` é plano.

## Áreas de telhado

1. Crie um item de área para a cobertura, ou abra o que você já tem.
2. Nas suas configurações, digite o **Caimento**, como `6:12`.
3. Contorne cada plano do telhado na planta com {{ui:Área}}, como de costume.

Cada plano conta a sua área em planta vezes o fator de inclinação: √(1 + (elevação ÷ 12)²), 1.118 em 6:12 e 1.414 em 12:12. Selecione um plano para ver a sua **Área** (na inclinação), a sua **Área em planta** e o **Fator de inclinação**.

Planos com outro caimento: selecione o plano e digite o próprio **Caimento** no painel dele. Deixe em branco para usar o do item. A vista 3D de conferência, as composições (`A` é a área inclinada), os custos e a exportação usam todos a área inclinada. Deduções em um plano inclinado, como claraboias, saem na mesma inclinação.

O perímetro (`P`) continua sendo o perímetro em planta. Meça beirais, rakes, espigões e rincões como trechos (abaixo).

## Rakes, espigões e rincões

1. Crie um item linear, como "Borda de rake" ou "Espigões".
2. Defina a sua **Inclinação** como **Rake** (uma borda inclinada, como a de uma empena) ou **Espigão ou rincão** (a linha onde dois planos se encontram), e digite o **Caimento** dos planos do telhado.
3. Desenhe os trechos na planta com {{ui:Linear}}.

Um rake conta o seu comprimento em planta vezes o fator de inclinação. Um espigão ou rincão corre a 45° na planta entre dois planos de mesmo caimento, então o seu comprimento real é o comprimento em planta vezes √(1 + (elevação ÷ 12)² ÷ 2): 1.061 em 6:12, 1.225 em 12:12.

Um trecho pode misturar os dois. Selecione-o: cada segmento no seu painel tem uma lista de inclinação — **Do item** (a configuração do item), **Horizontal**, **Rake** ou **Espigão ou rincão** — e o seu comprimento ao longo da inclinação. O **Caimento** do próprio trecho no painel substitui o do item em todos os seus segmentos. O painel também mostra o **Comprimento em planta**, e os rótulos na folha mostram os comprimentos ao longo da inclinação.

As deduções continuam funcionando: um segmento deduzido não conta nada, inclinado ou não.

:::note
Espigões e rincões supõem que os dois planos têm o mesmo caimento. Para planos com caimentos diferentes, meça o espigão pelo seu comprimento real em outro lugar, ou desenhe-o como rake com um caimento equivalente.
:::
