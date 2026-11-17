---
title: Měření délkových úseků
summary: Berte délky stěn, potrubí, lišt a dalších délek jako úseky, s přímými segmenty, oblouky a přichycením Shift na 45 stupňů.
keywords: délka, úsek, lomená čára, stěny, lf, délka v lineárních stopách, oblouk, křivka, 45 stupňů, ortho, přichycení, segmenty, polylength, odpočet, otvor, dveře, mezera, zadání, zadané, souřadnice, vzdálenost, přímá vzdálenost, polární
from: c669deff
---

Délková položka měří délku. Každý úsek je řetěz bodů: přímé segmenty a oblouky, když zapnete režim oblouku. Položka může mít libovolný počet úseků na libovolném počtu listů.

Předem: list potřebuje měřítko ([Nastavit měřítko](topic:set-the-scale)) a potřebujete délkovou položku ([Vytvoření položek výkazu](topic:create-items)).

Na vektorovém PDF se vaše kliknutí přichytí k vlastním čarám výkresu: koncům, středům a průsečíkům ([Přichycení k čarám výkresu](topic:snap-to-the-drawing); {{key:F3}} to vypne).

## Nakreslení úseku

1. Klikněte na délkovou položku pod {{ui:Položky}}.
2. Zvolte {{ui:Délková}} na panelu nástrojů, nebo stiskněte {{key:L}}.
3. Klikněte na začátek úseku.
4. Klikněte na každý roh podél něj.
   Stavový řádek ukazuje "Délka" (úsek dosud, k ukazateli) a "segment" (segment, který kreslíte), ve stopách a palcích.
5. Dokončete úsek: dvakrát klikněte na poslední bod, stiskněte {{key:Enter}}, nebo klikněte pravým tlačítkem.
   Úsek se nakreslí barvou položky a stane se vybranou značkou. Délka položky v seznamu {{ui:Položky}} a v tabulce {{ui:Množství}} se zvýší.

Nástroj zůstane na {{ui:Délková}}, takže můžete hned začít další úsek. Stisknutím {{key:Esc}} se vrátíte k {{ui:Vybrat}}.

Při kreslení:

- {{key:Backspace}} (nebo {{key:Delete}}) odebere poslední bod.
- {{key:Esc}} zahodí nedokončený úsek.
- Tažení posouvá list a kolečko přibližuje, bez přidávání bodů.

:::mac
Na touchpadu Macu je pravé tlačítko dvouprstové klepnutí (zapněte sekundární kliknutí v Nastavení systému v části Trackpad). TakeoffCraft čte jen sekundární tlačítko, takže klik s Control se může vzít jako obyčejný klik a přidat bod. Dvojklik nebo {{key:Enter}} vždy dokončí.
:::

