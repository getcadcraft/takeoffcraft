---
title: O que aprendeu com as suas medições
summary: O TakeoffCraft guarda os símbolos que confirmou com a Contagem automática, os seus conjuntos de condições, os preços compostos que mais usa e os padrões que repete em todas as páginas, tudo dentro do próprio ficheiro da medição. Veja-os, use-os, elimine-os.
keywords: aprender, aprendido, aprendizagem, assistente, lembrar, símbolos, modelos, igual ao último trabalho, último trabalho, conjunto de condições, condições, reutilizar, preços compostos, mais usados, sugestões, repetir em todas as páginas, todas as páginas, legenda, padrão, limpar tudo, esquecer, privacidade
from: 54d99e99
---

O TakeoffCraft fica mais rápido quanto mais medições fizer com ele. Aprende **apenas com o que aceita**:

- os símbolos que enquadrou com a [Contagem automática](topic:auto-count) e depois acrescentou,
- os conjuntos de condições que guarda,
- os preços compostos que usa (uma vez por trabalho),
- os padrões de marcas que repete em todas as páginas.

Trata-se de uma simples correspondência nas suas próprias folhas, a mesma pesquisa que a Contagem automática faz. Não é um modelo treinado. Tudo o que aprende fica **no ficheiro desta medição** (`.takeoff.json`), e nada é enviado para lado nenhum. Para levar isso para o próximo trabalho, use [Igual ao último trabalho](topic:what-it-learned#same-as-last-job).

Escolha {{ui:Aprendido}} na barra de ferramentas (a lâmpada, ao lado de {{ui:Contagem automática}}) para ver tudo.

## Símbolos

Quando enquadra um símbolo com {{ui:Contagem automática}} e escolhe {{ui:Adicionar}}, o símbolo que enquadrou fica guardado, com o nível de correspondência que aceitou.

- Em {{ui:Aprendido}}, escolha {{ui:Procurar nesta folha}} ou {{ui:Procurar em todas as folhas}}. Abre-se a revisão habitual da Contagem automática: clique numa caixa para a deixar de fora, mova o deslizador e depois acrescente-os. Nada é acrescentado enquanto não o fizer.
- Quando abre uma folha que ainda não tem nenhum dos símbolos aprendidos, uma barra no topo oferece {{ui:Procurar …}} para esse símbolo. {{ui:Agora não}} oculta-a para essa folha.
- Se a medição não tiver nenhum artigo com esse nome, ao acrescentar as marcas também se acrescenta o artigo (um só passo de anulação).
- Acrescentar de novo o símbolo de um mesmo artigo conta para o que já conhece; um símbolo com outro aspeto fica guardado como um segundo.
- Tal como a Contagem automática, encontra o símbolo em ângulos retos e em folhas com outra escala.

## Conjuntos de condições

Um conjunto guarda as condições de uma medição (artigos com as suas unidades, preços unitários, desperdício e preços compostos), sem marcas.

1. Em {{ui:Aprendido}}, escolha {{ui:Guardar as condições desta medição como conjunto…}} e dê-lhe um nome. Um conjunto com o mesmo nome é substituído.
2. Numa medição que tenha o conjunto, {{ui:Adicionar}} acrescenta as condições que ainda não tem. As condições com o mesmo nome e tipo ficam como estão. É um só passo de anulação.

## Igual ao último trabalho

O ficheiro do último trabalho guarda o que ele aprendeu. Para começar um novo trabalho a partir dele:

1. Abra as novas plantas e escolha {{ui:Aprendido}} › {{ui:Igual ao último trabalho…}}.
2. Escolha o `.takeoff.json` do último trabalho.
3. Marque o que quer trazer: as condições desse trabalho (apenas as que esta medição ainda não tem) e o que aprendeu (símbolos, conjuntos, preços compostos, padrões). Depois, {{ui:Trazê-los}}.

As condições desse trabalho ficam também guardadas como conjunto com o nome do trabalho. As marcas e quantidades ficam no ficheiro próprio. Tudo isto é um só passo de anulação.

## Preços compostos que mais usa

Um artigo que tem preço composto conta como usado uma vez por trabalho quando tem uma quantidade e guarda a medição. Um trabalho é o conjunto de ficheiros de plantas de que a medição é feita, por isso voltar a guardar a mesma medição não conta duas vezes. A lista em {{ui:Preços compostos que mais usa}} põe primeiro os que usa mais. Deixa de fora os que esta medição já tem. {{ui:Adicionar}} acrescenta um como o usou da última vez, com todas as suas partes.

## Repetir em todas as páginas

Para marcas que são iguais em todas as páginas de um conjunto, como a contagem de uma legenda ou um detalhe típico:

1. Selecione as marcas numa folha ([Selecionar as marcas](topic:copy-paste#select-the-marks)).
2. Em {{ui:Aprendido}}, escolha {{ui:Repetir as marcas selecionadas em todas as páginas…}}, dê um nome ao padrão e confirme.

Ficam em todas as outras páginas abertas **do mesmo tamanho**, no mesmo sítio, num só passo de anulação. Comprimentos e áreas só vão para páginas com a mesma escala; as contagens vão para qualquer página desse tamanho. Uma página que já as tem é ignorada. O padrão fica guardado, por isso as páginas que abrir mais tarde recebem a oferta na barra, ou pode usar {{ui:Repetir em todas as páginas}} na lista.

## Ver e eliminar

Tudo o que foi aprendido está listado em {{ui:Aprendido}}. O botão de lixo elimina uma coisa de cada vez. {{ui:Limpar tudo}} elimina tudo o que foi aprendido e deixa os seus artigos e marcas intactos. Ambas as ações podem ser anuladas até fechar a medição, e ambas ficam guardadas com a medição.

Para parar de aprender numa medição, desmarque {{ui:Aprender com esta medição}}. Nada de novo é aprendido, e o que está listado fica até o eliminar.

## Bom saber

- As versões anteriores do TakeoffCraft abrem um ficheiro com coisas aprendidas normalmente. Ignoram essa parte e eliminam-na se voltarem a guardar o ficheiro.
- Um símbolo aprendido é uma pequena imagem do que enquadrou, guardada no ficheiro (alguns quilobytes cada).
- Os símbolos aprendidos são pesquisados da mesma forma que a Contagem automática pesquisa, por isso aplicam-se os mesmos limites: [Contagem automática de um símbolo](topic:auto-count).
