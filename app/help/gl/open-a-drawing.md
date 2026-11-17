---
title: Abrir un debuxo DWG ou DXF
summary: Abra un ficheiro de debuxo como follas (espazo modelo e cada layout), comece coa escala que indica o debuxo, mostre ou oculte as súas capas e traia debuxos ligados.
keywords: dwg, dxf, cad, debuxo, abrir un debuxo, layouts, espazo modelo, espazo de papel, follas, unidades, insunits, escala de viewport, xref, debuxo ligado, capas, conxeladas, sen pdf, trazar, sen trazar
from: d8c3f504
---

TakeoffCraft abre un debuxo DWG ou DXF como abre un PDF: non ten que trazalo antes a PDF. A medición feita sobre o propio debuxo é exacta, porque o debuxo sabe o que é cada obxecto. Consulte [Contar desde un debuxo](topic:count-from-a-drawing).

## Abrir o debuxo

1. Escolla {{ui:Abrir planos}} no grupo {{ui:Ficheiro}}, ou prema {{key:Mod+O}}.
2. Seleccione o ficheiro DWG ou DXF. Pode seleccionar varios, e PDF con eles.
3. Escolla Abrir.

Tamén pode soltar ficheiros de debuxo sobre TakeoffCraft, como os PDF. Non se envía nada: o navegador le o ficheiro no seu ordenador.

TakeoffCraft le DWG desde AutoCAD 2000 ata 2018 e DXF ASCII desde R12 ata 2018. Rexeita un DXF binario (gárdeo como ASCII, ou como DWG) e un ficheiro que non é ningún dos dous, e indica o motivo. Un ficheiro danado ábrese co que se puido ler, e unha mensaxe di iso; as súas contas poden estar incompletas.

## Follas

- **Modelo** é o espazo modelo do debuxo.
- **Cada layout** (lapela de espazo de papel) é unha folla, nomeada pola súa lapela, na orde das lapelas. Un layout mostra o modelo a través das súas ventás gráficas, tal como se trazaría.

Zoom, desprazamento, encaixe ás liñas do propio debuxo, marcas, notas, {{ui:Calibrar}} e o resto funcionan como nun PDF. As follas dun debuxo gárdanse na medición polo nome do ficheiro e unha pegada do seu contido, como un PDF: abra de novo o mesmo ficheiro e as marcas quedan nas súas follas.

## A escala

Unha folla comeza coa escala que indica o debuxo:

- **Un layout** toma a escala da súa ventá gráfica máis grande. Unha escala como 1/2" = 1'-0" nómase coa predefinida que é; calquera outra móstrase como "Da ventá gráfica do debuxo: 1" = 2.5'". Se un layout ten ventás gráficas a outras escalas, a máis grande fixa a escala da folla: compróbeas con {{ui:Comprobar}}.
- **Modelo** toma as unidades do debuxo (polgadas, milímetros, pés…) como escala, "Unidades do debuxo (polgadas)".
- **Un debuxo sen unidades** (o debuxo nunca indicou se unha unidade é unha polgada ou un milímetro) non ten escala: a folla di "Sen escala", e medir nela recúsase, como nun PDF sen escala. Contar non precisa escala. Déalle unha con {{ui:Calibrar}}.

{{ui:Calibrar}}, {{ui:Comprobar}} e a lista {{ui:Predefinida}} cambian unha escala en calquera momento e prevalecen sobre a do debuxo. A lista de predefinidas está desactivada en Modelo, que non ten tamaño de papel.

## Capas

{{ui:Capas}} na barra da folla lista as capas do debuxo co número de obxectos que ten cada unha nesta folla. As capas que o ficheiro desactivou ou conxelou comezan ocultas. Desmarque unha capa para ocultala, ou marque unha oculta para mostrala: a folla debúxase de novo, e o oculto deséxase das contas e dos obxectos ofrecidos a {{ui:Medir debuxo}}, salvo que pida contar tamén as capas ocultas. {{ui:Mostrar todas}} mostra todas as capas; {{ui:Volver ás capas do ficheiro}} desfai os seus cambios. As escollas de capa pertencen a esta sesión, non ao ficheiro de medición.

## Debuxos ligados (xrefs)

Un debuxo que liga outros debuxos móstraos onde están inseridos. TakeoffCraft atopa un debuxo ligado entre os **ficheiros abertos**, polo seu nome: abra o debuxo principal e o debuxo ligado xuntos (ou un despois do outro). Ata entón a barra de estado indica cantos debuxos ligados non se atoparon, o que falta debuxar, e as contas di iso.

## Límites

- Os obxectos que TakeoffCraft non pode ler ou colocar (obxectos proxy, clases descoñecidas) listanse na xanela de contas por tipo; nunca se descartan sen dicir nada.
- Os debuxos moi grandes debúxanse por partes, e as contas deteñense nun límite, indicándoo. Abra antes un trazado en PDF dese debuxo.
- Un debuxo debúxase en negro e coas súas propias cores, escurecidas para papel branco. As táboas de estilos de trazado e as asignacións de plumas non se aplican.
