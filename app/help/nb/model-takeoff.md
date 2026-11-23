---
title: Ta ut mengder fra en bygningsmodell
summary: Åpne arkitektens IFC-modell, se den i 3D, velg vegger, dekker, dører og resten etter type, materiale, layer eller størrelse, og før antall, lengder, arealer og volum inn i mengdeuttaket. En nyere kopi av modellen oppdaterer de samme mengdene.
keywords: modell, mengdeuttak fra modell, 3D-visning, klikk på en del, finn raden, materiale, layer, veggens lag, gipsplate, isolasjon, dørstørrelser, vindusstørrelser, åpningsliste, CSV, 3D, BIM, IFC, RVT, bygningsmodell, mengder, vegger, dekker, dører, vinduer, søyler, rom, etter type, etter nivå, oppdatering, nyere modell, prosjektering
from: 8c4c12c9
---

Det er ikke nødvendig å vente på neste tegningssett. Når arkitekten sender bygningsmodellen, åpne den her og ta mengdene rett fra den. Modellen leses på denne datamaskinen; ingenting sendes noe sted.

## Trinn

1. Velg {{ui:Modell}} på verktøylinjen, og velg modellens `.ifc`-fil, eller åpne den med {{ui:Åpne tegninger}} som enhver annen fil.
2. {{ui:Mengdeuttak fra modell}} åpnes med én rad per kategori og type: vegger etter vegg-type, dekker etter dekketype, dører etter dørtype, og så videre. Hver rad viser antallet og hva kategorien måles i.
3. Sett {{ui:Grupper etter}} til {{ui:Kategori}} for en rask totalsum, eller til {{ui:Kategori, type og nivå}} for å dele hver type på etasje.
4. Fjern haken i radene du ikke vil ha. {{ui:Finn}} innsnevrer listen. Når du fjerner haken i en rad, skjules også delene i 3D-bildet.
5. Gi modellen et {{ui:Modellnavn}} som du beholder for hele jobben, for eksempel prosjektets navn.
6. Velg {{ui:Legg til i mengdeuttaket}}. Hver mengde blir en typet mengde i postlisten. Gi den et navn, sett pris på den og knytt sammensatte poster til den på samme måte som andre poster.

## Se modellen i 3D

{{ui:Vis modellen i 3D}} tegner modellen over tabellen, med én farge for hver rad (fargeruten ved radens navn). Dra for å snu den, hold {{key:Shift}} og dra for å flytte den, bruk hjulet for å zoome, og velg {{ui:Tilpass}} eller {{ui:Tilbakestill}} for å komme tilbake.

- **Klikk på en del** i bildet, så velges raden i tabellen, med alle delene i raden lyst opp og resten blekt. Klikk samme del igjen, og hvis den står i flere rader (en vegg i lagene sine), velges neste rad.
- **Klikk på en rad** i tabellen for å lyse opp delene. Klikk igjen, eller klikk på tomt rom i bildet, for å fjerne markeringen.
- Rom tegnes ikke, fordi volumet til et rom ville skjule bygningen.
- En veldig stor modell beholder bare en boks for noen deler, slik at den får plass i minnet. Panelet sier hvor mange. Tallene endres ikke.

Hvis denne datamaskinen ikke kan tegne 3D, fungerer tabellen som før.

## Grupper etter materiale, layer eller størrelse

{{ui:Grupper etter}} har tre flere valg:

- {{ui:Kategori og materiale}}: en vegg, et dekke eller et tak bygget av lag gir hvert lags materiale sin egen rad, slik at gipsplate, stendere og isolasjon kan prises hver for seg. En del av bygget med ett materiale får raden til materialet, og en del uten materiale havner i en rad som heter «Ingen materiale angitt».
- {{ui:Kategori og layer}}: det samme, med lagets tykkelse i raden («Isolasjon, 100 mm»).
- {{ui:Kategori, type og dør- eller vindusstørrelse}}: dører og vinduer deles etter bredde og høyde (for eksempel 3'-0" × 6'-8" eller 914 × 2,032 mm).

For et lag er arealet selve veggens flate (eller dekkets eller takets plan- eller overflateareal), og volumet er dette arealet ganget med lagets tykkelse. Radens merknad sier hvor mange tall som kom fra et lag. Lagene i én vegg summerer seg til volumet som modellen angir for den.

## Lagre radene eller åpningene som CSV

{{ui:Lagre rader som CSV}} lagrer radene du har merket av, med enhetene i hver overskrift, for et regneark. {{ui:Lagre åpningsliste som CSV}} (bare når modellen har dører eller vinduer) lagrer hver dør og hvert vindu etter type, nivå og størrelse, med antallet.

## Hva som måles

| Kategori | Mengder |
|---|---|
| Vegger | antall, lengde, veggareal (én side, åpninger trukket fra), volum |
| Gulv, dekker, himlinger og andre belegg | antall, planareal, volum |
| Tak | antall, planareal, takflate, volum |
| Fundamenter | antall, planareal, volum |
| Søyler, bjelker og staver | antall, lengde langs stav, volum |
| Rekkverk, rør, kanaler og kabelstrekk | antall, lengde |
| Trapper | antall, volum |
| Rom | antall, gulvareal, volum |
| Dører, vinduer og alt annet | antall |

Der modellens forfatter har angitt en mengde i filen, brukes det tallet. Ellers måles tallet fra elementets form. Hver mengde har en merknad som sier hvilket av disse som ble brukt, og hvor mange elementer som ga et tall.

:::note
Lengden til en vegg målt fra formen går fra ende til ende, så to vegger som overlapper i et hjørne, tar begge med hjørnet. Et volum krever en lukket form: et element der formen ikke er lukket, telles, men gir ikke noe volum. Et buet eller hjørnet veggelement måles som halvparten av alle sine loddrette flater, og merknaden sier det.
:::

## Når en nyere modell kommer

Åpne den nyere filen og skriv inn samme {{ui:Modellnavn}}. Før du legger til noe, sier panelet hvor mange mengder som er nye, hvor mange som er endret og fra hva til hva, og hvilke mengder fra den tidligere kopien som ikke lenger finnes i modellen. Velg {{ui:Legg til i mengdeuttaket}}: de endrede mengdene får de nye tallene, mens navnene, takstene, svinnet og de sammensatte postene dine blir værende. Mengder som er borte fra modellen, beholder de gamle tallene; fjern dem selv hvis prosjekteringen har tatt dem bort.

Type- og nivånavn er det som gjenkjenner en mengde. Hvis arkitekten endrer navnet på en veggtype, kommer den som en ny mengde, og den gamle listes som borte.

## Filer som leses

IFC-filer (IFC2x3, IFC4 og IFC4.3). En IFC-fil med veier, jernbaner eller broer henter fortsatt infrastrukturmengdene sine direkte, som før.

TakeoffCraft leser ikke `.rvt`-filer i denne utgivelsen. Hvis arkitekten jobber i Revit, be om en IFC-eksport av modellen (Fil, Eksporter, IFC) og åpne den.

En modell kan gi opptil 500 mengder om gangen. Hvis det er flere, fjern haken i rader, eller grupper etter kategori.
