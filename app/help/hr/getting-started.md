---
title: Početak rada s TakeoffCraftom
summary: Što TakeoffCraft radi, gdje radi i vaša prva izmjerena i pocijenjena stavka iz PDF kompleta nacrta.
keywords: početak, prvi predmjer, brzi početak, uvod, procjena, predmjer količina, komplet nacrta, pdf
from: 3b9da1fb
---

TakeoffCraft mjeri komplete nacrta, PDF-ove i DWG ili DXF crteže te pretvara mjere u pocijenjenu procjenu. Otvarate datoteke (crtež se broji izravno iz svojih blokova: pogledajte [Otvorite DWG ili DXF crtež](topic:open-a-drawing)), svakom listu dajete mjerilo (crtež donosi vlastito), izrađujete **stavke** (vrstu zida, završnu obradu poda, instalaciju) i klikate po listovima da ih izmjerite. Količine, troškovi i ukupni iznos posla ažuriraju se dok radite. Procjenu možete izvesti kao proračunsku tablicu, uz kopiju PDF-ova s ucrtanim predmjerom.

Ako ste radili predmjer u drugim programima, sljedeće pročitajte [Dolazite iz drugog softvera za predmjer](topic:coming-from). Neke stvari ovdje rade drukčije.

## Gdje radi

TakeoffCraft radi u vašem web-pregledniku. Otvorite TakeoffCraft i zaslon je odmah spreman; ništa se ne instalira.

- **Vaši PDF-ovi ostaju na vašem računalu.** Otvara ih preglednik i nikada se ne šalju. Spremanje je preuzimanje.
- Radi u aktualnim preglednicima Chrome, Edge, Firefox i Safari. Pogledajte [Preglednici i računala](common:browsers).
- Radi bez internetske veze kad odaberete {{ui:Spremi za offline}} u traci aplikacije i piše {{ui:Spremno za offline}}. Pogledajte [Rad offline](common:offline).
- Spremanje u oblak još nije dostupno. Za desktop aplikaciju TakeoffCraft dolazi u CadCraft Studiju, s ostalih sedam aplikacija.

## Vaš prvi predmjer u deset koraka

Ovaj vodič mjeri jednu vrstu zida i procjenjuje je. Traje nekoliko minuta na bilo kojem kompletu nacrta koji imate.

1. Odaberite {{ui:Otvori nacrte}} u grupi {{ui:Datoteka}} alatne trake (ili pritisnite {{key:Mod+O}}), odaberite jedan ili više PDF-ova i odaberite Otvori. PDF-ove možete i ispustiti bilo gdje na stranicu.
   Listovi se pojavljuju lijevo, a prvi list otvara se u sredini.
2. Pronađite tiskano mjerilo lista u zaglavlju ili ispod naslova crteža.
3. Otvorite popis {{ui:Predložak}} u grupi {{ui:Mjerilo}} i odaberite to mjerilo, na primjer `1/4" = 1'-0"`.
   Traka pri dnu lista sada piše „Mjerilo 1/4" = 1'-0"“.
4. Odaberite {{ui:Provjeri}} (ili pritisnite {{key:D}}) i kliknite dva kraja dimenzije ispisane na crtežu.
   Očitanje u statusnoj traci dolje lijevo treba odgovarati ispisanoj dimenziji. Ako ne odgovara, pogledajte [Postavite mjerilo](topic:set-the-scale).
5. U ploči {{ui:Stavke}} desno odaberite {{ui:Nova stavka}}, upišite naziv poput `Unutarnji zid tip A`, ostavite tip na {{ui:Linearno (duljina)}} i odaberite {{ui:Dodaj}}.
6. Odaberite {{ui:Linearno}} na alatnoj traci (ili pritisnite {{key:L}}).
7. Kliknite početak zida, zatim svaki kut duž njega. Dvaput kliknite, pritisnite {{key:Enter}} ili kliknite desnom tipkom za završetak dionice.
   Dionica se crta u boji stavke, a njezina duljina pojavljuje se pored stavke.
8. U uređivaču stavke ispod {{ui:Stavke}} upišite `9'-0"` u {{ui:Visina}}, `0.85` u {{ui:Materijal $/LF}} i `1.20` u {{ui:Rad $/LF}}.
   Tablica {{ui:Količine}} pri dnu prikazuje duljinu, proširene iznose materijala i rada te {{ui:Ukupno za posao}}.
9. Odaberite {{ui:Spremi predmjer}} (ili pritisnite {{key:Mod+S}}).
   Vaš preglednik preuzima datoteku `.takeoff.json`. Sadrži vaše stavke, mjerila i oznake te se ponovno otvara povrh istih PDF-ova.
10. Otvorite izbornik {{ui:Izvezi}} na alatnoj traci i odaberite {{ui:XLSX}} da preuzmete procjenu kao proračunsku tablicu.

:::tip
Pritisnite {{key:Esc}} da zaustavite što god radite i vratite se na alat {{ui:Odaberi}}. {{key:Mod+Z}} poništava svaku promjenu.
:::

## Što čitati dalje

- [Zaslon TakeoffCrafta](topic:workspace) imenuje svaki dio prozora.
- [Započnite predmjer i otvorite komplet nacrta](topic:open-plan-set) pokriva više PDF-ova i popis listova.
- [Izradite stavke predmjera](topic:create-items) objašnjava tipove, jedinice, gubitak i cijene.
- [Sklopovi i formule](topic:assemblies) pretvaraju jednu mjeru u stupove, ploče i više.
- [Tipkovnica i miš](topic:keyboard) navodi svaku tipku.
