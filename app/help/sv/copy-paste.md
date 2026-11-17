---
title: Kopiera, klistra in och duplicera markeringar
summary: Kopiera markeringar tillsammans med deras poster, klistra in dem där du klickar eller på samma plats på ett annat blad, duplicera, klipp ut, ta bort och markera allt, vart och ett ett steg att ångra.
keywords: kopiera, klistra in, klipp ut, duplicera, klistra in på plats, urklipp, markera allt, avmarkera, flera markeringar, typisk våning, upprepa, samma ritning, annat blad, kopiera post, duplicera post
from: e20e9024
---

Gruppen {{ui:Redigera}} i verktygsfältet innehåller {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}} och {{ui:Klistra in}}. Dess meny {{ui:Mer}} har resten, var och en med sin tangent: {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}} och {{ui:Avmarkera}}. Vart och ett av dem är ett steg att ångra med {{key:Mod+Z}}.

## Markera markeringarna

1. Välj {{ui:Markera}} ({{key:V}}) och klicka på en markering.
2. Håll ned {{key:Shift}} och klicka på fler markeringar för att lägga till dem. {{key:Shift}} + klick på en markerad markering tar bort den igen.
3. Eller tryck {{key:Mod+A}} ({{ui:Markera allt}}) för att ta alla markeringar på det öppna bladet.

Med flera markeringar markerade visar den högra panelen **Valda markeringar**: hur många av varje post, med {{ui:Kopiera}}, {{ui:Duplicera}}, {{ui:Klipp ut}} och {{ui:Ta bort markeringar}}. Hörnhandtagen visas bara när en markering är vald. {{key:Esc}} ({{ui:Avmarkera}}) rensar markeringen.

## Kopiera och klistra in där du klickar

1. Markera markeringarna och tryck {{key:Mod+C}} ({{ui:Kopiera}}). Markeringarna kopieras tillsammans med sina poster, inklusive varje posts sammansättning, spill och kostnader.
2. Gå till bladet du vill ha dem på (det kan vara samma blad).
3. Tryck {{key:Mod+V}} ({{ui:Klistra in}}). En streckad kopia följer pekaren.
4. Klicka där den ska ligga. Mitten av de kopierade markeringarna hamnar vid pekaren.

{{key:Esc}} avbryter och lägger inte till något. De inklistrade markeringarna markeras efteråt, så {{key:Delete}} eller {{key:Mod+Z}} tar bort dem igen.

I samma mängdavtagning läggs inklistrade markeringar på **samma poster**, så deras kvantiteter adderas till dessa poster. I en annan mängdavtagning (en annan flik, eller efter {{ui:Ny}}) används en post med samma namn och typ; annars läggs posten till med sin sammansättning. Om namnet är upptaget av en post av annan typ kallas den tillagda posten ”(namn) (kopia)”.

Inklistrade markeringar hamnar i det anbudsområde som väljs överst i panelen {{ui:Poster}} (eller i inget). Se [Anbudsområden](topic:bid-areas).

## Klistra in på plats

{{key:Mod+Shift+V}} ({{ui:Klistra in på plats}}) lägger kopian på exakt samma ställe på det öppna bladet, efter dess position på sidan. Använd det för en typisk våning: mängdavtaga våning 2, kopiera, öppna våning 3, klistra in på plats.

Klistra in på plats kräver ett blad i **samma storlek** som det du kopierade från. På ett blad i en annan storlek säger TakeoffCraft det och klistrar inte in något; använd {{ui:Klistra in}} och klicka i stället. På bladet du kopierade från hamnar kopian ovanpå originalen.

## Skalan måste stämma

Längder och ytor beror på bladets skala. En sträcka som mäter 10' vid 1/4" = 1'-0" skulle mäta 20' på ett blad vid 1/8" = 1'-0". Därför klistrar TakeoffCraft bara in sträckor och ytor på ett blad med **samma skala** som bladet de kom från, och säger tydligt när det inte gör det:

- Det öppna bladet har ingen skala ännu: ge det en först ([Ställ in skalan](topic:set-the-scale)), och klistra sedan in.
- Det öppna bladet har en annan skala: meddelandet anger båda skalorna. Klistra in på ett blad med samma skala.
- Räkningar behöver ingen skala: kopierade räkningar klistras in var som helst.

## Duplicera

{{key:Mod+D}} ({{ui:Duplicera}}) kopierar de markerade markeringarna och lägger kopian vid pekaren direkt; klicka där den ska ligga. Inget läggs till förrän du klickar, och {{key:Esc}} lämnar ingenting kvar. Duplicera ändrar inte vad {{ui:Klistra in}} klistrar in.

## Klipp ut och ta bort

- {{key:Mod+X}} ({{ui:Klipp ut}}) kopierar de markerade markeringarna och tar bort dem. Klistra in dem där de hör hemma, eller ångra klippet.
- {{key:Delete}} eller {{key:Backspace}} ({{ui:Ta bort}}) tar bort de markerade markeringarna utan att kopiera dem.

## Kopiera en post

Postredigeraren (under **Poster**) slutar med:

- {{ui:Kopiera post}}: kopierar posten med dess sammansättning, spill och kostnader, utan markeringar. {{ui:Klistra in}} lägger sedan till en kopia av den i den här mängdavtagningen, eller i en annan.
- {{ui:Duplicera post}}: lägger till en kopia direkt, med namnet ”(namn) (kopia)”.

:::tip
Kopian stannar på den här datorn: den sparas i den här fliken och i webbläsarens lagring, så att en annan TakeoffCraft-flik kan klistra in den. Ingenting laddas upp, och systemets urklipp används inte, så du kan inte klistra in markeringar i andra program.
:::

:::note
En kopia kommer från ett blad i taget. Markeringar klistras in som de är: det går inte att rotera eller spegla en kopia ännu.
:::
