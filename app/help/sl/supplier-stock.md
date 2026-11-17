---
title: Preverite zalogo dobavitelja in dobavne roke
summary: Dodajte seznam zalog dobavitelja (CSV ali preglednico) in TakeoffCraft ga primerja s tem, kar predizmere potrebujejo, z odpadkom: dovolj na zalogi in kako dolgo traja čakanje. Pomanjkanja in dolga čakanja se prikažejo v podoknu Težave.
keywords: dobavitelj, zaloga, na zalogi, dobavni rok, razpoložljivost, pomanjkanje, backorder, seznam naročila, csv, sku, prodajalec, materiali, dobava, težave
from: f11160fb
---

{{ui:Dobava}} na orodni vrstici (tovornjak) preveri, kaj predizmera potrebuje, glede na seznam zalog dobavitelja. Vrstice dobavitelja, ki so pomembne, se hranijo v datoteki same predizmere. Ničesar se ne pošilja nikamor in ničesar ne sprašuje dobavitelja: datoteko prinesete vi.

## Datoteka

CSV datoteka z vrstico glave. Potrebuje stolpec z imenom ali SKU in stolpec z zalogo ali dobavnim rokom. Prepoznane so te glave (v poljubnem vrstnem redu in ne glede na velikost črk): Item, Name, Description ali Product; SKU, Part ali Item #; In stock, On hand, Available ali Quantity; Lead time ali Delivery days; Unit ali UOM; Price ali Cost; Supplier ali Vendor.

- Zaloga je lahko število (1,200), "In stock" ali "Out of stock".
- Dobavni rok je lahko "5 days", "2 weeks", "2-3 weeks" (uporabi se daljši), "3 months", "same day" ali "backorder". Golo število velja v enoti glave (dnevi, razen če glava pove tedne ali mesece).
- Datoteke Excel se ne berejo: list najprej shranite kot CSV.

## Preverite predizmero

1. Izberite {{ui:Dobava}}, nato {{ui:Dodaj datoteko dobavitelja…}} in izberite CSV. Dodate lahko več datotek: največ pet, skupno ohranjenih 2.000 vrstic, najprej tiste, ki ustrezajo vašim postavkam.
2. Vsaka postavka, drugi pogoj in sestavni del sestava s količino se ujame z vrstico po imenu ali po SKU v njenem imenu. Podobno ime (eno je v drugem) se uporabi, kadar natančnega ni, in to se pove.
3. Pod {{ui:Kaj predizmere potrebujejo}} so najprej kratki: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" ali "In stock". Potreba vključuje odpadek. Enota dobavitelja, ki ni enaka enoti ocene (tona proti čevlju), se javi in nikoli ne primerja. Vsaka vrstica ima {{ui:Izberi postavko}}, ki skoči na postavko.
4. Nastavite {{ui:Najdaljše želeno čakanje (dni)}} (privzeto 14). Postavka, ki ni na zalogi in čaka dlje, je označena, povzetek pa navede najdaljše čakanje, ki šteje.
5. {{ui:Seznam naročila (CSV)}} prenese kratke postavke z manjkajočo količino, dobaviteljem in dobavnim rokom. {{ui:Izpusti}} vzame potrebo iz preverjanja (to je korak razveljavitve).

## Preglednične datoteke in knjižnica cen

Seznam dobavitelja je lahko delovni zvezek Excel (.xlsx) kot tudi CSV: prebere se prvi list, z enakimi imeni stolpcev. Formule se nikoli ne izvedejo; prebere se vrednost, ki jo datoteka hrani.

Ko dodate datoteko s cenami, {{ui:Cene v knjižnico}} v pogovornem oknu nastavi ceno materiala pri vsakem vnosu [Knjižnice](topic:price-library), ki ga datoteka ceni: isto ime in enota, ki je enaka (ali ni navedena). Delo, odpadek, višina in sestavi ostanejo, kakršni so, opomba vnosa pa pove, iz katere datoteke je cena. Vnos v metrih se ne ceni iz seznama v čevljih, vnos brez ujemajočega imena pa se pusti pri miru; vrstica stanja pove, koliko jih je bilo preskočenih zaradi enote. Ponovno določite cene iz knjižnice, da nove cene pridejo v to predizmero.

## V podoknu Težave

Pomanjkanje je opozorilo, dolgo čakanje pa opomba, v skupnem podoknu Težave ("Zaloga dobavitelja"), tako da sta skupaj z vsemi drugimi preverjanji. Sprejmete lahko eno z razlogom, sprejetje pa se shrani v predizmeri.

## Z vašim pomočnikom

Če v nastavitvah dovolite pomočnike, lahko preberejo preverjanje (supply_check). Dodajanje datoteke dobavitelja je vaša naloga.

## Dobro je vedeti

Podatki o zalogi so le toliko sveži, kot je datoteka, ki jo dodate. Datoteko ponovno dodajte, da jo osvežite: datoteka z istim imenom nadomesti prejšnjo.
