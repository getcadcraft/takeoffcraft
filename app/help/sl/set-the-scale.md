---
title: Nastavitev merila
summary: Dajte vsakemu listu merilo s prednastavitvijo ali kalibracijo na znano mero, ga preverite in razumite, zakaj listi brez merila niso všteti v seštevke.
keywords: zaznaj merilo, preberi merilo, merilo iz besedila, vsi listi, merilo, kalibriraj, prednastavitev, preveri merilo, znana mera, brez merila, razmerje, nastavi merilo
from: 8f0148e6
---

Vsak list ima svoje merilo. Nastavite ga sami ali pustite, da TakeoffCraft prebere merilo iz besedila listov (spodaj), nato ga preverite. Dokler list nima merila, {{ui:Linijsko}}, {{ui:Površina}}, {{ui:Krožnica}} in {{ui:Odprtina}} na njem ne merijo. {{ui:Štetje}} in {{ui:Samodejno štetje}} delujeta brez merila.

Seznam listov prikaže merilo vsakega lista ali **Brez merila**. Vrstica pod odprtim listom pove isto.

## Uporaba prednastavitve (ko je PDF natisnjen v polni velikosti)

1. Odprite list.
2. Odprite seznam {{ui:Prednastavitev}} v skupini {{ui:Merilo}}.
3. Izberite merilo, natisnjeno na risbi, na primer `1/8" = 1'-0"` pod Arhitekturno.
   Vrstica stanja pove: „Merilo za ta list: 1/8" = 1'-0".“
4. Preverite ga (spodaj).

Prednastavitev predpostavlja, da je PDF prave velikosti papirja, za katero je bila risba narejena. Če je nekdo PDF ustvaril z »prilagodi na stran« ali gre za komplet v polovični velikosti, je prednastavitev napačna. Raje kalibrirajte.

Celoten seznam je v [Prednastavitve merila](topic:scale-presets).

## Branje meril iz besedila listov

Večina risb navede svoje merilo: `SCALE: 1/4" = 1'-0"` v glavi risbe, `1:100` pod pogledom. TakeoffCraft ga zna prebrati in nastaviti vse liste naenkrat.

1. Odprite seznam {{ui:Prednastavitev}} in izberite {{ui:Iz besedila listov…}} (na vrhu).
2. Seznam prikaže vsak list: njegovo trenutno merilo in kaj piše v njegovem besedilu — **Piše 1/4" = 1'-0"**, **V besedilu ni merila** ali **Piše: ni v merilu** (NTS).
3. Listi brez merila, ki pa ga navajajo, so označeni. Označite ali odznačite poljubne in izberite {{ui:Nastavi označena merila}}. En {{key:Mod+Z}} vrne vse nazaj.
4. Na vsakem listu preverite eno mero z {{ui:Preveri}} (spodaj): prednastavitev je pravilna le, če je PDF natisnjen v polni velikosti.

Prebere arhitekturne (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inženirske (`1" = 20'`) in metrične (`1:50`) zapise, ki ustrezajo [prednastavitvi](topic:scale-presets). Če list navaja več meril (tloris s povečanimi detajli), vzame tisto, ki jo navaja najpogosteje; tisto, zapisano za besedo SCALE, šteje dvakrat, druge so prikazane rdeče, da jih lahko preverite. Skeniran list nima besedila: merilo nastavite ročno.

## Kalibracija na znano mero

Uporabite, kadar nobenemu natisnjenemu merilu ne zaupate, je bil komplet spremenjen ali list pravi »ni v merilu«, vendar ima kote.

1. Odprite list in približajte dolgo znano mero, na primer razmik mreže ali celotno dimenzijo stavbe. Daljša kot je, natančnejša je.
2. Izberite {{ui:Kalibriraj}} v skupini {{ui:Merilo}} ali pritisnite {{key:K}}.
3. Kliknite en konec mere. Za natančnost približajte vsak konec; med klikoma lahko približujete in pomikate.
4. Kliknite drugi konec. Držite {{key:Shift}}, da črta ostane pri 0°, 45° ali 90°.
   Odpre se pogovorno okno **Kalibriraj ta list**.
5. V **Dejanska razdalja** vpišite pravo razdaljo, na primer `24'-6 1/2"`, `24.5` (decimalni čevlji), `30"` ali `7.5 m`. Glejte [Vnos dolžin, cen in odstotkov](topic:entry-formats).
6. Izberite {{ui:Nastavi merilo}}.
   Vrstica stanja prikaže merilo kot „1" = (n)'“ in, če je v 0.5 % prednastavitve, pove katere, na primer „kar se ujema z 1/4" = 1'-0" (za natančno merilo izberite to prednastavitev)“.
   TakeoffCraft se vrne na orodje {{ui:Izberi}}.

Če se kalibracija ujema s prednastavitvijo, izbira te prednastavitve da natančno merilo namesto takega, ki je odvisen od mesta klika.

## Preverjanje merila

Novo merilo vedno preverite na drugi koti.

1. Izberite {{ui:Preveri}} v skupini {{ui:Merilo}} ali pritisnite {{key:D}}.
2. Kliknite oba konca kote, natisnjene na risbi.
   Vrstica stanja prikaže „Preveri: 12'-6"“ z isto dolžino v decimalnih čevljih in metrih, preverilna črta pa ostane na listu z dolžino.
3. Primerjajte jo z natisnjeno koto. Če se ne ujema, kalibrirajte na daljši koti.

Pritisnite {{key:Esc}}, da počistite preverilno črto.

## Spreminjanje merila

Izberite drugo prednastavitev ali znova kalibrirajte. Če ima list že meritve, TakeoffCraft vpraša **Spremeniti merilo tega lista?** in pove, koliko meritev bo znova izmerjenih. Izberite {{ui:Spremeni merilo}}. Vsak odsek in površina na listu se znova izmeri v novem merilu. Dejanje lahko razveljavite s {{key:Mod+Z}}.

## Zakaj listi brez merila niso šteti kot nič

Oznaka na listu brez merila nima prave dolžine ali površine. TakeoffCraft je nikoli ne šteje kot nič, ker bi tiho naredilo predračun prenizek. Namesto tega:

- te oznake pusti izven seštevkov,
- pri postavki v {{ui:Količine}} prikaže „+(n) brez merila“,
- v glavi tabele prikaže „Nepopolno: (n) oznak na listih brez merila (ni v seštevkih)“,
- zapiše število v stolpec opomb izvožene preglednice.

To se lahko zgodi, ko odprete projekt, katerega merila nikoli niso bila nastavljena. Dajte listu merilo in oznake se takoj štejejo. Oznake štetja se vedno štejejo; merila ne potrebujejo.

## Nasveti

- Pred začetkom nastavite merilo na vsakem listu, ki ga boste merili. V seznamu listov poiščite **Brez merila**, da najdete preostale. (Iskalno polje gleda imena listov, ne meril.)
- Podrobnosti in povečani tlorisi na istem listu pogosto uporabljajo drugo merilo. TakeoffCraft ima eno merilo na list; glejte [Kaj še ni izdelano](topic:not-built-yet).
- Metrične risbe: izberite metrično prednastavitev, na primer `1:100`, ali kalibrirajte z metrično razdaljo, na primer `6000 mm`.
