---
title: Shranjevanje in ponovno odpiranje predizmere
summary: Shranite predizmero kot projektno datoteko .takeoff.json, jo znova odprite z istimi PDF-ji in poglejte, kaj se zgodi, če PDF manjka ali je spremenjen.
keywords: predizmera v PDF-ju, vdelava, priloga, shranjevanje, odpiranje, ponovno odpiranje, projekt, takeoff.json, nadaljevanje, popravljen PDF, spremenjen PDF, manjkajoč PDF, varnostna kopija, samodejno shranjevanje, obnovitev, zrušitev
from: bd5080a6
---

Predizmera se shrani kot majhna projektna datoteka `(ime).takeoff.json`. Hrani vaše postavke, sestave, cene, merilo vsakega lista in vsako oznako. **Ne** hrani PDF-jev; te najde znova po njihovi vsebini.

## Shranjevanje

1. Izberite {{ui:Shrani predizmere}} v skupini {{ui:Datoteka}} ali pritisnite {{key:Mod+S}}.
   Brskalnik prenese `(ime).takeoff.json`. Vrstica stanja pove: „Shranjeno (ime).takeoff.json. Znova se odpre na istih PDF-jih (ujemajo se po vsebini).“
2. Premaknite datoteko k PDF-jem projekta, da ostaneta skupaj.

Vsako shranjevanje prenese novo datoteko. Brskalnik lahko drugo poimenuje `(ime) (1).takeoff.json`; obdržite najnovejšo.

Ime se vzame iz prvega PDF-ja, ki ste ga odprli v tej predizmeri.

:::note
Shrani predizmere je še vedno edini način, da predizmero ohranite kot datoteko. Med delom TakeoffCraft v tem brskalniku hrani tudi obnovitveno kopijo (glejte spodaj), oblačno shranjevanje pa še ni na voljo. Če poskusite zapreti zavihek z neshranjenimi spremembami, brskalnik vpraša, ali želite oditi.
:::

## Predizmera znotraj PDF-ja

{{ui:Izvoz}} › {{ui:PDF s predizmerami znotraj}} prenese kopijo vsakega odprtega PDF-ja, imenovano `Plans (with takeoff).pdf`, ki nosi celotno predizmero kot prilogo: postavke, oznake, merila, območja ponudb, vse, kar hrani `.takeoff.json`. Njene strani so nedotaknjene, zato izgledajo in se tiskajo kot izvirnik, drugi bralniki PDF pa predizmero navedejo med prilogami.

Odprite ta PDF v TakeoffCraft (na kakršenkoli način odpirate PDF-je) in program vpraša **Ta PDF ima predizmero znotraj**: izberite {{ui:Odpri predizmere}}, da jo dobite nazaj, ali {{ui:Samo PDF}}, da odprete samo risbo. Kopija predstavlja PDF, iz katerega je nastala, zato se `.takeoff.json`, shranjen iz katere koli od njiju, odpre na obeh.

Pri več PDF-jih vsaka kopija nosi celotno predizmero; odprite jih skupaj. Ponovno shranjevanje iz kopije nadomesti predizmero v njej, ne doda druge. `.takeoff.json` je še vedno datoteka, ki jo je treba obdržati: je majhna in jo zapisujeta samodejno shranjevanje ter namizna aplikacija.

## Če se zavihek ali brskalnik ustavi

Nekaj sekund po vsaki spremembi TakeoffCraft hrani kopijo predizmere v lastnem shranjevalnem prostoru tega brskalnika, skupaj z njenimi PDF-ji, kadar seštejejo do 64 MB ali manj. Nič se ne naloži v splet. Ko predizmero shranite, začnete novo ali odprete drug projekt, kopija izgine.

Če se zavihek zruši, se brskalnik ali računalnik ustavi ali zapustite program z neshranjenimi spremembami, vas TakeoffCraft ob naslednjem odprtju vpraša **Obnovite svoje delo?** in navede predizmero po imenu. Izberite **Obnovi**, da jo dobite nazaj: postavke, oznake in merila se vrnejo, njeni PDF-ji pa se znova odprejo, če so bili shranjeni. Vrstica stanja pove: „Obnovljeno (ime). Še ni shranjeno v datoteko; Shrani predizmere jo ohrani.“ Če PDF-jev zaradi velikosti niso shranili, jih znova odprite; oznake se prikažejo na njihovih listih. Več: [Obnovite svoje delo](common:recover).

## Ponovno odpiranje

1. Odprite TakeoffCraft.
2. Povlecite datoteko `.takeoff.json` in njene PDF-je skupaj na stran. Lahko pa izberete {{ui:Odpri načrte}} za PDF-je in {{ui:Odpri predizmere}} za projekt, v katerem koli vrstnem redu.
   Vrstica stanja pove: „Odprto (ime): 12 postavk, 340 oznak.“ Vsak list dobi nazaj svoje merilo, oznake pa se prikažejo na listih.

Vrstni red PDF-jev ni pomemben, prav tako ne njihova imena datotek ali mape. TakeoffCraft prepozna vsak PDF po prstnem odtisu njegove vsebine.

Če odprete projekt, medtem ko ima trenutna predizmera neshranjene spremembe, vas TakeoffCraft najprej vpraša: **Prekliči**, **Zavrzi spremembe** ali **Najprej shrani predizmere**. Odprtje projekta nadomesti trenutne postavke in oznake; PDF-ji, ki so že odprti, ostanejo odprti.

## Če manjka PDF

Če projekt odprete brez vseh njegovih PDF-jev, vrstica stanja doda „Odprite njegove PDF-je, da vidite oznake (navedeno pod Listi).“ Pod seznamom listov opomba pravi:

„Ta predizmera zajema tudi PDF-je, ki niso odprti. Njihove količine se štejejo; odprite jih, da vidite in urejate njihove oznake:“

Sledijo imena datotek in velikosti. Njihove oznake se še vedno štejejo v vseh seštevkih in izvozih, z merili, pri katerih so bile izmerjene. Odprite te PDF-je, da vidite in urejate oznake.

## Če se PDF spremeni

PDF, ki je bil popravljen ali ga je drug program znova shranil, ima drugačno vsebino, zato je za TakeoffCraft **druga datoteka**, tudi če ima isto ime. V opombi pod seznamom listov tak PDF pove: „datoteka s tem imenom je odprta, vendar se njena vsebina razlikuje“.

- Oznake ostanejo pripete na staro različico. Še naprej se štejejo na starih položajih in merilih.
- Popravljen PDF se odpre kot novi listi brez merila in brez oznak.

Če želite predizmero prenesti na popravek, odprite oba PDF-ja in na novem listu uporabite {{ui:Primerjaj}}: [Primerjava popravljenega lista in prenos predizmere](topic:compare-revisions).

## Poškodovana ali tuja datoteka

TakeoffCraft preveri vsako projektno datoteko, preden jo uporabi. Sporočila, ki jih lahko vidite:

- „(datoteka) ni projekt TakeoffCraft (ni veljaven JSON).“
- „To ni projektna datoteka TakeoffCraft.“
- „Ta projekt je shranil novejši TakeoffCraft. Odprite ga tam.“
- „3 oznake so bile poškodovane in izpuščene.“ (ostalo se odpre)

## Zgodovina razveljavitev

Zgodovina razveljavitev se začne znova, ko odprete projekt. Shranjevanje je ne izbriše.
