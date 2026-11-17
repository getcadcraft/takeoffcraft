---
title: Vydání, revize a přehled změn výkresů
summary: Veďte jednu historii vydání společně s modelem architekta: načtěte vydání, zapisujte k vydání stavební pokyny, dílenské výkresy a propojené modely a čtěte přehled změn výkresů.
keywords: vydání, revize, revize, přehled změn, přehled změn výkresů, rejstřík výkresů, stavební pokyn, dílenský výkres, propojený model, výběrové řízení, stavba, historie vydání, výkaz výměr, výkaz výměr
from: 8d8f6e68
---

## Co uděláte

Pracujte se stejnou historií vydání jako zbytek týmu. Zjistěte, které listy vyšly v jaké revizi, a záznamy o dění na stavbě přiřaďte k vydání, ke kterému patří.

## Postup

1. Otevřete **Vydání a revize**.
2. Zvolte **Načíst historii vydání** a vyberte soubor `.issues.json` uložený z BimCraftu nebo jiné aplikace. Jeho vydání a záznamy se přidají k vašim. Nic se nenahrazuje.
3. Zvolte **Přidat záznam** pro stavební pokyn, dílenský výkres, sadu poznámek, propojený model nebo poznámku. Vyberte vydání, ke kterému patří, a jeho stav. Soubor, který vyberete, se zaeviduje podle názvu, velikosti a SHA-256; soubor zůstane tam, kde je.
4. **Přehled změn výkresů** zobrazí jeden řádek pro každý list a jeden sloupec pro každé vydání. Revize v závorkách byla vydána znovu beze změny.
5. **Stáhnout přehled změn (CSV)** uloží vydání, tabulku listů a záznamy. **Uložit historii vydání** zapíše soubor, který čtou ostatní aplikace.

## Dobré vědět

- **Zaznamenat vydání** vydá vaše změřené listy, například s výkazem výměr. **Změny od té doby** pak ukáže, které listy byly změřeny znovu po tomto vydání.
- Historie se ukládá do souboru výkazu. Každá změna je jedním krokem zpět.
- Načtení stejného souboru dvakrát nic nepřidá dvakrát. Když dvě kopie obsahují stejný záznam, ponechá se novější.
