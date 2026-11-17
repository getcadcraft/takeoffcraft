---
title: Üleminek teistelt koguste arvestuse tarkvaradelt
summary: Kuidas spetsialiseeritud koguste arvestuse programmide ja PDF-märgistusvahendite harjumused vastavad TakeoffCraftile ning millised erinevused tekitavad segadust.
keywords: üleminek, migreerimine, tingimused, osad, mõõtmisvahendid, märgistuste loend, koguse link, koguste arvestuse harjumused, erinevused, võrdle
from: 12004ce5
---

Kui oled koguste arvestust teinud PlanSwiftiga või Bluebeam Revu mõõtmisvahenditega, tundub suurem osa TakeoffCraftist tuttav: plaanikomplekt, lehe kohta mõõtkava, mõõdetavad asjad ja hinnastatud kogusumma. Osade omavaheline seos on mõnes kohas teistsugune, ja need kohad on allpool.

Kui tunned PlanSwifti või On-Screen Takeoffi, vali {{ui:Sätted}} › {{ui:TakeoffCraft}} › {{ui:Menüüd, klahvid ja hiir}} all menüüstiil {{ui:Koguste arvestuse töölaud}}: menüüriba menüüdega Fail, Redigeeri, Vaade, Mõõtkava, Koguste arvestus, Kirjed, Märgistus ja Eksport ning rida koguste arvestuse tööriistu, lehe ribal mõõtkava eelseaded. Vaata [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).

## Harjumused vastendatud

| Oled harjunud | TakeoffCraftis |
|---|---|
| Töö või projekti avamine, mis salvestab plaanid (PlanSwift) | Ava PDF-id ja `.takeoff.json` projekt kõrvuti. Projekt hoiab ainult koguste arvestust; PDF-id jäävad sinu omadeks failideks. |
| Märkmete, pilvede ja esiletõstude loend (Bluebeam) | {{ui:Märgistus}} lehe ribal: märkmed, pilved ja esiletõstud staatusega (Avatud, Vastatud, Suletud), loetletud jaotises **Märgistused** ja joonistatud märgitud PDF-is. Vaata [Märkmed, pilved ja esiletõstud](topic:markups). |
| Mõõtmised salvestatud märgistustena PDF-i sees (Bluebeam) | Koguste arvestus asub failis `.takeoff.json`. {{ui:Märgitud PDF}} kirjutab koopia, millesse on joonistatud koguste arvestus, jagamiseks; {{ui:PDF koos koguste arvestusega}} kirjutab koopia, mis kannab koguste arvestust, et see TakeoffCraftis uuesti avada. |
| Koguste arvestuse kirjed (PlanSwift), kohandatud mõõtevahendid salvestatuna Tool Chestis (Bluebeam) | **Kirjed** jaotises {{ui:Kirjed}}: nimi, tüüp, värv, ühik, kõrgus või sügavus, jäätmed, määrad. |
| Osad ja koostud valemitega (PlanSwift) | Kirje {{ui:Koost}}: komponendid valemiga, kus kasutatakse `L H A N P`. |
| Lehe mõõtkava seadmine või kalibreerimine (mõlemad) | {{ui:Eelseade}} loend või {{ui:Kalibreeri}} jaotises {{ui:Mõõtkava}}, lehe kaupa. {{ui:Kontrolli}} mõõdab teadaolevat mõõtu. |
| Ühe mõõtkava rakendamine lehevahemikule | Veel mitte: sea iga leht eraldi. |
| Vaateaknad erinevate mõõtkavadega ühel lehel (Bluebeam) | Veel mitte: üks mõõtkava lehe kohta. |
| Polypikkuse ja pindala tööriistad (Bluebeam), lineaarne ja pindala koguste arvestus (PlanSwift) | {{ui:Lineaarne}} ({{key:L}}) ja {{ui:Pindala}} ({{key:A}}). |
| Shifti hoidmine sirgete joonte jaoks | {{key:Shift}} joondub 45° sammudele, sama mõte. |
| Haakumine joonistuse joontele | Vaikimisi sees: otsad, keskpunktid, lõikepunktid ja joone lähim punkt; väljalülitamiseks {{key:F3}}, nagu CAD-programmides. |
| Loenduse tööriist (mõlemad) | {{ui:Loe}} ({{key:C}}). |
| Sümbolite visuaalne otsing (Bluebeam) | {{ui:Automaatne loendus}} ({{key:S}}): märgi kast ühe sümboli ümber, vaata üle, lisa. |
| Väljalõiked või mahaarvamised pindalades | {{ui:Väljalõige}} ({{key:X}}) valitud pindalal ja ümmargused väljalõiked. |
| Mahaarvamised lineaarsetel lõikudel | Joonista lõik sirgelt läbi ja vajuta avause jaoks {{key:E}} ({{ui:Mahaarvata}}). Vaata [Lineaarsete lõikude mõõtmine](topic:measure-linear). |
| Kaaresegmendid polüjoonis | {{ui:Kaar}} ({{key:R}}): klõpsa kõveral punkt, seejärel selle lõpp-punkt. |
| Märgistuste loend koos koguste veergudega (Bluebeam) | Tabel {{ui:Kogused}}, {{ui:Kirje järgi}} või {{ui:Lehe järgi}}. |
| Hinnastatud hinnangute ruudustik (PlanSwift) | Sama tabel: jäätmed, materjal ja tööjõud ühiku kohta, laiendatud kogusummad, {{ui:Töö kogusumma}}. |
| Eksport Excelisse | {{ui:XLSX}} elavate valemitega või {{ui:CSV}}. |
| Escape tööriista peatamiseks | {{key:Esc}} tühistab ja naaseb {{ui:Vali}} juurde. |
| Paremklõps lõpetamiseks | Ka siin lõpetab paremklõps lõigu või sulgeb pindala. Paremklõpsu menüüd ei ole. |

