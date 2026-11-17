---
title: Zapisywanie i ponowne otwieranie przedmiaru
summary: Zapisz przedmiar jako projekt .takeoff.json, otwórz go ponownie z tymi samymi PDF-ami i sprawdź, co się dzieje, gdy PDF brakuje lub się zmienił.
keywords: przedmiar w PDF, osadzenie, załącznik, zapis, otwarcie, ponowne otwarcie, projekt, takeoff.json, wznów, kontynuuj, poprawiony PDF, zmieniony PDF, brakujący PDF, kopia zapasowa, automatyczny zapis, odzyskiwanie, awaria
from: bd5080a6
---

Przedmiar zapisuje się jako mały plik projektu, `(nazwa).takeoff.json`. Zawiera pozycje, zestawy, stawki, skalę każdego arkusza i każde oznaczenie. **Nie** zawiera PDF-ów; odnajduje je ponownie po ich zawartości.

## Zapis

1. Wybierz {{ui:Save takeoff}} w grupie {{ui:File}} albo naciśnij {{key:Mod+S}}.
   Przeglądarka pobiera `(nazwa).takeoff.json`. Pasek stanu pisze „Zapisano (nazwa).takeoff.json. Otworzy się ponownie na tych samych PDF-ach (są dopasowywane po zawartości).”
2. Przenieś plik obok PDF-ów zlecenia, aby oba były razem.

Każdy zapis pobiera nowy plik. Przeglądarka może nazwać drugi plik `(nazwa) (1).takeoff.json`; zachowaj najnowszy.

Nazwa pochodzi od pierwszego PDF-a otwartego w tym przedmiarze.

:::note
{{ui:Save takeoff}} nadal jest jedynym sposobem, by zachować przedmiar jako plik. Podczas pracy TakeoffCraft zachowuje też kopię odzyskiwania w tej przeglądarce (patrz niżej), a zapis w chmurze nie jest jeszcze dostępny. Jeśli spróbujesz zamknąć kartę z niezapisanymi zmianami, przeglądarka zapyta, czy opuścić stronę.
:::

## Zachowaj przedmiar w PDF-ie

{{ui:Export}} › {{ui:PDF with the takeoff inside}} pobiera kopię każdego otwartego PDF-a, nazwaną np. `Plans (with takeoff).pdf`, która zawiera cały przedmiar jako załącznik: pozycje, oznaczenia, skale, obszary oferty, wszystko, co zawiera `.takeoff.json`. Jej strony nie są zmieniane, więc wygląda i drukuje się jak oryginał, a inne czytniki PDF wyświetlają przedmiar wśród załączników.

Otwórz ten PDF w TakeoffCraft (dowolnym sposobem otwierania PDF-ów), a zapyta: **Ten PDF ma przedmiar w środku**. Wybierz {{ui:Open the takeoff}}, aby go odzyskać, albo {{ui:Just the PDF}}, aby otworzyć tylko rysunek. Kopia reprezentuje PDF, z którego powstała, więc `.takeoff.json` zapisany z dowolnej z nich otworzy się na obu.

Przy kilku PDF-ach każda kopia zawiera cały przedmiar; otwórz je razem. Ponowny zapis z kopii zastępuje przedmiar w niej, nie dodaje drugiego. Plik `.takeoff.json` nadal jest tym, który należy zachować: jest mały, a to on zapisuje automatyczny zapis i aplikacja desktopowa.

## Jeśli karta lub przeglądarka się zatrzyma

Kilka sekund po każdej zmianie TakeoffCraft zachowuje kopię przedmiaru w pamięci tej przeglądarki, razem z jego PDF-ami, gdy mieszczą się w 64 MB lub mniej. Nic nie jest przesyłane. Gdy zapiszesz przedmiar, zaczniesz nowy albo otworzysz inny projekt, kopia znika.

