---
title: Beágyazott karbon és 5D árlista
summary: A Szén a mérés beágyazott karbonját összesíti minden tétel mennyiségéből és egy nyílt tényezőtáblázatból, a mérés díjtételeit pedig árlistaként küldi a BimCraftnak az 5D költségekhez.
keywords: szén, beágyazott szén, kgco2e, co2, tényezők, a1-a3, szállítás, hulladék, 5d, árlista, költség, bimcraft, epd
from: f4bff3b8
---

A {{ui:Szén}} gomb az eszköztáron összesíti a mért mennyiségek beágyazott karbonját, és a díjtételeket olyan árlistává alakítja, amelyet az épületmodell használhat. Ez becslés, nem értékelés.

## Beágyazott karbon

Minden tétel mennyiségét a hulladékával együtt megszorozzuk a tényezőtáblázat egy sorával. A sort a tétel nevének szavai alapján párosítjuk („concrete slab” egy olyan sort talál, amelynek kulcsszava: concrete). A táblázat ugyanaz a nyílt táblázat, amelyet a BimCraft használ, így az itt betöltött fájl ott is működik. **A programmal érkező sorok kezdőértékek: általánosak, nincsenek ellenőrizve, és nem valamely adatbázisból származnak.** A párbeszédpanel ezt a számok mellett jelzi; mielőtt egy számra támaszkodna, cserélje le saját forrására.

1. Válassza a {{ui:Szén}} lehetőséget. A darabszámolt tételek a CO2e kilogrammjukkal szerepelnek; az összeg fent van.
2. Jelölje be az {{ui:A4 szállítás}} vagy az {{ui:A5 építési hulladék}} jelölőnégyzetet, hogy ezeket a szakaszokat is beszámítsa, azoknál a soroknál, amelyek adnak rájuk értéket. A termékszakasz mindig beszámít.
3. Ha egy tételhez más sort, vagy egyet sem szeretne használni, a sorában lévő listát használja.
4. A {{ui:Faktorok fájlból…}} betölt egy (JSON vagy CSV) tényezőtáblázatot a saját forrásából; sorai azonos azonosítójú kezdősorokat helyettesítenek. A {{ui:Faktorok (JSON)}} a saját tényezőit menti.

A tényező méterenként, négyzetméterenként, köbméterenként, tételenként vagy kilogrammonként érvényes. A lábban vagy négyzetlábban mért tétel átváltásra kerül. A kilogramm-tényezőhöz térfogat (köbyard vagy köbméter) és a sor sűrűsége kell. Az a tétel, amelynek tényezőjéhez olyan mennyiség kell, amelyet nem mér, a {{ui:Kihagyva}} alatt az okkal együtt szerepel, sosem becsülve. Az állapotsor folyamatos összege ugyanazt a számot mutatja.

A saját tényezősorai, választásai és a beszámított szakaszai a mérés fájljában mentődnek.

## Árlista az 5D költségekhez

A {{ui:5D árak (JSON)}} és a {{ui:5D árak (CSV)}} a mérés díjtételeit árlistaként mentik: soronként egy árazott tétel az egységenkénti anyag- és munkadíjtételével, valamint hulladékával. A BimCraft költségpanelén (Beágyazott karbon és 5D költség) töltse be, hogy az épületmodell feladatait ugyanazokkal a díjtételekkel árazza, amelyek az ajánlatot adták. A táblázatban nem szereplő egységben mért tételek és a díjtétel nélküli tételek kimaradnak.

## Az asszisztenssel

Ha a {{ui:Beállítások}} részben engedélyezi az asszisztenseket, azok olvashatják a szenet (carbon_check). A tényezők betöltését a felhasználó végzi.

## Jó tudni

Semmi sem kerül sehová küldésre. A számok csak annyira jók, mint a betöltött tényezők.
