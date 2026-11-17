---
title: Sammenlign et revideret ark og flyt mængdeudtrækket
summary: Læg det gamle ark over revisionen, flugt dem, se hvad der er ændret, og flyt mængdeudtrækket over på det nye ark, med markeringerne til kontrol markeret.
keywords: revision, revideret, sammenlign, overlæg, gammel, ny, ændringer, tillæg, meddelelse, genudgivelse, flyt mængdeudtræk, overfør, bær over, flugt, markeret, kontrol
from: 3a1d9fe0
---

Når et ark genudgives, behøver du ikke tage det af igen. Åbn den gamle PDF og den nye, sammenlign de to ark, og flyt mængdeudtrækket over. TakeoffCraft markerer hver markering hvor tegningen er ændret, så du kontrollerer dem og beholder resten.

## Sammenlign

1. Åbn begge PDF'er: det gamle sæt og det reviderede ({{ui:Åbn tegninger}}; de kan være i én fil eller i flere).
2. Vis det **nye** ark.
3. Vælg {{ui:Sammenlign}} på arkbjælken under tegningen.
4. Vælg det gamle ark på listen. TakeoffCraft foreslår arket med samme nummer i den anden PDF, eller samme side. Vælg **Sammenlign**.

Den gamle tegning ligger nu over den nye i rødt. Hvor de to stemmer overens, ligger de røde linjer på de sorte; hvor de adskiller sig, ser du røde linjer alene (fjernet) og sorte linjer alene (tilføjet). En bjælke nederst på arket rummer trinene nedenfor; {{key:Esc}} eller {{ui:Luk}} afslutter sammenligningen.

## Flugt dem

Reviderede ark tegnes ofte lidt skævt: flyttet på siden eller i en lidt anden størrelse. Hvis den røde tegning ikke ligger på den sorte, vælg **Flugt med to punkter** og klik fire gange:

1. et punkt på den gamle (røde) tegning, f.eks. en søjles centrum eller et bygnings hjørne,
2. det samme punkt på den nye (sorte) tegning,
3. et andet punkt på den røde tegning, langt fra det første,
4. det samme punkt på den sorte tegning.

Den røde tegning flyttes, drejes og skaleres over på den sorte. Statuslinjen siger hvor meget større den nye tegning er ("størrelse × 1.000" når den er den samme). Zoom ind for valgene: jo tættere du klikker, jo bedre passer det.

## Find ændringerne

Vælg **Find ændringer**. TakeoffCraft sammenligner de to tegningers blæk: blæk kun på det gamle ark bliver rødt, blæk kun på det nye ark bliver blåt, og statuslinjen tæller dem. Linjer der er flyttet en hårsbredde (en genudskrivning) tælles ikke som ændringer.

Den kigger også på hver markering på det gamle ark og tæller dem der ligger hvor tegningen er ændret:

- et forløb eller et areal når tegningen er ændret i en af dets ender eller hjørner, eller langs mindst omkring en sjettedel af dets længde;
- et antal når noget er ændret lige ved siden af det.

## Flyt mængdeudtrækket

Vælg **Flyt mængdeudtræk hertil**. Hver markering på det gamle ark flyttes til det nye, gennem flugtningen, i ét fortrydbart trin. De der ligger ved siden af en ændring markeres: de tegnes med en orange glorie, og arkbjælken viser "(n) til kontrol".

Hvis det nye ark ikke havde nogen målestok, får det det gamle arks målestok (justeret når tegningerne skulle skaleres for at flugte). Havde det allerede en anden målestok, spørger TakeoffCraft først: flyttede markeringer måles i det nye arks målestok.

## Kontroller de markerede markeringer

1. Vælg "(n) til kontrol" på arkbjælken. Den zoomer til den næste markerede markering og vælger den; dens panel siger hvorfor den er markeret.
2. Ret markeringen hvis tegningen er ændret under den (træk dens hjørner, tilføj eller slet markeringer, eller tag den af igen).
3. Vælg **Kontrolleret** i dens panel. Markeringen går, og tallet på arkbjælken falder.

Markeringerne gemmes med mængdeudtrækket, så du kan kontrollere dem senere.

:::note
Sammenligning virker lige godt på vektor-PDF'er og på scanninger, fordi den sammenligner det der er tegnet. En scanning der er skæv eller strakt flugter måske kun groft med to punkter; kontrollér så flere markeringer med øjet.
:::
