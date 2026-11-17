---
title: Kontrollera leverantörslager och leveranstider
summary: Lägg till en leverantörs lagerlista (CSV eller kalkylblad) så kontrollerar TakeoffCraft vad mängdavtagningen behöver, inklusive spill, mot den: om det finns tillräckligt i lager och hur lång väntan är. Brist och långa väntetider visas i Problem-panelen.
keywords: leverantör, lager, i lager, leveranstid, tillgänglighet, brist, restnotering, beställningslista, csv, sku, leverantör, material, leverans, problem
from: f11160fb
---

{{ui:Leverans}} i verktygsfältet (lastbilen) kontrollerar vad din mängdavtagning behöver mot en leverantörs lagerlista. De relevanta raderna från leverantören sparas i mängdavtagningens egen fil. Ingenting skickas någonstans och ingen frågar en leverantör: du tar med filen.

## Filen

En CSV-fil med en rubrikrad. Den behöver en kolumn för namn eller SKU och en kolumn för lager eller leveranstid. Dessa rubriker känns igen (i valfri ordning, oavsett versal eller gemen): Item, Name, Description eller Product; SKU, Part eller Item #; In stock, On hand, Available eller Quantity; Lead time eller Delivery days; Unit eller UOM; Price eller Cost; Supplier eller Vendor.

- Lager kan vara ett tal (1,200), "In stock" eller "Out of stock".
- En leveranstid kan vara "5 days", "2 weeks", "2-3 weeks" (den längre används), "3 months", "same day" eller "backorder". Ett rent tal är i rubrikens enhet (dagar, om rubriken inte säger weeks eller months).
- Excel-filer läses inte: spara kalkylbladet som CSV först.

## Kontrollera mängdavtagningen

1. Välj {{ui:Leverans}}, sedan {{ui:Lägg till en leverantörsfil…}} och välj CSV-filen. Du kan lägga till flera: upp till fem filer, totalt 2,000 rader, de som matchar dina poster först.
2. Varje post, andra villkor och kalkylsammansättningsdel med en mängd matchas mot en rad på namn, eller på SKU i namnet. Ett liknande namn (ett ena innehåller det andra) används när det inte finns ett exakt, och det sägs.
3. Under {{ui:Vad mängdavtagningen behöver}} kommer de korta först: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" eller "In stock". Behovet inkluderar spill. En leverantörsenhet som inte är kalkylens (ton mot fot) redovisas och jämförs aldrig. Varje rad har {{ui:Markera posten}}, som hoppar till posten.
4. Ange {{ui:Längsta önskade väntan (dagar)}} (standard 14). En post som inte finns i lager och väntar längre än så flaggas, och sammanfattningen anger den längsta väntan som spelar roll.
5. {{ui:Beställningslista (CSV)}} laddar ner de korta posterna med bristmängden, leverantören och leveranstiden. {{ui:Utelämna}} tar bort ett behov ur kontrollen (det är ett steg som går att ångra).

## Kalkylfiler och prisbiblioteket

En leverantörs lista kan vara en Excel-arbetsbok (.xlsx) i stället för en CSV: det första bladet läses, med samma kolumnnamn. Formler körs aldrig; det värde som står i filen är det som läses.

När en fil med priser har lagts till sätter {{ui:Priser till biblioteket}} i dialogrutan materialpriset för varje post i [Bibliotek](topic:price-library) som filen prissätter: samma namn och en enhet som är densamma (eller inte anges). Arbete, spill, höjd och kalkylsammansättningar lämnas som de är, och postens anteckning anger vilken fil priset kom från. En post i meter prissätts inte från en lista i fot, och en post utan matchande namn lämnas ifred; statusraden säger hur många som hoppades över på grund av enheten. Räkna om från Biblioteket för att föra in de nya priserna i den här mängdavtagningen.

## I Problem-panelen

En brist är en varning och en lång väntetid är en anteckning, i den delade Problem-panelen ("Leverantörslager"), så de ligger tillsammans med alla andra kontroller. Du kan godkänna en med en orsak, och godkännandet sparas i mängdavtagningen.

## Med din assistent

Om du tillåter assistenter i Inställningar kan de läsa kontrollen (supply_check). Att lägga till en leverantörsfil gör du själv.

## Bra att veta

Lagersiffrorna är bara så aktuella som filen du lägger till. Lägg till filen igen för att uppdatera den: en fil med samma namn ersätter den tidigare.
