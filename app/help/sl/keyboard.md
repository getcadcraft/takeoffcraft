---
title: Tipkovnica in miška
summary: Vsaka tipka, dejanje z miško, sledilno ploščico in dotikom v TakeoffCraft, razvrščeno po skupinah, z razlikami med platformami.
keywords: tipke, bližnjice, bližnjične tipke, tipkovnica, miška, sledilna ploščica, dotik, pomik, povečava, kolesce, desni klik, dvojni klik, presledek, shift, kopiraj, prilepi, izreži, podvoji, izberi vse
from: 6f2c441d
---

Črkovne tipke delujejo, kadar je kazalec kjerkoli na strani in ne vnašate v polje. Ko je odprto pogovorno okno, veljajo njegove tipke. Črke delujejo z {{key:Shift}} ali brez njega.

## Orodja

| Tipka | Orodje |
|---|---|
| {{key:V}} | {{ui:Izberi}} |
| {{key:L}} | {{ui:Linijsko}} |
| {{key:A}} | {{ui:Površina}} |
| {{key:O}} | {{ui:Krožnica}} |
| {{key:B}} | {{ui:Prostor}} (zapolni prostor z enim klikom) |
| {{key:R}} | {{ui:Lok}} vklop ali izklop (pri Linijsko, Površina in Odprtina) |
| {{key:E}} | {{ui:Odbitek}} vklop ali izklop: naslednji segmenti odseka so narisani, vendar se ne štejejo |
| Števka, `@` ali `#` med risanjem | Odpre polje {{ui:Vnos}}: vpišite dolžino ali koordinate, {{key:Enter}} postavi točko ([Merjenje linijskih odsekov](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Odprtina}} (najprej izberite površino) |
| {{key:C}} | {{ui:Štetje}} |
| {{key:S}} | {{ui:Samodejno štetje}} |
| {{key:K}} | {{ui:Kalibriraj}} |
| {{key:D}} | {{ui:Preveri}} merilo |

## Med risanjem

| Tipka ali dejanje | Kaj naredi |
|---|---|
| Klik | Postavi točko (pika, pri Štetje). |
| {{key:P}} | Pot: izberite celotno povezano pot črte PDF ali obris okoli klika ([Izberite črte PDF](topic:pick-the-lines)). |
| {{key:F3}} | Lovljenje na črte risbe vklop ali izklop ([Lovljenje na črte risbe](topic:snap-to-the-drawing)). |
| {{key:Shift}} med klikom | Prilepi segment na 0°, 45°, 90° ali 135° od zadnje točke. Ne velja za točke loka ali kroge. |
| Dvojni klik | Konča odsek ali zapre površino ali odprtino. |
| {{key:Enter}} | Konča odsek ali zapre površino ali odprtino. |
| Desni klik (brez premikanja) | Konča odsek ali zapre površino ali odprtino. |
| Klik na prvo točko | Zapre površino ali odprtino (od tretje točke naprej). |
| {{key:Backspace}} ali {{key:Delete}} | Odstrani zadnjo točko (najprej čakajočo točko loka). |
| {{key:Esc}} | Opusti čakajočo točko loka; nato prekliče nedokončano oznako; nato se vrne na {{ui:Izberi}}. |

## Izbiranje in urejanje

| Tipka ali dejanje | Kaj naredi |
|---|---|
| Klik na oznako (orodje Izberi) | Izberite jo in naredite njeno postavko trenutno. |
| {{key:Shift}} + klik na oznako | Doda jo k izboru ali jo odstrani iz izbora. |
| {{key:Mod+A}} | Izbere vsako oznako na odprtem listu. |
| Povlecite kotni ročaj | Premakne to točko ({{key:Shift}} prilepi na 45°). Deluje, kadar je izbrana ena oznaka. |
| {{key:Delete}} ali {{key:Backspace}} | Izbriše izbrane oznake (kadar ne risate). |
| {{key:Esc}} | Prekliče izbor: počisti izbor in črto preverjanja. |
| {{key:Mod+Z}} | Razveljavi. |
| {{key:Mod+Y}} ali {{key:Mod+Shift+Z}} | Uveljavi. |

