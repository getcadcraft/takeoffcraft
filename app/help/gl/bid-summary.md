---
title: Resumo da oferta e proposta
summary: Engada carga salarial, imposto de vendas, gastos xerais, beneficio e fianza ao orzamento, escriba as inclusións e exclusións e descargue un PDF de proposta para enviar.
keywords: oferta, carga salarial, carga, nómina, proposta, orzamento, gastos xerais, beneficio, recargo, marxe, imposto de vendas, fianza, inclusións, exclusións, condicións, sinatura, cliente, prezo
from: 3208a561
---

O orzamento valora o que medeu. O **resumo da oferta** convírteo nun prezo: engade imposto de vendas, gastos xerais, beneficio e fianza, e crea unha **proposta PDF** coas súas inclusións e exclusións.

Abra desde {{ui:Export}} › {{ui:Resumo da oferta e proposta…}}. Todo o que contén se garda coa medición, e cada cambio pode desfacerse.

## Os recargos

Escriba unha porcentaxe en calquera dos cinco (deixe os outros en 0). Calcúlanse nesta orde, cada un sobre o que está enriba:

| Liña | Cálculo |
|---|---|
| Material, Man de obra | Os totais do orzamento (a oferta base cando a medición ten [alternativas](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Carga salarial | % de carga × man de obra: impostos de nómina, seguros e beneficios sobre os salarios das súas cuadrillas. |
| **Custo** | Material + man de obra + carga salarial. |
| Imposto de vendas sobre o material | % de imposto × material. |
| Gastos xerais | % de gastos xerais × (custo + imposto). |
| Beneficio | % de beneficio × (custo + imposto + gastos xerais). |
| Fianza | % de fianza × todo o anterior. |
| **Oferta** | A suma das liñas. |

Cada liña redondéase ao céntimo. O libro mostra as mesmas liñas baixo o total da folla Orzamento, con fórmulas dinámicas. O resumo actualízase ao escribir: {{key:Enter}} acepta unha porcentaxe. Cada alternativa móstrase cos mesmos recargos sobre o seu propio custo, para que o propietario vexa o que realmente cambia ao aceptala.

## A proposta

Complete o que debe dicir a proposta:

- **Proxecto** (o nome da medición se está baleiro), **Para** (o cliente) e **De** (a súa empresa).
- **Inclusións** e **Exclusións**: unha por liña; un guion ou viñeta inicial é válido.
- **Condicións**: texto libre, como "Válido durante 30 días."
- **Listar os elementos e cantidades**: o alcance, elemento a elemento, con cantidades e sen prezos. Desmárqueo para unha proposta a tanto alzado.

Escolla {{ui:Proposta en PDF}}. O PDF (`<takeoff> - proposal.pdf`) ten a data, o bloque de prezos con cada recargo e a oferta, as alternativas, o alcance, as inclusións e exclusións, as condicións, e liñas para asinar e datar. Se algunhas cantidades non se puideron medir (unha folla sen escala), o PDF dío baixo o prezo.

## Nas exportacións

Cando a medición ten un resumo da oferta, o CSV remata con el, e o libro recibe unha folla **Resumo da oferta**, con cada liña, a súa porcentaxe e o seu importe. Consulte [Exportar o orzamento](topic:export-estimate).
