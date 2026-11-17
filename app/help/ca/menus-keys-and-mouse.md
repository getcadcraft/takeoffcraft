---
title: Menús, tecles i ratolí
summary: Trieu un estil de menús que encaixi amb la manera en què ja treballeu, assigneu a qualsevol ordre la vostra pròpia tecla, mogueu ordres entre menús, i definiu què fan la roda i els botons del ratolí.
keywords: estil de menú, menús, barra de menús, cinta, pestanyes de la cinta, barra d'eines, dreceres, tecles, personalitza, reassigna, ratolí, roda, inverteix, direcció del zoom, botó central, botó dret, desplaça, exporta, importa, canvi, familiar, taula d'amidament, condicions
from: f01f0d6d
---

Les ordres de TakeoffCraft són les mateixes per on s'hi arribi. Un **estil de menús** només decideix on es troben a la pantalla, com es diuen i quines tecles les executen. Trieu-ne un a {{ui:Configuració}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menús, tecles i ratolí}}; el canvi és immediat, i aquest navegador el recorda.

## Els tres estils

| Estil | Què obteniu |
|---|---|
| {{ui:TakeoffCraft}} | La barra d'eines pròpia de TakeoffCraft: Fitxer, Exporta, Escala, Amidament, Edita i Vista, amb les tecles d'eina d'una sola lletra. El punt de partida. |
| {{ui:Taula d'amidament}} | Una barra de menús ({{ui:Fitxer}}, {{ui:Edita}}, {{ui:Vista}}, {{ui:Escala}}, {{ui:Amidament}}, {{ui:Elements}}, {{ui:Marques}}, {{ui:Exporta}}) sobre una fila d'eines d'amidament, com les disposen els programes d'amidament en pantalla. A la fila, els elements es diuen condicions. Les mateixes tecles, més {{key:N}} per a un element nou. Els preus predefinits de l'escala passen a la barra del full, al costat de l'escala del full. |
| {{ui:Cinta d'amidament}} | Pestanyes de cinta amb noms segons la feina: {{ui:Amidament}} (mesurar, donar forma, escala, des del dibuix, condicions), {{ui:Edita}}, {{ui:Vista}}, {{ui:Marques}} i {{ui:Pressupost}} (el llibre de treball, els PDF marcats, l'oferta), amb un menú {{ui:Fitxer}} i una fila ràpida per obrir, desar, desfer i refer. Les eines que feu servir tot el dia són grans, i les veïnes, petites i apilades. Les mateixes tecles; els preus predefinits de l'escala passen a la barra del full. |

Els tres estils mantenen les tecles de TakeoffCraft: {{key:V}} selecciona, {{key:L}} lineal, {{key:A}} àrea, {{key:O}} cercle, {{key:B}} sala, {{key:P}} camí (selecciona les línies del PDF), {{key:X}} tall, {{key:C}} recompte, {{key:S}} recompte automàtic, {{key:K}} calibra, {{key:D}} comprova, {{key:R}} mode d'arc, {{key:E}} mode de deducció, {{key:F}} i {{key:W}} per ajustar, {{key:3}} la vista de comprovació 3D, {{key:F3}} ajust, i {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Les eines de la barra del full (notes, núvols, ressaltats, Compara, 3D) esperen fins que hi hagi un PDF obert; si les trieu abans, la línia d'estat ho indica.

:::tip
Una tecla que pertany a la disposició pròpia de TakeoffCraft però que el vostre estil ha assignat a una altra ordre no fa res, i la línia d'estat indica on ha anat la seva ordre ("A Les meves tecles, Recompte és Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i les fletxes mantenen sempre el seu significat. Mentre dibuixeu un tram o un contorn, enganxeu o reviseu un recompte automàtic, les lletres i els números d'una longitud escrita es queden amb el dibuix.
:::

## Feu-lo a la vostra mida

1. Trieu l'estil més proper al que voleu, i després feu clic a {{ui:Personalitza…}}.
2. A {{ui:Tecles i menús}}, trobeu una ordre (el quadre de cerca ajuda). {{ui:Afegeix una tecla}} i premeu la tecla, o dues tecles seguides per a una tecla de dues lletres. Feu clic en una tecla per treure-la.
3. Amb la barra de menús, {{ui:On es troba}} mou l'ordre a un altre menú, o a {{ui:Només tecles}}.
4. A {{ui:Ratolí}}, definiu la roda i els botons que desplacen el full.
5. Doneu-li un nom i feu clic a {{ui:Desa}}.

Desar un estil integrat en fa una còpia pròpia ("La meva taula d'amidament"); l'integrat mai no canvia. Una tecla assignada a dues ordres es mostra en vermell i s'ha de corregir abans de poder desar.

## Ratolí

- **Roda del ratolí**: {{ui:Desplaçar amunt apropa}} (l'inici) o {{ui:Desplaçar amunt allunya}}, i quant de ràpid. Un pinçament al panell tàctil sempre fa zoom en la direcció en què es mouen els dits.
- **Desplaça el full amb**: el botó central, el botó dret, o tots dos. Un arrossegament amb el botó esquerre sobre el paper buit i {{key:Space}} amb un arrossegament sempre desplacen; un clic dret sense arrossegar sempre acaba un tram o un contorn.
- **Arrossega a les vistes 3D**: {{ui:Propi de cada vista}} manté els botons de la vista de comprovació 3D (l'esquerre i el central orbiten, el dret desplaça). O bé definiu els botons central i dret perquè orbitin, desplacin, facin zoom o no facin res; {{key:Shift}} amb el botó intercanvia orbitar i desplaçar. El botó esquerre sempre orbita i tria.

## Porteu-lo amb vosaltres

{{ui:Exporta}} desa l'estil en ús com un fitxer petit `.ccinput.json`; {{ui:Importa…}} n'afegeix un, des d'un altre ordinador o d'un company. Un fitxer importat només pot apuntar a les ordres pròpies de TakeoffCraft: qualsevol altra cosa que hi hagi es deixa de banda i es compta a la línia d'estat. {{ui:Suprimeix aquest estil}} elimina un dels vostres.

:::note
Aquests ajustos es queden en aquest navegador. {{ui:Usa aquest estil a totes les aplicacions}} sota les targetes d'estil fa que cada aplicació s'obri amb el seu estil corresponent (la seva pròpia barra d'eines, una barra de menús o una cinta), amb els canvis que hi heu fet a cadascuna. TakeoffCraft no té cap estil amb línia d'ordres: quan se'n tria un per a totes les aplicacions, TakeoffCraft manté la seva pròpia barra d'eines.

La {{ui:Cinta d'amidament}} també és la cinta de la disposició {{ui:Cinta i navegador de projecte}} ({{ui:Configuració}} › {{ui:Global}} › {{ui:Disposició}}): vegeu [La pantalla de TakeoffCraft](topic:workspace).
:::

Relacionat: [Teclat i ratolí](topic:keyboard) · [Configuració de TakeoffCraft](topic:settings) · [Des d'altre programari d'amidament](topic:coming-from)
