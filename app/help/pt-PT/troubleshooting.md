---
title: Resolução de problemas
summary: Sintomas, causas e soluções para as mensagens e surpresas que surgem no TakeoffCraft, citadas como a aplicação as mostra.
keywords: problemas, erros, não funciona, correção, ajuda, recusado, não mede, sem escala, marcas em falta, falha na exportação, offline, toque
from: cd319c9b
---

O TakeoffCraft explica a maioria das recusas na barra de estado, na parte inferior da janela. Procure a mensagem abaixo.

## Abrir ficheiros

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| O leitor de PDF não foi carregado. Recarregue a página para tentar de novo. | O leitor de PDF da aplicação não carregou, normalmente porque está offline e a aplicação nunca foi guardada para uso offline. | Restabeleça a ligação e recarregue. Depois escolha {{ui:Guardar para offline}} e aguarde por {{ui:Pronto para offline}}; veja [Trabalhar offline](common:offline). |
| (nome) está protegido por palavra-passe. Abra uma cópia sem proteção. | O PDF precisa de palavra-passe para abrir. | Peça uma cópia sem proteção, ou remova a palavra-passe num programa de PDF de confiança. |
| Não foi possível ler (nome) como PDF (…) | O ficheiro está danificado ou não é de facto um PDF. | Transfira-o de novo, ou volte a guardá-lo a partir do programa que o criou. |
| (nome) já está aberto. | O mesmo PDF (mesmo conteúdo) já está aberto. | Nada a fazer. |
| O TakeoffCraft abre PDF e projetos .takeoff.json. Ignorados: … | Outros tipos de ficheiro foram descartados. | Converta primeiro os desenhos para PDF. |
| Nada acontece ao largar ficheiros | Os ficheiros foram largados fora da janela do navegador, ou o navegador abriu o PDF num novo separador. | Largue sobre a própria página do TakeoffCraft; a moldura "Largar PDF ou um .takeoff.json" mostra quando é que vai funcionar. |
| Abrir um conjunto grande demora algum tempo | Cada PDF é lido por completo para lhe gerar uma impressão digital. | Aguarde que desapareça a mensagem "A abrir (nome)…". As miniaturas preenchem-se ao percorrer. |

## Medição

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Abra primeiro um PDF. | Nenhuma folha está aberta. | Abra um PDF. |
| Esta folha ainda não tem escala, por isso não pode ser medida. Escolha uma escala predefinida ou calibre primeiro (as contagens funcionam sem escala). | As ferramentas linear, área, círculo e recorte precisam de escala. | [Defina a escala](topic:set-the-scale). |
| Crie primeiro um artigo linear (dê-lhe nome em Artigos) e clique na folha. | Não existe nenhum artigo desse tipo. | Preencha o formulário {{ui:Novo artigo}} que se abriu, e escolha {{ui:Adicionar}}. |
| Escolha primeiro um artigo a medir (painel Artigos). | O artigo atual foi eliminado. | Clique num artigo em {{ui:Artigos}}. |
| Um troço precisa de pelo menos dois pontos. | Terminou após um clique. | Clique em pelo menos dois pontos. |
| Uma área precisa de pelo menos três pontos. | Poucos cantos. | Clique em pelo menos três cantos. |
| O contorno cruza-se a si próprio, pelo que a área estaria errada. Desenhe-o de novo sem cruzamentos. | Uma forma de oito. | Desenhe-a como duas áreas, ou percorra o contorno ordenadamente. |
| Esses pontos não delimitam nenhuma área. | Todos os pontos estão numa única linha. | Clique em cantos que delimitem um espaço. |
| Selecione primeiro uma marca de área (ferramenta Selecionar), depois escolha Recorte e desenhe o furo no interior dela. | {{ui:Recorte}} precisa de uma área selecionada. | Prima {{key:V}}, clique na área e, depois, {{key:X}}. |
| Um recorte tem de ficar totalmente dentro da área. | O furo atravessa ou sai do contorno. | Desenhe o furo dentro da área. |
| Os recortes não se podem sobrepor. | Dois furos sobrepõem-se. | Desenhe um furo à volta de ambos, ou mantenha-os separados. |
| … O ponto foi reposto. | Um canto arrastado faria o contorno cruzar-se ou empurraria um furo para fora. | Arraste para um sítio que mantenha a forma válida. |
| Clique num ponto no limite do círculo, afastado do centro. | O segundo clique ficou demasiado perto do centro. | Clique mais afastado. |
| Os cliques deslocam a folha em vez de acrescentar pontos | O ponteiro moveu-se mais do que alguns pixels com o botão premido; isso conta como arrastamento. | Clique sem mexer, sobretudo num touchpad. |
| O Shift não faz snap | Está a colocar um ponto num arco, ou a desenhar um círculo. | O snap de 45° aplica-se apenas a segmentos retos. |
| Os pontos saltam para uma linha próxima | O snap às linhas do desenho está ativado. | Aumente o zoom para clicar entre linhas, ou prima {{key:F3}} para desativar o Snap. |
| Não aparece nenhum marcador de snap | O Snap está desativado, a folha é uma digitalização, ou a ferramenta não faz snap (Contagem, Contagem automática, colagem). | Prima {{key:F3}}; numa digitalização não há linhas a que o snap se ajuste. |
| O comprimento está errado | A escala está errada (muitas vezes um PDF redimensionado com uma predefinida). | Utilize {{ui:Verificar}} numa cota conhecida e, depois, {{ui:Calibrar}}. |

