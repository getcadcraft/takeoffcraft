---
title: Nytt i 0.7
summary: DWG- och DXF-ritningar öppnas som blad med sin egen skala, exakta antal och längder från själva ritningen, det valda underentreprenörsanbudet som ett pakets pris, anbudsinbjudningar med förseglade priser, assistentverktyg för ritningar och USD från 3D-kontrollvyn.
keywords: nytt, vad är nytt, versionsanteckningar, ändringslogg, ändringar, 0.7, version, nya funktioner, dwg, dxf, ritning, layouter, modellrum, ritningsskala, räkna från ritning, cad-räkning, block, dynamiska block, attribut, lager, xref, externreferens, mät ritning, polylinje, skraffering, markerad pdf, valt anbud, använd ett anbud, skicka för anbud, anbudsinbjudan, förseglade anbud, anbudsöppning, sent anbud, underentreprenörsregister, csv, assistent, mcp, usd, usdz, enheter, enhetslistor, kompakt, paneler, dialogrutor, portugisiska
from: ad4f0df1
---

Det här är vad som ändrats i TakeoffCraft 0.7 jämfört med 0.6. Ritningar öppnas nu som de är, utan att först plottas till PDF, och ett anbudspaket kan skickas till underentreprenörer och komma tillbaka prissatt.

## Nytt

### DWG- och DXF-ritningar

