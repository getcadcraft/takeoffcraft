---
title: Pliki, które TakeoffCraft otwiera i zapisuje
summary: Pliki PDF na wejściu, plik projektu przedmiaru, arkusze kalkulacyjne i PDF z oznaczeniami na wyjściu: co zawiera każdy, dokąd trafia i co zmienia się online, offline oraz między przeglądarkami.
keywords: pliki, formaty, pdf, takeoff.json, plik projektu, xlsx, csv, pdf z oznaczeniami, pobieranie, zapis, otwieranie, offline
from: 1bf9be65
---

## Co otwiera

| Plik | Jak | Uwagi |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otwórz PDF}}, {{key:Mod+O}} albo upuszczenie na stronę | Kilka naraz. Każda strona staje się arkuszem. |
| Projekt przedmiaru (`.takeoff.json`) | {{ui:Otwórz przedmiar}} albo upuszczenie na stronę | Twoje pozycje, skale i oznaczenia. Możesz go upuścić razem z jego plikami PDF. |

Inne pliki upuszczone na stronę są pomijane, a pasek stanu je wymienia.

- **Pliki PDF zabezpieczone hasłem** nie otwierają się: „(nazwa) jest zabezpieczony hasłem. Otwórz kopię bez zabezpieczeń.”
- **Ten sam PDF dwa razy** jest otwierany raz: „(nazwa) jest już otwarty.” TakeoffCraft rozpoznaje pliki po zawartości, nie po nazwach.
- **Zeskanowane pliki PDF** otwierają się i mierzą jak każde inne; TakeoffCraft nie potrzebuje tekstu w pliku PDF.
- **Duże zestawy planów**: każdy PDF jest czytany w całości przy otwieraniu (aby zdjąć jego odcisk), więc bardzo duży plik zajmuje chwilę. Miniatury są rysowane po jednej podczas przewijania.

## Co zapisuje

Każdy zapis to pobranie. Nic nie jest zapisywane z powrotem do Twoich plików PDF.

| Wybierasz | Dostajesz | Co zawiera |
|---|---|---|
| {{ui:Zapisz przedmiar}} | `(nazwa).takeoff.json` | Pozycje, zestawy kosztorysowe, stawki, skale arkuszy i każde oznaczenie, powiązane z każdym plikiem PDF jego zawartością. Bez stron PDF. |
| {{ui:XLSX}} | `(nazwa).xlsx` | Cztery arkusze: Kosztorys (z żywymi wzorami), Wg arkusza, Oznaczenia, Skale. |
| {{ui:CSV}} | `(nazwa).csv` | Kosztorys jako zwykłe wartości, jeden wiersz na pozycję i składnik. |
| {{ui:PDF z oznaczeniami}} | `(nazwa PDF) (takeoff).pdf` | Kopia każdego otwartego pliku PDF, który ma oznaczenia, z przedmiarem narysowanym na stronach i legendą. Jeden plik na PDF. |

Nazwa pochodzi od pierwszego pliku PDF otwartego w tym przedmiarze. Nie ma jeszcze pola zmiany nazwy: zmień nazwę pobranego pliku, jeśli chcesz inną.

Zobacz [Eksport kosztorysu i PDF z oznaczeniami](topic:export-estimate) oraz [Kolumny eksportu](topic:export-columns).

## Dokąd trafiają pobrane pliki

Przeglądarka zapisuje je tam, gdzie zapisuje każde pobranie, zwykle w folderze Pobrane. Znajdziesz go w {{pick:mac=Finder|windows=Eksplorator plików|linux=menedżer plików}}. Jeśli przeglądarka jest ustawiona tak, aby pytać, gdzie zapisać każdy plik, zapyta.

:::chromium
{{ui:PDF z oznaczeniami}} przy kilku oznaczonych plikach PDF pobiera kilka plików naraz. Chrome i Edge mogą raz zapytać, czy ta witryna może pobierać wiele plików. Wybierz Zezwalaj.
:::

:::safari
Safari zapisuje do Pobranych, chyba że zmienisz miejsce pobierania w Ustawieniach Safari, w sekcji Ogólne.
:::

## Dlaczego plik projektu i pliki PDF są osobno

Plik `.takeoff.json` zawiera tylko Twój przedmiar. Odnajduje swoje pliki PDF po ich zawartości (odcisku każdego pliku), więc:

