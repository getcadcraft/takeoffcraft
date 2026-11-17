---
title: Contagem automática de um símbolo
summary: Desenhe uma caixa em volta de um símbolo; o TakeoffCraft encontra os outros nesta folha ou em todas as folhas abertas. Revise as correspondências com o controle deslizante e adicione-as de uma vez.
keywords: qualquer ângulo, girado, virado, outra escala, escala diferente, contagem automática, busca de símbolos, localizar símbolos, padrão, modelo, semelhança, detectar, ferramenta de contagem
from: fa68a6c1
---

{{ui:Contagem automática}} encontra todas as cópias de um símbolo depois que você desenha uma caixa em volta de um deles. Em seguida, você revisa as correspondências na folha e adiciona as que aceitar como marcas de contagem. É um auxiliar, não uma garantia: sempre revise antes de adicionar.

## Encontrar os símbolos

1. Crie ou clique em um item de contagem em {{ui:Itens}}.
2. Abra uma folha onde o símbolo aparece.
3. Escolha {{ui:Contagem automática}} na barra de ferramentas, ou pressione {{key:S}}.
   Uma barra aparece no topo da folha: "Arraste uma caixa em volta de um símbolo nesta folha."
4. Para buscar em todas as folhas abertas, e não só nesta, marque {{ui:Buscar em todas as folhas abertas}}.
5. Aplique zoom para o símbolo ficar fácil de ver e arraste uma caixa bem ajustada em volta de uma cópia dele. Inclua o símbolo inteiro; o papel em branco ao redor é descartado.
   A barra mostra "Pesquisando…" com uma barra de progresso e um botão {{ui:Cancelar}}. A página continua responsiva: você pode aplicar zoom, fazer pan e trocar de folha. Escolher outra ferramenta ou pressionar {{key:Esc}} cancela a busca.
6. Quando terminar, as correspondências aparecem na folha como caixas na cor do item, e a barra mostra um resumo como "22 correspondências, 19 para adicionar (3 já contadas). Clique em uma caixa para rejeitá-la ou restaurá-la."

Em {{ui:Contagem automática}}, arrastar na folha desenha uma caixa em vez de fazer pan. Para fazer pan, segure {{key:Space}} e arraste, ou arraste com o botão do meio.

## Revisar as correspondências

- **Clique em uma caixa** para rejeitá-la. Uma caixa rejeitada fica tracejada e riscada. Clique de novo para restaurá-la.
- **Mova o controle deslizante {{ui:Semelhança}}** (de 50% a 95%, começando em 75%). Valores mais altos mostram só correspondências próximas; valores mais baixos mostram as mais aproximadas. O controle só filtra o que foi encontrado; não faz uma nova busca.
- **Já contadas**: correspondências em um ponto que já tem uma marca de contagem deste item começam rejeitadas, para que você não conte nada duas vezes.
- **Outras folhas**: quando você buscou em todas as folhas abertas, mude de folha com a lista de folhas ou com {{key:PageDown}} e revise cada uma. O resumo informa quantas folhas têm correspondências.

## Adicionar as correspondências

Escolha {{ui:Adicionar}}. O botão informa quantas, por exemplo "Adicionar 19 marcas".
As marcas de contagem são adicionadas no centro de cada caixa aceita: "19 marcas de contagem adicionadas a "Tomada duplex". Ctrl+Z remove todas elas."

Todo o lote é uma única etapa de desfazer, então um {{key:Mod+Z}} o remove.

Para descartar a revisão sem adicionar nada, escolha {{ui:Descartar}} ou pressione {{key:Esc}}. Escolher outra ferramenta também a descarta.

## O que ele encontra e o que deixa passar

O TakeoffCraft compara o desenho, como pixels, com o símbolo que você delimitou.

- Ele encontra o símbolo girado em 0°, 90°, 180° e 270°. Marque {{ui:Qualquer ângulo (mais lento)}} na barra de contagem automática antes de desenhar a caixa para encontrá-lo em qualquer ângulo também: ele testa a cada 15° e depois ajusta cada achado até o grau e meio. Isso leva cerca de seis vezes mais tempo. Não encontra um símbolo espelhado (a menos que o símbolo pareça igual espelhado).
- Com {{ui:Buscar em todas as folhas abertas}} marcado, uma folha em outra escala é buscada no tamanho que o símbolo tem nela: uma luminária desenhada em escala numa planta de 1/8" tem metade do tamanho que tem numa planta de 1/4", e ainda assim é encontrada. Essa folha também é buscada no tamanho da própria caixa, para etiquetas e símbolos impressos num tamanho único em todas as folhas. Isso exige uma escala nas duas folhas; uma folha sem escala é buscada apenas no tamanho da caixa.
- Símbolos muito parecidos podem corresponder entre si: uma tomada duplex e uma quádrupla, ou duas etiquetas de luminária que diferem por uma letra. Aumente o controle até restarem só as corretas e rejeite as demais manualmente.
- Um símbolo cruzado por outras linhas, hachuras ou textos tem pontuação menor e pode precisar de um ajuste mais baixo do controle.
- Caixas muito pequenas são recusadas: "Essa caixa é pequena demais. Desenhe-a em volta do símbolo inteiro." Uma caixa vazia também é recusada: "Essa caixa está quase vazia. Desenhe-a em volta de um símbolo."
- Uma folha que ficaria muito grande no tamanho necessário para este símbolo é ignorada, e o resumo diz "1 folha grande demais para buscar neste tamanho de símbolo." Delimite um símbolo maior ou conte essa folha manualmente.

Se nada for encontrado, a barra de status diz "Nenhuma correspondência. Reduza o controle de semelhança ou delimite o símbolo com mais precisão."

## Velocidade e navegadores

A busca roda em um processo em segundo plano, então a página continua responsiva e você pode cancelar a qualquer momento. Cada folha é primeiro desenhada no tamanho de trabalho na própria página, o que pode fazer uma folha muito grande pausar por um momento. Funciona nas versões atuais do Chrome, Edge, Firefox e Safari. Buscar em muitas folhas leva mais tempo; a barra de progresso avança folha por folha. Offline, a contagem automática funciona quando a barra do aplicativo mostra {{ui:Pronto para uso offline}}: {{ui:Salvar para uso offline}} mantém o processo em segundo plano também. Veja [Trabalhar offline](common:offline).
