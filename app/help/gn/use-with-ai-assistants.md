---
title: Ejeporu TakeoffCraft asistente AI rupive
summary: Emoĩ ne asistente AI térã script ohechakuaa cantidades ha presupuesto, omoñe'ẽ ítems ha marcas, oconta ha omedi DWG térã DXF-pe, ha exportá: permisos, emboguejy CadCraft Studio rupive ha registro de actividad.
keywords: ai, asistente, agente, mcp, protocolo de contexto de modelo, script, automatización, cantidades, presupuesto, permisos, desconectar, actividad
from: 7fa62ec6
---

## Mba'e rekuaáta

Mba'éichapa emoĩ asistente AI (térã script nde ojapo vaekue) omba'apo TakeoffCraft-pe, ha mba'éichapa ejechóse mba'e ikatu ojeporu.

TakeoffCraft-pe **ndaipóri AI ijeheguáicha** ha ndaiporúi mba'eve ndaha'éi. Nde reikotevẽ asistente: programa oñeha'ãva Model Context Protocol (MCP). TakeoffCraft ome'ẽ herramienta añónte, ha nde reiporavo mávapa ojeporúta.

## Emoñepyrũ

1. Ejepe {{ui:Configuración}} (ikópe app bar-pe, térã {{key:Mod+,}}) ha eike {{ui:TakeoffCraft}} pestañáre.
2. {{ui:Asistentes}} ryepýpe, marcá **Emoĩ asistente AI ha script-kuéra ojeporu TakeoffCraft**. Ipy'ỹ peteĩ jey nde reipe'a peve.
3. Eiporavo mba'e ikatu ojapo: **Leer** ojejapo'ỹva ojegueru; marcá **Editar**, **Guardar** térã **Exportar** rehecháramo añónte.

Herramienta nde marcavo'ỹva permisos rehe ndojeʼẽ asistente-pe, ha asistente ojerekóramo ojerekóvo, TakeoffCraft ojejoko ha ojeanota registro de actividad-pe. Ipy'ỹ mboguejy ojejoko conexiones opavave peteĩ jey; {{ui:Restablecer la configuración de TakeoffCraft}} omboguejy avei.

## Emboguejy nde asistente

