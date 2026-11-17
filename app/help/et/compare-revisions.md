---
title: Võrdle parandatud lehte ja teisalda koguste arvestus
summary: Aseta vana leht parandatud versiooni peale, joonda need, vaata, mis muutus, ja teisalda koguste arvestus uuele lehele märgitud kontrollitavate märkidega.
keywords: parandus, parandatud, võrdle, kattekiht, vana, uus, muudatused, lisa, bülletään, uuesti väljastatud, teisalda koguste arvestus, üle kanda, kaasa viia, joonda, märgistatud, kontrolli
from: 3a1d9fe0
---

Kui leht välja antakse uuesti, ei pea sa seda uuesti üles võtma. Ava vana PDF ja uus, võrdle kahte lehte ning teisalda koguste arvestus üle. TakeoffCraft märgistab iga märgi, kus joonis muutus, nii et kontrollid need ja jätad ülejäänud alles.

## Võrdle

1. Ava mõlemad PDF-id: vana komplekt ja parandatud ({{ui:Ava plaanid}}; need võivad olla ühes või mitmes failis).
2. Näita **uut** lehte.
3. Vali {{ui:Võrdle}} joonise all lehe ribal.
4. Vali nimekirjast vana leht. TakeoffCraft pakub lehte, millel on teises PDF-is sama number, või sama leht. Vali **Võrdle**.

Vana joonis asub nüüd punasena uue peal. Kus kaks nõustuvad, on punased jooned mustade peal; kus nad erinevad, näed ainult punaseid jooni (eemaldatud) ja ainult musti jooni (lisatud). Lehe all olev riba sisaldab allpool toodud samme. {{key:Esc}} või {{ui:Sulge}} lõpetab võrdlemise.

## Joonda

Parandatud lehed on sageli veidi nihkes: lehel nihutatud või veidi erineva suurusega. Kui punane joonis ei asu musta peal, vali **Joonda kahe punktiga** ja klõpsa neli korda:

1. punkt vanal (punasel) joonisel, näiteks veeru keskpunkt või hoone nurk,
2. sama punkt uuel (mustal) joonisel,
3. teine punkt punasel joonisel, kaugel esimesest,
4. sama punkt mustal joonisel.

Punane joonis liigub, pöördub ja skaleerub mustale. Olekuriba ütleb, kui palju suurem on uus joonis ("suurus × 1.000", kui see on sama). Suumi punktide valimiseks sisse: mida lähemal klõpsad, seda parem sobivus.

## Leia muudatused

Vali **Leia muudatused**. TakeoffCraft võrdleb kahe joonise tinti: ainult vanal lehel olev tint muutub punaseks, ainult uuel lehel olev tint muutub siniseks ning olekuriba loeb need. Jooned, mis nihkusid juuksekarva võrra (uuesti joonistamine), ei lähe muudatustena arvesse.

Lisaks vaadatakse iga märki vanal lehel ja loetakse need, mis asuvad kohas, kus joonis muutus:

- lõik või pindala, kui joonis muutus ühes selle otsas või nurgas või vähemalt umbes kuuendiku pikkuses;
- loendus, kui selle kõrval muutus midagi.

## Teisalda koguste arvestus

Vali **Teisalda koguste arvestus siia**. Iga märk vanal lehel liigub uuele läbi joondamise, ühe tagasivõtmise sammuga. Need, mis on muutuse kõrval, märgistatakse: nad joonistatakse oranži hõlmaga ja lehe riba näitab "(n) kontrollida".

Kui uuel lehel ei olnud mõõtkava, võtab see vana lehe mõõtkava (kohandatud, kui joonised tuli joondamiseks skaleerida). Kui sellel oli juba teine mõõtkava, küsib TakeoffCraft enne: teisaldatud märgid mõõdetakse uue lehe mõõtkavas.

## Kontrolli märgistatud märke

1. Vali lehe ribal "(n) kontrollida". See suumib järgmise märgistatud märgini ja valib selle; selle paneel ütleb, miks see on märgistatud.
2. Paranda märk, kui joonis selle all muutus (lohista selle nurki, lisa või kustuta märke või võta see uuesti maha).
3. Vali selle paneelis **Kontrollitud**. Märgistus kaob ja lehe riba loendus väheneb.

Märgistused salvestatakse koos koguste arvestusega, nii et saad need hiljem üle vaadata.

:::note
Võrdlus töötab nii vektor-PDF-idel kui ka skaneeringutel, sest see võrdleb seda, mis on joonistatud. Viltu või venitatud skaneering võib kahe punktiga joonduda ainult ligikaudu; kontrolli siis rohkem märke silmaga.
:::
