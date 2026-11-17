---
title: Mät ytor med urtag
summary: Konturera golv, tak och bjälklag, skär ut hål ur dem, lägg till bågade kanter, cirklar och runda urtag och läs av area och omkrets.
keywords: rumsfyllning, flödesfyllning, färghink, klicka inne i ett rum, automatisk area, bakåtavdrag, backout, pelare, schakt, avdrag från flera poster, area, polygon, kontur, kvadratfot, sf, urtag, hål, avdrag, cirkel, rund, båge, omkrets, golv, tak, bjälklag
from: 34648db7
---

En area-post mäter innesluten area. Varje kontur kan ha hål skurna ur sig (ett schakt, en pelare, en planteringslåda), och dess kanter kan vara raka eller bågade.

Innan du börjar: bladet behöver en skala ([Ange skalan](topic:set-the-scale)) och du behöver en area-post ([Skapa avtagningsposter](topic:create-items)).

## Konturera en yta

1. Klicka på area-posten under {{ui:Poster}}.
2. Välj {{ui:Area}} i verktygsfältet, eller tryck {{key:A}}.
3. Klicka på varje hörn av rummet eller bjälklaget i tur och ordning. Håll {{key:Shift}} för kanter på 0°, 45° och 90°.
   Från tredje punkten fylls konturen i, och statusfältet visar ”Area” och ”Omkrets”. En liten ring visas runt första punkten.
4. Stäng konturen: klicka på första punkten (inuti dess ring), tryck {{key:Enter}}, dubbelklicka eller högerklicka.
   Ytan fylls lätt i postens färg, märks med sina kvadratfot och blir den markerade markeringen.

{{key:Backspace}} tar bort sista hörnet; {{key:Esc}} kastar bort konturen.

En kontur som korsar sig själv avvisas: ”Konturen korsar sig själv, så arean skulle bli fel. Rita den på nytt utan att korsa.” Rita en åttaformad figur som två ytor i stället.

## Bågade kanter

Slå på bågläget ({{ui:Båge}} eller {{key:R}}) medan du konturerar. Efter ett hörn klickar du på en punkt längs kurvan och sedan där kurvan slutar. För att stänga konturen med en kurva gör du det sista klicket på första punkten. Arean och omkretsen använder den exakta kurvan. Tryck {{key:R}} igen för raka kanter. För att ändra en kurva i efterhand markerar du ytan och drar det runda handtaget i mitten av bågen. Se [Mät linjära sträckor](topic:measure-linear#arcs-and-curved-walls).

## En cirkel

1. Med en area-post väljer du {{ui:Cirkel}} eller trycker {{key:O}}.
2. Klicka på mitten.
3. Klicka på valfri punkt på kanten.
   Medan du flyttar visar statusfältet radien och arean. Cirkeln läggs till som en areamarkering med exakt area och omkrets.

## Fyll ett rum med ett klick

När rummen är ritade som slutna väggar tar {{ui:Rum}} ({{key:B}}) bort ett golv med ett klick:

1. Välj en area-post (en golvbeläggning, till exempel) och ange bladets skala.
2. Välj {{ui:Rum}} i gruppen {{ui:Mängdavtagning}}, eller tryck {{key:B}}.
3. Klicka inne i ett rum, på det öppna golvet (inte på en linje eller en etikett).

TakeoffCraft läser bladets linjer, hittar utrymmet runt klicket och konturerar det längs väggarnas insidor, som en area för den aktuella posten. Dörröppningar upp till **4'-0"** behandlas som slutna, så konturen går rakt över dörröppningen; **Inställningar › TakeoffCraft › Rumsfyllning stänger öppningar upp till** ändrar bredden (3'-0" till 8'-0"). Rumsnamn, möbler och inredning inuti rummet gör inga hål.

Den vägrar och säger varför när:

- klicket är på en linje (”Det är på en linje”);
- utrymmet inte är slutet: en öppning som är bredare än inställningen låter det löpa ut till bladets kant. Höj inställningen, eller konturera rummet för hand med {{ui:Area}};
- utrymmet är litet (en symbol, inte ett rum).

När en dörr är bredare än inställningen löper fyllningen in i nästa rum och konturerar båda tillsammans: ångra ({{key:Mod+Z}}), höj inställningen och klicka igen. Kontrollera konturen som vilken yta som helst: dra dess hörn för att rätta den. En skannad ritning fungerar på samma sätt, men dess linjer måste vara tillräckligt mörka; ljusgrå linjer kan hindra fyllningen från att stanna.

## Skär ut ett hål ur en yta

