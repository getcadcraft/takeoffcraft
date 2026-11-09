---
title: Novidades da 0.8 e da 0.8.1
summary: Contar unha lenda de símbolos completa en todas as follas abertas nunha soa pasada, pór prezo aos elementos coas tarifas das súas medicións anteriores, comprobar a medición co stock e os prazos de entrega dun provedor, e novas ferramentas para o asistente en todos os casos, ademais dos cambios comúns da 0.8 e a corrección da 0.8.1 para ficheiros DWG.
keywords: novidades, o que hai de novo, notas de versión, historial de cambios, cambios, 0.8, 0.8.1, versión, novas funcións, contar todo, lenda, lenda de símbolos, conxunto completo, memoria de prezos, medicións anteriores, última medición, prezo típico, provedor, stock, prazo de entrega, lista de pedido, escaseza, panel de problemas, asistente, idiomas, dispositivos de entrada, filas da barra de ferramentas, dwg
from: a04adef6
---

Isto é o que cambiou en TakeoffCraft 0.8 (publicada o 2026-11-01) e 0.8.1 (2026-11-02), comparado coa 0.7. Agora pódese contar unha lenda de símbolos en todo o conxunto dunha vez, unha medición nova pode comezar cos prezos das súas medicións anteriores, e a medición pode comprobarse co stock dun provedor. A 0.8.1 é unha versión de correccións.

## Novo

### Contar todo o conxunto

- **Encadre a lenda unha vez.** {{ui:Contar todo}} na barra de ferramentas le unha lenda de símbolos: arrastre unha caixa arredor dos símbolos e dos nomes impresos ao seu lado. Cada símbolo aparece listado coa súa imaxe e o seu nome, e o nome convértese no nome do elemento. Desmarque o que non queira e escolla {{ui:Contar en N follas}}. Unha barra mostra a folla que se está buscando, {{ui:Cancelar}} detén a pasada e a páxina segue utilizable.
- **Todas as follas nunha pasada.** Cada símbolo cóntase en cada folla aberta. Unha folla debuxada noutra escala búscase a esa escala, e os símbolos atópanse xirados en calquera ángulo recto. Os propios símbolos da lenda non se contan na súa folla.
- **Revisar antes de engadir nada.** Cada total ten unha ligazón por folla ("E-103: 4") que leva a esa folla. Faga clic nunha caixa dun atopamento para deixalo fóra, e volva facer clic para restablecelo. O nivel de coincidencia (do 50 % ao 100 %) só filtra o atopado; non se busca de novo nada.
- **Un paso de desfacer.** {{ui:Engadir N marcas}} crea un elemento de contaxe por símbolo, cunha marca en cada atopamento. Un nome que xa é un elemento de contaxe seu reutilízase. {{key:Ctrl+Z}} retira todos os elementos e marcas. O que acepta alimenta tamén {{ui:Aprendido}}.
- **Símbolos en calquera ángulo.** Marque {{ui:Símbolos en calquera ángulo}} antes de contar para atopar tamén os símbolos xirados nun ángulo que non é recto. A busca xira entón cada símbolo cada 15 graos, e un símbolo que non é redondo pode tardar até seis veces máis.
- **Que é.** Coincidencia simple de símbolos nas súas propias follas, sen modelo adestrado, e nada sae do seu ordenador. Nun conxunto inventado de 200 follas tardou 9,4 segundos de principio a fin en Chrome nun ordenador de escritorio rápido; os conxuntos de planos reais serán máis lentos. Consulte [Contar todo o conxunto](topic:count-everything).

### Memoria de prezos das súas medicións

- **TakeoffCraft lembra as súas tarifas.** Cando garda unha medición, cada elemento con prezo que se usa lémbrase polo nome e o tipo: tarifa de material, tarifa de man de obra, desperdicio e unidade. Gárdanse as últimas 12 medicións de cada nome. Consérvase neste ordenador xunto á Biblioteca de prezos, nunca dentro dun ficheiro de medición, e non se envía a ningures.
- **Comece unha medición nova a partir dela.** {{ui:Prezos}} na barra de ferramentas mostra, para cada elemento, as tarifas da última medición, as tarifas típicas e o intervalo. {{ui:Usar o último}} ou {{ui:Usar o típico}} pon prezo a un elemento, e {{ui:Poñer prezo a N elementos sen prezo desde a memoria}} completa todos os elementos que aínda non teñen prezo. Cada uso é un paso de desfacer.
- **Traballo anterior.** {{ui:Aprender dunha medición anterior…}} lembra os elementos con prezo dunha medición gardada (.json).
- **Velo, cámbiao, esquéceo.** {{ui:Todo o lembrado}} lista cada nome; o botón da papeleira esquece un, e {{ui:Borrar todos os prezos}} esquece todos. Desactive {{ui:Lembrar os meus prezos ao gardar unha medición}} para deixar de facelo. Un prezo por unidade nunca se aplica a un elemento por pé. Consulte [Memoria de prezos das súas medicións anteriores](topic:price-memory).

### Stock e prazos de entrega do provedor

