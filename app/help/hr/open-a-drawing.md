---
title: "Otvorite DWG ili DXF crtež"
summary: "Otvorite datoteku crteža kao listove (prostor modela i svaki layout), započnite s mjerilom koje crtež daje, prikažite ili sakrijte njegove slojeve i uvedite vezane crteže."
keywords: "dwg, dxf, cad, crtež, otvori crtež, layouti, prostor modela, papirni prostor, listovi, jedinice, insunits, mjerilo viewporta, xref, vezani crtež, slojevi, zamrznuti, bez pdf-a, ispis, bez ispisa"
from: d8c3f504
---

TakeoffCraft otvara DWG ili DXF crtež kao što otvara PDF: ne morate ga prije toga ispisati u PDF. Brojanje iz samog crteža je točno, jer crtež zna što je svaki objekt. Vidi [Brojanje iz crteža](topic:count-from-a-drawing).

## Otvorite crtež

1. Odaberite {{ui:Otvori nacrte}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Odaberite DWG ili DXF datoteku. Možete odabrati više, a uz njih i PDF-ove.
3. Odaberite Otvori.

Crteže možete i ispustiti na TakeoffCraft, kao PDF-ove. Ništa se ne učitava na poslužitelj: preglednik čita datoteku na vašem računalu.

TakeoffCraft čita DWG od AutoCAD 2000 do 2018 i ASCII DXF od R12 do 2018. Odbija binarni DXF (spremite ga kao ASCII ili kao DWG) i datoteku koja nije ni jedno ni drugo, i kaže zašto. Oštećena datoteka se otvori s onim što se moglo pročitati, a poruka to kaže; brojke mogu biti nepotpune.

## Listovi

- **Model** je prostor modela crteža.
- **Svaki layout** (kartica papirnog prostora) je list, nazvan po svojoj kartici, po redu kartica. Layout prikazuje model kroz svoje viewporte, kako se ispisuje.

Zumiranje, pomicanje prikaza, hvatanje za linije samog crteža, oznake, bilješke, {{ui:Kalibriraj}} i ostalo rade kao na PDF-u. Listovi crteža spremaju se u predmjer prema nazivu datoteke i otisku sadržaja, kao PDF: ponovno otvorite istu datoteku i oznake su na njezinim listovima.

## Mjerilo

List počinje s mjerilom koje crtež daje:

- **Layout** preuzima mjerilo svog najvećeg viewporta. Mjerilo kao 1/2" = 1'-0" zove se kao predložak koji jest; svako drugo prikazuje se kao „Iz viewporta crteža: 1" = 2.5'“. Ako layout ima viewporte u drugim mjerilima, najveći postavlja mjerilo lista: ostale provjerite s {{ui:Provjeri}}.
- **Model** preuzima jedinice crteža (inči, milimetri, stope…) kao mjerilo: „Jedinice crteža (inči)“.
- **Crtež bez jedinica** (crtež nikad nije rekao je li jedinica inč ili milimetar) nema mjerilo: list kaže „Bez mjerila“, a mjerenje na njemu je odbijeno, kao na PDF-u bez mjerila. Brojanje ne treba mjerilo. Zadajte ga s {{ui:Kalibriraj}}.

{{ui:Kalibriraj}}, {{ui:Provjeri}} i popis {{ui:Predložak}} mijenjaju mjerilo u bilo kojem trenutku i nadjačavaju mjerilo crteža. Popis {{ui:Predložak}} je isključen za Model, koji nema veličinu papira.

## Slojevi

{{ui:Slojevi}} na traci lista navodi slojeve crteža i koliko objekata svaki ima na ovom listu. Slojevi koje je datoteka isključila ili zamrznula počinju skriveni. Odznačite sloj da ga sakrijete ili označite skriveni da ga prikažete: list se ponovno iscrta, a skriveno se ne broji i ne nudi se za {{ui:Mjeri crtež}}, osim ako zatražite da se broje i skriveni slojevi. {{ui:Prikaži sve}} prikazuje svaki sloj; {{ui:Natrag na slojeve iz datoteke}} poništava vaše promjene. Izbor slojeva vrijedi za ovu sesiju, a ne za datoteku predmjera.

## Vezani crteži (Xref)

Crtež koji povezuje druge crteže prikazuje ih tamo gdje su umetnuti. TakeoffCraft pronalazi vezani crtež među **otvorenim datotekama** po nazivu datoteke: otvorite glavni crtež i njegov vezani crtež zajedno (ili jedan za drugim). Dok to ne učinite, statusna traka kaže koliko vezanih crteža nije pronađeno, što nedostaje u njihovom sadržaju, a brojanja to navode.

## Ograničenja

- Objekte koje TakeoffCraft ne može pročitati ili postaviti (proxy objekti, nepoznate klase) navedeni su u prozoru brojanja po vrsti; nikad se ne izostavljaju bez riječi.
- Vrlo veliki crteži crtaju se djelomično, a brojanja staju na ograničenju, uz poruku. Umjesto toga otvorite PDF ispis takvog crteža.
- Crtež se crta crno i u vlastitim bojama, potamnjenim za bijeli papir. Tablice stilova ispisa i dodjele olovaka se ne primjenjuju.
