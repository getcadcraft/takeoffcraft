---
title: Teclado e rato
summary: Cada tecla, rato, trackpad e ação de toque no TakeoffCraft, agrupados, com as diferenças entre plataformas.
keywords: teclas, atalhos, teclas de atalho, teclado, rato, trackpad, toque, deslocar, zoom, roda, clique com o botão direito, duplo clique, espaço, Shift, copiar, colar, recortar, duplicar, selecionar tudo
from: 6f2c441d
---

As teclas de letras funcionam com o ponteiro em qualquer parte da página e quando não está a escrever num campo. Enquanto uma caixa de diálogo estiver aberta, aplicam-se as respetivas teclas. As letras funcionam com ou sem {{key:Shift}}.

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:V}} | {{ui:Selecionar}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Área}} |
| {{key:O}} | {{ui:Círculo}} |
| {{key:B}} | {{ui:Compartimento}} (preenche um compartimento com um clique) |
| {{key:R}} | {{ui:Arco}} ativado ou desativado (em Linear, Área e Recorte) |
| {{key:E}} | {{ui:Deduzir}} ativado ou desativado: os segmentos seguintes de um percurso são desenhados mas não contados |
| Um algarismo, `@` ou `#` ao desenhar | Abre a caixa {{ui:Escrever}}: escreva um comprimento ou coordenadas; {{key:Enter}} coloca o ponto ([Medir percursos lineares](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Recorte}} (selecione primeiro uma área) |
| {{key:C}} | {{ui:Contagem}} |
| {{key:S}} | {{ui:Contagem automática}} |
| {{key:K}} | {{ui:Calibrar}} |
| {{key:D}} | {{ui:Verificar}} a escala |

## Ao desenhar

| Tecla ou ação | O que faz |
|---|---|
| Clique | Coloca um ponto (um ponto, com Contagem). |
| {{key:P}} | Caminho: escolha o caminho ligado completo de uma linha de PDF, ou o contorno à volta de um clique ([Escolher as linhas do PDF](topic:pick-the-lines)). |
| {{key:F3}} | Ativa ou desativa o snap às linhas do desenho ([Snap às linhas do desenho](topic:snap-to-the-drawing)). |
| {{key:Shift}} mantida ao clicar | Ajusta o segmento a 0°, 45°, 90° ou 135° a partir do último ponto. Não se aplica a pontos de arco nem a círculos. |
| Duplo clique | Conclui um percurso, ou fecha uma área ou um recorte. |
| {{key:Enter}} | Conclui um percurso, ou fecha uma área ou um recorte. |
| Clique com o botão direito (sem mover) | Conclui um percurso, ou fecha uma área ou um recorte. |
| Clique no primeiro ponto | Fecha uma área ou um recorte (a partir do terceiro ponto). |
| {{key:Backspace}} ou {{key:Delete}} | Remove o último ponto (primeiro o ponto de arco pendente). |
| {{key:Esc}} | Descarta o ponto de arco pendente; depois cancela a marca por concluir; depois volta a {{ui:Selecionar}}. |

## Seleção e edição

| Tecla ou ação | O que faz |
|---|---|
| Clique numa marca (ferramenta Selecionar) | Seleciona-a e torna atual o respetivo artigo. |
| {{key:Shift}} + clique numa marca | Acrescenta à seleção, ou retira-a. |
| {{key:Mod+A}} | Seleciona todas as marcas da folha aberta. |
| Arrastar uma pega de canto | Move esse ponto ({{key:Shift}} ajusta a 45°). Funciona quando está selecionada uma marca. |
| {{key:Delete}} ou {{key:Backspace}} | Elimina as marcas selecionadas (quando não estiver a desenhar). |
| {{key:Esc}} | Não seleciona nada: limpa a seleção e a linha de verificação. |
| {{key:Mod+Z}} | Anular. |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer. |

## Copiar e colar

