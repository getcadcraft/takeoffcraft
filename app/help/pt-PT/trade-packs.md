---
title: Pacotes da especialidade
summary: Adicione composições gratuitas de uma especialidade à sua biblioteca de preços, remova-as num só passo e partilhe a sua biblioteca como pacote.
keywords: pacote da especialidade, pacote, composições, modelos, itens iniciais, elétrico, gesso cartonado, estruturas, pintura, betão, pavimentos, alvenaria, coberturas, revestimento, carpintaria, canalização, avac, isolamento, paisagismo, deck, empreiteiro geral, csi, masterformat, cc0, adicionar, remover, partilhar
from: d3c036be
---

Um **pacote da especialidade** é um conjunto de artigos prontos para uma especialidade: cada um com a sua unidade, a sua altura ou profundidade, o seu desperdício e a sua **composição**, as peças e fórmulas que transformam um troço, uma área ou uma contagem medidos em materiais. Uma divisória de gesso cartonado, por exemplo, traz a sua calha, os seus montantes, as placas, os parafusos, a fita e a massa.

Os pacotes são adicionados à sua [biblioteca de preços](topic:price-library) e, a partir daí, adicionam-se os respetivos artigos a qualquer medição.

## Adicionar um pacote

1. Abra {{ui:Biblioteca}} no topo do painel {{ui:Artigos}} e, depois, {{ui:Pacotes da especialidade…}}.
2. Escolha as {{ui:Unidades}}: imperiais (LF, SF), métricas (m, m²) ou ambas. Cada composição surge nos dois sistemas.
3. Escolha {{ui:Adicionar}} ao lado de um pacote.

Os artigos do pacote aparecem na biblioteca, marcados com o nome do pacote. Para os usar, marque-os na biblioteca e escolha {{ui:Adicionar à medição}}.

:::note
**Um pacote não traz preços.** Os seus artigos mostram "defina o seu preço" na biblioteca. Os preços definem-se na biblioteca ou no editor de artigos, ou importa-se a lista de preços como CSV e usa-se {{ui:Atualizar preços}}.
:::

Se já existir na biblioteca um artigo com o mesmo nome e tipo, o pacote mantém o artigo existente como está. Adicionar um pacote de novo substitui os artigos desse pacote pela versão nova.

## Remover um pacote

Em {{ui:Pacotes da especialidade…}}, escolha {{ui:Remover}} ao lado de um pacote adicionado e, depois, mais uma vez para confirmar. Todos os artigos que vieram dele saem da biblioteca num só passo. Os artigos já adicionados a uma medição mantêm-se nessa medição.

## O que há num pacote

Escolha {{ui:Fontes e pormenores}} sob um pacote para ver a partir de quê foi escrita cada composição: códigos de construção, normas e guias de instalação das associações da especialidade. Na biblioteca, pouse o ponteiro sobre um artigo para ler as suas fontes e as suas premissas, como o espaçamento dos montantes ou o rendimento de uma tinta. Confronte-as com a obra e com as fichas técnicas dos produtos, e altere as fórmulas onde não coincidirem (veja [Composições e fórmulas](topic:assemblies)).

Todos os pacotes trazem a marca **Inicial: ainda não revista por um orçamentista** até que orçamentistas em atividade a tenham revisto.

Cada artigo traz também o seu número CSI MasterFormat, como `09 21 16`.

## Partilhar a sua biblioteca como pacote

{{ui:Exportar como pacote…}} na biblioteca guarda-a como ficheiro de pacote (`.ccpack.json`) que qualquer pessoa pode adicionar com {{ui:Abrir um ficheiro de pacote…}}. Por predefinição, deixa de fora os artigos vindos de pacotes adicionados, e não inclui preços. Marque {{ui:Incluir os meus preços como preços de exemplo}} para enviar também os preços: saem identificados com a região e a data indicada, e quem adicionar o pacote escolhe se os usa.

Os ficheiros de pacote são apenas dados, nunca programas. O TakeoffCraft verifica cada parte de um ficheiro antes de o usar e deixa de fora tudo o que não consegue ler.
