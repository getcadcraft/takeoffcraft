---
title: Rozwiązywanie problemów
summary: Objawy, przyczyny i sposoby naprawy komunikatów oraz niespodzianek, na które możesz trafić w TakeoffCraft, cytowane tak, jak pokazuje je aplikacja.
keywords: problemy, błędy, nie działa, naprawa, pomoc, odmowa, nie mierzy, brak skali, brakujące znaczniki, eksport nie powiódł się, offline, dotyk
from: cd319c9b
---

TakeoffCraft wyjaśnia większość odmów w pasku stanu u dołu okna. Znajdź komunikat poniżej.

## Otwieranie plików

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Czytnik PDF nie wczytał się. Przeładuj stronę, aby spróbować ponownie. | Czytnik PDF aplikacji się nie wczytał, zwykle dlatego, że jesteś offline, a aplikacji nigdy nie zapisano do pracy offline. | Połącz się ponownie i przeładuj. Następnie wybierz {{ui:Zapisz do pracy offline}} i poczekaj na {{ui:Gotowe offline}}; zob. [Praca offline](common:offline). |
| (nazwa) jest zabezpieczony hasłem. Otwórz kopię bez zabezpieczenia. | Plik PDF wymaga hasła, aby go otworzyć. | Poproś o kopię bez zabezpieczenia albo usuń hasło w programie do PDF, któremu ufasz. |
| (nazwa) nie udało się odczytać jako PDF (…) | Plik jest uszkodzony albo nie jest naprawdę plikiem PDF. | Pobierz go ponownie albo zapisz go ponownie z programu, który go utworzył. |
| (nazwa) jest już otwarty. | Ten sam PDF (ta sama zawartość) jest otwarty. | Nic nie trzeba robić. |
| TakeoffCraft otwiera pliki PDF i projekty .takeoff.json. Pominięto: … | Inne typy plików zostały odrzucone. | Najpierw zamień rysunki na PDF. |
| Nic się nie dzieje, gdy upuszczam pliki | Pliki upuszczono poza oknem przeglądarki albo przeglądarka otworzyła PDF w nowej karcie. | Upuść je na samą stronę TakeoffCraft; ramka „Upuść pliki PDF lub .takeoff.json” pokazuje, kiedy to zadziała. |
| Otwieranie dużego zestawu trwa chwilę | Każdy PDF jest odczytywany w całości, aby go rozpoznać. | Poczekaj, aż zniknie komunikat „Otwieranie (nazwa)…”. Miniatury uzupełniają się podczas przewijania. |

