---
title: Lovljenje na črte risbe
summary: Točke med merjenjem ali kalibracijo skočijo na lastne črte PDF-ja: krajišča, razpolovišča, križišča ali kamor koli na črto, z oznako, ki pove, katera je.
keywords: lovljenje, osnap, lovljenje objektov, krajišče, razpolovišče, presečišče, najbližje, vektor, črte, natančno, točno, F3, magnet, vogal
from: 41d29e9b
---

Večina načrtnih nizov je vektorskih PDF-jev: njihove stene in robovi so prave črte, ne slikovne pike. Med merjenjem TakeoffCraft pritegne vaše klike na te črte, zato se odsek začne natanko na vogalu stene, kalibracija pa prebere kóto, ki jo je narisal risar, ne piksla, na katerega ste kliknili.

Lovljenje je ob zagonu vklopljeno. Vklopite ga in izklopite z {{ui:Lovljenje}} v vrstici stanja ali s {{key:F3}}; nastavitev se hrani v tem brskalniku (najdete jo tudi pod [Nastavitve](topic:settings)).

## Na kaj se lovi

Ko se kazalec približa črti na razdaljo približno 10 slikovnih pik na zaslonu, se prikaže oznaka, ki kaže, kam bo pristal klik, z imenom:

| Oznaka | Ime | Kje |
|---|---|---|
| Kvadrat | **Krajišče** | Konec črte ali vogal, kjer se črte stikajo. Obe krajišči krivulje štejeta; točke vzdolž nje ne. |
| Trikotnik | **Razpolovišče** | Sredina ravne črte. |
| Križec | **Presečišče** | Kjer se dve črti sekata ali kjer ena konča na drugi. |
| Peščena ura | **Na črti** | Najbližja točka na črti, kadar nobeno krajišče, razpolovišče ali presečišče ni blizu. |

Najbližje krajišče, razpolovišče ali presečišče zmaga. Točka pade na samo črto le, kadar nobeno od teh ni blizu. Za izbiro med točkami, ki ležijo skupaj, povečajte prikaz: 10 slikovnih pik je pik na zaslonu, zato pri večji povečavi pokrijejo manj risbe.

## Kje deluje

Lovljenje deluje v {{ui:Linijsko}}, {{ui:Površina}}, {{ui:Krožnica}}, {{ui:Odprtina}}, {{ui:Kalibriraj}} in {{ui:Preveri}} ter ko povlečete vogal izbrane oznake. Postavlja tudi točke na lokih. {{ui:Štetje}}, {{ui:Samodejno štetje}} in lepljenje se ne lovijo.

Ujeta točka ima prednost pred korakom 45° s tipko {{key:Shift}}: če želite risati pod kotom 45° stran od črt, najprej izklopite lovljenje s tipko {{key:F3}}.

:::tip
Kalibrirajte z vklopljenim lovljenjem. Kliknite blizu obeh krajišč kótne črte ali stene, ki jo poznate: obe točki pristaneta natanko na risbi in merilo je natančno (vrstica stanja nato navede prednastavitev, ki ustreza).
:::

## Listi, pri katerih lovljenje ne deluje

- **Skenirani listi** so slike brez črt, na katere bi se lahko lovilo. Vrstica stanja izpiše "This sheet has no lines to snap to (a scanned page is a picture)." in točke gredo tja, kamor kliknete.
- **Zelo velike risbe**: lovljenje prebere do 400.000 odsekov črt na list. Pri listu z več jih to pove in se lovi le na prve.
- **Besedilo** se ne lovi, razen če PDF črke riše kot črte (nekateri risalniki).

Črte lista se preberejo prvič, ko ga odprete, v ozadju; pri velikem listu lahko oznake pojavijo šele po sekundi.
