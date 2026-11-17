---
title: Copiar, colar e duplicar marcações
summary: Copie marcações com os seus itens, cole onde você clicar ou no mesmo lugar em outra folha, duplique, recorte, apague e selecione tudo, cada ação com um passo para desfazer.
keywords: copiar, colar, recortar, duplicar, colar no mesmo local, área de transferência, selecionar tudo, limpar seleção, várias marcações, pavimento típico, repetir, mesma planta, outra folha, copiar item, duplicar item
from: e20e9024
---

O grupo {{ui:Editar}} da barra de ferramentas tem {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}} e {{ui:Colar}}. O menu {{ui:Mais}} tem o restante, cada um com sua tecla: {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}. Cada um deles é um passo para desfazer com {{key:Mod+Z}}.

## Selecionar as marcações

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique em uma marcação.
2. Mantenha {{key:Shift}} pressionado e clique em mais marcações para adicioná-las. {{key:Shift}} + clique em uma marcação já selecionada a tira da seleção de novo.
3. Ou pressione {{key:Mod+A}} ({{ui:Selecionar tudo}}) para pegar todas as marcações da folha aberta.

Com várias marcações selecionadas, o painel da direita mostra **Marcações selecionadas**: quantas de cada item, com {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Recortar}} e {{ui:Excluir marcações}}. As alças dos cantos aparecem só quando uma marcação está selecionada. {{key:Esc}} ({{ui:Limpar seleção}}) limpa a seleção.

## Copiar e colar onde você clicar

1. Selecione as marcações e pressione {{key:Mod+C}} ({{ui:Copiar}}). As marcações são copiadas com os seus itens, incluindo a composição, a perda e os custos de cada item.
2. Vá para a folha em que as quer (pode ser a mesma folha).
3. Pressione {{key:Mod+V}} ({{ui:Colar}}). Uma cópia tracejada segue o ponteiro.
4. Clique onde ela deve ir. O centro das marcações copiadas cai no ponteiro.

{{key:Esc}} cancela e não adiciona nada. As marcações coladas ficam selecionadas depois, então {{key:Delete}} ou {{key:Mod+Z}} as removem de novo.

No mesmo levantamento, as marcações coladas vão para os **mesmos itens**, então suas quantidades se somam a esses itens. Em outro levantamento (outra guia, ou depois de {{ui:Novo}}), é usado um item com o mesmo nome e tipo; caso contrário, o item é adicionado com a sua composição. Se o nome já estiver em uso por um item de outro tipo, o item adicionado se chama "(nome) (cópia)".

As marcações coladas vão para a área da proposta escolhida no topo do painel {{ui:Itens}} (ou para nenhuma). Veja [Áreas da proposta](topic:bid-areas).

## Colar no mesmo local

{{key:Mod+Shift+V}} ({{ui:Colar no mesmo local}}) põe a cópia exatamente no mesmo lugar da folha aberta, pela posição na página. Use para um pavimento típico: levante o nível 2, copie, abra o nível 3 e cole no mesmo local.

Colar no mesmo local exige uma folha do **mesmo tamanho** da que você copiou. Em uma folha de outro tamanho, o TakeoffCraft avisa e não cola nada; use {{ui:Colar}} e clique. Na folha de onde você copiou, a cópia cai sobre os originais.

## A escala precisa coincidir

Comprimentos e áreas dependem da escala da folha. Um trecho que mede 10' em 1/4" = 1'-0" mediria 20' em uma folha em 1/8" = 1'-0". Por isso o TakeoffCraft cola trechos e áreas apenas em uma folha com a **mesma escala** da folha de origem, e diz claramente quando não é o caso:

- A folha aberta ainda não tem escala: defina uma primeiro ([Definir a escala](topic:set-the-scale)) e depois cole.
- A folha aberta tem outra escala: a mensagem informa as duas escalas. Cole em uma folha na mesma escala.
- Contagens não precisam de escala: contagens copiadas podem ser coladas em qualquer lugar.

## Duplicar

{{key:Mod+D}} ({{ui:Duplicar}}) copia as marcações selecionadas e coloca a cópia no ponteiro imediatamente; clique onde ela deve ir. Nada é adicionado até você clicar, e {{key:Esc}} não deixa nada. Duplicar não altera o que {{ui:Colar}} cola.

## Recortar e excluir

- {{key:Mod+X}} ({{ui:Recortar}}) copia as marcações selecionadas e as exclui. Cole-as onde pertencem, ou desfaça o recorte.
- {{key:Delete}} ou {{key:Backspace}} ({{ui:Excluir}}) exclui as marcações selecionadas sem copiá-las.

## Copiar um item

O editor de item (em **Itens**) termina com:

- {{ui:Copiar item}}: copia o item com sua composição, perda e custos, sem as marcações. Depois, {{ui:Colar}} adiciona uma cópia dele a este levantamento, ou a outro.
- {{ui:Duplicar item}}: adiciona uma cópia de imediato, chamada "(nome) (cópia)".

:::tip
A cópia fica neste computador: é guardada nesta guia e no armazenamento do navegador, para que outra guia do TakeoffCraft possa colá-la. Nada é enviado, e a área de transferência do sistema não é usada, então você não pode colar marcações em outros programas.
:::

:::note
Uma cópia vem de uma folha por vez. As marcações são coladas como estão: ainda não há como girar ou espelhar uma cópia.
:::
