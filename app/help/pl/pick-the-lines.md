---
title: Wybieranie linii PDF-a
summary: Kliknij linię wektorowego PDF-a, by zmierzyć całą jej połączoną ścieżkę, albo kliknij wewnątrz zamkniętego konturu, by zmierzyć jego pole; tolerancja przerw jest pokazana, a każdy segment cofa się osobno.
keywords: ścieżka, wybierz, linie wektorowe, linie, połączone, cały ciąg, obrys, kontur, obwód, przerwa, tolerancja, mostek, segmenty, tab, wektor, pole z linii, p
from: c22526ae
---

Na wektorowym PDF-ie ściany i krawędzie są prawdziwymi liniami. {{ui:Ścieżka}} ({{key:P}}) bierze je tak, jak są narysowane: jedno kliknięcie na linię mierzy wszystko z nią połączone, od końca do końca, więc nie trzeba obrysowywać ściany, klikając jej narożniki. Arkusz potrzebuje skali. Zeskanowana strona nie ma linii do wybrania; użyj tam [Liniowy](topic:measure-linear) lub [Pole](topic:measure-areas).

## Wybierz ścieżkę lub kontur

1. Wybierz {{ui:Ścieżka}}. Linia pod wskaźnikiem jest obrysowana, a inne ścieżki, które mogłaby tworzyć, są zaznaczone cienko.
2. Kliknij linię: cała połączona ścieżka zostaje wybrana. Pasek pod paskiem narzędzi podaje jej segmenty, długość, tolerancję przerw i liczbę przerw, które zostały pomostowane. Ścieżka, która wraca do startu, jest zamknięta i podaje także swój obwód.
3. Albo kliknij wewnątrz zamkniętego konturu, z dala od linii: kontur wokół tego punktu zostaje wybrany jako pole. Najmniejszy idzie pierwszy; {{key:Tab}} sprawdza następny większy.
4. Naciśnij {{key:Enter}} (albo kliknij prawym przyciskiem, albo kliknij dwukrotnie), by dodać znaczniki. Wybrana ścieżka staje się znacznikiem pozycji **liniowej**, a kontur znacznikiem pozycji **pola**: aktywnej pozycji, jeśli ma ten rodzaj, w przeciwnym razie najnowszej pozycji tego rodzaju. Bez żadnej pozycji otwiera się formularz nowej pozycji i nic nie zostaje dodane, dopóki nie naciśniesz {{key:Enter}} ponownie. Wszystko, co wybrane, jest dodawane jednym krokiem cofnięcia.

## Tolerancja przerw

Projektanci zostawiają małe dziury tam, gdzie linie powinny się spotykać. Dwie linie łączą się, gdy ich końce są bliżej siebie niż **tolerancja przerw**. Zaczyna ona od 1,5 punktu na arkuszu (pokazanego w stopach i calach w skali arkusza), a przerywany pierścień tej szerokości podąża za wskaźnikiem i leży na każdym końcu ścieżki pod nim. Każda pomostowana dziura jest zaznaczona pomarańczowo na wybranej ścieżce, a pasek je liczy.

{{key:]}} poszerza tolerancję, {{key:[}} ją zwęża. Wybrana ścieżka jest od razu łączona ponownie przy nowej tolerancji. W połączeniu ścieżka idzie dalej prosto, tą drogą, która najmniej się zagina, i zostawia odgałęzienie.

## Klawisze

| Klawisz lub akcja | Co robi |
|---|---|
| Kliknięcie | Wybiera ścieżkę pod wskaźnikiem albo kontur wokół niej. |
| {{key:Shift}} + kliknięcie | Dodaje kolejną ścieżkę lub kontur do wybranych. |
| {{key:Tab}} | Sprawdza następną ścieżkę pod wskaźnikiem albo następny większy kontur. |
| {{key:Backspace}} albo {{key:Mod+Z}} | Zdejmuje ostatni segment z ostatnio wybranej ścieżki, jeden segment naraz. Ścieżka bez segmentów znika. Gdy nic nie jest wybrane, {{key:Mod+Z}} to zwykłe cofnięcie. |
| {{key:[}} i {{key:]}} | Węższa i szersza tolerancja przerw. |
| {{key:Enter}} | Dodaje znaczniki. |
| {{key:Esc}} | Czyści wybór. |

## Warto wiedzieć

- Krzywa w rysunku to łańcuch krótkich prostych odcinków, więc jej długość jest o włos mniejsza od prawdziwego łuku. Dla dokładnego łuku zmierz plik rysunku ([Pomiar z rysunku](topic:measure-from-a-drawing)).
- Pomostowana przerwa liczy się jako prosty skok przez nią, więc obwód zamkniętego konturu ją uwzględnia.
- Tylko obrysy i wypełnienia w ścieżkach samej strony są liniami. Tekst zapisany jako litery oraz obrazy nie są.
