---
title: Teclado e mouse
summary: Cada tecla, ação do mouse, do trackpad e de toque no TakeoffCraft, agrupadas, com as diferenças entre plataformas.
keywords: teclas, atalhos, teclas de atalho, teclado, mouse, trackpad, toque, pan, zoom, roda, clique com o botão direito, clique duplo, espaço, shift, copiar, colar, recortar, duplicar, selecionar tudo
from: 6f2c441d
---

As teclas de letras funcionam quando o ponteiro está em qualquer parte da página e você não está digitando em um campo. Enquanto uma caixa de diálogo estiver aberta, valem as teclas dela. As letras funcionam com ou sem {{key:Shift}}.

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:V}} | {{ui:Selecionar}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Área}} |
| {{key:O}} | {{ui:Círculo}} |
| {{key:B}} | {{ui:Ambiente}} (preenche um ambiente com um clique) |
| {{key:R}} | {{ui:Arco}} ligado ou desligado (em Linear, Área e Recorte) |
| {{key:E}} | {{ui:Deduzir}} ligado ou desligado: os próximos segmentos de um trecho são desenhados, mas não contados |
| Um dígito, `@` ou `#` durante o desenho | Abre a caixa {{ui:Digite}}: digite um comprimento ou coordenadas; {{key:Enter}} posiciona o ponto ([Medir trechos lineares](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Recorte}} (selecione uma área primeiro) |
| {{key:C}} | {{ui:Contagem}} |
| {{key:S}} | {{ui:Contagem automática}} |
| {{key:K}} | {{ui:Calibrar}} |
| {{key:D}} | {{ui:Conferir}} a escala |

## Durante o desenho

| Tecla ou ação | O que faz |
|---|---|
| Clique | Posiciona um ponto (um ponto, com {{ui:Contagem}}). |
| {{key:P}} | Caminho: escolhe todo o caminho conectado de uma linha do PDF, ou o contorno em volta de um clique ([Escolher as linhas do PDF](topic:pick-the-lines)). |
| {{key:F3}} | Liga ou desliga o snap nas linhas do desenho ([Snap nas linhas do desenho](topic:snap-to-the-drawing)). |
| {{key:Shift}} segurado ao clicar | Faz o segmento seguir 0°, 45°, 90° ou 135° a partir do último ponto. Não vale para pontos de arco nem para círculos. |
| Clique duplo | Termina um trecho ou fecha uma área ou um recorte. |
| {{key:Enter}} | Termina um trecho ou fecha uma área ou um recorte. |
| Clique com o botão direito (sem mover) | Termina um trecho ou fecha uma área ou um recorte. |
| Clique no primeiro ponto | Fecha uma área ou um recorte (a partir do terceiro ponto). |
| {{key:Backspace}} ou {{key:Delete}} | Remove o último ponto (primeiro o ponto de arco pendente). |
| {{key:Esc}} | Descarta o ponto de arco pendente; depois cancela a marca não concluída; depois volta para {{ui:Selecionar}}. |

## Selecionar e editar

| Tecla ou ação | O que faz |
|---|---|
| Clique numa marca (ferramenta {{ui:Selecionar}}) | Seleciona a marca e torna o seu item atual. |
| {{key:Shift}} + clique numa marca | Adiciona à seleção, ou tira dela. |
| {{key:Mod+A}} | Seleciona todas as marcas da folha aberta. |
| Arraste uma alça de canto | Move esse ponto ({{key:Shift}} faz snap a 45°). Funciona quando uma marca está selecionada. |
| {{key:Delete}} ou {{key:Backspace}} | Exclui as marcas selecionadas (quando você não está desenhando). |
| {{key:Esc}} | Não seleciona nada: limpa a seleção e a linha de conferência. |
| {{key:Mod+Z}} | Desfazer. |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer. |

## Copiar e colar

