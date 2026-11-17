---
title: Kopiowanie, wklejanie i duplikowanie oznaczeń
summary: Kopiuj oznaczenia wraz z pozycjami, wklejaj je tam, gdzie klikniesz, albo w tym samym miejscu na innym arkuszu, duplikuj, wycinaj, usuwaj i zaznaczaj wszystko, z jednym krokiem cofnięcia dla każdej operacji.
keywords: kopiuj, wklej, wytnij, duplikuj, wklej w miejscu, schowek, zaznacz wszystko, odznacz wszystko, wiele oznaczeń, typowe piętro, powtórz, ten sam plan, inny arkusz, kopiuj pozycję, duplikuj pozycję
from: e20e9024
---

Grupa {{ui:Edycja}} na pasku narzędzi zawiera {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}} i {{ui:Wklej}}. Jej menu {{ui:Więcej}} ma resztę, każde z własnym klawiszem: {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}} i {{ui:Odznacz wszystko}}. Każda z tych operacji cofa się jednym krokiem za pomocą {{key:Mod+Z}}.

## Zaznaczanie oznaczeń

1. Wybierz {{ui:Zaznacz}} ({{key:V}}) i kliknij oznaczenie.
2. Przytrzymaj {{key:Shift}} i kliknij kolejne oznaczenia, aby je dodać. {{key:Shift}} + kliknięcie na zaznaczonym oznaczeniu usuwa je z zaznaczenia.
3. Albo naciśnij {{key:Mod+A}} ({{ui:Zaznacz wszystko}}), aby zaznaczyć wszystkie oznaczenia na otwartym arkuszu.

Gdy zaznaczonych jest kilka oznaczeń, prawy panel pokazuje **Zaznaczone oznaczenia**: ile jest każdego rodzaju pozycji, z przyciskami {{ui:Kopiuj}}, {{ui:Duplikuj}}, {{ui:Wytnij}} i {{ui:Usuń oznaczenia}}. Uchwyty narożników pojawiają się tylko wtedy, gdy zaznaczone jest jedno oznaczenie. {{key:Esc}} ({{ui:Odznacz wszystko}}) czyści zaznaczenie.

## Kopiowanie i wklejanie tam, gdzie klikniesz

1. Zaznacz oznaczenia i naciśnij {{key:Mod+C}} ({{ui:Kopiuj}}). Oznaczenia są kopiowane razem z pozycjami, w tym z ich zestawem kosztorysowym, naddatkiem i kosztami.
2. Przejdź do arkusza, na którym mają się znaleźć (może to być ten sam arkusz).
3. Naciśnij {{key:Mod+V}} ({{ui:Wklej}}). Przerywana kopia podąża za wskaźnikiem.
4. Kliknij, gdzie ma trafić. Środek skopiowanych oznaczeń ląduje we wskaźniku.

{{key:Esc}} anuluje i nic nie dodaje. Wklejone oznaczenia zostają zaznaczone, więc {{key:Delete}} lub {{key:Mod+Z}} usuwa je ponownie.

W tym samym przedmiarze wklejone oznaczenia trafiają do **tych samych pozycji**, więc ich ilości dodają się do tych pozycji. W innym przedmiarze (w innej karcie lub po {{ui:Nowy}}) używana jest pozycja o tej samej nazwie i typie; w przeciwnym razie pozycja jest dodawana wraz z zestawem kosztorysowym. Jeśli nazwa jest zajęta przez pozycję innego typu, dodana pozycja nazywa się „(nazwa) (kopia)”.

Wklejone oznaczenia trafiają do obszaru ofertowego wybranego u góry panelu {{ui:Pozycje}} (lub do żadnego). Zobacz [Obszary oferty](topic:bid-areas).

## Wklejanie w miejscu

{{key:Mod+Shift+V}} ({{ui:Wklej w miejscu}}) umieszcza kopię dokładnie w tym samym miejscu na otwartym arkuszu, według jej położenia na stronie. Użyj tego do typowego piętra: zmierz poziom 2, skopiuj, otwórz poziom 3, wklej w miejscu.

Wklejanie w miejscu wymaga arkusza **tego samego rozmiaru** co ten, z którego kopiowałeś. Na arkuszu innego rozmiaru TakeoffCraft to zgłasza i niczego nie wkleja; zamiast tego użyj {{ui:Wklej}} i kliknij. Na arkuszu, z którego kopiowałeś, kopia ląduje na oryginałach.

## Skala musi się zgadzać

Długości i powierzchnie zależą od skali arkusza. Przebieg mierzący 10' przy skali 1/4" = 1'-0" miałby 20' na arkuszu w skali 1/8" = 1'-0". Dlatego TakeoffCraft wkleja przebiegi i powierzchnie tylko na arkusz o **tej samej skali** co arkusz, z którego pochodzą, i wyraźnie mówi, gdy tak nie jest:

- Otwarty arkusz nie ma jeszcze skali: najpierw nadaj mu ją ([Ustawianie skali](topic:set-the-scale)), potem wklej.
- Otwarty arkusz ma inną skalę: komunikat podaje obie skale. Wklejaj na arkusz w tej samej skali.
- Liczenia nie potrzebują skali: skopiowane liczenia wkleisz wszędzie.

## Duplikowanie

{{key:Mod+D}} ({{ui:Duplikuj}}) kopiuje zaznaczone oznaczenia i od razu kładzie kopię na wskaźniku; kliknij, gdzie ma trafić. Nic nie zostaje dodane, dopóki nie klikniesz, a {{key:Esc}} nie zostawia niczego. Duplikowanie nie zmienia tego, co wkleja {{ui:Wklej}}.

## Wycinanie i usuwanie

- {{key:Mod+X}} ({{ui:Wytnij}}) kopiuje zaznaczone oznaczenia i je usuwa. Wklej je tam, gdzie powinny być, albo cofnij wycięcie.
- {{key:Delete}} lub {{key:Backspace}} ({{ui:Usuń}}) usuwa zaznaczone oznaczenia bez kopiowania ich.

## Kopiowanie pozycji

Edytor pozycji (pod **Pozycje**) kończy się dwoma przyciskami:

- {{ui:Kopiuj pozycję}}: kopiuje pozycję wraz z zestawem kosztorysowym, naddatkiem i kosztami, bez oznaczeń. {{ui:Wklej}} dodaje wtedy jej kopię do tego przedmiaru lub do innego.
- {{ui:Duplikuj pozycję}}: od razu dodaje kopię, nazwaną „(nazwa) (kopia)”.

:::tip
Kopia zostaje na tym komputerze: jest przechowywana w tej karcie i w pamięci przeglądarki, więc inna karta TakeoffCraft może ją wkleić. Nic nie jest przesyłane, a schowek systemowy nie jest używany, więc nie można wkleić oznaczeń do innych programów.
:::

:::note
Kopia pochodzi z jednego arkusza naraz. Oznaczenia są wklejane bez zmian: obracanie ani odbijanie kopii nie jest jeszcze możliwe.
:::
