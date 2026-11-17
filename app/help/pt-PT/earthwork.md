---
title: Terraplenagem e cotas altimétricas
summary: Marque cotas altimétricas numa planta do terreno, envie-as para o CivilCraft para a superfície e para a escavação e o aterro, e obtenha aqui quantidades simples de escavação.
keywords: terraplenagem, escavação, aterro, escavação e aterro, modelação do terreno, cota altimétrica, cotas, topografia, superfície, triangulação, civilcraft, pontos, pnezd, vala
from: a898e508
---

O TakeoffCraft mede o que está desenhado numa folha. A terraplenagem precisa de uma superfície do terreno, por isso é partilhada com o CivilCraft, que cria superfícies a partir de pontos, modela-as e calcula a escavação, o aterro e o diagrama de Brückner.

## Escavação simples aqui

Para uma implantação escavada até uma só profundidade, basta um artigo de área com **profundidade**: o volume é área × profundidade. O [pacote da especialidade](topic:trade-packs) de empreiteiro geral tem um artigo de escavação geral (volume no terreno, volume solto e cargas de camiões) e um artigo de vala de redes (escavação, camada de assentamento e reaterro por comprimento e profundidade).

## Cotas altimétricas para o CivilCraft

1. Defina a escala da folha do terreno.
2. Crie um artigo de **Contagem**, por exemplo "Terreno existente", e clique em cada cota altimétrica na folha.
3. Selecione uma marca e introduza a sua {{ui:Cota}} no painel da marca selecionada: `102.5`, `102'-6"` ou `31.24 m`. Cotas negativas e nulas são aceites.
4. Abra o menu {{ui:Exportar}} e escolha {{ui:Cotas altimétricas}}. Obtém-se um ficheiro de pontos (`.csv`) com Point, Northing, Easting, Elevation e Description, uma linha por ponto marcado da folha aberta.
5. Abra esse ficheiro no CivilCraft (veja [Importar pontos](app:civilcraft/import-points)). O CivilCraft cria a superfície a partir dos pontos ([Criar uma superfície](app:civilcraft/build-surface)); a partir daí compara superfícies e apresenta a escavação e o aterro ([Volumes](app:civilcraft/volumes)).

Northing e Easting são as coordenadas próprias da folha, em pés, medidas a partir do canto da página à sua escala: as distâncias e os volumes entre os pontos estão corretos, mas não são as coordenadas de levantamento do seu terreno. Desloque-as para as coordenadas do terreno no CivilCraft quando for necessário.

:::note
Os pontos de folhas diferentes não partilham coordenadas, por isso a exportação inclui apenas a folha aberta. As cotas são guardadas com a medição e mantêm-se ao copiar e colar.
:::

## Escavação e aterro a partir do CivilCraft

A terraplenagem do CivilCraft volta como dois artigos a que pode atribuir preço:

1. No CivilCraft, modele as suas plataformas e corredores e depois escolha {{ui:Enviar para TakeoffCraft}} em **Terraplenagem** ([Volumes de terraplenagem](app:civilcraft/volumes)). Guarda-se um ficheiro de quantidades (`.quantities.json`).
2. No TakeoffCraft, abra-o com {{ui:Abrir medição}}, ou largue-o na aplicação. A sua medição mantém-se aberta: o ficheiro acrescenta **Terraplenagem: escavação** e **Terraplenagem: aterro** como [quantidades introduzidas](topic:create-items#typed-quantities-no-drawing) em jardas cúbicas (CY) para um projeto em pés, ou em metros cúbicos (m³) para um projeto em metros. É um passo só: {{key:Mod+Z}} anula-o.
3. Mude-lhes o nome, defina o desperdício, os preços e os preços compostos como preferir.

Quando a conceção mudar, envie de novo a partir do CivilCraft e abra o novo ficheiro: os mesmos dois artigos recebem as novas quantidades. Os seus nomes, preços, desperdício e preços compostos mantêm-se como os definiu. Se a unidade do projeto tiver mudado, a barra de estado indica-o: verifique os preços. Um ficheiro de outro projeto do CivilCraft acrescenta os seus próprios dois artigos.

As quantidades são volumes no terreno, tal como o CivilCraft os mediu (método da malha): sem contração nem empolamento. Acrescente-os como desperdício, ou com uma fórmula como `Q * 1.25` para volume solto. O editor de artigos mostra de onde vem cada um e quando; a coluna de notas do orçamento também o indica.

:::note
O ficheiro de quantidades é JSON simples (`"format": "cadcraft-quantities"`), por isso um script ou outro programa também o pode escrever: um nome de aplicação, um projeto e artigos com uma chave, um nome, uma unidade e uma quantidade.
:::
