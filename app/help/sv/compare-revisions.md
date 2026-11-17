---
title: Jämför ett reviderat blad och flytta mängdavtagningen
summary: Lägg det gamla bladet över sin revision, rikta in dem, se vad som ändrats och flytta mängdavtagningen till det nya bladet, med de markeringar som ska kontrolleras flaggade.
keywords: revision, reviderad, jämför, överlägg, gammal, ny, ändringar, tillägg, bulletin, ny utgåva, flytta mängdavtagning, överför, bär över, rikta in, flaggad, kontrollera
from: 3a1d9fe0
---

När ett blad utfärdas på nytt behöver du inte räkna av det igen. Öppna den gamla PDF:en och den nya, jämför de två bladen och flytta mängdavtagningen över. TakeoffCraft flaggar varje markering där ritningen ändrats, så att du kontrollerar dem och behåller resten.

## Jämför

1. Öppna båda PDF-filerna: den gamla ritningssatsen och den reviderade ({{ui:Öppna ritningar}}; de kan finnas i en fil eller i flera).
2. Visa det **nya** bladet.
3. Välj {{ui:Jämför}} på bladraden under ritningen.
4. Välj det gamla bladet i listan. TakeoffCraft föreslår bladet med samma nummer i den andra PDF:en, eller samma sida. Välj **Jämför**.

Den gamla ritningen ligger nu över den nya i rött. Där de två överensstämmer ligger de röda linjerna på de svarta; där de skiljer sig ser du röda linjer ensamma (borttagna) och svarta linjer ensamma (tillagda). En rad längst ned på bladet innehåller stegen nedan; {{key:Esc}} eller {{ui:Stäng}} avslutar jämförelsen.

## Rikta in

Reviderade blad plottas ofta något fel: de är flyttade på sidan, eller har en något annan storlek. Om den röda ritningen inte ligger på den svarta väljer du **Rikta in med två punkter** och klickar fyra gånger:

1. en punkt på den gamla (röda) ritningen, till exempel en pelares mitt eller ett byggnadshörn,
2. samma punkt på den nya (svarta) ritningen,
3. en andra punkt på den röda ritningen, långt från den första,
4. samma punkt på den svarta ritningen.

Den röda ritningen flyttas, vrids och skalas till den svarta. Statusfältet visar hur mycket större den nya ritningen är (”size × 1.000” när den är densamma). Zooma in för punkterna: ju närmare du klickar, desto bättre passform.

## Hitta ändringar

Välj **Hitta ändringar**. TakeoffCraft jämför de två ritningarnas bläck: bläck endast på det gamla bladet blir rött, bläck endast på det nya bladet blir blått, och statusfältet räknar dem. Linjer som flyttats ett hårstrå (en omplottning) räknas inte som ändringar.

Den tittar också på varje markering på det gamla bladet och räknar de som ligger där ritningen ändrats:

- en sträcka eller yta när ritningen ändrats vid en av dess ändar eller hörn, eller längs åtminstone ungefär en sjättedel av dess längd;
- en räkning när något ändrats alldeles intill den.

## Flytta mängdavtagningen

Välj **Flytta mängdavtagningen hit**. Varje markering på det gamla bladet flyttas till det nya, genom inriktningen, i ett enda steg att ångra. De som ligger intill en ändring flaggas: de ritas med en orange glöd, och bladraden visar ”(n) att kontrollera”.

Om det nya bladet inte hade någon skala tar det det gamla bladets skala (justerad när ritningarna behövde skalas för att rikta in). Om det redan hade en annan skala frågar TakeoffCraft först: flyttade markeringar mäts i det nya bladets skala.

## Kontrollera de flaggade markeringarna

1. Välj ”(n) att kontrollera” på bladraden. Den zoomar till nästa flaggade markering och markerar den; dess panel förklarar varför den är flaggad.
2. Rätta markeringen om ritningen ändrats under den (dra dess hörn, lägg till eller ta bort markeringar, eller ta bort den och räkna om den).
3. Välj **Kontrollerad** i dess panel. Flaggan försvinner, och antalet på bladraden minskar.

Flaggorna sparas tillsammans med mängdavtagningen, så att du kan kontrollera dem senare.

:::note
Jämförelsen fungerar lika bra på vektor-PDF:er som på skanningar, eftersom den jämför det som är ritat. En skanning som är snedställd eller utsträckt kan bara riktas in ungefärligt med två punkter; kontrollera då fler markeringar för hand.
:::
