---
title: Kaj še ni izdelano
summary: Funkcije predizmer, ki jih ta različica nima, in kaj lahko danes storite namesto tega.
keywords: omejitve, manjka, še ne, načrt razvoja, načrtovano, obhod, po odseku, oblak, namizje
from: 94ff90d0
---

TakeoffCraft je v razvoju. Ta seznam našteva, česa trenutna različica ne zmore, in kako kljub temu opravite delo.

## Merjenje

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Vstavljanje točke sredi odseka ali obrisa | Izbrišite oznako in jo znova narišite. |
| Izbor z okvirjem (oknom) | {{key:Shift}} + klik na vsako oznako ali {{key:Mod+A}} za vse oznake na listu. Glejte [Kopiranje, lepljenje in podvajanje oznak](topic:copy-paste). |
| Vrtenje, zrcaljenje ali spreminjanje merila prilepljene kopije | Prilepite na list pri istem merilu in v isti orientaciji; ostalo narišite ročno. |
| Branje merila iz skeniranega lista ali iz grafične merilne lestvice | Izberite prednastavitev ali kalibrirajte po dolžini lestvice. |
| Več kot eno merilo na listu (detajli, povečani načrti) | Izmerite del pri merilu lista, detajl pa predizmerite na njegovem povečanem listu, če ga komplet ima. |

## Postavke in cene

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Formule sestavov, ki uporabljajo druge vrste oznak postavke (vrata sobne postavke v formulah njene etaže) | Formule uporabljajo skupne vsote glavne vrste; druge vrste ocenite v lastnih vrsticah. |
| Formule sestavov, izračunane po odsekih | Formule uporabljajo skupne vsote postavke; za dodatke na odsek uporabite `N`. |
| Formule, ki uporabljajo količine druge postavke | Ponovite meritev pri tej postavki ali jo izračunajte v izvozu v preglednico. |
| Ekipe pri komponentah sestavov ali delovni dan, ki ni osem ur | Ekipo dodelite postavki; dneve ekipe pri drugi dolžini dneva preberite kot ure ekipe ÷ vaš delovni dan. |
| Označbe razen opomb, revizijskih oblakov in poudarkov (puščice, kote, žigi) ali odgovori na opombo | Zapišite v besedilo opombe; spremenite njeno stanje, ko je zadeva rešena. |
| Knjižnica cen, deljena med ekipo, ali knjižnica, shranjena z vašim računom | Knjižnica je shranjena v tem brskalniku: izvozite jo kot CSV in jo uvozite v drugem računalniku. |
| Paketi po strokah, pregledani pri delujočih predračunarjih | Vsak paket je izhodišče: preverite njegove predpostavke glede na vaše delo in izdelke, preden po njem določite cene. Glejte [Paketi po strokah](topic:trade-packs). |
| Cene v paketih po strokah | Paketi prinašajo le sestave: nastavite lastne enotne cene ali uvozite svoj cenik kot CSV. |
| Preimenovanje predizmer | Ime pride iz prve datoteke PDF; preimenujte prenesene datoteke. |
| Ročno poimenovanje listov | Listi so poimenovani po oznakah strani v PDF; iščite po imenu datoteke in strani. |

## Risbe (DWG in DXF)

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Tabele slogov izrisa, dodelitve peres in datoteke CTB na listih risbe | Risba je narisana črno ali v svojih barvah, potemnjenih za papir; debeline črt so vzete iz risbe. |
| Odpiranje binarne DXF ali DWG, starejše od AutoCAD 2000 | Shranite jo kot ASCII DXF ali novejšo DWG. |
| Iskanje povezane risbe (xref) po mapi, v kateri je | Odprite tudi datoteko povezane risbe skupaj z glavno risbo: najde se po imenu datoteke med odprtimi datotekami. |
| Merjenje 3D polilinij, mrež, teles in regij | Preštejte jih po sloju in vrsti ali izmerite tloris z orodjema Linearno in Površina. |
| Besedilo v označenem PDF iz risbe v pisavah, ki niso latinične | Znaki, za katere pisava Helvetica nima glifa, se v označenem PDF izpišejo kot "?"; risba na zaslonu ni prizadeta. |
| Predaja risbe drugi aplikaciji iz vrstice listov | Odprite isto datoteko v tisti aplikaciji. |
| Risba, ki ima predizmero znotraj sebe, kot to za PDF-je naredi {{ui:PDF s predizmerami znotraj}} | {{ui:Shrani predizmere}}: datoteka `.takeoff.json` se znova odpre na isti risbi, najde pa se po vsebini. |
| Risanje ali štetje po podlogah PDF, slikah in predmetih OLE, vstavljenih v risbo | Slike so prikazane le kot okvir. Odprite podlogo PDF kot list. |

