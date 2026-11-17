---
title: Grupos-tipo
summary: Faça o levantamento de uma unidade, cômodo ou pavimento típico uma vez e conte-o quantas vezes ele se repetir, altere a contagem depois e veja quais marcações são típicas.
keywords: tipo, grupo-tipo, repetição, contagem de repetições, multiplicar, vezes, unidade, quarto de hotel, apartamento, pavimento tipo, x24, cópias
from: 42c3a372
---

Um edifício costuma ter repetições: 24 quartos de hotel idênticos, 6 pavimentos tipo, 40 vagas de estacionamento com a mesma sinalização. Um **grupo-tipo** permite fazer o levantamento de um deles e contá-lo quantas vezes ele se repetir, sem desenhar as cópias.

## Criar um grupo-tipo

1. Faça o levantamento de uma unidade: suas paredes, seu piso, suas tomadas — quaisquer itens.
2. Selecione suas marcações com a ferramenta {{ui:Select}}: clique em uma, depois {{key:Shift}} + clique nas outras ([Selecione as marcações](topic:copy-paste#select-the-marks)).
3. Em **Marcação selecionada**, abra {{ui:Typical}} e escolha {{ui:New typical group…}}.
4. Dê a ele um nome (`Unit A`) e o número de repetições (`24`), depois escolha {{ui:Make group}}.

Cada quantidade dessas marcações agora conta 24 vezes: um trecho de parede de 10 ft dá 240 ft, um piso de 80 SF dá 1,920 SF, duas tomadas dão 48. Os custos acompanham, e as fórmulas das composições veem os totais repetidos (`N` também conta cada trecho 24 vezes).

Na folha, uma caixa tracejada envolve as marcações do grupo com seu nome e sua contagem, como **Unit A ×24**.

## Alterar depois

Os grupos aparecem em **Grupos-tipo** no painel da direita:

- Altere o número depois de **×** para mudar quantas vezes ele conta (de 1 a 10,000). Todas as quantidades são atualizadas.
- Renomeie-o na caixa de nome.
- O ícone de caixa seleciona suas marcações (e mostra a folha delas).
- A lixeira exclui o grupo. As marcações permanecem, contadas uma vez.

Para adicionar marcações a um grupo ou tirá-las dele, selecione-as e escolha o grupo (ou {{ui:Não é tipo (×1)}}) em {{ui:Tipo}}.

## Bom saber

- As marcações de um grupo podem estar em várias folhas e ser de quaisquer itens. Cada marcação pertence, no máximo, a um grupo.
- Cópias que você cola não entram no grupo: uma cópia colada de uma unidade típica contaria 24 vezes de novo. Use um grupo para "a mesma coisa N vezes", e copie e cole para as cópias que você desenha.
- As marcações são desenhadas uma vez, então a vista 3D e o PDF marcado mostram uma unidade; as quantidades, as exportações e a tabela por folha a contam ×N. A folha **Marcações** da exportação para Excel informa quais marcações são típicas e quantas vezes elas contam.
- Com áreas de proposta, as marcações de um grupo contam ×N na própria área de proposta.
