---
title: O que há de novo na 0.9 (anterior)
summary: Ler comprimentos em metros, centímetros ou milímetros, áreas métricas em m2 com área de parede, predefinições de escala 1:75 e 1:150, unidades de peso e de temperatura, Arco com dez métodos, e cursores, Seguir e uma lista de pessoas em sessões Live.
keywords: o que há de novo 0.9, versão anterior, o que há de novo, novidades, notas de lançamento, registo de alterações, 0.9, mostrar comprimentos em, metros, centímetros, milímetros, métrico, seguir o global, unidades, unidades de visualização, m2, metros quadrados, área de parede, predefinições de escala, 1:75, 1:150, peso, quilogramas, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arco, métodos de arco, arco de 3 pontos, raio, Live, cursores, seguir, lista de pessoas, classe, sugestões, layout, o que há de novo, novidades, notas de lançamento, alterações, 0.8, 0.8.1, versão, novas funcionalidades, contar tudo, legenda, legenda de símbolos, conjunto inteiro, memória de preços, trabalhos anteriores, último trabalho, preço habitual, fornecedor, existências, prazo de entrega, encomenda pendente, lista de encomenda, falta, painel de problemas, assistente, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg
from: f4322ba2
---

Esta é a lista do que mudou no TakeoffCraft 0.9, em comparação com a 0.8.1. É uma versão pequena para esta aplicação: os comprimentos podem agora ser lidos em metros, centímetros ou milímetros, as áreas e as escalas passam a seguir corretamente o trabalho métrico, e o Arco tem dez formas de desenhar. As sessões Live também mostram quem está onde.

## Novidades

### Ler comprimentos em metros, centímetros ou milímetros

