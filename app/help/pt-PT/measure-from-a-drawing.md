---
title: Medir a partir de um desenho
summary: Obtenha comprimentos e áreas a partir das próprias linhas, arcos, polilinhas e tramas do desenho, escolhendo-os, com arcos e furos exatos, em vez de os copiar com cliques.
keywords: medir desenho, geometria, polilinha, arco, círculo, trama, curvatura, comprimento exato, área exata, escolher, janela, copiar, a partir do CAD, linear, área
from: fd734246
---

{{ui:Medir desenho}} na barra da folha de uma folha DWG ou DXF usa os próprios objetos do desenho como marcas, pelo que não é preciso copiá-los com cliques. O comprimento de uma polilinha, o comprimento de um arco, a área de um círculo e a área de uma trama com os seus furos saem exatos, a partir da mesma aritmética que a medição usa para todas as marcas.

## Tomar objetos como um artigo linear ou de área

1. Crie ou clique num artigo **linear** ou de **área** em {{ui:Artigos}}. A folha precisa de uma escala.
2. Escolha {{ui:Medir desenho}}.
3. Clique nos objetos da folha para os escolher, ou arraste uma janela à volta deles: tudo o que estiver inteiramente dentro é escolhido. {{key:Shift}} acrescenta uma janela ao que está escolhido; clique de novo num objeto escolhido para o retirar. A barra mostra o total: «6 percursos: 108'-9 1/8" no total.»
4. Escolha o botão de adicionar, que indica o número e o artigo, como {{ui:Adicionar 6 a Edge}} (ou prima {{key:Enter}}). Cada objeto torna-se uma marca do artigo, num único passo de anulação. {{key:Esc}} limpa o que escolheu.

## O que cada tipo de artigo recebe

- Um artigo **linear** recebe linhas, arcos, polilinhas, círculos e splines pelo comprimento. Uma forma fechada conta pelo perímetro. Uma trama fica de fora: tem uma área, e não um comprimento, e a barra indica-o.
- Um artigo de **área** recebe formas fechadas: polilinhas fechadas, círculos, sólidos 2D e tramas com os seus furos. Percursos abertos ficam de fora, e a barra indica-o.

## Exato e quase exato

Linhas, arcos (com qualquer curvatura), polilinhas com curvaturas (bulge) e círculos são exatos: os comprimentos e as áreas usam o raio e a amplitude do arco, e não uma imagem dele. Elipses, splines e tramas cujo contorno é feito de arestas são medidas em cordas de um grau ou mais finas, o que fica dentro de uma centésima de por cento para elipses e de uma décima para as restantes; a barra indica quantos dos objetos escolhidos são curvas deste tipo.

## De onde vem cada coisa

- **Modelo**: objetos no espaço modelo. **Um layout**: as suas próprias linhas, e os objetos do modelo dentro de um viewport, à escala desse viewport. Um objeto que atravessa a borda de um viewport não é oferecido (sairia cortado na impressão); um objeto que dois viewports mostram é considerado uma só vez.
- Apenas as camadas que a folha mostra. Os blocos são contados, não medidos: ver [Contar a partir de um desenho](topic:count-from-a-drawing). Polilinhas 3D, malhas, sólidos e regiões não são oferecidos.
