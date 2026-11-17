---
title: Uitgawes, hersienings en die tekening-veranderingslog
summary: Hou een uitgawegeskiedenis saam met die argitek se model: lees die uitgawes in, teken werfinstruksies, werkstekeninge en gekoppelde modelle teen ’n uitgawe aan, en lees die tekening-veranderingslog.
keywords: uitgawe, hersiening, hersienings, veranderingslog, tekening-veranderingslog, tekeningregister, werfinstruksie, werkstekening, gekoppelde model, tender, konstruksie, uitgawegeskiedenis, hoeveelheidstaat, hoeveelheidsopname
from: 8d8f6e68
---

## Wat jy gaan doen

Werk vanuit dieselfde uitgawegeskiedenis as die res van die span. Sien watter blaaie teen watter hersiening uitgereik is, en hou wat op die werf gebeur teen die uitgawe waaraan dit behoort.

## Stappe

1. Maak **Uitgawes en hersienings** oop.
2. Kies **Lees ’n uitgawegeskiedenis** en kies die `.issues.json`-lêer wat vanuit BimCraft of ’n ander program gestoor is. Die uitgawes en rekords daarin word by joune gevoeg. Niks word vervang nie.
3. Kies **Voeg ’n rekord by** vir ’n werfinstruksie, ’n werkstekening, ’n merkstel, ’n gekoppelde model of ’n nota. Kies die uitgawe waarteen dit is, en die status daarvan. ’n Lêer wat jy kies, word aangeteken volgens sy naam, grootte en SHA-256; die lêer bly waar dit is.
4. **Tekening-veranderingslog** wys een ry vir elke blad en een kolom vir elke uitgawe. ’n Hersiening tussen hakies is sonder verandering weer uitgereik.
5. **Laai die veranderingslog af (CSV)** stoor die uitgawes, die bladtabel en die rekords. **Stoor die uitgawegeskiedenis** skryf ’n lêer wat die ander programme lees.

## Goed om te weet

- **Teken ’n uitgawe aan** reik jou gemete blaaie uit, byvoorbeeld met ’n hoeveelheidstaat. **Veranderinge sedert** wys dan watter blaaie ná daardie uitgawe weer gemeet is.
- Die geskiedenis word in die hoeveelheidsopname-lêer gestoor. Elke verandering is een Ontdoen.
- As jy dieselfde lêer twee keer lees, word niks twee keer bygevoeg nie. Wanneer twee afskrifte dieselfde rekord bevat, word die nuwer een behou.
