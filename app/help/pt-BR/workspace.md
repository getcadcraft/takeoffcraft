---
title: A tela do TakeoffCraft
summary: Um passeio pela janela pelos nomes na tela - a barra de ferramentas, a lista de folhas, a folha, o painel Itens, a tabela Quantitativos e a barra de status.
keywords: tela, layout, layouts, faixa de opções, navegador do projeto, caixa de ferramentas, caixa de informações, barra de ferramentas, painéis, lista de folhas, painel de itens, quantitativos, barra de status, passeio, interface
from: ab1115e0
---

O TakeoffCraft ocupa a janela do navegador sob a barra do aplicativo CadCraft. De cima para baixo e da esquerda para a direita:

| Parte | Onde | Para que serve |
|---|---|---|
| Barra do aplicativo | No alto | O nome do aplicativo, a versão, {{ui:Sobre o TakeoffCraft}}, {{ui:Ajuda}} ({{key:F1}}), {{ui:Salvar para uso offline}}, {{ui:Configurações}} ({{key:Mod+,}}), o botão {{ui:Tela cheia}} e a chave de tema {{ui:Papel}} / {{ui:Modelo}}. |
| Barra de ferramentas | Sob a barra do aplicativo | Todos os comandos, em grupos: {{ui:Arquivo}}, {{ui:Exportar}}, {{ui:Escala}}, {{ui:Levantamento}}, {{ui:Editar}}, {{ui:Exibir}}. |
| Folhas | Esquerda | Todas as páginas de todos os PDFs abertos, com miniatura, escala e número de marcações. |
| A folha | Meio | A página aberta. É aqui que você mede. |
| Itens | Direita | Seus itens de levantamento, as configurações do item selecionado e a marcação selecionada. |
| Quantitativos | Embaixo | Quantitativos e custos por item ou por folha, e o total da obra. |
| Barra de status | Bem embaixo | A medição ao vivo, mensagens, a dica dos 45° e o zoom. |

## A barra de ferramentas

Passe o mouse sobre qualquer botão para ver o que ele faz e sua tecla.

| Grupo | Botões |
|---|---|
| {{ui:Arquivo}} | {{ui:Novo}} (levantamento vazio), {{ui:Abrir plantas}} ({{key:Mod+O}}), {{ui:Abrir levantamento}} (um projeto `.takeoff.json`), {{ui:Salvar levantamento}} ({{key:Mod+S}}) |
| {{ui:Exportar}} | Um menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF marcado}} |
| {{ui:Escala}} | {{ui:Calibrar}} ({{key:K}}), {{ui:Conferir}} ({{key:D}}) e a lista {{ui:Predefinida}} |
| {{ui:Levantamento}} | {{ui:Selecionar}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Área}} ({{key:A}}), {{ui:Círculo}} ({{key:O}}), {{ui:Arco}} ({{key:R}}, uma chave liga/desliga), {{ui:Deduzir}} ({{key:E}}, uma chave liga/desliga), {{ui:Recorte}} ({{key:X}}), {{ui:Contagem}} ({{key:C}}), {{ui:Contagem automática}} ({{key:S}}) |
| {{ui:Editar}} | {{ui:Desfazer}} ({{key:Mod+Z}}), {{ui:Refazer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Colar}} ({{key:Mod+V}}) e {{ui:Mais}}: {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Selecionar tudo}}, {{ui:Limpar seleção}} |
| {{ui:Exibir}} | {{ui:Ajustar página}} ({{key:F}}), {{ui:Ajustar largura}} ({{key:W}}) |

A ferramenta que você está usando aparece pressionada. Os botões {{ui:Arco}} e {{ui:Deduzir}} ficam pressionados enquanto estão ligados.

## Folhas (esquerda)

- **Buscar folhas** filtra a lista pelo nome da folha, pelo nome do arquivo ou pelo rótulo da página.
- Cada folha mostra uma miniatura (desenhada conforme você rola), seu nome e sua escala ou **Sem escala**.
- O lado direito de cada linha mostra quantas marcações a folha tem. Enquanto um item está destacado, mostra quantas marcações desse item estão na folha.
- Clique em uma folha para abri-la. {{key:PageDown}} e {{key:PageUp}} vão para a folha seguinte e a anterior da lista.
- Quando um levantamento cobre PDFs que não estão abertos, uma nota sob a lista os nomeia. Veja [Salvar e reabrir um levantamento](topic:save-and-reopen).

Os nomes das folhas vêm do PDF: um rótulo de página como `A-101` vira o nome da folha. Uma página sem rótulo recebe o nome do arquivo e o número da página, como "Plantas, página 3". Com vários PDFs abertos, as folhas com rótulo mostram também o nome do arquivo.

## A folha (meio)

- A barra sob a folha mostra o nome da folha e sua escala, ou "Ainda sem escala: escolha uma predefinida ou calibre". Seus botões: {{ui:MarkupCraft}} (quando esse aplicativo consegue receber o PDF; veja [Iniciar um levantamento e abrir um conjunto de plantas](topic:open-plan-set)), {{ui:Comparar}} (uma versão mais antiga da folha sobre esta: [Comparar uma folha revisada](topic:compare-revisions)), "(n) a conferir" (marcações sinalizadas, quando há) e {{ui:3D}} (a [vista de conferência em 3D](topic:check-in-3d)).
- Antes de abrir qualquer PDF, o meio mostra um guia curto de cinco passos.
- A roda do mouse dá zoom no ponteiro. Arraste para mover. Veja [Teclado e mouse](topic:keyboard).
- Enquanto você usa a {{ui:Contagem automática}}, uma barra com seus controles aparece no alto da folha.

