---
title: Novidades da 0.9
summary: Lea as lonxitudes en metros, centímetros ou milímetros, as superficies métricas en m2 con superficie de muro, predefinidos de escala 1:75 e 1:150, unidades de peso e temperatura, Arco con dez métodos, e cursores en directo, Seguir e unha lista de persoas.
keywords: novidades, notas de publicación, rexistro de cambios, 0.9, mostrar lonxitudes como, metros, centímetros, milímetros, métrico, seguir o Global, unidades, unidades de visualización, m2, metros cadrados, superficie de muro, predefinidos de escala, 1:75, 1:150, peso, quilogramos, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arco, métodos do arco, arco de 3 puntos, radio, en directo, cursores, seguir, lista de persoas, clase, información emerxente, disposición, cambios, 0.8, 0.8.1, versión, novas funcións, contar todo, lenda, lenda de símbolos, conxunto completo, memoria de prezos, traballos anteriores, último traballo, prezo típico, provedor, existencias, prazo de entrega, pedido pendente, lista de pedido, escaseza, panel de problemas, asistente, idiomas, dispositivos de entrada, filas da barra de ferramentas, dwg
from: 6182b998
---

Isto é o que cambiou na TakeoffCraft 0.9, en comparación coa 0.8.1. É unha versión pequena para esta aplicación: agora as lonxitudes poden lerse en metros, centímetros ou milímetros, as superficies e as escalas seguen o traballo métrico como debe, e Arco ten dez xeitos de debuxar. As sesións en directo tamén amosan quen está onde.

## Novo

### Ler lonxitudes en metros, centímetros ou milímetros

