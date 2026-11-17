---
title: Mierzenie ciągów liniowych
summary: Mierz ściany, rurociągi, listwy i inne długości jako ciągi: z odcinkami prostymi, łukami i przyciąganiem Shift co 45 stopni.
keywords: liniowy, długość, ciąg, polilinia, ściany, LF, stopy liniowe, łuk, krzywa, 45 stopni, ortogonalnie, przyciąganie, odcinki, polylength, odlicz, otwór, drzwi, przerwa, wpisywanie, wpisane, współrzędne, odległość, odległość bezpośrednia, biegunowo
from: c669deff
---

Pozycja liniowa mierzy długość. Każdy ciąg to łańcuch punktów: odcinki proste oraz łuki, gdy włączysz tryb łuku. Pozycja może mieć dowolną liczbę ciągów na dowolnej liczbie arkuszy.

Przed startem: arkusz potrzebuje skali ([Ustaw skalę](topic:set-the-scale)), a ty potrzebujesz pozycji liniowej ([Twórz pozycje przedmiaru](topic:create-items)).

Na wektorowym PDF kliknięcia przyciągają się do własnych linii rysunku: końców, środków i przecięć ([Przyciąganie do linii rysunku](topic:snap-to-the-drawing); {{key:F3}} je wyłącza).

## Rysuj ciąg

1. Kliknij pozycję liniową pod {{ui:Pozycje}}.
2. Wybierz {{ui:Liniowy}} na pasku narzędzi albo naciśnij {{key:L}}.
3. Kliknij początek ciągu.
4. Klikaj każdy narożnik po kolei.
   Pasek stanu pokazuje „Długość” (ciąg dotąd, do wskaźnika) i „odcinek” (odcinek, który rysujesz), w stopach i calach.
5. Zakończ ciąg: kliknij dwukrotnie ostatni punkt, naciśnij {{key:Enter}} albo kliknij prawym przyciskiem.
   Ciąg jest narysowany kolorem pozycji i staje się zaznaczonym oznaczeniem. Długość pozycji na liście {{ui:Pozycje}} i w tabeli {{ui:Ilości}} rośnie.

Narzędzie zostaje na {{ui:Liniowy}}, więc możesz od razu zacząć następny ciąg. Naciśnij {{key:Esc}}, aby wrócić do {{ui:Zaznacz}}.

Podczas rysowania:

- {{key:Backspace}} (lub {{key:Delete}}) usuwa ostatni punkt.
- {{key:Esc}} odrzuca niedokończony ciąg.
- Przeciąganie przesuwa arkusz, a kółko powiększa, bez dodawania punktów.

:::mac
Na gładziku Mac kliknięcie prawym to kliknięcie dwoma palcami (włącz kliknięcie wtórne w Ustawieniach systemowych, w sekcji Gładzik). TakeoffCraft odczytuje tylko przycisk wtórny, więc kliknięcie z Control może zostać potraktowane jak zwykłe kliknięcie i dodać punkt. Podwójne kliknięcie albo {{key:Enter}} zawsze kończą.
:::

