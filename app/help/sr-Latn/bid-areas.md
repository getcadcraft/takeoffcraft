---
title: Oblasti ponude
summary: Označite oznake po zgradi, spratu ili fazi, radite predmer u jednoj oblasti po jednoj i čitajte količine i troškove za svaku oblast.
keywords: dodatna stavka, odbitna stavka, osnovna ponuda, alternative, oblast ponude, oblast, zgrada, sprat, nivo, faza, zona, alternativa, raščlanjivanje, podela, tipičan sprat, međuzbir, po oblastima
from: 64f3d41c
---

Oblast ponude je deo posla koji posebno cenite: zgrada, sprat, faza ili krilo. Svaka oznaka može biti u jednoj oblasti ponude. Količine i procena mogu se tada čitati za svaku oblast, sa međuzbirom za svaku, dok ukupni zbir posla ostaje zbir svega.

## Napravite oblast ponude

1. Na vrhu panela {{ui:Stavke}} otvorite spisak {{ui:Oblast ponude}}.
2. Izaberite **Nova oblast ponude…**, upišite naziv, na primer „Zgrada A“ ili „Sprat 2“, i izaberite **Napravi**.
   Nova oblast postaje tekuća. Statusna traka kaže „Nove oznake idu u (naziv). Oznake u drugim oblastima ponude su zatamnjene.“

## Predmer u oblasti

Dok je oblast ponude izabrana na spisku, svaka nova oznaka ide u nju: deonice, površine, krugovi, brojanja, oznake koje dodaje {{ui:Automatsko brojanje}} i ono što nalepite. Oznake u drugim oblastima ponude i oznake bez oblasti zatamnjene su na listu, da vidite šta kuda pripada.

Izaberite **Bez oblasti ponude** na spisku da radite predmer bez oblasti; tada ništa nije zatamnjeno.

:::tip
Tipični spratovi: uradite predmer sprata 2, izaberite njegove oznake ({{key:Mod+A}} na listu), kopirajte ih, izaberite Sprat 3 na spisku i nalepite. Kopije idu na Sprat 3. Kad su spratovi isti i ne treba ih razdvajati, [tipična grupa](topic:typical-groups) broji jedan sprat više puta.
:::

## Premestite oznake u drugu oblast

Izaberite jednu oznaku ili više njih ({{key:Shift}} + klik, ili {{key:Mod+A}}). Pod **Izabrana oznaka** (ili **Izabrane oznake**) izaberite oblast u polju {{ui:Oblast ponude}}. Statusna traka kaže „3 oznake premeštene na Sprat 2.“ Ovo je jedan korak poništavanja.

## Preimenujte, preraspodelite ili obrišite

Izaberite **Upravljaj oblastima ponude…** na spisku. Upišite preko naziva da ga preimenujete, koristite strelice da promenite redosled (tabele i radna sveska prate ga), ili obrišite jednu dugmetom za brisanje. Brisanje oblasti ponude zadržava njene oznake: one tada nisu ni u jednoj oblasti ponude. {{key:Mod+Z}} poništava svaku promenu.

## Čitajte količine po oblasti

U tabeli {{ui:Količine}} izaberite {{ui:Po oblastima}} (prikazuje se kad predmer ima oblast ponude). Svaka oblast navodi stavke koje sadrži, sa njihovom količinom, jedinicom i ukupnim iznosom, zatim red međuzbira. Oznake bez oblasti ponude dolaze na kraju, kao **Bez oblasti ponude**. Kliknite red stavke da je istaknete i da tu oblast učinite tekućom.

Sklopovi se računaju za svaku oblast iz sopstvenih zbirova te oblasti. Formula koja zaokružuje naviše, kao `ceil(L / 4)`, može dati malo više u oblastima zajedno nego za ceo posao, kao što bi se dogodilo na ponudi cenjenoj oblast po oblast.

## Alternative: osnovna ponuda plus dodaci i odbici

Oblast ponude može biti **alternativa**: rad koji vlasnik može dodati ponudi ili izvaditi iz nje. U **Upravljaj oblastima ponude…** svaka oblast ima spisak pored svog naziva:

| Izbor | Šta radi |
|---|---|
| {{ui:Osnovna ponuda}} | U ponudi, kao i obično. |
| {{ui:Dodatna stavka (dodaje se)}} | Cenjena posebno i **izostavljena iz osnovne ponude**: nadogradnja tepiha, dodatna nadstrešnica. |
| {{ui:Odbitna stavka (odbija se)}} | U osnovnoj ponudi, i ponuđena kao odbitak: „izbrisati nadstrešnicu“. |

Rad alternative unesite u njenu oblast ponude kao u svaku drugu oblast. Kad predmer ima alternativu:

- Zaglavlje tabele {{ui:Količine}} kaže **Osnovna ponuda** umesto Ukupno za posao: ceo predmer bez dodatnih alternativa.
- {{ui:Po oblastima}} se završava osnovnom ponudom i jednim redom po alternativi: **+$300.00** za dodatak, **−$1,050.00** za odbitak.
- Alternativa cenjuje samo stavke koje imaju oznake u njoj, sa njihovim sklopovima, pa deo sklopa neke druge stavke ne ulazi u nju.

U izvozima se CSV završava osnovnom ponudom i alternativama, a radna sveska dobija list **Alternative**: osnovnu ponudu, stavke svake alternative i njenu promenu, i osnovnu ponudu sa svim dodatnim alternativama, bez njih.

## U izvozu

{{ui:XLSX}} dodaje list **Po oblasti ponude**: stavke i komponente svake oblasti sa količinom, količinom sa otpadom, materijalom, radom i ukupnim iznosom, zatim međuzbir za svaku oblast (formula `SUM`) i **Sve oblasti ponude** na kraju. List **Oznake** dobija kolonu **Oblast ponude**. Predmer bez oblasti ponude izvozi se kao i ranije. Pogledajte [Kolone izvoza](topic:export-columns).

Oblasti ponude čuvaju se u projektnoj datoteci zajedno sa oznakama.
