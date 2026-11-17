---
title: Iniciar unha nova medición
summary: Borrar todo e iniciar unha medición baleira sen recargar a páxina, e gardar antes o seu traballo.
keywords: novo, nova medición, limpar, restablecer, comezar de novo, baleiro, pechar pdf, seguinte traballo
from: 16d392a4
---

{{ui:New}} pecha todos os PDF e inicia unha medición baleira na mesma páxina.

1. Garde a medición actual se quere conservala: {{ui:Save takeoff}} ou {{key:Mod+S}}.
2. Escolla {{ui:New}} no grupo {{ui:File}}.
3. Se hai cambios sen gardar, TakeoffCraft pregunta **Medición sen gardar**: escolla {{ui:Save takeoff first}} (descarga o proxecto e despois limpa), {{ui:Discard changes}}, ou {{ui:Cancel}}.
   A xanela volve ao seu estado baleiro: sen PDF, sen elementos, sen marcas e sen escalas. A barra de estado di «Nova medición. Abra PDF para comezar.»

Que se borra:

- todos os PDF abertos, as súas follas e miniaturas,
- elementos, conxuntos, marcas e escalas,
- o zoom e a posición de cada folla,
- o historial de desfacer (non se pode desfacer {{ui:New}}),
- o modo arco, e calquera busca ou revisión de contaxe automática.

Os seus ficheiros no disco non se tocan. Para retomar a medición anterior, abra o seu `.takeoff.json` e os PDF: vexa [Gardar e reabrir unha medición](topic:save-and-reopen).

:::note
Cada medición nova comeza sen elementos. Para traelos, cópieos primeiro: {{ui:Copy item}} baixo {{ui:Items}} (ou copie marcas, que levan os seus elementos), e despois {{ui:Paste}} na nova medición. Vexa [Copiar, pegar e duplicar marcas](topic:copy-paste). Para os elementos que usa en cada traballo, consérveos na súa [biblioteca de prezos](topic:price-library) e engádaos desde alí, ou engada un [paquete de oficios](topic:trade-packs).
:::