| Tecla | O que faz |
|---|---|
| {{key:Mod+C}} | Copia as marcas selecionadas, com os respetivos artigos. |
| {{key:Mod+X}} | Recortar: copia as marcas selecionadas e depois elimina-as. |
| {{key:Mod+V}} | Colar: a cópia segue o ponteiro; clique onde deve ficar. |
| {{key:Mod+Shift+V}} | Colar no mesmo sítio: o mesmo local na folha aberta. |
| {{key:Mod+D}} | Duplicar as marcas selecionadas: a cópia segue o ponteiro; clique onde deve ficar. |
| {{key:Esc}} | Não coloca nada: cancela uma colagem ou duplicação que está no ponteiro. |

As letras isoladas continuam a escolher ferramentas ({{key:C}} é {{ui:Contagem}}, {{key:D}} é {{ui:Verificar}}, {{key:X}} é {{ui:Recorte}}, {{key:V}} é {{ui:Selecionar}}, {{key:A}} é {{ui:Área}}); só {{key:Mod}} com elas copia e cola. Num campo de texto, estas teclas copiam e colam texto como de costume. Ver [Copiar, colar e duplicar marcas](topic:copy-paste).

:::warning
{{key:Backspace}} elimina a marca selecionada quando não está a desenhar. Se isso acontecer por engano, {{key:Mod+Z}} a recupera.
:::

## Ficheiros

| Tecla | O que faz |
|---|---|
| {{key:Mod+O}} | {{ui:Abrir plantas}} |
| {{key:Mod+S}} | {{ui:Guardar medição}} |

Estas duas funcionam mesmo enquanto está a escrever num campo.

## Vista e folhas

| Tecla ou ação | O que faz |
|---|---|
| Roda do rato | Aproxima e afasta junto ao ponteiro. |
| Arrastar (botão esquerdo, do meio ou direito) | Desloca a vista. Em {{ui:Contagem automática}}, arrastar com o botão esquerdo desenha a caixa de pesquisa. |
| {{key:Space}} mantida + arrastar | Desloca a vista, em qualquer ferramenta. |
| {{key:F}} | {{ui:Ajustar página}} |
| {{key:W}} | {{ui:Ajustar largura}} |
| {{key:Plus}} ou {{key:=}} | Aproxima no centro da vista. |
| {{key:Minus}} | Afasta no centro da vista. |
| {{key:PageDown}} / {{key:PageUp}} | Folha seguinte ou anterior na lista de folhas. |
| {{key:Ctrl+Shift+F}} | Alterna entre os modos de ecrã inteiro (Control em todas as plataformas, também no Mac). |
| {{key:F1}} | Abre ou fecha esta ajuda, num painel lateral. |
| {{key:3}} | A vista de verificação 3D da folha, ativada ou desativada. |

## Vista 3D

| Tecla ou ação | O que faz |
|---|---|
| Arrastar, ou arrastar com o botão do meio | Orbitar. |
| {{key:Shift}} + arrastar, ou arrastar com o botão direito | Deslocar. |
| Roda do rato | Aproxima junto ao ponteiro. Num trackpad, deslizar com dois dedos orbita e o gesto de pinça aproxima. |
| Clique | Seleciona a marca sob o ponteiro ({{key:Shift}} + clique acrescenta ou retira). |
| {{key:F}} ou {{key:W}} | Zoom à extensão. |
| {{key:3}} | Volta à folha plana. |

Ver [Verificar a medição em 3D](topic:check-in-3d).

## Contagem automática

| Tecla ou ação | O que faz |
|---|---|
| Arrastar uma caixa | Enquadra o símbolo a procurar (inicia a pesquisa). |
| Clicar numa caixa de correspondência | Rejeita-a, ou repõe-na. |
| {{key:Esc}} | Cancela uma pesquisa em curso, ou descarta a revisão. |

## Ajuda

