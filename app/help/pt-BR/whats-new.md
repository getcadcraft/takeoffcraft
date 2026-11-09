---
title: Novidades nas versões 0.8 e 0.8.1
summary: Conte uma legenda inteira de símbolos em todas as folhas abertas de uma só vez, precifique itens com base nos preços dos seus trabalhos anteriores, confira o levantamento contra o estoque e os prazos de entrega de um fornecedor, além de novas ferramentas de assistente para as três funções, as mudanças compartilhadas da 0.8 e a correção da 0.8.1 para arquivos DWG.
keywords: novidades, o que há de novo, notas de versão, registro de alterações, alterações, 0.8, 0.8.1, versão, novos recursos, contar tudo, legenda, legenda de símbolos, conjunto inteiro, memória de preços, trabalhos anteriores, último trabalho, preço típico, fornecedor, estoque, prazo de entrega, backorder, lista de pedido, falta, painel de problemas, assistente, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg
from: a04adef6
---

Estas são as alterações da TakeoffCraft 0.8 (lançada em 2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. Agora é possível contar uma legenda de símbolos em todo o conjunto de uma só vez, iniciar um novo levantamento a partir dos preços dos seus trabalhos anteriores e conferir o levantamento contra o estoque de um fornecedor. A 0.8.1 é uma versão de correção.

## Novo

### Contar tudo no conjunto

- **Delimite a legenda uma vez.** {{ui:Contar tudo}} na barra de ferramentas lê uma legenda de símbolos: arraste uma caixa em volta dos símbolos e dos nomes impressos ao lado deles. Cada símbolo é listado com a sua imagem e o seu nome, e o nome vira o nome do item. Desmarque o que não quiser e depois escolha {{ui:Contar em N folhas}}. Uma barra mostra a folha que está sendo pesquisada, {{ui:Cancelar}} interrompe a execução, e a página continua disponível.
- **Todas as folhas em uma só execução.** Cada símbolo é contado em todas as folhas abertas. Uma folha desenhada em outra escala é pesquisada nessa escala, e os símbolos são encontrados girados em qualquer ângulo reto. Os próprios símbolos da legenda não são contados na sua folha.
- **Revise antes de adicionar qualquer coisa.** Cada total tem um link por folha ("E-103: 4") que leva até essa folha. Clique em uma caixa de um resultado para deixá-lo de fora e clique de novo para trazê-lo de volta. O nível de correspondência (50% a 100%) apenas filtra o que foi encontrado; nada é pesquisado novamente.
- **Uma etapa de desfazer.** {{ui:Adicionar N marcações}} cria um item de contagem por símbolo, com uma marcação em cada ocorrência encontrada. Um nome que já é um item de contagem seu é reaproveitado. {{key:Ctrl+Z}} desfaz todos os itens e marcações. O que você aceitar também alimenta {{ui:Aprendido}}.
- **Símbolos em qualquer ângulo.** Marque {{ui:Símbolos em qualquer ângulo}} antes de contar para também encontrar símbolos girados em um ângulo que não seja reto. A pesquisa então gira cada símbolo a cada 15 graus, e um símbolo que não seja redondo pode levar até seis vezes mais tempo.
- **O que é.** Correspondência simples de símbolos nas suas próprias folhas, sem modelo treinado, e nada sai do seu computador. Em um conjunto fictício de 200 folhas, levou 9.4 segundos de ponta a ponta no Chrome em um desktop rápido; conjuntos reais de plantas serão mais lentos. Veja [Contar tudo no conjunto](topic:count-everything).

### Memória de preços dos seus trabalhos anteriores

- **A TakeoffCraft lembra as suas taxas.** Ao salvar um levantamento, cada item precificado que é usado é lembrado pelo nome e pelo tipo: taxa de material, taxa de mão de obra, perda e unidade. Os últimos 12 trabalhos são mantidos para cada nome. Essa memória fica guardada neste computador, ao lado da Biblioteca de preços, nunca dentro de um arquivo de levantamento, e nada é enviado a lugar nenhum.
- **Comece um novo levantamento a partir dela.** {{ui:Preços}} na barra de ferramentas mostra, para cada item, as taxas do último trabalho, as taxas típicas e a faixa. {{ui:Usar o último}} ou {{ui:Usar o típico}} precifica um item, e {{ui:Preencher N itens sem preço pela memória}} preenche cada item que ainda não tem preço. Cada uso é uma etapa de desfazer.
- **Trabalhos anteriores.** {{ui:Aprender com um levantamento anterior…}} lembra os itens precificados de um levantamento salvo (.json).
- **Veja, altere, esqueça.** {{ui:Tudo o que foi lembrado}} lista todos os nomes; o botão da lixeira esquece um, e {{ui:Limpar todos os preços}} esquece todos. Desative {{ui:Lembrar meus preços quando eu salvar um levantamento}} para parar. Um preço por EA nunca vai para um item por ft. Veja [Memória de preços dos seus trabalhos anteriores](topic:price-memory).

### Estoque e prazos do fornecedor

- **Confira com a lista de um fornecedor.** {{ui:Suprimento}} na barra de ferramentas recebe a lista de estoque de um fornecedor ({{ui:Adicionar um arquivo de fornecedor…}}), um CSV ou uma planilha, e confere o que o levantamento precisa, com perda, contra ela. Até cinco arquivos são mantidos. Nada é enviado e nada consulta um fornecedor: você traz o arquivo.
- **O que ele mostra.** Os itens em falta aparecem primeiro: "Faltam 120 EA", "Prazo de entrega 21 dias", "Em backorder", "Unidade diferente", "Sem quantidade em estoque" ou "Em estoque". {{ui:Maior espera desejada (dias)}} começa em 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} baixa os itens em falta com a quantidade faltante, o fornecedor e o prazo de entrega.
- **Preços para a Biblioteca.** Se o arquivo tiver preços, {{ui:Preços na Biblioteca}} define o preço de material de cada entrada da Biblioteca com o mesmo nome e a mesma unidade. Recalcule a partir da Biblioteca para levá-los ao levantamento.
- **No painel de problemas.** Uma falta é um aviso, e uma espera longa é uma nota, sob "Estoque do fornecedor". Você pode aceitar um item com um motivo, e o motivo fica salvo no levantamento. Veja [Verificar estoque e prazos do fornecedor](topic:supplier-stock).

