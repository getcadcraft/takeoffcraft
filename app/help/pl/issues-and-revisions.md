---
title: Wydania, rewizje i dziennik zmian rysunków
summary: Pracuj z jedną historią wydań razem z modelem architekta: wczytuj wydania, zapisuj polecenia z budowy, rysunki warsztatowe i połączone modele przy wydaniu oraz czytaj dziennik zmian rysunków.
keywords: wydanie, rewizja, rewizje, dziennik zmian, dziennik zmian rysunków, rejestr rysunków, polecenie na budowie, rysunek warsztatowy, połączony model, przetarg, budowa, historia wydań, zestawienie ilości, przedmiar
from: 8d8f6e68
---

## Co zrobisz

Pracuj z tej samej historii wydań co reszta zespołu. Sprawdzaj, które arkusze wyszły w jakiej rewizji, i przypisuj to, co dzieje się na budowie, do wydania, którego dotyczy.

## Kroki

1. Otwórz **Wydania i rewizje**.
2. Wybierz **Wczytaj historię wydań** i wskaż plik `.issues.json` zapisany w BimCraft lub w innej aplikacji. Jego wydania i zapisy zostaną dodane do Twoich. Nic nie zostanie zastąpione.
3. Wybierz **Dodaj zapis** dla polecenia na budowie, rysunku warsztatowego, zestawu adnotacji, połączonego modelu lub notatki. Wskaż wydanie, którego dotyczy, oraz jego status. Wybrany plik jest zapisywany pod nazwą, rozmiarem i sumą SHA-256; sam plik zostaje tam, gdzie jest.
4. **Dziennik zmian rysunków** pokazuje jeden wiersz dla każdego arkusza i jedną kolumnę dla każdego wydania. Rewizja w nawiasach została wydana ponownie bez zmian.
5. **Pobierz dziennik zmian (CSV)** zapisuje wydania, tabelę arkuszy i zapisy. **Zapisz historię wydań** zapisuje plik, który odczytują inne aplikacje.

## Dobrze wiedzieć

- **Zarejestruj wydanie** rejestruje Twoje zmierzone arkusze, na przykład z zestawieniem ilości. **Zmiany od wydania** pokazuje, które arkusze zostały zmierzone ponownie po tym wydaniu.
- Historia jest zapisana w pliku przedmiaru. Każda zmiana cofa się jednym poleceniem Cofnij.
- Ponowne wczytanie tego samego pliku niczego nie dubluje. Gdy dwie kopie zawierają ten sam zapis, zostaje nowszy.
