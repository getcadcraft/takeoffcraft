---
title: Paketi ponudb in primerjava ponudb
summary: Razdelite oceno na pakete po stroki, pošljite obseg vsakega paketa podizvajalcem, primerjajte prispele ponudbe na istem obsegu in za ceno paketa uporabite izbrano ponudbo.
keywords: primerjava ponudb, uravnavanje, paket ponudb, podizvajalec, ponudba podizvajalca, obseg, nadomestek, stroka, oddelek csi, primerjaj ponudbe, najnižja ponudba, tabela ponudb, ponudnik, dodelitev, izbrana ponudba, uporabi ponudbo, cena podizvajalca
from: 856b3088
---

Glavni izvajalec pošlje obseg vsake stroke podizvajalcem in primerja, kaj se vrne. TakeoffCraft naredi oboje iz predizmere: odprite {{ui:Izvoz}} › {{ui:Ponudbeni paketi in primerjava…}}.

## Paketi

Za vsak oddelek CSI, ki ga uporabljajo vaše postavke, je en paket (prve dve števki {{ui:Številka CSI}} postavke, glejte [Ustvarjanje postavk predizmere](topic:create-items)). Postavke brez številke naredijo svoj paket. Vsak paket pokaže svoje postavke, koliko listov imajo njegove oznake in naš lastni strošek (material in delo pred dodatki, iz osnovne ponudbe).

Izberite {{ui:CSV obsega}}, da prenesete, kaj poslati podizvajalcu: vsako postavko s številko CSI, količino, enoto in listi, na katerih je. Brez cen. Za dobavitelje materiala ima delovni zvezek zahtevo za ponudbo s seznamom delov (glejte [Izvoz ocene](topic:export-estimate)).

## Vnesite ponudbe

1. V prazno vrstico pod paketom vpišite ime ponudnika in znesek ponudbe ter izberite {{ui:Dodaj ponudbo}}.
2. Če ponudba izpušča del obsega, odprite njen seznam {{ui:Izpuščeno}} in označite te postavke.
3. Za popravek imena ali zneska ga prepišite v tabeli; gumb × odstrani ponudbo.

Vsaka sprememba je en korak, ki ga {{key:Mod+Z}} povrne, ponudbe pa se shranijo skupaj s predizmero.

## Kako se ponudbe primerjajo

Ponudbe redko pokrivajo isti obseg. Primerjava vsako izpuščeno postavko zapolni z **nadomestkom** po našem lastnem stroških, tako da se vsaka ponudba primerja na celotnem paketu:

**Uravnano = ponudba + nadomestki**

Najnižja uravnana ponudba je označena **Najnižja**; ob enakosti tista, vnesena prva. **Proti našemu stroških** je uravnana ponudba minus naš lastni strošek paketa: negativno pomeni pod njim. Ponudba, ki se zdi najnižja, lahko izgubi, ko se prešteje njen manjkajoči obseg.

Delovni zvezek dobi delovni list **Primerjava ponudb** z vsakim paketom, ki ima ponudbe: naša ocena, vsaka ponudba, njeni nadomestki, uravnan znesek in razlika, kot žive formule, ter, kaj je vsaka ponudba izpustila.

## Uporabite ponudbo kot ceno paketa

Izberite {{ui:Uporabi}} na ponudbi in ta postane cena celotnega paketa v vaši oceni: lastna cena paketa (postavke, njihovi drugi pogoji in deli sestava) izpade iz skupnega zneska projekta, postavke ostanejo kot količine z vašimi stopnjami za referenco, ena vrstica, **Izbrana ponudba**, pa nosi znesek ponudbe. Postavke, ki jih ponudba izpušča, ostanejo po vašem lastnem strošku, kar je primerjava že štela kot nadomestek. Izberite drugo ponudbo ali isto znova, da jo vzamete nazaj; vsaka izbira je en korak, ki ga {{key:Mod+Z}} razveljavi.

V povzetku ponudbe so ponudbe podizvajalcev ena vrstica znotraj stroškov: splošni stroški, dobiček in jamstvo se dodajo nanje kot na vsak drug strošek; davek na promet (samo na material) in dodatni stroški dela (na delo) pa ne. List Ocena v delovnem zvezku nosi izbrano ponudbo kot svojo vrstico, razdelek dodatkov jo prišteje z živimi formulami. Seznam materialov izpusti material dodeljenega paketa, ker ga zagotovi podizvajalec.

Paket znotraj območja ponudbe alternative se ne preračuna: alternative in vmesne vsote območij še vedno uporabljajo vaše lastne cene.

## Ponudbe, ki pridejo po e-pošti

Ponudb vam ni treba vnašati ročno. {{ui:Pošlji za ponudbe…}} pod paketom pošlje vsakemu podizvajalcu povezavo na stran, kjer vpiše ceno za vsako vrstico; {{ui:Prevzemi cene}} potegne, kar so poslali, v to tabelo. Glejte [Pošiljanje paketa za ponudbe](topic:bid-invitations).

:::note
Vpisovanje ponudbe ročno še vedno deluje, ročno vpisana ponudba in ponudba s spletne strani pa stojita druga ob drugi. Ponudbe, ki so prišle s spletne strani, so označene **spletna** (ali **spletna, zamudna**, če so prispele po roku); njihova cena se spremeni samo, ko ponudnik pošlje novo različico, zato vaši lastni popravki ostanejo do takrat.
:::
