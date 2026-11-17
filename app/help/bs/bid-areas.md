---
title: Ponudne cjeline
summary: Označite oznake po zgradi, spratu ili fazi, predmjerite u jednu cjelinu u jednom trenutku i čitajte količine i troškove za svaku cjelinu.
keywords: dodatna alternativa, odbitna alternativa, osnovna ponuda, alternative, ponudna cjelina, cjelina, zgrada, sprat, nivo, faza, zona, alternativa, raščlamba, podjela, tipični sprat, međuzbir, po cjelini
from: 64f3d41c
---

Ponudna cjelina je dio posla koji cijenite zasebno: zgrada, sprat, faza, krilo. Svaka oznaka može biti u jednoj ponudnoj cjelini. Količine i predračun se zatim mogu čitati za svaku cjelinu, uz međuzbir za svaku, dok ukupna vrijednost posla ostaje zbir svega.

## Napravite ponudnu cjelinu

1. Na vrhu panela {{ui:Stavke}} otvorite spisak {{ui:Ponudna cjelina}}.
2. Izaberite **Nova ponudna cjelina…**, upišite naziv kao "Zgrada A" ili "Nivo 2", pa izaberite **Napravi**.
   Nova cjelina postaje trenutna. Statusna traka kaže "Nove oznake idu u (naziv). Oznake u drugim ponudnim cjelinama su prigušene."

## Predmjerite u cjelinu

Dok je ponudna cjelina izabrana u spisku, svaka nova oznaka ide u nju: trase, površine, krugovi, brojanja, oznake koje dodaje {{ui:Auto brojanje}} i ono što zalijepite. Oznake u drugim ponudnim cjelinama, kao i one ni u jednoj, prigušene su na listu da vidite šta kome pripada.

Izaberite **Bez ponudne cjeline** u spisku da predmjerite bez nje; tada se ništa ne prigušuje.

:::tip
Tipični spratovi: predmjerite Nivo 2, izaberite njegove oznake ({{key:Mod+A}} na listu), kopirajte ih, izaberite Nivo 3 u spisku i zalijepite. Kopije idu u Nivo 3. Kada su spratovi isti i ne trebaju vam odvojeno, [tipična grupa](topic:typical-groups) broji jedan sprat više puta.
:::

## Premjestite oznake u drugu cjelinu

Izaberite jednu oznaku ili više ({{key:Shift}} + klik, ili {{key:Mod+A}}). Pod **Odabrana oznaka** (ili **Odabrane oznake**) izaberite cjelinu u polju {{ui:Ponudna cjelina}}. Statusna traka kaže "3 oznake premještene u Nivo 2." To je jedan korak poništavanja.

## Preimenovanje, redoslijed ili brisanje

Izaberite **Upravljanje ponudnim cjelinama…** u spisku. Prepišite naziv da ga preimenujete, koristite strelice da promijenite redoslijed (tabele i radna knjiga ga prate) ili izbrišite jednu ikonom za brisanje. Brisanje ponudne cjeline zadržava njene oznake: tada nisu ni u jednoj ponudnoj cjelini. {{key:Mod+Z}} poništava svaku promjenu.

## Čitanje količina po cjelini

U tabeli {{ui:Količine}} izaberite {{ui:Po cjelini}} (prikazuje se kada predmjer ima ponudnu cjelinu). Svaka cjelina navodi stavke koje sadrži, s njihovom količinom, jedinicom i ukupnom vrijednošću, zatim red međuzbira. Oznake bez ponudne cjeline idu na kraj, kao **Bez ponudne cjeline**. Kliknite red stavke da je istaknete i da cjelina postane trenutna.

Sklopovi se računaju za svaku cjelinu iz vlastitih ukupnih vrijednosti te cjeline. Formula koja zaokružuje naviše, kao `ceil(L / 4)`, može tada dati nešto više zajedno po cjelinama nego za cijeli posao, kao što bi bilo kod ponude cijenjene po cjelinama.

## Alternative: osnovna ponuda plus dodaci i odbici

Ponudna cjelina može biti **alternativa**: radovi koje investitor može dodati ponudi ili izbaciti iz nje. U **Upravljanje ponudnim cjelinama…**, svaka cjelina ima spisak pored svog naziva:

| Izbor | Šta radi |
|---|---|
| {{ui:Osnovna ponuda}} | U ponudi, kao i obično. |
| {{ui:Dodatna alternativa}} | Cijenjena zasebno i **izostavljena iz osnovne ponude**: nadogradnja tepiha, dodatna nadstrešnica. |
| {{ui:Odbitna alternativa}} | U osnovnoj ponudi, i ponuđena kao odbitak: "obrišite nadstrešnicu". |

Predmjerite radove alternative u njenu ponudnu cjelinu kao i svaku drugu cjelinu. Kada predmjer ima alternativu:

- Zaglavlje tabele {{ui:Količine}} kaže **Osnovna ponuda** umjesto Ukupno za posao: cijeli predmjer bez dodatnih alternativa.
- {{ui:Po cjelini}} završava osnovnom ponudom i jednim redom po alternativi: **+$300.00** za dodatak, **−$1,050.00** za odbitak.
- Alternativa cijeni samo stavke koje imaju oznake u njoj, sa njihovim sklopovima, pa dio sklopa druge stavke ne ulazi nepozvano.

U izvozima, CSV završava osnovnom ponudom i alternativama, a radna knjiga dobija list **Alternative**: osnovnu ponudu, stavke svake alternative i njenu promjenu, te osnovnu ponudu sa svim uzetim dodatnim alternativama.

## U izvozu

{{ui:XLSX}} dodaje list **Po ponudnoj cjelini**: stavke i komponente svake cjeline s količinom, količinom sa otpadom, materijalom, radom i ukupno, međuzbir po cjelini (formula `SUM`) i na kraju **Sve ponudne cjeline**. List **Oznake** dobija kolonu **Ponudna cjelina**. Predmjer bez ponudnih cjelina izvozi se kao i prije. Pogledajte [Kolone izvoza](topic:export-columns).

Ponudne cjeline se čuvaju u datoteci projekta zajedno sa oznakama.
