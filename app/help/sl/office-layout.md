---
title: "Postavitev pisarne: združevanje, medvsote, naslov in glave iz vaših privzetih pravil"
summary: Vklopite dodatek Privzeta pravila, da predračun, količine po listih, izvozi in podatki, ki jih bere pomočnik, prevzamejo razporeditev razpredelnic vaše pisarne, isto, ki jo prevzamejo razpredelnice v BimCraft.
keywords: pisarniški standard, postavitev pisarne, privzeta pravila, dodatek, postavitev razpredelnice, združi po vrsti, združi po listu, medvsota, seštevki, naslov, glave, velike črke, postavitev predračuna, postavitev izvoza, nastavitve
from: cfd2f30a
---

## Kaj boste naredili

Naj TakeoffCraft razpredeli svoje tabele tako, kot jih vaša pisarna izdaja, brez nastavljanja v vsaki predizmeri. Postavitev se nastavi enkrat, v Privzeta pravila, in velja za vse aplikacije na tem računalniku: kar nastavite v BimCraft ali CadCraft, uporablja TakeoffCraft, in obratno.

## Koraki

1. Odprite **Nastavitve › Dodatki** in vklopite **Privzeta pravila**. Dodatek je izklopljen, dokler ga ne vklopite; če je izklopljen ali nič ni nastavljeno, je TakeoffCraft točno tak, kot je bil.
2. Odprite **Nastavitve › Splošno › Privzeta pravila** in poiščite **Razporeditev razpredelnic (pisarniški standard)**:

| Pravilo | Kaj naredi v TakeoffCraft |
|---|---|
| Združi razpredelnice po | **Vrsta** združi predračun po vrsti postavke (Linearna, Površina, Štetje, Vnesena količina). **Nivo** združi količine po listih glede na njihov list. **Prostor** in **Brez združevanja** ne združujeta ničesar |
| Seštevki v razpredelnicah | **Medvsota pod vsako skupino in skupni seštevek** doda medvsoto pod vsako skupino. Skupni seštevek projekta vedno ostane |
| Naslov razpredelnice | Vrstica nad tabelo, na primer `{schedule}: pisarniška postavitev` |
| Glave stolpcev | Kot je zapisano, VELIKE ČRKE ali Z velikimi začetnicami |

3. Zaprite nastavitve. Tabele se takoj prilagodijo.

## Kaj prevzame razporeditev

- **Količine › Po postavki** in **Po listih**: naslovi skupin, medvsota pod vsako skupino, naslov in velikost črk v glavah. Vrstica pod naslovom pove, kateri deli so določeni z vašim standardom. Vrstice so iste: še vedno vpisujete cene in odpadek vanje ter kliknete številke, da izberete njihove oznake. Komponenta ali drugi pogoj ostane pod svojo postavko.
- **Izvoženi predračun** (CSV in XLSX): iste skupine in medvsote. V delovnem zvezku je medvsota formula `SUBTOTAL` nad svojo skupino, tudi skupni seštevek projekta pa je taka formula, zato se nič ne šteje dvakrat.
- **Kar prebere pomočnik**: `takeoff_estimate` in `takeoff_quantities` (po listih) dodata blok `layout` s skupinami, vrsticami in medvsotami ter povesta, kateri deli so nastavljeni v pisarni.

## Kaj ohrani svojo razporeditev

- **Količine › Po območju** navaja svojo združitev (po območju ponudbe) in jo ohrani.
- Skupni seštevek projekta, navedbe v povzetku ponudbe in alternative niso ponovno združeni.
- Združitev, za katero tabela nima stolpca, je izpuščena: predračun nima nivoja, količine po listih pa nimajo vrste.

## Dobro je vedeti

- Pravila so shranjena v tem brskalniku za vse aplikacije CadCraft in potujejo v datoteki Privzeta pravila (**Shrani v datoteko** / **Naloži iz datoteke** na istem mestu), zato pisarna deli eno datoteko.
- Predračun, izvožen v CSV z vključenimi skupinami, je namenjen branju. Če ga želite vrniti kot knjižnico cen, ga izvozite brez nastavljene združitve.
- Pisarniški standard v BimCraft: razpredelnice, nastavitve in izvozi. TakeoffCraft nima svojih pravil, zato v Nastavitve › TakeoffCraft ni razdelka Privzeta pravila.
