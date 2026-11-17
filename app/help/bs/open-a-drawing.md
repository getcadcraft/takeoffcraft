---
title: Otvaranje DWG ili DXF crteža
summary: Otvorite datoteku crteža kao listove (prostor modela i svaki raspored), počnite sa razmjerom koju crtež daje, prikazujte ili skrivajte njegove slojeve i uvezite povezane crteže.
keywords: dwg, dxf, cad, crtež, otvaranje crteža, rasporedi, prostor modela, prostor papira, listovi, jedinice, insunits, razmjera pogleda, xref, povezani crtež, slojevi, zamrznuto, bez pdf-a, ispis, bez ispisa
from: d8c3f504
---

TakeoffCraft otvara DWG ili DXF crtež kao što otvara PDF: ne morate ga prethodno ispisati u PDF. Brojanje iz samog crteža je tačno, jer crtež zna šta je svaki objekat. Vidi [Brojanje iz crteža](topic:count-from-a-drawing).

## Otvorite crtež

1. Izaberite {{ui:Open plans}} u grupi {{ui:File}}, ili pritisnite {{key:Mod+O}}.
2. Izaberite DWG ili DXF datoteku. Možete izabrati više njih, i PDF-ove uz njih.
3. Izaberite Otvori.

Možete i prevući datoteke crteža na TakeoffCraft, kao PDF-ove. Ništa se ne otprema: preglednik čita datoteku na vašem računaru.

TakeoffCraft čita DWG od AutoCAD 2000 do 2018 i ASCII DXF od R12 do 2018. Odbija binarni DXF (sačuvajte ga kao ASCII ili kao DWG) i datoteku koja nije ni jedno ni drugo, i kaže zašto. Oštećena datoteka se otvara sa onim što se moglo pročitati, a poruka to kaže; brojanja u njoj mogu biti nepotpuna.

## Listovi

- **Model** je prostor modela crteža.
- **Svaki raspored** (kartica prostora papira) je list, nazvan po svojoj kartici, po redu kartica. Raspored prikazuje model kroz svoje prozore, onako kako se ispisuje.

Zumiranje, pomjeranje, hvatanje za linije crteža, oznake, bilješke, {{ui:Calibrate}} i ostalo rade kao na PDF-u. Listovi crteža se čuvaju u predmjeru po nazivu datoteke i otisku sadržaja, kao i PDF: ponovo otvorite istu datoteku i oznake su na njenim listovima.

## Razmjera

List počinje sa razmjerom koju crtež daje:

- **Raspored** uzima razmjeru svog najvećeg prozora. Razmjera poput 1/2" = 1'-0" imenuje se kao unaprijed zadana koju predstavlja; svaka druga se prikazuje kao "Iz vidnog polja crteža: 1" = 2.5'". Ako raspored ima prozore u drugim razmjerama, najveći postavlja razmjeru lista: ostale provjerite pomoću {{ui:Check}}.
- **Model** uzima jedinice crteža (inči, milimetri, stope…) kao razmjeru: "Jedinice crteža (inči)".
- **Crtež bez jedinica** (crtež nikad nije rekao je li jedinica inč ili milimetar) nema razmjeru: list kaže "Bez razmjere", a mjerenje na njemu je odbijeno, kao na PDF-u bez razmjere. Brojanje ne traži razmjeru. Dajte mu razmjeru pomoću {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} i lista {{ui:Preset}} mijenjaju razmjeru u bilo koje vrijeme i imaju prednost nad onom iz crteža. Lista unaprijed zadanih je isključena na Modelu, koji nema veličinu papira.

## Slojevi

{{ui:Layers}} na traci lista navodi slojeve crteža i koliko objekata svaki ima na ovom listu. Slojevi koje je datoteka isključila ili zamrznula počinju skriveni. Poništite oznaku sloja da ga sakrijete, ili označite skriveni sloj da ga prikažete: list se ponovo crta, a skriveno se izostavlja iz brojanja i iz objekata ponuđenih za {{ui:Measure drawing}}, osim ako tražite da se broje i skriveni slojevi. {{ui:Show all}} prikazuje svaki sloj; {{ui:Back to the file's layers}} poništava vaše promjene. Izbori slojeva pripadaju ovoj sesiji, a ne datoteci predmjera.

## Povezani crteži (xref)

Crtež koji povezuje druge crteže prikazuje ih tamo gdje su umetnuti. TakeoffCraft nalazi povezani crtež među **otvorenim datotekama**, po njegovom nazivu datoteke: otvorite glavni crtež i povezani zajedno (ili jedan za drugim). Dok to ne uradite, statusna traka kaže koliko povezanih crteža nije nađeno, a crtež koji nedostaje se ne prikazuje, i brojanja to kažu.

## Ograničenja

- Objekti koje TakeoffCraft ne može pročitati ili postaviti (proxy objekti, nepoznate klase) navedeni su u prozoru brojanja po tipu; nikad se ne izostavljaju bez riječi.
- Vrlo veliki crteži se crtaju djelimično, a brojanje staje na granici, uz poruku. Za takav crtež otvorite PDF ispis.
- Crtež se crta crno i u svojim bojama, potamnjenim za bijeli papir. Tabele stilova ispisa i dodjele olovaka se ne primjenjuju.
