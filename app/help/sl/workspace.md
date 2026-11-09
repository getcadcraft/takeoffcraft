---
title: Zaslon TakeoffCraft
summary: Ogled okna po imenih na zaslonu – orodna vrstica, seznam listov, list, podokno Postavke, tabela Količine in vrstica stanja.
keywords: zaslon, razporeditev, razporeditve, trak, brskalnik projekta, orodjarna, informacijsko polje, orodna vrstica, podokna, seznam listov, podokno postavk, količine, vrstica stanja, ogled, vmesnik
from: ab1115e0
---

TakeoffCraft zapolni okno brskalnika pod vrstico aplikacije CadCraft. Od zgoraj navzdol in od leve proti desni:

| Del | Mesto | Namen |
|---|---|---|
| Vrstica aplikacije | Čisto na vrhu | Ime aplikacije, različica, {{ui:O programu TakeoffCraft}}, {{ui:Pomoč}} ({{key:F1}}), {{ui:Shrani za delo brez povezave}}, {{ui:Nastavitve}} ({{key:Mod+,}}), gumb {{ui:Celozaslonski način}} in preklop teme {{ui:Papir}} / {{ui:Model}}. |
| Orodna vrstica | Pod vrstico aplikacije | Vsak ukaz v skupinah: {{ui:Datoteka}}, {{ui:Izvoz}}, {{ui:Merilo}}, {{ui:Predizmere}}, {{ui:Urejanje}}, {{ui:Pogled}}. |
| Listi | Levo | Vsaka stran vsakega odprtega PDF-ja s sličico, merilom in številom oznak. |
| List | Sredina | Odprta stran. Merite tukaj. |
| Postavke | Desno | Vaše postavke predizmere, nastavitve izbrane postavke in izbrana oznaka. |
| Količine | Spodaj | Količine in stroški po postavki ali po listu ter skupna vrednost posla. |
| Vrstica stanja | Čisto spodaj | Živa meritev, sporočila, namig 45° in povečava. |

## Orodna vrstica

Premaknite kazalec nad katerikoli gumb, da vidite, kaj počne, in njegovo tipko.

| Skupina | Gumbi |
|---|---|
| {{ui:Datoteka}} | {{ui:Novo}} (prazna predizmera), {{ui:Odpri PDF-je}} ({{key:Mod+O}}), {{ui:Odpri predizmere}} (projekt `.takeoff.json`), {{ui:Shrani predizmere}} ({{key:Mod+S}}) |
| {{ui:Izvoz}} | En meni: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Označeni PDF}} |
| {{ui:Merilo}} | {{ui:Kalibriraj}} ({{key:K}}), {{ui:Preveri}} ({{key:D}}) in seznam {{ui:Prednastavitev}} |
| {{ui:Predizmere}} | {{ui:Izberi}} ({{key:V}}), {{ui:Linijsko}} ({{key:L}}), {{ui:Površina}} ({{key:A}}), {{ui:Krožnica}} ({{key:O}}), {{ui:Lok}} ({{key:R}}, stikalo za vklop in izklop), {{ui:Odbitek}} ({{key:E}}, stikalo za vklop in izklop), {{ui:Odprtina}} ({{key:X}}), {{ui:Štetje}} ({{key:C}}), {{ui:Samodejno štetje}} ({{key:S}}) |
| {{ui:Urejanje}} | {{ui:Razveljavi}} ({{key:Mod+Z}}), {{ui:Uveljavi}} ({{key:Mod+Y}}), {{ui:Kopiraj}} ({{key:Mod+C}}), {{ui:Prilepi}} ({{key:Mod+V}}) in {{ui:Več}}: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji}}, {{ui:Izbriši}}, {{ui:Izberi vse}}, {{ui:Prekliči izbor}} |
| {{ui:Pogled}} | {{ui:Cela stran}} ({{key:F}}), {{ui:Širina}} ({{key:W}}) |

