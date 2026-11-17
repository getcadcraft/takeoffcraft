---
title: Probleemoplossing
summary: Symptomen, oorzaken en oplossingen voor de meldingen en verrassingen die u in TakeoffCraft kunt tegenkomen, geciteerd zoals de app ze toont.
keywords: problemen, fouten, werkt niet, oplossen, help, geweigerd, meet niet, geen schaal, ontbrekende markeringen, export mislukt, offline, aanraken
from: cd319c9b
---

TakeoffCraft legt de meeste weigeringen uit in de statusbalk onder aan het venster. Zoek het bericht hieronder.

## Bestanden openen

| Bericht of symptoom | Oorzaak | Oplossing |
|---|---|---|
| De pdf-lezer kon niet laden. Laad de pagina opnieuw om het opnieuw te proberen. | De pdf-lezer van de app is niet geladen, meestal omdat u offline bent en de app nooit voor offline gebruik is opgeslagen. | Maak weer verbinding en laad opnieuw. Kies daarna {{ui:Opslaan voor offline gebruik}} en wacht op {{ui:Klaar voor offline gebruik}}; zie [Offline werken](common:offline). |
| (naam) is met een wachtwoord beveiligd. Open een onbeveiligde kopie. | Voor de pdf is een wachtwoord nodig om te openen. | Vraag om een onbeveiligde kopie, of verwijder het wachtwoord in een pdf-programma dat u vertrouwt. |
| (naam) kon niet als pdf worden gelezen (…) | Het bestand is beschadigd of is niet echt een pdf. | Download het opnieuw, of sla het opnieuw op vanuit het programma dat het heeft gemaakt. |
| (naam) is al geopend. | Dezelfde pdf (zelfde inhoud) is geopend. | Niets te doen. |
| TakeoffCraft opent pdf's en .takeoff.json-projecten. Overgeslagen: … | Andere bestandstypen zijn weggelaten. | Zet tekeningen eerst om naar pdf. |
| Er gebeurt niets wanneer ik bestanden loslaat | De bestanden zijn buiten het browservenster losgelaten, of de browser heeft de pdf in een nieuw tabblad geopend. | Laat ze los op de TakeoffCraft-pagina zelf; het kader "Sleep pdf's of een .takeoff.json hierheen" laat zien wanneer het werkt. |
| Een grote set openen duurt even | Elke pdf wordt volledig gelezen om er een vingerafdruk van te maken. | Wacht tot het bericht "Openen (naam)…" verdwijnt. Miniaturen vullen zich als u scrollt. |

## Meten