Asistente-kuéra oñeʼẽ **CadCraft Studio** rupive nde computadora-pe: Studio omyasã peteĩ servidor pytũ, ha'e ojeikóva ko computadora-gui añónte, ha oñeñangarekóva token peteĩ ha'e ojapóva cada jey oñepyrũ. Studio-pe, eiporavo {{ui:Conectar un asistente}} ha emboguejy address ha token nde asistente-pe (Studio omosẽ mba'éichapa ojeʼẽ). Token ndaha'éi ejavy'a ambue-pe.

:::note
Navegador-pe pestaña ndaikatúi omoĩ conexión asistente-pe: navegador-pe apprekuéra-pe ipy'ỹ ndaipórei ojeporu peve CadCraft Studio nde computadora-pe.
:::

## Nde ojerekóta

- **Peteĩ tembiapo ha'e peteĩ undo.** Peteĩ tembiapo asistente-gui oñemboguejy ha ojeñemyanduʼa asistente réra rehe (ohechaukáva "Asistente: …"). {{key:Mod+Z}} omboguejy asistente-pe ojapo vaekue tembiapo opavave.
- **Ereikuaa mo'ã peteĩ oñemboguejyva.** Botón app bar-pe omoñe'ẽ asistente oñemboguejy ramo; eikytĩ ha ehechakuaa mba'e ikatu ojapo, térã ejejoko **Desconectar**.
- **Actividad.** {{ui:Configuración}} › {{ui:TakeoffCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} omoĩ opa jesarekó: mboapy, mba'e herramienta, oñemoĩva térã ojejoko. {{ui:Guardar el registro}} ombyaty peteĩ kopia.

## Mba'e ikatu asistente oikotevẽ

| Herramienta | Permiso | Mba'e ojapo |
|---|---|---|
| `app_info`, `sheets_list` | Leer | Takeoff ojepyrũva, ijePDF ha hojakuéra, cada hoja escala ha marcas |
| `items_list` | Leer | Ítems unidades, tasas ha fórmulas de ensamblado-kuéra |
| `takeoff_quantities` | Leer | Cantidades ítem térã hoja-pe; marcas hoja sin escala-pe ojehechaukáva listadas, ndojeconta cero-pe |
| `takeoff_estimate` | Leer | Presupuesto precio-pe TakeoffCraft ojapova, total-kuéra reŋ |
| `takeoff_export` | Exportar | TakeoffCraft-pe iñambue CSV térã XLSX exportación |
| `items_add` | Editar | Omoñe'ẽ ítems unidades, tasas ha desperdicio reŋ |
| `marks_add` | Editar | Omedi tape, área ha conteo hoja-pe. Longitud ha área tenemínte hoja escala-pe, escala'ỹva-pe ndaha'éi |
| `cad_sheets`, `cad_catalog`, `cad_count` | Leer | DWG térã DXF ejepyrũva-pe: ijehojakuéra ha escalakuéra, mba'e ikatu oconta (bloques, capas ha tipos, textos) ha conteo exacto, {{ui:Conteo CAD}} ojapo ramo ([Conteo desde un plano](topic:count-from-a-drawing)) |
| `cad_count_add` | Editar | Oconta plano-pe ha omoĩ conteo marca objeto jeporekáva peteĩ tembiapo-pe; oconta jey ojuehe ojehupyty hína ndoikóva |
| `cad_measure` | Editar | Omedi ítem linear térã área plano-pe línea, arco, polilínea ha sombreado-kuéra rupive, {{ui:Medir plano}} ojapo ramo ([Medir desde un plano](topic:measure-from-a-drawing)); hoja escala-pe añónte |
| `usd_export` | Exportar | Hoja escalada-pe omedi tape, área ha conteo modelo 3D check USD-pe (`.usdz`, `.usda` térã `.usdc`), {{ui:Paquete USD (.usdz)}} 3D check vista-pe ojapo ramo ([Exportar la vista 3D check como USD](topic:usd)) |

Marcado ndaha'éi **Editar**, asistente ndoikóiva ítems ha marcas omoñe'ẽ. Marcado **Editar** rupi, asistente omoñe'ẽ ítems ha marcas, peteĩ jey peteĩ tembiapo undo-pe. Marcas oĩva jepe, ndaikatúi omoambue, omboja térã omboguejy.

Cantidades ha presupuesto ojeikuaa avei TakeoffCraft ndojepyrũi: CadCraft MCP servidor oñepyrũ `.takeoff.json` archivo peteĩ carpeta-pe nde eñeʼẽva (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), ha `cadcraft info Job.takeoff.json` omoĩ ipapehape comando línea-pe. Oñepyrũ avei DWG térã DXF takeoff ovaʼerã-pe hojakuéra-pe (escala plano-gui ojapo ramo TakeoffCraft ojapóicha), oconta ha omedi `cad_*` herramientakuéra-gui, omoñe'ẽ ítems ha ombyaty takeoff (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` oconta comando línea-gui.

## Ndaikatúi jave

- **Asistente ndehecháiva TakeoffCraft herramientakuéra:** eheka interruptor ipy'ỹ ko ventana-pe ha ventana oipe'a Studio-pe.
- **"needs the export permission":** marcá **Exportar** {{ui:Asistentes}} ryepýpe, upe rire ejerure jey.
- **"401" térã "token" error:** token ojevy (Studio ojapo jey térã {{ui:Nuevo token}}). Emoĩ token pyahu asistente-pe.

## Ambue ojehechaukáva

- [Receta asistente AI-kuérape](common:assistants-recipes): ehechauka mba'éichapa ojapo, herramienta ojeporúva ha'e rehe.
