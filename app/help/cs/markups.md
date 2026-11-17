---
title: Poznámky, oblaky a zvýraznění
summary: Označujte na listech otázky a změny poznámkami, revizními oblaky a zvýrazněními, sledujte každou jako otevřenou, zodpovězenou nebo uzavřenou a posílejte je v označeném PDF.
keywords: poznámka, poznámky, komentář, otázka, RFI, oblak, revizní oblak, zvýraznění, stav, otevřeno, zodpovězeno, uzavřeno, revize, seznam poznámek
from: 2b395c13
---

Poznámky slouží k tomu, co si potřebujete zapamatovat nebo se na to během výkazu zeptat: "potvrďte základní typ", revizní oblak kolem změněné stěny, zvýrazněná poznámka na půdorysu. Leží na listu se stavem, jsou vypsány na jednom místě a tisknou se v označeném PDF. **Nikdy se nepočítají**: žádné množství, žádná cena.

## Přidání

Otevřete {{ui:Poznámky}} na liště nad listem a vyberte:

| Poznámka | Jak |
|---|---|
| {{ui:Poznámka}} | Klikněte, kam má patřit, napište poznámku a zvolte {{ui:Přidat}}. Zobrazí se jako kulatý špendlík s jejím prvním řádkem vedle něj. |
| {{ui:Oblak}} | Klikněte na jeden roh, pak na protilehlý, a napište poznámku (nebo ji nechte prázdnou). Kolem obdélníku vznikne zvlněný revizní oblak. |
| {{ui:Zvýraznění}} | Klikněte na dva rohy: průhledný žlutý obdélník, případně s poznámkou. |

{{key:Esc}} po prvním rohu zruší. Nástroj zůstane zapnutý pro další; {{key:V}} vrátí {{ui:Vybrat}}.

## Stav a úpravy

Kliknutím na poznámku nástrojem {{ui:Vybrat}} ji vyberete. Pravý panel ukazuje **Poznámku**: její druh a list, její **Stav**, tedy Otevřeno, Zodpovězeno nebo Uzavřeno, a její text, který můžete změnit. {{key:Delete}} (nebo {{ui:Delete}}) ji odstraní; {{key:Mod+Z}} ji vrátí.

Špendlík poznámky je oranžový, dokud je otevřený, modrý po zodpovězení a šedý po uzavření; uzavřený oblak zešedne.

## Seznam

**Poznámky** v pravém panelu vypisují každou poznámku výkazu s jejím stavem a říkají, kolik jich je ještě otevřených. Zaškrtněte **Jen otevřené**, abyste viděli, co zbývá vyřešit. Kliknutím na řádek přejdete na jeho list a vyberete ji.

## Sdílení

- {{ui:Označené PDF}} je nakreslí na stránky: zvýraznění, oblaky a špendlíky, každé s rámečkem, který uvádí stav velkými písmeny (OTEVŘENO, ZODPOVĚZENO, UZAVŘENO), a jeho text. Zahrnuta je i stránka s poznámkami, ale bez značek výkazu.
- {{ui:XLSX}} přidá list **Poznámky**: list, druh, stav a text, každou na jednom řádku.
- Ukládají se do `.takeoff.json` a do [PDF s výkazem uvnitř](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
