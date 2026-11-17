---
title: Prichytávanie k čiaram výkresu
summary: Body sa počas merania alebo kalibrácie prichytia na vlastné čiary PDF: konce, stredy, priesečníky alebo ľubovoľné miesto na čiare, so značkou, ktorá ukazuje, ktorá to je.
keywords: prichytávanie, osnap, uchopenie objektu, koncový bod, stred, priesečník, najbližší, vektor, čiary výkresu, čiary, presný, presne, F3, magnet, roh
from: 41d29e9b
---

Väčšina súborov plánov sú vektorové PDF: ich steny a hrany sú skutočné čiary, nie pixely. Počas merania TakeoffCraft prichytí vaše kliknutia na tieto čiary, takže úsek začína presne v rohu steny a kalibrácia načíta kótu, ktorú nakreslil kreslič, nie pixel, na ktorý ste klikli.

Prichytávanie je pri spustení zapnuté. Zapnite a vypnite ho tlačidlom {{ui:Prichytávanie}} na stavovom riadku alebo klávesom {{key:F3}}; nastavenie sa uchováva v tomto prehliadači (nájdete ho aj v [Nastavenia](topic:settings)).

## Na čo sa prichytáva

Keď sa ukazovateľ dostane do vzdialenosti asi 10 pixelov od čiary, značka ukazuje, kam dopadne kliknutie, spolu so svojím názvom:

| Značka | Názov | Kde |
|---|---|---|
| Štvorec | **Koniec** | Koniec čiary alebo roh, kde sa čiary stretávajú. Oba konce krivky sa počítajú; body medzi nimi nie. |
| Trojuholník | **Stred** | Stred priamej čiary. |
| Kríž | **Priesečník** | Miesto, kde sa dve čiary pretínajú, alebo kde jedna končí na druhej. |
| Presýpacie hodiny | **Na čiare** | Najbližší bod na čiare, keď nie je blízko žiadny koniec, stred ani priesečník. |

Najbližší koniec, stred alebo priesečník má prednosť. Iba keď žiadny nie je blízko, bod sa umiestni priamo na čiaru. Priblížte, ak chcete vybrať medzi bodmi, ktoré sú blízko seba: 10 pixelov sú pixely obrazovky, takže pri väčšom priblížení pokrývajú menšiu časť listu.

## Kde funguje

Prichytávanie funguje v {{ui:Lineárne}}, {{ui:Plocha}}, {{ui:Kružnica}}, {{ui:Výrez}}, {{ui:Kalibrovať}} a {{ui:Kontrola}}, a keď presúvate roh vybranej značky. Umiestňuje tiež body oblúka. {{ui:Počet}}, {{ui:Automatický počet}} a vkladanie sa neprichytávajú.

Prichytený bod má prednosť pred prichytením na 45° klávesom {{key:Shift}}: ak chcete kresliť pod 45° mimo čiar, najprv vypnite prichytávanie klávesom {{key:F3}}.

:::tip
Kalibrujte so zapnutým prichytávaním. Kliknite blízko dvoch koncov kótovacej čiary alebo steny, ktorú poznáte: obidva body dopadnú presne na výkres a mierka vyjde presne (stavový riadok potom pomenuje predvoľbu, ktorej zodpovedá).
:::

## Listy, na ktoré sa nedá prichytiť

- **Skenované listy** sú obrázky bez čiar, na ktoré by sa dalo prichytiť. Stavový riadok hovorí: "Tento list nemá čiary, na ktoré by sa dalo prichytiť (skenovaná strana je obrázok)." a body idú tam, kam kliknete.
- **Veľmi veľké výkresy**: prichytávanie číta až 400 000 úsekov čiar na list. Pri väčšom počte to oznámi a prichytí sa iba k prvým.
- **Text** sa neprichytáva, pokiaľ PDF nekreslí písmená ako čiary (niektoré plotre to robia).

Čiary listu sa načítajú pri prvom otvorení na pozadí; pri veľkom liste môže trvať sekundu, kým sa objavia značky.
