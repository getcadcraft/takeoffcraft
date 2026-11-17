---
title: Exportar o orzamento e un PDF marcado
summary: Descargue o orzamento como libro XLSX con fórmulas activas ou como CSV, e copias dos seus PDF coa medición debuxada.
keywords: proposta, resumo de oferta, exportación, xlsx, folla de cálculo, libro, csv, pdf marcado, imprimir medición, informe, compartir, enviar, lenda
from: 334f89c7
---

As exportacións son descargas. Fanse no seu ordenador a partir da medición e dos PDF abertos; non se envía nada a ningures.

## O orzamento como folla de cálculo (XLSX)

1. Abra o menú {{ui:Exportar}} da barra de ferramentas e escolla {{ui:XLSX}}.
   O navegador descarga `(name).xlsx`. A barra de estado indica «Exportado (name).xlsx (orzamento con fórmulas activas, por folla, marcas, escalas).» e engade un aviso cando o orzamento está incompleto.
2. Ábrao na súa folla de cálculo.

O libro ten catro follas, e os informes seguintes cando proceda:

| Folla | Contido |
|---|---|
| Orzamento | Unha fila por elemento e por compoñente: cantidade, perda, cantidade con perda, tarifas, material, man de obra, total e notas. O total da obra na parte inferior. |
| Por folla | A cantidade de cada elemento en cada folla, co número de marcas. |
| Marcas | Cada marca: folla, elemento, tipo, cantidade e detalle (lonxitudes dos segmentos, áreas bruta e de recortes, perímetro). |
| Escalas | Cada folla que teña escala ou marcas: a súa escala, como se fixo (preaxuste, ou calibrada sobre que distancia) e pés por unidade do PDF. |
| Resumo da medición | A cantidade, o número CSI, as marcas e as follas de cada elemento, sen prezos. |
| Lista de materiais | Cada peza de conxunto sumada en toda a medición (a mesma peza usada en varios elementos é unha soa liña), coa perda e o custo de material, e os elementos que a usan. |
| Solicitude de orzamento | A lista de materiais para enviar a un provedor: cantidades con perda, unha columna de prezo unitario baleira, e importes e un total que se completan ao escribir os prezos. |
| Por división | Material, man de obra e total por división CSI MasterFormat, cando os elementos teñen un {{ui:Número CSI}}. |

Cando hai un [resumo de oferta](topic:bid-summary), a folla Orzamento remata ademais cos seus recargos (carga de man de obra, imposto sobre vendas, gastos xerais, beneficio, fianza e oferta), como fórmulas activas.

A folla Orzamento mantén **fórmulas activas**: cantidade con perda, os importes redondeados de material e man de obra, o total de cada fila e o total da obra. Os programas de follas de cálculo volven calcularas, así que pode cambiar unha tarifa ou unha perda na folla e os totais seguen o cambio. Os números que calculou TakeoffCraft gárdanse tamén nas celas, e coinciden ao céntimo.

A columna de notas enumera a fórmula de cada compoñente, os erros de fórmula, as marcas en follas sen escala, a superficie de parede e o perímetro. Cando se deixa algo fóra, a fila de total da obra indica «Incompleto: consulte as notas anteriores».

O libro comprobouse en LibreOffice Calc, que o recalculou cos mesmos totais. Aínda non se abriu en Excel. Os detalles columna a columna están en [Columnas de exportación](topic:export-columns).

## O orzamento como CSV

Abra o menú {{ui:Exportar}} e escolla {{ui:CSV}}. Obtén `(name).csv`: as mesmas filas e columnas que a folla Orzamento, como valores simples (sen fórmulas), e o total da obra. Úseo para pegar noutro sistema de orzamentos ou de contabilidade.

O CSV contén só o orzamento; para as cantidades por folla e a lista de marcas, use XLSX. {{ui:Lista de materiais}} no mesmo menú garda só a lista de materiais como CSV, para facer pedidos.

## O orzamento en Google Sheets

Por riba da táboa de Cantidades, **Copiar para Google Sheets** pon o orzamento no portapapeis como texto separado por tabulacións, coas mesmas liñas que o CSV. Nunha folla de Google Sheets, prema na cela A1 e pegue. TakeoffCraft non inicia sesión en Google e non envía nada alí.

## Recursos que faltan e aprobación

Unha liña con cantidade e sen tarifa indica **Sen tarifa** nas súas notas, e a exportación conta estas liñas baixo os totais. Cando o orzamento foi aprobado, a exportación indica quen o asinou, cando e por que total. Consulte [Tarifas que faltan e aprobación do orzamento](topic:sign-off-the-estimate).

## Un PDF marcado

1. Abra os PDF cuxas marcas quere debuxar.
2. Abra o menú {{ui:Exportar}} e escolla {{ui:PDF marcado}}.
   Aparece «Escribindo o PDF marcado…»; despois o navegador descarga un ficheiro por cada PDF marcado, co nome `(nome do PDF) (medición).pdf`.

Na copia:

- os tramos debúxanse como liñas na cor do seu elemento,
- as áreas énchense lixeiramente cun contorno continuo, e os recortes quedan abertos,
- as contaxes son puntos,
- cada páxina con marcas recibe unha pequena lenda na súa esquina inferior esquerda: a cor, o nome e a cantidade de cada elemento nesa páxina.

Os PDF orixinais non se modifican.

Notas:

- Só se escriben os PDF que están abertos. As marcas dos PDF que non están abertos quedan nos totais pero non se debuxan; ábraos primeiro.
- Os nomes da lenda usan unha fonte PDF estándar. As letras que non pode mostrar imprímense como «?».
- Un PDF cifrado non se pode copiar con marcas: «Este PDF está protexido por contrasinal ou cifrado, polo que non se pode escribir unha copia marcada. A medición en si está ben; exporte a folla de cálculo.»
- A primeira {{ui:PDF marcado}} nunha lapela carga o escritor de PDF. Sen conexión, só está dispoñible se a barra da aplicación mostra {{ui:Listo sen conexión}}; consulte [Traballo sen conexión](common:offline).

:::chromium
Con varios PDF marcados, Chrome e Edge poden preguntar unha vez se este sitio pode descargar varios ficheiros. Escolla Permitir, ou só obterá o primeiro ficheiro.
:::

## Nada que exportar?

- {{ui:XLSX}} e {{ui:CSV}} precisan polo menos un elemento: «Aínda non hai nada que exportar: cree un elemento e medio.»
- {{ui:PDF marcado}} precisa marcas nun PDF aberto: «Aínda non hai marcas nos PDF abertos.»

## Gardar tamén a medición

Unha exportación é un informe. Para seguir traballando na medición máis tarde, escolla tamén {{ui:Gardar medición}}: consulte [Gardar e reabrir unha medición](topic:save-and-reopen).

Para engadir gastos xerais, beneficio, imposto e fianza e enviar unha proposta, consulte [Resumo de oferta e proposta](topic:bid-summary).
