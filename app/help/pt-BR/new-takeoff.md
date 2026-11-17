---
title: Iniciar um novo levantamento
summary: Limpe tudo e comece um levantamento vazio sem recarregar a página, e mantenha o seu trabalho seguro antes.
keywords: novo, novo levantamento, limpar, redefinir, recomeçar, vazio, fechar pdfs, próximo trabalho
from: 16d392a4
---

{{ui:Novo}} fecha todos os PDFs e inicia um levantamento vazio na mesma página.

1. Salve o levantamento atual se quiser mantê-lo: {{ui:Salvar levantamento}} ou {{key:Mod+S}}.
2. Escolha {{ui:Novo}} no grupo {{ui:Arquivo}}.
3. Se houver alterações não salvas, o TakeoffCraft pergunta **Levantamento não salvo**: escolha {{ui:Salvar levantamento primeiro}} (ele baixa o projeto e depois limpa), {{ui:Descartar alterações}} ou {{ui:Cancelar}}.
   A janela volta ao estado vazio: sem PDFs, sem itens, sem marcas, sem escalas. A barra de status diz "Novo levantamento. Abra PDFs para começar."

O que é limpo:

- todos os PDFs abertos, as suas folhas e miniaturas,
- itens, composições, marcas e escalas,
- o zoom e a posição de cada folha,
- o histórico de desfazer (não é possível desfazer {{ui:Novo}}),
- o modo de arco, e qualquer busca ou revisão de contagem automática.

Os seus arquivos no disco não são tocados. Para retomar o levantamento antigo, abra o seu `.takeoff.json` e os PDFs dele: veja [Salvar e reabrir um levantamento](topic:save-and-reopen).

:::note
Cada novo levantamento começa sem itens. Para trazer itens, copie-os antes: {{ui:Copiar item}} em {{ui:Itens}} (ou copie marcas, que levam os seus itens), depois {{ui:Colar}} no novo levantamento. Veja [Copiar, colar e duplicar marcas](topic:copy-paste). Para itens que você usa em todo trabalho, mantenha-os na sua [biblioteca de preços](topic:price-library) e adicione-os de lá, ou adicione um [pacote de serviço](topic:trade-packs).
:::
