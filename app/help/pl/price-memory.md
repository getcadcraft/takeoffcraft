---
title: Pamięć cen z twoich poprzednich prac
summary: TakeoffCraft pamięta stawki, których użyłeś w poprzednich przedmiarach, tylko na tym komputerze, więc nowy przedmiar może zacząć od tego, co zapłaciłeś ostatnio. Zobacz, użyj, zapomnij.
keywords: pamięć cen, ceny, zapamiętaj ceny, ostatnia praca, poprzednie prace, typowa cena, mediana, stawki, bez ceny, przeliczenie, naucz się z poprzedniego przedmiaru, zapomnij, biblioteka
from: 7279f1a1
---

{{ui:Ceny}} na pasku narzędzi (znak dolara) otwiera listę tego, co TakeoffCraft pamięta o cenach, których używałeś. To zwykła lista: dla każdej nazwy pozycji stawki z twoich ostatnich prac. Jest przechowywana w tej przeglądarce (w Studio we własnym widoku przeglądarki) obok biblioteki cen, nigdy wewnątrz pliku przedmiaru, i nigdzie nie jest wysyłana. Nie jest to wytrenowany model.

## Co jest zapamiętywane

Gdy zapisujesz przedmiar, każda pozycja, która ma cenę i jest użyta (ma znacznik albo wpisaną ilość większą od zera), jest zapamiętywana pod swoją nazwą i typem: stawka materiału, stawka robocizny, naddatek i jednostka. Praca to pliki planów, z których przedmiar jest zrobiony, więc ponowne zapisanie tego samego przedmiaru zastępuje jego własne ceny zamiast dodawać kolejną pracę. Ostatnie 12 prac jest zachowywanych dla każdej nazwy.

Aby zacząć od swoich starszych prac, wybierz {{ui:Naucz się z poprzedniego przedmiaru…}} i wskaż zapisany przedmiar (.json). Jego wycenione, użyte pozycje są zapamiętywane w ten sam sposób.

Nazwy pasują, gdy pasują ich słowa, bez względu na wielkość liter i interpunkcję („2x4 Stud, 8 ft” i „2x4 stud 8 FT” to to samo). To samo słowo dla innego rodzaju pozycji (pozycja liniowa i pozycja liczenia) nie oznacza tej samej ceny.

## Użyj na nowym przedmiarze

1. Utwórz pozycje nowego przedmiaru.
2. Wybierz {{ui:Ceny}}. Pod {{ui:Ten przedmiar}} widzisz każdą pozycję, która ma zapamiętaną cenę, to, co ma teraz, stawki z ostatniej pracy, typowe stawki (środek zapamiętanych prac) i zakres.
3. Wybierz {{ui:Użyj ostatnich}} albo {{ui:Użyj typowych}} przy jednej pozycji albo {{ui:Wyceń N pozycji bez ceny z pamięci}}, by uzupełnić każdą pozycję bez ceny stawkami z ostatniej pracy.

Każde użycie to jeden krok: {{key:Ctrl+Z}} je cofa. Pozycja, która ma tylko podobną nazwę (jedna nazwa zawiera się w drugiej), zostaje o tym powiadomiona, a przyciski używają stawek podobnej nazwy. Cena zapamiętana za sztukę nigdy nie trafia na pozycję na stopę: okno mówi, że jednostki się różnią, i zostawia ją bez zmian.

## Zobacz, zmień, zapomnij

{{ui:Wszystko, co zapamiętano}} wymienia każdą nazwę z jej stawkami i liczbą prac. Przycisk kosza zapomina jedną nazwę; {{ui:Wyczyść wszystkie ceny}} zapomina wszystkie. Wyłącz {{ui:Zapamiętuj moje ceny przy zapisie przedmiaru}}, by przestać zapamiętywać; to, co już jest, zostaje, dopóki tego nie zapomnisz. Twoje przedmiary i biblioteka cen nigdy nie są ruszane.

## Z asystentem

Jeśli zezwolisz asystentom w Ustawieniach, mogą czytać, co jest zapamiętane dla pozycji przedmiaru (prices_list) i wyceniać z tego pozycje (prices_apply, który może najpierw pokazać podgląd). To ta sama lista co w oknie.
