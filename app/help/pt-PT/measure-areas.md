---
title: Medir áreas com recortes
summary: Delimite pavimentos, tetos e lajes, recorte furos neles, acrescente arestas curvas, círculos e recortes redondos, e leia a área e o perímetro.
keywords: preenchimento de compartimento, preenchimento por inundação, balde de tinta, clicar dentro de um compartimento, área automática, subtração, back-out, backout, pilar, poço, deduzir de vários artigos, área, polígono, contorno, pés quadrados, sf, recorte, furo, deduzir, círculo, redondo, arco, perímetro, pavimento, teto, laje
from: 34648db7
---

Um artigo de área mede a área fechada. Cada contorno pode ter furos recortados (um poço, um pilar, uma floreira), e as suas arestas podem ser retas ou curvas.

Antes de começar: a folha precisa de uma escala ([Definir a escala](topic:set-the-scale)) e precisa de um artigo de área ([Criar artigos de medição](topic:create-items)).

## Delimitar uma área

1. Clique no artigo de área em {{ui:Artigos}}.
2. Escolha {{ui:Área}} na barra de ferramentas, ou prima {{key:A}}.
3. Clique em cada canto do compartimento ou da laje, por ordem. Mantenha {{key:Shift}} premida para arestas de 0°, 45° e 90°.
   A partir do terceiro ponto, o contorno fica preenchido e a barra de estado mostra «Área» e «perímetro». Aparece um pequeno anel à volta do primeiro ponto.
4. Feche o contorno: clique no primeiro ponto (dentro do respetivo anel), prima {{key:Enter}}, faça duplo clique ou clique com o botão direito.
   A área fica preenchida com uma cor clara, na cor do artigo, identificada com os seus pés quadrados, e passa a ser a marca selecionada.

{{key:Backspace}} remove o último canto; {{key:Esc}} descarta o contorno.

Um contorno que se cruza consigo próprio é recusado: «O contorno cruza-se consigo próprio, pelo que a área estaria errada. Desenhe-o de novo sem se cruzar.» Desenhe uma forma em oito como duas áreas.

## Arestas curvas

Enquanto delimita, ative o modo de arco ({{ui:Arco}} ou {{key:R}}). Depois de um canto, clique num ponto ao longo da curva e depois no ponto onde a curva termina. Para fechar o contorno com uma curva, faça esse último clique no primeiro ponto. A área e o perímetro usam a curva exata. Prima {{key:R}} de novo para arestas retas. Para alterar uma curva depois, selecione a área e arraste a pega redonda no meio do arco. Ver [Medir percursos lineares](topic:measure-linear#arcs-and-curved-walls).

## Um círculo

1. Com um artigo de área, escolha {{ui:Círculo}} ou prima {{key:O}}.
2. Clique no centro.
3. Clique em qualquer ponto da borda.
   Enquanto move, a barra de estado mostra o raio e a área. O círculo é acrescentado como marca de área, com área e perímetro exatos.

## Preencher um compartimento com um clique

Quando os compartimentos estão desenhados como paredes fechadas, {{ui:Compartimento}} ({{key:B}}) retira um pavimento com um só clique:

1. Escolha um artigo de área (um acabamento de pavimento, por exemplo) e defina a escala da folha.
2. Escolha {{ui:Compartimento}} no grupo {{ui:Medição}}, ou prima {{key:B}}.
3. Clique dentro de um compartimento, no pavimento livre (não numa linha nem numa etiqueta).

O TakeoffCraft lê as linhas da folha, encontra o espaço à volta do clique e delimita-o ao longo das faces interiores das paredes, como uma área do artigo atual. As aberturas de portas até **4'-0"** são tratadas como fechadas, pelo que o contorno segue em linha reta através da porta; **Definições › TakeoffCraft › Preenchimento de compartimento fecha aberturas até** altera essa largura (de 3'-0" a 8'-0"). Nomes de compartimentos, mobiliário e acessórios dentro da divisão não criam furos.

Recusa, indicando o motivo, quando:

- o clique está numa linha («Isso está sobre uma linha»);
- o espaço não está fechado: uma abertura mais larga do que a definição deixa o espaço escapar até à borda da folha. Aumente a definição, ou delimite esse compartimento à mão com {{ui:Área}};
- o espaço é muito pequeno (um símbolo, e não um compartimento).

Quando uma porta é mais larga do que a definição, o preenchimento passa para o compartimento seguinte e delimita os dois em conjunto: anule ({{key:Mod+Z}}), aumente a definição e clique de novo. Verifique o contorno como qualquer área: arraste os cantos para o corrigir. Uma folha digitalizada funciona da mesma forma, mas as linhas têm de ser suficientemente escuras; linhas cinzento-claro podem não parar o preenchimento.

