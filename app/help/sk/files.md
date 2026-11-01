---
title: Súbory, ktoré TakeoffCraft otvára a ukladá
summary: Súbory PDF na vstupe, súbor projektu výkazu výmer, tabuľky a označené súbory PDF na výstupe - čo každý obsahuje, kam ide a čo sa mení online, offline a medzi prehliadačmi.
keywords: súbory, formáty, pdf, takeoff.json, súbor projektu, xlsx, csv, označené pdf, stiahnuť, uložiť, otvoriť, offline
from: 1bf9be65
---

## Čo otvára

| Súbor | Ako | Poznámky |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otvoriť plány}}, {{key:Mod+O}} alebo pustenie na stranu | Naraz ich môže byť viac. Každá strana sa stane listom. |
| Projekt výkazu výmer (`.takeoff.json`) | {{ui:Otvoriť výkaz}} alebo pustenie na stranu | Vaše položky, mierky a značky. Môžete ho pustiť spolu s jeho súbormi PDF. |

Ostatné súbory pustené na stranu sa preskočia a stavový riadok ich pomenuje.

- **PDF chránené heslom** sa neotvoria: „(name) je chránený heslom. Otvorte nechránenú kópiu.“
- **To isté PDF dvakrát** sa otvorí raz: „(name) je už otvorený.“ TakeoffCraft pozná súbory podľa obsahu, nie podľa názvov.
- **Skenované PDF** sa otvárajú a merajú ako akékoľvek iné; TakeoffCraft nepotrebuje text v PDF.
- **Veľké sady plánov**: každé PDF sa pri otvorení prečíta celé (aby sa vytvoril jeho odtlačok), takže veľmi veľký súbor chvíľu trvá. Miniatúry sa kreslia po jednej, ako posúvate.

## Čo ukladá

Každé uloženie je stiahnutie. Do Vašich súborov PDF sa nič nezapisuje späť.

| Vyberiete | Získate | Čo obsahuje |
|---|---|---|
| {{ui:Uložiť výkaz}} | `(name).takeoff.json` | Položky, zostavy, sadzby, mierky listov a každú značku, priradené ku každému PDF podľa jeho obsahu. Žiadne strany PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Štyri hárky: Rozpočet (so živými vzorcami), Podľa listu, Značky, Mierky. |
| {{ui:CSV}} | `(name).csv` | Rozpočet ako čisté hodnoty, jeden riadok na položku a komponent. |
| {{ui:Označené PDF}} | `(PDF name) (takeoff).pdf` | Kópia každého otvoreného PDF, ktoré má značky, s výkazom výmer nakresleným na jeho stranách a legendou. Jeden súbor na PDF. |

Názov sa preberá z prvého PDF, ktoré ste v tomto výkaze otvorili. Zatiaľ nie je pole na premenovanie: ak chcete iný názov, premenujte stiahnutý súbor.

Pozrite [Export rozpočtu a označeného PDF](topic:export-estimate) a [Stĺpce exportu](topic:export-columns).

## Kam idú stiahnuté súbory

Váš prehliadač ich ukladá tam, kde ukladá každé stiahnutie, zvyčajne do priečinka Stiahnuté súbory. Nájdete ho v {{pick:mac=Finderi|windows=Prieskumníkovi|linux=Vašom správcovi súborov}}. Ak je prehliadač nastavený, aby sa pýtal, kam uložiť každý súbor, opýta sa.

:::chromium
{{ui:Označené PDF}} s viacerými označenými PDF stiahne viac súborov naraz. Chrome a Edge sa môžu raz opýtať, či táto stránka smie sťahovať viac súborov. Vyberte Povoliť.
:::

:::safari
Safari ukladá do priečinka Stiahnuté, pokiaľ ste v nastaveniach Safari v časti Všeobecné nezmenili umiestnenie sťahovaných súborov.
:::

## Prečo sú súbor projektu a súbory PDF oddelené

Súbor `.takeoff.json` obsahuje len Váš výkaz výmer. Svoje súbory PDF nachádza znova podľa ich obsahu (odtlačok každého súboru), takže:

