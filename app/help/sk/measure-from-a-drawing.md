---
title: Merať z výkresu
summary: Berte dĺžky a plochy priamo z čiar, oblúkov, polylínií a šráfovaní výkresu tak, že ich vyberiete, s presnými oblúkmi a dierami, namiesto obkresľovania kliknutiami.
keywords: merať výkres, geometria, polylínia, oblúk, kružnica, šráfovanie, vypuklosť, presná dĺžka, presná plocha, vybrať, okno, obkresľovanie, z CAD, lineárne, plocha
from: fd734246
---

{{ui:Merať výkres}} na lište listu výkresu DWG alebo DXF berie objekty výkresu ako značky, takže ich nemusíte obkresľovať kliknutiami. Dĺžka polylínie, dĺžka oblúka, plocha kružnice a plocha šráfovania s jeho dierami vychádzajú presne, z tej istej aritmetiky, akú výkaz používa pre každú značku.

## Objekty ako lineárna alebo plošná položka

1. Vytvorte alebo kliknite na **lineárnu** alebo **plošnú** položku pod {{ui:Položky}}. List potrebuje mierku.
2. Zvoľte {{ui:Merať výkres}}.
3. Kliknite na objekty na liste, aby ste ich vybrali, alebo potiahnite okno okolo nich: všetko úplne vnútri sa vyberie. {{key:Shift}} pridá okno k vybranému; kliknutím na už vybraný objekt ho zrušíte. Lišta zobrazuje celkový súčet: "6 úsekov: 108'-9 1/8" spolu."
4. Zvoľte tlačidlo pridania, ktoré uvádza počet a položku, napríklad {{ui:Pridať 6 do Edge}} (alebo stlačte {{key:Enter}}). Každý objekt sa stane jednou značkou položky, v jednom kroku späť. {{key:Esc}} zruší výber.

## Čo každý druh položky berie

- **Lineárna** položka berie čiary, oblúky, polylínie, kružnice a splajny podľa dĺžky. Uzavretý tvar sa počíta podľa obvodu. Šráfovanie sa vynechá, lebo má plochu, nie dĺžku, a lišta to povie.
- **Plošná** položka berie uzavreté tvary: uzavreté polylínie, kružnice, 2D telesá a šráfovania s ich dierami. Otvorené úseky sa vynechajú a lišta to povie.

## Presné a takmer presné

Čiary, oblúky (akákoľvek vypuklosť), polylínie s vypuklosťami a kružnice sú presné: dĺžky a plochy používajú polomer a rozsah oblúka, nie jeho obrázok. Elipsy, splajny a šráfovania, ktorých hranica je zložená z hrán, sa merajú v tetivách po jednom stupni alebo jemnejšie, čo je v rámci stotiny percenta pre elipsy a desatiny percenta pre ostatné. Lišta hovorí, koľko z vybraného sú krivky tohto druhu.

## Odkiaľ sa čo berie

- **Model**: objekty v priestore modelu. **Rozloženie**: jeho vlastné čiary a objekty modelu vnútri výrezu, škálované cez neho. Objekt, ktorý prechádza cez hranu výrezu, sa neponúka (vykreslil by sa orezaný); objekt, ktorý zobrazujú dva výrezy, sa vezme raz.
- Len hladiny, ktoré list zobrazuje. Bloky sa počítajú, nemerajú sa: pozrite si [Počítanie z výkresu](topic:count-from-a-drawing). 3D polylínie, siete, telesá a oblasti sa neponúkajú.
