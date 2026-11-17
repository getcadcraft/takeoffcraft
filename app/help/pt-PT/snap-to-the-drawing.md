---
title: Snap às linhas do desenho
summary: Os pontos saltam para o próprio traçado vetorial do PDF enquanto mede ou calibra: extremidades, pontos médios, cruzamentos ou qualquer ponto de uma linha, com um marcador que indica qual.
keywords: snap, osnap, snap a objetos, extremidade, ponto médio, interseção, mais próximo, vetor, traçado, linhas, preciso, exato, f3, íman, canto
from: 41d29e9b
---

A maioria dos conjuntos de plantas são PDF vetoriais: as paredes e as arestas são linhas reais, não pixels. Enquanto mede, o TakeoffCraft ajusta os seus cliques a essas linhas, para que um troço comece exatamente no canto de uma parede e uma calibração leia a cota que o desenhador desenhou, e não o pixel onde clicou.

O snap está ativado ao iniciar. Ative e desative-o com {{ui:Snap}} na barra de estado ou com {{key:F3}}; a definição fica guardada neste navegador (também está em [Definições](topic:settings)).

## A que se ajusta

Quando o ponteiro fica a cerca de 10 pixels de ecrã de uma linha, um marcador mostra onde o clique vai cair, com o respetivo nome:

| Marcador | Nome | Onde |
|---|---|---|
| Quadrado | **Extremidade** | O fim de uma linha, ou um canto onde as linhas se encontram. As duas extremidades de uma curva contam; os pontos ao longo dela não. |
| Triângulo | **Ponto médio** | O meio de uma linha reta. |
| Cruz | **Interseção** | Onde duas linhas se cruzam, ou onde uma termina noutra. |
| Ampulheta | **Sobre a linha** | O ponto mais próximo numa linha, quando nenhuma extremidade, ponto médio ou cruzamento está perto. |

Ganha a extremidade, o ponto médio ou o cruzamento mais próximo. Só quando nenhum está perto é que o ponto fica sobre a própria linha. Aumente o zoom para escolher entre pontos muito próximos: os 10 pixels são pixels de ecrã, por isso, com um zoom maior, cobrem menos da folha.

## Onde funciona

O snap funciona em {{ui:Linear}}, {{ui:Área}}, {{ui:Círculo}}, {{ui:Recorte}}, {{ui:Calibrar}} e {{ui:Verificar}}, e quando arrasta o canto de uma marca selecionada. Também coloca pontos em arcos. {{ui:Contagem}}, {{ui:Contagem automática}} e a colagem não usam snap.

Um ponto com snap tem prioridade sobre o snap de 45° de {{key:Shift}}: para desenhar a 45° afastado das linhas, desative primeiro o Snap com {{key:F3}}.

:::tip
Calibre com o Snap ativado. Clique perto das duas extremidades de uma linha de cota ou de uma parede cuja medida conhece: os dois pontos caem exatamente sobre o desenho e a escala sai exata (a barra de estado indica então a predefinida a que corresponde).
:::

## Folhas onde o snap não funciona

- **As folhas digitalizadas** são imagens sem linhas a que o snap se possa ajustar. A barra de estado diz "Esta folha não tem linhas a que o snap se possa ajustar (uma página digitalizada é uma imagem)." e os pontos vão para onde clicar.
- **Desenhos muito grandes**: o snap lê até 400,000 segmentos de linha por folha. Numa folha com mais, a aplicação indica-o e faz snap apenas aos primeiros.
- **O texto** não é alvo de snap, a menos que o PDF desenhe as letras como linhas (alguns plotters o fazem).

As linhas da folha são lidas na primeira vez que a abre, em segundo plano; uma folha grande pode demorar um segundo até os marcadores aparecerem.
