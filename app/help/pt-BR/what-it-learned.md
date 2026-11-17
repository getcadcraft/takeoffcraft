---
title: O que o TakeoffCraft aprendeu com seus levantamentos
summary: O TakeoffCraft guarda os símbolos que você confirmou com a Contagem automática, seus conjuntos de condições, as composições que você mais usa e os padrões que você repete em todas as páginas, tudo dentro do próprio arquivo do levantamento. Veja, use e exclua.
keywords: aprender, aprendido, aprendizado, assistente, lembrar, símbolos, modelos, igual ao último trabalho, último trabalho, conjunto de condições, condições, reutilizar, composições, mais usadas, sugestões, repetir em todas as páginas, todas as páginas, legenda, padrão, limpar tudo, esquecer, privacidade
from: 54d99e99
---

O TakeoffCraft fica mais rápido quanto mais levantamentos você faz com ele. Ele aprende **somente com o que você aceita**:

- os símbolos que você delimitou com a [Contagem automática](topic:auto-count) e depois adicionou,
- os conjuntos de condições que você salvar,
- as composições que você usar (uma vez por trabalho),
- os padrões de marcações que você repete em todas as páginas.

É uma correspondência simples nas suas próprias folhas, a mesma busca que a Contagem automática faz. Não é um modelo treinado. Tudo o que ele aprende fica **no arquivo deste levantamento** (`.takeoff.json`), e nada é enviado para lugar nenhum. Para levar isso ao próximo trabalho, use [Igual ao último trabalho](topic:what-it-learned#same-as-last-job).

Escolha {{ui:Aprendido}} na barra de ferramentas (a lâmpada, ao lado de {{ui:Contagem automática}}) para ver tudo.

## Símbolos

Quando você delimita um símbolo com {{ui:Contagem automática}} e escolhe {{ui:Adicionar}}, o símbolo delimitado é guardado, com o nível de correspondência que você aceitou.

- Em {{ui:Aprendido}}, escolha {{ui:Encontrar nesta folha}} ou {{ui:Encontrar em todas as folhas}}. Abre a revisão habitual da Contagem automática: clique em uma caixa para deixá-la de fora, mova o controle deslizante e depois adicione. Nada é adicionado até você fazer isso.
- Ao abrir uma folha que ainda não tem nenhum dos símbolos aprendidos, uma barra no topo oferece {{ui:Encontrar …}} para ele. {{ui:Agora não}} a oculta para aquela folha.
- Se o levantamento não tiver um item com esse nome, adicionar as marcações também adiciona o item (uma etapa de desfazer).
- Adicionar de novo o símbolo do mesmo item conta para o que ele já conhece; um símbolo de aparência diferente é guardado como um segundo.
- Como a Contagem automática, ele encontra o símbolo em ângulos retos e em folhas com outra escala.

## Conjuntos de condições

Um conjunto guarda as condições de um levantamento (itens com suas unidades, preços unitários, perda e composições), sem as marcações.

1. Em {{ui:Aprendido}}, escolha {{ui:Salvar as condições deste levantamento como um conjunto…}} e dê um nome a ele. Um conjunto com o mesmo nome é substituído.
2. Em um levantamento que tenha o conjunto, {{ui:Adicionar}} inclui as condições que ele ainda não tem. Condições com o mesmo nome e tipo são mantidas como estão. É uma etapa de desfazer.

## Igual ao último trabalho

O arquivo do último trabalho guarda o que ele aprendeu. Para começar um novo trabalho a partir dele:

1. Abra as novas plantas e escolha {{ui:Aprendido}} › {{ui:Igual ao último trabalho…}}.
2. Escolha o `.takeoff.json` do último trabalho.
3. Marque o que trazer: as condições dele (somente as que este levantamento não tem) e o que ele aprendeu (símbolos, conjuntos, composições, padrões). Depois, {{ui:Trazer}}.

As condições dele também são guardadas como um conjunto com o nome desse trabalho. As marcações e quantidades ficam no arquivo próprio dele. Tudo isso é uma única etapa de desfazer.

## Composições que você mais usa

Um item que tem uma composição conta como usado uma vez por trabalho quando tem uma quantidade e você salva o levantamento. Um trabalho é o conjunto de arquivos de planta de onde o levantamento é feito, então salvar de novo o mesmo levantamento não conta duas vezes. A lista em {{ui:Composições que você mais usa}} coloca primeiro as que você mais usa. Ela deixa de fora as que este levantamento já tem. {{ui:Adicionar}} coloca uma delas como você a usou por último, com todas as suas partes.

## Repetir em todas as páginas

Para marcações iguais em todas as páginas de um conjunto, como a contagem de uma legenda ou um detalhe típico:

1. Selecione as marcações em uma folha ([Selecionar as marcações](topic:copy-paste#select-the-marks)).
2. Em {{ui:Aprendido}}, escolha {{ui:Repetir as marcações selecionadas em todas as páginas…}}, dê um nome ao padrão e confirme.

Elas vão para todas as outras páginas abertas **do mesmo tamanho**, no mesmo lugar, em uma única etapa de desfazer. Comprimentos e áreas só vão para páginas com a mesma escala; contagens vão para qualquer página desse tamanho. Uma página que já as tenha é ignorada. O padrão fica guardado, então as páginas que você abrir depois recebem a oferta na barra, ou você usa {{ui:Repetir em todas as páginas}} na lista.

## Ver, excluir

Tudo o que foi aprendido aparece em {{ui:Aprendido}}. A lixeira exclui um item. {{ui:Limpar tudo}} exclui tudo o que foi aprendido e deixa seus itens e marcações intactos. As duas ações podem ser desfeitas até você fechar o levantamento, e ambas são salvas com ele.

Para parar de aprender em um levantamento, desmarque {{ui:Aprender com este levantamento}}. Nada novo é aprendido, e o que está listado permanece até você excluí-lo.

## Vale saber

- Versões anteriores do TakeoffCraft abrem um arquivo com coisas aprendidas normalmente. Elas ignoram essa parte e a descartam se salvarem o arquivo de novo.
- Um símbolo aprendido é uma pequena imagem do que você delimitou, guardada no arquivo (alguns quilobytes cada).
- Símbolos aprendidos são pesquisados como a Contagem automática pesquisa, então os mesmos limites se aplicam: [Contar um símbolo com a Contagem automática](topic:auto-count).
