---
title: Pacotes de serviço
summary: Adicione composições gratuitas de um serviço à sua biblioteca de preços, remova-as em um único passo e compartilhe sua própria biblioteca como pacote.
keywords: pacote de serviço, pacote, composições, modelos, itens iniciais, elétrica, drywall, estrutura, pintura, concreto, piso, alvenaria, cobertura, revestimento, marcenaria, hidráulica, hvac, isolamento, paisagismo, deck, empreiteiro geral, csi, masterformat, cc0, adicionar, remover, compartilhar
from: d3c036be
---

Um **pacote de serviço** é um conjunto de itens prontos para um serviço: cada um com sua unidade, sua altura ou profundidade, sua perda e sua **composição**, as partes e fórmulas que transformam um trecho, uma área ou uma contagem medidos em materiais. Uma divisória de drywall, por exemplo, traz sua guia, montantes, placas, parafusos, fita e massa.

Os pacotes são adicionados à sua [biblioteca de preços](topic:price-library) e, de lá, você adiciona os itens deles a qualquer levantamento.

## Adicionar um pacote

1. Abra {{ui:Biblioteca}} no topo do painel {{ui:Itens}}, depois {{ui:Pacotes de serviço…}}.
2. Escolha as {{ui:Unidades}}: imperiais (LF, SF), métricas (m, m²) ou ambas. Cada composição vem nos dois sistemas.
3. Escolha {{ui:Adicionar}} ao lado de um pacote.

Os itens do pacote aparecem na biblioteca, marcados com o nome do pacote. Para usá-los, marque-os na biblioteca e escolha {{ui:Adicionar ao levantamento}}.

:::note
**Um pacote não traz preços.** Seus itens mostram "defina seu preço unitário" na biblioteca. Os preços são seus: digite-os na biblioteca ou no editor de itens, ou importe sua lista de preços como CSV e use {{ui:Atualizar preços}}.
:::

Se você já tem um item com o mesmo nome e tipo na sua biblioteca, o pacote deixa o seu como está. Adicionar um pacote de novo substitui os itens dele pela versão nova.

## Remover um pacote

Em {{ui:Pacotes de serviço…}}, escolha {{ui:Remover}} ao lado de um pacote que você adicionou e, em seguida, mais uma vez para confirmar. Todos os itens vindos dele saem da biblioteca em um único passo. Os itens que você já adicionou a um levantamento permanecem nesse levantamento.

## O que há em um pacote

Escolha {{ui:Fontes e detalhes}} sob um pacote para ver de onde cada composição foi escrita: códigos de obras, normas e guias de instalação de associações do setor. Na biblioteca, pare o ponteiro sobre um item para ler suas fontes e premissas, como o espaçamento dos montantes ou o rendimento de uma tinta. Confira-as com a sua obra e com as fichas técnicas dos seus produtos, e altere as fórmulas onde forem diferentes (veja [Composições e fórmulas](topic:assemblies)).

Todo pacote é marcado com **Inicial: ainda não revisado por um orçamentista** até que orçamentistas em atividade o revisem.

Cada item também traz seu número CSI MasterFormat, como `09 21 16`.

## Compartilhe sua biblioteca como pacote

{{ui:Exportar como pacote…}} na biblioteca a salva como um arquivo de pacote (`.ccpack.json`) que qualquer pessoa pode adicionar com {{ui:Abrir um arquivo de pacote…}}. Por padrão, ela deixa de fora os itens vindos de pacotes que você adicionou, e não leva preços. Marque {{ui:Incluir meus preços como preços de exemplo}} para enviar também os seus preços: eles vão identificados com a região e a data que você informar, e quem adicionar o pacote decide se quer usá-los.

Arquivos de pacote são apenas dados, nunca programas. O TakeoffCraft verifica cada parte de um arquivo antes de usá-lo e deixa de fora o que não consegue ler.
