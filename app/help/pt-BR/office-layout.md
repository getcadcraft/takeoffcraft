---
title: "O layout do escritório: agrupamento, subtotais, legenda e cabeçalhos das Default Policies"
summary: Ative o complemento Default Policies e deixe que o orçamento, os quantitativos por folha, as exportações e o que um assistente lê sigam o layout de tabelas do seu escritório, o mesmo que as tabelas do BimCraft seguem.
keywords: padrão do escritório, layout do escritório, default policies, complemento, layout de tabelas, agrupar por tipo, agrupar por folha, subtotal, totais, legenda, cabeçalhos, maiúsculas, layout do orçamento, layout da exportação, configurações
from: cfd2f30a
---

## O que você vai fazer

Faça o TakeoffCraft montar suas tabelas do jeito que o seu escritório as emite, sem configurar isso em cada levantamento. O layout é definido uma vez, em Default Policies, e vale para todos os aplicativos deste computador: o que você define no BimCraft ou no CadCraft é o que o TakeoffCraft usa, e vice-versa.

## Passos

1. Abra **Configurações › Complementos** e ative **Default Policies**. Ele fica desligado até você fazer isso; com ele desligado, ou sem nada definido, o TakeoffCraft funciona exatamente como antes.
2. Abra **Configurações › Global › Default Policies** e encontre **Layout de tabelas (o padrão do escritório)**:

| Política | O que faz no TakeoffCraft |
|---|---|
| Agrupar tabelas por | **Tipo** agrupa o orçamento pelo tipo de item (Linear, Area, Count, Typed quantity). **Nível** agrupa os quantitativos por folha, pela folha de cada um. **Room** e **No grouping** deixam ambos sem agrupamento |
| Totais nas tabelas | **Um subtotal sob cada grupo e um total** adiciona um subtotal sob cada grupo. O total da obra permanece sempre |
| Título da tabela | Uma linha acima da tabela, por exemplo `{schedule}: office layout` |
| Cabeçalhos das colunas | Como escritos, EM MAIÚSCULAS ou Com Iniciais Maiúsculas |

3. Feche as Configurações. As tabelas são atualizadas imediatamente.

## O que usa o layout

- **Quantitativos › Por item** e **Por folha**: títulos de grupo, um subtotal sob cada grupo, o título e o formato dos cabeçalhos. Uma linha abaixo do título informa quais partes o padrão do escritório definiu. As linhas são as mesmas: você ainda digita taxas e perdas nelas e clica nos valores para selecionar suas marcas. Um componente ou uma segunda condição permanece sob o seu item.
- **O orçamento exportado** (CSV e XLSX): os mesmos grupos e subtotais. Na pasta de trabalho, um subtotal é uma fórmula `SUBTOTAL` sobre o seu grupo, e o total da obra também é uma, para que nada seja contado duas vezes.
- **O que um assistente lê**: `takeoff_estimate` e `takeoff_quantities` (por folha) acrescentam um bloco `layout` com os grupos, as linhas e os subtotais, e informam quais partes o escritório definiu.

## O que mantém o próprio

- **Quantitativos › Por área** declara o próprio agrupamento (por área de proposta) e o mantém.
- O **total da obra**, as margens do resumo de propostas e as alternativas não são reagrupados.
- Um agrupamento para o qual a tabela não tem coluna fica de fora: o orçamento não tem nível, e os quantitativos por folha não têm tipo.

## Bom saber

- As políticas ficam guardadas neste navegador para todos os aplicativos CadCraft e viajam no arquivo de Default Policies (**Salvar em um arquivo** / **Carregar de um arquivo** no mesmo lugar), para que um escritório compartilhe um único arquivo.
- Um orçamento exportado em CSV com agrupamentos serve para leitura. Para trazê-lo de volta como biblioteca de preços, exporte-o sem agrupamento definido.
- O lado do BimCraft desse padrão: tabelas, configurações e exportações. O TakeoffCraft ainda não tem políticas próprias, então não há uma seção Default Policies em Configurações › TakeoffCraft.