| Bericht of symptoom | Oorzaak | Oplossing |
|---|---|---|
| Open eerst een pdf. | Er is geen blad geopend. | Open een pdf. |
| Dit blad heeft nog geen schaal, dus het kan niet worden gemeten. Kies eerst een schaalvoorinstelling of ijk (tellingen werken zonder). | Lineaire, oppervlakte-, cirkel- en uitsparingsgereedschappen hebben een schaal nodig. | [Schaal instellen](topic:set-the-scale). |
| Maak eerst een lineaire post (geef die een naam onder Posten), en klik daarna op het blad. | Er is geen post van dat type. | Vul het formulier {{ui:Nieuwe post}} in dat openging, en kies {{ui:Toevoegen}}. |
| Kies eerst een post om op te meten (paneel Posten). | De huidige post is verwijderd. | Klik op een post onder {{ui:Posten}}. |
| Een lengte heeft minstens twee punten nodig. | U bent na één klik gestopt. | Klik op minstens twee punten. |
| Een oppervlakte heeft minstens drie punten nodig. | Te weinig hoeken. | Klik op minstens drie hoeken. |
| De omtrek kruist zichzelf, dus de oppervlakte zou verkeerd zijn. Teken hem opnieuw zonder kruising. | Een achtvormige figuur. | Teken hem als twee oppervlakken, of loop de rand in volgorde rond. |
| Die punten sluiten geen oppervlakte in. | Alle punten liggen op één lijn. | Klik op hoeken die een ruimte insluiten. |
| Selecteer eerst een oppervlaktemarkering (Selecteren-gereedschap), kies dan Uitsparing en teken het gat erin. | {{ui:Uitsparing}} heeft een geselecteerde oppervlakte nodig. | Druk op {{key:V}}, klik op de oppervlakte, en daarna op {{key:X}}. |
| Een uitsparing moet volledig binnen de oppervlakte liggen. | Het gat kruist de omtrek of gaat erbuiten. | Teken het gat binnen de oppervlakte. |
| Uitsparingen mogen elkaar niet overlappen. | Twee gaten overlappen. | Teken één gat om beide heen, of houd ze uit elkaar. |
| … Het punt is teruggezet. | Een gesleepte hoek zou de omtrek zichzelf laten kruisen of een gat naar buiten duwen. | Sleep naar een plek die de vorm geldig houdt. |
| Klik op een punt op de rand van de cirkel, weg van het middelpunt. | De tweede klik was te dicht bij het middelpunt. | Klik verder weg. |
| Klikken verschuift het blad in plaats van punten toe te voegen | De aanwijzer bewoog meer dan een paar pixels terwijl de knop ingedrukt was; dat telt als slepen. | Klik zonder te bewegen, vooral op een trackpad. |
| {{key:Shift}} klikt niet vast | U plaatst een punt op een boog, of tekent een cirkel. | Het 45°-vastklikken geldt alleen voor rechte segmenten. |
| Punten springen naar een nabije lijn | Vastklikken op de lijnen van de tekening staat aan. | Zoom in om tussen lijnen te klikken, of druk op {{key:F3}} om Vastklikken uit te zetten. |
| Er verschijnt geen vastklikmarkering | Vastklikken staat uit, het blad is een scan, of het gereedschap klikt niet vast (Tellen, Automatisch tellen, plakken). | Druk op {{key:F3}}; bij een scan zijn er geen lijnen om op vast te klikken. |
| De lengte klopt niet | De schaal is verkeerd (vaak een verkleinde pdf met een voorinstelling). | Gebruik {{ui:Controleren}} op een bekende maat, en daarna {{ui:Ijken}}. |

## Schaal

| Bericht of symptoom | Oorzaak | Oplossing |
|---|---|---|
| Kies twee punten die verder uit elkaar liggen. | De ijkpunten liggen bijna op elkaar. | Ijk op een langere maat. |
| Een melding in het ijkdialoogvenster, zoals "Die afstand kon niet worden gelezen" | De afstand staat in een vorm die TakeoffCraft niet kan lezen. | Zie [Invoer van lengte, tarief en percentage](topic:entry-formats). |
| Dit blad heeft nog geen schaal, dus er valt niets te controleren. Ijk het, of kies een voorinstelling. | {{ui:Controleren}} op een blad zonder schaal. | Stel eerst een schaal in. |
| De lijst {{ui:Voorinstelling}} is grijs | Er is geen blad geopend. | Open een pdf. |

## Hoeveelheden en formules