| Tecla | O que faz |
|---|---|
| {{key:Mod+C}} | Copia as marcas selecionadas, com os seus itens. |
| {{key:Mod+X}} | Recortar: copia as marcas selecionadas e depois as exclui. |
| {{key:Mod+V}} | Colar: a cópia segue o ponteiro; clique onde ela deve ir. |
| {{key:Mod+Shift+V}} | Colar no mesmo local: o mesmo ponto da folha aberta. |
| {{key:Mod+D}} | Duplicar as marcas selecionadas: a cópia segue o ponteiro; clique onde ela deve ir. |
| {{key:Esc}} | Não solta nada: cancela uma colagem ou duplicação que está no ponteiro. |

As letras sozinhas continuam escolhendo ferramentas ({{key:C}} é {{ui:Contagem}}, {{key:D}} é {{ui:Conferir}}, {{key:X}} é {{ui:Recorte}}, {{key:V}} é {{ui:Selecionar}}, {{key:A}} é {{ui:Área}}); só {{key:Mod}} com elas copia e cola. Em um campo de texto, essas teclas copiam e colam texto normalmente. Veja [Copiar, colar e duplicar marcas](topic:copy-paste).

:::warning
{{key:Backspace}} exclui a marca selecionada quando você não está desenhando. Se isso acontecer por acidente, {{key:Mod+Z}} a traz de volta.
:::

## Arquivos

| Tecla | O que faz |
|---|---|
| {{key:Mod+O}} | {{ui:Abrir plantas}} |
| {{key:Mod+S}} | {{ui:Salvar levantamento}} |

Essas duas funcionam mesmo enquanto você digita em um campo.

## Exibição e folhas

| Tecla ou ação | O que faz |
|---|---|
| Roda do mouse | Aproxima e afasta o zoom no ponteiro. |
| Arraste (botão esquerdo, do meio ou direito) | Pan. Em {{ui:Contagem automática}}, um arraste com o botão esquerdo desenha a caixa de busca. |
| {{key:Space}} segurado + arraste | Pan, em qualquer ferramenta. |
| {{key:F}} | {{ui:Ajustar página}} |
| {{key:W}} | {{ui:Ajustar largura}} |
| {{key:Plus}} ou {{key:=}} | Aproxima o zoom no centro da visão. |
| {{key:Minus}} | Afasta o zoom no centro da visão. |
| {{key:PageDown}} / {{key:PageUp}} | Próxima ou anterior folha na lista de folhas. |
| {{key:Ctrl+Shift+F}} | Alterna entre os modos de tela cheia (Control em todas as plataformas, inclusive no Mac). |
| {{key:F1}} | Abre ou fecha esta ajuda, um painel na lateral. |
| {{key:3}} | A vista 3D de conferência da folha, ligada ou desligada. |

## Vista 3D

| Tecla ou ação | O que faz |
|---|---|
| Arraste, ou arraste com o botão do meio | Orbitar. |
| {{key:Shift}} + arraste, ou arraste com o botão direito | Pan. |
| Roda do mouse | Zoom no ponteiro. No trackpad, deslizar com dois dedos orbita e o pinçamento dá zoom. |
| Clique | Seleciona a marca sob o ponteiro ({{key:Shift}} + clique adiciona ou tira). |
| {{key:F}} ou {{key:W}} | Zoom extensão. |
| {{key:3}} | Volta para a folha plana. |

Veja [Conferir o levantamento em 3D](topic:check-in-3d).

## Contagem automática

| Tecla ou ação | O que faz |
|---|---|
| Arraste uma caixa | Envolve o símbolo a procurar (inicia a busca). |
| Clique numa caixa de correspondência | Rejeita a correspondência, ou a restaura. |
| {{key:Esc}} | Cancela uma busca em andamento, ou descarta a revisão. |

## Ajuda

