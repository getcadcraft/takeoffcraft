---
title: TakeoffCraft'i ekraan
summary: Akna ülevaade ekraanil nähtavate nimede järgi - tööriistariba, lehtede loend, leht, kirjete paneel, koguste tabel ja olekuriba.
keywords: ekraan, paigutus, paigutused, lint, projektisirvija, tööriistakast, infokast, tööriistariba, paneelid, lehtede loend, kirjete paneel, kogused, olekuriba, ülevaade, liides
from: ab1115e0
---

TakeoffCraft täidab brauseriakna CadCraft'i rakenduse riba all. Ülevalt alla ja vasakult paremale:

| Osa | Asukoht | Milleks see on |
|---|---|---|
| Rakenduse riba | Kõige üleval | Rakenduse nimi, versioon, {{ui:Teave TakeoffCraft'i kohta}}, {{ui:Abi}} ({{key:F1}}), {{ui:Salvesta võrguks}}, {{ui:Sätted}} ({{key:Mod+,}}), nupp {{ui:Täisekraan}} ja teemavahetus {{ui:Paber}} / {{ui:Mudel}}. |
| Tööriistariba | Rakenduse riba all | Kõik käsud rühmades: {{ui:Fail}}, {{ui:Eksport}}, {{ui:Mõõtkava}}, {{ui:Koguste arvestus}}, {{ui:Redigeeri}}, {{ui:Vaade}}. |
| Lehed | Vasakul | Iga avatud PDF-i iga lehekülg koos pisipildi, mõõtkava ja märgiste arvuga. |
| Leht | Keskel | Avatud lehekülg. Mõõdad siin. |
| Kirjed | Paremal | Sinu koguste arvestuse kirjed, valitud kirje seaded ja valitud märgis. |
| Kogused | All | Kogused ja kulud kirje või lehe järgi ning töö kogusumma. |
| Olekuriba | Kõige all | Elav mõõtmine, teated, 45° vihje ja suum. |

## Tööriistariba

Hoia kursorit mis tahes nupu kohal, et näha, mida see teeb, ja selle klahvi.

| Rühm | Nupud |
|---|---|
| {{ui:Fail}} | {{ui:Uus}} (tühi koguste arvestus), {{ui:Ava PDF-id}} ({{key:Mod+O}}), {{ui:Ava koguste arvestus}} (`.takeoff.json` projekt), {{ui:Salvesta koguste arvestus}} ({{key:Mod+S}}) |
| {{ui:Eksport}} | Üks menüü: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Märgitud PDF}} |
| {{ui:Mõõtkava}} | {{ui:Kalibreeri}} ({{key:K}}), {{ui:Kontrolli}} ({{key:D}}) ja loend {{ui:Eelseade}} |
| {{ui:Koguste arvestus}} | {{ui:Vali}} ({{key:V}}), {{ui:Lineaarne}} ({{key:L}}), {{ui:Pindala}} ({{key:A}}), {{ui:Ring}} ({{key:O}}), {{ui:Kaar}} ({{key:R}}, sisse-välja lüliti), {{ui:Mahaarvata}} ({{key:E}}, sisse-välja lüliti), {{ui:Väljalõige}} ({{key:X}}), {{ui:Loe}} ({{key:C}}), {{ui:Automaatne loendus}} ({{key:S}}) |
| {{ui:Redigeeri}} | {{ui:Võta tagasi}} ({{key:Mod+Z}}), {{ui:Tee uuesti}} ({{key:Mod+Y}}), {{ui:Kopeeri}} ({{key:Mod+C}}), {{ui:Kleebi}} ({{key:Mod+V}}) ja {{ui:Veel}}: {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samale kohale}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}}, {{ui:Tühista valik}} |
| {{ui:Vaade}} | {{ui:Sobita leht}} ({{key:F}}), {{ui:Sobita laius}} ({{key:W}}) |

