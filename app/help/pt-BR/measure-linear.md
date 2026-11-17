---
title: Medir trechos lineares
summary: Levante paredes, tubulações, rodapés e outros comprimentos como trechos, com segmentos retos, arcos e o snap de 45 graus com Shift.
keywords: linear, comprimento, trecho, polilinha, paredes, lf, pés lineares, arco, curva, 45 graus, orto, snap, segmentos, comprimento de polilinha, deduzir, abertura, porta, vão, tipo, digitado, coordenadas, distância, distância direta, polar
from: c669deff
---

Um item linear mede comprimento. Cada trecho é uma sequência de pontos: segmentos retos e arcos, quando você liga o modo de arco. Um item pode ter quantos trechos quiser, em quantas folhas quiser.

Antes de começar: a folha precisa de escala ([Definir a escala](topic:set-the-scale)) e você precisa de um item linear ([Criar itens do levantamento](topic:create-items)).

Em um PDF vetorial, seus cliques se encaixam nas linhas do próprio desenho: extremidades, pontos médios e cruzamentos ([Snap nas linhas do desenho](topic:snap-to-the-drawing); {{key:F3}} o desliga).

## Desenhar um trecho

1. Clique no item linear em {{ui:Itens}}.
2. Escolha {{ui:Linear}} na barra de ferramentas, ou pressione {{key:L}}.
3. Clique no início do trecho.
4. Clique em cada canto ao longo dele.
   A barra de status mostra "Comprimento" (o trecho até o ponteiro) e "segmento" (o segmento que você está desenhando), em pés e polegadas.
5. Termine o trecho: dê um clique duplo no último ponto, pressione {{key:Enter}} ou clique com o botão direito.
   O trecho é desenhado na cor do item e passa a ser a marca selecionada. O comprimento do item na lista {{ui:Itens}} e na tabela {{ui:Quantitativos}} aumenta.

A ferramenta continua em {{ui:Linear}}, então você pode começar o próximo trecho em seguida. Pressione {{key:Esc}} para voltar a {{ui:Selecionar}}.

Enquanto desenha:

- {{key:Backspace}} (ou {{key:Delete}}) remove o último ponto.
- {{key:Esc}} descarta o trecho não concluído.
- Arrastar faz pan na folha, e a roda dá zoom, sem adicionar pontos.

:::mac
Num trackpad do Mac, clique com o botão direito é um clique com dois dedos (ative o clique secundário em Configurações do Sistema, em Trackpad). O TakeoffCraft lê apenas o botão secundário, então um Control-clique pode ser tratado como clique simples e adicionar um ponto. Clique duplo ou {{key:Enter}} sempre terminam.
:::

