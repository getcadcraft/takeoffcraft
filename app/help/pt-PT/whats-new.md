---
title: Novidades na 0.9
summary: Ler comprimentos em metros, centímetros ou milímetros, áreas métricas em m2 com área de parede, predefinições de escala 1:75 e 1:150, unidades de peso e temperatura, Arco com dez métodos, e cursores do Live, Seguir e uma lista de pessoas.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, 0.9, mostrar comprimentos em, metros, centímetros, milímetros, métrico, seguir o global, unidades, unidades de visualização, m2, metros quadrados, área de parede, predefinições de escala, 1:75, 1:150, peso, quilogramas, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arco, métodos do arco, arco de 3 pontos, raio, live, cursores, seguir, lista de pessoas, turma, dicas de ferramenta, esquema, novidades, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, contar tudo, legenda, legenda de símbolos, conjunto inteiro, memória de preços, trabalhos anteriores, último trabalho, preço típico, fornecedor, stock, prazo de entrega, pedido em falta, lista de encomenda, falta, painel de problemas, assistente, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg
from: 6182b998
---

Eis o que mudou no TakeoffCraft 0.9, em comparação com a 0.8.1. É uma versão pequena para esta aplicação: os comprimentos podem agora ser lidos em metros, centímetros ou milímetros, as áreas e as escalas seguem corretamente o trabalho métrico, e o Arco tem dez formas de desenhar. As sessões Live também mostram quem está onde.

## Novo

### Ler comprimentos em metros, centímetros ou milímetros