## Kopiranje in lepljenje

| Tipka | Kaj naredi |
|---|---|
| {{key:Mod+C}} | Kopira izbrane oznake z njihovimi postavkami. |
| {{key:Mod+X}} | Izreže: kopira izbrane oznake in jih nato izbriše. |
| {{key:Mod+V}} | Prilepi: kopija sledi kazalcu; kliknite, kamor naj gre. |
| {{key:Mod+Shift+V}} | Prilepi na isto mesto: na isto mesto na odprtem listu. |
| {{key:Mod+D}} | Podvoji izbrane oznake: kopija sledi kazalcu; kliknite, kamor naj gre. |
| {{key:Esc}} | Ne položi ničesar: prekliče lepljenje ali podvajanje, ki je na kazalcu. |

Same črke še vedno izbirajo orodja ({{key:C}} je {{ui:Štetje}}, {{key:D}} je {{ui:Preveri}}, {{key:X}} je {{ui:Odprtina}}, {{key:V}} je {{ui:Izberi}}, {{key:A}} je {{ui:Površina}}); samo {{key:Mod}} z njimi kopira in prilepi. V polju za besedilo te tipke kopirajo in prilepijo besedilo kot običajno. Glejte [Kopiranje, lepljenje in podvajanje oznak](topic:copy-paste).

:::warning
{{key:Backspace}} izbriše izbrano oznako, kadar ne risate. Če se to zgodi po naključju, {{key:Mod+Z}} jo povrne.
:::

## Datoteke

| Tipka | Kaj naredi |
|---|---|
| {{key:Mod+O}} | {{ui:Odpri načrte}} |
| {{key:Mod+S}} | {{ui:Shrani predizmere}} |

Ta dva delujeta tudi, ko vnašate v polje.

## Pogled in listi

| Tipka ali dejanje | Kaj naredi |
|---|---|
| Kolesce miške | Povečava in pomanjšava pri kazalcu. |
| Povlek (levi, srednji ali desni gumb) | Pomik. V {{ui:Samodejno štetje}} levi povlek namesto tega nariše iskalno polje. |
| {{key:Space}} držano + povlek | Pomik v katerem koli orodju. |
| {{key:F}} | {{ui:Cela stran}} |
| {{key:W}} | {{ui:Širina}} |
| {{key:Plus}} ali {{key:=}} | Povečava na sredini pogleda. |
| {{key:Minus}} | Pomanjšava na sredini pogleda. |
| {{key:PageDown}} / {{key:PageUp}} | Naslednji ali prejšnji list v seznamu listov. |
| {{key:Ctrl+Shift+F}} | Preklaplja celozaslonske načine (Control na vseh platformah, tudi na Macu). |
| {{key:F1}} | Odpre ali zapre to pomoč, podokno ob strani. |
| {{key:3}} | 3D pregled lista, vklop ali izklop. |

## 3D pogled

| Tipka ali dejanje | Kaj naredi |
|---|---|
| Povlek ali povlek s srednjim gumbom | Vrtenje. |
| {{key:Shift}} + povlek ali povlek z desnim gumbom | Pomik. |
| Kolesce miške | Povečava pri kazalcu. Na sledilni ploščici dvoprstno drsenje vrti, ščip povečuje. |
| Klik | Izbere oznako pod kazalcem ({{key:Shift}} + klik doda ali odstrani). |
| {{key:F}} ali {{key:W}} | Povečava na obseg. |
| {{key:3}} | Nazaj na ravni list. |

Glejte [Preverite predizmero v 3D](topic:check-in-3d).

## Samodejno štetje

| Tipka ali dejanje | Kaj naredi |
|---|---|
| Povlecite okvir | Obkroži simbol za iskanje (začne iskanje). |
| Klik na okvir zadetka | Zavrne ga ali ga obnovi. |
| {{key:Esc}} | Prekliče tekoče iskanje ali zavrže pregled. |

## Pomoč

