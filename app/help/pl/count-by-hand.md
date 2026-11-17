---
title: Liczenie ręczne
summary: Klikaj każde drzwi, wyposażenie lub urządzenie, aby je policzyć, sprawdzaj liczby i popraw błędy.
keywords: liczenie, każdy, ea, wyposażenie, drzwi, urządzenia, symbole, zliczanie, liczenie kliknięciem, ręczne liczenie
from: 594f2980
---

Pozycja liczona zlicza rzeczy: drzwi, oprawy oświetleniowe, gniazdka, armaturę sanitarną. Każde kliknięcie na arkuszu dodaje jedno oznaczenie liczenia. Liczenie nie wymaga skali.

## Liczenie

1. Utwórz lub kliknij pozycję liczoną w {{ui:Pozycje}} (typ {{ui:Liczenie}}).
2. Wybierz {{ui:Liczenie}} na pasku narzędzi lub naciśnij {{key:C}}.
3. Kliknij każdą rzecz na arkuszu.
   Każde kliknięcie stawia kropkę w kolorze pozycji, a liczba pozycji rośnie o jeden.
4. Przejdź do następnego arkusza ({{key:PageDown}}) i licz dalej. Narzędzie pozostaje na {{ui:Liczenie}}.
5. Naciśnij {{key:Esc}}, gdy skończysz. TakeoffCraft wraca do {{ui:Zaznacz}}.

Przeciąganie nadal przesuwa widok, a kółko myszy nadal powiększa podczas liczenia, więc możesz poruszać się po arkuszu bez dodawania kropek.

:::tip
Kliknij pozycję liczoną, aby podświetlić jej kropki na każdym arkuszu. Lista arkuszy pokaże wtedy, ile ich jest na każdym arkuszu, co pomaga znaleźć arkusze, których jeszcze nie policzyłeś.
:::

## Poprawianie liczenia

- **Usunięcie kropki**: wybierz {{ui:Zaznacz}} ({{key:V}}), kliknij kropkę i naciśnij {{key:Delete}} lub wybierz {{ui:Usuń oznaczenie}}. Możesz też nacisnąć {{key:Mod+Z}} zaraz po błędnym kliknięciu.
- **Przesunięcie kropki**: zaznacz ją, a potem przeciągnij.
- **Policzone pod złą pozycją**: zaznacz kropkę i wybierz właściwą pozycję liczoną na liście **Pozycja** w sekcji **Zaznaczone oznaczenie**.

## Rozmiar kropek na ekranie i w PDF

Kropki zachowują jeden rozmiar na ekranie, bez względu na powiększenie. Aby go zmienić, otwórz {{ui:Ustawienia}}, kartę TakeoffCraft i wybierz **Rozmiar znacznika liczenia**: Bardzo mały, Mały, Średni (domyślny) lub Duży.

Eksport PDF ({{ui:Eksport}} › {{ui:PDF z oznaczeniami}}) rysuje każdą kropkę w tym samym rozmiarze na papierze, niezależnie od rozmiaru arkusza: przeglądarka pokazująca PDF w 100% wyświetli kropki tak duże, jak na ekranie. Jeśli kropki na arkuszu nadal by się stykały, eksport zmniejsza kropki tego arkusza, aby każda dała się odczytać.

## Wiele identycznych symboli

Dla symbolu powtarzającego się wiele razy na arkuszu wypróbuj [Auto liczenie](topic:auto-count): zaznacz jeden, sprawdź, co znalazł, i dodaj wszystkie jednym krokiem.

## Używanie liczb w formułach

Ilość pozycji liczonej to **N**. Składniki zestawu mogą jej używać, na przykład zawiasy `N * 3` dla drzwi. Zobacz [Zestawy kosztorysowe i formuły](topic:assemblies).
