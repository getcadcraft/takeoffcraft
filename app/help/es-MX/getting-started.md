---
title: Primeros pasos con TakeoffCraft
summary: Qué hace TakeoffCraft, dónde se ejecuta y su primera partida medida y valuada a partir de un juego de planos en PDF.
keywords: inicio, primera cuantificación, inicio rápido, introducción, presupuesto, cuantificación de cantidades, juego de planos, pdf
from: 3b9da1fb
---

TakeoffCraft mide juegos de planos, PDF y dibujos DWG o DXF, y convierte las mediciones en un presupuesto valuado. Usted abre los archivos (un dibujo se cuenta directamente desde sus bloques: vea [Abrir un dibujo DWG o DXF](topic:open-a-drawing)), da a cada hoja una escala (un dibujo trae la suya), crea **partidas** (un tipo de muro, un acabado de piso, un accesorio) y hace clic en las hojas para cuantificarlas. Las cantidades, los costos y el total de la obra se actualizan sobre la marcha. Puede exportar el presupuesto como una hoja de cálculo y una copia de los PDF con su cuantificación dibujada.

Si ha hecho cuantificación en otros programas, lea a continuación [Si viene de otro software de cuantificación](topic:coming-from). Algunas cosas funcionan distinto aquí.

## Dónde se ejecuta

TakeoffCraft se ejecuta en su navegador web. Abra TakeoffCraft y la pantalla está lista de inmediato; no hay nada que instalar.

- **Sus PDF se quedan en su computadora.** El navegador los abre y nunca se suben. Guardar es una descarga.
- Funciona en las versiones actuales de Chrome, Edge, Firefox y Safari. Vea [Navegadores y computadoras](common:browsers).
- Funciona sin conexión a internet una vez que elige {{ui:Guardar para usar sin conexión}} en la barra de la aplicación y dice {{ui:Lista sin conexión}}. Vea [Trabajar sin conexión](common:offline).
- El guardado en la nube todavía no está disponible. Como aplicación de escritorio, TakeoffCraft viene en CadCraft Studio, con las otras siete aplicaciones.

## Su primera cuantificación en diez pasos

Este recorrido mide un tipo de muro y lo valúa. Toma unos minutos con cualquier plano que tenga.

1. Elija {{ui:Abrir planos}} en el grupo {{ui:Archivo}} de la barra de herramientas (o pulse {{key:Mod+O}}), escoja uno o más PDF y elija Abrir. También puede soltar los PDF en cualquier parte de la página.
   Las hojas aparecen a la izquierda y la primera hoja se abre en el centro.
2. Busque la escala impresa de la hoja en su cuadro de rotulación o bajo el título de un dibujo.
3. Abra la lista {{ui:Predefinida}} en el grupo {{ui:Escala}} y escoja esa escala, por ejemplo `1/4" = 1'-0"`.
   La barra de la parte inferior de la hoja ahora dice "Escala 1/4" = 1'-0"".
4. Elija {{ui:Comprobar}} (o pulse {{key:D}}) y haga clic en los dos extremos de una cota impresa en el dibujo.
   La lectura de la barra de estado, abajo a la izquierda, debe coincidir con la cota impresa. Si no coincide, vea [Fijar la escala](topic:set-the-scale).
5. En el panel {{ui:Partidas}} de la derecha, elija {{ui:Nueva partida}}, escriba un nombre como `Muro interior tipo A`, deje el tipo en {{ui:Lineal (longitud)}} y elija {{ui:Agregar}}.
6. Elija {{ui:Lineal}} en la barra de herramientas (o pulse {{key:L}}).
7. Haga clic en el inicio de un muro y luego en cada esquina a lo largo de él. Haga doble clic, pulse {{key:Enter}} o haga clic derecho para terminar el tramo.
   El tramo se dibuja con el color de la partida y su longitud aparece junto a ella.
8. En el editor de partidas, bajo {{ui:Partidas}}, escriba `9'-0"` en {{ui:Altura}}, `0.85` en {{ui:Material $/LF}} y `1.20` en {{ui:Mano de obra $/LF}}.
   La tabla {{ui:Cantidades}} de la parte inferior muestra la longitud, el material y la mano de obra extendidos, y el {{ui:Total de la obra}}.
9. Elija {{ui:Guardar cuantificación}} (o pulse {{key:Mod+S}}).
   Su navegador descarga un archivo `.takeoff.json`. Contiene sus partidas, escalas y marcas, y se vuelve a abrir sobre los mismos PDF.
10. Abra el menú {{ui:Exportar}} en la barra de herramientas y elija {{ui:XLSX}} para descargar el presupuesto como hoja de cálculo.

:::tip
Pulse {{key:Esc}} para detener lo que esté haciendo y volver a la herramienta {{ui:Seleccionar}}. {{key:Mod+Z}} deshace cualquier cambio.
:::

## Qué leer a continuación

- [La pantalla de TakeoffCraft](topic:workspace) nombra cada parte de la ventana.
- [Iniciar una cuantificación y abrir un juego de planos](topic:open-plan-set) trata varios PDF y la lista de hojas.
- [Crear partidas de cuantificación](topic:create-items) explica tipos, unidades, desperdicio y precios.
- [Conjuntos y fórmulas](topic:assemblies) convierte una medición en postes, láminas de tablero y más.
- [Teclado y mouse](topic:keyboard) enumera todas las teclas.