## Pomiary

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Najpierw otwórz PDF. | Nie jest otwarty żaden arkusz. | Otwórz PDF. |
| Ten arkusz nie ma jeszcze skali, więc nie można go zmierzyć. Wybierz gotową skalę albo najpierw skalibruj (liczenie działa bez skali). | Narzędzia liniowe, pola, okręgi i wycięcia wymagają skali. | [Ustaw skalę](topic:set-the-scale). |
| Najpierw utwórz pozycję liniową (nazwij ją w sekcji {{ui:Pozycje}}), a następnie kliknij na arkuszu. | Nie ma pozycji tego typu. | Wypełnij formularz {{ui:Nowa pozycja}}, który się otworzył, i wybierz {{ui:Dodaj}}. |
| Najpierw wybierz pozycję do przedmiaru (panel Pozycje). | Bieżąca pozycja została usunięta. | Kliknij pozycję w sekcji {{ui:Pozycje}}. |
| Odcinek wymaga co najmniej dwóch punktów. | Zakończono po jednym kliknięciu. | Kliknij co najmniej dwa punkty. |
| Pole wymaga co najmniej trzech punktów. | Za mało narożników. | Kliknij co najmniej trzy narożniki. |
| Kontur przecina sam siebie, więc jego pole byłoby błędne. Narysuj go ponownie bez przecięć. | Kształt w ósemkę. | Narysuj go jako dwa pola albo obiegnij krawędź po kolei. |
| Te punkty nie tworzą pola. | Wszystkie punkty leżą na jednej linii. | Kliknij narożniki, które otaczają jakąś przestrzeń. |
| Najpierw zaznacz znacznik pola (narzędzie {{ui:Zaznacz}}), a następnie wybierz {{ui:Wycięcie}} i narysuj otwór wewnątrz niego. | {{ui:Wycięcie}} wymaga zaznaczonego pola. | Naciśnij {{key:V}}, kliknij pole, a następnie {{key:X}}. |
| Wycięcie musi znajdować się w całości wewnątrz pola. | Otwór przecina kontur albo z niego wychodzi. | Narysuj otwór wewnątrz pola. |
| Wycięcia nie mogą na siebie nachodzić. | Dwa otwory się nakładają. | Narysuj jeden otwór dookoła obu albo rozsuń je. |
| … Punkt został przywrócony. | Przeciągnięty narożnik spowodowałby przecięcie konturu albo wypchnięcie otworu poza pole. | Przeciągnij w miejsce, które zachowuje poprawny kształt. |
| Kliknij punkt na krawędzi okręgu, z dala od jego środka. | Drugie kliknięcie było zbyt blisko środka. | Kliknij dalej od środka. |
| Kliknięcia przesuwają arkusz zamiast dodawać punkty | Wskaźnik przesunął się o więcej niż kilka pikseli, gdy przycisk był wciśnięty; to liczy się jako przeciągnięcie. | Klikaj bez przesuwania, zwłaszcza na gładziku. |
| Shift nie przyciąga | Stawiasz punkt na łuku albo rysujesz okrąg. | Przyciąganie co 45° dotyczy tylko odcinków prostych. |
| Punkty przeskakują na pobliską linię | Przyciąganie do linii rysunku jest włączone. | Przybliż widok, aby kliknąć między liniami, albo naciśnij {{key:F3}}, aby wyłączyć przyciąganie. |
| Nie pojawia się znacznik przyciągania | Przyciąganie jest wyłączone, arkusz jest skanem albo narzędzie nie przyciąga ({{ui:Liczenie}}, {{ui:Auto liczenie}}, wklejanie). | Naciśnij {{key:F3}}; na skanie nie ma linii do przyciągania. |
| Długość jest błędna | Skala jest błędna (często przeskalowany PDF z gotową skalą). | Użyj {{ui:Sprawdź}} na znanym wymiarze, a następnie {{ui:Kalibruj}}. |

## Skala

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Wskaż dwa punkty dalej od siebie. | Punkty kalibracji leżą prawie na sobie. | Kalibruj na dłuższym wymiarze. |
| Komunikat w oknie kalibracji, na przykład „Tej odległości nie udało się odczytać” | Odległość zapisano w formie, której TakeoffCraft nie potrafi odczytać. | Zob. [Wprowadzanie długości, stawki i procentów](topic:entry-formats). |
| Ten arkusz nie ma jeszcze skali, więc nie ma czego sprawdzać. Skalibruj go albo wybierz gotową skalę. | {{ui:Sprawdź}} na arkuszu bez skali. | Najpierw ustaw skalę. |
| Lista {{ui:Gotowa skala}} jest wyszarzona | Nie jest otwarty żaden arkusz. | Otwórz PDF. |

