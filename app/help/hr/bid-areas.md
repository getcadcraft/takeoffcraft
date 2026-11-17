---
title: Područja ponude
summary: Označite oznake prema zgradi, etaži ili fazi, izvodite količine u jedno područje istodobno i čitajte količine i troškove za svako područje.
keywords: dodaj alternativu, odbij alternativu, osnovna ponuda, alternative, područje ponude, područje, zgrada, etaža, razina, faza, zona, alternativa, raščlamba, podjela, tipična etaža, međuzbroj, po području
from: 64f3d41c
---

Područje ponude je dio posla koji se zasebno cijeni: zgrada, etaža, faza, krilo. Svaka oznaka može biti u jednom području ponude. Količine i procjena tada se mogu čitati za svako područje, s međuzbrojem za svaki, dok ukupni iznos posla ostaje zbroj svega.

## Stvaranje područja ponude

1. Pri vrhu panela {{ui:Stavke}} otvorite popis {{ui:Područje ponude}}.
2. Odaberite **Novo područje ponude…**, upišite naziv poput „Zgrada A“ ili „Razina 2“, i odaberite **Napravi**.
   Novo područje postaje trenutačno. Statusna traka kaže „Nove oznake idu u (naziv). Oznake u drugim područjima ponude su zatamnjene.“

## Izvođenje u područje

Dok je područje ponude odabrano na popisu, svaka nova oznaka ide u njega: dionice, površine, krugovi, brojanja, oznake koje dodaje {{ui:Autobrojanje}} i ono što zalijepite. Oznake u drugim područjima ponude i oznake ni u jednom prikazuju se zatamnjeno na listu, da vidite što pripada gdje.

Odaberite **Nema područja ponude** na popisu da izvodite bez njega; tada se ništa ne zatamnjuje.

:::tip
Tipične etaže: izvedite Razinu 2, odaberite njezine oznake ({{key:Mod+A}} na listu), kopirajte ih, odaberite Razinu 3 na popisu i zalijepite. Kopije idu u Razinu 3. Kada su etaže iste i ne trebate ih razdvajati, [tipična grupa](topic:typical-groups) umjesto toga broji jednu etažu više puta.
:::

## Premještanje oznaka u drugo područje

Odaberite jednu oznaku ili više njih ({{key:Shift}} + klik, ili {{key:Mod+A}}). Pod **Odabrana oznaka** (ili **Odabrane oznake**) odaberite područje u polju {{ui:Područje ponude}}. Statusna traka kaže „Oznake premještene u Razinu 2: 3.“ Ovo je jedan korak poništavanja.

## Preimenovanje, redoslijed ili brisanje

Odaberite **Upravljaj područjima ponude…** na popisu. Prepišite naziv da ga preimenujete, koristite strelice za promjenu redoslijeda (tablice i radna knjiga ga prate) ili obrišite jedno kantom za smeće. Brisanje područja ponude zadržava njegove oznake: one tada nisu ni u jednom području ponude. {{key:Mod+Z}} poništava svaku promjenu.

## Čitanje količina po području

U tablici {{ui:Količine}} odaberite {{ui:Po području}} (prikazuje se kada izvedba ima područje ponude). Svako područje navodi stavke koje sadrži, s njihovom količinom, jedinicom i ukupnim iznosom, zatim redak međuzbroja. Oznake ni u jednom području dolaze na kraju, kao **Nema područja ponude**. Kliknite redak stavke da je istaknete i da to područje postane trenutačno.

Sklopovi se izračunavaju za svako područje iz vlastitih ukupnih vrijednosti tog područja. Formula koja zaokružuje naviše, poput `ceil(L / 4)`, može tada dati nešto više zajedno u područjima nego za cijeli posao, kao što bi i na ponudi kalkuliranoj po područjima.

## Alternative: osnovna ponuda plus dodaci i odbici

Područje ponude može biti **alternativa**: radovi koje vlasnik može dodati ponudi ili izvaditi iz nje. U **Upravljaj područjima ponude…** svako područje ima popis pored svog naziva:

| Izbor | Što radi |
|---|---|
| {{ui:Osnovna ponuda}} | U ponudi, kao i obično. |
| {{ui:Alternativa za dodatak}} | Cijeni se zasebno i **izostavlja se iz osnovne ponude**: nadogradnja tepiha, dodatna nadstrešnica. |
| {{ui:Alternativa za odbitak}} | U osnovnoj ponudi, i nudi se kao odbitak: „obrišite nadstrešnicu“. |

Izvedite radove alternative u njezino područje ponude kao i bilo koje drugo područje. Kada izvedba ima alternativu:

- Zaglavlje tablice {{ui:Količine}} kaže **Osnovna ponuda** umjesto {{ui:Ukupno za posao}}: cijela izvedba bez alternativa za dodatak.
- {{ui:Po području}} završava osnovnom ponudom i jednim retkom po alternativi: **+$300.00** za dodatak, **−$1,050.00** za odbitak.
- Alternativa cijeni samo stavke koje imaju oznake u njoj, s njihovim sklopovima, pa dio sklopa druge stavke ne ulazi nepozvan.

U izvozima CSV završava osnovnom ponudom i alternativama, a radna knjiga dobiva radni list **Alternative**: osnovnu ponudu, stavke svake alternative i njezinu promjenu te osnovnu ponudu sa svim alternativama za dodatak uzetim u obzir.

## U izvozu

{{ui:XLSX}} dodaje radni list **Po području ponude**: stavke i komponente svakog područja s količinom, količinom s gubitkom, materijalom, radom i ukupnim iznosom, međuzbroj po području (formula `SUM`) i **Sva područja ponude** na kraju. Radni list **Oznake** dobiva stupac **Područje ponude**. Izvedba bez područja ponude izvozi se kao i prije. Vidi [Stupci izvoza](topic:export-columns).

Područja ponude spremaju se u datoteku projekta zajedno s oznakama.