| Tipka | Kaj naredi |
|---|---|
| {{key:F1}} | Odpre ali zapre podokno pomoči (tudi gumb {{ui:Pomoč}} v vrstici aplikacije). Deluje v vseh orodjih, tudi ko vnašate v polje. |
| {{key:Esc}} | Zapre podokno pomoči. V njegovem iskalnem polju prvi Esc pobriše iskanje. Kadar je podokno odprto, Esc, pritisnjen po kliku na list, najprej zapre podokno; ponovno ga pritisnite, da prekličete v TakeoffCraft. |

:::mac
Na številnih Mac tipkovnicah zgornja vrsta upravlja svetlost in zvok. Pritisnite fn z {{key:F1}} ali vklopite „Uporabi tipke F1, F2 itd. kot standardne funkcijske tipke“ v Sistemskih nastavitvah, pod Tipkovnica.
:::

## Pogovorna okna in polja

| Tipka | Kaj naredi |
|---|---|
| {{key:Enter}} | V polju: uporabi vrednost. V pogovornem oknu za kalibracijo: {{ui:Nastavi merilo}}. |
| {{key:Esc}} | Zapre pogovorno okno (kot {{ui:Prekliči}}); zapre obrazec {{ui:Nova postavka}}. |
| {{key:Tab}} | Premakne se na naslednje polje. |

## Opombe za platforme

:::mac
- {{key:Mod}} je tipka Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Celozaslonski način je izjema: Control+Shift+F.
- Desni klik je dvoprstni klik na sledilni ploščici, ko je sekundarni klik vklopljen v Sistemskih nastavitvah, pod Sledilna ploščica. TakeoffCraft prebere samo sekundarni gumb; klik s Control se lahko šteje kot navaden klik in doda točko.
- Dvoprstno drsenje na sledilni ploščici povečuje list (ne pomika ga). Za pomik pritisnite in povlecite ali držite Space in povlecite.
- Page Up in Page Down sta fn s puščicama gor in dol na tipkovnicah brez njiju.
- Backspace je tipka z oznako delete.
:::

:::windows
- {{key:Mod}} je Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Na sledilni ploščici prenosnika dvoprstno drsenje povečuje list. Za pomik pritisnite in povlecite.
:::

:::linux
- {{key:Mod}} je Ctrl. Nekatera namizja imajo lastne bližnjice Ctrl+Alt ali Super; TakeoffCraft nobene od njih ne uporablja.
- Na sledilni ploščici dvoprstno drsenje povečuje list. Za pomik pritisnite in povlecite.
:::

:::touch
TakeoffCraft bere dotik kot en kazalec:

- Dotik postavi točko, izbere oznako ali doda piko štetja.
- Povlek z enim prstom pomika list (v {{ui:Samodejno štetje}} nariše iskalno polje).
- Ščip za povečavo še ni podprt. Uporabite {{ui:Cela stran}} in {{ui:Širina}} ali {{key:Plus}} in {{key:Minus}} na tipkovnici.
- Za zaprtje površine se dotaknite njene prve točke. Za končanje odseka dvakrat tapnite tam, kjer brskalnik dvojni dotik spremeni v dvojni klik, ali pritisnite {{key:Enter}} na tipkovnici.
- Dolžine v živo ni, dokler se ne dotaknete, ker ni lebdenja s kazalcem.

Za predizmero je danes boljši način tipkovnica in miška ali sledilna ploščica.
:::

## Tipke, ki jih ohrani brskalnik

Brskalniki si nekatere bližnjice pridržijo zase, stran jih ne more uporabiti: zapiranje zavihka ({{key:Mod+W}}), nov zavihek ali okno ({{key:Mod+T}}, {{key:Mod+N}}) in povečava brskalnika ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Zato TakeoffCraft povečuje list s kolescem in s samima tipkama {{key:Plus}} in {{key:Minus}}. Če po pomoti pritisnete {{key:Mod+Plus}}, se celotna stran poveča; {{key:Mod+0}} jo povrne. Glejte [Tipke, miške in sledilne ploščice](common:keys).

## Kje je ukaz Premakni

Ukaza Premakni ni: izberite pik štetja in ga povlecite ali izberite površino ali črto in povlecite njene kotne ročaje.
