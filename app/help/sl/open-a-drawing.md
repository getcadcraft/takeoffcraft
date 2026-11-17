---
title: Odprite risbo DWG ali DXF
summary: Odprite datoteko risbe kot liste (prostor modela in vsak list postavitve), začnite z merilom, ki ga da risba, prikažite ali skrijte njene sloje in vključite povezane risbe.
keywords: dwg, dxf, cad, risba, odpri risbo, postavitve, prostor modela, papirni prostor, listi, enote, insunits, merilo pogleda, xref, povezana risba, sloji, zamrznjeno, brez pdf, izris, brez izrisa
from: d8c3f504
---

TakeoffCraft odpre risbo DWG ali DXF enako kot PDF: ni treba je prej izrisati v PDF. Štetje iz same risbe je natančno, ker risba ve, kaj je vsak predmet. Glejte [Štetje iz risbe](topic:count-from-a-drawing).

## Odprite risbo

1. Izberite {{ui:Odpri načrte}} v skupini {{ui:Datoteka}} ali pritisnite {{key:Mod+O}}.
2. Izberite datoteko DWG ali DXF. Izberete lahko več datotek, tudi PDF-je med njimi.
3. Izberite Odpri.

Datoteke risb lahko tudi spustite na TakeoffCraft, tako kot PDF-je. Nič se ne naloži: brskalnik bere datoteko v vašem računalniku.

TakeoffCraft bere DWG od AutoCAD 2000 do 2018 in ASCII DXF od R12 do 2018. Binarne DXF zavrne (shranite jo kot ASCII ali kot DWG) in tudi datoteko, ki ni niti eno niti drugo, ter pove, zakaj. Poškodovana datoteka se odpre z delom, ki ga je bilo mogoče prebrati; sporočilo to pove, njena štetja pa so lahko nepopolna.

## Listi

- **Model** je prostor modela risbe.
- **Vsaka postavitev** (zavihek papirnega prostora) je list, poimenovan po svojem zavihku, v vrstnem redu zavihkov. Postavitev prikaže model prek svojih poglednih oken, tako kot se izriše.

Povečava (zoom), pomik (pan), lovljenje na črte risbe, oznake, opombe, {{ui:Kalibriraj}} in ostalo delujejo kot pri PDF. Listi risbe se shranijo v predizmero po imenu datoteke in prstnem odtisu njene vsebine, kot pri PDF: znova odprite isto datoteko in oznake bodo na njenih listih.

## Merilo

List se začne z merilom, ki ga da risba:

- **Postavitev** vzame merilo svojega največjega pogleda. Merilo, kot je 1/2" = 1'-0", je poimenovano z ustrezno prednastavitvijo; vsako drugo je prikazano kot „Iz pogleda risbe: 1" = 2.5'“. Če ima postavitev poglede pri drugih merilih, največji določi merilo lista: ostale preverite z {{ui:Preveri}}.
- **Model** vzame enote risbe (palce, milimetre, čevlje …) kot merilo: „Enote risbe (palci)“.
- **Risba brez enot** (risba ne pove, ali je enota palec ali milimeter) nima merila: list pove „Ni merila“, merjenje nanj pa je zavrnjeno, kot pri PDF brez merila. Štetje merila ne potrebuje. Dodelite ga z {{ui:Kalibriraj}}.

{{ui:Kalibriraj}}, {{ui:Preveri}} in seznam {{ui:Prednastavitev}} lahko merilo kadar koli spremenijo in imajo prednost pred merilom risbe. Seznam prednastavitev je pri Modelu izklopljen, ker ta nima velikosti papirja.

## Sloji

{{ui:Sloji}} v vrstici listov navede sloje risbe in koliko predmetov ima vsak na tem listu. Sloji, ki jih je datoteka izklopila ali zamrznila, so na začetku skriti. Odkljukajte sloj, da ga skrijete, ali označite skritega, da ga prikažete: list se znova izriše, skriti sloji pa so izpuščeni iz štetij in iz predmetov, ponujenih za {{ui:Meri risbo}}, razen če zahtevate štetje skritih slojev. {{ui:Pokaži vse}} prikaže vse sloje; {{ui:Nazaj na sloje iz datoteke}} razveljavi vaše spremembe. Izbira slojev pripada tej seji, ne datoteki predizmer.

## Povezane risbe (xref)

Risba, ki povezuje druge risbe, jih prikaže tam, kjer so vstavljene. TakeoffCraft najde povezano risbo med **odprtimi datotekami** po imenu datoteke: odprite glavno risbo in povezano risbo skupaj (ali eno za drugo). Dokler ju ne odprete, vrstica stanja pove, koliko povezanih risb ni najdenih; kar bi morale narisati, manjka, štetja pa to povedo.

## Omejitve

- Predmeti, ki jih TakeoffCraft ne more prebrati ali postaviti (posredniški (proxy) predmeti, neznani razredi), so navedeni po vrsti v oknu štetja; nikoli niso brez besede izpuščeni.
- Zelo velike risbe so narisane po delih, štetja pa se ustavijo pri omejitvi in to povedo. Za take risbe raje odprite PDF izris.
- Risba je narisana črno in v svojih barvah, potemnjenih za beli papir. Tabele slogov izrisa in dodelitve peres se ne uporabijo.
