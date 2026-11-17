---
title: Odpravljanje težav
summary: Simptomi, vzroki in popravki za sporočila in presenečenja, ki jih lahko srečate v TakeoffCraftu, navedeni tako, kot jih program prikaže.
keywords: težave, napake, ne deluje, popravek, pomoč, zavrnjeno, ne meri, brez merila, manjkajoče oznake, izvoz ni uspel, brez povezave, dotik
from: cd319c9b
---

TakeoffCraft večino zavrnitev razloži v vrstici stanja na dnu okna. Poiščite sporočilo spodaj.

## Odpiranje datotek

| Sporočilo ali simptom | Vzrok | Popravek |
|---|---|---|
| Bralnika PDF-jev ni bilo mogoče naložiti. Ponovno naložite stran in poskusite znova. | Bralnik PDF-jev programa se ni naložil, ponavadi zato, ker ste brez povezave, program pa za delo brez povezave ni bil nikoli shranjen. | Vzpostavite povezavo in ponovno naložite stran. Nato izberite {{ui:Shrani za delo brez povezave}} in počakajte na {{ui:Pripravljeno za delo brez povezave}}; glejte [Delo brez povezave](common:offline). |
| (ime) je zaščiten z geslom. Odprite nezaščiteno kopijo. | PDF za odpiranje potrebuje geslo. | Zahtevajte nezaščiteno kopijo ali odstranite geslo v programu za PDF, ki mu zaupate. |
| (ime) ni bilo mogoče prebrati kot PDF (…) | Datoteka je poškodovana ali ni pravi PDF. | Ponovno jo prenesite ali jo znova shranite iz programa, ki jo je ustvaril. |
| (ime) je že odprt. | Isti PDF (enaka vsebina) je odprt. | Nič ni treba storiti. |
| TakeoffCraft odpira PDF-je in projekte .takeoff.json. Preskočeno: … | Druge vrste datotek so bile izpuščene. | Najprej pretvorite risbe v PDF. |
| Ko spustim datoteke, se ne zgodi nič | Datoteke ste spustili zunaj okna brskalnika ali je brskalnik PDF odprl v novem zavihku. | Spustite jih na sam stran TakeoffCraft; okvir "Spustite PDF-je ali .takeoff.json" pokaže, kdaj bo to delovalo. |
| Odpiranje velikega nabora traja | Vsak PDF se prebere v celoti, da se prepozna. | Počakajte, da sporočilo "Odpiranje (ime)…" izgine. Sličice se napolnijo med pomikanjem. |

## Merjenje

