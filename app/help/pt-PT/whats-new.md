---
title: Novidades na versão 0.8 e 0.8.1
summary: Contar uma legenda completa de símbolos em todas as folhas abertas numa só execução, atribuir preços a artigos a partir das taxas de obras anteriores, verificar a medição contra o stock e os prazos de entrega de um fornecedor, e novas ferramentas de assistente para as três, além das alterações comuns da 0.8 e da correção 0.8.1 para ficheiros DWG.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, contar tudo, legenda, legenda de símbolos, conjunto completo, memória de preços, obras anteriores, última obra, preço habitual, fornecedor, stock, prazo de entrega, encomenda pendente, lista de encomenda, falta, painel de problemas, assistente, idiomas, dispositivos de entrada, linhas da barra de ferramentas, DWG
from: a04adef6
---

Esta é a lista do que mudou no TakeoffCraft 0.8 (publicado a 2026-11-01) e no 0.8.1 (2026-11-02), em comparação com a 0.7. Um símbolo de legenda pode agora ser contado em todo o conjunto de uma só vez, uma nova medição pode começar a partir dos preços das suas obras anteriores, e a medição pode ser verificada contra o stock de um fornecedor. A 0.8.1 é uma versão de correção.

## Novo

### Contar tudo no conjunto

- **Enquadre a legenda uma vez.** {{ui:Contar tudo}} na barra de ferramentas lê uma legenda de símbolos: arraste uma caixa à volta dos símbolos e dos nomes impressos ao lado. Cada símbolo aparece listado com a sua imagem e nome, e o nome passa a ser o nome do artigo. Desmarque o que não pretende e depois escolha {{ui:Contar em N folhas}}. Uma barra mostra a folha a ser pesquisada, {{ui:Cancelar}} interrompe a execução, e a página continua utilizável.
- **Todas as folhas numa só execução.** Cada símbolo é contado em todas as folhas abertas. Uma folha desenhada noutra escala é pesquisada nessa escala, e os símbolos são encontrados rodados em qualquer ângulo reto. Os símbolos da própria legenda não são contados na sua folha.
- **Revisão antes de adicionar seja o que for.** Cada total tem uma ligação por folha ("E-103: 4") que leva a essa folha. Clique numa caixa de ocorrência para a deixar de fora, e clique de novo para voltar a incluí-la. O nível de correspondência (50% a 100%) apenas filtra o que foi encontrado; nada é pesquisado de novo.
- **Um passo de anulação.** {{ui:Adicionar N marcas}} cria um artigo de contagem por símbolo, com uma marca em cada ocorrência. Um nome que já é um artigo de contagem existente é reutilizado. {{key:Ctrl+Z}} anula todos os artigos e marcas. O que aceitar também alimenta {{ui:Aprendido}}.
- **Símbolos em qualquer ângulo.** Marque {{ui:Símbolos em qualquer ângulo}} antes de contar para encontrar também os símbolos rodados por um ângulo que não seja reto. A pesquisa passa então a rodar cada símbolo a cada 15 graus, e um símbolo que não seja redondo pode demorar até seis vezes mais.
- **O que é.** Correspondência simples de símbolos nas suas próprias folhas, sem modelo treinado, e nada sai do computador. Num conjunto fictício de 200 folhas demorou 9.4 segundos de ponta a ponta no Chrome num computador de secretária rápido; os conjuntos reais de planos serão mais lentos. Ver [Contar tudo no conjunto](topic:count-everything).

### Memória de preços das suas obras

- **O TakeoffCraft memoriza as suas taxas.** Ao guardar uma medição, cada artigo com preço que seja usado fica memorizado pelo nome e tipo: preço do material, preço da mão de obra, desperdício e unidade. Mantêm-se as últimas 12 obras por cada nome. Fica guardado neste computador, ao lado da biblioteca de preços, nunca dentro de um ficheiro de medição, e nada é enviado para lado nenhum.
- **Iniciar uma nova medição a partir dela.** {{ui:Preços}} na barra de ferramentas mostra, para cada artigo, os preços da última obra, os preços habituais e o intervalo. {{ui:Usar o último}} ou {{ui:Usar o habitual}} aplica o preço a um artigo, e {{ui:Atribuir preço a N artigos sem preço a partir da memória}} preenche cada artigo que ainda não tem preço. Cada utilização é um passo de anulação.
- **Trabalho anterior.** {{ui:Aprender com uma medição anterior…}} memoriza os artigos com preço de uma medição guardada (.json).
- **Ver, alterar, esquecer.** {{ui:Tudo o que está memorizado}} lista cada nome; o botão do lixo esquece um, e {{ui:Limpar todos os preços}} esquece todos. Desative {{ui:Memorizar os meus preços ao guardar uma medição}} para parar. Um preço por unidade nunca é colocado num artigo por pé. Ver [Memória de preços das suas obras anteriores](topic:price-memory).

### Stock do fornecedor e prazos de entrega

