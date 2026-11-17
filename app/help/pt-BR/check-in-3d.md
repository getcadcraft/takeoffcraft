---
title: Verificar o levantamento em 3D
summary: Veja as paredes, lajes e contagens da folha aberta de pé sobre o desenho, gire ao redor delas e clique em uma para selecionar a sua marca.
keywords: png, imagem, figura, captura de tela, empilhar, pavimentos, níveis, elevação, glb, gltf, exportar 3D, espessura da parede, altura da base, abertura, verga da porta, 3d, três dimensões, verificar, vista, paredes, altura da parede, laje, profundidade, volume, orbitar, modelo, seleção, isométrica, perspectiva
from: fb16b4f7
---

A visualização 3D é uma verificação, não um segundo desenho: ela coloca o levantamento da folha na tela de pé sobre a própria folha, então uma parede faltando, uma laje duplicada ou uma contagem perdida aparecem de imediato.

Antes de começar: a folha precisa de uma escala ([Definir a escala](topic:set-the-scale)). Alturas e profundidades precisam de pés reais, então em uma folha sem escala {{ui:3D}} informa isso e permanece na folha plana.

## Abrir a visualização 3D

1. Mostre a folha que você quer verificar.
2. Escolha {{ui:3D}} na barra que mostra o nome e a escala da folha, ou pressione {{key:3}}.
   Na primeira vez, a visualização 3D leva um instante para carregar. A folha é desenhada no chão, e o levantamento fica de pé sobre ela, em cada cor do item.
3. Para voltar, escolha {{ui:3D}} de novo, {{ui:Back to the sheet}}, ou pressione {{key:3}}. Escolher uma ferramenta de desenho (Linear, Área, Contagem e assim por diante) também volta, já que as marcas são desenhadas na folha plana.

Ela mostra a folha na tela; troque de folha na lista de folhas, ou com {{key:PageDown}} e {{key:PageUp}}, e a visualização 3D acompanha. Para ver vários pavimentos de uma vez, empilhe-os (abaixo).

## O que você vê

| Marca | Em 3D |
|---|---|
| Trecho linear, item com altura | Uma parede dessa altura ao longo do trecho. Trechos curvos seguem a curva. |
| Trecho linear, item sem altura | Uma linha na folha. Dê ao item uma altura em **Item** para colocá-lo de pé. |
| Área, item com profundidade | Uma laje dessa profundidade, com os vãos abertos. |
| Área, item sem profundidade | Uma chapa fina de 2", para que ainda apareça. |
| Contagem | Um pequeno pilar em cada ponto contado. |

A altura é o campo {{ui:Height}} de um item linear e a profundidade é o campo {{ui:Depth}} de um item de área, em **Item** (veja [Criar itens do levantamento](topic:create-items)). Ao alterá-los, a visualização 3D é atualizada imediatamente. A nota abaixo do nome da folha diz o que a folha contém, por exemplo "Esta folha em 3D: 2 paredes, 1 laje, 3 contagens", e quantos trechos ou áreas não têm altura ou profundidade. Os cliques atravessam a nota e chegam à visualização.

Os números não mudam em 3D: a área de uma parede é o comprimento exato multiplicado pela altura, e o volume de uma laje é a área líquida (contorno menos vãos, curvas exatas) multiplicada pela profundidade. As curvas são desenhadas como pequenos segmentos retos apenas na tela.

## Olhar ao redor

| Ação | O que faz |
|---|---|
| Arrastar, ou arrastar com o botão do meio | Orbitar ao redor do levantamento. |
| {{key:Shift}} + arrastar, ou arrastar com o botão direito | Pan. |
| Roda do mouse | Zoom para dentro e para fora no ponteiro. |
| Deslizar com dois dedos no trackpad | Orbitar ({{key:Shift}} faz pan). Um pinça dá zoom. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Vistas padrão, enquadradas no levantamento. A visualização 3D abre em {{ui:Iso}}. |
| {{ui:Perspective}} | Perspectiva ligada ou desligada (paralela quando desligada). |
| {{ui:Zoom extents}} ou {{key:F}} | A folha inteira. |
| {{ui:Sheet}} | Mostra ou oculta o desenho no chão. |
| O cubo de vista, no canto superior direito | Clique em uma face, aresta ou canto para olhar a partir dali; arraste-o para orbitar; arraste o anel da bússola para girar; o botão de casa volta para {{ui:Iso}}. |

