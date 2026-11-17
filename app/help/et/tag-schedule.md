---
title: Too märgiloend koguste hulka
summary: Hoonemudelist eksporditud märgiloend (CSV) muutub koguste arvestuses tüüpitud kogusteks, üks märgi kohta, nii et mudeli arvud ja pindalad on kõrvuti sinu mõõdetuga.
keywords: märgised, märgiloend, hoonemudel, bimcraft, ifc, kogused, csv, loend, import, tüüpitud kogus
from: a60c19b6
---

{{ui:Märgised}} tööriistaribal toob sisse märgiloendi, mille BimCraft salvestas CSV-failina. Iga erinev märgis muutub tüüpitud koguseks, samaks liigiks, milleks muutuvad CivilCraft'i lõige ja täide.

1. BimCraftis koosta soovitud märgiloend ja salvesta see CSV-na.
2. Vali {{ui:Märgised}} ja vali fail.
3. Ütle, milline veerg nimetab rea ({{ui:Nimeta rida järgi}}, tavaliselt märgis) ja milline hoiab arvu ({{ui:Kogus veerust}}). Korral {{ui:Loenda read}} loetakse iga rida üheks.
4. Vali ühik. Pikkus millimeetrites muutub meetriteks, kui {{ui:Korruta}} väärtusega 0.001.
5. {{ui:Lisa kogused}}.

Sama märgisega read liidetakse kokku. Lahter, mis pole arv, jäetakse välja ja loetakse kokkuvõttes. Sama loendi uuesti toomine värskendab juba olemasolevaid kogusid, selle asemel et lisada neid juurde; nende nimed, hinnad ja jäätmed jäävad sinu omaks.

## Hea teada

Tüüpitud kogust ei mõõdeta lehel, seega sellel pole märke. Midagi ei saadeta kuhugi; fail loetakse siin.