## Ilości i formuły

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Niekompletne: … (nie ma w sumach) | Błąd formuły albo znaczniki na arkuszach bez skali. | Zob. [Odczyt ilości i kosztorys](topic:read-quantities#the-incomplete-warning). |
| +(n) bez skali obok pozycji | Część jej znaczników leży na arkuszach bez skali. | Nadaj tym arkuszom skalę. |
| Błąd formuły: … | Formuły nie da się obliczyć. | Zob. [Język formuł](topic:formulas#errors). |
| Ta pozycja ma znaczniki, więc jej typ nie może się zmienić. | Typ jest zablokowany, gdy są znaczniki. | Utwórz nową pozycję innego typu i narysuj znaczniki ponownie z jej użyciem. |
| Pozycja wymaga nazwy. | Pole nazwy zostało opróżnione. | Wpisz nazwę. |
| Wpisz kwotę, np. 12.50. / Wpisz procent, np. 10 lub 7.5. | Stawki lub naddatku nie udało się odczytać. | Zob. [Wprowadzanie długości, stawki i procentów](topic:entry-formats). |
| Suma wygląda na podwojoną | Pozycja ma własne stawki i składniki, które niosą ten sam koszt. | Ustaw własne stawki pozycji na 0, gdy składniki niosą koszt. |
| Znaczniki tej pozycji leżą w PDF-ach, które nie są otwarte. | Kliknięto pozycję, której wszystkie znaczniki są w PDF-ach, których nie otwierano. | Otwórz te PDF-y; ich nazwy są wymienione w sekcji {{ui:Arkusze}}. |

## Auto liczenie

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Ta ramka jest za mała. Narysuj ją wokół całego symbolu. | Ramka jest bardzo mała. | Przybliż i obrysuj cały symbol. |
| Ta ramka jest prawie pusta. Narysuj ją wokół symbolu. | Ramka zawiera tylko papier. | Obrysuj sam symbol. |
| Brak dopasowań. Obniż suwak {{ui:Dopasowanie}} albo obrysuj symbol ciaśniej. | Nic nie uzyskało wystarczającego wyniku. | Obrysuj symbol ciasno albo przeciągnij suwak {{ui:Dopasowanie}} niżej. |
| Zbyt wiele dopasowań, w tym błędne symbole | Podobne symbole mają wynik zbliżony do prawdziwego. | Podnieś suwak {{ui:Dopasowanie}} i klikaj błędne ramki, aby je odrzucić. |
| Brak dopasowań na innych arkuszach | Te arkusze rysują symbol w innym rozmiarze albo pod kątem innym niż krok 90°. | Przeszukaj te arkusze, rysując tam ramkę, albo policz ręcznie. |
| (n) arkuszy było zbyt dużych, aby przeszukać przy tym rozmiarze symbolu. | Arkusz byłby zbyt duży przy roboczym rozmiarze. | Obrysuj większy symbol albo policz ten arkusz ręcznie. |
| Wyszukiwanie się nie powiodło: … | Wyszukiwanie w tle zostało zatrzymane. | Spróbuj ponownie; jeśli się powtarza, przeładuj stronę (najpierw zapisz). Offline działa tylko wtedy, gdy pasek aplikacji pokazuje {{ui:Gotowe offline}}. |
| Przeciąganie rysuje ramkę zamiast przesuwać widok | Tak działa {{ui:Auto liczenie}}. | Przytrzymaj {{key:Space}} i przeciągnij albo przeciągnij środkowym przyciskiem. |

## Zapisywanie i eksport

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Nic jeszcze nie ma do wyeksportowania: utwórz pozycję i zmierz ją. | Brak pozycji. | Najpierw utwórz pozycję. |
| W otwartych PDF-ach nie ma jeszcze znaczników. | {{ui:PDF z oznaczeniami}} nie ma czego narysować na otwartych PDF-ach. | Otwórz PDF-y, które mają znaczniki. |
| Ten PDF jest zabezpieczony hasłem lub zaszyfrowany, więc kopii z oznaczeniami nie można zapisać. … | Plik PDF jest zaszyfrowany. | Wyeksportuj {{ui:XLSX}} zamiast tego albo użyj niezaszyfrowanej kopii PDF-a (wtedy potrzebuje własnego przedmiaru, bo to inny plik). |
| Nie udało się zapisać PDF-a z oznaczeniami: … | Często: jesteś offline, a aplikacji nie zapisano do pracy offline, więc brakuje zapisywacza PDF. | Połącz się z siecią i ponownie wybierz {{ui:PDF z oznaczeniami}}. Aby tego uniknąć, wybierz {{ui:Zapisz do pracy offline}} i poczekaj na {{ui:Gotowe offline}}. |
| Pobrano tylko jeden PDF z oznaczeniami | Przeglądarka zablokowała kilka pobrań naraz. | Zezwól na wiele pobrań dla tej strony i wyeksportuj ponownie. |
| (plik) nie jest projektem TakeoffCraft (nie jest poprawnym JSON-em). / To nie jest plik projektu TakeoffCraft. | Zły plik albo uszkodzony. | Wskaż plik `.takeoff.json`. |
| Ten projekt zapisano w nowszym TakeoffCraft. Otwórz go tam. | Plik pochodzi z nowszej wersji. | Otwórz go w nowszej wersji. |
| (n) znaczników było uszkodzonych i zostało pominiętych. | Część pliku została uszkodzona albo edytowana ręcznie. | Reszta została otwarta. Narysuj brakujące znaczniki ponownie albo otwórz starszą kopię. |
| Brak znaczników po ponownym otwarciu | PDF-y nie są otwarte albo któryś z nich się zmienił. | Zob. [Zapisywanie i ponowne otwieranie przedmiaru](topic:save-and-reopen#when-a-pdf-has-changed). |
| Przeglądarka pyta „Opuścić witrynę?” | Są niezapisane zmiany. | Pozostań i zapisz, używając {{key:Mod+S}}. |

## Klawisze i mysz

| Objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Klawisze liter nie działają | Kursor jest w polu (wyszukiwanie, edytor pozycji, tabela). | Kliknij na arkusz albo naciśnij {{key:Tab}}, aby wyjść z pola. |
| Kółko przybliża zamiast przewijać | Kółko zawsze powiększa arkusz. | Przeciągnij, aby przesunąć. |
| Cała strona się powiększyła lub zmniejszyła | Zoom przeglądarki ({{key:Mod+Plus}} lub {{key:Mod+Minus}}). | Naciśnij {{key:Mod+0}}. Powiększ arkusz kółkiem albo samym {{key:Plus}} i {{key:Minus}}. |
| Znacznik zniknął po naciśnięciu Backspace | Backspace usuwa zaznaczony znacznik, gdy nie rysujesz. | {{key:Mod+Z}} przywraca go. |
| Kliknięcie prawym przyciskiem nie kończy na Macu | Kliknięcie z Control jest traktowane jak zwykłe kliknięcie. | Użyj kliknięcia dwoma palcami przy włączonym kliknięciu pomocniczym albo naciśnij {{key:Enter}}. |

## Ekrany dotykowe

Na ekranie dotykowym:

- **Stuknięcie** stawia punkt (albo zaznacza znacznik narzędziem {{ui:Zaznacz}}). Przeciąganie jednym palcem przesuwa widok.
- **Dwa palce** ściągają lub rozciągają, aby powiększać wokół punktu między nimi, a przesuwają, gdy poruszają się razem. Położenie drugiego palca anuluje to, co zaczął pierwszy, więc szczypnięcie nigdy nie zostawia punktu.
- **Zakończ** odcinek lub kontur **długim przytrzymaniem** (odpowiednik kliknięcia prawym), **podwójnym stuknięciem** albo przyciskiem {{ui:Zakończ}} na pasku u dołu arkusza. Ten sam pasek ma {{ui:Tył}} (cofa ostatni punkt) i {{ui:Anuluj}}. Pola zamykają się też przez stuknięcie w pierwszy punkt.
- Palce mają większe obszary dotyku: punkty przyciągają się, zamykają i wybierają z większej odległości, a uchwyty narożników są większe.

Wpisywanie długości wymaga klawiatury; klawiatura ekranowa działa, gdy pole {{ui:Wpisz}} jest aktywne.

Na tablecie klawiatura oraz mysz lub gładzik znacznie ułatwiają przedmiar.

## Praca offline

| Przycisk lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| {{ui:Nie udało się zapisać}} | Część plików aplikacji nie pobrała się podczas zapisu do pracy offline. | Sprawdź połączenie i wybierz przycisk ponownie. |
| {{ui:Tryb offline niedostępny}} | Okna prywatne i niektóre zarządzane komputery blokują kopie offline. | Użyj zwykłego okna albo innej przeglądarki. |
| „Zapisywanie…” nigdy się nie zaczyna | Jesteś offline; zapis wymaga połączenia. | Zapisz, będąc online. |
| Aplikacja jest stara po aktualizacji | Kopia offline pochodzi z wcześniejszego dnia. | Online wybierz {{ui:Gotowe offline}}, a następnie {{ui:Zapisz ponownie (pobierz najnowszą wersję)}}. |
| Chcesz odzyskać miejsce | Kopia offline zajmuje około 6 MB. | Wybierz {{ui:Gotowe offline}}, a następnie {{ui:Usuń kopię offline}}. |

Zob. [Praca offline](common:offline).

## Nadal masz problem

Przeładuj stronę, jeśli aplikacja przestaje odpowiadać. Przedmiar przepada po przeładowaniu, chyba że go zapisałeś, więc zapisz najpierw {{key:Mod+S}}, jeśli możesz. Pytania o przeglądarki: zob. [Przeglądarki i komputery](common:browsers).
