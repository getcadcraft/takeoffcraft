---
title: Mullatööd ja kõrgusmärgid
summary: Märgi kõrgusmärgid tööplaanile, anna need CivilCrafti pinna ning kaeve ja täite arvutamiseks ning arvuta siin lihtsad kaevetööde kogused.
keywords: mullatööd, kaevetööd, kaeve, täide, kaeve ja täide, vertikaalplaneerimine, kõrgusmärk, kõrgusmärgid, topo, pind, triangulatsioon, civilcraft, punktid, pnezd, kraav
from: a898e508
---

TakeoffCraft mõõdab seda, mis on joonistatud lehele. Mullatööd vajavad maapinda, seetõttu jagatakse seda CivilCrafti-ga: CivilCraft koostab punktidest pindu, planeerib need ning arvutab kaeve, täite ja veo.

## Lihtne kaevetöö

Ühele sügavusele kaevatava ala puhul piisab pindala-kirjest, millel on **sügavus**: maht on pindala × sügavus. Üldehitaja [ehitusosa pakett](topic:trade-packs) sisaldab massiivse kaevetöö kirjet (kaevemaht, lahtine maht ja veokoormad) ning kommunikatsioonikraavi kirjet (kaevamine, aluskiht ja tagasitäide pikkuse ja sügavuse järgi).

## Kõrgusmärgid CivilCraftile

1. Määra tööplaadi mõõtkava.
2. Tee **Loendus**-kirje, näiteks „Olemasolev maapind“, ja klõpsa lehel iga kõrgusmärgi kohal.
3. Vali märgis ja sisesta valitud märgise paneelis selle {{ui:Kõrgusmärk}}: `102.5`, `102'-6"` või `31.24 m`. Negatiivsed ja nullkõrgused on lubatud.
4. Ava menüü {{ui:Eksport}} ja vali {{ui:Kõrgusmärgid}}. Saad punktifaili (`.csv`) veergudega Point, Northing, Easting, Elevation ja Description, üks rida iga avatud lehe märgitud punkti kohta.
5. Ava see fail CivilCraftis (vt [Punktide importimine](app:civilcraft/import-points)). Programm koostab punktidest pinna ([Pinna koostamine](app:civilcraft/build-surface)); sealt edasi võrdleb pindu ning annab kaeve ja täite ([Mahud](app:civilcraft/volumes)).

Northing ja Easting on lehe enda koordinaadid jalgades, mõõdetuna lehe nurgast selle mõõtkavas: kaugused ja mahud punktide vahel on õiged, kuid need ei ole sinu objekti mõõdistuse koordinaadid. Vajadusel teisenda need CivilCraftis objekti koordinaatideks.

:::note
Erinevatel lehtedel olevad punktid ei jaga koordinaate, seetõttu eksporditakse ainult avatud leht. Kõrgusmärgid salvestatakse koos koguste arvestusega ja need kantakse üle kopeerimisel ja kleepimisel.
:::

## Kaeve ja täide CivilCraftist

CivilCrafti mullatööd tulevad tagasi kahe hinnastatava kirjena:

1. CivilCraftis planeeri oma platvormid ja koridorid ning vali **Mullatööd** all {{ui:Saada TakeoffCraftile}} ([Mullatööde mahud](app:civilcraft/volumes)). See salvestab koguste faili (`.quantities.json`).
2. Ava see TakeoffCraftis {{ui:Ava koguste arvestus}} abil või lohista fail rakendusse. Koguste arvestus jääb avatuks: fail lisab **Mullatööd: kaeve** ja **Mullatööd: täide** kui [tüübitud kogused](topic:create-items#typed-quantities-no-drawing) kuupjardides (CY) jalgade projekti puhul või kuupmeetrites (m³) meetri projekti puhul. See on üks samm: {{key:Mod+Z}} võtab selle tagasi.
3. Nimeta need ümber ning määra kadu, hinnad ja koosted nii, nagu soovid.

Kui projekt muutub, saada uus fail CivilCraftist ja ava see: samad kaks kirjet saavad uued kogused. Nende nimed, hinnad, kadu ja koosted jäävad sellisteks, nagu sina need seadsid. Kui projekti ühik muutus, ütleb olekuriba seda: kontrolli hindu. Teise CivilCrafti projekti fail lisab omad kaks kirjet.

Kogused on kaevemahud, nagu CivilCraft need mõõtis (ruudustikumeetod): kahanemist ega paisumist ei ole arvestatud. Lisa need kaduna või valemiga, näiteks `Q * 1.25` lahtise mahu jaoks. Kirjeredaktor näitab, kust ja millal iga kirje tuli; eelarve märkuste veerg ütleb seda samuti.

:::note
Koguste fail on lihtne JSON (`"format": "cadcraft-quantities"`), nii et skript või muu programm saab selle samuti kirjutada: rakenduse nimi, projekt ning kirjed võtme, nime, ühiku ja kogusega.
:::
