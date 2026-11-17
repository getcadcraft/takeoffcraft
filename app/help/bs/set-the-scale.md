---
title: Postavi razmjeru
summary: Daj svakom listu razmjeru preko unaprijed zadane ili kalibracijom na poznatoj dimenziji, provjeri je, i razumi zašto listovi bez razmjere ne ulaze u zbirove.
keywords: otkrij razmjeru, pročitaj razmjeru, razmjera iz teksta, svi listovi, razmjera, kalibriraj, unaprijed zadana, provjeri razmjeru, provjeri, poznata dimenzija, bez razmjere, nema razmjere, odnos, postavi razmjeru
from: 8f0148e6
---

Svaki list ima svoju razmjeru. Ti je postaviš ili pustiš da TakeoffCraft pročita tekst listova (dolje), pa je provjeriš. Dok list nema razmjeru, {{ui:Linijski}}, {{ui:Površina}}, {{ui:Krug}} i {{ui:Izrez}} odbijaju da mjere na njemu. {{ui:Brojanje}} i {{ui:Auto brojanje}} rade bez razmjere.

Spisak listova prikazuje razmjeru svakog lista, ili **Nema razmjere**. Traka ispod otvorenog lista kaže isto.

## Koristi unaprijed zadanu (kad je PDF odštampan u punoj veličini)

1. Otvori list.
2. Otvori listu {{ui:Unaprijed zadana}} u grupi {{ui:Razmjera}}.
3. Odaberi razmjeru odštampanu na crtežu, na primjer `1/8" = 1'-0"` pod Arhitektonska.
   Statusna traka kaže "Razmjera za ovaj list: 1/8" = 1'-0"."
4. Provjeri je (dolje).

Unaprijed zadana razmjera pretpostavlja da je PDF prava papirna veličina za koju je crtež napravljen. Ako je neko napravio PDF s opcijom „prilagodi stranici“, ili je to set u polovičnoj veličini, unaprijed zadana razmjera je pogrešna. Umjesto nje kalibriraj.

Cijeli spisak je u [Unaprijed zadane razmjere](topic:scale-presets).

## Čitaj razmjere iz teksta listova

Većina crteža navodi razmjeru: `SCALE: 1/4" = 1'-0"` u naslovnom bloku, `1:100` ispod pogleda. TakeoffCraft je može pročitati i postaviti svaki list odjednom.

1. Otvori listu {{ui:Unaprijed zadana}} i odaberi {{ui:Iz teksta listova…}} (na vrhu).
2. Lista prikazuje svaki list: njegovu trenutnu razmjeru i šta kaže njegov tekst — **Kaže 1/4" = 1'-0"**, **Nema razmjere u tekstu** ili **Kaže da nije u razmjeri** (NTS).
3. Listovi bez razmjere koji imaju je označeni su. Označi ili odznači bilo koji, pa odaberi {{ui:Postavi označene razmjere}}. Jedan {{key:Mod+Z}} vraća sve.
4. Provjeri jednu dimenziju na svakom listu sa {{ui:Provjeri}} (dolje): unaprijed zadana je ispravna samo ako je PDF odštampan u punoj veličini.