:::touch
Numa tela de toque, toque para posicionar pontos, arraste com um dedo para fazer pan e use zoom por pinça com dois dedos. Termine com um toque longo, um toque duplo, ou {{ui:Concluir}} na barra abaixo da folha ({{ui:Posterior}} desfaz o último ponto). Veja [Solução de problemas](topic:troubleshooting#touch-screens).
:::

## Linhas retas em passos de 45°

Segure {{key:Shift}} ao posicionar um ponto. O segmento a partir do último ponto faz snap para a direção de 0°, 45°, 90° ou 135° mais próxima, mantendo o comprimento que você arrastou. A barra de status lembra: "Shift faz snap a 45°".

No modo de arco, isso vale para onde o arco termina: a corda do arco vai em passos de 45° a partir de onde ele começa. O ponto clicado na curva nunca sofre snap.

## Arcos e paredes curvas

1. Enquanto desenha um trecho, posicione o ponto onde a curva começa.
2. Ative o modo de arco: escolha {{ui:Arco}} na barra de ferramentas ou pressione {{key:R}}. O botão fica pressionado.
3. Clique em qualquer ponto da curva, em algum lugar no meio dela.
   A barra de status acrescenta "(arco: clique onde ele termina)" e a prévia se curva passando pelo seu ponto.
4. Clique onde a curva termina.
   O arco é adicionado. O comprimento dele é o comprimento exato do arco, não uma sequência de cordas curtas.
5. Clique em outro ponto da próxima curva e no fim dela para seguir desenhando arcos, ou pressione {{key:R}} de novo para voltar aos segmentos retos.

{{key:Backspace}} ou {{key:Esc}} primeiro descartam o ponto pendente na curva; pressione de novo para remover pontos como de costume.

## Digitar comprimentos e coordenadas

Depois do primeiro ponto, você pode digitar onde o próximo ficará, em vez de clicar. Digite um dígito, `@` ou `#`: uma caixa {{ui:Digite}} abre na barra de status com o que você digitou. Pressione {{key:Enter}} para posicionar o ponto; a caixa fica aberta para o próximo.

| Digite | O próximo ponto vai |
|---|---|
| `12'6"` | 12'-6" a partir do último ponto, na direção do ponteiro (aponte o sentido e depois digite o comprimento) |
| `12'6"<45` | 12'-6" a 45°, contados no sentido anti-horário a partir da direita da tela (`<90` é para cima, `<-90` para baixo) |
| `@6',-4'` | 6' para a direita e 4' para baixo a partir do último ponto |
| `6',4'` (ou `#6',4'`) | 6' para a direita e 4' para cima a partir do primeiro ponto deste trecho |

Os comprimentos são digitados como em todo o TakeoffCraft ([Formatos de entrada](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pés), `30"`, `3.2 m`. "Direita" e "cima" são como você vê a folha, mesmo quando a página do PDF é girada.

{{key:Enter}} em uma caixa vazia termina o trecho, como {{key:Enter}} na folha; {{key:Esc}} fecha a caixa e mantém o trecho. Os pontos digitados seguem as mesmas regras dos cliques: deduções, arcos e o fechamento de uma área funcionam todos. A mesma caixa funciona em {{ui:Área}} e {{ui:Recorte}}; depois do centro de um círculo, ela pede o raio.

## Deduzir uma parte de um trecho

Uma parede que passa por uma porta ou uma vitrine pode ser desenhada em linha reta e ainda contar só a parede: os segmentos sobre a abertura são **deduções**. Eles são desenhados tracejados e finos, e não são contados.

Enquanto desenha:

1. Posicione o ponto onde a abertura começa.
2. Escolha {{ui:Deduzir}} na barra de ferramentas ou pressione {{key:E}}. O botão fica pressionado e a barra de status diz que os próximos segmentos são deduções.
3. Clique onde a abertura termina. O segmento é desenhado tracejado; "Comprimento" na barra de status o deixa de fora.
4. Pressione {{key:E}} de novo e continue ao longo da parede.

Depois de desenhar: selecione o trecho. Em **Marca selecionada**, cada segmento tem uma caixa {{ui:Deduzir}}: marque para deduzir esse segmento, desmarque para contá-lo de novo. Cada alteração é uma etapa de desfazer.

Um trecho sempre mantém pelo menos um segmento que conta. O painel então mostra **Deduções** (o comprimento deduzido) e **Desenhado** (o trecho inteiro); **Comprimento**, a quantidade do item, a área da parede e os custos usam o comprimento sem as deduções. A vista 3D de conferência deixa uma falha na parede, o PDF marcado desenha as deduções tracejadas, e a planilha **Marcas** exportada as lista.

Mover um canto mantém as deduções. Adicionar ou remover pontos (desenhando o trecho de novo) começa sem elas.

## Ver os detalhes de um trecho

Escolha {{ui:Selecionar}} ({{key:V}}) e clique no trecho. **Marca selecionada**, à direita, mostra:

- o item a que ele pertence (escolha outro item linear na lista para mover o trecho para lá),
- a folha,
- **Comprimento** em pés e polegadas e em LF,
- o número de **Segmentos**, e a **Área da parede** quando o item tem altura,
- o comprimento de cada segmento, com "(arco)" depois dos arcos, e a sua caixa {{ui:Deduzir}}.

Na folha, cada segmento do trecho selecionado é rotulado com o seu comprimento.

## Corrigir um trecho

- **Mover um ponto**: selecione o trecho e arraste uma das suas alças quadradas de canto. Segure {{key:Shift}} para fazer o segmento movido seguir passos de 45°. Um arco mantém a sua curvatura.
- **Dobrar um arco**: um trecho selecionado mostra uma alça redonda no meio de cada arco. Arraste-a: o arco passa pelo ponto onde você soltar, então se curva mais, menos ou para o outro lado. Arrastado até a reta entre as extremidades, ele vira um segmento reto. {{key:Mod+Z}} desfaz ("Dobrar arco").
- **Excluir um trecho**: selecione-o e pressione {{key:Delete}}, escolha {{ui:Excluir}} no menu {{ui:Mais}} da barra de ferramentas, ou {{ui:Excluir marcação}} no painel.
- **Desfazer**: {{key:Mod+Z}}; refazer com {{key:Mod+Y}}.

Ainda não é possível inserir um ponto no meio de um trecho. Exclua o trecho e desenhe-o de novo.

## Área da parede

Dê ao item linear uma {{ui:Altura}} (por exemplo `9'-0"`). Ele então informa **Área da parede (A)** = comprimento × altura, em SF (ou m² para um item métrico), e a área da parede entra na coluna de notas da exportação em planilha. Use-a em composições para placa, tinta ou isolamento: veja [Composições e fórmulas](topic:assemblies).
