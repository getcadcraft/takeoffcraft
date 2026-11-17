---
title: Felsökning
summary: Symtom, orsaker och åtgärder för meddelandena och överraskningarna du kan möta i TakeoffCraft, citerade så som appen visar dem.
keywords: problem, fel, fungerar inte, åtgärda, hjälp, nekad, mäter inte, ingen skala, saknade markeringar, export misslyckades, offline, touch
from: cd319c9b
---

TakeoffCraft förklarar de flesta avvisningar i statusfältet längst ned i fönstret. Hitta meddelandet nedan.

## Öppna filer

| Meddelande eller symtom | Orsak | Åtgärd |
|---|---|---|
| PDF-läsaren kunde inte laddas. Ladda om sidan för att försöka igen. | Appens PDF-läsare laddades inte, oftast för att du är offline och appen aldrig sparades för offlineanvändning. | Anslut igen och ladda om. Välj sedan {{ui:Spara för offline}} och vänta på {{ui:Redo för offline}}; se [Arbeta offline](common:offline). |
| (namn) är lösenordsskyddad. Öppna en kopia utan skydd. | PDF:en kräver ett lösenord för att öppnas. | Be om en kopia utan skydd, eller ta bort lösenordet i ett PDF-program du litar på. |
| (namn) kunde inte läsas som en PDF (…) | Filen är skadad eller inte en riktig PDF. | Ladda ner den igen, eller spara om den från programmet som skapade den. |
| (namn) är redan öppen. | Samma PDF (samma innehåll) är öppen. | Inget att göra. |
| TakeoffCraft öppnar PDF-filer och .takeoff.json-projekt. Hoppade över: … | Andra filtyper togs bort. | Konvertera ritningar till PDF först. |
| Inget händer när jag släpper filer | Filerna släpptes utanför webbläsarfönstret, eller webbläsaren öppnade PDF:en i en ny flik. | Släpp dem på själva TakeoffCraft-sidan; rutan "Släpp PDF-filer eller en .takeoff.json" visar när det fungerar. |
| Att öppna en stor uppsättning tar en stund | Varje PDF läses i sin helhet för att identifieras. | Vänta tills meddelandet "Öppnar (namn)…" försvinner. Miniatyrerna fylls i när du scrollar. |

## Mätning

| Meddelande eller symtom | Orsak | Åtgärd |
|---|---|---|
| Öppna en PDF först. | Inget blad är öppet. | Öppna en PDF. |
| Det här bladet har ingen skala än, så det kan inte mätas. Välj ett förval eller kalibrera först (räkningar fungerar utan). | Verktygen linjär, area, cirkel och urtag behöver en skala. | [Ställ in skalan](topic:set-the-scale). |
| Skapa en linjär post först (namnge den under Poster), klicka sedan på ritningen. | Det finns ingen post av den typen. | Fyll i formuläret {{ui:Ny post}} som öppnades och välj {{ui:Lägg till}}. |
| Välj en post att mäta först (Poster-panelen). | Den aktuella posten togs bort. | Klicka på en post under {{ui:Poster}}. |
| En sträcka behöver minst två punkter. | Du avslutade efter ett klick. | Klicka på minst två punkter. |
| En area behöver minst tre punkter. | För få hörn. | Klicka på minst tre hörn. |
| Konturen korsar sig själv, så dess area skulle bli fel. Rita den igen utan att korsa. | En form som en åttonsiffra. | Rita den som två areor, eller gå runt kanten i ordning. |
| Punkterna omsluter ingen area. | Alla punkter ligger på en linje. | Klicka på hörn som omsluter ett utrymme. |
| Välj först en areamarkering (Markera-verktyget), välj sedan Urtag och rita hålet inuti den. | {{ui:Urtag}} behöver en markerad area. | Tryck på {{key:V}}, klicka på arean och tryck sedan på {{key:X}}. |
| Ett urtag måste ligga helt inuti arean. | Hålet korsar eller går utanför konturen. | Rita hålet inuti arean. |
| Urtag får inte överlappa varandra. | Två hål överlappar. | Rita ett hål runt båda, eller håll dem åtskilda. |
| … Punkten flyttades tillbaka. | Ett dragit hörn skulle få konturen att korsa sig själv eller trycka ett hål utanför. | Dra till en plats som håller formen giltig. |
| Klicka på en punkt på cirkelns kant, bort från dess mitt. | Det andra klicket var för nära mitten. | Klicka längre ut. |
| Klick panorerar ritningen i stället för att lägga till punkter | Pekaren rörde sig mer än några pixlar medan knappen var nedtryckt; det räknas som ett drag. | Klicka utan att röra dig, särskilt på en styrplatta. |
| Shift fångar inte | Du placerar en punkt på en båge, eller ritar en cirkel. | 45°-fångsten gäller bara raka segment. |
| Punkter hoppar till en närliggande linje | Fångst mot ritningens linjer är på. | Zooma in för att klicka mellan linjer, eller tryck på {{key:F3}} för att stänga av fångst. |
| Ingen fångstmarkör visas | Fångst är av, ritningen är en skanning, eller verktyget fångar inte (Räkna, Autoräkna, inklistring). | Tryck på {{key:F3}}; på en skanning finns inga linjer att fånga mot. |
| Längden är fel | Skalan är fel (ofta en PDF som ändrats i storlek med ett förval). | Använd {{ui:Kontrollera}} på ett känt mått, och sedan {{ui:Kalibrera}}. |

