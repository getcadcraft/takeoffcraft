---
title: Tworzenie pozycji przedmiaru
summary: Twórz pozycje liniowe, powierzchniowe i liczone oraz ustawiaj ich jednostkę, wysokość lub głębokość, naddatek oraz stawki materiału i robocizny.
keywords: ekipa, wydajność, wielkość ekipy, płaca, godziny, roboczogodziny, dni ekipy, godziny robocizny, pozycja, nowa pozycja, warunek, wiele warunków, pokój, liniowy, pole, liczenie, jednostka, wysokość, głębokość, naddatek, materiał, robocizna, stawka, kolor, koszt
from: 7fa5effc
---

**Pozycja** to jedna rzecz, którą mierzysz i wyceniasz: typ ściany, wykończenie podłogi, sufit, drzwi, oprawa oświetleniowa. Każdy znacznik, który rysujesz, należy do pozycji. Inne programy nazywają je warunkami.

Każda pozycja ma typ (i może przyjmować także inne rodzaje znaczników, zob. [Jedna pozycja, kilka rodzajów znaczników](topic:create-items#one-item-several-kinds-of-marks)):

| Typ | Rysujesz | Raportuje | Jednostki |
|---|---|---|---|
| Liniowy | Ciągi połączonych punktów | Długość, liczbę ciągów, a gdy ma wysokość – pole ściany | LF lub m |
| Pole | Zamknięte kontury z wycięciami | Pole, obwód, liczbę obszarów | SF, SY, SQ, ac, ha lub m² |
| Liczenie | Jedno kliknięcie na jedną rzecz | Ile ich jest | EA |
| Ilość wpisana | Nic: wpisujesz ilość | Wpisaną liczbę (albo przeniesioną z CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha lub m² |

## Ilości wpisane (bez rysunku)

Niektóre pozycje w kosztorysie nigdy nie są rysowane: mobilizacja, pozwolenia, rezerwa, podwykonawstwo ryczałtowe, wykop i nasyp, które wyliczył CivilCraft. Ustaw je jako **ilość wpisaną**:

1. Wybierz {{ui:Nowa pozycja}}, wpisz nazwę, wybierz {{ui:Ilość wpisana (bez rysunku)}} i wybierz {{ui:Dodaj}}.
2. W edytorze pozycji wybierz {{ui:Jednostka}} (LS dla ryczałtu) i wpisz {{ui:Ilość}}: `1`, `2.5` lub `1,250`.
3. Ustaw naddatek i stawki jak dla każdej innej pozycji. Formuły zestawu używają `Q`, czyli ilości, na przykład `ceil(Q / 12)` kursów ciężarówek.

Ilość wpisana nie przyjmuje żadnych znaczników i nigdy nie sprawia, że kosztorys jest niekompletny. Gdy przedmiar ma obszary przetargowe, edytor ma też {{ui:Obszar przetargowy}}: ilość wpisana liczy się wtedy w tym obszarze, jego alternatywach i sumach, tak jak znacznik tam. Ilości przeniesione z innej aplikacji mówią, skąd pochodzą, zob. [Roboty ziemne i rzędne punktów](topic:earthwork#cut-and-fill-from-civilcraft).

## Utwórz pozycję

1. W panelu {{ui:Pozycje}} po prawej wybierz {{ui:Nowa pozycja}}.
2. Wpisz nazwę, na przykład `Interior wall type A` albo `Carpet tile`.
3. Wybierz typ: {{ui:Liniowa (długość)}}, {{ui:Pole}} albo {{ui:Liczenie}}.
4. Wybierz {{ui:Dodaj}} (albo naciśnij {{key:Enter}}). Pozycja pojawia się na liście z własnym kolorem, staje się pozycją, którą rysujesz, a jej edytor otwiera się pod listą. Pasek stanu podpowiada, którego narzędzia użyć następnie.

Naciśnij {{key:Esc}} w formularzu, aby go zamknąć bez dodawania pozycji.

:::tip
Jeśli najpierw wybierzesz narzędzie pomiarowe, TakeoffCraft użyje ostatniej pozycji właściwego typu albo otworzy formularz {{ui:Nowa pozycja}} z już wybranym typem.
:::

## Wybierz pozycję, którą rysujesz

Kliknij pozycję na liście. Staje się ona pozycją, do której trafiają nowe znaczniki, a jej znaczniki są podświetlone na każdym arkuszu, podczas gdy pozostałe blakną. Jeśli otwarty arkusz nie ma jej żadnych znaczników, TakeoffCraft przeskakuje do arkusza, który je ma. Kliknij pozycję ponownie, aby przestać ją podświetlać; pozostaje ona pozycją, którą rysujesz.

Kliknięcie znacznika narzędziem {{ui:Zaznacz}} także ustawia jego pozycję jako bieżącą.

## Ustaw pozycję

Edytor pozycji (**Pozycja: (nazwa)**) ma te pola. Każde zapisuje się po opuszczeniu pola albo naciśnięciu {{key:Enter}}, a każdą zmianę można cofnąć.

| Pole | Co robi |
|---|---|
| {{ui:Nazwa}} | Pokazywana na liście, w tabelach i eksportach. |
| {{ui:Wpisz}} | Liniowy, Pole lub Liczenie. Jest zablokowane, gdy pozycja ma znaczniki („Pozycja ze znacznikami zachowuje swój typ”). |
| {{ui:Kolor}} | Kolor jej znaczników na ekranie i w oznaczonym PDF. |
| {{ui:Jednostka}} | W jakich jednostkach podawana jest ilość: LF lub m dla liniowych; SF, SY, SQ, ac, ha lub m² dla pól; EA dla liczenia. |
| {{ui:Mierz też}} | Inne rodzaje znaczników, jakie przyjmuje pozycja, każdy z własną jednostką. Zob. niżej. |
| {{ui:Wysokość}} (liniowe) | Wysokość ściany. Pozycja wtedy również raportuje pole ściany (długość × wysokość). Ciągi pochodzące z modelu BimCraft mają swoje drzwi i okna: są wyjmowane raz, a pozycja podaje pole brutto, otwory i netto. Przedmiar z projektu BimCraft, który wybrał metodę pomiaru, jest tu mierzony tą metodą (notka podaje ją wraz ze źródłem i mówi, że nie została sprawdzona przez kosztorysanta); metody nie można zmienić w TakeoffCraft. Cegły lub bloczki i zaprawa z typu ściany trafiają jako dwa składniki: jednostki do zamówienia oraz objętość zaprawy. |
| {{ui:Głębokość}} (pole) | Głębokość lub grubość, używana we wzorach zestawu (na przykład objętość betonu). |
| {{ui:Naddatek %}} | Dodawany do ilości przed wyceną: 10 oznacza ilość × 1,10. |
| {{ui:Materiał $/LF}} | Koszt materiału za jednostkę. Etykieta zmienia się z jednostką: $/SF, $/EA itd. |
| {{ui:Robocizna $/LF}} | Koszt robocizny za jednostkę. |
| {{ui:Numer CSI}} | Jej numer CSI MasterFormat, na przykład `09 21 16` (albo sam dział, `09`). Arkusz „By division” w skoroszycie grupuje koszty według tego numeru. Pozycje z [pakietów branżowych](topic:trade-packs) mają go już ustawionego. |

Wysokość i głębokość przyjmują stopy i cale (`9'-0"`, `8' 6"`) albo dziesiętne stopy (`9`) dla jednostek imperialnych oraz metry (`2.7`, `2700 mm`) dla metrycznych. Stawki przyjmują kwoty takie jak `12.50` lub `$1,250`, do czterech miejsc po przecinku. Zob. [Wpis długości, stawki i procentu](topic:entry-formats).

Poniżej pól **Zmierzono** pokazuje sumy, których mogą używać wzory pozycji, wraz z ich literami: Długość (L), Ciągi (N), Pole ściany (A) dla liniowych; Pole (A), Obwód (P), Obszary (N) dla pól; Liczenie (N) dla liczenia.

## Jedna pozycja, kilka rodzajów znaczników

Niektóre rzeczy mierzy się na więcej niż jeden sposób: pokój ma podłogę (pole), listwę przypodłogową wzdłuż ścian (długość) i drzwi (liczenie). Zamiast trzech pozycji zrób jedną:

1. Utwórz pozycję z jej głównym typem, na przykład pozycję pola `Room 101`.
2. W jej edytorze, pod {{ui:Mierz też}}, zaznacz {{ui:Liniowy}}, {{ui:Liczenie}} albo oba. Każdy dostaje obok jednostkę.
3. Rysuj dowolnym narzędziem, którego rodzaj pozycja przyjmuje: przy bieżącej `Room 101` narzędzie {{ui:Pole}} rysuje jej podłogę, {{ui:Liniowy}} listwę, a {{ui:Liczenie}} drzwi. TakeoffCraft nie pyta o inną pozycję.

Lista pozycji pokazuje każdą ilość (`50.00 SF + 2 EA`). W tabeli ilości wiersz pozycji ma główną ilość, a każdy inny rodzaj ma własny wiersz poniżej, na przykład **Room 101 (liczenie)**, z własnymi stawkami naddatku, materiału i robocizny. Eksporty, tabela na arkusz i legenda oznaczonego PDF wymieniają je tak samo.

Pola głównego typu pozostają jego własnymi: wysokość lub głębokość, spadek, odliczenia i kształt 3D dotyczą tylko jego znaczników. Ciąg podstawy narysowany dla pozycji pola jest mierzony płasko wzdłuż rzutu i w 3D wyświetla się płasko. Wzory zestawu używają sum głównego typu.

Rodzaj można odznaczyć tylko wtedy, gdy pozycja nie ma jego znaczników; najpierw je usuń albo przenieś do innej pozycji w sekcji **Wybrany znacznik**. Znaczniki mogą być przeniesione do dowolnej pozycji, która przyjmuje ich rodzaj.

Dalej jest {{ui:Zestaw kosztorysowy}}: składniki, takie jak słupki czy deski, każdy z własnym wzorem i stawkami. Zob. [Zestawy i wzory](topic:assemblies).

Na dole {{ui:Przesuń wyżej}} i {{ui:Przesuń niżej}} zmieniają miejsce pozycji na liście i w eksportach, a {{ui:Usuń pozycję}} usuwa ją razem ze wszystkimi znacznikami (po pytaniu; można to cofnąć).


Pozycje powierzchniowe mają też **Spadek** (płaszczyzny dachu mierzone po skosie: [Dachy i spadki](topic:roofs-and-slopes)) oraz **Odliczenie** (ich znaczniki są odejmowane od pól innych pozycji: [Mierz pola](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Pozycje liniowe mają **Nachylenie** (Poziom, Szczyt, Narożnik lub Dolina) oraz, dla szczytów i narożników, **Spadek**.

## Stawki w tabeli

Naddatek %, stawki materiału i robocizny można też wpisać bezpośrednio w tabeli {{ui:Ilości}} na dole ({{ui:Wg pozycji}}). To to samo ustawienie co w edytorze.

## Jak działa wycena

Dla każdej pozycji i każdego składnika zestawu:

1. **Z naddatkiem** = ilość × (1 + naddatek %).
2. **Materiał** = z naddatkiem × materiał za jednostkę, zaokrąglone do grosza.
3. **Robocizna** = z naddatkiem × robocizna za jednostkę, zaokrąglone do grosza.
4. **Razem** = materiał + robocizna.

{{ui:Suma całej roboty}} dodaje każdą pozycję i każdy składnik. Pozycja może mieć własne stawki i jednocześnie zestaw; liczy się obie, więc zostaw stawki pozycji na 0, gdy jej składniki niosą koszt.

## Robocizna wg ekipy

Zamiast stawki robocizny za jednostkę robocizna pozycji może pochodzić z ekipy: ile ona wykonuje w ciągu godziny, ile osób i ile zarabia każda z nich. W edytorze pozycji, pod {{ui:Robocizna wg ekipy}}, zaznacz {{ui:Wyceń robociznę wg ekipy}} i wypełnij:

| Pole | Przykład |
|---|---|
| {{ui:Wydajność}} | `20` LF na godzinę (w jednostce pozycji) dla całej ekipy |
| {{ui:Wielkość ekipy}} | `2` osoby |
| {{ui:Płaca $/godzinę za osobę}} | `45` |

TakeoffCraft wylicza z ilości z naddatkiem:

- **godziny ekipy** = ilość ÷ wydajność (110 LF ÷ 20 = 5,5),
- **roboczogodziny** = godziny ekipy × wielkość ekipy (11),
- **dni ekipy** = godziny ekipy ÷ 8 (0,69),
- **robocizna** = roboczogodziny × płaca ($495.00).

Edytor pokazuje wynik i wynikającą z niego stawkę ($4.50/LF). Stawka robocizny pozycji jest wtedy tylko do odczytu, w edytorze i w tabeli. Nagłówek tabeli {{ui:Ilości}} dodaje roboczogodziny i dni ekipy dla całej roboty. Eksporty podają godziny każdej ekipy, a w skoroszycie komórka robocizny jest formułą na ekipie (`ROUND(F2/20*2*45,2)`). Odznacz pole, aby wrócić do stawki za jednostkę.

## Pozycje metryczne

Wybierz m (liniowe) lub m² (pole) jako jednostkę. Ilości, wysokości i wartości wzorów są wtedy w metrach. Skala arkusza może być dowolnym ustawieniem wstępnym lub kalibracją; jednostki i skale są od siebie niezależne.

## Dalej

- [Mierz odcinki liniowe](topic:measure-linear)
- [Mierz pola z wycięciami](topic:measure-areas)
- [Licz ręcznie](topic:count-by-hand)
