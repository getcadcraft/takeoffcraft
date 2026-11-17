---
title: Medir áreas com recortes
summary: Contorne pisos, forros e lajes, recorte furos neles, adicione bordas curvas, círculos e recortes redondos, e leia a área e o perímetro.
keywords: preenchimento de ambiente, preenchimento por inundação, balde de tinta, clique dentro de um ambiente, área automática, subtração, back-out, coluna, shaft, poço, deduzir de vários itens, área, polígono, contorno, pés quadrados, sf, recorte, furo, deduzir, círculo, redondo, arco, perímetro, piso, forro, laje
from: 34648db7
---

Um item de área mede a área fechada. Cada contorno pode ter furos recortados (um shaft, uma coluna, um jardim elevado), e as bordas podem ser retas ou curvas.

Antes de começar: a folha precisa de escala ([Definir a escala](topic:set-the-scale)) e você precisa de um item de área ([Criar itens do levantamento](topic:create-items)).

## Contornar uma área

1. Clique no item de área em {{ui:Itens}}.
2. Escolha {{ui:Área}} na barra de ferramentas, ou pressione {{key:A}}.
3. Clique em cada canto do cômodo ou da laje, em sequência. Segure {{key:Shift}} para bordas de 0°, 45° e 90°.
   A partir do terceiro ponto, o contorno é preenchido e a barra de status mostra "Área" e "perímetro". Um pequeno anel aparece em volta do primeiro ponto.
4. Feche o contorno: clique no primeiro ponto (dentro do anel dele), pressione {{key:Enter}}, dê um clique duplo ou clique com o botão direito.
   A área recebe um preenchimento leve na cor do item, é rotulada com a sua área em pés quadrados e passa a ser a marca selecionada.

{{key:Backspace}} remove o último canto; {{key:Esc}} descarta o contorno.

Um contorno que cruza a si mesmo é recusado: "O contorno cruza a si mesmo, então a área ficaria errada. Desenhe-o de novo sem cruzar." Desenhe uma forma em oito como duas áreas.

## Bordas curvas

Enquanto contorna, ative o modo de arco ({{ui:Arco}} ou {{key:R}}). Depois de um canto, clique num ponto ao longo da curva e depois onde a curva termina. Para fechar o contorno com uma curva, faça esse último clique no primeiro ponto. A área e o perímetro usam a curva exata. Pressione {{key:R}} de novo para bordas retas. Para mudar uma curva depois, selecione a área e arraste a alça redonda no meio do arco. Veja [Medir trechos lineares](topic:measure-linear#arcs-and-curved-walls).

## Um círculo

1. Com um item de área, escolha {{ui:Círculo}} ou pressione {{key:O}}.
2. Clique no centro.
3. Clique em qualquer ponto da borda.
   Enquanto você move, a barra de status mostra o raio e a área. O círculo é adicionado como uma marca de área, com área e perímetro exatos.

## Preencher um cômodo com um clique

Quando os cômodos são desenhados como paredes fechadas, {{ui:Ambiente}} ({{key:B}}) tira um piso com um único clique:

1. Escolha um item de área (um acabamento de piso, por exemplo) e defina a escala da folha.
2. Escolha {{ui:Ambiente}} no grupo {{ui:Levantamento}}, ou pressione {{key:B}}.
3. Clique dentro de um cômodo, no piso livre (não em uma linha ou em um rótulo).

O TakeoffCraft lê as linhas da folha, encontra o espaço ao redor do clique e contorna ao longo das faces internas das paredes, como uma área do item atual. Aberturas de porta de até **4'-0"** são tratadas como fechadas, então o contorno passa reto pela porta; **Configurações › TakeoffCraft › Preenchimento de ambiente fecha aberturas de até** muda essa largura (de 3'-0" a 8'-0"). Nomes de ambientes, móveis e louças dentro do cômodo não criam furos.

Ele recusa, informando o motivo, quando:

- o clique está sobre uma linha ("Isso está sobre uma linha");
- o espaço não está fechado: uma abertura mais larga que a configuração deixa o preenchimento escapar até a borda da folha. Aumente a configuração ou contorne esse cômodo à mão com {{ui:Área}};
- o espaço é pequeno demais (um símbolo, não um cômodo).

Quando uma porta é mais larga que a configuração, o preenchimento avança para o cômodo seguinte e contorna os dois juntos: desfaça ({{key:Mod+Z}}), aumente a configuração e clique de novo. Confira o contorno como qualquer área: arraste os cantos para corrigir. Uma folha digitalizada funciona da mesma forma, mas as suas linhas precisam ser escuras o bastante; linhas cinza-claras podem não parar o preenchimento.

