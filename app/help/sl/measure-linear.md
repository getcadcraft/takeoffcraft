---
title: Merjenje linijskih odsekov
summary: Jemljite stene, cevi, obrobe in druge dolžine kot odseke, z ravnimi segmenti, loki in lovljenjem na 45 stopinj s tipko Shift.
keywords: linearno, dolžina, odsek, polilinija, stene, lf, linearni čevlji, lok, krivulja, 45 stopinj, ortogonalno, lovljenje, segmenti, dolžina polilinije, odbitek, odprtina, vrata, vrzel, vnos, vpisano, koordinate, razdalja, neposredna razdalja, polarno
from: c669deff
---

Linijska postavka meri dolžino. Vsak odsek je veriga točk: ravni segmenti in loki, kadar vklopite način loka. Postavka lahko ima poljubno število odsekov na poljubnem številu listov.

Preden začnete: list potrebuje merilo ([Nastavite merilo](topic:set-the-scale)), potrebujete pa linijsko postavko ([Ustvarite postavke predizmere](topic:create-items)).

Na vektorskem PDF-ju se vaši kliki prilepijo na lastne črte risbe: konce, sredine in križišča ([Lovljenje na črte risbe](topic:snap-to-the-drawing); {{key:F3}} ga izklopi).

## Narišite odsek

1. Kliknite linijsko postavko pod {{ui:Postavke}}.
2. Izberite {{ui:Linijsko}} v orodni vrstici ali pritisnite {{key:L}}.
3. Kliknite začetek odseka.
4. Kliknite vsak kot vzdolž njega.
   Vrstica stanja prikaže „Dolžina“ (odsek do zdaj, do kazalca) in „segment“ (segment, ki ga rišete), v čevljih in palcih.
5. Končajte odsek: dvakrat kliknite zadnjo točko, pritisnite {{key:Enter}} ali desno kliknite.
   Odsek je narisan v barvi postavke in postane izbrana oznaka. Dolžina postavke v seznamu {{ui:Postavke}} in v tabeli {{ui:Količine}} se poveča.

Orodje ostane na {{ui:Linijsko}}, zato lahko takoj začnete naslednji odsek. Pritisnite {{key:Esc}}, da se vrnete na {{ui:Izberi}}.

Med risanjem:

- {{key:Backspace}} (ali {{key:Delete}}) odstrani zadnjo točko.
- {{key:Esc}} zavrže nedokončan odsek.
- Povlek pomika list, kolesce povečuje, brez dodajanja točk.

:::mac
Na Mac sledilni ploščici je desni klik dvoprstni klik (vklopite sekundarni klik v Sistemskih nastavitvah, pod Sledilna ploščica). TakeoffCraft prebere samo sekundarni gumb, zato se lahko klik s Control vzame kot navaden klik in doda točko. Dvojni klik ali {{key:Enter}} vedno končata.
:::

