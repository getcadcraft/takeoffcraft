---
title: Menus, teclas e mouse
summary: Escolha um estilo de menu que combine com a sua forma de trabalhar, dê a qualquer comando a sua própria tecla, mova comandos entre menus e defina o que a roda e os botões do mouse fazem.
keywords: estilo de menu, menus, barra de menus, faixa de opções, abas da faixa de opções, barra de ferramentas, atalhos de teclado, teclas de atalho, teclas, personalizar, remapear, mouse, roda, inverter, direção do zoom, botão do meio, botão direito, pan, exportar, importar, troca, familiar, mesa de levantamento, condições
from: f01f0d6d
---

Os comandos do TakeoffCraft são os mesmos, não importa como você chega até eles. Um **estilo de menu** apenas decide onde eles ficam na tela, como são chamados e quais teclas os executam. Escolha um em {{ui:Configurações}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, teclas e mouse}}; a mudança é imediata, e este navegador a lembra.

## Os três estilos

| Estilo | O que você recebe |
|---|---|
| {{ui:TakeoffCraft}} | A barra de ferramentas própria do TakeoffCraft: {{ui:Arquivo}}, {{ui:Exportar}}, {{ui:Escala}}, {{ui:Levantamento}}, {{ui:Editar}} e {{ui:Exibir}}, com as teclas de ferramenta de uma letra. O ponto de partida. |
| {{ui:Mesa de levantamento}} | Uma barra de menus ({{ui:Arquivo}}, {{ui:Editar}}, {{ui:Exibir}}, {{ui:Escala}}, {{ui:Levantamento}}, {{ui:Itens}}, {{ui:Marcação}}, {{ui:Exportar}}) sobre uma fileira de ferramentas de levantamento, do jeito que os programas de levantamento na tela organizam as suas. Na fileira, os itens são chamados de condições. As mesmas teclas, mais {{key:N}} para um novo item. As predefinições de escala passam para a barra da folha, ao lado da escala da folha. |
| {{ui:Faixa de opções do levantamento}} | Abas de faixa de opções nomeadas pelo trabalho: {{ui:Levantamento}} (medir, dar forma, escala, a partir do desenho, condições), {{ui:Editar}}, {{ui:Exibir}}, {{ui:Marcação}} e {{ui:Orçamento}} (a planilha de trabalho, os PDFs marcados, a proposta), com um menu {{ui:Arquivo}} e uma fileira rápida para abrir, salvar, desfazer e refazer. As ferramentas que você usa o dia todo são grandes, e as vizinhas, pequenas e empilhadas. As mesmas teclas; as predefinições de escala passam para a barra da folha. |

Todos os três estilos mantêm as teclas do TakeoffCraft: {{key:V}} selecionar, {{key:L}} linear, {{key:A}} área, {{key:O}} círculo, {{key:B}} ambiente, {{key:P}} caminho (escolher as linhas do PDF), {{key:X}} recorte, {{key:C}} contagem, {{key:S}} contagem automática, {{key:K}} calibrar, {{key:D}} conferir, {{key:R}} modo de arco, {{key:E}} modo de dedução, {{key:F}} e {{key:W}} para ajustar, {{key:3}} a vista 3D de conferência, {{key:F3}} snap, e {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

As ferramentas da barra da folha (notas, nuvens, destaques, Comparar, 3D) esperam até um PDF estar aberto; se forem escolhidas antes, a linha de status avisa.

:::tip
Uma tecla que pertence ao layout próprio do TakeoffCraft, mas que o seu estilo deu a outro comando, não faz nada, e a linha de status diz para onde foi o comando dela ("Em Minhas teclas, Contagem é Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas sempre mantêm o seu sentido. Enquanto você desenha um trecho ou um contorno, cola ou revisa uma contagem automática, as letras e os números de um comprimento digitado ficam com o desenho.
:::

## Faça do seu jeito

1. Escolha o estilo mais próximo do que você quer e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de busca ajuda). Clique em {{ui:Adicionar uma tecla}} e pressione a tecla, ou duas teclas seguidas para uma tecla de duas letras. Clique numa tecla para removê-la.
3. Com a barra de menus, {{ui:Onde fica}} move o comando para outro menu, ou para {{ui:Somente teclas}}.
4. Em {{ui:Mouse}}, defina a roda e os botões que fazem pan na folha.
5. Dê um nome e clique em {{ui:Salvar}}.

Salvar um estilo embutido cria a sua própria cópia ("Minha mesa de levantamento"); o estilo embutido nunca muda. Uma tecla dada a dois comandos aparece em vermelho e precisa ser corrigida antes de salvar.

## Mouse

- **Roda do mouse**: {{ui:Rolar para cima aproxima}} (o início) ou {{ui:Rolar para cima afasta}}, e a velocidade. Um pinçamento no trackpad sempre dá zoom no sentido em que os dedos se movem.
- **Fazer pan na folha com**: o botão do meio, o botão direito, ou os dois. Um arraste com o botão esquerdo sobre o papel vazio e {{key:Space}} com arraste sempre fazem pan; um clique com o botão direito sem arrastar sempre termina um trecho ou um contorno.
- **Arrastar nas vistas 3D**: {{ui:Próprio de cada vista}} mantém os botões da vista 3D de conferência (esquerdo e do meio orbitam, o direito faz pan). Ou defina os botões do meio e do direito para orbitar, fazer pan, dar zoom ou nada; {{key:Shift}} com o botão troca orbitar e pan. O botão esquerdo sempre orbita e escolhe.

## Leve com você

{{ui:Exportar}} salva o estilo em uso como um pequeno arquivo `.ccinput.json`; {{ui:Importar…}} adiciona um, de outro computador ou de um colega. Um arquivo importado só pode apontar para os comandos do próprio TakeoffCraft: o que houver nele além disso fica de fora e é contado na linha de status. {{ui:Excluir este estilo}} remove um dos seus.

:::note
Estas configurações ficam neste navegador. {{ui:Usar este estilo em todos os apps}}, sob os cartões de estilo, faz todos os apps abrirem no estilo correspondente (a sua própria barra de ferramentas, uma barra de menus ou uma faixa de opções), com as alterações que você fez em cada app. O TakeoffCraft não tem um estilo com linha de comando: quando um é escolhido para todos os apps, o TakeoffCraft mantém a sua própria barra de ferramentas.
:::

A {{ui:Faixa de opções do levantamento}} também é a faixa de opções do layout {{ui:Faixa de opções e navegador do projeto}} ({{ui:Configurações}} › {{ui:Global}} › {{ui:Layout}}): veja [A tela do TakeoffCraft](topic:workspace).

Relacionados: [Teclado e mouse](topic:keyboard) · [Configurações do TakeoffCraft](topic:settings) · [Vindo de outros softwares de levantamento](topic:coming-from)
