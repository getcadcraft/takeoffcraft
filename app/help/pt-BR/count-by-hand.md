---
title: Contar manualmente
summary: Clique em cada porta, luminária ou dispositivo para contá-lo, confira suas contagens e corrija erros.
keywords: contar, cada, ea, aparelhos, portas, dispositivos, símbolos, contagem simples, contagem por clique, contagem manual
from: 594f2980
---

Um item de contagem conta coisas: portas, luminárias, tomadas, aparelhos hidráulicos. Cada clique na folha adiciona uma marcação de contagem. Contar não precisa de escala.

## Contar

1. Crie ou clique em um item de contagem em {{ui:Itens}} (tipo {{ui:Contagem}}).
2. Escolha {{ui:Contagem}} na barra de ferramentas, ou pressione {{key:C}}.
3. Clique em cada um na folha.
   Cada clique põe um ponto na cor do item, e a contagem do item sobe em um.
4. Vá para a próxima folha ({{key:PageDown}}) e continue contando. A ferramenta continua em {{ui:Contagem}}.
5. Pressione {{key:Esc}} quando terminar. O TakeoffCraft volta para {{ui:Selecionar}}.

Arrastar ainda faz pan, e a roda do mouse ainda faz zoom enquanto você conta, então você pode se mover pela folha sem adicionar pontos.

:::tip
Clique no item de contagem para destacar os seus pontos em todas as folhas. A lista de folhas então mostra quantos há em cada uma, o que ajuda a encontrar as folhas que você ainda não contou.
:::

## Corrigir uma contagem

- **Remover um ponto**: escolha {{ui:Selecionar}} ({{key:V}}), clique no ponto e pressione {{key:Delete}} ou escolha {{ui:Excluir marcação}}. Ou pressione {{key:Mod+Z}} logo após um clique errado.
- **Mover um ponto**: selecione-o e depois arraste.
- **Contado no item errado**: selecione o ponto e escolha o item de contagem certo na lista **Item** em **Marcação selecionada**.

## Tamanho do ponto, na tela e no PDF

Os pontos mantêm um tamanho na tela, não importa o quanto você amplie. Para mudá-lo, abra {{ui:Configurações}}, a guia TakeoffCraft, e escolha **Tamanho do marcador de contagem**: Muito pequeno, Pequeno, Médio (o padrão) ou Grande.

A exportação para PDF ({{ui:Exportar}} › o PDF marcado) desenha cada ponto no mesmo tamanho no papel, qualquer que seja o tamanho da folha: um visualizador que mostra o PDF a 100% exibe os pontos do tamanho que têm na tela. Quando os pontos de uma folha ainda se tocariam, a exportação deixa os pontos dessa folha menores, para que cada um possa ser lido.

## Muitos símbolos idênticos

Para um símbolo que se repete muitas vezes em uma folha, experimente a [Contagem automática](topic:auto-count): envolva um, revise o que ele encontra e adicione todos de uma vez.

## Usar contagens em fórmulas

A quantidade de um item de contagem é **N**. Os componentes de composição podem usá-la, por exemplo dobradiças `N * 3` para portas. Veja [Composições e fórmulas](topic:assemblies).
