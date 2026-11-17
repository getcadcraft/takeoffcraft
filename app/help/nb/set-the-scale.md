---
title: Sett målestokken
summary: Gi hvert ark en målestokk med et forvalg eller ved å kalibrere på en kjent dimensjon, kontroller den, og forstå hvorfor ark uten målestokk utelates fra summene.
keywords: finn målestokk, les målestokk, målestokk fra tekst, alle ark, målestokk, kalibrer, forvalg, kontroller målestokk, bekreft, kjent dimensjon, uten målestokk, ingen målestokk, forhold, sett målestokk
from: 8f0148e6
---

Hvert ark har sin egen målestokk. Du setter den, eller lar TakeoffCraft lese den fra arkenes tekst (under), og kontrollerer den. Inntil et ark har en, nekter {{ui:Linjær}}, {{ui:Areal}}, {{ui:Sirkel}} og {{ui:Utsparing}} å måle på det. {{ui:Tell}} og {{ui:Autotelling}} fungerer uten målestokk.

Arkelisten viser hvert arks målestokk, eller **Ingen målestokk**. Linjen under det åpne arket sier det samme.

## Bruk et forvalg (når PDF-en er skrevet ut i full størrelse)

1. Åpne arket.
2. Åpne listen {{ui:Forvalg}} i gruppen {{ui:Målestokk}}.
3. Velg målestokken som står på tegningen, for eksempel `1/8" = 1'-0"` under Arkitekt.
   Statuslinjen sier «Målestokk for dette arket: 1/8" = 1'-0".»
4. Kontroller den (under).

Et forvalg forutsetter at PDF-en er den reelle papirstørrelsen tegningen ble laget for. Hvis noen laget PDF-en med «tilpass til side», eller det er et sett i halv størrelse, er forvalget feil. Kalibrer i stedet.

Den fullstendige listen står i [Målestokkforvalg](topic:scale-presets).

## Les målestokkene fra arkenes tekst

De fleste tegninger oppgir målestokken sin: `SCALE: 1/4" = 1'-0"` i tegningshodet, `1:100` under et bilde. TakeoffCraft kan lese den og sette alle arkene på én gang.

1. Åpne listen {{ui:Forvalg}} og velg {{ui:Fra arkenes tekst…}} (øverst).
2. Listen viser hvert ark: målestokken det har nå, og hva teksten sier — **Sier 1/4" = 1'-0"**, **Ingen målestokk i teksten**, eller **Sier ikke i målestokk** (NTS).
3. Ark uten målestokk som sier en, er avkrysset. Kryss av eller av hvilke som helst, og velg {{ui:Sett de avkryssede målestokkene}}. Ett {{key:Mod+Z}} angrer alle sammen.
4. Kontroller én dimensjon på hvert ark med {{ui:Kontroller}} (under): et forvalg er bare riktig når PDF-en er skrevet ut i full størrelse.

Den leser arkitektoniske (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), ingeniør- (`1" = 20'`) og metriske (`1:50`) notasjoner som samsvarer med et [forvalg](topic:scale-presets). Når et ark oppgir mer enn én målestokk (en plan med forstørrede detaljer), tar den den det oftest nevner, og en som står etter ordet SCALE teller dobbelt; de andre vises i rødt, slik at du kan kontrollere dem. Et skannet ark har ingen tekst: sett målestokken for hånd.

## Kalibrer på en kjent dimensjon

Bruk dette når det ikke finnes en trykt målestokk du stoler på, settet er endret i størrelse, eller arket sier «ikke i målestokk» men har dimensjoner.

1. Åpne arket og zoom inn på en lang dimensjon du kjenner, for eksempel avstanden mellom akselinjer eller en samlet bygningsdimensjon. Jo lengre, jo mer nøyaktig.
2. Velg {{ui:Kalibrer}} i gruppen {{ui:Målestokk}}, eller trykk {{key:K}}.
3. Klikk i den ene enden av dimensjonen. Zoom inn på hver ende for presisjon; du kan zoome og panorere mellom klikkene.
4. Klikk i den andre enden. Hold {{key:Shift}} for å holde linjen på 0°, 45° eller 90°.
   Dialogboksen **Kalibrer dette arket** åpnes.
5. Skriv inn den reelle avstanden i **Reell avstand**, for eksempel `24'-6 1/2"`, `24.5` (desimalfot), `30"` eller `7.5 m`. Se [Angi lengde, enhetspris og prosent](topic:entry-formats).
6. Velg {{ui:Sett målestokken}}.
   Statuslinjen viser målestokken som «1" = (n)'», og når den er innenfor 0.5 % av et forvalg, sier den hvilket, for eksempel «som samsvarer med 1/4" = 1'-0" (velg det forvalget for en nøyaktig målestokk)».
   TakeoffCraft går tilbake til verktøyet {{ui:Velg}}.

Når kalibreringen samsvarer med et forvalg, gir det forvalget en nøyaktig målestokk i stedet for en som avhenger av hvor du klikket.

## Kontroller målestokken

Kontroller alltid en ny målestokk på en andre dimensjon.

1. Velg {{ui:Kontroller}} i gruppen {{ui:Målestokk}}, eller trykk {{key:D}}.
2. Klikk på begge endene av en dimensjon som står på tegningen.
   Statuslinjen viser «Kontroll: 12'-6"» med samme lengde i desimalfot og meter, og kontrolllinjen blir værende på arket med sin lengde.
3. Sammenlign med den trykte dimensjonen. Hvis den er feil, kalibrer på en lengre dimensjon.

Trykk {{key:Esc}} for å fjerne kontrolllinjen.

## Endre en målestokk

Velg et annet forvalg eller kalibrer på nytt. Hvis arket allerede har målinger, spør TakeoffCraft **Endre målestokken for dette arket?** og sier hvor mange målinger som måles på nytt. Velg {{ui:Endre målestokken}}. Hver strekning og hvert område på arket måles på nytt med den nye målestokken. Du kan angre med {{key:Mod+Z}}.

## Hvorfor ark uten målestokk ikke telles som null

En markering på et ark uten målestokk har ingen reell lengde eller areal. TakeoffCraft teller den aldri som null, for det ville stille gjøre kalkylen din for lav. I stedet:

- lar den være utenfor summene,
- viser «+(n) uten målestokk» ved siden av posten i {{ui:Mengder}},
- viser «Ufullstendig: (n) markeringer på ark uten målestokk (ikke med i summene)» i tabellens overskrift,
- skriver antallet i merknadskolonnen i regnearkeksporten.

Dette kan skje når du åpner et prosjekt der målestokkene aldri ble satt. Gi arket en målestokk, så telles markeringene med en gang. Telle-markeringer telles alltid; de trenger ingen målestokk.

## Tips

- Sett målestokken på hvert ark du skal måle, før du begynner. Søk i arkelisten etter **Ingen målestokk** for å finne de som gjenstår (søkefeltet ser på arkets navn, ikke målestokker).
- Detaljer og forstørrede planer på samme ark bruker ofte en annen målestokk. TakeoffCraft har én målestokk per ark; se [Hva som ikke er bygget ennå](topic:not-built-yet).
- Metriske tegninger: velg et metrisk forvalg som `1:100`, eller kalibrer med en metrisk avstand som `6000 mm`.