| Sporočilo ali simptom | Vzrok | Popravek |
|---|---|---|
| Najprej odprite PDF. | Noben list ni odprt. | Odprite PDF. |
| Ta list še nima merila, zato ga ni mogoče izmeriti. Najprej izberite prednastavljeno merilo ali kalibrirajte (štetje deluje tudi brez tega). | Orodja Linijsko, Površina, Krožnica in Odprtina potrebujejo merilo. | [Nastavite merilo](topic:set-the-scale). |
| Najprej ustvarite linijski element (poimenujte ga pod Postavke), nato kliknite na list. | Ni elementa te vrste. | Izpolnite obrazec {{ui:Nova postavka}}, ki se odpre, in izberite {{ui:Dodaj}}. |
| Najprej izberite postavko za predizmero (podokno Postavke). | Trenutna postavka je bila izbrisana. | Kliknite postavko pod {{ui:Postavke}}. |
| Odsek potrebuje vsaj dve točki. | Končali ste po enem kliku. | Kliknite vsaj dvakrat. |
| Površina potrebuje vsaj tri točke. | Premalo vogalov. | Kliknite vsaj tri vogale. |
| Obris se seka sam s sabo, zato bi bila njegova površina napačna. Narišite ga znova brez sekanja. | Oblika osmice. | Narišite ga kot dve površini ali obkrožite rob po vrsti. |
| Te točke ne oklepajo površine. | Vse točke so na eni črti. | Kliknite vogale, ki oklepajo prostor. |
| Najprej izberite oznako površine (orodje Izberi), nato izberite Odprtino in narišite luknjo znotraj nje. | {{ui:Odprtina}} potrebuje izbrano površino. | Pritisnite {{key:V}}, kliknite površino, nato {{key:X}}. |
| Odprtina mora ležati povsem znotraj površine. | Luknja seka ali zapušča obris. | Narišite luknjo znotraj površine. |
| Odprtine se ne smejo prekrivati. | Dve luknji se prekrivata. | Narišite eno luknjo okoli obeh ali ju ločite. |
| … Točka je bila vrnjena nazaj. | Povlečen vogal bi obris naredil sekajoč ali potisnil luknjo ven. | Povlecite na mesto, ki ohrani veljavno obliko. |
| Kliknite točko na robu kroga, stran od središča. | Drugi klik je bil preblizu središča. | Kliknite dlje. |
| Kliki pomaknejo list namesto dodajanja točk | Kazalec se je med pritisnjenim gumbom premaknil za nekaj pik; to šteje kot vlečenje. | Kliknite brez premikanja, zlasti na sledilni ploščici. |
| Shift ne lovi | Postavljate točko na lok ali rišete krog. | Korak 45° velja samo za ravne odseke. |
| Točke skočijo na bližnjo črto | Lovljenje na črte risbe je vklopljeno. | Približajte, da kliknete med črtami, ali pritisnite {{key:F3}}, da lovljenje izklopite. |
| Ne pojavi se oznaka lovljenja | Lovljenje je izklopljeno, list je skenirana slika ali orodje ne lovi (Štetje, Samodejno štetje, lepljenje). | Pritisnite {{key:F3}}; pri skenu ni črt, na katere bi se lovilo. |
| Dolžina je napačna | Merilo je napačno (pogosto PDF, ki je bil spremenjen v velikosti, s prednastavitvijo). | Uporabite {{ui:Preveri}} na znani koti, nato {{ui:Kalibriraj}}. |

## Merilo

| Sporočilo ali simptom | Vzrok | Popravek |
|---|---|---|
| Izberite dve točki, ki sta dlje narazen. | Točki kalibracije sta skoraj na istem mestu. | Kalibrirajte na daljši koti. |
| Sporočilo v pogovornem oknu za kalibracijo, na primer "Te razdalje ni mogoče prebrati" | Razdalja je v obliki, ki je TakeoffCraft ne zna prebrati. | Glejte [Vnos dolžin, cen in odstotkov](topic:entry-formats). |
| Ta list še nima merila, zato ga ni mogoče preveriti. Kalibrirajte ga ali izberite prednastavitev. | {{ui:Preveri}} na listu brez merila. | Najprej nastavite merilo. |
| Seznam {{ui:Prednastavitev}} je zatemnjen | Noben list ni odprt. | Odprite PDF. |

## Količine in formule

