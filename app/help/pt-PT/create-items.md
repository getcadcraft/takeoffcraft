---
title: Criar artigos de medição
summary: Crie artigos lineares, de área e de contagem e defina a unidade, a altura ou profundidade, o desperdício e as taxas de material e de mão de obra.
keywords: equipa, taxa de produção, dimensão da equipa, salário, horas, horas-homem, horas-trabalhador, dias-equipa, horas de mão de obra, artigo, novo artigo, condição, multicondição, medir também, vários tipos, compartimento, linear, área, contagem, unidade, altura, profundidade, desperdício, material, mão de obra, taxa, cor, custo
from: 7fa5effc
---

Um **artigo** é uma coisa que mede e orça: um tipo de parede, um revestimento de pavimento, um teto, uma porta, um acessório de iluminação. Cada marca que desenha pertence a um artigo. Outros programas chamam-lhes condições.

Cada artigo tem um tipo (e pode aceitar outros tipos de marcas também, veja [Um artigo, vários tipos de marcas](topic:create-items#one-item-several-kinds-of-marks)):

| Tipo | Desenha | Indica | Unidades |
|---|---|---|---|
| Linear | Troços de pontos ligados | Comprimento, número de troços e área de parede quando tem uma altura | LF ou m |
| Área | Contornos fechados, com recortes | Área, perímetro, número de áreas | SF, SY, SQ, ac, ha ou m² |
| Contagem | Um clique por coisa | Quantas | EA |
| Quantidade escrita | Nada: escreve a quantidade | O número que escreveu (ou um trazido do CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ou m² |

## Quantidades escritas (sem desenho)

Algumas coisas de um orçamento nunca são desenhadas: mobilização, licenças, uma provisão para imprevistos, uma subempreitada por verba global, a escavação e o aterro que o CivilCraft calculou. Crie-as como uma **Quantidade escrita**:

1. Escolha {{ui:Novo artigo}}, escreva um nome, escolha {{ui:Quantidade escrita (sem desenho)}} e escolha {{ui:Adicionar}}.
2. No editor do artigo, escolha a {{ui:Unidade}} (LS para uma verba global) e escreva a {{ui:Quantidade}}: `1`, `2.5` ou `1,250`.
3. Defina o desperdício e as taxas como para qualquer outro artigo. As fórmulas de um preço composto usam `Q`, a quantidade, por exemplo `ceil(Q / 12)` cargas de camião.

Uma quantidade escrita não leva marcas e nunca deixa o orçamento incompleto. Quando a medição tem áreas de proposta, o editor tem também {{ui:Área da proposta}}: a quantidade conta então nessa área, nas suas alternativas e nos seus totais, tal como uma marca ali contaria. As quantidades trazidas de outra aplicação indicam de onde vieram, veja [Movimentos de terras e cotas](topic:earthwork#cut-and-fill-from-civilcraft).

## Criar um artigo

1. No painel {{ui:Artigos}} à direita, escolha {{ui:Novo artigo}}.
2. Escreva um nome, como `Tipo de parede interior A` ou `Ladrilho de carpete`.
3. Escolha o tipo: {{ui:Linear (comprimento)}}, {{ui:Área}} ou {{ui:Contagem}}.
4. Escolha {{ui:Adicionar}} (ou prima {{key:Enter}}).
   O artigo aparece na lista com a sua própria cor, passa a ser o artigo com que desenha, e o seu editor abre por baixo da lista. A barra de estado indica a ferramenta a escolher a seguir.

Prima {{key:Esc}} no formulário para o fechar sem adicionar um artigo.

:::tip
Se escolher primeiro uma ferramenta de medição, o TakeoffCraft usa o último artigo do tipo certo, ou abre o formulário {{ui:Novo artigo}} com esse tipo já escolhido.
:::

## Escolher o artigo com que desenha

Clique num artigo na lista. Passa a ser o artigo a que pertencem as novas marcas, e as suas marcas ficam realçadas em todas as folhas enquanto as restantes se desvanecem. Se a folha aberta não tiver nenhuma das suas marcas, o TakeoffCraft salta para uma folha que tenha. Clique de novo no artigo para parar o realce; continua a ser o artigo com que desenha.

Clicar numa marca com a ferramenta {{ui:Selecionar}} também torna o seu artigo o atual.

## Configurar o artigo

O editor do artigo (**Artigo: (nome)**) tem estes campos. Cada um é guardado ao sair do campo ou ao premir {{key:Enter}}, e cada alteração pode ser anulada.

| Campo | O que faz |
|---|---|
| {{ui:Nome}} | Mostrado na lista, nas tabelas e nas exportações. |
| {{ui:Escrever}} | Linear, Área ou Contagem. Fica bloqueado quando o artigo tem marcas («Um artigo com marcas mantém o seu tipo»). |
| {{ui:Cor}} | A cor das suas marcas no ecrã e no PDF marcado. |
| {{ui:Unidade}} | Em que unidade a quantidade é indicada: LF ou m para linear; SF, SY, SQ, ac, ha ou m² para área; EA para contagem. |
| {{ui:Medir também}} | Os outros tipos de marcas que o artigo aceita, cada um com a sua unidade. Veja abaixo. |
| {{ui:Altura}} (linear) | A altura de uma parede. O artigo passa então a indicar também a área da parede (comprimento × altura). Os troços vindos de um modelo do BimCraft trazem as suas portas e janelas: essas são retiradas uma só vez, e o artigo indica a área bruta, as aberturas e a área líquida. Uma medição de um projeto do BimCraft que escolheu um método de medição é medida aqui também por esse método (a nota indica-o, com a sua origem, e diz que não foi verificada por um orçamentista); o método não pode ser alterado no TakeoffCraft. Tijolos ou blocos e argamassa de um tipo de parede chegam como dois componentes: as unidades a encomendar e o volume de argamassa. |
| {{ui:Profundidade}} (área) | Uma profundidade ou espessura, usada nas fórmulas de preços compostos (por exemplo, o volume de betão). |
| {{ui:Desperdício %}} | Somado à quantidade antes da valorização: 10 quer dizer quantidade × 1.10. |
| {{ui:Material $/LF}} | Custo de material por unidade. O rótulo segue a unidade: $/SF, $/EA e assim por diante. |
| {{ui:Mão de obra $/LF}} | Custo de mão de obra por unidade. |
| {{ui:Número CSI}} | O seu número CSI MasterFormat, como `09 21 16` (ou apenas a divisão, `09`). A folha do livro «By division» agrupa os custos por ele. Os artigos dos [pacotes de especialidade](topic:trade-packs) já têm um. |

A altura e a profundidade aceitam pés e polegadas (`9'-0"`, `8' 6"`) ou pés decimais (`9`) para unidades imperiais, e metros (`2.7`, `2700 mm`) para unidades métricas. As taxas aceitam valores como `12.50` ou `$1,250`, até quatro casas decimais. Veja [Introdução de comprimento, taxa e percentagem](topic:entry-formats).

Abaixo dos campos, **Medido** mostra os totais que as fórmulas do artigo podem usar, com as suas letras: Comprimento (L), Troços (N), Área de parede (A) para linear; Área (A), Perímetro (P), Áreas (N) para área; Contagem (N) para contagem.

## Um artigo, vários tipos de marcas

Algumas coisas são medidas de mais de uma forma: um compartimento tem um piso (uma área), um rodapé ao longo das paredes (um comprimento) e portas (uma contagem). Em vez de três artigos, crie um só:

1. Crie o artigo com o seu tipo principal, como um artigo de área `Compartimento 101`.
2. Em {{ui:Medir também}} no seu editor, marque {{ui:Linear}}, {{ui:Contagem}} ou ambos. Cada um recebe uma unidade ao lado.
3. Desenhe com qualquer ferramenta cujo tipo o artigo aceite: com `Compartimento 101` atual, {{ui:Área}} desenha o seu piso, {{ui:Linear}} o seu rodapé e {{ui:Contagem}} as suas portas. O TakeoffCraft não pede outro artigo.

A lista de artigos mostra cada quantidade (`50.00 SF + 2 EA`). Na tabela de quantidades, a linha do artigo tem a quantidade principal, e cada outro tipo tem a sua própria linha por baixo, como **Compartimento 101 (contagem)**, com o seu desperdício e as suas taxas de material e de mão de obra. As exportações, a tabela por folha e a legenda do PDF marcado listam-nos da mesma forma.

Os campos do tipo principal continuam a ser do tipo principal: a altura ou profundidade, a inclinação, as deduções e a forma 3D aplicam-se só às suas marcas. Um troço de rodapé desenhado para um artigo de área é medido simplesmente ao longo da planta, e aparece plano em 3D. As fórmulas do preço composto usam os totais do tipo principal.

Um tipo só pode ser desmarcado enquanto o artigo não tiver marcas desse tipo; apague-as, ou mova-as primeiro para outro artigo em **Marca selecionada**. As marcas podem passar para qualquer artigo que aceite o seu tipo.

Mais abaixo fica o {{ui:Preço composto}}: componentes como montantes ou tábuas, cada um com a sua própria fórmula e taxas. Veja [Preços compostos e fórmulas](topic:assemblies).

No fim, {{ui:Mover para cima}} e {{ui:Mover para baixo}} mudam o lugar do artigo na lista e nas exportações, e {{ui:Eliminar artigo}} remove-o com todas as suas marcas (depois de pedir confirmação; pode anular).

Os artigos de área têm também **Inclinação** (planos de telhado medidos sobre o declive: [Coberturas e declives](topic:roofs-and-slopes)) e **Dedução** (as suas marcas saem das áreas de outros artigos: [Medir áreas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Os artigos lineares têm **Declive** (Nível, Empena, Espigão ou vale) e, para empenas e espigões, **Inclinação**.

## Taxas na tabela

Pode também escrever {{ui:Desperdício %}}, e as taxas de material e de mão de obra, diretamente na tabela {{ui:Quantidades}} em baixo ({{ui:Por artigo}}). É a mesma definição do editor.

## Como funciona a valorização

Para cada artigo e cada componente de preço composto:

1. **Com desperdício** = quantidade × (1 + desperdício %).
2. **Material** = com desperdício × material por unidade, arredondado ao cêntimo.
3. **Mão de obra** = com desperdício × mão de obra por unidade, arredondado ao cêntimo.
4. **Total** = material + mão de obra.

O {{ui:Total da obra}} adiciona todos os artigos e todos os componentes. Um artigo pode ter as suas próprias taxas e um preço composto ao mesmo tempo; ambos são contados, por isso deixe as taxas do artigo em 0 quando os seus componentes já levam o custo.

## Mão de obra por equipa

Em vez de uma taxa de mão de obra por unidade, a mão de obra de um artigo pode vir de uma equipa: quanto produz por hora, quantas pessoas e quanto ganha cada uma. Em {{ui:Mão de obra por equipa}} no editor do artigo, marque {{ui:Orçamentar a mão de obra a partir de uma equipa}} e preencha:

| Campo | Exemplo |
|---|---|
| {{ui:Produção}} | `20` LF por hora (na unidade do artigo) para a equipa inteira |
| {{ui:Dimensão da equipa}} | `2` pessoas |
| {{ui:Salário $/hora cada}} | `45` |

O TakeoffCraft calcula, a partir da quantidade com desperdício:

- **horas de equipa** = quantidade ÷ produção (110 LF ÷ 20 = 5.5),
- **horas-trabalhador** = horas de equipa × dimensão da equipa (11),
- **dias-equipa** = horas de equipa ÷ 8 (0.69),
- **mão de obra** = horas-trabalhador × salário ($495.00).

O editor mostra o resultado e a taxa a que chega ($4.50/LF). A taxa de mão de obra própria do artigo fica então só de leitura, no editor e na tabela. O cabeçalho da tabela {{ui:Quantidades}} acrescenta as horas-trabalhador e os dias-equipa da obra. As exportações indicam as horas de cada equipa, e no livro a célula de mão de obra é uma fórmula sobre a equipa (`ROUND(F2/20*2*45,2)`). Desmarque a caixa para voltar a uma taxa por unidade.

## Artigos métricos

Escolha m (linear) ou m² (área) como unidade. As quantidades, alturas e valores das fórmulas ficam então em metros. A escala da folha pode ser qualquer predefinição ou calibração; unidades e escalas são independentes.

## Seguinte

- [Medir troços lineares](topic:measure-linear)
- [Medir áreas com recortes](topic:measure-areas)
- [Contar manualmente](topic:count-by-hand)
