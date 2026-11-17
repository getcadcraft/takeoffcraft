---
title: Terraplenagem e cotas de nível
summary: Marque cotas de nível em uma planta do terreno, envie-as ao CivilCraft para a superfície e para corte e aterro, e obtenha aqui quantitativos simples de escavação.
keywords: terraplenagem, escavação, corte, aterro, corte e aterro, terraplenagem, cota de nível, cotas, topografia, superfície, triangulação, civilcraft, pontos, pnezd, vala
from: a898e508
---

TakeoffCraft mede o que está desenhado em uma folha. A terraplenagem precisa de uma superfície do terreno, por isso ela é compartilhada com o CivilCraft, que cria superfícies a partir de pontos, as regulariza e calcula corte, aterro e transporte.

## Escavação simples aqui

Para uma área escavada em uma única profundidade, um item de área com **profundidade** basta: o volume é área × profundidade. O [pacote do serviço](topic:trade-packs) de empreiteiro geral tem um item de escavação em massa (volume no corte, volume solto e viagens de caminhão) e um item de vala de utilidades (escavação, berço e reaterro por comprimento e profundidade).

## Cotas de nível para o CivilCraft

1. Defina a escala da folha do terreno.
2. Crie um item de **Contagem**, por exemplo "Terreno existente", e clique em cada cota de nível na folha.
3. Selecione uma marca e digite a sua {{ui:Cota de nível}} no painel da marca selecionada: `102.5`, `102'-6"` ou `31.24 m`. Cotas negativas e zero são aceitas.
4. Abra o menu {{ui:Exportar}} e escolha {{ui:Cotas de nível}}. Você recebe um arquivo de pontos (`.csv`) com as colunas Point, Northing, Easting, Elevation e Description, uma linha por ponto marcado da folha aberta.
5. Abra esse arquivo no CivilCraft (veja [Importar pontos](app:civilcraft/import-points)). Ele cria a superfície a partir dos pontos ([Criar uma superfície](app:civilcraft/build-surface)); depois, compara superfícies e calcula corte e aterro ([Volumes](app:civilcraft/volumes)).

Northing e Easting são as próprias coordenadas da folha, em pés, medidas a partir do canto da página na escala dela: distâncias e volumes entre os pontos são corretos, mas não são as coordenadas de levantamento do seu terreno. Converta-as para as coordenadas do terreno no CivilCraft quando precisar.

:::note
Pontos de folhas diferentes não compartilham coordenadas, por isso a exportação leva somente a folha aberta. As cotas são salvas com o levantamento e são levadas por copiar e colar.
:::

## Corte e aterro do CivilCraft

A terraplenagem do CivilCraft volta como dois itens que você pode orçar:

1. No CivilCraft, regularize suas plataformas e corredores e depois escolha {{ui:Enviar para TakeoffCraft}} em **Terraplenagem** ([Volumes de terraplenagem](app:civilcraft/volumes)). Ele salva um arquivo de quantitativos (`.quantities.json`).
2. No TakeoffCraft, abra-o com {{ui:Abrir levantamento}}, ou solte-o sobre o aplicativo. Seu levantamento continua aberto: o arquivo adiciona **Terraplenagem: corte** e **Terraplenagem: aterro** como [quantidades digitadas](topic:create-items#typed-quantities-no-drawing), em jardas cúbicas (CY) para um projeto em pés, ou em metros cúbicos (m³) para um projeto em metros. É uma única etapa: {{key:Mod+Z}} desfaz isso.
3. Renomeie os itens e defina perda, preços e composições como quiser.

Quando o projeto mudar, envie de novo a partir do CivilCraft e abra o novo arquivo: os mesmos dois itens recebem as novas quantidades. Seus nomes, preços, perdas e composições permanecem como você definiu. Se a unidade do projeto mudou, a barra de status informa isso: confira os preços. Um arquivo de outro projeto do CivilCraft adiciona seus próprios dois itens.

As quantidades são volumes no corte, como o CivilCraft os mediu (método da malha): sem contração nem expansão. Adicione isso como perda, ou com uma fórmula como `Q * 1.25` para volume solto. O editor de itens mostra de onde veio cada um e quando; a coluna de notas do orçamento também informa isso.

:::note
O arquivo de quantitativos é JSON simples (`"format": "cadcraft-quantities"`), então um script ou outro programa também pode gerar um: um nome de aplicativo, um projeto e itens com uma chave, um nome, uma unidade e uma quantidade.
:::
