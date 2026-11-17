---
title: Snap nas linhas do desenho
summary: Os pontos saltam para as próprias linhas do PDF enquanto você mede ou calibra: extremidades, pontos médios, cruzamentos ou qualquer ponto de uma linha, com um marcador que indica qual é.
keywords: snap, osnap, snap de objeto, extremidade, ponto médio, interseção, mais próximo, vetor, linhas do desenho, linhas, preciso, exato, f3, ímã, canto
from: 41d29e9b
---

A maioria dos conjuntos de plantas são PDFs vetoriais: suas paredes e bordas são linhas reais, não pixels. Enquanto você mede, o TakeoffCraft encaixa seus cliques nessas linhas, de modo que um trecho começa exatamente no canto de uma parede e uma calibração lê a cota que o desenhista desenhou, não o pixel em que você clicou.

O snap está ativado ao iniciar. Ative e desative o snap com {{ui:Snap}} na barra de status ou com {{key:F3}}; a configuração fica salva neste navegador (também está em [Configurações](topic:settings)).

## Onde o snap atua

Quando o ponteiro chega a cerca de 10 pixels da tela de uma linha, um marcador mostra onde o clique vai cair, com seu nome:

| Marcador | Nome | Onde |
|---|---|---|
| Quadrado | **Extremidade** | A extremidade de uma linha, ou um canto onde as linhas se encontram. As duas extremidades de uma curva contam; os pontos ao longo dela não. |
| Triângulo | **Ponto médio** | O meio de uma linha reta. |
| Cruz | **Interseção** | Onde duas linhas se cruzam, ou onde uma termina sobre outra. |
| Ampulheta | **Sobre a linha** | O ponto mais próximo sobre uma linha, quando nenhuma extremidade, ponto médio ou cruzamento está perto. |

Vence a extremidade, o ponto médio ou o cruzamento mais próximo. Só quando nenhum deles está perto o ponto cai sobre a própria linha. Aproxime o zoom para escolher entre pontos muito próximos: os 10 pixels são pixels da tela, então com zoom maior eles cobrem menos da folha.

## Onde funciona

O snap funciona em {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}}, {{ui:Recorte}}, {{ui:Calibrate}} e {{ui:Check}}, e ao arrastar o canto de uma marca selecionada. Ele também posiciona pontos de arco. {{ui:Count}}, {{ui:Auto count}} e colar não usam snap.

Um ponto com snap tem prioridade sobre o snap de 45° de {{key:Shift}}: para desenhar a 45° longe das linhas, desative antes o snap com {{key:F3}}.

:::tip
Calibre com o snap ativado. Clique perto das duas extremidades de uma linha de cota ou de uma parede cuja medida você conhece: ambos os pontos caem exatamente sobre o desenho, e a escala fica exata (a barra de status então informa a escala predefinida correspondente).
:::

## Folhas em que o snap não funciona

- **Folhas digitalizadas** são imagens sem linhas para fazer snap. A barra de status diz "Esta folha não tem linhas para fazer snap (uma página digitalizada é uma imagem)." e os pontos vão para onde você clicar.
- **Desenhos muito grandes**: o snap lê até 400,000 segmentos de linha por folha. Em uma folha com mais, o aplicativo informa isso e faz snap apenas nos primeiros.
- **Texto** não recebe snap, a não ser que o PDF desenhe as letras como linhas (alguns plotters fazem isso).

As linhas da folha são lidas na primeira vez que você a abre, em segundo plano; uma folha grande pode levar um segundo até os marcadores aparecerem.
