---
title: "Raspored ureda: grupisanje, međuzbirovi, naslov i zaglavlja iz vaših zadanih pravila"
summary: Uključite dodatak Zadana pravila i procjena, količine po listu, izvozi i ono što čita asistent preuzimaju raspored vašeg ureda, isti onaj koji koriste specifikacije u programu BimCraft.
keywords: standard ureda, raspored ureda, zadana pravila, dodatak, raspored specifikacije, grupiši po tipu, grupiši po listu, međuzbir, zbirovi, naslov, zaglavlja, velika slova, raspored predračuna, raspored izvoza, postavke
from: cfd2f30a
---

## Šta ćete uraditi

Neka TakeoffCraft slaže svoje tabele onako kako ih vaš ured izdaje, bez postavljanja u svakom predmjeru. Raspored se postavlja jednom, u Zadanim pravilima, i vrijedi za svaku aplikaciju na ovom računaru: ono što postavite u programu BimCraft ili CadCraft koristi i TakeoffCraft, i obrnuto.

## Koraci

1. Otvorite **Postavke › Dodaci** i uključite **Zadana pravila**. Isključeno je dok to ne uradite; ako je isključeno ili ništa nije podešeno, TakeoffCraft je kao i ranije.
2. Otvorite **Postavke › Opšte › Zadana pravila** i pronađite **Raspored specifikacije (standard ureda)**:

| Pravilo | Šta radi u programu TakeoffCraft |
|---|---|
| Grupiši specifikacije po | **Tip** grupiše procjenu po tipu stavke (Linearno, Površina, Brojanje, Tipizirana količina). **Nivo** grupiše količine po listu, prema njegovom listu. **Prostorija** i **Bez grupisanja** ne grupišu ni jedno ni drugo |
| Međuzbirovi u specifikacijama | **Međuzbir ispod svake grupe i ukupno** dodaje međuzbir ispod svake grupe. Ukupan zbir posla uvijek ostaje |
| Naslov specifikacije | Red iznad tabele, na primjer `{schedule}: office layout` |
| Zaglavlja kolona | Kako je napisano, VELIKIM SLOVIMA ili Sa Velikim Slovima |

3. Zatvorite Postavke. Tabele se odmah prilagođavaju.

## Šta preuzima raspored

- **Količine › Po stavci** i **Po listu**: naslovi grupa, međuzbir ispod svake grupe, naslov i velika slova zaglavlja. Red ispod naslova kaže koje dijelove je vaš standard postavio. Redovi su isti: i dalje u njih upisujete stope i otpad, i klikom na brojke birate njihove oznake. Komponenta ili drugi uslov ostaje ispod svoje stavke.
- **Izvezena procjena** (CSV i XLSX): iste grupe i međuzbirovi. U radnoj knjizi međuzbir je formula `SUBTOTAL` nad svojom grupom, a i ukupan zbir je takva formula, tako da se ništa ne broji dvaput.
- **Ono što čita asistent**: `takeoff_estimate` i `takeoff_quantities` (po listu) dodaju blok `layout` sa grupama, redovima i međuzbirovima, i kažu koje dijelove je ured postavio.

## Šta zadržava svoje

- **Količine › Po području** navodi svoje grupisanje (po području ponude) i zadržava ga.
- **Ukupan zbir posla**, označavanja sažetka ponude i alternative se ne grupišu ponovo.
- Grupisanje za koje tabela nema kolonu se izostavlja: procjena nema nivo, a količine po listu nemaju tip.

## Dobro je znati

- Zadana pravila se čuvaju u ovom pregledniku za svaku CadCraft aplikaciju i putuju u datoteci Zadanih pravila (**Sačuvaj u datoteku** / **Učitaj iz datoteke** na istom mjestu), tako da ured može dijeliti jednu datoteku.
- Procjena izvezena kao CSV sa grupama služi za čitanje. Da biste procjenu vratili kao biblioteku cijena, izvezite je bez postavljenog grupisanja.
- Standard za BimCraft je istog oblika: specifikacije, postavke i izvozi. TakeoffCraft još nema svoja pravila, pa nema odjeljka Zadana pravila pod Postavke › TakeoffCraft.
