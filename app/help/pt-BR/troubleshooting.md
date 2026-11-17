---
title: Solução de problemas
summary: Sintomas, causas e soluções para as mensagens e surpresas que você pode encontrar no TakeoffCraft, citadas como o aplicativo as mostra.
keywords: problemas, erros, não funciona, correção, ajuda, recusado, não mede, sem escala, marcações ausentes, falha na exportação, offline, toque
from: cd319c9b
---

O TakeoffCraft explica a maioria das recusas na barra de status, na parte inferior da janela. Encontre a mensagem abaixo.

## Abrir arquivos

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| O leitor de PDF não foi carregado. Recarregue a página para tentar de novo. | O leitor de PDF do aplicativo não foi carregado, geralmente porque você está offline e o aplicativo nunca foi salvo para uso offline. | Reconecte e recarregue. Depois escolha {{ui:Salvar para uso offline}} e aguarde {{ui:Pronto para uso offline}}; veja [Trabalhar offline](common:offline). |
| (nome) está protegido por senha. Abra uma cópia sem proteção. | O PDF precisa de senha para abrir. | Peça uma cópia sem proteção ou remova a senha em um programa de PDF em que você confie. |
| (nome) não pôde ser lido como PDF (…) | O arquivo está danificado ou não é realmente um PDF. | Baixe-o de novo ou salve-o novamente pelo programa que o criou. |
| (nome) já está aberto. | O mesmo PDF (mesmo conteúdo) está aberto. | Nada a fazer. |
| O TakeoffCraft abre PDFs e projetos .takeoff.json. Ignorados: … | Outros tipos de arquivo foram descartados. | Converta os desenhos para PDF primeiro. |
| Nada acontece ao soltar arquivos | Os arquivos foram soltos fora da janela do navegador, ou o navegador abriu o PDF em uma nova guia. | Solte sobre a própria página do TakeoffCraft; o quadro "Solte PDFs ou um .takeoff.json" mostra quando isso vai funcionar. |
| Abrir um conjunto grande leva algum tempo | Cada PDF é lido por completo para gerar sua impressão digital. | Aguarde a mensagem "Abrindo (nome)…" sumir. As miniaturas são preenchidas conforme você rola a tela. |

## Medir

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Abra um PDF primeiro. | Nenhuma folha está aberta. | Abra um PDF. |
| Esta folha ainda não tem escala, então não pode ser medida. Escolha uma escala predefinida ou calibre primeiro (as contagens funcionam sem ela). | As ferramentas linear, área, círculo e recorte precisam de escala. | [Defina a escala](topic:set-the-scale). |
| Crie primeiro um item linear (nomeie-o em Itens) e clique na folha. | Não há item desse tipo. | Preencha o formulário {{ui:New item}} que abriu e escolha {{ui:Adicionar}}. |
| Escolha primeiro um item para levantar (painel Itens). | O item atual foi excluído. | Clique em um item em {{ui:Itens}}. |
| Um trecho precisa de pelo menos dois pontos. | Você finalizou após um clique. | Clique em pelo menos dois pontos. |
| Uma área precisa de pelo menos três pontos. | Poucos cantos. | Clique em pelo menos três cantos. |
| O contorno se cruza, então sua área estaria errada. Desenhe-o de novo sem se cruzar. | Uma forma de oito. | Desenhe como duas áreas, ou contorne a borda em ordem. |
| Esses pontos não delimitam nenhuma área. | Todos os pontos estão em uma mesma linha. | Clique em cantos que delimitem um espaço. |
| Selecione primeiro uma marca de área (ferramenta {{ui:Selecionar}}), depois escolha {{ui:Recorte}} e desenhe o furo dentro dela. | {{ui:Recorte}} precisa de uma área selecionada. | Pressione {{key:V}}, clique na área e depois {{key:X}}. |
| Um recorte precisa ficar totalmente dentro da área. | O furo cruza ou sai do contorno. | Desenhe o furo dentro da área. |
| Recortes não podem se sobrepor. | Dois furos se sobrepõem. | Desenhe um furo que englobe os dois, ou mantenha-os separados. |
| … O ponto voltou à posição original. | Um canto arrastado faria o contorno se cruzar ou empurraria um furo para fora. | Arraste para um lugar que mantenha a forma válida. |
| Clique em um ponto na borda do círculo, longe do centro. | O segundo clique ficou perto demais do centro. | Clique mais afastado. |
| Os cliques deslocam a folha em vez de adicionar pontos | O ponteiro se moveu mais de alguns pixels com o botão pressionado; isso conta como arraste. | Clique sem mover, especialmente no trackpad. |
| Shift não faz snap | Você está posicionando um ponto em um arco, ou desenhando um círculo. | O snap de 45° vale apenas para segmentos retos. |
| Pontos saltam para uma linha próxima | O snap para as linhas do desenho está ativado. | Aproxime o zoom para clicar entre as linhas, ou pressione {{key:F3}} para desativar o Snap. |
| Nenhum marcador de snap aparece | O Snap está desativado, a folha é digitalizada, ou a ferramenta não faz snap (Contagem, Contagem automática, colar). | Pressione {{key:F3}}; em uma digitalização não há linhas para fazer snap. |
| O comprimento está errado | A escala está errada (muitas vezes um PDF redimensionado com uma predefinição). | Use {{ui:Conferir}} em uma cota conhecida e depois {{ui:Calibrar}}. |

