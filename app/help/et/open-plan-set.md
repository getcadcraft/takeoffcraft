---
title: "Alusta koguste arvestust ja ava plaanikomplekt"
summary: "Ava üks või mitu PDF-i plaanikomplektina, leia tee lehtede vahel ja liigu nende vahel."
keywords: ava, plaanikomplekt, mitu pdf-i, mitu faili, lehed, joonised, lehesildid, lehtede loend, navigeeri, lohista, üleandmine, ava teises rakenduses, märgistus
from: ed434468
---

Plaanikomplekt on sageli mitu PDF-i: arhitektuur, konstruktsioon, mehaanika. TakeoffCraft avab need kõrvuti ühe lehtede loendina ja üks koguste arvestus võib katta kõik.

## PDF-ide avamine

1. Vali rühmas {{ui:Fail}} {{ui:Ava plaanid}} või vajuta {{key:Mod+O}}. (Teised menüüstiilid nimetavad seda {{ui:Ava PDF-id…}}.)
2. Failidialoogis vali kogu komplekti kõik PDF-id. Mitme valimiseks hoia all {{pick:mac=Command|windows=Ctrl|linux=Ctrl}}, vahemiku valimiseks {{key:Shift}}.
3. Vali Ava.
   Iga faili lugemise ajal kuvatakse teade „Avan (nimi)…“. Seejärel ilmub iga leht rubriiki {{ui:Lehed}} ja avatakse uue PDF-i esimene leht.

Võid PDF-id lohistada ({{pick:mac=Finder|windows=File Explorer|linux=sinu failihaldur}}) ja kukutada need kuhu tahes TakeoffCraftile. Lohistamise ajal ilmub raam „Lohista PDF-id, DWG- või DXF-joonised või .takeoff.json“.

Veel PDF-e saad lisada hiljem, tehes sama uuesti. Juba avatud PDF-id jäetakse vahele.

Alustuskuva loetleb ka hiljuti avatud PDF-id ja koguste arvestused brauserites, mis lubavad lehel faili uuesti avada (Chrome ja Edge). Klõpsa ühel, et see avada; brauser võib enne luba küsida. Vt [Sinu failid](common:your-files).

:::note
Midagi ei laadita üles. Brauser loeb PDF-e sinu arvutist ja need kaovad TakeoffCraftist, kui suled vahelehe või valid {{ui:Uus}}.
:::

## Joonised PDF-ide kõrval

{{ui:Ava plaanid}} võtab ka DWG- ja DXF-joonised, üksi või koos PDF-idega: iga joonise mudeliruum ja paigutused saavad lehtedeks samas loendis. Vt [Ava DWG- või DXF-joonis](topic:open-a-drawing), seejärel [Loenda joonisest](topic:count-from-a-drawing).

## PDF, mis tuli teisest rakendusest

Teine komplekti rakendus võib anda sulle PDF-i, mis tal on avatud: see avab TakeoffCraftile uue vahelehe ja PDF avatakse seal nii, nagu oleks sa selle sinna lohistanud. Olekuriba ütleb „Avatud (nimi), edastatud rakendusest (rakendus). Algne fail on muutmata.“ Midagi ei laadita üles; fail läbib selle brauseri oma salvestuse ja on sealt kadunud, kui see avatakse.

Kui olekuriba ütleb, et PDF „ei jõudnud kohale“, ootas vaheleht liiga kaua või PDF oli juba avatud teises vahelehes: ava see {{ui:Ava plaanid}} abil.

Vastupidi: kui MarkupCraft töötab seal, kus sa oled, ja suudab faili vastu võtta, on joonise all olevas lehe ribas nupp {{ui:MarkupCraft}}. See avab ekraanil oleva lehe PDF-i MarkupCraftis uuel vahelehel, et seda üle vaadata ja märgistada.

## Lehe leidmine

- Keri vasakul olevat loendit {{ui:Lehed}} ja klõpsa lehel.
- Kirjuta loendi ülaosas **Otsi lehti**, et filtreerida lehenumbri, faili nime või lehesildi järgi. {{ui:Lehed}} kõrval olev arv näitab „3 / 40“, kui filter on sees.
- Vajuta {{key:PageDown}} järgmise lehe jaoks ja {{key:PageUp}} eelmise jaoks. Need järgivad loendit nii, nagu see on filtreeritud.

:::mac
Mac-klaviatuuril, millel pole Page Up ja Page Down klahve, vajuta fn koos noole üles või alla.
:::

## Lehtede nimed

- Leht, millel PDF annab sildi, näiteks `A-101`, on nimetatud selle sildi järgi.
- Leht ilma sildita (või sildiga, mis on lihtsalt lehenumber) on nimetatud „(faili nimi), leht (n)“.
- Kui on avatud mitu PDF-i, kannavad silditud lehed ka faili nime: „A-101 — Arhitektuur“.

Lehtede nimesid ei saa veel käsitsi sisestada.

## Lehe vaatamine

- Keera hiireratast, et suumida osuti kohas.
- Lohista vasaku või keskmise nupuga, et nihutada. {{ui:Automaatse loenduse}} korral või siis, kui alustad märgi nurgast, hoia all {{key:Space}} ja lohista, või lohista keskmise nupuga.
- Vajuta {{key:F}} või vali {{ui:Sobita leht}}, et näha kogu lehte; {{key:W}} või {{ui:Sobita laius}} sobitab laiuse.
- Vajuta {{key:Plus}} või {{key:=}}, et suumida sisse, ja {{key:Minus}}, et suumida välja vaate keskpunkti ümber.

Iga leht mäletab oma suumi ja asendit, kuni see on avatud.

## Järgmine

Enne kui lehte saab mõõta, peab sellel olema mõõtkava: [Määra mõõtkava](topic:set-the-scale).
