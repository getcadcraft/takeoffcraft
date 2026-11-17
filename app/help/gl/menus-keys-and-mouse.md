---
title: Menús, teclas e rato
summary: Escolla un estilo de menú que se axuste á forma de traballar, dé a calquera comando a súa propia tecla, mova comandos entre menús, e defina o que fan a roda e os botóns do rato.
keywords: estilo de menú, menús, barra de menú, cinta, lapelas da cinta, barra de ferramentas, atallos de teclado, teclas rápidas, teclas, personalizar, reasignar, rato, roda, invertir, sentido do zoom, botón central, botón dereito, desprazar, exportar, importar, cambiar, familiar, mesa de medición, condicións
from: f01f0d6d
---

Os comandos de TakeoffCraft son os mesmos por onde se acceda a eles. Un **estilo de menú** só decide onde se sitúan na pantalla, como se chaman alí e que teclas os executan. Escolla un en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}; o cambio é inmediato, e este navegador o recorda.

## Os tres estilos

| Estilo | Que obtén |
|---|---|
| {{ui:TakeoffCraft}} | A propia barra de ferramentas de TakeoffCraft: Ficheiro, Exportar, Escala, Medición, Editar e Vista, coas teclas de ferramenta dunha letra. O punto de partida. |
| {{ui:Takeoff desk}} | Unha barra de menús ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Items}}, {{ui:Markup}}, {{ui:Export}}) sobre unha fila das ferramentas de medición, dispostas como as dispoñen os programas de medición de pantalla. Os elementos chámanse condicións na fila. As mesmas teclas, máis {{key:N}} para un elemento novo. Os predefinidos de escala pasan á barra da folla, xunto á escala da folla. |
| {{ui:Takeoff ribbon}} | Lapelas da cinta con nomes do traballo: {{ui:Takeoff}} (medir, dar forma, escala, desde o debuxo, condicións), {{ui:Edit}}, {{ui:View}}, {{ui:Markup}} e {{ui:Estimate}} (o libro de cálculo, os PDF marcados, a oferta), cun menú {{ui:File}} e unha fila rápida para abrir, gardar, desfacer e refacer. As ferramentas que usa todo o día son grandes, e as súas veciñas, pequenas e apiladas. As mesmas teclas; os predefinidos de escala pasan á barra da folla. |

Os tres estilos manteñen as teclas de TakeoffCraft: {{key:V}} seleccionar, {{key:L}} lineal, {{key:A}} superficie, {{key:O}} círculo, {{key:B}} cuarto, {{key:P}} ruta (escoller as liñas do PDF), {{key:X}} recorte, {{key:C}} contar, {{key:S}} contaxe automática, {{key:K}} calibrar, {{key:D}} comprobar, {{key:R}} modo arco, {{key:E}} modo deducir, {{key:F}} e {{key:W}} para axustar, {{key:3}} a vista de comprobación 3D, {{key:F3}} axuste, e {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

As ferramentas da barra da folla (notas, nubes, realces, Comparar, 3D) agardan a que se abra un PDF; se se escollen antes, a liña de estado indícao.

:::tip
Unha tecla que pertence á disposición propia de TakeoffCraft pero que o seu estilo asignou a outro comando non fai nada, e a liña de estado di onde foi a súa orde («En As miñas teclas, Contar é Ctrl+Alt+C»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as frechas conservan sempre o seu significado. Mentres debuxa un tramo ou un contorno, pega ou revisa unha contaxe automática, as letras e os números dunha lonxitude escrita quedan co debuxo.
:::

## Personalizalo

1. Escolla o estilo máis próximo ao que quere, despois faga clic en {{ui:Customize…}}.
2. En {{ui:Keys and menus}}, busque un comando (o campo de busca axuda). Faga clic en {{ui:Add a key}} e prema a tecla, ou dúas teclas seguidas para unha tecla de dúas letras. Faga clic nunha tecla para quitala.
3. Coa barra de menús, {{ui:Where it sits}} move o comando a outro menú, ou a {{ui:Keys only}}.
4. En {{ui:Mouse}}, defina a roda e os botóns que desprazan a folla.
5. Dé un nome e faga clic en {{ui:Save}}.

Gardar un estilo integrado crea a súa propia copia («A miña mesa de medición»); o integrado nunca cambia. Unha tecla asignada a dous comandos móstrase en vermello e hai que corrixila antes de gardar.

## Rato

- **Roda do rato**: {{ui:Scroll up zooms in}} (o inicio) ou {{ui:Scroll up zooms out}}, e a velocidade. Un pinzamento no trackpad sempre fai zoom no sentido en que se moven os dedos.
- **Desprazar a folla con**: o botón central, o botón dereito, ou ambos. Un arrastre co botón esquerdo sobre papel baleiro e {{key:Space}} con arrastre sempre desprazan; un clic dereito sen arrastrar sempre remata un tramo ou un contorno.
- **Arrastre nas vistas 3D**: {{ui:Cada vista propia}} conserva os botóns da vista de comprobación 3D (esquerdo e central orbitan, dereito despraza). Ou defina os botóns central e dereito para orbitar, desprazar, facer zoom ou nada; {{key:Shift}} co botón intercambia orbitar e desprazar. O botón esquerdo sempre orbita e escolle.

## Levalo consigo

{{ui:Export}} garda o estilo en uso nun pequeno ficheiro `.ccinput.json`; {{ui:Import…}} engade un, desde outro ordenador ou dun compañeiro. Un ficheiro importado só pode apuntar aos comandos propios de TakeoffCraft: o resto omítese e cóntase na liña de estado. {{ui:Delete this style}} elimina un dos seus.

:::note
Estes axustes quedan neste navegador. {{ui:Use this style in every app}} debaixo das tarxetas de estilo fai que cada aplicación se abra no seu estilo correspondente (a súa propia barra de ferramentas, unha barra de menús ou unha cinta), cos cambios que fixo en cada aplicación. TakeoffCraft non ten un estilo con liña de comandos: cando se escolle un para todas as aplicacións, TakeoffCraft conserva a súa propia barra de ferramentas.
:::

A {{ui:Takeoff ribbon}} é tamén a cinta da disposición {{ui:Ribbon and project browser}} ({{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}): vexa [A pantalla de TakeoffCraft](topic:workspace).

Relacionado: [Teclado e rato](topic:keyboard) · [Configuración de TakeoffCraft](topic:settings) · [Vir doutro software de medición](topic:coming-from)
