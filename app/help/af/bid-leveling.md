---
title: Tenderpakkette en tenderegalisering
summary: Verdeel die raming in pakkette per ambag, stuur elke pakket se omvang na subkontrakteurs, vergelyk die tenders wat terugkom op dieselfde omvang, en gebruik die gekose tender as die pakket se prys.
keywords: tenderegalisering, egalisering, tenderpakket, subkontrakteur, subtender, omvang, prop, ambag, csi-afdeling, vergelyk tenders, laagste tender, tenderblad, bieder, toekenning, gekose tender, gebruik 'n tender, subkontrakprys
from: 856b3088
---

'n Algemene kontrakteur stuur elke ambag se omvang na subkontrakteurs en vergelyk wat terugkom. TakeoffCraft doen albei uit die hoeveelheidsopname: maak {{ui:Uitvoer}} › {{ui:Tenderpakkette en egalisering…}} oop.

## Pakkette

Daar is een pakket vir elke CSI-afdeling wat jou items gebruik (die eerste twee syfers van 'n item se {{ui:CSI-nommer}}, sien [Skep hoeveelheidsopname-items](topic:create-items)). Items sonder 'n nommer maak 'n eie pakket. Elke pakket wys sy items, hoeveel blaaie hul merke op is, en ons eie koste daarvan (materiaal en arbeid voor opslae, uit die basistender).

Kies {{ui:Omvang-CSV}} om af te laai wat na 'n subkontrakteur gestuur moet word: elke item met sy CSI-nommer, hoeveelheid, eenheid en die blaaie waarop dit is. Dit het geen pryse nie. Vir materiaalverskaffers het die werkboek se kwotasieversoek die onderdeellys (sien [Voer die raming uit](topic:export-estimate)).

## Voer die tenders in

1. In die leë ry onder die pakket, tik die bieder se naam en die bedrag van die tender, en kies dan {{ui:Voeg die tender by}}.
2. As 'n tender 'n deel van die omvang uitlaat, maak sy {{ui:Uitgelate}}-lys oop en merk daardie items.
3. Om 'n naam of bedrag reg te stel, tik oor dit in die tabel; die ×-knoppie verwyder 'n tender.

Elke verandering is een stap wat {{key:Mod+Z}} terugneem, en die tenders word saam met die hoeveelheidsopname gestoor.

## Hoe die tenders gelykgemaak word

Tenders dek selde dieselfde omvang. Egalisering vul elke uitgelate item met 'n **prop** teen ons eie koste daarvoor, sodat elke tender op die hele pakket vergelyk word:

**Gelykgemaak = die tender + die proppe**

Die laagste gelykgemaakte tender word as **Laagste** gemerk; by 'n gelykstand, die een wat eerste ingevoer is. **Teen ons koste** is die gelykgemaakte tender minus ons eie koste van die pakket: negatief beteken onder dit. 'n Tender wat die laagste lyk, kan verloor sodra die ontbrekende omvang getel word.

Die werkboek kry 'n **Tenderegalisering**-blad met elke pakket wat tenders het: ons raming, elke tender, sy proppe, die gelykgemaakte totaal en die verskil, as lewendige formules, en wat elke tender uitgelaat het.

## Gebruik 'n tender as die pakket se prys

Kies {{ui:Gebruik}} op 'n tender en dit word die prys van die hele pakket in jou raming: die pakket se eie prysing (die items, hul tweede voorwaardes en samestellingdele) val uit die projektotaal, die items bly as hoeveelhede met jou eie koerse ter verwysing, en een lyn, **Gekose tender**, dra die tender se bedrag. Items wat die tender uitlaat, bly teen jou eie koste, wat egalisering reeds as die prop getel het. Kies 'n ander tender, of kies dieselfde een weer om dit terug te neem; elk is een stap wat {{key:Mod+Z}} ontdoen.

In die tenderopsomming is die subtenders een lyn binne die koste: algemene uitgawes, wins en borg word bo-op hulle bygevoeg soos enige ander koste; verkoopsbelasting (net op materiaal) en arbeidslas (op arbeid) nie. Die werkboek se Raming-blad dra die gekose tender as sy eie ry, en die opslaeblok tel dit by, met lewendige formules. Die materiaallys laat die materiaal van 'n toegekende pakket uit, omdat die subkontrakteur dit verskaf.

'n Pakket binne 'n alternatief se tenderarea word nie oorgeprys nie: alternatiewe en tenderarea-subtotale gebruik steeds jou eie pryse.

## Tenders wat per e-pos terugkom

Jy hoef nie die tenders in te tik nie. {{ui:Stuur vir tenders…}} onder 'n pakket e-pos elke subkontrakteur 'n skakel na 'n bladsy waar hulle 'n prys vir elke lyn tik; {{ui:Kry pryse}} haal wat hulle gestuur het in hierdie tabel. Sien [Stuur 'n pakket vir tenders](topic:bid-invitations).

:::note
Om 'n tender met die hand in te tik werk steeds, en 'n met die hand ingetikte tender en een van die webwerf staan langs mekaar. Tenders wat van die webwerf teruggekom het, is gemerk **web** (of **web, laat** as hulle na die sperdatum aangekom het); hul prys verander net wanneer die bieder 'n nuwe weergawe stuur, so jou eie wysigings daaraan bly tot dan.
:::
