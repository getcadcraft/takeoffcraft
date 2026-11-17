---
title: Resum de l'oferta i proposta
summary: Afegiu la càrrega de mà d'obra, l'impost de vendes, les despeses generals, el benefici i l'aval al pressupost, redacteu les inclusions i exclusions, i descarregueu un PDF de la proposta per enviar.
keywords: oferta, càrrega de mà d'obra, càrrega, nòmina, proposta, cotització, despeses generals, benefici, recàrrec, marge, impost de vendes, aval, inclusions, exclusions, condicions, signatura, client, preu
from: 3208a561
---

El pressupost valora el que heu mesurat. El **resum de l'oferta** el converteix en un preu: hi afegeix l'impost de vendes, les despeses generals, el benefici i l'aval, i fa un **PDF de la proposta** amb les vostres inclusions i exclusions.

Obriu-lo des de {{ui:Exporta}} › {{ui:Resum de l'oferta i proposta…}}. Tot el que hi ha es desa amb l'amidament, i cada canvi es pot desfer.

## Els recàrrecs

Escriviu un percentatge en qualsevol dels cinc (deixeu els altres en 0). Es calculen en aquest ordre, cadascun sobre el que hi ha a sobre:

| Línia | Es calcula com |
|---|---|
| Material, Mà d'obra | Els totals del pressupost (l'oferta base quan l'amidament té [variants](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Càrrega de mà d'obra | Càrrega % × mà d'obra: impostos de nòmina, assegurances i prestacions sobre els salaris de les vostres quadrilles. |
| **Cost** | Material + mà d'obra + càrrega de mà d'obra. |
| Impost de vendes sobre material | Impost % × material. |
| Despeses generals | Despeses generals % × (cost + impost). |
| Benefici | Benefici % × (cost + impost + despeses generals). |
| Aval | Aval % × tot el que hi ha a sobre. |
| **Oferta** | La suma de les línies. |

Cada línia s'arrodoneix al cèntim. El llibre de càlcul mostra les mateixes línies sota el total del full Pressupost, amb fórmules actives. El resum s'actualitza mentre escriviu: {{key:Enter}} confirma el percentatge. Cada variant es mostra amb els mateixos recàrrecs sobre el seu propi cost, perquè el propietari vegi què canvia realment en triar-la.

## La proposta

Ompliu el que ha de dir la proposta:

- **Projecte** (el nom de l'amidament si queda buit), **Per a** (el client) i **De** (la vostra empresa).
- **Inclusions** i **Exclusions**: una per línia; també es pot començar amb un guionet o un punt.
- **Condicions**: text lliure, com "Vàlida durant 30 dies."
- **Llista els elements i les quantitats**: l'abast, element per element, amb quantitats i sense preus. Desmarqueu-la per a una proposta a tant alçat.

Trieu {{ui:PDF de la proposta}}. El PDF (`<takeoff> - proposal.pdf`) conté la data, el bloc de preus amb cada recàrrec i l'oferta, les variants, l'abast, les inclusions i exclusions, les condicions, i les línies per signar i datar. Si no s'ha pogut mesurar alguna quantitat (un full sense escala), ho indica sota el preu.

## A les exportacions

Quan l'amidament té un resum de l'oferta, el CSV acaba amb ell i el llibre de càlcul rep un full **Resum de l'oferta**, amb cada línia, el seu percentatge i el seu import. Vegeu [Exporta el pressupost](topic:export-estimate).
