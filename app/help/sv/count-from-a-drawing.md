---
title: Räkna från en ritning
summary: Räkna block, objekt på ett lager eller text direkt från en DWG eller DXF: exakt, med kapslade block, dynamiska blockvarianter och blockmatriser hanterade, i ett steg att ångra.
keywords: räkna från ritning, cad-räkning, blockräkning, räkna block, infoga, blocknamn, kapslade block, dynamiskt block, variant, minsert, matris, lager, objekttyp, cirklar, text, attribut, tagg, dolda lager, exakt räkning, hur, dörrar, armaturer
from: 5060e24e
---

{{ui:CAD-räkning}} på bladraden (kommandot **Räkna från ritningen** i de andra menystilarna) räknar det som en DWG eller DXF säger finns. Där {{ui:Autoräkna}} letar efter en bild av en symbol och kan missa en eller hitta en falsk, räknar detta objekten: varje infogning av ett block med namnet `DOOR-36` är en dörr. Öppna ritningen först: [Öppna en DWG- eller DXF-ritning](topic:open-a-drawing).

## Räkna ett block

1. Öppna ett blad i ritningen. {{ui:CAD-räkning}} finns på bladraden.
2. Välj den. Fönstret listar blocken med hur många av varje det finns. Sök på namn och välj ett.
3. Kontrollera raden under listan: ”22 hittade, 22 att lägga till.”
4. Under {{ui:Lägg till i}} väljer du en räkningspost, eller lämnar {{ui:Ett nytt räkneobjekt}} och ger det ett namn.
5. Välj lägg-till-knappen, som anger antalet: {{ui:Lägg till 22 markeringar}}. Markeringarna hamnar på blockets infogningspunkter, och postens kvantitet är räkningen.

Det är ett steg att ångra: {{key:Mod+Z}} tar bort markeringarna (och en ny post) tillsammans. Uppskattningen, kalkylbladet och den markerade PDF:en behandlar posten som vilken annan räkningspost som helst.

### Vad som räknas

- **Varje infogning av blocknamnet**, oavsett skala och vinkel, i modellrummet eller pappersrummet. Blocknamn bryr sig inte om versaler.
- **Blockmatriser** (MINSERT): varje kopia i matrisen är en.
- **Kapslade block.** Ett block placerat inuti ett annat block räknas på varje djup. Listan säger ”6 i andra block”; avmarkera {{ui:Räkna även block i andra block}} för att bara räkna infogningar placerade direkt i ritningen.
- **Dynamiska block.** Ett dynamiskt block räknas under sitt eget namn, inte under de anonyma kopiorna (`*U12`) som filen behåller. Dess tillstånd listas separat (”Enkel 12, Dubbel 4”): välj ett tillstånd för att räkna bara dem, eller {{ui:Alla varianter}}. När en fil inte anger vilket tillstånd en kopia visar, listas de som ”(tillstånd okänt)”.
- **Lagerfilter.** Ett block på flera lager: välj ett under {{ui:På lager}}.

### Vad som inte räknas

- **Dolda lager.** Ett objekt på ett lager som är av eller fruset i filen (eller som du dolt i {{ui:Lager}}) lämnas utanför, och raden säger hur många: ”3 på dolda lager utelämnade”. Bocka i {{ui:Räkna dem också}} för att ta med dem.
- **Länkade ritningar som inte är öppna** räknas inte; fönstret säger det.
- **Objekt som ligger exakt ovanpå ett annat av samma slag** räknas som två (de är två objekt), och fönstret säger det. Det är oftast ett ritfel värt att kontrollera.

## Det här bladet visar, eller hela ritningen

- **Det här bladet visar** räknar de objekt bladet visar: på ett layout, modellobjekten inuti dess visningsportar (ett lager fruset i en visningsport räknas inte där) plus layoutens egna.
- **Hela ritningen, varje objekt en gång** räknar modellrummet en gång, med markeringarna på bladet Modell, och räknar inte det som flera layouter visar igen.

Att räkna det en layout visar och att räkna det Modell visar ger samma antal för samma objekt; lägg inte till båda i en och samma post.

## Räkna om

Att räkna samma block igen med samma post lägger bara till det som är nytt: ”22 redan räknade.” Varje markering står för ett objekt.

## Efter lager och typ

På {{ui:Efter lager och typ}} väljer du ett lager och en objekttyp (cirklar, polylinjer, skraffering…): ”alla cirklar på E-LITE”. Bocka i {{ui:Räkna även objekt i block}} för att ta med dem som finns i blockdefinitioner, på varje ställe blocket infogas.

## Efter text

På {{ui:Efter text}} skriver du texten, till exempel `A3`, och anger om den ska vara exakt, innehålla den eller ha den som ett helt ord. Textobjekt, flerhänvisningstext och blockattributvärden räknas alla (en taggattribut `ITEM = A3` hittas). Välj {{ui:I attribut}} för att räkna bara ett attribut. De vanligaste texterna listas att klicka på.

## När du ska använda Autoräkna i stället

Använd {{ui:Autoräkna}} för PDF:er och för symboler i en ritning som inte är block (lösa eller sprängda). Är de ritade som block räknar du dem här.
