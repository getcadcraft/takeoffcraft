---
title: Alustamine rakendusega TakeoffCraft
summary: Mis on TakeoffCraft, kus see töötab ja su esimene mõõdetud ning hinnastatud kirje PDF-plaanikomplektist.
keywords: alustamine, esimene koguste arvestus, kiire alustamine, sissejuhatus, eelarve, koguste arvestus, plaanikomplekt, pdf
from: 3b9da1fb
---

TakeoffCraft mõõdab plaanikomplekte, PDF-e ning DWG- ja DXF-jooniseid ja muudab mõõtmised hinnastatud eelarveks. Sa avad failid (joonist loetakse otse selle plokkidest: vt [Ava DWG- või DXF-joonis](topic:open-a-drawing)), annad igale lehele mõõtkava (joonis toob oma), teed **kirjed** (seinatüüp, põrandaviimistlus, armatuur) ja klõpsad lehtedel, et neid mõõta. Kogused, kulud ja töö kogusumma uuenevad töö käigus. Eelarve võid eksportida tabelarvutusena ja koopiana PDF-idest, millele on joonistatud sinu koguste arvestus.

Kui oled koguste arvestust teinud teistes programmides, loe järgmisena [Teisest koguste arvestuse tarkvarast üleminek](topic:coming-from). Mõned asjad töötavad siin teisiti.

## Kus see töötab

TakeoffCraft töötab sinu veebibrauseris. Ava TakeoffCraft ja ekraan on kohe valmis; midagi pole vaja paigaldada.

- **Sinu PDF-id jäävad sinu arvutisse.** Brauser avab need ja neid ei laadita kunagi üles. Salvestamine on allalaadimine.
- Töötab praeguste Chrome'i, Edge'i, Firefoxi ja Safari brauseritega. Vt [Brauserid ja arvutid](common:browsers).
- Töötab ilma internetiühenduseta, kui oled valinud rakenduse ribal {{ui:Salvesta võrguks}} ja see ütleb {{ui:Valmis ka võrguta}}. Vt [Töö võrguta](common:offline).
- Pilvesalvestus pole veel saadaval. Töölauarakendusena tuleb TakeoffCraft CadCraft Studio'ga koos teiste seitsme rakendusega.

## Su esimene koguste arvestus kümne sammuga

See juhend mõõdab ühe seinatüübi ja hinnastab selle. Võtab mõne minuti igal sinu plaanil.

1. Vali tööriistaribal rühmas {{ui:Fail}} {{ui:Ava plaanid}} (või vajuta {{key:Mod+O}}), vali üks või mitu PDF-i ja vali Ava. Võid PDF-id ka lihtsalt lehele lohistada.
   Lehed ilmuvad vasakule ja esimene leht avaneb keskele.
2. Leia lehe trükitud mõõtkava selle tiitliplokist või joonise pealkirja alt.
3. Ava rühma {{ui:Mõõtkava}} loend {{ui:Eelseade}} ja vali see mõõtkava, nt `1/4" = 1'-0"`.
   Riba lehe all ütleb nüüd „Mõõtkava 1/4" = 1'-0"“.
4. Vali {{ui:Kontrolli}} (või vajuta {{key:D}}) ja klõpsa joonisel trükitud mõõdu kahe otspunkti peale.
   Olekuribal vasakus alanurgas olev näit peaks vastama trükitud mõõdule. Kui ei vasta, vt [Mõõtkava seadmine](topic:set-the-scale).
5. Paremal paneelil **{{ui:Kirjed}}** vali {{ui:Uus kirje}}, kirjuta nimi nagu `Interior wall type A`, jäta tüübiks {{ui:Joon (pikkus)}} ja vali {{ui:Lisa}}.
6. Vali tööriistaribal {{ui:Lineaarne}} (või vajuta {{key:L}}).
7. Klõpsa seina algusest ja siis iga nurk selle ääres. Topeltklõps, {{key:Enter}} või parem klõps lõpetab joone.
   Joon joonistatakse kirje värviga ja selle pikkus ilmub kirje kõrvale.
8. Paneeli {{ui:Kirjed}} all olevas kirje redaktoris kirjuta väljale {{ui:Kõrgus}} `9'-0"`, väljale {{ui:Materjal $/LF}} `0.85` ja väljale {{ui:Tööjõud $/LF}} `1.20`.
   Alumine tabel {{ui:Kogused}} näitab pikkust, laiendatud materjali ja tööjõudu ning {{ui:Töö kogusumma}}.
9. Vali {{ui:Salvesta koguste arvestus}} (või vajuta {{key:Mod+S}}).
   Brauser laadib alla faili `.takeoff.json`. See sisaldab sinu kirjeid, mõõtkavasid ja märgiseid ning avaneb samade PDF-ide peal uuesti.
10. Ava tööriistaribal menüü {{ui:Eksport}} ja vali {{ui:XLSX}}, et laadida eelarve alla tabelarvutusena.

:::tip
Vajuta {{key:Esc}}, et lõpetada praegune tegevus ja naasta tööriista {{ui:Vali}} juurde. {{key:Mod+Z}} võtab tagasi iga muudatuse.
:::

## Mida lugeda järgmisena

- [TakeoffCraft'i ekraan](topic:workspace) nimetab iga akna osa.
- [Alusta koguste arvestust ja ava plaanikomplekt](topic:open-plan-set) käsitleb mitut PDF-i ja lehtede loendit.
- [Loo koguste arvestuse kirjed](topic:create-items) selgitab tüüpe, ühikuid, kadu ja määrasid.
- [Koostud ja valemid](topic:assemblies) muudavad ühe mõõdu tugiliistudeks, plaadilehtedeks ja muuks.
- [Klaviatuur ja hiir](topic:keyboard) loetleb kõik klahvid.
