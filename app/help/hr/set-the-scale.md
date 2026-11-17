---
title: Postavljanje mjerila
summary: Dajte svakom listu mjerilo pomoću predloška ili kalibracijom na poznatoj mjeri, provjerite ga i saznajte zašto listovi bez mjerila nisu uključeni u ukupne iznose.
keywords: otkrij mjerilo, pročitaj mjerilo, mjerilo iz teksta, svi listovi, mjerilo, kalibriraj, predložak, provjeri mjerilo, provjera, poznata mjera, bez mjerila, nema mjerila, omjer, postavi mjerilo
from: 8f0148e6
---

Svaki list ima vlastito mjerilo. Vi ga postavljate ili pustite da TakeoffCraft pročita mjerilo iz teksta listova (u nastavku), a zatim ga provjerite. Dok list nema mjerilo, {{ui:Linearno}}, {{ui:Površina}}, {{ui:Kružnica}} i {{ui:Otvor}} odbijaju mjeriti na njemu. {{ui:Broji}} i {{ui:Autobrojanje}} rade bez mjerila.

Popis listova prikazuje mjerilo svakog lista ili **Nema mjerila**. Traka ispod otvorenog lista kaže isto.

## Upotreba predloška (kada je PDF ispisan u punoj veličini)

1. Otvorite list.
2. Otvorite popis {{ui:Predložak}} u grupi {{ui:Mjerilo}}.
3. Odaberite mjerilo ispisano na crtežu, na primjer `1/8" = 1'-0"` pod Arhitektonsko.
   Statusna traka kaže „Mjerilo za ovaj list: 1/8" = 1'-0".“
4. Provjerite ga (u nastavku).

Predložak pretpostavlja da je PDF prava papirna veličina za koju je crtež napravljen. Ako je netko napravio PDF s „prilagodi stranici“ ili je riječ o setu u polovičnoj veličini, predložak je pogrešan. Umjesto njega kalibrirajte.

Cijeli popis nalazi se u [Predlošci mjerila](topic:scale-presets).

## Čitanje mjerila iz teksta listova

Većina crteža navodi svoje mjerilo: `SCALE: 1/4" = 1'-0"` u zaglavlju, `1:100` ispod pogleda. TakeoffCraft ga može pročitati i postaviti svaki list odjednom.

1. Otvorite popis {{ui:Predložak}} i odaberite {{ui:Iz teksta listova…}} (na vrhu).
2. Popis prikazuje svaki list: njegovo trenutno mjerilo i što njegov tekst kaže — **Navodi 1/4" = 1'-0"**, **Nema mjerila u tekstu** ili **Navodi da nije u mjerilu** (NTS).
3. Listovi bez mjerila koji ga navode označeni su kvačicom. Označite ili odznačite bilo koji, zatim odaberite {{ui:Postavi označena mjerila}}. Jedan {{key:Mod+Z}} sve vraća.
4. Provjerite jednu dimenziju na svakom listu pomoću {{ui:Provjeri}} (u nastavku): predložak je ispravan samo ako je PDF ispisan u punoj veličini.

Čita arhitektonske (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inženjerske (`1" = 20'`) i metričke (`1:50`) zapise koji odgovaraju [predlošku](topic:scale-presets). Kada list navodi više od jednog mjerila (plan s uvećanim detaljima), uzima ono koje navodi najčešće, a onaj napisan nakon riječi SCALE broji se dvostruko; ostali su prikazani crveno da ih provjerite. Skenirani list nema tekst: mjerilo postavite ručno.

## Kalibracija na poznatoj mjeri

Koristite ovo kada nema tiskanog mjerila kojem vjerujete, kada je set promijenjene veličine ili kada list kaže „nije u mjerilu“, a ima dimenzije.

1. Otvorite list i uvećajte dugu dimenziju koju znate, poput razmaka mreže ili ukupne dimenzije zgrade. Što je duža, to je točnije.
2. Odaberite {{ui:Kalibriraj}} u grupi {{ui:Mjerilo}}, ili pritisnite {{key:K}}.
3. Kliknite jedan kraj dimenzije. Uvećajte svaki kraj za preciznost; između klikova možete uvećavati i pomicati prikaz.
4. Kliknite drugi kraj. Držite {{key:Shift}} da linija ostane pod 0°, 45° ili 90°.
   Otvara se dijaloški okvir **Kalibriraj ovaj list**.
5. Upišite stvarnu udaljenost u **Stvarna udaljenost**, na primjer `24'-6 1/2"`, `24.5` (decimalne stope), `30"` ili `7.5 m`. Vidi [Unos duljine, cijene i postotka](topic:entry-formats).
6. Odaberite {{ui:Postavi mjerilo}}.
   Statusna traka prikazuje mjerilo kao „1" = (n)'“, a kada je unutar 0.5% nekog predloška, kaže koji, na primjer „što odgovara 1/4" = 1'-0" (odaberite taj predložak za točno mjerilo)“.
   TakeoffCraft se vraća na alat {{ui:Odaberi}}.

Kada kalibracija odgovara predlošku, odabir tog predloška daje točno mjerilo umjesto onog koje ovisi o tome gdje ste kliknuli.

## Provjera mjerila

Uvijek provjerite novo mjerilo na drugoj dimenziji.

1. Odaberite {{ui:Provjeri}} u grupi {{ui:Mjerilo}}, ili pritisnite {{key:D}}.
2. Kliknite oba kraja dimenzije ispisane na crtežu.
   Statusna traka prikazuje „Provjera: 12'-6"“ s istom duljinom u decimalnim stopama i metrima, a linija provjere ostaje na listu s njezinom duljinom.
3. Usporedite je s ispisanom dimenzijom. Ako se ne podudara, kalibrirajte na dužoj dimenziji.

Pritisnite {{key:Esc}} da uklonite liniju provjere.

## Promjena mjerila

Odaberite drugi predložak ili ponovno kalibrirajte. Ako list već ima mjerenja, TakeoffCraft pita **Promijeniti mjerilo ovog lista?** i kaže koliko će se mjerenja ponovno izmjeriti. Odaberite {{ui:Promijeni mjerilo}}. Svaka dionica i površina na listu ponovno se mjeri na novom mjerilu. To možete poništiti s {{key:Mod+Z}}.

## Zašto listovi bez mjerila nisu brojeni kao nula

Oznaka na listu bez mjerila nema stvarnu duljinu ili površinu. TakeoffCraft je nikad ne broji kao nulu, jer bi tiho učinio vaš predračun preniskim. Umjesto toga:

- izostavlja te oznake iz ukupnih iznosa,
- uz stavku u {{ui:Količine}} prikazuje „+(n) bez mjerila“,
- u zaglavlju tablice prikazuje „Nepotpuno: (n) oznaka na listovima bez mjerila (nije uključeno u ukupne)“,
- upisuje broj u stupac bilješki izvezene tablice.

Ovo se može dogoditi kada otvorite projekt čija mjerila nikada nisu postavljena. Dajte listu mjerilo i oznake se odmah broje. Oznake brojanja uvijek se broje; ne trebaju mjerilo.

## Savjeti

- Postavite mjerilo na svakom listu koji ćete mjeriti prije početka. Pregledajte popis listova za **Nema mjerila** da pronađete preostale (okvir za pretragu gleda nazive listova, a ne mjerila).
- Detalji i uvećani planovi na istom listu često koriste drugo mjerilo. TakeoffCraft ima jedno mjerilo po listu; vidi [Što još nije izrađeno](topic:not-built-yet).
- Metrički crteži: odaberite metrički predložak poput `1:100`, ili kalibrirajte metričkom udaljenošću poput `6000 mm`.