Orodje, ki ga uporabljate, je prikazano kot pritisnjeno. Gumba {{ui:Lok}} in {{ui:Odbitek}} ostaneta pritisnjena, dokler sta vklopljena.

## Listi (levo)

- **Iskanje listov** filtrira seznam po imenu lista, imenu datoteke ali oznaki strani.
- Vsak list prikazuje sličico (riše se med drsenjem), ime in bodisi svoje merilo bodisi **Ni merila**.
- Desno na vsaki vrstici je prikazano, koliko oznak ima list. Medtem ko je postavka označena, namesto tega prikazuje, koliko oznak te postavke je na listu.
- Kliknite list, da ga odprete. {{key:PageDown}} in {{key:PageUp}} premakneta na naslednji in prejšnji list na seznamu.
- Kadar predizmera zajema PDF-je, ki niso odprti, pod seznamom opomba našteje te PDF-je. Glejte [Shranjevanje in ponovno odpiranje predizmere](topic:save-and-reopen).

Imena listov pridejo iz PDF-ja: oznaka strani, kot je `A-101`, postane ime lista. Stran brez oznake dobi ime po datoteki in številki strani, na primer „Načrti, stran 3“. Ko je odprtih več PDF-jev, označeni listi prikazujejo tudi ime datoteke.

## List (sredina)

- Vrstica pod listom prikazuje ime lista in njegovo merilo ali „Merila še ni: izberite prednastavitev ali kalibrirajte“. Njeni gumbi: {{ui:MarkupCraft}} (kadar ta aplikacija lahko prevzame PDF; glejte [Začetek predizmere in odpiranje nabora načrtov](topic:open-plan-set)), {{ui:Primerjaj}} (starejša različica lista čez ta; glejte [Primerjava revidiranega lista](topic:compare-revisions)), „(n) za preverjanje“ (označene oznake, kadar jih je) in {{ui:3D}} (glejte [pogled za preverjanje v 3D](topic:check-in-3d)).
- Preden je odprt kak PDF, sredina prikazuje kratek vodnik s petimi koraki.
- Kolešček povečuje na mestu kazalca. Povlecite za pomik. Glejte [Tipkovnica in miška](topic:keyboard).
- Med uporabo {{ui:Samodejno štetje}} se na vrhu lista prikaže vrstica z njenimi kontrolniki.

## Postavke (desno)

Na vrhu je seznam {{ui:Območje ponudbe}}: stavba, etaža ali faza, v katero gredo nove oznake ([Območja ponudbe](topic:bid-areas)).

- {{ui:Nova postavka}} odpre majhen obrazec: ime, vrsto ({{ui:Linijsko (dolžina)}}, {{ui:Površina}} ali {{ui:Štetje}}) in {{ui:Dodaj}}.
- Seznam prikazuje barvo, ikono vrste, ime in količino vsake postavke. Kliknite postavko, da z njo rišete in označite njene oznake na vseh listih. Kliknite jo znova, da prenehate z označevanjem.
- Pod seznamom je **Postavka: (ime)** urejevalnik postavke: ime, vrsta, barva, enota, višina ali globina, odpadek, cene materiala in dela, izmerjene vrednosti ter {{ui:Sestav}}. Glejte [Ustvarjanje postavk predizmere](topic:create-items).
- **Izbrana oznaka** se prikaže, ko izberete oznako: kateri postavki pripada, njen list, njene meritve in gumbi, kot sta {{ui:Dodaj odprtino}} in {{ui:Izbriši oznako}}. Ko je izbranih več oznak, postane **Izbrane oznake**: koliko je vsake postavke ter {{ui:Kopiraj}}, {{ui:Podvoji}}, {{ui:Izreži}} in {{ui:Izbriši oznake}}.
- Urejevalnik postavke se konča z {{ui:Kopiraj postavko}} in {{ui:Podvoji postavko}}: postavka s svojim sestavom in stroški, brez oznak. Glejte [Kopiranje, prilepljanje in podvajanje oznak](topic:copy-paste).

