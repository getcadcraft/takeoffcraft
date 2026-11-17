---
title: Märkused, pilved ja esiletõstud
summary: Märgi joonistel küsimused ja muudatused märkmete, revisjonipilvede ja esiletõstudega, jälgi igaüht kui avatud, vastatud või suletud ning saada need märgitud PDF-is.
keywords: märgistus, märgistused, märkus, kommentaar, küsimus, RFI, pilv, revisjonipilv, esiletõst, staatus, avatud, vastatud, suletud, ülevaatus, märgistuste loend
from: 2b395c13
---

Märgistused on selleks, mida pead koguste arvestamise ajal meelde jätma või küsima: „kinnita aluse tüüp“, revisjonipilv muudetud seina ümber, esiletõstetud märkus plaanil. Need asuvad lehel staatusega, on loetletud ühes kohas ja trükitakse märgitud PDF-i. Neid **ei arvestata kunagi**: ei kogust ega maksumust.

## Lisa üks

Ava lehe kohal olevalt ribalt {{ui:Märgistus}} ja vali:

| Märgistus | Kuidas |
|---|---|
| {{ui:Märkus}} | Klõpsa kohta, kuhu see läheb, kirjuta märkus ja vali {{ui:Lisa}}. See kuvatakse ümmarguse nõelana, mille kõrval on esimene rida. |
| {{ui:Pilv}} | Klõpsa ühele nurgale, seejärel vastasnurgale ja kirjuta märkus (või jäta tühjaks). Kasti ümber tuleb sakiline revisjonipilv. |
| {{ui:Esiletõst}} | Klõpsa kahele nurgale: läbipaistev kollane kast, märkusega, kui soovid. |

{{key:Esc}} pärast esimest nurka tühistab. Tööriist jääb sisse järgmise jaoks; {{key:V}} viib tagasi {{ui:Vali}} juurde.

## Staatus ja muutmine

Vali märgistus klõpsuga {{ui:Vali}} tööriistaga. Parempoolne paneel näitab **Märgistust**: selle liiki ja lehte, selle **Staatust** — Avatud, Vastatud või Suletud — ja teksti, mida saab muuta. {{key:Delete}} (või {{ui:Kustuta}}) eemaldab selle; {{key:Mod+Z}} toob selle tagasi.

Märkuse nõel on avatuna oranž, vastatuna sinine ja suletuna hall; suletud pilv muutub halliks.

## Loend

Parempoolse paneeli **Märgistused** loetleb kõik koguste arvestuse märgistused koos staatusega ja ütleb, mitu on veel avatud. Märgi **Ainult avatud**, et näha, mis on veel lahendamata. Klõpsa reale, et minna selle lehele ja seda valida.

## Jaga neid

- {{ui:Märgitud PDF}} joonistab need lehtedele: esiletõstud, pilved ja nõelad, igaüks kastiga, mis näitab staatust suurtähtedes (AVATUD, VASTATUD, SULETUD) ja teksti. Lehed, millel on märgistused, aga ei ole koguste arvestuse märke, on samuti kaasatud.
- {{ui:XLSX}} lisab töölehe **Märgistused**: leht, liik, staatus ja tekst, igaühest üks rida.
- Need salvestatakse faili `.takeoff.json` ja [PDF-i, mille sees on koguste arvestus](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
