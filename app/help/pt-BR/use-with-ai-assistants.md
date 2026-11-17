---
title: Usar o TakeoffCraft com um assistente de IA
summary: Deixe seu próprio assistente de IA ou script ler as quantidades e o orçamento do levantamento, adicionar itens e marcações, contar e medir em um DWG ou DXF, e exportar: permissões, conexão pelo CadCraft Studio e o registro de atividades.
keywords: ia, assistente, agente, mcp, model context protocol, script, automação, quantidades, orçamento, permissões, desconectar, atividade
from: 7fa62ec6
---

## O que você vai aprender

Como deixar um assistente de IA (ou um script que você escreveu) trabalhar com o TakeoffCraft, e como decidir o que ele pode alterar.

O TakeoffCraft **não tem IA própria** e não envia nada para lugar nenhum. Você traz o assistente: qualquer programa que fale o Model Context Protocol (MCP). O TakeoffCraft apenas oferece ferramentas a ele, e você escolhe quais.

## Ativar

1. Abra {{ui:Configurações}} (a engrenagem na barra do aplicativo, ou {{key:Mod+,}}) e vá para a guia {{ui:TakeoffCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o TakeoffCraft**. Ela fica desligada até você fazer isso.
3. Escolha o que ele pode fazer: **Ler** já vem marcado; marque **Editar**, **Salvar** ou **Exportar** somente quando precisar deles.

As ferramentas fora das permissões que você marcou não são oferecidas ao assistente. Se ele pedir uma mesmo assim, o TakeoffCraft recusa e registra o pedido no registro de atividades. Desligar a chave encerra todas as conexões de uma vez; {{ui:Redefinir configurações do TakeoffCraft}} também a desliga.

## Conectar seu assistente

Os assistentes se conectam pelo **CadCraft Studio** no seu computador: o Studio executa um pequeno servidor que só este computador consegue acessar, protegido por um token que ele gera toda vez que é iniciado. No Studio, escolha {{ui:Conectar um assistente}} e copie o endereço e o token para o seu assistente (o Studio mostra as configurações exatas para colar). Nunca compartilhe o token.

:::note
Não é possível abrir uma conexão para um assistente a partir de uma aba do navegador: nos aplicativos de navegador a chave não tem efeito até você usar o CadCraft Studio no seu computador.
:::

## Você continua no comando

- **Cada alteração é uma única etapa de desfazer**, identificada com o nome que o assistente lhe dá (por exemplo, "Assistente: …"). {{key:Mod+Z}} desfaz a última alteração do assistente por inteiro.
- **Você sabe quando um assistente está conectado.** Um botão na barra do aplicativo mostra o nome do assistente enquanto ele está conectado; clique nele para ver o que ele pode fazer, ou para **Desconectar**.
- **Atividade.** {{ui:Configurações}} › {{ui:TakeoffCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, qual ferramenta, e se foi concluída ou recusada. {{ui:Salvar o registro}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `sheets_list` | Ler | O levantamento aberto, seus PDFs e folhas, a escala de cada folha e as marcações |
| `items_list` | Ler | Os itens com suas unidades, preços unitários e fórmulas de composição |
| `takeoff_quantities` | Ler | Quantidades por item ou por folha; marcações em folhas sem escala são listadas, nunca contadas como zero |
| `takeoff_estimate` | Ler | O orçamento com preços, como o TakeoffCraft calcula, com seus totais |
| `takeoff_export` | Exportar | A exportação CSV ou XLSX do próprio TakeoffCraft |
| `items_add` | Editar | Adiciona itens com suas unidades, preços unitários e perda |
| `marks_add` | Editar | Mede trechos, áreas e contagens em uma folha. Comprimentos e áreas só em folhas com escala, nunca em uma sem escala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Ler | Em um DWG ou DXF que você abriu: suas folhas e escalas, o que pode ser contado (blocos, camadas e tipos, textos) e contagens exatas, como faz a {{ui:Contagem CAD}} ([Contar a partir de um desenho](topic:count-from-a-drawing)) |
| `cad_count_add` | Editar | Conta no desenho e coloca uma marcação de contagem em cada objeto encontrado, em uma só etapa; contar de novo adiciona apenas o que é novo |
| `cad_measure` | Editar | Mede um item linear ou de área a partir das linhas, arcos, polilinhas e hachuras do próprio desenho, como faz {{ui:Medir desenho}} ([Medir a partir de um desenho](topic:measure-from-a-drawing)); apenas em folha com escala |
| `usd_export` | Exportar | Os trechos, áreas e contagens medidos de uma folha com escala como um modelo de verificação 3D em USD (`.usdz`, `.usda` ou `.usdc`), como {{ui:Pacote USD (.usdz)}} grava na visualização de verificação 3D ([Exportar a visualização de verificação 3D como USD](topic:usd)) |

Com **Editar** marcado, um assistente adiciona itens e marcações (cada chamada é uma etapa de desfazer); ele não consegue mover, alterar nem excluir marcações que já existem.

Os mesmos dados de quantidades e orçamento estão disponíveis sem abrir o TakeoffCraft: o servidor MCP do CadCraft abre um arquivo `.takeoff.json` em uma pasta que você indicar (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), e `cadcraft info Job.takeoff.json` os exibe na linha de comando. Ele também abre um DWG ou DXF como um novo levantamento em suas folhas (com escalas tiradas do desenho, como o TakeoffCraft faz), conta e mede nele com as mesmas ferramentas `cad_*`, adiciona itens e salva o levantamento (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` conta a partir da linha de comando.

## Se algo não funcionar

- **O assistente não vê ferramentas do TakeoffCraft:** verifique se a chave está ligada nesta janela e se a janela está aberta no Studio.
- **"precisa da permissão de exportação":** marque **Exportar** em {{ui:Assistentes}} e peça de novo.
- **Erros "401" ou "token":** o token mudou (o Studio foi reiniciado, ou {{ui:Novo token}}). Copie o novo token para as configurações do assistente.

## Veja também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
