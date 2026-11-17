---
title: Crea elements d'amidament
summary: Crea elements lineals, d'àrea i de recompte i defineix-ne la unitat, l'alçada o la profunditat, la pèrdua i les tarifes de material i de mà d'obra.
keywords: quadrilla, taxa de producció, mida de la quadrilla, salari, hores, hores-treballador, dies de quadrilla, hores de mà d'obra, element, element nou, condició, multicondició, mesura també, diversos tipus, habitació, lineal, àrea, recompte, unitat, alçada, profunditat, pèrdua, material, mà d'obra, tarifa, color, cost
from: 7fa5effc
---

Un **element** és una cosa que mesureu i poseu preu: un tipus de mur, un acabat de terra, un sostre, una porta, un llum. Cada marca que dibuixeu pertany a un element. Altres programes en diuen condicions.

Cada element té un tipus (i pot admetre també altres tipus de marques, vegeu [Un element, diversos tipus de marques](topic:create-items#one-item-several-kinds-of-marks)):

| Entrada | Dibuixes | Informa | Unitats |
|---|---|---|---|
| Lineal | Trams de punts connectats | Longitud, nombre de trams i àrea de paret quan té una alçada | LF o m |
| Àrea | Contorns tancats, amb buits | Àrea, perímetre, nombre d'àrees | SF, SY, SQ, ac, ha o m² |
| Recompte | Un clic per cada cosa | Quants n'hi ha | EA |
| Quantitat introduïda | Res: escriviu la quantitat | El número que heu escrit (o un de portat des de CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha o m² |

## Quantitats introduïdes (sense dibuix)

Hi ha coses d'un pressupost que mai no es dibuixen: la mobilització, els permisos, una partida d'imprevistos, un subcontracte a tant alçat, el desmunt i el terraplè que ha calculat CivilCraft. Creeu-les com a **Quantitat introduïda**:

1. Trieu {{ui:Element nou}}, escriviu un nom, seleccioneu {{ui:Quantitat introduïda (sense dibuix)}} i trieu {{ui:Afegeix}}.
2. A l'editor de l'element, trieu la {{ui:Unitat}} (LS per a un import a tant alçat) i escriviu la {{ui:Quantitat}}: `1`, `2.5` o `1,250`.
3. Definiu la pèrdua i les tarifes igual que per a qualsevol altre element. Les fórmules d'un preu descompost usen `Q`, la quantitat; per exemple, `ceil(Q / 12)` càrregues de camió.

Una quantitat introduïda no porta marques i mai no deixa el pressupost incomplet. Quan l'amidament té àrees de pressupost, l'editor també té {{ui:Àrea de pressupost}}: la quantitat aleshores compta en aquesta àrea, les seves variants i els seus totals, igual que ho faria una marca allà. Les quantitats importades d'una altra aplicació indiquen d'on venen; vegeu [Moviments de terres i cotes puntuals](topic:earthwork#cut-and-fill-from-civilcraft).

## Crea un element

1. Al panell {{ui:Elements}} de la dreta, trieu {{ui:Element nou}}.
2. Escriviu un nom, com `Tipus de paret interior A` o `Rajola de moqueta`.
3. Trieu el tipus: {{ui:Lineal (longitud)}}, {{ui:Àrea}} o {{ui:Recompte}}.
4. Trieu {{ui:Afegeix}} (o premeu {{key:Enter}}).
   L'element apareix a la llista amb el seu propi color, passa a ser l'element amb què dibuixeu, i el seu editor s'obre sota la llista. La barra d'estat us indica quina eina triar a continuació.

Premeu {{key:Esc}} al formulari per tancar-lo sense afegir cap element.

:::tip
Si primer trieu una eina de mesura, TakeoffCraft usa l'últim element del tipus correcte, o obre el formulari {{ui:Element nou}} amb aquest tipus ja triat.
:::

## Trieu l'element amb què dibuixeu

Feu clic en un element de la llista. Passa a ser l'element al qual van les marques noves, i les seves marques es ressalten en tots els fulls mentre la resta s'esvaeix. Si el full obert no en té cap de les seves marques, TakeoffCraft salta a un full que en tingui. Torneu a fer clic a l'element per deixar de ressaltar-lo; continua sent l'element amb què dibuixeu.

Fer clic en una marca amb l'eina {{ui:Selecciona}} també fa que el seu element sigui l'actual.

## Configura l'element

L'editor de l'element (**Element: (nom)**) té aquests camps. Cadascun es desa quan en surt o quan premeu {{key:Enter}}, i cada canvi es pot desfer.

| Camp | Què fa |
|---|---|
| {{ui:Nom}} | Es mostra a la llista, a les taules i a les exportacions. |
| {{ui:Entrada}} | Lineal, Àrea o Recompte. Queda bloquejat quan l'element té marques ("Un element amb marques conserva el seu tipus"). |
| {{ui:Color}} | El color de les seves marques a la pantalla i al PDF marcat. |
| {{ui:Unitat}} | En quina unitat s'informa la quantitat: LF o m per a lineal; SF, SY, SQ, ac, ha o m² per a àrea; EA per a recompte. |
| {{ui:Mesura també}} | Els altres tipus de marques que admet l'element, cadascun amb la seva unitat. Vegeu més avall. |
| {{ui:Alçada}} (lineal) | Una alçada de paret. L'element aleshores també informa de l'àrea de paret (longitud × alçada). Els trams que vénen d'un model de BimCraft porten les seves portes i finestres: aquestes es treuen un cop, i l'element indica l'àrea bruta, les obertures i la neta. Un amidament d'un projecte de BimCraft que ha triat un mètode de mesura s'hi mesura també amb aquest mètode (la nota n'indica el nom i la font, i diu que un aparellador no l'ha revisat); el mètode no es pot canviar a TakeoffCraft. Els maons o blocs i el morter d'un tipus de paret arriben com a dos components: les unitats que cal demanar i el volum de morter. |
| {{ui:Profunditat}} (àrea) | Una profunditat o gruix, que s'usa a les fórmules de preus descomposts (per exemple, el volum de formigó). |
| {{ui:Pèrdua %}} | S'afegeix a la quantitat abans de posar preu: 10 vol dir quantitat × 1.10. |
| {{ui:Material $/LF}} | Cost de material per unitat. L'etiqueta segueix la unitat: $/SF, $/EA i així successivament. |
| {{ui:Mà d'obra $/LF}} | Cost de mà d'obra per unitat. |
| {{ui:Número CSI}} | El seu número CSI MasterFormat, com `09 21 16` (o només la divisió, `09`). La fulla By division del llibre de càlcul agrupa els costos segons aquest número. Els elements dels [paquets d'oficis](topic:trade-packs) ja en tenen un. |

L'alçada i la profunditat admeten peus i polzades (`9'-0"`, `8' 6"`) o peus decimals (`9`) per a unitats imperials, i metres (`2.7`, `2700 mm`) per a unitats mètriques. Les tarifes admeten imports com `12.50` o `$1,250`, fins a quatre decimals. Vegeu [Entrada de longitud, tarifa i percentatge](topic:entry-formats).

Sota els camps, **Mesurat** mostra els totals que poden usar les fórmules de l'element, amb les seves lletres: Longitud (L), Trams (N), Àrea de paret (A) per a lineal; Àrea (A), Perímetre (P), Àrees (N) per a àrea; Recompte (N) per a recompte.

## Un element, diversos tipus de marques

Algunes coses es mesuren de més d'una manera: una habitació té un terra (una àrea), un sòcol al llarg de les parets (una longitud) i portes (un recompte). En lloc de tres elements, en creeu un:

1. Creeu l'element amb el seu tipus principal, com un element d'àrea `Habitació 101`.
2. Sota {{ui:Mesura també}} del seu editor, marqueu {{ui:Lineal}}, {{ui:Recompte}} o tots dos. Cadascun té una unitat al costat.
3. Dibuixeu amb qualsevol eina el tipus de la qual admet l'element: amb `Habitació 101` com a actual, {{ui:Àrea}} dibuixa el seu terra, {{ui:Lineal}} el seu sòcol i {{ui:Recompte}} les seves portes. TakeoffCraft no demana cap altre element.

La llista d'elements mostra cada quantitat (`50.00 SF + 2 EA`). A la taula de quantitats, la fila de l'element té la seva quantitat principal, i cada altre tipus té la seva pròpia fila a sota, com **Habitació 101 (recompte)**, amb la seva pròpia pèrdua i tarifes de material i de mà d'obra. Les exportacions, la taula per full i la llegenda del PDF marcat les llisten de la mateixa manera.

Els camps del tipus principal continuen sent propis d'aquest tipus: l'alçada o la profunditat, el pendent, els descomptes i la forma 3D només s'apliquen a les seves marques. Un tram de sòcol dibuixat per a un element d'àrea es mesura simplement sobre el plànol i es mostra pla en 3D. Les fórmules dels preus descomposts usen els totals del tipus principal.

Un tipus només es pot desmarcar mentre l'element no en tingui marques; suprimiu-les, o abans mogueu-les a un altre element amb **Marca seleccionada**. Les marques poden passar a qualsevol element que admeti el seu tipus.

Més avall hi ha el {{ui:Preu descompost}}: components com muntants o taulers, cadascun amb la seva pròpia fórmula i tarifes. Vegeu [Preus descomposts i fórmules](topic:assemblies).

A la part inferior, {{ui:Mou amunt}} i {{ui:Mou avall}} canvien la posició de l'element a la llista i a les exportacions, i {{ui:Suprimeix l'element}} l'elimina amb totes les seves marques (després de demanar-ho; es pot desfer).


Els elements d'àrea també tenen **Pendent** (els plans de coberta mesurats sobre la pendent: [Cobertes i pendents](topic:roofs-and-slopes)) i **Descompte** (les seves marques es treuen de les àrees d'altres elements: [Mesura àrees](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Els elements lineals tenen **Inclinació** (Pla, Frontó, Aiguavés o llim) i, per als frontons i aiguavessos, **Pendent**.

## Tarifes a la taula

També podeu escriure directament la {{ui:Pèrdua %}} i les tarifes de material i de mà d'obra a la taula {{ui:Quantitats}} de la part inferior ({{ui:Per element}}). És el mateix ajust que a l'editor.

## Com funciona el preu

Per a cada element i cada component d'un preu descompost:

1. **Amb pèrdua** = quantitat × (1 + pèrdua %).
2. **Material** = amb pèrdua × material per unitat, arrodonit al cèntim.
3. **Mà d'obra** = amb pèrdua × mà d'obra per unitat, arrodonit al cèntim.
4. **Total** = material + mà d'obra.

El {{ui:Total de l'obra}} suma cada element i cada component. Un element pot portar les seves pròpies tarifes i un preu descompost alhora; es compten totes dues, així que deixeu les tarifes de l'element a 0 quan els components portin el cost.

## Mà d'obra per quadrilla

En lloc d'una tarifa de mà d'obra per unitat, la mà d'obra d'un element pot venir d'una quadrilla: quant hi posa per hora, quantes persones hi són i quant guanya cadascuna. Sota {{ui:Mà d'obra per quadrilla}} a l'editor de l'element, marqueu {{ui:Calcula la mà d'obra a partir d'una quadrilla}} i ompliu:

| Camp | Exemple |
|---|---|
| {{ui:Producció}} | `20` LF per hora (en la unitat de l'element) per a tota la quadrilla |
| {{ui:Mida de la quadrilla}} | `2` persones |
| {{ui:Salari $/hora cadascun}} | `45` |

TakeoffCraft calcula, a partir de la quantitat amb pèrdua:

- **hores de quadrilla** = quantitat ÷ producció (110 LF ÷ 20 = 5.5),
- **hores-treballador** = hores de quadrilla × mida de la quadrilla (11),
- **dies de quadrilla** = hores de quadrilla ÷ 8 (0.69),
- **mà d'obra** = hores-treballador × salari ($495.00).

L'editor mostra el resultat i la tarifa que en resulta ($4.50/LF). La tarifa de mà d'obra pròpia de l'element aleshores és només de lectura, a l'editor i a la taula. La capçalera de la taula {{ui:Quantitats}} afegeix les hores-treballador i els dies de quadrilla de l'obra. Les exportacions anoten les hores de cada quadrilla, i al llibre de càlcul la cel·la de mà d'obra és una fórmula sobre la quadrilla (`ROUND(F2/20*2*45,2)`). Desmarqueu la casella per tornar a una tarifa per unitat.

## Elements mètrics

Trieu m (lineal) o m² (àrea) com a unitat. Les quantitats, les alçades i els valors de les fórmules aleshores són en metres. L'escala del full pot ser qualsevol predefinida o calibratge; les unitats i les escales són independents.

## Següent

- [Mesura trams lineals](topic:measure-linear)
- [Mesura àrees amb buits](topic:measure-areas)
- [Recompte manual](topic:count-by-hand)
