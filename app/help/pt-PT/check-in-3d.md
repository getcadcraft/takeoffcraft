---
title: Verificar a medição em 3D
summary: Veja as paredes, lajes e contagens da folha aberta de pé sobre o desenho, oriente-as à volta e clique numa para selecionar a sua marca.
keywords: png, imagem, fotografia, captura de ecrã, empilhar, pisos, níveis, alçado, glb, gltf, exportar 3D, espessura da parede, altura da base, vão, verga da porta, 3D, três dimensões, verificar, vista, paredes, altura da parede, laje, profundidade, volume, orbitar, modelo, seleção, isométrica, perspetiva
from: fb16b4f7
---

A vista 3D é uma verificação, não um segundo desenho: coloca a medição da folha no ecrã de pé sobre a própria folha, para que uma parede em falta, uma laje duplicada ou uma contagem perdida se vejam de imediato.

Antes de começar: a folha precisa de uma escala ([Definir a escala](topic:set-the-scale)). Alturas e profundidades precisam de pés reais, por isso, numa folha sem escala, {{ui:3D}} indica-o e fica na folha plana.

## Abrir a vista 3D

1. Mostre a folha que quer verificar.
2. Escolha {{ui:3D}} na barra que mostra o nome e a escala da folha, ou prima {{key:3}}.
   Na primeira vez, a vista 3D demora um momento a carregar. A folha é desenhada no chão, e a medição fica de pé sobre ela, em cada cor do artigo.
3. Para voltar, escolha {{ui:3D}} outra vez, {{ui:Voltar à folha}}, ou prima {{key:3}}. Escolher uma ferramenta de desenho (Linear, Área, Contagem e assim por diante) também volta, uma vez que as marcas são desenhadas na folha plana.

A vista mostra a folha no ecrã; mude de folha na lista de folhas, ou com {{key:PageDown}} e {{key:PageUp}}, e a vista 3D acompanha. Para ver vários pisos de uma vez, empilhe-os (abaixo).

## O que vê

| Marca | Em 3D |
|---|---|
| Percurso linear, artigo com altura | Uma parede dessa altura ao longo do percurso. Os percursos curvos seguem a curva. |
| Percurso linear, artigo sem altura | Uma linha na folha. Dê ao artigo uma altura em **Artigo** para a pôr de pé. |
| Área, artigo com profundidade | Uma laje dessa profundidade, com os recortes abertos. |
| Área, artigo sem profundidade | Uma placa fina de 2" para continuar visível. |
| Contagem | Um pequeno poste em cada ponto contado. |

A altura é o campo {{ui:Altura}} de um artigo linear, e a profundidade é o campo {{ui:Profundidade}} de um artigo de área, em **Artigo** (ver [Criar artigos de medição](topic:create-items)). Altere-o, e a vista 3D atualiza-se de imediato. A nota por baixo do nome da folha diz o que a folha contém, por exemplo "Esta folha em 3D: 2 paredes, 1 laje, 3 contagens", e quantos percursos ou áreas não têm altura ou profundidade. Os cliques atravessam-na até à vista.

Os números não mudam em 3D: a área de uma parede é o seu comprimento exato vezes a altura, e o volume de uma laje é a sua área líquida (contorno menos recortes, curvas exatas) vezes a profundidade. As curvas são desenhadas como pequenos segmentos retos apenas no ecrã.

## Olhar à volta

| Ação | O que faz |
|---|---|
| Arrastar, ou arrastar com o botão do meio | Orbitar à volta da medição. |
| {{key:Shift}} + arrastar, ou arrastar com o botão direito | Deslocar a vista. |
| Roda do rato | Aproximar e afastar no ponteiro. |
| Deslize com dois dedos num trackpad | Orbitar ({{key:Shift}} desloca). Um gesto de pinça aproxima. |
| {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Esquerda}}, {{ui:Direita}}, {{ui:Inferior}} | Vistas padrão, enquadradas na medição. A vista 3D abre em {{ui:Iso}}. |
| {{ui:Perspective}} | Perspetiva ativada ou desativada (paralela quando desativada). |
| {{ui:Zoom extents}} ou {{key:F}} | A folha inteira. |
| {{ui:Sheet}} | Mostrar ou ocultar o desenho no chão. |
| O cubo de vistas, em cima à direita | Clique numa face, aresta ou canto para olhar a partir daí; arraste-o para orbitar; arraste o anel da bússola para rodar; o botão de casa volta a {{ui:Iso}}. |

