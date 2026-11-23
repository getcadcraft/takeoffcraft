---
title: Formatos das páginas e nomes do papel
summary: Ver o tamanho de cada folha em milímetros e polegadas e o seu nome de papel (séries A, B e C, ANSI, ARCH), e agrupar um conjunto misto por tamanho para encontrar as folhas diferentes.
keywords: formato da página, formato do papel, nome do papel, a0, a1, a2, a3, a4, série b, série c, ansi, arch, arquitetónico, mm, polegadas, tamanho personalizado, por tamanho, tamanho invulgar, conjunto misto, escala, conjunto de plantas, mediabox, rotação
from: 9c061c07
---

Uma escala só tem significado no papel certo. O {{ui:TakeoffCraft}} lê o tamanho de cada folha PDF e indica o nome do papel, para que veja uma folha impressa a outro tamanho antes de confiar numa medição feita nela.

## O que vai fazer

Veja o tamanho da folha aberta e depois agrupe o conjunto inteiro por tamanho.

## Passos

1. Abra as plantas ({{ui:Open plans}}).
2. A barra da folha, acima do desenho, mostra o nome do papel da folha aberta e o seu tamanho, por exemplo « A1 · 594 × 841 mm ».
3. Cada linha da lista de {{ui:Sheets}} tem uma linha de tamanho por baixo do nome da folha.
4. Escolha {{ui:By size}} no cabeçalho de {{ui:Sheets}}. A lista agrupa as folhas sob um título por tamanho, começando pelo grupo maior, e assinala com um caso isolado um tamanho com apenas algumas folhas.
5. Escolha {{ui:By size}} de novo para voltar à ordem própria do conjunto.

Uma folha DWG ou DXF não tem papel, por isso não é mostrado nenhum tamanho.

## Como é escolhido o nome

- O tamanho vem da caixa da página no PDF, com a rotação aplicada.
- Os nomes são as séries A e B (ISO 216), a série C (ISO 269), ANSI A a E e ARCH A a E.
- Uma página com uma diferença de até 2 mm em relação a um tamanho com nome recebe esse nome. Qualquer outra página é indicada como personalizada, com o tamanho com nome mais próximo e a diferença.

## No orçamento

O livro de orçamento tem uma folha de cálculo {{ui:Page sizes}} com a contagem de cada tamanho.

:::note
Os valores ANSI e ARCH em polegadas foram introduzidos a partir das tabelas publicadas e não foram comparados com as normas impressas.
:::
