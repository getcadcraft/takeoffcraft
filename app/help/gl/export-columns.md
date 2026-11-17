---
title: Columnas de exportación
summary: Cada folla e columna da exportación XLSX e do CSV, coas fórmulas que leva a folla Orzamento.
keywords: exportación, columnas, xlsx, csv, folla de cálculo, folla de orzamento, por folla, marcas, escalas, fórmulas, campos
from: fed07851
---

## Orzamento (folla XLSX e CSV)

Unha fila por elemento, seguida dunha fila por cada compoñente do seu conxunto (con sangrado). A continuación, unha fila baleira e o total da obra.

| Columna | Contido | No XLSX |
|---|---|---|
| A Elemento | Nome do elemento (en negriña) ou do compoñente (con sangrado) | Texto |
| B Tipo | Lineal, Superficie, Contar ou Compoñente | Texto |
| C Unidade | LF, m, SF, SY, m², EA, ou a unidade do compoñente | Texto |
| D Cantidade | Total medido, ou resultado da fórmula | Número |
| E % de perda | Perda | Porcentaxe (0.10 = 10 %) |
| F Cantidade con perda | Cantidade × (1 + perda) | Fórmula `D*(1+E)` |
| G Material por unidade | Tarifa de material | Número |
| H Man de obra por unidade | Tarifa de man de obra | Número |
| I Material | Material estendido | Fórmula `ROUND(F*G,2)` |
| J Man de obra | Man de obra estendida | Fórmula `ROUND(F*H,2)` |
| K Total | Material + man de obra | Fórmula `I+J` |
| L Notas | Fórmula usada, erro de fórmula, marcas en follas sen escala, superficie de parede, perímetro | Texto |

Fila de total da obra: `SUM` das columnas I, J e K de todas as filas anteriores, e «Incompleto: consulte as notas anteriores» nas notas cando se deixou algo fóra.

Unha fila con erro de fórmula non ten cantidade nin importes; a súa nota indica o erro. A fila de cabeceira queda fixa.

No CSV, as mesmas columnas conteñen valores simples; % de perda é un número de porcentaxe (10 para o 10 %), e os importes están en dólares con dúas cifras decimais. Ao texto que unha folla de cálculo podería tomar por fórmula (que comece por `=`, `+`, `-` ou `@`) engádeselle unha `'` diante para que siga sendo texto.

## Por folla (só XLSX)

| Columna | Contido |
|---|---|
| Folla | Nome da folla (co nome do PDF cando non está aberto) |
| Elemento | Nome do elemento |
| Cantidade | A cantidade dese elemento nesa folla, na súa unidade |
| Unidade | A unidade do elemento |
| Marcas | Número de marcas |

## Marcas (só XLSX)

Unha fila por marca.

| Columna | Contido |
|---|---|
| Folla | Nome da folla |
| Elemento | Nome do elemento |
| Tipo | Lineal, Superficie ou Contar |
| Cantidade | Lonxitude, superficie neta ou 1 |
| Unidade | LF ou m; SF, SY ou m²; EA |
| Detalle | Lineal: as lonxitudes dos segmentos, os descontados marcados como «(deducir)», e «deduce (lonxitude) de (lonxitude) debuxada». Superficie: as áreas bruta e de recortes cando hai recortes, e o perímetro. «A folla non ten escala» para as marcas sen escala. |
| Área de oferta | Só cando a medición ten áreas de oferta: a área da marca, ou «Sen área de oferta» |

## Por área de oferta (só XLSX, cando a medición ten áreas de oferta)

| Columna | Contido |
|---|---|
| Área de oferta | Nome da área, ou «Sen área de oferta» |
| Elemento | O elemento, ou un compoñente con sangrado debaixo del |
| Unidade | A unidade do elemento ou do compoñente |
| Cantidade | Medida nesa área (compoñentes: a fórmula sobre os totais da área) |
| Cantidade con perda | Cantidade × (1 + perda) |
| Material, Man de obra, Total | Estendidos ao céntimo, como en Orzamento |
| Notas | Fórmula, erros e marcas sen escala, como en Orzamento |

Cada área remata cunha fila «subtotal (nome)» cuxos custos son fórmulas `SUM` sobre as súas filas; a última fila, **Todas as áreas de oferta**, suma os subtotais. A folla **Marcas** ten entón unha sétima columna, **Área de oferta**.

## Escalas (só XLSX)

Unha fila por cada folla que teña escala ou marcas.

| Columna | Contido |
|---|---|
| Folla | Nome da folla |
| Escala | O nome do preaxuste, a escala calibrada, ou «Sen escala» |
| Como | «Preaxuste», ou «Calibrada sobre (a distancia que escribiu)» |
| Pés por unidade do PDF | O factor de escala exacto que usa TakeoffCraft |

## Nomes de ficheiro

- `(name).xlsx` e `(name).csv`, onde o nome procede do primeiro PDF aberto na medición.
- O CSV está en UTF-8 con marca de orde de bytes (BOM) e finais de liña de Windows, que as follas de cálculo de todas as plataformas len.
