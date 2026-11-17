---
title: Strehe in nakloni
summary: Površini dodelite naklon, da izmerite streho iz tlorisa, čelne robove, čope in žlebove pa vzdolž njihovega naklona.
keywords: streha, naklon, nagib, faktor naklona, vzpon, tek, 6:12, čelni rob, čop, žleb, dvostrešni, kvadrati, nagnjena površina, tlorisna površina
from: 38225b60
---

Tloris strehe prikazuje vsako ravnino strehe ravno, kot je vidna od zgoraj. Sama streha je večja: ravnina z naklonom 6:12 ima približno 12 % več površine kot njen tloris, njeni nagnjeni robovi pa so daljši, kot se zdijo. Dodelite postavki naklon, TakeoffCraft pa meri vzdolž naklona.

## Vnos naklona

Naklon je vzpon na 12 enot vodoravne razdalje, kot je na simbolih naklona v tlorisu strehe. Vpišite ga kot `6:12`, `6/12` ali kar `6`; deluje tudi drug zapis (`4:10` je 4.8:12). Kot vpišite s stopinjskim znakom: `26.57°`. Prazno polje ali `0` pomeni ravno.

## Površine streh

1. Ustvarite površinsko postavko za kritino ali odprite obstoječo.
2. V njenih nastavitvah vpišite **Naklon**, na primer `6:12`.
3. Očrtajte vsako ravnino strehe v tlorisu z {{ui:Površina}}, kot običajno.

Vsaka ravnina šteje svojo tlorisno površino, pomnoženo s faktorjem naklona: √(1 + (vzpon ÷ 12)²), pri 6:12 je to 1.118, pri 12:12 pa 1.414. Izberite ravnino, da vidite njeno **Površino** (na naklonu), **Tlorisno površino** in **Faktor naklona**.

Ravnine z drugim naklonom: izberite ravnino in v njeni plošči vpišite njen lastni **Naklon**. Če polje pustite prazno, se uporabi naklon postavke. Pogled za preverjanje v 3D, sestavi (`A` je nagnjena površina), stroški in izvoz uporabljajo nagnjeno površino. Odbitki na nagnjeni ravnini, na primer strešna okna, se odštejejo pri istem naklonu.

Obseg (`P`) ostane tlorisni obseg. Kapnike, čelne robove, čope in žlebove merite kot odseke (spodaj).

## Čelni robovi, čopi in žlebovi

1. Ustvarite linijsko postavko, na primer „Čelni robovi“ ali „Čopi“.
2. Nastavite **Vrsto naklona** na **Čelni rob** (nagnjen rob, kakor pri čelu strehe) ali **Čop ali žleb** (črta, kjer se stikata dve ravnini) in vpišite **Naklon** ravnin strehe.
3. Narišite odseke na tlorisu z {{ui:Linijsko}}.

Čelni rob šteje svojo tlorisno dolžino, pomnoženo s faktorjem naklona. Čop ali žleb poteka v tlorisu pod kotom 45° med dvema ravninama istega naklona, zato je njegova dejanska dolžina tlorisna dolžina, pomnožena z √(1 + (vzpon ÷ 12)² ÷ 2): pri 6:12 je to 1.061, pri 12:12 pa 1.225.

En odsek lahko združuje obe vrsti. Izberite ga: vsak segment v njegovi plošči ima seznam naklonov — **Nastavitev postavke**, **Nivo**, **Čelni rob** ali **Čop ali žleb** — in svojo dolžino vzdolž naklona. Lastni **Naklon** odseka v plošči nadomesti naklon postavke za vse njegove segmente. Plošča prikaže tudi **Tlorisno dolžino**, oznake na listu pa dolžine vzdolž naklona.

Odbitki še vedno delujejo: odbiti segment ne šteje nič, ne glede na naklon.

:::note
Čopi in žlebovi predpostavljajo, da imata obe ravnini enak naklon. Za ravnine z različnimi nakloni izmerite čop po njegovi dejanski dolžini drugje ali ga narišite kot čelni rob z enakovrednim naklonom.
:::
