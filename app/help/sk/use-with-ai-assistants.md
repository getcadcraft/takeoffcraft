---
title: Používanie TakeoffCraft s asistentom AI
summary: Nechajte svojho asistenta AI alebo skript čítať množstvá a rozpočet výkazu výmer, pridávať položky a značky, počítať a merať na DWG alebo DXF a exportovať: oprávnenia, pripojenie cez CadCraft Studio a záznam aktivity.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizácia, množstvá, rozpočet, oprávnenia, odpojenie, aktivita
from: 7fa62ec6
---

## Čo sa naučíte

Ako nechať asistenta AI (alebo skript, ktorý ste napísali) pracovať s TakeoffCraft a ako rozhodnúť, čoho sa smie dotknúť.

TakeoffCraft **nemá vlastnú AI** a nič nikam neposiela. Asistenta priniesiete vy: ľubovoľný program, ktorý podporuje Model Context Protocol (MCP). TakeoffCraft mu iba poskytne nástroje a vy vyberáte, ktoré.

## Zapnutie

1. Otvorte {{ui:Nastavenia}} (ozubené koliesko na hornom paneli aplikácie alebo {{key:Mod+,}}) a prejdite na kartu {{ui:TakeoffCraft}}.
2. V časti {{ui:Asistenti}} zaškrtnite **Povoliť asistentom AI a skriptom používať TakeoffCraft**. Kým to neurobíte, je to vypnuté.
3. Vyberte, čo smie robiť: **Čítať** je na začiatku zaškrtnuté; zaškrtnite **Upraviť**, **Uložiť** alebo **Export** iba vtedy, keď ich potrebujete.

Nástroje mimo oprávnení, ktoré ste zaškrtli, asistentovi nie sú ponúknuté. Ak o niektorý napriek tomu požiada, TakeoffCraft ho odmietne a zapíše to do záznamu aktivity. Vypnutím prepínača sa okamžite ukončí každé pripojenie; {{ui:Obnoviť nastavenia TakeoffCraft}} ho tiež vypne.

## Pripojenie asistenta

Asistenti sa pripájajú cez **CadCraft Studio** na vašom počítači: Studio spustí malý server, ktorý dosiahne iba tento počítač, a chráni ho token, ktorý vytvorí pri každom spustení. V Studiu zvoľte {{ui:Pripojiť asistenta}} a skopírujte adresu a token do svojho asistenta (Studio ukáže presné nastavenia, ktoré treba vložiť). Token nikdy nezdieľajte.

:::note
Karta prehliadača nemôže otvoriť pripojenie pre asistenta: v aplikáciách v prehliadači prepínač nemá žiadny účinok, kým nepoužijete CadCraft Studio na svojom počítači.
:::

## Vy máte kontrolu

- **Každá zmena je jeden krok späť**, označený menom asistenta (napríklad "Asistent: …"). {{key:Mod+Z}} vráti poslednú zmenu asistenta celú naraz.
- **Viete, keď je niekto pripojený.** Tlačidlo na hornom paneli aplikácie pomenuje asistenta, kým je pripojený; kliknutím zobrazíte, čo smie robiť, alebo ho **odpojíte**.
- **Aktivita.** {{ui:Nastavenia}} › {{ui:TakeoffCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypíše každé volanie: kedy, aký nástroj a či bolo vykonané alebo odmietnuté. {{ui:Uložiť záznam}} si uchová kópiu.

## Čo môže asistent požadovať

| Nástroj | Oprávnenie | Čo robí |
|---|---|---|
| `app_info`, `sheets_list` | Čítať | Otvorený výkaz výmer, jeho PDF súbory a listy, mierka a značky každého listu |
| `items_list` | Čítať | Položky s ich jednotkami, sadzbami a vzorcami zostáv |
| `takeoff_quantities` | Čítať | Množstvá podľa položky alebo listu; značky na listoch bez mierky sa uvádzajú, nikdy sa nepočítajú ako nula |
| `takeoff_estimate` | Čítať | Ocenený rozpočet tak, ako ho počíta TakeoffCraft, so súčtami |
| `takeoff_export` | Export | Vlastný export TakeoffCraft do CSV alebo XLSX |
| `items_add` | Upraviť | Pridá položky s jednotkami, sadzbami a odpadom |
| `marks_add` | Upraviť | Meria úseky, plochy a počty na liste. Dĺžky a plochy iba na liste s mierkou, nikdy na liste bez nej |
| `cad_sheets`, `cad_catalog`, `cad_count` | Čítať | Pri otvorenom DWG alebo DXF: jeho listy a ich mierky, čo sa dá spočítať (bloky, hladiny a typy, texty) a presné počty, tak ako ich robí {{ui:Počet z CAD}} ([Počítanie z výkresu](topic:count-from-a-drawing)) |
| `cad_count_add` | Upraviť | Spočíta vo výkrese a jedným krokom pridá značku počtu ku každému nájdenému objektu; opätovné počítanie pridá iba nové |
| `cad_measure` | Upraviť | Meria dĺžkovú alebo plošnú položku z vlastných čiar, oblúkov, lomených čiar a šráfovaní výkresu, tak ako to robí {{ui:Merať výkres}} ([Meranie z výkresu](topic:measure-from-a-drawing)); iba na liste s mierkou |
| `usd_export` | Export | Namerané úseky, plochy a počty listu s mierkou ako 3D kontrolný model v USD (`.usdz`, `.usda` alebo `.usdc`), tak ako ho v zobrazení 3D kontroly zapisuje {{ui:Balík USD (.usdz)}} ([Export 3D kontrolného zobrazenia do USD](topic:usd)) |

Keď je zaškrtnuté **Upraviť**, asistent pridáva položky a značky (každé volanie je jeden krok späť); značky, ktoré už existujú, nemôže presúvať, meniť ani mazať.

Rovnaké množstvá a rozpočet sú dostupné aj bez otvorenia TakeoffCraft: server CadCraft MCP otvorí súbor `.takeoff.json` v priečinku, ktorý pomenujete (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), a `cadcraft info Job.takeoff.json` ich vypíše na príkazovom riadku. Dokáže tiež otvoriť DWG alebo DXF ako nový výkaz výmer na jeho listoch (s mierkou z výkresu, rovnako ako ju určuje TakeoffCraft), na ňom počítať a merať rovnakými nástrojmi `cad_*`, pridávať položky a ukladať výkaz výmer (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` počíta z príkazového riadku.

## Ak niečo nefunguje

- **Asistent nevidí nástroje TakeoffCraft:** skontrolujte, či je prepínač v tomto okne zapnutý a či je okno otvorené v Studiu.
- **"vyžaduje oprávnenie na export":** zaškrtnite **Export** v časti {{ui:Asistenti}} a potom to skúste znova.
- **Chyby "401" alebo "token":** token sa zmenil (Studio sa reštartovalo alebo bol vytvorený {{ui:Nový token}}). Skopírujte nový token do nastavení asistenta.

## Pozri aj

- [Recepty pre asistentov AI](common:assistants-recipes): podrobné príklady, každý s nástrojmi, ktoré volá.