- **Comprobe cunha lista do provedor.** {{ui:Subministro}} na barra de ferramentas toma a lista de stock dun provedor ({{ui:Engadir un ficheiro do provedor…}}), un CSV ou unha folla de cálculo, e comproba contra ela o que precisa a medición, co desperdicio. Gárdanse ata cinco ficheiros. Non se envía nada e non se lle pregunta nada ao provedor: vostede achega o ficheiro.
- **Que indica.** Os elementos escasos aparecen primeiro: "Faltan 120 EA", "Prazo de entrega 21 días", "Pendente de servir", "A unidade non coincide", "Sen cifra de stock" ou "En stock". {{ui:Prazo máximo desexado (días)}} comeza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga os elementos escasos coa cantidade que falta, o provedor e o prazo de entrega.
- **Prezos á Biblioteca.** Se o ficheiro trae prezos, {{ui:Prezos á Biblioteca}} define o prezo de material de cada entrada da Biblioteca co mesmo nome e unidade. Volva poñer prezo desde a Biblioteca para levalos á medición.
- **No panel de problemas.** Unha escaseza é un aviso e un prazo longo é unha nota, baixo "Stock do provedor". Pode aceptar unha cun motivo, e o motivo gárdase na medición. Consulte [Comprobar o stock do provedor e os prazos de entrega](topic:supplier-stock).

### Asistentes de IA

- **Ferramentas para as tres.** Con asistentes permitidos en {{ui:Configuración}}, un asistente pode ler unha lenda (`legend_open`), executar a contaxe (`legend_count_start`, despois `legend_count_status` e `legend_count_result`) e engadila (`legend_count_add`, que pode previsualizar antes). Pode ler os prezos lembrados (`prices_list`) e poñer prezo aos elementos con eles (`prices_apply`, que pode previsualizar antes), e ler a comprobación do provedor (`supply_check`). Engadir un ficheiro do provedor segue sendo tarefa súa. Consulte [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

### En todas as aplicacións

- **Idiomas.** Cincuenta e catro idiomas en total; dez son novos (lituano, letón, bosníaco, maratí, telugu, albanés, afrikáans, filipino, suahili e uzbeco). Os idiomas distintos do inglés son borradores automáticos ata que un falante nativo os revise.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fan un panel táctil, os botóns laterais dun rato, unha caneta, un rato 3D, un mando de xogo ou un controlador MIDI, para todas as aplicacións ou para unha soa. Consulte [Usar un panel táctil, un rato 3D ou un mando](common:input-devices).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece {{ui:Ajustar}} (o inicio), {{ui:2 filas}} e {{ui:1 fila}}; os grupos que non caben desprázanse de lado. Consulte [Organizar os paneis](common:arrange-panels).
- **Panel de problemas.** O panel compartido de avisos e notas inclúe agora a comprobación de stock do provedor de arriba, xunto ás outras comprobacións.
- **Complementos.** Os complementos seguen a lista da súa conta. Consulte [Complementos e a lista da súa conta](common:addons-basics).
- **Conecte a súa IA.** CadCraft Studio é o centro: conecte o seu asistente unha vez para as oito aplicacións. Studio non ten IA propia.

## Corrixido na 0.8.1

- **Sección de clases de DWG.** A sección de clases dun ficheiro DWG líase como un tipo incorrecto. Isto está corrixido en TakeoffCraft e noutras catro aplicacións.
- **Studio pode cambiar de idioma mentres funciona.** Antes, Studio e as súas edicións empaquetadas estaban só en inglés. Isto non se probou na versión de escritorio en todas as plataformas; díganos se o idioma non cambia.

## Non está aínda nesta versión

- **Sen firma de código.** Windows pode avisar, e nun Mac fai clic co botón dereito e escolla {{ui:Aberta}} a primeira vez. As versións para tendas (Microsoft Store, Google Play, App Store) están en espera, e a versión para iPad e iPhone non se reconstruíu para a 0.8.1.
- **Actualizacións de Studio.** O instalador de Windows e os paquetes de Linux comproban unha vez ao día e preguntan antes. O zip portátil só lle avisa, e macOS e o APK non se actualizan por si mesmos. O .dmg de macOS da 0.8 segue á versión.
- **Conecte a súa IA.** A conexión dun clic dentro de Studio, o conector aloxado para IA no navegador, a súa propia clave de API dentro de Studio e un paquete MCP publicado non se prometen nesta versión.
- **Contar todo.** Necesita símbolos debuxados do mesmo xeito que na lenda, e un símbolo cun muro ou unha liña longa que o atravesa pode non atoparse. Os símbolos espellados non se atopan, e unha folla sen escala debuxada noutro tamaño búscase ao tamaño da lenda. Comprobe os atopamentos da primeira folla antes de fiarse do resto.
- **Stock do provedor.** As cifras de stock só son tan actuais como o ficheiro que engade. A comprobación nunca pregunta a un provedor.
- **Idiomas.** A barra da aplicación en tamil desbórdase.

O resto está en [Aínda non implementado](topic:not-built-yet). Para a versión anterior, consulte [Novidades da 0.7](topic:whats-new-0-7).
