---
title: Sprawdź przedmiar w 3D
summary: Zobacz ściany, płyty i liczenia z otwartego arkusza stojące na rysunku, obracaj je wokół i kliknij jedną, aby zaznaczyć jej znacznik.
keywords: png, obraz, zdjęcie, zrzut ekranu, stos, piętra, poziomy, elewacja, glb, gltf, eksport 3d, grubość ściany, wysokość podstawy, otwór, nadproże drzwi, 3d, trzy d, sprawdź, widok, ściany, wysokość ściany, płyta, głębokość, objętość, obrót, model, wybór, izometria, perspektywa
from: fb16b4f7
---

Widok 3D to kontrola, a nie drugi rysunek: ustawia przedmiar arkusza na ekranie, na samym arkuszu, tak że brakującą ścianę, podwójną płytę lub przypadkowe liczenie widać od razu.

Zanim zaczniesz: arkusz potrzebuje skali ([Ustaw skalę](topic:set-the-scale)). Wysokości i głębokości wymagają prawdziwych stóp, więc na arkuszu bez skali {{ui:3D}} to mówi i zostaje na płaskim arkuszu.

## Otwórz widok 3D

1. Pokaż arkusz, który chcesz sprawdzić.
2. Wybierz {{ui:3D}} na pasku z nazwą arkusza i skalą albo naciśnij {{key:3}}.
   Za pierwszym razem widok 3D ładuje się chwilę. Arkusz jest rysowany na podłożu, a przedmiar stoi na nim w kolorze każdej pozycji.
3. Aby wrócić, wybierz ponownie {{ui:3D}}, {{ui:Wróć do arkusza}} lub naciśnij {{key:3}}. Wybranie narzędzia rysunkowego (Liniowe, Pole, Liczenie i tak dalej) także wraca, bo znaczniki rysuje się na płaskim arkuszu.

Widok pokazuje arkusz na ekranie; zmieniaj arkusze na liście arkuszy lub klawiszami {{key:PageDown}} i {{key:PageUp}}, a widok 3D podąży za nimi. Aby zobaczyć kilka pięter naraz, ułóż je w stos (poniżej).

## Co widzisz

| Znacznik | W 3D |
|---|---|
| Odcinek liniowy, pozycja z wysokością | Ściana tej wysokości wzdłuż odcinka. Odcinki krzywe podążają za krzywą. |
| Odcinek liniowy, pozycja bez wysokości | Linia na arkuszu. Nadaj pozycji wysokość w sekcji **Pozycja**, aby ją postawić. |
| Pole, pozycja z głębokością | Płyta tej głębokości, z otwartymi wycięciami. |
| Pole, pozycja bez głębokości | Cienka płytka 2", żeby była widoczna. |
| Liczenie | Mały słupek w każdym policzonym punkcie. |

Wysokość to pole {{ui:Wysokość}} pozycji liniowej, a głębokość to pole {{ui:Głębokość}} pozycji powierzchniowej, w sekcji **Pozycja** (zob. [Twórz pozycje przedmiaru](topic:create-items)). Zmień je, a widok 3D zaktualizuje się od razu. Notatka pod nazwą arkusza mówi, co arkusz zawiera, na przykład „Ten arkusz w 3D: 2 ściany, 1 płyta, 3 liczenia”, oraz ile odcinków lub pól nie ma wysokości albo głębokości. Kliknięcia przechodzą przez nią do widoku.

Liczby w 3D się nie zmieniają: pole ściany to jej dokładna długość razy wysokość, a objętość płyty to jej pole netto (kontur minus wycięcia, krzywe dokładnie) razy głębokość. Krzywe są rysowane jako krótkie proste odcinki tylko na ekranie.

## Rozglądaj się

| Działanie | Co robi |
|---|---|
| Przeciągnij lub przeciągnij środkowym przyciskiem | Obraca widok wokół przedmiaru. |
| {{key:Shift}} + przeciągnij lub przeciągnij prawym przyciskiem | Przesuwa widok. |
| Kółko myszy | Przybliża i oddala w miejscu wskaźnika. |
| Przesunięcie dwoma palcami na gładziku | Obrót ({{key:Shift}} przesuwa). Szczypnięcie przybliża. |
| {{ui:Izometria}}, {{ui:Góra}}, {{ui:Przód}}, {{ui:Tył}}, {{ui:Lewa}}, {{ui:Prawa}}, {{ui:Dół}} | Widoki standardowe, wykadrowane na przedmiarze. Widok 3D otwiera się w {{ui:Izometria}}. |
| {{ui:Perspektywa}} | Perspektywa włączona lub wyłączona (równoległa, gdy wyłączona). |
| {{ui:Powiększ do zasięgu}} lub {{key:F}} | Cały arkusz. |
| {{ui:Arkusz}} | Pokazuje lub ukrywa rysunek na podłożu. |
| Kostka widoku w prawym górnym rogu | Kliknij ścianę, krawędź lub narożnik, aby spojrzeć stamtąd; przeciągnij, aby obracać; przeciągnij jej pierścień kompasu, aby obrócić widok; przycisk z domkiem wraca do {{ui:Izometria}}. |