- Zmiana nazwy lub przeniesienie pliku PDF nie ma znaczenia.
- PDF zmieniony lub zapisany ponownie przez inny program liczy się jako inny plik, nawet o tej samej nazwie.
- Oznaczenia na plikach PDF, które nie są otwarte, nadal wchodzą do sum.

Zobacz [Zapis i ponowne otwarcie przedmiaru](topic:save-and-reopen).

## Online i offline

Twoje pliki PDF i przedmiary nigdy nie opuszczają Twojego komputera, online ani offline. Połączenie ma znaczenie tylko przy ładowaniu samego TakeoffCraft.

Aby pracować bez połączenia, zapisz najpierw aplikację, gdy jesteś online:

1. Wybierz {{ui:Zapisz do pracy offline}} na pasku aplikacji u góry.
   Przycisk odlicza, „Zapisywanie 12 z 40”, w trakcie zapisu.
2. Poczekaj na {{ui:Gotowe offline}}.

Zapis TakeoffCraft zachowuje w przeglądarce aplikację, tę pomoc, czytnik PDF, zapisywacz PDF używany przez {{ui:PDF z oznaczeniami}} i proces roboczy automatycznego liczenia, około 6 MB. Gdy pojawi się {{ui:Gotowe offline}}, wszystko działa offline: otwieranie plików PDF, mierzenie, {{ui:Auto liczenie}}, {{ui:Zapisz przedmiar}}, {{ui:XLSX}}, {{ui:CSV}} i {{ui:PDF z oznaczeniami}}.

| Przycisk mówi | Znaczenie |
|---|---|
| {{ui:Zapisz do pracy offline}} | Jeszcze niezapisane w tej przeglądarce. Wybierz, aby zapisać. |
| Zapisywanie (n) z (m) | Trwa zapis. |
| {{ui:Gotowe offline}} | Zapisano. Wybierz, aby uzyskać {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} lub {{ui:Usuń kopię offline}}. |
| {{ui:Nie udało się zapisać}} | Niektóre pliki się nie pobrały. Sprawdź połączenie i wybierz go ponownie. |
| {{ui:Tryb offline niedostępny}} | To okno przeglądarki nie może przechowywać kopii offline (okna prywatne i niektóre komputery zarządzane ją blokują). |

Więcej, w tym jak długo zapisana kopia przetrwa w każdej przeglądarce: [Praca offline](common:offline).

:::offline
Jesteś offline. Jeśli na pasku aplikacji widnieje {{ui:Gotowe offline}}, wszystko działa. Jeśli nie, części, których TakeoffCraft jeszcze nie załadował w tej karcie (zapisywacz PDF dla {{ui:PDF z oznaczeniami}}, proces roboczy automatycznego liczenia), nie mogą się teraz załadować, a {{ui:PDF z oznaczeniami}} zatrzymuje się z komunikatem „Nie udało się zapisać PDF z oznaczeniami”. Twój przedmiar jest bezpieczny w obu przypadkach: {{ui:Zapisz przedmiar}}, {{ui:XLSX}} i {{ui:CSV}} nie potrzebują połączenia. Nie przeładowuj karty, dopóki znów nie będziesz online.
:::

:::online
Jesteś online. Przed wizytą na budowie lub lotem wybierz {{ui:Zapisz do pracy offline}} i poczekaj na {{ui:Gotowe offline}}.
:::

## Arkusze kalkulacyjne

XLSX zachowuje żywe wzory, więc program do arkuszy przelicza kosztorys przy otwarciu pliku i utrzymuje go poprawnym, gdy zmienisz tam stawkę lub naddatek. Skoroszyt sprawdzono w LibreOffice Calc, który przeliczył każdą sumę co do grosza tak samo. Nie otwierano go jeszcze w Excelu.

CSV to zwykłe wartości ze znacznikiem kolejności bajtów, aby programy do arkuszy poprawnie czytały znaki takie jak m².

## Aplikacja desktopowa i chmura

:::desktop
Od 0.5 aplikacją desktopową jest CadCraft Studio: TakeoffCraft i pozostałe siedem aplikacji w jednej instalacji. Nie ma osobnego instalatora TakeoffCraft.
:::

Zapis w chmurze nie jest jeszcze dostępny. Trzymaj pliki `.takeoff.json` razem z plikami PDF zlecenia i twórz ich kopie zapasowe jak każdego innego pliku. Zobacz [Dokąd trafiają Twoje pliki](common:your-files).
