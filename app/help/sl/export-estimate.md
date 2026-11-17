---
title: Izvoz predračuna in označenega PDF
summary: Prenesite predračun kot delovni zvezek XLSX z živimi formulami ali kot CSV ter kopije vaših PDF z narisano predizmero.
keywords: predlog, povzetek ponudbe, izvoz, xlsx, preglednica, delovni zvezek, csv, označeni pdf, natisni predizmero, poročilo, deli, pošlji, legenda
from: 334f89c7
---

Izvozi so prenosi. Naredijo se na vašem računalniku iz predizmere in odprtih PDF; nič se ne pošlje nikamor.

## Predračun kot preglednica (XLSX)

1. Odprite meni {{ui:Izvoz}} v orodni vrstici in izberite {{ui:XLSX}}.
   Brskalnik prenese `(name).xlsx`. Vrstica stanja izpiše „Izvoženo (name).xlsx (predračun z živimi formulami, po listih, oznakah, merilih).“ in doda opozorilo, kadar je predračun nepopoln.
2. Odprite ga v svojem programu za preglednice.

Delovni zvezek ima štiri delovne liste, poleg njih pa še spodnja poročila, kadar veljajo:

| Delovni list | Vsebina |
|---|---|
| Estimate | Vrstica za vsako postavko in komponento: količina, odpadek, količina z odpadkom, cene, material, delo, skupaj, opombe. Skupna vsota na dnu. |
| By sheet | Količina vsake postavke na vsakem listu s številom oznak. |
| Marks | Vsaka oznaka: list, postavka, vrsta, količina in podrobnosti (dolžine odsekov, bruto in izrezane površine, obseg). |
| Scales | Vsak list z merilom ali oznakami: merilo, kako je bilo nastavljeno (prednastavitev ali kalibrirano na katero razdaljo) in čevlji na enoto PDF. |
| Takeoff summary | Količina vsake postavke, številka CSI, oznake in listi, brez cen. |
| Material list | Vsak sestavni del sestava, seštet po celotni predizmeri (isti del, uporabljen pri več postavkah, je ena vrstica), z odpadkom in stroškom materiala ter postavkami, ki ga uporabljajo. |
| Quote request | Seznam materiala za pošiljanje dobavitelju: količine z odpadkom, prazen stolpec enotnih cen ter razširitve in skupni znesek, ki se izpolnijo, ko vpišete cene. |
| By division | Material, delo in skupaj po razdelku CSI MasterFormat, kadar imajo postavke {{ui:Številka CSI}}. |

S [povzetkom ponudbe](topic:bid-summary) se delovni list Estimate konča tudi z njegovimi dodatki (obremenitev za delo, davek na promet, splošni stroški, dobiček, garancija in ponudba) kot žive formule.

Delovni list Estimate ohrani **žive formule**: količina z odpadkom, zaokroženi zneski materiala in dela, skupaj vsake vrstice in skupna vsota. Preglednični programi jih preračunajo, zato lahko spremenite ceno ali odpadek v preglednici in vsote sledijo. Izračunane številke TakeoffCraft so shranjene tudi v celicah in se ujemajo do centa.

Stolpec opomb navaja formulo vsake komponente, napake v formulah, oznake na listih brez merila, površino sten in obseg. Kadar je kaj izpuščeno, vrstica skupne vsote pravi „Nepopolno: glejte zgornje opombe“.

Delovni zvezek je bil preverjen v LibreOffice Calc, ki ga je preračunal na enake vsote. V Excelu še ni bil odprt. Podrobnosti po stolpcih so v [Izvozni stolpci](topic:export-columns).

## Predračun kot CSV

Odprite meni {{ui:Izvoz}} in izberite {{ui:CSV}}. Dobite `(name).csv`: enake vrstice in stolpce kot delovni list Estimate, kot navadne vrednosti (brez formul), ter skupno vsoto. Uporabite ga za prilepljanje v drug sistem za predračune ali računovodstvo.

CSV ima samo predračun; za količine po listih in seznam oznak uporabite XLSX. {{ui:Seznam materiala}} v istem meniju shrani samo seznam materiala kot CSV za naročanje.

## Predračun v Google Sheets

Nad tabelo {{ui:Količine}} **Kopiraj za Google Sheets** da predračun na odložišče kot besedilo, ločeno s tabulatorji, z enakimi vrsticami kot CSV. V Google Sheet kliknite celico A1 in prilepite. TakeoffCraft se ne prijavi v Google in tja ne pošlje ničesar.

## Manjkajoče cene in podpis predračuna

Vrstica s količino in brez cene v svojih opombah piše **Brez cene**, izvoz pa jih šteje med vsotami. Če je bil predračun odobren, izvoz navede, kdo ga je odobril, kdaj in za kateri znesek. Glejte [Manjkajoče cene in podpis predračuna](topic:sign-off-the-estimate).

## Označeni PDF

1. Odprite PDF, katerih oznake želite narisati.
2. Odprite meni {{ui:Izvoz}} in izberite {{ui:Označeni PDF}}.
   Prikaže se „Zapisovanje označenega PDF…“, nato brskalnik prenese eno datoteko za vsak označeni PDF, poimenovano `(PDF name) (takeoff).pdf`.

V kopiji:

- odseki so narisani kot črte v barvi svoje postavke,
- površine so rahlo zapolnjene z polno obrobo, izrezi pa ostanejo odprti,
- šteti so pike,
- vsaka stran z oznakami dobi majhno legendo v spodnjem levem kotu: barva, ime in količina vsake postavke na tej strani.

Vaši izvirni PDF se ne spremenijo.

Opombe:

- Zapišejo se samo odprti PDF. Oznake na PDF, ki niso odprti, ostanejo v vsotah, vendar niso narisane; najprej odprite te PDF.
- Imena v legendi uporabljajo standardno pisavo PDF. Črke, ki jih ne more prikazati, se natisnejo kot „?“.
- Šifriranega PDF ni mogoče kopirati z oznakami: „Ta PDF je zaščiten z geslom ali šifriran, zato kopije z oznakami ni mogoče zapisati. Predizmera sama je v redu; izvozite raje preglednico.“
- Prvi {{ui:Označeni PDF}} v zavihku naloži pisec PDF. Brez povezave je na voljo samo, če orodna vrstica aplikacije prikazuje {{ui:Pripravljeno za delo brez povezave}}; glejte [Delo brez povezave](common:offline).

:::chromium
Pri več označenih PDF vas Chrome in Edge enkrat vprašata, ali sme to spletno mesto prenesti več datotek. Izberite Dovoli, sicer dobite samo prvo datoteko.
:::

## Ni ničesar za izvoz?

- {{ui:XLSX}} in {{ui:CSV}} potrebujeta vsaj eno postavko: „Za izvoz še ni nič: ustvarite postavko in jo izmerite.“
- {{ui:Označeni PDF}} potrebuje oznake na odprtem PDF: „Na odprtih PDF še ni oznak.“

## Shranite tudi predizmero

Izvoz je poročilo. Če boste na predizmeri delali pozneje, izberite še {{ui:Shrani predizmero}}: glejte [Shranjevanje in ponovno odpiranje predizmere](topic:save-and-reopen).

Za dodajanje splošnih stroškov, dobička, davka in garancije ter pošiljanje ponudbe glejte [Povzetek ponudbe in ponudba](topic:bid-summary).
