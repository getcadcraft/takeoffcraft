---
title: Otvori DWG ili DXF crtež
summary: Otvori datoteku crteža kao listove (prostor modela i svaki raspored), počni sa razmerom koju crtež daje, prikaži ili sakrij njegove slojeve i uvezi povezane crteže.
keywords: dwg, dxf, cad, crtež, otvori crtež, rasporedi, prostor modela, prostor papira, listovi, jedinice, insunits, razmera prozora pogleda, xref, povezani crtež, slojevi, zamrznut, bez pdf-a, štampa, bez štampanja
from: d8c3f504
---

TakeoffCraft otvara DWG ili DXF crtež kao što otvara PDF: ne moraš ga prvo štampati u PDF. Brojanje direktno iz crteža je tačno, jer crtež zna šta je svaki objekat. Pogledaj [Brojanje iz crteža](topic:count-from-a-drawing).

## Otvori crtež

1. Izaberi {{ui:Otvori planove}} u grupi {{ui:Datoteka}} ili pritisni {{key:Mod+O}}.
2. Izaberi DWG ili DXF datoteku. Možeš izabrati više, i PDF-ove uz njih.
3. Izaberi Otvori.

Možeš i prevući datoteke crteža na TakeoffCraft, kao PDF-ove. Ništa se ne otprema: pregledač čita datoteku na tvom računaru.

TakeoffCraft čita DWG od AutoCAD 2000 do 2018 i ASCII DXF od R12 do 2018. Odbija binarni DXF (sačuvaj ga kao ASCII ili kao DWG) i datoteku koja nije ni jedno ni drugo, i kaže zašto. Oštećena datoteka se otvara sa onim što je moglo da se pročita, a poruka to kaže; njena brojanja mogu biti nepotpuna.

## Listovi

- **Model** je prostor modela crteža.
- **Svaki raspored** (kartica prostora papira) je list, nazvan po svojoj kartici, u redosledu kartica. Raspored prikazuje model kroz svoje prozore pogleda, kako se štampa.

Zumiranje, pomeranje, hvatanje za sopstvene linije crteža, oznake, beleške, {{ui:Kalibriši}} i ostalo rade kao na PDF-u. Listovi crteža se čuvaju u predmeru po nazivu datoteke i otisku sadržaja, kao PDF: otvori istu datoteku ponovo i oznake su na njenim listovima.

## Razmera

List počinje sa razmerom koju crtež daje:

- **Raspored** uzima razmeru svog najvećeg prozora pogleda. Razmera kao 1/2" = 1'-0" imenuje se kao unapred podešena koju predstavlja; svaka druga se prikazuje kao „Iz prozora pogleda crteža: 1" = 2.5'". Ako raspored ima prozore pogleda u drugim razmerama, najveći određuje razmeru lista: ostale proveri sa {{ui:Proveri}}.
- **Model** uzima jedinice crteža (inči, milimetri, stope…) kao razmeru: „Jedinice crteža (inči)".
- **Crtež bez jedinica** (crtež nikad nije rekao da li je jedinica inč ili milimetar) nema razmeru: list kaže „Bez razmere", a merenje na njemu se odbija, kao na PDF-u bez razmere. Brojanje ne traži razmeru. Daj mu je sa {{ui:Kalibriši}}.

{{ui:Kalibriši}}, {{ui:Proveri}} i lista {{ui:Unapred podešeno}} menjaju razmeru u bilo kom trenutku i imaju prednost nad razmerom crteža. Lista unapred podešenih je isključena na Modelu, koji nema veličinu papira.

## Slojevi

{{ui:Slojevi}} na traci lista navodi slojeve crteža i koliko objekata ima svaki na ovom listu. Slojevi koje je datoteka isključila ili zamrznula počinju sakriveni. Odznači sloj da ga sakriješ, ili označi sakriven da ga prikažeš: list se ponovo crta, a sakriveno se izostavlja iz brojanja i iz objekata ponuđenih za {{ui:Izmeri crtež}}, osim ako zatražiš da se sakriveni slojevi broje. {{ui:Prikaži sve}} prikazuje svaki sloj; {{ui:Vrati na slojeve iz datoteke}} poništava tvoje izmene. Izbor slojeva važi za ovu sesiju, a ne za datoteku predmera.

## Povezani crteži (xref)

Crtež koji povezuje druge crteže prikazuje ih tamo gde su umetnuti. TakeoffCraft nalazi povezani crtež među **otvorenim datotekama**, po nazivu datoteke: otvori glavni crtež i njegov povezani crtež zajedno (ili jedan za drugim). Dotle statusna traka kaže koliko povezanih crteža nije nađeno i da im nedostaje ono što bi trebalo da crtaju, a brojanja to navode.

## Ograničenja

- Objekti koje TakeoffCraft ne može da pročita ili postavi (proxy objekti, nepoznate klase) navode se u prozoru brojanja po vrsti; nikad se ne izostavljaju bez reči.
- Vrlo veliki crteži se crtaju delimično, a brojanja staju na granici, uz poruku. Otvori PDF štampu takvog crteža.
- Crtež se crta crno i u svojim bojama, potamnjenim za beli papir. Tabele stilova štampe i dodele olovaka se ne primenjuju.
