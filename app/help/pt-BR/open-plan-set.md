---
title: Iniciar um levantamento e abrir um conjunto de plantas
summary: Abra um ou vários PDFs como um conjunto de plantas, encontre o caminho entre as folhas e navegue entre elas.
keywords: abrir, conjunto de plantas, vários pdfs, múltiplos arquivos, folhas, desenhos, rótulos de página, lista de folhas, navegar, soltar, transferência, abrir em outro aplicativo, marcação
from: ed434468
---

Um conjunto de plantas costuma ser composto de vários PDFs: arquitetônico, estrutural, mecânico. O TakeoffCraft os abre lado a lado como uma única lista de folhas, e um levantamento pode cobrir todos eles.

## Abrir os PDFs

1. Escolha {{ui:Open plans}} no grupo {{ui:File}}, ou pressione {{key:Mod+O}}. (Os outros estilos de menu chamam isso de {{ui:Open PDFs…}}.)
2. Na caixa de diálogo de arquivos, selecione todos os PDFs do conjunto. Mantenha {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} pressionado para escolher vários, ou {{key:Shift}} para escolher um intervalo.
3. Escolha Abrir.
   Uma mensagem "Abrindo (nome)…" aparece enquanto cada arquivo é lido. Em seguida, cada página aparece em {{ui:Sheets}} e a primeira página do primeiro PDF novo é aberta.

Você também pode arrastar os PDFs de {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} e soltá-los em qualquer lugar do TakeoffCraft. Uma moldura "Solte PDFs, desenhos DWG ou DXF, ou um .takeoff.json" aparece enquanto você arrasta.

Para adicionar mais PDFs depois, faça o mesmo de novo. PDFs que já estão abertos são ignorados.

A tela inicial também lista os PDFs e levantamentos abertos recentemente, em navegadores que permitem a uma página abrir um arquivo novamente (Chrome e Edge). Clique em um deles para abri-lo; o navegador pode pedir permissão antes. Veja [Seus arquivos](common:your-files).

:::note
Nada é enviado. O navegador lê os PDFs no seu computador, e eles saem do TakeoffCraft quando você fecha a aba ou escolhe {{ui:New}}.
:::

## Desenhos junto com PDFs

{{ui:Open plans}} também aceita desenhos DWG e DXF, sozinhos ou junto com PDFs: o espaço modelo e os layouts de cada desenho se tornam folhas na mesma lista. Veja [Abrir um desenho DWG ou DXF](topic:open-a-drawing), depois [Contar a partir de um desenho](topic:count-from-a-drawing).

## Um PDF transferido de outro aplicativo

Outro aplicativo da mesma família pode lhe passar o PDF que tem aberto: ele abre o TakeoffCraft em uma nova aba, e o PDF abre ali como se você tivesse soltado nele. A barra de status diz "Aberto (nome), transferido de (aplicativo). O arquivo original não foi alterado." Nada é enviado; o arquivo passa pelo armazenamento próprio deste navegador e sai dele assim que é aberto.

Se a barra de status disser que o PDF "não chegou", a aba esperou tempo demais, ou o PDF já estava aberto em outra aba: abra-o com {{ui:Open plans}}.

No sentido inverso, quando o MarkupCraft está em execução onde você está e pode receber um arquivo, a barra de folhas sob o desenho tem um botão {{ui:MarkupCraft}}: ele abre o PDF da folha na tela no MarkupCraft, em uma nova aba, para revisar e marcar.

## Encontrar uma folha

- Role a lista {{ui:Sheets}} à esquerda e clique em uma folha.
- Digite em **Pesquisar folhas**, no topo da lista, para filtrar por número da folha, nome do arquivo ou rótulo de página. O contador ao lado de {{ui:Sheets}} mostra "3 de 40" enquanto um filtro está ativo.
- Pressione {{key:PageDown}} para a próxima folha e {{key:PageUp}} para a anterior. Elas seguem a lista como filtrada.

:::mac
Em um teclado de Mac sem as teclas Page Up e Page Down, pressione fn com a seta para cima ou para baixo.
:::

## Como as folhas são nomeadas

- Uma página cujo PDF lhe dá um rótulo, como `A-101`, recebe esse rótulo como nome.
- Uma página sem rótulo (ou cujo rótulo é apenas o número da página) é nomeada "(nome do arquivo), página (n)".
- Com vários PDFs abertos, as folhas com rótulo também trazem o nome do arquivo: "A-101 — Arquitetônico".

Os nomes das folhas ainda não podem ser digitados à mão.

## Percorrer uma folha

- Gire a roda do mouse para dar zoom no ponteiro.
- Arraste com o botão esquerdo ou do meio para mover a folha. Com {{ui:Auto count}}, ou quando você começa no canto de uma marca, mantenha {{key:Space}} pressionada enquanto arrasta, ou arraste com o botão do meio.
- Pressione {{key:F}} ou escolha {{ui:Fit page}} para ver a folha inteira; {{key:W}} ou {{ui:Fit width}} ajusta a largura dela.
- Pressione {{key:Plus}} ou {{key:=}} para aumentar o zoom, e {{key:Minus}} para diminuir, em torno do centro da visualização.

Cada folha lembra o próprio zoom e posição enquanto estiver aberta.

## Próximo passo

Antes de medir uma folha, ela precisa de uma escala: [Definir a escala](topic:set-the-scale).
