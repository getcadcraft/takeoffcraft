---
title: Memória de preços dos seus trabalhos anteriores
summary: O TakeoffCraft guarda os preços unitários que usou em medições anteriores, apenas neste computador, para que uma nova medição possa começar pelo que pagou da última vez. Consulte-os, use-os, esqueça-os.
keywords: memória de preços, preços, memorizar preços, último trabalho, trabalhos anteriores, preço habitual, mediana, preços unitários, sem preço, recalcular, aprender com uma medição anterior, esquecer, biblioteca
from: 7279f1a1
---

{{ui:Preços}} na barra de ferramentas (o símbolo do dólar) abre o que o TakeoffCraft guarda sobre os preços que usou. É uma lista simples: para cada nome de artigo, os preços dos seus últimos trabalhos. Fica guardada neste navegador (no Studio, na sua própria vista web), ao lado da Biblioteca de preços, nunca dentro de um ficheiro de medição, e nada é enviado para lado nenhum. Não é um modelo treinado.

## O que é guardado

Quando guarda uma medição, cada artigo que tem um preço e é usado (tem uma marca, ou uma quantidade tipificada acima de zero) fica guardado pelo seu nome e tipo: preço de material, preço de mão de obra, desperdício e unidade. Um trabalho são os ficheiros de plantas de que é feita a medição, por isso guardar de novo a mesma medição substitui os seus próprios preços em vez de acrescentar outro trabalho. São guardados os últimos 12 trabalhos de cada nome.

Para começar com os seus trabalhos mais antigos, escolha {{ui:Aprender com uma medição anterior…}} e selecione uma medição guardada (.json). Os seus artigos usados e com preço ficam guardados da mesma forma.

Os nomes coincidem quando as suas palavras coincidem, seja qual for a maiúscula ou a pontuação ("2x4 Stud, 8 ft" e "2x4 stud 8 FT" são o mesmo). A mesma palavra para outro tipo de artigo (um artigo linear e um artigo de contagem) não é o mesmo preço.

## Usar numa nova medição

1. Crie os artigos da nova medição.
2. Escolha {{ui:Preços}}. Em {{ui:Esta medição}} vê todos os artigos que têm um preço guardado, o que tem agora, os preços do último trabalho, os preços habituais (o meio dos trabalhos guardados) e a gama.
3. Escolha {{ui:Usar o último}} ou {{ui:Usar o habitual}} num artigo, ou escolha atribuir preço a N artigos sem preço a partir da memória para preencher cada artigo que ainda não tem preço com o preço do último trabalho.

Cada utilização é um passo: {{key:Ctrl+Z}} anula-a. Um artigo que só tem um nome parecido (um nome dentro do outro) indica-o, e os botões usam os preços do nome parecido. Um preço guardado por cada nunca é aplicado a um artigo por pé: a janela indica que as unidades são diferentes e não lhe toca.

## Ver, alterar, esquecer

{{ui:Tudo o que está memorizado}} lista cada nome com os seus preços e o número de trabalhos. O botão do lixo esquece um nome; {{ui:Limpar todos os preços}} esquece todos. Desligue {{ui:Memorizar os meus preços ao guardar uma medição}} para deixar de memorizar; o que já lá está fica até o esquecer. As suas medições e a Biblioteca de preços nunca são alteradas.

## Com o seu assistente

Se permitir assistentes nas Definições, eles podem ler o que está memorizado para os artigos da medição (prices_list) e atribuir-lhes preços a partir daí (prices_apply, que pode pré-visualizar primeiro). É a mesma lista que a janela.
