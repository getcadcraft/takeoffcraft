---
title: Contar tudo no conjunto
summary: Desenhe uma caixa em volta de uma legenda de símbolos uma vez e o TakeoffCraft conta cada símbolo dela em todas as folhas abertas, num só passo. Cada contagem é uma ligação para a sua folha, e reveja antes de acrescentar.
keywords: contar tudo, legenda, legenda de símbolos, conjunto completo, todas as folhas, cada folha, todas as portas, todos os equipamentos, dispositivos, mapa, símbolos, contagem automática, contar todos, conjunto de plantas, 200 folhas, nível de correspondência, parecidos
from: adc99744
---

{{ui:Contar tudo}} lê uma legenda de símbolos e depois conta cada símbolo dela em todas as folhas abertas. É a {{ui:Contagem automática}} para uma legenda inteira de uma vez. É apenas correspondência de símbolos nas suas próprias folhas, não um modelo treinado, e nada sai do computador. Reveja as contagens antes de as acrescentar: é uma ajuda, não uma garantia.

## Contar uma legenda

1. Abra as plantas. Serve uma legenda em qualquer folha: os símbolos com os seus nomes ao lado.
2. Escolha {{ui:Contar tudo}} na barra de ferramentas.
3. Arraste uma caixa em volta da legenda, símbolos e nomes. Um título sem símbolo ao lado (SYMBOL LEGEND) fica de fora por si só.
   O painel lista cada símbolo com a sua imagem e o nome impresso ao lado. O nome passa a ser o nome do artigo, por isso renomeie-o aqui se quiser.
4. Desmarque os símbolos que não quer contar. Um símbolo que não pode ser pesquisado (demasiado pequeno, ou em branco) indica o motivo.
5. Escolha {{ui:Contar em N folhas}}. Uma barra mostra a folha que está a ser pesquisada; {{ui:Cancelar}} interrompe a execução. A página continua utilizável.

Os símbolos da própria legenda não são contados na sua folha. Uma folha desenhada a outra escala é pesquisada a essa escala, e os símbolos são encontrados rodados em qualquer ângulo reto.

## Rever as contagens

- Cada símbolo mostra o seu total e, por baixo, uma ligação por cada folha que tenha algum (« E-103: 4 »). Clique numa para ir a essa folha. As ocorrências ficam delimitadas com a cor do artigo.
- **Clique numa caixa** para deixar essa ocorrência de fora. Fica a tracejado e riscada; clique de novo para a repor.
- **Mova o nível de correspondência** (de 50% a 100%, a começar no nível das suas Definições). Um valor mais alto mantém apenas as correspondências próximas. A barra deslizante só filtra o que foi encontrado; nada é pesquisado de novo.
- Dois símbolos parecidos (uma tomada dupla e uma quádrupla) podem corresponder ao mesmo sítio. A melhor correspondência fica com ele, e o painel indica em quantos sítios isso aconteceu, para que os possa verificar.
- Uma folha grande demais para pesquisar à dimensão do símbolo é ignorada, e o painel diz isso.

## Acrescentar

Escolha {{ui:Adicionar N marcações}}. Cada símbolo torna-se um artigo de contagem com uma marcação em cada ocorrência. Um nome que já é um artigo de contagem seu é reutilizado (nada é duplicado onde já marcou à mão). A execução inteira é um só passo: {{key:Ctrl+Z}} retira todos os artigos e marcações.

O que aceita também alimenta {{ui:Aprendido}}: os símbolos ficam guardados no ficheiro da medição para a próxima vez.

## Com o assistente

Se permitir assistentes nas Definições, estes podem ler uma legenda (legend_open), executar a contagem em segundo plano (legend_count_start, depois legend_count_status), ler os resultados (legend_count_result) e acrescentá-los (legend_count_add, que pode primeiro mostrar uma pré-visualização do que acrescentaria). É a mesma execução que vê no painel.

## Símbolos em qualquer ângulo

Marque {{ui:Símbolos em qualquer ângulo}} antes de contar para encontrar também símbolos desenhados num ângulo que não é reto (uma bucha de parede na diagonal, um equipamento rodado para seguir um telhado). A pesquisa roda então cada símbolo de 15 em 15 graus; um símbolo redondo continua a precisar de uma pesquisa, e um símbolo que não é redondo pode demorar até seis vezes mais. Deixe-o desmarcado para plantas desenhadas em esquadria.

## Bom saber

- Precisa de símbolos desenhados da mesma forma que na legenda. Uma legenda desenhada a uma dimensão diferente das folhas é aceitável quando as escalas das folhas estão definidas; sem escalas, os símbolos são pesquisados à dimensão da legenda.
- Um símbolo com uma parede ou uma linha longa desenhada a atravessá-lo pode não ser encontrado, porque já não parece a imagem da legenda. Verifique as ocorrências na primeira folha antes de confiar no resto.
- Uma digitalização sem texto continua a funcionar: os símbolos são encontrados pelas filas em que estão, e escreve os nomes.
