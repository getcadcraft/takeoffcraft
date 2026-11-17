---
title: Klawiatura i mysz
summary: Każdy klawisz, mysz, gładzik i dotyk w TakeoffCraft, pogrupowane, z różnicami między platformami.
keywords: klawisze, skróty, skróty klawiszowe, klawiatura, mysz, gładzik, dotyk, przesuwanie, powiększanie, kółko, prawy przycisk, podwójne kliknięcie, spacja, shift, kopiuj, wklej, wytnij, duplikuj, zaznacz wszystko
from: 6f2c441d
---

Klawisze liter działają, gdy wskaźnik jest gdziekolwiek na stronie i nie wpisujesz w polu. Gdy otwarte jest okno dialogowe, obowiązują jego własne klawisze. Litery działają z {{key:Shift}} lub bez niego.

## Narzędzia

| Klawisz | Narzędzie |
|---|---|
| {{key:V}} | {{ui:Zaznacz}} |
| {{key:L}} | {{ui:Liniowy}} |
| {{key:A}} | {{ui:Pole}} |
| {{key:O}} | {{ui:Okrąg}} |
| {{key:B}} | {{ui:Pokój}} (wypełnia pokój jednym kliknięciem) |
| {{key:R}} | {{ui:Łuk}} włączony lub wyłączony (w Liniowym, Polu i Wycięciu) |
| {{key:E}} | {{ui:Odlicz}} włączony lub wyłączony: kolejne odcinki ciągu są rysowane, ale nie liczone |
| Cyfra, `@` lub `#` podczas rysowania | Otwiera pole {{ui:Wpisz}}: wpisz długość lub współrzędne, {{key:Enter}} stawia punkt ([Mierzenie ciągów liniowych](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Wycięcie}} (najpierw zaznacz obszar) |
| {{key:C}} | {{ui:Liczenie}} |
| {{key:S}} | {{ui:Auto liczenie}} |
| {{key:K}} | {{ui:Kalibruj}} |
| {{key:D}} | {{ui:Sprawdź}} skalę |

## Podczas rysowania

| Klawisz lub czynność | Co robi |
|---|---|
| Kliknięcie | Stawia punkt (kropkę, przy Liczeniu). |
| {{key:P}} | Ścieżka: wybiera całą połączoną ścieżkę linii PDF albo obrys wokół kliknięcia ([Wybieranie linii PDF](topic:pick-the-lines)). |
| {{key:F3}} | Przyciąganie do linii rysunku włączone lub wyłączone ([Przyciąganie do linii rysunku](topic:snap-to-the-drawing)). |
| {{key:Shift}} przytrzymany podczas klikania | Ustawia odcinek pod kątem 0°, 45°, 90° lub 135° od ostatniego punktu. Nie dotyczy punktów łuku ani okręgów. |
| Podwójne kliknięcie | Kończy ciąg albo zamyka pole lub wycięcie. |
| {{key:Enter}} | Kończy ciąg albo zamyka pole lub wycięcie. |
| Prawy przycisk (bez przesuwania) | Kończy ciąg albo zamyka pole lub wycięcie. |
| Kliknięcie pierwszego punktu | Zamyka pole lub wycięcie (od trzeciego punktu). |
| {{key:Backspace}} lub {{key:Delete}} | Usuwa ostatni punkt (najpierw oczekujący punkt łuku). |
| {{key:Esc}} | Porzuca oczekujący punkt łuku; potem anuluje niedokończone oznaczenie; potem wraca do {{ui:Zaznacz}}. |

## Zaznaczanie i edycja

| Klawisz lub czynność | Co robi |
|---|---|
| Kliknięcie oznaczenia (narzędzie Zaznacz) | Zaznacza je i ustawia jego pozycję jako bieżącą. |
| {{key:Shift}} + kliknięcie oznaczenia | Dodaje je do zaznaczenia albo usuwa z zaznaczenia. |
| {{key:Mod+A}} | Zaznacza wszystkie oznaczenia na otwartym arkuszu. |
| Przeciągnięcie uchwytu narożnika | Przesuwa ten punkt ({{key:Shift}} przyciąga do 45°). Działa, gdy zaznaczone jest jedno oznaczenie. |
| {{key:Delete}} lub {{key:Backspace}} | Usuwa zaznaczone oznaczenia (gdy nie rysujesz). |
| {{key:Esc}} | Nic nie zaznacza: czyści zaznaczenie i linię sprawdzenia. |
| {{key:Mod+Z}} | Cofnij. |
| {{key:Mod+Y}} lub {{key:Mod+Shift+Z}} | Ponów. |

