---
title: Mierzenie z rysunku
summary: Pobieraj długości i pola z własnych linii, łuków, polilinii i kreskowań rysunku, wskazując je, z dokładnymi łukami i otworami, zamiast obrysowywać kliknięciami.
keywords: zmierz rysunek, geometria, polilinia, łuk, okrąg, kreskowanie, wybrzuszenie, dokładna długość, dokładne pole, wskazywanie, okno, obrysowanie, z CAD, liniowy, pole
from: fd734246
---

{{ui:Zmierz rysunek}} na pasku arkusza rysunku DWG lub DXF bierze obiekty rysunku jako oznaczenia, więc nie obrysowujesz ich kliknięciami. Długość polilinii, długość łuku, pole okręgu i pole kreskowania wraz z jego otworami wychodzą dokładne, z tej samej arytmetyki, której przedmiar używa dla każdego oznaczenia.

## Pobierz obiekty jako pozycję liniową lub polową

1. Utwórz albo kliknij pozycję **liniową** lub **polową** pod {{ui:Pozycje}}. Arkusz potrzebuje skali.
2. Wybierz {{ui:Zmierz rysunek}}.
3. Kliknij obiekty na arkuszu, aby je wskazać, albo przeciągnij okno wokół nich: wszystko, co leży w nim w całości, zostanie wskazane. {{key:Shift}} dodaje okno do wskazanych; kliknij ponownie wskazany obiekt, aby go usunąć. Pasek pokazuje sumę: „6 ciągów: 108'-9 1/8" łącznie.”
4. Wybierz przycisk dodawania, który podaje liczbę i pozycję, na przykład {{ui:Dodaj 6 do Edge}} (albo naciśnij {{key:Enter}}). Każdy obiekt staje się jednym oznaczeniem pozycji, w jednym kroku cofania. {{key:Esc}} czyści wskazane.

## Co bierze każdy rodzaj pozycji

- Pozycja **liniowa** bierze linie, łuki, polilinie, okręgi i splajny według długości. Zamknięty kształt liczy się po obwodzie. Kreskowanie jest pomijane: ma pole, a nie długość, a pasek to mówi.
- Pozycja **polowa** bierze kształty zamknięte: zamknięte polilinie, okręgi, bryły 2D i kreskowania wraz z ich otworami. Otwarte ciągi są pomijane, a pasek to mówi.

## Dokładne i prawie dokładne

Linie, łuki (dowolne wybrzuszenie), polilinie z wybrzuszeniami i okręgi są dokładne: długości i pola używają promienia i kąta łuku, a nie jego obrazu. Elipsy, splajny i kreskowania, których granica składa się z krawędzi, są mierzone cięciwami co jeden stopień lub drobniej, co mieści się w setnej części procenta dla elips i w dziesiątej części procenta dla pozostałych; pasek podaje, ile z wskazanych obiektów to krzywe tego rodzaju.

## Skąd i co bierze

- **Model**: obiekty w przestrzeni modelu. **Układ (layout)**: jego własne linie oraz obiekty modelu wewnątrz okna widokowego (viewport), przeskalowane przez nie. Obiekt, który przecina krawędź okna widokowego, nie jest proponowany (wydrukowałby się przycięty); obiekt widoczny w dwóch oknach widokowych jest brany raz.
- Tylko warstwy widoczne na arkuszu. Bloki się liczy, a nie mierzy: zobacz [Liczenie z rysunku](topic:count-from-a-drawing). Polilinie 3D, siatki, bryły i regiony nie są proponowane.
