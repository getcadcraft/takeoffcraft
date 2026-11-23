---
title: Tirar quantidades de um modelo do edifício
summary: Abrir o modelo IFC do arquiteto, ver em 3D, escolher paredes, pisos, portas e o resto por tipo, material, camada ou dimensão, e trazer as suas contagens, comprimentos, áreas e volumes para a medição. Uma cópia mais recente do modelo atualiza as mesmas quantidades.
keywords: modelo, medição do modelo, vista 3D, clicar numa peça, encontrar a linha, material, camada, camadas de parede, pladur, isolamento, dimensões de portas, dimensões de janelas, mapa de vãos, csv, 3d, bim, ifc, rvt, modelo do edifício, quantidades, paredes, pisos, portas, janelas, pilares, compartimentos, por tipo, por nível, atualizar, modelo mais recente, desenvolvimento de projeto
from: 8c4c12c9
---

Não é preciso esperar pelo próximo conjunto de desenhos. Quando o arquiteto enviar o modelo do edifício, abra-o aqui e tire as quantidades diretamente dele. O modelo é lido no seu computador; nada é enviado para lado nenhum.

## Passos

1. Escolha {{ui:Model}} na barra de ferramentas e selecione o ficheiro `.ifc` do modelo, ou abra-o com {{ui:Open plans}} como qualquer outro ficheiro.
2. {{ui:Model takeoff}} abre com uma linha por categoria e tipo: paredes por tipo de parede, pisos por tipo de piso, portas por tipo de porta, e assim por diante. Cada linha mostra a sua contagem e a unidade em que essa categoria é medida.
3. Defina {{ui:Group by}} como {{ui:Category}} para um total rápido, ou como {{ui:Category, type and level}} para separar cada tipo por piso.
4. Desmarque as linhas que não são necessárias. {{ui:Find}} restringe a lista. Desmarcar uma linha também oculta as suas peças na imagem 3D.
5. Atribua ao modelo um {{ui:Model name}} que se mantenha durante todo o trabalho, por exemplo o nome do projeto.
6. Escolha {{ui:Add to the takeoff}}. Cada quantidade torna-se uma quantidade tipificada na lista de artigos. Atribua-lhe um nome, um preço e preços compostos, como a qualquer outro artigo.

## Ver o modelo em 3D

{{ui:Show the model in 3D}} desenha o modelo acima da tabela, com uma cor para cada linha (o quadrado de cor ao lado do nome da linha). Arraste para o rodar, mantenha {{key:Shift}} premida e arraste para o deslocar, use a roda para ampliar, e escolha {{ui:Fit}} ou {{ui:Reset}} para voltar.

- **Clique numa peça** na imagem e a sua linha é selecionada na tabela, com todas as peças dessa linha iluminadas e as restantes esmaecidas. Clique de novo na mesma peça e, se ela estiver em várias linhas (uma parede nas suas camadas), é selecionada a linha seguinte.
- **Clique numa linha** da tabela para iluminar as suas peças. Clique de novo, ou clique num espaço vazio da imagem, para as limpar.
- Os compartimentos não são desenhados, porque o volume de um compartimento taparia o edifício.
- Um modelo muito grande mantém apenas uma caixa para algumas peças, para caber na memória; o painel indica quantas. Os números não mudam.

Se este computador não conseguir desenhar 3D, a tabela funciona como antes.

## Agrupar por material, camada ou dimensão

{{ui:Group by}} tem três outras opções:

- {{ui:Category and material}}: uma parede, piso ou cobertura construída em camadas dá a cada material de camada a sua própria linha, para que o pladur, os montantes e o isolamento possam ter preços separados. Uma parte do edifício com um só material fica com a linha desse material, e uma parte sem nenhum fica numa linha chamada « Sem material indicado ».
- {{ui:Category and layer}}: o mesmo, com a espessura da camada na linha (« Isolamento, 100 mm »).
- {{ui:Category, type and door or window size}}: portas e janelas são separadas pela largura e altura (por exemplo 3'-0" × 6'-8" ou 914 × 2,032 mm).

Para uma camada, a área é a própria face da parede (ou a área em planta ou de superfície do piso ou da cobertura) e o volume é essa área vezes a espessura da camada. A nota da linha indica quantos números vieram de uma camada. As camadas de uma parede somam o volume que o modelo indica para ela.

## Guardar as linhas ou os vãos em CSV

{{ui:Save rows as CSV}} guarda as linhas que marcou, com as unidades em cada cabeçalho, para uma folha de cálculo. {{ui:Save openings schedule as CSV}} (só quando o modelo tem portas ou janelas) guarda cada porta e janela por tipo, nível e dimensão, com a sua contagem.

## O que é medido

| Categoria | Quantidades |
|---|---|
| Paredes | contagem, comprimento, área de parede (uma face, com os vãos descontados), volume |
| Pisos, lajes, tetos e outros revestimentos | contagem, área em planta, volume |
| Coberturas | contagem, área em planta, superfície da cobertura, volume |
| Sapatas | contagem, área em planta, volume |
| Pilares, vigas e elementos | contagem, comprimento ao longo do elemento, volume |
| Guarda-corpos, tubagens, condutas e percursos de cabos | contagem, comprimento |
| Escadas | contagem, volume |
| Compartimentos | contagem, área do piso, volume |
| Portas, janelas e tudo o resto | contagem |

Quando o autor do modelo indicou uma quantidade no ficheiro, usa-se esse número. Caso contrário, o número é medido a partir da forma do elemento. Cada quantidade guarda uma nota que indica qual dos casos se aplica e quantos elementos deram um número.

:::note
O comprimento de uma parede medido a partir da sua forma vai de extremidade a extremidade, pelo que duas paredes que se sobrepõem num canto incluem ambas o canto. Um volume exige uma forma fechada: um elemento cuja forma não seja fechada é contado, mas não dá volume. Um elemento de parede curva ou com cantos é medido como metade de todas as suas faces verticais, e a sua nota diz isso.
:::

## Quando chega um modelo mais recente

Abra o ficheiro mais recente e escreva o mesmo {{ui:Model name}}. Antes de adicionar seja o que for, o painel indica quantas quantidades são novas, quantas mudaram e de quê para quê, e quais as quantidades da cópia anterior que já não estão no modelo. Escolha {{ui:Add to the takeoff}}: as quantidades alteradas passam a ter os novos números, e os seus nomes, taxas, desperdício e preços compostos mantêm-se. As quantidades que desapareceram do modelo mantêm os números antigos; remova-as manualmente se o projeto as tiver eliminado.

Os nomes de tipo e de nível são a forma como uma quantidade é reconhecida. Se o arquiteto mudar o nome de um tipo de parede, ela chega como uma nova quantidade, e a antiga fica listada como desaparecida.

## Ficheiros que são lidos

Ficheiros IFC (IFC2x3, IFC4 e IFC4.3). Um ficheiro IFC com estradas, vias-férreas ou pontes continua a trazer diretamente as suas quantidades de infraestrutura, como antes.

O TakeoffCraft não lê ficheiros `.rvt` nesta versão. Se o arquiteto trabalhar no Revit, peça uma exportação IFC do modelo (Ficheiro, Exportar, IFC) e abra essa.

Um modelo pode trazer até 500 quantidades de cada vez. Se houver mais, desmarque linhas ou agrupe por categoria.