O canto mostra um cubo de vistas, um pequeno ícone de eixos X, Y, Z, ou nada: escolha em {{ui:Definições}}, no separador TakeoffCraft, em **Indicador de canto** ([Definições do TakeoffCraft](topic:settings)). A folha plana não tem indicador de canto.

:::touch
Um dedo orbita; dois dedos aproximam em pinça e deslocam a vista ao mover-se. Um toque seleciona.
:::

## Paredes com espessura, base e vãos

Um artigo linear com altura fica de pé como uma tira fina. Para o ver como uma parede real, dê-lhe a sua forma em **Em 3D** nas respetivas definições:

- **Espessura da parede** (8", 0.2 m): a parede passa a ser um sólido, centrado na linha desenhada, com cantos em meia-esquadria.
- **Altura da base**: a parede começa essa distância acima do piso (um soffit, um tramo de armários altos). Os artigos de área também a têm: um teto a 9'-0".
- **Altura da verga**: um segmento deduzido (uma porta, [Deduzir uma parte de um percurso](topic:measure-linear#deduct-a-part-of-a-run)) mantém a parede acima dessa altura, para que uma porta se veja como porta. Sem ele, um segmento deduzido deixa uma falha até ao topo.

Estes valores apenas moldam a vista 3D: as quantidades (comprimento, área de parede, custos) mantêm-se como estavam.

## Empilhar os pisos

1. Abra os PDF de todos os pisos.
2. Na vista 3D, escolha {{ui:Níveis…}} e escreva a cota de cada piso, como `0` para o rés-do-chão e `12'` para o seguinte. Um campo vazio deixa uma folha de fora.
3. Escolha {{ui:Empilhar}}. Cada folha com um nível mostra a sua medição à respetiva altura; a folha no ecrã fica sob o seu próprio piso, e as outras ficam com contorno. A nota indica quantos pisos estão empilhados.

As folhas alinham-se pela posição na página, por isso isto funciona para plantas de piso desenhadas da mesma forma (o mesmo tamanho e posição de folha). Uma folha com nível mas sem escala fica de fora, e a nota diz isso. Escolha {{ui:Empilhar}} de novo para uma folha de cada vez. Os níveis ficam guardados com a medição.

## Guardar a vista 3D como imagem

Escolha {{ui:PNG}} na barra 3D para obter uma imagem da vista tal como está no ecrã (`… 3D.png`); {{key:Shift}} + clique em {{ui:PNG}} torna-a duas vezes maior (`… 3D@2x.png`), para impressão.

## Guardar a vista 3D como modelo

Escolha {{ui:GLB}} na barra 3D. Obtém um ficheiro `.glb` (glTF, binário) do que a vista mostra — o piso no ecrã, ou todos os pisos empilhados — que outros programas 3D abrem: um objeto por marca, com o nome do seu artigo, na cor do artigo, em metros e com Y para cima. A própria folha e os contornos não estão incluídos.

## Selecionar uma marca a partir da 3D

Clique numa parede, laje, placa ou poste. A sua marca passa a ser a marca selecionada, exatamente como se a tivesse clicado na folha: aparece em **Marca selecionada**, o seu artigo passa a ser o atual, e a barra de estado indica o seu comprimento e altura, ou a sua área, profundidade e jardas cúbicas. {{key:Shift}} + clique acrescenta marcas à seleção ou retira-as. {{key:Delete}} elimina as marcas selecionadas, e {{key:Mod+Z}} repõe-nas; {{key:Esc}} não deixa nenhuma selecionada. De volta à folha, as mesmas marcas continuam selecionadas.

:::tip
No tema Modelo, a folha no chão escurece como a vista plana.
:::
