---
title: Novidades da 0.7
summary: Desenhos DWG e DXF abrem como folhas com a própria escala, contagens e comprimentos exatos tirados do próprio desenho, a proposta escolhida do subempreiteiro como preço de um pacote, convites de proposta com preços lacrados, ferramentas de assistente para desenhos e USD a partir da vista de conferência em 3D.
keywords: novidades, notas da versão, histórico de alterações, mudanças, 0.7, versão, novos recursos, dwg, dxf, desenho, layouts, espaço modelo, escala do desenho, contagem a partir do desenho, contagem cad, blocos, blocos dinâmicos, atributos, camadas, xref, desenho vinculado, medir desenho, polilinha, hachura, pdf marcado, proposta escolhida, usar uma proposta, enviar para propostas, convite de proposta, propostas lacradas, abertura das propostas, proposta atrasada, cadastro de subempreiteiros, csv, assistente, mcp, usd, usdz, unidades, listas de unidades, compacto, painéis, caixas de diálogo, português
from: ad4f0df1
---

Isto é o que mudou no TakeoffCraft 0.7, em comparação com a 0.6. Os desenhos agora abrem como são, sem plotar para PDF antes, e um pacote de proposta pode ir para os subempreiteiros e voltar precificado.

## Novidades

### Desenhos DWG e DXF

