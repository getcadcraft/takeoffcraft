---
title: Telhados e declives
summary: Dê a uma área a sua inclinação para medir a superfície do telhado a partir da planta, e meça empenas, espigões e rincões ao longo do seu declive.
keywords: telhado, inclinação, declive, fator de declive, desnível, avanço, 6:12, empena, espigão, rincão, água, cobertura, quadrados, área inclinada, comprimento real, área em planta
from: 38225b60
---

Uma planta de telhado mostra cada água plana, vista de cima. O telhado em si é maior: um plano a 6:12 tem cerca de 12% mais superfície do que a sua planta, e os seus bordos inclinados são mais compridos do que parecem. Dê ao artigo a sua inclinação e o TakeoffCraft mede ao longo do declive.

## Escrever uma inclinação

Uma inclinação é o desnível por cada 12 de avanço, como nos símbolos de inclinação da planta do telhado. Escreva-a como `6:12`, `6/12` ou apenas `6`; outro avanço também funciona (`4:10` equivale a 4.8:12). Um ângulo funciona com o símbolo de grau: `26.57°`. Em branco ou `0` é plano.

## Áreas de telhado

1. Crie um artigo de área para a cobertura, ou abra o que já tem.
2. Nas suas definições, escreva a **Inclinação**, como `6:12`.
3. Desenhe o contorno de cada água na planta com {{ui:Area}}, como habitualmente.

Cada água conta a sua área em planta vezes o fator de declive: √(1 + (desnível ÷ 12)²), 1.118 a 6:12 e 1.414 a 12:12. Selecione uma água para ver a sua **Área** (no declive), a sua **Área em planta** e o **Fator de declive**.

Águas com outra inclinação: selecione a água e escreva a sua própria **Inclinação** no respetivo painel. Deixe em branco para usar a do artigo. A vista de verificação 3D, os preços compostos (`A` é a área inclinada), os custos e a exportação usam todos a área inclinada. As deduções numa água inclinada, como as claraboias, são descontadas com o mesmo declive.

O perímetro (`P`) continua a ser o perímetro em planta. Meça beirais, empenas, espigões e rincões como troços (abaixo).

## Empenas, espigões e rincões

1. Crie um artigo linear, como «Beira de empena» ou «Espigões».
2. Defina a sua **Inclinação** como **Empena** (um bordo inclinado, como o de uma empena) ou **Espigão ou rincão** (a linha onde se encontram duas águas), e escreva a **Inclinação** das águas do telhado.
3. Desenhe os troços na planta com {{ui:Linear}}.

Uma empena conta o seu comprimento em planta vezes o fator de declive. Um espigão ou rincão corre a 45° na planta entre duas águas com a mesma inclinação, por isso o seu comprimento real é o comprimento em planta vezes √(1 + (desnível ÷ 12)² ÷ 2): 1.061 a 6:12, 1.225 a 12:12.

Um troço pode misturar os dois. Selecione-o: cada segmento no seu painel tem uma lista de declive — **Do artigo** (a definição do artigo), **Horizontal**, **Empena** ou **Espigão ou rincão** — e o seu comprimento ao longo do declive. A **Inclinação** do próprio troço no painel substitui a do artigo para todos os seus segmentos. O painel mostra também o **Comprimento em planta**, e as etiquetas na folha mostram os comprimentos ao longo do declive.

As deduções continuam a funcionar: um segmento deduzido não conta nada, inclinado ou não.

:::note
Espigões e rincões assumem que as duas águas têm a mesma inclinação. Para águas com inclinações diferentes, meça o espigão pelo seu comprimento real noutro lugar, ou desenhe-o como empena com uma inclinação equivalente.
:::