## Erinevused, mis tekitavad segadust

**Koguste arvestus ei ole sinu PDF-i sees.** Miski, mida teed, ei muuda sinu PDF-e. Salvesta fail `.takeoff.json` ja hoia see joonistega koos. Märgitud PDF-i saatmine ei anna kellelegi muudetavat koguste arvestust: saada projektifail ja algsed PDF-id või [PDF koos koguste arvestusega](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-e seostatakse sisu, mitte nime järgi.** Parandatud leht, mis on salvestatud vana failinime peale, on TakeoffCraftile uus fail, ilma mõõtkava ja märgideta. Sinu vanad märgid jäävad vanale versioonile ja arvestavad edasi. Vaata [Koguste arvestuse salvestamine ja uuesti avamine](topic:save-and-reopen#when-a-pdf-has-changed).

**Mõõtkavata märke ei jäeta nulliks, vaid need jäetakse välja.** Kui lehel ei ole mõõtkava, ei arvestata selle lõike ega pindu ning tabel ütleb "Poolik". Paljudes programmides näeksid sa lihtsalt 0. Vaata [Mõõtkava seadmine](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Lehe suuruse arvamist ei ole.** Eelseaded eeldavad, et PDF on prinditud täissuuruses. Poole suuruses või "sobita lehele" PDF vajab {{ui:Kalibreeri}}. Kasuta alati {{ui:Kontrolli}}.

**Üks kirje, üks põhitüüp, rohkem, kui palud.** Kirje on lineaarne, pindala või loend ning selle tüüp lukustub, kui sellel on märke. Tingimus, mis annab nii pindala kui selle perimeetri, on pindala kirje: perimeeter on muutuja `P`. Sein, millel on nii pikkus kui pindala, on lineaarne kirje kõrgusega. Mitme tingimusega kirje puhul, näiteks ruum põranda, sokli ja ustega, märgi teised liigid jaotises **Mõõdetakse ka**: iga liik hinnastatakse eraldi real. Vaata [Üks kirje, mitu liiki märke](topic:create-items#one-item-several-kinds-of-marks).

**Valemid töötavad kogusummadega.** Koostevalemid kasutavad kirje kogusummasid kõigil lehtedel, mitte iga lõiku eraldi. `N` (lõikude või pindade arv) on mõeldud lõigupõhiste lisade jaoks, nagu üks lisatugi seina kohta.

**Perimeeter sisaldab väljalõikeid.** Pindala `P` lisab tema avade servad. Vaata [Pindalade mõõtmine väljalõigetega](topic:measure-areas#read-the-area).

**Lohistamine liigutab.** Vasaku nupuga lohistamine liigutab lehte kõigis tööriistades, välja arvatud {{ui:Automaatne loendus}}. Tööriista liigutamiseks ei pea kunagi vahetama. Ratas suumib; see ei keri.

**Taastamiskoopia, mitte pilv.** TakeoffCraft hoiab sinu töö koopiat selles brauseris ja pakub selle tagasi pärast krahhi ([Kui vahekaart või brauser peatub](topic:save-and-reopen#if-the-tab-or-the-browser-stops)). Koguste arvestuse salvestamine on siiski sinu ülesanne: {{key:Mod+S}}. Pilvesalvestus ei ole veel saadaval.

**Kõik on brauseris.** Midagi ei pea installima ja plaane ei laadita kunagi üles. Töölaua rakendusena tuleb TakeoffCraft CadCraft Studio sisse koos teiste seitsme rakendusega.

## Veel siin ei ole

Lehe kaupa mõõtkavapiirkonnad ei ole veel valmis. Täieliku loendi ja selle, mida selle asemel teha, leiad jaotisest [Mis pole veel valmis](topic:not-built-yet).