- **Mostrar comprimentos em.** {{ui:Definições}} › {{ui:TakeoffCraft}} tem {{ui:Mostrar comprimentos em}} com {{ui:Seguir o Global}}, {{ui:Pés e polegadas}}, m, cm e mm. {{ui:Seguir o Global}} usa a unidade métrica de comprimento assinalada em {{ui:Definições}} › {{ui:Global}} › {{ui:Unidades}}, e pés e polegadas quando nenhuma estiver assinalada. Muda a forma como os comprimentos se leem na folha, na barra de estado e nos painéis, incluindo alturas, profundidade, espessura e os níveis. Um número sem unidade digitado num campo de altura é lido na unidade mostrada.
- **Apenas visualização.** As quantidades, os custos e as exportações são calculados a partir dos comprimentos exatos. A escolha de 1/16, 1/8 e 1/4 de polegada só aparece para pés e polegadas. Veja [Mostrar comprimentos em metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Um artigo de {{ui:Quantidade escrita (sem desenho)}} pode agora estar em lb, TON, kg ou t, e ter preço por unidade.
- **Temperatura.** Cada artigo tem um campo opcional {{ui:Temperatura}} no editor de artigos, digitado em graus C ou F. {{ui:Mostrar temperaturas em}} em {{ui:Definições}} › {{ui:TakeoffCraft}} oferece {{ui:Seguir o Global}}, °C ou °F.

### Áreas e escalas para trabalho métrico

- **Áreas em m2 no desenho.** Uma área medida com um artigo métrico passa a indicar m2 na etiqueta do desenho e no painel de marcas, bem como na tabela, em vez de SF. A regra é m2 quando o artigo tem preço em métrico ou os comprimentos são mostrados em m, cm ou mm, e SF nos restantes casos.
- **Área de parede.** Um artigo linear com altura mostra também a sua área de parede (comprimento vezes altura) na lista de Artigos e como linha de nota por baixo da tabela de quantidades por artigo.
- **Predefinições de escala 1:75 e 1:150.** Estão na lista {{ui:Predefinida}} no grupo {{ui:Escala}}, que tem agora 32 escalas. Veja [Predefinições de escala](topic:scale-presets).

### Arco com dez métodos

- Enquanto {{ui:Arco}} estiver ativo (botão da barra de ferramentas ou {{key:R}}), aparece na barra da folha uma caixa {{ui:Método do arco}}: 3 pontos, Início, Centro, Fim, Início, Centro, Ângulo, Início, Centro, Comprimento, Início, Fim, Ângulo, Início, Fim, Direção, Início, Fim, Raio, Centro, Início, Fim, Centro, Início, Ângulo e Centro, Início, Comprimento. Ângulo, comprimento, raio e direção podem ser clicados ou digitados. Funciona em troços lineares, áreas e recortes. Os ficheiros guardados antes da 0.9 abrem da mesma forma. Veja [Desenhar arcos com dez métodos](topic:draw-arcs-ten-methods).

### Trabalhar em conjunto

- **Ver os cursores uns dos outros.** Numa sessão Live, o ponteiro de cada pessoa aparece na folha com o seu nome e cor, com uma caixa a tracejado à volta das marcas que selecionou. As pessoas que estão noutra folha aparecem listadas com o nome dessa folha. Veja [Trabalhar em Live com outras pessoas](topic:work-live).
- **Seguir uma pessoa, e a lista de pessoas.** O botão {{ui:Pessoas}} numa sessão Live lista cada pessoa com a ferramenta que usa, a folha em que está e a data da última edição. {{ui:Seguir}} move a sua vista com a da outra pessoa, e o anfitrião pode usar {{ui:Pedir a todos que me sigam}}. Veja [Seguir um colega numa sessão Live](topic:follow-a-teammate).

## Em todas as aplicações

- **Dicas e dica de arranque.** O texto que surge ao passar o rato é uma dica Bootstrap, e a dica de arranque pode ser fechada.
- **Barras de separadores com deslocamento.** A barra de separadores de um painel que não cabe desloca-se em vez de ficar cortada.
- **Títulos dos separadores.** O separador do navegador mostra `<document> - TakeoffCraft | CadCraft`.
- **Esquema.** A lista de esquemas em {{ui:Definições}} é uma lista pendente que mostra o esquema escolhido.
- **Idioma.** O idioma que escolher chega agora às palavras que a própria página escreve, como Novo, Abrir e Guardar. Os idiomas diferentes do inglês são rascunhos automáticos até que um falante nativo os tenha revisto.

## Limites reconhecidos

- A apresentação dos comprimentos, as unidades de peso e de temperatura e as novas predefinições foram verificadas por testes e na página. Nem todos os painéis em todas as unidades foram verificados à mão.
- A lista de pessoas ainda não teve uma verificação manual com uma turma real de professor e alunos.
- Os idiomas diferentes do inglês são rascunhos automáticos.
- Os instaladores para Windows não têm assinatura de código (Mais informações, depois Executar mesmo assim). A imagem de disco do macOS não está notarizada (clicar com o botão direito, depois Abrir).

## Anteriores: 0.8 e 0.8.1

Eis o que mudou no TakeoffCraft 0.8 (lançado a 2026-11-01) e na 0.8.1 (2026-11-02), em comparação com a 0.7. Um símbolo de legenda pode agora ser contado em todo o conjunto de uma só vez, uma nova medição pode começar a partir dos preços dos seus trabalhos anteriores, e a medição pode ser confrontada com o stock de um fornecedor. A 0.8.1 é uma versão de correções.

### Novo

**Contar tudo no conjunto**

- **Assinalar a legenda uma vez.** {{ui:Contar tudo}} na barra de ferramentas lê uma legenda de símbolos: arraste uma caixa à volta dos símbolos e dos nomes impressos ao lado deles. Cada símbolo é listado com a sua imagem e nome, e o nome passa a ser o nome do artigo. Desmarque o que não quer e escolha {{ui:Contar em N folhas}}. Uma barra mostra a folha que está a ser pesquisada, {{ui:Cancelar}} interrompe a execução, e a página continua utilizável.
- **Todas as folhas numa só execução.** Cada símbolo é contado em cada folha aberta. Uma folha desenhada noutra escala é pesquisada nessa escala, e os símbolos são encontrados rodados em qualquer ângulo reto. Os próprios símbolos da legenda não são contados na sua folha.
- **Rever antes de acrescentar.** Cada total tem uma ligação por folha («E-103: 4») que leva a essa folha. Clique numa caixa de um resultado para a deixar de fora, e clique de novo para a repor. O nível de correspondência (50% a 100%) apenas filtra o que foi encontrado; nada é pesquisado outra vez.
- **Um passo de anulação.** {{ui:Adicionar N marcas}} cria um artigo de contagem por símbolo, com uma marca em cada resultado. Um nome que já é um artigo de contagem seu é reutilizado. {{key:Ctrl+Z}} anula todos os artigos e marcas. O que aceita também alimenta {{ui:Aprendido}}.
- **Símbolos em qualquer ângulo.** Marque {{ui:Símbolos em qualquer ângulo}} antes de contar para também encontrar símbolos rodados num ângulo que não seja reto. A pesquisa roda então cada símbolo de 15 em 15 graus, e um símbolo que não seja redondo pode demorar até seis vezes mais.
- **O que é.** Correspondência simples de símbolos nas suas próprias folhas, sem modelo treinado, e nada sai do seu computador. Num conjunto inventado de 200 folhas demorou 9.4 segundos do início ao fim no Chrome, num computador de secretária rápido; conjuntos de plantas reais serão mais lentos. Veja [Contar tudo no conjunto](topic:count-everything).

**Memória de preços a partir dos seus trabalhos**

- **O TakeoffCraft memoriza os seus preços.** Ao guardar uma medição, cada artigo com preço que é usado fica memorizado pelo nome e tipo: preço de material, preço de mão de obra, desperdício e unidade. Os últimos 12 trabalhos são guardados para cada nome. Fica neste computador, junto da Biblioteca de preços, nunca dentro de um ficheiro de medição, e nada é enviado para lado nenhum.
- **Comece uma nova medição a partir dela.** {{ui:Preços}} na barra de ferramentas mostra, para cada artigo, os preços do último trabalho, os preços habituais e o intervalo. {{ui:Usar o último}} ou {{ui:Usar o habitual}} aplicam o preço a um artigo, e {{ui:Atribuir preço a N artigos sem preço a partir da memória}} preenche cada artigo que ainda não tem preço. Cada utilização é um passo de anulação.
- **Trabalho anterior.** {{ui:Aprender com uma medição anterior…}} memoriza os artigos com preço de uma medição guardada (.json).
- **Ver, alterar, esquecer.** {{ui:Tudo o que está memorizado}} lista cada nome; o botão de lixo esquece um, e {{ui:Limpar todos os preços}} esquece todos. Desmarque {{ui:Memorizar os meus preços ao guardar uma medição}} para parar. Um preço por cada nunca é colocado num artigo por pé. Veja [Memória de preços dos seus trabalhos anteriores](topic:price-memory).

**Stock do fornecedor e prazos de entrega**

- **Verificar contra a lista de um fornecedor.** {{ui:Fornecimento}} na barra de ferramentas recebe a lista de stock de um fornecedor ({{ui:Adicionar um ficheiro de fornecedor…}}), um CSV ou uma folha de cálculo, e verifica contra ela o que a medição precisa, com desperdício. Guardam-se até cinco ficheiros. Nada é enviado e nada pergunta ao fornecedor: é o utilizador que traz o ficheiro.
- **O que indica.** Os artigos em falta vêm primeiro: «Faltam 120 EA», «Prazo de entrega 21 dias», «Em backorder», «Unidade diferente», «Sem valor de stock» ou «Em stock». {{ui:Espera máxima pretendida (dias)}} começa em 14.
- **Lista de encomenda.** {{ui:Lista de encomenda (CSV)}} transfere os artigos em falta com a quantidade em falta, o fornecedor e o prazo de entrega.
- **Preços para a Biblioteca.** Se o ficheiro tiver preços, {{ui:Preços para a biblioteca}} define o preço de material de cada entrada da Biblioteca com o mesmo nome e unidade. Recalcule a partir da Biblioteca para os trazer para a medição.
- **No painel de problemas.** Uma falta é um aviso e uma espera longa é uma nota, sob «Stock do fornecedor». Pode aceitar uma com um motivo, e o motivo fica guardado na medição. Veja [Verificar o stock dos fornecedores e os prazos de entrega](topic:supplier-stock).

**Assistentes de IA**

- **Ferramentas para as três.** Com os assistentes permitidos em {{ui:Definições}}, um assistente pode ler uma legenda (`legend_open`), executar a contagem (`legend_count_start`, depois `legend_count_status` e `legend_count_result`) e acrescentá-la (`legend_count_add`, que pode pré-visualizar primeiro). Pode ler os preços memorizados (`prices_list`) e atribuir preços aos artigos a partir deles (`prices_apply`, que pode pré-visualizar primeiro), e ler a verificação do fornecedor (`supply_check`). Acrescentar um ficheiro de fornecedor continua a ser uma tarefa do utilizador. Veja [Usar o TakeoffCraft com assistentes de IA](topic:use-with-ai-assistants).

**Em todas as aplicações**

- **Idiomas.** Cinquenta e quatro idiomas no total; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e usbeque). Os idiomas diferentes do inglês são rascunhos automáticos até que um falante nativo os tenha revisto.
- **Dispositivos de entrada.** {{ui:Definições}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fazem um trackpad, os botões laterais de um rato, uma caneta, um rato 3D, um comando de jogo ou um controlador MIDI, para todas as aplicações ou para uma só. Veja [Usar um trackpad, rato 3D ou comando](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece {{ui:Quebrar}} (o início), {{ui:2 linhas}} e {{ui:1 linha}}; os grupos que não cabem deslocam-se para o lado. Veja [Organizar os painéis](common:arrange-panels).
- **Painel de problemas.** O painel partilhado de avisos e notas inclui agora a verificação de stock do fornecedor acima, ao lado das outras verificações.
- **Suplementos.** Os suplementos seguem a sua lista de contas. Veja [Suplementos e a sua lista de contas](common:addons-basics).
- **Ligar a sua IA.** O CadCraft Studio é o hub: ligue o seu assistente uma vez para todas as oito aplicações. O Studio não tem IA própria.

### Corrigido na 0.8.1

- **Secção de classes do DWG.** A secção de classes de um ficheiro DWG foi lida como o tipo errado. Isto está corrigido no TakeoffCraft e em mais quatro aplicações.
- **O Studio pode mudar de idioma enquanto corre.** Antes, o Studio e as suas edições empacotadas eram só em inglês. Isto não foi testado na versão para computador em todas as plataformas; diga-nos se o idioma não mudar.

### Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode avisar, e num Mac clique com o botão direito e escolha **Abrir** na primeira vez. As versões das lojas (Microsoft Store, Google Play, App Store) estão em suspenso, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Atualizações do Studio.** O instalador do Windows e os pacotes do Linux verificam uma vez por dia e perguntam primeiro. O zip portátil apenas informa, e o macOS e o APK não se atualizam sozinhos. O .dmg do macOS da 0.8 acompanha a versão.
- **Ligar a sua IA.** A ligação com um clique dentro do Studio, o conector alojado para IA no navegador, a sua própria chave de API dentro do Studio e um pacote MCP publicado não estão prometidos nesta versão.
- **Contar tudo.** Precisa de símbolos desenhados da mesma forma que na legenda, e um símbolo com uma parede ou uma linha longa a atravessá-lo pode ficar por encontrar. Símbolos espelhados não são encontrados, e uma folha sem escala desenhada noutro tamanho é pesquisada ao tamanho da legenda. Verifique os resultados na primeira folha antes de confiar no resto.
- **Stock do fornecedor.** Os valores de stock são tão atuais quanto o ficheiro que acrescenta. A verificação nunca pergunta ao fornecedor.
- **Idiomas.** A barra de aplicação em tâmil transborda.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades na 0.7](topic:whats-new-0-7).
