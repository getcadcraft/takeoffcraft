---
title: "Raspored ureda: grupiranje, međuzbrojevi, naslov i naslovi stupaca iz vaših zadanih pravila"
summary: "Uključite dodatak Zadana pravila i procjena, količine po listu, izvozi i ono što pomoćnik čita preuzimaju raspored ureda, isti koji preuzimaju specifikacije u BimCraftu."
keywords: "standard ureda, raspored ureda, zadana pravila, dodatak, raspored specifikacije, grupiraj po vrsti, grupiraj po listu, međuzbroj, ukupno, naslov, naslovi stupaca, velika slova, raspored procjene, raspored izvoza, postavke"
from: cfd2f30a
---

## Što ćete napraviti

Neka TakeoffCraft slaže svoje tablice onako kako ih vaš ured izdaje, bez postavljanja u svakom predmjeru. Raspored se postavlja jednom, u **Zadana pravila**, i vrijedi za sve aplikacije na ovom računalu: što postavite u BimCraftu ili CadCraftu, TakeoffCraft koristi, i obrnuto.

## Koraci

1. Otvorite **Postavke › Dodaci** i uključite **Zadana pravila**. Isključeno je dok to ne učinite; ako je isključeno ili ništa nije postavljeno, TakeoffCraft je kao i prije.
2. Otvorite **Postavke › Globalno › Zadana pravila** i pronađite **Raspored specifikacija (standard ureda)**:

| Pravilo | Što radi u TakeoffCraftu |
|---|---|
| Grupiraj specifikacije po | **Vrsta** grupira procjenu po vrsti stavke (Linearno, Površina, Brojanje, Tipizirana količina). **Etaža** grupira količine po listu prema njihovom listu. **Prostorija** i **Bez grupiranja** ostavljaju oboje negrupirano |
| Međuzbrojevi u specifikacijama | **Međuzbroj ispod svake grupe i ukupno** dodaje međuzbroj ispod svake grupe. Ukupni zbroj posla uvijek ostaje |
| Naslov specifikacije | Redak iznad tablice, na primjer `{schedule}: office layout` |
| Naslovi stupaca | Kako su napisani, VELIKIM SLOVIMA ili S velikim početnim slovima |

3. Zatvorite Postavke. Tablice se odmah prilagode.

## Što preuzima raspored

- **Količine › Po stavci** i **Po listu**: naslovi grupa, međuzbroj ispod svake grupe, naslov i velika i mala slova naslova. Redak pod naslovom kaže koje su dijelove vaš standard ureda postavio. Redci su isti: i dalje upisujete stope i gubitak u njih te klikom na brojke birate njihove oznake. Sastavni dio ili drugi uvjet ostaje ispod svoje stavke.
- **Izvezena procjena** (CSV i XLSX): iste grupe i međuzbrojevi. U radnoj knjizi međuzbroj je formula `SUBTOTAL` nad svojom grupom, a ukupni zbroj posla također je takva formula, pa se ništa ne broji dvaput.
- **Što čita pomoćnik**: `takeoff_estimate` i `takeoff_quantities` (po listu) dodaju blok `layout` s grupama, redcima i međuzbrojevima te kažu koje je dijelove ured postavio.

## Što zadržava svoje

- **Količine › Po području** navodi vlastito grupiranje (po području ponude) i zadržava ga.
- **Ukupni zbroj posla**, oznake sažetka ponude i alternative se ne grupiraju ponovno.
- Grupiranje za koje tablica nema stupac se izostavlja: procjena nema etažu, a količine po listu nemaju vrstu.

## Dobro je znati

- Pravila se čuvaju u ovom pregledniku za svaku CadCraft aplikaciju i putuju u datoteci Zadana pravila (**Spremi u datoteku** / **Učitaj iz datoteke** na istom mjestu), pa ured dijeli jednu datoteku.
- Procjena izvezena kao CSV s grupama služi za čitanje. Da je vratite kao knjižnicu cijena, izvezite je bez postavljenog grupiranja.
- Strana istog standarda u BimCraftu: specifikacije, postavke i izvozi. TakeoffCraft još nema vlastita pravila, pa nema odjeljka Zadana pravila pod Postavke › TakeoffCraft.
