---
title: Usar TakeoffCraft con un asistente de IA
summary: Deje que su propio asistente de IA o script lea las cantidades y el presupuesto de la cuantificación, añada partidas y marcas, cuente y mida en un DWG o DXF, y exporte: permisos, conexión a través de CadCraft Studio y el registro de actividad.
keywords: ia, asistente, agente, mcp, protocolo de contexto de modelos, model context protocol, script, automatización, cantidades, presupuesto, permisos, desconectar, actividad
from: 7fa62ec6
---

## Lo que aprenderá

Cómo dejar que un asistente de IA (o un script que usted haya escrito) trabaje con TakeoffCraft, y cómo decidir a qué puede acceder.

TakeoffCraft **no tiene IA propia** y no envía nada a ningún sitio. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). TakeoffCraft solo le ofrece herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Ajustes}} (el engranaje de la barra de la aplicación, o {{key:Mod+,}}) y vaya a la pestaña {{ui:Medición}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen TakeoffCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer: **Leer** viene marcado de inicio; marque **Editar**, **Guardar** o **Exportar** solo cuando los necesite.

Las herramientas fuera de los permisos que marcó no se ofrecen al asistente, y si aun así lo pide, TakeoffCraft lo rechaza y lo anota en el registro de actividad. Desactivar el interruptor corta todas las conexiones a la vez; {{ui:Restablecer los ajustes de TakeoffCraft}} también lo desactiva.

## Conecte su asistente

Los asistentes se conectan a través de **CadCraft Studio** en su ordenador: Studio ejecuta un pequeño servidor al que solo este ordenador puede acceder, protegido por un token que genera cada vez que se inicia. En Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token en su asistente (Studio muestra los ajustes exactos que debe pegar). No comparta nunca el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones del navegador el interruptor no tiene efecto hasta que use CadCraft Studio en su ordenador.
:::

## Usted siempre tiene el control

- **Cada cambio es un único paso de deshacer**, con el nombre del asistente (por ejemplo, «Asistente: …»). {{key:Mod+Z}} deshace el último cambio del asistente en su totalidad.
- **Sabe cuándo hay uno conectado.** Un botón de la barra de la aplicación indica el nombre del asistente mientras está conectado; haga clic en él para ver lo que puede hacer, o para **Desconectarlo**.
- **Actividad.** {{ui:Ajustes}} › {{ui:Medición}} › {{ui:Asistentes}} › {{ui:Actividad}} lista cada llamada: cuándo, qué herramienta, y si se hizo o se rechazó. {{ui:Guardar el registro}} guarda una copia.

## Qué puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `sheets_list` | Leer | La cuantificación abierta, sus PDF y hojas, la escala de cada hoja y sus marcas |
| `items_list` | Leer | Las partidas con sus unidades, tarifas y fórmulas de ensamblaje |
| `takeoff_quantities` | Leer | Cantidades por partida o por hoja; las marcas en hojas sin escala se listan, nunca se cuentan como cero |
| `takeoff_estimate` | Leer | El presupuesto valorado tal como lo calcula TakeoffCraft, con sus totales |
| `takeoff_export` | Exportar | La exportación CSV o XLSX propia de TakeoffCraft |
| `items_add` | Editar | Añade partidas con sus unidades, tarifas y desperdicio |
| `marks_add` | Editar | Mide tramos, áreas y recuentos en una hoja. Longitudes y áreas solo en una hoja con escala, nunca en una sin escala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Leer | En un DWG o DXF que haya abierto: sus hojas y sus escalas, lo que se puede contar (bloques, capas y tipos, textos) y recuentos exactos, tal como los hace {{ui:Recuento CAD}} ([Contar desde un dibujo](topic:count-from-a-drawing)) |
| `cad_count_add` | Editar | Cuenta en el dibujo y pone una marca de recuento en cada objeto encontrado, en un solo paso; volver a contar añade solo lo nuevo |
| `cad_measure` | Editar | Mide una partida lineal o de área a partir de las líneas, arcos, polilíneas y tramas del propio dibujo, tal como lo hace {{ui:Medir dibujo}} ([Medir desde un dibujo](topic:measure-from-a-drawing)); solo en una hoja con escala |
| `usd_export` | Exportar | Los tramos, áreas y recuentos medidos de una hoja escalada como modelo 3D de comprobación en USD (`.usdz`, `.usda` o `.usdc`), tal como lo escribe {{ui:Paquete USD (.usdz)}} en la vista de comprobación 3D ([Exportar la vista de comprobación 3D como USD](topic:usd)) |

Con **Editar** marcado, un asistente añade partidas y marcas (cada llamada es un paso de deshacer); no puede mover, cambiar ni borrar las marcas que ya existen.

Las mismas cantidades y el mismo presupuesto están disponibles sin abrir TakeoffCraft: el servidor MCP de CadCraft abre un archivo `.takeoff.json` de una carpeta que usted indique (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), y `cadcraft info Job.takeoff.json` los muestra en la línea de comandos. También abre un DWG o DXF como una nueva cuantificación con sus hojas (escaladas a partir del dibujo tal como TakeoffCraft las escala), cuenta y mide en ella con las mismas herramientas `cad_*`, añade partidas y guarda la cuantificación (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` cuenta desde la línea de comandos.

## Si algo no funciona

- **El asistente no ve herramientas de TakeoffCraft:** compruebe que el interruptor está activado en esta ventana y que la ventana está abierta en Studio.
- **«needs the export permission»** (se necesita el permiso de exportación): marque **Exportar** en {{ui:Asistentes}} y vuelva a pedirlo.
- **Errores «401» o «token»:** el token ha cambiado (Studio se reinició, o {{ui:Nuevo token}}). Copie el nuevo en los ajustes del asistente.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
