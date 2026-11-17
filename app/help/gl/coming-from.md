---
title: Vindo doutro software de medición
summary: Como os hábitos dos programas de medición especializados e das ferramentas de anotación de PDF se corresponden con TakeoffCraft, e as diferenzas que máis desconcertan.
keywords: cambiar, migrar, condicións, pezas, ferramentas de medición, lista de anotacións, ligazón de cantidade, hábitos de medición, diferenzas, comparar
from: 12004ce5
---

Se xa fixo medicións con PlanSwift ou coas ferramentas de medición de Bluebeam Revu, a maior parte de TakeoffCraft resultaralle familiar: un conxunto de planos, unha escala por folla, os elementos que mide e un total valorado. A forma en que encaixan as pezas é distinta en certos aspectos, e esas diferenzas están a continuación.

Se coñece PlanSwift ou On-Screen Takeoff, escolla o estilo de menú {{ui:Mesa de medición}} en {{ui:Configuración}} › {{ui:TakeoffCraft}} › {{ui:Menús, teclas e rato}}: unha barra de menús con Ficheiro, Editar, Vista, Escala, Medición, Elementos, Anotación e Exportar sobre unha fila das ferramentas de medición, cos predefinidos de escala na barra da folla. Consulte [Menús, teclas e rato](topic:menus-keys-and-mouse).

## Hábitos equivalentes

| Está afeito a | En TakeoffCraft |
|---|---|
| Abrir un traballo ou proxecto que almacena os planos (PlanSwift) | Abra os PDF e o ficheiro `.takeoff.json` do proxecto xuntos. O proxecto almacena só a medición; os PDF seguen sendo os seus propios ficheiros. |
| Unha lista de anotacións con notas, nubes e resaltados (Bluebeam) | {{ui:Anotación}} na barra da folla: notas, nubes e resaltados cun estado (Aberta, Respondida, Pechada), listados baixo **Anotacións** e debuxados no PDF marcado. Consulte [Notas, nubes e resaltados](topic:markups). |
| Medicións gardadas como anotacións dentro do PDF (Bluebeam) | A medición está no ficheiro `.takeoff.json`. {{ui:PDF marcado}} escribe unha copia coa medición debuxada, para compartir; {{ui:PDF coa medición dentro}} escribe unha copia que leva a medición, para reabrir en TakeoffCraft. |
| Elementos de medición (PlanSwift), ferramentas de medición personalizadas gardadas na Caixa de ferramentas (Bluebeam) | **Elementos** baixo {{ui:Elementos}}: nome, tipo, cor, unidade, altura ou profundidade, desperdicio, tarifas. |
| Partes e conxuntos con fórmulas (PlanSwift) | O {{ui:Conxunto}} do elemento: compoñentes cunha fórmula que usa `L H A N P`. |
| Fixar a escala da páxina, ou calibrar (ambos) | Lista de {{ui:Predefinida}} ou {{ui:Calibrar}} no grupo {{ui:Escala}}, por folla. {{ui:Comprobar}} mide unha dimensión coñecida. |
| Aplicar unha escala a un intervalo de páxinas | Aínda non: fixe cada folla. |
| Ventás gráficas con escalas diferentes nunha folla (Bluebeam) | Aínda non: unha escala por folla. |
| Ferramentas de polilongo e área (Bluebeam), medición lineal e de área (PlanSwift) | {{ui:Lineal}} ({{key:L}}) e {{ui:Superficie}} ({{key:A}}). |
| Manter premida {{key:Shift}} para liñas rectas | {{key:Shift}} axústase en pasos de 45°, a mesma idea. |
| Axuste ás liñas do debuxo | Activado por defecto: extremos, puntos medios, interseccións e o punto máis próximo dunha liña, con {{key:F3}} para desactivalo, como nos programas CAD. |
| Ferramenta de contaxe (ambos) | {{ui:Contar}} ({{key:C}}). |
| Busca visual de símbolos (Bluebeam) | {{ui:Contaxe automática}} ({{key:S}}): enmarque un símbolo, revise e engada. |
| Recortes ou deducións en áreas | {{ui:Recorte}} ({{key:X}}) sobre unha área seleccionada, e recortes circulares. |
| Deducións en tramos lineais | Debuxe o tramo en liña recta e prema {{key:E}} ({{ui:Deducir}}) para a abertura. Consulte [Medir tramos lineais](topic:measure-linear). |
| Segmentos de arco nun polilongo | {{ui:Arco}} ({{key:R}}): faga clic nun punto da curva, e logo no seu extremo. |
| A lista de anotacións con columnas de cantidade (Bluebeam) | A táboa {{ui:Cantidades}}, {{ui:Por elemento}} ou {{ui:Por folla}}. |
| Cadro de estimación con prezos (PlanSwift) | A mesma táboa: desperdicio, material e man de obra por unidade, totais estendidos, {{ui:Total da obra}}. |
| Exportar a Excel | {{ui:XLSX}} con fórmulas activas, ou {{ui:CSV}}. |
| Escape para deter unha ferramenta | {{key:Esc}} cancela e volve a {{ui:Seleccionar}}. |
| Clic dereito para rematar | O clic dereito remata un tramo ou pecha unha área tamén aquí. Non hai menú de clic dereito. |

