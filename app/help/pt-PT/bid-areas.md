---
title: Áreas da proposta
summary: Marque as marcas por edifício, piso ou fase, faça a medição numa área de cada vez e leia as quantidades e os custos de cada área.
keywords: variante de acréscimo, variante de dedução, proposta base, variantes, área da proposta, área, edifício, piso, nível, fase, zona, variante, discriminação, divisão, piso típico, subtotal, por área
from: 64f3d41c
---

Uma área da proposta é uma parte da obra que se preça em separado: um edifício, um piso, uma fase, uma ala. Cada marca pode estar numa área da proposta. As quantidades e a estimativa podem então ser lidas por área, com um subtotal para cada uma, enquanto o total da obra continua a ser a soma de tudo.

## Criar uma área da proposta

1. No topo do painel {{ui:Artigos}}, abra a lista {{ui:Área da proposta}}.
2. Escolha **Nova área da proposta…**, escreva um nome como "Edifício A" ou "Piso 2", e escolha **Criar**.
   A nova área passa a ser a atual. A barra de estado diz "As novas marcas vão para (nome). As marcas noutras áreas da proposta ficam esbatidas."

## Medir numa área

Enquanto uma área da proposta estiver escolhida na lista, cada nova marca entra nela: percursos, áreas, círculos, contagens, as marcas que {{ui:Contagem automática}} adiciona, e o que colar. As marcas noutras áreas da proposta, e as marcas em nenhuma, ficam esbatidas na folha, para que se veja o que pertence a cada sítio.

Escolha **Sem área da proposta** na lista para medir sem uma; nesse caso, nada fica esbatido.

:::tip
Pisos típicos: meça o Piso 2, selecione as suas marcas ({{key:Mod+A}} na folha), copie-as, escolha Piso 3 na lista e cole. As cópias vão para o Piso 3. Quando os pisos são iguais e não precisa de os separar, um [grupo típico](topic:typical-groups) conta um piso várias vezes.
:::

## Mover marcas para outra área

Selecione uma marca ou várias ({{key:Shift}} + clique, ou {{key:Mod+A}}). Em **Marca selecionada** (ou **Marcas selecionadas**), escolha a área no campo {{ui:Área da proposta}}. A barra de estado diz "3 marcas movidas para Piso 2." É um único passo de anulação.

## Mudar o nome, reordenar ou eliminar

Escolha **Gerir áreas da proposta…** na lista. Escreva por cima de um nome para o mudar, use as setas para alterar a ordem (as tabelas e o livro de cálculo seguem-na), ou elimine uma com o ícone do caixote. Eliminar uma área da proposta mantém as suas marcas: ficam então em nenhuma área da proposta. {{key:Mod+Z}} anula cada alteração.

## Ler as quantidades por área

Na tabela {{ui:Quantidades}}, escolha {{ui:Por área}} (aparece quando a medição tem uma área da proposta). Cada área lista os artigos que contém, com a respetiva quantidade, unidade e total, e depois uma linha de subtotal. As marcas sem área da proposta vêm por último, como **Sem área da proposta**. Clique numa linha de artigo para realçar o artigo e tornar essa área a atual.

Os preços compostos são calculados para cada área a partir dos totais dessa própria área. Uma fórmula que arredonda para cima, como `ceil(L / 4)`, pode então dar um pouco mais nas áreas somadas do que para a obra inteira, como aconteceria numa proposta preçada área a área.

## Variantes: proposta base mais acréscimos e deduções

Uma área da proposta pode ser uma **variante**: trabalho que o dono pode acrescentar à proposta, ou retirar dela. Em **Gerir áreas da proposta…**, cada área tem uma lista ao lado do nome:

| Opção | O que faz |
|---|---|
| {{ui:Proposta base}} | Na proposta, como habitualmente. |
| {{ui:Variante de acréscimo}} | Preçada à parte e **deixada de fora da proposta base**: uma melhoria de carpete, uma cobertura extra. |
| {{ui:Variante de dedução}} | Na proposta base, e oferecida como dedução: "eliminar a cobertura". |

Meça o trabalho de uma variante para a sua área da proposta como qualquer outra área. Quando a medição tiver uma variante:

- O cabeçalho da tabela {{ui:Quantidades}} diz **Proposta base** em vez de Total da obra: toda a medição sem as variantes de acréscimo.
- {{ui:Por área}} termina com a proposta base e uma linha por variante: **+$300.00** para um acréscimo, **−$1,050.00** para uma dedução.
- Uma variante preça apenas os artigos que têm marcas nela, com os seus preços compostos, para que a parte de preço composto de outro artigo não entre por acidente.

Nas exportações, o CSV termina com a proposta base e as variantes, e o livro de cálculo ganha uma folha **Variantes**: a proposta base, os artigos de cada variante e a respetiva alteração, e a proposta base com todas as variantes de acréscimo retiradas.

## Na exportação

{{ui:XLSX}} acrescenta uma folha **Por área da proposta**: os artigos e componentes de cada área, com quantidade, quantidade com desperdício, material, mão de obra e total, um subtotal por área (uma fórmula `SUM`) e **Todas as áreas da proposta** no fim. A folha **Marcas** ganha uma coluna **Área da proposta**. Uma medição sem áreas da proposta exporta-se como antes. Veja [Colunas de exportação](topic:export-columns).

As áreas da proposta ficam guardadas no ficheiro do projeto, juntamente com as marcas.