- **Abra um desenho como folhas.** {{ui:Abrir plantas}} no grupo {{ui:Arquivo}} ({{key:Mod+O}}, ou solte os arquivos) aceita desenhos DWG e DXF ao lado de PDFs. O espaço modelo e cada layout viram folhas na lista {{ui:Folhas}}, e um levantamento pode cobrir desenhos e PDFs juntos. Nada é enviado. Veja [Abrir um desenho DWG ou DXF](topic:open-a-drawing).
- **A escala vem do desenho.** Um layout começa na escala de seu maior viewport, nomeada como predefinida quando for uma, como 1/2" = 1'-0". O Modelo começa nas unidades do desenho. Um desenho sem unidades mostra "Sem escala" até você calibrar. {{ui:Calibrar}}, {{ui:Conferir}} e {{ui:Predefinida}} continuam prevalecendo. Veja [A escala](topic:open-a-drawing#the-scale).
- **Camadas e desenhos vinculados.** {{ui:Camadas}} na barra da folha mostra ou oculta as camadas do desenho. As camadas que o arquivo desligou ou congelou começam ocultas e não são contadas, a menos que você escolha contá-las. Um desenho vinculado (xref) aberto ao lado do desenho principal é desenhado e contado onde foi inserido; enquanto não estiver aberto, a barra de status diz o que falta. Veja [Camadas](topic:open-a-drawing#layers).
- **O PDF marcado funciona a partir de um desenho.** {{ui:Exportar}} › {{ui:PDF marcado}} desenha primeiro as folhas marcadas de um desenho como PDF, então a cópia mostra suas marcações e a legenda sem etapa de plotagem. É desenhado em preto ou nas cores do desenho, sem tabelas de estilo de plotagem. Veja [Um PDF marcado](topic:export-estimate#a-marked-pdf).

### Contagens e comprimentos exatos a partir de um desenho

- **Conte o que o desenho diz que existe.** {{ui:Contagem CAD}} na barra da folha conta um bloco pelo nome (inclusive blocos aninhados, estados de blocos dinâmicos e matrizes de blocos), tudo de um tipo em uma camada, ou um valor de texto ou de atributo. Conta o que a folha mostra ou o desenho inteiro de uma vez. Adicionar as marcações é um passo de desfazer, e contar de novo adiciona só o que é novo. A {{ui:Contagem automática}} continua para PDFs e para símbolos que não são blocos. Veja [Contar a partir de um desenho](topic:count-from-a-drawing).
- **Meça a partir das linhas do próprio desenho.** {{ui:Medir desenho}} transforma em marcações de um item linear ou de área as linhas, arcos, polilinhas, círculos, hachuras e sólidos em que você clica ou que seleciona por janela. Arcos, bulges e os furos de uma hachura saem exatos; elipses e splines são medidas em cordas finas, e a barra avisa. Veja [Medir a partir de um desenho](topic:measure-from-a-drawing).

### Propostas

- **Use a proposta de um subempreiteiro como preço do pacote.** Em {{ui:Exportar}} › {{ui:Pacotes de propostas e equalização…}}, escolha {{ui:Usar}} em uma proposta. Os itens do pacote continuam como quantitativos, uma linha **Proposta escolhida** traz o preço, os itens que a proposta deixa de fora continuam no seu próprio custo, e despesas gerais, lucro e fiança se aplicam a ela. Trocar de proposta é um passo de desfazer; a pasta de trabalho e o resumo das propostas a incluem. Veja [Usar uma proposta como preço do pacote](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Envie um pacote para propostas.** {{ui:Enviar para propostas…}} sob um pacote envia por e-mail a cada subempreiteiro um link para uma página que não exige conta: ele vê o escopo e as folhas como PDF, digita um preço em cada linha ou a marca como não incluída, adiciona observações e até três arquivos, ou recusa. {{ui:Obter preços}} traz o que voltou para a planilha de equalização, sinalizado como **web**. O envio está aberto apenas às contas que a equipe do CadCraft habilitou enquanto é testado (veja abaixo). Veja [Enviar um pacote para propostas](topic:bid-invitations).
- **Lacradas até a abertura.** Os preços podem ficar lacrados até um horário de abertura que você define: até lá ninguém vê um preço, nem você. Na abertura todas as propostas aparecem de uma vez, e uma proposta que chegou depois do prazo é marcada como atrasada. Veja [Propostas lacradas e a abertura](topic:bid-invitations#sealed-bids-and-the-opening).
- **Cadastro de subempreiteiros.** Sua conta em getcadcraft.com guarda os contatos, serviços, respostas de qualificação e datas de seguro e licença de cada empresa (sinalizadas quando vencidas ou a menos de 30 dias do vencimento), com as propostas anteriores. Importe e exporte em CSV, e escolha-os ao enviar um pacote. Veja [No site](topic:bid-invitations#on-the-website).

### Assistentes de IA

- **Assistentes podem acrescentar ao levantamento.** Com **Editar** marcado, o seu próprio assistente pode adicionar itens (`items_add`) e medir trechos, áreas e contagens em uma folha (`marks_add`; comprimentos e áreas só em folha com escala), cada chamada sendo um passo de desfazer.
- **Ferramentas de assistente para desenhos.** Em um DWG ou DXF aberto, um assistente pode listar suas folhas e o que pode ser contado, contar com exatidão, adicionar as marcações da contagem e medir a partir da geometria do desenho. Sem o TakeoffCraft aberto, o servidor MCP do CadCraft abre um desenho como um novo levantamento e o salva, e `cadcraft count` conta pela linha de comando. Veja [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **A vista de conferência em 3D como USD.** {{ui:Pacote USD (.usdz)}} ao lado de {{ui:GLB}} na vista de conferência em 3D grava cada parede, laje, chapa, poste de contagem e trecho como um objeto próprio, com o nome do seu item e carregando seu quantitativo, em metros. Um assistente também pode exportá-lo (`usd_export`). Veja [Exportar a vista de conferência em 3D como USD](topic:usd).

## Em todos os aplicativos

- **Unidades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para comprimento, área, volume, ângulo e declividade, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desligue as unidades que você nunca usa e elas saem das listas de unidades; marque uma com estrela e o trabalho novo começa nela. Um arquivo sempre mantém a sua própria unidade. No TakeoffCraft, as listas de {{ui:Unidade}} de um item seguem as chaves, um item novo começa na unidade de comprimento ou de área marcada com estrela, os squares de cobertura (SQ), acres e hectares são novas unidades de área, e um campo de comprimento aceita a marca de qualquer unidade, como `3 yd`. Veja [Unidades, valores digitados e as listas de unidades](common:unit-lists).
- **Um layout mais denso e painéis que se guardam.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Densidade do layout}} › {{ui:Compacta}} coloca mais coisas na tela (telas de toque e celulares mantêm seus botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para acoplar ou flutuar o painel, solte-a na barra de outro painel para dividir um quadro como guias, fixe-a para que deslize para a borda, ou oculte-a e traga-a de volta pela borda. Veja [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo se movem.** Arraste uma caixa de diálogo pela barra de título para tirá-la da frente do desenho; ela volta onde você a deixou. Dê um clique duplo na barra de título para centralizá-la de novo. Veja [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos completos para o seu próprio assistente (arrumar um desenho, plotar um conjunto, conferir desenhos, fazer perguntas a um modelo, totalizar um levantamento, experimentar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reexecutado pelos nossos testes. Os aplicativos não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Idioma}}. Ele, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** agora têm cada palavra dos aplicativos, como rascunhos ainda não revisados por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** diz por que uma verificação de atualização falhou (ainda não há arquivo para o seu sistema, sem rede, assinatura inválida) em vez de apenas "Concluído", e deixa de trazer de volta um cartão de Novidades que você fechou até haver uma versão mais nova.

## Ainda não nesta versão

- **A 0.7 não tem assinatura de código.** A assinatura, e o pacote da Microsoft Store, passaram para a 0.8 porque a validação do certificado ainda não saiu. Confira o SHA-256 ao lado de cada arquivo em getcadcraft.com/download. No Windows, se o SmartScreen barrar o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar assim mesmo}}. No Mac, da primeira vez, clique com o botão direito em CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está em uma loja de aplicativos, e ainda não há versão para iPad ou iPhone.
- As listas de ângulo e declividade em {{ui:Unidades}} são salvas, mas nenhum campo as lê ainda.
- **Os convites de proposta estão desligados para a maioria das contas.** Enquanto o recurso é testado, os e-mails para proponentes externos saem apenas de contas que a equipe do CadCraft habilitou. As páginas dos proponentes funcionam para todos os convites já enviados. Todos os demais: baixem o {{ui:CSV do escopo}}, enviem por e-mail e digitem as propostas.
- Uma janela do CadCraft Studio ainda não pode enviar convites de proposta: ela diz para usar o TakeoffCraft no navegador. Abrir um levantamento com solicitações enviadas, a equalização e a escolha de uma proposta funcionam no Studio.
- Adendos, cartas de adjudicação, uma planilha de escopo que cada proponente assina e lembretes automáticos antes do vencimento de um seguro não estão implementados. Uma proposta escolhida não reprecifica a área da proposta de uma alternativa.
- Desenhos: tabelas de estilo de plotagem e arquivos CTB não são aplicados, um DXF binário é recusado (salve-o como DXF ASCII ou DWG), os desenhos vinculados são encontrados apenas entre os arquivos abertos, pelo nome do arquivo, e subposições de PDF, imagens e objetos OLE em um desenho não são desenhados nem contados. As contagens e escalas foram conferidas em desenhos de exemplo, ainda não em desenhos de uma obra real abertos no programa que os criou.
- Um assistente pode adicionar itens e marcações, mas não pode mover, alterar ou excluir marcações que já existem.

Todo o resto está em [Ainda não implementado](topic:not-built-yet).