| Tecla | O que faz |
|---|---|
| {{key:F1}} | Abre ou fecha o painel de ajuda (também o botão {{ui:Ajuda}} na barra da aplicação). Funciona em todas as ferramentas, mesmo enquanto está a escrever num campo. |
| {{key:Esc}} | Fecha o painel de ajuda. Na respetiva caixa de pesquisa, o primeiro Esc limpa a pesquisa. Com o painel aberto, um Esc premido depois de clicar na folha fecha primeiro o painel; prima-o de novo para cancelar no TakeoffCraft. |

:::mac
Em muitos teclados de Mac, a linha superior controla o brilho e o som. Prima fn com F1, ou ative «Utilizar as teclas F1, F2, etc. como teclas de função padrão» nas Definições do Sistema, em Teclado.
:::

## Caixas de diálogo e campos

| Tecla | O que faz |
|---|---|
| {{key:Enter}} | Num campo: aplica o valor. Na caixa de calibração: {{ui:Definir a escala}}. |
| {{key:Esc}} | Fecha uma caixa de diálogo (como {{ui:Cancelar}}); fecha o formulário {{ui:Novo artigo}}. |
| {{key:Tab}} | Passa para o campo seguinte. |

## Notas por plataforma

:::mac
- {{key:Mod}} é a tecla Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. O ecrã inteiro é a exceção: Control+Shift+F.
- Clicar com o botão direito é um clique com dois dedos no trackpad, quando o clique secundário está ativo nas Definições do Sistema, em Trackpad. O TakeoffCraft lê apenas o botão secundário; um Control-clique pode contar como clique simples e acrescentar um ponto.
- Deslocar com dois dedos num trackpad aproxima a folha (não a desloca). Para deslocar, prima e arraste, ou mantenha {{key:Space}} premida e arraste.
- Page Up e Page Down são fn com as setas para cima e para baixo, nos teclados que não as têm.
- Backspace é a tecla marcada delete.
:::

:::windows
- {{key:Mod}} é Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Num touchpad de portátil, deslizar com dois dedos aproxima a folha. Para deslocar, prima e arraste.
:::

:::linux
- {{key:Mod}} é Ctrl. Alguns ambientes de trabalho usam atalhos próprios com Ctrl+Alt ou Super; o TakeoffCraft não usa nenhum deles.
- Num touchpad, deslizar com dois dedos aproxima a folha. Para deslocar, prima e arraste.
:::

:::touch
O TakeoffCraft lê o toque como um único ponteiro:

- Tocar coloca um ponto, seleciona uma marca ou acrescenta um ponto de contagem.
- Arrastar com um dedo desloca a folha (em {{ui:Contagem automática}} desenha a caixa de pesquisa).
- O zoom por pinça ainda não é suportado. Use {{ui:Ajustar página}} e {{ui:Ajustar largura}}, ou {{key:Plus}} e {{key:Minus}} num teclado.
- Para fechar uma área, toque no respetivo primeiro ponto. Para concluir um percurso, faça duplo toque onde o navegador transforma um duplo toque num duplo clique, ou prima {{key:Enter}} num teclado.
- Não há leitura de comprimento em tempo real até tocar, porque não existe passagem do rato.

Hoje, um teclado com rato ou trackpad é a forma mais indicada de fazer medição.
:::

## Teclas que o navegador reserva

Os navegadores reservam para si alguns atalhos, e uma página não os pode usar: fechar o separador ({{key:Mod+W}}), novo separador ou janela ({{key:Mod+T}}, {{key:Mod+N}}) e zoom do navegador ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Por isso, o TakeoffCraft aproxima a folha com a roda e com as teclas {{key:Plus}} e {{key:Minus}} sozinhas. Se premir {{key:Mod+Plus}} por engano, a página inteira aumenta; {{key:Mod+0}} a repõe. Ver [Teclas, ratos e trackpads](common:keys).

## Onde fica o Move

Não existe nenhum comando Move: selecione um ponto de contagem e arraste-o, ou selecione uma área ou uma linha e arraste as respetivas pegas de canto.
