---
title: Nyheter i 0.7 (tidigare)
summary: DWG- och DXF-ritningar öppnas som blad med sin egen skala, exakta antal och längder från själva ritningen, det valda underentreprenörsanbudet som ett paketets pris, anbudsinbjudningar med förseglade priser, assistentverktyg för ritningar och USD från 3D-kontrollvyn.
keywords: nyheter 0.7, tidigare version, versionsinformation, ändringslogg, ändringar, 0.7, version, nya funktioner, dwg, dxf, ritning, layouter, modellrum, ritningsskala, räkna från ritning, cad-räkning, block, dynamiska block, attribut, lager, xref, externreferens, mät ritning, polylinje, skraffering, markerad pdf, valt anbud, använd ett anbud, skicka för anbud, anbudsinbjudan, förseglade anbud, anbudsöppning, sent anbud, underentreprenörsregister, csv, assistent, mcp, usd, usdz, enheter, enhetslistor, kompakt, paneler, dialogrutor, portugisiska
from: 0e3a424f
---

Detta är vad som ändrats i TakeoffCraft 0.7, jämfört med 0.6. Ritningar öppnas nu som de är, utan att först plottas till PDF, och ett anbudspaket kan skickas till underentreprenörer och komma tillbaka prissatt.

## Nytt

### DWG- och DXF-ritningar

