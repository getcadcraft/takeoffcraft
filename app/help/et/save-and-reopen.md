---
title: Koguste arvestuse salvestamine ja uuesti avamine
summary: Salvesta koguste arvestus projektifailina .takeoff.json, ava see uuesti samade PDF-idega ning vaata, mis juhtub, kui PDF puudub või on muutunud.
keywords: koguste arvestus PDF-i sees, manus, salvestamine, avamine, uuesti avamine, projekt, takeoff.json, jätkamine, muudetud PDF, muudetud fail, puuduv PDF, varukoopia, automaatne salvestus, taastamine, krahh
from: bd5080a6
---

Koguste arvestus salvestatakse väikese projektifailina `(name).takeoff.json`. See sisaldab sinu kirjeid, koostuid, määrasid, iga lehe mõõtkava ja iga märki. Ta **ei** sisalda PDF-e; ta leiab need uuesti nende sisu järgi.

## Salvestamine

1. Vali rühmas {{ui:Fail}} {{ui:Salvesta koguste arvestus}} või vajuta {{key:Mod+S}}.
   Sinu brauser laadib alla `(name).takeoff.json`. Olekuribal on „Salvestatud (name).takeoff.json. See avaneb samade PDF-ide peale (need sobitatakse sisu järgi).“
2. Teisalda fail töö PDF-ide kõrvale, et need jääksid kokku.

Iga salvestus laadib alla uue faili. Sinu brauser võib teist faili nimetada `(name) (1).takeoff.json`; hoia uusim.

Nimi tuleb esimesest PDF-ist, mille selles koguste arvestuses avasid.

:::note
Salvesta koguste arvestus on endiselt ainus viis koguste arvestust failina hoida. Töö ajal hoiab TakeoffCraft ka taastamiskoopiat selles brauseris (vt allpool) ning pilvesalvestus pole veel saadaval. Kui proovid sulgeda vahekaarti salvestamata muudatustega, küsib brauser, kas lahkuda.
:::

## Hoia koguste arvestus PDF-i sees

{{ui:Eksport}} › {{ui:PDF koos koguste arvestusega}} laadib alla iga avatud PDF-i koopia nimega nagu `Plans (with takeoff).pdf`. Koopia sisaldab kogu koguste arvestust manusena: kirjed, märgid, mõõtkavad, pakkumuse alad, kõik, mis `.takeoff.json` sisaldab. Lehed jäävad puutumata, nii et see näeb ja trükib välja nagu algne, ning teised PDF-lugejad näevad koguste arvestust oma manuste all.

Ava see PDF TakeoffCraftis (mis tahes viisil, kuidas PDF-e avad) ja see küsib **See PDF sisaldab koguste arvestust**: vali {{ui:Ava koguste arvestus}}, et see tagasi saada, või {{ui:Ainult PDF}}, et avada ainult joonis. Koopia esindab PDF-i, millest see tehti, seega avaneb mõlemast salvestatud `.takeoff.json` mõlemal.

Mitme PDF-i korral sisaldab iga koopia kogu koguste arvestust; ava need koos. Koopiast uuesti salvestamine asendab selles oleva koguste arvestuse, see ei lisa teist. `.takeoff.json` on ikka fail, mida hoida: see on väike ning sellesse kirjutavad automaatne salvestus ja töölauarakendus.

## Kui vahekaart või brauser peatub

Mõne sekundi pärast iga muudatust hoiab TakeoffCraft koguste arvestusest koopiat selle brauseri oma salvestuses koos PDF-idega, kui need kokku on 64 MB või vähem. Midagi ei laadita üles. Kui salvestad koguste arvestuse, alustad uut või avad mõne teise projekti, koopia kustub.

Kui vahekaart jookseb kokku, brauser või arvuti peatub või lahkud salvestamata muudatustega, küsib TakeoffCraft järgmisel avamisel **Taasta sinu töö?** ja loetleb koguste arvestused nime järgi. Vali **Taasta**, et need tagasi saada: kirjed, märgid ja mõõtkavad tulevad tagasi ning selle PDF-id avanevad uuesti, kui need alles hoiti. Olekuribal on „Taastatud (name). See pole veel failina salvestatud: nupp Salvesta koguste arvestus salvestab selle.“ Kui PDF-id olid liiga suured, et hoida, ava need uuesti; märgid ilmuvad nende lehtedele. Lisaks: [Töö taastamine](common:recover).

## Uuesti avamine

1. Ava TakeoffCraft.
2. Lohista `.takeoff.json` fail ja selle PDF-id lehele koos. Või vali PDF-ide jaoks {{ui:Ava plaanid}} ja projekti jaoks {{ui:Ava koguste arvestus}}, kummaski järjekorras.
   Olekuribal on „Avatud (name): 12 kirjet, 340 märki.“ Iga leht saab tagasi oma mõõtkava ja märgid ilmuvad lehtedele.

PDF-ide järjekord ei loe ning ka nende failinimed ja kaustad ei loe. TakeoffCraft tunneb iga PDF-i ära selle sisu sõrmejälje järgi.

Kui avad projekti, kui praegusel koguste arvestusel on salvestamata muudatused, küsib TakeoffCraft kõigepealt: **Loobu**, **Hülga muudatused** või **Salvesta koguste arvestus enne**. Projekti avamine asendab praegused kirjed ja märgid; juba avatud PDF-id jäävad avatuks.

## Kui PDF puudub

Kui avad projekti ilma kõigi selle PDF-ideta, lisab olekurida: „Ava selle PDF-id, et näha märgid (loetletud lehtede all).“ Lehtede loendi all on märkus:

„See koguste arvestus katab ka PDF-e, mis ei ole avatud. Nende kogused loetakse; ava need, et näha ja muuta nende märke:“

Sellele järgnevad failinimed ja suurused. Nende märgid loevad ikka iga kogusumma ja ekspordi sisse, mõõtkavaga, millega need mõõdeti. Ava need PDF-id, et näha ja muuta märke.

## Kui PDF on muutunud

PDF, mida on muudetud või mis on teises programmis uuesti salvestatud, on erineva sisuga, seega on TakeoffCraftile **teine fail**, isegi kui nimi on sama. Lehtede loendi all olevas märkuses ütleb selline fail: „fail selle nimega on avatud, kuid sisu erineb“.

- Märgid jäävad vana versiooniga seotuks. Need loevad ikka, vanades asukohtades ja mõõtkavades.
- Muudetud PDF avaneb uute lehtedena ilma mõõtkava ja märkideta.

Et koguste arvestus muudetud versioonile üle viia, ava mõlemad PDF-id ja kasuta uuel lehel {{ui:Võrdle}}: [Muudetud lehe võrdlemine ja koguste arvestuse teisaldamine](topic:compare-revisions).

## Kahjustatud või võõras fail

TakeoffCraft kontrollib iga projektifaili enne kasutamist. Võid näha järgmisi teateid:

- „(fail) ei ole TakeoffCraft projekt (see ei ole korrektne JSON).“
- „See ei ole TakeoffCraft projektifail.“
- „Selle projekti salvestas uuem TakeoffCraft. Ava see seal.“
- „3 märki olid kahjustatud ja jäeti välja.“ (ülejäänu avaneb)

## Võtmise ajalugu

Võtmise ajalugu algab uuesti, kui avad projekti. Salvestamine seda ei tühjenda.
