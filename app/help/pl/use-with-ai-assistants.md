---
title: Używanie TakeoffCraft z asystentem AI
summary: Pozwól swojemu asystentowi AI lub skryptowi odczytywać ilości i kosztorys przedmiaru, dodawać pozycje i znaczniki, liczyć i mierzyć na DWG lub DXF oraz eksportować: uprawnienia, połączenie przez CadCraft Studio i dziennik aktywności.
keywords: ai, asystent, agent, mcp, model context protocol, skrypt, automatyzacja, ilości, kosztorys, uprawnienia, rozłączenie, aktywność
from: 7fa62ec6
---

## Czego się dowiesz

Jak pozwolić asystentowi AI (albo skryptowi, który sam napisałeś) pracować z TakeoffCraft i jak decydować, czego może dotykać.

TakeoffCraft **nie ma własnej AI** i niczego nigdzie nie wysyła. Asystenta przynosisz sam: dowolny program, który obsługuje Model Context Protocol (MCP). TakeoffCraft udostępnia mu jedynie narzędzia, a wybierasz, które.

## Włącz

1. Otwórz {{ui:Ustawienia}} (koło zębate na pasku aplikacji lub {{key:Mod+,}}) i przejdź do karty {{ui:TakeoffCraft}}.
2. W sekcji {{ui:Asystenci}} zaznacz **Zezwalaj asystentom AI i skryptom na korzystanie z TakeoffCraft**. Jest to wyłączone, dopóki tego nie zrobisz.
3. Wybierz, co asystent może robić: **Odczyt** jest zaznaczony od początku; zaznacz **Edycja**, **Zapisz** lub **Eksport** tylko wtedy, gdy ich potrzebujesz.

Narzędzia spoza zaznaczonych uprawnień nie są oferowane asystentowi, a jeśli mimo to o nie poprosi, TakeoffCraft odmawia i zapisuje to w dzienniku aktywności. Wyłączenie przełącznika kończy wszystkie połączenia naraz; {{ui:Resetuj ustawienia TakeoffCraft}} też go wyłącza.

## Połącz asystenta

Asystenci łączą się przez **CadCraft Studio** na Twoim komputerze: Studio uruchamia mały serwer, do którego dotrze tylko ten komputer, chroniony tokenem, który tworzy za każdym razem przy uruchomieniu. W Studio wybierz {{ui:Połącz asystenta}} i skopiuj adres oraz token do swojego asystenta (Studio pokazuje dokładne ustawienia do wklejenia). Nigdy nie udostępniaj tokenu.

:::note
Karta przeglądarki nie może otworzyć połączenia dla asystenta: w aplikacjach przeglądarkowych przełącznik nie działa, dopóki nie użyjesz CadCraft Studio na swoim komputerze.
:::

## Zachowujesz kontrolę

- **Każda zmiana to jeden krok cofnięcia**, opisany nazwą asystenta (na przykład „Asystent: …”). {{key:Mod+Z}} cofa ostatnią zmianę asystenta w całości.
- **Wiesz, kiedy jest podłączony.** Przycisk na pasku aplikacji podaje nazwę asystenta, gdy jest połączony; wybierz go, aby zobaczyć, co może robić, lub aby go **Rozłączyć**.
- **Aktywność.** {{ui:Ustawienia}} › {{ui:TakeoffCraft}} › {{ui:Asystenci}} › {{ui:Aktywność}} wypisuje każde wywołanie: kiedy, które narzędzie, wykonane czy odrzucone. {{ui:Zapisz dziennik}} zachowuje jego kopię.

## O co asystent może poprosić

| Narzędzie | Uprawnienie | Co robi |
|---|---|---|
| `app_info`, `sheets_list` | Odczyt | Otwarty przedmiar, jego pliki PDF i arkusze, skala każdego arkusza i znaczniki |
| `items_list` | Odczyt | Pozycje z ich jednostkami, cenami i formułami zestawów kosztorysowych |
| `takeoff_quantities` | Odczyt | Ilości na pozycję lub na arkusz; znaczniki na arkuszach bez skali są wypisywane, nigdy nie liczone jako zero |
| `takeoff_estimate` | Odczyt | Wyceniony kosztorys, tak jak oblicza go TakeoffCraft, z sumami |
| `takeoff_export` | Eksport | Eksport CSV lub XLSX z TakeoffCraft |
| `items_add` | Edycja | Dodaje pozycje z ich jednostkami, cenami i naddatkiem |
| `marks_add` | Edycja | Mierzy odcinki, pola i liczby na arkuszu. Długości i pola tylko na arkuszu ze skalą, nigdy na arkuszu bez skali |
| `cad_sheets`, `cad_catalog`, `cad_count` | Odczyt | W otwartym pliku DWG lub DXF: jego arkusze i ich skale, to, co można policzyć (bloki, warstwy i typy, teksty), oraz dokładne liczby, tak jak robi je {{ui:Liczenie z CAD}} ([Liczenie z rysunku](topic:count-from-a-drawing)) |
| `cad_count_add` | Edycja | Liczy w rysunku i stawia znacznik liczenia na każdym znalezionym obiekcie, w jednym kroku; ponowne liczenie dodaje tylko to, co nowe |
| `cad_measure` | Edycja | Mierzy pozycję liniową lub powierzchniową z własnych linii, łuków, polilinii i kreskowań rysunku, tak jak robi to {{ui:Zmierz rysunek}} ([Pomiar z rysunku](topic:measure-from-a-drawing)); tylko na arkuszu ze skalą |
| `usd_export` | Eksport | Zmierzone odcinki, pola i liczby skalowanego arkusza jako model kontrolny 3D w USD (`.usdz`, `.usda` lub `.usdc`), tak jak zapisuje go {{ui:Paczka USD (.usdz)}} w widoku sprawdzenia 3D ([Eksport widoku sprawdzenia 3D jako USD](topic:usd)) |

Z zaznaczonym **Edycja** asystent dodaje pozycje i znaczniki (każde wywołanie to jeden krok cofnięcia); nie może przesuwać, zmieniać ani usuwać znaczników, które już są.

Te same ilości i kosztorys są dostępne bez otwierania TakeoffCraft: serwer MCP CadCraft otwiera plik `.takeoff.json` w folderze, który wskażesz (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), a `cadcraft info Job.takeoff.json` wypisuje je w wierszu poleceń. Może też otworzyć DWG lub DXF jako nowy przedmiar na jego arkuszach (ze skalami wziętymi z rysunku, tak jak robi je TakeoffCraft), liczyć i mierzyć na nim tymi samymi narzędziami `cad_*`, dodawać pozycje i zapisywać przedmiar (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` liczy z wiersza poleceń.

## Gdy coś nie działa

- **Asystent nie widzi narzędzi TakeoffCraft:** sprawdź, czy przełącznik jest włączony w tym oknie oraz czy okno jest otwarte w Studio.
- **„needs the export permission”:** zaznacz **Eksport** w sekcji {{ui:Asystenci}}, a potem zapytaj ponownie.
- **Błędy „401” lub „token”:** token się zmienił (Studio zostało uruchomione ponownie albo użyto {{ui:Nowy token}}). Skopiuj nowy token do ustawień asystenta.

## Zobacz także

- [Przepisy dla asystentów AI](common:assistants-recipes): przykłady z opisem, z narzędziami, które wywołują.