Kasutatav tööriist on näidatud vajutatuna. Nupud {{ui:Kaar}} ja {{ui:Mahaarvata}} jäävad vajutatuks, kuni on sisse lülitatud.

## Lehed (vasakul)

- **Otsi lehti** filtreerib loendi lehe nime, failinime või lehe sildi järgi.
- Iga leht näitab pisipilti (joonistatakse kerimisel), oma nime ning kas oma mõõtkava või **Mõõtkava puudub**.
- Iga rea parempoolses servas on märgiste arv lehel. Kui kirje on esile tõstetud, näitab see hoopis, mitu selle kirje märki on lehel.
- Klõpsa lehel, et seda avada. {{key:PageDown}} ja {{key:PageUp}} liiguvad loendis järgmisele ja eelmisele lehele.
- Kui koguste arvestus katab PDF-e, mida pole avatud, nimetab loendi all olev märkus need. Vt [Salvesta koguste arvestus ja ava uuesti](topic:save-and-reopen).

Lehtede nimed tulevad PDF-ist: silt nagu `A-101` saab lehe nimeks. Lehel ilma sildita nimetatakse see faili ja lehekülje numbri järgi, nt „Plaanid, lk 3“. Mitme avatud PDF-i korral näitavad sildiga lehed ka failinime.

## Leht (keskel)

- Riba lehe all näitab lehe nime ja selle mõõtkava või „Mõõtkava pole veel: vali eelseade või kalibreeri“. Nupud: {{ui:MarkupCraft}} (kui see rakendus suudab PDF-i võtta; vt [Alusta koguste arvestust ja ava plaanikomplekt](topic:open-plan-set)), {{ui:Võrdle}} (lehe vanem versioon selle peal: [Võrdle muudetud lehte](topic:compare-revisions)), „(n) kontrollimiseks“ (märgitud märgised, kui neid on) ja {{ui:3D}} ([3D-kontrollvaade](topic:check-in-3d)).
- Enne ühtegi avatud PDF-i näitab keskel lühike viieastmeline juhend.
- Ratas suumib kursori kohas. Lohistamine nihutab vaadet. Vt [Klaviatuur ja hiir](topic:keyboard).
- Kui kasutad {{ui:Automaatne loendus}}, ilmub lehe ülaossa riba oma juhtnuppudega.

## Kirjed (paremal)

Üleval on loend {{ui:Pakkumuse ala}}: hoone, korrus või etapp, kuhu uued märgised lähevad ([Pakkumuse alad](topic:bid-areas)).

- {{ui:Uus kirje}} avab väikese vormi: nimi, tüüp ({{ui:Joon (pikkus)}}, {{ui:Pindala}} või {{ui:Loe}}) ja {{ui:Lisa}}.
- Loend näitab iga kirje värvi, tüübiikooni, nime ja kogust. Klõps kirjel joonistab sellega ja tõstab tema märgised esile igal lehel. Uuesti klõpsates lõpetab esiletõstmise.
- Loendi all on **Kirje: (nimi)** — kirje redaktor: nimi, tüüp, värv, ühik, kõrgus või sügavus, kadu, materjali- ja tööjõumäärad, mõõdetud väärtused ja {{ui:Koost}}. Vt [Koguste arvestuse kirjete loomine](topic:create-items).
- **Valitud märgis** ilmub, kui valid märgise: millisesse kirjesse see kuulub, selle leht, mõõtmised ning nupud nagu {{ui:Lisa väljalõige}} ja {{ui:Kustuta märgis}}. Mitme märgise valimisel muutub see **Valitud märgised**-ks: mitu iga tüüpi, ning {{ui:Kopeeri}}, {{ui:Dubleeri}}, {{ui:Lõika}} ja {{ui:Kustuta märgised}}.
- Kirje redaktori lõpus on {{ui:Kopeeri kirje}} ja {{ui:Dubleeri kirje}}: kirje koos koostu ja kuludega, ilma märgisteta. Vt [Märkide kopeerimine, kleepimine ja dubleerimine](topic:copy-paste).

## Kogused (all)

