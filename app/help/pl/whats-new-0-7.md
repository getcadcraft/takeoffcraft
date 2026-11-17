---
title: Co nowego w 0.7 (wcześniej)
summary: Rysunki DWG i DXF otwierają się jako arkusze z własną skalą, dokładne liczby i długości z samego rysunku, wybrana oferta podwykonawcy jako cena pakietu, zaproszenia do wyceny z zapieczętowanymi cenami, narzędzia asystenta dla rysunków oraz USD z widoku sprawdzenia 3D.
keywords: co nowego 0.7, wcześniejsze wydanie, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, dwg, dxf, rysunek, układy, przestrzeń modelu, skala rysunku, liczenie z rysunku, liczenie z CAD, bloki, bloki dynamiczne, atrybuty, warstwy, xref, dołączony rysunek, zmierz rysunek, polilinia, kreskowanie, PDF z oznaczeniami, wybrana oferta, użyj oferty, wyślij do wyceny, zaproszenie do oferty, zapieczętowane oferty, otwarcie ofert, spóźniona oferta, rekordy podwykonawców, csv, asystent, mcp, usd, usdz, jednostki, listy jednostek, zwarty, panele, okna dialogowe, portugalski
from: de1dca2b
---

To, co zmieniło się w TakeoffCraft 0.7 w porównaniu z 0.6. Rysunki otwierają się teraz takie, jakie są, bez wcześniejszego drukowania do PDF, a pakiet ofertowy może trafić do podwykonawców i wrócić z wyceną.

## Nowe

### Rysunki DWG i DXF

