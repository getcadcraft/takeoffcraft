---
title: Copiar, colar e duplicar marcações
summary: Copie marcações com os seus artigos, cole-as onde clicar ou no mesmo sítio noutra folha, duplique, recorte, elimine e selecione tudo, cada uma com um passo para anular.
keywords: copiar, colar, cortar, duplicar, colar no mesmo sítio, área de transferência, selecionar tudo, limpar seleção, várias marcações, piso tipo, repetir, mesma planta, outra folha, copiar artigo, duplicar artigo
from: e20e9024
---

O grupo {{ui:Editar}} da barra de ferramentas tem {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}} e {{ui:Colar}}. O menu {{ui:Mais}} tem o resto, cada um com a sua tecla: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}. Cada uma delas é um passo para anular com {{key:Mod+Z}}.

## Selecionar as marcações

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique numa marcação.
2. Mantenha {{key:Shift}} premido e clique em mais marcações para as acrescentar. {{key:Shift}} + clique numa marcação já selecionada retira-a de novo.
3. Ou prima {{key:Mod+A}} ({{ui:Selecionar tudo}}) para selecionar todas as marcações da folha aberta.

Com várias marcações selecionadas, o painel da direita mostra **Marcações selecionadas**: quantas de cada artigo, com {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Cortar}} e {{ui:Eliminar marcações}}. As pegas de canto só aparecem quando está selecionada uma única marcação. {{key:Esc}} ({{ui:Limpar seleção}}) limpa a seleção.

## Copiar e colar onde clicar

1. Selecione as marcações e prima {{key:Mod+C}} ({{ui:Copiar}}). As marcações são copiadas com os seus artigos, incluindo o preço composto, o desperdício e os custos de cada artigo.
2. Vá à folha onde as quer (pode ser a mesma folha).
3. Prima {{key:Mod+V}} ({{ui:Colar}}). Uma cópia a tracejado segue o cursor.
4. Clique onde deve ir. O centro das marcações copiadas fica no cursor.

{{key:Esc}} cancela e não acrescenta nada. As marcações coladas ficam selecionadas depois, por isso {{key:Delete}} ou {{key:Mod+Z}} as retiram de novo.

Na mesma medição, as marcações coladas vão para os **mesmos artigos**, por isso as suas quantidades somam-se a esses artigos. Noutra medição (outro separador, ou depois de {{ui:Novo}}), é usado um artigo com o mesmo nome e tipo; caso contrário, o artigo é acrescentado com o seu preço composto. Se o nome já estiver usado por um artigo de outro tipo, o artigo acrescentado chama-se « (nome) (cópia) ».

As marcações coladas vão para a área da proposta escolhida no topo do painel {{ui:Artigos}} (ou para nenhuma). Consulte [Áreas de proposta](topic:bid-areas).

## Colar no mesmo sítio

{{key:Mod+Shift+V}} ({{ui:Colar no mesmo sítio}}) coloca a cópia exatamente no mesmo local da folha aberta, pela sua posição na página. Use-o para um piso tipo: meça o nível 2, copie, abra o nível 3 e cole no mesmo sítio.

Colar no mesmo sítio exige uma folha do **mesmo tamanho** que a que copiou. Numa folha de outro tamanho, o TakeoffCraft indica-o e não cola nada; use {{ui:Colar}} e clique. Na folha de onde copiou, a cópia fica por cima dos originais.

## A escala tem de coincidir

Os comprimentos e as áreas dependem da escala da folha. Um troço que mede 10' à escala 1/4" = 1'-0" mediria 20' numa folha à escala 1/8" = 1'-0". Por isso, o TakeoffCraft cola troços e áreas apenas numa folha com a **mesma escala** da folha de onde vieram, e diz claramente quando não é o caso:

- A folha aberta ainda não tem escala: defina-a primeiro ([Definir a escala](topic:set-the-scale)), depois cole.
- A folha aberta tem outra escala: a mensagem indica as duas escalas. Cole numa folha com a mesma escala.
- As contagens não precisam de escala: as contagens copiadas colam-se em qualquer lado.

## Duplicar

{{key:Mod+D}} ({{ui:Duplicar}}) copia as marcações selecionadas e coloca a cópia no cursor de imediato; clique onde deve ir. Nada é acrescentado até clicar, e {{key:Esc}} não deixa nada. Duplicar não altera o que {{ui:Colar}} cola.

## Recortar e eliminar

- {{key:Mod+X}} ({{ui:Cortar}}) copia as marcações selecionadas e elimina-as. Cole-as onde pertencem, ou anule o corte.
- {{key:Delete}} ou {{key:Backspace}} ({{ui:Eliminar}}) elimina as marcações selecionadas sem as copiar.

## Copiar um artigo

O editor de artigos (em **Artigos**) termina com:

- {{ui:Copiar artigo}}: copia o artigo com o seu preço composto, desperdício e custos, sem marcações. {{ui:Colar}} acrescenta depois uma cópia dele a esta medição, ou a outra.
- {{ui:Duplicar artigo}}: acrescenta uma cópia de imediato, com o nome « (nome) (cópia) ».

:::tip
A cópia fica neste computador: é guardada neste separador e no armazenamento do navegador, para que outro separador do TakeoffCraft a possa colar. Nada é carregado, e a área de transferência do sistema não é usada, por isso não é possível colar marcações noutros programas.
:::

:::note
Uma cópia vem de uma folha de cada vez. As marcações são coladas tal como estão: ainda não é possível rodar nem espelhar uma cópia.
:::
