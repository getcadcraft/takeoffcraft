---
title: Granska mätningen i 3D
summary: Se det öppna bladets väggar, plattor och räkningar stå på ritningen, kretsa runt dem och klicka på en för att markera dess märke.
keywords: png, bild, bildfil, skärmdump, stapla, våningar, nivåer, fasad, glb, gltf, exportera 3d, väggtjocklek, bashöjd, öppning, dörröverkant, 3d, tre d, granska, vy, väggar, vägghöjd, platta, djup, volym, kretsa, modell, markering, isometrisk, perspektiv
from: fb16b4f7
---

3D-vyn är en kontroll, inte en andra ritning: den reser bladets mätning upp på skärmen, på bladet självt, så att en saknad vägg, en dubbel platta eller en lös räkning syns direkt.

Innan du börjar: bladet behöver en skala ([Ställ in skalan](topic:set-the-scale)). Höjder och djup kräver verkliga fot, så på ett blad utan skala säger {{ui:3D}} det och stannar på det platta bladet.

## Öppna 3D-vyn

1. Visa det blad du vill kontrollera.
2. Välj {{ui:3D}} i fältet som visar bladets namn och skala, eller tryck {{key:3}}.
   Första gången tar 3D-vyn en stund att läsa in. Bladet ritas på marken, och mätningen står på det i varje posts färg.
3. För att gå tillbaka, välj {{ui:3D}} igen, {{ui:Tillbaka till bladet}}, eller tryck {{key:3}}. Att välja ett ritverktyg (Linjär, Area, Räkning och så vidare) går också tillbaka, eftersom märken ritas på det platta bladet.

3D-vyn visar bladet på skärmen; byt blad i bladlistan, eller med {{key:PageDown}} och {{key:PageUp}}, så följer den med. För att se flera våningar samtidigt, stapla dem (nedan).

## Vad du ser

| Märke | I 3D |
|---|---|
| Linjär sträcka, post med höjd | En vägg av den höjden längs sträckan. Krökta sträckor följer kurvan. |
| Linjär sträcka, post utan höjd | En linje på bladet. Ge posten en höjd under **Post** för att resa upp den. |
| Area, post med djup | En platta av det djupet, med sina urtag öppna. |
| Area, post utan djup | En tunn 2"-platta, så att den ändå syns. |
| Räkning | En liten stolpe på varje räknad punkt. |

Höjden är en linjär posts fält {{ui:Höjd}} och djupet en areapost fält {{ui:Djup}}, under **Post** (se [Skapa mätningsposter](topic:create-items)). Ändrar du den uppdateras 3D-vyn direkt. Noten under bladets namn säger vad bladet innehåller, till exempel ”Detta blad i 3D: 2 väggar, 1 platta, 3 räkningar”, och hur många sträckor eller areor som saknar höjd eller djup. Klick går igenom noten till vyn.

Siffrorna ändras inte i 3D: en väggs area är dess exakta längd gånger dess höjd, och en plattas volym är dess nettoarea (kontur minus urtag, kurvor exakta) gånger dess djup. Kurvor ritas bara som korta raka stycken på skärmen.

## Titta runt

| Åtgärd | Vad den gör |
|---|---|
| Dra, eller dra med mittenknappen | Kretsa runt mätningen. |
| {{key:Shift}} + dra, eller dra med högerknappen | Panorera. |
| Musens hjul | Zooma in och ut vid pekaren. |
| Svep med två fingrar på styrplattan | Kretsa ({{key:Shift}} panorerar). En nypning zoomar. |
| {{ui:Iso}}, {{ui:Ovansida}}, {{ui:Framsida}}, {{ui:Baksida}}, {{ui:Vänster}}, {{ui:Höger}}, {{ui:Undersida}} | Standardvyer, inramade på mätningen. 3D-vyn öppnas i {{ui:Iso}}. |
| {{ui:Perspektiv}} | Perspektiv på eller av (parallell när den är av). |
| {{ui:Zooma utsträckning}} eller {{key:F}} | Hela bladet. |
| {{ui:Blad}} | Visa eller dölj ritningen på marken. |
| ViewCube, uppe till höger | Klicka på en yta, kant eller hörn för att titta därifrån; dra för att kretsa; dra i dess kompassring för att vrida; husknappen går tillbaka till {{ui:Iso}}. |

