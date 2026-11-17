---
title: Početak predmjera i otvaranje seta planova
summary: Otvorite jedan ili više PDF-ova kao set planova, snađite se među listovima i prelazite sa jednog na drugi.
keywords: otvaranje, set planova, više PDF-ova, više datoteka, listovi, crteži, oznake stranica, lista listova, navigacija, prevlačenje, predaja, otvaranje u drugoj aplikaciji, označavanje
from: ed434468
---

Set planova je često više PDF-ova: arhitektonski, konstruktivni, mašinski. TakeoffCraft ih otvara jedan pored drugog kao jednu listu listova, i jedan predmjer može obuhvatiti sve njih.

## Otvorite PDF-ove

1. Izaberite {{ui:Open plans}} u grupi {{ui:File}}, ili pritisnite {{key:Mod+O}}. (Ostali stilovi menija to zovu {{ui:Open PDFs…}}.)
2. U dijalogu za datoteke izaberite svaki PDF iz seta. Držite {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} da birate više, ili {{key:Shift}} da birate raspon.
3. Izaberite Otvori.
   Poruka "Otvaranje (naziv)…" se prikazuje dok se svaka datoteka čita. Zatim se svaka stranica pojavljuje pod {{ui:Sheets}}, i otvara se prva stranica prvog novog PDF-a.

Možete i prevući PDF-ove iz {{pick:mac=Finder|windows=File Explorer|linux=vašeg upravitelja datoteka}} i ispustiti ih bilo gdje na TakeoffCraft. Dok prevlačite, pojavljuje se okvir "Ispustite PDF-ove, DWG ili DXF crteže, ili .takeoff.json".

Da dodate još PDF-ova kasnije, uradite isto ponovo. PDF-ovi koji su već otvoreni se preskaču.

Početni ekran takođe navodi PDF-ove i predmjere koje ste nedavno otvarali, u preglednicima koji dozvoljavaju stranici da ponovo otvori datoteku (Chrome i Edge). Kliknite na jedan da ga otvorite; preglednik može prvo tražiti dozvolu. Vidi [Vaše datoteke](common:your-files).

:::note
Ništa se ne otprema. Preglednik čita PDF-ove na vašem računaru, a oni nestaju iz programa TakeoffCraft kad zatvorite karticu ili izaberete {{ui:New}}.
:::

## Crteži uz PDF-ove

{{ui:Open plans}} prihvata i DWG i DXF crteže, sami ili zajedno sa PDF-ovima: prostor modela i rasporedi svakog crteža postaju listovi u istoj listi. Vidi [Otvaranje DWG ili DXF crteža](topic:open-a-drawing), zatim [Brojanje iz crteža](topic:count-from-a-drawing).

## PDF predat iz druge aplikacije

Druga aplikacija iz paketa može vam predati PDF koji ima otvoren: ona otvara TakeoffCraft u novoj kartici, i PDF se tamo otvara kao da ste ga prevukli. Statusna traka kaže "Otvoreno (naziv), predato iz (aplikacija). Izvorna datoteka je nepromijenjena." Ništa se ne otprema; datoteka prolazi kroz lokalnu memoriju ovog preglednika i iz nje nestaje čim se otvori.

Ako statusna traka kaže da PDF "nije stigao", kartica je čekala predugo ili je PDF već otvoren u drugoj kartici: otvorite ga pomoću {{ui:Open plans}}.

Obrnuto, kad MarkupCraft radi tamo gdje ste i može preuzeti datoteku, traka lista ispod crteža ima dugme {{ui:MarkupCraft}}: ono otvara PDF lista na ekranu, u novoj kartici, u programu MarkupCraft, da ga pregledate i označite.

## Pronađite list

- Pomičite listu {{ui:Sheets}} lijevo i kliknite na list.
- Ukucajte u **Pretraži listove** na vrhu liste da filtrirate po broju lista, nazivu datoteke ili oznaci stranice. Brojka pored {{ui:Sheets}} prikazuje "3 od 40" dok je filter uključen.
- Pritisnite {{key:PageDown}} za sljedeći list, a {{key:PageUp}} za prethodni. Oni prate listu onako kako je filtrirana.

:::mac
Na Mac tastaturi bez tipki Page Up i Page Down pritisnite fn sa strelicom gore ili dolje.
:::

## Kako se listovi imenuju

- Stranica kojoj PDF daje oznaku, kao `A-101`, dobija ime po toj oznaci.
- Stranica bez oznake (ili sa oznakom koja je samo broj stranice) imenuje se "(naziv datoteke), stranica (n)".
- Kad je otvoreno više PDF-ova, označeni listovi nose i naziv datoteke: "A-101 — Arhitektura".

Imena listova se još ne mogu unositi ručno.

## Pogledajte list

- Okrećite točkić miša da zumirate na mjestu pokazivača.
- Prevucite lijevim ili srednjim dugmetom da pomjerate pogled. Uz {{ui:Auto brojanje}}, ili kad počnete na uglu oznake, držite {{key:Space}} dok prevlačite, ili prevucite srednjim dugmetom.
- Pritisnite {{key:F}} ili izaberite {{ui:Fit page}} da vidite cijeli list; {{key:W}} ili {{ui:Fit width}} prilagođava njegovu širinu.
- Pritisnite {{key:Plus}} ili {{key:=}} za uvećanje, a {{key:Minus}} za smanjenje, oko sredine prikaza.

Svaki list pamti svoj zoom i položaj dok je otvoren.

## Dalje

Prije mjerenja lista potrebna mu je razmjera: [Postavljanje razmjere](topic:set-the-scale).