W rogu pokazuje się kostka widoku, mała ikona osi X, Y, Z albo nic: wybierz w {{ui:Ustawienia}}, na karcie TakeoffCraft, w sekcji **Wskaźnik narożnika** ([Ustawienia TakeoffCraft](topic:settings)). Płaski arkusz nie ma wskaźnika narożnika.

:::touch
Jeden palec obraca; dwa palce szczypią, aby przybliżyć, i przesuwają, aby przesunąć widok. Stuknięcie zaznacza.
:::

## Ściany z grubością, podstawą i otworami

Pozycja liniowa z wysokością stoi jako cienki pasek. Aby zobaczyć ją jak prawdziwą ścianę, nadaj jej kształt w sekcji **W 3D** w jej ustawieniach:

- **Grubość ściany** (8", 0.2 m): ściana staje się bryłą, wyśrodkowaną na linii, którą narysowałeś, z narożnikami ściętymi na ukos.
- **Wysokość podstawy**: ściana zaczyna się tyle nad podłogą (podbitka, górna szafka). Pozycje powierzchniowe też to mają: sufit na 9'-0".
- **Nadproże otworu**: odliczony odcinek (drzwi, [Odlicz część odcinka](topic:measure-linear#deduct-a-part-of-a-run)) zachowuje ścianę powyżej tej wysokości, więc drzwi widać jako drzwi. Bez tego odliczony odcinek zostawia lukę aż do góry.

Te ustawienia kształtują tylko widok 3D: ilości (długość, pole ściany, koszty) pozostają bez zmian.

## Układanie pięter w stos

1. Otwórz PDF-y wszystkich pięter.
2. W widoku 3D wybierz {{ui:Poziomy…}} i wpisz rzędną każdego piętra, na przykład `0` dla parteru i `12'` dla następnego. Puste pole pomija arkusz.
3. Wybierz {{ui:Stos}}. Każdy arkusz z poziomem pokazuje swój przedmiar na swojej wysokości; arkusz na ekranie leży pod własnym piętrem, pozostałe są obrysowane. Notatka mówi, ile pięter jest w stosie.

Arkusze ustawiają się według miejsca na stronie, więc działa to dla rzutów pięter wykreślonych tak samo (ten sam rozmiar i położenie arkusza). Arkusz z poziomem, ale bez skali jest pomijany, a notatka to mówi. Wybierz {{ui:Stos}} ponownie, aby mieć jeden arkusz naraz. Poziomy są zapisywane razem z przedmiarem.

## Zapisz widok 3D jako obraz

Wybierz {{ui:PNG}} na pasku 3D, aby zapisać obraz widoku takiego, jaki jest na ekranie (`… 3D.png`); {{key:Shift}} + klik na {{ui:PNG}} robi go dwa razy większym (`… 3D@2x.png`), do druku.

## Zapisz widok 3D jako model

Wybierz {{ui:GLB}} na pasku 3D. Dostajesz plik `.glb` (glTF, binarny) tego, co widok pokazuje — piętro na ekranie albo każde ułożone piętro — który otworzą inne programy 3D: jeden obiekt na znacznik, nazwany od swojej pozycji, w kolorze pozycji, w metrach, z osią Y w górę. Samego arkusza i obrysów w nim nie ma.

## Zaznacz znacznik z 3D

Kliknij ścianę, płytę, płytkę lub słupek. Jego znacznik staje się wybranym znacznikiem, dokładnie tak, jakbyś kliknął go na arkuszu: pokazuje się pod **Wybrany znacznik**, jego pozycja staje się bieżąca, a pasek stanu podaje jego długość i wysokość albo pole, głębokość i metry sześcienne (jardy sześcienne). {{key:Shift}} + klik dodaje znaczniki do zaznaczenia albo je z niego usuwa. {{key:Delete}} usuwa zaznaczone znaczniki, a {{key:Mod+Z}} je przywraca; {{key:Esc}} odznacza wszystko. Po powrocie na arkusz te same znaczniki pozostają zaznaczone.

:::tip
Rysunek podąża za motywem: w Modelu arkusz na podłożu ściemnia się jak w płaskim widoku.
:::
