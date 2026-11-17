---
title: Medir a partir de um desenho
summary: Obtenha comprimentos e áreas das próprias linhas, arcos, polilinhas e hachuras do desenho, escolhendo-os, com arcos e furos exatos, em vez de traçar por cliques.
keywords: medir desenho, geometria, polilinha, arco, círculo, hachura, bulge, comprimento exato, área exata, escolher, janela, traçar, a partir do cad, linear, área
from: fd734246
---

{{ui:Medir desenho}} na barra da folha de uma folha DWG ou DXF usa os objetos próprios do desenho como marcas, então você não precisa traçá-los com cliques. O comprimento de uma polilinha, o comprimento de um arco, a área de um círculo e a área de uma hachura com seus furos saem exatos, pela mesma aritmética que o levantamento usa para toda marca.

## Levar objetos como um item linear ou de área

1. Crie ou clique num item **linear** ou de **área** em {{ui:Itens}}. A folha precisa de escala.
2. Escolha {{ui:Medir desenho}}.
3. Clique nos objetos da folha para escolhê-los, ou arraste uma janela em volta deles: tudo que estiver totalmente dentro dela é escolhido. {{key:Shift}} adiciona uma janela ao que já está escolhido; clique de novo num objeto escolhido para desfazer a escolha. A barra mostra o total: "6 trechos: 108'-9 1/8" no total."
4. Escolha o botão de adicionar, que indica a quantidade e o item, como {{ui:Adicionar 6 a Edge}} (ou pressione {{key:Enter}}). Cada objeto vira uma marca do item, em uma única etapa de desfazer. {{key:Esc}} limpa o que você escolheu.

## O que cada tipo de item recebe

- Um item **linear** recebe linhas, arcos, polilinhas, círculos e splines pelo comprimento. Uma forma fechada conta pelo perímetro. Uma hachura fica de fora: ela tem área, não comprimento, e a barra avisa.
- Um item de **área** recebe formas fechadas: polilinhas fechadas, círculos, sólidos 2D e hachuras com seus furos. Trechos abertos ficam de fora, e a barra avisa.

## Exatos e quase exatos

Linhas, arcos (qualquer bulge), polilinhas com bulges e círculos são exatos: os comprimentos e as áreas usam o raio e a abertura do arco, não uma imagem dele. Elipses, splines e hachuras cujo contorno é feito de arestas são medidas em cordas de um grau ou menos, o que fica dentro de um centésimo por cento para elipses e de um décimo por cento para o restante; a barra diz quantos dos objetos escolhidos são curvas desse tipo.

## De onde ele tira cada coisa

- **Modelo**: objetos no espaço modelo. **Um layout**: as próprias linhas dele e os objetos do modelo dentro de uma viewport, escalados por ela. Um objeto que cruza a borda de uma viewport não é oferecido (sairia cortado na impressão); um objeto que duas viewports mostram é tomado uma vez.
- Somente as camadas que a folha mostra. Blocos são contados, não medidos: veja [Contar a partir de um desenho](topic:count-from-a-drawing). Polilinhas 3D, malhas, sólidos e regiões não são oferecidos.
