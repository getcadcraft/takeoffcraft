---
title: Definir a escala
summary: Atribua a cada folha uma escala com uma predefinição ou calibrando com uma dimensão conhecida, verifique-a, e perceba porque é que as folhas sem escala ficam de fora dos totais.
keywords: detetar escala, ler escala, escala a partir do texto, todas as folhas, escala, calibrar, predefinição, verificar escala, confirmar, dimensão conhecida, sem escala, razão, definir escala
from: 8f0148e6
---

Cada folha tem a sua própria escala. Pode defini-la ou deixar que o TakeoffCraft a leia a partir do texto das folhas (ver abaixo), e deve verificá-la. Enquanto uma folha não tiver escala, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} e {{ui:Cut-out}} recusam medir nela. {{ui:Count}} e {{ui:Auto count}} funcionam sem escala.

A lista de folhas mostra a escala de cada folha, ou **Sem escala**. A barra por baixo da folha aberta diz o mesmo.

## Usar uma predefinição (quando o PDF está impresso em tamanho real)

1. Abra a folha.
2. Abra a lista {{ui:Preset}} no grupo {{ui:Scale}}.
3. Escolha a escala impressa no desenho, por exemplo `1/8" = 1'-0"` em Arquitetónica.
   A barra de estado diz «Escala desta folha: 1/8" = 1'-0".»
4. Verifique-a (abaixo).

Uma predefinição assume que o PDF tem o tamanho real do papel para o qual o desenho foi feito. Se alguém fez o PDF com «ajustar à página», ou se é um conjunto a metade do tamanho, a predefinição está errada. Calibre em vez disso.

A lista completa está em [Escalas predefinidas](topic:scale-presets).

## Ler as escalas a partir do texto das folhas

A maioria dos desenhos indica a sua escala: `SCALE: 1/4" = 1'-0"` na legenda, `1:100` por baixo de uma vista. O TakeoffCraft pode lê-la e definir todas as folhas de uma só vez.

1. Abra a lista {{ui:Preset}} e escolha {{ui:Do texto das folhas…}} (no topo).
2. A lista mostra cada folha: a sua escala atual, e o que o seu texto diz — **Diz 1/4" = 1'-0"**, **Sem escala no texto**, ou **Indica sem escala** (NTS).
3. As folhas sem escala que indicam uma ficam marcadas. Marque ou desmarque as que quiser e escolha {{ui:Set the ticked scales}}. Um {{key:Mod+Z}} anula todas de uma vez.
4. Verifique uma dimensão em cada folha com {{ui:Check}} (abaixo): uma predefinição só está certa quando o PDF é impresso em tamanho real.

Lê notações arquitetónicas (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), de engenharia (`1" = 20'`) e métricas (`1:50`) que correspondam a uma [predefinição](topic:scale-presets). Quando uma folha indica mais do que uma escala (uma planta com pormenores ampliados), usa a que mais vezes indica, e a escala escrita a seguir à palavra SCALE conta em dobro; as outras aparecem a vermelho para as verificar. Uma folha digitalizada não tem texto: defina a sua escala à mão.

## Calibrar com uma dimensão conhecida

Use isto quando não há uma escala impressa em que confie, quando o conjunto foi redimensionado, ou quando a folha diz «sem escala» mas tem cotas.

1. Abra a folha e aproxime a vista de uma dimensão longa que conheça, como o espaçamento entre linhas de grelha ou uma dimensão global do edifício. Quanto mais longa, mais exata.
2. Escolha {{ui:Calibrate}} no grupo {{ui:Scale}}, ou prima {{key:K}}.
3. Clique numa extremidade da dimensão. Aproxime a vista em cada extremidade para maior precisão; pode aproximar e deslocar a vista entre os cliques.
4. Clique na outra extremidade. Mantenha {{key:Shift}} premido para manter a linha a 0°, 45° ou 90°.
   A caixa de diálogo **Calibrar esta folha** abre-se.
5. Escreva a distância real em **Distância real**, por exemplo `24'-6 1/2"`, `24.5` (pés decimais), `30"` ou `7.5 m`. Ver [Introdução de comprimentos, preços unitários e percentagens](topic:entry-formats).
6. Escolha {{ui:Set the scale}}.
   A barra de estado mostra a escala como «1" = (n)'», e quando está a menos de 0.5% de uma predefinição indica qual, por exemplo «que corresponde a 1/4" = 1'-0" (escolha essa predefinição para uma escala exata)».
   O TakeoffCraft volta à ferramenta {{ui:Select}}.

Quando a calibração corresponde a uma predefinição, escolher essa predefinição dá uma escala exata, em vez de uma que depende de onde clicou.

## Verificar a escala

Verifique sempre uma escala nova numa segunda dimensão.

1. Escolha {{ui:Check}} no grupo {{ui:Scale}}, ou prima {{key:D}}.
2. Clique nas duas extremidades de uma dimensão impressa no desenho.
   A barra de estado mostra «Verificação: 12'-6"» com o mesmo comprimento em pés decimais e em metros, e a linha de verificação fica na folha com o seu comprimento.
3. Compare com a dimensão impressa. Se não coincidir, calibre numa dimensão mais longa.

Prima {{key:Esc}} para limpar a linha de verificação.

## Alterar uma escala

Escolha outra predefinição ou calibre de novo. Se a folha já tiver medições, o TakeoffCraft pergunta **Alterar a escala desta folha?** e diz quantas medições serão medidas de novo. Escolha {{ui:Change the scale}}. Cada percurso e área na folha é medido de novo à nova escala. Pode anular com {{key:Mod+Z}}.

## Porque é que as folhas sem escala não contam como zero

Uma marca numa folha sem escala não tem comprimento ou área reais. O TakeoffCraft nunca a conta como zero, pois isso baixaria o orçamento sem que se notasse. Em vez disso:

- deixa essas marcas de fora dos totais,
- mostra «+(n) sem escala» ao lado do artigo em {{ui:Quantities}},
- mostra «Incompleto: (n) marcas em folhas sem escala (fora dos totais)» no cabeçalho da tabela,
- escreve a contagem na coluna de notas da exportação para folha de cálculo.

Isto pode acontecer quando abre um projeto cujas escalas nunca foram definidas. Dê uma escala à folha e as marcas são contadas de imediato. As marcas de contagem são sempre contadas; não precisam de escala.

## Sugestões

- Defina a escala de todas as folhas que vai medir antes de começar. Procure **Sem escala** na lista de folhas para encontrar as que faltam (a caixa de pesquisa procura nomes de folhas, não escalas).
- Pormenores e plantas ampliadas na mesma folha usam muitas vezes outra escala. O TakeoffCraft tem uma escala por folha; ver [O que ainda não está implementado](topic:not-built-yet).
- Desenhos métricos: escolha uma predefinição métrica como `1:100`, ou calibre com uma distância métrica como `6000 mm`.