Jeśli karta ulegnie awarii, przeglądarka lub komputer się zatrzyma albo wyjdziesz z niezapisanymi zmianami, następnym razem, gdy otworzysz TakeoffCraft, zapyta **Odzyskać pracę?** i wyświetli przedmiar wraz z nazwą. Wybierz **Odzyskaj**, aby go przywrócić: pozycje, oznaczenia i skale wrócą, a jego PDF-y otworzą się ponownie, jeśli je zachowano. Pasek stanu pisze „Odzyskano (nazwa). Nie jest jeszcze zapisany w pliku: zapisze go Zapisz przedmiar.” Gdy PDF-y były zbyt duże, by je zachować, otwórz je ponownie; oznaczenia pojawią się na ich arkuszach. Więcej: [Odzyskiwanie pracy](common:recover).

## Ponowne otwarcie

1. Otwórz TakeoffCraft.
2. Upuść plik `.takeoff.json` i jego PDF-y razem na stronę. Albo wybierz {{ui:Open plans}} dla PDF-ów i {{ui:Open takeoff}} dla projektu, w dowolnej kolejności.
   Pasek stanu pisze „Otwarto (nazwa): 12 pozycji, 340 oznaczeń.” Każdy arkusz odzyskuje swoją skalę, a oznaczenia pojawiają się na arkuszach.

Kolejność PDF-ów nie ma znaczenia, podobnie jak ich nazwy czy foldery. TakeoffCraft rozpoznaje każdy PDF po odcisku jego zawartości.

Jeśli otworzysz projekt, gdy bieżący przedmiar ma niezapisane zmiany, TakeoffCraft najpierw zapyta: **Anuluj**, **Odrzuć zmiany** albo **Najpierw zapisz przedmiar**. Otwarcie projektu zastępuje bieżące pozycje i oznaczenia; PDF-y, które są już otwarte, pozostają otwarte.

## Gdy brakuje PDF-a

Jeśli otworzysz projekt bez wszystkich jego PDF-ów, pasek stanu dopisuje „Otwórz jego PDF-y, aby zobaczyć oznaczenia (wymienione na liście arkuszy).” Pod listą arkuszy notatka mówi:

„Ten przedmiar obejmuje też PDF-y, które nie są otwarte. Ich ilości są liczone; otwórz je, aby zobaczyć i edytować ich oznaczenia:”

Po czym następują nazwy plików i rozmiary. Ich oznaczenia nadal liczą się we wszystkich sumach i eksportach, ze skalami, w których je zmierzono. Otwórz te PDF-y, aby zobaczyć i edytować oznaczenia.

## Gdy PDF się zmienił

Poprawiony PDF albo tylko ponownie zapisany przez inny program ma inną zawartość, więc dla TakeoffCraft to **inny plik**, nawet o tej samej nazwie. W notatce pod listą arkuszy taki plik pisze „plik o tej nazwie jest otwarty, ale jego zawartość się różni”.

- Oznaczenia zostają przypięte do starej wersji. Nadal się liczą, na swoich dawnych miejscach i skalach.
- Poprawiony PDF otwiera się jako nowe arkusze bez skali i bez oznaczeń.

Aby przenieść przedmiar na poprawkę, otwórz oba PDF-y i użyj {{ui:Compare}} na nowym arkuszu: [Porównaj zmieniony arkusz i przenieś przedmiar](topic:compare-revisions).

## Uszkodzony lub obcy plik

TakeoffCraft sprawdza każdy plik projektu przed jego użyciem. Możesz zobaczyć komunikaty:

- „(plik) nie jest projektem TakeoffCraft (nie jest poprawnym JSON-em).”
- „To nie jest plik projektu TakeoffCraft.”
- „Ten projekt zapisano w nowszej wersji TakeoffCraft. Otwórz go tam.”
- „3 oznaczenia uszkodzono i pominięto.” (reszta się otwiera)

## Historia cofania

Historia cofania zaczyna się od nowa po otwarciu projektu. Zapis jej nie czyści.
