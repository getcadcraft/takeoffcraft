---
title: Střechy a sklony
summary: Přiřaďte oblasti sklon, abyste změřili plochu střechy z půdorysu, a měřte štítové hrany, nároží a úžlabí podél jejich sklonu.
keywords: střecha, sklon, koeficient sklonu, stoupání, vodorovný průmět, 6:12, štítová hrana, nároží, úžlabí, štít, krytina, čtverce, šikmá plocha, skutečná délka, plocha v půdorysu
from: 38225b60
---

Půdorys střechy ukazuje každou rovinu střechy zploštěnou, jak je vidět shora. Samotná střecha je větší: rovina se sklonem 6:12 má přibližně o 12% větší plochu než její půdorys a její šikmé hrany jsou delší, než vypadají. Zadejte položce sklon a TakeoffCraft měří podél sklonu.

## Zadání sklonu

Sklon je stoupání na 12 jednotek vodorovného průmětu, jako na symbolech sklonu v půdorysu střechy. Zadejte ho jako `6:12`, `6/12` nebo jen `6`; funguje i jiný průmět (`4:10` je 4.8:12). Úhel zadejte se znakem stupně: `26.57°`. Prázdné pole nebo `0` znamená vodorovnou střechu.

## Plochy střechy

1. Vytvořte plošnou položku pro krytinu, nebo otevřete tu, kterou máte.
2. V jejím nastavení zadejte **Sklon**, například `6:12`.
3. Obtáhněte každou rovinu střechy na půdorysu nástrojem {{ui:Plocha}}, jako obvykle.

Každá rovina se započítává jako plocha v půdorysu násobená koeficientem sklonu: √(1 + (stoupání ÷ 12)²), což je 1.118 pro 6:12 a 1.414 pro 12:12. Vyberte rovinu a uvidíte její **Plochu** (na šikmině), **Plochu v půdorysu** a **Koeficient sklonu**.

Roviny s jiným sklonem: vyberte rovinu a v jejím panelu zadejte její vlastní **Sklon**. Pokud ho necháte prázdný, použije se sklon položky. Kontrolní 3D pohled, sestavy (`A` je šikmá plocha), náklady i export všechny používají šikmou plochu. Odpočty na šikmé rovině, například střešní okna, se odečítají při stejném sklonu.

Obvod (`P`) zůstává obvodem v půdorysu. Okapy, štítové hrany, nároží a úžlabí měřte jako úseky (níže).

## Štítové hrany, nároží a úžlabí

1. Vytvořte délkovou položku, například "Štítová hrana" nebo "Nároží".
2. Nastavte její **Typ sklonu** na **Štítová hrana** (šikmá hrana, jako u štítu), nebo na **Nároží nebo úžlabí** (čára, kde se stýkají dvě roviny), a zadejte **Sklon** rovin střechy.
3. Kreslete úseky na půdorysu nástrojem {{ui:Délková}}.

Štítová hrana se počítá jako délka v půdorysu násobená koeficientem sklonu. Nároží nebo úžlabí vede v půdorysu pod úhlem 45° mezi dvěma rovinami stejného sklonu, takže jeho skutečná délka je délka v půdorysu násobená √(1 + (stoupání ÷ 12)² ÷ 2): 1.061 pro 6:12, 1.225 pro 12:12.

Jeden úsek může kombinovat obojí. Vyberte ho: každý segment v jeho panelu má seznam typu sklonu — **Nastavení položky**, **Vodorovná**, **Štítová hrana** nebo **Nároží nebo úžlabí** — a jeho délku podél sklonu. **Sklon** úseku v panelu nahradí sklon položky pro všechny jeho segmenty. Panel také ukazuje **Délku v půdorysu** a popisky na listu ukazují délky podél sklonu.

Odpočty stále fungují: odečtený segment se nepočítá, ať je šikmý, nebo ne.

:::note
Nároží a úžlabí předpokládají, že obě roviny mají stejný sklon. U rovin s různým sklonem změřte nároží jeho skutečnou délkou jinde, nebo ho nakreslete jako štítovou hranu s ekvivalentním sklonem.
:::
