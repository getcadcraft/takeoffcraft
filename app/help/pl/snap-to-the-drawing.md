---
title: Przyciąganie do linii rysunku
summary: Punkty przeskakują na własne linie PDF-a podczas mierzenia lub kalibracji: końce, punkty środkowe, przecięcia lub dowolne miejsce na linii, ze znacznikiem pokazującym, który to jest.
keywords: przyciąganie, przyciąganie do obiektów, osnap, punkt końcowy, punkt środkowy, przecięcie, najbliższy, wektorowy, linie rysunku, linie, precyzyjnie, dokładnie, f3, magnes, narożnik
from: 41d29e9b
---

Większość zestawów planów to wektorowe pliki PDF: ich ściany i krawędzie są prawdziwymi liniami, a nie pikselami. Podczas mierzenia TakeoffCraft przyciąga kliknięcia do tych linii, dzięki czemu odcinek zaczyna się dokładnie w narożniku ściany, a kalibracja odczytuje wymiar narysowany przez projektanta, a nie piksel, w który trafiono.

Przyciąganie jest włączone od początku. Włączaj i wyłączaj je przyciskiem {{ui:Przyciąganie}} na pasku stanu albo klawiszem {{key:F3}}; ustawienie jest zapamiętane w tej przeglądarce (znajduje się też w [Ustawieniach](topic:settings)).

## Do czego przyciąga

Gdy wskaźnik znajdzie się w odległości około 10 pikseli ekranu od linii, pojawia się znacznik pokazujący, gdzie wyląduje kliknięcie, wraz z jego nazwą:

| Znacznik | Nazwa | Gdzie |
|---|---|---|
| Kwadrat | **Koniec** | Koniec linii albo narożnik, w którym linie się stykają. Liczą się oba końce krzywej; punkty na jej długości nie. |
| Trójkąt | **Punkt środkowy** | Środek prostej linii. |
| Krzyż | **Przecięcie** | Miejsce, w którym przecinają się dwie linie, albo w którym jedna kończy się na drugiej. |
| Klepsydra | **Na linii** | Najbliższy punkt na linii, gdy żaden koniec, punkt środkowy ani przecięcie nie są blisko. |

Wygrywa najbliższy koniec, punkt środkowy lub przecięcie. Dopiero gdy żaden z nich nie jest blisko, punkt trafia na samą linię. Przybliż widok, aby wybrać między punktami leżącymi blisko siebie: 10 pikseli to piksele ekranu, więc przy większym powiększeniu obejmują mniejszą część arkusza.

## Gdzie działa

Przyciąganie działa w {{ui:Liniowy}}, {{ui:Pole}}, {{ui:Okrąg}}, {{ui:Wycięcie}}, {{ui:Kalibruj}} i {{ui:Sprawdź}} oraz wtedy, gdy przeciągasz narożnik zaznaczonego znacznika. Pozwala też stawiać punkty łuku. {{ui:Liczenie}}, {{ui:Auto liczenie}} i wklejanie nie są przyciągane.

Przyciągnięty punkt ma pierwszeństwo przed przyciąganiem co 45° klawisza {{key:Shift}}: aby rysować pod kątem 45° poza liniami, najpierw wyłącz przyciąganie klawiszem {{key:F3}}.

:::tip
Kalibruj przy włączonym przyciąganiu. Kliknij blisko dwóch końców znanego wymiaru lub ściany: oba punkty trafią dokładnie w rysunek, a skala wyjdzie dokładna (pasek stanu podaje wtedy nazwę pasującej gotowej skali).
:::

## Arkusze, na których nie można przyciągać

- **Skanowane arkusze** to obrazy bez linii, do których można by przyciągać. Pasek stanu pokazuje komunikat „Ten arkusz nie ma linii do przyciągania (skanowana strona to obraz).”, a punkty trafiają tam, gdzie klikniesz.
- **Bardzo duże rysunki**: przyciąganie odczytuje do 400 000 odcinków linii na arkusz. Gdy jest ich więcej, informuje o tym i przyciąga tylko do pierwszych.
- **Tekst** nie jest przyciągany, chyba że PDF rysuje litery jako linie (tak robią niektóre plotery).

Linie arkusza są odczytywane przy pierwszym jego otwarciu, w tle; duży arkusz może potrzebować sekundy, zanim pojawią się znaczniki.
