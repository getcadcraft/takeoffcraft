---
title: Tuo määriä IFC 4.3 -tiedostosta
summary: Avaa IFC 4.3 -tiedosto tiestä, rautatiestä, sillasta tai maansiirtotyöstä ja saat lukumäärän luokittain sekä tiedoston ilmoittamat pituudet, pinta-alat ja tilavuudet tyypitettyinä määrinä.
keywords: ifc, ifc4x3, ifc 4.3, tie, rautatie, silta, päällyste, reunakivi, pinnoitekerros, maansiirto, laakeri, infrastruktuuri, määrät, bim, civil, tyypitetyt määrät
from: 6b08c2c4
---

IFC 4.3 -tiedosto voi sisältää teitä, rautateitä, siltoja, merirakenteita ja niiden osia: päällysteitä, pinnoitekerroksia, reunakiviä, kiskoja, maansiirtoja, laakereita, paaluja ja muuta. TakeoffCraft lukee ne ja muuttaa tyypitetyiksi määriksi, joita voit hinnoitella.

## Avaa tiedosto

1. Valitse {{ui:Avaa piirustukset}} ryhmästä {{ui:Tiedosto}}, tai paina {{key:Mod+O}}.
2. Valitse IFC-tiedosto (voit valita sen PDF-tiedostojen kanssa), tai pudota se TakeoffCraftiin.

Jokaiselle luokalle ja ennalta määritetylle tyypille tehdään yksi tyypitetty määrä, esimerkiksi ”Pavement (flexible): count”, ja kun tiedosto ne ilmoittaa, myös ”length” yksikössä m, ”area” yksikössä m² ja ”volume” yksikössä m³. Kunkin nimikkeen huomautus kertoo, kuinka monta elementtiä laskettiin ja kuinka monella ei ollut määrää. Saman nimisen uudemman tiedoston avaaminen päivittää nämä määrät sen sijaan, että lisäisi uusia.

## Mitä se ei tee

- Se lukee tiedoston mukana olevat määräjoukot (IfcElementQuantity). Se ei mittaa 3D-muotoja, joten elementti ilman määräjoukkoa lasketaan, mutta se ei lisää pituutta, pinta-alaa eikä tilavuutta.
- Luetaan vain IFC 4.3:n infrastruktuuriluokat. Rakennustiedostoa (seinät, ovet, laatat) ei muunneta tässä määriksi; tiedosto, joka ei ole IFC 4.3, kertoo sen eikä tuo mitään.
- Yksiköt ovat tiedoston omat, muunnettuna metreiksi.
