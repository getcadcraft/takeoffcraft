---
title: "Kancelarijski raspored: grupisanje, međuzbirovi, naslov i zaglavlja iz podrazumevanih politika"
summary: "Uključi dodatak Podrazumevane politike i procena, količine po listu, izvozi i ono što čita asistent preuzimaju raspored tabela tvoje kancelarije, isti kakav preuzimaju specifikacije u programu BimCraft."
keywords: kancelarijski standard, kancelarijski raspored, podrazumevane politike, dodatak, raspored specifikacije, grupiši po tipu, grupiši po listu, međuzbir, zbirovi, naslov, zaglavlja, velika slova, raspored procene, raspored izvoza, podešavanja
from: cfd2f30a
---

## Šta ćeš uraditi

Neka TakeoffCraft slaže svoje tabele onako kako ih tvoja kancelarija izdaje, bez podešavanja u svakom predmeru. Raspored se podešava jednom, u Podrazumevanim politikama, i važi za sve aplikacije na ovom računaru: ono što podesiš u programu BimCraft ili CadCraft koristi TakeoffCraft, i obrnuto.

## Koraci

1. Otvori **Podešavanja › Dodaci** i uključi **Podrazumevane politike**. Podrazumevano je isključeno; dok je isključeno ili bez podešavanja, TakeoffCraft radi kao i ranije.
2. Otvori **Podešavanja › Opšte › Podrazumevane politike** i nađi **Raspored specifikacija (standard kancelarije)**:

| Politika | Šta radi u programu TakeoffCraft |
|---|---|
| Grupiši specifikacije po | **Tip** grupiše procenu po tipu stavke (Dužina, Površina, Brojanje, Tipizovana količina). **Nivo** grupiše količine po listu po njihovom listu. **Prostorija** i **Bez grupisanja** ne grupišu ništa |
| Zbirovi u specifikacijama | **Međuzbir ispod svake grupe i ukupan zbir** dodaje međuzbir ispod svake grupe. Ukupan zbir posla uvek ostaje |
| Naslov specifikacije | Red iznad tabele, na primer `{schedule}: kancelarijski raspored` |
| Zaglavlja kolona | Kako je napisano, VELIKIM SLOVIMA ili Sa Velikim Početnim Slovima |

3. Zatvori Podešavanja. Tabele se odmah prilagode.

## Šta preuzima raspored

- **Količine › Po stavci** i **Po listu**: naslovi grupa, međuzbir ispod svake grupe, naslov i tip zaglavlja. Red ispod naslova kaže koje delove je standard tvoje kancelarije postavio. Redovi su isti redovi: i dalje u njima upisuješ stope i otpad i klikćeš na brojke da izabereš njihove oznake. Komponenta ili drugi uslov ostaje ispod svoje stavke.
- **Izvezena procena** (CSV i XLSX): iste grupe i međuzbirovi. U radnoj svesci međuzbir je formula `SUBTOTAL` nad svojom grupom, a ukupan zbir posla je takođe takva formula, pa se ništa ne broji dvaput.
- **Ono što čita asistent**: `takeoff_estimate` i `takeoff_quantities` (po listu) dodaju blok `layout` sa grupama, redovima i međuzbirovima i kažu koje delove je kancelarija postavila.

## Šta zadržava svoje

- **Količine › Po površini** navode sopstveno grupisanje (po površini ponude) i zadržavaju ga.
- **Ukupan zbir posla**, oznake u rezimeu ponude i alternative se ne grupišu ponovo.
- Grupisanje za koje tabela nema kolonu se izostavlja: procena nema nivo, a količine po listu nemaju tip.

## Dobro je znati

- Politike se čuvaju u ovom pregledaču za sve CadCraft aplikacije i putuju u datoteci Podrazumevanih politika (**Sačuvaj u datoteku** / **Učitaj iz datoteke** na istom mestu), pa kancelarija deli jednu datoteku.
- Procena izvezena kao CSV sa grupama služi za čitanje. Da je vratiš kao cenovnik, izvezi je bez postavljenog grupisanja.
- BimCraft-ova strana istog standarda: specifikacije, postavke i izvozi. TakeoffCraft još nema svoje politike, pa ne postoji odeljak Podrazumevane politike pod Podešavanja › TakeoffCraft.