- **Verificar contra a lista de um fornecedor.** {{ui:Fornecimento}} na barra de ferramentas recebe a lista de stock de um fornecedor ({{ui:Adicionar um ficheiro de fornecedor…}}), um CSV ou uma folha de cálculo, e verifica contra ela o que a medição precisa, incluindo o desperdício. Podem ser guardados até cinco ficheiros. Nada é enviado e nada é pedido a um fornecedor: o utilizador é quem traz o ficheiro.
- **O que indica.** Os artigos em falta surgem primeiro: "Em falta 120 EA", "Prazo de entrega 21 dias", "Em encomenda pendente", "Unidade diferente", "Sem valor de stock" ou "Em stock". {{ui:Espera máxima pretendida (dias)}} começa em 14.
- **Lista de encomenda.** {{ui:Lista de encomenda (CSV)}} transfere os artigos em falta com a quantidade em falta, o fornecedor e o prazo de entrega.
- **Preços para a biblioteca.** Se o ficheiro tiver preços, {{ui:Preços para a biblioteca}} define o preço de material de cada entrada da biblioteca com o mesmo nome e unidade. Recalcule a partir da biblioteca para os trazer para a medição.
- **No painel de problemas.** A falta é um aviso e uma espera longa é uma nota, sob "Stock do fornecedor". Pode aceitar uma com um motivo, e o motivo fica guardado na medição. Ver [Verificar o stock do fornecedor e os prazos de entrega](topic:supplier-stock).

### Assistentes de IA

- **Ferramentas para as três.** Com os assistentes permitidos em {{ui:Definições}}, um assistente pode ler uma legenda (`legend_open`), executar a contagem (`legend_count_start`, depois `legend_count_status` e `legend_count_result`) e adicioná-la (`legend_count_add`, que pode pré-visualizar primeiro). Pode ler os preços memorizados (`prices_list`) e atribuir preços a artigos a partir deles (`prices_apply`, que pode pré-visualizar primeiro), e ler a verificação de fornecimento (`supply_check`). Adicionar um ficheiro de fornecedor continua a ser da responsabilidade do utilizador. Ver [Utilizar o TakeoffCraft com assistentes de IA](topic:use-with-ai-assistants).

### Em todas as aplicações

- **Idiomas.** Cinquenta e quatro idiomas ao todo; dez são novos (lituano, letão, bósnio, marata, télugo, albanês, africânder, filipino, suaíli e usbeque). Os idiomas diferentes do inglês são rascunhos automáticos até que um falante nativo os tenha lido.
- **Dispositivos de entrada.** {{ui:Definições}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fazem um trackpad, os botões laterais de um rato, uma caneta, um rato 3D, um comando de jogos ou um controlador MIDI, para todas as aplicações ou para uma só. Ver [Utilizar um trackpad, rato 3D ou comando](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece {{ui:Quebrar}} (o início), {{ui:2 linhas}} e {{ui:1 linha}}; os grupos que não cabem deslocam-se lateralmente. Ver [Organizar os painéis](common:arrange-panels).
- **Painel de problemas.** O painel partilhado de avisos e notas inclui agora a verificação de stock do fornecedor acima, ao lado das outras verificações.
- **Suplementos.** Os suplementos seguem a lista da sua conta. Ver [Suplementos e a lista da sua conta](common:addons-basics).
- **Ligar a sua IA.** O CadCraft Studio é o centro: o assistente liga-se uma vez para as oito aplicações. O Studio não tem IA própria.

## Corrigido na 0.8.1

- **Secção de classes DWG.** A secção de classes de um ficheiro DWG era lida como o tipo errado. Isto está corrigido no TakeoffCraft e em quatro outras aplicações.
- **O Studio pode mudar de idioma enquanto está em execução.** Antes, o Studio e as suas edições empacotadas estavam apenas em inglês. Isto não foi testado na versão para computador em todas as plataformas; informe-nos se o idioma não mudar.

## Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode avisar, e num Mac clique com o botão direito e escolha {{ui:Aberta}} na primeira vez. As versões para lojas (Microsoft Store, Google Play, App Store) estão em pausa, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Atualizações do Studio.** O instalador do Windows e os pacotes do Linux verificam uma vez por dia e pedem confirmação antes. O zip portátil apenas informa, e o macOS e o APK não se atualizam sozinhos. O .dmg do macOS da 0.8 acompanha o lançamento.
- **Ligar a sua IA.** A ligação com um clique dentro do Studio, o conector alojado de IA no navegador, a sua própria chave de API dentro do Studio e um pacote MCP publicado não estão prometidos nesta versão.
- **Contar tudo.** Precisa de símbolos desenhados da mesma forma que na legenda, e um símbolo com uma parede ou uma linha longa a atravessá-lo pode ser perdido. Símbolos espelhados não são encontrados, e uma folha sem escala desenhada a outro tamanho é pesquisada à escala da legenda. Verifique as ocorrências da primeira folha antes de confiar no resto.
- **Stock do fornecedor.** Os valores de stock só estão tão atualizados como o ficheiro que adicionou. A verificação nunca pede nada a um fornecedor.
- **Idiomas.** A barra da aplicação em tâmil transborda.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, ver [Novidades na versão 0.7](topic:whats-new-0-7).