- **Öppna en ritning som blad.** {{ui:Öppna ritningar}} i gruppen {{ui:Fil}} ({{key:Mod+O}}, eller släpp filerna) tar DWG- och DXF-ritningar bredvid PDF-filer. Modellrummet och varje layout blir blad i listan {{ui:Blad}}, och en mängdavtagning kan omfatta ritningar och PDF-filer tillsammans. Ingenting laddas upp. Se [Öppna en DWG- eller DXF-ritning](topic:open-a-drawing).
- **Skalan kommer från ritningen.** En layout börjar i skalan för sin största vyport, namngiven som ett förval när det är ett, till exempel 1/2" = 1'-0". Modell börjar i ritningens enheter. En ritning som saknar enheter säger ”Ingen skala” tills du kalibrerar den. {{ui:Kalibrera}}, {{ui:Kontrollera}} och {{ui:Förval}} gäller fortfarande före. Se [Skalan](topic:open-a-drawing#the-scale).
- **Lager och externreferenser.** {{ui:Lager}} i bladfältet visar eller döljer ritningens lager. Lager som filen stängt av eller frusit börjar dolda och räknas inte om du inte väljer det. En länkad ritning (xref) som öppnats bredvid sin värd ritas och räknas där den är infogad; tills den är öppen anger statusfältet vad som saknas. Se [Lager](topic:open-a-drawing#layers).
- **Den markerade PDF-filen fungerar från en ritning.** {{ui:Exportera}} › {{ui:Markerad PDF}} ritar först en ritnings markerade blad som en PDF, så att kopian visar dina markeringar och teckenförklaring utan något plottningssteg. Den ritas i svart eller ritningens färger, utan plottstiltabeller. Se [En markerad PDF](topic:export-estimate#a-marked-pdf).

### Exakta antal och längder från en ritning

- **Räkna det ritningen säger finns.** {{ui:CAD-räkning}} i bladfältet räknar ett block efter namn (nästlade block, dynamiska blocktillstånd och blockmatriser inräknade), allt av en typ på ett lager, eller ett text- eller attributvärde. Den räknar det bladet visar eller hela ritningen en gång. Att lägga till markeringarna är ett ångrasteg, och att räkna igen lägger bara till det som är nytt. {{ui:Autoräkna}} finns kvar för PDF-filer och för symboler som inte är block. Se [Räkna från en ritning](topic:count-from-a-drawing).
- **Mät från ritningens egna linjer.** {{ui:Mät ritning}} tar linjer, bågar, polylinjer, cirklar, skraffering och solider som du klickar på eller fönstermarkerar som markeringar för en linjär post eller en areapost. Bågar, bulge och en skrafferings hål blir exakta; ellipser och splines mäts i fina kordor, och fältet säger det. Se [Mät från en ritning](topic:measure-from-a-drawing).

### Anbud

- **Använd en underentreprenörs anbud som paketets pris.** I {{ui:Exportera}} › {{ui:Anbudspaket och jämförelse…}} väljer du {{ui:Använd}} på ett anbud. Paketets poster stannar som mängder, en rad **Valt anbud** bär priset, poster som anbudet utelämnar stannar till din egen kostnad, och omkostnader, vinst och borgen gäller det. Att byta anbud är ett ångrasteg; arbetsboken och anbudssammanställningen bär det. Se [Använd ett anbud som paketets pris](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Skicka ett paket för anbud.** {{ui:Skicka för anbud…}} under ett paket mejlar varje underentreprenör en länk till en sida som inte kräver något konto: de ser omfattningen och bladen som en PDF, skriver ett pris på varje rad eller markerar den som ej inkluderad, lägger till anteckningar och upp till tre filer, eller tackar nej. {{ui:Hämta priser}} drar in det som kom tillbaka i jämförelsearket, flaggat **webb**. Utskick är öppet bara för konton som CadCraft-teamet aktiverat medan det testas (se nedan). Se [Skicka ett paket för anbud](topic:bid-invitations).
- **Förseglade till öppningen.** Priser kan förbli förseglade till en öppningstid du anger: tills dess ser ingen något pris, inte du heller. Vid öppningen visas varje anbud på en gång, och ett anbud som kom efter sista datum markeras som sent. Se [Förseglade anbud och öppningen](topic:bid-invitations#sealed-bids-and-the-opening).
- **Underentreprenörsregister.** Ditt konto på getcadcraft.com håller varje företags kontakter, branscher, kvalificeringssvar samt försäkrings- och licensdatum (flaggade när de passerats eller är inom 30 dagar), med deras tidigare anbud. Importera och exportera dem som CSV, och välj dem när du skickar ett paket. Se [På webbplatsen](topic:bid-invitations#on-the-website).

### AI-assistenter

- **Assistenter kan lägga till i mängdavtagningen.** Med **Redigera** ikryssat kan din egen assistent lägga till poster (`items_add`) och mäta sträckor, areor och antal på ett blad (`marks_add`; längder och areor bara på ett blad med skala), där varje anrop är ett ångrasteg.
- **Assistentverktyg för ritningar.** På en öppen DWG eller DXF kan en assistent lista dess blad och vad som kan räknas, räkna exakt, lägga till räknemarkeringarna och mäta från ritningens geometri. Utan öppet TakeoffCraft öppnar CadCrafts MCP-server en ritning som en ny mängdavtagning och sparar den, och `cadcraft count` räknar från kommandoraden. Se [Vad en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrollvyn som USD.** {{ui:USD-paket (.usdz)}} bredvid {{ui:GLB}} i 3D-kontrollvyn skriver varje vägg, bjälklag, platta, räknestolpe och sträcka som ett eget objekt, uppkallat efter sin post och med sin mängd, i meter. En assistent kan exportera den också (`usd_export`). Se [Exportera 3D-kontrollvyn som USD](topic:usd).

## I varje app

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (den amerikanska lantmäterifoten är en egen enhet). Stäng av de enheter du aldrig använder så försvinner de från enhetslistorna; sätt en stjärna på en så börjar nytt arbete i den. En fil behåller alltid sin egen enhet. I TakeoffCraft följer en posts {{ui:Enhet}}-listor reglagen, en ny post börjar i den stjärnmärkta längd- eller areaenheten, taktäckningskvadrater (SQ), acres och hektar är nya areaenheter, och en längdruta tar vilken enhets beteckning som helst, till exempel `3 yd`. Se [Enheter, inskrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som fälls undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} ryms mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har ett smalt titelfält: dra det för att docka eller frigöra panelen, släpp det på en annan panels fält för att dela ram som flikar, fäst det så att det glider undan till kanten, eller dölj det och hämta tillbaka det från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i dess titelfält undan från ritningen; den kommer tillbaka där du lämnade den. Dubbelklicka på titelfältet för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade förfrågningar till din egen assistent (städa en ritning, plotta en uppsättning, kontrollera ritningar, ställa frågor till en modell, summera en mängdavtagning, prova en delvariant …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en omspelad av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena är på engelska.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en ogiltig signatur) i stället för bara ”Klar”, och slutar ta tillbaka ett Nytt-kort du stängt tills det finns en nyare version.

## Inte i den här versionen ännu

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen inte har gått igenom ännu. Kontrollera SHA-256 bredvid varje fil på getcadcraft.com/download. Om SmartScreen på Windows stoppar installationsprogrammet väljer du {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac högerklickar du första gången på CadCraft Studio och väljer {{ui:Öppna}}. CadCraft Studio finns inte i någon appbutik ännu, och det finns ingen version för iPad eller iPhone ännu.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- **Anbudsinbjudningar är avstängda för de flesta konton.** Medan funktionen testas skickas e-post till externa anbudsgivare bara från konton som CadCraft-teamet aktiverat. Anbudsgivarnas sidor fungerar för varje inbjudan som redan skickats. Alla andra: ladda ner {{ui:Omfattnings-CSV}}, mejla den själv och skriv in anbuden.
- Ett CadCraft Studio-fönster kan inte skicka anbudsinbjudningar ännu: det säger att du ska använda TakeoffCraft i webbläsaren. Att öppna en mängdavtagning med skickade förfrågningar, jämförelse och val av anbud fungerar i Studio.
- Tilläggshandlingar, tilldelningsbrev, ett omfattningsblad som varje anbudsgivare godkänner och automatiska påminnelser innan ett försäkringsdatum löper ut är inte byggda. Ett valt anbud omprissätter inte en alternativ anbudsarea.
- Ritningar: plottstiltabeller och CTB-filer tillämpas inte, en binär DXF avvisas (spara den som ASCII-DXF eller DWG), länkade ritningar hittas bara bland de öppna filerna via filnamn, och PDF-underlägg, bilder och OLE-objekt i en ritning ritas eller räknas inte. Antalen och skalorna har kontrollerats på exempelritningar, inte ännu på ritningar från ett verkligt jobb öppnade i programmet som gjorde dem.
- En assistent kan lägga till poster och markeringar men kan inte flytta, ändra eller ta bort markeringar som redan finns.

Allt annat finns i [Inte byggt ännu](topic:not-built-yet).
