---
title: Memoria prețurilor din lucrările anterioare
summary: TakeoffCraft reține tarifele folosite în antemăsurătorile anterioare, doar pe acest computer, astfel încât o antemăsurătoare nouă poate porni de la ce ați plătit data trecută. Vedeți-le, folosiți-le, uitați-le.
keywords: memoria prețurilor, prețuri, reține prețurile, ultima lucrare, lucrări anterioare, preț tipic, mediană, tarife, neprețuit, reprețuire, învățare dintr-o antemăsurătoare anterioară, uitare, bibliotecă
from: 7279f1a1
---

{{ui:Prices}} din bara de instrumente (semnul dolarului) deschide ce reține TakeoffCraft despre prețurile folosite. Este o listă simplă: pentru fiecare nume de articol, tarifele din ultimele lucrări. Ea este păstrată în acest browser (în Studio, în propria sa fereastră web), lângă biblioteca de prețuri, niciodată în fișierul unei antemăsurători, iar nimic nu este trimis nicăieri. Nu este un model antrenat.

## Ce se reține

Când salvați o antemăsurătoare, fiecare articol care are un preț și este folosit (are un marcaj sau o cantitate scrisă mai mare decât zero) este reținut sub numele și tipul său: tariful pentru material, tariful pentru manoperă, pierderea și unitatea. O lucrare înseamnă fișierele de planuri din care se face antemăsurătoarea, deci salvarea aceleiași antemăsurători din nou înlocuiește propriile sale prețuri, în loc să adauge o altă lucrare. Ultimele 12 lucrări sunt păstrate pentru fiecare nume.

Pentru a porni de la lucrările mai vechi, alegeți {{ui:Learn from a past takeoff…}} și selectați o antemăsurătoare salvată (.json). Articolele ei cu preț și folosite sunt reținute în același fel.

Numele se potrivesc când cuvintele lor se potrivesc, indiferent de majuscule sau de punctuație („2x4 Stud, 8 ft” și „2x4 stud 8 FT” sunt același lucru). Aceleași cuvinte pentru alt tip de articol (un articol liniar și un articol de numărare) nu înseamnă același preț.

## Folosirea pe o antemăsurătoare nouă

1. Creați articolele noii antemăsurători.
2. Alegeți {{ui:Prices}}. Sub {{ui:This takeoff}} vedeți fiecare articol care are un preț reținut, ce aveți acum pe el, tarifele ultimei lucrări, tarifele tipice (mijlocul lucrărilor reținute) și intervalul.
3. Alegeți {{ui:Use last}} sau {{ui:Use typical}} pe un articol sau {{ui:Stabilire prețuri pentru N articole fără preț din memorie}} pentru a completa fiecare articol care nu are încă preț, din ultima lucrare.

Fiecare folosire este un singur pas: {{key:Ctrl+Z}} o anulează. Un articol care are doar un nume asemănător (un nume în interiorul altuia) o spune, iar butoanele folosesc tarifele numelui asemănător. Un preț reținut pe bucată nu este pus niciodată pe un articol pe picior: fereastra spune că unitățile diferă și îl lasă neatins.

## Vedeți, schimbați, uitați

{{ui:Everything remembered}} listează fiecare nume cu tarifele sale și numărul de lucrări. Butonul cu coș de gunoi uită un nume; {{ui:Clear all prices}} le uită pe toate. Dezactivați {{ui:Remember my prices when I save a takeoff}} pentru a opri reținerea; ce este deja acolo rămâne până îl uitați. Antemăsurătoarele și biblioteca de prețuri nu sunt atinse niciodată.

## Cu asistentul

Dacă sunt permiși asistenții în Setări, ei pot citi ce este reținut pentru articolele antemăsurătorii (prices_list) și pot prețui articole din ea (prices_apply, care poate previzualiza mai întâi). Este aceeași listă ca în fereastră.
