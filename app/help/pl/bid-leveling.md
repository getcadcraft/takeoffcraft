---
title: Pakiety ofertowe i wyrównanie ofert
summary: Podziel kosztorys na pakiety według branż, wyślij zakres każdego pakietu podwykonawcom, porównaj oferty, które wrócą, na tym samym zakresie i użyj wybranej oferty jako ceny pakietu.
keywords: wyrównanie ofert, wyrównanie, pakiet ofertowy, podwykonawca, oferta podwykonawcy, zakres, zatyczka, branża, dział CSI, porównanie ofert, najniższa oferta, zestawienie ofert, oferent, przyznanie, wybrana oferta, użyj oferty, cena podwykonawcy
from: 856b3088
---

Generalny wykonawca wysyła zakres każdej branży podwykonawcom i porównuje to, co wraca. TakeoffCraft robi oba kroki z przedmiaru: otwórz {{ui:Eksport}} › {{ui:Pakiety ofertowe i wyrównanie…}}.

## Pakiety

Jest jeden pakiet dla każdego działu CSI, którego używają twoje pozycje (pierwsze dwie cyfry {{ui:Numer CSI}} pozycji, zob. [Twórz pozycje przedmiaru](topic:create-items)). Pozycje bez numeru tworzą własny pakiet. Każdy pakiet pokazuje swoje pozycje, na ilu arkuszach leżą jego znaczniki oraz nasz własny koszt (materiał i robociznę przed narzutami, z oferty podstawowej).

Wybierz {{ui:Zakres CSV}}, aby pobrać to, co wysłać podwykonawcy: każdą pozycję z jej numerem CSI, ilością, jednostką i arkuszami, na których się znajduje. Nie ma w tym cen. Dla dostawców materiałów lista zapytania w skoroszycie zawiera listę części (zob. [Eksport kosztorysu](topic:export-estimate)).

## Wpisz oferty

1. W pustym wierszu pod pakietem wpisz nazwę oferenta i kwotę oferty, a następnie wybierz {{ui:Dodaj ofertę}}.
2. Jeśli oferta pomija część zakresu, otwórz jej listę {{ui:Pominięte}} i zaznacz te pozycje.
3. Aby poprawić nazwę lub kwotę, wpisz ją na nowo w tabeli; przycisk × usuwa ofertę.

Każda zmiana to jeden krok, który cofa {{key:Mod+Z}}, a oferty są zapisywane razem z przedmiarem.

## Jak wyrównuje się oferty

Oferty rzadko obejmują ten sam zakres. Wyrównanie uzupełnia każdą pominiętą pozycję **zatyczką** według naszego własnego kosztu, dzięki czemu każda oferta jest porównywana na całym pakiecie:

**Wyrównana = oferta + zatyczki**

Najniższa wyrównana oferta jest oznaczona **Najniższa**; przy remisie ta wpisana wcześniej. **Względem naszego kosztu** to wyrównana oferta minus nasz własny koszt pakietu: wartość ujemna oznacza, że oferta jest poniżej. Oferta, która wygląda najniżej, może przegrać, gdy policzy się brakujący zakres.

Skoroszyt dostaje arkusz **Wyrównanie ofert** z każdym pakietem, który ma oferty: nasz kosztorys, każdą ofertę, jej zatyczki, sumę wyrównaną i różnicę, jako żywe formuły, oraz to, co każda oferta pominęła.

## Użyj oferty jako ceny pakietu

Wybierz {{ui:Użyj}} przy ofercie, a stanie się ona ceną całego pakietu w twoim kosztorysie: własna wycena pakietu (pozycje, ich drugie warunki i części zestawów) wypada z sumy całego zlecenia, pozycje zostają jako ilości z twoimi stawkami dla odniesienia, a jedna pozycja, **Wybrana oferta**, niesie kwotę oferty. Pozycje pominięte w ofercie zostają po twoim własnym koszcie, który wyrównanie już uwzględniło jako zatyczkę. Wybierz inną ofertę lub tę samą ponownie, aby ją cofnąć; każde z tych działań to jeden krok, który cofa {{key:Mod+Z}}.

W podsumowaniu oferty oferty podwykonawców są jedną linią w koszcie: koszty ogólne, zysk i zabezpieczenie dolicza się do nich jak do każdego innego kosztu; podatku od sprzedaży (tylko od materiału) i obciążenia robocizny (od robocizny) już nie. Arkusz Kosztorys w skoroszycie niesie wybraną ofertę jako własny wiersz, a blok narzutów ją dolicza, jako żywe formuły. Lista materiałów pomija materiał przyznanego pakietu, bo dostarcza go podwykonawca.

Pakiet wewnątrz obszaru wariantu nie jest wyceniany ponownie: warianty i sumy częściowe obszarów nadal korzystają z twoich własnych cen.

## Oferty przychodzące e-mailem

Nie musisz wpisywać ofert ręcznie. {{ui:Wyślij do wyceny…}} pod pakietem wysyła każdemu podwykonawcy link do strony, na której wpisuje cenę za każdą linię; {{ui:Pobierz ceny}} ściąga to, co przysłali, do tej tabeli. Zobacz [Wyślij pakiet do wyceny](topic:bid-invitations).

:::note
Wpisywanie oferty ręcznie nadal działa, a oferta wpisana ręcznie i oferta ze strony stoją obok siebie. Oferty przychodzące ze strony są oznaczone **web** (albo **web, spóźniona**, gdy przyszły po terminie); ich cena zmienia się dopiero wtedy, gdy oferent przyśle nową wersję, więc twoje własne edycje zostają do tego czasu.
:::
