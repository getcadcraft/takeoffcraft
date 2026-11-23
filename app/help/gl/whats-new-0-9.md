---
title: Novidades na 0.9 (anteriores)
summary: Lonxitudes en metros, centímetros ou milímetros, superficies métricas en m2 con superficie de muro, predefinidos de escala 1:75 e 1:150, unidades de peso e temperatura, Arco con dez métodos, e cursores en vivo, Seguir e unha lista de persoas.
keywords: novidades 0.9, versión anterior, novidades, notas de publicación, rexistro de cambios, 0.9, mostrar lonxitudes como, metros, centímetros, milímetros, métrico, seguir o global, unidades, unidades de visualización, m2, metros cadrados, superficie de muro, predefinidos de escala, 1:75, 1:150, peso, quilogramos, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arco, métodos de arco, arco de 3 puntos, raio, en vivo, cursores, seguir, lista de persoas, clase, axuda emerxente, disposición, novidades, notas de publicación, cambios, 0.8, 0.8.1, versión, novas funcións, contar todo, lenda, lenda de símbolos, conxunto completo, memoria de prezos, traballos anteriores, último traballo, prezo típico, provedor, existencias, prazo de entrega, pendente de servir, lista de pedido, falta, panel de problemas, asistente, idiomas, dispositivos de entrada, filas da barra de ferramentas, dwg
from: f4322ba2
---

Estes son os cambios en TakeoffCraft 0.9, comparados coa 0.8.1. É unha versión pequena para esta aplicación: as lonxitudes xa se poden ler en metros, centímetros ou milímetros, as áreas e as escalas seguen o traballo métrico como debe ser, e Arco ten dez xeitos de debuxar. As sesións en vivo tamén mostran onde está cada persoa.

## Novo

### Ler lonxitudes en metros, centímetros ou milímetros

