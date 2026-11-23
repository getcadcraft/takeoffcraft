---
title: Levantar quantitativos de um modelo de edifício
summary: Abra o modelo IFC do arquiteto, veja-o em 3D, escolha paredes, lajes, portas e o restante por tipo, material, camada ou tamanho, e leve suas contagens, comprimentos, áreas e volumes para o levantamento. Uma cópia mais nova do modelo atualiza as mesmas quantidades.
keywords: modelo, levantamento de quantitativos do modelo, vista 3D, clicar em uma peça, localizar a linha, material, camada, camadas de parede, drywall, isolamento, tamanhos de porta, tamanhos de janela, tabela de vãos, csv, 3d, bim, ifc, rvt, modelo de edifício, quantidades, paredes, lajes, portas, janelas, pilares, ambientes, por tipo, por nível, atualização, modelo mais novo, desenvolvimento de projeto
from: 8c4c12c9
---

Você não precisa esperar pelo próximo conjunto de desenhos. Quando o arquiteto enviar o modelo do edifício, abra-o aqui e tire as quantidades diretamente dele. O modelo é lido no seu computador; nada é enviado a lugar nenhum.

## Passos

1. Escolha {{ui:Modelo}} na barra de ferramentas e selecione o arquivo `.ifc` do modelo, ou abra-o com {{ui:Abrir plantas}} como qualquer outro arquivo.
2. {{ui:Levantamento de quantitativos do modelo}} abre com uma linha por categoria e tipo: paredes por tipo de parede, lajes por tipo de laje, portas por tipo de porta, e assim por diante. Cada linha mostra sua contagem e a unidade em que aquela categoria é medida.
3. Defina {{ui:Agrupar por}} como {{ui:Categoria}} para um total rápido, ou como {{ui:Categoria, tipo e nível}} para separar cada tipo por pavimento.
4. Desmarque as linhas que você não quer. {{ui:Localizar}} restringe a lista. Desmarcar uma linha também oculta as suas peças na imagem 3D.
5. Dê ao modelo um {{ui:Nome do modelo}} que você vai manter durante todo o trabalho, por exemplo o nome do projeto.
6. Escolha {{ui:Adicionar ao levantamento}}. Cada quantidade vira uma quantidade digitada na lista de itens. Dê nome, preço e anexe composições como em qualquer outro item.

## Ver o modelo em 3D

{{ui:Mostrar o modelo em 3D}} desenha o modelo acima da tabela, com uma cor para cada linha (o quadrado de cor ao lado do nome da linha). Arraste para girar, segure {{key:Shift}} e arraste para mover, use a roda para dar zoom, e escolha {{ui:Ajustar}} ou {{ui:Redefinir}} para voltar.

- **Clique em uma peça** na imagem e a linha dela é selecionada na tabela, com todas as peças daquela linha iluminadas e o restante pálido. Clique na mesma peça de novo e, se ela estiver em várias linhas (uma parede nas suas camadas), a linha seguinte é selecionada.
- **Clique em uma linha** na tabela para iluminar as peças dela. Clique de novo, ou clique em um espaço vazio da imagem, para limpar.
- Os ambientes não são desenhados, porque o volume de um ambiente esconderia o edifício.
- Um modelo muito grande mantém apenas uma caixa para algumas peças, para caber na memória; o painel diz quantas. Os números não mudam.

Se este computador não puder desenhar em 3D, a tabela funciona como antes.

## Agrupar por material, camada ou tamanho

{{ui:Agrupar por}} tem mais três opções:

- {{ui:Categoria e material}}: uma parede, laje ou cobertura feita de camadas dá a cada material de camada a sua própria linha, para que drywall, montantes e isolamento possam ter preço separado. Uma parte do edifício com um só material recebe a linha desse material, e uma parte sem nenhum material fica em uma linha chamada "Sem material definido".
- {{ui:Categoria e camada}}: o mesmo, com a espessura da camada na linha ("Isolamento, 100 mm").
- {{ui:Categoria, tipo e tamanho de porta ou janela}}: portas e janelas são separadas pela largura e altura (por exemplo 3'-0" × 6'-8" ou 914 × 2,032 mm).

Para uma camada, a área é a face própria da parede (ou a área em planta ou de superfície da laje ou da cobertura), e o volume é essa área vezes a espessura da camada. A nota da linha diz quantos números vieram de uma camada. As camadas de uma parede somam o volume que o modelo informa para ela.

## Salvar as linhas ou os vãos como CSV

{{ui:Salvar linhas como CSV}} salva as linhas que você marcou, com as unidades em cada cabeçalho, para uma planilha. {{ui:Salvar tabela de vãos como CSV}} (somente quando o modelo tem portas ou janelas) salva cada porta e janela por tipo, nível e tamanho, com a sua contagem.

## O que é medido

| Categoria | Quantidades |
|---|---|
| Paredes | contagem, comprimento, área de parede (uma face, vãos descontados), volume |
| Pisos, lajes, forros e outros revestimentos | contagem, área em planta, volume |
| Coberturas | contagem, área em planta, superfície da cobertura, volume |
| Sapatas | contagem, área em planta, volume |
| Pilares, vigas e barras | contagem, comprimento ao longo da barra, volume |
| Guarda-corpos, tubulações, dutos e percursos de cabos | contagem, comprimento |
| Escadas | contagem, volume |
| Ambientes | contagem, área de piso, volume |
| Portas, janelas e todo o resto | contagem |

Quando o autor do modelo informou uma quantidade no arquivo, esse número é usado. Caso contrário, o número é medido a partir da forma do elemento. Cada quantidade guarda uma nota dizendo qual foi o caso e quantos elementos deram um número.

:::note
Um comprimento de parede medido pela forma vai de ponta a ponta, então duas paredes que se encontram em um canto incluem ambas o canto. Um volume precisa de uma forma fechada: um elemento cuja forma não é fechada é contado e não dá volume. Um elemento de parede curvo ou de canto é medido como metade de todas as suas faces verticais, e a nota diz isso.
:::

## Quando chega um modelo mais novo

Abra o arquivo mais novo e digite o mesmo {{ui:Nome do modelo}}. Antes de adicionar qualquer coisa, o painel diz quantas quantidades são novas, quantas mudaram e de quanto para quanto, e quais quantidades da cópia anterior não estão mais no modelo. Escolha {{ui:Adicionar ao levantamento}}: as quantidades alteradas recebem os novos números, e os seus nomes, taxas, perda e composições permanecem. Quantidades que saíram do modelo mantêm os números antigos; remova-as você mesmo se o projeto as eliminou.

Tipo e nível são como uma quantidade é reconhecida. Se o arquiteto renomear um tipo de parede, ela chega como uma nova quantidade, e a antiga aparece como removida.

## Arquivos que este lê

Arquivos IFC (IFC2x3, IFC4 e IFC4.3). Um arquivo IFC com estradas, ferrovias ou pontes ainda traz suas quantidades de infraestrutura diretamente, como antes.

O TakeoffCraft não lê arquivos `.rvt` nesta versão. Se o arquiteto trabalha no Revit, peça uma exportação IFC do modelo (Arquivo, Exportar, IFC) e abra essa.

Um modelo pode trazer até 500 quantidades de uma vez. Se houver mais, desmarque linhas ou agrupe por categoria.
