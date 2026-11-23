---
title: Novidades da 0.9 (anteriores)
summary: Comprimentos em metros, centímetros ou milímetros, áreas métricas em m2 com área de parede, predefinições de escala 1:75 e 1:150, unidades de peso e temperatura, Arco com dez métodos, e cursores ao vivo, Seguir e uma lista de pessoas.
keywords: novidades 0.9, versão anterior, novidades, o que há de novo, notas de lançamento, changelog, 0.9, mostrar comprimentos como, metros, centímetros, milímetros, métrico, seguir global, unidades, unidades de exibição, m2, metros quadrados, área de parede, predefinições de escala, 1:75, 1:150, peso, quilogramas, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arco, métodos de arco, arco de 3 pontos, raio, ao vivo, cursores, seguir, lista de pessoas, classe, dicas, layout, novidades, notas de lançamento, changelog, alterações, 0.8, 0.8.1, versão, novos recursos, contar tudo, legenda, legenda de símbolos, conjunto inteiro, memória de preços, trabalhos anteriores, último trabalho, preço típico, fornecedor, estoque, prazo de entrega, pedido pendente, lista de pedido, falta, painel de problemas, assistente, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg
from: f4322ba2
---

Eis o que mudou no TakeoffCraft 0.9, em comparação com a 0.8.1. É uma versão pequena para este aplicativo: os comprimentos agora podem ser lidos em metros, centímetros ou milímetros, áreas e escalas seguem corretamente o trabalho métrico, e Arco tem dez formas de desenhar. As sessões Live também mostram quem está em que lugar.

## Novo

### Ler comprimentos em metros, centímetros ou milímetros

