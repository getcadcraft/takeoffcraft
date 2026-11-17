---
title: Contaxe automática dun símbolo
summary: Marque un símbolo, deixe que TakeoffCraft atope os demais nesta folla ou en todas as follas abertas, revise as coincidencias co control deslizante e engádaas nun só paso.
keywords: calquera ángulo, xirado, virado, outra escala, escala diferente, contaxe automática, busca de símbolos, atopar símbolos, patrón, modelo, coincidencia, detectar, ferramenta de contaxe
from: fa68a6c1
---

{{ui:Auto count}} atopa todas as copias dun símbolo despois de marcar unha. Despois revisa as coincidencias na folla e engade como marcas de contaxe as que acepte. É unha axuda, non unha garantía: revise sempre antes de engadir.

## Atopar os símbolos

1. Cree ou prema un elemento de contaxe en {{ui:Items}}.
2. Abra unha folla onde aparece o símbolo.
3. Escolla {{ui:Auto count}} na barra de ferramentas, ou prema {{key:S}}.
   Aparece unha barra na parte superior da folla: "Arrastre unha caixa ao redor dun símbolo nesta folla."
4. Para buscar en todas as follas abertas, non só nesta, marque {{ui:Search all open sheets}}.
5. Achegue o zoom para que o símbolo se vexa ben, e logo arrastre unha caixa axustada ao redor dunha copia. Inclúa o símbolo completo; o papel en branco ao seu redor recórtase.
   A barra mostra "Buscando…" cunha barra de progreso e un botón {{ui:Cancel}}. A páxina segue respondendo: pode facer zoom, desprazarse e moverse entre follas. Ao escoller outra ferramenta, ou con {{key:Esc}}, cancélase a busca.
6. Cando remata, as coincidencias aparecen na folla como caixas na cor do elemento, e a barra mostra un resumo como "22 coincidencias, 19 para engadir (3 xa contadas). Prema unha caixa para rexeitala ou restaurala."

En {{ui:Auto count}}, arrastrar sobre a folla debuxa unha caixa en lugar de desprazar. Para desprazar, manteña premida {{key:Space}} e arrastre, ou arrastre co botón central.

## Revisar as coincidencias

- **Prema unha caixa** para rexeitala. Unha caixa rexeitada aparece con trazos e riscada. Prémaa de novo para restaurala.
- **Mova o control deslizante {{ui:Match}}** (do 50 % ao 95 %, comezando en 75 %). Un valor máis alto mostra só as coincidencias próximas; un máis baixo mostra as menos exactas. O control só filtra o atopado; non volve buscar.
- **Xa contado**: as coincidencias nun lugar que xa ten unha marca de contaxe deste elemento comezan rexeitadas, para non contar nada dúas veces.
- **Outras follas**: cando buscou en todas as follas abertas, cambie de folla coa lista de follas ou con {{key:PageDown}} e revise cada unha. O resumo indica en cantas follas hai coincidencias.

## Engadilas

Escolla {{ui:Add}}. O botón indica cantas, por exemplo "Engadir 19 marcas".
As marcas de contaxe engádense no centro de cada caixa aceptada: "Engadiron 19 marcas de contaxe a "Tomada dobre". Ctrl+Z elimínaas todas."

O lote completo é un só paso de desfacer, así que un {{key:Mod+Z}} o elimina.

Para deixar a revisión sen engadir nada, escolla {{ui:Discard}} ou prema {{key:Esc}}. Escoller outra ferramenta tamén a descarta.

## Que atopa e que non

TakeoffCraft compara o debuxo, como píxeles, co símbolo que marcou.

- Atopa o símbolo xirado 0°, 90°, 180° e 270°. Marque {{ui:Any angle (slower)}} na barra de contaxe automática antes de debuxar a caixa para atopalo tamén en calquera ángulo: proba cada 15° e logo axusta cada atopado ata o grao e medio. Tarda uns seis veces máis. Non atopa un símbolo espello (salvo que o símbolo teña o mesmo aspecto espellado).
- Con {{ui:Search all open sheets}} marcado, unha folla noutra escala búscase co tamaño que o símbolo ten nela: un aparello debuxado a escala nunha planta de 1/8" mide a metade que nunha planta de 1/4", e aínda así se atopa. Esa folla tamén se busca co tamaño propio da caixa, para etiquetas e símbolos impresos nun só tamaño en todas as follas. Isto require unha escala en ambas as follas; unha folla sen escala búscase só co tamaño da caixa.
- Os símbolos moi parecidos poden coincidir entre si: unha tomada dobre e unha cuádrupla, ou dúas etiquetas de aparello que difiren nunha letra. Suba o control ata que queden só as correctas, e rexeite o resto a man.
- Un símbolo cruzado por outras liñas, trama ou texto puntúa máis baixo e pode necesitar un valor menor no control.
- As caixas moi pequenas recházanse: "Esa caixa é demasiado pequena. Debuxe a caixa ao redor de todo o símbolo." Unha caixa baleira tamén se recusa: "Esa caixa está case baleira. Debuxe a caixa ao redor dun símbolo."
- Unha folla que sería moi grande ao tamaño necesario para este símbolo sáltase, e o resumo indica "1 folla era demasiado grande para buscar con este tamaño de símbolo." Marque un símbolo máis grande, ou conte esa folla a man.

Se non se atopa nada, a barra de estado indica "Sen coincidencias. Baixe o control de coincidencia, ou marque o símbolo máis axustado."

## Velocidade e navegadores

A busca execútase nun proceso en segundo plano, así que a páxina segue respondendo e pode cancelala en calquera momento. Cada folla debúxase primeiro no tamaño de traballo na propia páxina, o que pode facer que unha folla moi grande se pare un momento. Funciona nas versións actuais de Chrome, Edge, Firefox e Safari. Buscar en moitas follas tarda máis; a barra de progreso avanza folla a folla. Sen conexión, a contaxe automática funciona cando a barra da aplicación mostra {{ui:Offline ready}}: {{ui:Save for offline}} mantén tamén o proceso. Consulte [Traballar sen conexión](common:offline).