- **Mostrar lonxitudes como.** {{ui:Configuración}} › {{ui:TakeoffCraft}} ten {{ui:Mostrar lonxitudes como}} con {{ui:Seguir o Global}}, {{ui:Pés e polgadas}}, m, cm e mm. {{ui:Seguir o Global}} usa a unidade métrica de lonxitude que marcou en {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}, e pés e polgadas cando non hai ningunha marcada. Cambia a forma en que se len as lonxitudes na folla, na barra de estado e nos paneis, incluídas as alturas, a profundidade, o grosor e os niveis. Un número sen unidade escrito nun campo de altura léese na unidade que se amosa.
- **Só visualización.** As cantidades, os custos e as exportacións calcúlanse a partir das lonxitudes exactas. A opción de 1/16, 1/8 e 1/4 de polgada aparece só para pés e polgadas. Ver [Amosar lonxitudes en metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Un elemento de {{ui:Cantidade escrita (sen debuxo)}} pode estar agora en lb, TON, kg ou t, e prezarse por unidade.
- **Temperatura.** Cada elemento ten un campo opcional {{ui:Temperatura}} no editor de elementos, escrito en graos C ou F. {{ui:Mostrar temperaturas como}} en {{ui:Configuración}} › {{ui:TakeoffCraft}} ofrece {{ui:Seguir o Global}}, °C ou °F.

### Áreas e escalas para o traballo métrico

- **Áreas en m2 no debuxo.** Unha área medida cun elemento métrico indica agora m2 na etiqueta do debuxo e no panel de marcas, ademais de na táboa, en lugar de SF. A regra é m2 cando o elemento se prezar en métrico ou as lonxitudes se amosan en m, cm ou mm, e SF no resto dos casos.
- **Superficie de muro.** Un elemento lineal con altura amosa tamén a súa superficie de muro (lonxitude por altura) na lista de elementos e como fila de nota debaixo da táboa de cantidades por elemento.
- **Predefinidos de escala 1:75 e 1:150.** Están na lista {{ui:Predefinida}} do grupo {{ui:Escala}}, que agora ten 32 escalas. Ver [Predefinidos de escala](topic:scale-presets).

### Arco con dez métodos

- Mentres {{ui:Arco}} está activo (botón da barra de ferramentas ou {{key:R}}), aparece un cadro {{ui:Método do arco}} na barra da folla: 3 puntos, Inicio, Centro, Fin, Inicio, Centro, Ángulo, Inicio, Centro, Lonxitude, Inicio, Fin, Ángulo, Inicio, Fin, Dirección, Inicio, Fin, Raio, Centro, Inicio, Fin, Centro, Inicio, Ángulo e Centro, Inicio, Lonxitude. Ángulo, lonxitude, raio e dirección pódense marcar con clic ou escribir. Funciona en tramos lineares, áreas e recortes. Os ficheiros gardados antes da 0.9 ábrense igual. Ver [Debuxar arcos con dez métodos](topic:draw-arcs-ten-methods).

### Traballo en equipo

- **Ver os cursores dos demais.** Nunha sesión en vivo, o punteiro de cada persoa aparece na folla co seu nome e cor, cun cadro de trazos ao redor das marcas que seleccionou. As persoas que están noutra folla aparecen listadas co nome desa folla. Ver [Traballar en vivo con outros](topic:work-live).
- **Seguir a unha persoa, e a lista de persoas.** O botón {{ui:Persoas}} nunha sesión en vivo lista cada persoa coa ferramenta que usa, a folla en que está e a última vez que editou. {{ui:Seguir}} move a súa vista coa vosa, e a persoa anfitriá pode usar {{ui:Pedir a todos que me sigan}}. Ver [Seguir a un compañeiro nunha sesión en vivo](topic:follow-a-teammate).

## En todas as aplicacións

- **Axudas emerxentes e a suxestión inicial.** O texto que aparece ao pasar o rato é unha axuda emerxente de Bootstrap, e a suxestión inicial pódese pechar.
- **Pestanas con desprazamento.** A barra de pestanas dun panel que non cabe desprázase en lugar de cortarse.
- **Títulos das pestanas.** A pestana do navegador léese `<document> - TakeoffCraft | CadCraft`.
- **Disposición.** A lista de disposicións en {{ui:Configuración}} é un menú despregable que amosa a disposición escollida.
- **Idioma.** O idioma que escolla chega agora ás palabras que a páxina imprime por si mesma, como Novo, Abrir e Gardar. Os idiomas distintos do inglés son borradores automáticos ata que unha persoa falante nativa os revise.

## Límites reais

- A lonxitud, o peso, as unidades de temperatura e os novos predefinidos foron comprobados con probas e na páxina. Non se comprobou a man todos os paneis con todas as unidades.
- A lista de persoas non foi revisada a man cunha clase real de profesorado e alumnado.
- Os idiomas distintos do inglés son borradores automáticos.
- Os instaladores de Windows non están asinados dixitalmente (Máis información, despois Executar igualmente). A imaxe de disco de macOS non está notarizada (botón dereito, despois Abrir).

## Anteriores: 0.8 e 0.8.1

Estes son os cambios en TakeoffCraft 0.8 (publicada o 2026-11-01) e 0.8.1 (2026-11-02), comparados coa 0.7. Agora pode contarse unha lenda de símbolos en todo o conxunto de xeito simultáneo, unha medición nova pode empezar cos prezos dos seus traballos anteriores, e a medición pode comprobarse contra as existencias dun provedor. A 0.8.1 é unha versión de correccións.

### Novo

**Contar todo no conxunto**

- **Marcar a lenda unha vez.** {{ui:Contar todo}} na barra de ferramentas le unha lenda de símbolos: arrastre un cadro ao redor dos símbolos e dos nomes impresos xunto a eles. Cada símbolo aparece listado coa súa imaxe e o seu nome, e o nome pasa a ser o nome do elemento. Desmarque o que non quere e despois escolla {{ui:Contar en N follas}}. Unha barra amosa a folla que se está buscando, {{ui:Cancelar}} detén a execución, e a páxina segue utilizable.
- **Todas as follas nunha soa execución.** Cada símbolo cóntase en todas as follas abertas. Unha folla debuxada noutra escala búscase nesa escala, e os símbolos atópanse xirados en calquera ángulo recto. Os símbolos propios da lenda non se contan na súa folla.
- **Revisar antes de engadir nada.** Cada total ten unha ligazón por folla ("E-103: 4") que leva a esa folla. Faga clic nun cadro dunha atopación para deixala fóra, e faga clic de novo para recuperala. O nivel de coincidencia (do 50 % ao 100 %) só filtra o que se atopou; non se busca de novo nada.
- **Un paso de desfacer.** {{ui:Engadir N marcas}} crea un elemento de conteo por símbolo, cunha marca en cada atopación. Un nome que xa é un elemento de conteo seu reutilízase. {{key:Ctrl+Z}} retira todos os elementos e marcas. O que acepta alimenta tamén {{ui:Aprendido}}.
- **Símbolos en calquera ángulo.** Marque {{ui:Símbolos en calquera ángulo}} antes de contar para atopar tamén os símbolos xirados nun ángulo que non é recto. A busca xira entón cada símbolo cada 15 graos, e un símbolo que non é redondo pode tardar ata seis veces máis.
- **Que é.** Coincidencia simple de símbolos nas súas propias follas, sen modelo adestrado, e nada sae do seu computador. Nun conxunto de 200 follas inventado tardou 9,4 segundos de principio a fin en Chrome nun escritorio rápido; os conxuntos reais de planos serán máis lentos. Ver [Contar todo no conxunto](topic:count-everything).

**Memoria de prezos dos seus traballos**

- **TakeoffCraft lembra as súas tarifas.** Ao gardar unha medición, cada elemento prezado que se usa lémbrase polo nome e o tipo: tarifa de material, tarifa de man de obra, desperdicio e unidade. Gárdanse os últimos 12 traballos de cada nome. Gárdase neste computador, xunto á Biblioteca de prezos, nunca dentro dun ficheiro de medición, e non se envía a ningures.
- **Iniciar unha medición nova desde iso.** {{ui:Prezos}} na barra de ferramentas amosa, para cada elemento, as tarifas do último traballo, as tarifas típicas e o intervalo. {{ui:Usar o último}} ou {{ui:Usar o típico}} poñen prezo a un elemento, e {{ui:Poñer prezo a N elementos sen prezo desde a memoria}} enche cada elemento que aínda non ten prezo. Cada uso é un paso de desfacer.
- **Traballos anteriores.** {{ui:Aprender dunha medición anterior…}} lembra os elementos prezados dunha medición gardada (.json).
- **Velo, cambialo, esquecelo.** {{ui:Todo o lembrado}} lista cada nome; o botón da papeleira esquece un, e {{ui:Borrar todos os prezos}} esquece todos. Desactive {{ui:Lembrar os meus prezos ao gardar unha medición}} para deixar de facelo. Un prezo por cada un nunca se aplica a un elemento por pé. Ver [Memoria de prezos dos seus traballos anteriores](topic:price-memory).

**Existencias do provedor e prazos de entrega**

- **Comprobar contra a lista dun provedor.** {{ui:Subministro}} na barra de ferramentas toma a lista de existencias dun provedor ({{ui:Engadir un ficheiro do provedor…}}), un CSV ou unha folla de cálculo, e comproba contra ela o que necesita a medición, co desperdicio incluído. Gárdanse ata cinco ficheiros. Non se envía nada e non se lle pregunta a ningún provedor: vostede achega o ficheiro.
- **Que indica.** Os elementos con falta aparecen primeiro: "Faltan 120 EA", "Prazo de entrega 21 días", "Pendente de servir", "A unidade difire", "Sen cifra de existencias" ou "En existencia". {{ui:Prazo máximo desexado (días)}} comeza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga os elementos con falta, coa cantidade que falta, o provedor e o prazo de entrega.
- **Prezos á Biblioteca.** Se o ficheiro ten prezos, {{ui:Prezos á Biblioteca}} fixa o prezo do material de cada entrada da Biblioteca co mesmo nome e unidade. Volva prezar desde a Biblioteca para levalos á medición.
- **No panel de problemas.** Unha falta é un aviso e unha espera longa é unha nota, baixo "Existencias do provedor". Pode aceptar unha cun motivo, e o motivo gárdase na medición. Ver [Comprobar as existencias do provedor e os prazos de entrega](topic:supplier-stock).

**Asistentes de IA**

- **Ferramentas para os tres.** Con asistentes permitidos en {{ui:Configuración}}, un asistente pode ler unha lenda (`legend_open`), executar o conteo (`legend_count_start`, despois `legend_count_status` e `legend_count_result`) e engadilo (`legend_count_add`, que pode previsualizar antes). Pode ler os prezos lembrados (`prices_list`) e poñer prezo aos elementos desde eles (`prices_apply`, que pode previsualizar antes), e ler a comprobación de existencias (`supply_check`). Engadir un ficheiro do provedor segue sendo tarefa súa. Ver [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

**En todas as aplicacións**

- **Idiomas.** Cincuenta e catro idiomas en total; dez son novos (lituano, letón, bosníaco, marati, telugu, albanés, afrikaans, filipino, suahili e uzbeco). Os idiomas distintos do inglés son borradores automáticos ata que unha persoa falante nativa os revise.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fan un trackpad, os botóns laterais dun rato, unha pluma, un rato 3D, un mando de xogo ou un controlador MIDI, para todas as aplicacións ou para unha. Ver [Usar un trackpad, un rato 3D ou un controlador](common:input-devices).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece {{ui:Ajustar}} (o inicio), {{ui:2 filas}} e {{ui:1 fila}}; os grupos que non caben desprázanse de lado. Ver [Dispoñer os paneis](common:arrange-panels).
- **Panel de problemas.** O panel compartido de avisos e notas inclúe agora a comprobación de existencias do provedor anterior, xunto ás outras comprobacións.
- **Complementos.** Os complementos seguen a súa lista de conta. Ver [Complementos e a súa lista de conta](common:addons-basics).
- **Conecte a súa IA.** CadCraft Studio é o centro: conecte o seu asistente unha vez para as oito aplicacións. Studio non ten IA propia.

### Corrixido na 0.8.1

- **Sección de clases de DWG.** A sección de clases dun ficheiro DWG líase como un tipo incorrecto. Isto está corrixido en TakeoffCraft e en outras catro aplicacións.
- **Studio pode cambiar de idioma mentres se executa.** Antes, Studio e as súas edicións empaquetadas eran só en inglés. Isto non se probou na versión de escritorio en todas as plataformas; díganos se o idioma non cambia.

### Aínda non nesta versión

- **Sen asinatura dixital.** Windows pode avisar, e en Mac faga clic co botón dereito e escolla {{ui:Aberta}} a primeira vez. As versións para tendas (Microsoft Store, Google Play, App Store) están en espera, e a versión de iPad e iPhone non se volveu xerar para a 0.8.1.
- **Actualizacións de Studio.** O instalador de Windows e os paquetes de Linux comprobán unha vez ao día e preguntan antes. O zip portátil só avisa, e macOS e o APK non se actualizan por si mesmos. O .dmg de macOS da 0.8 segue a publicación.
- **Conecte a súa IA.** Nesta versión non se prometen a conexión dun clic dentro de Studio, o conector aloxado para IA no navegador, a súa propia clave de API dentro de Studio nin un paquete MCP publicado.
- **Contar todo.** Necesita símbolos debuxados do mesmo xeito que na lenda, e un símbolo cunha parede ou unha liña longa que o atravesa pode non atoparse. Non se atopan os símbolos espellados, e unha folla sen escala debuxada noutro tamaño búscase ao tamaño da lenda. Comprobe as atopacións da primeira folla antes de fiarse do resto.
- **Existencias do provedor.** As cifras de existencias só son tan actuais como o ficheiro que engade. A comprobación nunca pregunta a un provedor.
- **Idiomas.** A barra de aplicación en tamil desborda.

Todo o demais está en [Aínda sen construír](topic:not-built-yet). Para a versión anterior, vexa [Novidades na 0.7](topic:whats-new-0-7).