- {{ui:Kirje järgi}} loetleb iga kirje ja selle koostekomponendid koos kogusega, kadu, määrade ja laiendatud kuludega. Kadu ja määrad võid tabelisse otse sisestada.
- {{ui:Lehe järgi}} loetleb iga kirje koguse igal lehel.
- Hoiatus, mis algab **Puudulik:**, ilmub, kui midagi on kogusummadest välja jäetud.
- {{ui:Töö kogusumma}} on päise paremal pool.
- Nool kõige paremal peidab või näitab tabelit, et lehele jääks rohkem ruumi.

Vt [Koguste ja eelarve lugemine](topic:read-quantities).

## Olekuriba (all)

Vasakult paremale: elav mõõtmine joonistamise ajal (pikkus, pindala, raadius või kontrollitulemus), kast {{ui:Sisesta}}, kui sisestad pikkust, TakeoffCraft'i teated, meeldetuletus „Shift haakub 45°-ni“ (või „Haakub 45°-ni; Shift vabastab nurga“, kui see on sisse lülitatud [Sätetes](topic:settings)), nupp {{ui:Haakumine}} (haakumine joonise joontele, sees kui esile tõstetud; {{key:F3}}) ja suumi protsent.

:::tip
Kui midagi ei juhtu, vaata olekuriba. TakeoffCraft seletab seal, miks ta klõpsu keeldus, nt „Sellel lehel pole veel mõõtkava“.
:::

## Muud paigutused

Kõik ülal on paigutus {{ui:CadCraft klassika}}, algus. {{ui:Sätted}} ({{key:Mod+,}}) › {{ui:Globaalne}} › {{ui:Paigutus}} pakub veel kaks; samad tööriistad ja klahvid töötavad kõigis kolmes, ning kui valid {{ui:CadCraft klassika}} uuesti, paneb see iga juhtnupu tagasi sinna, kus see oli.

| Paigutus | TakeoffCraft'is |
|---|---|
| {{ui:Lint ja projektisirvija}} | Üleval {{ui:Koguste arvestuse lint}} ([Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse)), riba käimasoleva tööriista jaoks, sakk iga avatud lehe jaoks (joonise Mudel ja paigutused on samuti lehed) koos mõõtkava eelseadete ja {{ui:Sobita leht}} nupuga lehe all. Vasakul paneelil on {{ui:Omadused}} (valitud kirje, märkus või märgis) ja selle all {{ui:Koguste arvestuse sirvija}}: {{ui:Lehed}} (klõpsa ühele, et see avada sakis), {{ui:Tingimused}} (klõpsa ühel, et joonistada sellega) ja {{ui:Eelarve}} (iga kirje kogusumma ja töö kogusumma); pisipildid on selle teine sakk. |
| {{ui:Tööriistakast ja infokast}} | Lehe kohal tööriistariba, infokast {{ui:Pakkumuse ala}} ja käimasoleva tööriista või valikuga ning lehe ribaga, vasakul veerg koguste arvestuse tööriistu, sakk iga lehe jaoks ning {{ui:Haakumine}} ja suum lehe all. |

Kui [3D-kontrollvaade](topic:check-in-3d) on avatud, astuvad lehesakid ja riba lehe all kõrvale; sulge 3D-vaade, et uuesti mõõta. Telefonis töötab alati telefonipaigutus.

## Täisekraan ja teemad

Nupp {{ui:Täisekraan}} rakenduse ribal või {{key:Ctrl+Shift+F}} (Control igal platvormil, ka Macil) vahetab tavalise, täisekraani ja peidetud ribadega täisekraani režiimi vahel. Peidetud ribade korral liiguta kursor ülemisse serva, et need uuesti näha.

{{ui:Paber}} on hele teema ja {{ui:Mudel}} tume. Teemas {{ui:Mudel}} kuvatakse joonis ekraanil pööratult (heledad jooned tumedal taustal), ainult ekraanil; eksporti ei muudeta kunagi.