- **Mostrar comprimentos como.** {{ui:Configurações}} › {{ui:TakeoffCraft}} tem {{ui:Mostrar comprimentos como}} com {{ui:Seguir o Global}}, {{ui:Pés-polegadas}}, m, cm e mm. {{ui:Seguir o Global}} usa a unidade métrica de comprimento marcada com estrela em {{ui:Configurações}} › {{ui:Global}} › {{ui:Unidades}}, e pés-polegadas quando nenhuma estiver marcada. Muda como os comprimentos são lidos na folha, na barra de status e nos painéis, incluindo alturas, profundidade, espessura e os níveis. Um número sem unidade digitado em um campo de altura é lido na unidade mostrada.
- **Somente exibição.** Quantidades, custos e exportações são calculados a partir dos comprimentos exatos. A escolha de 1/16, 1/8 e 1/4 de polegada aparece somente para pés-polegadas. Veja [Mostrar comprimentos em metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Um item de {{ui:Quantidade digitada (sem desenho)}} agora pode estar em lb, TON, kg ou t, e ter preço por unidade.
- **Temperatura.** Cada item tem um campo opcional {{ui:Temperatura}} no editor de itens, digitado em graus C ou F. {{ui:Mostrar temperaturas como}} em {{ui:Configurações}} › {{ui:TakeoffCraft}} oferece {{ui:Seguir o Global}}, °C ou °F.

### Áreas e escalas para trabalho métrico

- **Áreas em m2 no desenho.** Uma área medida com um item métrico agora mostra m2 na etiqueta do desenho e no painel de marcações, além da tabela, em vez de SF. A regra é m2 quando o item tem preço em métrico ou quando os comprimentos são mostrados em m, cm ou mm, e SF nos demais casos.
- **Área de parede.** Um item linear com altura também mostra sua área de parede (comprimento vezes altura) na lista de itens e como linha de nota abaixo da tabela de quantidades por item.
- **Predefinições de escala 1:75 e 1:150.** Estão na lista {{ui:Predefinida}} do grupo {{ui:Escala}}, que agora tem 32 escalas. Veja [Predefinições de escala](topic:scale-presets).

### Arco com dez métodos

- Enquanto {{ui:Arco}} estiver ativo (botão da barra de ferramentas ou {{key:R}}), uma caixa {{ui:Método do arco}} aparece na barra da folha: 3 pontos, Início, Centro, Fim; Início, Centro, Ângulo; Início, Centro, Comprimento; Início, Fim, Ângulo; Início, Fim, Direção; Início, Fim, Raio; Centro, Início, Fim; Centro, Início, Ângulo; e Centro, Início, Comprimento. Ângulo, comprimento, raio e direção podem ser clicados ou digitados. Funciona em trechos lineares, áreas e recortes. Arquivos salvos antes da 0.9 abrem da mesma forma. Veja [Desenhar arcos com dez métodos](topic:draw-arcs-ten-methods).

### Trabalhar em conjunto

- **Veja os cursores uns dos outros.** Em uma sessão Live, o ponteiro de cada pessoa aparece na folha com o nome e a cor dela, com uma caixa tracejada em volta das marcações que ela selecionou. Pessoas em outra folha são listadas com o nome dessa folha. Veja [Trabalhar com outras pessoas no Live](topic:work-live).
- **Siga uma pessoa, e a lista de pessoas.** O botão {{ui:Pessoas}} em uma sessão Live lista cada pessoa com a ferramenta que ela usa, a folha em que está e a data da última edição. {{ui:Seguir}} move sua visão junto com a dela, e o anfitrião pode usar {{ui:Pedir a todos que me sigam}}. Veja [Seguir um colega em uma sessão Live](topic:follow-a-teammate).

## Em todos os aplicativos

- **Dicas e dica inicial.** O texto que aparece ao passar o mouse é uma dica do Bootstrap, e a dica inicial pode ser fechada.
- **Faixas de abas com rolagem.** A faixa de abas de um painel que não cabe rola em vez de ser cortada.
- **Títulos das abas.** A aba do navegador mostra `<document> - TakeoffCraft | CadCraft`.
- **Layout.** A lista de layouts em {{ui:Configurações}} é uma lista suspensa que mostra o layout escolhido.
- **Idioma.** O idioma que você escolher agora alcança as palavras que a própria página exibe, como Novo, Abrir e Salvar. Idiomas além do inglês são rascunhos de máquina até que um falante nativo os tenha revisado.

## Limites declarados

- A exibição de comprimentos, as unidades de peso e temperatura e as novas predefinições foram verificadas por testes e na página. Nem todo painel em todas as unidades foi verificado à mão.
- A lista de pessoas não passou por uma verificação manual com uma turma real de professor e alunos.
- Idiomas além do inglês são rascunhos de máquina.
- Os instaladores do Windows não têm assinatura de código (Mais informações e depois Executar assim mesmo). A imagem de disco do macOS não é notarizada (clique com o botão direito e depois em {{ui:Aberta}}).

## Anteriores: 0.8 e 0.8.1

Eis o que mudou no TakeoffCraft 0.8 (lançado em 2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. Uma legenda de símbolos agora pode ser contada em todo o conjunto de uma vez, um novo levantamento pode começar com os preços dos seus trabalhos anteriores, e o levantamento pode ser conferido com o estoque de um fornecedor. A 0.8.1 é uma versão de correção.

### Novo

**Contar tudo no conjunto**

- **Delimite a legenda uma vez.** {{ui:Contar tudo}} na barra de ferramentas lê uma legenda de símbolos: arraste uma caixa em volta dos símbolos e dos nomes impressos ao lado deles. Cada símbolo é listado com a imagem e o nome, e o nome vira o nome do item. Desmarque o que você não quer e depois escolha {{ui:Contar em N folhas}}. Uma barra mostra a folha que está sendo pesquisada, {{ui:Cancelar}} interrompe a execução, e a página continua utilizável.
- **Todas as folhas em uma execução.** Cada símbolo é contado em todas as folhas abertas. Uma folha desenhada em outra escala é pesquisada nessa escala, e os símbolos são encontrados girados em qualquer ângulo reto. Os símbolos da própria legenda não são contados na folha dela.
- **Revise antes de adicionar qualquer coisa.** Cada total tem um link por folha ("E-103: 4") que leva a essa folha. Clique em uma caixa de uma ocorrência para deixá-la de fora, e clique de novo para trazê-la de volta. O nível de correspondência (50% a 100%) apenas filtra o que foi encontrado; nada é pesquisado de novo.
- **Um passo de desfazer.** {{ui:Adicionar N marcações}} cria um item de contagem por símbolo, com uma marcação em cada ocorrência. Um nome que já é um item de contagem seu é reutilizado. {{key:Ctrl+Z}} desfaz todos os itens e marcações. O que você aceitar também alimenta {{ui:Aprendido}}.
- **Símbolos em qualquer ângulo.** Marque {{ui:Símbolos em qualquer ângulo}} antes de contar para também encontrar símbolos girados em um ângulo que não seja reto. A pesquisa então gira cada símbolo a cada 15 graus, e um símbolo que não seja redondo pode levar até seis vezes mais tempo.
- **O que é.** Correspondência simples de símbolos nas suas próprias folhas, sem modelo treinado, e nada sai do seu computador. Em um conjunto fictício de 200 folhas, levou 9.4 segundos de ponta a ponta no Chrome, em um computador de mesa rápido; conjuntos reais de plantas serão mais lentos. Veja [Contar tudo no conjunto](topic:count-everything).

**Memória de preços dos seus próprios trabalhos**

- **O TakeoffCraft lembra das suas taxas.** Ao salvar um levantamento, cada item com preço que é usado é lembrado pelo nome e tipo: preço de material, preço de mão de obra, perda e unidade. Os últimos 12 trabalhos são mantidos para cada nome. Ela fica guardada neste computador, ao lado da {{ui:Biblioteca}} de preços, nunca dentro de um arquivo de levantamento, e nada é enviado a lugar nenhum.
- **Comece um novo levantamento a partir dela.** {{ui:Preços}} na barra de ferramentas mostra, para cada item, as taxas do último trabalho, as taxas típicas e a faixa. {{ui:Usar o último}} ou {{ui:Usar o típico}} dá preço a um item, e {{ui:Preencher N itens sem preço pela memória}} preenche cada item que ainda não tem preço. Cada uso é um passo de desfazer.
- **Trabalhos anteriores.** {{ui:Aprender com um levantamento anterior…}} lembra os itens com preço de um levantamento salvo (.json).
- **Veja, altere, esqueça.** {{ui:Tudo o que foi lembrado}} lista todos os nomes; o botão da lixeira esquece um, e {{ui:Limpar todos os preços}} esquece todos. Desative {{ui:Lembrar meus preços quando eu salvar um levantamento}} para parar. Um preço por EA nunca é aplicado a um item por ft. Veja [Memória de preços dos seus trabalhos anteriores](topic:price-memory).

**Estoque do fornecedor e prazos de entrega**

- **Confira com a lista de um fornecedor.** {{ui:Suprimento}} na barra de ferramentas recebe a lista de estoque de um fornecedor ({{ui:Adicionar um arquivo de fornecedor…}}), um CSV ou uma planilha, e confere, com a perda, o que o levantamento precisa. Até cinco arquivos são mantidos. Nada é enviado e nada consulta um fornecedor: você traz o arquivo.
- **O que ele diz.** Os itens em falta aparecem primeiro: "Faltam 120 EA", "Prazo de entrega 21 dias", "Em pedido pendente", "Unidade diferente", "Sem dado de estoque" ou "Em estoque". {{ui:Maior espera desejada (dias)}} começa em 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} baixa os itens em falta com a quantidade faltante, o fornecedor e o prazo de entrega.
- **Preços na Biblioteca.** Se o arquivo tiver preços, {{ui:Preços na Biblioteca}} define o preço de material de cada entrada da Biblioteca com o mesmo nome e unidade. Recalcule a partir da Biblioteca para levá-los ao levantamento.
- **No painel de problemas.** Uma falta é um aviso, e uma espera longa é uma nota, em "Estoque do fornecedor". Você pode aceitar uma delas com um motivo, e o motivo é salvo no levantamento. Veja [Conferir o estoque do fornecedor e os prazos de entrega](topic:supplier-stock).

**Assistentes de IA**

- **Ferramentas para os três.** Com assistentes permitidos em {{ui:Configurações}}, um assistente pode ler uma legenda (`legend_open`), executar a contagem (`legend_count_start`, depois `legend_count_status` e `legend_count_result`) e adicioná-la (`legend_count_add`, que pode visualizar antes). Ele pode ler os preços lembrados (`prices_list`) e dar preço aos itens a partir deles (`prices_apply`, que pode visualizar antes), e ler a conferência com o fornecedor (`supply_check`). Adicionar um arquivo de fornecedor continua sendo tarefa sua. Veja [Usar o TakeoffCraft com assistentes de IA](topic:use-with-ai-assistants).

**Em todos os aplicativos**

- **Idiomas.** Cinquenta e quatro idiomas no total; dez são novos (lituano, letão, bósnio, marathi, telugu, albanês, africâner, filipino, suaíle e uzbeque). Idiomas além do inglês são rascunhos de máquina até que um falante nativo os tenha revisado.
- **Dispositivos de entrada.** {{ui:Configurações}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que um trackpad, os botões laterais de um mouse, uma caneta, um mouse 3D, um controle de jogo ou um controlador MIDI faz, para todos os aplicativos ou para um só. Veja [Usar um trackpad, mouse 3D ou controle](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece {{ui:Quebrar}} (o início), {{ui:2 linhas}} e {{ui:1 linha}}; os grupos que não cabem rolam para o lado. Veja [Organizar os painéis](common:arrange-panels).
- **Painel de problemas.** O painel compartilhado de avisos e notas agora traz a conferência de estoque do fornecedor acima, ao lado das outras verificações.
- **Complementos.** Os complementos seguem a sua lista de conta. Veja [Complementos e sua lista de conta](common:addons-basics).
- **Conecte sua IA.** O CadCraft Studio é o centro: conecte seu assistente uma vez para os oito aplicativos. O Studio não tem IA própria.

### Corrigido na 0.8.1

- **Seção de classes do DWG.** A seção de classes de um arquivo DWG era lida como o tipo errado. Isso foi corrigido no TakeoffCraft e em outros quatro aplicativos.
- **O Studio pode trocar o idioma enquanto roda.** Antes, o Studio e as suas edições empacotadas eram somente em inglês. Isso não foi testado na versão de desktop em todas as plataformas; avise-nos se o idioma não mudar.

### Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode avisar, e no Mac você clica com o botão direito e escolhe {{ui:Aberta}} na primeira vez. As versões das lojas (Microsoft Store, Google Play, App Store) estão suspensas, e a versão para iPad e iPhone não foi refeita para a 0.8.1.
- **Atualizações do Studio.** O instalador do Windows e os pacotes do Linux verificam uma vez por dia e perguntam antes. O zip portátil apenas avisa, e o macOS e o APK não se atualizam sozinhos. O .dmg do macOS da 0.8 acompanha a versão.
- **Conecte sua IA.** A conexão com um clique dentro do Studio, o conector hospedado de IA no navegador, a sua própria chave de API dentro do Studio e um pacote MCP publicado não são prometidos nesta versão.
- **Contar tudo.** Precisa de símbolos desenhados do mesmo jeito que na legenda, e um símbolo com uma parede ou uma linha longa atravessando pode não ser encontrado. Símbolos espelhados não são encontrados, e uma folha sem escala desenhada em outro tamanho é pesquisada no tamanho da legenda. Confira as ocorrências na primeira folha antes de confiar no restante.
- **Estoque do fornecedor.** Os números de estoque são tão atuais quanto o arquivo que você adiciona. A conferência nunca consulta um fornecedor.
- **Idiomas.** A barra do aplicativo em tâmil transborda.

Todo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades da 0.7](topic:whats-new-0-7).