## Diferenzas que desconcertan

**A medición non está dentro do seu PDF.** Nada do que fai muda os seus PDF. Garde o ficheiro `.takeoff.json` e consérvao cos planos. Enviar a alguén o PDF marcado non lle envía unha medición editable: envíe o ficheiro do proxecto e os PDF orixinais, ou un [PDF coa medición dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Os PDF cótanse polo contido, non polo nome.** Unha folla revisada gardada sobre o nome de ficheiro antigo é un ficheiro novo para TakeoffCraft, sen escala e sen marcas. As súas marcas antigas quedan na versión antiga e seguen contando. Consulte [Gardar e reabrir unha medición](topic:save-and-reopen#when-a-pdf-has-changed).

**As marcas sen escala déixanse fóra, non se contan como cero.** Se unha folla non ten escala, os seus tramos e áreas non contan, e a táboa di «Incompleto». En moitos programas só vería 0. Consulte [Fixar a escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Non hai adiviñación do tamaño da páxina.** Os predefinidos supoñen que o PDF se imprime a tamaño completo. Un PDF á metade do tamaño ou «axustar á páxina» necesita {{ui:Calibrar}}. Use sempre {{ui:Comprobar}}.

**Un elemento, un tipo principal, máis se o pide.** Un elemento é lineal, de área ou de contaxe, e o seu tipo bloquéase cando ten marcas. Unha condición que dá tanto unha área como o seu perímetro é un elemento de área: o seu perímetro é a variable `P`. Un muro con lonxitude e área é un elemento lineal cunha altura. Para un elemento con varias condicións, como unha sala cun chan, unha base e portas, marque os outros tipos en {{ui:Medir tamén}}: cada un vale na súa propia fila. Consulte [Unha peza, varios tipos de marcas](topic:create-items#one-item-several-kinds-of-marks).

**As fórmulas traballan sobre totais.** As fórmulas do conxunto usan os totais do elemento en todas as follas, non tramo a tramo. `N` (o número de tramos ou áreas) serve para extras por tramo, como un montante extra por muro.

**O perímetro inclúe os recortes.** O `P` dunha área suma as arestas dos seus buratos. Consulte [Medir áreas con recortes](topic:measure-areas#read-the-area).

**Arrastrar despraza.** Un arrastre co botón esquerdo sobre a folla despraza, en todas as ferramentas excepto {{ui:Contaxe automática}}. Nunca precisa cambiar a unha ferramenta de desprazamento. A roda fai zoom; non despraza.

**Unha copia de recuperación, non unha nube.** TakeoffCraft garda unha copia do seu traballo neste navegador e ofrécea de novo tras unha caída ([Se a lapela ou o navegador se deteñen](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), pero a medición é cousa súa para gardala: {{key:Mod+S}}. A gardadura na nube aínda non está dispoñible.

**Todo está no navegador.** Non hai nada que instalar, e os planos nunca se envían. Para unha aplicación de escritorio, TakeoffCraft chega en CadCraft Studio, cos outros sete programas.

## Aínda non dispoñible

As rexións de escala por folla aínda non están construídas. Consulte [O que aínda non está construído](topic:not-built-yet) para a lista completa e o que facer no seu lugar.
