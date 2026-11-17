---
title: Iniciar uma medição e abrir um conjunto de plantas
summary: Abra um ou vários PDF como conjunto de plantas, oriente-se pelas folhas e passe de umas para as outras.
keywords: abrir, conjunto de plantas, vários PDF, vários ficheiros, folhas, desenhos, etiquetas de página, lista de folhas, navegar, largar, transmissão, abrir noutra aplicação, anotação
from: ed434468
---

Um conjunto de plantas é muitas vezes composto por vários PDF: arquitetura, estruturas, instalações mecânicas. O TakeoffCraft abre-os lado a lado como uma só lista de folhas, e uma medição pode abranger todos.

## Abrir os PDF

1. Escolha {{ui:Abrir plantas}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+O}}. (Os outros estilos de menu chamam-lhe {{ui:Abrir PDF…}}.)
2. Na janela de ficheiros, selecione todos os PDF do conjunto. Mantenha {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} premido para escolher vários, ou {{key:Shift}} para escolher um intervalo.
3. Escolha Abrir.
   Uma mensagem "A abrir (nome)…" aparece enquanto cada ficheiro é lido. Depois, cada página aparece em {{ui:Folhas}} e abre-se a primeira página do primeiro PDF novo.

Também pode arrastar os PDF a partir do {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=gestor de ficheiros}} e largá-los em qualquer ponto do TakeoffCraft. Enquanto arrasta, aparece a moldura "Largue PDF, desenhos DWG ou DXF, ou um .takeoff.json".

Para acrescentar mais PDF mais tarde, faça o mesmo. Os PDF já abertos são ignorados.

O ecrã inicial também lista os PDF e as medições abertos recentemente, nos navegadores que permitem a uma página abrir novamente um ficheiro (Chrome e Edge). Clique num para o abrir; o navegador pode pedir autorização primeiro. Ver [Os seus ficheiros](common:your-files).

:::note
Nada é enviado. O navegador lê os PDF no seu computador, e estes deixam de estar no TakeoffCraft quando fecha o separador ou escolhe {{ui:Novo}}.
:::

## Desenhos junto aos PDF

{{ui:Abrir plantas}} aceita também desenhos DWG e DXF, sozinhos ou com PDF: o espaço modelo e os layouts de cada desenho tornam-se folhas na mesma lista. Ver [Abrir um desenho DWG ou DXF](topic:open-a-drawing), e depois [Contar a partir de um desenho](topic:count-from-a-drawing).

## Um PDF transmitido por outra aplicação

Outra aplicação da família pode transmitir-lhe o PDF que tem aberto: abre o TakeoffCraft num novo separador e o PDF abre-se ali como se o tivesse largado. A barra de estado diz "Aberto (nome), transmitido de (aplicação). O ficheiro original não foi alterado." Nada é enviado; o ficheiro passa pelo armazenamento deste navegador e sai dele assim que abre.

Se a barra de estado indicar que o PDF "não chegou", o separador esperou demasiado tempo ou o PDF já estava aberto noutro separador: abra-o com {{ui:Abrir plantas}}.

No sentido inverso, quando o MarkupCraft está a correr onde se encontra e consegue receber um ficheiro, a barra de folhas por baixo do desenho tem um botão {{ui:MarkupCraft}}: abre o PDF da folha no ecrã no MarkupCraft, num novo separador, para rever e anotar.

## Encontrar uma folha

- Percorra a lista {{ui:Folhas}} à esquerda e clique numa folha.
- Escreva em **Pesquisar folhas** no topo da lista para filtrar por número de folha, nome do ficheiro ou etiqueta de página. A contagem ao lado de {{ui:Folhas}} mostra "3 de 40" enquanto houver um filtro.
- Prima {{key:PageDown}} para a folha seguinte e {{key:PageUp}} para a anterior. Seguem a lista tal como está filtrada.

:::mac
Num teclado de Mac sem as teclas Page Up e Page Down, prima fn com a seta para cima ou para baixo.
:::

## Como as folhas são nomeadas

- Uma página cujo PDF lhe dá uma etiqueta, como `A-101`, é nomeada por essa etiqueta.
- Uma página sem etiqueta (ou com uma etiqueta que é apenas o número da página) é nomeada "(nome do ficheiro), página (n)".
- Com vários PDF abertos, as folhas com etiqueta também levam o nome do ficheiro: "A-101 — Arquitetura".

Os nomes das folhas ainda não podem ser escritos à mão.

## Observar uma folha

- Rode a roda do rato para fazer zoom no ponteiro.
- Arraste com o botão esquerdo ou o do meio para deslocar a vista. Com {{ui:Contagem automática}}, ou quando começa num canto de uma marca, mantenha {{key:Space}} premido enquanto arrasta, ou arraste com o botão do meio.
- Prima {{key:F}} ou escolha {{ui:Ajustar página}} para ver a folha inteira; {{key:W}} ou {{ui:Ajustar largura}} ajusta-a à largura.
- Prima {{key:Plus}} ou {{key:=}} para ampliar e {{key:Minus}} para reduzir, em torno do centro da vista.

Cada folha guarda o seu próprio zoom e posição enquanto estiver aberta.

## Seguinte

Antes de poder medir uma folha, esta precisa de uma escala: [Definir a escala](topic:set-the-scale).