- **Öppna en ritning som blad.** {{ui:Öppna ritningar}} i gruppen {{ui:Fil}} ({{key:Mod+O}}, eller släpp filerna) tar DWG- och DXF-ritningar bredvid PDF:er. Modellrummet och varje layout blir blad i listan {{ui:Blad}}, och en mängdavtagning kan omfatta ritningar och PDF:er tillsammans. Ingenting laddas upp. Se [Öppna en DWG- eller DXF-ritning](topic:open-a-drawing).
- **Skalan kommer från ritningen.** En layout startar i skalan för sin största vyport, med namn som förval när den är en av dem, till exempel 1/2" = 1'-0". Modellen startar i ritningens enheter. En ritning utan enheter säger ”Ingen skala” tills du kalibrerar den. {{ui:Kalibrera}}, {{ui:Kontrollera}} och {{ui:Förval}} gäller fortfarande före den. Se [Skalan](topic:open-a-drawing#the-scale).
- **Lager och länkade ritningar.** {{ui:Lager}} på bladraden visar eller döljer ritningens lager. Lager som filen stängt av eller fryst startar dolda och räknas inte om du inte väljer det. En länkad ritning (xref) som öppnas bredvid sin värd ritas och räknas där den infogas; tills den är öppen säger statusfältet vad som saknas. Se [Lager](topic:open-a-drawing#layers).
- **Markerad PDF fungerar från en ritning.** {{ui:Exportera}} › {{ui:Markerad PDF}} ritar först en ritnings markerade blad som en PDF, så kopian visar dina markeringar och teckenförklaring utan något plottningssteg. Den ritas i svart eller i ritningens färger, utan plotstilstabeller. Se [En markerad PDF](topic:export-estimate#a-marked-pdf).

### Exakta antal och längder från en ritning

- **Räkna det ritningen säger finns där.** {{ui:CAD-räkning}} på bladraden räknar ett block efter namn (kapslade block, tillstånd för dynamiska block och blockmatriser ingår), allt av en typ på ett lager, eller ett text- eller attributvärde. Den räknar det bladet visar, eller hela ritningen en gång. Att lägga till markeringarna är ett steg att ångra, och att räkna igen lägger bara till det som är nytt. {{ui:Autoräkna}} finns kvar för PDF:er och för symboler som inte är block. Se [Räkna från en ritning](topic:count-from-a-drawing).
- **Mät från ritningens egna linjer.** {{ui:Mät ritning}} tar linjerna, bågarna, polylinjerna, cirklarna, skrafferingarna och solidobjekten du klickar på eller väljer med ett fönster, som markeringar av en linjär post eller en areapost. Bågar, bulor och hål i en skraffering blir exakta; ellipser och splines mäts i fina korda, och raden säger det. Se [Mät från en ritning](topic:measure-from-a-drawing).

### Anbud

- **Använd ett underentreprenörsanbud som paketets pris.** I {{ui:Exportera}} › {{ui:Anbudspaket och jämförelse…}} väljer du {{ui:Använd}} på ett anbud. Paketets poster finns kvar som mängder, en rad **Valt anbud** bär priset, poster som anbudet utelämnar stannar på din egen kostnad, och omkostnader, vinst och säkerhet gäller för det. Att byta anbud är ett steg att ångra; arbetsboken och anbudssammanställningen bär det. Se [Använd ett anbud som paketets pris](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Skicka ett paket för anbud.** {{ui:Skicka för anbud…}} under ett paket skickar varje underentreprenör en länk via e-post till en sida som inte kräver något konto: de ser omfattningen och bladen som PDF, skriver ett pris på varje rad eller markerar den som ej inkluderad, lägger till anteckningar och upp till tre filer, eller tackar nej. {{ui:Hämta priser}} hämtar in det som kom tillbaka till jämförelsebladet, markerat **web**. Att skicka är bara öppet för konton som CadCraft-teamet aktiverat medan funktionen testas (se nedan). Se [Skicka ett paket för anbud](topic:bid-invitations).
- **Förseglat till öppningen.** Priser kan vara förseglade till en öppningstid du sätter: fram till dess ser ingen ett pris, inte ens du. Vid öppningen visas alla anbud på en gång, och ett anbud som kom efter sista tid markeras som sent. Se [Förseglade anbud och öppningen](topic:bid-invitations#sealed-bids-and-the-opening).
- **Underentreprenörsregister.** Ditt konto på getcadcraft.com håller varje företags kontakter, branscher, kvalificeringssvar och försäkrings- och licensdatum (markerade när de passerat eller ligger inom 30 dagar), med deras tidigare anbud. Importera och exportera dem som CSV, och välj dem när du skickar ett paket. Se [På webbplatsen](topic:bid-invitations#on-the-website).

### AI-assistenter

- **Assistenter kan lägga till i mängdavtagningen.** Med **Redigera** markerad kan din egen assistent lägga till poster (`items_add`) och mäta sträckor, areor och antal på ett blad (`marks_add`; längder och areor bara på ett skalat blad), där varje anrop är ett steg att ångra.
- **Assistentverktyg för ritningar.** På en öppen DWG eller DXF kan en assistent lista dess blad och vad som kan räknas, räkna exakt, lägga till räknemarkeringarna och mäta från ritningens geometri. Utan att TakeoffCraft är öppet öppnar CadCraft MCP-servern en ritning som en ny mängdavtagning och sparar den, och `cadcraft count` räknar från kommandoraden. Se [Vad en assistent kan begära](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-kontrollvyn som USD.** {{ui:USD-paket (.usdz)}} bredvid {{ui:GLB}} i 3D-kontrollvyn skriver varje vägg, bjälklag, plåt, räknestolpe och sträcka som ett eget objekt, namngivet efter sin post och med sin mängd, i meter. En assistent kan exportera den också (`usd_export`). Se [Exportera 3D-kontrollvyn som USD](topic:usd).

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (den amerikanska mätningsfoten är en egen enhet). Stäng av de enheter du aldrig använder så lämnar de enhetslistorna; markera en med stjärna så startar nytt arbete i den. En fil behåller alltid sin egen enhet. I TakeoffCraft följer en posts listor {{ui:Enhet}} strömbrytarna, en ny post startar i den stjärnmarkerade längd- eller areaenheten, takkvadrater (SQ), acre och hektar är nya areaenheter, och en längdruta tar vilken enhets beteckning som helst, till exempel `3 yd`. Se [Enheter, skrivna värden och enhetslistorna](common:unit-lists).
- **Tätare layout och paneler som städar undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} får plats mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels namnlist för att dela en ram som flikar, fäst den så att den glider undan mot kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i dess namnlist ur vägen för ritningen; den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio exempel på begäranden till din egen assistent (städa en ritning, plotta en uppsättning, kontrollera ritningar, ställa frågor till en modell, summera en mängdavtagning, prova en delvariant …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en spelas upp av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena finns på engelska.
- **CadCraft Studio** anger varför en uppdateringskontroll misslyckades (ingen fil för ditt system än, inget nätverk, en felaktig signatur) i stället för bara ”Klar”, och slutar visa ett Nyheter-kort som du stängt förrän det finns en nyare version.

## Inte i den här versionen än

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen ännu inte kommit fram. Kontrollera SHA-256 bredvid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac, första gången, högerklicka på CadCraft Studio och välj {{ui:Öppna}}. CadCraft Studio finns inte i någon appbutik än, och det finns ingen iPad- eller iPhone-version än.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- **Anbudsinbjudningar är avstängda för de flesta konton.** Medan funktionen testas går post till externa budgivare bara från konton som CadCraft-teamet aktiverat. Budgivarnas sidor fungerar för alla inbjudningar som redan skickats. För alla andra: ladda ner {{ui:Omfattnings-CSV}}, skicka den själv via e-post och skriv in anbuden.
- Ett CadCraft Studio-fönster kan inte skicka anbudsinbjudningar än: det säger att du ska använda TakeoffCraft i webbläsaren. Att öppna en mängdavtagning med skickade förfrågningar, jämförelse och att välja ett anbud fungerar i Studio.
- Tilläggsbeställningar (addenda), tilldelningsbrev, ett omfattningsblad som varje budgivare signerar och automatiska påminnelser före ett försäkringsdatum som löper ut är inte byggda. Ett valt anbud prissätter inte om en alternativs anbudsyta.
- Ritningar: plotstilstabeller och CTB-filer tillämpas inte, en binär DXF avvisas (spara den som ASCII-DXF eller DWG), länkade ritningar hittas bara bland de öppna filerna på filnamn, och PDF-underlägg, bilder och OLE-objekt i en ritning ritas inte eller räknas. Antalen och skalorna har kontrollerats på exempelritningar, ännu inte på ritningar från ett verkligt jobb öppnade i programmet som skapade dem.
- En assistent kan lägga till poster och markeringar men kan inte flytta, ändra eller ta bort markeringar som redan finns.

Allt annat finns under [Finns inte ännu](topic:not-built-yet).
