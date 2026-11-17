---
title: Vindo de outros softwares de levantamento
summary: Como os hábitos de programas dedicados de levantamento e de ferramentas de marcação em PDF se traduzem para o TakeoffCraft, e as diferenças que costumam confundir.
keywords: mudar de programa, migrar, condições, peças, ferramentas de medição, lista de marcações, vínculo de quantidade, hábitos de levantamento, diferenças, comparar
from: 12004ce5
---

Se você já fez levantamento com o PlanSwift ou com as ferramentas de medição do Bluebeam Revu, a maior parte do TakeoffCraft vai parecer familiar: um conjunto de plantas, uma escala por folha, coisas que você mede e um total orçado. A forma como as peças se encaixam é diferente em alguns pontos, e esses pontos estão abaixo.

Se você conhece o PlanSwift ou o On-Screen Takeoff, escolha o estilo de menu {{ui:Mesa de levantamento}} em {{ui:Configurações}} › {{ui:TakeoffCraft}} › {{ui:Menus, teclas e mouse}}: uma barra de menus com Arquivo, Editar, Exibir, Escala, Levantamento, Itens, Marcação e Exportar sobre uma linha das ferramentas de levantamento, com as predefinições de escala na barra da folha. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).

## Hábitos mapeados

| O que você já conhece | No TakeoffCraft |
|---|---|
| Abrir uma obra ou projeto que armazena as plantas (PlanSwift) | Abra os PDFs e o projeto `.takeoff.json` lado a lado. O projeto guarda apenas o levantamento; os PDFs continuam sendo seus arquivos. |
| Uma lista de marcações com notas, nuvens e destaques (Bluebeam) | {{ui:Marcação}} na barra da folha: notas, nuvens e destaques com um status (Aberto, Respondido, Fechado), listados em **Marcações** e desenhados no PDF marcado. Veja [Notas, nuvens e destaques](topic:markups). |
| Medições salvas como marcações dentro do PDF (Bluebeam) | O levantamento fica no arquivo `.takeoff.json`. {{ui:PDF marcado}} grava uma cópia com o levantamento desenhado, para compartilhar; {{ui:PDF com o levantamento dentro}} grava uma cópia que carrega o levantamento, para reabrir no TakeoffCraft. |
| Itens de levantamento (PlanSwift), ferramentas de medição personalizadas salvas na Tool Chest (Bluebeam) | **Itens** em {{ui:Itens}}: nome, tipo, cor, unidade, altura ou profundidade, perda, preços unitários. |
| Peças e composições com fórmulas (PlanSwift) | A {{ui:Composição}} do item: componentes com uma fórmula que usa `L H A N P`. |
| Definir a escala da página, ou calibrar (ambos) | Lista de {{ui:Predefinida}} ou {{ui:Calibrar}} no grupo {{ui:Escala}}, por folha. {{ui:Conferir}} mede uma dimensão conhecida. |
| Aplicar uma escala a um intervalo de páginas | Ainda não: defina cada folha. |
| Viewports com escalas diferentes em uma mesma folha (Bluebeam) | Ainda não: uma escala por folha. |
| Ferramentas de polilinha e de área (Bluebeam), levantamento linear e de área (PlanSwift) | {{ui:Linear}} ({{key:L}}) e {{ui:Área}} ({{key:A}}). |
| Manter Shift pressionado para linhas retas | {{key:Shift}} encaixa em passos de 45°, a mesma ideia. |
| Encaixar nas linhas do desenho | Ativado por padrão: extremidades, pontos médios, interseções e o ponto mais próximo de uma linha, com {{key:F3}} para desativar, como em programas CAD. |
| Ferramenta de contagem (ambos) | {{ui:Contagem}} ({{key:C}}). |
| Pesquisa visual de símbolos (Bluebeam) | {{ui:Contagem automática}} ({{key:S}}): envolva um símbolo, revise e adicione. |
| Recortes ou deduções em áreas | {{ui:Recorte}} ({{key:X}}) sobre uma área selecionada, e recortes redondos. |
| Deduções em trechos lineares | Desenhe o trecho reto até o fim e pressione {{key:E}} ({{ui:Deduzir}}) para a abertura. Veja [Medir trechos lineares](topic:measure-linear). |
| Segmentos de arco em uma polilinha | {{ui:Arco}} ({{key:R}}): clique em um ponto da curva e depois no seu fim. |
| Lista de marcações com colunas de quantidade (Bluebeam) | A tabela {{ui:Quantitativos}}, {{ui:Por item}} ou {{ui:Por folha}}. |
| Grade de orçamento com preços (PlanSwift) | A mesma tabela: perda, material e mão de obra por unidade, totais estendidos e {{ui:Total da obra}}. |
| Exportar para o Excel | {{ui:XLSX}} com fórmulas ativas, ou {{ui:CSV}}. |
| Esc para parar uma ferramenta | {{key:Esc}} cancela e volta para {{ui:Selecionar}}. |
| Clique com o botão direito para finalizar | Clicar com o botão direito finaliza um trecho ou fecha uma área aqui também. Não há menu de clique com o botão direito. |

