---
title: Rozpocznij przedmiar i otwórz zestaw arkuszy
summary: Otwórz jeden lub kilka PDF-ów jako zestaw arkuszy, poruszaj się po arkuszach i przechodź między nimi.
keywords: otwórz, zestaw arkuszy, kilka pdf, wiele plików, arkusze, rysunki, etykiety stron, lista arkuszy, nawigacja, upuść, przekazanie, otwórz w innej aplikacji, oznaczenia
from: ed434468
---

Zestaw arkuszy to często kilka PDF-ów: architektoniczne, konstrukcyjne, mechaniczne. TakeoffCraft otwiera je obok siebie jako jedną listę arkuszy, a jeden przedmiar może objąć wszystkie.

## Otwórz PDF-y

1. Wybierz {{ui:Otwórz PDF}} w grupie {{ui:Plik}} albo naciśnij {{key:Mod+O}}. (Pozostałe style menu nazywają to {{ui:Otwórz PDF-y…}}.)
2. W oknie wyboru pliku zaznacz każdy PDF zestawu. Przytrzymaj {{pick:mac=Command|windows=Ctrl|linux=Ctrl}}, by wybrać kilka, albo {{key:Shift}}, by wybrać zakres.
3. Wybierz przycisk Otwórz.
   Podczas odczytu każdego pliku pokazuje się komunikat „Otwieranie (nazwa)…”. Potem każda strona pojawia się w {{ui:Arkusze}}, a otwiera się pierwsza strona pierwszego nowego PDF-a.

Możesz też przeciągnąć PDF-y z {{pick:mac=Findera|windows=Eksploratora plików|linux=twojego menedżera plików}} i upuścić je w dowolnym miejscu w TakeoffCraft. Podczas przeciągania pojawia się ramka „Upuść PDF-y, rysunki DWG lub DXF albo plik .takeoff.json”.

Aby dodać więcej PDF-ów później, zrób to samo. PDF-y, które są już otwarte, są pomijane.

Ekran startowy wymienia też ostatnio otwarte PDF-y i przedmiary, w przeglądarkach, które pozwalają stronie ponownie otworzyć plik (Chrome i Edge). Kliknij jeden, by go otworzyć; przeglądarka może najpierw poprosić o zgodę. Zobacz [Twoje pliki](common:your-files).

:::note
Nic nie jest wysyłane. Przeglądarka czyta PDF-y na twoim komputerze, a znikają one z TakeoffCraft, gdy zamkniesz kartę albo wybierzesz {{ui:Nowy}}.
:::

## Rysunki obok PDF-ów

{{ui:Otwórz PDF}} przyjmuje także rysunki DWG i DXF, same lub razem z PDF-ami: przestrzeń modelu i układy każdego rysunku stają się arkuszami na tej samej liście. Zobacz [Otwieranie rysunku DWG lub DXF](topic:open-a-drawing), a potem [Liczenie z rysunku](topic:count-from-a-drawing).

## PDF przekazany z innej aplikacji

Inna aplikacja z zestawu może przekazać PDF, który ma otwarty: otwiera TakeoffCraft w nowej karcie, a PDF otwiera się tam, jakbyś go upuścił. Pasek stanu pokazuje: „Otwarto (nazwa), przekazano z (aplikacja). Oryginalny plik jest bez zmian.” Nic nie jest wysyłane; plik przechodzi przez pamięć tej przeglądarki i znika z niej po otwarciu.

Jeśli pasek stanu mówi, że PDF „nie dotarł”, karta czekała zbyt długo albo PDF był już otwarty w innej karcie: otwórz go przez {{ui:Otwórz PDF}}.

Odwrotnie: gdy MarkupCraft działa tam, gdzie jesteś, i może przyjąć plik, pasek arkusza pod rysunkiem ma przycisk {{ui:MarkupCraft}}. Otwiera on PDF arkusza na ekranie w MarkupCraft, w nowej karcie, by go przejrzeć i oznaczyć.

## Znajdź arkusz

- Przewiń listę {{ui:Arkusze}} po lewej i kliknij arkusz.
- Wpisz w **Szukaj arkuszy** na górze listy, by filtrować po numerze arkusza, nazwie pliku lub etykiecie strony. Licznik obok {{ui:Arkusze}} pokazuje „3 z 40”, gdy filtr jest włączony.
- Naciśnij {{key:PageDown}}, by przejść do następnego arkusza, i {{key:PageUp}}, by wrócić do poprzedniego. Idą za listą, tak jak jest przefiltrowana.

:::mac
Na klawiaturze Mac bez klawiszy Page Up i Page Down naciśnij fn wraz ze strzałką w górę lub w dół.
:::

## Jak nazywane są arkusze

- Strona, której PDF nadaje etykietę, na przykład `A-101`, jest nazwana tą etykietą.
- Strona bez etykiety (lub z etykietą będącą tylko jej numerem) jest nazwana „(nazwa pliku), strona (n)”.
- Gdy otwartych jest kilka PDF-ów, arkusze z etykietami także noszą nazwę pliku: „A-101 — Architektoniczny”.

Nazw arkuszy nie można jeszcze wpisać ręcznie.

## Rozejrzyj się po arkuszu

- Kręć kółkiem myszy, by powiększać w miejscu wskaźnika.
- Przeciągaj lewym lub środkowym przyciskiem, by przesuwać. Przy {{ui:Auto liczenie}} albo gdy zaczynasz na rogu znacznika, przytrzymaj {{key:Space}} i przeciągaj, albo przeciągaj środkowym przyciskiem.
- Naciśnij {{key:F}} albo wybierz {{ui:Dopasuj stronę}}, by zobaczyć cały arkusz; {{key:W}} albo {{ui:Dopasuj szerokość}} dopasowuje jego szerokość.
- Naciśnij {{key:Plus}} lub {{key:=}}, by powiększyć, i {{key:Minus}}, by pomniejszyć, wokół środka widoku.

Każdy arkusz zapamiętuje swoje powiększenie i położenie, dopóki pozostaje otwarty.

## Dalej

Zanim zmierzysz arkusz, potrzebuje on skali: [Ustaw skalę](topic:set-the-scale).
