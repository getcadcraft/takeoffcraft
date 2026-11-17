---
title: Strechy a sklony
summary: Priraďte oblasti sklon, aby ste z pôdorysu zmerali povrch strechy, a merajte štítové, nárožné a údolnicové hrany pozdĺž ich sklonu.
keywords: strecha, sklon, svah, koeficient sklonu, stúpanie, priebeh, 6:12, štítová hrana, nárožná hrana, údolnica, štít, krytina, štvorce, plocha na sklone, skutočná dĺžka, plocha v pôdoryse
from: 38225b60
---

Pôdorys strechy zobrazuje každú rovinu strechy vodorovne, ako ju vidno zhora. Samotná strecha je však väčšia: rovina so sklonom 6:12 má približne o 12 % väčší povrch ako jej pôdorys a jej šikmé hrany sú dlhšie, než vyzerajú. Priraďte položke jej sklon a TakeoffCraft zmeria pozdĺž svahu.

## Zadanie sklonu

Sklon je stúpanie na každých 12 jednotiek priebehu, ako na symboloch sklonu v pôdoryse strechy. Zadajte ho ako `6:12`, `6/12` alebo iba `6`; funguje aj iný priebeh (`4:10` je 4.8:12). Uhol sa zadáva so znakom stupňa: `26.57°`. Prázdna hodnota alebo `0` znamená rovinu.

## Plochy strechy

1. Vytvorte plochu položku pre krytinu alebo otvorte existujúcu.
2. V jej nastaveniach zadajte **Sklon**, napríklad `6:12`.
3. Obkreslite každú rovinu strechy na pôdoryse pomocou {{ui:Area}} ako obvykle.

Každá rovina sa počíta ako jej plocha v pôdoryse vynásobená koeficientom sklonu: √(1 + (stúpanie ÷ 12)²), čo je 1.118 pri 6:12 a 1.414 pri 12:12. Vyberte rovinu a zobrazí sa jej **Plocha** (na sklone), jej **Plocha v pôdoryse** a **Koeficient sklonu**.

Roviny s iným sklonom: vyberte rovinu a zadajte jej vlastný **Sklon** v jej paneli. Ak ho nechá prázdny, použije sa sklon položky. Kontrolné zobrazenie v 3D, zostavy (`A` je plocha na sklone), náklady aj export používajú plochu na sklone. Odpočty na šikmej rovine, napríklad svetlíky, sa odpočítajú pri rovnakom sklone.

Obvod (`P`) zostáva obvodom v pôdoryse. Previsy, štítové, nárožné a údolnicové hrany merajte ako úseky (pozri nižšie).

## Štítové, nárožné a údolnicové hrany

1. Vytvorte lineárnu položku, napríklad "Štítová hrana" alebo "Nárožia".
2. Nastavte jej **Svah** na **Štítová hrana** (šikmá hrana, ako pri štíte) alebo **Nárožná alebo údolnicová hrana** (čiara, kde sa stretávajú dve roviny) a zadajte **Sklon** rovín strechy.
3. Nakreslite úseky na pôdorys pomocou {{ui:Linear}}.

Štítová hrana sa počíta ako jej dĺžka v pôdoryse vynásobená koeficientom sklonu. Nárožná alebo údolnicová hrana vedie v pôdoryse pod uhlom 45° medzi dvoma rovinami s rovnakým sklonom, takže jej skutočná dĺžka je dĺžka v pôdoryse vynásobená √(1 + (stúpanie ÷ 12)² ÷ 2): 1.061 pri 6:12, 1.225 pri 12:12.

Jeden úsek môže kombinovať oba typy. Vyberte ho: každý segment má vo svojom paneli zoznam svahu — **Položky** (nastavenie položky), **Vodorovne**, **Štítová hrana** alebo **Nárožná alebo údolnicová hrana** — a jeho dĺžku pozdĺž svahu. Vlastný **Sklon** úseku v paneli nahradí sklon položky pre všetky jeho segmenty. Panel tiež zobrazuje **Dĺžku v pôdoryse** a popisky na liste zobrazujú dĺžky pozdĺž svahu.

Odpočty stále fungujú: odpočítaný segment sa nepočíta, či je šikmý alebo nie.

:::note
Nárožné a údolnicové hrany predpokladajú, že obe roviny majú rovnaký sklon. Pri rovinách s rôznym sklonom zmerajte nárožie inde podľa jeho skutočnej dĺžky alebo ho nakreslite ako štítovú hranu s ekvivalentným sklonom.
:::
