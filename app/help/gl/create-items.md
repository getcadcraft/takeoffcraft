---
title: Crear elementos de medición
summary: Cree elementos lineais, de superficie e de contaxe e defina a unidade, a altura ou a profundidade, o desperdicio e as tarifas de material e mano de obra.
keywords: cuadrilla, ritmo de produción, tamaño da cuadrilla, salario, horas, horas-traballador, días-cuadrilla, horas de mano de obra, elemento, novo elemento, condición, multicondición, medir tamén, varios tipos, cuarto, lineal, superficie, contar, unidade, altura, profundidade, desperdicio, material, mano de obra, tarifa, cor, custo
from: 7fa5effc
---

Un **elemento** é unha cousa que mide e prezan: un tipo de muro, un acabado de chan, un teito, unha porta, unha luminaria. Cada marca que debuxa pertence a un elemento. Outros programas chaman a estas condicións.

Cada elemento ten un tipo (e pode admitir tamén outros tipos de marcas, consulte [Un elemento, varios tipos de marcas](topic:create-items#one-item-several-kinds-of-marks)):

| Tipo | Debuxa | Informa | Unidades |
|---|---|---|---|
| Lineal | Tramos de puntos conectados | Lonxitude, número de tramos e superficie de muro cando ten altura | LF ou m |
| Superficie | Contornos pechados, con recortes | Superficie, perímetro, número de superficies | SF, SY, SQ, ac, ha ou m² |
| Contar | Un clic por cada cousa | Cantas son | EA |
| Cantidade escrita | Nada: vostede escribe a cantidade | O número que escribiu (ou un traído de CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ou m² |

## Cantidades escritas (sen debuxo)

Algunhas cousas dun orzamento nunca se debuxan: mobilización, permisos, unha continxencia, un subcontrato a tanto alzado, ou o desmonte e terrapleno que CivilCraft calculou. Fágalas unha **Cantidade escrita**:

1. Escolla {{ui:New item}}, escriba un nome, seleccione {{ui:Typed quantity (no drawing)}} e escolla {{ui:Add}}.
2. No editor do elemento escolla a {{ui:Unit}} (LS para un tanto alzado) e escriba a {{ui:Quantity}}: `1`, `2.5` ou `1,250`.
3. Defina o desperdicio e as tarifas como en calquera outro elemento. As fórmulas dun conxunto usan `Q`, a cantidade, por exemplo `ceil(Q / 12)` cargas de camión.

Unha cantidade escrita non admite marcas e nunca deixa o orzamento incompleto. Cando a medición ten zonas de oferta, o editor tamén ten {{ui:Bid area}}: a cantidade conta entón nesa zona, nas súas alternativas e nos seus totais, igual que o faría unha marca alí. As cantidades traídas doutra aplicación indican de onde proceden; consulte [Movemento de terras e cotas puntuais](topic:earthwork#cut-and-fill-from-civilcraft).

## Crear un elemento

1. No panel {{ui:Items}} da dereita, escolla {{ui:New item}}.
2. Escriba un nome, como `Muro interior tipo A` ou `Tea de moqueta`.
3. Escolla o tipo: {{ui:Linear (length)}}, {{ui:Area}} ou {{ui:Count}}.
4. Escolla {{ui:Add}} (ou prema {{key:Enter}}).
   O elemento aparece na lista coa súa propia cor, convértese no elemento co que debuxa, e o seu editor abre debaixo da lista. A barra de estado indica que ferramenta escoller despois.

Prema {{key:Esc}} no formulario para pechalo sen engadir un elemento.

:::tip
Se escolle primeiro unha ferramenta de medición, TakeoffCraft usa o último elemento do tipo correcto, ou abre o formulario {{ui:New item}} con ese tipo xa escollido.
:::

## Escoller o elemento co que debuxa

Prema un elemento na lista. Convértese no elemento ao que van as novas marcas, e as súas marcas resáltanse en todas as follas mentres os demais se esvaecen. Se a folla aberta non ten ningunha das súas marcas, TakeoffCraft salta a unha folla que as teña. Prema de novo o elemento para deixar de resaltalo; segue sendo o elemento co que debuxa.

Escoller unha marca coa ferramenta {{ui:Select}} tamén fai que o seu elemento sexa o actual.

## Configurar o elemento

O editor do elemento (**Item: (nome)**) ten estes campos. Cada un gárdase ao saír do campo ou ao premer {{key:Enter}}, e cada cambio pode desfacerse.

| Campo | Que fai |
|---|---|
| {{ui:Name}} | Móstrase na lista, nas táboas e nas exportacións. |
| {{ui:Type}} | Lineal, Superficie ou Contar. Bloquease cando o elemento ten marcas ("Un elemento con marcas conserva o seu tipo"). |
| {{ui:Color}} | A cor das súas marcas na pantalla e no PDF marcado. |
| {{ui:Unit}} | En que unidade se informa a cantidade: LF ou m para lineal; SF, SY, SQ, ac, ha ou m² para superficie; EA para contar. |
| {{ui:Also measure}} | Os outros tipos de marcas que admite o elemento, cada un coa súa unidade. Vexa máis abaixo. |
| {{ui:Height}} (linear) | Unha altura de muro. O elemento tamén informa entón a superficie do muro (lonxitude × altura). Os tramos que proveñen dun modelo de BimCraft levan as súas portas e xanelas: retíranse unha vez, e o elemento indica a superficie bruta, as aberturas e a líquida. Unha medición dun proxecto de BimCraft que escolleu un método de medición mídese aquí tamén por ese método (a nota nomea o método, coa súa orixe, e indica que non está verificado por un aparellador); o método non se pode cambiar en TakeoffCraft. Os ladrillos ou bloques e a morteiro dun tipo de muro chegan como dous compoñentes: as unidades a pedir e o volume de morteiro. |
| {{ui:Depth}} (superficie) | Unha profundidade ou espesor, usado nas fórmulas dos conxuntos (por exemplo, volume de formigón). |
| {{ui:Waste %}} | Engádese á cantidade antes de valorar: 10 significa cantidade × 1.10. |
| Material $/LF | Custo do material por unidade. A etiqueta segue a unidade: $/SF, $/EA e así. |
| Mano de obra $/LF | Custo da mano de obra por unidade. |
| {{ui:CSI number}} | O seu número CSI MasterFormat, como `09 21 16` (ou só a división, `09`). A folla By division do libro agrupa os custos por el. Os elementos dos [paquetes de oficios](topic:trade-packs) xa o teñen. |

A altura e a profundidade admiten pés e polgadas (`9'-0"`, `8' 6"`) ou pés decimais (`9`) para unidades imperiais, e metros (`2.7`, `2700 mm`) para unidades métricas. As tarifas admiten importes como `12.50` ou `$1,250`, ata catro decimais. Consulte [Formatos de lonxitude, tarifa e porcentaxe](topic:entry-formats).

Debaixo dos campos, **Medido** mostra os totais que as fórmulas do elemento poden usar, coas súas letras: Lonxitude (L), Tramos (N), Superficie do muro (A) para lineal; Superficie (A), Perímetro (P), Superficies (N) para superficie; Contaxe (N) para contar.

## Un elemento, varios tipos de marcas

Algunhas cousas miden de máis dunha forma: unha sala ten un chan (unha superficie), un rodapé ao longo dos seus muros (unha lonxitude) e portas (unha contaxe). En lugar de tres elementos, faga un só:

1. Cree o elemento co seu tipo principal, como un elemento de superficie `Sala 101`.
2. Baixo {{ui:Also measure}} no seu editor, marque {{ui:Linear}}, {{ui:Count}} ou ambos. Cada un recibe unha unidade ao lado.
3. Debuxe con calquera ferramenta cuxo tipo admita o elemento: con `Sala 101` actual, {{ui:Area}} debuxa o seu chan, {{ui:Linear}} o seu rodapé e {{ui:Count}} as súas portas. TakeoffCraft non pide outro elemento.

A lista de elementos mostra cada cantidade (`50.00 SF + 2 EA`). Na táboa de cantidades, a fila do elemento ten a súa cantidade principal, e cada outro tipo ten a súa propia fila debaixo, como **Sala 101 (contar)**, coas súas propias tarifas de desperdicio, material e mano de obra. As exportacións, a táboa por folla e a lenda do PDF marcado listan igual.

Os campos do tipo principal son propios dese tipo: a altura ou profundidade, a inclinación, os descontos e a forma 3D aplícanse só ás súas marcas. Un tramo de rodapé debuxado para un elemento de superficie mídese en planta sen máis, e amósase plano en 3D. As fórmulas dos conxuntos usan os totais do tipo principal.

Un tipo pódese desmarcar só mentres o elemento non teña marcas dese tipo; elimínaas, ou muévaas antes a outro elemento en **Marca seleccionada**. As marcas poden pasar a calquera elemento que admita o seu tipo.

Máis abaixo está o {{ui:Assembly}}: compoñentes como montantes ou taboleiro, cada un coa súa fórmula e tarifas. Consulte [Conxuntos e fórmulas](topic:assemblies).

Na parte inferior, {{ui:Move up}} e {{ui:Move down}} cambian o lugar do elemento na lista e nas exportacións, e {{ui:Delete item}} elimina o elemento con todas as súas marcas (despois de preguntar; pode desfacelo).

Os elementos de superficie tamén teñen **Inclinación** (planos de cuberta medidos sobre a pendente: [Cubertas e pendentes](topic:roofs-and-slopes)) e **Desconto** (as súas marcas restan das superficies doutros elementos: [Medir superficies](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Os elementos lineais teñen **Pendente** (Nivel, Rampa, Faldón ou Vale) e, para rampas e faldóns, **Inclinación**.

## Tarifas na táboa

Tamén pode escribir {{ui:Waste %}} e as tarifas de material e mano de obra directamente na táboa {{ui:Quantities}}, ao pé ({{ui:By item}}). É a mesma configuración que no editor.

## Como funciona a valoración

Para cada elemento e cada compoñente do conxunto:

1. **Con desperdicio** = cantidade × (1 + desperdicio %).
2. **Material** = con desperdicio × material por unidade, redondeado ao céntimo.
3. **Mano de obra** = con desperdicio × mano de obra por unidade, redondeado ao céntimo.
4. **Total** = material + mano de obra.

O {{ui:Job total}} suma cada elemento e cada compoñente. Un elemento pode levar as súas propias tarifas e un conxunto á vez; ambos contan, así que deixe as tarifas do elemento en 0 cando os seus compoñentes levan o custo.

## Mano de obra por cuadrilla

En lugar dunha tarifa de mano de obra por unidade, a mano de obra dun elemento pode vir dunha cuadrilla: canto produce por hora, cantas persoas e canto gana cada unha. Baixo {{ui:Labor by crew}} no editor do elemento, marque {{ui:Price labor from a crew}} e complete:

| Campo | Exemplo |
|---|---|
| {{ui:Production}} | `20` LF por hora (na unidade do elemento) para toda a cuadrilla |
| {{ui:Crew size}} | `2` persoas |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft calcula, a partir da cantidade con desperdicio:

- **horas de cuadrilla** = cantidade ÷ produción (110 LF ÷ 20 = 5.5),
- **horas-traballador** = horas de cuadrilla × tamaño da cuadrilla (11),
- **días-cuadrilla** = horas de cuadrilla ÷ 8 (0.69),
- **mano de obra** = horas-traballador × salario ($495.00).

O editor mostra o resultado e a tarifa que resulta ($4.50/LF). A tarifa de mano de obra propia do elemento queda entón de só lectura, no editor e na táboa. O encabezado da táboa {{ui:Quantities}} engade as horas-traballador e os días-cuadrilla da obra. As exportacións anotan as horas de cada cuadrilla, e no libro a celda de mano de obra é unha fórmula sobre a cuadrilla (`ROUND(F2/20*2*45,2)`). Desmarque a caixa para volver a unha tarifa por unidade.

## Elementos métricos

Escolla m (lineal) ou m² (superficie) como unidade. Cantidades, alturas e valores das fórmulas quedan entón en metros. A escala da folla pode ser calquera predefinida ou calibrada; unidades e escalas son independentes.

## Seguinte

- [Medir tramos lineais](topic:measure-linear)
- [Medir superficies con recortes](topic:measure-areas)
- [Contar a man](topic:count-by-hand)
