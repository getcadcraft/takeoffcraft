---
title: Aducerea unui tabel de etichete ca cantități
summary: Un tabel de etichete exportat din modelul clădirii (CSV) devine cantități tipizate în antemăsurătoare, câte una pentru fiecare etichetă, astfel încât numărătorile și suprafețele modelului stau alături de ce ați măsurat.
keywords: etichete, tabel de etichete, model de clădire, bimcraft, ifc, cantități, csv, tabel, import, cantitate tipizată
from: a60c19b6
---

{{ui:Etichete}} din bara de instrumente aduce un tabel de etichete pe care BimCraft l-a salvat ca fișier CSV. Fiecare etichetă distinctă devine o cantitate tipizată, același fel de cantitate în care se transformă debleul și rambleul din CivilCraft.

1. În BimCraft, realizați tabelul de etichete dorit și salvați-l ca CSV.
2. Alegeți {{ui:Etichete}} și selectați fișierul.
3. Spuneți ce coloană denumește linia ({{ui:Denumește linia după}}, de obicei eticheta) și care conține numărul ({{ui:Cantitate din}}). Cu {{ui:Numărare rânduri}}, fiecare rând contează ca unul.
4. Alegeți unitatea. O lungime în milimetri devine metri cu {{ui:Înmulțire cu}} 0.001.
5. {{ui:Adăugare cantități}}.

Rândurile cu aceeași etichetă sunt adunate. O celulă care nu este un număr este lăsată deoparte și numărată în rezumat. Aducerea din nou a aceluiași tabel actualizează cantitățile pe care le aveți deja, în loc să adauge altele; numele, tarifele și pierderile lor rămân ale dvs.

## De reținut

O cantitate tipizată nu este măsurată pe o foaie, deci nu are marcaje. Nimic nu este trimis nicăieri; fișierul este citit aici.
