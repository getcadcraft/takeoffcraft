---
title: Czego jeszcze nie zbudowano
summary: Funkcje przedmiaru, których ta wersja nie ma, i co robić dziś zamiast nich.
keywords: ograniczenia, brakujące, jeszcze nie, plan rozwoju, planowane, obejście, na ciąg, chmura, aplikacja na komputer
from: 94ff90d0
---

TakeoffCraft jest w fazie rozwoju. Ta lista zawiera to, czego obecna wersja nie robi, oraz sposób, jak mimo to wykonać pracę.

## Pomiary

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Wstawianie punktu w środku ciągu lub konturu | Usuń znacznik i narysuj go ponownie. |
| Zaznaczanie oknem | {{key:Shift}} + kliknięcie każdego znacznika albo {{key:Mod+A}}, by zaznaczyć wszystkie znaczniki na arkuszu. Zobacz [Kopiowanie, wklejanie i duplikowanie znaczników](topic:copy-paste). |
| Obracanie, odbicie lustrzane lub zmiana skali wklejonej kopii | Wklej na arkusz w tej samej skali i orientacji; resztę narysuj ręcznie. |
| Odczyt skali ze zeskanowanego arkusza albo z graficznej podziałki | Wybierz gotową skalę albo skalibruj na długości paska. |
| Więcej niż jedna skala na arkuszu (obszary detali, powiększone rzuty) | Zmierz część w skali arkusza, a detal policz na jego własnym powiększonym arkuszu, jeśli zestaw go ma. |

## Pozycje i wycena

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Formuły zestawów kosztorysowych korzystające z innych rodzajów znaczników pozycji (drzwi pozycji pomieszczenia w formułach jej kondygnacji) | Formuły używają sum głównego typu; wyceń pozostałe rodzaje w ich własnych wierszach. |
| Formuły zestawów liczone osobno dla każdego ciągu | Formuły używają sum pozycji; dla dodatków na ciąg użyj `N`. |
| Formuły korzystające z ilości innej pozycji | Powtórz pomiar w tej pozycji albo wylicz to w eksporcie do arkusza kalkulacyjnego. |
| Ekipy dla elementów zestawu kosztorysowego albo dzień roboczy inny niż 8 godzin | Przypisz ekipę do pozycji; dla innej długości dnia odczytuj dni ekipy jako godziny ekipy ÷ twoja długość dnia. |
| Adnotacje inne niż notatki, chmury i zakreślenia (strzałki, wymiary, pieczątki) albo odpowiedzi do notatki | Wpisz to w tekst notatki; zmieniaj jej status w miarę załatwiania. |
| Biblioteka cen współdzielona przez zespół albo przechowywana na koncie | Biblioteka jest przechowywana w tej przeglądarce: wyeksportuj ją jako CSV i zaimportuj na drugim komputerze. |
| Pakiety branżowe sprawdzane przez praktykujących kosztorysantów | Każdy pakiet to punkt wyjścia: sprawdź jego założenia z własnym zleceniem i własnymi produktami, zanim zaczniesz wyceniać. Zobacz [Pakiety branżowe](topic:trade-packs). |
| Ceny w pakietach branżowych | Pakiety zawierają tylko zestawy kosztorysowe: ustaw własne stawki albo zaimportuj swój cennik jako CSV. |
| Zmiana nazwy przedmiaru | Nazwa pochodzi z pierwszego PDF-a; zmień nazwę pobranych plików. |
| Ręczne nazywanie arkuszy | Arkusze są nazywane wg etykiet stron w PDF-ie; szukaj po nazwie pliku i numerze strony. |

## Rysunki (DWG i DXF)

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Tabele stylów wydruku (plot style), przypisania piór i pliki CTB na arkuszach rysunku | Rysunek jest rysowany na czarno albo we własnych kolorach przyciemnionych do papieru; grubości linii pochodzą z rysunku. |
| Otwieranie binarnego DXF albo DWG starszego niż AutoCAD 2000 | Zapisz go jako ASCII DXF albo jako nowszy DWG. |
| Znajdowanie rysunku dołączonego (xref) po folderze, w którym się znajduje | Otwórz też plik rysunku dołączonego razem z rysunkiem głównym: zostanie znaleziony po nazwie pliku wśród otwartych plików. |
| Pomiar polilinii 3D, siatek, brył i regionów | Policz je wg warstwy i typu albo zmierz rzut z góry narzędziami Liniowy i Pole. |
| Tekst w PDF z oznaczeniami z rysunku w pismach innych niż łaciński | Znaki, których Helvetica nie ma w zestawie glifów, drukują się jako „?” w PDF-ie z oznaczeniami; rysunek na ekranie się nie zmienia. |
| Przekazanie rysunku do innej aplikacji z paska arkuszy | Otwórz ten sam plik w tamtej aplikacji. |
| Rysunek, który przechowuje przedmiar w sobie, tak jak {{ui:PDF z przedmiarem w środku}} robi dla PDF-ów | {{ui:Zapisz przedmiar}}: plik `.takeoff.json` otwiera się ponownie na tym samym rysunku, rozpoznany po zawartości. |
| Rysowanie lub liczenie podkładów PDF, obrazów i obiektów OLE umieszczonych w rysunku | Obrazy pokazują się tylko jako ramka. Otwórz sam plik PDF podkładu jako arkusz. |

