---
title: Vindo de outro software de medição
summary: Como os hábitos dos programas de medição dedicados e das ferramentas de anotação de PDF correspondem ao TakeoffCraft, e as diferenças que causam problemas.
keywords: mudança, migrar, condições, peças, ferramentas de medição, lista de anotações, ligação de quantidades, hábitos de medição, diferenças, comparar
from: 12004ce5
---

Se já fez medições com o PlanSwift ou com as ferramentas de medição do Bluebeam Revu, grande parte do TakeoffCraft vai parecer-lhe familiar: um conjunto de plantas, uma escala por folha, elementos que se medem e um total orçamentado. A forma como as peças se encaixam é diferente em alguns pontos, e esses pontos estão descritos abaixo.

Se conhece o PlanSwift ou o On-Screen Takeoff, escolha o estilo de menu {{ui:Mesa de medição}} em {{ui:Definições}} › {{ui:TakeoffCraft}} › {{ui:Menus, teclas e rato}}: uma barra de menus com Ficheiro, {{ui:Editar}}, Ver, Escala, Medição, {{ui:Artigos}}, {{ui:Anotações}} e {{ui:Exportar}}, sobre uma linha de ferramentas de medição, com as predefinições de escala na barra da folha. Consulte [Menus, teclas e rato](topic:menus-keys-and-mouse).

## Hábitos mapeados

| Hábito anterior | No TakeoffCraft |
|---|---|
| Abrir uma obra ou projeto que guarda as plantas (PlanSwift) | Abra os PDF e o projeto `.takeoff.json` lado a lado. O projeto guarda apenas a medição; os PDF continuam como ficheiros separados. |
| Uma lista de anotações com notas, nuvens e realces (Bluebeam) | {{ui:Anotações}} na barra da folha: notas, nuvens e realces com um estado (Aberto, Respondido, Fechado), listados em **Anotações**, desenhados no PDF marcado. Consulte [Notas, nuvens e realces](topic:markups). |
| Medições guardadas como anotações dentro do PDF (Bluebeam) | A medição fica no ficheiro `.takeoff.json`. {{ui:PDF marcado}} guarda uma cópia com a medição desenhada, para partilhar; {{ui:PDF com a medição dentro}} guarda uma cópia que contém a medição, para reabrir no TakeoffCraft. |
| Artigos de medição (PlanSwift), ferramentas de medição personalizadas guardadas na Tool Chest (Bluebeam) | **Artigos** em {{ui:Artigos}}: nome, tipo, cor, unidade, altura ou profundidade, desperdício, preços unitários. |
| Peças e conjuntos com fórmulas (PlanSwift) | O {{ui:Preço composto}} do artigo: componentes com uma fórmula que usa `L H A N P`. |
| Definir a escala da página, ou calibrar (ambos) | Escolha uma escala na lista {{ui:Predefinida}} ou {{ui:Calibrar}} no grupo {{ui:Escala}}, por folha. {{ui:Verificar}} mede uma dimensão conhecida. |
| Aplicar uma escala a um intervalo de páginas | Ainda não: defina cada folha. |
| Viewports com escalas diferentes numa folha (Bluebeam) | Ainda não: uma escala por folha. |
| Ferramentas de comprimento de polilinha e de área (Bluebeam), medição linear e de área (PlanSwift) | {{ui:Linear}} ({{key:L}}) e {{ui:Área}} ({{key:A}}). |
| Manter Shift premido para linhas retas | {{key:Shift}} ajusta a passos de 45°, a mesma ideia. |
| Snap às linhas do desenho | Ativo por predefinição: extremidades, pontos médios, interseções e o ponto mais próximo de uma linha, com {{key:F3}} para desativar, como nos programas CAD. |
| Ferramenta de contagem (ambos) | {{ui:Contagem}} ({{key:C}}). |
| Pesquisa visual de símbolos (Bluebeam) | {{ui:Contagem automática}} ({{key:S}}): envolva um símbolo com uma caixa, reveja e adicione. |
| Recortes ou deduções em áreas | {{ui:Recorte}} ({{key:X}}) numa área selecionada, e recortes circulares. |
| Deduções em troços lineares | Desenhe o troço em linha reta e prima {{key:E}} ({{ui:Deduzir}}) para a abertura. Consulte [Medir troços lineares](topic:measure-linear). |
| Segmentos de arco numa polilinha | {{ui:Arco}} ({{key:R}}): clique num ponto da curva e depois no fim. |
| A lista de anotações com colunas de quantidades (Bluebeam) | A tabela {{ui:Quantidades}}, {{ui:Por artigo}} ou {{ui:Por folha}}. |
| Grelha de orçamentação com preços (PlanSwift) | A mesma tabela: desperdício, material e mão de obra por unidade, totais calculados, {{ui:Total da obra}}. |
| Exportar para o Excel | {{ui:XLSX}} com fórmulas ativas, ou {{ui:CSV}}. |
| Esc para parar uma ferramenta | {{key:Esc}} cancela e volta a {{ui:Selecionar}}. |
| Clicar com o botão direito para terminar | Aqui, o botão direito também termina um troço ou fecha uma área. Não há menu de botão direito. |

