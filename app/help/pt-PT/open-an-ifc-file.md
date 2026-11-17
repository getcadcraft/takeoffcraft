---
title: Trazer quantidades de um ficheiro IFC 4.3
summary: Abra um ficheiro IFC 4.3 de uma estrada, linha férrea, ponte ou obra de movimentos de terras e obtenha uma contagem por classe, com os comprimentos, áreas e volumes que o ficheiro indica, como quantidades tipificadas.
keywords: ifc, ifc4x3, ifc 4.3, estrada, linha férrea, ponte, pavimento, lancil, camada, movimentos de terras, aparelho de apoio, infraestrutura, quantidades, bim, civil, quantidades tipificadas
from: 6b08c2c4
---

Um ficheiro IFC 4.3 pode conter estradas, linhas férreas, pontes, obras marítimas e as partes de que são feitas: pavimentos, camadas, lancis, carris, movimentos de terras, aparelhos de apoio, estacas e outras. O TakeoffCraft lê esses elementos e transforma-os em quantidades tipificadas que pode orçamentar.

## Abrir o ficheiro

1. Escolha {{ui:Abrir plantas}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+O}}.
2. Selecione o ficheiro IFC (pode selecioná-lo juntamente com PDF), ou largue-o no TakeoffCraft.

Cria-se uma quantidade tipificada para cada classe e tipo predefinido, por exemplo "Pavimento (flexível): contagem", e, quando o ficheiro as indica, "comprimento" em m, "área" em m² e "volume" em m³. A nota de cada artigo indica quantos elementos foram contados e quantos não indicaram quantidade. Abrir um ficheiro mais recente com o mesmo nome atualiza essas quantidades em vez de acrescentar mais.

## O que não faz

- Lê os conjuntos de quantidades (IfcElementQuantity) que o ficheiro contém. Não mede as formas 3D, por isso um elemento sem conjunto de quantidades é contado, mas não acrescenta comprimento, área ou volume.
- Só são lidas as classes de infraestrutura do IFC 4.3. Um ficheiro de edifício (paredes, portas, lajes) não é convertido aqui em quantidades; um ficheiro que não é IFC 4.3 indica-o e não traz nada.
- As unidades são as do próprio ficheiro, convertidas para metros.
