---
title: "Vali PDF-i jooned"
summary: "Klõpsa vektor-PDF-i joonel, et mõõta kogu selle ühendatud rada, või klõpsa suletud kontuuri sees selle pindala jaoks; näidatakse lünga tolerantsi ja üks tagasivõtmine lõigu kohta."
keywords: tee, vali, jooned, ühendatud, terve jooks, jälgi, kontuur, ümbermõõt, lünk, tolerants, sild, lõigud, tab, vektor, pindala joontest, p
from: c22526ae
---

Vektor-PDF-il on seinad ja servad päris jooned. {{ui:Tee}} ({{key:P}}) võtab need nii, nagu need on joonistatud: üks klõps joonel mõõdab kogu sellega ühendatud osa otsast otsani, nii et seina ei pea jälgima nurki klõpsates. Lehel peab olema mõõtkava. Skaneeritud leht ei sisalda jooni, mida valida; selle asemel kasuta [Lineaarset](topic:measure-linear) või [Pindala](topic:measure-areas).

## Tee või kontuuri valimine

1. Vali {{ui:Tee}}. Osuti all olev joon on esile tõstetud, teised rajad, mida see võiks olla, on õhukeselt näidatud.
2. Klõpsa joonel: kogu ühendatud rada on valitud. Tööriistariba all olev riba annab selle lõigud, pikkuse, lüngatolerantsi ja mitu lünka ületati. Rada, mis jõuab tagasi oma algusesse, on suletud ja annab ka ümbermõõdu.
3. Või klõpsa suletud kontuuri sees, eemal igast joonest: selle punkti ümber olev kontuur valitakse pindalana. Väikseim tuleb esimesena; {{key:Tab}} proovib järgmist suuremat.
4. Vajuta {{key:Enter}} (või parem klõps, või topeltklõps), et lisada märgid. Valitud rada saab **lineaarse** kirje märgiks, kontuur **pindala** kirje märgiks: aktiivne kirje, kui sellel on see tüüp, muidu uusim sellist tüüpi kirje. Kui kirjeid pole, avaneb uue kirje vorm ja midagi ei lisata enne, kui vajutad uuesti {{key:Enter}}. Kõik valitu lisatakse ühe tagasivõtmise sammuga.

## Lünga tolerants

Joonistajad jätavad väikesed augud kohtadesse, kus jooned peaksid kokku puutuma. Kaks joont ühinevad, kui nende otsad on lähemal kui **lünga tolerants**. See algab 1.5 punktist lehel (näidatakse jalgades ja tollides lehe mõõtkavas) ning nii lai punktiirrõngas liigub osuti järgi ja asub iga selle all oleva raja otsas. Igat ületatud auku ümbritseb valitud rajal oranž rõngas ja riba loeb neid.

{{key:]}} teeb tolerantsi laiemaks, {{key:[}} kitsamaks. Valitud rada ühendatakse kohe uue tolerantsiga uuesti. Ristmikul rada läheb sirgelt edasi, mööda kõige vähem kõverduvat teed, ja jätab haru maha.

## Klahvid

| Klahv või tegevus | Mida see teeb |
|---|---|
| Klõps | Vali osuti all olev rada või selle ümber olev kontuur. |
| {{key:Shift}} + klõps | Lisa veel üks rada või kontuur valikusse. |
| {{key:Tab}} | Proovi järgmist osuti all olevat rada või järgmist suuremat kontuuri. |
| {{key:Backspace}} või {{key:Mod+Z}} | Eemalda viimasest valitud rajast viimane lõik, üks lõik korraga. Rada ilma lõikudeta kaob. Kui midagi pole valitud, on {{key:Mod+Z}} tavaline tagasivõtmine. |
| {{key:[}} ja {{key:]}} | Kitsam ja laiem lüngatolerants. |
| {{key:Enter}} | Lisa märgid. |
| {{key:Esc}} | Tühjenda valik. |

## Hea teada

- Kõver joonis on lühikeste sirgete tükkide ahel, seega on selle pikkus natuke lühem kui tegelik kaar. Täpse kaare jaoks mõõda joonise enda faili ([Mõõda joonisest](topic:measure-from-a-drawing)).
- Ületatud lünk loetakse sirgeks ülekandeks üle selle, seega suletud kontuuri ümbermõõt sisaldab seda.
- Ainult lehe enda radade jooned ja täited on jooned. Tähtedena joonistatud tekst ja pildid ei ole.
