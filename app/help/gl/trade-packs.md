---
title: Paquetes de oficios
summary: Engade conxuntos gratuítos dun oficio á túa biblioteca de prezos, elimínaos nun só paso e comparte a túa biblioteca como paquete.
keywords: paquete de oficio, paquete, conxuntos, modelos, elementos iniciais, electricidade, pladur, estrutura, pintura, formigón, pavimentos, alvenaría, cuberta, revestimento, carpintaría, fontanaría, climatización, illamento, paisaxismo, tarima, contratista xeral, csi, masterformat, cc0, engadir, retirar, compartir
from: d3c036be
---

Un **paquete de oficio** é un conxunto de elementos listos para un oficio: cada un coa súa unidade, a súa altura ou profundidade, o seu desperdicio e o seu **conxunto** (as pezas e fórmulas que converten un tramo, unha superficie ou un recontó medido en materiais). Unha tabiquería de pladur, por exemplo, traé o seu perfil, montantes, placas, parafusos, cinta e masa.

Os paquetes engádense á túa [biblioteca de prezos](topic:price-library), e desde aí engades os seus elementos a calquera medición.

## Engadir un paquete

1. Abre {{ui:Biblioteca}} na parte superior do panel {{ui:Elementos}} e logo {{ui:Paquetes de oficios…}}.
2. Escolle as {{ui:Unidades}}: imperiais (LF, SF), métricas (m, m²) ou ambas. Cada conxunto está en ambos sistemas.
3. Escolle {{ui:Engadir}} ao lado dun paquete.

Os elementos do paquete aparecen na biblioteca, etiquetados co nome do paquete. Para usalos, márcaos na biblioteca e escolle {{ui:Engadir á medición}}.

:::note
**Un paquete non trae prezos.** Os seus elementos mostran "set your rate" na biblioteca. As tarifas son túas: escríbeas na biblioteca ou no editor de elementos, ou importa a túa lista de prezos como CSV e usa {{ui:Actualizar prezos}}.
:::

Se xa tes na túa biblioteca un elemento co mesmo nome e tipo, o paquete deixa o teu como está. Engadir un paquete de novo substitúe os seus propios elementos pola nova versión.

## Retirar un paquete

En {{ui:Paquetes de oficios…}}, escolle {{ui:Retirar}} ao lado dun paquete que engadiches, e logo outra vez para confirmar. Todos os elementos que viñan del saen da biblioteca nun só paso. Os elementos que xa engadiches a unha medición quedan nesa medición.

## Que hai nun paquete

Escolle {{ui:Fontes e detalles}} baixo un paquete para ver de que se escribiu cada conxunto: códigos de edificación, normas e guías de instalación das asociacións do oficio. Na biblioteca, pasa o punteiro sobre un elemento para ler as súas fontes e as súas suposicións, como o espazamento dos montantes ou o rendemento dunha pintura. Compróbaas coa túa obra e coas fichas técnicas dos teus produtos, e cambia as fórmulas onde non coincidan (ver [Conxuntos e fórmulas](topic:assemblies)).

Cada paquete está marcado **Inicial: aínda non revisado por un estimador** ata que estimadores en activo o revisen.

Cada elemento tamén leva o seu número CSI MasterFormat, como `09 21 16`.

## Comparte a túa biblioteca como paquete

{{ui:Exportar como paquete…}} na biblioteca gárdaa como ficheiro de paquete (`.ccpack.json`) que calquera pode engadir con {{ui:Abrir un ficheiro de paquete…}}. Por defecto deixa fóra os elementos que viñan de paquetes que engadiches, e non leva tarifas. Marca {{ui:Incluír as miñas tarifas como tarifas de mostra}} para enviar tamén as túas: van etiquetadas coa rexión e a data que indiques, e quen engade o paquete decide se as usa.

Os ficheiros de paquete son datos simples, nunca programas. TakeoffCraft comproba cada parte antes de usala e deixa fóra o que non pode ler.