## Samodejno štetje

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Iskanje simbolov na listu, narisanem v drugi velikosti, kjer ni merila | Določite merilo listu ali ga iščite z okvirjem, narisanim tam. |
| Iskanje zrcalnih simbolov | Preštejte jih ročno ali ponovno iščite z okvirjem okoli zrcalnega simbola. |

## Datoteke in deljenje

| Še ni izdelano | Namesto tega, danes |
|---|---|
| En PDF, ki prikazuje oznake in hkrati nosi predizmero | {{ui:Označeni PDF}} za ogled oznak; {{ui:PDF s predizmerami znotraj}} za ponovno odpiranje v TakeoffCraft. |
| CSV količin po listih ali oznak | Uporabite {{ui:XLSX}}: njegova delovna lista By sheet in Marks ju imata. |
| Shranjevanje v oblak | Še ni na voljo. Datoteke projekta shranjujte v svoj računalnik in jih varnostno kopirajte. |
| Ločena namizna aplikacija TakeoffCraft | Od različice 0.5 je namizna aplikacija CadCraft Studio, z vsemi osmimi aplikacijami v eni namestitvi. TakeoffCraft deluje tudi v brskalniku. |

## Zaslon in vnos

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Meni z desnim klikom (ali dolgim pritiskom) | Uporabite orodno vrstico, podokna in tipke. Dolg pritisk konča odsek ali obris. |
| Vrtenje pogleda | Strani, zasukane v PDF, so že prikazane pokončno. |

## 3D pogled

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Risanje ali urejanje oznak v 3D | Vrnite se na list ({{key:3}}) za risanje; izbor in brisanje delujeta tudi v 3D. |
| Poravnavanje zloženih etaž, izrisanih na različnih mestih na svojih straneh | Zlagajte etaže, izrisane enako; ostale preverjajte po en list naenkrat. |
| Štetje količkov v velikosti štetega predmeta | Vsi količki na listu so enako veliki; označujejo, kje je štetje, ne kaj je. |

## Ponudbe

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Dopolnila k paketu, ki je bil že poslan, pisma o dodelitvi, list obsega, ki ga podpiše vsak ponudnik | Pošljite nov paket in dodelitev napišite sami. [Pošljite paket za ponudbe](topic:bid-invitations) opisuje, kar je izdelano. |
| Pošiljanje povabil k ponudbam iz katerega koli računa: med preizkušanjem je pošta zunanjim ponudnikom izklopljena, razen za račune, ki jih je ekipa CadCraft omogočila | Prenesite {{ui:CSV obsega}}, ga pošljite po e-pošti sami in vpišite ponudbe. |
| Pošiljanje paketov za ponudbe iz okna Studio | Pošljite iz TakeoffCraft v brskalniku. |
| Ponovno določanje cene območja ponudbe alternative z izbrano ponudbo | Alternative in medvsote območij ponudb uporabljajo vaše cene; alternativo prilagodite ročno. |
| Samodejni opomniki pred iztekom zavarovanja ali licence podizvajalca | Datum je označen na strani Podizvajalci, ko je pretekel ali je v 30 dneh; preverite ga, ko vabite. |

## Podokna

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Premikanje tabele {{ui:Količine}} | Premaknete lahko le podokni {{ui:Listi}} in {{ui:Postavke}}. Glejte [Razporeditev podoken](common:arrange-panels). |

## Preglednice

Delovni zvezek XLSX je bil preverjen v LibreOffice Calc, ki je vsak seštevek preračunal na isti cent kot TakeoffCraft. V Excelu še ni bil odprt. Če preglednični program pokaže nekaj nepričakovanega, izvoz CSV vsebuje isto oceno kot navadne vrednosti.
