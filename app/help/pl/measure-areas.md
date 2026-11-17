---
title: Mierzenie pól z wycięciami
summary: Obrysuj podłogi, sufity i płyty, wytnij z nich otwory, dodaj zakrzywione krawędzie, okręgi i okrągłe wycięcia oraz odczytaj pole i obwód.
keywords: wypełnianie pokoju, wypełnianie zalewowe, wiaderko farby, kliknięcie wewnątrz pokoju, automatyczne pole, odejmowanie wsteczne, back-out, backout, słup, szyb, odlicz z kilku pozycji, pole, obrys, stopy kwadratowe, sf, wycięcie, otwór, odlicz, okrąg, okrągły, łuk, obwód, podłoga, sufit, płyta
from: 34648db7
---

Pozycja pola mierzy zamkniętą powierzchnię. Każdy obrys może mieć wycięte otwory (szyb, słup, donicę), a jego krawędzie mogą być proste lub zakrzywione.

Przed startem: arkusz potrzebuje skali ([Ustaw skalę](topic:set-the-scale)), a ty potrzebujesz pozycji pola ([Twórz pozycje przedmiaru](topic:create-items)).

## Obrysuj pole

1. Kliknij pozycję pola pod {{ui:Pozycje}}.
2. Wybierz {{ui:Pole}} na pasku narzędzi albo naciśnij {{key:A}}.
3. Klikaj po kolei każdy narożnik pokoju lub płyty. Przytrzymaj {{key:Shift}} dla krawędzi pod kątem 0°, 45° i 90°.
   Od trzeciego punktu obrys się wypełnia, a pasek stanu pokazuje „Pole” i „obwód”. Wokół pierwszego punktu pojawia się mały pierścień.
4. Zamknij obrys: kliknij pierwszy punkt (wewnątrz jego pierścienia), naciśnij {{key:Enter}}, kliknij dwukrotnie albo kliknij prawym przyciskiem.
   Pole jest lekko wypełnione kolorem pozycji, podpisane w stopach kwadratowych i staje się zaznaczonym oznaczeniem.

{{key:Backspace}} usuwa ostatni narożnik; {{key:Esc}} odrzuca obrys.

Obrys, który przecina sam siebie, zostaje odrzucony: „Obrys przecina sam siebie, więc jego pole byłoby błędne. Narysuj go ponownie bez przecinania się.” Kształt ósemki narysuj jako dwa pola.

## Krzywe krawędzie

Podczas obrysowywania włącz tryb łuku ({{ui:Łuk}} lub {{key:R}}). Po narożniku kliknij punkt wzdłuż krzywej, a potem miejsce, w którym krzywa się kończy. Aby zamknąć obrys krzywą, wykonaj ostatnie kliknięcie na pierwszym punkcie. Pole i obwód używają dokładnej krzywej. Ponowne naciśnięcie {{key:R}} wraca do prostych krawędzi. Aby później zmienić krzywą, zaznacz pole i przeciągnij okrągły uchwyt w środku łuku. Zobacz [Mierzenie ciągów liniowych](topic:measure-linear#arcs-and-curved-walls).

## Okrąg

1. Przy pozycji pola wybierz {{ui:Okrąg}} albo naciśnij {{key:O}}.
2. Kliknij środek.
3. Kliknij dowolny punkt na obwodzie.
   Podczas ruchu pasek stanu pokazuje promień i pole. Okrąg jest dodawany jako oznaczenie pola z dokładnym polem i obwodem.

## Wypełnij pokój jednym kliknięciem

Gdy pokoje są narysowane jako zamknięte ściany, {{ui:Pokój}} ({{key:B}}) zdejmuje podłogę jednym kliknięciem:

1. Wybierz pozycję pola (na przykład wykończenie podłogi) i ustaw skalę arkusza.
2. Wybierz {{ui:Pokój}} w grupie {{ui:Przedmiar}} albo naciśnij {{key:B}}.
3. Kliknij wewnątrz pokoju, w otwartej podłodze (nie na linii ani na etykiecie).

TakeoffCraft odczytuje linie arkusza, znajduje przestrzeń wokół kliknięcia i obrysowuje ją wzdłuż wewnętrznych lic ścian jako pole bieżącej pozycji. Otwory drzwiowe do **4'-0"** są traktowane jako zamknięte, więc obrys biegnie prosto przez przejście; **Ustawienia › TakeoffCraft › Wypełnienie pokoju zamyka otwory do** zmienia tę szerokość (od 3'-0" do 8'-0"). Nazwy pomieszczeń, meble i wyposażenie wewnątrz pokoju nie tworzą otworów.

Odmawia i podaje powód, gdy:

- kliknięcie jest na linii („To jest na linii”);
- przestrzeń nie jest zamknięta: otwór szerszy niż ustawienie pozwala jej wypłynąć do krawędzi arkusza. Podnieś ustawienie albo obrysuj ten pokój ręcznie za pomocą {{ui:Pole}};
- przestrzeń jest bardzo mała (symbol, a nie pokój).

Gdy drzwi są szersze niż ustawienie, wypełnienie wchodzi do następnego pokoju i obrysowuje oba razem: cofnij ({{key:Mod+Z}}), podnieś ustawienie i kliknij ponownie. Sprawdź obrys jak każde pole: przeciągnij jego narożniki, aby go poprawić. Skan arkusza działa tak samo, ale jego linie muszą być dostatecznie ciemne; jasnoszara linia może nie zatrzymać wypełnienia.

## Wytnij otwór w polu