### Assistentes de IA

- **Ferramentas para as três funções.** Com assistentes permitidos em {{ui:Configurações}}, um assistente pode ler uma legenda (`legend_open`), executar a contagem (`legend_count_start`, depois `legend_count_status` e `legend_count_result`) e adicioná-la (`legend_count_add`, que pode pré-visualizar antes). Ele pode ler os preços lembrados (`prices_list`) e precificar itens a partir deles (`prices_apply`, que pode pré-visualizar antes), e ler a conferência com o fornecedor (`supply_check`). Adicionar um arquivo de fornecedor continua sendo tarefa sua. Veja [Usar a TakeoffCraft com assistentes de IA](topic:use-with-ai-assistants).

### Em todos os aplicativos

- **Idiomas.** Cinquenta e quatro idiomas no total; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e uzbeque). Os idiomas diferentes do inglês são rascunhos de máquina até que um falante nativo os tenha revisado.
- **Dispositivos de entrada.** {{ui:Configurações}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que um trackpad, os botões laterais de um mouse, uma caneta, um mouse 3D, um controle de jogo ou um controlador MIDI faz, para todos os aplicativos ou para um só. Veja [Usar um trackpad, mouse 3D ou controle](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece {{ui:Quebrar}} (o início), {{ui:2 linhas}} e {{ui:1 linha}}; grupos que não cabem rolam para os lados. Veja [Organizar os painéis](common:arrange-panels).
- **Painel de problemas.** O painel compartilhado de avisos e notas agora traz a conferência de estoque do fornecedor acima, ao lado das outras verificações.
- **Complementos.** Os complementos seguem a sua lista de conta. Veja [Complementos e sua lista de conta](common:addons-basics).
- **Conecte sua IA.** O CadCraft Studio é o hub: conecte seu assistente uma vez para todos os oito aplicativos. O Studio não tem IA própria.

## Corrigido na 0.8.1

- **Seção de classes do DWG.** A seção de classes de um arquivo DWG era lida como o tipo errado. Isso foi corrigido na TakeoffCraft e em outros quatro aplicativos.
- **O Studio pode trocar de idioma enquanto roda.** Antes, o Studio e as suas edições empacotadas eram somente em inglês. Isso não foi testado na versão para desktop em todas as plataformas; avise-nos se o idioma não mudar.

## Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode exibir um aviso, e no Mac você clica com o botão direito e escolhe {{ui:Aberta}} na primeira vez. As versões para lojas (Microsoft Store, Google Play, App Store) estão suspensas, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Atualizações do Studio.** O instalador do Windows e os pacotes do Linux verificam uma vez por dia e perguntam antes. O zip portátil apenas avisa, e o macOS e o APK não se atualizam sozinhos. O .dmg do macOS da 0.8 acompanha a versão.
- **Conecte sua IA.** A conexão com um clique dentro do Studio, o conector hospedado de IA no navegador, a sua própria chave de API dentro do Studio e um pacote MCP publicado não são prometidos nesta versão.
- **Contar tudo.** Precisa de símbolos desenhados do mesmo jeito que na legenda, e um símbolo com uma parede ou uma linha longa atravessando pode não ser encontrado. Símbolos espelhados não são encontrados, e uma folha sem escala desenhada em outro tamanho é pesquisada no tamanho da legenda. Confira os resultados da primeira folha antes de confiar no restante.
- **Estoque do fornecedor.** Os números de estoque são tão atuais quanto o arquivo que você adiciona. A conferência nunca consulta um fornecedor.
- **Idiomas.** A barra de aplicativo em tâmil transborda.

Todo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades na 0.7](topic:whats-new-0-7).