## Količine (spodaj)

- {{ui:Po postavkah}} navaja vsako postavko in njene sestavne dele s količino, odpadkom, cenami in razširjenimi stroški. Odpadek in cene lahko vnesete neposredno v tabelo.
- {{ui:Po listih}} navaja količino vsake postavke na vsakem listu.
- Opozorilo, ki se začne z **Nepopolno:**, se prikaže, kadar nekaj ni vključeno v vsote.
- {{ui:Skupaj posel}} je na desni strani glave.
- Gumb s puščico na skrajni desni skrije ali pokaže tabelo, da list dobi več prostora.

Glejte [Branje količin in predračuna](topic:read-quantities).

## Vrstica stanja (spodaj)

Od leve proti desni: živa meritev med risanjem (dolžina, površina, polmer ali rezultat preverjanja), polje {{ui:Vnos}} med vnašanjem dolžine, sporočila TakeoffCraft, opomnik „Shift lovi na 45°“ (ali „Lovi na 45°; Shift sprosti kot“, kadar je to vklopljeno v [Nastavitvah](topic:settings)), gumb {{ui:Lovljenje}} (lovljenje na črte risbe, vklopljen, kadar je označen; {{key:F3}}) in odstotek povečave.

:::tip
Ko se nekaj ne zgodi, preberite vrstico stanja. TakeoffCraft tam razloži, zakaj ni sprejel klika, na primer „Ta list še nima merila“.
:::

## Druge razporeditve

Vse zgoraj je razporeditev {{ui:Klasični CadCraft}}, izhodiščna. {{ui:Nastavitve}} ({{key:Mod+,}}) › {{ui:Globalno}} › {{ui:Razporeditev}} ponuja še dve; ista orodja in tipke delujejo v vseh treh, izbira {{ui:Klasični CadCraft}} pa vsak gumb vrne tja, kjer je bil.

| Razporeditev | V TakeoffCraft |
|---|---|
| {{ui:Trak in brskalnik projekta}} | {{ui:Trak za predizmere}} čez vrh ([Meniji, tipke in miška](topic:menus-keys-and-mouse)), vrstica za tekoče orodje, zavihek za vsak odprt list (Model in postavitve risbe so prav tako listi) z prednastavitvami merila in {{ui:Cela stran}} pod listom. Levi del vsebuje {{ui:Lastnosti}} (izbrana postavka, opomba ali oznaka) nad {{ui:Brskalnik predizmer}}: {{ui:Listi}} (kliknite enega, da se odpre v zavihku), {{ui:Pogoji}} (kliknite enega, da z njim rišete) in {{ui:Predračun}} (skupna vrednost vsake postavke in skupna vrednost posla); sličice so njegov drugi zavihek. |
| {{ui:Orodjarna in informacijsko polje}} | Orodna vrstica nad listom, informacijsko polje z {{ui:Območje ponudbe}}, tekočim orodjem ali izborom in vrstico lista, stolpec orodij za predizmero na levi, zavihek za vsak list ter {{ui:Lovljenje}} in povečava pod listom. |

Medtem ko je odprt [pogled za preverjanje v 3D](topic:check-in-3d), zavihki listov in vrstica pod listom umaknejo; za ponovno merjenje zaprite pogled 3D. Na telefonu vedno deluje telefonska razporeditev.

## Celozaslonski način in teme

Gumb {{ui:Celozaslonski način}} v vrstici aplikacije ali {{key:Ctrl+Shift+F}} (Control na vseh platformah, tudi na Macu) preklaplja med običajnim, celozaslonskim načinom in celozaslonskim načinom s skritimi vrsticami. Ko so vrstice skrite, premaknite kazalec na zgornji rob, da se spet prikažejo.

{{ui:Papir}} je svetla tema, {{ui:Model}} pa temna. V {{ui:Model}} je risba na zaslonu prikazana obrnjeno (svetle črte na temnem), izvozi pa se nikoli ne spremenijo.
