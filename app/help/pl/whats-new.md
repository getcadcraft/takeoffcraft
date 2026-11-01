---
title: Co nowego w 0.7
summary: Rysunki DWG i DXF otwierają się jako arkusze z własną skalą, dokładne liczby i długości z samego rysunku, wybrana oferta podwykonawcy jako cena pakietu, zaproszenia do składania ofert z zapieczętowanymi cenami, narzędzia asystentów dla rysunków i USD z widoku kontrolnego 3D.
keywords: co nowego, informacje o wydaniu, lista zmian, zmiany, 0.7, wersja, nowe funkcje, dwg, dxf, rysunek, układy, przestrzeń modelu, skala rysunku, liczenie z rysunku, liczenie cad, bloki, bloki dynamiczne, atrybuty, warstwy, xref, rysunek dołączony, pomiar rysunku, polilinia, kreskowanie, pdf z oznaczeniami, wybrana oferta, użyj oferty, wyślij do wyceny, zaproszenie do oferty, zapieczętowane oferty, otwarcie ofert, spóźniona oferta, dane podwykonawców, csv, asystent, mcp, usd, usdz, jednostki, listy jednostek, zwarta, panele, okna dialogowe, portugalski
from: ad4f0df1
---

Oto, co zmieniło się w TakeoffCraft 0.7 w porównaniu z 0.6. Rysunki otwierają się teraz takie, jakie są, bez wcześniejszego drukowania do PDF, a pakiet ofertowy może trafić do podwykonawców i wrócić wyceniony.

## Nowości

### Rysunki DWG i DXF

