---
title: Iniciar uma nova medição
summary: Limpe tudo e comece uma medição vazia sem recarregar a página, e guarde primeiro o seu trabalho.
keywords: novo, nova medição, limpar, repor, recomeçar, vazio, fechar PDFs, próxima obra
from: 16d392a4
---

{{ui:Novo}} fecha todos os PDF e inicia uma medição vazia na mesma página.

1. Guarde a medição atual se a quiser manter: {{ui:Guardar medição}} ou {{key:Mod+S}}.
2. Escolha {{ui:Novo}} no grupo {{ui:Ficheiro}}.
3. Se houver alterações por guardar, o TakeoffCraft pergunta **Medição não guardada**: escolha {{ui:Guardar primeiro a medição}} (transfere o projeto e depois limpa), {{ui:Descartar alterações}}, ou {{ui:Cancelar}}.
   A janela volta ao estado vazio: sem PDF, sem artigos, sem marcas e sem escalas. A barra de estado diz «Nova medição. Abra PDFs para começar.»

O que é limpo:

- todos os PDF abertos, as respetivas folhas e miniaturas,
- artigos, conjuntos, marcas e escalas,
- o zoom e a posição de cada folha,
- o histórico de anulação (não é possível anular {{ui:Novo}}),
- o modo de arco, e qualquer pesquisa ou revisão de contagem automática.

Os seus ficheiros no disco não são tocados. Para retomar a medição antiga, abra o respetivo `.takeoff.json` e os PDF: ver [Guardar e reabrir uma medição](topic:save-and-reopen).

:::note
Cada nova medição começa sem artigos. Para trazer artigos, copie-os primeiro: {{ui:Copiar artigo}} em Artigos (ou copie marcas, que levam consigo os seus artigos), e depois {{ui:Colar}} na nova medição. Ver [Copiar, colar e duplicar marcas](topic:copy-paste). Para artigos que usa em todas as obras, guarde-os na sua [biblioteca de preços](topic:price-library) e acrescente-os a partir daí, ou acrescente um [pacote de especialidade](topic:trade-packs).
:::
