---
title: Ekran TakeoffCraft
summary: Przegląd okna według nazw widocznych na ekranie: pasek narzędzi, lista arkuszy, arkusz, panel Pozycje, tabela Ilości i pasek stanu.
keywords: ekran, układ, układy, wstążka, przeglądarka projektu, przybornik, pole informacyjne, pasek narzędzi, panele, lista arkuszy, panel pozycji, ilości, pasek stanu, przegląd, interfejs
from: ab1115e0
---

TakeoffCraft wypełnia okno przeglądarki pod paskiem aplikacji CadCraft. Od góry do dołu i od lewej do prawej:

| Część | Gdzie | Do czego służy |
|---|---|---|
| Pasek aplikacji | Na samej górze | Nazwa aplikacji, wersja, {{ui:O TakeoffCraft}}, {{ui:Pomoc}} ({{key:F1}}), {{ui:Zapisz do pracy offline}}, {{ui:Ustawienia}} ({{key:Mod+,}}), przycisk {{ui:Pełny ekran}} i przełącznik motywu {{ui:Papier}} / {{ui:Model}}. |
| Pasek narzędzi | Pod paskiem aplikacji | Wszystkie polecenia, w grupach: {{ui:Plik}}, {{ui:Eksport}}, {{ui:Skala}}, {{ui:Przedmiar}}, {{ui:Edycja}}, {{ui:Widok}}. |
| Arkusze | Po lewej | Każda strona każdego otwartego pliku PDF, z miniaturą, skalą i liczbą oznaczeń. |
| Arkusz | Pośrodku | Otwarta strona. Tutaj mierzysz. |
| Pozycje | Po prawej | Twoje pozycje przedmiaru, ustawienia zaznaczonej pozycji i zaznaczone oznaczenie. |
| Ilości | Na dole | Ilości i koszty wg pozycji lub wg arkusza oraz suma całej roboty. |
| Pasek stanu | Na samym dole | Pomiar na żywo, komunikaty, podpowiedź o 45° i powiększenie. |

## Pasek narzędzi

Najedź na dowolny przycisk, aby zobaczyć, co robi, i jego klawisz.

| Grupa | Przyciski |
|---|---|
| {{ui:Plik}} | {{ui:Nowy}} (pusty przedmiar), {{ui:Otwórz PDF-y}} ({{key:Mod+O}}), {{ui:Otwórz przedmiar}} (projekt `.takeoff.json`), {{ui:Zapisz przedmiar}} ({{key:Mod+S}}) |
| {{ui:Eksport}} | Jedno menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF z oznaczeniami}} |
| {{ui:Skala}} | {{ui:Kalibruj}} ({{key:K}}), {{ui:Sprawdź}} ({{key:D}}) i lista {{ui:Gotowa skala}} |
| {{ui:Przedmiar}} | {{ui:Zaznacz}} ({{key:V}}), {{ui:Liniowy}} ({{key:L}}), {{ui:Pole}} ({{key:A}}), {{ui:Okrąg}} ({{key:O}}), {{ui:Łuk}} ({{key:R}}, przełącznik włącz/wyłącz), {{ui:Odlicz}} ({{key:E}}, przełącznik włącz/wyłącz), {{ui:Wycięcie}} ({{key:X}}), {{ui:Liczenie}} ({{key:C}}), {{ui:Auto liczenie}} ({{key:S}}) |
| {{ui:Edycja}} | {{ui:Cofnij}} ({{key:Mod+Z}}), {{ui:Ponów}} ({{key:Mod+Y}}), {{ui:Kopiuj}} ({{key:Mod+C}}), {{ui:Wklej}} ({{key:Mod+V}}) oraz {{ui:Więcej}}: {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}}, {{ui:Odznacz wszystko}} |
| {{ui:Widok}} | {{ui:Dopasuj stronę}} ({{key:F}}), {{ui:Dopasuj szerokość}} ({{key:W}}) |

Używane narzędzie jest pokazane jako wciśnięte. Przyciski {{ui:Łuk}} i {{ui:Odlicz}} pozostają wciśnięte, dopóki są włączone.

## Arkusze (po lewej)

