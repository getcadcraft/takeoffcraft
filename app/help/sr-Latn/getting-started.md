---
title: Početak rada u programu TakeoffCraft
summary: Šta TakeoffCraft radi, gde radi i vaša prva izmerena i ocenjena stavka iz skupa planova u PDF-u.
keywords: početak, prvi predmer, brzi početak, uvod, predračun, količinski predmer, skup planova, pdf
from: 3b9da1fb
---

TakeoffCraft meri skupove planova, PDF-ove i DWG ili DXF crteže i pretvara merenja u ocenjeni predračun. Otvarate datoteke (crtež se broji direktno iz svojih blokova: pogledajte [Otvaranje DWG ili DXF crteža](topic:open-a-drawing)), zadajete svakom listu razmeru (crtež sam donosi svoju), pravite **stavke** (tip zida, završna obrada poda, armatura) i klikćete po listovima da biste ih izmerili. Količine, troškovi i ukupan iznos posla se ažuriraju dok radite. Predračun možete izvesti kao tabelu i kao kopiju PDF-ova sa nacrtanim predmerom.

Ako ste radili predmer u drugim programima, pročitajte sledeće [Dolazak iz drugog softvera za predmer](topic:coming-from). Neke stvari ovde rade drugačije.

## Gde radi

TakeoffCraft radi u vašem internet pregledaču. Otvorite TakeoffCraft i ekran je odmah spreman; ništa ne treba instalirati.

- **Vaši PDF-ovi ostaju na vašem računaru.** Pregledač ih otvara i nikad ih ne otprema. Čuvanje je preuzimanje.
- Radi u aktuelnim verzijama Chrome, Edge, Firefox i Safari. Pogledajte [Pregledači i računari](common:browsers).
- Radi bez internet veze kada izaberete {{ui:Sačuvaj za rad van mreže}} u gornjoj traci aplikacije i kada piše {{ui:Spremno za rad van mreže}}. Pogledajte [Rad van mreže](common:offline).
- Čuvanje u oblaku još nije dostupno. Za desktop aplikaciju, TakeoffCraft dolazi u CadCraft Studio, uz ostalih sedam aplikacija.

## Vaš prvi predmer u deset koraka

Ovaj vodič meri jedan tip zida i ocenjuje ga. Traje nekoliko minuta na bilo kom planu koji imate.

1. Izaberite {{ui:Otvori planove}} u grupi {{ui:Datoteka}} trake sa alatkama (ili pritisnite {{key:Mod+O}}), izaberite jedan ili više PDF-ova i izaberite Otvori. PDF-ove možete i prevući bilo gde na stranicu.
   Listovi se pojavljuju levo, a prvi list se otvara u sredini.
2. Pronađite odštampanu razmeru lista u njegovom naslovnom bloku ili ispod naslova crteža.
3. Otvorite listu {{ui:Unapred podešeno}} u grupi {{ui:Razmera}} i izaberite tu razmeru, na primer `1/4" = 1'-0"`.
   Traka na dnu lista sada kaže „Razmera 1/4" = 1'-0"“.
4. Izaberite {{ui:Proveri}} (ili pritisnite {{key:D}}) i kliknite na dva kraja kote odštampane na crtežu.
   Očitavanje u statusnoj traci u donjem levom uglu treba da se poklapa sa odštampanom kotom. Ako se ne poklapa, pogledajte [Podešavanje razmere](topic:set-the-scale).
5. U panelu {{ui:Stavke}} desno izaberite {{ui:Nova stavka}}, unesite ime, na primer `Unutrašnji zid, tip A`, ostavite tip na {{ui:Linijski (dužina)}} i izaberite {{ui:Dodaj}}.
6. Izaberite {{ui:Linijski}} na traci sa alatkama (ili pritisnite {{key:L}}).
7. Kliknite na početak zida, zatim na svaki ugao duž njega. Dvaput kliknite, pritisnite {{key:Enter}} ili kliknite desnim tasterom da završite niz.
   Niz se crta bojom stavke, a njegova dužina se pojavljuje pored stavke.
8. U uređivaču stavke ispod {{ui:Stavke}} unesite `9'-0"` u {{ui:Visina}}, `0.85` u {{ui:Materijal $/LF}} i `1.20` u {{ui:Rad $/LF}}.
   Tabela {{ui:Količine}} na dnu pokazuje dužinu, prošireni materijal i rad, i {{ui:Ukupno za posao}}.
9. Izaberite {{ui:Sačuvaj predmer}} (ili pritisnite {{key:Mod+S}}).
   Pregledač preuzima datoteku `.takeoff.json`. Ona sadrži vaše stavke, razmere i oznake, i ponovo se otvara nad istim PDF-ovima.
10. Otvorite meni {{ui:Izvezi}} na traci sa alatkama i izaberite {{ui:XLSX}} da preuzmete predračun kao tabelu.

:::tip
Pritisnite {{key:Esc}} da prekinete šta god radite i vratite se na alat {{ui:Izaberi}}. {{key:Mod+Z}} opoziva svaku izmenu.
:::

## Šta čitati dalje

- [Ekran programa TakeoffCraft](topic:workspace) imenuje svaki deo prozora.
- [Pokretanje predmera i otvaranje skupa planova](topic:open-plan-set) obuhvata više PDF-ova i listu listova.
- [Pravljenje stavki predmera](topic:create-items) objašnjava tipove, jedinice, otpad i cene.
- [Sklopovi i formule](topic:assemblies) pretvara jedno merenje u letve, ploče i još mnogo toga.
- [Tastatura i miš](topic:keyboard) navodi sve tastere.