:::touch
Na dotykové obrazovce klepnutím umístíte body, tažením jedním prstem posouváte a sevřením dvěma prsty přibližujete. Dokončete dlouhým stisknutím, dvojklepnutím, nebo tlačítkem {{ui:Dokončit}} na liště pod listem ({{ui:Zezadu}} vrátí poslední bod zpět). Viz [Řešení potíží](topic:troubleshooting#touch-screens).
:::

## Přímé čáry po krocích 45°

Při umísťování bodu držte {{key:Shift}}. Segment od posledního bodu se přichytí na nejbližší směr 0°, 45°, 90° nebo 135° a zachová délku, kterou jste po něm táhli. Stavový řádek připomíná: "Shift přichytává na 45°".

V režimu oblouku se to použije na konec oblouku: tětiva oblouku jde po krocích 45° od jeho začátku. Bod, na který kliknete na křivce, se nikdy nepřichytává.

## Oblouky a zakřivené stěny

1. Při kreslení úseku umístěte bod, kde křivka začíná.
2. Zapněte režim oblouku: zvolte {{ui:Oblouk}} na panelu nástrojů, nebo stiskněte {{key:R}}. Tlačítko zůstane stisknuté.
3. Klikněte na libovolný bod na křivce, někde uprostřed.
   Stavový řádek přidá "(oblouk: klikněte, kde končí)" a náhled se prohne přes váš bod.
4. Klikněte tam, kde křivka končí.
   Oblouk se přidá. Jeho délka je přesná délka oblouku, ne řada krátkých tětiv.
5. Klikněte na další bod další křivky a na její konec, abyste kreslili dál oblouky, nebo stiskněte {{key:R}} znovu a vraťte se k přímým segmentům.

{{key:Backspace}} nebo {{key:Esc}} nejprve zahodí čekající bod na křivce; stiskněte znovu a odeberete body obvyklým způsobem.

## Zadání délek a souřadnic

Po prvním bodu můžete místo klikání napsat, kam má další bod přijít. Napište číslici, `@` nebo `#`: ve stavovém řádku se otevře pole {{ui:Zadání}} s tím, co jste napsali. Stiskněte {{key:Enter}}, aby se bod umístil; pole zůstane otevřené pro další.

| Zadání | Další bod jde |
|---|---|
| `12'6"` | 12'-6" od posledního bodu, směrem k ukazateli (ukažte směr, pak napište délku) |
| `12'6"<45` | 12'-6" pod úhlem 45°, počítáno proti směru hodinových ručiček od pravé strany obrazovky (`<90` je nahoru, `<-90` dolů) |
| `@6',-4'` | 6' doprava a 4' dolů od posledního bodu |
| `6',4'` (nebo `#6',4'`) | 6' doprava a 4' nahoru od prvního bodu tohoto úseku |

Délky se zadávají stejně jako všude v TakeoffCraftu ([Formáty zadání](topic:entry-formats)): `12'-6 1/2"`, `12.5` (stopy), `30"`, `3.2 m`. "Doprava" a "nahoru" jsou tak, jak vidíte list, i když je stránka PDF otočena.

{{key:Enter}} na prázdném poli úsek ukončí, stejně jako {{key:Enter}} na listu; {{key:Esc}} pole zavře a úsek nechá běžet. Zadané body procházejí stejnými pravidly jako kliky: odpočty, oblouky i uzavírání plochy fungují. Stejné pole funguje v {{ui:Plocha}} a {{ui:Výřez}}; po středu kružnice vezme poloměr.

## Odpočet části úseku

Stěna, která prochází kolem dveří nebo výlohy, může být nakreslena rovně přes ně a přesto se počítá jen stěna: úseky přes otvor jsou **odpočty**. Kreslí se čárkovaně a tence a nepočítají se.

Při kreslení:

1. Umístěte bod, kde otvor začíná.
2. Zvolte {{ui:Odpočet}} na panelu nástrojů, nebo stiskněte {{key:E}}. Tlačítko zůstane stisknuté a stavový řádek říká, že další segmenty jsou odpočty.
3. Klikněte, kde otvor končí. Segment se nakreslí čárkovaně; "Délka" ve stavovém řádku jej vynechá.
4. Stiskněte {{key:E}} znovu a pokračujte podél stěny.

Po nakreslení: vyberte úsek. Pod **Vybraná značka** má každý segment pole {{ui:Odpočet}}: zaškrtněte jej, aby se odečetl, odškrtněte jej, aby se zase počítal. Každá změna je jeden krok zpět.

Úsek vždy ponechá alespoň jeden počítaný segment. Panel pak ukazuje **Odpočty** (odečtenou délku) a **Nakresleno** (celý úsek); **Délka**, množství položky, plocha stěny i náklady používají délku bez odpočtů. 3D kontrolní pohled nechá v stěně mezeru, označené PDF kreslí odpočty čárkovaně a exportovaný list **Značky** je vypisuje.

Posun rohu odpočty zachová. Přidávání nebo odebírání bodů (kreslením úseku znovu) začíná bez nich.

## Podívejte se na podrobnosti úseku

Zvolte {{ui:Vybrat}} ({{key:V}}) a klikněte na úsek. **Vybraná značka** vpravo ukazuje:

- položku, ke které patří (výběrem jiné délkové položky v seznamu přesunete úsek tam),
- list,
- **Délku** ve stopách a palcích a v LF,
- počet **Segmentů** a **Plochu stěny**, když má položka výšku,
- délku každého segmentu, za oblouky se píše "(oblouk)", a jeho pole {{ui:Odpočet}}.

Na listu je každý segment vybraného úseku popsán svou délkou.

## Oprava úseku

- **Přesun bodu**: vyberte úsek a přetáhněte jednu z jeho čtvercových rohových úchytek. Držte {{key:Shift}}, aby se přesouvaný segment přichytil po krocích 45°. Oblouk si zachová své vyklenutí.
- **Ohnutí oblouku**: vybraný úsek ukazuje kulatou úchytku uprostřed každého oblouku. Přetáhněte ji: oblouk prochází bodem, kde jste pustili, takže se prohne více, méně, nebo opačným směrem. Přetažen na přímku mezi svými konci se stane přímým segmentem. {{key:Mod+Z}} to vrátí ("Bend arc").
- **Smazání úseku**: vyberte jej a stiskněte {{key:Delete}}, zvolte {{ui:Delete}} na panelu nástrojů v nabídce {{ui:Další}}, nebo {{ui:Smazat značku}} v panelu.
- **Zpět**: {{key:Mod+Z}}; znovu s {{key:Mod+Y}}.

Bod uprostřed úseku zatím vložit nelze. Smažte úsek a nakreslete jej znovu.

## Plocha stěn

Dejte délkové položce {{ui:Výška}} (například `9'-0"`). Pak hlásí **Plocha stěn (A)** = délka × výška, v SF (nebo m² u metrické položky), a plocha stěn jde do sloupce poznámek exportu tabulky. Použijte ji v sestavách pro desky, nátěr nebo izolaci: viz [Sestavy a vzorce](topic:assemblies).
