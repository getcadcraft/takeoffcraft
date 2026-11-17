---
title: Ce a învățat din antemăsurători
summary: TakeoffCraft păstrează simbolurile confirmate cu Numărare automată, seturile de condiții, articolele compuse cele mai folosite și șabloanele pe care le repetați pe fiecare pagină, toate în fișierul propriu al antemăsurătorii. Vedeți-le, folosiți-le, ștergeți-le.
keywords: învățare, învățat, asistent, reținere, simboluri, șabloane, ca la lucrarea anterioară, ultima lucrare, lucrarea anterioară, set de condiții, condiții, refolosire, articole compuse, cel mai folosit, sugestii, repetare pe fiecare pagină, fiecare pagină, cartuș, șablon, golire totală, uitare, confidențialitate
from: 54d99e99
---

TakeoffCraft devine mai rapid pe măsură ce faceți mai multe antemăsurători cu el. Învață **doar din ce acceptați**:

- simbolurile încadrate cu [Numărare automată](topic:auto-count) și apoi adăugate,
- seturile de condiții pe care le salvați,
- articolele compuse folosite (o dată pe lucrare),
- șabloanele de marcaje pe care le repetați pe fiecare pagină.

Este doar potrivire simplă pe foile proprii, aceeași căutare pe care o rulează Numărare automată. Nu este un model antrenat. Tot ce învață este păstrat **în fișierul acestei antemăsurători** (`.takeoff.json`), iar nimic nu este trimis nicăieri. Pentru a-l duce la lucrarea următoare, folosiți [Ca la lucrarea anterioară](topic:what-it-learned#same-as-last-job).

Alegeți {{ui:Învățat}} din bara de instrumente (becul, lângă {{ui:Numărare automată}}) ca să vedeți tot.

## Simboluri

Când încadrați un simbol cu {{ui:Numărare automată}} și alegeți {{ui:Adăugare}}, simbolul încadrat este păstrat, cu nivelul de potrivire acceptat.

- În {{ui:Învățat}}, alegeți {{ui:Găsire pe această foaie}} sau {{ui:Găsire pe toate foile}}. Se deschide revizuirea obișnuită a Numărării automate: faceți clic pe un chenar ca să îl lăsați afară, mutați glisorul, apoi adăugați. Nu se adaugă nimic până nu faceți asta.
- Când deschideți o foaie care nu are încă niciunul dintre simbolurile învățate, o bară de sus oferă {{ui:Găsire …}} pentru acesta. {{ui:Nu acum}} o ascunde pentru foaia respectivă.
- Dacă antemăsurătoarea nu are niciun articol cu acel nume, adăugarea marcajelor adaugă și articolul (un singur pas de anulare).
- Adăugarea din nou a simbolului aceluiași articol se socotește la cel pe care îl cunoaște; un simbol cu alt aspect este păstrat ca al doilea.
- Ca la Numărare automată, simbolul este găsit și în unghi drept și pe foi la altă scară.

## Seturi de condiții

Un set păstrează condițiile unei antemăsurători (articolele cu unitățile, prețurile, pierderile și articolele compuse), fără marcaje.

1. În {{ui:Învățat}}, alegeți {{ui:Salvare condiții ale acestei antemăsurători ca set…}} și dați-i un nume. Un set cu același nume este înlocuit.
2. Într-o antemăsurătoare care are setul, {{ui:Adăugare}} pune condițiile pe care nu le are încă. Condițiile cu același nume și tip sunt lăsate neatinse. Este un singur pas de anulare.

## Ca la lucrarea anterioară

Fișierul lucrării anterioare păstrează ce a învățat. Ca să porniți o lucrare nouă din el:

1. Deschideți planurile noi, apoi alegeți {{ui:Învățat}} › {{ui:Ca la lucrarea anterioară…}}.
2. Alegeți `.takeoff.json` al lucrării anterioare.
3. Bifați ce să aduceți: condițiile ei (doar cele pe care nu le are această antemăsurătoare) și ce a învățat (simboluri, seturi, articole compuse, șabloane). Apoi {{ui:Aducere}}.

Condițiile ei sunt păstrate și ca set, cu numele lucrării. Marcajele și cantitățile rămân în fișierul propriu. Totul este un singur pas de anulare.

## Articolele cele mai folosite

Un articol care are un articol compus se socotește folosit o dată pe lucrare, când are o cantitate și salvați antemăsurătoarea. O lucrare este setul de fișiere de plan de pe care se face antemăsurătoarea, deci salvarea din nou a aceleiași antemăsurători nu se numără de două ori. Lista de sub {{ui:Articolele compuse cele mai folosite}} pune primele articolele cel mai des folosite. Lasă afară pe cele pe care antemăsurătoarea le are deja. {{ui:Adăugare}} pune unul așa cum l-ați folosit ultima dată, cu toate părțile lui.

## Repetare pe fiecare pagină

Pentru marcaje identice pe fiecare pagină a unui set, precum numărarea unui cartuș sau un detaliu tipic:

1. Selectați marcajele de pe o foaie ([Selectarea marcajelor](topic:copy-paste#select-the-marks)).
2. În {{ui:Învățat}}, alegeți {{ui:Repetare marcajele selectate pe fiecare pagină…}}, dați un nume șablonului și confirmați.

Ele apar pe fiecare altă pagină deschisă **de aceeași dimensiune**, în același loc, într-un singur pas de anulare. Lungimile și ariile apar doar pe pagini cu aceeași scară; numărările apar pe orice pagină de acea dimensiune. O pagină care le are deja este sărită. Șablonul este păstrat, deci paginile deschise mai târziu primesc oferta în bară sau puteți folosi {{ui:Repetare pe fiecare pagină}} din listă.

## Vedeți-le, ștergeți-le

Tot ce s-a învățat este listat în {{ui:Învățat}}. Butonul coș șterge un singur lucru. {{ui:Golire totală}} șterge tot ce s-a învățat și lasă articolele și marcajele neatinse. Ambele pot fi anulate până închideți antemăsurătoarea și sunt salvate împreună cu ea.

Pentru a opri învățarea într-o antemăsurătoare, debifați {{ui:Învățare din această antemăsurătoare}}. Nu se mai învață nimic nou, iar ce este listat rămâne până îl ștergeți.

## Bine de știut

- Versiunile mai vechi ale TakeoffCraft deschid un fișier cu lucruri învățate normal. Ignoră acea parte și o elimină dacă salvează din nou fișierul.
- Un simbol învățat este o mică imagine a ceea ce ați încadrat, păstrată în fișier (câțiva KB fiecare).
- Simbolurile învățate sunt căutate ca la Numărare automată, deci se aplică aceleași limite: [Numărarea automată a unui simbol](topic:auto-count).
