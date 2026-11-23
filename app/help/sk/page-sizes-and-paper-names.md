---
title: Formáty strán a názvy papierov
summary: Pozrite si veľkosť každého listu v milimetroch a palcoch a jeho názov papiera (rady A, B a C, ANSI, ARCH) a zoskupte zmiešanú sadu podľa veľkosti, aby ste našli nezvyčajné listy.
keywords: veľkosť strany, formát papiera, názov papiera, a0, a1, a2, a3, a4, rad B, rad C, ansi, arch, architektonický, mm, palce, vlastná veľkosť, podľa veľkosti, nezvyčajná veľkosť, zmiešaná sada, mierka, sada plánov, mediabox, rotácia
from: 9c061c07
---

Mierka má zmysel iba na správnom papieri. {{ui:TakeoffCraft}} prečíta veľkosť každého listu PDF a pomenuje papier, takže vidíte list vytlačený v inej veľkosti, skôr ako dôverujete meraniu na ňom.

## Čo budete robiť

Pozriete si veľkosť otvoreného listu, potom zoskupíte celú sadu podľa veľkosti.

## Kroky

1. Otvorte plány ({{ui:Otvoriť plány}}).
2. Lišta listu nad výkresom zobrazuje názov papiera otvoreného listu a jeho veľkosť, napríklad „A1 · 594 × 841 mm“.
3. Každý riadok zoznamu {{ui:Listy}} má pod názvom listu riadok s veľkosťou.
4. Zvoľte {{ui:Podľa veľkosti}} v hlavičke {{ui:Listy}}. Zoznam zoskupí listy pod jeden nadpis pre každú veľkosť, najprv najväčšia skupina, a označí veľkosť s iba niekoľkými listami ako nezvyčajnú.
5. Zvoľte {{ui:Podľa veľkosti}} znova, aby ste sa vrátili k pôvodnému poradiu sady.

List v formáte DWG alebo DXF nemá papier, takže sa pre neho nezobrazuje žiadna veľkosť.

## Ako sa volí názov

- Veľkosť sa berie z rámca strany v PDF s uplatnenou rotáciou.
- Názvy sú z radov A a B (ISO 216), z radu C (ISO 269), ANSI A až E a ARCH A až E.
- Strana do 2 mm od pomenovanej veľkosti dostane jej názov. Každá iná strana má označenie vlastný, s najbližšou pomenovanou veľkosťou a s údajom, o koľko sa od nej líši.

## V rozpočte

Zostava rozpočtu obsahuje hárok {{ui:Formáty strán}} s počtom každej veľkosti.

:::note
Hodnoty ANSI a ARCH v palcoch boli prepísané zo zverejnených tabuliek a neboli porovnané s tlačenými normami.
:::
