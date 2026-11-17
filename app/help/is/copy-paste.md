---
title: Afrita, líma og tvöfalda merki
summary: Afritaðu merki ásamt liðum þeirra, límdu þau þar sem smellt er eða á sama stað á öðru blaði, tvöfaldaðu, klipptu, eyddu og veldu allt, hvert skref afturkallanlegt.
keywords: afrita, líma, klippa, tvöfalda, líma á sama stað, klemmuspjald, velja allt, velja ekkert, mörg merki, endurtekin hæð, sama teikning, annað blað, endurtaka, afrita lið, tvöfalda lið
from: e20e9024
---

{{ui:Breyta}}-hópur tækjastikunnar geymir {{ui:Afturkalla}}, {{ui:Endurgera}}, {{ui:Afrita}} og {{ui:Líma}}. Valmynd hans {{ui:Meira}} hefur hitt, hvert með sínum takka: {{ui:Klippa}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Líma á sama stað}}, {{ui:Tvöfalda}}, {{ui:Eyða}}, {{ui:Velja allt}} og {{ui:Velja ekkert}}. Hvert þeirra er eitt skref sem hægt er að afturkalla með {{key:Mod+Z}}.

## Velja merkin

1. Veldu {{ui:Velja}} ({{key:V}}) og smelltu á merki.
2. Haltu inni {{key:Shift}} og smelltu á fleiri merki til að bæta þeim við. {{key:Shift}} + smellur á valið merki tekur það út aftur.
3. Eða ýttu á {{key:Mod+A}} ({{ui:Velja allt}}) til að velja öll merkin á opna blaðinu.

Þegar nokkur merki eru valin sýnir hægri spjaldið **Valin merki**: hversu mörg af hverjum lið, með {{ui:Afrita}}, {{ui:Tvöfalda}}, {{ui:Klippa}} og {{ui:Eyða merkjum}}. Hornhandföng sjást aðeins þegar eitt merki er valið. {{key:Esc}} ({{ui:Velja ekkert}}) hreinsar valið.

## Afrita og líma þar sem smellt er

1. Veldu merkin og ýttu á {{key:Mod+C}} ({{ui:Afrita}}). Merkin eru afrituð ásamt liðum sínum, þar með talin samsetning, úrgangur og kostnaður hvers liðar.
2. Farðu á blaðið sem þú vilt hafa þau á (það getur verið sama blað).
3. Ýttu á {{key:Mod+V}} ({{ui:Líma}}). Brotið afrit fylgir bendlinum.
4. Smelltu þar sem það á að fara. Miðja afrituðu merkjanna lendir á bendlinum.

{{key:Esc}} hættir við og bætir engu við. Límdu merkin eru valin á eftir, svo {{key:Delete}} eða {{key:Mod+Z}} tekur þau burt aftur.

Í sömu magntöku fara límd merki á **sömu liði**, svo magntölur þeirra leggjast við þá liði. Í annarri magntöku (í öðrum flipa, eða eftir {{ui:Ný}}) er notaður liður með sama heiti og gerð; annars er liðurinn bættur við með samsetningu sinni. Ef heitið er tekið af lið af annarri gerð fær liðurinn heitið „(heiti) (afrit)“.

Límd merki fara á tilboðssvæðið sem er valið efst á {{ui:Liðir}}-spjaldinu (eða á ekkert). Sjá [Tilboðssvæði](topic:bid-areas).

## Líma á sama stað

{{key:Mod+Shift+V}} ({{ui:Líma á sama stað}}) setur afritið nákvæmlega á sama stað á opna blaðinu, eftir stöðu þess á síðunni. Notaðu það fyrir dæmigerða hæð: mældu hæð 2, afritaðu, opnaðu hæð 3, límdu á sama stað.

Líma á sama stað þarf blað af **sömu stærð** og blaðið sem þú afritaðir af. Á blaði af annarri stærð segir TakeoffCraft það og límir ekkert; notaðu þá {{ui:Líma}} og smelltu í staðinn. Á blaðinu sem þú afritaðir af lendir afritið ofan á upprunalegu merkjunum.

## Mælikvarðinn þarf að passa

Lengdir og flatarmál ráðast af mælikvarða blaðsins. Keðja sem mælist 10' við 1/4" = 1'-0" myndi mælast 20' á blaði við 1/8" = 1'-0". Þess vegna límir TakeoffCraft keðjur og fleti aðeins á blað með **sama mælikvarða** og blaðið sem þau komu af, og segir það berum orðum þegar svo er ekki:

- Opna blaðið hefur engan mælikvarða ennþá: gefðu því hann fyrst ([Stilla mælikvarðann](topic:set-the-scale)), og límdu síðan.
- Opna blaðið hefur annan mælikvarða: skilaboðin nefna báða mælikvarðana. Límdu á blað með sama mælikvarða.
- Talningar þurfa engan mælikvarða: afritaðar talningar límast hvar sem er.

## Tvöfalda

{{key:Mod+D}} ({{ui:Tvöfalda}}) afritar valin merki og setur afritið á bendilinn strax; smelltu þar sem það á að fara. Ekkert er bætt við fyrr en þú smellir, og {{key:Esc}} skilur ekkert eftir. Tvöföldun breytir ekki því sem {{ui:Líma}} límir.

## Klippa og eyða

- {{key:Mod+X}} ({{ui:Klippa}}) afritar valin merki og eyðir þeim. Límdu þau þar sem þau eiga heima, eða afturkallaðu klippinguna.
- {{key:Delete}} eða {{key:Backspace}} ({{ui:Eyða}}) eyðir völdum merkjum án þess að afrita þau.

## Afrita lið

Liðaritillinn (undir **Liðir**) endar á:

- {{ui:Afrita lið}}: afritar liðinn ásamt samsetningu, úrgangi og kostnaði, án merkja. {{ui:Líma}} bætir þá afriti af honum við þessa magntöku, eða aðra.
- {{ui:Tvöfalda lið}}: bætir afriti við strax, með heitinu „(heiti) (afrit)“.

:::tip
Afritið er geymt á þessari tölvu: það er geymt í þessum flipa og í geymslu vafrans, svo annar TakeoffCraft-flipi geti límt það. Ekkert er hlaðið upp, og klemmuspjald kerfisins er ekki notað, svo þú getur ekki límt merki inn í önnur forrit.
:::

:::note
Afrit kemur af einu blaði í einu. Merki eru límd eins og þau eru: ekki er hægt að snúa eða spegla afrit ennþá.
:::
