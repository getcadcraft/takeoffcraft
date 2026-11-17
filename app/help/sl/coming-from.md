---
title: Prihod iz druge programske opreme za predizmere
summary: Kako navade namenskih programov za predizmere in orodij za označevanje PDF-jev ustrezajo programu TakeoffCraft ter razlike, zaradi katerih se ljudje zmotijo.
keywords: preklop, selitev, pogoji, deli, orodja za merjenje, seznam označb, povezava količine, navade pri predizmerah, razlike, primerjava
from: 12004ce5
---

Če ste predizmere opravljali v PlanSwift ali z orodji za merjenje v Bluebeam Revu, se vam bo večina programa TakeoffCraft zdela znana: niz načrtov, merilo za vsak list, stvari, ki jih merite, in obračunana skupna vsota. Način, kako se deli povezujejo, se na nekaterih mestih razlikuje; ta mesta so navedena spodaj.

Če poznate PlanSwift ali On-Screen Takeoff, v {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}} izberite slog menija {{ui:Takeoff desk}}: vrstica z menijem Datoteka, Urejanje, Pogled, Merilo, Predizmere, Postavke, Označba in Izvoz nad vrsto orodij za predizmere, s prednastavitvami merila na vrstici lista. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).

## Navade, preslikane v TakeoffCraft

| Ste vajeni | V TakeoffCraft |
|---|---|
| Odpiranje posla ali projekta, ki shranjuje načrte (PlanSwift) | Odprite PDF-je in datoteko `.takeoff.json` drug ob drugem. Projekt shranjuje samo predizmero; PDF-ji ostanejo vaše lastne datoteke. |
| Seznam označb z opombami, oblački in poudarki (Bluebeam) | {{ui:Markup}} na vrstici lista: opombe, oblački in poudarki s stanjem (Odprto, Odgovorjeno, Zaprto), našteti pod **Označbe**, narisani v označenem PDF-ju. Glejte [Opombe, oblački in poudarki](topic:markups). |
| Meritve, shranjene kot označbe v PDF-ju (Bluebeam) | Predizmera je v datoteki `.takeoff.json`. {{ui:Marked PDF}} zapiše kopijo s predizmero, narisano vanjo, za deljenje; {{ui:PDF with the takeoff inside}} zapiše kopijo, ki vsebuje predizmero, da jo lahko znova odprete v TakeoffCraft. |
| Postavke predizmere (PlanSwift), orodja za merjenje po meri, shranjena v Tool Chest (Bluebeam) | **Postavke** pod {{ui:Items}}: ime, vrsta, barva, enota, višina ali globina, odpadek, stopnje. |
| Deli in sestavi s formulami (PlanSwift) | {{ui:Assembly}} postavke: komponente s formulo, ki uporablja `L H A N P`. |
| Nastavitev merila strani ali kalibracija (oboje) | Seznam {{ui:Preset}} ali {{ui:Calibrate}} v skupini {{ui:Scale}}, po listu. {{ui:Check}} izmeri znano dimenzijo. |
| Uporaba enega merila za obseg strani | Še ni: nastavite vsak list posebej. |
| Pogledi z različnimi merili na enem listu (Bluebeam) | Še ni: eno merilo na list. |
| Orodja Polylength in površina (Bluebeam), linijska in površinska predizmera (PlanSwift) | {{ui:Linear}} ({{key:L}}) in {{ui:Area}} ({{key:A}}). |
| Držanje tipke Shift za ravne črte | {{key:Shift}} se prilepi na korake po 45°, enaka zamisel. |
| Prilepljanje na črte risbe | Privzeto vklopljeno: krajišča, razpolovišča, presečišča in najbližja točka na črti, z {{key:F3}} za izklop, kot v programih CAD. |
| Orodje za štetje (oboje) | {{ui:Count}} ({{key:C}}). |
| Vizualno iskanje simbolov (Bluebeam) | {{ui:Auto count}} ({{key:S}}): označite en simbol, pregledajte, dodajte. |
| Odprtine ali odbitki v površinah | {{ui:Cut-out}} ({{key:X}}) na izbrani površini in okrogle odprtine. |
| Odbitki na linijskih odsekih | Narišite odsek naravnost čez in pritisnite {{key:E}} ({{ui:Deduct}}) za odprtino. Glejte [Merjenje linijskih odsekov](topic:measure-linear). |
| Segmenti lokov v polilinijah | {{ui:Arc}} ({{key:R}}): kliknite točko na krivulji, nato njen konec. |
| Seznam označb s stolpci količin (Bluebeam) | Tabela {{ui:Quantities}}, {{ui:By item}} ali {{ui:By sheet}}. |
| Mreža za ocenjevanje s cenami (PlanSwift) | Enaka tabela: odpadek, material in delo na enoto, končne vsote, {{ui:Job total}}. |
| Izvoz v Excel | {{ui:XLSX}} z živimi formulami ali {{ui:CSV}}. |
| Tipka Escape za ustavitev orodja | {{key:Esc}} prekliče in vrne na {{ui:Select}}. |
| Desni klik za dokončanje | Tudi tukaj desni klik dokonča odsek ali zapre površino. Kontekstnega menija z desnim klikom ni. |

