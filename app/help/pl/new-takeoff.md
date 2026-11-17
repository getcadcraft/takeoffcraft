---
title: Rozpocznij nowy przedmiar
summary: Wyczyść wszystko i rozpocznij pusty przedmiar bez przeładowywania strony, najpierw zabezpieczając swoją pracę.
keywords: nowy, nowy przedmiar, wyczyść, zresetuj, zacznij od nowa, pusty, zamknij PDF-y, następna praca
from: 16d392a4
---

{{ui:Nowy}} zamyka wszystkie PDF-y i rozpoczyna pusty przedmiar na tej samej stronie.

1. Zapisz bieżący przedmiar, jeśli chcesz go zachować: {{ui:Zapisz przedmiar}} albo {{key:Mod+S}}.
2. Wybierz {{ui:Nowy}} w grupie {{ui:Plik}}.
3. Jeśli są niezapisane zmiany, TakeoffCraft pyta **Niezapisany przedmiar**: wybierz {{ui:Najpierw zapisz przedmiar}} (pobiera projekt, a potem czyści), {{ui:Odrzuć zmiany}} albo {{ui:Anuluj}}.
   Okno wraca do stanu pustego: bez PDF-ów, bez pozycji, bez oznaczeń i bez skal. Pasek stanu mówi: „Nowy przedmiar. Otwórz pliki PDF, aby zacząć.”

Zostaje wyczyszczone:

- każdy otwarty PDF, jego arkusze i miniatury,
- pozycje, zestawy kosztorysowe, oznaczenia i skale,
- powiększenie i położenie każdego arkusza,
- historia cofania (nie możesz cofnąć {{ui:Nowy}}),
- tryb łuku oraz każde wyszukiwanie lub przegląd automatycznego liczenia.

Pliki na dysku nie są ruszane. Aby wrócić do starego przedmiaru, otwórz jego `.takeoff.json` i PDF-y: zobacz [Zapisywanie i ponowne otwieranie przedmiaru](topic:save-and-reopen).

:::note
Każdy nowy przedmiar zaczyna się bez pozycji. Aby przenieść pozycje, najpierw je skopiuj: {{ui:Kopiuj pozycję}} w Pozycjach (albo skopiuj oznaczenia, które niosą swoje pozycje), a potem {{ui:Wklej}} w nowym przedmiarze. Zobacz [Kopiowanie, wklejanie i duplikowanie oznaczeń](topic:copy-paste). Dla pozycji, których używasz przy każdej pracy, trzymaj je w [bibliotece cen](topic:price-library) i dodawaj stamtąd, albo dodaj [pakiet branżowy](topic:trade-packs).
:::
