---
title: Enviar um pacote para propostas
summary: Envie por e-mail um pacote de propostas a subempreiteiros, deixe-os escrever preços numa página que não precisa de conta, mantenha os preços selados até à hora de abertura e importe-os para a folha de comparação.
keywords: enviar para propostas, convite, convite para proposta, concorrente, subempreiteiro, convidar, e-mail, pedido de preço, propostas seladas, abertura de propostas, dia da proposta, proposta tardia, data limite, lembrete, registos de subempreiteiros, seguro, qualificação, csv, ligar, pdf das folhas
from: fb314b2c
---

{{ui:Exportar}} › {{ui:Pacotes de consulta e comparação de propostas…}} › {{ui:Enviar para consulta…}} envia um pacote às pessoas que escolher. O site envia a cada uma delas uma ligação por e-mail; abrem uma página, veem o âmbito e escrevem um preço para cada linha. Os preços ficam visíveis na folha de comparação, prontos a comparar ([Pacotes de propostas e comparação de propostas](topic:bid-leveling)).

:::note
O envio **ainda não está aberto a todos.** Enquanto a funcionalidade estiver em teste, funciona para as contas que a equipa do CadCraft ativou; se a sua não estiver, a caixa de diálogo indica-o. A página do concorrente funciona para todos os convites que foram enviados.
:::

## Antes de enviar

- Precisa de uma conta do CadCraft com um endereço de e-mail verificado. O TakeoffCraft no navegador pede para **Ligar**: abre-se um separador em getcadcraft.com, prima **Ligar**, e esse separador recebe um início de sessão válido durante 30 dias, só para pacotes de propostas, até fechar o separador do TakeoffCraft. Pode removê-lo em qualquer altura na sua página de segurança. Uma janela do Studio ainda não pode enviar.
- Dê a cada artigo um número CSI: um pacote são os artigos de uma divisão CSI ([Criar artigos de medição](topic:create-items)).
- Escale as folhas em que estão as marcas do pacote, para que as quantidades que os concorrentes veem sejam medidas.

## Enviar um pacote

1. Escolha {{ui:Enviar para consulta…}} por baixo do pacote.
2. Preencha o título, o projeto e uma mensagem opcional, e a **hora limite** no seu fuso horário.
3. Deixe **Manter preços selados** marcado para ocultar todos os preços até à **hora de abertura** (não antes da hora limite), ou desmarque-o para ver os preços à medida que chegam.
4. Deixe a caixa das folhas marcada para enviar um PDF das folhas que contêm as marcas do pacote, com as marcas desenhadas. Os seus preços nunca fazem parte do que é enviado: apenas nomes de artigos, números CSI, quantidades, unidades e nomes de folhas.
5. Escreva as pessoas a convidar, uma por linha, como `Nome <nome@empresa.com>` ou apenas o endereço, ou marque pessoas dos seus registos de subempreiteiros. Até 60 de cada vez, 100 por pacote.
6. Escolha {{ui:Enviar convites}}. Cada pessoa recebe um e-mail simples com o seu nome e endereço de e-mail, a hora limite e a ligação; as respostas vão para si.

A caixa de diálogo indica quantos foram enviados e nomeia quem foi ignorado: já convidado para este pacote, pedido para não receber convites para propostas, endereço inválido ou acima de um limite de envio.

## O que o concorrente vê

Uma página num link privado longo, sem início de sessão. Mostra quem o convidou, a hora limite, se os preços estão selados, a sua mensagem e o PDF das folhas, e depois cada linha com a respetiva quantidade. Em cada linha, o concorrente escreve um preço ou marca **Não incluído**, e pode acrescentar uma nota; pode também acrescentar notas para o pacote inteiro e até 3 ficheiros (um orçamento, uma carta de âmbito, um certificado). Pode guardar de novo e alterar os preços até à abertura, ou **recusar**, com uma caixa para pedir que o CadCraft deixe de lhe enviar convites para propostas.

## Propostas seladas e abertura

Antes da hora de abertura, **ninguém** vê um preço, uma nota ou um ficheiro: nem no TakeoffCraft, nem na página Pacotes de propostas do site. Só se vê quem foi convidado e se respondeu. Na hora de abertura, todas as propostas aparecem de uma vez. Uma proposta guardada depois da hora limite é aceite e marcada como **tardia**; a comparação continua a listá-la, e o atraso é uma marcação, não um veredito. Depois da abertura, um concorrente não pode alterar um preço. Sem selagem, uma proposta fica final quando vence.

## Obter os preços

{{ui:Obter preços}} pede ao site e acrescenta cada resposta ao pacote como uma proposta, marcada **web**. O TakeoffCraft também pede em silêncio sempre que abre a caixa de diálogo enquanto estiver ligado. Uma proposta cujo concorrente guardou uma nova versão é atualizada no próprio lugar; uma proposta que editou mantém-se como a deixou, até que enviem uma nova versão. Cada importação é um passo que {{key:Mod+Z}} anula. As linhas deixadas de fora passam como o âmbito que a proposta deixa de fora, para que a comparação as preencha ao seu próprio custo.

## No site

A sua conta tem mais duas páginas quando já pode enviar. **Pacotes de propostas** lista o que enviou, quem respondeu, as propostas tardias e os ficheiros, e permite enviar um lembrete (uma ligação nova; a antiga deixa de funcionar), fechar, reabrir ou cancelar um pacote. **Subempreiteiros** mantém um registo de cada empresa: contactos, especialidades, respostas de qualificação (anos de atividade, capacidade de caução, EMR, registo de segurança, sindicalizada ou não, referências), datas de validade da licença e do seguro, assinaladas quando já passaram ou faltam menos de 30 dias, e as suas propostas anteriores. Importe e exporte os registos como CSV: uma linha por contacto, com as colunas que a exportação mostra; uma empresa que já existe é atualizada, nunca repetida.

## Quem vê o quê, e durante quanto tempo

Os preços, as notas e os ficheiros de um concorrente vão para si e para a equipa do CadCraft, que gere a página. São guardados durante 24 meses após a data limite, e os ficheiros durante 180 dias; depois são eliminados. O endereço de e-mail do concorrente é o que introduziu; é usado apenas para enviar o convite e qualquer lembrete para esse endereço. Um endereço recebe no máximo 3 convites por dia, somando todos os remetentes, e pode enviar até 200 por dia.

## Ainda não implementado

Adendas, cartas de adjudicação, uma folha de âmbito assinada por concorrente e lembretes automáticos antes de expirar a data de um seguro ainda não estão implementados. Veja [Ainda não implementado](topic:not-built-yet).
