---
title: Teme, revizije i popis promjena crteža
summary: Vodite jednu povijest tema s modelom arhitekta: učitajte teme, zabilježite upute za gradilište, radioničke crteže i povezane modele uz temu te pročitajte popis promjena crteža.
keywords: tema, revizija, revizije, popis promjena, popis promjena crteža, registar crteža, uputa za gradilište, radionički crtež, povezani model, natječaj, građenje, povijest tema, troškovnik, predmjer
from: 8d8f6e68
---

## Što ćete raditi

Radite iz iste povijesti tema kao i ostatak tima. Pogledajte koji su listovi izašli u kojoj reviziji i zabilježite što se događa na gradilištu uz temu kojoj pripada.

## Koraci

1. Otvorite **Teme i revizije**.
2. Odaberite **Učitaj povijest tema** i odaberite datoteku `.issues.json` spremljenu iz BimCraft ili druge aplikacije. Njezine teme i zapisi dodaju se vašima. Ništa se ne zamjenjuje.
3. Odaberite **Dodaj zapis** za uputu za gradilište, radionički crtež, skup markupa, povezani model ili bilješku. Odaberite temu na koju se odnosi i njezin status. Odabrana datoteka bilježi se prema nazivu, veličini i SHA-256; datoteka ostaje na mjestu gdje jest.
4. **Popis promjena crteža** prikazuje jedan redak za svaki list i jedan stupac za svaku temu. Revizija u zagradama ponovno je izdana bez promjena.
5. **Preuzmite popis promjena (CSV)** sprema teme, tablicu listova i zapise. **Spremite povijest tema** zapisuje datoteku koju čitaju ostale aplikacije.

## Dobro je znati

- **Zabilježi temu** izdaje vaše izmjerene listove, primjerice s troškovnikom. **Promjene od** pokazuje koji su listovi ponovno izmjereni nakon te teme.
- Povijest se sprema u datoteku predmjera. Svaka promjena je jedan korak poništavanja.
- Ponovno učitavanje iste datoteke ništa ne dodaje dvaput. Kad dvije kopije sadrže isti zapis, zadržava se noviji.
