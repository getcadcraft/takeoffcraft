---
title: Aloita uusi määrälaskenta
summary: Tyhjennä kaikki ja aloita tyhjä määrälaskenta lataamatta sivua uudelleen, ja varmista ensin, että työsi on turvassa.
keywords: uusi, uusi määrälaskenta, tyhjennä, nollaa, aloita alusta, tyhjä, sulje PDF-tiedostot, seuraava työ
from: 16d392a4
---

{{ui:New}} sulkee kaikki PDF-tiedostot ja aloittaa tyhjän määrälaskennan samalla sivulla.

1. Tallenna nykyinen määrälaskenta, jos haluat säilyttää sen: {{ui:Save takeoff}} tai {{key:Mod+S}}.
2. Valitse {{ui:New}} ryhmästä {{ui:File}}.
3. Jos on tallentamattomia muutoksia, TakeoffCraft kysyy **Tallentamaton määrälaskenta**: valitse {{ui:Save takeoff first}} (se lataa projektin ja tyhjentää sen), {{ui:Discard changes}} tai {{ui:Cancel}}.
   Ikkuna palaa tyhjään tilaansa: ei PDF-tiedostoja, ei nimikkeitä, ei merkintöjä eikä mittakaavoja. Tilarivi kertoo "Uusi määrälaskenta. Aloita avaamalla PDF-tiedostoja."

Tyhjennetään:

- jokainen avoin PDF, sen arkit ja pikkukuvat,
- nimikkeet, yhdistelmät, merkinnät ja mittakaavat,
- kunkin arkin zoomaus ja sijainti,
- kumoushistoria (et voi kumota {{ui:New}}-toimintoa),
- kaaritila sekä mahdollinen automaattilaskennan haku tai tarkistus.

Levyllä olevat tiedostot eivät muutu. Jos haluat ottaa vanhan määrälaskennan uudelleen käyttöön, avaa sen `.takeoff.json` ja PDF-tiedostot: katso [Tallenna ja avaa määrälaskenta uudelleen](topic:save-and-reopen).

:::note
Jokaisessa uudessa määrälaskennassa ei ole aluksi nimikkeitä. Jos haluat siirtää nimikkeitä, kopioi ne ensin: {{ui:Copy item}} kohdassa {{ui:Items}} (tai kopioi merkintöjä, jotka kuljettavat nimikkeensä mukanaan) ja liitä sitten {{ui:Paste}} uuteen määrälaskentaan. Katso [Kopioi, liitä ja monista merkinnät](topic:copy-paste). Nimikkeitä, joita käytät jokaisessa työssä, säilytä [hintakirjastossasi](topic:price-library) ja lisää ne sieltä, tai lisää [ammattialapaketti](topic:trade-packs).
:::