## Recortar um furo numa área

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique na área. Mostra pegas quadradas nos seus cantos.
2. Escolha {{ui:Recorte}} na barra de ferramentas (ou prima {{key:X}}), ou {{ui:Adicionar um recorte}} em **Marca selecionada**.
3. Clique nos cantos do furo, dentro da área. O modo de arco também funciona aqui.
4. Feche-o como uma área: clique no primeiro ponto, prima {{key:Enter}}, faça duplo clique ou clique com o botão direito.
   O furo fica sem preenchimento, e a barra de estado diz «Recorte acrescentado. Desenhe outro, ou prima Esc.»
5. Desenhe mais furos na mesma área, ou prima {{key:Esc}}.

Para um furo redondo, escolha {{ui:Adicionar um recorte redondo}} em **Marca selecionada**, clique no centro e depois num ponto da borda.

Um recorte tem de ficar totalmente dentro da área e não se pode sobrepor a outro recorte. Caso contrário, o TakeoffCraft recusa-o: «Um recorte tem de ficar totalmente dentro da área.» ou «Os recortes não se podem sobrepor.»

Para retirar o último furo, escolha {{ui:Remover o último recorte}}.

## Subtrações: pilares, poços e aberturas retiradas a vários artigos

Um recorte pertence a uma marca de área. Uma **subtração** é desenhada uma vez e é retirada de todas as áreas que sobrepõe, nos artigos que escolher: desenhe os pilares uma vez, e saem em conjunto do acabamento do pavimento, do teto e da laje.

1. Crie um artigo de área para eles, como «Pilares».
2. Nas definições do artigo, marque **Subtração: as suas marcas retiram a área a outros artigos**. Aparece uma lista dos seus outros artigos de área, todos marcados: desmarque os que as subtrações não devem afetar (tinta nas paredes, por exemplo).
3. Meça os pilares com {{ui:Área}} ou {{ui:Círculo}}, como habitualmente. Cada um é desenhado a tracejado.

Cada marca de área de um artigo marcado, na mesma folha, perde a parte coberta por uma subtração: a subtração inteira quando fica dentro, apenas a parte sobreposta quando atravessa a borda, e nada dentro de um recorte. O painel da área selecionada mostra **Subtrações** e a área que resta. A quantidade do artigo, as suas fórmulas de conjunto, os custos, a vista de verificação 3D e a exportação usam a área restante; as notas do orçamento indicam quanto as subtrações retiraram. O próprio artigo de subtração conta a sua área (deixe os custos a zero se não o orçamentar).

Uma subtração tem de ser **convexa**: um retângulo, um círculo ou qualquer contorno sem canto para dentro. O TakeoffCraft recusa desenhar uma que não seja; desenhe um poço em forma de L como duas subtrações. As subtrações não podem ter recortes, e duas subtrações que se sobrepõem contam ambas.

O perímetro (`P`) não muda: as subtrações retiram apenas área.

## Ler a área

Selecione a área. **Marca selecionada** mostra:

| Linha | Significado |
|---|---|
| Área | A área líquida: contorno menos recortes. É isto que o artigo conta. |
| Contorno | A área bruta dentro do contorno (mostrada quando há recortes). |
| Recortes | Quantos furos há, e a sua área total. |
| Perímetro | O comprimento do contorno, **mais** as arestas de todos os recortes («com recortes»). |

O perímetro inclui de propósito as arestas dos recortes, por exemplo para cofragens de bordo ou para a base que também contorna um furo. Se precisar apenas do bordo exterior, mantenha os furos fora desse artigo ou meça o bordo exterior como um percurso linear.

A {{ui:Unidade}} do artigo determina como o total é apresentado: SF, SY ou m². O painel **Marca selecionada** e a barra de estado mostram sempre pés quadrados.

## Corrigir uma área

- **Mover um canto**: selecione a área e arraste uma pega de canto (os furos também têm pegas). Se a nova forma se cruzar consigo própria ou empurrar um furo para fora, o canto é devolvido à posição anterior: «O ponto foi devolvido à posição anterior.»
- **Mover para outro artigo**: escolha outro artigo de área na lista **Artigo**, em **Marca selecionada**.
- **Eliminar**: {{key:Delete}}, {{ui:Eliminar}} no menu {{ui:Mais}} da barra de ferramentas, ou {{ui:Eliminar marcação}}.

## Profundidade para volumes

Dê ao artigo de área uma {{ui:Profundidade}} (por exemplo `0'-4"` para uma laje) e use `A * H / 27` num componente de conjunto para obter jardas cúbicas. Ver [Conjuntos e fórmulas](topic:assemblies).
