---
title: Zadeve, revizije in dnevnik sprememb risb
summary: Vzdržujte eno zgodovino zadev z modelom arhitekta. Prebrane zadeve, navodila za gradbišče, delavniške risbe in povezane modele vežite na zadevo ter preberite dnevnik sprememb risb.
keywords: zadeva, revizija, revizije, dnevnik sprememb, dnevnik sprememb risb, register risb, navodilo za gradbišče, delavniška risba, povezani model, razpis, gradnja, zgodovina zadev, popis del, predizmere
from: 8d8f6e68
---

## Kaj boste naredili

Delajte z isto zgodovino zadev kot ostali člani ekipe. Preverite, kateri listi so bili poslani pri kateri reviziji, in vežite dogajanje na gradbišču na zadevo, ki ji pripada.

## Koraki

1. Odprite **Zadeve in revizije**.
2. Izberite **Preberi zgodovino zadev** in izberite datoteko `.issues.json`, shranjeno v BimCraft ali drugem programu. Njene zadeve in zapisi se dodajo vašim. Nič se ne nadomesti.
3. Izberite **Dodaj zapis** za navodilo za gradbišče, delavniško risbo, nabor označb, povezani model ali opombo. Izberite zadevo, na katero se nanaša, in njeno stanje. Izbrana datoteka se zabeleži po imenu, velikosti in SHA-256; datoteka ostane tam, kjer je.
4. **Dnevnik sprememb risb** prikaže eno vrstico za vsak list in en stolpec za vsako zadevo. Revizija v oklepaju je bila ponovno izdana nespremenjena.
5. **Prenesi dnevnik sprememb (CSV)** shrani zadeve, tabelo listov in zapise. **Shrani zgodovino zadev** zapiše datoteko, ki jo berejo drugi programi.

## Dobro je vedeti

- **Zabeleži zadevo** izda vaše izmerjene liste, na primer s popisom del. **Spremembe od** nato pove, kateri listi so bili ponovno izmerjeni po tej zadevi.
- Zgodovina je shranjena v datoteki predizmer. Vsaka sprememba je en korak razveljavitve.
- Branje iste datoteke dvakrat ničesar ne doda dvakrat. Kadar imata dve kopiji isti zapis, se obdrži novejša.
