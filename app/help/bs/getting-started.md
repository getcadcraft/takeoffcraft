---
title: Početak rada s programom TakeoffCraft
summary: Šta TakeoffCraft radi, gdje radi i prva izmjerena i cijenjena stavka iz skupa planova u PDF-u.
keywords: početak, prvi predmjer, brzi početak, uvod, predračun, količinski predmjer, skup planova, pdf
from: 3b9da1fb
---

TakeoffCraft mjeri skupove planova, PDF-ove i DWG ili DXF crteže i pretvara mjerenja u cijenjeni predračun. Otvarate datoteke (crtež se računa direktno iz svojih blokova: pogledajte [Otvaranje DWG ili DXF crteža](topic:open-a-drawing)), dajete svakom listu razmjeru (crtež donosi svoju), pravite **stavke** (tip zida, završnu obradu poda, sanitarni uređaj) i klikćete po listovima da ih izmjerite. Količine, troškovi i ukupan iznos posla se ažuriraju dok radite. Predračun možete izvesti kao tabelu i kao kopiju PDF-ova s nacrtanim predmjerom.

Ako ste radili predmjer u drugim programima, pročitajte sljedeće: [Prelazak s drugog softvera za predmjer](topic:coming-from). Neke stvari ovdje rade drugačije.

## Gdje radi

TakeoffCraft radi u vašem web pregledniku. Otvorite TakeoffCraft i ekran je odmah spreman; ništa se ne instalira.

- **Vaši PDF-ovi ostaju na vašem računaru.** Preglednik ih otvara i nikad ne šalje. Spašavanje je preuzimanje.
- Radi u aktuelnim verzijama Chrome, Edge, Firefox i Safari. Pogledajte [Preglednici i računari](common:browsers).
- Radi bez internet veze kad odaberete {{ui:Save for offline}} u gornjoj traci i pojavi se {{ui:Offline ready}}. Pogledajte [Rad van mreže](common:offline).
- Spašavanje u oblaku još nije dostupno. Za desktop, TakeoffCraft dolazi u CadCraft Studiu, zajedno s ostalih sedam aplikacija.

## Vaš prvi predmjer u deset koraka

Ovaj vodič mjeri jedan tip zida i cijeni ga. Traje nekoliko minuta na bilo kojem planu koji imate.

1. Odaberite {{ui:Open plans}} u grupi {{ui:File}} trake s alatima (ili pritisnite {{key:Mod+O}}), izaberite jedan ili više PDF-ova i kliknite Otvori. Možete i prevući PDF-ove bilo gdje na stranicu.
   Listovi se pojavljuju lijevo, a prvi list se otvara u sredini.
2. Pronađite štampanu razmjeru lista u njegovom naslovnom bloku ili ispod naslova crteža.
3. Otvorite listu {{ui:Preset}} u grupi {{ui:Scale}} i odaberite tu razmjeru, na primjer `1/4" = 1'-0"`.
   Traka na dnu lista sada piše „Razmjera 1/4" = 1'-0"“.
4. Odaberite {{ui:Check}} (ili pritisnite {{key:D}}) i kliknite na dva kraja dimenzije odštampane na crtežu.
   Očitavanje u statusnoj traci dolje lijevo treba se poklapati s odštampanom dimenzijom. Ako se ne poklapa, pogledajte [Postavljanje razmjere](topic:set-the-scale).
5. U panelu {{ui:Items}} desno odaberite {{ui:New item}}, ukucajte naziv poput `Interior wall type A`, ostavite tip na {{ui:Linear (length)}} i odaberite {{ui:Add}}.
6. Odaberite {{ui:Linear}} u traci s alatima (ili pritisnite {{key:L}}).
7. Kliknite na početak zida, zatim na svaki ugao duž njega. Dvaput kliknite, pritisnite {{key:Enter}} ili desni klik da završite niz.
   Niz je nacrtan bojom stavke, a njegova dužina se pojavljuje pored stavke.
8. U uređivaču stavke pod {{ui:Items}} ukucajte `9'-0"` u {{ui:Height}}, `0.85` u {{ui:Material $/LF}} i `1.20` u {{ui:Labor $/LF}}.
   Tabela {{ui:Quantities}} dolje prikazuje dužinu, ukupni materijal i rad, i {{ui:Job total}}.
9. Odaberite {{ui:Save takeoff}} (ili pritisnite {{key:Mod+S}}).
   Preglednik preuzima datoteku `.takeoff.json`. Ona sadrži vaše stavke, razmjere i oznake, i ponovo se otvara nad istim PDF-ovima.
10. Otvorite meni {{ui:Export}} na traci s alatima i odaberite {{ui:XLSX}} da preuzmete predračun kao tabelu.

:::tip
Pritisnite {{key:Esc}} da zaustavite šta god radite i vratite se na alat {{ui:Select}}. {{key:Mod+Z}} poništava svaku promjenu.
:::

## Šta čitati dalje

- [Ekran programa TakeoffCraft](topic:workspace) imenuje svaki dio prozora.
- [Pokretanje predmjera i otvaranje skupa planova](topic:open-plan-set) pokriva više PDF-ova i listu listova.
- [Kreiranje stavki predmjera](topic:create-items) objašnjava tipove, jedinice, otpad i stope.
- [Sklopovi i formule](topic:assemblies) pretvaraju jedno mjerenje u stubove, ploče i još mnogo toga.
- [Tastatura i miš](topic:keyboard) navodi svaku tipku.