- **Mostrar comprimentos em.** {{ui:Settings}} › {{ui:TakeoffCraft}} tem {{ui:Show lengths as}} com {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm e mm. {{ui:Follow Global}} usa a unidade métrica de comprimento que assinalou com um asterisco em {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, e pés e polegadas quando nenhuma estiver assinalada. Altera a forma como os comprimentos são lidos na folha, na barra de estado e nos painéis, incluindo alturas, profundidade, espessura e os níveis. Um número sem unidade escrito num campo de altura é lido na unidade apresentada.
- **Só visualização.** As quantidades, os custos e as exportações são calculados a partir dos comprimentos exatos. A escolha de 1/16, 1/8 e 1/4 de polegada aparece apenas para pés e polegadas. Ver [Mostrar comprimentos em metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Um artigo de {{ui:Typed quantity (no drawing)}} pode agora estar em lb, TON, kg ou t, e ter preço por unidade.
- **Temperatura.** Cada artigo tem um campo opcional {{ui:Temperature}} no editor de artigos, escrito em graus C ou F. {{ui:Show temperatures as}} em {{ui:Settings}} › {{ui:TakeoffCraft}} oferece {{ui:Follow Global}}, °C ou °F.

### Áreas e escalas para trabalho métrico

- **Áreas em m2 no desenho.** Uma área medida com um artigo métrico indica agora m2 na etiqueta do desenho e no painel de marcas, bem como na tabela, em vez de SF. A regra é m2 quando o artigo tem preço em métrico ou quando os comprimentos são apresentados em m, cm ou mm, e SF nos restantes casos.
- **Área de parede.** Um artigo linear com altura mostra também a sua área de parede (comprimento vezes altura) na lista de Artigos e como linha de nota por baixo da tabela de quantidades por artigo.
- **Predefinições de escala 1:75 e 1:150.** Estão na lista {{ui:Preset}} do grupo {{ui:Scale}}, que tem agora 32 escalas. Ver [Predefinições de escala](topic:scale-presets).

### Arco com dez métodos

- Enquanto {{ui:Arc}} estiver ativo (botão da barra de ferramentas ou {{key:R}}), aparece na barra da folha uma caixa {{ui:Arc method}} com: 3 pontos, Início, Centro, Fim, Início, Centro, Ângulo, Início, Centro, Comprimento, Início, Fim, Ângulo, Início, Fim, Direção, Início, Fim, Raio, Centro, Início, Fim, Centro, Início, Ângulo e Centro, Início, Comprimento. O ângulo, o comprimento, o raio e a direção podem ser clicados ou escritos. Funciona em troços lineares, áreas e recortes. Os ficheiros guardados antes da 0.9 abrem da mesma forma. Ver [Desenhar arcos com dez métodos](topic:draw-arcs-ten-methods).

### Trabalhar em conjunto

- **Ver os cursores uns dos outros.** Numa sessão Live, o ponteiro de cada pessoa aparece na folha com o seu nome e cor, com uma caixa a tracejado à volta das marcas que selecionou. As pessoas que estão noutra folha são listadas com o nome dessa folha. Ver [Trabalhar em Live com outros](topic:work-live).
- **Seguir uma pessoa, e a lista de pessoas.** O botão {{ui:People}} numa sessão Live lista cada pessoa com a ferramenta que está a usar, a folha em que está e a data da última edição. {{ui:Follow}} desloca a sua vista com a vista dessa pessoa, e o anfitrião pode usar {{ui:Ask everyone to follow me}}. Ver [Seguir um colega numa sessão Live](topic:follow-a-teammate).

## Em todas as aplicações

- **Sugestões e a sugestão inicial.** O texto que aparece ao passar o rato é uma sugestão Bootstrap, e a sugestão inicial pode ser fechada.
- **Barras de separadores com deslocamento.** A barra de separadores de um painel que não cabe desloca-se em vez de ser cortada.
- **Títulos dos separadores.** O separador do navegador mostra `<document> - TakeoffCraft | CadCraft`.
- **Layout.** A lista de layout em {{ui:Settings}} é uma lista pendente que mostra o layout escolhido.
- **Idioma.** O idioma que escolher chega agora às palavras que a própria página apresenta, como Novo, Abrir e Guardar. Os idiomas diferentes do inglês são rascunhos automáticos até que um falante nativo os tenha revisto.

## Limites conhecidos

- A apresentação dos comprimentos, as unidades de peso e de temperatura e as novas predefinições foram verificadas por testes e na página. Nem todos os painéis em todas as unidades foram verificados à mão.
- A lista de pessoas não foi verificada à mão com uma turma real de professores e alunos.
- Os idiomas diferentes do inglês são rascunhos automáticos.
- Os instaladores do Windows não têm assinatura de código (Mais informações, depois Executar mesmo assim). A imagem de disco do macOS não está notarizada (clique com o botão direito e depois em Abrir).

## Anterior: 0.8 e 0.8.1

Esta é a lista do que mudou no TakeoffCraft 0.8 (lançado em 2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. Uma legenda de símbolos pode agora ser contada em todo o conjunto de uma só vez, uma nova medição pode começar a partir dos preços dos seus trabalhos anteriores, e a medição pode ser verificada contra as existências de um fornecedor. A 0.8.1 é uma versão de correções.

### Novidades

**Contar tudo no conjunto**

- **Delimitar a legenda uma só vez.** {{ui:Count everything}} na barra de ferramentas lê uma legenda de símbolos: arraste uma caixa à volta dos símbolos e dos nomes impressos ao lado. Cada símbolo é listado com a sua imagem e nome, e o nome passa a ser o nome do artigo. Desmarque o que não é necessário e escolha {{ui:Count on N sheets}} (Contar em N folhas). Uma barra mostra a folha que está a ser pesquisada, {{ui:Cancel}} interrompe a execução, e a página continua utilizável.
- **Todas as folhas numa só execução.** Cada símbolo é contado em todas as folhas abertas. Uma folha desenhada noutra escala é pesquisada nessa escala, e os símbolos são encontrados quando rodados em qualquer ângulo reto. Os próprios símbolos da legenda não são contados na sua folha.
- **Rever antes de adicionar seja o que for.** Cada total tem uma ligação por folha («E-103: 4») que leva a essa folha. Clique numa caixa de um resultado para o deixar de fora, e clique de novo para voltar a incluí-lo. O nível de correspondência (de 50% a 100%) apenas filtra o que foi encontrado; nada é pesquisado de novo.
- **Um só passo de anulação.** {{ui:Add N marks}} (Adicionar N marcas) cria um artigo de contagem por símbolo, com uma marca em cada resultado. Um nome que já seja um artigo de contagem seu é reutilizado. {{key:Ctrl+Z}} anula todos os artigos e marcas. O que aceitar também alimenta {{ui:Learned}}.
- **Símbolos em qualquer ângulo.** Marque {{ui:Symbols at any angle}} antes de contar para encontrar também os símbolos rodados num ângulo que não seja reto. A pesquisa passa então a rodar cada símbolo de 15 em 15 graus, e um símbolo que não seja redondo pode demorar até seis vezes mais.
- **O que é.** Correspondência simples de símbolos nas suas próprias folhas, sem modelo treinado, e nada sai do seu computador. Num conjunto inventado de 200 folhas, demorou 9.4 segundos do início ao fim no Chrome, num computador de secretária rápido; os conjuntos de plantas reais serão mais lentos. Ver [Contar tudo no conjunto](topic:count-everything).

**Memória de preços a partir dos seus trabalhos**

- **O TakeoffCraft memoriza as suas taxas.** Ao guardar uma medição, cada artigo com preço que é usado fica memorizado pelo nome e tipo: taxa de material, taxa de mão de obra, desperdício e unidade. São guardados os últimos 12 trabalhos de cada nome. Fica guardado neste computador junto da biblioteca de preços, nunca dentro de um ficheiro de medição, e nada é enviado para lado nenhum.
- **Começar uma nova medição a partir da memória.** {{ui:Prices}} na barra de ferramentas mostra, para cada artigo, as taxas do último trabalho, as taxas habituais e o intervalo. {{ui:Use last}} ou {{ui:Use typical}} aplica preço a um artigo, e {{ui:Price N unpriced items from memory}} atribui preço a todos os artigos que ainda não têm. Cada utilização é um passo de anulação.
- **Trabalhos mais antigos.** {{ui:Learn from a past takeoff…}} memoriza os artigos com preço de uma medição guardada (.json).
- **Ver, alterar, esquecer.** {{ui:Everything remembered}} lista todos os nomes; o botão de eliminar esquece um, e {{ui:Clear all prices}} esquece todos. Desative {{ui:Remember my prices when I save a takeoff}} para parar. Um preço por cada nunca é colocado num artigo por pé. Ver [Memória de preços dos seus trabalhos anteriores](topic:price-memory).

**Existências do fornecedor e prazos de entrega**

- **Verificar contra a lista de um fornecedor.** {{ui:Supply}} na barra de ferramentas recebe a lista de existências de um fornecedor ({{ui:Add a supplier file…}}), um CSV ou uma folha de cálculo, e verifica contra ela o que a medição precisa, incluindo o desperdício. São guardados até cinco ficheiros. Nada é enviado e nada é pedido a um fornecedor: cabe ao utilizador trazer o ficheiro.
- **O que indica.** Os artigos em falta aparecem primeiro: «Em falta 120 EA», «Prazo de entrega 21 dias», «Em encomenda pendente», «A unidade difere», «Sem dados de existências» ou «Em existências». {{ui:Longest wait wanted (days)}} começa em 14.
- **Lista de encomenda.** {{ui:Order list (CSV)}} transfere os artigos em falta, com a quantidade em falta, o fornecedor e o prazo de entrega.
- **Preços para a biblioteca.** Se o ficheiro tiver preços, {{ui:Prices into the Library}} define o preço do material de cada entrada da biblioteca com o mesmo nome e unidade. Volte a atribuir preços a partir da biblioteca para os levar para a medição.
- **No painel de Problemas.** Uma falta é um aviso e uma espera longa é uma nota, sob «Existências do fornecedor». Pode aceitar uma com um motivo, e o motivo fica guardado na medição. Ver [Verificar existências do fornecedor e prazos de entrega](topic:supplier-stock).

**Assistentes de IA**

- **Ferramentas para os três.** Com os assistentes permitidos em {{ui:Settings}}, um assistente pode ler uma legenda (`legend_open`), executar a contagem (`legend_count_start`, depois `legend_count_status` e `legend_count_result`) e adicioná-la (`legend_count_add`, que pode mostrar uma pré-visualização primeiro). Pode ler os preços memorizados (`prices_list`) e atribuir preços aos artigos a partir deles (`prices_apply`, que pode mostrar uma pré-visualização primeiro), e ler a verificação do fornecedor (`supply_check`). Adicionar um ficheiro de fornecedor continua a caber ao utilizador. Ver [Usar o TakeoffCraft com assistentes de IA](topic:use-with-ai-assistants).

**Em todas as aplicações**

- **Idiomas.** Cinquenta e quatro idiomas no total; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e uzbeque). Os idiomas diferentes do inglês são rascunhos automáticos até que um falante nativo os tenha revisto.
- **Dispositivos de entrada.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} define o que fazem um trackpad, os botões laterais de um rato, uma caneta, um rato 3D, um comando de jogo ou um controlador MIDI, para todas as aplicações ou para uma só. Ver [Usar um trackpad, um rato 3D ou um comando](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oferece {{ui:Wrap}} (o início), {{ui:2 rows}} e {{ui:1 row}}; os grupos que não cabem deslocam-se lateralmente. Ver [Organizar os painéis](common:arrange-panels).
- **Painel de Problemas.** O painel partilhado de avisos e notas inclui agora a verificação de existências do fornecedor acima, ao lado das outras verificações.
- **Suplementos.** Os suplementos seguem a lista da sua conta. Ver [Suplementos e a lista da sua conta](common:addons-basics).
- **Ligar a sua IA.** O CadCraft Studio é o hub: ligue o seu assistente uma vez para as oito aplicações. O Studio não tem IA própria.

### Corrigido na 0.8.1

- **Secção de classes DWG.** A secção de classes de um ficheiro DWG era lida como o tipo errado. Isto está corrigido no TakeoffCraft e em outras quatro aplicações.
- **O Studio pode mudar de idioma enquanto está em execução.** Antes, o Studio e as suas edições empacotadas estavam apenas em inglês. Isto não foi testado na versão para computador de secretária em todas as plataformas; informe-nos se o idioma não mudar.

### Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode avisar, e num Mac clique com o botão direito e escolha {{ui:Open}} na primeira vez. As versões das lojas (Microsoft Store, Google Play, App Store) estão em suspenso, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Atualizações do Studio.** O instalador do Windows e os pacotes do Linux verificam uma vez por dia e perguntam antes. O zip portátil apenas informa, e o macOS e o APK não se atualizam sozinhos. O .dmg do macOS da 0.8 acompanha a versão.
- **Ligar a sua IA.** A ligação com um clique dentro do Studio, o conector alojado para IA no navegador, a sua própria chave de API dentro do Studio e um pacote MCP publicado não estão prometidos nesta versão.
- **Contar tudo.** Precisa de símbolos desenhados da mesma forma que na legenda, e um símbolo atravessado por uma parede ou por uma linha comprida pode ser perdido. Símbolos espelhados não são encontrados, e uma folha sem escala desenhada a outro tamanho é pesquisada ao tamanho da legenda. Verifique os resultados da primeira folha antes de confiar no resto.
- **Existências do fornecedor.** Os valores de existências são tão atuais quanto o ficheiro que adicionar. A verificação nunca pergunta a um fornecedor.
- **Idiomas.** A barra da aplicação em tâmil transborda.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, ver [Novidades na 0.7](topic:whats-new-0-7).