## Escala

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Escolha dois pontos mais afastados. | Os pontos de calibração estão quase sobrepostos. | Calibre em uma cota maior. |
| Uma mensagem na caixa de diálogo de calibração, como "Não foi possível ler essa distância" | A distância está em um formato que o TakeoffCraft não consegue ler. | Veja [Entrada de comprimento, preço unitário e percentual](topic:entry-formats). |
| Esta folha ainda não tem escala, então não há nada a conferir. Calibre-a ou escolha uma predefinida. | {{ui:Conferir}} em uma folha sem escala. | Defina uma escala primeiro. |
| A lista {{ui:Predefinida}} está desabilitada | Nenhuma folha está aberta. | Abra um PDF. |

## Quantitativos e fórmulas

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Incompleto: … (não está nos totais) | Um erro de fórmula, ou marcações em folhas sem escala. | Veja [Ler quantitativos e o orçamento](topic:read-quantities#the-incomplete-warning). |
| +(n) sem escala ao lado de um item | Algumas das marcações estão em folhas sem escala. | Dê escala a essas folhas. |
| Erro de fórmula: … | A fórmula não pode ser calculada. | Veja [Linguagem de fórmulas](topic:formulas#errors). |
| Este item tem marcações, então seu tipo não pode mudar. | O tipo fica bloqueado quando há marcações. | Crie um item novo do outro tipo e desenhe as marcações de novo com ele. |
| Um item precisa de um nome. | O campo de nome foi esvaziado. | Digite um nome. |
| Digite um valor como 12.50. / Digite um percentual como 10 ou 7.5. | Um preço unitário ou uma perda não pôde ser lido. | Veja [Entrada de comprimento, preço unitário e percentual](topic:entry-formats). |
| Um total parece duplicado | O item tem seus próprios preços unitários e componentes que levam o mesmo custo. | Defina os preços unitários do próprio item como 0 quando os componentes levam o custo. |
| As marcações deste item estão em PDFs que não estão abertos. | Você clicou em um item cujas marcações estão todas em PDFs que você não abriu. | Abra esses PDFs; os nomes deles estão listados em {{ui:Folhas}}. |

## Contagem automática

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Essa caixa é pequena demais. Desenhe-a em volta de todo o símbolo. | A caixa está muito pequena. | Aproxime o zoom e englobe todo o símbolo em uma caixa. |
| Essa caixa está quase vazia. Desenhe-a em volta de um símbolo. | A caixa contém apenas papel. | Englobe o próprio símbolo. |
| Nenhuma correspondência. Reduza o controle deslizante de {{ui:Semelhança}}, ou englobe o símbolo mais de perto. | Nada atingiu pontuação suficiente. | Englobe o símbolo de perto, ou arraste o controle {{ui:Semelhança}} para baixo. |
| Correspondências demais, incluindo símbolos errados | Símbolos parecidos pontuam perto do real. | Aumente o controle {{ui:Semelhança}} e clique nas caixas erradas para rejeitá-las. |
| Correspondências ausentes em outras folhas | Essas folhas desenham o símbolo em outro tamanho, ou em um ângulo que não é um passo de 90°. | Pesquise essas folhas com uma caixa desenhada lá, ou conte manualmente. |
| (n) folhas eram grandes demais para pesquisar nesse tamanho de símbolo. | A folha ficaria grande demais no tamanho de trabalho. | Englobe um símbolo maior, ou conte essa folha manualmente. |
| A pesquisa falhou: … | A pesquisa em segundo plano parou. | Tente de novo; recarregue a página se se repetir (salve antes). Offline, só funciona quando a barra do aplicativo mostrar {{ui:Pronto para uso offline}}. |
| Arrastar desenha uma caixa em vez de deslocar a folha | É assim que {{ui:Contagem automática}} funciona. | Mantenha {{key:Space}} pressionado e arraste, ou arraste com o botão do meio. |

## Salvar e exportar

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Nada a exportar ainda: crie um item e faça o levantamento dele. | Não há itens. | Crie um item primeiro. |
| Ainda não há marcações nos PDFs abertos. | {{ui:PDF marcado}} não tem o que desenhar nos PDFs abertos. | Abra os PDFs que têm marcações. |
| Este PDF é protegido por senha ou criptografado, então uma cópia marcada não pode ser gravada. … | O PDF está criptografado. | Exporte o {{ui:XLSX}} no lugar, ou use uma cópia sem criptografia do PDF (ela então precisa do próprio levantamento, pois é outro arquivo). |
| O PDF marcado não pôde ser gravado: … | Muitas vezes: offline, e o aplicativo não foi salvo para uso offline, então o gravador de PDF está ausente. | Volte a ficar online e escolha {{ui:PDF marcado}} de novo. Para evitar isso, escolha {{ui:Salvar para uso offline}} e aguarde {{ui:Pronto para uso offline}}. |
| Só um PDF marcado foi baixado | O navegador bloqueou vários downloads ao mesmo tempo. | Permita vários downloads para este site e exporte de novo. |
| (arquivo) não é um projeto do TakeoffCraft (não é um JSON válido). / Este não é um arquivo de projeto do TakeoffCraft. | Arquivo errado, ou um arquivo danificado. | Selecione o arquivo `.takeoff.json`. |
| Este projeto foi salvo por um TakeoffCraft mais novo. Abra-o lá. | O arquivo vem de uma versão mais recente. | Abra-o na versão mais recente. |
| (n) marcações foram danificadas e deixadas de fora. | Parte do arquivo foi danificada ou editada manualmente. | O restante foi aberto. Desenhe as marcações que faltam de novo, ou abra uma cópia mais antiga. |
| Marcações ausentes após reabrir | Os PDFs não estão abertos, ou um deles foi alterado. | Veja [Salvar e reabrir um levantamento](topic:save-and-reopen#when-a-pdf-has-changed). |
| O navegador pergunta "Sair do site?" | Há alterações não salvas. | Fique na página e salve com {{key:Mod+S}}. |

## Teclas e mouse

| Sintoma | Causa | Solução |
|---|---|---|
| As teclas de letra não fazem nada | O cursor está em um campo (busca, editor de itens, tabela). | Clique na folha, ou pressione {{key:Tab}} para sair do campo. |
| A roda dá zoom em vez de rolar | A roda sempre dá zoom na folha. | Arraste para deslocar a folha. |
| A página inteira ficou maior ou menor | Zoom do navegador ({{key:Mod+Plus}} ou {{key:Mod+Minus}}). | Pressione {{key:Mod+0}}. Dê zoom na folha com a roda ou com {{key:Plus}} e {{key:Minus}} sem modificador. |
| Uma marcação desapareceu quando pressionei Backspace | Backspace exclui a marcação selecionada quando você não está desenhando. | {{key:Mod+Z}} a traz de volta. |
| O clique com o botão direito não finaliza no Mac | O Control-clique chega como um clique normal. | Use um clique com dois dedos com o clique secundário ativado, ou pressione {{key:Enter}}. |

## Telas de toque

Em uma tela de toque:

- **Toque** coloca um ponto (ou seleciona uma marcação com {{ui:Selecionar}}). Um dedo arrastando desloca a folha.
- **Dois dedos** pinçam para dar zoom em torno do ponto entre eles, e deslocam a folha quando se movem juntos. Colocar um segundo dedo cancela o que o primeiro começou, então um pinçamento nunca deixa um ponto.
- **Conclua** um trecho ou um contorno com um **toque longo** (o clique com o botão direito), um **toque duplo**, ou {{ui:Concluir}} na barra na parte inferior da folha. A mesma barra tem {{ui:Posterior}} (desfaz o último ponto) e {{ui:Cancelar}}. Áreas também são fechadas tocando no primeiro ponto.
- Os dedos têm alvos maiores: os pontos fazem snap, fecham e são escolhidos a uma distância maior, e as alças dos cantos são maiores.

Digitar comprimentos exige um teclado; o teclado na tela funciona quando a caixa {{ui:Digite}} está em foco.

Em um tablet, um teclado e um mouse ou trackpad tornam o levantamento bem mais fácil.

## Trabalhar offline

| Botão ou sintoma | Causa | Solução |
|---|---|---|
| {{ui:Não foi possível salvar}} | Alguns arquivos do aplicativo não foram baixados ao salvar para uso offline. | Verifique sua conexão e escolha o botão de novo. |
| {{ui:Offline indisponível}} | Janelas privativas e alguns computadores gerenciados bloqueiam cópias offline. | Use uma janela normal ou outro navegador. |
| "Salvando…" nunca começa | Você está offline; salvar exige uma conexão. | Salve enquanto estiver online. |
| O aplicativo está antigo após uma atualização | A cópia offline é de um dia anterior. | Online, escolha {{ui:Pronto para uso offline}} e depois {{ui:Salvar de novo (obter a versão mais recente)}}. |
| Você quer o espaço de volta | A cópia offline tem cerca de 6 MB. | Escolha {{ui:Pronto para uso offline}} e depois {{ui:Remover a cópia offline}}. |

Veja [Trabalhar offline](common:offline).

## Ainda com problemas

Recarregue a página se o aplicativo parar de responder. Seu levantamento se perde ao recarregar, a menos que você o tenha salvo; então salve antes com {{key:Mod+S}}, se puder. Para dúvidas sobre navegadores, veja [Navegadores e computadores](common:browsers).