## Diferenças que pegam as pessoas de surpresa

**O levantamento não fica dentro do seu PDF.** Nada do que você faz altera seus PDFs. Salve o arquivo `.takeoff.json` e guarde-o junto com os desenhos. Enviar a alguém o PDF marcado não envia um levantamento editável: envie o arquivo do projeto e os PDFs originais, ou um [PDF com o levantamento dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Os PDFs são identificados pelo conteúdo, não pelo nome.** Uma folha revisada salva com o nome do arquivo antigo é, para o TakeoffCraft, um arquivo novo, sem escala e sem marcações. As marcações antigas continuam na versão antiga e seguem contando. Veja [Salvar e reabrir um levantamento](topic:save-and-reopen#when-a-pdf-has-changed).

**Marcações sem escala ficam de fora, não são contadas como zero.** Se uma folha não tem escala, seus trechos e áreas não entram na conta, e a tabela diz "Incompleto". Em muitos programas você veria apenas 0. Veja [Definir a escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Não há adivinhação do tamanho da página.** As predefinições supõem que o PDF está impresso em tamanho real. Um PDF em meia escala ou "ajustar à página" precisa de {{ui:Calibrar}}. Sempre use {{ui:Conferir}}.

**Um item, um tipo principal, mais se você pedir.** Um item é linear, de área ou de contagem, e o tipo fica travado quando ele tem marcações. Uma condição que dá área e também o perímetro é um item de área: o perímetro é a variável `P`. Uma parede com comprimento e área é um item linear com altura. Para um item de várias condições, como um ambiente com piso, rodapé e portas, marque os outros tipos em **Medir também**: cada um é precificado em sua própria linha. Veja [Um item, vários tipos de marcações](topic:create-items#one-item-several-kinds-of-marks).

**As fórmulas usam totais.** As fórmulas de composição usam os totais do item em todas as folhas, não de cada trecho separadamente. `N` (o número de trechos ou áreas) serve para extras por trecho, como um montante extra por parede.

**O perímetro inclui os recortes.** O `P` de uma área soma as bordas dos seus furos. Veja [Medir áreas com recortes](topic:measure-areas#read-the-area).

**Arrastar faz pan.** Arrastar com o botão esquerdo sobre a folha faz pan, em todas as ferramentas, exceto {{ui:Contagem automática}}. Você nunca precisa trocar para uma ferramenta de pan. A roda do mouse faz zoom; não rola a página.

**Uma cópia de recuperação, não uma nuvem.** O TakeoffCraft guarda uma cópia do seu trabalho neste navegador e a oferece de volta depois de uma falha ([Se a aba ou o navegador parar](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), mas o levantamento é seu para salvar: {{key:Mod+S}}. O salvamento na nuvem ainda não está disponível.

**Tudo fica no navegador.** Não há nada para instalar, e as plantas nunca são enviadas. Para um aplicativo de desktop, o TakeoffCraft vem no CadCraft Studio, junto com os outros sete aplicativos.

## Ainda não implementado

As regiões de escala por folha ainda não estão implementadas. Veja [O que ainda não está implementado](topic:not-built-yet) para a lista completa e o que fazer no lugar.
