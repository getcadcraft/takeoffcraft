---
title: Contar a man
summary: Faga clic en cada porta, accesorio ou dispositivo para contalo, comprobe as contaxes e corrixa os erros.
keywords: contar, cada, ea, accesorios, portas, dispositivos, símbolos, reconto, contaxe con clic, contaxe manual
from: 594f2980
---

Un elemento de contaxe conta cousas: portas, luminarias, tomas, accesorios de fontanería. Cada clic na folla engade unha marca de contaxe. Contar non precisa escala.

## Contar

1. Cree ou escolla un elemento de contaxe en {{ui:Elementos}} (tipo {{ui:Contar}}).
2. Escolla {{ui:Contar}} na barra de ferramentas, ou prema {{key:C}}.
3. Faga clic en cada un na folla.
   Cada clic pon un punto na cor do elemento, e a contaxe do elemento aumenta en un.
4. Pase á seguinte folla ({{key:PageDown}}) e siga contando. A ferramenta mantense en {{ui:Contar}}.
5. Prema {{key:Esc}} ao rematar. TakeoffCraft volve a {{ui:Seleccionar}}.

Arrastrar segue desprazando e a roda segue facendo zoom mentres conta, así que pode moverse pola folla sen engadir puntos.

:::tip
Faga clic no elemento de contaxe para resaltar os seus puntos en todas as follas. A lista de follas mostra entón cantos hai en cada folla, o que axuda a atopar as follas que aínda non contou.
:::

## Corrixir unha contaxe

- **Retirar un punto**: escolla {{ui:Seleccionar}} ({{key:V}}), faga clic no punto e prema {{key:Delete}} ou escolla {{ui:Eliminar marca}}. Ou prema {{key:Mod+Z}} xusto despois dun clic errado.
- **Mover un punto**: selecciónao e arrástreo.
- **Contado baixo o elemento equivocado**: seleccione o punto e escolla o elemento de contaxe correcto na lista **Elemento** baixo **Marca seleccionada**.

## Tamaño dos puntos, na pantalla e no PDF

Os puntos mantén un tamaño na pantalla por moito zoom que se faga. Para cambialo, abra {{ui:Configuración}}, a lapela de TakeoffCraft, e escolla **Tamaño do marcador de contaxe**: Extra pequeno, Pequeno, Mediano (o predeterminado) ou Grande.

A exportación a PDF ({{ui:Exportar}} › o PDF marcado) debuxa cada punto co mesmo tamaño no papel, sexa cal sexa o tamaño da folla: un visor que mostre o PDF ao 100% móstrao tan grande como na pantalla. Cando os puntos dunha folla aínda se tocarían, a exportación fai máis pequenos os de esa folla para que cada un se poida ler.

## Moitos símbolos idénticos

Para un símbolo que se repite moitas veces nunha folla, probe [Contaxe automática](topic:auto-count): enmarque un, revise o que atopa e engádeos todos nun só paso.

## Usar contaxes en fórmulas

A cantidade dun elemento de contaxe é **N**. Os compoñentes do conxunto poden usala, por exemplo bisagras `N * 3` para portas. Consulte [Conxuntos e fórmulas](topic:assemblies).
