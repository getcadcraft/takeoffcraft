---
title: Fogás a rajz vonalaihoz
summary: A pontok a PDF saját vonalrajzára ugranak mérés vagy kalibrálás közben: végpontokra, felezőpontokra, metszéspontokra vagy egy vonal bármely pontjára, a jelölő pedig megmutatja, melyikre.
keywords: fogás, objektumfogás, osnap, végpont, felezőpont, metszéspont, legközelebbi, vektor, vonalrajz, vonalak, pontos, pontosan, f3, mágnes, sarok
from: 41d29e9b
---

A legtöbb tervsorozat vektoros PDF: a falai és élei valódi vonalak, nem pixelek. Mérés közben a TakeoffCraft a kattintásait ezekre a vonalakra fogja, így egy szakasz pontosan a fal sarkánál kezdődik, a kalibrálás pedig a rajzoló által berajzolt méretet olvassa be, nem a kattintott pixelt.

A fogás indításkor be van kapcsolva. Be- és kikapcsolni a státuszsorban lévő {{ui:Snap}} gombbal vagy a {{key:F3}} billentyűvel lehet; a beállítás ebben a böngészőben marad meg (a [Beállításokban](topic:settings) is megtalálható).

## Mire fog

Ha a mutató körülbelül 10 képernyőponton belül kerül egy vonalhoz, egy jelölő mutatja, hová esik a kattintás, a nevével együtt:

| Jelölő | Név | Hol |
|---|---|---|
| Négyzet | **Végpont** | Egy vonal vége, vagy ahol vonalak találkoznak. Egy görbe két végpontja számít; a köztük lévő pontok nem. |
| Háromszög | **Felezőpont** | Egy egyenes vonal közepe. |
| Kereszt | **Metszéspont** | Ahol két vonal keresztezi egymást, vagy ahol az egyik a másikon végződik. |
| Homokóra | **A vonalon** | A vonal legközelebbi pontja, ha nincs közel végpont, felezőpont vagy metszéspont. |

A legközelebbi végpont, felezőpont vagy metszéspont nyer. Csak akkor kerül a pont magára a vonalra, ha egyik sincs közel. Nagyítson rá a egymáshoz közeli pontok közötti választáshoz: a 10 képpont képernyőpont, így nagyobb nagyításnál a lapnak kisebb részét fedi.

## Hol működik

A fogás a {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}}, {{ui:Cut-out}}, {{ui:Calibrate}} és {{ui:Check}} eszközöknél működik, valamint akkor, ha a kijelölt jel sarkát húzza. Ívpontokat is ez helyez el. A {{ui:Count}}, az {{ui:Auto count}} és a beillesztés nem fog.

A fogott pont felülírja a {{key:Shift}} 45°-os fogását: ha a vonalaktól függetlenül 45°-ban szeretne rajzolni, előbb kapcsolja ki a fogást az {{key:F3}} billentyűvel.

:::tip
Kalibráljon bekapcsolt fogással. Kattintson egy ismert méretvonal vagy fal két végpontjának közelébe: mindkét pont pontosan a rajzra kerül, a lépték pedig pontos lesz (a státuszsor ekkor megnevezi a hozzá illő előbeállítást).
:::

## Lapok, amelyeken nem lehet fogni

- **A beszkennelt lapok** képek, nincs bennük fogható vonal. A státuszsor ezt írja: „Ezen a lapon nincs fogható vonal (a beszkennelt oldal kép).”, a pontok pedig oda kerülnek, ahová kattint.
- **Nagyon nagy rajzok**: a fogás laponként legfeljebb 400 000 vonalszakaszt olvas be. Ennél többet tartalmazó lapon ezt jelzi, és csak az első szakaszokra fog.
- **A szöveg** nem fogódik, hacsak a PDF nem vonalként rajzolja ki a betűit (egyes plotterek így tesznek).

A lap vonalai az első megnyitáskor olvasódnak be, háttérben; egy nagy lapnál egy másodpercig is eltarthat, amíg a jelölők megjelennek.
