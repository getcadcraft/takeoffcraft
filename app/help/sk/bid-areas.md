---
title: Oblasti ponúk
summary: Označte značky podľa budovy, podlažia alebo etapy, merajte do jednej oblasti naraz a čítajte množstvá a náklady pre každú oblasť.
keywords: pripočítanie alternatívy, odpočítanie alternatívy, základná ponuka, alternatívy, oblasť ponuky, oblasť, budova, podlažie, úroveň, etapa, zóna, alternatíva, rozpis, rozdelenie, typické podlažie, medzisúčet, podľa oblasti
from: 64f3d41c
---

Oblasť ponuky je časť zákazky, ktorú oceníte samostatne: budova, podlažie, etapa, krídlo. Každá značka môže byť v jednej oblasti ponuky. Množstvá a odhad sa potom dajú čítať pre každú oblasť, s medzisúčtom pre každú, pričom celková suma zákazky zostáva súčtom všetkého.

## Vytvorenie oblasti ponuky

1. Na vrchu panela {{ui:Položky}} otvorte zoznam {{ui:Oblasť ponuky}}.
2. Vyberte **Nová oblasť ponuky…**, napíšte názov ako "Budova A" alebo "Podlažie 2" a vyberte **Vytvoriť**.
   Nová oblasť sa stane aktuálnou. Stavový riadok hovorí: "Nové značky pôjdu do (názov). Značky v iných oblastiach ponuky sú stlmené."

## Meranie do oblasti

Kým je oblasť ponuky vybraná v zozname, každá nová značka sa zaradí do nej: úseky, plochy, kružnice, počty, značky, ktoré pridá {{ui:Automatický počet}}, a to, čo prilepíte. Značky v iných oblastiach ponuky a značky bez oblasti sa na liste stlmia, aby ste videli, čo kam patrí.

Vyberte **Žiadna oblasť ponuky** v zozname, ak meriate bez nej; potom sa nič nestlmí.

:::tip
Typické podlažia: zmerajte Podlažie 2, označte jeho značky ({{key:Mod+A}} na liste), skopírujte ich, vyberte Podlažie 3 v zozname a prilepte. Kópie pôjdu do Podlažia 3. Keď sú podlažia rovnaké a nepotrebujete ich oddeliť, [typická skupina](topic:typical-groups) spočíta jedno podlažie viackrát.
:::

## Presun značiek do inej oblasti

Vyberte jednu značku alebo viac ({{key:Shift}} + klik, alebo {{key:Mod+A}}). Pod **Vybraná značka** (alebo **Vybrané značky**) vyberte oblasť v poli {{ui:Oblasť ponuky}}. Stavový riadok hovorí: "3 značky presunuté do Podlažie 2." Je to jeden krok späť.

## Premenovanie, zmena poradia alebo zmazanie

Vyberte **Spravovať oblasti ponúk…** v zozname. Prepísaním názvu ho premenujete, šípkami zmeníte poradie (tabuľky aj zošit ho nasledujú), alebo oblasť zmažete košom. Zmazanie oblasti ponuky ponechá jej značky: potom nie sú v žiadnej oblasti ponuky. {{key:Mod+Z}} vráti každú zmenu.

## Čítanie množstiev podľa oblasti

V tabuľke {{ui:Množstvá}} vyberte {{ui:Podľa oblasti}} (zobrazí sa, keď má meranie oblasť ponuky). Každá oblasť uvádza položky, ktoré obsahuje, s ich množstvom, jednotkou a súčtom, potom riadok medzisúčtu. Značky bez oblasti ponuky idú na koniec ako **Žiadna oblasť ponuky**. Kliknutím na riadok položky ju zvýrazníte a túto oblasť nastavíte ako aktuálnu.

Zostavy sa pre každú oblasť počítajú zo súčtov tejto oblasti. Vzorec, ktorý zaokrúhľuje nahor, napríklad `ceil(L / 4)`, potom môže v oblastiach dokopy dať o trochu viac ako pre celú zákazku, ako by to bolo pri ponuke oceňovanej oblasť po oblasti.

## Alternatívy: základná ponuka plus pripočítania a odpočítania

Oblasť ponuky môže byť **alternatíva**: práca, ktorú vlastník môže do ponuky pridať alebo z nej vynechať. V **Spravovať oblasti ponúk…** má každá oblasť zoznam vedľa svojho názvu:

| Voľba | Čo robí |
|---|---|
| {{ui:Základná ponuka}} | V ponuke ako obvykle. |
| {{ui:Alternatíva s pripočítaním}} | Ocenená samostatne a **vynechaná zo základnej ponuky**: vylepšenie koberca, prídavná markíza. |
| {{ui:Alternatíva s odpočítaním}} | V základnej ponuke a ponúkaná ako odpočet: "vynechajte markízu". |

Prácu alternatívy zmerajte do jej oblasti ponuky ako ktorúkoľvek inú oblasť. Keď má meranie alternatívu:

- Hlavička tabuľky {{ui:Množstvá}} hovorí **Základná ponuka** namiesto {{ui:Spolu za zákazku}}: celé meranie bez alternatív s pripočítaním.
- {{ui:Podľa oblasti}} končí základnou ponukou a jedným riadkom na alternatívu: **+$300.00** pri pripočítaní, **−$1,050.00** pri odpočítaní.
- Alternatíva oceňuje len položky, ktoré majú v nej značky, s ich zostavami, takže časť zostavy inej položky sa nedostane do ceny.

V exporte CSV na konci stojí základná ponuka a alternatívy a zošit dostane list **Alternatívy**: základnú ponuku, položky každej alternatívy a jej zmenu, a základnú ponuku so zahrnutými všetkými alternatívami s pripočítaním.

## V exporte

{{ui:XLSX}} pridá list **Podľa oblasti ponuky**: položky a komponenty každej oblasti s množstvom, množstvom s odpadom, materiálom, prácou a súčtom, medzisúčet pre každú oblasť (vzorec `SUM`) a **Všetky oblasti ponuky** na konci. List **Značky** dostane stĺpec **Oblasť ponuky**. Meranie bez oblastí ponuky sa exportuje ako predtým. Pozrite [Stĺpce exportu](topic:export-columns).

Oblasti ponúk sa ukladajú do súboru projektu spolu so značkami.
