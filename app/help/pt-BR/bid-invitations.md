---
title: Enviar um pacote para propostas
summary: Envie por e-mail um pacote de propostas a subempreiteiros, deixe que eles digitem preços em uma página que não exige conta, mantenha os preços lacrados até o horário de abertura e importe-os para a planilha de equalização.
keywords: enviar para propostas, convite, convite para proposta, proponente, subempreiteiro, convidar, e-mail, pedido de preço, propostas lacradas, abertura das propostas, dia da proposta, proposta atrasada, prazo, lembrete, registros de subempreiteiros, seguro, qualificação, csv, conectar, PDF das folhas
from: fb314b2c
---

{{ui:Export}} › {{ui:Bid packages and leveling…}} › {{ui:Send for bids…}} envia um pacote às pessoas que você escolher. O site envia a cada uma delas um e-mail com um link; elas abrem uma página, veem o escopo e digitam um preço para cada linha. Você vê os preços na planilha de equalização, prontos para comparação ([Pacotes de propostas e equalização de propostas](topic:bid-leveling)).

:::note
O envio **ainda não está aberto a todos.** Enquanto o recurso está em teste, ele funciona para contas que a equipe do CadCraft habilitou; se a sua não estiver, a caixa de diálogo informa isso. A página do proponente funciona para todos os convites enviados.
:::

## Antes de enviar

- Você precisa de uma conta do CadCraft com um endereço de e-mail verificado. O TakeoffCraft no navegador pede que você **Conecte**: abre-se uma aba em getcadcraft.com, você pressiona Conectar, e essa aba recebe um login válido por 30 dias, apenas para pacotes de propostas, até você fechar a aba do TakeoffCraft. Você pode removê-lo a qualquer momento na sua página de segurança. Uma janela do Studio ainda não pode enviar.
- Dê a cada item um número CSI: um pacote são os itens de uma divisão CSI ([Criar itens do levantamento](topic:create-items)).
- Defina a escala das folhas em que estão as marcas do pacote, para que as quantidades que os proponentes veem sejam medidas.

## Enviar um pacote

1. Escolha {{ui:Send for bids…}} abaixo do pacote.
2. Preencha o título, o projeto e uma mensagem opcional, além do **prazo** no seu próprio fuso horário.
3. Deixe **Manter preços lacrados** marcado para ocultar todos os preços até o **horário de abertura** (não antes do prazo), ou desmarque para ver os preços conforme chegam.
4. Deixe a caixa de folhas marcada para enviar um PDF das folhas que contêm as marcas do pacote, com as marcas desenhadas. Os seus preços nunca fazem parte do envio: apenas nomes dos itens, números CSI, quantidades, unidades e nomes das folhas.
5. Digite as pessoas a convidar, uma por linha, no formato `Nome <nome@empresa.com>` ou apenas o endereço, ou marque pessoas dos seus registros de subempreiteiros. Até 60 de cada vez, 100 por pacote.
6. Escolha {{ui:Send invitations}}. Cada pessoa recebe um e-mail simples com o seu nome e endereço de e-mail, o prazo e o link; as respostas vão para você.

A caixa de diálogo informa quantos foram enviados e nomeia quem foi ignorado: já convidado para este pacote, pediu para não receber convites de propostas, endereço inválido ou acima de um limite de envio.

## O que o proponente vê

Uma página em um link privado longo, sem login. Ela mostra quem convidou, o prazo, se os preços estão lacrados, a sua mensagem e o PDF das folhas, e depois cada linha com a quantidade. Para cada linha, o proponente digita um preço ou marca **Não incluído**, e pode adicionar uma observação; ele pode adicionar observações para o pacote inteiro e até 3 arquivos (uma cotação, uma carta de escopo, um certificado). Pode salvar de novo e alterar os preços até a abertura, ou **recusar**, com uma caixa para pedir que o CadCraft não envie mais convites de propostas.

## Propostas lacradas e a abertura

Antes do horário de abertura, **ninguém** vê um preço, uma observação ou um arquivo: nem você, nem no TakeoffCraft, nem na sua página de Pacotes de propostas. Você vê quem foi convidado e se respondeu. No horário de abertura, todas as propostas aparecem de uma vez. Uma proposta salva depois do prazo é aceita e marcada como **atrasada**; a equalização ainda a lista, e o atraso é apenas uma marcação, não uma decisão. Depois da abertura, um proponente não pode mudar um preço. Sem lacre, uma proposta é definitiva assim que vence.

## Obter os preços

{{ui:Get prices}} consulta o site e adiciona cada resposta ao pacote como uma proposta, marcada como **web**. O TakeoffCraft também consulta silenciosamente sempre que você abre a caixa de diálogo, enquanto estiver conectado. Uma proposta cujo proponente salvou uma nova versão é atualizada no lugar; uma proposta que você editou permanece como você deixou até que ele envie uma nova versão. Cada consulta é uma etapa que {{key:Mod+Z}} desfaz. As linhas omitidas vêm como o escopo que a proposta deixa de fora, então a equalização preenche essas linhas com o seu próprio custo.

## No site

Sua conta tem mais duas páginas assim que você puder enviar. **Pacotes de propostas** lista o que você enviou, quem respondeu, as propostas atrasadas e os arquivos, e permite enviar um lembrete (um link novo; o antigo deixa de funcionar), fechar, reabrir ou cancelar um pacote. **Subempreiteiros** mantém um registro para cada empresa: contatos, especialidades, respostas de qualificação (anos de atuação, capacidade de fiança, EMR, histórico de segurança, sindicalizado ou não, referências), datas de vencimento de licença e seguro, sinalizadas quando já passaram ou faltam 30 dias, e as propostas anteriores deles. Importe e exporte os registros como CSV: uma linha por contato, com as colunas que a exportação mostra; uma empresa que você já tem é atualizada, nunca repetida.

## Quem vê o quê, e por quanto tempo

Os preços, observações e arquivos de um proponente vão para você e para a equipe do CadCraft, que opera a página. Eles são mantidos por 24 meses após a data do prazo, e os arquivos por 180 dias; depois são excluídos. O endereço de e-mail do proponente é o que você digitou; ele é usado apenas para enviar o convite e os lembretes dele. Um endereço recebe no máximo 3 convites por dia, somando todos os remetentes, e você pode enviar até 200 por dia.

## Ainda não implementado

Aditivos, cartas de adjudicação, uma folha de escopo assinada por proponente e lembretes automáticos antes de vencer um seguro não estão implementados. Veja [Ainda não implementado](topic:not-built-yet).
