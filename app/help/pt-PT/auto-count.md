---
title: Contar automaticamente um símbolo
summary: Desenhe uma caixa à volta de um símbolo, deixe o TakeoffCraft encontrar os outros nesta folha ou em todas as folhas abertas, reveja as correspondências com a barra deslizante e adicione-as de uma só vez.
keywords: qualquer ângulo, rodado, virado, outra escala, escala diferente, contagem automática, contagem automatizada, pesquisa de símbolos, encontrar símbolos, padrão, modelo, correspondência, detetar, ferramenta de contagem
from: fa68a6c1
---

{{ui:Contagem automática}} encontra todas as cópias de um símbolo depois de desenhar uma caixa à volta de um. Depois reveja as correspondências na folha e adicione as que aceitar como marcas de contagem. É um auxiliar, não uma garantia: reveja sempre antes de adicionar.

## Encontrar os símbolos

1. Crie ou clique num artigo de contagem em {{ui:Artigos}}.
2. Abra uma folha onde o símbolo aparece.
3. Escolha {{ui:Contagem automática}} na barra de ferramentas, ou prima {{key:S}}.
   Aparece uma barra no topo da folha: «Arraste uma caixa à volta de um símbolo nesta folha.»
4. Para pesquisar em todas as folhas abertas, e não só nesta, marque {{ui:Procurar em todas as folhas abertas}}.
5. Aumente o zoom para ver bem o símbolo e arraste uma caixa justa à volta de uma cópia. Inclua o símbolo inteiro; o papel em branco à volta é cortado.
   A barra mostra «A pesquisar…» com uma barra de progresso e um botão {{ui:Cancelar}}. A página continua responsiva: pode ampliar (zoom), deslocar a vista e mudar de folha. Escolher outra ferramenta, ou {{key:Esc}}, cancela a pesquisa.
6. Quando terminar, as correspondências aparecem na folha como caixas na cor do artigo, e a barra mostra um resumo como «22 correspondências, 19 a adicionar (3 já contadas). Clique numa caixa para a rejeitar ou repor.»

Em {{ui:Contagem automática}}, arrastar na folha desenha uma caixa em vez de deslocar a vista. Para deslocar a vista, mantenha {{key:Space}} premido e arraste, ou arraste com o botão do meio.

## Rever as correspondências

- **Clique numa caixa** para a rejeitar. Uma caixa rejeitada fica tracejada e riscada. Clique novamente para a repor.
- **Mova a barra deslizante {{ui:Semelhança}}** (de 50% a 95%, começando em 75%). Um valor mais alto mostra apenas correspondências próximas; um valor mais baixo mostra correspondências mais soltas. A barra só filtra o que foi encontrado; não volta a pesquisar.
- **Já contadas**: as correspondências num local que já tem uma marca de contagem deste artigo começam rejeitadas, para que não conte nada duas vezes.
- **Outras folhas**: quando pesquisou em todas as folhas abertas, mude de folha com a lista de folhas ou com {{key:PageDown}} e reveja cada uma. O resumo indica quantas folhas têm correspondências.

## Adicionar

Escolha {{ui:Adicionar}}. O botão indica quantas, por exemplo «Adicionar 19 marcas».
As marcas de contagem são adicionadas no centro de cada caixa aceite: «Adicionadas 19 marcas de contagem a "Tomada duplex". Ctrl+Z remove-as todas.»

O lote inteiro é um único passo de anulação, por isso um {{key:Mod+Z}} remove-o.

Para descartar a revisão sem adicionar nada, escolha {{ui:Descartar}} ou prima {{key:Esc}}. Escolher outra ferramenta também a descarta.

## O que encontra e o que falha

O TakeoffCraft compara o desenho, pixel a pixel, com o símbolo que está dentro da caixa.

- Encontra o símbolo rodado 0°, 90°, 180° e 270°. Marque {{ui:Qualquer ângulo (mais lento)}} na barra de contagem automática antes de desenhar a caixa, para o encontrar também em qualquer ângulo: testa de 15 em 15° e depois ajusta cada resultado até à precisão de 1.5°. Demora cerca de seis vezes mais tempo. Não encontra um símbolo espelhado (a menos que o símbolo pareça igual espelhado).
- Com {{ui:Procurar em todas as folhas abertas}} marcado, uma folha noutra escala é pesquisada com o tamanho que o símbolo tem nessa folha: um acessório desenhado à escala numa planta de 1/8" tem metade do tamanho que tem numa planta de 1/4", e continua a ser encontrado. Essa folha também é pesquisada com o tamanho da caixa, para etiquetas e símbolos impressos com o mesmo tamanho em todas as folhas. Isto exige uma escala nas duas folhas; uma folha sem escala é pesquisada apenas com o tamanho da caixa.
- Símbolos muito parecidos podem corresponder entre si: uma tomada dupla e uma quádrupla, ou duas etiquetas de acessórios que diferem numa letra. Aumente a barra deslizante até restarem apenas as corretas e rejeite as restantes manualmente.
- Um símbolo atravessado por outras linhas, tramas ou texto tem uma pontuação mais baixa e pode precisar de um valor mais baixo na barra deslizante.
- Caixas muito pequenas são recusadas: «Essa caixa é demasiado pequena. Desenhe-a à volta do símbolo inteiro.» Uma caixa vazia também é recusada: «Essa caixa está quase vazia. Desenhe-a à volta de um símbolo.»
- Uma folha que ficaria muito grande ao tamanho necessário para este símbolo é ignorada, e o resumo diz «1 folha era demasiado grande para pesquisar com este tamanho de símbolo.» Desenhe uma caixa à volta de um símbolo maior, ou conte essa folha manualmente.

Se não for encontrada nenhuma correspondência, a barra de estado diz «Sem correspondências. Diminua a barra deslizante Semelhança, ou desenhe a caixa mais justa à volta do símbolo.»

## Velocidade e navegadores

A pesquisa corre num processo em segundo plano, por isso a página continua responsiva e pode cancelá-la a qualquer momento. Cada folha é primeiro desenhada à dimensão de trabalho na própria página, o que pode fazer uma folha muito grande parar por um momento. Funciona nas versões atuais do Chrome, Edge, Firefox e Safari. Pesquisar muitas folhas demora mais; a barra de progresso avança folha a folha. Offline, a contagem automática funciona quando a barra da aplicação mostra {{ui:Pronto para offline}}: {{ui:Guardar para offline}} mantém também o processo em segundo plano. Veja [Trabalhar offline](common:offline).
