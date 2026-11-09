---
title: Datoteke, ki jih TakeoffCraft odpira in shranjuje
summary: PDF-ji na vhodu, datoteka projekta predizmere, preglednice in označeni PDF-ji na izhodu – kaj vsaka vsebuje, kam gre ter kaj se spremeni na spletu, brez povezave in med brskalniki.
keywords: datoteke, formati, pdf, takeoff.json, projektna datoteka, xlsx, csv, označeni pdf, prenos, shrani, odpri, brez povezave
from: 1bf9be65
---

## Kaj odpre

| Datoteka | Kako | Opombe |
|---|---|---|
| PDF (`.pdf`) | {{ui:Odpri načrte}}, {{key:Mod+O}} ali spustite na stran | Več hkrati. Vsaka stran postane list. |
| Projekt predizmere (`.takeoff.json`) | {{ui:Odpri predizmere}} ali spustite na stran | Vaše postavke, merila in oznake. Lahko jo spustite skupaj z njenimi PDF-ji. |

Druge datoteke, spuščene na stran, so preskočene, vrstica stanja pa jih našteje.

- **PDF-ji, zaščiteni z geslom,** se ne odprejo: „(name) je zaščiten z geslom. Odprite nezaščiteno kopijo.“
- **Isti PDF dvakrat** se odpre enkrat: „(name) je že odprt.“ TakeoffCraft datoteke prepoznava po vsebini, ne po imenih.
- **Skenirani PDF-ji** se odprejo in merijo kot vsi drugi; TakeoffCraft ne potrebuje besedila v PDF-ju.
- **Veliki nabori načrtov:** vsak PDF se ob odprtju prebere v celoti (zaradi prstnega odtisa), zato zelo velika datoteka traja nekaj časa. Sličice se rišejo ena za drugo, ko drsite.

## Kaj shranjuje

Vsako shranjevanje je prenos. V vaše PDF-je se nič ne zapiše nazaj.

| Izberete | Dobite | Vsebina |
|---|---|---|
| {{ui:Shrani predizmere}} | `(name).takeoff.json` | Postavke, sestavi, cene, merila listov in vsaka oznaka, povezana z vsakim PDF-jem po njegovi vsebini. Brez strani PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Štirje delovni listi: Predračun (z živimi formulami), Po listih, Oznake, Merila. |
| {{ui:CSV}} | `(name).csv` | Predračun kot navadne vrednosti, ena vrstica na postavko in sestavni del. |
| {{ui:Označeni PDF}} | `(PDF name) (takeoff).pdf` | Kopija vsakega odprtega PDF-ja z oznakami; na straneh je narisana predizmera, dodana je legenda. Ena datoteka za vsak PDF. |

Ime se vzame iz prvega PDF-ja, ki ste ga odprli v tej predizmeri. Polja za preimenovanje še ni: če želite drugo ime, preimenujte preneseno datoteko.

Glejte [Izvoz predračuna in označenega PDF-ja](topic:export-estimate) in [Stolpci izvoza](topic:export-columns).

## Kam gredo prenosi

Brskalnik jih shrani tja, kamor shranjuje vse prenose, običajno v mapo Prenosi. Najdete jo v {{pick:mac=Finder|windows=Raziskovalec|linux=vaš upravitelj datotek}}. Če je brskalnik nastavljen tako, da vpraša, kam shrani vsako datoteko, vpraša.

:::chromium
{{ui:Označeni PDF}} z več označenimi PDF-ji prenese več datotek hkrati. Chrome in Edge vas morda enkrat vprašata, ali sme to spletno mesto prenašati več datotek. Izberite Dovoli.
:::

:::safari
Safari shranjuje v mapo Prenosi, razen če ste spremenili mesto prenosov v Nastavitvah Safarija, pod Splošno.
:::

## Zakaj sta projektna datoteka in PDF-ji ločena

Datoteka `.takeoff.json` hrani samo vašo predizmero. Svoje PDF-je znova najde po njihovi vsebini (prstnem odtisu vsake datoteke), zato:

- Preimenovanje ali premik PDF-ja ni pomembno.
- PDF, ki ga je spremenil ali ponovno shranil drug program, šteje kot druga datoteka, tudi če ima isto ime.
- Oznake na PDF-jih, ki niso odprti, se še vedno štejejo v skupne vsote.

