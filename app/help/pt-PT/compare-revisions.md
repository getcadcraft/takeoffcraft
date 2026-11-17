---
title: Comparar uma folha revista e transferir a medição
summary: Sobreponha a folha antiga à sua revisão, alinhe-as, veja o que mudou e transfira a medição para a folha nova, com as marcações a verificar assinaladas.
keywords: revisão, revisto, comparar, sobreposição, antigo, novo, alterações, aditamento, boletim, reemissão, transferir medição, transferência, levar, alinhar, assinalado, verificar
from: 3a1d9fe0
---

Quando uma folha é reemitida, não precisa de a medir de novo. Abra o PDF antigo e o novo, compare as duas folhas e transfira a medição. O TakeoffCraft assinala cada marcação onde o desenho mudou, para que verifique essas e mantenha as restantes.

## Comparar

1. Abra os dois PDF: o conjunto antigo e o revisto ({{ui:Abrir plantas}}; podem estar num ficheiro ou em vários).
2. Mostre a folha **nova**.
3. Escolha {{ui:Comparar}} na barra da folha, por baixo do desenho.
4. Escolha a folha antiga na lista. O TakeoffCraft sugere a folha com o mesmo número no outro PDF, ou a mesma página. Escolha **Comparar**.

O desenho antigo fica agora sobreposto ao novo, a vermelho. Onde as duas coincidem, as linhas vermelhas ficam sobre as pretas; onde diferem, vê apenas linhas vermelhas (removidas) e apenas linhas pretas (acrescentadas). Uma barra na parte inferior da folha tem os passos abaixo; {{key:Esc}} ou {{ui:Fechar}} termina a comparação.

## Alinhar

As folhas revistas são muitas vezes impressas um pouco desalinhadas: deslocadas na página, ou com um tamanho ligeiramente diferente. Se o desenho vermelho não encaixa no preto, escolha **Alinhar por dois pontos** e clique quatro vezes:

1. um ponto no desenho antigo (vermelho), como o centro de um pilar ou um canto do edifício,
2. o mesmo ponto no desenho novo (preto),
3. um segundo ponto no desenho vermelho, longe do primeiro,
4. o mesmo ponto no desenho preto.

O desenho vermelho desloca-se, roda e ajusta a escala até ficar sobre o preto. A barra de estado indica quanto maior é o desenho novo (« tamanho × 1.000 » quando é igual). Faça zoom para os cliques: quanto mais perto clicar, melhor o ajuste.

## Encontrar alterações

Escolha **Encontrar alterações**. O TakeoffCraft compara os traços dos dois desenhos: os traços só na folha antiga ficam vermelhos, os traços só na folha nova ficam azuis, e a barra de estado conta-os. Linhas que se deslocaram ligeiramente (uma nova impressão) não são contadas como alterações.

Também analisa todas as marcações da folha antiga e conta as que estão onde o desenho mudou:

- um troço ou uma área quando o desenho mudou numa das extremidades ou num canto, ou ao longo de pelo menos cerca de um sexto do seu comprimento;
- uma contagem quando algo mudou mesmo ao lado dela.

## Mover a medição

Escolha **Mover a medição para aqui**. Todas as marcações da folha antiga passam para a nova, através do alinhamento, num único passo para anular. As que estão junto de uma alteração ficam assinaladas: são desenhadas com um halo laranja, e a barra da folha mostra « (n) a verificar ».

Se a folha nova não tinha escala, fica com a escala da folha antiga (ajustada quando os desenhos tiveram de ser redimensionados para alinhar). Se já tinha outra escala diferente, o TakeoffCraft pergunta primeiro: as marcações movidas são medidas à escala da folha nova.

## Verificar as marcações assinaladas

1. Escolha « (n) a verificar » na barra da folha. Faz zoom para a marcação assinalada seguinte e seleciona-a; o seu painel diz porque está assinalada.
2. Corrija a marcação se o desenho mudou por baixo dela (arraste os seus cantos, acrescente ou apague marcações, ou retire-a e volte a medi-la).
3. Escolha **Verificado** no painel. A assinalação desaparece e a contagem na barra da folha diminui.

As assinalações ficam guardadas com a medição, por isso pode verificá-las mais tarde.

:::note
Comparar funciona tanto em PDF vetoriais como em digitalizações, porque compara o que está desenhado. Uma digitalização torta ou esticada pode alinhar-se apenas de forma aproximada com dois pontos; nesse caso, verifique mais marcações a olho.
:::