1. Välj {{ui:Markera}} ({{key:V}}) och klicka på ytan. Den visar kvadratiska handtag vid sina hörn.
2. Välj {{ui:Urtag}} i verktygsfältet (eller tryck {{key:X}}), eller {{ui:Lägg till ett urtag}} under **Vald markering**.
3. Klicka på hålets hörn, inuti ytan. Bågläget fungerar här också.
4. Stäng det som en yta: klicka på dess första punkt, tryck {{key:Enter}}, dubbelklicka eller högerklicka.
   Hålet lämnas ofyllt, och statusfältet säger "Urtag tillagt. Rita ett till eller tryck Esc."
5. Rita fler hål i samma yta, eller tryck {{key:Esc}}.

För ett runt hål väljer du {{ui:Lägg till ett runt urtag}} under **Vald markering**, klickar på dess mitt och sedan på en punkt på kanten.

Ett urtag måste ligga helt inuti ytan och får inte överlappa ett annat urtag. Annars vägrar TakeoffCraft det: ”Ett urtag måste ligga helt inuti ytan.” eller ”Urtag kan inte överlappa varandra.”

För att ta bort det sista hålet igen, välj {{ui:Ta bort senaste urtaget}}.

## Bakåtavdrag: pelare, schakt och öppningar som dras från flera poster

Ett urtag tillhör en areamarkering. Ett **bakåtavdrag** ritas en gång och dras av från varje yta det överlappar, för de poster du väljer: rita pelarna en gång, så dras de av från golvbeläggningen, taket och bjälklaget tillsammans.

1. Gör en area-post för dem, till exempel "Pelare".
2. Bocka i **Bakåtavdrag: dess markeringar tar bort sin area från andra poster** i postens inställningar. En lista över dina andra area-poster visas, alla ibockade: avbocka dem som bakåtavdragen inte ska röra (målning på väggarna, till exempel).
3. Ta av pelarna med {{ui:Area}} eller {{ui:Cirkel}}, som vanligt. Var och en ritas streckad.

Varje areamarkering för en ibockad post på samma blad förlorar den del som ett bakåtavdrag täcker: hela bakåtavdraget när det ligger inuti, bara den överlappande delen när det korsar kanten, och inget inuti ett urtag. Den valda ytans panel visar **Bakåtavdrag** och den återstående arean. Postens mängd, dess formler för kalkylsammansättningen, kostnaderna, 3D-kontrollvyn och exporten använder den återstående arean; kalkylens noteringar anger hur mycket bakåtavdragen tog bort. Bakåtavdragsposten räknar själv sin egen area (lämna dess kostnader på noll om du inte prissätter den).

Ett bakåtavdrag måste vara **konvext**: en rektangel, en cirkel eller valfri kontur utan inåtvänt hörn. TakeoffCraft vägrar att rita ett som inte är det; rita ett L-format schakt som två bakåtavdrag. Bakåtavdrag kan inte ha urtag, och två bakåtavdrag som överlappar varandra räknas båda.

Omkretsen (`P`) ändras inte: bakåtavdrag tar bort endast area.

## Läs arean

Markera ytan. **Vald markering** visar:

| Rad | Betydelse |
|---|---|
| Area | Nettoarean: kontur minus urtag. Det är detta posten räknar. |
| Kontur | Bruttoarean inuti konturen (visas när det finns urtag). |
| Urtag | Antal hål och deras sammanlagda area. |
| Omkrets | Konturens kantlängd, **plus** kanterna på varje urtag (”med urtag”). |

Omkretsen inkluderar urtagens kanter med avsikt, för sådant som kantformer eller sockel som också går runt ett hål. Om du bara behöver den yttre kanten, håll hål borta från den posten eller mät den yttre kanten som en linjär sträcka.

Postens {{ui:Enhet}} avgör hur summan redovisas: SF, SY eller m². Panelen **Vald markering** och statusfältet visar alltid kvadratfot.

## Rätta en yta

- **Flytta ett hörn**: markera ytan och dra ett hörnhandtag (hål har handtag också). Om den nya formen skulle korsa sig själv eller skjuta ett hål utanför, sätts hörnet tillbaka: ”Punkten sattes tillbaka.”
- **Flytta till en annan post**: välj en annan area-post i listan **Post** under **Vald markering**.
- **Ta bort**: {{key:Delete}}, {{ui:Ta bort}} i verktygsfältets menyn {{ui:Mer}}, eller {{ui:Ta bort markering}}.

## Djup för volymer

Ge area-posten ett {{ui:Djup}} (till exempel `0'-4"` för ett bjälklag) och använd `A * H / 27` i en komponent i en sammansättning för att få kubikyard. Se [Sammansättningar och formler](topic:assemblies).
