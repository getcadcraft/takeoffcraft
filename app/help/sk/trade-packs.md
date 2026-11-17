---
title: Balíky remesiel
summary: Pridajte bezplatné zostavy pre remeslo do knižnice cien, odstráňte ich v jednom kroku a zdieľajte svoju knižnicu ako balík.
keywords: balík remesiel, balík, zostavy, šablóny, štartovacie položky, elektroinštalácie, sadrokartón, konštrukcia, maľovanie, betón, podlahy, murivo, strechy, obloženie, tesárske práce, vodoinštalácie, HVAC, izolácia, úpravy exteriéru, terasy, generálny dodávateľ, CSI, MasterFormat, CC0, pridať, odstrániť, zdieľať
from: d3c036be
---

**Balík remesla** je súbor hotových položiek pre jedno remeslo: každá s jednotkou, výškou alebo hĺbkou, odpadom a svojou **zostavou**, časťami a vzorcami, ktoré premieňajú zmeraný úsek, plochu alebo počet na materiály. Priečka zo sadrokartónu napríklad pridá svoje profily, stojky, dosky, skrutky, pásku a tmel.

Balíky sa pridávajú do vašej [cenovej knižnice](topic:price-library) a odtiaľ pridávate ich položky do ľubovoľného výkazu výmer.

## Pridanie balíka

1. Otvorte {{ui:Knižnica}} v hornej časti panela {{ui:Položky}}, potom {{ui:Balíky remesiel…}}.
2. Vyberte {{ui:Jednotky}}: imperiálne (LF, SF), metrické (m, m²) alebo obe. Každá zostava je v oboch sústavách.
3. Vyberte {{ui:Pridať}} pri balíku.

Položky balíka sa objavia v knižnici, označené názvom balíka. Ak ich chcete použiť, označte ich v knižnici a vyberte {{ui:Pridať do výkazu výmer}}.

:::note
**Balík neprináša žiadne ceny.** Jeho položky v knižnici zobrazujú "nastavte svoju sadzbu". Sadzby sú vaše: zadajte ich v knižnici alebo v editore položky, alebo importujte svoj cenník ako CSV a použite {{ui:Aktualizovať ceny}}.
:::

Ak už máte v knižnici položku s rovnakým názvom a typom, balík vašu nechá tak, ako je. Opätovné pridanie balíka nahradí jeho vlastné položky novou verziou.

## Odstránenie balíka

V {{ui:Balíky remesiel…}} vyberte {{ui:Odstrániť}} pri balíku, ktorý ste pridali, potom ešte raz na potvrdenie. Každá položka z neho zmizne z knižnice v jednom kroku. Položky, ktoré ste už pridali do výkazu výmer, v ňom zostanú.

## Čo je v balíku

Vyberte {{ui:Zdroje a podrobnosti}} pod balíkom a uvidíte, z čoho bola každá zostava napísaná: stavebné predpisy, normy a návody na montáž od združení remesiel. V knižnici podržte ukazovateľ nad položkou, aby ste si prečítali jej zdroje a predpoklady, napríklad rozstup stojok alebo výdatnosť farby. Overte ich podľa vašej zákazky a technických listov vašich výrobkov a kde sa líšia, zmeňte vzorce (pozri [Zostavy a vzorce](topic:assemblies)).

Každý balík je označený **Štartovací: zatiaľ neskontroloval odhadca**, kým ho neskontrolujú praktizujúci odhadcovia.

Každá položka tiež nesie svoje číslo CSI MasterFormat, napríklad `09 21 16`.

## Zdieľanie knižnice ako balíka

{{ui:Exportovať ako balík…}} v knižnici ju uloží ako súbor balíka (`.ccpack.json`), ktorý môže ktokoľvek pridať pomocou {{ui:Otvoriť súbor balíka…}}. Predvolene vynechá položky, ktoré pochádzajú z balíkov, ktoré ste pridali, a neobsahuje žiadne sadzby. Zaškrtnite {{ui:Zahrnúť moje sadzby ako vzorové sadzby}}, ak chcete odoslať aj svoje sadzby: odídu označené regiónom a dátumom, ktoré zadáte, a ten, kto balík pridá, sa rozhodne, či ich použije.

Súbory balíkov sú čisté dáta, nikdy nie programy. TakeoffCraft skontroluje každú časť súboru pred použitím a vynechá všetko, čo nedokáže prečítať.
