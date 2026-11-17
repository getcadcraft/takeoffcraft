---
title: Exporta el pressupost i un PDF marcat
summary: Baixeu el pressupost com a llibre XLSX amb fórmules vives o com a CSV, i còpies dels vostres PDF amb l'amidament dibuixat.
keywords: proposta, resum de l'oferta, exporta, xlsx, full de càlcul, llibre, csv, pdf marcat, imprimeix amidament, informe, comparteix, envia, llegenda
from: 334f89c7
---

Les exportacions són baixades. Es fan al vostre ordinador a partir de l'amidament i dels PDF oberts; no s'envia res enlloc.

## El pressupost com a full de càlcul (XLSX)

1. Obriu el menú {{ui:Exporta}} de la barra d'eines i trieu {{ui:XLSX}}.
   El navegador baixa `(name).xlsx`. La barra d'estat diu "Exportat (name).xlsx (pressupost amb fórmules vives, per full, marques, escales)." i afegeix un avís quan el pressupost és incomplet.
2. Obriu-lo al vostre programa de fulls de càlcul.

El llibre té quatre fulls de càlcul, i els informes següents quan corresponguin:

| Full de càlcul | Què conté |
|---|---|
| Estimate | Una fila per partida i per component: quantitat, pèrdua, quantitat amb pèrdua, preus unitaris, material, mà d'obra, total, notes. El total de l'obra a la part inferior. |
| By sheet | La quantitat de cada partida a cada full, amb el nombre de marques. |
| Marks | Totes les marques: full, partida, tipus, quantitat i detall (longituds dels segments, àrees brutes i dels retalls, perímetre). |
| Scales | Cada full que té escala o marques: la seva escala, com s'ha definit (predefinida, o calibrada sobre quina distància) i peus per unitat de PDF. |
| Takeoff summary | La quantitat, el número CSI, les marques i els fulls de cada partida, sense preus. |
| Material list | Cada peça dels preus descomposts sumada en tot l'amidament (la mateixa peça usada per diverses partides és una sola línia), amb la pèrdua i el cost de material, i les partides que la fan servir. |
| Quote request | La llista de materials per enviar a un proveïdor: quantitats amb pèrdua, una columna de preu unitari buida, i imports i un total que s'omplen a mesura que s'escriuen els preus. |
| By division | Material, mà d'obra i total per divisió CSI MasterFormat, quan les partides tenen un {{ui:Número CSI}}. |

Amb un [resum de l'oferta](topic:bid-summary), el full Estimate també acaba amb els seus recàrrecs (càrrega de mà d'obra, impost de vendes, despeses generals, benefici, fiança i l'oferta), com a fórmules vives.

El full Estimate conserva les **fórmules vives**: la quantitat amb pèrdua, els imports arrodonits de material i de mà d'obra, el total de cada fila i el total de l'obra. Els programes de fulls de càlcul les recalculen, de manera que podeu canviar un preu unitari o la pèrdua al full i els totals se n'adapten. Els nombres que ha calculat TakeoffCraft també es guarden a les cel·les, i coincideixen fins al cèntim.

La columna de notes indica la fórmula de cada component, els errors de fórmula, les marques en fulls sense escala, l'àrea del mur i el perímetre. Quan es deixa alguna cosa fora, la fila del total de l'obra diu "Incomplet: vegeu les notes de dalt".

El llibre s'ha revisat a LibreOffice Calc, que el va recalcular amb els mateixos totals. Encara no s'ha obert a Excel. Els detalls columna per columna són a [Columnes de l'exportació](topic:export-columns).

## El pressupost com a CSV

Obriu el menú {{ui:Exporta}} i trieu {{ui:CSV}}. Obteniu `(name).csv`: les mateixes files i columnes que el full Estimate, com a valors simples (sense fórmules), i el total de l'obra. Useu-lo per enganxar-lo en un altre sistema de pressupostos o de comptabilitat.

El CSV només conté el pressupost; per a les quantitats per full i la llista de marques, useu XLSX. {{ui:Llista de materials}} al mateix menú desa només la llista de materials com a CSV, per fer comandes.

## El pressupost a Google Sheets

Sobre la taula de Quantitats, **Copia per a Google Sheets** posa el pressupost al porta-retalls com a text separat per tabulacions, amb les mateixes línies que el CSV. A Google Sheets, feu clic a la cel·la A1 i enganxeu. TakeoffCraft no inicia la sessió a Google i no n'envia res.

## Preus unitaris que falten i aprovació

Una línia amb quantitat i sense preu unitari indica **Sense preu unitari** a les seves Notes, i l'exportació la compta sota els totals. Quan el pressupost ha estat aprovat, l'exportació indica qui l'ha aprovat, quan i per a quin total. Vegeu [Preus unitaris que falten i aprovació del pressupost](topic:sign-off-the-estimate).

## PDF marcat

1. Obriu els PDF dels quals voleu dibuixar les marques.
2. Obriu el menú {{ui:Exporta}} i trieu {{ui:PDF marcat}}.
   Apareix "S'està escrivint el PDF marcat…" i després el navegador baixa un fitxer per cada PDF marcat, anomenat `(PDF name) (takeoff).pdf`.

A la còpia:

- els recorreguts es dibuixen com a línies del color de la seva partida,
- les àrees s'omplen lleugerament amb un contorn sòlid, i els retalls queden oberts,
- els recomptes són punts,
- cada pàgina amb marques té una petita llegenda a la cantonada inferior esquerra: el color, el nom i la quantitat de cada partida en aquella pàgina.

Els vostres PDF originals no es canvien.

Notes:

- Només s'escriuen els PDF oberts. Les marques dels PDF que no estan oberts es mantenen als totals però no es dibuixen; obriu primer aquests PDF.
- Els noms de la llegenda fan servir una tipografia PDF estàndard. Les lletres que no pot mostrar s'imprimeixen com a "?".
- Un PDF xifrat no es pot copiar amb marques: "Aquest PDF està protegit amb contrasenya o xifrat, de manera que no es pot escriure una còpia marcada. L'amidament en si està bé; exporteu el full de càlcul."
- La primera vegada que feu servir {{ui:PDF marcat}} en una pestanya es carrega l'escriptor de PDF. Fora de línia, només hi és si la barra de l'aplicació mostra {{ui:Disponible sense connexió}}; vegeu [Treballar fora de línia](common:offline).

:::chromium
Amb diversos PDF marcats, Chrome i Edge poden preguntar una vegada si aquest lloc pot baixar diversos fitxers. Trieu Permet, o només n'obtindreu el primer.
:::

## Res per exportar?

- {{ui:XLSX}} i {{ui:CSV}} necessiten almenys una partida: "Encara no hi ha res per exportar: creeu una partida i amideu-la."
- {{ui:PDF marcat}} necessita marques en un PDF obert: "Encara no hi ha marques als PDF oberts."

## Deseu també l'amidament

Una exportació és un informe. Per continuar treballant amb l'amidament més endavant, trieu també {{ui:Desa l'amidament}}: vegeu [Desar i reobrir un amidament](topic:save-and-reopen).

Per afegir despeses generals, benefici, impostos i fiança i enviar una proposta, vegeu [Resum de l'oferta i proposta](topic:bid-summary).