## Kopiowanie i wklejanie

| Klawisz | Co robi |
|---|---|
| {{key:Mod+C}} | Kopiuje zaznaczone oznaczenia wraz z ich pozycjami. |
| {{key:Mod+X}} | Wycina: kopiuje zaznaczone oznaczenia, a potem je usuwa. |
| {{key:Mod+V}} | Wkleja: kopia podąża za wskaźnikiem; kliknij, gdzie ma trafić. |
| {{key:Mod+Shift+V}} | Wkleja w miejscu: w tym samym miejscu na otwartym arkuszu. |
| {{key:Mod+D}} | Duplikuje zaznaczone oznaczenia: kopia podąża za wskaźnikiem; kliknij, gdzie ma trafić. |
| {{key:Esc}} | Nic nie odkłada: anuluje wklejanie lub duplikowanie, które jest przy wskaźniku. |

Same litery nadal wybierają narzędzia ({{key:C}} to {{ui:Liczenie}}, {{key:D}} to {{ui:Sprawdź}}, {{key:X}} to {{ui:Wycięcie}}, {{key:V}} to {{ui:Zaznacz}}, {{key:A}} to {{ui:Pole}}); tylko {{key:Mod}} razem z nimi kopiuje i wkleja. W polu tekstowym te klawisze kopiują i wklejają tekst jak zwykle. Zobacz [Kopiowanie, wklejanie i duplikowanie oznaczeń](topic:copy-paste).

:::warning
{{key:Backspace}} usuwa zaznaczone oznaczenie, gdy nie rysujesz. Jeśli stanie się to przypadkiem, {{key:Mod+Z}} je przywróci.
:::

## Pliki

| Klawisz | Co robi |
|---|---|
| {{key:Mod+O}} | {{ui:Otwórz PDF}} |
| {{key:Mod+S}} | {{ui:Zapisz przedmiar}} |

Te dwa działają także wtedy, gdy wpisujesz w polu.

## Widok i arkusze

| Klawisz lub czynność | Co robi |
|---|---|
| Kółko myszy | Powiększa i pomniejsza przy wskaźniku. |
| Przeciągnięcie (lewy, środkowy lub prawy przycisk) | Przesuwa. W {{ui:Auto liczenie}} przeciągnięcie lewym przyciskiem zamiast tego rysuje pole wyszukiwania. |
| {{key:Space}} przytrzymany + przeciągnięcie | Przesuwa, w każdym narzędziu. |
| {{key:F}} | {{ui:Dopasuj stronę}} |
| {{key:W}} | {{ui:Dopasuj szerokość}} |
| {{key:Plus}} lub {{key:=}} | Powiększa na środku widoku. |
| {{key:Minus}} | Pomniejsza na środku widoku. |
| {{key:PageDown}} / {{key:PageUp}} | Następny lub poprzedni arkusz na liście arkuszy. |
| {{key:Ctrl+Shift+F}} | Przełącza tryby pełnego ekranu (Control na każdej platformie, także na Macu). |
| {{key:F1}} | Otwiera lub zamyka tę pomoc, panel z boku. |
| {{key:3}} | Widok 3D sprawdzenia arkusza, włączony lub wyłączony. |

## Widok 3D

| Klawisz lub czynność | Co robi |
|---|---|
| Przeciągnięcie albo przeciągnięcie środkowym przyciskiem | Obraca. |
| {{key:Shift}} + przeciągnięcie albo przeciągnięcie prawym przyciskiem | Przesuwa. |
| Kółko myszy | Powiększa przy wskaźniku. Na gładziku przesunięcie dwoma palcami obraca, a szczypnięcie powiększa. |
| Kliknięcie | Zaznacza oznaczenie pod wskaźnikiem ({{key:Shift}} + kliknięcie dodaje lub usuwa z zaznaczenia). |
| {{key:F}} lub {{key:W}} | Zoom do zasięgu. |
| {{key:3}} | Powrót do płaskiego arkusza. |

Zobacz [Sprawdzanie przedmiaru w 3D](topic:check-in-3d).

## Auto liczenie

| Klawisz lub czynność | Co robi |
|---|---|
| Przeciągnięcie ramki | Obrysowuje symbol do wyszukania (rozpoczyna wyszukiwanie). |
| Kliknięcie ramki dopasowania | Odrzuca ją albo przywraca. |
| {{key:Esc}} | Anuluje trwające wyszukiwanie albo odrzuca przegląd. |

## Pomoc