O canto mostra um cubo de vista, um pequeno ícone de eixos X, Y, Z, ou nada: escolha em {{ui:Settings}}, na aba TakeoffCraft, em **Indicador de canto** ([Configurações do TakeoffCraft](topic:settings)). A folha plana não tem indicador de canto.

:::touch
Um dedo orbita; dois dedos pinçam para dar zoom e se movem para fazer pan. Um toque seleciona.
:::

## Paredes com espessura, base e aberturas

Um item linear com altura fica de pé como uma faixa fina. Para vê-lo como uma parede real, dê ao item a sua forma em **Em 3D** nas configurações dele:

- **Espessura da parede** (8", 0,2 m): a parede vira um sólido, centralizado na linha que você desenhou, com cantos em meia-esquadria.
- **Altura da base**: a parede começa essa distância acima do piso (um forro, uma linha de armários superiores). Os itens de área também têm isso: um teto a 9'-0".
- **Verga da abertura**: um segmento deduzido (uma porta, [Deduzir parte de um trecho](topic:measure-linear#deduct-a-part-of-a-run)) mantém a parede acima dessa altura, então uma porta aparece como porta. Sem ela, um segmento deduzido deixa uma lacuna até o topo.

Isso apenas molda a visualização 3D: os quantitativos (comprimento, área de parede, custos) permanecem como estavam.

## Empilhar os pavimentos

1. Abra os PDFs de todos os pavimentos.
2. Na visualização 3D, escolha {{ui:Levels…}} e digite a elevação de cada pavimento, como `0` para o térreo e `12'` para o próximo. Um campo vazio deixa uma folha de fora.
3. Escolha {{ui:Stack}}. Cada folha com um nível mostra o seu levantamento na altura dela; a folha na tela fica sob o próprio pavimento, e as outras aparecem com contorno. A nota informa quantos pavimentos estão empilhados.

As folhas se alinham pela posição delas na página, então isso funciona para plantas de pavimentos plotadas do mesmo jeito (mesmo tamanho e posição de folha). Uma folha com nível, mas sem escala, fica de fora, e a nota informa isso. Escolha {{ui:Stack}} de novo para uma folha de cada vez. Os níveis são salvos junto com o levantamento.

## Salvar a visualização 3D como imagem

Escolha {{ui:PNG}} na barra 3D para uma figura da visualização como está na tela (`… 3D.png`); {{key:Shift}} + clique em {{ui:PNG}} a torna duas vezes maior (`… 3D@2x.png`), para impressão.

## Salvar a visualização 3D como modelo

Escolha {{ui:GLB}} na barra 3D. Você recebe um arquivo `.glb` (glTF, binário) com o que a visualização mostra — o pavimento na tela, ou todos os pavimentos empilhados — que outros programas 3D abrem: um objeto por marca, com o nome do item, na cor do item, em metros com Y para cima. A própria folha e os contornos não estão nele.

## Selecionar uma marca a partir do 3D

Clique em uma parede, laje, chapa ou pilar. A marca dele se torna a marca selecionada, exatamente como se você tivesse clicado nela na folha: aparece em **Marca selecionada**, o item dela se torna o atual, e a barra de status mostra o comprimento e a altura, ou a área, a profundidade e as jardas cúbicas. {{key:Shift}} + clique adiciona marcas à seleção ou as remove dela. {{key:Delete}} exclui as marcas selecionadas e {{key:Mod+Z}} as traz de volta; {{key:Esc}} desfaz toda a seleção. De volta à folha, as mesmas marcas continuam selecionadas.

:::tip
O desenho segue o tema: no Modelo, a folha no chão fica escura como a vista plana.
:::