1. Wybierz {{ui:Zaznacz}} ({{key:V}}) i kliknij pole. Pokazuje ono kwadratowe uchwyty w narożnikach.
2. Wybierz {{ui:Wycięcie}} na pasku narzędzi (lub naciśnij {{key:X}}) albo {{ui:Dodaj wycięcie}} w **Wybranym oznaczeniu**.
3. Kliknij narożniki otworu, wewnątrz pola. Tryb łuku działa tu także.
4. Zamknij go jak pole: kliknij pierwszy punkt, naciśnij {{key:Enter}}, kliknij dwukrotnie albo kliknij prawym przyciskiem.
   Otwór zostaje niewypełniony, a pasek stanu mówi: „Dodano wycięcie. Narysuj kolejne albo naciśnij Esc.”
5. Narysuj kolejne otwory w tym samym polu albo naciśnij {{key:Esc}}.

Okrągły otwór: wybierz {{ui:Dodaj okrągłe wycięcie}} w **Wybranym oznaczeniu**, kliknij jego środek, a potem punkt na jego krawędzi.

Wycięcie musi leżeć w całości wewnątrz pola i nie może nachodzić na inne wycięcie. W przeciwnym razie TakeoffCraft je odrzuca: „Wycięcie musi leżeć w całości wewnątrz pola.” albo „Wycięcia nie mogą na siebie nachodzić.”

Ostatni otwór usuwasz przez {{ui:Usuń ostatnie wycięcie}}.

## Odejmowanie wsteczne: słupy, szyby i otwory odejmowane od kilku pozycji

Wycięcie należy do jednego oznaczenia pola. **Odejmowanie wsteczne** jest rysowane raz i zabiera pole z każdego pola, które nachodzi, dla pozycji, które wybierzesz: narysuj słupy raz, a zejdą z wykończenia podłogi, sufitu i płyty jednocześnie.

1. Utwórz dla nich pozycję pola, na przykład „Słupy”.
2. W jej ustawieniach zaznacz **Odejmowanie wsteczne: jej oznaczenia odejmują pole od innych pozycji**. Pojawi się lista pozostałych pozycji pól, wszystkie zaznaczone: odznacz te, których odejmowanie nie ma dotykać (na przykład farbę na ścianach).
3. Zmierz słupy za pomocą {{ui:Pole}} lub {{ui:Okrąg}}, jak zwykle. Każde jest rysowane przerywaną linią.

Każde oznaczenie pola w pozycjach wybranych na liście, na tym samym arkuszu, traci część pokrytą przez odejmowanie wsteczne: całe odejmowanie, gdy leży w środku; tylko nakładającą się część, gdy przecina krawędź; i nic wewnątrz wycięcia. Panel zaznaczonego pola pokazuje **Odejmowanie wsteczne** i pozostałe pole. Ilość pozycji, jej formuły w kosztorysie, koszty, widok 3D sprawdzenia i eksport używają pozostałego pola; uwagi kosztorysu mówią, ile odjęły odejmowania wsteczne. Sama pozycja odejmowania wstecznego liczy własne pole (zostaw jej koszty na zero, jeśli jej nie wyceniasz).

Odejmowanie wsteczne musi być **wypukłe**: prostokąt, okrąg lub dowolny obrys bez wklęsłego narożnika. TakeoffCraft odmawia narysowania takiego, który tego nie spełnia; szyb w kształcie litery L narysuj jako dwa odejmowania wsteczne. Odejmowania wsteczne nie mogą mieć wycięć, a dwa odejmowania nachodzące na siebie liczą się oba.

Obwód (`P`) się nie zmienia: odejmowania wsteczne zabierają tylko pole.

## Odczytaj pole

Zaznacz pole. **Wybrane oznaczenie** pokazuje:

| Wiersz | Znaczenie |
|---|---|
| Pole | Pole netto: obrys minus wycięcia. To liczy pozycja. |
| Obrys | Pole brutto wewnątrz obrysu (pokazane, gdy są wycięcia). |
| Wycięcia | Ile jest otworów i ich łączne pole. |
| Obwód | Długość krawędzi obrysu **plus** krawędzie każdego wycięcia („z wycięciami”). |

Obwód celowo uwzględnia krawędzie wycięć, na przykład dla deskowań krawędziowych lub podłoża, które biegnie też wokół otworu. Jeśli potrzebujesz tylko zewnętrznej krawędzi, nie trzymaj otworów w tej pozycji albo zmierz zewnętrzną krawędź jako ciąg liniowy.

Jednostka pozycji ({{ui:Jednostka}}) decyduje, jak podaje się sumę: SF, SY lub m². Panel **Wybrane oznaczenie** i pasek stanu zawsze pokazują stopy kwadratowe.

## Napraw pole

- **Przesuń narożnik**: zaznacz pole i przeciągnij uchwyt narożnika (otwory też mają uchwyty). Jeśli nowy kształt przecinałby sam siebie albo wypychał otwór na zewnątrz, narożnik wraca na miejsce: „Punkt został przywrócony.”
- **Przenieś do innej pozycji**: wybierz inną pozycję pola na liście **Pozycja** w **Wybranym oznaczeniu**.
- **Usuń**: {{key:Delete}}, {{ui:Usuń}} w menu {{ui:Więcej}} na pasku narzędzi albo {{ui:Usuń oznaczenie}}.

## Głębokość dla objętości

Nadaj pozycji pola {{ui:Głębokość}} (na przykład `0'-4"` dla płyty) i użyj `A * H / 27` w składniku zestawu kosztorysowego, aby otrzymać jardy sześcienne. Zobacz [Zestawy kosztorysowe i formuły](topic:assemblies).
