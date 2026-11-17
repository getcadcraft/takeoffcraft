---
title: Medir percursos lineares
summary: Meça muros, tubagens, guarnições e outros comprimentos como percursos, com segmentos retos, arcos e o snap de 45 graus com Shift.
keywords: linear, comprimento, percurso, polilinha, paredes, lf, pés lineares, arco, curva, 45 graus, orto, snap, segmentos, comprimento de polilinha, deduzir, abertura, porta, intervalo, escrever, escrita, coordenadas, distância, distância direta, polar
from: c669deff
---

Um artigo linear mede comprimento. Cada percurso é uma cadeia de pontos: segmentos retos e arcos, quando ativa o modo de arco. Um artigo pode ter qualquer número de percursos em qualquer número de folhas.

Antes de começar: a folha precisa de uma escala ([Definir a escala](topic:set-the-scale)) e precisa de um artigo linear ([Criar artigos de medição](topic:create-items)).

Num PDF vetorial, os cliques ajustam-se às próprias linhas do desenho: extremidades, pontos médios e cruzamentos ([Snap às linhas do desenho](topic:snap-to-the-drawing); {{key:F3}} desativa-o).

## Desenhar um percurso

1. Clique no artigo linear em {{ui:Artigos}}.
2. Escolha {{ui:Linear}} na barra de ferramentas, ou prima {{key:L}}.
3. Clique no início do percurso.
4. Clique em cada canto ao longo dele.
   A barra de estado mostra «Comprimento» (o percurso até agora, até ao ponteiro) e «segmento» (o segmento que está a desenhar), em pés e polegadas.
5. Conclua o percurso: faça duplo clique no último ponto, prima {{key:Enter}} ou clique com o botão direito.
   O percurso é desenhado na cor do artigo e passa a ser a marca selecionada. O comprimento do artigo, na lista {{ui:Artigos}} e na tabela {{ui:Quantidades}}, aumenta.

A ferramenta mantém-se em {{ui:Linear}}, pelo que pode começar logo o percurso seguinte. Prima {{key:Esc}} para voltar a {{ui:Selecionar}}.

Ao desenhar:

- {{key:Backspace}} (ou {{key:Delete}}) remove o último ponto.
- {{key:Esc}} descarta o percurso por concluir.
- Arrastar desloca a folha, e a roda aproxima, sem acrescentar pontos.

:::mac
Num trackpad de Mac, clicar com o botão direito é um clique com dois dedos (ative o clique secundário nas Definições do Sistema, em Trackpad). O TakeoffCraft lê apenas o botão secundário, pelo que um Control-clique pode ser tomado como clique simples e acrescentar um ponto. Duplo clique ou {{key:Enter}} concluem sempre.
:::

