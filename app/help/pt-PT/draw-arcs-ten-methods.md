---
title: Desenhar arcos com dez métodos
summary: Escolha como um arco é desenhado: três pontos, ou início, centro, fim, ângulo, comprimento, direção ou raio.
keywords: arco, arcos, curva, parede curva, 3 pontos, raio, ângulo, comprimento da corda, direção, centro, início, fim, método do arco
from: 5e3e0db6
---

## O que vai fazer

Desenhar uma aresta curva num troço linear, numa área ou num recorte, usando o método de arco que corresponde às dimensões que tem.

## Passos

1. Comece um troço, um contorno ou um recorte e coloque o ponto onde a curva começa.
2. Ative {{ui:Arco}} na barra de ferramentas ou prima {{key:R}}.
3. Abra {{ui:Método do arco}} na barra da folha. Só aparece enquanto Arco está ativo. Escolha 3 pontos, Início, Centro, Fim, Início, Centro, Ângulo, Início, Centro, Comprimento, Início, Fim, Ângulo, Início, Fim, Direção, Início, Fim, Raio, Centro, Início, Fim, Centro, Início, Ângulo ou Centro, Início, Comprimento.
4. Siga a barra de estado. Ela indica o que o arco espera: o seu centro, ponto final, ângulo, comprimento, direção ou raio. Clique num ponto ou escreva o número (ângulo, comprimento, raio e direção).
5. Quando a última entrada é dada, o arco é acrescentado ao troço. {{key:Esc}} cancela o arco, {{key:Backspace}} retira o último passo, e {{key:R}} desativa o arco.

## Notas

- Um arco é recusado, com uma mensagem na barra de estado, quando os seus pontos coincidem ou estão em linha reta, ou quando o raio não consegue alcançar o ponto final.
- O comprimento do arco é exato, e os ficheiros antigos abrem da mesma forma. Mais: [Medir troços lineares](topic:measure-linear#arcs-and-curved-walls).
