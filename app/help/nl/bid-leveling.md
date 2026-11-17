---
title: Inschrijvingspakketten en vergelijking
summary: Splits de raming op in pakketten per vakgebied, stuur de omvang van elk pakket naar onderaannemers, vergelijk de inschrijvingen die terugkomen op dezelfde omvang, en gebruik de gekozen inschrijving als prijs van het pakket.
keywords: vergelijking, vergelijken, inschrijvingspakket, onderaannemer, onderaannemersinschrijving, omvang, opvulling, vakgebied, csi-divisie, inschrijvingen vergelijken, laagste inschrijving, inschrijvingsoverzicht, inschrijver, gunning, gekozen inschrijving, inschrijving gebruiken, onderaannemersprijs
from: 856b3088
---

Een hoofdaannemer stuurt de omvang van elk vakgebied naar onderaannemers en vergelijkt wat terugkomt. TakeoffCraft doet beide vanuit de opmeting: open {{ui:Exporteren}} › {{ui:Pakketten en vergelijking…}}.

## Pakketten

Er is één pakket voor elke CSI-divisie die uw posten gebruiken (de eerste twee cijfers van het {{ui:CSI-nummer}} van een post, zie [Opmeetposten aanmaken](topic:create-items)). Posten zonder nummer vormen een eigen pakket. Elk pakket toont zijn posten, op hoeveel bladen hun markeringen staan, en onze eigen kosten ervan (materiaal en arbeid vóór opslagen, uit de basisinschrijving).

Kies {{ui:Omvang-CSV}} om te downloaden wat u naar een onderaannemer stuurt: elke post met zijn CSI-nummer, hoeveelheid, eenheid en de bladen waarop hij staat. Er staan geen prijzen in. Voor materiaalleveranciers bevat de offerteaanvraag van de werkmap de onderdelenlijst (zie [De raming exporteren](topic:export-estimate)).

## De inschrijvingen invoeren

1. Typ in de lege rij onder het pakket de naam van de inschrijver en het bedrag van de inschrijving, en kies {{ui:De inschrijving toevoegen}}.
2. Als een inschrijving een deel van de omvang weglaat, open dan de lijst {{ui:Weggelaten}} ervan en vink die posten aan.
3. Om een naam of bedrag te corrigeren, typt u erover in de tabel; met de knop × verwijdert u een inschrijving.

Elke wijziging is één stap die {{key:Mod+Z}} terugdraait, en de inschrijvingen worden met de opmeting opgeslagen.

## Hoe de inschrijvingen worden gelijkgetrokken

Inschrijvingen dekken zelden dezelfde omvang. Gelijktrekken vult elke weggelaten post aan met een **opvulling** tegen onze eigen kosten ervan, zodat elke inschrijving op het hele pakket wordt vergeleken:

**Gelijkgetrokken = de inschrijving + de opvullingen**

De laagste gelijkgetrokken inschrijving krijgt de markering **Laag**; bij gelijkspel de eerst ingevoerde. **Tegenover onze kosten** is de gelijkgetrokken inschrijving min onze eigen kosten van het pakket: negatief betekent dat zij eronder ligt. Een inschrijving die het laagst lijkt, kan verliezen zodra de ontbrekende omvang is meegeteld.

De werkmap krijgt een werkblad **Vergelijking** met elk pakket dat inschrijvingen heeft: onze raming, elke inschrijving, de opvullingen, het gelijkgetrokken totaal en het verschil, als live formules, en wat elke inschrijving heeft weggelaten.

## Een inschrijving gebruiken als prijs van het pakket

Kies {{ui:Gebruiken}} bij een inschrijving en die wordt de prijs van het hele pakket in uw raming: de eigen prijsstelling van het pakket (de posten, hun aanvullende voorwaarden en samenstellingsonderdelen) valt uit het totaal van de opdracht, de posten blijven staan als hoeveelheden met uw eigen tarieven ter referentie, en één regel, **Gekozen inschrijving**, draagt het bedrag van de inschrijving. Posten die de inschrijving weglaat, blijven op uw eigen kosten, wat het gelijktrekken al als opvulling heeft meegeteld. Kies een andere inschrijving, of kies dezelfde opnieuw om hem terug te nemen; elk is één stap die {{key:Mod+Z}} ongedaan maakt.

In het inschrijvingsoverzicht vormen de onderaannemersinschrijvingen één regel binnen de kosten: algemene kosten, winst en borgstelling worden erbovenop gerekend, net als elke andere kost; omzetbelasting (alleen op materiaal) en loonlastenopslag (op arbeid) niet. Het blad Raming van de werkmap draagt de gekozen inschrijving als eigen rij, en het opslagblok telt die op, met live formules. De materiaallijst laat het materiaal van een gegund pakket weg, omdat de onderaannemer dat levert.

Een pakket binnen het biedgebied van een alternatief wordt niet opnieuw geprijsd: alternatieven en subtotalen van biedgebieden gebruiken nog steeds uw eigen prijzen.

## Inschrijvingen die per e-mail terugkomen

U hoeft de inschrijvingen niet zelf in te typen. {{ui:Voor inschrijving verzenden…}} onder een pakket mailt elke onderaannemer een link naar een pagina waar zij voor elke regel een prijs typen; {{ui:Prijzen ophalen}} haalt wat zij hebben verstuurd in deze tabel. Zie [Een pakket voor inschrijving verzenden](topic:bid-invitations).

:::note
Een inschrijving met de hand invoeren werkt nog steeds, en een met de hand ingevoerde inschrijving en een van de website staan naast elkaar. Inschrijvingen die van de website zijn teruggekomen, zijn gemarkeerd als **web** (of **web, te laat** als zij na de uiterste tijd zijn binnengekomen); hun prijs verandert alleen wanneer de inschrijver een nieuwe versie verstuurt, dus uw eigen wijzigingen erin blijven tot die tijd bestaan.
:::