Glejte [Shranjevanje in ponovno odpiranje predizmere](topic:save-and-reopen).

## Brez povezave in na spletu

Vaši PDF-ji in predizmere nikoli ne zapustijo računalnika, ne na spletu ne brez povezave. Povezava je pomembna samo za nalaganje samega TakeoffCraft.

Za delo brez povezave najprej shranite aplikacijo, dokler ste na spletu:

1. Na vrhu v vrstici aplikacije izberite {{ui:Shrani za delo brez povezave}}.
   Gumb med shranjevanjem šteje navzgor: „Shranjevanje 12 od 40“.
2. Počakajte, da se prikaže {{ui:Pripravljeno za delo brez povezave}}.

Shranjevanje TakeoffCraft v brskalniku ohrani aplikacijo, to pomoč, bralnik PDF-jev, zapisovalnik PDF-jev, ki ga uporablja {{ui:Označeni PDF}}, in delavca samodejnega štetja, skupaj približno 6 MB. Ko se prikaže {{ui:Pripravljeno za delo brez povezave}}, vse deluje brez povezave: odpiranje PDF-jev, merjenje, {{ui:Samodejno štetje}}, {{ui:Shrani predizmere}}, {{ui:XLSX}}, {{ui:CSV}} in {{ui:Označeni PDF}}.

| Gumb pravi | Pomen |
|---|---|
| {{ui:Shrani za delo brez povezave}} | Še ni shranjeno v tem brskalniku. Izberite ga, da shranite. |
| Shranjevanje (n) od (m) | Shranjuje se. |
| {{ui:Pripravljeno za delo brez povezave}} | Shranjeno. Izberite ga za {{ui:Shrani znova (pridobi najnovejšo različico)}} ali {{ui:Odstrani kopijo brez povezave}}. |
| {{ui:Shranjevanje ni uspelo}} | Nekatere datoteke se niso prenesle. Preverite povezavo in ga izberite znova. |
| {{ui:Delo brez povezave ni na voljo}} | To okno brskalnika ne more hraniti kopije brez povezave (zasebna okna in nekateri upravljani računalniki to preprečijo). |

Več, tudi koliko časa shranjena kopija traja v posameznem brskalniku: [Delo brez povezave](common:offline).

:::offline
Ste brez povezave. Če vrstica aplikacije prikazuje {{ui:Pripravljeno za delo brez povezave}}, vse deluje. Če ne, se deli, ki jih TakeoffCraft v tem zavihku še ni naložil (zapisovalnik PDF-jev za {{ui:Označeni PDF}} in delavec samodejnega štetja), zdaj ne morejo naložiti, {{ui:Označeni PDF}} pa se ustavi s sporočilom „Označenega PDF-ja ni bilo mogoče zapisati“. Vaša predizmera je v vsakem primeru varna: {{ui:Shrani predizmere}}, {{ui:XLSX}} in {{ui:CSV}} ne potrebujejo povezave. Dokler ne boste znova na spletu, ne osvežujte zavihka.
:::

:::online
Ste na spletu. Pred ogledom gradbišča ali poletom izberite {{ui:Shrani za delo brez povezave}} in počakajte, da se prikaže {{ui:Pripravljeno za delo brez povezave}}.
:::

## Preglednice

XLSX ohranja žive formule, zato preglednični program ob odprtju datoteke ponovno izračuna predračun in ga pravilno ohrani, ko tam spremenite ceno ali odpadek. Delovni zvezek je bil preverjen v LibreOffice Calc, ki je vsako vsoto ponovno izračunal na isti cent. V Excelu še ni bil odprt.

CSV so navadne vrednosti z oznako zaporedja bajtov (BOM), zato preglednični programi pravilno berejo znake, kot je m².

## Namizje in oblak

:::desktop
Od različice 0.5 je namizna aplikacija CadCraft Studio: TakeoffCraft in drugih sedem aplikacij v eni namestitvi. Ločenega namestitvenega programa za TakeoffCraft ni.
:::

Shranjevanje v oblak še ni na voljo. Datoteke `.takeoff.json` hranite skupaj s PDF-ji posla in jih varnostno kopirajte kot vse druge datoteke. Glejte [Kam gredo vaše datoteke](common:your-files).
