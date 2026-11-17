---
title: Tuo tunnisteluettelo määrinä
summary: Rakennusmallista viety tunnisteluettelo (CSV) muuttuu määrälaskennan tyypitetyiksi määriksi, yksi jokaista tunnistetta kohden, joten mallin lukumäärät ja pinta-alat ovat mittaamiesi rinnalla.
keywords: tunnisteet, tunnisteluettelo, rakennusmalli, bimcraft, ifc, määrät, csv, luettelo, tuonti, tyypitetty määrä
from: a60c19b6
---

{{ui:Tunnisteet}} työkalurivillä tuo tunnisteluettelon, jonka BimCraft tallensi CSV-tiedostona. Jokaisesta erillisestä tunnisteesta tulee tyypitetty määrä, samaa tyyppiä kuin CivilCraftin leikkaus ja täyttö.

1. Tee BimCraftissa haluamasi tunnisteluettelo ja tallenna se CSV-muodossa.
2. Valitse {{ui:Tunnisteet}} ja valitse tiedosto.
3. Kerro, mikä sarake nimeää rivin ({{ui:Nimeä rivi sarakkeella}}, yleensä tunniste) ja mikä sarake sisältää luvun ({{ui:Määrä sarakkeesta}}). Kun valitset {{ui:Laske rivit}}, jokainen rivi lasketaan yhdeksi.
4. Valitse yksikkö. Millimetreissä oleva pituus muuttuu metreiksi, kun {{ui:Kerro luvulla}} on 0.001.
5. {{ui:Lisää määrät}}.

Rivit, joilla on sama tunniste, lasketaan yhteen. Solu, joka ei ole luku, jätetään pois ja lasketaan yhteenvedossa. Kun tuot saman luettelon uudelleen, jo olemassa olevat määrät päivittyvät eikä niitä lisätä; niiden nimet, hinnat ja hukka säilyvät omiasi.

## Hyvä tietää

Tyypitettyä määrää ei mitata arkilta, joten sillä ei ole merkintöjä. Mitään ei lähetetä minnekään; tiedosto luetaan täällä.
