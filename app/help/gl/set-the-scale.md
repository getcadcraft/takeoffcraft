---
title: Definir a escala
summary: Dea a cada folla unha escala cunha predefinición ou calibrando sobre unha dimensión coñecida, compróbea, e entenda por que as follas sen escala quedan fóra dos totais.
keywords: detectar escala, ler escala, escala do texto, todas as follas, escala, calibrar, predefinición, comprobar escala, verificar, dimensión coñecida, sen escala, ningunha escala, razón, definir escala
from: 8f0148e6
---

Cada folla ten a súa propia escala. Vostede a define, ou deixa que TakeoffCraft a lea do texto das follas (abaixo), e compróbaa. Ata que unha folla teña escala, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} e {{ui:Cut-out}} negan a medir nela. {{ui:Count}} e {{ui:Auto count}} funcionan sen escala.

A lista de follas mostra a escala de cada folla, ou **Sen escala**. A barra debaixo da folla aberta di o mesmo.

## Usar unha predefinición (cando o PDF se imprime en tamaño real)

1. Abra a folla.
2. Abra a lista {{ui:Preset}} no grupo {{ui:Scale}}.
3. Escolla a escala impresa no debuxo, por exemplo `1/8" = 1'-0"` en Arquitectónica.
   A barra de estado indica «Escala para esta folla: 1/8" = 1'-0".»
4. Compróbea (abaixo).

Unha predefinición supón que o PDF é o tamaño real do papel para o que se fixo o debuxo. Se alguén fixo o PDF con «axustar á páxina», ou é un xogo á metade de tamaño, a predefinición é incorrecta. Calibre no seu lugar.

A lista completa está en [Predefinicións de escala](topic:scale-presets).

## Ler as escalas do texto das follas

A maioría dos debuxos indican a súa escala: `SCALE: 1/4" = 1'-0"` no caixetín, `1:100` debaixo dunha vista. TakeoffCraft pode lela e fixar todas as follas á vez.

1. Abra a lista {{ui:Preset}} e escolla {{ui:From the sheets' text…}} (na parte superior).
2. A lista mostra cada folla: a súa escala agora, e o que di o seu texto — **Indica 1/4" = 1'-0"**, **Sen escala no seu texto** ou **Indica que non se escala** (NTS).
3. As follas sen escala que indican unha van marcadas. Marque ou desmarque as que queira e escolla {{ui:Set the ticked scales}}. Un {{key:Mod+Z}} desfai todas.
4. Comprobe unha dimensión en cada folla con {{ui:Check}} (abaixo): unha predefinición só é correcta cando o PDF se imprime en tamaño real.

Lee notacións arquitectónicas (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), de enxeñaría (`1" = 20'`) e métricas (`1:50`) que coinciden cunha [predefinición](topic:scale-presets). Cando unha folla indica máis dunha escala (un plano con detalles ampliados), toma a que indica máis veces, e a escrita despois da palabra SCALE conta dobre; as outras móstranse en vermello para que as revise. Unha folla escaneada non ten texto: defina a súa escala a man.

## Calibrar sobre unha dimensión coñecida

Use isto cando non hai unha escala impresa de confianza, o xogo foi redimensionado, ou a folla di «non á escala» pero ten cotas.

1. Abra a folla e achegue o zoom a unha dimensión longa que coñeza, como o espazamento dunha liña de eixe ou unha cota xeral do edificio. Canto máis longa, máis precisa.
2. Escolla {{ui:Calibrate}} no grupo {{ui:Scale}}, ou prema {{key:K}}.
3. Faga clic nun extremo da dimensión. Achegue o zoom a cada extremo para maior precisión; pode facer zoom e desprazarse entre os clics.
4. Faga clic no outro extremo. Mantenga premido {{key:Shift}} para manter a liña a 0°, 45° ou 90°.
   Abre o diálogo **Calibrar esta folla**.
5. Escriba a distancia real en **Distancia real**, por exemplo `24'-6 1/2"`, `24.5` (pés decimais), `30"` ou `7.5 m`. Vexa [Introdución de lonxitudes, tarifas e porcentaxes](topic:entry-formats).
6. Escolla {{ui:Set the scale}}.
   A barra de estado mostra a escala como «1" = (n)'», e cando está a menos de 0.5 % dunha predefinición indica cal, por exemplo «que coincide con 1/4" = 1'-0" (escolla esa predefinición para unha escala exacta)».
   TakeoffCraft volve á ferramenta {{ui:Select}}.

Cando a calibración coincide cunha predefinición, escoller esa predefinición dá unha escala exacta, en vez dunha que depende de onde fixo clic.

## Comprobar a escala

Comprobe sempre unha escala nova sobre unha segunda dimensión.

1. Escolla {{ui:Check}} no grupo {{ui:Scale}}, ou prema {{key:D}}.
2. Faga clic nos dous extremos dunha dimensión impresa no debuxo.
   A barra de estado mostra «Comprobación: 12'-6"» coa mesma lonxitude en pés decimais e en metros, e a liña de comprobación queda na folla coa súa lonxitude.
3. Compárea coa dimensión impresa. Se non coincide, calibre sobre unha dimensión máis longa.

Prema {{key:Esc}} para borrar a liña de comprobación.

## Cambiar unha escala

Escolla outra predefinición ou calibre de novo. Se a folla xa ten medicións, TakeoffCraft pregunta **Cambiar a escala desta folla?** e indica cantas medicións se volverán medir. Escolla {{ui:Change the scale}}. Cada tramo e área da folla volve medirse á nova escala. Pode desfacelo con {{key:Mod+Z}}.

## Por que as follas sen escala non se contan como cero

Unha marca nunha folla sen escala non ten lonxitude nin superficie reais. TakeoffCraft nunca a conta como cero, o que faría o seu orzamento baixo sen avisalo. En cambio:

- deixa esas marcas fóra dos totais,
- mostra «+(n) sen escala» xunto ao elemento en {{ui:Quantities}},
- mostra «Incompleto: (n) marcas en follas sen escala (non están nos totais)» no encabezado da táboa,
- escribe o número na columna de notas da folla de cálculo exportada.

Isto pode pasar cando abre un proxecto cuxas escalas nunca se fixaron. Dea escala á folla e as marcas cóntanse de inmediato. As marcas de contaxe contan sempre; non precisan escala.

## Consellos

- Defina a escala de cada folla que vaia medir antes de comezar. Busque **Sen escala** na lista de follas para atopar as que faltan (a caixa de busca mira os nomes das follas, non as escalas).
- Os detalles e planos ampliados na mesma folla adoitan usar outra escala. TakeoffCraft ten unha escala por folla; vexa [O que aínda non está construído](topic:not-built-yet).
- Debuxos métricos: escolla unha predefinición métrica como `1:100`, ou calibre cunha distancia métrica como `6000 mm`.