- **Szukaj arkuszy** filtruje listę według nazwy arkusza, nazwy pliku lub etykiety strony.
- Każdy arkusz pokazuje miniaturę (rysowaną podczas przewijania), swoją nazwę oraz skalę albo **Brak skali**.
- Prawa strona każdego wiersza pokazuje, ile oznaczeń ma arkusz. Gdy pozycja jest podświetlona, pokazuje zamiast tego, ile oznaczeń tej pozycji jest na arkuszu.
- Kliknij arkusz, aby go otworzyć. {{key:PageDown}} i {{key:PageUp}} przechodzą do następnego i poprzedniego arkusza na liście.
- Gdy przedmiar obejmuje pliki PDF, które nie są otwarte, notatka pod listą je wymienia. Zobacz [Zapis i ponowne otwarcie przedmiaru](topic:save-and-reopen).

Nazwy arkuszy pochodzą z pliku PDF: etykieta strony, taka jak `A-101`, staje się nazwą arkusza. Strona bez etykiety nosi nazwę od pliku i numeru strony, na przykład „Plans, strona 3”. Gdy otwartych jest kilka plików PDF, arkusze z etykietami pokazują też nazwę pliku.

## Arkusz (pośrodku)

- Pasek pod arkuszem pokazuje nazwę arkusza i jego skalę albo „Brak skali: wybierz gotową albo skalibruj”. Jego przyciski: {{ui:MarkupCraft}} (gdy ta aplikacja może przyjąć plik PDF; zobacz [Rozpoczęcie przedmiaru i otwarcie zestawu planów](topic:open-plan-set)), {{ui:Porównaj}} (starsza wersja arkusza nałożona na ten: [Porównanie zmienionego arkusza](topic:compare-revisions)), „(n) do sprawdzenia” (oznaczone oznaczenia, gdy jakieś są) oraz {{ui:3D}} ([widok kontrolny 3D](topic:check-in-3d)).
- Zanim otworzysz jakikolwiek plik PDF, środek pokazuje krótki przewodnik w pięciu krokach.
- Kółko powiększa w miejscu wskaźnika. Przeciągnij, aby przesunąć widok. Zobacz [Klawiatura i mysz](topic:keyboard).
- Podczas używania {{ui:Auto liczenie}} u góry arkusza pojawia się pasek z jego elementami sterującymi.

## Pozycje (po prawej)

Na górze lista {{ui:Obszar przetargowy}}: budynek, kondygnacja lub etap, do którego trafiają nowe oznaczenia ([Obszary przetargowe](topic:bid-areas)).

- {{ui:Nowa pozycja}} otwiera mały formularz: nazwa, rodzaj ({{ui:Liniowa (długość)}}, {{ui:Pole}} lub {{ui:Liczenie}}) i {{ui:Dodaj}}.
- Lista pokazuje kolor każdej pozycji, ikonę rodzaju, nazwę i ilość. Kliknij pozycję, aby rysować nią i podświetlić jej oznaczenia na każdym arkuszu. Kliknij ją ponownie, aby przestać podświetlać.
- Pod listą **Pozycja: (nazwa)** to edytor pozycji: nazwa, rodzaj, kolor, jednostka, wysokość lub głębokość, naddatek, stawki materiału i robocizny, zmierzone wartości oraz {{ui:Zestaw kosztorysowy}}. Zobacz [Tworzenie pozycji przedmiaru](topic:create-items).
- **Wybrane oznaczenie** pojawia się po zaznaczeniu oznaczenia: do której pozycji należy, jego arkusz, jego pomiary oraz przyciski, takie jak {{ui:Dodaj wycięcie}} i {{ui:Usuń oznaczenie}}. Przy kilku zaznaczonych oznaczeniach zmienia się w **Wybrane oznaczenia**: ile z każdej pozycji oraz {{ui:Kopiuj}}, {{ui:Duplikuj}}, {{ui:Wytnij}} i {{ui:Usuń oznaczenia}}.
- Edytor pozycji kończą {{ui:Kopiuj pozycję}} i {{ui:Duplikuj pozycję}}: pozycja z zestawem kosztorysowym i kosztami, bez oznaczeń. Zobacz [Kopiowanie, wklejanie i duplikowanie oznaczeń](topic:copy-paste).

