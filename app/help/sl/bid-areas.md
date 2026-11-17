---
title: Območja ponudbe
summary: Označite oznake po stavbi, etaži ali fazi, predizmerite v eno območje naenkrat in preberite količine ter stroške za vsako območje.
keywords: dodaj alternativo, odbij alternativo, osnovna ponudba, alternative, območje ponudbe, območje, stavba, etaža, nivo, faza, cona, alternativa, razčlenitev, razdelitev, tipična etaža, vmesna vsota, po območjih
from: 64f3d41c
---

Območje ponudbe je del projekta, ki ga cenite samostojno: stavba, etaža, faza, krilo. Vsaka oznaka je lahko v enem območju ponudbe. Količine in ocena se nato lahko preberejo za vsako območje, z vmesno vsoto za vsako, skupni znesek projekta pa ostane vsota vsega.

## Ustvarite območje ponudbe

1. Na vrhu podokna {{ui:Postavke}} odprite seznam {{ui:Območje ponudbe}}.
2. Izberite **Novo območje ponudbe…**, vpišite ime, na primer „Stavba A“ ali „Etaža 2“, in izberite **Ustvari**.
   Novo območje postane trenutno. Vrstica stanja pove: „Nove oznake gredo v (ime). Oznake v drugih območjih ponudbe so zatemnjene.“

## Predizmerite v območje

Ko je območje ponudbe izbrano v seznamu, vsaka nova oznaka gre vanj: odseki, površine, krogi, štetja, oznake, ki jih doda {{ui:Samodejno štetje}}, in to, kar prilepite. Oznake v drugih območjih ponudbe in oznake brez območja so na listu zatemnjene, da vidite, kam kaj spada.

Izberite **Brez območja ponudbe** v seznamu, če želite predizmerati brez območja; takrat nič ni zatemnjeno.

:::tip
Tipične etaže: predizmerite Etažo 2, izberite njene oznake ({{key:Mod+A}} na listu), jih kopirajte, v seznamu izberite Etažo 3 in prilepite. Kopije gredo v Etažo 3. Kadar so etaže enake in jih ne potrebujete ločeno, [tipična skupina](topic:typical-groups) šteje eno etažo večkrat.
:::

## Premaknite oznake v drugo območje

Izberite eno oznako ali več ({{key:Shift}} + klik ali {{key:Mod+A}}). Pod **Izbrana oznaka** (ali **Izbrane oznake**) izberite območje v polju {{ui:Območje ponudbe}}. Vrstica stanja pove: „Premaknjenih oznak: 3 v Etažo 2.“ To je en korak razveljavitve.

## Preimenujte, razvrstite ali izbrišite

Izberite **Upravljanje območij ponudbe…** v seznamu. Prepišite ime, da ga preimenujete, s puščicama spremenite vrstni red (tabele in delovni zvezek ga upoštevajo) ali izbrišite enega z gumbom koša. Brisanje območja ponudbe ohrani njegove oznake: nato so brez območja ponudbe. {{key:Mod+Z}} razveljavi vsako spremembo.

## Preberite količine po območjih

V tabeli {{ui:Količine}} izberite {{ui:Po območjih}} (prikaže se, ko ima predizmera območje ponudbe). Vsako območje navede postavke, ki jih vsebuje, z njihovo količino, enoto in skupnim zneskom, nato vrstico vmesne vsote. Oznake brez območja so zadnje, kot **Brez območja ponudbe**. Kliknite vrstico postavke, da jo označite in naredite to območje trenutno.

Sestavi se za vsako območje izračunajo iz skupnih vrednosti tega območja. Formula, ki zaokroži navzgor, na primer `ceil(L / 4)`, lahko v območjih skupaj da nekaj več kot za celoten projekt, kot bi se to zgodilo pri ponudbi, ocenjeni po območjih.

## Alternative: osnovna ponudba plus dodatki in odbitki

Območje ponudbe je lahko **alternativa**: delo, ki ga naročnik lahko doda ponudbi ali iz nje vzame. V **Upravljanje območij ponudbe…** ima vsako območje seznam ob svojem imenu:

| Izbira | Kaj naredi |
|---|---|
| {{ui:Osnovna ponudba}} | V ponudbi, kot običajno. |
| {{ui:Alternativa: dodatek}} | Ocenjena samostojno in **izpuščena iz osnovne ponudbe**: nadgradnja preproge, dodatna nadstrešnica. |
| {{ui:Alternativa: odbitek}} | V osnovni ponudbi in ponujena kot odbitek: „izbrišite nadstrešnico“. |

Predizmerite delo alternative v njeno območje ponudbe kot katero koli drugo območje. Ko ima predizmera alternativo:

- Glava tabele {{ui:Količine}} pravi **Osnovna ponudba** namesto Skupaj posel: celotna predizmera brez dodatnih alternativ.
- {{ui:Po območjih}} se konča z osnovno ponudbo in eno vrstico na alternativo: **+$300.00** za dodatek, **−$1,050.00** za odbitek.
- Alternativa oceni samo postavke, ki imajo oznake v njej, z njihovimi sestavi, tako da se sestavni del druge postavke ne prikrade vmes.

V izvozu CSV se konča z osnovno ponudbo in alternativami, delovni zvezek pa dobi delovni list **Alternative**: osnovna ponudba, postavke vsake alternative in njena sprememba ter osnovna ponudba brez vseh dodatnih alternativ.

## V izvozu

{{ui:XLSX}} doda delovni list **Po območjih ponudbe**: postavke in komponente vsakega območja s količino, količino z odpadkom, materialom, delom in skupnim zneskom, vmesno vsoto za vsako območje (formula `SUM`) in **Vsa območja ponudbe** na koncu. Delovni list **Oznake** dobi stolpec **Območje ponudbe**. Predizmera brez območij ponudbe se izvozi kot prej. Glejte [Stolpci izvoza](topic:export-columns).

Območja ponudbe so shranjena v projektni datoteki skupaj z oznakami.
