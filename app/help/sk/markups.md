---
title: Poznámky, oblaky a zvýraznenia
summary: Označte otázky a zmeny na listoch poznámkami, revíznymi oblakmi a zvýrazneniami, sledujte každú ako otvorenú, zodpovedanú alebo uzavretú a odošlite ich v označenom PDF.
keywords: poznámka, poznámky, komentár, otázka, RFI, oblak, revízny oblak, zvýraznenie, stav, otvorené, zodpovedané, uzavreté, revízia, zoznam poznámok
from: 2b395c13
---

Poznámky sú na to, čo si potrebujete zapamätať alebo sa opýtať pri odčítavaní: "potvrďte základný typ", revízny oblak okolo zmeneného múru, zvýraznená poznámka na pôdoryse. Ležia na liste so stavom, sú uvedené na jednom mieste a tlačia sa v označenom PDF. Nikdy sa nepočítajú: žiadne množstvo, žiadna cena.

## Pridanie

Otvorte {{ui:Poznámky}} na paneli nad listom a vyberte:

| Poznámka | Ako |
|---|---|
| {{ui:Poznámka}} | Kliknite, kam má ísť, napíšte poznámku a zvoľte {{ui:Pridať}}. Zobrazí sa ako okrúhly špendlík s jej prvým riadkom vedľa. |
| {{ui:Oblak}} | Kliknite na jeden roh, potom na protiľahlý a napíšte poznámku (alebo ju nechajte prázdnu). Okolo rámčeka sa objaví vlnitý revízny oblak. |
| {{ui:Zvýraznenie}} | Kliknite na dva rohy: priehľadný žltý rámček, prípadne s poznámkou. |

{{key:Esc}} po prvom rohu zruší. Nástroj zostane zapnutý pre ďalšiu, {{key:V}} vráti na {{ui:Vybrať}}.

## Stav a úpravy

Kliknutím na poznámku pomocou {{ui:Vybrať}} ju vyberte. Pravý panel zobrazí **Poznámka**: jej druh a list, jej **Stav** (Otvorené, Zodpovedané alebo Uzavreté) a jej text, ktorý môžete zmeniť. {{key:Delete}} (alebo {{ui:Zmazať}}) ju odstráni; {{key:Mod+Z}} ju vráti.

Špendlík poznámky je oranžový, kým je otvorená, modrý, keď je zodpovedaná, a sivý po uzavretí. Uzavretý oblak sa zmení na sivý.

## Zoznam

**Poznámky** na pravom paneli uvádzajú každú poznámku úlohy s jej stavom a ukazujú, koľko ich je ešte otvorených. Zaškrtnite **Iba otvorené**, aby ste videli, čo treba ešte vyriešiť. Kliknite na riadok, aby ste prešli na jeho list a vybrali ho.

## Zdieľanie

- {{ui:Označené PDF}} ich nakreslí na strany: zvýraznenia, oblaky a špendlíky, každý s rámčekom, ktorý uvádza stav veľkými písmenami (OTVORENÉ, ZODPOVEDANÉ, UZAVRETÉ), a jeho text. Strana s poznámkami, ale bez značiek výkazu, je tiež zahrnutá.
- {{ui:XLSX}} pridá pracovný hárok **Poznámky**: list, druh, stav a text, po jednom riadku.
- Ukladajú sa v `.takeoff.json` a v [PDF s výkazom vnútri](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
