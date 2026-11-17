---
title: Kontrolli tarnija laoseisu ja tarneaegu
summary: Lisa tarnija laoseisunimekiri (CSV või tabel) ja TakeoffCraft kontrollib sellega, mida koguste arvestus vajab, koos jäätmetega: kas laos on piisavalt ja kui pikk on ootamine. Puudujäägid ja pikad ootamised kuvatakse probleemide paneelil.
keywords: tarnija, laoseis, laos olemas, tarneaeg, saadavus, puudujääk, tagasitellimus, tellimisloend, csv, sku, müüja, materjalid, tarne, probleemid
from: f11160fb
---

{{ui:Tarne}} tööriistaribal (veoauto) kontrollib, mida sinu koguste arvestus vajab, tarnija laoseisunimekirja vastu. Tarnija read, mis on olulised, hoitakse koguste arvestuse enda failis. Midagi ei saadeta kuhugi ega päri tarnijalt midagi: faili toodad sina.

## Fail

CSV-fail, mille esimene rida on päis. Vaja on nime- või SKU-veergu ning laoseisu- või tarneajaveergu. Need päised tuntakse ära (mis tahes järjekorras ja suurustest sõltumata): Item, Name, Description või Product; SKU, Part või Item #; In stock, On hand, Available või Quantity; Lead time või Delivery days; Unit või UOM; Price või Cost; Supplier või Vendor.

- Laoseis võib olla arv (1,200), „In stock“ või „Out of stock“.
- Tarneaeg võib olla „5 days“, „2 weeks“, „2-3 weeks“ (kasutatakse pikemat), „3 months“, „same day“ või „backorder“. Lihtne arv on päises oleva ühiku järgi (päevades, kui päis ei ütle nädalad või kuud).
- Excelifaile ei loeta: salvesta tabel enne CSV-na.

## Kontrolli koguste arvestust

1. Vali {{ui:Tarne}}, siis {{ui:Lisa tarnijafail…}} ja vali CSV. Võid lisada mitu: kuni viis faili, kokku hoitakse 2000 rida, esmalt need, mis sobivad sinu kirjetega.
2. Iga kirje, teise tingimuse ja koostedetaili, millel on kogus, seostatakse reaga nime järgi või selle nimes oleva SKU järgi. Sarnane nimi (üks teise sees) kasutatakse, kui täpset vastet pole, ja seda öeldakse.
3. Jaotises {{ui:Mida koguste arvestus vajab}} tulevad lühikesed kõigepealt: „Puudu 120 EA“, „Tarneaeg 21 päeva“, „Tagasitellimusel“, „Ühik erineb“, „Laoseisu arv puudub“ või „Laos olemas“. Vajadus sisaldab jäätmeid. Tarnija ühik, mis ei ole hinnangu oma (tonn jala vastu), teatatakse ja seda ei võrrelda kunagi. Igal real on {{ui:Vali kirje}}, mis viib kirjeni.
4. Määra {{ui:Pikim soovitud ootamine (päevades)}} (vaikimisi 14). Kirje, mis pole laos ja mille ootamine on pikem, märgitakse ning kokkuvõttes nimetatakse oluline pikim ootamine.
5. {{ui:Tellimisloend (CSV)}} laeb alla lühikesed kirjed koos puuduoleva kogusega, tarnija ja tarneajaga. {{ui:Jäta välja}} võtab vajaduse kontrollist (see on tagasivõtmise samm).

## Tabelifailid ja hinnateek

Tarnijanimekiri võib olla Exceli töövihik (.xlsx) nagu CSV-gi: loetakse esimest lehte samade veergude nimedega. Valemeid ei käivitata; loetakse faili hoitud väärtust.

Kui hindadega fail on lisatud, seab dialoogis {{ui:Hinnad teeki}} iga [teegi](topic:price-library) kirje materjalihinna, mida fail hindab: sama nimi ja sama ühik (või ühik pole öeldud). Tööjõud, jäätmed, kõrgus ja koosted jäävad nagu on ning kirje märkus ütleb, millisest failist hind tuli. Meetrites kirjet ei hinnata jalgades olevast nimekirjast ja ilma vastava nimeta kirje jäetakse rahule; olekuribal öeldakse, mitu jäeti ühiku tõttu vahele. Uute hindade toomiseks sellesse koguste arvestusse hinnasta teegist uuesti.

## Probleemide paneelil

Puudujääk on hoiatus ja pikk ootamine märkus, mõlemad jagatud probleemide paneelil („Tarnija laoseis“), nii et need on koos kõigi teiste kontrollidega. Võid selle vastu võtta põhjendusega ja vastuvõtt salvestatakse koguste arvestusse.

## Assistendiga

Kui lubad seadetes assistente, võivad nad lugeda kontrolli (supply_check). Tarnijafaili lisamine on sinu enda teha.

## Hea teada

Laoseisud on sama värsked kui fail, mille lisad. Lisa fail uuesti, et seda värskendada: sama nimega fail asendab varasema.
