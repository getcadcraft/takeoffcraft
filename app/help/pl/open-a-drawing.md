---
title: Otwieranie rysunku DWG lub DXF
summary: Otwórz plik rysunku jako arkusze (przestrzeń modelu i każdy układ), zacznij od skali podanej przez rysunek, pokazuj lub ukrywaj jego warstwy i dołączaj rysunki zewnętrzne (xref).
keywords: dwg, dxf, cad, rysunek, otwórz rysunek, układy, przestrzeń modelu, przestrzeń papieru, arkusze, jednostki, insunits, skala okna widokowego, xref, rysunek dołączony, warstwy, zamrożone, bez pdf, wydruk, bez wydruku
from: d8c3f504
---

TakeoffCraft otwiera rysunek DWG lub DXF tak jak PDF: nie musisz najpierw drukować go do PDF-a. Liczenie z samego rysunku jest dokładne, bo rysunek zna każdy obiekt. Zobacz [Liczenie z rysunku](topic:count-from-a-drawing).

## Otwórz rysunek

1. Wybierz {{ui:Otwórz PDF}} w grupie {{ui:Plik}} albo naciśnij {{key:Mod+O}}.
2. Wybierz plik DWG lub DXF. Możesz wybrać kilka, także razem z PDF-ami.
3. Wybierz przycisk Otwórz.

Możesz też upuścić pliki rysunków na TakeoffCraft, tak jak PDF-y. Nic nie jest wysyłane: przeglądarka czyta plik na twoim komputerze.

TakeoffCraft czyta DWG od AutoCAD 2000 do 2018 i ASCII DXF od R12 do 2018. Odrzuca binarny DXF (zapisz go jako ASCII albo jako DWG) oraz plik, który nie jest żadnym z nich, i mówi dlaczego. Uszkodzony plik otwiera się z tym, co dało się odczytać, a komunikat o tym informuje; jego liczby mogą być niepełne.

## Arkusze

- **Model** to przestrzeń modelu rysunku.
- **Każdy układ** (karta przestrzeni papieru) jest arkuszem, nazwanym wg swojej karty, w kolejności kart. Układ pokazuje model przez swoje okna widokowe, tak jak się drukuje.

Powiększanie, przesuwanie, przyciąganie do linii rysunku, znaczniki, notatki, {{ui:Kalibruj}} i reszta działają jak w PDF-ie. Arkusze rysunku są zapisywane w przedmiarze wg nazwy pliku i odcisku jego zawartości, jak PDF: otwórz ten sam plik ponownie, a znaczniki pojawią się na jego arkuszach.

## Skala

Arkusz zaczyna się od skali, którą podaje rysunek:

- **Układ** przyjmuje skalę swojego największego okna widokowego. Skala taka jak 1/2" = 1'-0" jest nazwana jako odpowiadająca jej gotowa skala; każda inna jest pokazana jako „Z okna widokowego rysunku: 1" = 2.5'". Jeśli układ ma okna w innych skalach, największe ustala skalę arkusza: sprawdź pozostałe przez {{ui:Sprawdź}}.
- **Model** przyjmuje jednostki rysunku (cale, milimetry, stopy…) jako swoją skalę: „Jednostki rysunku (cale)”.
- **Rysunek bez jednostek** (rysunek nigdy nie określił, czy jednostka to cal, czy milimetr) nie ma skali: arkusz pokazuje „Brak skali”, a pomiar na nim jest odrzucany, tak jak w PDF-ie bez skali. Liczenie nie wymaga skali. Ustaw ją przez {{ui:Kalibruj}}.

{{ui:Kalibruj}}, {{ui:Sprawdź}} i lista {{ui:Gotowa skala}} zmieniają skalę w każdej chwili i mają pierwszeństwo przed skalą rysunku. Lista gotowych skal jest wyłączona na Modelu, który nie ma rozmiaru papieru.

## Warstwy

{{ui:Warstwy}} na pasku arkusza wymienia warstwy rysunku z liczbą obiektów każdej z nich na tym arkuszu. Warstwy wyłączone lub zamrożone w pliku startują ukryte. Odznacz warstwę, by ją ukryć, albo zaznacz ukrytą, by ją pokazać: arkusz rysuje się ponownie, a to, co ukryte, jest pomijane w liczeniach i w obiektach oferowanych do {{ui:Zmierz rysunek}}, chyba że poprosisz o liczenie także ukrytych warstw. {{ui:Pokaż wszystkie}} pokazuje każdą warstwę; {{ui:Wróć do warstw z pliku}} cofa twoje zmiany. Wybory warstw należą do tej sesji, a nie do pliku przedmiaru.

## Rysunki dołączone (xref)

Rysunek, który łączy inne rysunki, pokazuje je tam, gdzie są wstawione. TakeoffCraft znajduje rysunek dołączony wśród **otwartych plików** po jego nazwie: otwórz rysunek główny i rysunek dołączony razem (albo jeden po drugim). Do tego czasu pasek stanu mówi, ile rysunków dołączonych nie znaleziono, a czego brakuje w ich rysunku, a liczenia to zaznaczają.

## Ograniczenia

- Obiekty, których TakeoffCraft nie umie odczytać ani umieścić (obiekty proxy, nieznane klasy), są wymienione w oknie liczenia wg typu; nigdy nie są odrzucane bez słowa.
- Bardzo duże rysunki są rysowane częściowo, a liczenia zatrzymują się na limicie, informując o tym. Otwórz w zamian wydruk PDF takiego rysunku.
- Rysunek jest rysowany na czarno i we własnych kolorach, przyciemnionych do białego papieru. Tabele stylów wydruku i przypisania piór nie są stosowane.
