---
title: Postavljanje razmere
summary: Dajte svakom listu razmeru pomoću unapred podešene vrednosti ili kalibracijom na poznatoj dimenziji, proverite je i razumite zašto listovi bez razmere ne ulaze u zbirove.
keywords: otkrij razmeru, pročitaj razmeru, razmera iz teksta, svi listovi, razmera, kalibriši, unapred podešeno, proveri razmeru, provera, poznata dimenzija, bez razmere, nema razmere, odnos, postavi razmeru
from: 8f0148e6
---

Svaki list ima svoju razmeru. Vi je postavljate, ili pustite da TakeoffCraft je pročita iz teksta listova (ispod), i proverite je. Dok list nema razmeru, {{ui:Linijski}}, {{ui:Površina}}, {{ui:Krug}} i {{ui:Izrez}} odbijaju da mere na njemu. {{ui:Prebroj}} i {{ui:Automatsko brojanje}} rade bez razmere.

Spisak listova prikazuje razmeru svakog lista, ili **Nema razmere**. Traka ispod otvorenog lista kaže isto.

## Upotreba unapred podešene razmere (kada je PDF odštampan u punoj veličini)

1. Otvorite list.
2. Otvorite listu {{ui:Unapred podešeno}} u grupi {{ui:Razmera}}.
3. Izaberite razmeru odštampanu na crtežu, na primer `1/8" = 1'-0"` pod Arhitektonske.
   Statusna traka kaže „Razmera za ovaj list: 1/8" = 1'-0".”
4. Proverite je (ispod).

Unapred podešena razmera pretpostavlja da je PDF stvarna veličina papira za koju je crtež napravljen. Ako je neko napravio PDF sa „uklopi u stranicu” ili je to set u pola veličine, unapred podešena razmera je pogrešna. Umesto toga kalibrišite.

Potpuna lista je u [Unapred podešene razmere](topic:scale-presets).

## Čitanje razmera iz teksta listova

Većina crteža navodi svoju razmeru: `SCALE: 1/4" = 1'-0"` u natpisnom bloku, `1:100` ispod pogleda. TakeoffCraft može da je pročita i postavi svaki list odjednom.

1. Otvorite listu {{ui:Unapred podešeno}} i izaberite {{ui:Iz teksta listova…}} (na vrhu).
2. Spisak prikazuje svaki list: njegovu trenutnu razmeru i šta njegov tekst kaže — **Kaže 1/4" = 1'-0"**, **Nema razmere u tekstu** ili **Kaže da nije u razmeri** (NTS).
3. Listovi bez razmere koji navode jednu su označeni. Označite ili odznačite bilo koji, pa izaberite {{ui:Postavi označene razmere}}. Jedan {{key:Mod+Z}} vraća sve unazad.
4. Proverite jednu dimenziju na svakom listu pomoću {{ui:Proveri}} (ispod): unapred podešena razmera je tačna samo kada je PDF odštampan u punoj veličini.

Čita zapise arhitektonskih (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inženjerskih (`1" = 20'`) i metričkih (`1:50`) razmera koji odgovaraju [unapred podešenoj razmeri](topic:scale-presets). Kada list navodi više od jedne razmere (plan sa uvećanim detaljima), uzima onu koju navodi najčešće, a onu napisanu posle reči SCALE broji dvostruko; ostale su prikazane crveno da biste ih proverili. Skenirani list nema tekst: postavite mu razmeru ručno.

## Kalibracija na poznatoj dimenziji

Koristite ovo kada nema odštampane razmere kojoj verujete, set je promenjen po veličini, ili list kaže „nije u razmeri” ali ima dimenzije.

1. Otvorite list i uvećajte dugu dimenziju koju znate, kao što je razmak osovina ili ukupna dimenzija zgrade. Što je duža, to je tačnije.
2. Izaberite {{ui:Kalibriši}} u grupi {{ui:Razmera}}, ili pritisnite {{key:K}}.
3. Kliknite jedan kraj dimenzije. Uvećajte svaki kraj za preciznost; možete uvećavati i pomerati između klikova.
4. Kliknite drugi kraj. Držite {{key:Shift}} da linija ostane na 0°, 45° ili 90°.
   Otvara se dijalog **Kalibriši ovaj list**.
5. Ukucajte stvarno rastojanje u **Stvarna dužina**, na primer `24'-6 1/2"`, `24.5` (decimalne stope), `30"` ili `7.5 m`. Pogledajte [Unos dužine, cene i procenta](topic:entry-formats).
6. Izaberite {{ui:Postavi razmeru}}.
   Statusna traka prikazuje razmeru kao „1" = (n)'”, a kada je u okviru 0.5% od unapred podešene razmere, kaže koja je, na primer „što odgovara 1/4" = 1'-0" (izaberite tu unapred podešenu razmeru za tačnu razmeru)”.
   TakeoffCraft se vraća na alat {{ui:Izaberi}}.

Kada kalibracija odgovara unapred podešenoj razmeri, izbor te razmere daje tačnu razmeru umesto one koja zavisi od mesta na koje ste kliknuli.

## Provera razmere

Uvek proverite novu razmeru na drugoj dimenziji.

1. Izaberite {{ui:Proveri}} u grupi {{ui:Razmera}}, ili pritisnite {{key:D}}.
2. Kliknite oba kraja dimenzije odštampane na crtežu.
   Statusna traka prikazuje „Provera: 12'-6"” sa istom dužinom u decimalnim stopama i metrima, a linija provere ostaje na listu sa svojom dužinom.
3. Uporedite je sa odštampanom dimenzijom. Ako nije tačna, kalibrišite na dužoj dimenziji.

Pritisnite {{key:Esc}} da obrišete liniju provere.

## Promena razmere

Izaberite drugu unapred podešenu razmeru ili ponovo kalibrišite. Ako list već ima merenja, TakeoffCraft pita **Promeniti razmeru ovog lista?** i kaže koliko merenja će biti ponovo izmereno. Izaberite {{ui:Promeni razmeru}}. Svaka deonica i površina na listu se ponovo meri u novoj razmeri. Možete to opozvati sa {{key:Mod+Z}}.

## Zašto listovi bez razmere nisu uračunati kao nula

Oznaka na listu bez razmere nema stvarnu dužinu ili površinu. TakeoffCraft je nikada ne računa kao nulu, jer bi tiho učinila vaš predračun preniskim. Umesto toga:

- izostavlja te oznake iz zbirova,
- prikazuje „+(n) bez razmere” pored stavke u {{ui:Količine}},
- prikazuje „Nepotpuno: (n) oznaka na listovima bez razmere (nisu u zbirovima)” u zaglavlju tabele,
- upisuje broj u kolonu napomena izvezene tabele.

Ovo se može dogoditi kada otvorite projekat čije razmere nikada nisu postavljene. Dajte listu razmeru i oznake se odmah računaju. Oznake brojanja se uvek računaju; one ne traže razmeru.

## Saveti

- Postavite razmeru na svakom listu koji ćete meriti pre nego što počnete. Pregledajte spisak listova za **Nema razmere** da nađete one koji su ostali (polje za pretragu gleda nazive listova, a ne razmere).
- Detalji i uvećani planovi na istom listu često koriste drugu razmeru. TakeoffCraft ima jednu razmeru po listu; pogledajte [Šta još nije napravljeno](topic:not-built-yet).
- Metrički crteži: izaberite metričku unapred podešenu razmeru kao `1:100`, ili kalibrišite metričkom dužinom kao `6000 mm`.
