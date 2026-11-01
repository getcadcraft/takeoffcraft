---
title: O ecrã do TakeoffCraft
summary: Uma visita à janela pelos nomes que tem no ecrã - a barra de ferramentas, a lista de folhas, a folha, o painel Artigos, a tabela Quantidades e a barra de estado.
keywords: ecrã, esquema, esquemas, friso, navegador de projeto, caixa de ferramentas, caixa de informação, barra de ferramentas, painéis, lista de folhas, painel de artigos, quantidades, barra de estado, visita, interface
from: ab1115e0
---

O TakeoffCraft preenche a janela do navegador por baixo da barra da aplicação CadCraft. De cima para baixo e da esquerda para a direita:

| Parte | Onde | Para que serve |
|---|---|---|
| Barra da aplicação | No topo | O nome da aplicação, a versão, {{ui:Sobre o TakeoffCraft}}, {{ui:Ajuda}} ({{key:F1}}), {{ui:Guardar para offline}}, {{ui:Definições}} ({{key:Mod+,}}), o botão {{ui:Ecrã inteiro}} e o interruptor de tema {{ui:Papel}} / {{ui:Modelo}}. |
| Barra de ferramentas | Por baixo da barra da aplicação | Todos os comandos, em grupos: {{ui:Ficheiro}}, {{ui:Exportar}}, {{ui:Escala}}, {{ui:Medição}}, {{ui:Editar}}, {{ui:Ver}}. |
| Folhas | À esquerda | Todas as páginas de todos os PDF abertos, com uma miniatura, a sua escala e o número de marcações. |
| A folha | Ao meio | A página aberta. É aqui que mede. |
| Artigos | À direita | Os seus artigos de medição, as definições do artigo selecionado e a marcação selecionada. |
| Quantidades | Em baixo | Quantidades e custos por artigo ou por folha, e o total da obra. |
| Barra de estado | No fundo | A medição em direto, mensagens, a sugestão dos 45° e o zoom. |

## A barra de ferramentas

Pare o ponteiro sobre qualquer botão para ver o que faz e a sua tecla.

| Grupo | Botões |
|---|---|
| {{ui:Ficheiro}} | {{ui:Novo}} (medição vazia), {{ui:Abrir PDF}} ({{key:Mod+O}}), {{ui:Abrir medição}} (um projeto `.takeoff.json`), {{ui:Guardar medição}} ({{key:Mod+S}}) |
| {{ui:Exportar}} | Um menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF marcado}} |
| {{ui:Escala}} | {{ui:Calibrar}} ({{key:K}}), {{ui:Verificar}} ({{key:D}}) e a lista {{ui:Predefinida}} |
| {{ui:Medição}} | {{ui:Selecionar}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Área}} ({{key:A}}), {{ui:Círculo}} ({{key:O}}), {{ui:Arco}} ({{key:R}}, um interruptor ligado/desligado), {{ui:Deduzir}} ({{key:E}}, um interruptor ligado/desligado), {{ui:Recorte}} ({{key:X}}), {{ui:Contagem}} ({{key:C}}), {{ui:Contagem automática}} ({{key:S}}) |
| {{ui:Editar}} | {{ui:Anular}} ({{key:Mod+Z}}), {{ui:Refazer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Colar}} ({{key:Mod+V}}), e {{ui:Mais}}: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}}, {{ui:Limpar seleção}} |
| {{ui:Ver}} | {{ui:Ajustar página}} ({{key:F}}), {{ui:Ajustar largura}} ({{key:W}}) |

A ferramenta que está a usar aparece premida. Os botões {{ui:Arco}} e {{ui:Deduzir}} ficam premidos enquanto estão ligados.

## Folhas (à esquerda)

- **Procurar folhas** filtra a lista por nome da folha, nome do ficheiro ou etiqueta da página.
- Cada folha mostra uma miniatura (desenhada à medida que se desloca), o seu nome e a sua escala ou **Sem escala**.
- O lado direito de cada linha mostra quantas marcações a folha tem. Enquanto um artigo está realçado, mostra em vez disso quantas marcações desse artigo estão na folha.
- Clique numa folha para a abrir. {{key:PageDown}} e {{key:PageUp}} passam para a folha seguinte e anterior da lista.
- Quando uma medição abrange PDF que não estão abertos, uma nota por baixo da lista nomeia-os. Veja [Guardar e reabrir uma medição](topic:save-and-reopen).

Os nomes das folhas vêm do PDF: uma etiqueta de página como `A-101` passa a ser o nome da folha. Uma página sem etiqueta recebe o nome do seu ficheiro e o número da página, como «Plantas, página 3». Com vários PDF abertos, as folhas com etiqueta mostram também o nome do ficheiro.

## A folha (ao meio)

- A barra por baixo da folha mostra o nome da folha e a sua escala, ou «Ainda sem escala: escolha uma predefinida ou calibre». Os seus botões: {{ui:MarkupCraft}} (quando essa aplicação pode receber o PDF; veja [Começar uma medição e abrir um conjunto de plantas](topic:open-plan-set)), {{ui:Comparar}} (uma versão mais antiga da folha sobre esta: [Comparar uma folha revista](topic:compare-revisions)), «(n) a verificar» (marcações assinaladas, quando as há) e {{ui:3D}} (a [vista de verificação 3D](topic:check-in-3d)).
- Antes de qualquer PDF estar aberto, o meio mostra um breve guia de cinco passos.
- A roda faz zoom no ponteiro. Arraste para deslocar. Veja [Teclado e rato](topic:keyboard).
- Enquanto usa {{ui:Contagem automática}}, uma barra com os seus controlos aparece no topo da folha.

