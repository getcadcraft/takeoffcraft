---
title: Výber čiar z PDF
summary: Kliknite na čiaru vektorového PDF a zmerajte celú spojenú dráhu, alebo kliknite vnútri uzavretého obrysu pre jeho plochu, so zobrazenou toleranciou medzier a jedným krokom späť na každý segment.
keywords: dráha, výber, čiary, spojené, celý úsek, obkreslenie, obrys, obvod, medzera, tolerancia, premostenie, segmenty, tabulátor, vektor, plocha z čiar, p
from: c22526ae
---

Na vektorovom PDF sú steny a hrany skutočné čiary. {{ui:Path}} ({{key:P}}) ich berie tak, ako sú nakreslené: jedno kliknutie na čiaru zmeria všetko, čo je k nej spojené, od konca po koniec, takže stenu neobkresľujete kliknutím na jej rohy. List potrebuje mierku. Naskenovaná strana nemá čiary na výber; tam použite [Lineárne](topic:measure-linear) alebo [Plocha](topic:measure-areas).

## Výber dráhy alebo obrysu

1. Vyberte {{ui:Path}}. Čiara pod ukazovateľom je orámovaná a ostatné dráhy, ktoré by mohla byť, sú nakreslené tenko.
2. Kliknite na čiaru: vyberie sa celá spojená dráha. Lišta pod panelom nástrojov uvádza jej segmenty, dĺžku, toleranciu medzier a koľko medzier bolo premostených. Dráha, ktorá sa vráti na svoj začiatok, je uzavretá a hlási aj svoj obvod.
3. Alebo kliknite vnútri uzavretého obrysu, mimo akejkoľvek čiary: obrys okolo daného bodu sa vyberie ako plocha. Najmenší príde prvý; {{key:Tab}} vyskúša ďalší väčší obrys.
4. Stlačte {{key:Enter}} (alebo kliknite pravým tlačidlom, alebo dvakrát kliknite), aby ste pridali značky. Vybraná dráha sa stane značkou položky **lineárnej**, obrys značkou položky **plochy**: aktívna položka, ak má taký druh, inak najnovšia položka tohto druhu. Ak žiadna nie je, otvorí sa formulár novej položky a nič sa nepridá, kým znova nestlačíte {{key:Enter}}. Všetko vybrané sa pridá v jednom kroku späť.

## Tolerancia medzier

Kresliči nechávajú malé diery tam, kde sa čiary majú stretnúť. Dve čiary sa spoja, keď sú ich konce bližšie ako **tolerancia medzier**. Začína na 1,5 bodu na liste (zobrazená v stopách a palcoch pri mierke listu) a prerušovaný kruh tejto šírky sleduje ukazovateľ a sedí na každom konci dráhy pod ním. Každá premostená diera je na vybranej dráhe obkrúžená oranžovo a lišta ich počíta.

{{key:]}} toleranciu zväčší, {{key:[}} zmenší. Vybraná dráha sa hneď znova spojí pri novej tolerancii. Na križovatke dráha pokračuje rovno, cez najmenší ohyb, a odbočku opustí.

## Klávesy

| Kláves alebo akcia | Čo robí |
|---|---|
| Kliknutie | Vyberie dráhu pod ukazovateľom alebo obrys okolo nej. |
| {{key:Shift}} + kliknutie | Pridá ďalšiu dráhu alebo obrys k výberu. |
| {{key:Tab}} | Vyskúša ďalšiu dráhu pod ukazovateľom alebo ďalší väčší obrys. |
| {{key:Backspace}} alebo {{key:Mod+Z}} | Odoberie posledný segment z poslednej vybranej dráhy, po jednom segmente. Dráha bez zostávajúcich segmentov zmizne. Bez výberu je {{key:Mod+Z}} bežné späť. |
| {{key:[}} a {{key:]}} | Užšia a širšia tolerancia medzier. |
| {{key:Enter}} | Pridá značky. |
| {{key:Esc}} | Zruší výber. |

## Dobré vedieť

- Krivka vo výkrese je reťaz krátkych rovných kúskov, takže jej dĺžka je o kúsok kratšia než skutočný oblúk. Pre presný oblúk zmerajte priamo súbor výkresu ([Meranie z výkresu](topic:measure-from-a-drawing)).
- Premostená medzera sa počíta ako priamy skok cez ňu, takže obvod uzavretého obrysu ju zahŕňa.
- Čiary sú iba ťahy a výplne v samotných dráhach strany. Text nakreslený ako písmená a obrázky čiary nie sú.
