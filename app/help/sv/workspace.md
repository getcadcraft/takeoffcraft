---
title: TakeoffCraft-skärmen
summary: En rundtur i fönstret med namnen på skärmen - verktygsfältet, bladlistan, bladet, panelen Poster, tabellen Mängder och statusfältet.
keywords: skärm, layout, layouter, menyflik, projektwebbläsare, verktygslåda, infobox, verktygsfält, paneler, bladlista, postpanel, mängder, statusfält, rundtur, gränssnitt
from: ab1115e0
---

TakeoffCraft fyller webbläsarfönstret under CadCraft-appfältet. Uppifrån och ned och från vänster till höger:

| Del | Var | Vad den är till för |
|---|---|---|
| Appfält | Allra överst | Appens namn, versionen, {{ui:Om TakeoffCraft}}, {{ui:Hjälp}} ({{key:F1}}), {{ui:Spara för offline}}, {{ui:Inställningar}} ({{key:Mod+,}}), knappen {{ui:Helskärm}} och temaomkopplaren {{ui:Papper}} / {{ui:Modell}}. |
| Verktygsfält | Under appfältet | Varje kommando, i grupper: {{ui:Fil}}, {{ui:Exportera}}, {{ui:Skala}}, {{ui:Mängdavtagning}}, {{ui:Redigera}}, {{ui:Visa}}. |
| Blad | Vänster | Varje sida i varje öppen PDF, med en miniatyr, dess skala och antal markeringar. |
| Bladet | Mitten | Den öppna sidan. Du mäter här. |
| Poster | Höger | Dina poster, den markerade postens inställningar och den markerade markeringen. |
| Mängder | Nederkant | Mängder och kostnader per post eller per blad, och jobbets summa. |
| Statusfält | Allra nederst | Det levande måttet, meddelanden, 45°-tipset och zoomen. |

## Verktygsfältet

Håll pekaren över en knapp för att se vad den gör och dess tangent.

| Grupp | Knappar |
|---|---|
| {{ui:Fil}} | {{ui:Ny}} (tom mängdavtagning), {{ui:Öppna PDF-filer}} ({{key:Mod+O}}), {{ui:Öppna avtagning}} (ett `.takeoff.json`-projekt), {{ui:Spara avtagning}} ({{key:Mod+S}}) |
| {{ui:Exportera}} | En meny: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Markerad PDF}} |
| {{ui:Skala}} | {{ui:Kalibrera}} ({{key:K}}), {{ui:Kontrollera}} ({{key:D}}) och listan {{ui:Förval}} |
| {{ui:Mängdavtagning}} | {{ui:Markera}} ({{key:V}}), {{ui:Linjär}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Cirkel}} ({{key:O}}), {{ui:Båge}} ({{key:R}}, en på/av-omkopplare), {{ui:Avdrag}} ({{key:E}}, en på/av-omkopplare), {{ui:Urtag}} ({{key:X}}), {{ui:Räkna}} ({{key:C}}), {{ui:Autoräkna}} ({{key:S}}) |
| {{ui:Redigera}} | {{ui:Ångra}} ({{key:Mod+Z}}), {{ui:Gör om}} ({{key:Mod+Y}}), {{ui:Kopiera}} ({{key:Mod+C}}), {{ui:Klistra in}} ({{key:Mod+V}}) och {{ui:Mer}}: {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}}, {{ui:Avmarkera}} |
| {{ui:Visa}} | {{ui:Anpassa sida}} ({{key:F}}), {{ui:Anpassa bredd}} ({{key:W}}) |

Verktyget du använder visas nedtryckt. Knapparna {{ui:Båge}} och {{ui:Avdrag}} förblir nedtryckta medan de är på.

## Blad (vänster)

- **Sök blad** filtrerar listan efter bladnamn, filnamn eller sidetikett.
- Varje blad visar en miniatyr (ritas medan du rullar), sitt namn och antingen sin skala eller **Ingen skala**.
- Högra sidan av varje rad visar hur många markeringar bladet har. Medan en post är markerad visar den i stället hur många av den postens markeringar som finns på bladet.
- Klicka på ett blad för att öppna det. {{key:PageDown}} och {{key:PageUp}} flyttar till nästa och föregående blad i listan.
- När en mängdavtagning omfattar PDF-filer som inte är öppna nämner en anmärkning under listan dem. Se [Spara och öppna en mängdavtagning igen](topic:save-and-reopen).

Bladnamn kommer från PDF-filen: en sidetikett som `A-101` blir bladnamnet. En sida utan etikett får namn efter sin fil och sidnummer, till exempel ”Plans, sida 3”. Med flera PDF-filer öppna visar märkta blad också filnamnet.

## Bladet (mitten)

- Fältet under bladet visar bladets namn och dess skala, eller ”Ingen skala ännu: välj ett förval eller kalibrera”. Dess knappar: {{ui:MarkupCraft}} (när den appen kan ta PDF-filen; se [Starta en mängdavtagning och öppna en ritningsuppsättning](topic:open-plan-set)), {{ui:Jämför}} (en äldre version av bladet över det här: [Jämför ett reviderat blad](topic:compare-revisions)), ”(n) att kontrollera” (flaggade markeringar, när det finns några) och {{ui:3D}} ([3D-kontrollvyn](topic:check-in-3d)).
- Innan någon PDF är öppen visar mitten en kort guide i fem steg.
- Hjulet zoomar vid pekaren. Dra för att panorera. Se [Tangentbord och mus](topic:keyboard).
- Medan du använder {{ui:Autoräkna}} visas ett fält med dess kontroller överst på bladet.

