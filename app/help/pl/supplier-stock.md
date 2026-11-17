---
title: Sprawdź stan magazynowy dostawcy i czasy dostawy
summary: Dodaj listę stanów dostawcy (CSV lub arkusz kalkulacyjny), a TakeoffCraft sprawdzi, czego potrzebuje przedmiar wraz z naddatkiem, czyli czy jest tego wystarczająco na stanie i jak długie jest oczekiwanie. Braki i długie oczekiwanie pokazują się w panelu Problemy.
keywords: dostawca, stan magazynowy, na stanie, czas dostawy, dostępność, brak towaru, zamówienie oczekujące, lista zamówienia, csv, sku, sprzedawca, materiały, dostawa, problemy
from: f11160fb
---

{{ui:Dostawa}} na pasku narzędzi (ciężarówka) sprawdza, czego potrzebuje Twój przedmiar, względem listy stanów dostawcy. Wiersze dostawcy, które mają znaczenie, są zapisywane w pliku przedmiaru. Nic nie jest nigdzie wysyłane i nic nie pyta dostawcy: plik dostarczasz Ty.

## Plik

Plik CSV z wierszem nagłówka. Potrzebna jest kolumna nazwy lub SKU oraz kolumna stanu lub czasu dostawy. Rozpoznawane są te nagłówki (w dowolnej kolejności i bez względu na wielkość liter): Item, Name, Description lub Product; SKU, Part lub Item #; In stock, On hand, Available lub Quantity; Lead time lub Delivery days; Unit lub UOM; Price lub Cost; Supplier lub Vendor.

- Stan może być liczbą (1,200), „In stock” albo „Out of stock”.
- Czas dostawy może mieć postać „5 days”, „2 weeks”, „2-3 weeks” (używany jest dłuższy), „3 months”, „same day” lub „backorder”. Zwykła liczba jest w jednostce nagłówka (dni, chyba że nagłówek mówi o tygodniach lub miesiącach).
- Pliki Excela nie są odczytywane: najpierw zapisz arkusz jako CSV.

## Sprawdź przedmiar

1. Wybierz {{ui:Dostawa}}, następnie {{ui:Dodaj plik dostawcy…}} i wskaż plik CSV. Możesz dodać więcej niż jeden: do pięciu plików, łącznie 2000 wierszy, najpierw te, które pasują do Twoich pozycji.
2. Każda pozycja, drugi warunek i część zestawu z ilością są dopasowywane do wiersza po nazwie albo po SKU w jej nazwie. Podobna nazwa (jedna zawiera drugą) jest używana, gdy nie ma dokładnej, i zostaje to oznaczone.
3. W sekcji {{ui:Czego potrzebuje przedmiar}} na początku pojawiają się pozycje z niedoborem: „Brakuje 120 EA”, „Czas dostawy 21 dni”, „Zamówienie oczekujące”, „Inna jednostka”, „Brak danych o stanie” albo „Na stanie”. Zapotrzebowanie uwzględnia naddatek. Jednostka dostawcy inna niż w kosztorysie (tona zamiast stopy) jest zgłaszana i nigdy nie jest porównywana. Każdy wiersz ma przycisk {{ui:Zaznacz pozycję}}, który przenosi do pozycji.
4. Ustaw {{ui:Najdłuższe oczekiwanie (dni)}} (domyślnie 14). Pozycja, która nie jest na stanie i czeka dłużej, zostanie oznaczona, a podsumowanie wskaże najdłuższe oczekiwanie, które ma znaczenie.
5. {{ui:Lista zamówienia (CSV)}} pobiera pozycje z niedoborem wraz z brakującą ilością, dostawcą i czasem dostawy. {{ui:Pomiń}} usuwa zapotrzebowanie z kontroli (to krok cofnięcia).

## Arkusze kalkulacyjne i biblioteka cen

Lista dostawcy może być skoroszytem Excela (.xlsx), a nie tylko CSV: odczytywany jest pierwszy arkusz, z tymi samymi nazwami kolumn. Formuły nigdy nie są wykonywane; odczytywana jest wartość zapisana w pliku.

Gdy dodano plik z cenami, {{ui:Ceny do biblioteki}} w oknie ustawia cenę materiału dla każdego wpisu [Biblioteki](topic:price-library), którego cenę zawiera plik: ta sama nazwa i ta sama jednostka (lub nieokreślona). Robocizna, naddatek, wysokość i zestawy pozostają bez zmian, a notatka wpisu mówi, z którego pliku pochodzi cena. Wpis w metrach nie jest wyceniany z listy w stopach, a wpis bez pasującej nazwy zostaje nietknięty; wiersz stanu podaje, ile pozycji pominięto ze względu na jednostkę. Przelicz ceny z Biblioteki, aby przenieść nowe ceny do tego przedmiaru.

## W panelu Problemy

Brak to ostrzeżenie, a długie oczekiwanie to uwaga, w panelu Problemy („Zapasy dostawcy”) wspólnym dla wszystkich kontroli. Możesz zaakceptować pozycję z podaniem powodu, a akceptacja zostanie zapisana w przedmiarze.

## Z asystentem

Jeśli w {{ui:Ustawienia}} zezwolisz asystentom, mogą odczytać kontrolę (supply_check). Dodanie pliku dostawcy zawsze wykonujesz Ty.

## Warto wiedzieć

Stany są tak aktualne, jak plik, który dodajesz. Aby go odświeżyć, dodaj plik ponownie: plik o tej samej nazwie zastępuje wcześniejszy.
