---
title: Primeiros passos com o TakeoffCraft
summary: O que o TakeoffCraft faz, onde ele roda e seu primeiro item medido e precificado a partir de um conjunto de plantas em PDF.
keywords: início, primeiro levantamento, início rápido, introdução, orçamento, levantamento de quantitativos, conjunto de plantas, pdf
from: 3b9da1fb
---

O TakeoffCraft mede conjuntos de plantas, PDFs e desenhos DWG ou DXF, e transforma as medições em um orçamento precificado. Você abre os arquivos (um desenho é contado direto a partir de seus blocos: veja [Abrir um desenho DWG ou DXF](topic:open-a-drawing)), dá uma escala a cada folha (um desenho traz a sua), cria **itens** (um tipo de parede, um acabamento de piso, uma peça) e clica nas folhas para levantá-los. Quantitativos, custos e o total da obra são atualizados conforme você trabalha. Você pode exportar o orçamento como planilha e uma cópia dos PDFs com o seu levantamento desenhado.

Se você já fez levantamento de quantitativos em outros programas, leia a seguir [Se você vem de outro software de levantamento](topic:coming-from). Algumas coisas funcionam de outro jeito aqui.

## Onde ele roda

O TakeoffCraft roda no seu navegador. Abra o TakeoffCraft e a tela fica pronta na hora; não há nada para instalar.

- **Seus PDFs ficam no seu computador.** O navegador os abre e eles nunca são enviados. Salvar é um download.
- Funciona nas versões atuais do Chrome, Edge, Firefox e Safari. Veja [Navegadores e computadores](common:browsers).
- Funciona sem conexão com a internet depois que você escolhe {{ui:Salvar para uso offline}} na barra do aplicativo e ela mostra {{ui:Pronto para uso offline}}. Veja [Trabalhar offline](common:offline).
- O salvamento na nuvem ainda não está disponível. Como aplicativo de desktop, o TakeoffCraft vem no CadCraft Studio, com os outros sete aplicativos.

## Seu primeiro levantamento em dez passos

Este roteiro mede um tipo de parede e o precifica. Leva alguns minutos com qualquer planta que você tenha.

1. Escolha {{ui:Abrir plantas}} no grupo {{ui:Arquivo}} da barra de ferramentas (ou pressione {{key:Mod+O}}), selecione um ou mais PDFs e escolha Abrir. Você também pode soltar os PDFs em qualquer lugar da página.
   As folhas aparecem à esquerda e a primeira folha abre no meio.
2. Procure a escala impressa da folha na legenda ou sob o título de um desenho.
3. Abra a lista {{ui:Predefinida}} no grupo {{ui:Escala}} e escolha essa escala, por exemplo `1/4" = 1'-0"`.
   A barra na parte de baixo da folha agora diz "Escala 1/4" = 1'-0"".
4. Escolha {{ui:Conferir}} (ou pressione {{key:D}}) e clique nas duas pontas de uma cota impressa no desenho.
   A leitura na barra de status, embaixo à esquerda, deve coincidir com a cota impressa. Se não coincidir, veja [Definir a escala](topic:set-the-scale).
5. No painel {{ui:Itens}}, à direita, escolha {{ui:Novo item}}, digite um nome como `Parede interna tipo A`, deixe o tipo em {{ui:Linear (comprimento)}} e escolha {{ui:Adicionar}}.
6. Escolha {{ui:Linear}} na barra de ferramentas (ou pressione {{key:L}}).
7. Clique no início de uma parede e depois em cada canto ao longo dela. Dê um clique duplo, pressione {{key:Enter}} ou clique com o botão direito para terminar o trecho.
   O trecho é desenhado na cor do item e seu comprimento aparece ao lado do item.
8. No editor do item, em {{ui:Itens}}, digite `9'-0"` em {{ui:Altura}}, `0.85` em {{ui:Material $/LF}} e `1.20` em {{ui:Mão de obra $/LF}}.
   A tabela {{ui:Quantitativos}}, embaixo, mostra o comprimento, o material e a mão de obra estendidos e o {{ui:Total da obra}}.
9. Escolha {{ui:Salvar levantamento}} (ou pressione {{key:Mod+S}}).
   Seu navegador baixa um arquivo `.takeoff.json`. Ele guarda seus itens, escalas e marcações, e reabre sobre os mesmos PDFs.
10. Abra o menu {{ui:Exportar}} na barra de ferramentas e escolha {{ui:XLSX}} para baixar o orçamento como planilha.

:::tip
Pressione {{key:Esc}} para interromper o que estiver fazendo e voltar à ferramenta {{ui:Selecionar}}. {{key:Mod+Z}} desfaz qualquer alteração.
:::

## O que ler a seguir

- [A tela do TakeoffCraft](topic:workspace) dá nome a cada parte da janela.
- [Iniciar um levantamento e abrir um conjunto de plantas](topic:open-plan-set) trata de vários PDFs e da lista de folhas.
- [Criar itens de levantamento](topic:create-items) explica tipos, unidades, perdas e preços.
- [Composições e fórmulas](topic:assemblies) transformam uma medição em montantes, chapas e mais.
- [Teclado e mouse](topic:keyboard) lista todas as teclas.