## Ilości (na dole)

- {{ui:Wg pozycji}} wylicza każdą pozycję i składniki jej zestawu z ilością, naddatkiem, stawkami i rozszerzonymi kosztami. Naddatek i stawki możesz wpisywać wprost w tabeli.
- {{ui:Wg arkusza}} wylicza ilość każdej pozycji na każdym arkuszu.
- Ostrzeżenie zaczynające się od **Niepełne:** pojawia się, gdy coś pozostało poza sumami.
- {{ui:Suma całej roboty}} jest po prawej stronie nagłówka.
- Przycisk ze strzałką na samym prawym brzegu ukrywa lub pokazuje tabelę, aby dać arkuszowi więcej miejsca.

Zobacz [Odczyt ilości i kosztorysu](topic:read-quantities).

## Pasek stanu (na dole)

Od lewej do prawej: pomiar na żywo podczas rysowania (długość, pole, promień albo wynik sprawdzenia), pole {{ui:Wpisz}} podczas wpisywania długości, komunikaty TakeoffCraft, przypomnienie „Shift przyciąga do 45°” (albo „Przyciąga do 45°; Shift uwalnia kąt”, gdy jest to włączone w [Ustawieniach](topic:settings)), przycisk {{ui:Przyciąganie}} (przyciąganie do linii rysunku, włączone, gdy podświetlone; {{key:F3}}) oraz procent powiększenia.

:::tip
Gdy coś się nie dzieje, spójrz na pasek stanu. TakeoffCraft wyjaśnia tam, dlaczego odmówił kliknięcia, na przykład „Ten arkusz nie ma jeszcze skali.”
:::

## Inne układy

Wszystko powyżej to układ {{ui:Klasyczny CadCraft}}, czyli start. {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:Globalne}} › {{ui:Układ}} oferuje dwa kolejne; te same narzędzia i klawisze działają we wszystkich trzech, a ponowny wybór {{ui:Klasyczny CadCraft}} przywraca każdy element sterujący na jego miejsce.

| Układ | W TakeoffCraft |
|---|---|
| {{ui:Wstążka i przeglądarka projektu}} | {{ui:Wstążka przedmiaru}} u góry ([Menu, klawisze i mysz](topic:menus-keys-and-mouse)), pasek dla bieżącego narzędzia, karta dla każdego otwartego arkusza (Model i układy rysunku też są arkuszami) z gotowymi skalami i {{ui:Dopasuj stronę}} pod arkuszem. Lewy panel zawiera {{ui:Właściwości}} (zaznaczona pozycja, notatka lub oznaczenie) nad {{ui:Przeglądarka przedmiaru}}: {{ui:Arkusze}} (kliknij jeden, aby otworzyć go na karcie), {{ui:Warunki}} (kliknij jeden, aby rysować nim) i {{ui:Kosztorys}} (suma każdej pozycji i suma całej roboty); miniatury są jego drugą kartą. |
| {{ui:Przybornik i pole informacyjne}} | Pasek narzędzi nad arkuszem, pole informacyjne z {{ui:Obszar przetargowy}}, bieżącym narzędziem lub zaznaczeniem i paskiem arkusza, kolumna narzędzi przedmiaru po lewej, karta dla każdego arkusza oraz {{ui:Przyciąganie}} i powiększenie pod arkuszem. |

Gdy [widok kontrolny 3D](topic:check-in-3d) jest otwarty, karty arkuszy i pasek pod arkuszem ustępują; zamknij widok 3D, aby znów mierzyć. Na telefonie zawsze działa układ telefoniczny.

## Pełny ekran i motywy

Przycisk {{ui:Pełny ekran}} na pasku aplikacji albo {{key:Ctrl+Shift+F}} (Control na każdej platformie, także na Macu) przełącza tryby: normalny, pełny ekran i pełny ekran z ukrytymi paskami. Przy ukrytych paskach przesuń wskaźnik do górnej krawędzi, aby je znów pokazać.

{{ui:Papier}} to jasny motyw, a {{ui:Model}} ciemny. W {{ui:Model}} rysunek jest pokazywany w negatywie (jasne linie na ciemnym tle) tylko na ekranie; eksporty nigdy się nie zmieniają.
