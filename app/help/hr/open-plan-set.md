---
title: "Počnite predmjer i otvorite skup nacrta"
summary: "Otvorite jedan ili više PDF-ova kao skup nacrta, snađite se među listovima i prelazite između njih."
keywords: "otvori, skup nacrta, više pdf-ova, više datoteka, listovi, crteži, oznake stranica, popis listova, navigacija, ispuštanje, predaja, otvori u drugoj aplikaciji, označavanje"
from: ed434468
---

Skup nacrta često je nekoliko PDF-ova: arhitektonski, konstrukcijski, strojarski. TakeoffCraft ih otvara jedan uz drugi kao jedan popis listova, a jedan predmjer može obuhvatiti sve njih.

## Otvorite PDF-ove

1. Odaberite {{ui:Otvori nacrte}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}. (Drugi stilovi izbornika to zovu {{ui:Otvori PDF-ove…}}.)
2. U dijaloškom okviru datoteka odaberite svaki PDF iz skupa. Držite {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} za odabir više, ili {{key:Shift}} za odabir raspona.
3. Odaberite Otvori.
   Dok se svaka datoteka čita, prikazuje se poruka „Otvaranje (name)…“. Zatim se svaka stranica pojavi pod {{ui:Listovi}}, a otvara se prva stranica prvog novog PDF-a.

PDF-ove možete povući i iz {{pick:mac=Finder|windows=Istraživač datoteka|linux=vašeg upravitelja datoteka}} i ispustiti bilo gdje na TakeoffCraft. Dok povlačite, pojavljuje se okvir „Ispustite PDF-ove, DWG ili DXF crteže ili .takeoff.json“.

Da dodate još PDF-ova kasnije, ponovite isto. PDF-ovi koji su već otvoreni se preskaču.

Početni zaslon također navodi PDF-ove i predmjere koje ste nedavno otvorili, u preglednicima koji dopuštaju stranici ponovno otvoriti datoteku (Chrome i Edge). Kliknite jedan da ga otvorite; preglednik možda najprije traži dopuštenje. Vidi [Vaše datoteke](common:your-files).

:::note
Ništa se ne učitava na poslužitelj. Preglednik čita PDF-ove na vašem računalu, a oni nestaju iz TakeoffCrafta kad zatvorite karticu ili odaberete {{ui:Novo}}.
:::

## Crteži uz PDF-ove

{{ui:Otvori nacrte}} prihvaća i DWG i DXF crteže, sami ili zajedno s PDF-ovima: prostor modela i layouti svakog crteža postaju listovi na istom popisu. Vidi [Otvorite DWG ili DXF crtež](topic:open-a-drawing), zatim [Brojanje iz crteža](topic:count-from-a-drawing).

## PDF predan iz druge aplikacije

Druga aplikacija iz paketa može vam predati PDF koji ima otvoren: otvara TakeoffCraft u novoj kartici i PDF se tamo otvara kao da ste ga ispustili. Statusna traka kaže „Otvoreno: (name), predano iz (app). Izvorna datoteka nije promijenjena.“ Ništa se ne učitava na poslužitelj; datoteka prolazi kroz pohranu ovog preglednika i nestaje iz nje čim se otvori.

Ako statusna traka kaže da PDF „nije stigao“, kartica je predugo čekala ili je PDF već otvoren u drugoj kartici: otvorite ga s {{ui:Otvori nacrte}}.

Obratno, kad MarkupCraft radi tamo gdje ste i može primiti datoteku, traka lista ispod crteža ima gumb {{ui:MarkupCraft}}: otvara PDF lista na ekranu u MarkupCraftu, u novoj kartici, za pregled i označavanje.

## Pronađite list

- Pomičite popis {{ui:Listovi}} lijevo i kliknite list.
- Upišite u **Pretraži listove** na vrhu popisa za filtriranje po broju lista, nazivu datoteke ili oznaci stranice. Brojka uz {{ui:Listovi}} pokazuje „3 od 40“ dok je filter uključen.
- Pritisnite {{key:PageDown}} za sljedeći list, a {{key:PageUp}} za prethodni. Prate popis onako kako je filtriran.

:::mac
Na Mac tipkovnici bez tipki Page Up i Page Down pritisnite fn sa strelicom gore ili dolje.
:::

## Kako se listovi imenuju

- Stranica kojoj PDF daje oznaku, poput `A-101`, imenuje se tom oznakom.
- Stranica bez oznake (ili oznake koja je samo njezin broj) zove se „(naziv datoteke), stranica (n)“.
- Kad je otvoreno više PDF-ova, listovi s oznakom nose i naziv datoteke: „A-101 — Architectural“.

Nazive listova još nije moguće upisati ručno.

## Razgledajte list

- Okretanjem kotačića miša zumirate prema pokazivaču.
- Povucite lijevom ili srednjom tipkom za pomicanje prikaza. S {{ui:Autobrojanje}}, ili kad počnete na kutu oznake, držite {{key:Space}} dok povlačite, ili povucite srednjom tipkom.
- Pritisnite {{key:F}} ili odaberite {{ui:Prilagodi stranicu}} da vidite cijeli list; {{key:W}} ili {{ui:Prilagodi širinu}} prilagođava njegovu širinu.
- Pritisnite {{key:Plus}} ili {{key:=}} za zumiranje prema unutra, a {{key:Minus}} za zumiranje prema van, oko sredine prikaza.

Svaki list pamti vlastito zumiranje i položaj dok je otvoren.

## Dalje

Prije mjerenja lista treba mu mjerilo: [Postavite mjerilo](topic:set-the-scale).