- **Otwórz rysunek jako arkusze.** {{ui:Otwórz PDF}} w grupie {{ui:Plik}} ({{key:Mod+O}} albo upuść pliki) przyjmuje rysunki DWG i DXF obok plików PDF. Przestrzeń modelu i każdy układ stają się arkuszami na liście {{ui:Arkusze}}, a przedmiar może obejmować rysunki i pliki PDF razem. Nic nie zostaje wysłane. Zobacz [Otwórz rysunek DWG lub DXF](topic:open-a-drawing).
- **Skala pochodzi z rysunku.** Układ zaczyna się od skali swojego największego okna widokowego, nazwanej jako gotowa skala, jeśli nią jest, na przykład 1/2" = 1'-0". Model zaczyna w jednostkach rysunku. Rysunek bez jednostek pokazuje „Brak skali” do momentu kalibracji. {{ui:Kalibruj}}, {{ui:Sprawdź}} i {{ui:Gotowa skala}} nadal mają pierwszeństwo. Zobacz [Skala](topic:open-a-drawing#the-scale).
- **Warstwy i dołączone rysunki.** {{ui:Warstwy}} na pasku arkusza pokazuje lub ukrywa warstwy rysunku. Warstwy wyłączone lub zamrożone w pliku startują ukryte i nie są liczone, chyba że wybierzesz inaczej. Dołączony rysunek (xref) otwarty obok swojego rysunku nadrzędnego jest rysowany i liczony tam, gdzie jest wstawiony; dopóki nie jest otwarty, pasek stanu mówi, czego brakuje. Zobacz [Warstwy](topic:open-a-drawing#layers).
- **PDF z oznaczeniami działa z rysunku.** {{ui:Eksport}} › {{ui:PDF z oznaczeniami}} najpierw rysuje oznaczone arkusze rysunku jako PDF, więc kopia pokazuje Twoje znaczniki i legendę bez kroku drukowania. Jest rysowana na czarno albo w kolorach rysunku, bez tabel stylów wydruku. Zobacz [PDF z oznaczeniami](topic:export-estimate#a-marked-pdf).

### Dokładne liczby i długości z rysunku

- **Licz to, co rysunek mówi, że jest.** {{ui:Liczenie z CAD}} na pasku arkusza liczy blok po nazwie (także bloki zagnieżdżone, stany bloków dynamicznych i tablice bloków), wszystko jednego typu na warstwie albo wartość tekstu lub atrybutu. Liczy to, co pokazuje arkusz, albo cały rysunek raz. Dodanie znaczników to jeden krok cofnięcia, a ponowne liczenie dodaje tylko to, co nowe. {{ui:Auto liczenie}} pozostaje dla plików PDF i dla symboli, które nie są blokami. Zobacz [Liczenie z rysunku](topic:count-from-a-drawing).
- **Mierz z własnych linii rysunku.** {{ui:Zmierz rysunek}} bierze linie, łuki, polilinie, okręgi, kreskowania i bryły, które klikniesz lub zaznaczysz oknem, jako znaczniki pozycji liniowej lub powierzchniowej. Łuki, wypukłości (bulge) i otwory w kreskowaniu wychodzą dokładnie; elipsy i splajny mierzone są drobnymi cięciwami, a pasek to mówi. Zobacz [Pomiar z rysunku](topic:measure-from-a-drawing).

### Oferty

- **Użyj oferty podwykonawcy jako ceny pakietu.** W {{ui:Eksport}} › {{ui:Pakiety ofertowe i wyrównanie…}} wybierz {{ui:Użyj}} przy ofercie. Pozycje pakietu zostają jako ilości, jedna linia **Wybrana oferta** niesie cenę, pozycje, których oferta nie obejmuje, zostają po Twoim koszcie, a koszty ogólne, zysk i gwarancja stosują się do niej. Zmiana oferty to jeden krok cofnięcia; skoroszyt i podsumowanie ofert to uwzględniają. Zobacz [Użyj oferty jako ceny pakietu](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Wyślij pakiet do wyceny.** {{ui:Wyślij do wyceny…}} pod pakietem wysyła każdemu podwykonawcy e-mailem link do strony, która nie wymaga konta: widzą zakres i arkusze jako PDF, wpisują cenę w każdej linii albo oznaczają ją jako niezawartą, dodają uwagi i do trzech plików, albo odrzucają. {{ui:Pobierz ceny}} sprowadza odpowiedzi do arkusza wyrównania, oznaczone **web**. Wysyłanie jest otwarte tylko dla kont, które zespół CadCraft włączył na czas testów (zob. poniżej). Zobacz [Wyślij pakiet do wyceny](topic:bid-invitations).
- **Zapieczętowane do otwarcia.** Ceny mogą pozostać zapieczętowane do czasu otwarcia, które ustawisz: do tego momentu nikt nie widzi ceny, także Ty. Przy otwarciu każda oferta pojawia się naraz, a oferta złożona po terminie jest oznaczona jako spóźniona. Zobacz [Zapieczętowane oferty i otwarcie](topic:bid-invitations#sealed-bids-and-the-opening).
- **Rekordy podwykonawców.** Twoje konto na getcadcraft.com przechowuje kontakty każdej firmy, branże, odpowiedzi w kwalifikacji oraz daty ubezpieczeń i licencji (oznaczone, gdy minęły lub za mniej niż 30 dni), wraz z ich wcześniejszymi ofertami. Importuj je i eksportuj jako CSV, a przy wysyłaniu pakietu wybieraj je z listy. Zobacz [Na stronie](topic:bid-invitations#on-the-website).

### Asystenci AI

- **Asystenci mogą dodawać do przedmiaru.** Przy zaznaczonym **Edycja** Twój asystent może dodawać pozycje (`items_add`) i mierzyć odcinki, pola i liczby na arkuszu (`marks_add`; długości i pola tylko na arkuszu ze skalą), a każde wywołanie to jeden krok cofnięcia.
- **Narzędzia asystenta dla rysunków.** Przy otwartym DWG lub DXF asystent może wypisać jego arkusze i to, co można policzyć, liczyć dokładnie, dodawać znaczniki liczenia i mierzyć z geometrii rysunku. Bez otwartego TakeoffCraft serwer MCP CadCraft otwiera rysunek jako nowy przedmiar i go zapisuje, a `cadcraft count` liczy z wiersza poleceń. Zobacz [O co asystent może poprosić](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Widok sprawdzenia 3D jako USD.** {{ui:Paczka USD (.usdz)}} obok {{ui:GLB}} w widoku sprawdzenia 3D zapisuje każdą ścianę, płytę, blachę, słupek liczący i odcinek jako osobny obiekt, nazwany od swojej pozycji i zawierający jej ilość, w metrach. Asystent też może to wyeksportować (`usd_export`). Zobacz [Eksport widoku sprawdzenia 3D jako USD](topic:usd).

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma osobną listę dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami podanymi w definicjach jednostek (stopa geodezyjna USA jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list; oznacz jedną gwiazdką, a nowa praca zacznie się w niej. Plik zawsze zachowuje swoją jednostkę. W TakeoffCraft listy {{ui:Jednostka}} pozycji podążają za przełącznikami, nowa pozycja zaczyna się w oznaczonej gwiazdką jednostce długości lub pola, jednostki roofing squares (SQ), akry i hektary są nowymi jednostkami pola, a pole długości przyjmuje oznaczenie dowolnej jednostki, na przykład `3 yd`. Zobacz [Jednostki, wpisane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma smukły pasek tytułu: przeciągnij go, aby zadokować lub odczepić panel, upuść na pasek innego panelu, aby dzielić jedną ramkę jako karty, przypnij, aby chował się do krawędzi, albo ukryj i przywołaj z krawędzi. Zobacz [Ułóż panele](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu poza rysunek; wraca tam, gdzie je zostawiłeś. Dwuklik na pasku tytułu centruje je ponownie. Zobacz [Przesuń okno dialogowe](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć przykładowych próśb do Twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których wymaga, a każda odtwarzana przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Ten język oraz **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz wszystkie słowa aplikacji, jako wersje robocze, jeszcze nieprzeczytane przez rodzimego użytkownika. Tematy pomocy są po angielsku.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie udało (brak pliku dla Twojego systemu, brak sieci, zły podpis), zamiast tylko „Gotowe”, i nie przywraca karty Co nowego, którą zamknąłeś, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisane kodem.** Podpisywanie oraz pakiet Microsoft Store przeniesiono do 0.8, bo walidacja certyfikatu jeszcze nie przyszła. Sprawdź SHA-256 przy każdym pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwarty}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami, a nie ma jeszcze wersji dla iPad ani iPhone.
- Listy kątów i nachyleń w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- **Zaproszenia do wyceny są wyłączone dla większości kont.** Na czas testów wiadomości do zewnętrznych oferentów wychodzą tylko z kont włączonych przez zespół CadCraft. Strony oferentów działają dla każdego zaproszenia, które już wysłano. Pozostali: pobierz {{ui:Zakres CSV}}, wyślij go e-mailem samodzielnie i wpisz oferty.
- Okno CadCraft Studio nie może jeszcze wysyłać zaproszeń do wyceny: mówi, żeby użyć TakeoffCraft w przeglądarce. Otwieranie przedmiaru z wysłanymi zapytaniami, wyrównanie i wybór oferty działają w Studio.
- Aneksy, pisma o przyznaniu zlecenia, arkusz zakresu podpisywany przez każdego oferenta i automatyczne przypomnienia przed upływem daty ubezpieczenia nie są zbudowane. Wybrana oferta nie przelicza obszaru oferty alternatywnej.
- Rysunki: tabele stylów wydruku i pliki CTB nie są stosowane, binarny DXF jest odrzucany (zapisz go jako ASCII DXF lub DWG), dołączone rysunki są szukane tylko wśród otwartych plików po nazwie pliku, a podkłady PDF, obrazy i obiekty OLE w rysunku nie są rysowane ani liczone. Liczby i skale sprawdzono na przykładowych rysunkach, jeszcze nie na rysunkach z prawdziwej pracy otwartych w programie, który je stworzył.
- Asystent może dodawać pozycje i znaczniki, ale nie może przesuwać, zmieniać ani usuwać znaczników, które już są.

Wszystko inne znajduje się w [Jeszcze nie zbudowano](topic:not-built-yet).