## Razlike, ki zmedejo ljudi

**Predizmera ni v vašem PDF-ju.** Nič, kar naredite, ne spremeni vaših PDF-jev. Shranite datoteko `.takeoff.json` in jo hranite skupaj z risbami. Če nekomu pošljete označeni PDF, mu ne pošljete urejljive predizmere: pošljite projektno datoteko in izvirne PDF-je ali [PDF s predizmero znotraj](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-ji se ujemajo po vsebini, ne po imenu.** Revidiran list, shranjen čez staro ime datoteke, je za TakeoffCraft nova datoteka brez merila in brez oznak. Vaše stare oznake ostanejo na stari različici in še naprej štejejo. Glejte [Shranjevanje in ponovno odpiranje predizmere](topic:save-and-reopen#when-a-pdf-has-changed).

**Neizmerjene oznake se izpustijo, ne štejejo kot nič.** Če list nima merila, njegovi odseki in površine ne štejejo, tabela pa piše „Nepopolno“. V mnogih programih bi videli samo 0. Glejte [Nastavitev merila](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Ugibanja velikosti strani ni.** Prednastavitve predpostavljajo, da je PDF natisnjen v polni velikosti. PDF v polovični velikosti ali „prilagojen strani“ potrebuje {{ui:Calibrate}}. Vedno uporabite {{ui:Check}}.

**Ena postavka, ena glavna vrsta, več, če zahtevate.** Postavka je linijska, površinska ali štetna, njena vrsta se zaklene, ko ima oznake. Pogoj, ki vam da tako površino kot njen obseg, je površinska postavka: njen obseg je spremenljivka `P`. Stena z dolžino in površino je linijska postavka z višino. Pri postavki z več pogoji, na primer sobi s tlemi, podnožjem in vrati, označite druge vrste pod {{ui:Also measure}}: vsaka se obračuna v svoji vrstici. Glejte [Ena postavka, več vrst oznak](topic:create-items#one-item-several-kinds-of-marks).

**Formule računajo na vsote.** Formule sestavov uporabljajo vsote postavke po vseh listih, ne posameznega odseka. `N` (število odsekov ali površin) je tu za dodatke na odsek, na primer en dodaten količnik na steno.

**Obseg vključuje odprtine.** `P` površine doda robove njenih lukenj. Glejte [Merjenje površin z odprtinami](topic:measure-areas#read-the-area).

**Vlečenje pomika.** Vlečenje z levim gumbom po listu pomika pogled v vseh orodjih razen {{ui:Auto count}}. Orodja za pomik nikoli ne potrebujete. Kolešček povečuje; ne pomika.

**Kopija za obnovitev, ne oblak.** TakeoffCraft hrani kopijo vašega dela v tem brskalniku in jo ponudi po zrušitvi ([Če se zavihek ali brskalnik ustavi](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), vendar predizmero shranite sami: {{key:Mod+S}}. Shranjevanje v oblak še ni na voljo.

**Vse je v brskalniku.** Ničesar ni treba namestiti in načrti se nikoli ne naložijo. Za namizno aplikacijo je TakeoffCraft na voljo v CadCraft Studio, skupaj z ostalimi sedmimi aplikacijami.

## Še ni na voljo

Območja merila po posameznih listih še niso izdelana. Za celoten seznam in kaj storiti namesto tega glejte [Kaj še ni izdelano](topic:not-built-yet).