Čita arhitektonske (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inženjerske (`1" = 20'`) i metričke (`1:50`) zapise koji odgovaraju [unaprijed zadanoj razmjeri](topic:scale-presets). Kad list kaže više od jedne razmjere (plan s uvećanim detaljima), uzima onu koju najčešće navodi, a onu napisanu nakon riječi SCALE broji dvostruko; ostale se prikazuju crveno da ih provjeriš. Skenirani list nema tekst: postavi mu razmjeru ručno.

## Kalibriraj na poznatoj dimenziji

Koristi ovo kad nema odštampane razmjere kojoj vjeruješ, set je promijenjen, ili list kaže „nije u razmjeri“ ali ima dimenzije.

1. Otvori list i uvećaj dugu dimenziju koju znaš, kao razmak mreže ili ukupnu dimenziju zgrade. Što duža, to tačnija.
2. Odaberi {{ui:Kalibriraj}} u grupi {{ui:Razmjera}}, ili pritisni {{key:K}}.
3. Klikni jedan kraj dimenzije. Uvećaj svaki kraj radi preciznosti; možeš uvećavati i pomjerati između klikova.
4. Klikni drugi kraj. Drži {{key:Shift}} da linija ostane na 0°, 45° ili 90°.
   Otvara se dijalog **Kalibriraj ovaj list**.
5. Upiši stvarnu dužinu u **Stvarna dužina**, na primjer `24'-6 1/2"`, `24.5` (decimalne stope), `30"` ili `7.5 m`. Pogledaj [Unos dužine, cijene i postotka](topic:entry-formats).
6. Odaberi {{ui:Postavi razmjeru}}.
   Statusna traka prikazuje razmjeru kao "1" = (n)'", a kad je unutar 0.5% od unaprijed zadane, kaže koja je, na primjer "što odgovara 1/4" = 1'-0" (odaberi tu unaprijed zadanu za tačnu razmjeru)".
   TakeoffCraft se vraća na alat {{ui:Odaberi}}.

Kad se kalibracija poklapa s unaprijed zadanom razmjerom, odabir te unaprijed zadane daje tačnu razmjeru umjesto one koja zavisi od mjesta gdje si kliknuo.

## Provjeri razmjeru

Uvijek provjeri novu razmjeru na drugoj dimenziji.

1. Odaberi {{ui:Provjeri}} u grupi {{ui:Razmjera}}, ili pritisni {{key:D}}.
2. Klikni oba kraja dimenzije odštampane na crtežu.
   Statusna traka prikazuje "Provjera: 12'-6"" s istom dužinom u decimalnim stopama i metrima, a linija provjere ostaje na listu s svojom dužinom.
3. Uporedi s odštampanom dimenzijom. Ako nije tačno, kalibriraj na dužoj dimenziji.

Pritisni {{key:Esc}} da obrišeš liniju provjere.

## Promijeni razmjeru

Odaberi drugu unaprijed zadanu ili ponovo kalibriraj. Ako list već ima mjerenja, TakeoffCraft pita **Promijeniti razmjeru ovog lista?** i kaže koliko će se mjerenja ponovo izmjeriti. Odaberi {{ui:Promijeni razmjeru}}. Svaka dionica i površina na listu se ponovo mjeri u novoj razmjeri. Možeš poništiti sa {{key:Mod+Z}}.

## Zašto listovi bez razmjere nisu računati kao nula

Oznaka na listu bez razmjere nema stvarnu dužinu ni površinu. TakeoffCraft je nikad ne računa kao nulu, jer bi to tiho učinilo tvoj predmjer preniskim. Umjesto toga:

- izostavlja te oznake iz zbirova,
- prikazuje "+(n) bez razmjere" pored stavke u {{ui:Količine}},
- prikazuje "Nepotpuno: (n) oznaka na listovima bez razmjere (nisu u zbirovima)" u zaglavlju tabele,
- upisuje broj u kolonu napomena izvezene tabele.

Ovo se može desiti kad otvoriš projekat čije razmjere nikad nisu postavljene. Daj listu razmjeru i oznake se odmah računaju. Oznake brojanja se uvijek računaju; one ne trebaju razmjeru.

## Savjeti

- Postavi razmjeru na svakom listu koji ćeš mjeriti prije početka. Pregledaj spisak listova za **Nema razmjere** da nađeš one koji su ostali (polje za pretragu gleda nazive listova, a ne razmjere).
- Detalji i uvećani planovi na istom listu često koriste drugu razmjeru. TakeoffCraft ima jednu razmjeru po listu; pogledaj [Šta još nije urađeno](topic:not-built-yet).
- Metrički crteži: odaberi metričku unaprijed zadanu poput `1:100`, ili kalibriraj metričkom dužinom poput `6000 mm`.
