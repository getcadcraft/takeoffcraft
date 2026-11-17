---
title: Vtělený uhlík a cenová tabulka 5D
summary: Uhlík sečte vtělený uhlík výkazu z množství každé položky a otevřené tabulky faktorů a pošle sazby výkazu do BimCraftu jako cenovou tabulku pro náklady 5D.
keywords: uhlík, vtělený uhlík, kgco2e, co2, faktory, a1-a3, doprava, odpad, 5d, cenová tabulka, náklady, bimcraft, epd
from: f4bff3b8
---

{{ui:Uhlík}} na panelu nástrojů sečte vtělený uhlík toho, co jste změřili, a promění Vaše sazby v cenovou tabulku, kterou model stavby umí použít. Je to odhad, ne posouzení.

## Vtělený uhlík

Množství každé položky s jejím odpadem se násobí řádkem tabulky faktorů. Řádek se páruje podle slov názvu položky ("concrete slab" najde řádek s klíčovým slovem concrete). Tabulka je stejná otevřená tabulka, kterou používá BimCraft, takže soubor, který zde načtete, funguje tam. **Řádky dodané s programem jsou výchozí hodnoty: obecné, neověřené a nepocházejí z žádné databáze.** Dialog to říká vedle čísel; než se na číslo spolehnete, nahraďte je vlastním zdrojem.

1. Vyberte {{ui:Uhlík}}. Započítané položky jsou uvedeny s kilogramy CO2e; součet je nahoře.
2. Zaškrtněte {{ui:A4 doprava}} nebo {{ui:A5 odpad na stavbě}}, chcete-li započítat i tyto fáze, u řádků, které pro ně uvádějí hodnotu. Fáze výroby se počítá vždy.
3. Chcete-li pro položku použít jiný řádek, nebo žádný, použijte seznam na jejím řádku.
4. {{ui:Faktory ze souboru…}} načte tabulku faktorů (JSON nebo CSV) vytvořenou z vašeho vlastního zdroje; její řádky nahradí výchozí řádky se stejným id. {{ui:Faktory (JSON)}} uloží Vaše.

Faktor je na metr, čtvereční metr, krychlový metr, položku nebo kilogram. Řádek měřený ve stopách nebo čtverečních stopách se převádí. Faktor v kilogramech potřebuje objem (kubické yardy nebo metry) a hustotu z řádku. Položka, jejíž faktor potřebuje množství, které neměří, je uvedena pod {{ui:Vynecháno}} s důvodem; nikdy se neodhaduje. Průběžný součet ve stavovém řádku ukazuje stejné číslo.

Vaše řádky faktorů, Vaše volby a fáze, které počítáte, se ukládají do souboru výkazu.

## Cenová tabulka pro náklady 5D

{{ui:5D ceny (JSON)}} a {{ui:5D ceny (CSV)}} uloží sazby výkazu jako cenovou tabulku: jeden řádek na oceněnou položku s její sazbou materiálu a práce za jednotku a jejím odpadem. Načtěte ji v panelu nákladů BimCraftu (Vtělený uhlík a náklady 5D), aby se úkoly modelu stavby oceňovaly stejnými sazbami, které vytvořily nabídku. Položky měřené v jednotce, kterou tabulka nemá, a položky bez sazby se vynechají.

## S asistentem

Pokud v {{ui:Nastavení}} povolíte asistenty, mohou číst uhlík (carbon_check). Načítání faktorů zůstává na Vás.

## Dobré vědět

Nic se nikam neodesílá. Čísla jsou jen tak dobrá, jak dobré faktory načtete.