:::touch
Na ekranie dotykowym stukaj, aby stawiać punkty, przeciągaj jednym palcem, aby przesuwać, i szczypnij dwoma, aby powiększać. Zakończ długim przytrzymaniem, podwójnym stuknięciem albo {{ui:Zakończ}} na pasku pod arkuszem ({{ui:Tył}} cofa ostatni punkt). Zobacz [Rozwiązywanie problemów](topic:troubleshooting#touch-screens).
:::

## Proste linie w krokach co 45°

Przytrzymaj {{key:Shift}}, stawiając punkt. Odcinek od ostatniego punktu przyciąga się do najbliższego kierunku 0°, 45°, 90° lub 135°, zachowując długość, jaką przeciągnąłeś. Pasek stanu przypomina: „Shift przyciąga do 45°”.

W trybie łuku dotyczy to miejsca, w którym kończy się łuk: cięciwa łuku idzie w krokach co 45° od miejsca, w którym się zaczyna. Punkt klikany na krzywej nigdy się nie przyciąga.

## Łuki i zakrzywione ściany

1. Podczas rysowania ciągu postaw punkt, w którym zaczyna się krzywa.
2. Włącz tryb łuku: wybierz {{ui:Łuk}} na pasku narzędzi albo naciśnij {{key:R}}. Przycisk pozostaje wciśnięty.
3. Kliknij dowolny punkt na krzywej, gdzieś w jej środku.
   Pasek stanu dodaje „(łuk: kliknij, gdzie się kończy)”, a podgląd wygina się przez twój punkt.
4. Kliknij miejsce, w którym kończy się krzywa.
   Łuk zostaje dodany. Jego długość to dokładna długość łuku, a nie ciąg krótkich cięciw.
5. Kliknij kolejny punkt na następnej krzywej i jej koniec, aby dalej rysować łuki, albo naciśnij ponownie {{key:R}}, aby wrócić do odcinków prostych.

{{key:Backspace}} lub {{key:Esc}} najpierw porzucają oczekujący punkt na krzywej; naciśnij ponownie, aby usuwać punkty jak zwykle.

## Wpisuj długości i współrzędne

Po pierwszym punkcie możesz wpisać, gdzie ma trafić następny, zamiast klikać. Wpisz cyfrę, `@` lub `#`: w pasku stanu otwiera się pole {{ui:Wpisz}} z tym, co wpisałeś. Naciśnij {{key:Enter}}, aby postawić punkt; pole zostaje otwarte dla następnego.

| Wpis | Następny punkt idzie |
|---|---|
| `12'6"` | 12'-6" od ostatniego punktu, w stronę wskaźnika (wskaż kierunek, potem wpisz długość) |
| `12'6"<45` | 12'-6" pod kątem 45°, liczonym przeciwnie do ruchu wskazówek zegara od prawej strony ekranu (`<90` to w górę, `<-90` w dół) |
| `@6',-4'` | 6' w prawo i 4' w dół od ostatniego punktu |
| `6',4'` (lub `#6',4'`) | 6' w prawo i 4' w górę od pierwszego punktu tego ciągu |

Długości wpisuje się tak jak wszędzie w TakeoffCraft ([Formaty wpisów](topic:entry-formats)): `12'-6 1/2"`, `12.5` (stopy), `30"`, `3.2 m`. „W prawo” i „w górę” są takie, jak widzisz arkusz, także gdy strona PDF jest obrócona.

{{key:Enter}} na pustym polu kończy ciąg, tak jak {{key:Enter}} na arkuszu; {{key:Esc}} zamyka pole i zostawia ciąg w toku. Wpisane punkty przechodzą przez te same reguły co kliknięcia: odliczenia, łuki i zamykanie pola działają. To samo pole działa w {{ui:Pole}} i {{ui:Wycięcie}}; po środku okręgu przyjmuje promień.

## Odlicz część ciągu

Ścianę, która przechodzi przez drzwi lub witrynę, można narysować prosto na wylot i policzyć tylko ścianę: odcinki przez otwór są **odliczeniami**. Rysuje się je przerywaną i cienką linią, a nie wlicza się ich.

Podczas rysowania:

1. Postaw punkt, w którym zaczyna się otwór.
2. Wybierz {{ui:Odlicz}} na pasku narzędzi albo naciśnij {{key:E}}. Przycisk zostaje wciśnięty, a pasek stanu mówi, że kolejne odcinki są odliczeniami.
3. Kliknij, gdzie kończy się otwór. Odcinek jest rysowany przerywanie; „Długość” na pasku stanu go pomija.
4. Naciśnij ponownie {{key:E}} i prowadź dalej wzdłuż ściany.

Po narysowaniu: zaznacz ciąg. Pod **Wybranym oznaczeniem** każdy odcinek ma pole {{ui:Odlicz}}: zaznacz je, aby odliczyć ten odcinek, odznacz, aby znów go liczyć. Każda zmiana to jeden krok cofania.

Ciąg zawsze zachowuje co najmniej jeden liczony odcinek. Panel pokazuje wtedy **Odliczenia** (odliczona długość) i **Narysowane** (cały ciąg); **Długość**, ilość pozycji, pole ściany i koszty używają długości bez odliczeń. Widok 3D sprawdzenia zostawia przerwę w ścianie, oznaczenia PDF rysują odliczenia przerywanie, a wyeksportowany arkusz **Oznaczenia** je wymienia.

Przesuwanie narożnika zachowuje odliczenia. Dodawanie lub usuwanie punktów (przez ponowne narysowanie ciągu) zaczyna bez nich.

## Szczegóły ciągu

Wybierz {{ui:Zaznacz}} ({{key:V}}) i kliknij ciąg. **Wybrane oznaczenie** po prawej pokazuje:

- pozycję, do której należy (wybierz inną pozycję liniową na liście, aby przenieść ciąg tam),
- arkusz,
- **Długość** w stopach i calach oraz w LF,
- liczbę **Odcinków** i **Pole ściany**, gdy pozycja ma wysokość,
- długość każdego odcinka, z „(łuk)” po łukach, i jego pole {{ui:Odlicz}}.

Na arkuszu każdy odcinek zaznaczonego ciągu jest podpisany swoją długością.

## Napraw ciąg

- **Przesuń punkt**: zaznacz ciąg, potem przeciągnij jeden z kwadratowych uchwytów narożników. Przytrzymaj {{key:Shift}}, aby przyciągnąć przesunięty odcinek do kroków 45°. Łuk zachowuje swoje wybrzuszenie.
- **Wygnij łuk**: zaznaczony ciąg pokazuje okrągły uchwyt w środku każdego łuku. Przeciągnij go: łuk przechodzi przez miejsce, w którym puścisz, więc wygina się bardziej, mniej albo w drugą stronę. Przeciągnięty na prostą między jego końcami, staje się odcinkiem prostym. {{key:Mod+Z}} to cofa („Wygnij łuk”).
- **Usuń ciąg**: zaznacz go i naciśnij {{key:Delete}}, wybierz {{ui:Usuń}} w menu {{ui:Więcej}} na pasku narzędzi albo {{ui:Usuń oznaczenie}} w panelu.
- **Cofnij**: {{key:Mod+Z}}; ponów przez {{key:Mod+Y}}.

Nie możesz jeszcze wstawić punktu w środku ciągu. Usuń ciąg i narysuj go ponownie.

## Pole ściany

Nadaj pozycji liniowej {{ui:Wysokość}} (na przykład `9'-0"`). Wtedy podaje **Pole ściany (A)** = długość × wysokość, w SF (albo m² dla pozycji metrycznej), a pole ściany trafia do kolumny uwag w eksporcie arkusza kalkulacyjnego. Użyj go w zestawach kosztorysowych do płyt, farby lub izolacji: zobacz [Zestawy kosztorysowe i formuły](topic:assemblies).
