---
title: Menus, teclas e rato
summary: Escolha um estilo de menus que corresponda à forma como já trabalha, dê a qualquer comando a sua própria tecla, mova comandos entre menus e defina o que a roda e os botões do rato fazem.
keywords: estilo de menus, menus, barra de menus, friso, separadores do friso, barra de ferramentas, atalhos de teclado, teclas de atalho, teclas, personalizar, reatribuir, rato, roda, inverter, sentido do zoom, botão do meio, botão direito, deslocar, exportar, importar, mudar, familiar, mesa de medição, condições
from: f01f0d6d
---

Os comandos do TakeoffCraft são os mesmos, seja qual for a forma como lhes chega. Um **estilo de menus** só decide onde ficam no ecrã, como se chamam lá e quais as teclas que os executam. Escolha um em {{ui:Definições}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, teclas e rato}}; a alteração é imediata, e este navegador a recorda.

## Os três estilos

| Estilo | O que obtém |
|---|---|
| {{ui:TakeoffCraft}} | A barra de ferramentas própria do TakeoffCraft: Ficheiro, Exportar, Escala, Medição, Editar e Ver, com as teclas de ferramentas de uma letra. O ponto de partida. |
| {{ui:Mesa de medição}} | Uma barra de menus (Ficheiro, Editar, Ver, Escala, Medição, Artigos, Anotações, Exportar) sobre uma linha das ferramentas de medição, à maneira como os programas de medição no ecrã as dispõem. Na linha, os artigos chamam-se condições. As mesmas teclas, mais {{key:N}} para um artigo novo. As predefinições de escala passam para a barra da folha, ao lado da escala da folha. |
| {{ui:Friso de medição}} | Separadores do friso com nomes conforme o trabalho: {{ui:Medição}} (medir, forma, escala, a partir do desenho, condições), {{ui:Editar}}, {{ui:Ver}}, {{ui:Anotações}} e {{ui:Orçamento}} (a folha de cálculo, os PDF marcados, a proposta), com um menu {{ui:Ficheiro}} e uma linha rápida para abrir, guardar, anular e refazer. As ferramentas que usa todos os dias são grandes, e as vizinhas são pequenas e empilhadas. As mesmas teclas; as predefinições de escala passam para a barra da folha. |

Os três estilos mantêm as teclas do TakeoffCraft: {{key:V}} selecionar, {{key:L}} linear, {{key:A}} área, {{key:O}} círculo, {{key:B}} compartimento, {{key:P}} caminho (escolher as linhas do PDF), {{key:X}} recorte, {{key:C}} contagem, {{key:S}} contagem automática, {{key:K}} calibrar, {{key:D}} verificar, {{key:R}} modo de arco, {{key:E}} modo de dedução, {{key:F}} e {{key:W}} para ajustar, {{key:3}} a vista de verificação 3D, {{key:F3}} snap, e {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

As ferramentas da barra da folha (notas, nuvens, realces, Comparar, 3D) esperam até um PDF estar aberto; se forem escolhidas antes, a linha de estado indica-o.

:::tip
Uma tecla que pertence ao esquema próprio do TakeoffCraft, mas que o seu estilo atribuiu a outro comando, não faz nada, e a linha de estado indica para onde foi o comando («Em As minhas teclas, Contagem é Ctrl+Alt+C»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas mantêm sempre o seu significado. Enquanto desenha um percurso ou um contorno, cola ou revê uma contagem automática, as letras e os algarismos de um comprimento escrito ficam com o desenho.
:::

## Personalize

1. Escolha o estilo mais próximo do que quer e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de pesquisa ajuda). {{ui:Adicionar uma tecla}} e prima a tecla, ou duas teclas seguidas para uma tecla de duas letras. Clique numa tecla para a retirar.
3. Com a barra de menus, {{ui:Onde fica}} move o comando para outro menu, ou para {{ui:Só teclas}}.
4. Em {{ui:Rato}}, defina a roda e os botões que deslocam a folha.
5. Dê-lhe um nome e clique em {{ui:Guardar}}.

Guardar um estilo incorporado cria uma cópia sua («A minha mesa de medição»); o estilo incorporado nunca muda. Uma tecla atribuída a dois comandos aparece a vermelho e tem de ser corrigida antes de guardar.

## Rato

- **Roda do rato**: {{ui:Rodar para cima aproxima}} (o início) ou {{ui:Rodar para cima afasta}}, e a velocidade. Um gesto de pinça no trackpad aproxima sempre no sentido em que os dedos se movem.
- **Deslocar a folha com**: o botão do meio, o botão direito, ou ambos. Um arrastar com o botão esquerdo em papel vazio e {{key:Space}} com um arrastar deslocam sempre; um clique com o botão direito sem arrastar conclui sempre um percurso ou um contorno.
- **Arrastar nas vistas 3D**: «Própria de cada vista» mantém os botões da vista de verificação 3D (esquerdo e do meio orbitam, o direito desloca). Ou defina o botão do meio e o direito para orbitar, deslocar, aproximar ou nada; {{key:Shift}} com o botão troca orbitar e deslocar. O botão esquerdo orbita e escolhe sempre.

## Levar consigo

{{ui:Exportar}} guarda o estilo em uso como um pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} acrescenta um, a partir de outro computador ou de um colega. Um ficheiro importado só pode apontar para os comandos do próprio TakeoffCraft: tudo o resto é deixado de fora e contado na linha de estado. {{ui:Eliminar este estilo}} remove um dos seus.

:::note
Estas definições ficam neste navegador. {{ui:Utilizar este estilo em todas as aplicações}} nos cartões de estilo faz com que todas as aplicações abram no estilo correspondente (a própria barra de ferramentas, uma barra de menus ou um friso), com as alterações que fez em cada uma. O TakeoffCraft não tem nenhum estilo com linha de comandos: quando um é escolhido para todas as aplicações, o TakeoffCraft mantém a sua própria barra de ferramentas.

O {{ui:Friso de medição}} é também o friso do esquema {{ui:Friso e navegador de projeto}} ({{ui:Definições}} › {{ui:Global}} › {{ui:Esquema}}): ver [O ecrã do TakeoffCraft](topic:workspace).
:::

Relacionados: [Teclado e rato](topic:keyboard) · [Definições do TakeoffCraft](topic:settings) · [Vindo de outro software de medição](topic:coming-from)