| Klawisz | Co robi |
|---|---|
| {{key:F1}} | Otwiera lub zamyka panel pomocy (także przycisk {{ui:Pomoc}} na pasku aplikacji). Działa w każdym narzędziu, nawet podczas wpisywania w polu. |
| {{key:Esc}} | Zamyka panel pomocy. W jego polu wyszukiwania pierwszy Esc czyści wyszukiwanie. Gdy panel jest otwarty, Esc naciśnięty po kliknięciu arkusza najpierw zamyka panel; naciśnij go ponownie, aby anulować w TakeoffCraft. |

:::mac
Na wielu klawiaturach Mac górny rząd steruje jasnością i dźwiękiem. Naciśnij fn z F1 albo włącz „Używaj klawiszy F1, F2 itd. jako standardowych klawiszy funkcyjnych” w Ustawieniach systemowych, w sekcji Klawiatura.
:::

## Okna dialogowe i pola

| Klawisz | Co robi |
|---|---|
| {{key:Enter}} | W polu: zastosowuje wartość. W oknie kalibracji: {{ui:Ustaw skalę}}. |
| {{key:Esc}} | Zamyka okno dialogowe (jak {{ui:Anuluj}}); zamyka formularz {{ui:Nowa pozycja}}. |
| {{key:Tab}} | Przechodzi do następnego pola. |

## Uwagi dla platform

:::mac
- {{key:Mod}} to klawisz Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Wyjątkiem jest pełny ekran: Control+Shift+F.
- Prawy przycisk to kliknięcie dwoma palcami na gładziku, po włączeniu kliknięcia wtórnego w Ustawieniach systemowych, w sekcji Gładzik. TakeoffCraft odczytuje tylko przycisk wtórny; kliknięcie z Control może zostać potraktowane jak zwykłe kliknięcie i dodać punkt.
- Przewijanie dwoma palcami na gładziku powiększa arkusz (nie przewija go). Aby przesunąć, naciśnij i przeciągnij albo przytrzymaj {{key:Space}} i przeciągnij.
- Page Up i Page Down to fn z klawiszami strzałek w górę i w dół na klawiaturach, które ich nie mają.
- Backspace to klawisz oznaczony jako delete.
:::

:::windows
- {{key:Mod}} to Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Na gładziku laptopa przewinięcie dwoma palcami powiększa arkusz. Aby przesunąć, naciśnij i przeciągnij.
:::

:::linux
- {{key:Mod}} to Ctrl. Niektóre środowiska mają własne skróty z Ctrl+Alt albo Super; TakeoffCraft żadnego z nich nie używa.
- Na gładziku przewinięcie dwoma palcami powiększa arkusz. Aby przesunąć, naciśnij i przeciągnij.
:::

:::touch
TakeoffCraft odczytuje dotyk jako pojedynczy wskaźnik:

- Stuknięcie stawia punkt, zaznacza oznaczenie albo dodaje kropkę liczenia.
- Przeciągnięcie jednym palcem przesuwa arkusz (w {{ui:Auto liczenie}} rysuje ramkę wyszukiwania).
- Powiększanie szczypnięciem nie jest jeszcze obsługiwane. Użyj {{ui:Dopasuj stronę}} i {{ui:Dopasuj szerokość}} albo {{key:Plus}} i {{key:Minus}} na klawiaturze.
- Aby zamknąć pole, stuknij jego pierwszy punkt. Aby zakończyć ciąg, stuknij dwukrotnie tam, gdzie przeglądarka zamienia podwójne stuknięcie na podwójne kliknięcie, albo naciśnij {{key:Enter}} na klawiaturze.
- Odczyt długości na żywo pojawia się dopiero po stuknięciu, bo nie ma najechania wskaźnikiem.

Klawiatura z myszą lub gładzikiem to dziś lepszy sposób na przedmiar.
:::

## Skróty, które zachowuje przeglądarka

Przeglądarki zachowują dla siebie niektóre skróty i strona nie może ich użyć: zamknięcie karty ({{key:Mod+W}}), nowa karta lub okno ({{key:Mod+T}}, {{key:Mod+N}}) oraz powiększenie przeglądarki ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Dlatego TakeoffCraft powiększa arkusz kółkiem oraz samymi klawiszami {{key:Plus}} i {{key:Minus}}. Jeśli przez pomyłkę naciśniesz {{key:Mod+Plus}}, cała strona się powiększy; {{key:Mod+0}} przywraca rozmiar. Zobacz [Klawisze, myszy i gładziki](common:keys).

## Gdzie jest przesuwanie

Nie ma polecenia Przesuń: zaznacz punkt liczenia i przeciągnij go, albo zaznacz pole lub linię i przeciągnij ich uchwyty narożników.
