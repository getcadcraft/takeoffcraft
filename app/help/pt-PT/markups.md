---
title: Notas, nuvens e realces
summary: Marque dúvidas e alterações nas folhas com notas, nuvens de revisão e realces, acompanhe cada um como aberto, respondido ou fechado, e envie-os no PDF marcado.
keywords: anotação, anotações, nota, comentário, questão, rfi, nuvem, nuvem de revisão, realce, estado, aberta, respondida, fechada, revisão, lista de anotações
from: 2b395c13
---

As anotações servem para o que precisa de lembrar ou perguntar durante a medição: «confirmar o tipo de base», uma nuvem de revisão à volta de uma parede alterada, uma nota realçada na planta. Ficam na folha com um estado, são listadas num só sítio e são impressas no PDF marcado. **Nunca são contadas**: sem quantidade, sem custo.

## Adicionar uma

Abra {{ui:Anotações}} na barra acima da folha e escolha:

| Anotação | Como |
|---|---|
| {{ui:Nota}} | Clique onde deve ficar, escreva a nota e escolha {{ui:Adicionar}}. Aparece como um alfinete redondo com a primeira linha ao lado. |
| {{ui:Nuvem}} | Clique num canto e depois no canto oposto, e escreva uma nota (ou deixe-a vazia). Uma nuvem de revisão em festões fica à volta da caixa. |
| {{ui:Realce}} | Clique em dois cantos: uma caixa amarela transparente, com uma nota se quiser. |

{{key:Esc}} depois do primeiro canto cancela. A ferramenta mantém-se ativa para a seguinte; {{key:V}} volta a {{ui:Selecionar}}.

## Estado e edição

Clique numa anotação com {{ui:Selecionar}} para a selecionar. O painel da direita mostra **Anotação**: o respetivo tipo e folha, o seu **Estado** — Aberta, Respondida ou Fechada — e o texto, que pode alterar. {{key:Delete}} (ou {{ui:Eliminar}}) remove-a; {{key:Mod+Z}} a recupera.

O alfinete de uma nota é laranja enquanto estiver aberta, azul depois de respondida e cinzento quando fechada; uma nuvem fechada passa a cinzento.

## A lista

**Anotações** no painel da direita lista todas as anotações da medição com o respetivo estado, e indica quantas continuam abertas. Marque **Só abertas** para ver o que falta resolver. Clique numa linha para ir à respetiva folha e selecioná-la.

## Partilhar

- {{ui:PDF marcado}} desenha-as nas páginas: realces, nuvens e alfinetes, cada um com uma caixa que indica o estado em maiúsculas (ABERTA, RESPONDIDA, FECHADA) e o respetivo texto. Uma página com anotações mas sem marcas de medição também é incluída.
- {{ui:XLSX}} acrescenta uma folha de cálculo **Anotações**: folha, tipo, estado e texto, uma linha por cada anotação.
- Ficam guardadas no `.takeoff.json` e num [PDF com a medição dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