## Skala

| Meddelande eller symtom | Orsak | Åtgärd |
|---|---|---|
| Välj två punkter som ligger längre från varandra. | Kalibreringspunkterna ligger nästan på varandra. | Kalibrera på ett längre mått. |
| Ett meddelande i kalibreringsdialogen, till exempel "Avståndet kunde inte läsas" | Avståndet står i ett format TakeoffCraft inte kan läsa. | Se [Inmatning av längd, pris och procent](topic:entry-formats). |
| Det här bladet har ingen skala än, så det finns inget att kontrollera. Kalibrera det, eller välj ett förval. | {{ui:Kontrollera}} på ett blad utan skala. | Ställ in en skala först. |
| Listan {{ui:Förval}} är nedtonad | Inget blad är öppet. | Öppna en PDF. |

## Mängder och formler

| Meddelande eller symtom | Orsak | Åtgärd |
|---|---|---|
| Ofullständig: … (ingår inte i summorna) | Ett formelfel, eller markeringar på blad utan skala. | Se [Läs mängder och kalkyl](topic:read-quantities#the-incomplete-warning). |
| +(n) oskalade bredvid en post | Några av dess markeringar ligger på blad utan skala. | Ge de bladen en skala. |
| Formelfel: … | Formeln kan inte räknas ut. | Se [Formelspråk](topic:formulas#errors). |
| Den här posten har markeringar, så dess typ kan inte ändras. | Typen är låst när det finns markeringar. | Skapa en ny post av den andra typen och rita om markeringarna med den. |
| En post behöver ett namn. | Namnfältet tömdes. | Skriv ett namn. |
| Skriv ett belopp som 12.50. / Skriv en procentsats som 10 eller 7.5. | Ett pris eller spill kunde inte läsas. | Se [Inmatning av längd, pris och procent](topic:entry-formats). |
| En summa ser dubbel ut | Posten har egna priser och delar som bär samma kostnad. | Sätt postens egna priser till 0 när dess delar bär kostnaden. |
| Den här postens markeringar ligger på PDF:er som inte är öppna. | Du klickade på en post vars alla markeringar ligger på PDF:er du inte öppnat. | Öppna de PDF:erna; deras namn listas under {{ui:Blad}}. |

## Autoräkna

| Meddelande eller symtom | Orsak | Åtgärd |
|---|---|---|
| Rutan är för liten. Rita den runt hela symbolen. | Rutan är mycket liten. | Zooma in och rama in hela symbolen. |
| Rutan är nästan tom. Rita den runt en symbol. | Rutan innehåller bara papper. | Rama in symbolen själv. |
| Inga träffar. Sänk {{ui:Träff}}-reglaget, eller rama in symbolen tätare. | Inget fick tillräckligt hög poäng. | Rama in symbolen tätt, eller dra {{ui:Träff}}-reglaget lägre. |
| För många träffar, inklusive fel symboler | Liknande symboler får poäng nära den riktiga. | Höj {{ui:Träff}}-reglaget och klicka på felaktiga rutor för att avvisa dem. |
| Träffar saknas på andra blad | De bladen ritar symbolen i en annan storlek, eller i en vinkel som inte är ett steg om 90°. | Sök på de bladen med en ruta ritad där, eller räkna för hand. |
| (n) blad var för stora för att sökas på den här symbolstorleken. | Bladet skulle bli för stort i arbetsstorleken. | Rama in en större symbol, eller räkna bladet för hand. |
| Sökningen misslyckades: … | Sökningen i bakgrunden stoppades. | Försök igen; ladda om sidan om det upprepas (spara först). Offline fungerar det bara när appfältet visar {{ui:Redo för offline}}. |
| Dra ritar en ruta i stället för att panorera | Så fungerar {{ui:Autoräkna}}. | Håll ner {{key:Space}} och dra, eller dra med mittenknappen. |

## Spara och exportera

| Meddelande eller symtom | Orsak | Åtgärd |
|---|---|---|
| Inget att exportera än: skapa en post och mät den. | Det finns inga poster. | Skapa en post först. |
| Inga markeringar på de öppna PDF:erna än. | {{ui:Markerad PDF}} har inget att rita på de öppna PDF:erna. | Öppna PDF:erna som har markeringar. |
| Den här PDF:en är lösenordsskyddad eller krypterad, så en markerad kopia kan inte skrivas. … | PDF:en är krypterad. | Exportera {{ui:XLSX}} i stället, eller använd en okrypterad kopia av PDF:en (den behöver då sin egen mängdavtagning, eftersom det är en annan fil). |
| Den markerade PDF:en kunde inte skrivas: … | Oftast: offline, och appen sparades inte för offlineanvändning, så PDF-skrivaren saknas. | Gå online och välj {{ui:Markerad PDF}} igen. För att undvika det, välj {{ui:Spara för offline}} och vänta på {{ui:Redo för offline}}. |
| Bara en markerad PDF laddades ner | Webbläsaren blockerade flera nedladdningar samtidigt. | Tillåt flera nedladdningar för den här webbplatsen och exportera igen. |
| (fil) är inte ett TakeoffCraft-projekt (det är inte giltig JSON). / Det här är inte en TakeoffCraft-projektfil. | Fel fil, eller en skadad sådan. | Välj filen `.takeoff.json`. |
| Det här projektet sparades av en nyare TakeoffCraft. Öppna det där. | Filen kommer från en nyare version. | Öppna den i den nyare versionen. |
| (n) markeringar var skadade och lämnades bort. | En del av filen var skadad eller redigerad för hand. | Resten öppnades. Rita om de saknade markeringarna, eller öppna en äldre kopia. |
| Markeringar saknas efter att du öppnat igen | PDF:erna är inte öppna, eller en av dem har ändrats. | Se [Spara och öppna en mängdavtagning igen](topic:save-and-reopen#when-a-pdf-has-changed). |
| Webbläsaren frågar "Lämna sidan?" | Det finns osparade ändringar. | Stanna, och spara med {{key:Mod+S}}. |

## Tangenter och mus

| Symtom | Orsak | Åtgärd |
|---|---|---|
| Bokstavstangenter gör ingenting | Markören står i ett fält (sök, postredigeraren, tabellen). | Klicka på ritningen, eller tryck på {{key:Tab}} för att lämna fältet. |
| Hjulet zoomar i stället för att scrolla | Hjulet zoomar alltid ritningen. | Dra för att panorera. |
| Hela sidan blev större eller mindre | Webbläsarzoom ({{key:Mod+Plus}} eller {{key:Mod+Minus}}). | Tryck på {{key:Mod+0}}. Zooma ritningen med hjulet eller med {{key:Plus}} och {{key:Minus}} utan modifierare. |
| En markering försvann när jag tryckte på Backspace | Backspace tar bort den markerade markeringen när du inte ritar. | {{key:Mod+Z}} får tillbaka den. |
| Högerklick avslutar inte på en Mac | Control-klick kommer fram som ett vanligt klick. | Använd ett tvåfingerklick med sekundärklick påslaget, eller tryck på {{key:Enter}}. |

## Pekskärmar

På en pekskärm:

- **Tryck** placerar en punkt (eller markerar en markering med {{ui:Markera}}). En finger som drar panorerar.
- **Två fingrar** nyper för att zooma kring punkten mellan dem, och panorerar när de rör sig tillsammans. Om du sätter ned ett andra finger avbryts det första fingrets åtgärd, så en nypning lämnar aldrig en punkt kvar.
- **Avsluta** en sträcka eller kontur med ett **långt tryck** (högerklicket), ett **dubbeltryck**, eller {{ui:Klar}} i fältet längst ned på ritningen. Samma fält har {{ui:Baksida}} (tar tillbaka den sista punkten) och {{ui:Avbryt}}. Areor stängs också genom att trycka på första punkten.
- Fingrar får större träffytor: punkter fångas, stängs och väljs från längre bort, och hörnhandtagen är större.

Att skriva in längder kräver ett tangentbord; skärmtangentbordet fungerar när rutan {{ui:Ange}} är aktiv.

På en surfplatta gör ett tangentbord och en mus eller styrplatta mängdavtagningen mycket enklare.

## Arbeta offline

| Knapp eller symtom | Orsak | Åtgärd |
|---|---|---|
| {{ui:Kunde inte spara}} | Några av appens filer laddades inte ner när den sparades för offlineanvändning. | Kontrollera din anslutning och välj knappen igen. |
| {{ui:Offline är inte tillgängligt}} | Privata fönster och vissa hanterade datorer blockerar offlinekopior. | Använd ett vanligt fönster, eller en annan webbläsare. |
| "Sparar…" startar aldrig | Du är offline; sparande kräver en anslutning. | Spara när du är online. |
| Appen är gammal efter en uppdatering | Offlinekopian är från en tidigare dag. | Välj online {{ui:Redo för offline}}, och sedan {{ui:Spara igen (hämta den senaste versionen)}}. |
| Du vill få tillbaka utrymmet | Offlinekopian är cirka 6 MB. | Välj {{ui:Redo för offline}}, och sedan {{ui:Ta bort offlinekopian}}. |

Se [Arbeta offline](common:offline).

## Fortfarande fast

Ladda om sidan om appen slutar svara. Din mängdavtagning går förlorad vid omladdning om du inte sparade den, så spara först med {{key:Mod+S}} om du kan. För frågor om webbläsare se [Webbläsare och datorer](common:browsers).