| Bericht of symptoom | Oorzaak | Oplossing |
|---|---|---|
| Onvolledig: … (niet in de totalen) | Een formulefout, of markeringen op bladen zonder schaal. | Zie [Hoeveelheden en de raming lezen](topic:read-quantities#the-incomplete-warning). |
| +(n) zonder schaal naast een post | Sommige van de markeringen staan op bladen zonder schaal. | Geef die bladen een schaal. |
| Formulefout: … | De formule kan niet worden berekend. | Zie [Formuletaal](topic:formulas#errors). |
| Deze post heeft markeringen, dus het type kan niet veranderen. | Het type is vergrendeld zodra er markeringen zijn. | Maak een nieuwe post van het andere type en teken de markeringen daarmee opnieuw. |
| Een post heeft een naam nodig. | Het naamveld is leeggemaakt. | Typ een naam. |
| Typ een bedrag zoals 12.50. / Typ een percentage zoals 10 of 7.5. | Een tarief of verlies kon niet worden gelezen. | Zie [Invoer van lengte, tarief en percentage](topic:entry-formats). |
| Een totaal lijkt dubbel | De post heeft eigen tarieven en onderdelen die dezelfde kosten dragen. | Zet de eigen tarieven van de post op 0 wanneer de onderdelen de kosten dragen. |
| De markeringen van deze post staan op pdf's die niet geopend zijn. | U hebt een post aangeklikt waarvan alle markeringen op pdf's staan die u nog niet hebt geopend. | Open die pdf's; hun namen staan onder {{ui:Bladen}}. |

## Automatisch tellen

| Bericht of symptoom | Oorzaak | Oplossing |
|---|---|---|
| Dat kader is te klein. Teken het rond het hele symbool. | Het kader is heel klein. | Zoom in en omkader het hele symbool. |
| Dat kader is bijna leeg. Teken het rond een symbool. | Het kader bevat alleen papier. | Omkader het symbool zelf. |
| Geen overeenkomsten. Verlaag de schuifregelaar Overeenkomst, of omkader het symbool strakker. | Niets scoorde hoog genoeg. | Omkader het symbool strak, of sleep de schuif {{ui:Overeenkomst}} lager. |
| Te veel overeenkomsten, ook verkeerde symbolen | Vergelijkbare symbolen scoren dicht bij het echte. | Verhoog de schuif {{ui:Overeenkomst}} en klik op verkeerde kaders om ze af te wijzen. |
| Overeenkomsten ontbreken op andere bladen | Die bladen tekenen het symbool in een andere grootte, of onder een hoek die geen stap van 90° is. | Zoek die bladen door er een kader te tekenen, of tel met de hand. |
| (n) bladen waren te groot om bij deze symboolgrootte te doorzoeken. | Het blad zou bij de werkgrootte te groot zijn. | Omkader een groter symbool, of tel dat blad met de hand. |
| Het zoeken is mislukt: … | Het zoeken op de achtergrond is gestopt. | Probeer het opnieuw; laad de pagina opnieuw als het zich herhaalt (sla eerst op). Offline werkt het alleen zodra de appbalk {{ui:Klaar voor offline gebruik}} toont. |
| Slepen tekent een kader in plaats van te verschuiven | Zo werkt {{ui:Automatisch tellen}}. | Houd {{key:Space}} ingedrukt en sleep, of sleep met de middelste knop. |

## Opslaan en exporteren

| Bericht of symptoom | Oorzaak | Oplossing |
|---|---|---|
| Nog niets om te exporteren: maak een post en meet hem op. | Er zijn geen posten. | Maak eerst een post. |
| Nog geen markeringen op de geopende pdf's. | {{ui:Gemarkeerde pdf}} heeft niets om op de geopende pdf's te tekenen. | Open de pdf's die markeringen hebben. |
| Deze pdf is met een wachtwoord beveiligd of versleuteld, dus er kan geen gemarkeerde kopie worden geschreven. … | De pdf is versleuteld. | Exporteer in plaats daarvan {{ui:XLSX}}, of gebruik een niet-versleutelde kopie van de pdf (die heeft dan een eigen opmeting nodig, omdat het een ander bestand is). |
| De gemarkeerde pdf kon niet worden geschreven: … | Vaak: offline, en de app is niet voor offline gebruik opgeslagen, dus de pdf-schrijver ontbreekt. | Ga online en kies opnieuw {{ui:Gemarkeerde pdf}}. Om dat te voorkomen, kiest u {{ui:Opslaan voor offline gebruik}} en wacht u op {{ui:Klaar voor offline gebruik}}. |
| Slechts één gemarkeerde pdf is gedownload | De browser blokkeerde meerdere downloads tegelijk. | Sta meerdere downloads voor deze site toe, en exporteer opnieuw. |
| (bestand) is geen TakeoffCraft-project (het is geen geldige JSON). / Dit is geen TakeoffCraft-projectbestand. | Verkeerd bestand, of een beschadigd bestand. | Kies het `.takeoff.json`-bestand. |
| Dit project is opgeslagen met een nieuwere TakeoffCraft. Open het daar. | Het bestand komt van een nieuwere versie. | Open het in de nieuwere versie. |
| (n) markeringen waren beschadigd en zijn weggelaten. | Een deel van het bestand was beschadigd of met de hand bewerkt. | De rest is geopend. Teken de ontbrekende markeringen opnieuw, of open een oudere kopie. |
| Markeringen ontbreken na opnieuw openen | De pdf's zijn niet geopend, of een ervan is gewijzigd. | Zie [Een opmeting opslaan en opnieuw openen](topic:save-and-reopen#when-a-pdf-has-changed). |
| De browser vraagt "Site verlaten?" | Er zijn niet-opgeslagen wijzigingen. | Blijf op de pagina en sla op met {{key:Mod+S}}. |

## Toetsen en muis

| Symptoom | Oorzaak | Oplossing |
|---|---|---|
| Lettertoetsen doen niets | De cursor staat in een veld (zoeken, postbewerker, tabel). | Klik op het blad, of druk op {{key:Tab}} om het veld te verlaten. |
| Het wiel zoomt in plaats van te scrollen | Het wiel zoomt het blad altijd. | Sleep om te verschuiven. |
| De hele pagina werd groter of kleiner | Zoom van de browser ({{key:Mod+Plus}} of {{key:Mod+Minus}}). | Druk op {{key:Mod+0}}. Zoom het blad met het wiel of met {{key:Plus}} en {{key:Minus}} zonder extra toets. |
| Een markering verdween toen ik op Backspace drukte | Backspace verwijdert de geselecteerde markering wanneer u niet tekent. | {{key:Mod+Z}} haalt hem terug. |
| Rechtsklikken rondt niet af op een Mac | Control-klik komt aan als een gewone klik. | Gebruik een tweevingerklik met secundaire klik ingeschakeld, of druk op {{key:Enter}}. |

## Aanraakschermen

Op een aanraakscherm:

- **Tikken** plaatst een punt (of selecteert een markering met {{ui:Selecteren}}). Eén vinger slepen verschuift.
- **Twee vingers** knijpen om in te zoomen op het punt ertussen, en verschuiven wanneer ze samen bewegen. Een tweede vinger neerzetten annuleert wat de eerste begon, zodat een knijpbeweging nooit een punt achterlaat.
- **Voltooi** een lengte of omtrek met een **lang indrukken** (de rechtermuisklik), een **dubbele tik**, of {{ui:Klaar}} in de balk onderaan het blad. Dezelfde balk heeft {{ui:Achter}} (het laatste punt terugnemen) en {{ui:Annuleren}}. Oppervlakken sluiten ook door op het eerste punt te tikken.
- Vingers krijgen grotere doelen: punten klikken vast, sluiten en kiezen van verder weg, en de hoekgrepen zijn groter.

Lengten typen vraagt een toetsenbord; het schermtoetsenbord werkt wanneer het vak {{ui:Invoer}} actief is.

Op een tablet maken een toetsenbord en een muis of trackpad opmeten veel makkelijker.

## Offline werken

| Knop of symptoom | Oorzaak | Oplossing |
|---|---|---|
| {{ui:Kon niet opslaan}} | Sommige bestanden van de app zijn niet gedownload tijdens het opslaan voor offline gebruik. | Controleer uw verbinding en kies de knop opnieuw. |
| {{ui:Offline gebruik is niet beschikbaar}} | Privévensters en sommige beheerde computers blokkeren offline kopieën. | Gebruik een normaal venster, of een andere browser. |
| "Opslaan…" start nooit | U bent offline; opslaan vereist een verbinding. | Sla op terwijl u online bent. |
| De app is oud na een update | De offlinekopie is van een eerdere dag. | Kies online {{ui:Klaar voor offline gebruik}}, en daarna {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}}. |
| U wilt de ruimte terug | De offlinekopie is ongeveer 6 MB. | Kies {{ui:Klaar voor offline gebruik}}, en daarna {{ui:De offlinekopie verwijderen}}. |

Zie [Offline werken](common:offline).

## Nog steeds vast

Laad de pagina opnieuw als de app niet meer reageert. Uw opmeting gaat verloren bij opnieuw laden, tenzij u die hebt opgeslagen; sla daarom eerst op met {{key:Mod+S}} als dat kan. Voor vragen over browsers zie [Browsers en computers](common:browsers).