Hörnet visar en ViewCube, en liten X-, Y-, Z-axelikon, eller inget: välj i {{ui:Inställningar}}, på fliken TakeoffCraft, under **Hörnindikator** ([TakeoffCraft-inställningar](topic:settings)). Det platta bladet har ingen hörnindikator.

:::touch
Ett finger kretsar; två fingrar nyper för att zooma och flyttar för att panorera. Ett tryck väljer.
:::

## Väggar med tjocklek, en bas och öppningar

En linjär post med höjd står som en tunn remsa. För att se den som en riktig vägg, ge posten dess form under **I 3D** i dess inställningar:

- **Väggtjocklek** (8", 0.2 m): väggen blir en solid, centrerad på linjen du ritade, med geringsskurna hörn.
- **Bashöjd**: väggen börjar så långt ovanför golvet (en sänkning, en överskåp-sträcka). Areaposter har den också: ett tak på 9'-0".
- **Öppningens överkant**: ett avdraget segment (en dörr, [Dra av en del av en sträcka](topic:measure-linear#deduct-a-part-of-a-run)) håller väggen ovanför den höjden, så att en dörr syns som en dörr. Utan den lämnar ett avdraget segment en lucka upp till toppen.

Dessa formar bara 3D-vyn: mängderna (längd, väggarea, kostnader) står kvar som de var.

## Stapla våningarna

1. Öppna PDF-filerna för varje våning.
2. I 3D-vyn väljer du {{ui:Nivåer…}} och skriver in varje vånings höjd, till exempel `0` för bottenvåningen och `12'` för nästa. Tomt lämnar ett blad utanför.
3. Välj {{ui:Stapla}}. Varje blad med en nivå visar sin mätning på sin höjd; bladet på skärmen ligger under sin egen våning, de andra är konturerade. Noten säger hur många våningar som är staplade.

Blad linjerar efter sin plats på sidan, så detta fungerar för planritningar som plottats likadant (samma bladstorlek och position). Ett blad med nivå men utan skala utelämnas, och noten säger det. Välj {{ui:Stapla}} igen för ett blad i taget. Nivåerna sparas tillsammans med mätningen.

## Spara 3D-vyn som en bild

Välj {{ui:PNG}} på 3D-fältet för en bild av vyn som den syns på skärmen (`… 3D.png`). {{key:Shift}} + klick på {{ui:PNG}} gör den dubbelt så stor (`… 3D@2x.png`), för utskrift.

## Spara 3D-vyn som en modell

Välj {{ui:GLB}} på 3D-fältet. Du får en `.glb`-fil (glTF, binär) av det vyn visar (våningen på skärmen, eller alla staplade våningar), som andra 3D-program kan öppna: ett objekt per märke, namngivet efter sin post, i postens färg, i meter med Y uppåt. Bladet självt och konturerna ingår inte.

## Markera ett märke från 3D

Klicka på en vägg, platta, tunn platta eller stolpe. Dess märke blir det markerade märket, precis som om du klickat på det på bladet: det visas under **Valt märke**, dess post blir den aktuella, och statusfältet ger dess längd och höjd, eller dess area, djup och kubikyard. {{key:Shift}} + klick lägger till märken i markeringen eller tar bort dem. {{key:Delete}} tar bort de markerade märkena och {{key:Mod+Z}} återställer dem; {{key:Esc}} avmarkerar alla. Tillbaka på bladet är samma märken fortfarande markerade.

:::tip
Ritningen följer temat: i Modell blir bladet på marken mörkt, precis som den platta vyn.
:::