## Itens (direita)

No alto, a lista {{ui:Área da proposta}}: o edifício, pavimento ou etapa em que as novas marcações entram ([Áreas da proposta](topic:bid-areas)).

- {{ui:Novo item}} abre um pequeno formulário: um nome, um tipo ({{ui:Linear (comprimento)}}, {{ui:Área}} ou {{ui:Contagem}}) e {{ui:Adicionar}}.
- A lista mostra a cor, o ícone do tipo, o nome e o quantitativo de cada item. Clique em um item para desenhar com ele e destacar suas marcações em todas as folhas. Clique de novo para parar de destacar.
- Sob a lista, **Item: (nome)** é o editor do item: nome, tipo, cor, unidade, altura ou profundidade, perda, preços de material e mão de obra, os valores medidos e a {{ui:Composição}}. Veja [Criar itens de levantamento](topic:create-items).
- **Marcação selecionada** aparece quando você seleciona uma marcação: a que item ela pertence, sua folha, suas medidas e botões como {{ui:Adicionar um recorte}} e {{ui:Excluir marcação}}. Com várias marcações selecionadas, vira **Marcações selecionadas**: quantas de cada item, e {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Recortar}} e {{ui:Excluir marcações}}.
- O editor do item termina com {{ui:Copiar item}} e {{ui:Duplicar item}}: um item com sua composição e seus custos, sem marcações. Veja [Copiar, colar e duplicar marcações](topic:copy-paste).

## Quantitativos (embaixo)

- {{ui:Por item}} lista cada item e os componentes de sua composição com quantitativo, perda, preços e custos estendidos. Você pode digitar perdas e preços direto na tabela.
- {{ui:Por folha}} lista o quantitativo de cada item em cada folha.
- Um aviso começando com **Incompleto:** aparece quando algo ficou fora dos totais.
- O {{ui:Total da obra}} fica à direita do cabeçalho.
- O botão de seta no extremo direito oculta ou mostra a tabela para dar mais espaço à folha.

Veja [Ler os quantitativos e o orçamento](topic:read-quantities).

## Barra de status (embaixo)

Da esquerda para a direita: a medição ao vivo enquanto você desenha (comprimento, área, raio ou o resultado de uma conferência), a caixa {{ui:Digite}} enquanto você digita um comprimento, as mensagens do TakeoffCraft, o lembrete "Shift prende em 45°" (ou "Prende em 45°; Shift libera o ângulo" quando isso está ligado em [Configurações](topic:settings)), o botão {{ui:Snap}} (prender às linhas do desenho, ligado quando destacado; {{key:F3}}) e a porcentagem de zoom.

:::tip
Leia a barra de status quando algo não acontecer. O TakeoffCraft explica ali por que recusou um clique, por exemplo "Esta folha ainda não tem escala".
:::

## Outros layouts

Tudo acima é o layout {{ui:CadCraft clássico}}, o inicial. {{ui:Configurações}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} oferece mais dois; as mesmas ferramentas e teclas funcionam nos três, e escolher {{ui:CadCraft clássico}} de novo coloca cada controle de volta onde estava.

| Layout | No TakeoffCraft |
|---|---|
| {{ui:Faixa de opções e navegador do projeto}} | A {{ui:Faixa de opções do levantamento}} no alto ([Menus, teclas e mouse](topic:menus-keys-and-mouse)), uma barra para a ferramenta em uso, uma guia para cada folha que você abre (o Modelo e os layouts de um desenho também são folhas), com as escalas predefinidas e {{ui:Ajustar página}} sob a folha. O painel da esquerda traz {{ui:Propriedades}} (o item, a nota ou a marcação selecionada) sobre o {{ui:Navegador do levantamento}}: {{ui:Folhas}} (clique em uma para abri-la em uma guia), {{ui:Condições}} (clique em uma para desenhar com ela) e {{ui:Orçamento}} (o total de cada item e o total da obra); as miniaturas ficam na segunda guia. |
| {{ui:Caixa de ferramentas e caixa de informações}} | A barra de ferramentas sobre a folha, uma caixa de informações com a {{ui:Área da proposta}}, a ferramenta em uso ou a seleção e a barra da folha, uma coluna com as ferramentas de levantamento à esquerda, uma guia para cada folha, e {{ui:Snap}} e o zoom sob a folha. |

Enquanto a [vista de conferência em 3D](topic:check-in-3d) está aberta, as guias das folhas e a barra sob a folha saem do caminho; feche a vista 3D para medir de novo. No celular, o layout para celular é sempre o que roda.

## Tela cheia e temas

O botão {{ui:Tela cheia}} na barra do aplicativo, ou {{key:Ctrl+Shift+F}} (Control em todas as plataformas, também no Mac), alterna entre normal, tela cheia e tela cheia com as barras ocultas. Com as barras ocultas, leve o ponteiro à borda superior para mostrá-las de novo.

{{ui:Papel}} é o tema claro e {{ui:Modelo}} o escuro. Em {{ui:Modelo}} o desenho aparece invertido (linhas claras sobre fundo escuro) apenas na tela; as exportações nunca são alteradas.
