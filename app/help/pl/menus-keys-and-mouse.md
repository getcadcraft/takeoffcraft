---
title: Menu, klawisze i mysz
summary: Wybierz styl menu pasujący do sposobu, w jaki już pracujesz, nadaj dowolnemu poleceniu własny klawisz, przenoś polecenia między menu i ustaw, co robią kółko i przyciski myszy.
keywords: styl menu, menu, pasek menu, wstążka, karty wstążki, pasek narzędzi, skróty klawiszowe, klawisze, dostosuj, przypisz ponownie, mysz, kółko, odwrócenie, kierunek powiększania, środkowy przycisk, prawy przycisk, przesuwanie, eksport, import, przełączanie, znajomy, biurko przedmiarowe, warunki
from: f01f0d6d
---

Polecenia TakeoffCraft działają tak samo, skądkolwiek je wywołasz. **Styl menu** decyduje tylko o tym, gdzie leżą na ekranie, jak się nazywają i którymi klawiszami się je uruchamia. Wybierz go w {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menu, klawisze i mysz}}; zmiana działa od razu, a ta przeglądarka ją zapamiętuje.

## Trzy style

| Styl | Co dostajesz |
|---|---|
| {{ui:TakeoffCraft}} | Własny pasek narzędzi TakeoffCraft: {{ui:Plik}}, {{ui:Eksport}}, {{ui:Skala}}, {{ui:Przedmiar}}, {{ui:Edycja}} i {{ui:Widok}}, z klawiszami narzędzi jednoliterowymi. Punkt wyjścia. |
| {{ui:Biurko przedmiarowe}} | Pasek menu ({{ui:Plik}}, {{ui:Edycja}}, {{ui:Widok}}, {{ui:Skala}}, {{ui:Przedmiar}}, {{ui:Pozycje}}, {{ui:Adnotacja}}, {{ui:Eksport}}) nad jednym rzędem narzędzi przedmiaru, tak jak programy do przedmiaru na ekranie układają swoje. Pozycje nazywają się w tym rzędzie warunkami. Te same klawisze, plus {{key:N}} dla nowej pozycji. Presety skali przechodzą na pasek arkusza, obok skali arkusza. |
| {{ui:Wstążka przedmiaru}} | Karty wstążki nazwane od pracy: {{ui:Przedmiar}} (mierz, kształtuj, skaluj, z rysunku, warunki), {{ui:Edycja}}, {{ui:Widok}}, {{ui:Adnotacja}} i {{ui:Kosztorys}} (skoroszyt, oznaczone PDF-y, oferta), z menu {{ui:Plik}} i szybkim rzędem do otwierania, zapisu, cofania i ponawiania. Narzędzia używane przez cały dzień są duże, a ich sąsiedzi mali i ułożeni w stos. Te same klawisze; presety skali przechodzą na pasek arkusza. |

Wszystkie trzy style zachowują klawisze TakeoffCraft: {{key:V}} zaznacz, {{key:L}} liniowy, {{key:A}} pole, {{key:O}} okrąg, {{key:B}} pokój, {{key:P}} ścieżka (wybierz linie PDF), {{key:X}} wycięcie, {{key:C}} liczenie, {{key:S}} auto liczenie, {{key:K}} kalibruj, {{key:D}} sprawdź, {{key:R}} tryb łuku, {{key:E}} tryb odliczania, {{key:F}} i {{key:W}} do dopasowania, {{key:3}} widok 3D sprawdzenia, {{key:F3}} przyciąganie, oraz {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Narzędzia paska arkusza (notatki, chmury, zakreślenia, Porównaj, 3D) czekają, aż zostanie otwarty PDF; jeśli wybierzesz je wcześniej, wiersz stanu o tym mówi.

:::tip
Klawisz należący do układu TakeoffCraft, ale przypisany przez twój styl innemu poleceniu, nic nie robi, a wiersz stanu mówi, gdzie trafiło jego polecenie („W Moich klawiszach Liczenie to Ctrl+Alt+C”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strzałki zawsze zachowują swoje znaczenie. Podczas rysowania ciągu lub obrysu, wklejania albo przeglądu automatycznego liczenia litery i cyfry wpisanej długości należą do rysunku.
:::

## Zrób go po swojemu

1. Wybierz styl najbliższy temu, czego chcesz, a potem kliknij {{ui:Dostosuj…}}.
2. Na {{ui:Klawisze i menu}} znajdź polecenie (pomaga pole wyszukiwania). Kliknij {{ui:Dodaj klawisz}} i naciśnij klawisz albo dwa klawisze pod rząd dla klawisza dwuliterowego. Kliknij klawisz, aby go zdjąć.
3. Przy pasku menu {{ui:Gdzie jest}} przenosi polecenie do innego menu albo do {{ui:Tylko klawisze}}.
4. Na {{ui:Mysz}} ustaw kółko i przyciski, które przesuwają arkusz.
5. Nadaj nazwę i kliknij {{ui:Zapisz}}.

Zapisanie wbudowanego stylu tworzy twoją własną kopię („Moje biurko przedmiarowe”); wbudowany styl się nie zmienia. Klawisz przypisany dwóm poleceniom jest pokazywany na czerwono i trzeba go poprawić, zanim zapiszesz.

## Mysz

- **Kółko myszy**: {{ui:Przewinięcie w górę powiększa}} (punkt wyjścia) albo {{ui:Przewinięcie w górę pomniejsza}}, oraz to, jak szybko. Szczypnięcie na gładziku zawsze powiększa w kierunku ruchu palców.
- **Przesuwanie arkusza**: środkowym przyciskiem, prawym przyciskiem albo obydwoma. Przeciągnięcie lewym przyciskiem na pustym papierze i {{key:Space}} z przeciąganiem zawsze przesuwają; kliknięcie prawym bez przeciągania zawsze kończy ciąg albo obrys.
- **Przeciąganie w widokach 3D**: {{ui:Własne dla każdego widoku}} zachowuje przyciski widoku 3D sprawdzenia (lewy i środkowy obracają, prawy przesuwa). Albo ustaw środkowy i prawy przycisk na obrót, przesuwanie, powiększanie lub nic; {{key:Shift}} z przyciskiem zamienia obrót z przesuwaniem. Lewy przycisk zawsze obraca i wybiera.

## Zabierz to ze sobą

{{ui:Eksport}} zapisuje używany styl jako mały plik `.ccinput.json`; {{ui:Import…}} dodaje taki plik z innego komputera albo od kolegi. Zaimportowany plik może wskazywać tylko polecenia TakeoffCraft: wszystko inne w nim zostaje pominięte i policzone w wierszu stanu. {{ui:Usuń ten styl}} usuwa jeden z twoich własnych.

:::note
Te ustawienia zostają w tej przeglądarce. {{ui:Używaj tego stylu we wszystkich aplikacjach}} pod kartami stylów sprawia, że każda aplikacja otwiera się w pasującym stylu (własny pasek narzędzi, pasek menu albo wstążka), z zmianami, które wprowadziłeś w każdej aplikacji. TakeoffCraft nie ma stylu z wierszem poleceń: gdy taki jest wybrany dla wszystkich aplikacji, TakeoffCraft zachowuje własny pasek narzędzi.

{{ui:Wstążka przedmiaru}} jest też wstążką układu {{ui:Wstążka i przeglądarka projektu}} ({{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Układ}}): zobacz [Ekran TakeoffCraft](topic:workspace).
:::

Pokrewne: [Klawisze i mysz](topic:keyboard) · [Ustawienia TakeoffCraft](topic:settings) · [Przechodzenie z innego oprogramowania do przedmiaru](topic:coming-from)