| Tecla | O que faz |
|---|---|
| {{key:F1}} | Abre ou fecha o painel de ajuda (também o botão {{ui:Ajuda}} na barra do aplicativo). Funciona em todas as ferramentas, mesmo enquanto você digita em um campo. |
| {{key:Esc}} | Fecha o painel de ajuda. Na caixa de busca dele, o primeiro Esc limpa a busca. Enquanto o painel está aberto, um Esc pressionado depois de clicar na folha fecha o painel primeiro; pressione de novo para cancelar no TakeoffCraft. |

:::mac
Em muitos teclados de Mac, a linha superior controla brilho e som. Pressione fn com F1, ou ative "Usar as teclas F1, F2 etc. como teclas de função padrão" em Configurações do Sistema, em Teclado.
:::

## Caixas de diálogo e campos

| Tecla | O que faz |
|---|---|
| {{key:Enter}} | Em um campo: aplica o valor. Na caixa de calibrar: {{ui:Definir a escala}}. |
| {{key:Esc}} | Fecha uma caixa de diálogo (como {{ui:Cancelar}}); fecha o formulário {{ui:Novo item}}. |
| {{key:Tab}} | Vai para o próximo campo. |

## Notas por plataforma

:::mac
- {{key:Mod}} é a tecla Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Tela cheia é a exceção: Control+Shift+F.
- Clique com o botão direito é um clique com dois dedos no trackpad, quando o clique secundário está ativado em Configurações do Sistema, em Trackpad. O TakeoffCraft lê apenas o botão secundário; um Control-clique pode contar como clique simples e adicionar um ponto.
- Deslizar com dois dedos no trackpad aproxima o zoom da folha (não a desloca). Para fazer pan, pressione e arraste, ou segure Space e arraste.
- Page Up e Page Down são fn com as setas para cima e para baixo em teclados que não as têm.
- Backspace é a tecla com a indicação delete.
:::

:::windows
- {{key:Mod}} é Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- No touchpad de um notebook, deslizar com dois dedos aproxima o zoom da folha. Para fazer pan, pressione e arraste.
:::

:::linux
- {{key:Mod}} é Ctrl. Alguns ambientes têm atalhos próprios com Ctrl+Alt ou Super; o TakeoffCraft não usa nenhum deles.
- No touchpad, deslizar com dois dedos aproxima o zoom da folha. Para fazer pan, pressione e arraste.
:::

:::touch
O TakeoffCraft lê o toque como um único ponteiro:

- Toque posiciona um ponto, seleciona uma marca ou adiciona um ponto de contagem.
- Arrastar com um dedo faz pan na folha (em {{ui:Contagem automática}}, desenha a caixa de busca).
- Zoom por pinça ainda não é suportado. Use {{ui:Ajustar página}} e {{ui:Ajustar largura}}, ou {{key:Plus}} e {{key:Minus}} em um teclado.
- Para fechar uma área, toque no primeiro ponto dela. Para terminar um trecho, dê um toque duplo onde o seu navegador transforma toque duplo em clique duplo, ou pressione {{key:Enter}} em um teclado.
- Não há leitura de comprimento ao vivo até você tocar, porque não existe ponteiro que paira sobre a tela.

Um teclado com mouse ou trackpad é, hoje, a forma melhor de fazer o levantamento.
:::

## Teclas que o navegador mantém

Os navegadores mantêm para si alguns atalhos, e a página não pode usá-los: fechar a aba ({{key:Mod+W}}), nova aba ou janela ({{key:Mod+T}}, {{key:Mod+N}}) e zoom do navegador ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Por isso o TakeoffCraft aproxima e afasta a folha com a roda e com as teclas {{key:Plus}} e {{key:Minus}} sozinhas. Se você pressionar {{key:Mod+Plus}} por engano, a página inteira aumenta; {{key:Mod+0}} a devolve ao tamanho normal. Veja [Teclas, mouse e trackpads](common:keys).

## Onde fica Mover

Não há comando Mover: selecione um ponto de contagem e arraste-o, ou selecione uma área ou uma linha e arraste as alças de canto.
