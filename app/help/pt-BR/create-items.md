---
title: Criar itens de levantamento
summary: Crie itens lineares, de área e de contagem e defina a unidade, a altura ou profundidade, a perda e as taxas de material e de mão de obra.
keywords: equipe, taxa de produção, tamanho da equipe, salário, horas, homem-hora, horas-homem, dias-equipe, horas de mão de obra, item, novo item, condição, multicondição, medir também, vários tipos, ambiente, linear, área, contagem, unidade, altura, profundidade, perda, material, mão de obra, taxa, cor, custo
from: 7fa5effc
---

Um **item** é uma coisa que você mede e precifica: um tipo de parede, um acabamento de piso, um forro, uma porta, uma luminária. Toda marca que você desenha pertence a um item. Outros programas chamam esses itens de condições.

Cada item tem um tipo (e pode receber outros tipos de marcas também, veja [Um item, vários tipos de marcas](topic:create-items#one-item-several-kinds-of-marks)):

| Tipo | Você desenha | Ele informa | Unidades |
|---|---|---|---|
| Linear | Trechos de pontos conectados | Comprimento, número de trechos e área de parede quando tem altura | LF ou m |
| Área | Contornos fechados, com recortes | Área, perímetro, número de áreas | SF, SY, SQ, ac, ha ou m² |
| Contagem | Um clique por coisa | Quantas | EA |
| Quantidade digitada | Nada: você digita a quantidade | O número que você digitou (ou um trazido do CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ou m² |

## Quantidades digitadas (sem desenho)

Algumas coisas em um orçamento nunca são desenhadas: mobilização, licenças, uma contingência, um subcontrato por preço global, o corte e aterro que o CivilCraft calculou. Faça delas uma **Quantidade digitada**:

1. Escolha {{ui:Novo item}}, digite um nome, escolha {{ui:Quantidade digitada (sem desenho)}} e escolha {{ui:Adicionar}}.
2. No editor do item, escolha a {{ui:Unidade}} (LS para um preço global) e digite a {{ui:Quantidade}}: `1`, `2.5` ou `1,250`.
3. Defina perda e taxas como para qualquer outro item. As fórmulas de uma composição usam `Q`, a quantidade, por exemplo `ceil(Q / 12)` cargas de caminhão.

Uma quantidade digitada não recebe marcas e nunca deixa o levantamento incompleto. Quando o levantamento tem áreas da proposta, o editor também tem {{ui:Área da proposta}}: a quantidade então conta nessa área, nas suas alternativas e nos seus totais, da mesma forma que uma marca ali contaria. Quantidades trazidas de outro aplicativo informam de onde vieram; veja [Terraplenagem e cotas de nível](topic:earthwork#cut-and-fill-from-civilcraft).

## Criar um item

1. No painel {{ui:Itens}} à direita, escolha {{ui:Novo item}}.
2. Digite um nome, como `Parede interna tipo A` ou `Placa de carpete`.
3. Escolha o tipo: {{ui:Linear (comprimento)}}, {{ui:Área}} ou {{ui:Contagem}}.
4. Escolha {{ui:Adicionar}} (ou pressione {{key:Enter}}).
   O item aparece na lista com a própria cor, torna-se o item com que você desenha, e o editor dele abre abaixo da lista. A barra de status informa qual ferramenta escolher em seguida.

Pressione {{key:Esc}} no formulário para fechá-lo sem adicionar um item.

:::tip
Se você escolher primeiro uma ferramenta de medição, o TakeoffCraft usa o último item do tipo certo, ou abre o formulário {{ui:Novo item}} com esse tipo já escolhido.
:::

## Escolher o item com que você desenha

Clique em um item na lista. Ele passa a ser o item para o qual as novas marcas vão, e as marcas dele ficam destacadas em todas as folhas enquanto os outros desaparecem. Se a folha aberta não tiver nenhuma marca dele, o TakeoffCraft pula para uma folha que tenha. Clique no item de novo para parar o destaque; ele continua sendo o item com que você desenha.

Clicar em uma marca com a ferramenta {{ui:Selecionar}} também torna o item dela o atual.

## Configurar o item

O editor do item (**Item: (nome)**) tem estes campos. Cada um é salvo ao sair do campo ou pressionar {{key:Enter}}, e cada alteração pode ser desfeita.

| Campo | O que faz |
|---|---|
| {{ui:Nome}} | Mostrado na lista, nas tabelas e nas exportações. |
| {{ui:Digite}} | Linear, Área ou Contagem. Fica bloqueado quando o item tem marcas ("Um item com marcas mantém o seu tipo"). |
| {{ui:Cor}} | A cor das marcas na tela e no PDF marcado. |
| {{ui:Unidade}} | Em que unidade a quantidade é informada: LF ou m para linear; SF, SY, SQ, ac, ha ou m² para área; EA para contagem. |
| {{ui:Medir também}} | Os outros tipos de marcas que o item recebe, cada um com a própria unidade. Veja abaixo. |
| {{ui:Altura}} (linear) | Uma altura de parede. O item então também informa a área da parede (comprimento × altura). Trechos vindos de um modelo do BimCraft trazem suas portas e janelas: elas são descontadas uma vez, e o item informa a área bruta, as aberturas e a líquida. Um levantamento de um projeto do BimCraft que escolheu um método de medição é medido por esse método aqui também (a nota diz qual, com a origem, e informa que não foi verificado por um orçamentista); o método não pode ser alterado no TakeoffCraft. Tijolos ou blocos e argamassa de um tipo de parede chegam como dois componentes: as unidades a pedir e o volume de argamassa. |
| {{ui:Profundidade}} (área) | Uma profundidade ou espessura, usada nas fórmulas de composição (por exemplo, volume de concreto). |
| {{ui:Perda %}} | Somado à quantidade antes da precificação: 10 significa quantidade × 1.10. |
| {{ui:Material $/LF}} | Custo de material por unidade. O rótulo segue a unidade: $/SF, $/EA e assim por diante. |
| {{ui:Mão de obra $/LF}} | Custo de mão de obra por unidade. |
| {{ui:Número CSI}} | Seu número CSI MasterFormat, como `09 21 16` (ou só a divisão, `09`). A planilha Por divisão da pasta de trabalho agrupa os custos por ele. Itens de [pacotes de serviço](topic:trade-packs) já o têm. |

Altura e profundidade aceitam pés e polegadas (`9'-0"`, `8' 6"`) ou pés decimais (`9`) para unidades imperiais, e metros (`2.7`, `2700 mm`) para unidades métricas. As taxas aceitam valores como `12.50` ou `$1,250`, com até quatro casas decimais. Veja [Entrada de comprimento, taxa e percentual](topic:entry-formats).

Abaixo dos campos, **Medido** mostra os totais que as fórmulas do item podem usar, com as suas letras: Comprimento (L), Trechos (N), Área de parede (A) para linear; Área (A), Perímetro (P), Áreas (N) para área; Contagem (N) para contagem.

## Um item, vários tipos de marcas

Algumas coisas são medidas de mais de uma forma: um ambiente tem um piso (uma área), um rodapé ao longo das paredes (um comprimento) e portas (uma contagem). Em vez de três itens, crie um só:

1. Crie o item com o tipo principal, como um item de área `Ambiente 101`.
2. Em {{ui:Medir também}} no editor dele, marque {{ui:Linear}}, {{ui:Contagem}} ou ambos. Cada um recebe uma unidade ao lado.
3. Desenhe com qualquer ferramenta cujo tipo o item recebe: com `Ambiente 101` atual, {{ui:Área}} desenha o piso, {{ui:Linear}} o rodapé e {{ui:Contagem}} as portas. O TakeoffCraft não pede outro item.

A lista de itens mostra cada quantidade (`50.00 SF + 2 EA`). Na tabela de quantidades, a linha do item tem a quantidade principal, e cada outro tipo ganha sua própria linha abaixo, como **Ambiente 101 (contagem)**, com a própria perda e taxas de material e de mão de obra. As exportações, a tabela por folha e a legenda do PDF marcado as listam da mesma forma.

Os campos do tipo principal continuam sendo do tipo principal: a altura ou profundidade, a inclinação, as deduções e a forma 3D se aplicam só às marcas dele. Um trecho de rodapé desenhado para um item de área é medido de forma simples ao longo da planta e aparece plano no 3D. As fórmulas de composição usam os totais do tipo principal.

Um tipo só pode ser desmarcado enquanto o item não tiver marcas desse tipo; exclua-as ou mova-as primeiro para outro item em **Marca selecionada**. Marcas podem ser movidas para qualquer item que receba o tipo delas.

Mais abaixo fica a {{ui:Composição}}: componentes como montantes ou placas, cada um com a própria fórmula e taxas. Veja [Composições e fórmulas](topic:assemblies).

Ao final: {{ui:Mover para cima}} e {{ui:Mover para baixo}} mudam a posição do item na lista e nas exportações, e {{ui:Excluir item}} remove o item com todas as marcas dele (depois de perguntar; você pode desfazer).

Itens de área também têm **Inclinação** (planos de telhado medidos na inclinação: [Telhados e inclinações](topic:roofs-and-slopes)) e **Dedução** (as marcas deles saem das áreas de outros itens: [Medir áreas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Itens lineares têm **Declividade** (Nível, Empena (rake), Espigão (hip) ou Vale (valley)) e, para empenas e espigões, **Inclinação**.

## Taxas na tabela

Você também pode digitar {{ui:Perda %}}, taxas de material e de mão de obra direto na tabela {{ui:Quantitativos}} no final ({{ui:Por item}}). É a mesma configuração do editor.

## Como funciona a precificação

Para cada item e cada componente de composição:

1. **Com perda** = quantidade × (1 + perda %).
2. **Material** = com perda × material por unidade, arredondado para o centavo.
3. **Mão de obra** = com perda × mão de obra por unidade, arredondado para o centavo.
4. **Total** = material + mão de obra.

O {{ui:Total da obra}} soma cada item e cada componente. Um item pode ter as próprias taxas e uma composição ao mesmo tempo; ambas são contadas, então deixe as taxas do item em 0 quando os componentes carregarem o custo.

## Mão de obra por equipe

Em vez de uma taxa de mão de obra por unidade, a mão de obra de um item pode vir de uma equipe: quanto ela produz por hora, quantas pessoas e quanto cada uma ganha. Em {{ui:Mão de obra por equipe}} no editor do item, marque {{ui:Precificar a mão de obra a partir de uma equipe}} e preencha:

| Campo | Exemplo |
|---|---|
| {{ui:Produção}} | `20` LF por hora (na unidade do item) para a equipe inteira |
| {{ui:Tamanho da equipe}} | `2` pessoas |
| {{ui:Salário $/hora cada}} | `45` |

O TakeoffCraft calcula, a partir da quantidade com perda:

- **horas-equipe** = quantidade ÷ produção (110 LF ÷ 20 = 5.5),
- **horas-homem** = horas-equipe × tamanho da equipe (11),
- **dias-equipe** = horas-equipe ÷ 8 (0.69),
- **mão de obra** = horas-homem × salário ($495.00).

O editor mostra o resultado e a taxa que ele resulta ($4.50/LF). A taxa de mão de obra própria do item fica então somente leitura, no editor e na tabela. O cabeçalho da tabela {{ui:Quantitativos}} soma as horas-homem e os dias-equipe do levantamento. As exportações registram as horas de cada equipe, e na pasta de trabalho a célula de mão de obra é uma fórmula sobre a equipe (`ROUND(F2/20*2*45,2)`). Desmarque a caixa para voltar a uma taxa por unidade.

## Itens métricos

Escolha m (linear) ou m² (área) como unidade. As quantidades, alturas e valores das fórmulas ficam então em metros. A escala da folha pode ser qualquer predefinida ou calibração; unidades e escalas são independentes.

## Próximos passos

- [Medir trechos lineares](topic:measure-linear)
- [Medir áreas com recortes](topic:measure-areas)
- [Contar manualmente](topic:count-by-hand)
