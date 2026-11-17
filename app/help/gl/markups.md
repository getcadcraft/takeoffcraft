---
title: Notas, nubes e realces
summary: Marque preguntas e cambios nas follas con notas, nubes de revisión e realces, siga o estado de cada un como aberto, respondido ou pechado, e envíeos no PDF marcado.
keywords: anotación, anotacións, nota, comentario, pregunta, rfi, nube, nube de revisión, realce, estado, aberto, respondido, pechado, revisión, lista de anotacións
from: 2b395c13
---

As anotacións serven para o que hai que lembrar ou preguntar mentres se mide: «confirmar o tipo de base», unha nube de revisión arredor dun muro cambiado, unha nota realzada no plano. Están sobre a folla cun estado, enuméranse nun só lugar e imprímense no PDF marcado. **Nunca se contan**: sen cantidade, sen custo.

## Engadir unha

Abra {{ui:Markup}} na barra enriba da folla e escolla:

| Anotación | Como |
|---|---|
| {{ui:Note}} | Faga clic onde irá, escriba a nota e escolla {{ui:Add}}. Aparece como un marcador redondo, coa súa primeira liña ao lado. |
| {{ui:Cloud}} | Faga clic nunha esquina, despois na oposta, e escriba unha nota (ou déixea baleira). Unha nube de revisión con festóns vai ao redor da caixa. |
| {{ui:Highlight}} | Faga clic en dúas esquinas: unha caixa amarela transparente, cunha nota se quere. |

{{key:Esc}} despois da primeira esquina cancela. A ferramenta queda activa para a seguinte; {{key:V}} volve a {{ui:Select}}.

## Estado e edición

Faga clic nunha anotación con {{ui:Select}} para seleccionala. O panel dereito mostra **Anotación**: o seu tipo e folla, o seu **Estado** —Aberto, Respondido ou Pechado— e o seu texto, que pode cambiar. {{key:Delete}} (ou {{ui:Delete}}) elimínaa; {{key:Mod+Z}} a devolve.

O marcador dunha nota é laranxa mentres está aberto, azul cando se responde e cinza cando se pecha; unha nube pechada tamén pasa a cinza.

## A lista

**Anotacións** no panel dereito enumera todas as anotacións da medición co seu estado, e indica cantas seguen abertas. Marque **Só abertas** para ver o que queda por resolver. Faga clic nunha fila para ir á súa folla e seleccionala.

## Compartir

- {{ui:Marked PDF}} dibúxaas nas páxinas: realces, nubes e marcadores, cada un cunha caixa que indica o seu estado en maiúsculas (ABERTO, RESPONDIDO, PECHADO) e o seu texto. Tamén se inclúe unha páxina con anotacións pero sen marcas de medición.
- {{ui:XLSX}} engade unha folla **Anotacións**: folla, tipo, estado e texto, unha fila por cada anotación.
- Gárdanse no `.takeoff.json` e nun [PDF coa medición dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
