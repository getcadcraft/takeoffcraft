---
title: Desenhar arcos com dez métodos
summary: Escolha como um arco é desenhado: por três pontos, ou por início, centro, fim, ângulo, comprimento, direção ou raio.
keywords: arco, arcos, curva, parede curva, 3 pontos, raio, ângulo, comprimento da corda, direção, centro, início, fim, método do arco
from: 5e3e0db6
---

## O que você vai fazer

Desenhar uma borda curva em um trecho linear, em uma área ou em um recorte, usando o método de arco que corresponde às dimensões que você tem.

## Passos

1. Comece um trecho, um contorno ou um recorte e posicione o ponto onde a curva começa.
2. Ative {{ui:Arco}} na barra de ferramentas, ou pressione {{key:R}}.
3. Abra {{ui:Método do arco}} na barra da folha. Ele só aparece enquanto Arco está ativo. Escolha entre 3 pontos, Início, Centro, Fim, Início, Centro, Ângulo, Início, Centro, Comprimento, Início, Fim, Ângulo, Início, Fim, Direção, Início, Fim, Raio, Centro, Início, Fim, Centro, Início, Ângulo ou Centro, Início, Comprimento.
4. Acompanhe a barra de status. Ela diz o que o arco aguarda: seu centro, ponto final, ângulo, comprimento, direção ou raio. Clique em um ponto, ou digite o número (ângulo, comprimento, raio e direção).
5. Quando a última entrada for dada, o arco é adicionado ao trecho. {{key:Esc}} cancela o arco, {{key:Backspace}} desfaz o último passo dele, e {{key:R}} desativa Arco.

## Notas

- Um arco é recusado, com uma mensagem na barra de status, quando seus pontos coincidem ou estão alinhados, ou quando o raio não consegue alcançar o ponto final.
- Seu comprimento é o comprimento exato do arco, e arquivos antigos abrem do mesmo modo. Mais: [Medir trechos lineares](topic:measure-linear#arcs-and-curved-walls).
