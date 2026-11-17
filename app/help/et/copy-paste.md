---
title: Kopeeri, kleebi ja dubleeri märgid
summary: Kopeeri märgid koos nende kirjetega, kleebi need sinna, kuhu klõpsad, või samasse kohta teisel lehel, dubleeri, lõika, kustuta ja vali kõik; igaüks ühe sammuga tagasivõtmiseks.
keywords: kopeeri, kleebi, lõika, dubleeri, kleebi samale kohale, lõikelaud, vali kõik, tühista valik, mitu märki, tüüpiline korrus, korda, sama plaan, teine leht, kopeeri kirje, dubleeri kirje
from: e20e9024
---

{{ui:Redigeeri}}-grupp tööriistaribal sisaldab {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}} ja {{ui:Kleebi}}. Selle menüüs {{ui:Veel}} on ülejäänud, igaühel oma klahviga: {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samale kohale}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}} ja {{ui:Tühista valik}}. Igaüks neist on {{key:Mod+Z}} abil ühe sammuga tagasi võetav.

## Vali märgid

1. Vali {{ui:Vali}} ({{key:V}}) ja klõpsa märgil.
2. Hoia {{key:Shift}} all ja klõpsa rohkematel märkidel, et neid lisada. {{key:Shift}} + klõps valitud märgil võtab selle uuesti välja.
3. Või vajuta {{key:Mod+A}} ({{ui:Vali kõik}}), et võtta kõik avatud lehe märgid.

Kui on valitud mitu märki, näitab parempoolne paneel **Valitud märgid**: mitu igast kirjest koos nuppudega {{ui:Kopeeri}}, {{ui:Dubleeri}}, {{ui:Lõika}} ja {{ui:Kustuta märgised}}. Nurgakäepidemed ilmuvad ainult siis, kui on valitud üks märk. {{key:Esc}} ({{ui:Tühista valik}}) tühjendab valiku.

## Kopeeri ja kleebi, kuhu klõpsad

1. Vali märgid ja vajuta {{key:Mod+C}} ({{ui:Kopeeri}}). Märgid kopeeritakse koos nende kirjetega, sh iga kirje koost, jäätmed ja kulud.
2. Mine lehele, kuhu need soovid (võib olla sama leht).
3. Vajuta {{key:Mod+V}} ({{ui:Kleebi}}). Kriipsjooneline koopia liigub kursori järel.
4. Klõpsa kohta, kuhu see läheb. Kopeeritud märkide keskpunkt tuleb kursorile.

{{key:Esc}} tühistab ega lisa midagi. Kleebitud märgid jäävad pärast valituks, nii et {{key:Delete}} või {{key:Mod+Z}} eemaldab need uuesti.

Samas koguste arvestuses lähevad kleebitud märgid **samadesse kirjetesse**, nii et nende kogused liituvad neile kirjetele. Teises koguste arvestuses (teises vahekaardis või pärast {{ui:Uus}}) kasutatakse sama nime ja tüübiga kirjet; muidu lisatakse kirje koos oma koostega. Kui nime kannab teist tüüpi kirje, nimetatakse lisatud kirje "(nimi) (koopia)".

Kleebitud märgid lähevad pakkumuse alasse, mis on valitud {{ui:Kirjed}} paneeli ülaosas (või ei ühtegi). Vaata [Pakkumuse alad](topic:bid-areas).

## Kleebi samale kohale

{{key:Mod+Shift+V}} ({{ui:Kleebi samale kohale}}) paneb koopia täpselt samasse kohta avatud lehel, lehe asukoha järgi. Kasuta seda tüüpilise korruse puhul: mõõda 2. korrus, kopeeri, ava 3. korrus, kleebi samale kohale.

Kleebi samale kohale vajab lehte, mis on **sama suur** kui see, millelt kopeerisid. Teise suurusega lehel ütleb TakeoffCraft seda ega kleebi midagi; kasuta selle asemel {{ui:Kleebi}} ja klõpsa. Lehel, millelt kopeerisid, asub koopia originaalide peal.

## Mõõtkava peab sobima

Pikkused ja pindalad sõltuvad lehe mõõtkavast. Lõik, mis mõõdab 10' mõõtkavas 1/4" = 1'-0", mõõdaks 20' lehel mõõtkavas 1/8" = 1'-0". Seetõttu kleebib TakeoffCraft lõike ja pindu ainult lehele, mille **mõõtkava on sama** kui lehel, millelt need tulid, ning ütleb selgelt, kui see nii ei ole:

- Avatud lehel ei ole veel mõõtkava: anna sellele esmalt mõõtkava ([Lehe mõõtkava seadmine](topic:set-the-scale)) ja kleebi siis.
- Avatud lehel on teine mõõtkava: sõnum nimetab mõlemad mõõtkavad. Kleebi lehele samas mõõtkavas.
- Loendused ei vaja mõõtkava: kopeeritud loendused kleebitakse kuhu tahes.

## Dubleeri

{{key:Mod+D}} ({{ui:Dubleeri}}) kopeerib valitud märgid ja paneb koopia kohe kursorile; klõpsa, kuhu see läheb. Midagi ei lisata enne klõpsamist ja {{key:Esc}} ei jäta midagi. Dubleerimine ei muuda seda, mida {{ui:Kleebi}} kleebib.

## Lõika ja kustuta

- {{key:Mod+X}} ({{ui:Lõika}}) kopeerib valitud märgid ja kustutab need. Kleebi need sinna, kuhu nad kuuluvad, või võta lõikamine tagasi.
- {{key:Delete}} või {{key:Backspace}} ({{ui:Kustuta}}) kustutab valitud märgid kopeerimata.

## Kopeeri kirje

Kirje redaktor (jaotises **Kirjed**) lõpeb:

- {{ui:Kopeeri kirje}}: kopeerib kirje koos koostega, jäätmete ja kuludega, ilma märkideta. {{ui:Kleebi}} lisab siis selle koopia sellesse koguste arvestusse või teise.
- {{ui:Dubleeri kirje}}: lisab koopia kohe nimega "(nimi) (koopia)".

:::tip
Koopia jääb sellesse arvutisse: see hoitakse selles vahekaardis ja brauseri salvestusruumis, nii et teine TakeoffCrafti vahekaart saab selle kleepida. Midagi ei laadita üles ja süsteemi lõikelauda ei kasutata, seega ei saa märke teistesse programmidesse kleepida.
:::

:::note
Koopia tuleb korraga ühelt lehelt. Märgid kleebitakse nii, nagu nad on: koopia pööramine või peegeldamine ei ole veel võimalik.
:::