:::touch
Num ecrã tátil, toque para colocar pontos, arraste com um dedo para deslocar e faça pinça com dois dedos para aproximar. Conclua com um toque longo, um duplo toque, ou {{ui:Concluir}} na barra abaixo da folha ({{ui:Posterior}} retira o último ponto). Ver [Resolução de problemas](topic:troubleshooting#touch-screens).
:::

## Linhas retas em passos de 45°

Mantenha {{key:Shift}} premida ao colocar um ponto. O segmento a partir do último ponto ajusta-se à direção de 0°, 45°, 90° ou 135° mais próxima, mantendo o comprimento que arrastou ao longo dela. A barra de estado lembra: «Shift ajusta a 45°».

No modo de arco, isto aplica-se ao ponto onde um arco termina: a corda do arco fica em passos de 45° a partir de onde começa. O ponto que clica sobre a curva nunca é ajustado.

## Arcos e paredes curvas

1. Ao desenhar um percurso, coloque o ponto onde a curva começa.
2. Ative o modo de arco: escolha {{ui:Arco}} na barra de ferramentas ou prima {{key:R}}. O botão fica premido.
3. Clique em qualquer ponto da curva, algures a meio dela.
   A barra de estado acrescenta «(arco: clique onde termina)» e a pré-visualização curva-se pelo seu ponto.
4. Clique onde a curva termina.
   O arco é acrescentado. O seu comprimento é o comprimento exato do arco, e não uma sucessão de cordas curtas.
5. Clique noutro ponto da curva seguinte e no respetivo fim para continuar a desenhar arcos, ou prima {{key:R}} de novo para voltar a segmentos retos.

{{key:Backspace}} ou {{key:Esc}} descartam primeiro o ponto pendente na curva; prima de novo para remover pontos como habitualmente.

## Escrever comprimentos e coordenadas

Depois do primeiro ponto, pode escrever onde fica o seguinte em vez de clicar. Escreva um algarismo, `@` ou `#`: abre-se na barra de estado uma caixa {{ui:Escrever}} com o que escreveu. Prima {{key:Enter}} para colocar o ponto; a caixa mantém-se aberta para o seguinte.

| Escrita | O ponto seguinte fica |
|---|---|
| `12'6"` | a 12'-6" do último ponto, na direção do ponteiro (aponte o sentido e depois escreva o comprimento) |
| `12'6"<45` | a 12'-6" a 45°, contados no sentido anti-horário a partir da direita do ecrã (`<90` é para cima, `<-90` para baixo) |
| `@6',-4'` | 6' para a direita e 4' para baixo do último ponto |
| `6',4'` (ou `#6',4'`) | 6' para a direita e 4' para cima do primeiro ponto deste percurso |

Os comprimentos escrevem-se como em todo o TakeoffCraft ([Formatos de introdução](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pés), `30"`, `3.2 m`. «Direita» e «cima» são como vê a folha, também quando a página do PDF é rodada.

{{key:Enter}} numa caixa vazia conclui o percurso, como {{key:Enter}} na folha; {{key:Esc}} fecha a caixa e mantém o percurso. Os pontos escritos seguem as mesmas regras dos cliques: deduções, arcos e fecho de uma área funcionam todos. A mesma caixa funciona em {{ui:Área}} e {{ui:Recorte}}; depois do centro de um círculo, pede o raio.

## Deduzir uma parte de um percurso

Um percurso de parede que passa por uma porta ou por uma montra pode ser desenhado em linha reta e contar apenas a parede: os segmentos que atravessam a abertura são **deduções**. São desenhados a tracejado e finos, e não são contados.

Ao desenhar:

1. Coloque o ponto onde a abertura começa.
2. Escolha {{ui:Deduzir}} na barra de ferramentas ou prima {{key:E}}. O botão fica premido e a barra de estado diz que os segmentos seguintes são deduções.
3. Clique onde a abertura termina. O segmento é desenhado a tracejado; «Comprimento», na barra de estado, deixa-o de fora.
4. Prima {{key:E}} de novo e continue ao longo da parede.

Depois de desenhar: selecione o percurso. Em **Marca selecionada**, cada segmento tem uma caixa {{ui:Deduzir}}: marque-a para deduzir esse segmento, desmarque-a para o voltar a contar. Cada alteração é um passo de anulação.

Um percurso mantém sempre pelo menos um segmento que conta. O painel mostra então **Deduções** (o comprimento deduzido) e **Desenhado** (o percurso todo); o **Comprimento**, a quantidade do artigo, a área de parede e os custos usam o comprimento sem deduções. A vista de verificação 3D deixa um intervalo na parede, o PDF marcado desenha as deduções a tracejado, e a folha **Marcas** exportada lista-as.

Mover um canto mantém as deduções. Acrescentar ou remover pontos (voltando a desenhar o percurso) começa sem elas.

## Ver os detalhes de um percurso

Escolha {{ui:Selecionar}} ({{key:V}}) e clique no percurso. **Marca selecionada**, à direita, mostra:

- o artigo a que pertence (escolha outro artigo linear na lista para mover o percurso para lá),
- a folha,
- o **Comprimento** em pés e polegadas e em LF,
- o número de **Segmentos**, e a **Área de parede** quando o artigo tem altura,
- o comprimento de cada segmento, com «(arco)» depois dos arcos, e a respetiva caixa {{ui:Deduzir}}.

Na folha, cada segmento do percurso selecionado tem indicado o seu comprimento.

## Corrigir um percurso

- **Mover um ponto**: selecione o percurso e arraste uma das suas pegas de canto quadradas. Mantenha {{key:Shift}} para ajustar o segmento movido a passos de 45°. Um arco mantém a sua curvatura.
- **Dobrar um arco**: um percurso selecionado mostra uma pega redonda no meio de cada arco. Arraste-a: o arco passa pelo sítio onde soltar, pelo que curva mais, menos ou para o outro lado. Arrastado para a reta entre as suas extremidades, passa a ser um segmento reto. {{key:Mod+Z}} anula-o («Dobrar arco»).
- **Eliminar um percurso**: selecione-o e prima {{key:Delete}}, escolha {{ui:Eliminar}} no menu {{ui:Mais}} da barra de ferramentas, ou {{ui:Eliminar marcação}} no painel.
- **Anular**: {{key:Mod+Z}}; refazer com {{key:Mod+Y}}.

Ainda não é possível inserir um ponto a meio de um percurso. Elimine o percurso e desenhe-o de novo.

## Área de parede

Dê ao artigo linear uma {{ui:Altura}} (por exemplo `9'-0"`). Passa então a indicar **Área de parede (A)** = comprimento × altura, em SF (ou m² num artigo métrico), e a área de parede segue para a coluna de notas da exportação para folha de cálculo. Use-a nos conjuntos para tábuas, tinta ou isolamento: ver [Conjuntos e fórmulas](topic:assemblies).
