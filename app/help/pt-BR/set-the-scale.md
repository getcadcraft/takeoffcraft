---
title: Definir a escala
summary: Dê a cada folha uma escala com uma predefinição ou calibrando com uma dimensão conhecida, confira-a, e entenda por que as folhas sem escala ficam fora dos totais.
keywords: detectar escala, ler escala, escala a partir do texto, todas as folhas, escala, calibrar, predefinição, conferir escala, verificar, dimensão conhecida, sem escala, razão, definir escala
from: 8f0148e6
---

Cada folha tem a sua própria escala. Você a define, ou deixa o TakeoffCraft lê-la do texto das folhas (abaixo), e confere. Até que uma folha tenha uma, {{ui:Linear}}, {{ui:Área}}, {{ui:Círculo}} e {{ui:Recorte}} se recusam a medir nela. {{ui:Contagem}} e {{ui:Contagem automática}} funcionam sem escala.

A lista de folhas mostra a escala de cada folha, ou **Sem escala**. A barra sob a folha aberta diz o mesmo.

## Usar uma predefinição (quando o PDF é impresso em tamanho real)

1. Abra a folha.
2. Abra a lista {{ui:Predefinida}} no grupo {{ui:Escala}}.
3. Escolha a escala impressa no desenho, por exemplo `1/8" = 1'-0"` em Arquitetônica.
   A barra de status diz "Escala desta folha: 1/8" = 1'-0"."
4. Confira (abaixo).

Uma predefinição pressupõe que o PDF está no tamanho real de papel para o qual o desenho foi feito. Se alguém criou o PDF com "ajustar à página", ou é um conjunto em meia escala, a predefinição está errada. Calibre em vez disso.

A lista completa está em [Predefinições de escala](topic:scale-presets).

## Ler as escalas do texto das folhas

A maioria dos desenhos informa a sua escala: `SCALE: 1/4" = 1'-0"` no carimbo, `1:100` sob uma vista. O TakeoffCraft pode lê-la e definir todas as folhas de uma vez.

1. Abra a lista {{ui:Predefinida}} e escolha {{ui:A partir do texto das folhas…}} (no topo).
2. A lista mostra cada folha: a escala atual dela, e o que o texto diz — **Diz 1/4" = 1'-0"**, **Nenhuma escala no texto** ou **Diz não usar escala** (NTS).
3. As folhas sem escala que informam uma são marcadas. Marque ou desmarque qualquer uma e escolha {{ui:Definir as escalas marcadas}}. Um {{key:Mod+Z}} desfaz todas de uma vez.
4. Confira uma dimensão em cada folha com {{ui:Conferir}} (abaixo): uma predefinição só está certa quando o PDF é impresso em tamanho real.

Ele lê notações arquitetônicas (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), de engenharia (`1" = 20'`) e métricas (`1:50`) que correspondem a uma [predefinição](topic:scale-presets). Quando uma folha informa mais de uma escala (uma planta com detalhes ampliados), ele adota a que ela mais repete, e uma escala escrita depois da palavra SCALE conta em dobro; as outras aparecem em vermelho para você conferir. Uma folha digitalizada não tem texto: defina a escala dela manualmente.

## Calibrar com uma dimensão conhecida

Use isto quando não há uma escala impressa em que você confie, quando o conjunto foi redimensionado, ou quando a folha diz "não está em escala" mas tem cotas.

1. Abra a folha e amplie uma dimensão longa que você conhece, como o espaçamento de uma linha de eixo ou uma dimensão geral do edifício. Quanto mais longa, mais precisa.
2. Escolha {{ui:Calibrar}} no grupo {{ui:Escala}}, ou pressione {{key:K}}.
3. Clique em uma extremidade da dimensão. Amplie cada extremidade para ter precisão; você pode ampliar e mover a visão entre os cliques.
4. Clique na outra extremidade. Segure {{key:Shift}} para manter a linha em 0°, 45° ou 90°.
   A caixa de diálogo **Calibrar esta folha** abre.
5. Digite a distância real em **Distância real**, por exemplo `24'-6 1/2"`, `24.5` (pés decimais), `30"` ou `7.5 m`. Veja [Entrada de comprimento, preço e percentual](topic:entry-formats).
6. Escolha {{ui:Definir a escala}}.
   A barra de status mostra a escala como "1" = (n)'", e quando ela está a 0.5% de uma predefinição, diz qual, por exemplo "que corresponde a 1/4" = 1'-0" (escolha essa predefinição para uma escala exata)".
   O TakeoffCraft volta para a ferramenta {{ui:Selecionar}}.

Quando a calibração corresponde a uma predefinição, escolher essa predefinição dá uma escala exata, em vez de uma que depende de onde você clicou.

## Conferir a escala

Sempre confira uma escala nova em uma segunda dimensão.

1. Escolha {{ui:Conferir}} no grupo {{ui:Escala}}, ou pressione {{key:D}}.
2. Clique nas duas extremidades de uma dimensão impressa no desenho.
   A barra de status mostra "Conferir: 12'-6"" com o mesmo comprimento em pés decimais e em metros, e a linha de conferência permanece na folha com o seu comprimento.
3. Compare com a dimensão impressa. Se não bater, calibre em uma dimensão mais longa.

Pressione {{key:Esc}} para limpar a linha de conferência.

## Mudar uma escala

Escolha outra predefinição ou calibre de novo. Se a folha já tem medições, o TakeoffCraft pergunta **Mudar a escala desta folha?** e informa quantas medições serão medidas de novo. Escolha {{ui:Mudar a escala}}. Cada trecho e área da folha é medido novamente na nova escala. Você pode desfazer com {{key:Mod+Z}}.

## Por que folhas sem escala não contam como zero

Uma marcação em folha sem escala não tem comprimento ou área reais. O TakeoffCraft nunca a conta como zero, pois isso deixaria o seu orçamento baixo sem aviso. Em vez disso, ele:

- deixa essas marcações fora dos totais,
- mostra "+(n) sem escala" ao lado do item em {{ui:Quantitativos}},
- mostra "Incompleto: (n) marcações em folhas sem escala (fora dos totais)" no cabeçalho da tabela,
- escreve a contagem na coluna de observações da planilha exportada.

Isso pode acontecer quando você abre um projeto cujas escalas nunca foram definidas. Dê uma escala à folha e as marcações são contadas de imediato. Marcações de contagem são sempre contadas; elas não precisam de escala.

## Dicas

- Defina a escala de cada folha que você vai medir antes de começar. Procure **Sem escala** na lista de folhas para encontrar as que faltam (a caixa de busca olha os nomes das folhas, não as escalas).
- Detalhes e plantas ampliadas na mesma folha costumam usar outra escala. O TakeoffCraft tem uma escala por folha; veja [O que ainda não foi implementado](topic:not-built-yet).
- Desenhos métricos: escolha uma predefinição métrica como `1:100`, ou calibre com uma distância métrica como `6000 mm`.