## Auto liczenie

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Szukanie symboli na arkuszu bez skali, narysowanych w innym rozmiarze | Ustaw arkuszowi skalę albo przeszukaj go, rysując tam ramkę. |
| Szukanie symboli odbitych lustrzanie | Policz je ręcznie albo wyszukaj ponownie, rysując ramkę wokół jednego odbitego. |

## Pliki i udostępnianie

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Jeden PDF, który pokazuje znaczniki i przechowuje przedmiar | {{ui:PDF z oznaczeniami}}, by inni mogli zobaczyć znaczniki; {{ui:PDF z przedmiarem w środku}}, by ponownie otworzyć w TakeoffCraft. |
| CSV z ilościami wg arkusza albo ze znaczników | Użyj {{ui:XLSX}}: jego arkusze By sheet i Marks zawierają te dane. |
| Zapis w chmurze | Jeszcze niedostępny. Zapisuj pliki projektu na komputerze i rób ich kopie zapasowe. |
| Osobna aplikacja desktopowa TakeoffCraft | Od 0.5 aplikacja desktopowa to CadCraft Studio, ze wszystkimi ośmioma aplikacjami w jednej instalacji. TakeoffCraft działa też w przeglądarce. |

## Ekran i wejście

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Menu po kliknięciu prawym przyciskiem (lub długim przytrzymaniu) | Użyj paska narzędzi, paneli i klawiszy. Długie przytrzymanie kończy ciąg lub kontur. |
| Obracanie widoku | Strony obrócone w PDF-ie już wyświetlają się w pionie. |

## Widok 3D

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Rysowanie lub edytowanie znaczników w 3D | Wróć do arkusza ({{key:3}}), by rysować; zaznaczanie i usuwanie działają w 3D. |
| Wyrównywanie piętrowych kondygnacji wykreślonych w różnych miejscach na stronach | Układaj kondygnacje wykreślone podobnie; resztę sprawdzaj arkusz po arkuszu. |
| Liczenie słupków o wymiarach takich jak liczony obiekt | Każdy słupek na arkuszu ma ten sam rozmiar; oznacza miejsce liczenia, a nie to, czym jest. |

## Składanie ofert

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Aneksy do już wysłanego pakietu, pisma o wyborze wykonawcy, arkusz zakresu podpisywany przez każdego oferenta | Wyślij nowy pakiet i sam napisz rozstrzygnięcie. [Wysyłanie pakietu do ofert](topic:bid-invitations) opisuje to, co jest zbudowane. |
| Wysyłanie zaproszeń do składania ofert z dowolnego konta: podczas testów poczta do zewnętrznych oferentów jest wyłączona, poza kontami włączonymi przez zespół CadCraft | Pobierz {{ui:Zakres CSV}}, wyślij go e-mailem samodzielnie i wpisz oferty. |
| Wysyłanie pakietów ofertowych z okna Studio | Wysyłaj z TakeoffCraft w przeglądarce. |
| Przeliczanie obszaru oferty wariantu według wybranej oferty | Warianty i sumy częściowe obszarów ofert używają twoich własnych cen; skoryguj wariant ręcznie. |
| Automatyczne przypomnienia przed upływem terminu ubezpieczenia lub licencji podwykonawcy | Data jest oznaczana na stronie Podwykonawcy, gdy minie albo zostanie w ciągu 30 dni; sprawdź ją przy wysyłaniu zaproszenia. |

## Panele

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Przesuwanie tabeli {{ui:Ilości}} | Przesuwają się tylko panele {{ui:Arkusze}} i {{ui:Pozycje}}. Zobacz [Ułóż panele](common:arrange-panels). |

## Arkusze kalkulacyjne

Skoroszyt XLSX sprawdzono w LibreOffice Calc, który przeliczył każdą sumę co do grosza tak samo jak TakeoffCraft. Nie otwierano go jeszcze w Excelu. Jeśli program arkusza kalkulacyjnego pokaże coś nieoczekiwanego, eksport CSV zawiera ten sam kosztorys jako zwykłe wartości.
