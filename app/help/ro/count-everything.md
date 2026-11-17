---
title: Numărare totală în set
summary: Încadrați o dată o legendă de simboluri, iar TakeoffCraft numără fiecare simbol din ea pe fiecare foaie deschisă, într-o singură rulare. Fiecare numărare este o legătură către foaia sa, iar verificarea se face înainte ca ceva să fie adăugat.
keywords: numărare totală, legendă, legendă de simboluri, set complet, fiecare foaie, toate foile, fiecare ușă, fiecare corp, dispozitive, tabel, simboluri, numărare automată, numărare toate, set de planuri, 200 de foi, nivel de potrivire, asemănător
from: adc99744
---

{{ui:Numărare totală}} citește o legendă de simboluri și apoi numără fiecare simbol din ea pe fiecare foaie deschisă. Este {{ui:Numărare automată}} pentru o legendă întreagă, deodată. Este potrivire simplă a simbolurilor pe foile deschise, nu un model antrenat, iar nimic nu părăsește calculatorul. Verificați numărările înainte de a le adăuga: este un ajutor, nu o garanție.

## Numărarea unei legende

1. Deschideți planurile. Orice legendă de pe orice foaie este suficientă: simbolurile cu numele lor alături.
2. Alegeți {{ui:Numărare totală}} din bara de instrumente.
3. Trageți o casetă în jurul legendei, al simbolurilor și al numelor. Un titlu fără simbol alături (SYMBOL LEGEND) este lăsat deoparte de la sine.
   Panoul listează fiecare simbol cu imaginea sa și cu numele tipărit alături. Numele devine numele articolului, deci redenumiți-l aici dacă doriți.
4. Debifați orice simbol pe care nu doriți să-l numărați. Un simbol care nu poate fi căutat (prea mic sau gol) spune de ce.
5. Alegeți {{ui:Numărare pe N foi}}. O bară arată foaia care se caută; {{ui:Anulare}} oprește rularea. Pagina rămâne utilizabilă.

Simbolurile legendei în sine nu sunt numărate pe foaia sa. O foaie desenată la altă scară se caută la acea scară, iar simbolurile sunt găsite rotite în orice unghi drept.

## Verificarea numărărilor

- Fiecare simbol arată totalul său și, sub el, o legătură pentru fiecare foaie care are vreunul („E-103: 4”). Faceți clic pe una ca să mergeți la foaia respectivă. Găsirile sunt încadrate în culoarea articolului.
- **Faceți clic pe o casetă** ca să scoateți acea găsire. Este punctată și tăiată; faceți clic din nou ca s-o readuceți.
- **Mutați nivelul de potrivire** (de la 50% la 100%, pornind de la nivelul din {{ui:Setări}}). Valorile mai mari păstrează doar potrivirile apropiate. Glisorul doar filtrează ce s-a găsit; nimic nu se caută din nou.
- Două simboluri care se aseamănă (o priză dublă și una cvadruplă) pot potrivi același loc. Cea mai bună potrivire îl ia, iar panoul spune la câte locuri s-a întâmplat asta, ca să le verificați.
- O foaie prea mare pentru a fi căutată la dimensiunea simbolului este sărită, iar panoul spune asta.

## Adăugarea lor

Alegeți {{ui:Adăugare N marcaje}}. Fiecare simbol devine un articol de numărare cu un marcaj pe fiecare găsire. Un nume care este deja un articol de numărare existent este refolosit (nimic nu se dublează acolo unde ați marcat deja manual). Toată rularea este un singur pas: {{key:Ctrl+Z}} ia înapoi fiecare articol și marcaj.

Ce acceptați alimentează și {{ui:Învățat}}: simbolurile sunt reținute în fișierul antemăsurătorii pentru data viitoare.

## Cu asistentul

Dacă permiteți asistenți în {{ui:Setări}}, ei pot citi o legendă (legend_open), pot rula numărarea în fundal (legend_count_start, apoi legend_count_status), pot citi numărările (legend_count_result) și pot adăuga (legend_count_add, care poate întâi previzualiza ce ar adăuga). Este aceeași rulare pe care o vedeți în panou.

## Simboluri sub orice unghi

Bifați {{ui:Simboluri sub orice unghi}} înainte de numărare ca să găsiți și simboluri desenate sub un unghi care nu este drept (un dop de perete diagonal, un corp rotit să urmeze un acoperiș). Căutarea rotește atunci fiecare simbol la fiecare 15 grade; un simbol rotund necesită încă o căutare, iar un simbol care nu este rotund poate dura de până la șase ori mai mult. Lăsați-o debifată pentru planurile desenate drept.

## De reținut

- Are nevoie de simboluri desenate la fel ca în legendă. O legendă desenată la altă dimensiune decât foile este în regulă când scările foilor sunt stabilite; fără scări, simbolurile se caută la dimensiunea legendei.
- Un simbol cu un perete sau o linie lungă trasă prin el poate fi ratat, deoarece nu mai seamănă cu imaginea din legendă. Verificați găsirile de pe prima foaie înainte de a avea încredere în restul.
- O scanare fără text funcționează și ea: simbolurile sunt găsite după rândurile lor, iar numele se introduc manual.