- **Otwieranie rysunku jako arkuszy.** {{ui:Otwórz PDF}} w grupie {{ui:Plik}} ({{key:Mod+O}} albo upuszczenie plików) przyjmuje rysunki DWG i DXF obok plików PDF. Przestrzeń modelu i każdy układ stają się arkuszami na liście {{ui:Arkusze}}, a przedmiar może obejmować rysunki i pliki PDF razem. Nic nie jest wysyłane. Zobacz [Otwieranie rysunku DWG lub DXF](topic:open-a-drawing).
- **Skala pochodzi z rysunku.** Układ zaczyna w skali swojego największego okna widokowego, nazwanej jako gotowa skala, jeśli nią jest, na przykład 1/2" = 1'-0". Model zaczyna w jednostkach rysunku. Rysunek bez jednostek mówi „Brak skali”, dopóki go nie skalibrujesz. {{ui:Kalibruj}}, {{ui:Sprawdź}} i {{ui:Gotowa skala}} nadal mają pierwszeństwo. Zobacz [Skala](topic:open-a-drawing#the-scale).
- **Warstwy i rysunki dołączone.** {{ui:Warstwy}} na pasku arkusza pokazuje lub ukrywa warstwy rysunku. Warstwy wyłączone lub zamrożone w pliku zaczynają jako ukryte i nie są liczone, chyba że zdecydujesz inaczej. Rysunek dołączony (xref) otwarty obok rysunku nadrzędnego jest rysowany i liczony tam, gdzie jest wstawiony; dopóki nie jest otwarty, pasek stanu mówi, czego brakuje. Zobacz [Warstwy](topic:open-a-drawing#layers).
- **PDF z oznaczeniami działa z rysunku.** {{ui:Eksport}} › {{ui:PDF z oznaczeniami}} najpierw rysuje oznaczone arkusze rysunku jako PDF, więc kopia pokazuje Twoje oznaczenia i legendę bez kroku drukowania. Jest rysowany w czerni lub kolorach rysunku, bez tabel stylów wydruku. Zobacz [PDF z oznaczeniami](topic:export-estimate#a-marked-pdf).

### Dokładne liczby i długości z rysunku

- **Policz to, co według rysunku tam jest.** {{ui:Liczenie z CAD}} na pasku arkusza liczy blok według nazwy (łącznie z blokami zagnieżdżonymi, stanami bloków dynamicznych i szykami bloków), wszystko jednego typu na warstwie albo wartość tekstu lub atrybutu. Liczy to, co pokazuje arkusz, albo cały rysunek jednorazowo. Dodanie oznaczeń to jeden krok cofania, a ponowne liczenie dodaje tylko to, co nowe. {{ui:Auto liczenie}} pozostaje dla plików PDF i dla symboli, które nie są blokami. Zobacz [Liczenie z rysunku](topic:count-from-a-drawing).
- **Mierz z własnych linii rysunku.** {{ui:Zmierz rysunek}} bierze linie, łuki, polilinie, okręgi, kreskowania i bryły, które klikniesz lub obejmiesz oknem, jako oznaczenia pozycji liniowej lub powierzchniowej. Łuki, wybrzuszenia i otwory kreskowania wychodzą dokładnie; elipsy i splajny są mierzone drobnymi cięciwami, a pasek o tym mówi. Zobacz [Pomiar z rysunku](topic:measure-from-a-drawing).

### Oferty

- **Użyj oferty podwykonawcy jako ceny pakietu.** W {{ui:Eksport}} › {{ui:Pakiety ofertowe i wyrównanie…}} wybierz {{ui:Użyj}} przy ofercie. Pozycje pakietu zostają jako ilości, jedna linia **Wybrana oferta** niesie cenę, pozycje, których oferta nie obejmuje, pozostają po Twoim koszcie, a narzuty, zysk i gwarancja się do niej stosują. Zmiana oferty to jeden krok cofania; skoroszyt i podsumowanie ofert ją zawierają. Zobacz [Użycie oferty jako ceny pakietu](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Wyślij pakiet do wyceny.** {{ui:Wyślij do wyceny…}} pod pakietem wysyła każdemu podwykonawcy e-mailem link do strony, która nie wymaga konta: widzi zakres i arkusze jako PDF, wpisuje cenę przy każdej linii albo oznacza ją jako niewliczoną, dodaje uwagi i do trzech plików albo odmawia. {{ui:Pobierz ceny}} wciąga to, co wróciło, do arkusza wyrównania, oznaczone **web**. Wysyłanie jest otwarte tylko dla kont włączonych przez zespół CadCraft na czas testów (patrz niżej). Zobacz [Wysyłanie pakietu do wyceny](topic:bid-invitations).
- **Zapieczętowane do otwarcia.** Ceny mogą pozostać zapieczętowane do ustawionej przez Ciebie chwili otwarcia: do tej pory nikt nie widzi ceny, także Ty. W chwili otwarcia każda oferta pokazuje się naraz, a oferta, która przyszła po terminie, jest oznaczona jako spóźniona. Zobacz [Zapieczętowane oferty i otwarcie](topic:bid-invitations#sealed-bids-and-the-opening).
- **Dane podwykonawców.** Twoje konto na getcadcraft.com przechowuje dla każdej firmy kontakty, branże, odpowiedzi kwalifikacyjne oraz daty ubezpieczeń i licencji (oznaczane po upływie lub w ciągu 30 dni) wraz z ich dawnymi ofertami. Importuj je i eksportuj jako CSV oraz wybieraj przy wysyłaniu pakietu. Zobacz [Na stronie internetowej](topic:bid-invitations#on-the-website).

### Asystenci AI

- **Asystenci mogą dodawać do przedmiaru.** Przy zaznaczonym **Edit** Twój własny asystent może dodawać pozycje (`items_add`) i mierzyć ciągi, pola i liczby na arkuszu (`marks_add`; długości i pola tylko na arkuszu ze skalą), a każde wywołanie to jeden krok cofania.
- **Narzędzia asystenta dla rysunków.** Na otwartym DWG lub DXF asystent może wymienić jego arkusze i to, co da się policzyć, policzyć dokładnie, dodać oznaczenia liczenia i mierzyć z geometrii rysunku. Bez otwartego TakeoffCraft serwer MCP CadCraft otwiera rysunek jako nowy przedmiar i go zapisuje, a `cadcraft count` liczy z wiersza poleceń. Zobacz [O co może poprosić asystent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Widok kontrolny 3D jako USD.** {{ui:Paczka USD (.usdz)}} obok {{ui:GLB}} w widoku kontrolnym 3D zapisuje każdą ścianę, płytę, blachę, słupek liczenia i ciąg jako osobny obiekt, nazwany od swojej pozycji i niosący swoją ilość, w metrach. Asystent też może go wyeksportować (`usd_export`). Zobacz [Eksport widoku kontrolnego 3D jako USD](topic:usd).

## W każdej aplikacji

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma po jednej liście dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami wynikającymi z definicji jednostek (amerykańska stopa geodezyjna jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list jednostek; oznacz jedną gwiazdką, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. W TakeoffCraft listy {{ui:Jednostka}} pozycji podążają za przełącznikami, nowa pozycja zaczyna w jednostce długości lub pola oznaczonej gwiazdką, nowymi jednostkami pola są kwadraty dachowe (SQ), akry i hektary, a pole długości przyjmuje znak dowolnej jednostki, na przykład `3 yd`. Zobacz [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy panel boczny ma wąski pasek tytułu: przeciągnij go, aby zadokować lub oderwać panel, upuść na pasku innego panelu, aby dzielić jedną ramkę jako karty, przypnij, aby chował się przy krawędzi, albo ukryj go i przywołaj z krawędzi. Zobacz [Rozmieszczanie paneli](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe można przesuwać.** Przeciągnij okno dialogowe za pasek tytułu, aby usunąć je sprzed rysunku; wróci tam, gdzie je zostawiłeś. Kliknij pasek tytułu dwukrotnie, aby znów wyśrodkować okno. Zobacz [Przesuwanie okna dialogowego](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć opracowanych próśb dla Twojego własnego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których potrzebuje, a każda odtworzona przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** to nowość w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Ten język, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz każde słowo aplikacji, jako wersje robocze jeszcze niesprawdzone przez rodzimego użytkownika języka. Tematy pomocy na start są przetłumaczone na te języki, a pozostałe tematy pomocy są na razie po angielsku.
- **CadCraft Studio** mówi, dlaczego sprawdzenie aktualizacji się nie udało (brak pliku dla Twojego systemu, brak sieci, zły podpis), zamiast samego „Gotowe”, i przestaje przywoływać zamkniętą kartę Co nowego, dopóki nie ma nowszego wydania.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisana cyfrowo.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, ponieważ walidacja certyfikatu jeszcze nie nadeszła. Sprawdź SHA-256 obok każdego pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij CadCraft Studio prawym przyciskiem i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w żadnym sklepie z aplikacjami i nie ma jeszcze wersji na iPada ani iPhone'a.
- Listy kąta i nachylenia w {{ui:Jednostki}} są zapisywane, ale żadne pole jeszcze ich nie odczytuje.
- **Zaproszenia do składania ofert są wyłączone dla większości kont.** Na czas testów poczta do zewnętrznych oferentów wychodzi tylko z kont włączonych przez zespół CadCraft. Strony oferentów działają dla każdego już wysłanego zaproszenia. Wszyscy pozostali: pobierz {{ui:Zakres CSV}}, wyślij go sam e-mailem i wpisz oferty ręcznie.
- Okno CadCraft Studio nie może jeszcze wysyłać zaproszeń do składania ofert: mówi, aby użyć TakeoffCraft w przeglądarce. Otwieranie przedmiaru z wysłanymi zapytaniami, wyrównanie i wybór oferty działają w Studio.
- Aneksy, listy przyznania zamówienia, arkusz zakresu zatwierdzany przez każdego oferenta i automatyczne przypomnienia przed upływem daty ubezpieczenia nie są zbudowane. Wybrana oferta nie przelicza ceny obszaru przetargowego wariantu alternatywnego.
- Rysunki: tabele stylów wydruku i pliki CTB nie są stosowane, binarny DXF jest odrzucany (zapisz go jako ASCII DXF lub DWG), rysunki dołączone są znajdowane tylko wśród otwartych plików według nazwy pliku, a podkłady PDF, obrazy i obiekty OLE w rysunku nie są rysowane ani liczone. Liczby i skale sprawdzono na przykładowych rysunkach, jeszcze nie na rysunkach z prawdziwego zlecenia otwartych w programie, który je utworzył.
- Asystent może dodawać pozycje i oznaczenia, ale nie może przesuwać, zmieniać ani usuwać oznaczeń, które już istnieją.

Wszystko inne jest w [Jeszcze nie zbudowano](topic:not-built-yet).
