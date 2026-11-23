---
title: Tamanhos de página e nomes de papel
summary: Veja o tamanho de cada folha em milímetros e polegadas e o nome do papel (séries A, B e C, ANSI, ARCH), e agrupe um conjunto misto por tamanho para encontrar as folhas fora do padrão.
keywords: tamanho de página, tamanho de papel, nome do papel, a0, a1, a2, a3, a4, série b, série c, ansi, arch, arquitetônico, mm, polegadas, tamanho personalizado, por tamanho, tamanho fora do padrão, conjunto misto, escala, conjunto de plantas, mediabox, rotação
from: 9c061c07
---

Uma escala só tem sentido no papel certo. {{ui:TakeoffCraft}} lê o tamanho de cada folha PDF e nomeia o papel, para que você veja uma folha que foi impressa em outro tamanho antes de confiar em uma medição nela.

## O que você vai fazer

Olhe o tamanho da folha aberta e depois agrupe o conjunto inteiro por tamanho.

## Passos

1. Abra as plantas ({{ui:Abrir plantas}}).
2. A barra de folhas acima do desenho mostra o nome do papel da folha aberta e o tamanho dela, por exemplo "A1 · 594 × 841 mm".
3. Cada linha da lista {{ui:Folhas}} tem uma linha de tamanho abaixo do nome da folha.
4. Escolha {{ui:Por tamanho}} no cabeçalho de {{ui:Folhas}}. A lista reúne as folhas sob um título por tamanho, o grupo maior primeiro, e marca como fora do padrão um tamanho com poucas folhas.
5. Escolha {{ui:Por tamanho}} de novo para voltar à ordem do próprio conjunto.

Uma folha DWG ou DXF não tem papel, por isso nenhum tamanho é mostrado para ela.

## Como o nome é escolhido

- O tamanho vem da caixa da página no PDF, com a rotação aplicada.
- Os nomes são as séries A e B (ISO 216), a série C (ISO 269), ANSI A a E e ARCH A a E.
- Uma página a menos de 2 mm de um tamanho nomeado recebe esse nome. Qualquer outra página aparece como personalizado, com o tamanho nomeado mais próximo e a diferença entre eles.

## No orçamento

A planilha de orçamento tem uma aba {{ui:Tamanhos de página}} com a contagem de cada tamanho.

:::note
Os valores em polegadas de ANSI e ARCH foram digitados a partir das tabelas publicadas e ainda não foram comparados com as normas impressas.
:::
