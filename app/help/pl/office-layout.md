---
title: "Układ biura: grupowanie, sumy częściowe, tytuł i nagłówki z Domyślnych zasad"
summary: Włącz dodatek Domyślne zasady, a kosztorys, ilości wg arkusza, eksporty i to, co czyta asystent, przyjmą układ zestawienia twojego biura — ten sam, którego używają zestawienia w BimCraft.
keywords: standard biura, układ biura, domyślne zasady, dodatek, układ zestawienia, grupuj wg typu, grupuj wg arkusza, suma częściowa, sumy, tytuł, nagłówki, wielkie litery, układ kosztorysu, układ eksportu, ustawienia
from: cfd2f30a
---

## Co zrobisz

Sprawisz, że TakeoffCraft ułoży swoje tabele tak, jak twoje biuro je wydaje, bez ustawiania tego w każdym przedmiarze. Układ ustawia się raz, w Domyślnych zasadach, i obowiązuje we wszystkich aplikacjach na tym komputerze: to, co ustawisz w BimCraft lub CadCraft, używa TakeoffCraft, i odwrotnie.

## Kroki

1. Otwórz **Ustawienia › Dodatki** i włącz **Domyślne zasady**. Jest wyłączone, dopóki tego nie zrobisz; przy wyłączonym lub nieustawionym układzie TakeoffCraft działa dokładnie jak dotąd.
2. Otwórz **Ustawienia › Ogólne › Domyślne zasady** i znajdź **Układ zestawienia (standard biura)**:

| Zasada | Co robi w TakeoffCraft |
|---|---|
| Grupuj zestawienia wg | **Typ** grupuje kosztorys wg typu pozycji (Liniowy, Pole, Liczenie, Ilość wpisana). **Poziom** grupuje ilości wg arkuszy, według ich arkusza. **Pomieszczenie** i **Brak grupowania** nie grupują żadnej z tabel |
| Sumy w zestawieniach | **Suma częściowa pod każdą grupą i suma końcowa** dodaje sumę częściową pod każdą grupą. Suma całego zlecenia zawsze pozostaje |
| Tytuł zestawienia | Wiersz nad tabelą, na przykład `{schedule}: układ biura` |
| Nagłówki kolumn | Jak napisano, WIELKIMI LITERAMI albo Z Wielkimi Literami |

3. Zamknij Ustawienia. Tabele zmienią się od razu.

## Co przyjmuje układ

- **Ilości › Wg pozycji** i **Wg arkusza**: nagłówki grup, suma częściowa pod każdą grupą, tytuł i wielkość liter nagłówków. Wiersz pod tytułem mówi, które części ustawił standard biura. Wiersze są te same: nadal wpisujesz w nich stawki i naddatki oraz klikasz liczby, by zaznaczyć ich znaczniki. Komponent albo drugi warunek pozostaje pod swoją pozycją.
- **Wyeksportowany kosztorys** (CSV i XLSX): te same grupy i sumy częściowe. W skoroszycie suma częściowa to formuła `SUBTOTAL` nad swoją grupą, a suma końcowa też nią jest, więc nic nie liczy się dwa razy.
- **To, co czyta asystent**: `takeoff_estimate` i `takeoff_quantities` (wg arkusza) dodają blok `layout` z grupami, wierszami i sumami częściowymi oraz mówią, które części ustawiło biuro.

## Co zachowuje swoje

- **Ilości › Wg obszaru** podają własne grupowanie (wg obszaru oferty) i je zachowują.
- **Suma końcowa** zlecenia, narzuty w podsumowaniu oferty i warianty nie są grupowane na nowo.
- Grupowanie, którego tabela nie ma kolumny, zostaje pominięte: kosztorys nie ma poziomu, a ilości wg arkusza nie mają typu.

## Warto wiedzieć

- Zasady są przechowywane w tej przeglądarce dla każdej aplikacji CadCraft i przenoszą się w pliku Domyślnych zasad (**Zapisz do pliku** / **Wczytaj z pliku** w tym samym miejscu), więc biuro może udostępniać jeden plik.
- Kosztorys wyeksportowany jako CSV z grupami służy do czytania. Aby wczytać kosztorys z powrotem jako bibliotekę cen, wyeksportuj go bez ustawionego grupowania.
- Odpowiednik tego standardu w BimCraft to zestawienia, ustawienia i eksporty. TakeoffCraft nie ma jeszcze własnych zasad, więc nie ma sekcji Domyślne zasady w Ustawienia › TakeoffCraft.
