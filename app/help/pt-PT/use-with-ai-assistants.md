---
title: Usar o TakeoffCraft com um assistente de IA
summary: Deixe o seu assistente de IA ou script ler as quantidades e o orçamento da medição, acrescentar artigos e marcas, contar e medir num DWG ou DXF, e exportar: permissões, ligação através do CadCraft Studio e o registo de atividade.
keywords: ia, assistente, agente, mcp, model context protocol, script, automação, quantidades, orçamento, permissões, desligar, atividade
from: 7fa62ec6
---

## O que vai aprender

Como deixar um assistente de IA (ou um script que escreveu) trabalhar com o TakeoffCraft, e como decidir o que ele pode alterar.

O TakeoffCraft **não tem IA própria** e não envia nada para lado nenhum. O assistente é trazido por si: qualquer programa que fale o Model Context Protocol (MCP). O TakeoffCraft apenas lhe disponibiliza ferramentas, e é você que escolhe quais.

## Ativar

1. Abra {{ui:Definições}} (a engrenagem na barra da aplicação, ou {{key:Mod+,}}) e aceda ao separador {{ui:TakeoffCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o TakeoffCraft**. Fica desligado até o fazer.
3. Escolha o que pode fazer: **Ler** vem marcado por predefinição; marque **Editar**, **Guardar** ou **Exportar** apenas quando precisar.

As ferramentas fora das permissões que marcou não são disponibilizadas ao assistente e, se ele pedir uma mesmo assim, o TakeoffCraft recusa-a e regista-a no registo de atividade. Desligar o interruptor termina de imediato todas as ligações; {{ui:Repor as definições do TakeoffCraft}} também o desliga.

## Ligar o seu assistente

Os assistentes ligam-se através do **CadCraft Studio** no seu computador: o Studio executa um pequeno servidor que só este computador consegue alcançar, protegido por um token que cria sempre que arranca. No Studio, escolha {{ui:Ligar um assistente}} e copie o endereço e o token para o seu assistente (o Studio mostra as definições exatas a colar). Nunca partilhe o token.

:::note
Um separador do navegador não consegue abrir uma ligação para um assistente: nas aplicações do navegador o interruptor não tem efeito até usar o CadCraft Studio no seu computador.
:::

## Continua no controlo

- **Cada alteração é um único passo de anulação**, identificada com o nome do assistente (por exemplo, «Assistente: …»). {{key:Mod+Z}} anula a última alteração do assistente no seu todo.
- **Saiba quando um assistente está ligado.** Um botão na barra da aplicação indica o assistente enquanto estiver ligado; clique nele para ver o que pode fazer ou para o **Desligar**.
- **Atividade.** {{ui:Definições}} › {{ui:TakeoffCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, qual ferramenta, e se foi concluída ou recusada. {{ui:Guardar o registo}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `sheets_list` | Ler | A medição aberta, os seus PDF e folhas, a escala de cada folha e as marcas |
| `items_list` | Ler | Os artigos com as suas unidades, preços unitários e fórmulas dos preços compostos |
| `takeoff_quantities` | Ler | Quantidades por artigo ou por folha; as marcas em folhas sem escala são listadas, nunca contadas como zero |
| `takeoff_estimate` | Ler | O orçamento com preços, tal como o TakeoffCraft o calcula, com os seus totais |
| `takeoff_export` | Exportar | A exportação CSV ou XLSX do próprio TakeoffCraft |
| `items_add` | Editar | Acrescenta artigos com as suas unidades, preços unitários e desperdício |
| `marks_add` | Editar | Mede troços, áreas e contagens numa folha. Comprimentos e áreas apenas numa folha com escala, nunca numa folha sem escala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Ler | Num DWG ou DXF aberto: as suas folhas e as respetivas escalas, o que pode ser contado (blocos, camadas e tipos, textos) e contagens exatas, tal como a {{ui:Contagem CAD}} as faz ([Contar a partir de um desenho](topic:count-from-a-drawing)) |
| `cad_count_add` | Editar | Conta no desenho e coloca uma marca de contagem em cada objeto encontrado, num só passo; contar de novo acrescenta apenas o que é novo |
| `cad_measure` | Editar | Mede um artigo linear ou de área a partir das linhas, arcos, polilinhas e tramas do próprio desenho, tal como o {{ui:Medir desenho}} faz ([Medir a partir de um desenho](topic:measure-from-a-drawing)); apenas numa folha com escala |
| `usd_export` | Exportar | Os troços, áreas e contagens medidos de uma folha com escala como modelo 3D de verificação em USD (`.usdz`, `.usda` ou `.usdc`), tal como o {{ui:Pacote USD (.usdz)}} na vista de verificação 3D o escreve ([Exportar a vista de verificação 3D como USD](topic:usd)) |

Com **Editar** marcado, um assistente acrescenta artigos e marcas (cada chamada é um passo de anulação); não pode mover, alterar ou eliminar marcas que já existem.

As mesmas quantidades e o mesmo orçamento estão disponíveis sem abrir o TakeoffCraft: o servidor MCP do CadCraft abre um ficheiro `.takeoff.json` numa pasta que indicar (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), e `cadcraft info Job.takeoff.json` imprime-os na linha de comandos. Também abre um DWG ou DXF como nova medição nas suas folhas (com escala a partir do desenho, tal como o TakeoffCraft a aplica), conta e mede nele com as mesmas ferramentas `cad_*`, acrescenta artigos e guarda a medição (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` conta a partir da linha de comandos.

## Se algo não funcionar

- **O assistente não vê ferramentas do TakeoffCraft:** verifique se o interruptor está ligado nesta janela e se a janela está aberta no Studio.
- **«precisa da permissão de exportação»:** marque **Exportar** em {{ui:Assistentes}} e volte a pedir.
- **Erros «401» ou «token»:** o token mudou (o Studio foi reiniciado ou se usou {{ui:Novo token}}). Copie o novo token para as definições do assistente.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
