---
title: Ustvarjanje postavk predizmer
summary: Ustvarite linijske, površinske in števne postavke ter nastavite njihovo enoto, višino ali globino, odpadek ter stopnje za material in delo.
keywords: ekipa, stopnja proizvodnje, velikost ekipe, plača, ure, človeške ure, delovne ure, dnevi ekipe, postavka, nova postavka, pogoj, več pogojev, tudi meri, več vrst, soba, linijsko, površina, štetje, enota, višina, globina, odpadek, material, delo, stopnja, barva, strošek
from: 7fa5effc
---

**Postavka** je ena stvar, ki jo merite in obračunate: tip stene, talna obloga, strop, vrata, svetilka. Vsaka oznaka, ki jo narišete, pripada postavki. Drugje se temu pravi pogoji.

Vsaka postavka ima vrsto (in lahko sprejme tudi druge vrste oznak, glejte [Ena postavka, več vrst oznak](topic:create-items#one-item-several-kinds-of-marks)):

| Vrsta | Narišete | Poroča | Enote |
|---|---|---|---|
| Linijsko | Odseke povezanih točk | Dolžino, število odsekov in površino sten, če ima višino | LF ali m |
| Površina | Zaprte obrise z odprtinami | Površino, obseg, število površin | SF, SY, SQ, ac, ha ali m² |
| Štetje | En klik na vsak kos | Koliko jih je | EA |
| Vnesena količina | Nič: količino vnesete | Število, ki ste ga vnesli (ali tisto, preneseno iz CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ali m² |

## Vnesene količine (brez risbe)

Nekatere stvari v predračunu se nikoli ne narišejo: mobilizacija, dovoljenja, rezerva, pavšalna podizvajalska pogodba, izkop in nasip, ki ju je izračunal CivilCraft. Naredite jih za **Vneseno količino**:

1. Izberite {{ui:Nova postavka}}, vpišite ime, izberite {{ui:Vnesena količina (brez risbe)}} in izberite {{ui:Dodaj}}.
2. V urejevalniku postavke izberite {{ui:Enota}} (LS za pavšal) in vpišite {{ui:Količina}}: `1`, `2.5` ali `1,250`.
3. Odpadek in stopnje nastavite enako kot pri vsaki drugi postavki. Formule sestava uporabljajo `Q`, količino, na primer `ceil(Q / 12)` tovornih prevozov.

Vnesena količina ne zahteva oznak in nikoli ne naredi predračuna nepopolnega. Če ima predizmera območja ponudbe, ima urejevalnik tudi {{ui:Območje ponudbe}}: količina se takrat šteje v tem območju, njegovih alternativah in skupnih vsotah, enako kot oznaka tam. Količine, prenesene iz drugih aplikacij, navedejo, od kod prihajajo; glejte [Zemeljska dela in višinske kote](topic:earthwork#cut-and-fill-from-civilcraft).

## Ustvarjanje postavke

1. V desnem podoknu {{ui:Postavke}} izberite {{ui:Nova postavka}}.
2. Vpišite ime, na primer `Notranja stena, tip A` ali `Talna preproga`.
3. Izberite vrsto: {{ui:Linijsko (dolžina)}}, {{ui:Površina}} ali {{ui:Štetje}}.
4. Izberite {{ui:Dodaj}} (ali pritisnite {{key:Enter}}).
   Postavka se prikaže na seznamu s svojo barvo, postane postavka, s katero rišete, njen urejevalnik pa se odpre pod seznamom. Vrstica stanja pove, katero orodje izberete naslednje.

V obrazcu pritisnite {{key:Esc}}, da ga zaprete brez dodajanja postavke.

:::tip
Če najprej izberete orodje za merjenje, TakeoffCraft uporabi zadnjo postavko ustrezne vrste ali odpre obrazec {{ui:Nova postavka}} z že izbrano vrsto.
:::

## Izbira postavke, s katero rišete

Kliknite postavko na seznamu. Postane postavka, kateri pripadajo nove oznake, njene oznake pa so na vseh listih poudarjene, druge pa zbledijo. Če odprti list nima nobene njene oznake, TakeoffCraft preskoči na list, ki jo ima. Ponovno kliknite postavko, da poudarjanje ustavite; ostane postavka, s katero rišete.

Klik na oznako z orodjem {{ui:Izberi}} prav tako naredi njeno postavko trenutno.

## Nastavitev postavke

Urejevalnik postavke (**Postavka: (ime)**) ima ta polja. Vsako se shrani, ko zapustite polje ali pritisnete {{key:Enter}}, in vsako spremembo je mogoče razveljaviti.

| Polje | Kaj stori |
|---|---|
| {{ui:Name}} | Prikazano na seznamu, v preglednicah in izvozih. |
| {{ui:Type}} | Linijsko, Površina ali Štetje. Zaklenjeno, ko ima postavka oznake („Postavka z oznakami ohrani svojo vrsto“). |
| {{ui:Color}} | Barva njenih oznak na zaslonu in v označenem PDF-ju. |
| {{ui:Unit}} | V kateri enoti je količina prikazana: LF ali m za linijsko; SF, SY, SQ, ac, ha ali m² za površino; EA za štetje. |
| {{ui:Also measure}} | Druge vrste oznak, ki jih postavka sprejme, vsaka s svojo enoto. Glejte spodaj. |
| {{ui:Height}} (linijsko) | Višina stene. Postavka nato poroča tudi površino stene (dolžina × višina). Odseki, prišli iz modela BimCraft, nosijo svoja vrata in okna: ta se enkrat odštejejo, postavka pa navede bruto površino, odprtine in neto. Predizmera iz projekta BimCraft, ki je izbral metodo merjenja, se tudi tukaj meri s to metodo (opomba jo navede z njenim virom in pove, da količinski inženir ni preveril; metode v TakeoffCraft ni mogoče spremeniti). Opeke ali bloki in malta iz tipa stene pridejo kot dve komponenti: enote za naročilo in prostornina malte. |
| {{ui:Depth}} (površina) | Globina ali debelina, uporabljena v formulah sestava (na primer prostornina betona). |
| {{ui:Waste %}} | Prišteje se h količini pred cenjenjem: 10 pomeni količina × 1.10. |
| {{ui:Material $/LF}} | Strošek materiala na enoto. Oznaka sledi enoti: $/SF, $/EA in tako naprej. |
| {{ui:Labor $/LF}} | Strošek dela na enoto. |
| {{ui:CSI number}} | Njena številka CSI MasterFormat, na primer `09 21 16` (ali samo oddelek, `09`). Delovni list po oddelkih združuje stroške po njej. Postavke iz [paketov strok](topic:trade-packs) jo že imajo. |

Višina in globina sprejmeta čevlje in palce (`9'-0"`, `8' 6"`) ali decimalne čevlje (`9`) za imperialne enote ter metre (`2.7`, `2700 mm`) za metrske enote. Stopnje sprejmejo zneske, kot so `12.50` ali `$1,250`, do štirih decimalk. Glejte [Vnos dolžine, stopnje in odstotka](topic:entry-formats).

Pod polji **Izmerjeno** so vsote, ki jih lahko uporabijo formule postavke, s svojimi črkami: Dolžina (L), Odseki (N), Površina sten (A) za linijsko; Površina (A), Obseg (P), Površine (N) za površino; Štetje (N) za štetje.

## Ena postavka, več vrst oznak

Nekatere stvari se merijo na več načinov: prostor ima tla (površino), podnožnico ob stenah (dolžino) in vrata (število). Namesto treh postavk naredite eno:

1. Naredite postavko z njeno glavno vrsto, na primer površinsko postavko `Soba 101`.
2. Pod {{ui:Izmeri tudi}} v njenem urejevalniku obkljukajte {{ui:Linijsko}}, {{ui:Štetje}} ali oboje. Vsaka dobi enoto ob sebi.
3. Rišete lahko s katerim koli orodjem, katerega vrsta postavka sprejme: z izbrano `Soba 101` {{ui:Površina}} nariše njena tla, {{ui:Linijsko}} njeno podnožnico in {{ui:Štetje}} njena vrata. TakeoffCraft ne sprašuje po drugi postavki.

Seznam postavk prikaže vsako količino (`50.00 SF + 2 EA`). V preglednici količin ima vrstica postavke glavno količino, vsaka druga vrsta pa svojo vrstico pod njo, na primer **Soba 101 (štetje)**, s svojim odpadkom ter stopnjami za material in delo. Izvozi, preglednica po listih in legenda označenega PDF-ja jih navajajo na enak način.

Polja glavne vrste ostanejo lastna polja te vrste: višina ali globina, nagib, odbitki in 3D oblika veljajo samo za njene oznake. Podnožnica, narisana za površinsko postavko, se meri preprosto vzdolž tlorisa in se v 3D prikaže ravna. Formule sestava uporabljajo vsote glavne vrste.

Vrsta se lahko odznači samo, dokler postavka nima njenih oznak; prej jih izbrišite ali premaknite na drugo postavko pod **Izbrana oznaka**. Oznake se lahko premaknejo na katero koli postavko, ki sprejme njihovo vrsto.

Nižje je {{ui:Sestav}}: komponente, kot so vezi ali deske, vsaka s svojo formulo in stopnjami. Glejte [Sestavi in formule](topic:assemblies).

Na dnu: {{ui:Premakni navzgor}} in {{ui:Premakni navzdol}} spremenita mesto postavke na seznamu in v izvozih, {{ui:Brisanje postavke}} pa jo odstrani z vsemi njenimi oznakami (po vprašanju; razveljavite jo lahko).


Površinske postavke imajo tudi **Nagib** (strešne ravnine, merjene po naklonu: [Strehe in nakloni](topic:roofs-and-slopes)) in **Odbitek** (njihove oznake se odštejejo od površin drugih postavk: [Merjenje površin](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linijske postavke imajo **Naklon** (Vodoravno, Čelo, Slemen ali dolina) in, za čela in slemena, **Nagib**.

## Stopnje v preglednici

Odpadek %, stopnje za material in delo lahko vpišete tudi neposredno v preglednico {{ui:Količine}} spodaj ({{ui:Po postavkah}}). Gre za isto nastavitev kot v urejevalniku.

## Kako deluje cenjenje

Za vsako postavko in vsako komponento sestava:

1. **Z odpadkom** = količina × (1 + odpadek %).
2. **Material** = z odpadkom × material na enoto, zaokroženo na cent.
3. **Delo** = z odpadkom × delo na enoto, zaokroženo na cent.
4. **Skupaj** = material + delo.

{{ui:Skupaj posel}} sešteje vsako postavko in vsako komponento. Postavka lahko hkrati nosi lastne stopnje in sestav; štejeta se obe, zato pustite stopnje postavke na 0, kadar stroške nosijo komponente.

## Delo po ekipi

Namesto stopnje dela na enoto lahko delo postavke izhaja iz ekipe: koliko naredi na uro, koliko je ljudi in koliko zasluži vsak. Pod {{ui:Delo po ekipi}} v urejevalniku postavke obkljukajte {{ui:Cena dela iz ekipe}} in izpolnite:

| Polje | Primer |
|---|---|
| {{ui:Proizvodnja}} | `20` LF na uro (v enoti postavke) za celotno ekipo |
| {{ui:Velikost ekipe}} | `2` osebi |
| {{ui:Plača $/uro za vsakega}} | `45` |

TakeoffCraft izračuna iz količine z odpadkom:

- **ure ekipe** = količina ÷ proizvodnja (110 LF ÷ 20 = 5.5),
- **človeške ure** = ure ekipe × velikost ekipe (11),
- **dnevi ekipe** = ure ekipe ÷ 8 (0.69),
- **delo** = človeške ure × plača ($495.00).

Urejevalnik prikaže rezultat in stopnjo, ki iz njega izhaja ($4.50/LF). Lastna stopnja dela postavke je nato samo za branje, v urejevalniku in v preglednici. Glava preglednice {{ui:Količine}} doda človeške ure in dneve ekipe za posel. Izvozi navajajo ure vsake ekipe, v delovnem zvezku pa je celica dela formula na ekipi (`ROUND(F2/20*2*45,2)`). Če želite nazaj na stopnjo na enoto, odznačite polje.

## Postavke v metrskih enotah

Za enoto izberite m (linijsko) ali m² (površina). Količine, višine in vrednosti formul so nato v metrih. Merilo lista je lahko katera koli prednastavitev ali kalibracija; enote in merila so med seboj neodvisni.

## Naprej

- [Merjenje linijskih odsekov](topic:measure-linear)
- [Merjenje površin z odprtinami](topic:measure-areas)
- [Ročno štetje](topic:count-by-hand)
