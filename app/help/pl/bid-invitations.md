---
title: Wyślij pakiet do wyceny
summary: Wyślij pakiet do podwykonawców e-mailem, pozwól im wpisać ceny na stronie bez konta, trzymaj ceny zapieczętowane do godziny otwarcia i przenieś je do arkusza wyrównania.
keywords: wyślij do wyceny, zaproszenie, zaproszenie do wyceny, oferent, podwykonawca, zaproś, e-mail, prośba o cenę, zapieczętowane oferty, otwarcie ofert, dzień ofert, spóźniona oferta, termin, przypomnienie, dane podwykonawców, ubezpieczenie, kwalifikacje, csv, połącz, arkusze pdf
from: fb314b2c
---

{{ui:Eksport}} › {{ui:Pakiety ofertowe i wyrównanie…}} › {{ui:Wyślij do wyceny…}} wysyła jeden pakiet do wybranych osób. Strona internetowa wysyła każdej z nich e-mailem link; otwierają stronę, widzą zakres i wpisują cenę za każdą linię. Ceny widzisz w arkuszu wyrównania, gotowe do porównania ([Pakiety ofertowe i wyrównanie ofert](topic:bid-leveling)).

:::note
**Wysyłanie nie jest jeszcze otwarte dla wszystkich.** Podczas testów działa dla kont, które zespół CadCraft włączył; jeśli twojego konta to nie dotyczy, okno dialogowe to powie. Strona oferenta działa dla każdego wysłanego zaproszenia.
:::

## Zanim wyślesz

- Potrzebujesz konta CadCraft ze zweryfikowanym adresem e-mail. TakeoffCraft w przeglądarce prosi o **Połącz**: otwiera się karta na getcadcraft.com, naciskasz Połącz, a ta karta dostaje logowanie ważne przez 30 dni, tylko do pakietów ofertowych, do chwili zamknięcia karty TakeoffCraft. Możesz to usunąć w dowolnym momencie na stronie zabezpieczeń. Okno Studio nie może jeszcze wysyłać.
- Nadaj każdej pozycji numer CSI: pakiet to pozycje jednego działu CSI ([Twórz pozycje przedmiaru](topic:create-items)).
- Ustaw skalę arkuszy, na których leżą znaczniki pakietu, aby ilości widziane przez oferentów były zmierzone.

## Wyślij pakiet

1. Wybierz {{ui:Wyślij do wyceny…}} pod pakietem.
2. Wpisz tytuł, projekt, opcjonalną wiadomość oraz **termin** w swojej strefie czasowej.
3. Zostaw zaznaczone **Zachowaj ceny zapieczętowane**, aby ukryć wszystkie ceny do **godziny otwarcia** (nie wcześniej niż termin), albo odznacz je, aby widzieć ceny w miarę ich napływania.
4. Zostaw zaznaczone pole arkuszy, aby wysłać PDF arkuszy z naniesionymi znacznikami pakietu. Twoje ceny nigdy nie trafiają do wysyłki: tylko nazwy pozycji, numery CSI, ilości, jednostki i nazwy arkuszy.
5. Wpisz osoby do zaproszenia, po jednej w wierszu, jako `Imię <imie@firma.com>` lub sam adres, albo zaznacz osoby z rekordów podwykonawców. Do 60 naraz, 100 na pakiet.
6. Wybierz {{ui:Wyślij zaproszenia}}. Każda osoba dostaje jeden prosty e-mail z twoim imieniem i adresem, terminem i linkiem; odpowiedzi trafiają do ciebie.

Okno mówi, ile wysłano, i wymienia każdego pominiętego: już zaproszonego do tego pakietu, poproszonego o nieotrzymywanie zaproszeń do wycen, z nieprawidłowym adresem lub przekraczającego limit wysyłki.

## Co widzi oferent

Strona pod długim, prywatnym linkiem, bez logowania. Pokazuje, kto go zaprosił, termin, czy ceny są zapieczętowane, twoją wiadomość i PDF arkuszy, a potem każdą pozycję z jej ilością. Przy każdej pozycji oferent wpisuje cenę albo zaznacza **Nie wliczone** i może dodać notatkę; notatki dodaje do całego pakietu oraz do 3 plików (oferta, pismo o zakresie, certyfikat). Może zapisać ponownie i zmienić ceny do chwili otwarcia albo **odmówić**, z polem, w którym prosi CadCraft, by nie wysyłał mu już zaproszeń do wycen.

## Oferty zapieczętowane i otwarcie

Przed godziną otwarcia **nikt** nie widzi ceny, notatki ani pliku: ani ty, ani w TakeoffCraft, ani na stronie Pakiety ofertowe. Widzisz, kogo zaproszono i czy odpowiedział. W godzinie otwarcia wszystkie oferty pokazują się naraz. Oferta zapisana po terminie jest przyjęta i oznaczona **spóźniona**; wyrównanie nadal ją wymienia, a spóźnienie jest oznaczeniem, a nie rozstrzygnięciem. Po otwarciu oferent nie może zmienić ceny. Bez zapieczętowania oferta jest ostateczna po terminie.

## Pobierz ceny

{{ui:Pobierz ceny}} pyta stronę internetową i dodaje każdą odpowiedź do pakietu jako ofertę, oznaczoną **web**. TakeoffCraft pyta też po cichu za każdym razem, gdy otwierasz okno, dopóki jest połączony. Oferta, której oferent zapisał nową wersję, aktualizuje się w miejscu; oferta, którą edytowałeś, zostaje tak, jak ją zostawiłeś, dopóki oferent nie przyśle nowej wersji. Każde pobranie to jeden krok, który cofa {{key:Mod+Z}}. Pozycje pominięte w ofercie trafiają jako zakres, którego oferta nie obejmuje, więc wyrównanie uzupełni je według twojego własnego kosztu.

## Na stronie internetowej

Twoje konto ma dwie dodatkowe strony, gdy możesz wysyłać. **Pakiety ofertowe** wymienia wysłane pakiety, kto odpowiedział, spóźnione oferty i pliki; pozwala wysłać przypomnienie (nowy link; stary przestaje działać), zamknąć, ponownie otworzyć lub anulować pakiet. **Podwykonawcy** prowadzi rekord dla każdej firmy: kontakty, branże, odpowiedzi kwalifikacyjne (lata na rynku, zdolność gwarancyjna (bonding), EMR, bezpieczeństwo, związek albo otwarty zakład (open shop), referencje), daty wygaśnięcia licencji i ubezpieczenia, oznaczane po upływie lub w ciągu 30 dni, oraz ich dawne oferty. Importujesz i eksportujesz rekordy jako CSV: jeden wiersz na kontakt, z kolumnami, jakie pokazuje eksport; firma, którą już masz, jest aktualizowana, nigdy nie powielana.

## Kto co widzi i jak długo

Ceny, notatki i pliki oferenta trafiają do ciebie i do zespołu CadCraft, który prowadzi stronę. Są przechowywane przez 24 miesiące po terminie, a pliki przez 180 dni; potem są usuwane. Adres e-mail oferenta to ten, który wpisałeś; jest używany tylko do wysłania zaproszenia i przypomnień do niego. Jeden adres dostaje najwyżej 3 zaproszenia dziennie od wszystkich razem, a ty możesz wysłać do 200 dziennie.

## Jeszcze nie zbudowano

Aneksy (addenda), listy o przyznaniu, podpisany arkusz zakresu dla każdego oferenta oraz automatyczne przypomnienia przed upływem daty ubezpieczenia nie są jeszcze zbudowane. Zobacz [Jeszcze nie zbudowano](topic:not-built-yet).
