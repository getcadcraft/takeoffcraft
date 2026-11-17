---
title: Een nieuwe opmeting starten
summary: Alles wissen en een lege opmeting starten zonder de pagina opnieuw te laden, en eerst uw werk veiligstellen.
keywords: nieuw, nieuwe opmeting, wissen, leegmaken, resetten, opnieuw beginnen, leeg, pdf's sluiten, volgende klus
from: 16d392a4
---

{{ui:Nieuw}} sluit elke PDF en start een lege opmeting op dezelfde pagina.

1. Sla de huidige opmeting op als u haar wilt bewaren: {{ui:Opmeting opslaan}} of {{key:Mod+S}}.
2. Kies {{ui:Nieuw}} in de groep {{ui:Bestand}}.
3. Zijn er niet-opgeslagen wijzigingen, dan vraagt TakeoffCraft **Niet-opgeslagen opmeting**: kies {{ui:Eerst de opmeting opslaan}} (het project wordt gedownload en daarna gewist), {{ui:Wijzigingen weggooien}}, of {{ui:Annuleren}}.
   Het venster keert terug naar de lege toestand: geen PDF's, geen posten, geen markeringen, geen schalen. De statusbalk zegt "Nieuwe opmeting. Open PDF's om te beginnen."

Wat wordt gewist:

- elke geopende PDF, zijn bladen en miniaturen,
- posten, samenstellingen, markeringen en schalen,
- de zoom en positie van elk blad,
- de geschiedenis van ongedaan maken (u kunt {{ui:Nieuw}} niet ongedaan maken),
- de boogmodus, en elke lopende zoek- of controlesessie van automatisch tellen.

Uw bestanden op schijf worden niet aangeraakt. Om de oude opmeting weer op te pakken, opent u het `.takeoff.json`-bestand en de PDF's: zie [Een opmeting opslaan en opnieuw openen](topic:save-and-reopen).

:::note
Elke nieuwe opmeting begint zonder posten. Om posten mee te nemen, kopieert u ze eerst: {{ui:Post kopiëren}} onder Posten (of kopieer markeringen, die hun posten meenemen), en daarna {{ui:Plakken}} in de nieuwe opmeting. Zie [Markeringen kopiëren, plakken en dupliceren](topic:copy-paste). Voor posten die u op elke klus gebruikt, bewaart u ze in uw [prijsbibliotheek](topic:price-library) en voegt u ze vandaar toe, of voegt u een [vakpakket](topic:trade-packs) toe.
:::