:::touch
Na zaslonu na dotik se točke postavijo z dotikom, z enim prstom premikate list, z dvema prstoma pa povečujete s ščipanjem. Končajte z dolgim pritiskom, dvojnim dotikom ali z {{ui:Končaj}} v vrstici pod listom ({{ui:Zadaj}} vzame zadnjo točko nazaj). Glejte [Odpravljanje težav](topic:troubleshooting#touch-screens).
:::

## Ravne črte v korakih po 45°

Med postavljanjem točke držite {{key:Shift}}. Segment od zadnje točke se prilepi na najbližjo smer 0°, 45°, 90° ali 135°, pri čemer ohrani dolžino, ki ste jo povlekli vzdolž nje. Vrstica stanja vas opomni: „Shift lovi na 45°“.

V načinu loka to velja za konec loka: tetiva loka gre v korakih po 45° od njegovega začetka. Točka, na katero kliknete na krivulji, se nikoli ne prilepi.

## Loki in ukrivljene stene

1. Med risanjem odseka postavite točko, kjer se krivulja začne.
2. Vklopite način loka: izberite {{ui:Lok}} v orodni vrstici ali pritisnite {{key:R}}. Gumb ostane pritisnjen.
3. Kliknite poljubno točko na krivulji, nekje sredi.
   Vrstica stanja doda „(lok: kliknite, kjer se konča)“, predogled pa se upogne skozi vašo točko.
4. Kliknite, kjer se krivulja konča.
   Lok je dodan. Njegova dolžina je natančna dolžina loka, ne niz kratkih tetiv.
5. Kliknite še eno točko na naslednji krivulji in njen konec, da nadaljujete z loki, ali ponovno pritisnite {{key:R}}, da se vrnete na ravne segmente.

{{key:Backspace}} ali {{key:Esc}} najprej opustita čakajočo točko na krivulji; ponovno pritisnite za odstranitev točk kot običajno.

## Vnesite dolžine in koordinate

Po prvi točki lahko namesto klika vpišete, kam gre naslednja. Vnesite števko, `@` ali `#`: v vrstici stanja se odpre polje {{ui:Vnos}} z vpisanim. Pritisnite {{key:Enter}}, da postavite točko; polje ostane odprto za naslednjo.

| Vnos | Naslednja točka gre |
|---|---|
| `12'6"` | 12'-6" od zadnje točke, proti kazalcu (pokažite smer, nato vpišite dolžino) |
| `12'6"<45` | 12'-6" pod kotom 45°, štetim v nasprotni smeri urnega kazalca od desne strani zaslona (`<90` je navzgor, `<-90` navzdol) |
| `@6',-4'` | 6' desno in 4' navzdol od zadnje točke |
| `6',4'` (ali `#6',4'`) | 6' desno in 4' navzgor od prve točke tega odseka |

Dolžine vpisujete kot povsod v TakeoffCraft ([Oblike vnosa](topic:entry-formats)): `12'-6 1/2"`, `12.5` (čevlji), `30"`, `3.2 m`. „Desno“ in „navzgor“ sta, kakor vidite list, tudi ko je stran PDF obrnjena.

{{key:Enter}} na prazno polje konča odsek, kot {{key:Enter}} na listu; {{key:Esc}} zapre polje in pusti odsek, da teče naprej. Vpisane točke sledijo enakim pravilom kot kliki: odbitki, loki in zapiranje površin delujejo. Isto polje deluje v {{ui:Površina}} in {{ui:Odprtina}}; za središčem kroga vzame polmer.

## Odštejte del odseka

Stena, ki gre mimo vrat ali izložbe, se lahko nariše naravnost čez in še vedno šteje samo steno: segmenti čez odprtino so **odbitki**. Narisani so črtkano in tanko ter se ne štejejo.

Med risanjem:

1. Postavite točko, kjer se odprtina začne.
2. Izberite {{ui:Odbitek}} v orodni vrstici ali pritisnite {{key:E}}. Gumb ostane pritisnjen, vrstica stanja pa pove, da so naslednji segmenti odbitki.
3. Kliknite, kjer se odprtina konča. Segment je narisan črtkano; „Dolžina“ v vrstici stanja ga izpusti.
4. Ponovno pritisnite {{key:E}} in nadaljujte vzdolž stene.

Po risanju izberite odsek. Pod **Izbrana oznaka** ima vsak segment polje {{ui:Odbitek}}: označite ga, da odštejete segment, odznačite, da ga spet štejete. Vsaka sprememba je en korak razveljavitve.

Odsek vedno ohrani vsaj en segment, ki se šteje. Plošča nato prikaže **Odbitki** (odšteta dolžina) in **Narisano** (celoten odsek); **Dolžina**, količina postavke, površina stene in stroški uporabljajo dolžino brez odbitkov. Pogled 3D pregleda pusti vrzel v steni, označeni PDF nariše odbitke črtkano, izvoženi list **Oznake** pa jih našteje.

Premik kota ohrani odbitke. Dodajanje ali odstranjevanje točk (z ponovnim risanjem odseka) začne brez njih.

## Oglejte si podrobnosti odseka

Izberite {{ui:Izberi}} ({{key:V}}) in kliknite odsek. **Izbrana oznaka** na desni prikaže:

- postavko, ki ji pripada (izberite drugo linijsko postavko v seznamu, da premaknete odsek tja),
- list,
- **Dolžino** v čevljih in palcih ter v LF,
- število **Segmentov** in **površino stene**, kadar ima postavka višino,
- dolžino vsakega segmenta, z „(lok)“ za loki, in njegovo polje {{ui:Odbitek}}.

Na listu je vsak segment izbranega odseka označen z dolžino.

## Popravite odsek

- **Premaknite točko**: izberite odsek, nato povlecite enega od njegovih kvadratnih ročajev kotov. Držite {{key:Shift}}, da premaknjeni segment prilepite na korake po 45°. Lok ohrani svojo izboklino.
- **Upognite lok**: izbran odsek prikaže okrogel ročaj na sredini vsakega loka. Povlecite ga: lok gre skozi mesto, kjer ga spustite, zato se bolj ali manj upogne ali upogne v drugo smer. Če ga povlečete na ravno črto med njegovima koncema, postane ravni segment. {{key:Mod+Z}} to razveljavi („Upogni lok“).
- **Izbrišite odsek**: izberite ga in pritisnite {{key:Delete}}, izberite {{ui:Izbriši}} v meniju {{ui:Več}} orodne vrstice ali {{ui:Izbriši oznako}} na plošči.
- **Razveljavitev**: {{key:Mod+Z}}; ponovna uveljavitev z {{key:Mod+Y}}.

Točke v sredini odseka za zdaj ne morete vstaviti. Izbrišite odsek in ga narišite znova.

## Površina stene

Linijski postavki dodajte {{ui:Višina}} (na primer `9'-0"`). Nato prikaže **Površino stene (A)** = dolžina × višina, v SF (ali m² za metrično postavko), površina stene pa gre v stolpec opomb pri izvozu preglednice. Uporabite jo v sestavih za deske, barvo ali izolacijo: glejte [Sestavi in formule](topic:assemblies).
