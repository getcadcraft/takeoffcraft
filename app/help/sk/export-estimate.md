---
title: Exportovať rozpočet a označené PDF
summary: Stiahnite rozpočet ako zošit XLSX s živými vzorcami alebo ako CSV a kópie vašich PDF s nakresleným výkazom.
keywords: návrh, prehľad ponuky, export, xlsx, tabuľka, zošit, csv, označené pdf, tlač výkazu, správa, zdieľať, odoslať, legenda
from: 334f89c7
---

Exporty sú sťahovania. Vytvárajú sa na vašom počítači z výkazu a otvorených PDF; nič sa nikam neposiela.

## Rozpočet ako tabuľka (XLSX)

1. Na paneli nástrojov otvorte ponuku {{ui:Export}} a zvoľte {{ui:XLSX}}.
   Váš prehliadač stiahne `(name).xlsx`. Stavový riadok hlási „Exportované (name).xlsx (rozpočet so živými vzorcami, podľa listu, značiek, mierok).“ a pridá upozornenie, keď je rozpočet neúplný.
2. Otvorte ho v tabuľkovom programe.

Zošit má štyri pracovné hárky a prehľady nižšie, keď sa uplatnia:

| Hárok | Čo obsahuje |
|---|---|
| Rozpočet | Riadok na položku a na komponent: množstvo, odpad, množstvo s odpadom, jednotkové ceny, materiál, práca, spolu, poznámky. Celkový súčet dole. |
| Podľa listu | Množstvo každej položky na každom liste s počtom značiek. |
| Značky | Každá značka: list, položka, typ, množstvo a podrobnosti (dĺžky úsekov, hrubé a výrezové plochy, obvod). |
| Mierky | Každý list, ktorý má mierku alebo značky: jeho mierka, spôsob nastavenia (predvoľba alebo kalibrácia podľa vzdialenosti) a stopy na jednotku PDF. |
| Súhrn výkazu | Množstvo každej položky, číslo CSI, značky a listy, bez cien. |
| Zoznam materiálu | Každá časť zostavy spočítaná cez celý výkaz (rovnaká časť použitá viacerými položkami je jeden riadok), s odpadom a nákladmi na materiál a položkami, ktoré ju používajú. |
| Žiadosť o cenu | Zoznam materiálu na odoslanie dodávateľovi: množstvá s odpadom, prázdny stĺpec jednotkových cien a rozšírenia a súčet, ktoré sa dopĺňajú pri zadávaní cien. |
| Podľa divízie | Materiál, práca a spolu podľa divízie CSI MasterFormat, keď položky majú {{ui:Číslo CSI}}. |

S [prehľadom ponuky](topic:bid-summary) hárok Rozpočet končí aj svojimi prirážkami (mzdové odvody, daň z predaja, réžia, zisk, zábezpeka a ponuka) ako živými vzorcami.

Hárok Rozpočet ponecháva **živé vzorce**: množstvo s odpadom, zaokrúhlené sumy materiálu a práce, súčet každého riadka a celkový súčet. Tabuľkové programy ich prepočítajú, takže môžete zmeniť jednotkovú cenu alebo odpad v tabuľke a súčty sa upravia. Čísla, ktoré vypočítal TakeoffCraft, sú uložené aj v bunkách a zhodujú sa na cent.

Stĺpec poznámok uvádza vzorec každého komponentu, chyby vzorcov, značky na listoch bez mierky, plochu steny a obvod. Keď sa niečo vynechá, riadok celkového súčtu hovorí „Neúplné: pozri poznámky vyššie“.

Zošit bol overený v LibreOffice Calc, ktorý ho prepočítal na rovnaké súčty. V Exceli sa zatiaľ neotváral. Podrobnosti po stĺpcoch sú v [Stĺpce exportu](topic:export-columns).

## Rozpočet ako CSV

