---
title: Pakiety branżowe
summary: Dodawaj darmowe zestawy kosztorysowe dla branży do swojej biblioteki cen, usuwaj je jednym krokiem i udostępniaj własną bibliotekę jako pakiet.
keywords: pakiet branżowy, pakiet, zestawy kosztorysowe, szablony, pozycje startowe, elektryka, suchą zabudowę, konstrukcje szkieletowe, malowanie, beton, podłogi, murarstwo, dekarstwo, okładziny elewacyjne, ciesielstwo, instalacje sanitarne, hvac, izolacja, zagospodarowanie terenu, tarasy, generalny wykonawca, csi, masterformat, cc0, dodaj, usuń, udostępnij
from: d3c036be
---

**Pakiet branżowy** to zestaw gotowych pozycji dla jednej branży: każda z własną jednostką, wysokością lub głębokością, naddatkiem i **zestawem kosztorysowym** (assembly), czyli częściami i formułami, które zamieniają zmierzony odcinek, powierzchnię lub liczbę sztuk w materiały. Ściana z suchej zabudowy na przykład wnosi swoje profile, słupki, płyty, wkręty, taśmę i masę szpachlową.

Pakiety są dodawane do Twojej [biblioteki cen](topic:price-library), a stamtąd dodajesz ich pozycje do dowolnego przedmiaru.

## Dodaj pakiet

1. Otwórz {{ui:Biblioteka}} na górze panelu {{ui:Pozycje}}, a następnie {{ui:Pakiety branżowe…}}.
2. Wybierz {{ui:Jednostki}}: imperialne (LF, SF), metryczne (m, m²) lub obie. Każdy zestaw kosztorysowy jest dostępny w obu układach.
3. Wybierz {{ui:Dodaj}} obok pakietu.

Pozycje pakietu pojawią się w bibliotece, oznaczone nazwą pakietu. Aby ich użyć, zaznacz je w bibliotece i wybierz {{ui:Dodaj do przedmiaru}}.

:::note
**Pakiet nie wnosi cen.** Jego pozycje pokazują w bibliotece „ustaw swoją stawkę”. Stawki są Twoje: wpisz je w bibliotece lub w edytorze pozycji albo zaimportuj swój cennik jako CSV i użyj {{ui:Zaktualizuj ceny}}.
:::

Jeśli w bibliotece masz już pozycję o tej samej nazwie i typie, pakiet zostawia Twoją bez zmian. Ponowne dodanie pakietu zastępuje jego własne pozycje nową wersją.

## Usuń pakiet

W {{ui:Pakiety branżowe…}} wybierz {{ui:Usuń}} obok dodanego przez Ciebie pakietu, a następnie jeszcze raz, aby potwierdzić. Każda pozycja z niego pochodząca znika z biblioteki jednym krokiem. Pozycje już dodane do przedmiaru pozostają w tym przedmiarze.

## Co jest w pakiecie

Wybierz {{ui:Źródła i szczegóły}} pod pakietem, aby zobaczyć, na czym opierał się każdy zestaw kosztorysowy: przepisy budowlane, normy i poradniki montażu stowarzyszeń branżowych. W bibliotece najedź wskaźnikiem na pozycję, aby przeczytać jej źródła i założenia, takie jak rozstaw słupków czy wydajność farby. Sprawdź je z własną budową i kartami technicznymi swoich produktów, a tam, gdzie się różnią, zmień formuły (zob. [Zestawy kosztorysowe i formuły](topic:assemblies)).

Każdy pakiet jest oznaczony **Startowy: jeszcze nie sprawdzony przez kosztorysanta**, dopóki pracujący kosztorysanci go nie przejrzą.

Każda pozycja zawiera też numer CSI MasterFormat, na przykład `09 21 16`.

## Udostępnij bibliotekę jako pakiet

{{ui:Eksportuj jako pakiet…}} w bibliotece zapisuje ją jako plik pakietu (`.ccpack.json`), który każdy może dodać przez {{ui:Otwórz plik pakietu…}}. Domyślnie pomija pozycje pochodzące z pakietów, które dodałeś, i nie zawiera stawek. Zaznacz {{ui:Dołącz moje stawki jako przykładowe}}, aby wysłać również swoje stawki: trafią oznaczone regionem i datą, którą podasz, a osoba dodająca pakiet sama wybiera, czy z nich skorzystać.

Pliki pakietów to zwykłe dane, nigdy programy. TakeoffCraft sprawdza każdą część pliku przed użyciem i pomija to, czego nie potrafi odczytać.
