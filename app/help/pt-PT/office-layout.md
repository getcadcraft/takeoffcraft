---
title: "A disposição do escritório: agrupamento, subtotais, título e cabeçalhos das Políticas predefinidas"
summary: Ative o suplemento Políticas predefinidas e o orçamento, as quantidades por folha, as exportações e o que um assistente lê passam a seguir a disposição de tabelas do seu escritório, a mesma que as tabelas do BimCraft seguem.
keywords: norma do escritório, disposição do escritório, políticas predefinidas, suplemento, disposição das tabelas, agrupar por tipo, agrupar por folha, subtotal, totais, título, cabeçalhos, maiúsculas, disposição do orçamento, disposição da exportação, definições
from: cfd2f30a
---

## O que vai fazer

Faça com que o TakeoffCraft disponha as suas tabelas da forma como o seu escritório as emite, sem configurar cada medição. A disposição é definida uma vez, em Políticas predefinidas, e vale para todas as aplicações deste computador: o que definir no BimCraft ou no CadCraft é o que o TakeoffCraft usa, e vice-versa.

## Passos

1. Abra **Definições › Suplementos** e ative **Políticas predefinidas**. Fica desligado até que o ative; com ele desligado, ou sem nada definido, o TakeoffCraft fica exatamente como estava.
2. Abra **Definições › Global › Políticas predefinidas** e encontre **Disposição das tabelas (norma do escritório)**:

| Política | O que faz no TakeoffCraft |
|---|---|
| Agrupar tabelas por | **Tipo** agrupa o orçamento por tipo de artigo (Linear, Área, Contagem, Quantidade tipificada). **Nível** agrupa as quantidades por folha, pela respetiva folha. **Compartimento** e **Sem agrupamento** deixam ambos sem agrupamento |
| Totais nas tabelas | **Um subtotal sob cada grupo e um total** acrescenta um subtotal sob cada grupo. O total da obra fica sempre |
| Título da tabela | Uma linha por cima da tabela, por exemplo `{schedule}: disposição do escritório` |
| Cabeçalhos das colunas | Como escritos, EM MAIÚSCULAS ou Com Iniciais Maiúsculas |

3. Feche as Definições. As tabelas são atualizadas de imediato.

## O que segue a disposição

- **Quantidades › Por artigo** e **Por folha**: cabeçalhos de grupo, um subtotal sob cada grupo, o título e o tipo de maiúsculas dos cabeçalhos. Uma linha por baixo do título indica que partes a norma do escritório definiu. As linhas são as mesmas: continua a escrever os preços e o desperdício nelas e a clicar nos valores para selecionar as respetivas marcas. Um componente ou uma segunda condição fica sob o seu artigo.
- **O orçamento exportado** (CSV e XLSX): os mesmos grupos e subtotais. No ficheiro de folha de cálculo, um subtotal é uma fórmula `SUBTOTAL` sobre o seu grupo, e o total da obra também é uma, para que nada seja contado duas vezes.
- **O que um assistente lê**: `takeoff_estimate` e `takeoff_quantities` (por folha) acrescentam um bloco `layout` com os grupos, as linhas e os subtotais, e indicam que partes a norma do escritório definiu.

## O que mantém a sua própria disposição

- **Quantidades › Por área** indica o seu próprio agrupamento (por área de proposta) e mantém-no.
- O **total da obra**, as anotações do resumo de propostas e as alternativas não são reagrupadas.
- Um agrupamento para o qual a tabela não tem coluna fica de fora: o orçamento não tem nível, e as quantidades por folha não têm tipo.

## Bom saber

- As políticas ficam guardadas neste navegador para todas as aplicações do CadCraft e viajam no ficheiro de Políticas predefinidas (**Guardar num ficheiro** / **Carregar de um ficheiro** no mesmo local), para que um escritório partilhe um só ficheiro.
- Um orçamento exportado em CSV com grupos destina-se à leitura. Para trazer um orçamento de volta como biblioteca de preços, exporte-o sem agrupamento definido.
- A parte do BimCraft desta mesma norma: tabelas, configurações e exportações. O TakeoffCraft ainda não tem políticas próprias, por isso não existe uma secção Políticas predefinidas em Definições › TakeoffCraft.