## Escala

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Escolha dois pontos mais afastados. | Os pontos de calibração estão quase sobrepostos. | Calibre numa cota mais longa. |
| Uma mensagem na caixa de diálogo de calibração, como "Não foi possível ler essa distância" | A distância está num formato que o TakeoffCraft não consegue ler. | Veja [Introdução de comprimentos, taxas e percentagens](topic:entry-formats). |
| Esta folha ainda não tem escala, por isso não há nada a verificar. Calibre-a ou escolha uma predefinida. | {{ui:Verificar}} numa folha sem escala. | Defina primeiro uma escala. |
| A lista {{ui:Predefinida}} está a cinzento | Nenhuma folha está aberta. | Abra um PDF. |

## Quantidades e fórmulas

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Incompleto: … (não incluído nos totais) | Um erro de fórmula, ou marcas em folhas sem escala. | Veja [Ler as quantidades e o orçamento](topic:read-quantities#the-incomplete-warning). |
| +(n) sem escala ao lado de um artigo | Algumas das suas marcas estão em folhas sem escala. | Dê uma escala a essas folhas. |
| Erro de fórmula: … | Não é possível calcular a fórmula. | Veja [Linguagem de fórmulas](topic:formulas#errors). |
| Este artigo tem marcas, por isso o seu tipo não pode mudar. | O tipo fica bloqueado quando existem marcas. | Crie um novo artigo do outro tipo e volte a desenhar as marcas com ele. |
| Um artigo precisa de um nome. | O campo do nome ficou vazio. | Escreva um nome. |
| Escreva um valor como 12.50. / Escreva uma percentagem como 10 ou 7.5. | Não foi possível ler uma taxa ou o desperdício. | Veja [Introdução de comprimentos, taxas e percentagens](topic:entry-formats). |
| Um total parece duplicado | O artigo tem as suas próprias taxas e componentes que levam o mesmo custo. | Defina as taxas próprias do artigo como 0 quando os componentes levam o custo. |
| As marcas deste artigo estão em PDF que não estão abertos. | Clicou num artigo cujas marcas estão todas em PDF que não abriu. | Abra esses PDF; os nomes estão listados em {{ui:Folhas}}. |

## Contagem automática

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Essa caixa é demasiado pequena. Desenhe-a à volta do símbolo inteiro. | A caixa é minúscula. | Aumente o zoom e envolva o símbolo inteiro. |
| Essa caixa está quase vazia. Desenhe-a à volta de um símbolo. | A caixa contém apenas papel. | Envolva o próprio símbolo. |
| Sem correspondências. Baixe o cursor de semelhança, ou envolva o símbolo mais apertado. | Nada obteve pontuação suficiente. | Envolva o símbolo mais apertado, ou arraste o cursor {{ui:Semelhança}} para baixo. |
| Demasiadas correspondências, incluindo símbolos errados | Símbolos semelhantes ficam com pontuação próxima do real. | Suba o cursor {{ui:Semelhança}} e clique nas caixas erradas para as rejeitar. |
| Correspondências em falta noutras folhas | Essas folhas desenham o símbolo com outro tamanho, ou com um ângulo que não é um passo de 90°. | Pesquise essas folhas com uma caixa desenhada lá, ou conte à mão. |
| (n) folhas eram grandes demais para pesquisar com este tamanho de símbolo. | A folha seria demasiado grande no tamanho de trabalho. | Envolva um símbolo maior, ou conte essa folha à mão. |
| A pesquisa falhou: … | A pesquisa em segundo plano parou. | Tente de novo; recarregue a página se se repetir (guarde primeiro). Offline, só funciona quando a barra da aplicação mostrar {{ui:Pronto para offline}}. |
| Arrastar desenha uma caixa em vez de deslocar a vista | É assim que funciona a {{ui:Contagem automática}}. | Mantenha {{key:Space}} premido e arraste, ou arraste com o botão do meio. |

## Guardar e exportar

| Mensagem ou sintoma | Causa | Solução |
|---|---|---|
| Nada para exportar ainda: crie um artigo e meça-o. | Não há artigos. | Crie primeiro um artigo. |
| Ainda não há marcas nos PDF abertos. | {{ui:PDF marcado}} não tem nada para desenhar nos PDF abertos. | Abra os PDF que têm marcas. |
| Este PDF está protegido por palavra-passe ou encriptado, por isso não é possível escrever uma cópia marcada. … | O PDF está encriptado. | Exporte {{ui:XLSX}} em vez disso, ou use uma cópia sem encriptação do PDF (que então precisa da sua própria medição, por ser outro ficheiro). |
| Não foi possível escrever o PDF marcado: … | Muitas vezes: offline, e a aplicação não foi guardada para uso offline, por isso falta o escritor de PDF. | Restabeleça a ligação e escolha {{ui:PDF marcado}} de novo. Para evitar isto, escolha {{ui:Guardar para offline}} e aguarde por {{ui:Pronto para offline}}. |
| Só foi transferido um PDF marcado | O navegador bloqueou várias transferências de uma vez. | Permita múltiplas transferências para este site e exporte de novo. |
| (ficheiro) não é um projeto do TakeoffCraft (não é JSON válido). / Este não é um ficheiro de projeto do TakeoffCraft. | Ficheiro errado, ou danificado. | Escolha o ficheiro `.takeoff.json`. |
| Este projeto foi guardado por um TakeoffCraft mais recente. Abra-o aí. | O ficheiro vem de uma versão mais recente. | Abra-o na versão mais recente. |
| (n) marcas estavam danificadas e ficaram de fora. | Parte do ficheiro foi danificada ou editada manualmente. | O resto abriu. Desenhe de novo as marcas em falta, ou abra uma cópia anterior. |
| Marcas em falta depois de reabrir | Os PDF não estão abertos, ou um deles foi alterado. | Veja [Guardar e reabrir uma medição](topic:save-and-reopen#when-a-pdf-has-changed). |
| O navegador pergunta "Sair do site?" | Há alterações não guardadas. | Fique na página e guarde com {{key:Mod+S}}. |

## Teclas e rato

| Sintoma | Causa | Solução |
|---|---|---|
| As teclas de letras não fazem nada | O cursor está num campo (pesquisa, editor de artigos, tabela). | Clique na folha, ou prima {{key:Tab}} para sair do campo. |
| A roda aplica zoom em vez de deslocar | A roda aplica sempre zoom à folha. | Arraste para deslocar a vista. |
| A página inteira ficou maior ou menor | Zoom do navegador ({{key:Mod+Plus}} ou {{key:Mod+Minus}}). | Prima {{key:Mod+0}}. Aplique zoom à folha com a roda ou com as teclas {{key:Plus}} e {{key:Minus}} sozinhas. |
| Uma marca desapareceu ao premir Backspace | O Backspace elimina a marca selecionada quando não está a desenhar. | {{key:Mod+Z}} repõe-na. |
| O clique com o botão direito não termina num Mac | O Control-clique chega como um clique normal. | Use um clique com dois dedos com o clique secundário ativado, ou prima {{key:Enter}}. |

## Ecrãs táteis

Num ecrã tátil:

- **Toque** coloca um ponto (ou seleciona uma marca com {{ui:Selecionar}}). Um dedo a arrastar desloca a vista.
- **Dois dedos** afastam-se ou aproximam-se para aplicar zoom em torno do ponto entre eles, e deslocam a vista quando se movem juntos. Pousar um segundo dedo cancela o que o primeiro tinha iniciado, por isso um gesto de pinça nunca deixa um ponto.
- **Conclua** um troço ou um contorno com uma **pressão longa** (o clique direito), um **duplo toque**, ou {{ui:Concluir}} na barra no fundo da folha. A mesma barra tem {{ui:Posterior}} (recua o último ponto) e {{ui:Cancelar}}. As áreas também se fecham ao tocar no primeiro ponto.
- Os dedos têm alvos maiores: os pontos fazem snap, fecham e são escolhidos a partir de mais longe, e as alças dos cantos são maiores.

Escrever comprimentos exige um teclado; o teclado no ecrã funciona quando a caixa {{ui:Escrever}} tem o foco.

Num tablet, um teclado e um rato ou touchpad facilitam muito a medição.

## Trabalhar offline

| Botão ou sintoma | Causa | Solução |
|---|---|---|
| {{ui:Não foi possível guardar}} | Alguns ficheiros da aplicação não foram transferidos ao guardar para uso offline. | Verifique a ligação e escolha o botão de novo. |
| {{ui:Offline indisponível}} | As janelas privadas e alguns computadores geridos bloqueiam cópias offline. | Use uma janela normal, ou outro navegador. |
| "A guardar…" nunca começa | Está offline; guardar precisa de ligação. | Guarde com ligação. |
| A aplicação está antiga depois de uma atualização | A cópia offline é de um dia anterior. | Com ligação, escolha {{ui:Pronto para offline}}, depois {{ui:Guardar novamente (obter a versão mais recente)}}. |
| Libertar espaço | A cópia offline ocupa cerca de 6 MB. | Escolha {{ui:Pronto para offline}}, depois {{ui:Remover a cópia offline}}. |

Veja [Trabalhar offline](common:offline).

## Continua sem resolver

Recarregue a página se a aplicação deixar de responder. A medição perde-se ao recarregar, a menos que a tenha guardado; por isso, guarde primeiro com {{key:Mod+S}}, se for possível. Para questões do navegador, veja [Navegadores e computadores](common:browsers).
