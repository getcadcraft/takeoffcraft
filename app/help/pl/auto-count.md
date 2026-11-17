---
title: Auto liczenie symbolu
summary: Zaznacz jeden symbol ramką, pozwól TakeoffCraft znaleźć pozostałe na tym arkuszu lub na wszystkich otwartych arkuszach, przejrzyj dopasowania suwakiem i dodaj je jednym krokiem.
keywords: dowolny kąt, obrócony, odwrócony, inna skala, auto liczenie, automatyczne liczenie, wyszukiwanie symboli, znajdź symbole, wzorzec, szablon, dopasowanie, wykrywanie, narzędzie liczenia
from: fa68a6c1
---

{{ui:Auto liczenie}} znajduje każdą kopię symbolu po tym, jak zaznaczysz jeden. Następnie przeglądasz dopasowania na arkuszu i dodajesz zaakceptowane jako znaczniki liczenia. To pomocnik, a nie gwarancja: zawsze sprawdź przed dodaniem.

## Znajdź symbole

1. Utwórz albo wybierz pozycję liczenia pod {{ui:Pozycje}}.
2. Otwórz arkusz, na którym występuje symbol.
3. Wybierz {{ui:Auto liczenie}} na pasku narzędzi albo naciśnij {{key:S}}.
   Na górze arkusza pojawia się pasek z komunikatem: „Przeciągnij ramkę wokół jednego symbolu na tym arkuszu.”
4. Aby przeszukać wszystkie otwarte arkusze, a nie tylko ten, zaznacz {{ui:Przeszukaj wszystkie otwarte arkusze}}.
5. Powiększ widok, aby symbol był dobrze widoczny, a następnie przeciągnij ramkę ściśle wokół jednej jego kopii. Uwzględnij cały symbol; puste miejsce wokół niego zostanie przycięte.
   Pasek pokazuje „Wyszukiwanie…” z paskiem postępu i przyciskiem {{ui:Anuluj}}. Strona pozostaje responsywna: możesz powiększać, przesuwać i przechodzić między arkuszami. Wybranie innego narzędzia albo {{key:Esc}} anuluje wyszukiwanie.
6. Po zakończeniu dopasowania pojawiają się na arkuszu jako ramki w kolorze pozycji, a pasek pokazuje podsumowanie, na przykład „22 dopasowania, 19 do dodania (3 już policzone). Kliknij ramkę, aby ją odrzucić lub przywrócić.”

W {{ui:Auto liczenie}} przeciąganie po arkuszu rysuje ramkę zamiast przesuwać widok. Aby przesunąć widok, przytrzymaj {{key:Space}} i przeciągnij albo przeciągnij środkowym przyciskiem myszy.

## Przejrzyj dopasowania

- **Kliknij ramkę**, aby ją odrzucić. Odrzucona ramka jest przerywana i przekreślona. Kliknij ponownie, aby ją przywrócić.
- **Przesuń suwak {{ui:Dopasowanie}}** (od 50% do 95%, domyślnie 75%). Wyższa wartość pokazuje tylko bliskie dopasowania, niższa – luźniejsze. Suwak tylko filtruje to, co znaleziono; nie szuka ponownie.
- **Już policzone**: dopasowania w miejscu, gdzie jest już znacznik liczenia tej pozycji, startują jako odrzucone, abyś niczego nie policzył dwa razy.
- **Inne arkusze**: gdy szukasz na wszystkich otwartych arkuszach, przechodź między nimi listą arkuszy albo {{key:PageDown}} i przejrzyj każdy z nich. Podsumowanie mówi, na ilu arkuszach są dopasowania.

## Dodaj je

Wybierz {{ui:Dodaj}}. Przycisk pokazuje, ile ich jest, na przykład „Dodaj 19 znaczników”.
Znaczniki liczenia są dodawane w środku każdej zaakceptowanej ramki: „Dodano 19 znaczników liczenia do „Gniazdo podwójne”. Ctrl+Z usuwa je wszystkie.”

Cała partia to jeden krok cofnięcia, więc jedno {{key:Mod+Z}} ją usuwa.

Aby zrezygnować z przeglądu bez dodawania czegokolwiek, wybierz {{ui:Odrzuć}} albo naciśnij {{key:Esc}}. Wybranie innego narzędzia także go odrzuca.

## Co znajduje, a czego nie

TakeoffCraft porównuje rysunek, w pikselach, z zaznaczonym symbolem.

- Znajduje symbol obrócony o 0°, 90°, 180° i 270°. Zaznacz {{ui:Dowolny kąt (wolniej)}} na pasku auto liczenia przed narysowaniem ramki, aby znalazł go także pod dowolnym kątem: sprawdza co 15°, a potem dopracowuje każde znalezienie z dokładnością do półtora stopnia. Trwa to około sześć razy dłużej. Nie znajduje symbolu odbitego lustrzanie (chyba że symbol wygląda tak samo po odbiciu).
- Przy zaznaczonym {{ui:Przeszukaj wszystkie otwarte arkusze}} arkusz w innej skali jest przeszukiwany w rozmiarze, jaki symbol ma na nim: oprawa narysowana w skali na rzucie 1/8" jest o połowę mniejsza niż na rzucie 1/4" i nadal zostanie znaleziona. Taki arkusz jest też przeszukiwany w rozmiarze samej ramki, dla oznaczeń i symboli wydrukowanych w jednym rozmiarze na każdym arkuszu. Wymaga to skali na obu arkuszach; arkusz bez skali jest przeszukiwany tylko w rozmiarze ramki.
- Bardzo podobne symbole mogą dopasowywać się do siebie: gniazdo podwójne i poczwórne albo dwa oznaczenia oprawy różniące się jedną literą. Podnieś suwak, aż zostaną tylko właściwe, a resztę odrzuć ręcznie.
- Symbol przecięty innymi liniami, kreskowaniem lub tekstem dostaje niższą ocenę i może wymagać niższego ustawienia suwaka.
- Bardzo małe ramki są odrzucane: „Ta ramka jest za mała. Narysuj ją wokół całego symbolu.” Pusta ramka też jest odrzucana: „Ta ramka jest prawie pusta. Narysuj ją wokół symbolu.”
- Arkusz, który w rozmiarze potrzebnym dla tego symbolu byłby bardzo duży, jest pomijany, a podsumowanie mówi: „1 arkusz był zbyt duży, aby przeszukać go przy tym rozmiarze symbolu.” Zaznacz większy symbol albo policz ten arkusz ręcznie.

Jeśli nic nie znaleziono, pasek stanu pokazuje: „Brak dopasowań. Obniż suwak dopasowania albo dokładniej obrysuj symbol.”

## Szybkość i przeglądarki

Wyszukiwanie działa w tle, więc strona pozostaje responsywna, a w każdej chwili można je anulować. Każdy arkusz jest najpierw rysowany w roboczym rozmiarze na samej stronie, co może na chwilę spowolnić bardzo duży arkusz. Działa w aktualnych wersjach Chrome, Edge, Firefox i Safari. Przeszukiwanie wielu arkuszy trwa dłużej; pasek postępu przesuwa się arkusz po arkuszu. Offline auto liczenie działa, gdy pasek aplikacji pokazuje {{ui:Gotowe offline}}: {{ui:Zapisz do pracy offline}} zachowuje także przetwarzanie w tle. Zobacz [Praca offline](common:offline).
