---
title: Innebygd karbon og en 5D-prisliste
summary: Karbon legger sammen den innebygde karbonen i mengdeuttaket fra hver posts mengde og en åpen faktortabell, og sender mengdeuttakets satser til BimCraft som en prisliste for 5D-kostnader.
keywords: karbon, innebygd karbon, kgco2e, co2, faktorer, a1-a3, transport, svinn, 5d, prisliste, kostnad, bimcraft, epd
from: f4bff3b8
---

{{ui:Karbon}} på verktøylinjen legger sammen den innebygde karbonen i det du har målt, og gjør satsene dine om til en prisliste som bygningsmodellen kan bruke. Det er et anslag, ikke en vurdering.

## Innebygd karbon

Hver posts mengde, med svinn, ganges med en rad i faktortabellen. En rad matches med ordene i postens navn («betongdekke» finner en rad med nøkkelordet betong). Tabellen er den samme åpne tabellen som BimCraft bruker, så en fil du laster inn her, fungerer der også. **Radene som følger med programmet, er startverdier: generiske, ikke kontrollerte og ikke hentet fra noen database.** Dialogen sier det ved siden av tallene; bytt dem ut med din egen kilde før du stoler på et tall.

1. Velg {{ui:Karbon}}. De telte postene listes med sine kg CO2e; totalen står over.
2. Kryss av {{ui:A4 transport}} eller {{ui:A5 byggeplassavfall}} for å telle med disse trinnene også, for radene som gir et tall for dem. Produktfasen telles alltid.
3. For å bruke en annen rad for en post, eller ingen, bruker du listen på dens linje.
4. {{ui:Faktorer fra en fil…}} laster inn en faktortabell (JSON eller CSV) laget fra din egen kilde; radene erstatter startradene med samme id. {{ui:Faktorer (JSON)}} lagrer din.

En faktor er per meter, kvadratmeter, kubikkmeter, post eller kilo. En linje målt i fot eller kvadratfot blir konvertert. En faktor i kilo trenger et volum (kubikkyard eller kubikkmeter) og radens tetthet. En post der faktoren trenger en mengde den ikke måler, listes under {{ui:Utelatt}} med årsaken, og den gjettes aldri. Den løpende totalen i statuslinjen viser det samme tallet.

Dine faktorrader, dine valg og trinnene du teller med, lagres i mengdeuttakets fil.

## En prisliste for 5D-kostnader

{{ui:5D-priser (JSON)}} og {{ui:5D-priser (CSV)}} lagrer mengdeuttakets satser som en prisliste: én rad per prisatt post, med materiell- og arbeidssats per enhet og dens svinn. Last den inn i BimCraft-kostnadspanelet (Innebygd karbon og 5D-kostnad) for å prise bygningsmodellens oppgaver med de samme satsene som laget tilbudet. Poster målt i en enhet som tabellen ikke har, og poster uten sats, utelates.

## Med assistenten din

Hvis du tillater assistenter i {{ui:Innstillinger}}, kan de lese karbonen (carbon_check). Å laste inn faktorer gjør du selv.

## Godt å vite

Ingenting sendes noe sted. Tallene er bare så gode som faktorene du laster inn.
