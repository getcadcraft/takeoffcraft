---
title: Usar TakeoffCraft cun asistente de IA
summary: Deixe que o seu propio asistente de IA ou script lea as cantidades e o orzamento da medición, engada partidas e marcas, conte e mida nun DWG ou DXF, e exporte: permisos, conexión a través de CadCraft Studio e o rexistro de actividade.
keywords: ia, asistente, axente, mcp, Model Context Protocol, script, automatización, cantidades, orzamento, permisos, desconectar, actividade
from: 7fa62ec6
---

## O que vai aprender

Como deixar que un asistente de IA (ou un script que escribiu) traballe con TakeoffCraft, e como decidir a que pode tocar.

TakeoffCraft **non ten IA propia** e non envía nada a ningures. Vostede achega o asistente: calquera programa que fale o Model Context Protocol (MCP). TakeoffCraft só lle dá ferramentas, e vostede escolle cales.

## Activalo

1. Abra {{ui:Configuración}} (a engrenaxe da barra da aplicación, ou {{key:Mod+,}}) e vaia á lapela {{ui:TakeoffCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que os asistentes de IA e os scripts usen TakeoffCraft**. Está desactivado ata que o faga.
3. Escolla o que pode facer: **Ler** está marcado ao principio; marque **Editar**, **Gardar** ou **Exportar** só cando os necesite.

As ferramentas fóra dos permisos que marcou non se ofrecen ao asistente, e se lle piden unha igualmente, TakeoffCraft rexéitaa e anótao no rexistro de actividade. Desactivar o interruptor pecha de golpe todas as conexións; {{ui:Restablecer a configuración de TakeoffCraft}} tamén o desactiva.

## Conectar o asistente

Os asistentes conéctanse a través de **CadCraft Studio** no seu ordenador: Studio executa un pequeno servidor ao que só este ordenador pode chegar, protexido por un token que crea cada vez que arranca. En Studio, escolla {{ui:Conectar un asistente}} e copie o enderezo e o token no seu asistente (Studio mostra os axustes exactos que hai que pegar). Non comparta nunca o token.

:::note
Unha pestana do navegador non pode abrir unha conexión para un asistente: nas aplicacións do navegador o interruptor non ten efecto ata que use CadCraft Studio no seu ordenador.
:::

## Vostede segue ao mando

- **Cada cambio é un paso de desfacer**, etiquetado co nome do asistente para iso (por exemplo "Asistente: …"). {{key:Mod+Z}} retira por completo o último cambio do asistente.
- **Sabe cando hai un conectado.** Un botón da barra da aplicación indica o asistente mentres está conectado; prema nel para ver o que pode facer, ou para **Desconectar**.
- **Actividade.** {{ui:Configuración}} › {{ui:TakeoffCraft}} › {{ui:Asistentes}} › {{ui:Actividade}} lista cada chamada: cando, que ferramenta, e se se fixo ou se rexeitou. {{ui:Gardar o rexistro}} garda unha copia.

## O que pode pedir un asistente

| Ferramenta | Permiso | Que fai |
|---|---|---|
| `app_info`, `sheets_list` | Ler | A medición aberta, os seus PDF e follas, e a escala e as marcas de cada folla |
| `items_list` | Ler | As partidas coas súas unidades, tarifas e fórmulas de conxuntos |
| `takeoff_quantities` | Ler | Cantidades por partida ou por folla; as marcas en follas sen escala aparecen listadas, nunca se contan como cero |
| `takeoff_estimate` | Ler | O orzamento con prezos tal como o calcula TakeoffCraft, cos seus totais |
| `takeoff_export` | Exportar | A exportación CSV ou XLSX propia de TakeoffCraft |
| `items_add` | Editar | Engade partidas coas súas unidades, tarifas e desperdicio |
| `marks_add` | Editar | Mide tramos, superficies e contas nunha folla. Lonxitudes e superficies só en follas con escala, nunca nunha sen escala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Ler | Nun DWG ou DXF aberto: as súas follas e escalas, o que se pode contar (bloques, capas e tipos, textos) e contas exactas, tal como as fai {{ui:Contaxe CAD}} ([Contar desde un debuxo](topic:count-from-a-drawing)) |
| `cad_count_add` | Editar | Conta no debuxo e pon unha marca de conta en cada obxecto atopado, nun só paso; volver contar engade só o que é novo |
| `cad_measure` | Editar | Mide unha partida lineal ou de superficie a partir das liñas, arcos, polilíneas e tramas do propio debuxo, como fai {{ui:Medir debuxo}} ([Medir desde un debuxo](topic:measure-from-a-drawing)); só en follas con escala |
| `usd_export` | Exportar | Os tramos, superficies e contas medidos dunha folla escalada como modelo 3D de comprobación en USD (`.usdz`, `.usda` ou `.usdc`), tal como o escribe {{ui:Paquete USD (.usdz)}} na vista de comprobación 3D ([Exportar a vista de comprobación 3D como USD](topic:usd)) |

Con **Editar** marcado, un asistente engade partidas e marcas (cada chamada é un paso de desfacer); non pode mover, cambiar nin eliminar as marcas que xa existen.

As mesmas cantidades e o mesmo orzamento están dispoñibles sen abrir TakeoffCraft: o servidor MCP de CadCraft abre un ficheiro `.takeoff.json` nun cartafol que vostede indique (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), e `cadcraft info Job.takeoff.json` imprime os datos na liña de comandos. Tamén abre un DWG ou DXF como unha nova medición nas súas follas (escalada desde o debuxo tal como TakeoffCraft a escala), conta e mide nela coas mesmas ferramentas `cad_*`, engade partidas e garda a medición (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` conta desde a liña de comandos.

## Se algo non funciona

- **O asistente non ve ferramentas de TakeoffCraft:** comprobe que o interruptor está activado nesta xanela e que a xanela está aberta en Studio.
- **"needs the export permission":** marque **Exportar** en {{ui:Asistentes}} e volva preguntar.
- **Erros "401" ou "token":** o token cambiou (Studio reiniciouse, ou {{ui:Novo token}}). Copie o novo token na configuración do asistente.

## Ver tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos prácticos, cada un coas ferramentas que chama.
