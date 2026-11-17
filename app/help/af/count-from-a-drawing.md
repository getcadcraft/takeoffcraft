---
title: Tel uit 'n tekening
summary: Tel blokke, voorwerpe op 'n laag, of teks reguit uit 'n DWG of DXF: presies, met geneste blokke, dinamiese bloktipes en bloksereekse hanteer, in een ontdoen-stap.
keywords: tel uit tekening, cad-telling, bloktelling, tel blokke, invoeg, bloknaam, geneste blokke, dinamiese blok, variant, minsert, reeks, laag, entiteitstipe, sirkels, teks, kenmerk, merker, versteekte lae, presiese telling, hoe om, deure, toerusting
from: 5060e24e
---

{{ui:CAD-telling}} op die bladbalk (die opdrag **Tel uit die tekening** in die ander menustyle) tel wat 'n DWG of DXF sê daar is. Waar {{ui:Outo-tel}} na 'n prent van 'n simbool soek en een kan mis of 'n valse een kan vind, tel dit die voorwerpe: elke invoeging van 'n blok met die naam `DOOR-36` is een deur. Maak eers die tekening oop: [Maak 'n DWG- of DXF-tekening oop](topic:open-a-drawing).

## Tel 'n blok

1. Maak 'n blad van die tekening oop. {{ui:CAD-telling}} is op die bladbalk.
2. Kies dit. Die venster lys die blokke met hoeveel van elkeen daar is. Soek volgens naam, en kies dan een.
3. Kontroleer die reël onder die lys: "22 gevind, 22 om by te voeg."
4. Kies onder {{ui:Voeg by}} 'n telitem, of laat {{ui:'n Nuwe telitem}} staan en gee dit 'n naam.
5. Kies die byvoegknoppie, wat die getal noem: {{ui:Voeg 22 merke by}}. Die merke verskyn by die blok se invoegpunte, en die item se hoeveelheid is die telling.

Dit is een ontdoen-stap: {{key:Mod+Z}} haal die merke (en 'n nuwe item) saam weg. Die beraming, die sigblad en die gemerkte PDF hanteer die item soos enige ander telitem.

### Wat tel

- **Elke invoeging van die bloknaam**, ongeag sy skaal en hoek, in modelruimte of papierruimte. Bloknaam is nie hoofletter-gevoelig nie.
- **Bloksereekse** (MINSERT): elke kopie in die reeks is een.
- **Geneste blokke.** 'n Blok wat binne 'n ander blok geplaas is, tel op elke diepte. Die lys sê "6 binne ander blokke"; ontmerk {{ui:Tel blokke binne ander blokke ook}} om net invoegings wat direk in die tekening geplaas is, te tel.
- **Dinamiese blokke.** 'n Dinamiese blok tel onder sy eie naam, nie onder die anonieme kopieë (`*U12`) wat die lêer hou nie. Sy toestande word apart gelys ("Enkel 12, Dubbel 4"): kies 'n toestand om net daardie te tel, of {{ui:Elke variant}}. Wanneer 'n lêer nie sê watter toestand 'n kopie wys nie, word dié as "(toestand onbekend)" gelys.
- **Laagfilter.** 'n Blok op verskeie lae: kies een onder {{ui:Op laag}}.

### Wat nie

- **Versteekte lae.** 'n Voorwerp op 'n laag wat in die lêer af of gevries is (of wat jy in {{ui:Lae}} versteek het), word uitgelaat, en die reël sê hoeveel: "3 op versteekte lae uitgelaat". Merk {{ui:Tel hulle ook}} aan om hulle in te sluit.
- **Gekoppelde tekeninge wat nie oop is nie** word nie getel nie; die venster sê so.
- **Voorwerpe wat presies op 'n ander van dieselfde soort gestapel is**, word as twee getel (hulle is twee voorwerpe) en die venster sê so: dit is gewoonlik 'n tekenfout wat die moeite werd is om na te kyk.

## Wat hierdie blad wys, of die hele tekening

- **Wat hierdie blad wys** tel die voorwerpe wat die blad wys: op 'n uitleg, die modelvoorwerpe binne sy aansigvensters ('n laag wat in 'n aansigvenster gevries is, word daar nie getel nie) plus die uitleg se eie.
- **Die hele tekening, elke voorwerp een keer** tel modelruimte een keer, met die merke op die Model-blad, en tel nie wat verskeie uitlegte weer wys nie.

Tel wat 'n uitleg wys en tel wat Model wys, gee dieselfde getal vir dieselfde voorwerpe; voeg nie albei by een item nie.

## Tel tellings weer

Om dieselfde blok weer met dieselfde item te tel, voeg net wat nuut is by: "22 reeds getel." Elke merk staan vir een voorwerp.

## Volgens laag en tipe

Op {{ui:Volgens laag en tipe}} kies 'n laag en 'n voorwerptipe (sirkels, polilyne, arsering…): "alle sirkels op E-LITE". Merk {{ui:Tel ook voorwerpe binne blokke}} aan om die binne blokdefinisies in te sluit, by elke plek waar die blok ingevoeg is.

## Volgens teks

Op {{ui:Volgens teks}} tik die teks, soos `A3`, en sê of dit presies dit is, dit bevat, of dit as 'n hele woord het. Teksvoorwerpe, meerleidingteks en blok-**kenmerkwaardes** tel almal ('n etiketkenmerk `ITEM = A3` word gevind); kies {{ui:In kenmerk}} om net een kenmerk te tel. Die mees algemene tekste word gelys om op te klik.

## Wanneer om Outo-tel in plaas daarvan te gebruik

Gebruik {{ui:Outo-tel}} vir PDF's en vir simbole in 'n tekening wat nie blokke is nie (los getrek, of ontplof). As hulle as blokke getrek is, tel hulle hier.
