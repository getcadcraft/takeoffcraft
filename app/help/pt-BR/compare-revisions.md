---
title: Comparar uma folha revisada e mover o levantamento
summary: Sobreponha a folha antiga à sua revisão, alinhe as duas, veja o que mudou e mova o levantamento para a folha nova, com as marcações a verificar sinalizadas.
keywords: revisão, revisado, comparar, sobreposição, antigo, novo, mudanças, adendo, boletim, reemissão, mover levantamento, transferir, levar adiante, alinhar, sinalizado, verificar
from: 3a1d9fe0
---

Quando uma folha é reemitida, você não precisa levantá-la de novo. Abra o PDF antigo e o novo, compare as duas folhas e mova o levantamento de uma para a outra. O TakeoffCraft sinaliza cada marcação em que o desenho mudou, para que você verifique essas e mantenha as demais.

## Comparar

1. Abra os dois PDFs: o conjunto antigo e o revisado ({{ui:Abrir plantas}}; podem estar em um arquivo ou em vários).
2. Mostre a folha **nova**.
3. Escolha {{ui:Comparar}} na barra da folha, abaixo do desenho.
4. Escolha a folha antiga na lista. O TakeoffCraft sugere a folha com o mesmo número no outro PDF, ou a mesma página. Escolha **Comparar**.

O desenho antigo agora fica sobre o novo, em vermelho. Onde as duas coincidem, as linhas vermelhas ficam sobre as pretas; onde diferem, você vê apenas linhas vermelhas (removidas) e apenas linhas pretas (adicionadas). Uma barra na parte inferior da folha reúne as etapas abaixo; {{key:Esc}} ou {{ui:Fechar}} encerra a comparação.

## Alinhar

Folhas reemitidas costumam ser plotadas um pouco fora do lugar: deslocadas na página ou em um tamanho ligeiramente diferente. Se o desenho vermelho não encaixa no preto, escolha **Alinhar por dois pontos** e clique quatro vezes:

1. um ponto no desenho antigo (vermelho), como o centro de um pilar ou um canto do edifício,
2. o mesmo ponto no desenho novo (preto),
3. um segundo ponto no desenho vermelho, distante do primeiro,
4. o mesmo ponto no desenho preto.

O desenho vermelho se desloca, gira e se ajusta à escala do preto. A barra de status informa quanto maior é o desenho novo ("tamanho × 1.000" quando é o mesmo). Amplie para fazer os cliques: quanto mais perto você clicar, melhor o encaixe.

## Encontrar o que mudou

Escolha **Encontrar mudanças**. O TakeoffCraft compara a tinta dos dois desenhos: tinta só na folha antiga fica vermelha, tinta só na folha nova fica azul, e a barra de status as conta. Linhas que se deslocaram um pouco (uma replotagem) não são contadas como mudanças.

Ele também analisa cada marcação na folha antiga e conta aquelas que estão onde o desenho mudou:

- um trecho ou uma área, quando o desenho mudou em uma de suas extremidades ou cantos, ou ao longo de pelo menos cerca de um sexto do seu comprimento;
- uma contagem, quando algo mudou logo ao lado dela.

## Mover o levantamento

Escolha **Mover levantamento aqui**. Cada marcação da folha antiga se move para a nova, pelo alinhamento, em um único passo para desfazer. As que estão perto de uma mudança ficam sinalizadas: são desenhadas com um halo laranja, e a barra da folha mostra "(n) a verificar".

Se a folha nova não tinha escala, ela recebe a escala da folha antiga (ajustada quando os desenhos precisaram ser redimensionados para alinhar). Se já tinha uma escala diferente, o TakeoffCraft pergunta antes: as marcações movidas são medidas na escala da folha nova.

## Verificar as marcações sinalizadas

1. Escolha "(n) a verificar" na barra da folha. Ele aproxima a visualização até a próxima marcação sinalizada e a seleciona; o painel dela diz por que está sinalizada.
2. Corrija a marcação se o desenho mudou por baixo dela (arraste seus cantos, adicione ou apague marcações, ou remova-a e refaça o levantamento).
3. Escolha **Verificado** no painel dela. A sinalização some, e a contagem na barra da folha diminui.

As sinalizações são salvas com o levantamento, então você pode verificá-las depois.

:::note
Comparar funciona tanto em PDFs vetoriais quanto em digitalizações, porque compara o que está desenhado. Uma digitalização torta ou esticada pode alinhar só de forma aproximada com dois pontos; confira mais marcações a olho nesse caso.
:::
