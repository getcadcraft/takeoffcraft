---
title: Notas, nuvens e destaques
summary: Marque perguntas e alterações nas folhas com notas, nuvens de revisão e destaques, acompanhe cada uma como aberta, respondida ou fechada e envie tudo no PDF marcado.
keywords: marcação, marcações, nota, comentário, pergunta, rfi, nuvem, nuvem de revisão, destaque, status, aberta, respondida, fechada, revisão, lista de marcações
from: 2b395c13
---

Marcações servem para o que você precisa lembrar ou perguntar durante o levantamento: "confirmar o tipo de base", uma nuvem de revisão em volta de uma parede alterada, uma nota destacada na planta. Elas ficam sobre a folha com um status, aparecem listadas em um só lugar e saem impressas no PDF marcado. Elas **nunca são contadas**: sem quantidade, sem custo.

## Adicionar uma

Abra {{ui:Marcação}} na barra acima da folha e escolha:

| Marcação | Como |
|---|---|
| {{ui:Nota}} | Clique onde ela deve ficar, digite a nota e escolha {{ui:Adicionar}}. Ela aparece como um alfinete redondo, com a primeira linha ao lado. |
| {{ui:Nuvem}} | Clique num canto, depois no canto oposto, e digite uma nota (ou deixe vazio). Uma nuvem de revisão em forma de arcos passa em volta da caixa. |
| {{ui:Destaque}} | Clique em dois cantos: uma caixa amarela transparente, com uma nota se quiser. |

{{key:Esc}} depois do primeiro canto cancela. A ferramenta continua ativa para a próxima; {{key:V}} volta para {{ui:Selecionar}}.

## Status e edição

Clique numa marcação com {{ui:Selecionar}} para selecioná-la. O painel da direita mostra **Marcação**: o tipo e a folha, o seu **Status** — Aberto, Respondido ou Fechado — e o texto, que você pode alterar. {{key:Delete}} (ou {{ui:Excluir}}) a remove; {{key:Mod+Z}} a traz de volta.

O alfinete de uma nota fica laranja enquanto está aberto, azul quando respondido e cinza quando fechado; uma nuvem fechada fica cinza.

## A lista

**Marcações** no painel da direita lista todas as marcações do levantamento com o seu status e informa quantas ainda estão abertas. Marque **Somente abertos** para ver o que ainda falta resolver. Clique numa linha para ir até a folha dela e selecioná-la.

## Compartilhar

- {{ui:PDF marcado}} desenha as marcações nas páginas: destaques, nuvens e alfinetes, cada um com uma caixa que indica o status em maiúsculas (ABERTO, RESPONDIDO, FECHADO) e o texto. Uma página com marcações, mas sem marcas de levantamento, também entra.
- {{ui:XLSX}} adiciona uma planilha **Marcações**: folha, tipo, status e texto, uma linha para cada uma.
- Elas são salvas no `.takeoff.json` e num [PDF com o levantamento dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
