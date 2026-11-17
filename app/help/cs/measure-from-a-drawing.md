---
title: Měření z výkresu
summary: Berte délky a plochy z vlastních čar, oblouků, lomených čar a šraf výkresu výběrem, s přesnými oblouky a otvory, místo obkreslování klikáním.
keywords: měřit výkres, geometrie, lomená čára, oblouk, kružnice, šrafa, vyklenutí, přesná délka, přesná plocha, výběr, okno, sledování, z CADu, délková, plocha
from: fd734246
---

{{ui:Měřit výkres}} na liště listu DWG nebo DXF převezme vlastní objekty výkresu jako značky, takže je nemusíte obkreslovat klikáním. Délka lomené čáry, délka oblouku, plocha kružnice a plocha šrafy s jejími otvory vyjdou přesně, ze stejné aritmetiky, kterou výkaz používá u každé značky.

## Převzetí objektů jako délkové nebo plošné položky

1. Vytvořte, nebo klikněte na **délkovou** nebo **plošnou** položku pod {{ui:Položky}}. List potřebuje měřítko.
2. Zvolte {{ui:Měřit výkres}}.
3. Klikněte na objekty na listu, abyste je vybrali, nebo kolem nich přetáhněte okno: vybere se vše, co je celé uvnitř. {{key:Shift}} přidá okno k výběru; kliknutím na už vybraný objekt jej zase zrušíte. Lišta ukazuje součet: "6 úseků: 108'-9 1/8" celkem."
4. Zvolte tlačítko přidání, které pojmenuje počet a položku, například {{ui:Přidat 6 do Edge}} (nebo stiskněte {{key:Enter}}). Každý objekt se stane jednou značkou položky, v jednom kroku zpět. {{key:Esc}} vymaže, co jste vybrali.

## Co který typ položky bere

- **Délková** položka bere čáry, oblouky, lomené čáry, kružnice a splajny podle délky. Uzavřený tvar se počítá podle obvodu. Šrafa se vynechá: má plochu, ne délku, a lišta to řekne.
- **Plošná** položka bere uzavřené tvary: uzavřené lomené čáry, kružnice, 2D tělesa a šrafy s jejich otvory. Otevřené úseky se vynechají a lišta to řekne.

## Přesné a téměř přesné

Čáry, oblouky (s libovolným vyklenutím), lomené čáry s vyklenutími a kružnice jsou přesné: délky a plochy používají poloměr a úhel oblouku, ne jeho obrázek. Elipsy, splajny a šrafy, jejichž hranice je tvořena hranami, se měří tětivami po jednom stupni nebo jemněji, což je u elips do jedné setiny procenta a u ostatních do jedné desetiny; lišta říká, kolik z vybraného jsou křivky tohoto druhu.

## Odkud co bere

- **Model**: objekty v prostoru modelu. **Rozvržení**: jeho vlastní čáry a objekty modelu uvnitř výřezu, přepočítané přes něj. Objekt, který přechází přes hranu výřezu, se nenabízí (vykreslil by se oříznutý); objekt, který zobrazují dva výřezy, se vezme jednou.
- Jen vrstvy, které list zobrazuje. Bloky se počítají, neměří se: viz [Počítání z výkresu](topic:count-from-a-drawing). 3D lomené čáry, sítě, tělesa a oblasti se nenabízejí.
