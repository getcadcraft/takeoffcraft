---
title: Začetek dela s TakeoffCraft
summary: Kaj TakeoffCraft počne, kje deluje in vaša prva izmerjena ter ocenjena postavka iz nabora načrtov v PDF-ju.
keywords: začetek, prva predizmera, hitri začetek, uvod, predračun, količinska predizmera, nabor načrtov, pdf
from: 3b9da1fb
---

TakeoffCraft meri nabore načrtov, PDF-je ter risbe DWG in DXF in meritve pretvori v ocenjen predračun. Datoteke odprete (risba se šteje neposredno iz svojih blokov: glejte [Odpiranje risbe DWG ali DXF](topic:open-a-drawing)), vsakemu listu določite merilo (risba ga ima že sama), ustvarite **postavke** (tip stene, tip talne obloge, armaturo) in kliknete po listih, da jih predizmerite. Količine, stroški in skupna vrednost posla se posodabljajo sproti. Predračun lahko izvozite kot preglednico in kopijo PDF-jev z vašo predizmero.

Če ste predizmero že delali v drugih programih, najprej preberite [Prihod iz drugih programov za predizmere](topic:coming-from). Nekatere stvari tukaj delujejo drugače.

## Kje deluje

TakeoffCraft deluje v vašem spletnem brskalniku. Odprite TakeoffCraft in zaslon je takoj pripravljen; ničesar ni treba namestiti.

- **Vaši PDF-ji ostanejo na vašem računalniku.** Brskalnik jih odpre in se nikoli ne naložijo. Shranjevanje je prenos.
- Deluje v aktualnih brskalnikih Chrome, Edge, Firefox in Safari. Glejte [Brskalniki in računalniki](common:browsers).
- Deluje brez internetne povezave, ko v vrstici aplikacije izberete {{ui:Shrani za delo brez povezave}} in se prikaže {{ui:Pripravljeno za delo brez povezave}}. Glejte [Delo brez povezave](common:offline).
- Shranjevanje v oblak še ni na voljo. Za namizno aplikacijo je TakeoffCraft na voljo v CadCraft Studio skupaj z drugimi sedmimi aplikacijami.

## Vaša prva predizmera v desetih korakih

Ta vodnik izmeri en tip stene in ga oceni. Vzame nekaj minut na kateremkoli načrtu, ki ga imate.

1. V skupini {{ui:Datoteka}} orodne vrstice izberite {{ui:Odpri načrte}} (ali pritisnite {{key:Mod+O}}), izberite enega ali več PDF-jev in izberite Odpri. PDF-je lahko tudi spustite kamorkoli na stran.
   Listi se prikažejo levo, prvi list pa se odpre na sredini.
2. Poiščite natisnjeno merilo lista v glavi risbe ali pod naslovom risbe.
3. V skupini {{ui:Merilo}} odprite seznam {{ui:Prednastavitev}} in izberite to merilo, na primer `1/4" = 1'-0"`.
   Vrstica pod listom zdaj prikazuje „Merilo 1/4" = 1'-0"“.
4. Izberite {{ui:Preveri}} (ali pritisnite {{key:D}}) in kliknite na oba konca kote, natisnjene na risbi.
   Odčitek v vrstici stanja spodaj levo se mora ujemati z natisnjeno koto. Če se ne, glejte [Nastavitev merila](topic:set-the-scale).
5. V podoknu {{ui:Postavke}} na desni izberite {{ui:Nova postavka}}, vnesite ime, na primer `Interior wall type A`, pustite vrsto na {{ui:Linijsko (dolžina)}} in izberite {{ui:Dodaj}}.
6. Na orodni vrstici izberite {{ui:Linijsko}} (ali pritisnite {{key:L}}).
7. Kliknite na začetek stene, nato na vsak vogal vzdolž nje. Za zaključek odseka dvakrat kliknite, pritisnite {{key:Enter}} ali kliknite z desno tipko.
   Odsek se nariše v barvi postavke, njegova dolžina pa se prikaže ob postavki.
8. V urejevalniku postavke pod {{ui:Postavke}} vnesite `9'-0"` v {{ui:Višina}}, `0.85` v {{ui:Material $/LF}} in `1.20` v {{ui:Delo $/LF}}.
   Tabela {{ui:Količine}} spodaj prikazuje dolžino, razširjeni material in delo ter {{ui:Skupaj posel}}.
9. Izberite {{ui:Shrani predizmere}} (ali pritisnite {{key:Mod+S}}).
   Brskalnik prenese datoteko `.takeoff.json`. Hrani vaše postavke, merila in oznake ter se ponovno odpre skupaj z istimi PDF-ji.
10. Na orodni vrstici odprite meni {{ui:Izvoz}} in izberite {{ui:XLSX}}, da prenesete predračun kot preglednico.

:::tip
Pritisnite {{key:Esc}}, da prekinete, kar počnete, in se vrnete na orodje {{ui:Izberi}}. {{key:Mod+Z}} razveljavi vsako spremembo.
:::

## Kaj prebrati naprej

- [Zaslon TakeoffCraft](topic:workspace) poimenuje vsak del okna.
- [Začetek predizmere in odpiranje nabora načrtov](topic:open-plan-set) obravnava več PDF-jev in seznam listov.
- [Ustvarjanje postavk predizmere](topic:create-items) razlaga vrste, enote, odpadek in cene.
- [Sestavi in formule](topic:assemblies) spremenijo eno meritev v stojala, plošče in drugo.
- [Tipkovnica in miška](topic:keyboard) navaja vse tipke.