## Poster (höger)

Överst listan {{ui:Anbudsområde}}: byggnaden, våningen eller etappen som nya markeringar hamnar i ([Anbudsområden](topic:bid-areas)).

- {{ui:Ny post}} öppnar ett litet formulär: ett namn, en typ ({{ui:Linjär (längd)}}, {{ui:Area}} eller {{ui:Räkna}}) och {{ui:Lägg till}}.
- Listan visar varje posts färg, typikon, namn och mängd. Klicka på en post för att rita med den och markera dess markeringar på varje blad. Klicka på den igen för att sluta markera.
- Under listan är **Post: (namn)** postredigeraren: namn, typ, färg, enhet, höjd eller djup, spill, material- och arbetspriser, de uppmätta värdena och {{ui:Sammansättning}}. Se [Skapa poster för mängdavtagning](topic:create-items).
- **Markerad markering** visas när du markerar en markering: vilken post den tillhör, dess blad, dess mått och knappar som {{ui:Lägg till ett urtag}} och {{ui:Ta bort markering}}. Med flera markeringar markerade blir det **Markerade markeringar**: hur många av varje post, och {{ui:Kopiera}}, {{ui:Duplicera}}, {{ui:Klipp ut}} och {{ui:Ta bort markeringar}}.
- Postredigeraren slutar med {{ui:Kopiera post}} och {{ui:Duplicera post}}: en post med sin sammansättning och sina kostnader, utan markeringar. Se [Kopiera, klistra in och duplicera markeringar](topic:copy-paste).

## Mängder (nederkant)

- {{ui:Per post}} listar varje post och dess sammansättningskomponenter med mängd, spill, priser och utökade kostnader. Du kan skriva spill och priser direkt i tabellen.
- {{ui:Per blad}} listar varje posts mängd på varje blad.
- En varning som börjar med **Ofullständig:** visas när något lämnats utanför summorna.
- {{ui:Jobbets summa}} finns till höger i rubriken.
- Pilknappen längst till höger döljer eller visar tabellen för att ge bladet mer utrymme.

Se [Läs mängder och kalkylen](topic:read-quantities).

## Statusfält (nederkant)

Från vänster till höger: det levande måttet medan du ritar (längd, area, radie eller ett kontrollresultat), rutan {{ui:Ange}} medan du skriver en längd, meddelanden från TakeoffCraft, påminnelsen ”Shift fångar 45°” (eller ”Fångar 45°; Shift frigör vinkeln” när det är på i [Inställningar](topic:settings)), knappen {{ui:Fångst}} (fångst mot ritningens linjer, på när den är markerad; {{key:F3}}) och zoomprocenten.

:::tip
Läs statusfältet när något inte händer. TakeoffCraft förklarar där varför det avvisade ett klick, till exempel ”Det här bladet har ingen skala ännu”.
:::

## Andra layouter

Allt ovan är layouten {{ui:CadCraft klassisk}}, startlayouten. {{ui:Inställningar}} ({{key:Mod+,}}) › {{ui:Globalt}} › {{ui:Layout}} erbjuder två till; samma verktyg och tangenter fungerar i alla tre, och om du väljer {{ui:CadCraft klassisk}} igen hamnar varje kontroll där den var.

| Layout | I TakeoffCraft |
|---|---|
| {{ui:Menyflik och projektwebbläsare}} | {{ui:Avtagningsmeny}} över toppen ([Menyer, tangenter och mus](topic:menus-keys-and-mouse)), ett fält för det pågående verktyget, en flik för varje blad du öppnar (en ritnings Modell och layouter är också blad) med skalförvalen och {{ui:Anpassa sida}} under bladet. Vänsterpanelen rymmer {{ui:Egenskaper}} (den markerade posten, anteckningen eller markeringen) över {{ui:Avtagningswebbläsare}}: {{ui:Blad}} (klicka på ett för att öppna det i en flik), {{ui:Villkor}} (klicka på ett för att rita med det) och {{ui:Kalkyl}} (varje posts summa och jobbets summa); miniatyrerna är dess andra flik. |
| {{ui:Verktygslåda och infobox}} | Verktygsfältet över bladet, en infobox med {{ui:Anbudsområde}}, det pågående verktyget eller markeringen och bladfältet, en kolumn med mängdavtagningsverktygen till vänster, en flik för varje blad, samt {{ui:Fångst}} och zoomen under bladet. |

Medan [3D-kontrollvyn](topic:check-in-3d) är öppen viker bladflikarna och fältet under bladet undan; stäng 3D-vyn för att mäta igen. På en telefon körs alltid telefonlayouten.

## Helskärm och teman

Knappen {{ui:Helskärm}} i appfältet, eller {{key:Ctrl+Shift+F}} (Ctrl på alla plattformar, även på en Mac), växlar mellan normalt, helskärm och helskärm med fälten dolda. Med fälten dolda för du pekaren till överkanten för att visa dem igen.

{{ui:Papper}} är det ljusa temat och {{ui:Modell}} det mörka. I {{ui:Modell}} visas ritningen inverterad (ljusa linjer på mörkt) bara på skärmen; exporter ändras aldrig.
