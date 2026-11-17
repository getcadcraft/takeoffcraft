---
title: Počni predmer i otvori set planova
summary: Otvori jedan ili više PDF-ova kao set planova, snađi se među listovima i kreći se između njih.
keywords: otvori, set planova, više PDF-ova, više datoteka, listovi, crteži, oznake stranica, lista listova, navigacija, prevlačenje, predaja, otvori u drugoj aplikaciji, označavanje
from: ed434468
---

Set planova je često nekoliko PDF-ova: arhitektonski, konstruktivni, mašinski. TakeoffCraft ih otvara jedan pored drugog kao jednu listu listova, i jedan predmer može da obuhvati sve.

## Otvori PDF-ove

1. Izaberi {{ui:Otvori planove}} u grupi {{ui:Datoteka}} ili pritisni {{key:Mod+O}}. (Drugi stilovi menija to zovu {{ui:Otvori PDF-ove…}}.)
2. U dijalogu za datoteke izaberi svaki PDF iz seta. Drži {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} da izabereš više, ili {{key:Shift}} da izabereš opseg.
3. Izaberi Otvori.
   Poruka „Otvaranje (name)…" se prikazuje dok se svaka datoteka čita. Zatim se svaka stranica pojavi pod {{ui:Listovi}} i otvara se prva stranica prvog novog PDF-a.

Prevuci PDF-ove iz {{pick:mac=Finder|windows=Istraživača datoteka|linux=upravitelja datoteka}} i pusti ih bilo gde na TakeoffCraft. Dok prevlačiš, pojavljuje se okvir „Prevucite PDF-ove, DWG ili DXF crteže ili .takeoff.json".

Da dodaš još PDF-ova kasnije, uradi isto ponovo. PDF-ovi koji su već otvoreni se preskaču.

Početni ekran takođe navodi PDF-ove i predmere koje si nedavno otvorio, u pregledačima koji dozvoljavaju stranici da ponovo otvori datoteku (Chrome i Edge). Klikni jedan da ga otvoriš; pregledač možda prvo traži dozvolu. Pogledaj [Tvoje datoteke](common:your-files).

:::note
Ništa se ne otprema. Pregledač čita PDF-ove na tvom računaru, a oni nestaju iz programa TakeoffCraft kada zatvoriš karticu ili izabereš {{ui:Novi}}.
:::

## Crteži uz PDF-ove

{{ui:Otvori planove}} prima i DWG i DXF crteže, sami ili zajedno sa PDF-ovima: prostor modela i rasporedi svakog crteža postaju listovi u istoj listi. Pogledaj [Otvori DWG ili DXF crtež](topic:open-a-drawing), pa [Brojanje iz crteža](topic:count-from-a-drawing).

## PDF predat iz druge aplikacije

Druga aplikacija iz paketa može da ti preda PDF koji ima otvoren: otvara TakeoffCraft u novoj kartici i PDF se tu otvara kao da si ga prevukao. Statusna traka kaže „Otvoreno (name), predato iz (app). Originalna datoteka nije promenjena." Ništa se ne otprema; datoteka prolazi kroz lokalno skladište ovog pregledača i nestaje iz njega čim se otvori.

Ako statusna traka kaže da PDF „nije stigao", kartica je predugo čekala ili je PDF već otvoren u drugoj kartici: otvori ga sa {{ui:Otvori planove}}.

Obrnuto, kada je MarkupCraft pokrenut tu gde si i može da primi datoteku, traka lista ispod crteža ima dugme {{ui:MarkupCraft}}: otvara PDF lista na ekranu u programu MarkupCraft, u novoj kartici, da ga pregledaš i označiš.

## Pronađi list

- Pomeri se kroz listu {{ui:Listovi}} sa leve strane i klikni list.
- Ukucaj u **Pretraži listove** na vrhu liste da filtriraš po broju lista, nazivu datoteke ili oznaci stranice. Brojač pored {{ui:Listovi}} pokazuje „3 od 40" dok je filter uključen.
- Pritisni {{key:PageDown}} za sledeći list i {{key:PageUp}} za prethodni. Oni prate listu kako je filtrirana.

:::mac
Na Mac tastaturi bez tastera Page Up i Page Down pritisni fn sa strelicom gore ili dole.
:::

## Kako se listovi imenuju

- Stranica koja u PDF-u ima oznaku, na primer `A-101`, dobija ime po toj oznaci.
- Stranica bez oznake (ili sa oznakom koja je samo broj stranice) imenuje se „(naziv datoteke), stranica (n)".
- Kada je više PDF-ova otvoreno, listovi sa oznakom nose i naziv datoteke: „A-101 — Arhitektonski".

Nazive listova još nije moguće ručno upisati.

## Pogledaj oko lista

- Okreći točkić miša da zumiraš na mestu pokazivača.
- Prevlači levim ili srednjim dugmetom da pomeraš pogled. Uz {{ui:Automatsko brojanje}}, ili kada počneš na uglu oznake, drži {{key:Space}} dok prevlačiš, ili prevlači srednjim dugmetom.
- Pritisni {{key:F}} ili izaberi {{ui:Uklopi stranicu}} da vidiš ceo list; {{key:W}} ili {{ui:Uklopi širinu}} uklapa njegovu širinu.
- Pritisni {{key:Plus}} ili {{key:=}} za uvećanje i {{key:Minus}} za smanjenje, oko sredine prikaza.

Svaki list pamti svoj zum i položaj dok je otvoren.

## Dalje

Pre merenja lista treba mu razmera: [Podesi razmeru](topic:set-the-scale).
