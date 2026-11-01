---
title: Pierwsze kroki w TakeoffCraft
summary: Co robi TakeoffCraft, gdzie działa i Twoja pierwsza zmierzona oraz wyceniona pozycja z zestawu planów w PDF.
keywords: start, pierwszy przedmiar, szybki start, wprowadzenie, kosztorys, przedmiar ilości, zestaw planów, pdf
from: 3b9da1fb
---

TakeoffCraft mierzy zestawy planów, pliki PDF oraz rysunki DWG i DXF, a pomiary zamienia w wyceniony kosztorys. Otwierasz pliki (rysunek liczy się wprost z jego bloków: zobacz [Otwieranie rysunku DWG lub DXF](topic:open-a-drawing)), nadajesz każdemu arkuszowi skalę (rysunek przynosi własną), tworzysz **pozycje** (typ ściany, wykończenie podłogi, armaturę) i klikasz na arkuszach, aby je obmierzyć. Ilości, koszty i suma całej roboty aktualizują się na bieżąco. Kosztorys możesz wyeksportować jako arkusz kalkulacyjny oraz kopię plików PDF z naniesionym przedmiarem.

Jeśli robiłeś przedmiary w innych programach, przeczytaj następnie [Przechodzenie z innego oprogramowania do przedmiarów](topic:coming-from). Niektóre rzeczy działają tu inaczej.

## Gdzie działa

TakeoffCraft działa w przeglądarce. Otwórz TakeoffCraft, a ekran jest gotowy od razu; nie trzeba niczego instalować.

- **Twoje pliki PDF zostają na Twoim komputerze.** Otwiera je przeglądarka i nigdy nie są wysyłane. Zapis to pobranie.
- Działa w aktualnych przeglądarkach Chrome, Edge, Firefox i Safari. Zobacz [Przeglądarki i komputery](common:browsers).
- Działa bez połączenia z internetem, gdy wybierzesz {{ui:Zapisz do pracy offline}} na pasku aplikacji i pojawi się {{ui:Gotowe offline}}. Zobacz [Praca offline](common:offline).
- Zapis w chmurze nie jest jeszcze dostępny. Aplikacja desktopowa TakeoffCraft jest w CadCraft Studio, razem z pozostałymi siedmioma aplikacjami.

## Twój pierwszy przedmiar w dziesięciu krokach

To ćwiczenie mierzy jeden typ ściany i go wycenia. Zajmie kilka minut na dowolnym planie.

1. Wybierz {{ui:Otwórz PDF}} w grupie {{ui:Plik}} na pasku narzędzi (albo naciśnij {{key:Mod+O}}), wskaż jeden lub więcej plików PDF i wybierz Otwórz. Możesz też upuścić pliki PDF w dowolnym miejscu strony.
   Arkusze pojawiają się po lewej, a pierwszy arkusz otwiera się pośrodku.
2. Znajdź skalę wydrukowaną na arkuszu, w tabliczce rysunkowej lub pod tytułem rysunku.
3. Otwórz listę {{ui:Gotowa skala}} w grupie {{ui:Skala}} i wybierz tę skalę, na przykład `1/4" = 1'-0"`.
   Pasek na dole arkusza mówi teraz „Skala 1/4" = 1'-0"”.
4. Wybierz {{ui:Sprawdź}} (albo naciśnij {{key:D}}) i kliknij dwa końce wymiaru wydrukowanego na rysunku.
   Odczyt na pasku stanu w lewym dolnym rogu powinien zgadzać się z wydrukowanym wymiarem. Jeśli się nie zgadza, zobacz [Ustawianie skali](topic:set-the-scale).
5. W panelu {{ui:Pozycje}} po prawej wybierz {{ui:Nowa pozycja}}, wpisz nazwę, na przykład `Ściana wewnętrzna typu A`, zostaw rodzaj na {{ui:Liniowa (długość)}} i wybierz {{ui:Dodaj}}.
6. Wybierz {{ui:Liniowy}} na pasku narzędzi (albo naciśnij {{key:L}}).
7. Kliknij początek ściany, a potem każdy jej narożnik. Kliknij dwukrotnie, naciśnij {{key:Enter}} albo kliknij prawym przyciskiem, aby zakończyć ciąg.
   Ciąg jest rysowany kolorem pozycji, a jego długość pojawia się obok pozycji.
8. W edytorze pozycji pod {{ui:Pozycje}} wpisz `9'-0"` w polu {{ui:Wysokość}}, `0.85` w polu {{ui:Materiał $/LF}} i `1.20` w polu {{ui:Robocizna $/LF}}.
   Tabela {{ui:Ilości}} na dole pokazuje długość, rozszerzone koszty materiału i robocizny oraz {{ui:Suma całej roboty}}.
9. Wybierz {{ui:Zapisz przedmiar}} (albo naciśnij {{key:Mod+S}}).
   Przeglądarka pobiera plik `.takeoff.json`. Zawiera Twoje pozycje, skale i oznaczenia i otwiera się ponownie na tych samych plikach PDF.
10. Otwórz menu {{ui:Eksport}} na pasku narzędzi i wybierz {{ui:XLSX}}, aby pobrać kosztorys jako arkusz kalkulacyjny.

:::tip
Naciśnij {{key:Esc}}, aby przerwać to, co robisz, i wrócić do narzędzia {{ui:Zaznacz}}. {{key:Mod+Z}} cofa każdą zmianę.
:::

## Co czytać dalej

- [Ekran TakeoffCraft](topic:workspace) nazywa każdą część okna.
- [Rozpoczęcie przedmiaru i otwarcie zestawu planów](topic:open-plan-set) obejmuje kilka plików PDF i listę arkuszy.
- [Tworzenie pozycji przedmiaru](topic:create-items) wyjaśnia rodzaje, jednostki, naddatek i stawki.
- [Zestawy kosztorysowe i wzory](topic:assemblies) zamieniają jeden pomiar w słupki, płyty i nie tylko.
- [Klawiatura i mysz](topic:keyboard) wylicza wszystkie klawisze.
