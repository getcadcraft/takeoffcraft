---
title: Trazer quantitativos de um arquivo IFC 4.3
summary: Abra um arquivo IFC 4.3 de uma estrada, ferrovia, ponte ou obra de terra e obtenha uma contagem por classe, com os comprimentos, áreas e volumes que o arquivo informa, como quantidades tipadas.
keywords: ifc, ifc4x3, ifc 4.3, estrada, ferrovia, ponte, pavimento, meio-fio, camada, terraplenagem, aparelho de apoio, infraestrutura, quantitativos, bim, civil, quantidades tipadas
from: 6b08c2c4
---

Um arquivo IFC 4.3 pode conter estradas, ferrovias, pontes, obras marítimas e as partes que as compõem: pavimentos, camadas, meios-fios, trilhos, terraplenagens, aparelhos de apoio, estacas e mais. O TakeoffCraft lê essas partes e as transforma em quantidades tipadas que você pode precificar.

## Abrir o arquivo

1. Escolha {{ui:Open plans}} no grupo {{ui:File}}, ou pressione {{key:Mod+O}}.
2. Selecione o arquivo IFC (você pode selecioná-lo junto com PDFs), ou solte-o no TakeoffCraft.

É criada uma quantidade tipada para cada classe e tipo predefinido, por exemplo "Pavimento (flexível): contagem" e, quando o arquivo as informa, "comprimento" em m, "área" em m² e "volume" em m³. A nota de cada item diz quantos elementos foram contados e quantos não informaram quantidade. Abrir um arquivo mais novo com o mesmo nome atualiza essas quantidades, em vez de adicionar mais.

## O que não faz

- Lê os conjuntos de quantidades (IfcElementQuantity) que o arquivo traz. Não mede as formas 3D; por isso, um elemento sem conjunto de quantidades é contado, mas não acrescenta comprimento, área ou volume.
- Só as classes de infraestrutura do IFC 4.3 são lidas. Um arquivo de edificação (paredes, portas, lajes) não é convertido em quantidades aqui; um arquivo que não é IFC 4.3 informa isso e não traz nada.
- As unidades são as do próprio arquivo, convertidas para metros.
