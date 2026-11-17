---
title: Kontroleer voorraad en leeftye van verskaffers
summary: Voeg 'n verskaffer se voorraadlys (CSV of sigblad) by en TakeoffCraft kontroleer wat die hoeveelheidsopname benodig, met afval, daarteen: genoeg in voorraad, en hoe lank die wag is. Tekorte en lang wagte verskyn in die Probleme-paneel.
keywords: verskaffer, voorraad, in voorraad, leeftyd, beskikbaarheid, tekort, agterorder, bestellys, csv, sku, verkoper, materiale, voorsiening, probleme
from: f11160fb
---

{{ui:Voorraad}} op die nutsbalk (die vragwa) kontroleer wat jou hoeveelheidsopname benodig teen 'n verskaffer se voorraadlys. Die verskaffer se rye wat saak maak, word in die hoeveelheidsopname se eie lêer bewaar. Niks word êrens gestuur nie en niks vra 'n verskaffer nie: jy bring die lêer.

## Die lêer

'n CSV-lêer met 'n kopskrif. Dit benodig 'n naam- of SKU-kolom en 'n voorraad- of leeftyd-kolom. Hierdie kopskrifte word herken (enige volgorde, hoofletters of kleinletters): Item, Name, Description of Product; SKU, Part of Item #; In stock, On hand, Available of Quantity; Lead time of Delivery days; Unit of UOM; Price of Cost; Supplier of Vendor.

- Voorraad kan 'n getal wees (1,200), "In stock" of "Out of stock".
- 'n Leeftyd kan "5 days", "2 weeks", "2-3 weeks" (die langer een word gebruik), "3 months", "same day" of "backorder" wees. 'n Blote getal is in die kopskrif se eenheid (dae, tensy die kopskrif weeks of months sê).
- Excel-lêers word nie gelees nie: stoor die blad eers as CSV.

## Kontroleer die hoeveelheidsopname

1. Kies {{ui:Voorraad}}, dan {{ui:Voeg 'n verskafferlêer by…}} en kies die CSV. Voeg meer as een by: tot vyf lêers, 2,000 rye in totaal behou, met dié wat by jou items pas eerste.
2. Elke item, tweede voorwaarde en samestellingsdeel met 'n hoeveelheid word by naam, of by SKU in sy naam, aan 'n ry gepaar. 'n Soortgelyke naam (een binne die ander) word gebruik wanneer daar geen presiese een is nie, en dit sê so.
3. Onder {{ui:Wat die hoeveelheidsopname benodig}}, kom die kort een eerste: "Kort met 120 EA", "Leeftyd 21 dae", "Op agterorder", "Eenheid verskil", "Geen voorraadsyfer nie" of "In voorraad". Die behoefte sluit afval in. 'n Verskaffer se eenheid wat nie dié van die beraming is nie (’n ton teen ’n voet) word gerapporteer en nooit vergelyk nie. Elke ry het {{ui:Kies die item}}, wat na die item spring.
4. Stel {{ui:Langste wag wat gewens word (dae)}} (verstek 14). 'n Item wat nie in voorraad is nie en langer as dit wag, word gemerk, en die opsomming noem die langste wag wat saak maak.
5. {{ui:Bestellys (CSV)}} laai die kort items af met die hoeveelheid wat kort, die verskaffer en die leeftyd. {{ui:Laat uit}} haal 'n behoefte uit die kontrole (dit is 'n ontdoen-stap).

## Sigblad-lêers en die pryse-biblioteek

'n Verskaffer se lys kan 'n Excel-werkboek (.xlsx) sowel as 'n CSV wees: die eerste blad word gelees, met dieselfde kolomname. Formules word nooit uitgevoer nie; die waarde wat die lêer hou, is wat gelees word.

Sodra 'n lêer met pryse bygevoeg is, stel {{ui:Pryse in die biblioteek}} in die dialoog die materiaalprys van elke [Biblioteek](topic:price-library)-inskrywing wat die lêer prys: dieselfde naam, en 'n eenheid wat dieselfde is (of nie gesê nie). Arbeid, afval, hoogte en samestellings bly soos hulle is, en die inskrywing se nota sê uit watter lêer die prys kom. 'n Inskrywing in meter word nie geprys uit 'n lys in voet nie, en een sonder 'n passende naam word met rus gelaat; die statuslyn sê hoeveel vir die eenheid oorgeslaan is. Herprys vanaf die Biblioteek om die nuwe pryse in hierdie hoeveelheidsopname te kry.

## In die Probleme-paneel

'n Tekort is 'n waarskuwing en 'n lang wag is 'n nota, in die gedeelde Probleme-paneel ("Verskaffervoorraad"), so hulle staan saam met elke ander kontrole. Jy kan een met 'n rede aanvaar, en die aanvaarding word in die hoeveelheidsopname gestoor.

## Met jou assistent

As jy assistente in Instellings toelaat, kan hulle die kontrole lees (supply_check). Om 'n verskafferlêer by te voeg, doen jy self.

## Goed om te weet

Voorraadsyfers is net so akkuraat as die lêer wat jy byvoeg. Voeg die lêer weer by om dit te verfris: 'n lêer met dieselfde naam vervang die vroeëre een.
