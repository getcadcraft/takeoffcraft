---
title: Použití TakeoffCraft s asistentem AI
summary: Nechte svého asistenta AI nebo skript číst množství a odhad výkazu, přidávat položky a značky, počítat a měřit na DWG nebo DXF a exportovat: oprávnění, připojení přes CadCraft Studio a protokol aktivit.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizace, množství, odhad, oprávnění, odpojení, aktivita
from: 7fa62ec6
---

## Co se naučíte

Jak nechat asistenta AI (nebo skript, který jste napsali) pracovat s TakeoffCraft a jak rozhodnout, čeho se smí dotknout.

TakeoffCraft **nemá vlastní AI** a nikam nic neposílá. Asistenta přinesete vy: libovolný program, který mluví protokolem Model Context Protocol (MCP). TakeoffCraft mu jen poskytne nástroje a vy vyberete, které.

## Zapnutí

1. Otevřete {{ui:Nastavení}} (ozubené kolo v liště aplikace, nebo {{key:Mod+,}}) a přejděte na kartu {{ui:TakeoffCraft}}.
2. V části {{ui:Asistenti}} zaškrtněte **Povolit asistentům AI a skriptům používat TakeoffCraft**. Dokud to neuděláte, je to vypnuto.
3. Vyberte, co smí dělat: **Čtení** je zaškrtnuté od začátku; zaškrtněte **Úpravy**, **Uložit** nebo **Export**, jen když je potřebujete.

Nástroje mimo oprávnění, která jste zaškrtli, se asistentovi nenabízejí, a pokud o některý přesto požádá, TakeoffCraft ho odmítne a zapíše to do protokolu aktivit. Vypnutí přepínače ukončí všechna připojení najednou; {{ui:Obnovit nastavení TakeoffCraft}} jej také vypne.

## Připojení asistenta

Asistenti se připojují přes **CadCraft Studio** na vašem počítači: Studio spustí malý server, který dosáhne jen tento počítač, a chrání ho tokenem, který pokaždé vytvoří při spuštění. Ve Studiu zvolte {{ui:Připojit asistenta}} a zkopírujte adresu a token do svého asistenta (Studio ukáže přesná nastavení, která máte vložit). Token nikdy nesdílejte.

:::note
Karta prohlížeče nemůže otevřít připojení pro asistenta: v aplikacích v prohlížeči přepínač nemá žádný účinek, dokud nepoužijete CadCraft Studio na svém počítači.
:::

## Vy máte kontrolu

- **Každá změna je jeden krok zpět**, označený jménem asistenta (například "Asistent: …"). {{key:Mod+Z}} vezme zpět poslední změnu asistenta jako celek.
- **Víte, kdy je připojen.** Tlačítko v liště aplikace jmenuje asistenta, dokud je připojen; kliknutím zjistíte, co smí dělat, nebo ho můžete **Odpojit**.
- **Aktivita.** {{ui:Nastavení}} › {{ui:TakeoffCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypisuje každé volání: kdy, který nástroj, a zda proběhlo, nebo bylo odmítnuto. {{ui:Uložit záznam}} uchová kopii.

## Co může asistent požadovat

| Nástroj | Oprávnění | Co dělá |
|---|---|---|
| `app_info`, `sheets_list` | Čtení | Otevřený výkaz, jeho PDF a listy, měřítko každého listu a jeho značky |
| `items_list` | Čtení | Položky s jejich jednotkami, sazbami a vzorci sestav |
| `takeoff_quantities` | Čtení | Množství na položku nebo na list; značky na listech bez měřítka jsou vypsány, nikdy se nepočítají jako nula |
| `takeoff_estimate` | Čtení | Oceněný odhad tak, jak ho TakeoffCraft počítá, se součty |
| `takeoff_export` | Export | Vlastní export TakeoffCraft do CSV nebo XLSX |
| `items_add` | Úpravy | Přidá položky s jejich jednotkami, sazbami a odpadem |
| `marks_add` | Úpravy | Změří úseky, plochy a počty na listu. Délky a plochy jen na listu s měřítkem, nikdy na listu bez měřítka |
| `cad_sheets`, `cad_catalog`, `cad_count` | Čtení | U otevřeného DWG nebo DXF: jeho listy a jejich měřítka, co lze počítat (bloky, vrstvy a typy, texty) a přesné počty, tak jak je vytváří {{ui:Počet z CAD}} ([Počítání z výkresu](topic:count-from-a-drawing)) |
| `cad_count_add` | Úpravy | Spočítá ve výkrese a na každý nalezený objekt dá značku počtu, v jednom kroku; opětovné počítání přidá jen to, co je nové |
| `cad_measure` | Úpravy | Změří délkovou nebo plošnou položku z vlastních čar, oblouků, lomených čar a šrafování výkresu, jako to dělá {{ui:Měřit výkres}} ([Měření z výkresu](topic:measure-from-a-drawing)); jen na listu s měřítkem |
| `usd_export` | Export | Úseky, plochy a počty naměřené na listu s měřítkem jako kontrolní 3D model v USD (`.usdz`, `.usda` nebo `.usdc`), tak jak {{ui:Balíček USD (.usdz)}} v pohledu 3D kontroly zapisuje ([Export pohledu 3D kontroly do USD](topic:usd)) |

Se zaškrtnutými **Úpravami** asistent přidává položky a značky (každé volání je jeden krok zpět); nemůže přesunout, změnit ani smazat značky, které už tam jsou.

Stejná množství a odhad jsou k dispozici i bez otevřeného TakeoffCraft: server CadCraft MCP otevře soubor `.takeoff.json` ve složce, kterou pojmenujete (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), a `cadcraft info Job.takeoff.json` je vypíše na příkazové řádce. Také otevře DWG nebo DXF jako nový výkaz na jeho listech (měřítko z výkresu tak, jak ho TakeoffCraft určuje), počítá a měří na něm stejnými nástroji `cad_*`, přidává položky a ukládá výkaz (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` počítá z příkazové řádky.

## Když něco nefunguje

- **Asistent nevidí nástroje TakeoffCraft:** zkontrolujte, že je přepínač v tomto okně zapnutý a že je okno otevřené ve Studiu.
- **"needs the export permission":** zaškrtněte **Export** pod {{ui:Asistenti}}, pak se zeptejte znovu.
- **Chyby "401" nebo "token":** token se změnil (Studio se restartovalo, nebo {{ui:Nový token}}). Zkopírujte nový do nastavení asistenta.

## Viz také

- [Recepty pro asistenty AI](common:assistants-recipes): propracované příklady, každý s nástroji, které volá.