## Diferenças que causam problemas

**A medição não está dentro do seu PDF.** Nada do que faz altera os PDF. Guarde o ficheiro `.takeoff.json` e mantenha-o junto dos desenhos. Enviar a alguém o PDF marcado não lhe envia uma medição editável: envie o ficheiro do projeto e os PDF originais, ou um [PDF com a medição dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Os PDF são identificados pelo conteúdo, não pelo nome.** Uma folha revista guardada com o nome de ficheiro antigo é, para o TakeoffCraft, um ficheiro novo, sem escala e sem marcações. As marcações antigas ficam na versão antiga e continuam a contar. Consulte [Guardar e reabrir uma medição](topic:save-and-reopen#when-a-pdf-has-changed).

**Marcações sem escala não são contadas como zero.** Se uma folha não tem escala, os seus troços e áreas não contam, e a tabela diz « Incompleto ». Em muitos programas veria apenas 0. Consulte [Definir a escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Não há adivinhação do tamanho da página.** As predefinições assumem que o PDF é impresso em tamanho real. Um PDF a meia escala ou « ajustar à página » precisa de {{ui:Calibrar}}. Use sempre {{ui:Verificar}}.

**Um artigo, um tipo principal, mais se pedir.** Um artigo é linear, de área ou de contagem, e o tipo fica bloqueado assim que tem marcações. Uma condição que dá área e perímetro é um artigo de área: o perímetro é a variável `P`. Uma parede com comprimento e área é um artigo linear com altura. Para um artigo com várias condições, como uma sala com piso, rodapé e portas, marque os outros tipos em **Medir também**: cada um é orçamentado na sua própria linha. Consulte [Um artigo, vários tipos de marcações](topic:create-items#one-item-several-kinds-of-marks).

**As fórmulas trabalham sobre totais.** As fórmulas do preço composto usam os totais do artigo em todas as folhas, não troço a troço. `N` (o número de troços ou áreas) serve para extras por troço, como um montante extra por parede.

**O perímetro inclui os recortes.** O `P` de uma área soma as arestas dos seus recortes. Consulte [Medir áreas com recortes](topic:measure-areas#read-the-area).

**Arrastar desloca a vista.** Um arrasto com o botão esquerdo na folha desloca a vista, em todas as ferramentas exceto {{ui:Contagem automática}}. Nunca precisa de mudar para uma ferramenta de deslocamento. A roda faz zoom; não faz deslocamento.

**Uma cópia de recuperação, não uma nuvem.** O TakeoffCraft guarda uma cópia do seu trabalho neste navegador e oferece-a de volta depois de uma falha ([Se o separador ou o navegador parar](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), mas cabe-lhe guardar a medição: {{key:Mod+S}}. A gravação na nuvem ainda não está disponível.

**Tudo funciona no navegador.** Não há nada para instalar, e as plantas nunca são carregadas. Para uma aplicação de ambiente de trabalho, o TakeoffCraft existe no CadCraft Studio, com as outras sete aplicações.

## Ainda não disponível

As regiões de escala por folha ainda não estão implementadas. Consulte [O que ainda não está implementado](topic:not-built-yet) para a lista completa e o que fazer em alternativa.
