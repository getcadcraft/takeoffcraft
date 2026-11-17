---
title: Pārbaudīt piegādātāja krājumus un piegādes laikus
summary: Pievienojiet piegādātāja krājumu sarakstu (CSV vai izklājlapu), un TakeoffCraft pārbauda, ko apjomu aprēķins prasa, ieskaitot atkritumus, pret to: vai ir pietiekami krājumā un cik ilgs ir gaidīšanas laiks. Trūkumi un ilgi gaidīšanas laiki tiek rādīti Problēmu panelī.
keywords: piegādātājs, krājumi, noliktavā, piegādes laiks, pieejamība, trūkums, atpakaļpasūtījums, pasūtījuma saraksts, csv, sku, pārdevējs, materiāli, piegāde, problēmas
from: f11160fb
---

{{ui:Piegāde}} rīkjoslā (kravas auto) pārbauda, ko jūsu apjomu aprēķins prasa, pret piegādātāja krājumu sarakstu. Piegādātāja rindas, kas ir svarīgas, tiek glabātas paša apjomu aprēķina failā. Nekas nekur netiek nosūtīts un nekas neprasa piegādātājam: jūs pievienojat failu.

## Fails

CSV fails ar galvenes rindu. Tam vajadzīga nosaukuma vai SKU kolonna un krājumu vai piegādes laika kolonna. Šīs galvenes tiek atpazītas (jebkurā secībā un neatkarīgi no burtu lieluma): Item, Name, Description vai Product; SKU, Part vai Item #; In stock, On hand, Available vai Quantity; Lead time vai Delivery days; Unit vai UOM; Price vai Cost; Supplier vai Vendor.

- Krājums var būt skaitlis (1,200), "In stock" vai "Out of stock".
- Piegādes laiks var būt "5 days", "2 weeks", "2-3 weeks" (tiek izmantots ilgākais), "3 months", "same day" vai "backorder". Vienkāršs skaitlis ir galvenes mērvienībā (dienas, ja galvenē nav norādītas nedēļas vai mēneši).
- Excel faili netiek nolasīti: vispirms saglabājiet lapu kā CSV.

## Pārbaudīt apjomu aprēķinu

1. Izvēlieties {{ui:Piegāde}}, tad {{ui:Pievienot piegādātāja failu…}} un izvēlieties CSV. Var pievienot vairākus: līdz pieciem failiem, kopā tiek saglabātas 2,000 rindas, vispirms tās, kas atbilst jūsu vienumiem.
2. Katrs vienums, otrais nosacījums un mezgla daļa ar daudzumu tiek saskaņoti ar rindu pēc nosaukuma vai pēc SKU tā nosaukumā. Līdzīgs nosaukums (viens iekļauts otrā) tiek izmantots, ja precīza sakritība nav, un to norāda.
3. Zem {{ui:Ko prasa apjomu aprēķins}} vispirms ir īsie: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" vai "In stock". Vajadzība ietver atkritumus. Piegādātāja mērvienība, kas nav tā pati, kas tāmei (tonna pret pēdu), tiek ziņota un nekad netiek salīdzināta. Katrai rindai ir {{ui:Atlasīt vienumu}}, kas pāriet uz vienumu.
4. Iestatiet {{ui:Ilgākais vēlamais gaidīšanas laiks (dienas)}} (noklusējums 14). Vienums, kas nav krājumā un gaida ilgāk, tiek atzīmēts, un kopsavilkumā tiek nosaukts nozīmīgākais ilgākais gaidīšanas laiks.
5. {{ui:Pasūtījuma saraksts (CSV)}} lejupielādē īsos vienumus ar trūkstošo daudzumu, piegādātāju un piegādes laiku. {{ui:Neiekļaut pārbaudē}} izņem vajadzību no pārbaudes (tas ir atsaukšanas solis).

## Izklājlapu faili un cenu bibliotēka

Piegādātāja saraksts var būt Excel darbgrāmata (.xlsx), tāpat kā CSV: tiek nolasīta pirmā lapa ar tiem pašiem kolonnu nosaukumiem. Formulas nekad netiek izpildītas; tiek nolasīta vērtība, ko fails satur.

Kad fails ar cenām ir pievienots, dialogā {{ui:Cenas bibliotēkā}} iestata materiāla cenu katram [Bibliotēkas](topic:price-library) ierakstam, kuram fails nosaka cenu: ar tādu pašu nosaukumu un vienādu mērvienību (vai nav norādīta). Darbaspēks, atkritumi, augstums un mezgli paliek, kādi bija, un ieraksta piezīme norāda, no kura faila nāk cena. Ierakstu metros neapjomo ar cenu no saraksta pēdās, un ierakstu bez atbilstoša nosaukuma atstāj nemainītu; statusa rindā norādīts, cik ieraksti izlaisti mērvienības dēļ. Pārcenojiet no bibliotēkas, lai jaunās cenas ienestu šajā apjomu aprēķinā.

## Problēmu panelī

Trūkums ir brīdinājums, bet ilgs gaidīšanas laiks ir piezīme kopīgajā Problēmu panelī ("Piegādātāja krājumi"), tāpēc tie atrodas kopā ar visām citām pārbaudēm. Jūs varat apstiprināt vienu ar pamatojumu, un apstiprinājums tiek saglabāts apjomu aprēķinā.

## Ar jūsu palīgu

Ja iestatījumos atļaujat palīgus, tie var nolasīt pārbaudi (supply_check). Piegādātāja faila pievienošanu veicat jūs.

## Noderīgi zināt

Krājumu skaitļi ir tikpat aktuāli, cik fails, ko pievienojat. Pievienojiet failu atkārtoti, lai to atjauninātu: fails ar tādu pašu nosaukumu aizstāj iepriekšējo.