- **Mostrar lonxitudes como.** {{ui:Configuración}} › {{ui:TakeoffCraft}} ten {{ui:Mostrar lonxitudes como}} con {{ui:Seguir o Global}}, {{ui:Pés e polgadas}}, m, cm e mm. {{ui:Seguir o Global}} usa a unidade métrica de lonxitude que marcou con estrela en {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}, e pés e polgadas cando non hai ningunha marcada. Cambia como se len as lonxitudes na folla, na barra de estado e nos paneis, incluídas as alturas, a profundidade, o grosor e os niveis. Un número simple escrito nun campo de altura léese na unidade amosada.
- **Só visualización.** Cantidades, custos e exportacións calcúlanse a partir das lonxitudes exactas. A opción de 1/16, 1/8 e 1/4 de polgada aparece só para pés e polgadas. Vexa [Mostrar lonxitudes en metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Unha partida de {{ui:Cantidade escrita (sen debuxo)}} pode agora estar en lb, TON, kg ou t, e prezarse por unidade.
- **Temperatura.** Cada partida ten un campo opcional {{ui:Temperatura}} no editor de partidas, escrito en graos C ou F. {{ui:Mostrar temperaturas como}} en {{ui:Configuración}} › {{ui:TakeoffCraft}} ofrece {{ui:Seguir o Global}}, °C ou °F.

### Superficies e escalas para o traballo métrico

- **Superficies en m2 no debuxo.** Unha superficie medida cunha partida métrica di agora m2 na etiqueta do debuxo e no panel de marcas, igual que na táboa, en lugar de SF. A regra é m2 cando a partida se prezou en métrico ou as lonxitudes se amosan en m, cm ou mm, e SF no resto dos casos.
- **Superficie de muro.** Unha partida lineal con altura amosa tamén a súa superficie de muro (lonxitude por altura) na lista de Partidas e como fila de nota baixo a táboa de cantidades por partida.
- **Predefinidos de escala 1:75 e 1:150.** Están na lista {{ui:Predefinida}} do grupo {{ui:Escala}}, que agora ten 32 escalas. Vexa [Predefinidos de escala](topic:scale-presets).

### Arco con dez métodos

- Mentres {{ui:Arco}} estea activo (botón da barra de ferramentas ou {{key:R}}), aparece unha caixa {{ui:Método do arco}} na barra de follas: 3 puntos, Inicio, Centro, Fin, Inicio, Centro, Ángulo, Inicio, Centro, Lonxitude, Inicio, Fin, Ángulo, Inicio, Fin, Dirección, Inicio, Fin, Radio, Centro, Inicio, Fin, Centro, Inicio, Ángulo e Centro, Inicio, Lonxitude. Ángulo, lonxitude, radio e dirección poden premerse ou escribirse. Funciona en tramos lineais, superficies e recortes. Os ficheiros gardados antes da 0.9 ábrense igual. Vexa [Debuxar arcos con dez métodos](topic:draw-arcs-ten-methods).

### Traballar xuntos

- **Ver os cursores dos demais.** Nunha sesión en directo, o punteiro de cada persoa amósase na folla co seu nome e cor, cunha caixa de liña descontinua arredor das marcas que seleccionou. As persoas noutra folla aparecen listadas co nome desa folla. Vexa [Traballar en directo con outros](topic:work-live).
- **Seguir a unha persoa, e a lista de persoas.** O botón {{ui:Persoas}} nunha sesión en directo lista cada persoa coa ferramenta que usa, a folla na que está e cando editou por última vez. {{ui:Seguir}} move a súa vista coa súa, e o anfitrión pode usar {{ui:Pedir a todos que me sigan}}. Vexa [Seguir a unha compañeira ou compañeiro nunha sesión en directo](topic:follow-a-teammate).

## En todas as aplicacións

- **Información emerxente e suxestión de inicio.** O texto ao pasar o rato é unha información emerxente de Bootstrap, e a suxestión de inicio pode pecharse.
- **Franxas de lapelas con desprazamento.** A franxa de lapelas dun panel que non cabe despraza en lugar de cortarse.
- **Títulos das lapelas.** A lapela do navegador di `<document> - TakeoffCraft | CadCraft`.
- **Disposición.** A lista de disposicións en {{ui:Configuración}} é un menú despregable que amosa a disposición escollida.
- **Idioma.** O idioma que escolla chega agora ás palabras que a páxina imprime por si mesma, como Novo, Abrir e Gardar. Os idiomas distintos do inglés son borradores automáticos ata que un falante nativo os lea.

## Límites reais

- A visualización das lonxitudes, as unidades de peso e temperatura e os novos predefinidos comprobáronse con probas e na páxina. Non se comprobou a man cada panel con cada unidade.
- A lista de persoas non recibiu unha comprobación manual cunha clase real de profesorado e alumnado.
- Os idiomas distintos do inglés son borradores automáticos.
- Os instaladores de Windows non están asinados dixitalmente (Máis información, despois Executar igualmente). A imaxe de disco de macOS non está notarizada (botón dereito, despois Abrir).

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou na TakeoffCraft 0.8 (publicada o 2026-11-01) e na 0.8.1 (2026-11-02), en comparación coa 0.7. Un símbolo de lenda pode agora contarse en todo o conxunto de unha vez, unha medición nova pode comezar cos prezos dos seus traballos anteriores, e a medición pode comprobarse contra as existencias dun provedor. A 0.8.1 é unha versión de corrección.

### Novo

**Contar todo o conxunto**

- **Marque a lenda unha vez.** {{ui:Contar todo}} na barra de ferramentas le unha lenda de símbolos: arrastre un recadro arredor dos símbolos e dos nomes impresos ao seu lado. Cada símbolo lístase coa súa imaxe e o seu nome, e o nome convértese no nome da partida. Desmarque o que non quere, e logo escolla {{ui:Contar en N follas}}. Unha barra amosa a folla que se está buscando, {{ui:Cancelar}} detén a execución, e a páxina segue sendo usable.
- **Unha execución en todas as follas.** Cada símbolo cóntase en cada folla aberta. Unha folla debuxada noutra escala búscase a esa escala, e os símbolos atópanse xirados en calquera ángulo recto. Os propios símbolos da lenda non se contan na súa folla.
- **Revisión antes de engadir nada.** Cada total ten unha ligazón por folla ("E-103: 4") que vai a esa folla. Prema nunha caixa dun achado para deixalo fóra, e prémao de novo para devolvelo. O nivel de coincidencia (50 % a 100 %) só filtra o atopado; non se busca de novo.
- **Un paso de desfacer.** {{ui:Engadir N marcas}} fai unha partida de conta por símbolo cunha marca en cada achado. Un nome que xa é unha partida de conta súa reutilízase. {{key:Ctrl+Z}} retira todas as partidas e marcas. O que acepta alimenta tamén {{ui:Aprendido}}.
- **Símbolos en calquera ángulo.** Marque {{ui:Símbolos en calquera ángulo}} antes de contar para atopar tamén os símbolos xirados nun ángulo que non é recto. A busca xira entón cada símbolo cada 15 graos, e un símbolo que non é redondo pode tardar até seis veces máis.
- **O que é.** Coincidencia simple de símbolos nas súas propias follas, sen modelo adestrado, e nada sae do seu ordenador. Nun conxunto ficticio de 200 follas tardou 9,4 segundos de principio a fin en Chrome nun escritorio rápido; os conxuntos de planos reais serán máis lentos. Vexa [Contar todo o conxunto](topic:count-everything).

**Memoria de prezos dos seus traballos**

- **TakeoffCraft lembra as súas tarifas.** Cando garda unha medición, cada partida prezada que se usa lémbrase polo nome e o tipo: tarifa de material, tarifa de man de obra, desperdicio e unidade. Gárdanse os últimos 12 traballos por cada nome. Consérvase neste ordenador xunto ao prezo da Biblioteca, nunca dentro dun ficheiro de medición, e non se envía nada a ningures.
- **Comece unha medición nova a partir dela.** {{ui:Prezos}} na barra de ferramentas amosa, para cada partida, as tarifas do último traballo, as tarifas típicas e o intervalo. {{ui:Usar o último}} ou {{ui:Usar o típico}} prezan unha partida, e {{ui:Prezar N partidas sen prezo desde a memoria}} enche cada partida que aínda non ten prezo. Cada uso é un paso de desfacer.
- **Traballos anteriores.** {{ui:Aprender dunha medición anterior…}} lembra as partidas prezadas dunha medición gardada (.json).
- **Vela, cámbiea, esquécea.** {{ui:Todo o lembrado}} lista cada nome; o botón da papeleira esquece un, e {{ui:Borrar todos os prezos}} esquece todos. Desactive {{ui:Lembrar os meus prezos ao gardar unha medición}} para deixar de facelo. Nunca se pon un prezo por unidade nunha partida por pé. Vexa [Memoria de prezos dos seus traballos anteriores](topic:price-memory).

**Existencias e prazos de entrega dun provedor**

- **Comprobe contra a lista dun provedor.** {{ui:Subministro}} na barra de ferramentas toma a lista de existencias dun provedor ({{ui:Engadir un ficheiro do provedor…}}), un CSV ou unha folla de cálculo, e comproba o que precisa a medición, co desperdicio incluído, contra ela. Gárdanse até cinco ficheiros. Non se envía nada e nada pregunta a un provedor: vostede achega o ficheiro.
- **O que di.** As partidas escasas aparecen primeiro: "Faltan 120 EA", "Prazo de entrega 21 días", "Pedido pendente", "Unidade distinta", "Sen cifra de existencias" ou "En existencias". {{ui:Prazo máximo desexado (días)}} comeza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga as partidas escasas coa cantidade que falta, o provedor e o prazo de entrega.
- **Prezos á Biblioteca.** Se o ficheiro ten prezos, {{ui:Prezos á Biblioteca}} define o prezo de material de cada entrada da Biblioteca co mesmo nome e unidade. Reprezo desde a Biblioteca para levalos á medición.
- **No panel de problemas.** Unha falta é un aviso e unha espera longa é unha nota, baixo "Existencias do provedor". Pode aceptar unha cun motivo, e o motivo gárdase na medición. Vexa [Comprobar existencias e prazos de entrega](topic:supplier-stock).

**Asistentes de IA**

- **Ferramentas para os tres.** Con asistentes permitidos en {{ui:Configuración}}, un asistente pode ler unha lenda (`legend_open`), executar a conta (`legend_count_start`, despois `legend_count_status` e `legend_count_result`) e engadila (`legend_count_add`, que pode ver antes). Pode ler os prezos lembrados (`prices_list`) e prezar partidas con eles (`prices_apply`, que tamén pode ver antes), e ler a comprobación do provedor (`supply_check`). Engadir un ficheiro de provedor segue sendo cousa súa. Vexa [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

**En todas as aplicacións**

- **Idiomas.** Cincuenta e catro idiomas en total; dez son novos (lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, suahili e uzbeko). Os idiomas distintos do inglés son borradores automáticos ata que un falante nativo os lea.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fai un trackpad, os botóns laterais dun rato, unha pluma, un rato 3D, un mando de xogos ou un controlador MIDI, para todas as aplicacións ou para unha. Vexa [Usar un trackpad, rato 3D ou mando](common:input-devices).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece {{ui:Ajustar}} (o inicio), {{ui:2 filas}} e {{ui:1 fila}}; os grupos que non caben desprázanse de lado. Vexa [Dispor os paneis](common:arrange-panels).
- **Panel de problemas.** O panel compartido de avisos e notas inclúe agora a comprobación de existencias do provedor de arriba, xunto ás outras comprobacións.
- **Complementos.** Os complementos seguen a súa lista de conta. Vexa [Complementos e a súa lista de conta](common:addons-basics).
- **Conecte a súa IA.** CadCraft Studio é o centro: conecte o seu asistente unha vez para as oito aplicacións. Studio non ten IA propia.

### Corrixido na 0.8.1

- **Sección de clases de DWG.** A sección de clases dun ficheiro DWG líase como tipo equivocado. Isto está corrixido en TakeoffCraft e noutras catro aplicacións.
- **Studio pode cambiar de idioma mentres se executa.** Antes, Studio e as súas edicións empaquetadas eran só en inglés. Isto non se probou na versión de escritorio en todas as plataformas; díganos se o idioma non cambia.

### Aínda non nesta versión

- **Non asinada dixitalmente.** Windows pode avisar, e nun Mac prema co botón dereito e escolla {{ui:Aberta}} a primeira vez. As versións para tenda (Microsoft Store, Google Play, App Store) están en espera, e a versión de iPad e iPhone non se reconstruíu para a 0.8.1.
- **Actualizacións de Studio.** O instalador de Windows e os paquetes de Linux comprobán unha vez ao día e preguntan antes. O zip portátil só avisa, e macOS e o APK non se actualizan por si mesmos. O .dmg de macOS da 0.8 segue a versión.
- **Conecte a súa IA.** Non se prometen nesta versión a conexión dun clic dentro de Studio, o conector aloxado para IA no navegador, a súa propia clave de API dentro de Studio nin un paquete MCP publicado.
- **Contar todo.** Necesita símbolos debuxados do mesmo xeito que na lenda, e un símbolo cun muro ou unha liña longa que o atravesa pode non atoparse. Non se atopan os símbolos espellados, e unha folla sen escala debuxada noutro tamaño búscase ao tamaño da lenda. Comprobe os achados da primeira folla antes de fiarse do resto.
- **Existencias do provedor.** As cifras de existencias só son tan actuais como o ficheiro que engade. A comprobación nunca pregunta a un provedor.
- **Idiomas.** A barra da aplicación en tamil desborda.

Todo o demais está en [Non construído aínda](topic:not-built-yet). Para a versión anterior, vexa [Novidades da 0.7](topic:whats-new-0-7).
