---
title: Přichycení k čárám výkresu
summary: Body při měření nebo kalibraci přeskakují na vlastní čáry PDF: konce, středy, průsečíky i libovolné místo na čáře, se značkou, která říká, o jaký bod jde.
keywords: přichytit, přichycení, uchopení, přichycení k objektu, koncový bod, střed, průsečík, nejbližší, vektor, čáry, linie, přesně, přesný, F3, magnet, roh
from: 41d29e9b
---

Většina sad plánů jsou vektorová PDF: jejich zdi a hrany jsou skutečné čáry, ne pixely. Při měření TakeoffCraft přichytává vaše kliknutí k těmto čárám, takže úsek začne přesně v rohu zdi a kalibrace načte kótu, kterou kreslič nakreslil, a ne pixel, na který jste klikli.

Přichycení je při spuštění zapnuté. Zapnete a vypnete je tlačítkem {{ui:Přichytit}} ve stavovém řádku nebo klávesou {{key:F3}}; nastavení se uchovává v tomto prohlížeči (najdete ho také v [Nastavení](topic:settings)).

## K čemu přichytává

Když se ukazatel dostane do vzdálenosti asi 10 obrazových bodů od čáry, značka ukáže, kam kliknutí dopadne, spolu se svým názvem:

| Značka | Název | Kde |
|---|---|---|
| Čtverec | **Koncový bod** | Konec čáry nebo roh, kde se čáry setkávají. Počítají se oba konce křivky; body podél ní nikoli. |
| Trojúhelník | **Střed** | Střed přímé čáry. |
| Křížek | **Průsečík** | Místo, kde se dvě čáry kříží, nebo kde jedna končí na druhé. |
| Přesýpací hodiny | **Na čáře** | Nejbližší bod na čáře, když není nablízku žádný konec, střed ani průsečík. |

Vyhrává nejbližší konec, střed nebo průsečík. Bod se umístí na samotnou čáru, až když žádný z nich není blízko. Přiblížením vyberete mezi body, které leží blízko sebe: těch 10 pixelů jsou obrazové body, takže při větším přiblížení pokrývají menší část listu.

## Kde funguje

Přichycení funguje v {{ui:Délková}}, {{ui:Plocha}}, {{ui:Kruh}}, {{ui:Výřez}}, {{ui:Kalibrovat}} a {{ui:Kontrola}}, a také při tažení rohu vybrané značky. Umísťuje i body oblouků. {{ui:Počet}}, {{ui:Automatické počítání}} a vkládání se nepřichytávají.

Přichycený bod má přednost před přichycením na 45° klávesou {{key:Shift}}: chcete-li kreslit pod 45° mimo čáry, nejprve vypněte přichycení klávesou {{key:F3}}.

:::tip
Kalibrujte se zapnutým přichycením. Klikněte blízko obou konců kótovací čáry nebo zdi, kterou znáte: oba body dopadnou přesně na výkres a měřítko vyjde přesně (stavový řádek pak uvede předvolbu, které odpovídá).
:::

## Listy, na kterých přichytit nelze

- **Naskenované listy** jsou obrázky bez čar, na které by se dalo přichytit. Stavový řádek hlásí "Tento list nemá čáry, na které by šlo přichytit (naskenovaná strana je obrázek)." a body jdou tam, kam kliknete.
- **Velmi velké výkresy**: přichycení načte až 400 000 úseček na list. U listu s více úsečkami to uvede a přichytí jen k prvním.
- **Text** se nepřichytává, pokud PDF písmena nekreslí jako čáry (to dělají některé plottery).

Čáry listu se načtou při prvním otevření, na pozadí; u velkého listu může chvíli trvat, než se značky objeví.
