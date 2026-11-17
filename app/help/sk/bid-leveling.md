---
title: Balíky ponúk a vyrovnávanie ponúk
summary: Rozdeľte odhad do balíkov podľa remesla, pošlite rozsah každého balíka subdodávateľom, porovnajte ponuky, ktoré prídu, na rovnakom rozsahu a použite vybranú ponuku ako cenu balíka.
keywords: vyrovnávanie ponúk, vyrovnávanie, balík ponuky, subdodávateľ, subponuka, rozsah, doplnok, remeslo, divízia CSI, porovnanie ponúk, najnižšia ponuka, tabuľka ponúk, uchádzač, zadanie, vybraná ponuka, použiť ponuku, subdodávateľská cena
from: 856b3088
---

Generálny dodávateľ pošle rozsah každého remesla subdodávateľom a porovná to, čo sa vráti. TakeoffCraft robí obe veci z merania: otvorte {{ui:Export}} › {{ui:Balíky ponúk a vyrovnávanie…}}.

## Balíky

Pre každú divíziu CSI, ktorú vaše položky používajú, je jeden balík (prvé dve číslice {{ui:Číslo CSI}} položky, pozri [Vytvorenie položiek merania](topic:create-items)). Položky bez čísla tvoria vlastný balík. Každý balík ukazuje svoje položky, koľko listov má jeho značky, a naše vlastné náklady na neho (materiál a práca pred prirážkami, zo základnej ponuky).

Vyberte {{ui:CSV rozsahu}} a stiahnite si, čo poslať subdodávateľovi: každú položku s jej číslom CSI, množstvom, jednotkou a listami, na ktorých je. Nemá ceny. Pre dodávateľov materiálu má zošit žiadosť o cenovú ponuku so zoznamom dielov (pozri [Export odhadu](topic:export-estimate)).

## Zadanie ponúk

1. V prázdnom riadku pod balíkom napíšte meno uchádzača a sumu ponuky, potom vyberte {{ui:Pridať ponuku}}.
2. Ak ponuka vynecháva časť rozsahu, otvorte jej zoznam {{ui:Vynechané}} a zaškrtnite tie položky.
3. Na opravu mena alebo sumy ju prepíšte v tabuľke; tlačidlo × ponuku odstráni.

Každá zmena je jeden krok, ktorý {{key:Mod+Z}} vráti, a ponuky sa uložia spolu s meraním.

## Ako sa ponuky vyrovnávajú

Ponuky zriedka pokrývajú ten istý rozsah. Vyrovnávanie doplní každú vynechanú položku **doplnkom** za naše vlastné náklady na ňu, takže každá ponuka sa porovnáva na celom balíku:

**Vyrovnaná = ponuka + doplnky**

Najnižšia vyrovnaná ponuka je označená **Najnižšia**; pri rovnosti tá, ktorá bola zadaná prvá. **Oproti nášmu nákladu** je vyrovnaná ponuka mínus naše vlastné náklady na balík: záporná hodnota znamená, že je pod nimi. Ponuka, ktorá vyzerá najnižšie, môže prehrať, keď sa započíta chýbajúci rozsah.

Zošit dostane list **Vyrovnávanie ponúk** so všetkými balíkmi, ktoré majú ponuky: náš odhad, každú ponuku, jej doplnky, vyrovnaný súčet a rozdiel ako živé vzorce, a to, čo každá ponuka vynechala.

## Použitie ponuky ako ceny balíka

Vyberte {{ui:Použiť}} pri ponuke a stane sa cenou celého balíka vo vašom odhade: vlastné oceňovanie balíka (položky, ich druhé podmienky a časti zostáv) vypadne zo súčtu zákazky, položky ostanú ako množstvá s vašimi sadzbami na referenciu a jeden riadok, **Vybraná ponuka**, nesie sumu ponuky. Položky, ktoré ponuka vynecháva, zostanú za naše vlastné náklady, čo vyrovnávanie už počítalo ako doplnok. Vyberte inú ponuku, alebo tú istú znova, aby ste ju vrátili; každý výber je jeden krok, ktorý {{key:Mod+Z}} vráti.

V súhrne ponuky sú subponuky jedným riadkom v nákladoch: réžia, zisk a záruka sa pripočítavajú nad ne ako ktorýkoľvek iný náklad; daň z predaja (len na materiál) a zaťaženie práce (na prácu) nie. List Odhad v zošite nesie vybranú ponuku ako vlastný riadok a blok prirážok ju pripočíta živými vzorcami. Zoznam materiálu vynecháva materiál zadaného balíka, lebo ho dodá subdodávateľ.

Balík v oblasti ponuky pripočítavanej alternatívy sa nepreceňuje: alternatívy a medzisúčty oblastí stále používajú vaše vlastné ceny.

## Ponuky, ktoré prídu e-mailom

Ponuky nemusíte písať ručne. {{ui:Odoslať na ponuky…}} pod balíkom pošle každému subdodávateľovi odkaz na stránku, kde zadá cenu za každý riadok; {{ui:Získať ceny}} načíta, čo poslali, do tejto tabuľky. Pozrite [Odoslanie balíka na ponuky](topic:bid-invitations).

:::note
Zadanie ponuky ručne stále funguje a ručne zadaná ponuka a ponuka zo stránky sú vedľa seba. Ponuky, ktoré prišli zo stránky, sú označené **web** (alebo **web, neskoro**, ak prišli po termíne); ich cena sa zmení len vtedy, keď uchádzač pošle novú verziu, takže vaše vlastné úpravy ostanú až dovtedy.
:::
