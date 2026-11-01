---
title: Primeros pasos con TakeoffCraft
summary: Qué hace TakeoffCraft, dónde se ejecuta y su primera partida medida y valorada a partir de un juego de planos en PDF.
keywords: inicio, primera medición, inicio rápido, introducción, presupuesto, medición de cantidades, juego de planos, pdf
from: 3b9da1fb
---

TakeoffCraft mide juegos de planos, PDF y dibujos DWG o DXF, y convierte las mediciones en un presupuesto valorado. Usted abre los archivos (un dibujo se cuenta directamente a partir de sus bloques: vea [Abrir un dibujo DWG o DXF](topic:open-a-drawing)), da una escala a cada hoja (un dibujo trae la suya), crea **partidas** (un tipo de muro, un acabado de suelo, un aparato) y hace clic en las hojas para medirlas. Las cantidades, los costes y el total de la obra se actualizan sobre la marcha. Puede exportar el presupuesto como hoja de cálculo y una copia de los PDF con su medición dibujada.

Si ha hecho mediciones en otros programas, lea a continuación [Si viene de otro programa de mediciones](topic:coming-from). Algunas cosas funcionan de otra forma aquí.

## Dónde se ejecuta

TakeoffCraft se ejecuta en su navegador web. Abra TakeoffCraft y la pantalla está lista al instante; no hay nada que instalar.

- **Sus PDF se quedan en su ordenador.** El navegador los abre y nunca se suben. Guardar es una descarga.
- Funciona en las versiones actuales de Chrome, Edge, Firefox y Safari. Vea [Navegadores y ordenadores](common:browsers).
- Funciona sin conexión a internet una vez que elige {{ui:Guardar para uso sin conexión}} en la barra de la aplicación y dice {{ui:Listo sin conexión}}. Vea [Trabajar sin conexión](common:offline).
- El guardado en la nube todavía no está disponible. Como aplicación de escritorio, TakeoffCraft viene en CadCraft Studio, con las otras siete aplicaciones.

## Su primera medición en diez pasos

Este recorrido mide un tipo de muro y lo valora. Lleva unos minutos con cualquier plano que tenga.

1. Elija {{ui:Abrir PDF}} en el grupo {{ui:Archivo}} de la barra de herramientas (o pulse {{key:Mod+O}}), elija uno o más PDF y pulse Abrir. También puede soltar los PDF en cualquier punto de la página.
   Las hojas aparecen a la izquierda y la primera hoja se abre en el centro.
2. Busque la escala impresa de la hoja en su cajetín o bajo el título de un dibujo.
3. Abra la lista {{ui:Preajuste}} en el grupo {{ui:Escala}} y elija esa escala, por ejemplo `1/4" = 1'-0"`.
   La barra de la parte inferior de la hoja dice ahora «Escala 1/4" = 1'-0"».
4. Elija {{ui:Comprobar}} (o pulse {{key:D}}) y haga clic en los dos extremos de una cota impresa en el dibujo.
   La lectura de la barra de estado, abajo a la izquierda, debería coincidir con la cota impresa. Si no coincide, vea [Establecer la escala](topic:set-the-scale).
5. En el panel {{ui:Partidas}} de la derecha, elija {{ui:Nueva partida}}, escriba un nombre como `Muro interior tipo A`, deje el tipo en {{ui:Lineal (longitud)}} y elija {{ui:Añadir}}.
6. Elija {{ui:Lineal}} en la barra de herramientas (o pulse {{key:L}}).
7. Haga clic en el inicio de un muro y después en cada esquina a lo largo de él. Haga doble clic, pulse {{key:Enter}} o haga clic derecho para terminar el tramo.
   El tramo se dibuja con el color de la partida y su longitud aparece junto a ella.
8. En el editor de partidas, bajo {{ui:Partidas}}, escriba `9'-0"` en {{ui:Altura}}, `0.85` en {{ui:Material $/LF}} y `1.20` en {{ui:Mano de obra $/LF}}.
   La tabla {{ui:Cantidades}} de la parte inferior muestra la longitud, el material y la mano de obra ampliados, y el {{ui:Total de la obra}}.
9. Elija {{ui:Guardar medición}} (o pulse {{key:Mod+S}}).
   Su navegador descarga un archivo `.takeoff.json`. Contiene sus partidas, escalas y marcas, y se vuelve a abrir sobre los mismos PDF.
10. Abra el menú {{ui:Exportar}} de la barra de herramientas y elija {{ui:XLSX}} para descargar el presupuesto como hoja de cálculo.

:::tip
Pulse {{key:Esc}} para detener lo que esté haciendo y volver a la herramienta {{ui:Seleccionar}}. {{key:Mod+Z}} deshace cualquier cambio.
:::

## Qué leer a continuación

- [La pantalla de TakeoffCraft](topic:workspace) nombra cada parte de la ventana.
- [Iniciar una medición y abrir un juego de planos](topic:open-plan-set) trata varios PDF y la lista de hojas.
- [Crear partidas de medición](topic:create-items) explica tipos, unidades, desperdicio y precios.
- [Conjuntos y fórmulas](topic:assemblies) convierte una medición en montantes, planchas de placa y más.
- [Teclado y ratón](topic:keyboard) enumera todas las teclas.
