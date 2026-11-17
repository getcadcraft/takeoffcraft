---
title: Contar tudo no conjunto
summary: Envolva uma legenda de símbolos uma vez, e o TakeoffCraft conta cada símbolo dela em todas as folhas abertas em uma só execução. Cada contagem é um link para a sua folha, e você revisa antes de adicionar qualquer coisa.
keywords: contar tudo, legenda, legenda de símbolos, conjunto inteiro, todas as folhas, cada porta, cada luminária, dispositivos, quadro, símbolos, contagem automática, contar tudo, conjunto de plantas, 200 folhas, nível de correspondência, parecido
from: adc99744
---

{{ui:Contar tudo}} lê uma legenda de símbolos e depois conta cada símbolo dela em todas as folhas abertas. É a {{ui:Contagem automática}} para uma legenda inteira de uma vez. É apenas correspondência de símbolos nas suas próprias folhas, não um modelo treinado, e nada sai do seu computador. Revise as contagens antes de adicioná-las: é um auxiliar, não uma garantia.

## Contar uma legenda

1. Abra as plantas. Serve uma legenda em qualquer folha: os símbolos com seus nomes ao lado.
2. Escolha {{ui:Contar tudo}} na barra de ferramentas.
3. Arraste uma caixa em volta da legenda, símbolos e nomes. Um título sem símbolo ao lado (LEGENDA DE SÍMBOLOS) fica de fora sozinho.
   O painel lista cada símbolo com a sua imagem e o nome impresso ao lado. O nome vira o nome do item, então renomeie aqui se quiser.
4. Desmarque qualquer símbolo que não queira contado. Um símbolo que não pode ser pesquisado (pequeno demais ou em branco) informa o motivo.
5. Escolha {{ui:Contar em N folhas}}. Uma barra mostra a folha que está sendo pesquisada; {{ui:Cancelar}} interrompe a execução. A página continua disponível.

Os próprios símbolos da legenda não são contados na sua folha. Uma folha desenhada em outra escala é pesquisada nessa escala, e os símbolos são encontrados girados em qualquer ângulo reto.

## Revisar as contagens

- Cada símbolo mostra seu total e, abaixo dele, um link por folha que tenha algum ("E-103: 4"). Clique em um para ir a essa folha. As ocorrências ficam em caixas na cor do item.
- **Clique em uma caixa** para deixar aquela ocorrência de fora. Ela fica tracejada e riscada; clique de novo para trazê-la de volta.
- **Ajuste o nível de correspondência** (de 50% a 100%, começando no seu nível em Configurações). Um valor mais alto mantém só as correspondências próximas. O controle apenas filtra o que foi encontrado; nada é pesquisado de novo.
- Dois símbolos parecidos (uma tomada dupla e uma quádrupla) podem corresponder ao mesmo ponto. A melhor correspondência fica com ele, e o painel informa em quantos pontos isso aconteceu, para que você possa conferir.
- Uma folha grande demais para ser pesquisada no tamanho do símbolo é ignorada, e o painel informa isso.

## Adicioná-las

Escolha {{ui:Adicionar N marcações}}. Cada símbolo vira um item de contagem com uma marcação em cada ocorrência. Um nome que já é um item de contagem seu é reaproveitado (nada é duplicado onde você já marcou à mão). Toda a execução é um único passo: {{key:Ctrl+Z}} desfaz todos os itens e marcações.

O que você aceita também alimenta {{ui:Aprendido}}: os símbolos ficam guardados no arquivo do levantamento para a próxima vez.

## Com o seu assistente

Se você permitir assistentes em Configurações, eles podem ler uma legenda (legend_open), executar a contagem em segundo plano (legend_count_start, depois legend_count_status), ler as contagens (legend_count_result) e adicioná-las (legend_count_add, que pode primeiro mostrar uma prévia do que adicionaria). É a mesma execução que você vê no painel.

## Símbolos em qualquer ângulo

Marque {{ui:Símbolos em qualquer ângulo}} antes de contar para encontrar também símbolos desenhados em um ângulo que não seja reto (uma bucha diagonal de parede, uma luminária girada para acompanhar um telhado). A pesquisa então gira cada símbolo a cada 15 graus; um símbolo redondo ainda precisa de uma pesquisa, e um símbolo que não é redondo pode levar até seis vezes mais tempo. Deixe desmarcado para plantas desenhadas em ângulos retos.

## Bom saber

- Precisa de símbolos desenhados do mesmo jeito que na legenda. Uma legenda desenhada em um tamanho diferente das folhas é aceitável quando as escalas das folhas estão definidas; sem escalas, os símbolos são pesquisados no tamanho da legenda.
- Um símbolo com uma parede ou uma linha longa atravessando-o pode não ser encontrado, porque deixa de se parecer com a imagem da legenda. Confira as ocorrências na primeira folha antes de confiar no resto.
- Uma digitalização sem texto também funciona: os símbolos são encontrados pela sua posição nas linhas da legenda, e você digita os nomes.