## Artigos (à direita)

No topo, a lista {{ui:Área da proposta}}: o edifício, piso ou fase em que entram as marcações novas ([Áreas da proposta](topic:bid-areas)).

- {{ui:Novo artigo}} abre um pequeno formulário: um nome, um tipo ({{ui:Linear (comprimento)}}, {{ui:Área}} ou {{ui:Contagem}}) e {{ui:Adicionar}}.
- A lista mostra a cor, o ícone do tipo, o nome e a quantidade de cada artigo. Clique num artigo para desenhar com ele e realçar as suas marcações em todas as folhas. Clique de novo para deixar de realçar.
- Por baixo da lista, **Artigo: (nome)** é o editor de artigos: nome, tipo, cor, unidade, altura ou profundidade, desperdício, preços de material e de mão de obra, os valores medidos e o {{ui:Preço composto}}. Veja [Criar artigos de medição](topic:create-items).
- **Marcação selecionada** aparece quando seleciona uma marcação: a que artigo pertence, a sua folha, as suas medições, e botões como {{ui:Adicionar um recorte}} e {{ui:Eliminar marcação}}. Com várias marcações selecionadas passa a **Marcações selecionadas**: quantas de cada artigo, e {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Cortar}} e {{ui:Eliminar marcações}}.
- O editor de artigos termina com {{ui:Copiar artigo}} e {{ui:Duplicar artigo}}: um artigo com o seu preço composto e custos, sem marcações. Veja [Copiar, colar e duplicar marcações](topic:copy-paste).

## Quantidades (em baixo)

- {{ui:Por artigo}} lista cada artigo e os componentes do seu preço composto com quantidade, desperdício, preços e custos estendidos. Pode escrever o desperdício e os preços diretamente na tabela.
- {{ui:Por folha}} lista a quantidade de cada artigo em cada folha.
- Um aviso que começa por **Incompleto:** aparece quando algo fica de fora dos totais.
- {{ui:Total da obra}} fica à direita do cabeçalho.
- O botão de seta no extremo direito oculta ou mostra a tabela para dar mais espaço à folha.

Veja [Ler as quantidades e o orçamento](topic:read-quantities).

## Barra de estado (em baixo)

Da esquerda para a direita: a medição em direto enquanto desenha (comprimento, área, raio ou o resultado de uma verificação), a caixa {{ui:Escrever}} enquanto escreve um comprimento, as mensagens do TakeoffCraft, o lembrete «Shift fixa a 45°» (ou «Fixa a 45°; Shift liberta o ângulo» quando isso está ativado nas [Definições](topic:settings)), o botão {{ui:Snap}} (snap às linhas do desenho, ligado quando realçado; {{key:F3}}) e a percentagem de zoom.

:::tip
Leia a barra de estado quando algo não acontece. O TakeoffCraft explica aí porque recusou um clique, por exemplo «Esta folha ainda não tem escala».
:::

## Outros esquemas

Tudo o que está acima é o esquema {{ui:CadCraft clássico}}, o inicial. {{ui:Definições}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Esquema}} oferece mais dois; as mesmas ferramentas e teclas funcionam nos três, e escolher outra vez {{ui:CadCraft clássico}} põe todos os controlos de volta onde estavam.

| Esquema | No TakeoffCraft |
|---|---|
| {{ui:Friso e navegador de projeto}} | O {{ui:Friso de medição}} ao longo do topo ([Menus, teclas e rato](topic:menus-keys-and-mouse)), uma barra para a ferramenta em uso, um separador para cada folha que abre (o Modelo e os layouts de um desenho também são folhas) com as escalas predefinidas e {{ui:Ajustar página}} por baixo da folha. O painel da esquerda contém {{ui:Propriedades}} (o artigo, nota ou marcação selecionado) sobre o {{ui:Navegador de medição}}: {{ui:Folhas}} (clique numa para a abrir num separador), {{ui:Condições}} (clique numa para desenhar com ela) e {{ui:Orçamento}} (o total de cada artigo e o total da obra); as miniaturas são o seu segundo separador. |
| {{ui:Caixa de ferramentas e caixa de informação}} | A barra de ferramentas sobre a folha, uma caixa de informação com a {{ui:Área da proposta}}, a ferramenta em uso ou a seleção e a barra da folha, uma coluna com as ferramentas de medição à esquerda, um separador para cada folha, e {{ui:Snap}} e o zoom por baixo da folha. |

Enquanto a [vista de verificação 3D](topic:check-in-3d) está aberta, os separadores das folhas e a barra por baixo da folha afastam-se; feche a vista 3D para voltar a medir. Num telemóvel corre sempre o esquema de telemóvel.

## Ecrã inteiro e temas

O botão {{ui:Ecrã inteiro}} na barra da aplicação, ou {{key:Ctrl+Shift+F}} (Control em todas as plataformas, também num Mac), percorre normal, ecrã inteiro e ecrã inteiro com as barras ocultas. Com as barras ocultas, mova o ponteiro para a margem superior para as mostrar de novo.

{{ui:Papel}} é o tema claro e {{ui:Modelo}} o escuro. Em {{ui:Modelo}} o desenho aparece invertido (linhas claras sobre escuro) apenas no ecrã; as exportações nunca são alteradas.
