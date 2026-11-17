---
title: Începerea unei antemăsurători noi
summary: Ștergeți totul și începeți o antemăsurătoare goală fără a reîncărca pagina, după ce ați salvat mai întâi lucrarea.
keywords: nou, antemăsurătoare nouă, golire, resetare, pornire de la zero, gol, închidere PDF-uri, lucrarea următoare
from: 16d392a4
---

{{ui:New}} închide fiecare PDF și începe o antemăsurătoare goală pe aceeași pagină.

1. Salvați antemăsurătoarea curentă dacă doriți să o păstrați: {{ui:Save takeoff}} sau {{key:Mod+S}}.
2. Alegeți {{ui:New}} din grupul {{ui:File}}.
3. Dacă există modificări nesalvate, TakeoffCraft întreabă **Antemăsurătoare nesalvată**: alegeți {{ui:Save takeoff first}} (descarcă proiectul, apoi golește), {{ui:Discard changes}} sau {{ui:Cancel}}.
   Fereastra revine la starea goală: fără PDF-uri, fără articole, fără marcaje, fără scări. Bara de stare spune: „Antemăsurătoare nouă. Deschideți PDF-uri pentru a începe.”

Ce se golește:

- fiecare PDF deschis, foile și miniaturile sale,
- articolele, ansamblurile, marcajele și scările,
- zoom-ul și poziția fiecărei foi,
- istoricul anulărilor (nu puteți anula {{ui:New}}),
- modul arc și orice căutare sau revizuire de numărare automată.

Fișierele de pe disc nu sunt atinse. Pentru a relua vechea antemăsurătoare, deschideți-i `.takeoff.json` și PDF-urile: vezi [Salvarea și redeschiderea unei antemăsurători](topic:save-and-reopen).

:::note
Fiecare antemăsurătoare nouă începe fără articole. Pentru a le aduce, copiați-le mai întâi: {{ui:Copy item}} sub {{ui:Items}} (sau copiați marcajele, care poartă articolele lor), apoi {{ui:Paste}} în antemăsurătoarea nouă. Vezi [Copierea, lipirea și duplicarea marcajelor](topic:copy-paste). Pentru articolele pe care le folosiți la fiecare lucrare, păstrați-le în [biblioteca de prețuri](topic:price-library) și adăugați-le de acolo, sau adăugați un [pachet de lucrări](topic:trade-packs).
:::