## Recortar um furo numa área

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique na área. Ela mostra alças quadradas nos cantos.
2. Escolha {{ui:Recorte}} na barra de ferramentas (ou pressione {{key:X}}), ou {{ui:Adicionar um recorte}} em **Marca selecionada**.
3. Clique nos cantos do furo, dentro da área. O modo de arco também funciona aqui.
4. Feche-o como uma área: clique no primeiro ponto, pressione {{key:Enter}}, dê um clique duplo ou clique com o botão direito.
   O furo fica sem preenchimento, e a barra de status diz "Recorte adicionado. Desenhe outro ou pressione Esc."
5. Desenhe mais furos na mesma área, ou pressione {{key:Esc}}.

Para um furo redondo, escolha {{ui:Adicionar um recorte redondo}} em **Marca selecionada**, clique no centro e depois num ponto da borda.

Um recorte precisa ficar totalmente dentro da área e não pode se sobrepor a outro recorte. Caso contrário, o TakeoffCraft o recusa: "O recorte precisa ficar totalmente dentro da área." ou "Os recortes não podem se sobrepor."

Para tirar o último furo de novo, escolha {{ui:Remover o último recorte}}.

## Subtrações: colunas, shafts e aberturas tiradas de vários itens

Um recorte pertence a uma marca de área. Uma **subtração** é desenhada uma vez e sai de todas as áreas que ela sobrepõe, nos itens que você escolher: desenhe as colunas uma vez, e elas saem do acabamento do piso, do forro e da laje ao mesmo tempo.

1. Crie um item de área para elas, como "Colunas".
2. Nas configurações do item, marque **Subtração: suas marcas tiram a área dos outros itens**. Aparece uma lista dos seus outros itens de área, todos marcados: desmarque os que as subtrações não devem afetar (tinta nas paredes, por exemplo).
3. Levante as colunas com {{ui:Área}} ou {{ui:Círculo}}, como de costume. Cada uma é desenhada tracejada.

Cada marca de área de um item marcado, na mesma folha, perde a parte coberta por uma subtração: a subtração inteira quando ela está dentro, só a parte sobreposta quando cruza a borda, e nada dentro de um recorte. O painel da área selecionada mostra **Subtrações** e a área restante. A quantidade do item, as suas fórmulas de composição, os custos, a vista 3D de conferência e a exportação usam a área restante; as notas do orçamento dizem quanto as subtrações tiraram. O próprio item de subtração conta a sua área (deixe os custos em zero se você não o precificar).

Uma subtração precisa ser **convexa**: um retângulo, um círculo ou qualquer contorno sem canto voltado para dentro. O TakeoffCraft recusa desenhar uma que não seja; desenhe um shaft em L como duas subtrações. Subtrações não podem ter recortes, e duas subtrações que se sobrepõem entre si contam ambas.

O perímetro (`P`) não muda: as subtrações tiram apenas área.

## Ler a área

Selecione a área. **Marca selecionada** mostra:

| Linha | Significado |
|---|---|
| Área | A área líquida: contorno menos recortes. É isso que o item conta. |
| Contorno | A área bruta dentro do contorno (mostrada quando há recortes). |
| Recortes | Quantos furos e a área total deles. |
| Perímetro | O comprimento da borda do contorno, **mais** as bordas de cada recorte ("com recortes"). |

O perímetro inclui as bordas dos recortes de propósito, para coisas como formas de borda ou base que também correm em volta de um furo. Se você precisa só da borda externa, mantenha os furos fora desse item ou meça a borda externa como um trecho linear.

A {{ui:Unidade}} do item define como o total é informado: SF, SY ou m². O painel **Marca selecionada** e a barra de status sempre mostram pés quadrados.

## Corrigir uma área

- **Mover um canto**: selecione a área e arraste uma alça de canto (os furos também têm alças). Se a nova forma cruzar a si mesma ou empurrar um furo para fora, o canto volta: "O ponto foi devolvido à posição anterior."
- **Mover para outro item**: escolha outro item de área na lista **Item**, em **Marca selecionada**.
- **Excluir**: {{key:Delete}}, {{ui:Excluir}} no menu {{ui:Mais}} da barra de ferramentas, ou {{ui:Excluir marcação}}.

## Profundidade para volumes

Dê ao item de área uma {{ui:Profundidade}} (por exemplo `0'-4"` para uma laje) e use `A * H / 27` em um componente de composição para obter jardas cúbicas. Veja [Composições e fórmulas](topic:assemblies).
