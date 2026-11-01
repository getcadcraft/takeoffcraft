---
title: Primeiros passos com o TakeoffCraft
summary: O que o TakeoffCraft faz, onde corre e o seu primeiro artigo medido e orçamentado a partir de um conjunto de plantas em PDF.
keywords: início, primeira medição, início rápido, introdução, orçamento, medição de quantidades, conjunto de plantas, pdf
from: 3b9da1fb
---

O TakeoffCraft mede conjuntos de plantas, PDF e desenhos DWG ou DXF, e transforma as medições num orçamento com preços. Abre os ficheiros (um desenho conta diretamente a partir dos seus blocos: veja [Abrir um desenho DWG ou DXF](topic:open-a-drawing)), dá a cada folha uma escala (um desenho traz a sua própria), cria **artigos** (um tipo de parede, um acabamento de pavimento, um equipamento) e clica nas folhas para os medir. As quantidades, os custos e o total da obra atualizam-se à medida que avança. Pode exportar o orçamento como folha de cálculo e uma cópia dos PDF com a sua medição desenhada.

Se já fez medições noutros programas, leia a seguir [Se vem de outro software de medição](topic:coming-from). Algumas coisas funcionam aqui de outra maneira.

## Onde corre

O TakeoffCraft corre no navegador. Abra o TakeoffCraft e o ecrã fica pronto de imediato; não há nada para instalar.

- **Os seus PDF ficam no seu computador.** São abertos pelo navegador e nunca carregados para um servidor. Guardar é uma transferência.
- Funciona nas versões atuais do Chrome, Edge, Firefox e Safari. Veja [Navegadores e computadores](common:browsers).
- Funciona sem ligação à internet depois de escolher {{ui:Guardar para offline}} na barra da aplicação e de ela dizer {{ui:Pronto para offline}}. Veja [Trabalhar offline](common:offline).
- Guardar na nuvem ainda não está disponível. Para uma aplicação de computador, o TakeoffCraft vem no CadCraft Studio, com as outras sete aplicações.

## A sua primeira medição em dez passos

Este guia mede um tipo de parede e orça-o. Demora alguns minutos com qualquer planta que tenha.

1. Escolha {{ui:Abrir plantas}} no grupo {{ui:Ficheiro}} da barra de ferramentas (ou prima {{key:Mod+O}}), escolha um ou mais PDF e escolha Abrir. Também pode largar os PDF em qualquer ponto da página.
   As folhas aparecem à esquerda e a primeira folha abre-se ao meio.
2. Encontre a escala impressa da folha na sua legenda ou por baixo do título de um desenho.
3. Abra a lista {{ui:Predefinida}} no grupo {{ui:Escala}} e escolha essa escala, por exemplo `1/4" = 1'-0"`.
   A barra no fundo da folha diz agora «Escala 1/4" = 1'-0"».
4. Escolha {{ui:Verificar}} (ou prima {{key:D}}) e clique nas duas extremidades de uma cota impressa no desenho.
   A leitura na barra de estado em baixo à esquerda deve coincidir com a cota impressa. Se não coincidir, veja [Definir a escala](topic:set-the-scale).
5. No painel {{ui:Artigos}} à direita, escolha {{ui:Novo artigo}}, escreva um nome como `Parede interior tipo A`, deixe o tipo em {{ui:Linear (comprimento)}} e escolha {{ui:Adicionar}}.
6. Escolha {{ui:Linear}} na barra de ferramentas (ou prima {{key:L}}).
7. Clique no início de uma parede e depois em cada canto ao longo dela. Faça duplo clique, prima {{key:Enter}} ou clique com o botão direito para terminar o troço.
   O troço é desenhado na cor do artigo e o seu comprimento aparece junto ao artigo.
8. No editor de artigos por baixo de {{ui:Artigos}}, escreva `9'-0"` em {{ui:Altura}}, `0.85` em {{ui:Material $/LF}} e `1.20` em {{ui:Mão de obra $/LF}}.
   A tabela {{ui:Quantidades}} em baixo mostra o comprimento, o material e a mão de obra estendidos e o {{ui:Total da obra}}.
9. Escolha {{ui:Guardar medição}} (ou prima {{key:Mod+S}}).
   O navegador transfere um ficheiro `.takeoff.json`. Contém os seus artigos, escalas e marcações, e volta a abrir-se sobre os mesmos PDF.
10. Abra o menu {{ui:Exportar}} na barra de ferramentas e escolha {{ui:XLSX}} para transferir o orçamento como folha de cálculo.

:::tip
Prima {{key:Esc}} para parar o que estiver a fazer e voltar à ferramenta {{ui:Selecionar}}. {{key:Mod+Z}} anula qualquer alteração.
:::

## O que ler a seguir

- [O ecrã do TakeoffCraft](topic:workspace) dá nome a todas as partes da janela.
- [Começar uma medição e abrir um conjunto de plantas](topic:open-plan-set) trata de vários PDF e da lista de folhas.
- [Criar artigos de medição](topic:create-items) explica tipos, unidades, desperdício e preços.
- [Preços compostos e fórmulas](topic:assemblies) transforma uma medição em montantes, chapas de placa e mais.
- [Teclado e rato](topic:keyboard) lista todas as teclas.
