---
title: Notatki, chmury i zakreślenia
summary: Oznaczaj pytania i zmiany na arkuszach notatkami, chmurami rewizji i zakreśleniami, śledź każde jako otwarte, odpowiedziane lub zamknięte i wysyłaj w PDF z oznaczeniami.
keywords: adnotacja, adnotacje, notatka, komentarz, pytanie, RFI, chmura, chmura rewizji, zakreślenie, status, otwarta, odpowiedziana, zamknięta, przegląd, lista adnotacji
from: 2b395c13
---

Adnotacje służą do tego, co trzeba zapamiętać lub zapytać podczas przedmiaru: „potwierdź typ podstawy”, chmura rewizji wokół zmienionej ściany, zakreślona notatka na planie. Leżą na arkuszu ze statusem, są wypisane w jednym miejscu i drukują się w PDF z oznaczeniami. Adnotacje **nigdy nie są liczone**: bez ilości, bez kosztu.

## Dodawanie

Otwórz {{ui:Adnotacja}} na pasku nad arkuszem i wybierz:

| Adnotacja | Jak |
|---|---|
| {{ui:Notatka}} | Kliknij, gdzie ma trafić, wpisz notatkę i wybierz {{ui:Dodaj}}. Pokazuje się jako okrągła pinezka z pierwszą linią obok. |
| {{ui:Chmura}} | Kliknij jeden narożnik, potem przeciwległy, i wpisz notatkę (lub zostaw ją pustą). Wokół prostokąta pojawia się falista chmura rewizji. |
| {{ui:Zakreślenie}} | Kliknij dwa narożniki: przezroczysty żółty prostokąt, z notatką, jeśli chcesz. |

{{key:Esc}} po pierwszym narożniku anuluje. Narzędzie zostaje włączone do następnej; {{key:V}} wraca do {{ui:Zaznacz}}.

## Status i edycja

Kliknij adnotację narzędziem {{ui:Zaznacz}}, aby ją zaznaczyć. Prawy panel pokazuje **Adnotację**: jej rodzaj i arkusz, jej **Status** — Otwarta, Odpowiedziana lub Zamknięta — oraz jej tekst, który możesz zmienić. {{key:Delete}} (lub {{ui:Usuń}}) usuwa ją; {{key:Mod+Z}} ją przywraca.

Pinezka notatki jest pomarańczowa, gdy jest otwarta, niebieska po odpowiedzi i szara po zamknięciu; zamknięta chmura staje się szara.

## Lista

**Adnotacje** w prawym panelu wypisują każdą adnotację przedmiaru wraz z jej statusem i podają, ile jest jeszcze otwartych. Zaznacz **Tylko otwarte**, aby zobaczyć, co trzeba jeszcze załatwić. Kliknij wiersz, aby przejść do jego arkusza i zaznaczyć adnotację.

## Udostępnianie

- {{ui:PDF z oznaczeniami}} rysuje je na stronach: zakreślenia, chmury i pinezki, każde z ramką podającą status wielkimi literami (OTWARTA, ODPOWIEDZIANA, ZAMKNIĘTA) i jej tekst. Strona z adnotacjami, ale bez znaczników przedmiaru, również jest uwzględniona.
- {{ui:XLSX}} dodaje arkusz **Adnotacje**: arkusz, rodzaj, status i tekst, po jednym wierszu na adnotację.
- Adnotacje są zapisane w `.takeoff.json` oraz w [PDF z przedmiarem w środku](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