Otvorte ponuku {{ui:Export}} a zvoľte {{ui:CSV}}. Dostanete `(name).csv`: tie isté riadky a stĺpce ako hárok Rozpočet, ako prosté hodnoty (bez vzorcov), a celkový súčet. Použite ho na vloženie do iného kalkulačného alebo účtovného systému.

CSV obsahuje iba rozpočet; pre množstvá podľa listov a zoznam značiek použite XLSX. {{ui:Zoznam materiálu}} v tej istej ponuke uloží samotný zoznam materiálu ako CSV na objednávanie.

## Rozpočet v Google Sheets

Nad tabuľkou {{ui:Množstvá}} tlačidlo **Kopírovať pre Google Sheets** dá rozpočet do schránky ako text oddelený tabulátormi, s tými istými riadkami ako CSV. V Google Sheet kliknite na bunku A1 a vložte. TakeoffCraft sa do Google neprihlasuje a nič tam neposiela.

## Chýbajúce sadzby a podpis

Riadok s množstvom a bez jednotkovej ceny má v Poznámkach **Bez sadzby** a export ich počíta pod súčtami. Keď bol rozpočet podpísaný, export uvedie, kto ho podpísal, kedy a na akú sumu. Pozri [Chýbajúce sadzby a podpísanie rozpočtu](topic:sign-off-the-estimate).

## Označené PDF

1. Otvorte PDF, ktorých značky chcete nakresliť.
2. Otvorte ponuku {{ui:Export}} a zvoľte {{ui:Označené PDF}}.
   Zobrazí sa „Zapisuje sa označené PDF…“, potom váš prehliadač stiahne jeden súbor pre každé označené PDF, pomenovaný `(PDF name) (takeoff).pdf`.

V kópii:

- úseky sú nakreslené ako čiary vo farbe svojej položky,
- plochy sú jemne vyplnené s plným obrysom a výrezy ostávajú otvorené,
- počty sú bodky,
- každá strana so značkami dostane malú legendu v ľavom dolnom rohu: farbu, názov a množstvo každej položky na tej strane.

Vaše pôvodné PDF sa nemenia.

Poznámky:

- Zapisujú sa iba otvorené PDF. Značky na PDF, ktoré nie sú otvorené, ostávajú v súčtoch, ale nie sú nakreslené; najprv otvorte tie PDF.
- Názvy v legende používajú štandardné písmo PDF. Písmená, ktoré nedokáže zobraziť, sa vytlačia ako „?“.
- Zašifrované PDF sa nedá skopírovať so značkami: „Toto PDF je chránené heslom alebo zašifrované, preto sa označená kópia nedá zapísať. Samotný výkaz je v poriadku; namiesto toho exportujte tabuľku.“
- Prvé {{ui:Označené PDF}} na karte načíta zapisovač PDF. Offline je k dispozícii iba vtedy, ak lišta aplikácie zobrazuje {{ui:Pripravené offline}}; pozri [Práca offline](common:offline).

:::chromium
Pri viacerých označených PDF sa Chrome a Edge môžu raz opýtať, či tento web smie sťahovať viac súborov. Zvoľte Povoliť, inak dostanete iba prvý súbor.
:::

## Nič na export?

- {{ui:XLSX}} a {{ui:CSV}} potrebujú aspoň jednu položku: „Zatiaľ nie je čo exportovať: vytvorte položku a odmerajte ju.“
- {{ui:Označené PDF}} potrebuje značky na otvorenom PDF: „Na otvorených PDF zatiaľ nie sú žiadne značky.“

## Uložte aj výkaz

Export je prehľad. Ak chcete na výkaze pracovať aj neskôr, zvoľte tiež {{ui:Uložiť výkaz}}: pozri [Uloženie a znovuotvorenie výkazu](topic:save-and-reopen).

Ak chcete pridať réžiu, zisk, daň a zábezpeku a odoslať návrh, pozri [Prehľad ponuky a návrh](topic:bid-summary).
