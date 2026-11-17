---
title: Kiekių gavimas iš IFC 4.3 failo
summary: Atidarykite kelio, geležinkelio, tilto ar žemės darbų IFC 4.3 failą ir gaukite skaičius pagal klasę su ilgiais, plotais ir tūriais, kuriuos nurodo failas, kaip tipizuotus kiekius.
keywords: ifc, ifc4x3, ifc 4.3, kelias, geležinkelis, tiltas, danga, bordiūras, sluoksnis, žemės darbai, atrama, infrastruktūra, kiekiai, bim, civilinė, tipizuoti kiekiai
from: 6b08c2c4
---

IFC 4.3 failas gali turėti kelius, geležinkelius, tiltus, jūrų statinius ir jų dalis: dangas, sluoksnius, bordiūrus, bėgius, žemės darbus, atramas, polius ir kita. TakeoffCraft juos nuskaito ir paverčia tipizuotais kiekiais, kuriuos galite įkainoti.

## Atidaryti failą

1. Pasirinkite {{ui:Atidaryti planus}} grupėje {{ui:Failas}} arba paspauskite {{key:Mod+O}}.
2. Pasirinkite IFC failą (galite pasirinkti jį kartu su PDF) arba įmeskite jį į TakeoffCraft.

Kiekvienai klasei ir iš anksto nustatytam tipui sukuriamas vienas tipizuotas kiekis, pavyzdžiui „Danga (lanksti): skaičius“, o kai failas juos nurodo, dar „ilgis“ m, „plotas“ m² ir „tūris“ m³. Prie kiekvienos pozicijos esanti pastaba nurodo, kiek elementų suskaičiuota ir kiek jų neturėjo nurodyto kiekio. Atidarius naujesnį to paties pavadinimo failą, šie kiekiai atnaujinami, o ne pridedami.

## Ko jis nedaro

- Skaito kiekių rinkinius (IfcElementQuantity), kuriuos failas turi. Jis nematuoja 3D formų, todėl elementas be kiekių rinkinio suskaičiuojamas, bet ilgio, ploto ar tūrio nepridės.
- Skaitomos tik IFC 4.3 infrastruktūros klasės. Pastatų failas (sienos, durys, perdangos) čia nepaverčiamas kiekiais; failas, kuris nėra IFC 4.3, apie tai praneša ir nieko neįkelia.
- Vienetai yra paties failo, perskaičiuoti į metrus.
