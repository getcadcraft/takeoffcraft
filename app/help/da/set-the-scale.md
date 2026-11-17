---
title: Angiv målestokken
summary: Giv hvert ark en målestok med en forudindstilling eller ved at kalibrere på et kendt mål, kontrollér den, og forstå hvorfor ark uden målestok udelades fra totalerne.
keywords: find målestok, læs målestok, målestok fra tekst, alle ark, målestok, kalibrér, forudindstilling, kontrollér målestok, verificér, kendt mål, uden målestok, ingen målestok, forhold, angiv målestok
from: 8f0148e6
---

Hvert ark har sin egen målestok. Du angiver den, eller lader TakeoffCraft læse den fra arkenes tekst (nedenfor), og kontrollerer den. Indtil et ark har en, nægter {{ui:Lineær}}, {{ui:Areal}}, {{ui:Cirkel}} og {{ui:Udsparing}} at måle på det. {{ui:Tæl}} og {{ui:Auto-tælling}} virker uden målestok.

Arkelisten viser hvert arks målestok eller **Ingen målestok**. Linjen under det åbne ark siger det samme.

## Brug en forudindstilling (når PDF'en er udskrevet i fuld størrelse)

1. Åbn arket.
2. Åbn listen {{ui:Forudindstilling}} i gruppen {{ui:Målestok}}.
3. Vælg målestoken der står på tegningen, for eksempel `1/8" = 1'-0"` under Arkitektonisk.
   Statuslinjen siger »Målestok for dette ark: 1/8" = 1'-0".«
4. Kontrollér den (nedenfor).

En forudindstilling forudsætter at PDF'en er den rigtige papirstørrelse, tegningen blev lavet til. Hvis nogen har lavet PDF'en med »tilpas til side«, eller det er et sæt i halv størrelse, er forudindstillingen forkert. Kalibrér i stedet.

Den fulde liste findes i [Målestok-forudindstillinger](topic:scale-presets).

## Læs målestokkene fra arkenes tekst

De fleste tegninger angiver deres målestok: `SCALE: 1/4" = 1'-0"` i tegningshovedet, `1:100` under en visning. TakeoffCraft kan læse den og angive alle ark på én gang.

1. Åbn listen {{ui:Forudindstilling}} og vælg {{ui:Fra arkenes tekst…}} (øverst).
2. Listen viser hvert ark: dets nuværende målestok, og hvad dets tekst siger — **Siger 1/4" = 1'-0"**, **Ingen målestok i dens tekst** eller **Siger ikke i målestok** (NTS).
3. Ark uden målestok der angiver en, er afkrydsede. Sæt eller fjern kryds på hvilke som helst, og vælg derefter {{ui:Angiv de afkrydsede målestokke}}. Ét {{key:Mod+Z}} fortryder dem alle.
4. Kontrollér ét mål på hvert ark med {{ui:Kontrollér}} (nedenfor): en forudindstilling er kun rigtig, når PDF'en er udskrevet i fuld størrelse.

Den læser arkitektoniske (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), ingeniørmæssige (`1" = 20'`) og metriske (`1:50`) notationer, der passer til en [forudindstilling](topic:scale-presets). Når et ark siger mere end én målestok (en plan med forstørrede detaljer), tager den den, den oftest nævner, og en der står efter ordet SCALE tæller dobbelt; de andre vises med rødt, så du kan kontrollere. Et scannet ark har ingen tekst: angiv dens målestok i hånden.

## Kalibrér på et kendt mål

Brug dette når der ikke er en trykt målestok du stoler på, sættet er ændret i størrelse, eller arket siger »ikke i målestok« men har mål.

1. Åbn arket og zoom ind på et langt mål du kender, såsom en akseafstand eller et samlet bygningsmål. Jo længere, jo mere præcist.
2. Vælg {{ui:Kalibrér}} i gruppen {{ui:Målestok}}, eller tryk {{key:K}}.
3. Klik på den ene ende af målet. Zoom ind på hver ende for præcision; du kan zoome og panorere mellem klikkene.
4. Klik på den anden ende. Hold {{key:Shift}} for at holde linjen på 0°, 45° eller 90°.
   Dialogboksen **Kalibrér dette ark** åbnes.
5. Skriv den virkelige afstand i **Virkelig afstand**, for eksempel `24'-6 1/2"`, `24.5` (decimalfod), `30"` eller `7.5 m`. Se [Indtastning af længde, pris og procent](topic:entry-formats).
6. Vælg {{ui:Angiv målestokken}}.
   Statuslinjen viser målestokken som »1" = (n)'«, og når den ligger inden for 0.5 % af en forudindstilling, siger den hvilken, for eksempel »som svarer til 1/4" = 1'-0" (vælg den forudindstilling for en præcis målestok)«.
   TakeoffCraft vender tilbage til værktøjet {{ui:Vælg}}.

Når kalibreringen svarer til en forudindstilling, giver valg af den forudindstilling en præcis målestok i stedet for en, der afhænger af hvor du klikkede.

## Kontrollér målestokken

Kontrollér altid en ny målestok på et andet mål.

1. Vælg {{ui:Kontrollér}} i gruppen {{ui:Målestok}}, eller tryk {{key:D}}.
2. Klik på begge ender af et mål trykt på tegningen.
   Statuslinjen viser »Kontrol: 12'-6"« med samme længde i decimalfod og meter, og kontrollinjen bliver på arket med sin længde.
3. Sammenlign den med det trykte mål. Hvis den er forkert, kalibrér på et længere mål.

Tryk {{key:Esc}} for at fjerne kontrollinjen.

## Ændr en målestok

Vælg en anden forudindstilling eller kalibrér igen. Hvis arket allerede har målinger, spørger TakeoffCraft **Ændr dette arks målestok?** og siger hvor mange målinger der måles igen. Vælg {{ui:Ændr målestokken}}. Hvert forløb og areal på arket måles igen i den nye målestok. Du kan fortryde det med {{key:Mod+Z}}.

## Hvorfor ark uden målestok ikke tælles som nul

En markering på et ark uden målestok har ingen reel længde eller areal. TakeoffCraft tæller den aldrig som nul, for det ville stille og roligt gøre din kalkulation for lav. I stedet:

- udelader disse markeringer fra totalerne,
- viser »+(n) uden målestok« ved siden af posten i {{ui:Mængder}},
- viser »Ufuldstændig: (n) markeringer på ark uden målestok (ikke med i totalerne)« i tabelhovedet,
- skriver antallet i noterkolonnen i regnearkseksporten.

Det kan ske, når du åbner et projekt, hvis målestokke aldrig blev angivet. Giv arket en målestok, og markeringerne tælles med det samme. Tællemarkeringer tælles altid; de har brug for ingen målestok.

## Tips

- Angiv målestokken på hvert ark, du vil måle, inden du går i gang. Gennemgå arkelisten for **Ingen målestok** for at finde de resterende (søgefeltet kigger på arknavne, ikke målestokke).
- Detaljer og forstørrede planer på samme ark bruger ofte en anden målestok. TakeoffCraft har én målestok pr. ark; se [Hvad der ikke er lavet endnu](topic:not-built-yet).
- Metriske tegninger: vælg en metrisk forudindstilling såsom `1:100`, eller kalibrér med en metrisk afstand som `6000 mm`.
