---
title: Contar manualmente
summary: Clique em cada porta, aparelho ou dispositivo para o contar, verifique as contagens e corrija os erros.
keywords: contar, cada, EA, equipamentos, aparelhos, portas, dispositivos, símbolos, marcas de contagem, clicar para contar, contagem manual
from: 594f2980
---

Um artigo de contagem conta coisas: portas, luminárias, tomadas e aparelhos sanitários. Cada clique na folha acrescenta uma marcação de contagem. Contar não precisa de escala.

## Contar

1. Crie ou clique num artigo de contagem em {{ui:Artigos}} (tipo {{ui:Contagem}}).
2. Escolha {{ui:Contagem}} na barra de ferramentas, ou prima {{key:C}}.
3. Clique em cada um na folha.
   Cada clique põe um ponto na cor do artigo, e a contagem do artigo sobe um.
4. Passe à folha seguinte ({{key:PageDown}}) e continue a contar. A ferramenta mantém-se em {{ui:Contagem}}.
5. Prima {{key:Esc}} quando terminar. O TakeoffCraft volta a {{ui:Selecionar}}.

Arrastar continua a deslocar a vista, e a roda continua a fazer zoom enquanto conta, por isso pode mover-se pela folha sem acrescentar pontos.

:::tip
Clique no artigo de contagem para destacar os seus pontos em todas as folhas. A lista de folhas mostra então quantos há em cada uma, o que ajuda a encontrar as folhas que ainda não contou.
:::

## Corrigir uma contagem

- **Remover um ponto**: escolha {{ui:Selecionar}} ({{key:V}}), clique no ponto e prima {{key:Delete}} ou escolha {{ui:Eliminar marcação}}. Ou prima {{key:Mod+Z}} logo a seguir a um clique errado.
- **Mover um ponto**: selecione-o e arraste-o.
- **Contado no artigo errado**: selecione o ponto e escolha o artigo de contagem certo na lista **Artigo** em **Marcação selecionada**.

## Tamanho dos pontos, no ecrã e no PDF

Os pontos mantêm o mesmo tamanho no ecrã, por mais zoom que faça. Para o alterar, abra {{ui:Definições}}, o separador TakeoffCraft, e escolha **Tamanho do marcador de contagem**: Extra pequeno, Pequeno, Médio (o predefinido) ou Grande.

A exportação para PDF ({{ui:Exportar}} › PDF marcado) desenha cada ponto com o mesmo tamanho no papel, qualquer que seja o tamanho da folha: um leitor que mostre o PDF a 100% mostra os pontos com o tamanho que têm no ecrã. Quando os pontos de uma folha continuariam a tocar-se, a exportação torna os pontos dessa folha mais pequenos para que cada um possa ser lido.

## Muitos símbolos iguais

Para um símbolo que se repete muitas vezes numa folha, experimente [Contagem automática](topic:auto-count): desenhe uma caixa em volta de um, reveja o que encontra e acrescente todos num só passo.

## Usar contagens em fórmulas

A quantidade de um artigo de contagem é **N**. Os componentes do preço composto podem usá-la, por exemplo dobradiças `N * 3` para portas. Consulte [Preços compostos e fórmulas](topic:assemblies).