| Sporočilo ali simptom | Vzrok | Popravek |
|---|---|---|
| Nepopolno: … (ni v vsotah) | Napaka v formuli ali oznake na listih brez merila. | Glejte [Preberite količine in oceno](topic:read-quantities#the-incomplete-warning). |
| +(n) brez merila poleg postavke | Nekatere njene oznake so na listih brez merila. | Tem listom dodelite merilo. |
| Napaka v formuli: … | Formule ni mogoče izračunati. | Glejte [Jezik formul](topic:formulas#errors). |
| Ta postavka ima oznake, zato njene vrste ni mogoče spremeniti. | Vrsta je zaklenjena, ko so oznake. | Ustvarite novo postavko druge vrste in z njo znova narišite oznake. |
| Postavka potrebuje ime. | Polje za ime je bilo izpraznjeno. | Vpišite ime. |
| Vpišite znesek, na primer 12.50. / Vpišite odstotek, na primer 10 ali 7.5. | Cene ali odpadka ni bilo mogoče prebrati. | Glejte [Vnos dolžin, cen in odstotkov](topic:entry-formats). |
| Vsota je videti podvojena | Postavka ima lastne cene in sestavne dele, ki nosijo isti strošek. | Nastavite lastne cene postavke na 0, kadar sestavni deli nosijo strošek. |
| Oznake te postavke so na PDF-jih, ki niso odprti. | Kliknili ste postavko, katere vse oznake so na PDF-jih, ki jih niste odprli. | Odprite te PDF-je; njihova imena so navedena pod {{ui:Listi}}. |

## Samodejno štetje

| Sporočilo ali simptom | Vzrok | Popravek |
|---|---|---|
| Ta okvir je premajhen. Narišite ga okoli celotnega simbola. | Okvir je zelo majhen. | Približajte in obkrožite celoten simbol. |
| Ta okvir je skoraj prazen. Narišite ga okoli simbola. | Okvir vsebuje samo papir. | Obkrožite sam simbol. |
| Ni zadetkov. Spustite drsnik {{ui:Ujemanje}} nižje ali obkrožite simbol tesneje. | Nič ni doseglo dovolj visoke ocene. | Obkrožite simbol tesneje ali povlecite drsnik {{ui:Ujemanje}} nižje. |
| Preveč zadetkov, vključno z napačnimi simboli | Podobni simboli so ocenjeni blizu pravega. | Dvignite drsnik {{ui:Ujemanje}} in kliknite napačne okvirje, da jih zavrnete. |
| Zadetki manjkajo na drugih listih | Ti listi simbol risbo prikazujejo v drugi velikosti ali pod kotom, ki ni korak po 90°. | Poiščite na teh listih z okvirjem, narisanim tam, ali preštejte ročno. |
| (n) listov je bilo preveliko za iskanje pri tej velikosti simbola. | List bi bil pri delovni velikosti preveliko. | Obkrožite večji simbol ali na tem listu preštejte ročno. |
| Iskanje ni uspelo: … | Iskanje v ozadju se je ustavilo. | Poskusite znova; če se ponovi, ponovno naložite stran (prej shranite). Brez povezave deluje le, ko vrstica aplikacije prikaže {{ui:Pripravljeno za delo brez povezave}}. |
| Vlečenje riše okvir namesto pomika | Tako deluje {{ui:Samodejno štetje}}. | Držite {{key:Space}} in vlecite ali vlecite s srednjim gumbom. |

## Shranjevanje in izvoz

| Sporočilo ali simptom | Vzrok | Popravek |
|---|---|---|
| Za izvoz še ni nič: ustvarite postavko in jo vzemite v predizmero. | Ni postavk. | Najprej ustvarite postavko. |
| Na odprtih PDF-jih še ni oznak. | {{ui:Označeni PDF}} nima kaj narisati na odprtih PDF-jih. | Odprite PDF-je, ki imajo oznake. |
| Ta PDF je zaščiten z geslom ali šifriran, zato označene kopije ni mogoče zapisati. … | PDF je šifriran. | Namesto tega izvozite {{ui:XLSX}} ali uporabite nešifrirano kopijo PDF-ja (ta potem potrebuje svojo predizmero, ker je drugačna datoteka). |
| Označenega PDF-ja ni bilo mogoče zapisati: … | Pogosto: brez povezave, program pa ni bil shranjen za delo brez povezave, zato manjka zapisovalnik PDF-ja. | Pojdite na splet in znova izberite {{ui:Označeni PDF}}. Da se temu izognete, izberite {{ui:Shrani za delo brez povezave}} in počakajte na {{ui:Pripravljeno za delo brez povezave}}. |
| Prenesen je bil le en označeni PDF | Brskalnik je blokiral več prenosov hkrati. | Dovolite več prenosov za to spletno mesto in izvozite znova. |
| (datoteka) ni projekt TakeoffCraft (ni veljaven JSON). / To ni datoteka projekta TakeoffCraft. | Napačna datoteka ali poškodovana datoteka. | Izberite datoteko `.takeoff.json`. |
| Ta projekt je shranil novejši TakeoffCraft. Odprite ga tam. | Datoteka je iz novejše različice. | Odprite jo v novejši različici. |
| (n) oznak je bilo poškodovanih in izpuščenih. | Del datoteke je bil poškodovan ali urejen ročno. | Ostalo se je odprlo. Narišite manjkajoče oznake znova ali odprite starejšo kopijo. |
| Oznake manjkajo po ponovnem odprtju | PDF-ji niso odprti ali se je eden od njih spremenil. | Glejte [Shranjevanje in ponovno odpiranje predizmere](topic:save-and-reopen#when-a-pdf-has-changed). |
| Brskalnik vpraša "Zapustim stran?" | Obstajajo neshranjene spremembe. | Ostanite in shranite s {{key:Mod+S}}. |

## Tipke in miška

| Simptom | Vzrok | Popravek |
|---|---|---|
| Tipke črk ne naredijo ničesar | Kazalec je v polju (iskanje, urejevalnik postavk, tabela). | Kliknite na list ali s {{key:Tab}} izstopite iz polja. |
| Kolesce povečuje namesto pomikanja | Kolesce vedno povečuje list. | Za pomik povlecite. |
| Celotna stran se je povečala ali pomanjšala | Povečava brskalnika ({{key:Mod+Plus}} ali {{key:Mod+Minus}}). | Pritisnite {{key:Mod+0}}. Povečajte list s kolescem ali samima {{key:Plus}} in {{key:Minus}}. |
| Oznaka je izginila, ko sem pritisnil Backspace | Backspace izbriše izbrano oznako, kadar ne rišete. | {{key:Mod+Z}} jo vrne. |
| Desni klik na Macu ne konča | Klik s Control je prišel kot navaden klik. | Uporabite klik z dvema prstoma, če je sekundarni klik vklopljen, ali pritisnite {{key:Enter}}. |

## Zasloni na dotik

Na zaslonu na dotik:

- **Dotik** postavi točko (ali izbere oznako z {{ui:Izberi}}). Vlečenje z enim prstom pomika.
- **Dva prsta** povečata s stiskanjem okoli točke med njima in pomikata, ko se premikata skupaj. Ko položite drugi prst, prekliče to, kar je začel prvi, zato stiskanje nikoli ne pusti točke.
- **Zaključite** odsek ali obris z **dolgim pritiskom** (desni klik), **dvojnim dotikom** ali {{ui:Končaj}} v vrstici na dnu lista. Ista vrstica ima {{ui:Zadaj}} (vzame zadnjo točko nazaj) in {{ui:Prekliči}}. Površine se zaprejo tudi z dotikom prve točke.
- Prsti imajo večje cilje: točke se lovijo, zaprejo in izberejo z večje razdalje, ročice vogalov pa so večje.

Vnašanje dolžin potrebuje tipkovnico; tipkovnica na zaslonu deluje, ko je polje {{ui:Vnos}} izbrano.

Na tablici tipkovnica ter miška ali sledilna ploščica močno olajšata predizmero.

## Delo brez povezave

| Gumb ali simptom | Vzrok | Popravek |
|---|---|---|
| {{ui:Shranjevanje ni uspelo}} | Nekatere datoteke programa se med shranjevanjem za delo brez povezave niso prenesle. | Preverite povezavo in znova izberite gumb. |
| {{ui:Delo brez povezave ni na voljo}} | Zasebna okna in nekateri upravljani računalniki blokirajo kopije za delo brez povezave. | Uporabite navadno okno ali drug brskalnik. |
| "Shranjevanje…" se nikoli ne začne | Brez povezave ste; shranjevanje potrebuje povezavo. | Shranite na spletu. |
| Program je po posodobitvi zastarel | Kopija za delo brez povezave je iz prejšnjega dne. | Na spletu izberite {{ui:Pripravljeno za delo brez povezave}}, nato {{ui:Shrani znova (pridobi najnovejšo različico)}}. |
| Želite nazaj prostor | Kopija za delo brez povezave je približno 6 MB. | Izberite {{ui:Pripravljeno za delo brez povezave}}, nato {{ui:Odstrani kopijo brez povezave}}. |

Glejte [Delo brez povezave](common:offline).

## Še vedno ne deluje

Ponovno naložite stran, če program neha odzivati. Predizmera se ob ponovnem nalaganju izgubi, razen če ste jo shranili, zato prej shranite s {{key:Mod+S}}, če lahko. Za vprašanja o brskalnikih glejte [Brskalniki in računalniki](common:browsers).