- Premenovanie alebo presun PDF nevadí.
- PDF, ktoré iný program zmenil alebo znova uložil, sa počíta ako iný súbor, aj s rovnakým názvom.
- Značky na súboroch PDF, ktoré nie sú otvorené, sa do súčtov stále započítavajú.

Pozrite [Uloženie a opätovné otvorenie výkazu](topic:save-and-reopen).

## Online a offline

Vaše súbory PDF a výkazy výmer nikdy neopúšťajú Váš počítač, online ani offline. Pripojenie záleží len pri načítaní samotného TakeoffCraft.

Ak chcete pracovať bez pripojenia, uložte najprv aplikáciu, kým ste online:

1. Vyberte {{ui:Uložiť na offline použitie}} v paneli aplikácie úplne hore.
   Tlačidlo počíta „Ukladá sa 12 z 40“, kým ukladá.
2. Počkajte na {{ui:Pripravené offline}}.

Uloženie TakeoffCraft uchová v prehliadači aplikáciu, tohto pomocníka, čítačku PDF, zapisovač PDF používaný {{ui:Označené PDF}} a pracovníka automatického počtu, približne 6 MB. Keď hlási {{ui:Pripravené offline}}, funguje všetko offline: otváranie súborov PDF, meranie, {{ui:Automatický počet}}, {{ui:Uložiť výkaz}}, {{ui:XLSX}}, {{ui:CSV}} a {{ui:Označené PDF}}.

| Tlačidlo hlási | Význam |
|---|---|
| {{ui:Uložiť na offline použitie}} | V tomto prehliadači ešte nie je uložené. Vyberte ho na uloženie. |
| Ukladá sa (n) z (m) | Práve sa ukladá. |
| {{ui:Pripravené offline}} | Uložené. Vyberte ho pre {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}. |
| {{ui:Nepodarilo sa uložiť}} | Niektoré súbory sa nestiahli. Skontrolujte pripojenie a vyberte ho znova. |
| {{ui:Offline nie je k dispozícii}} | Toto okno prehliadača nemôže uchovať offline kópiu (súkromné okná a niektoré spravované počítače to blokujú). |

Viac, vrátane toho, ako dlho uložená kópia vydrží v jednotlivých prehliadačoch: [Práca offline](common:offline).

:::offline
Ste offline. Ak panel aplikácie ukazuje {{ui:Pripravené offline}}, funguje všetko. Ak nie, časti, ktoré TakeoffCraft v tejto karte ešte nenačítal (zapisovač PDF pre {{ui:Označené PDF}}, pracovník automatického počtu), sa teraz načítať nedajú a {{ui:Označené PDF}} skončí s hlásením „Označené PDF sa nepodarilo zapísať“. Váš výkaz výmer je v bezpečí tak či tak: {{ui:Uložiť výkaz}}, {{ui:XLSX}} a {{ui:CSV}} nepotrebujú pripojenie. Kartu neobnovujte, kým nebudete znova online.
:::

:::online
Ste online. Pred návštevou stavby alebo letom vyberte {{ui:Uložiť na offline použitie}} a počkajte na {{ui:Pripravené offline}}.
:::

## Tabuľky

XLSX uchováva živé vzorce, takže tabuľkový program prepočíta rozpočet pri otvorení súboru a udrží ho správny, keď tam zmeníte sadzbu alebo odpad. Zošit bol skontrolovaný v LibreOffice Calc, ktorý prepočítal každý súčet na rovnaký cent. V Exceli sa zatiaľ neotvoril.

CSV sú čisté hodnoty so značkou poradia bajtov, takže tabuľkové programy správne čítajú znaky ako m².

## Počítač a cloud

:::desktop
Od 0.5 je aplikáciou pre počítač CadCraft Studio: TakeoffCraft a ďalších sedem aplikácií v jednej inštalácii. Samostatný inštalátor TakeoffCraft neexistuje.
:::

Ukladanie do cloudu zatiaľ nie je k dispozícii. Súbory `.takeoff.json` uchovávajte spolu so súbormi PDF zákazky a zálohujte ich ako každý iný súbor. Pozrite [Kam idú Vaše súbory](common:your-files).
