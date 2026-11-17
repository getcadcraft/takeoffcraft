---
title: Memória de preços dos seus trabalhos anteriores
summary: O TakeoffCraft guarda as taxas que você usou em levantamentos anteriores, somente neste computador, para que um novo levantamento possa começar com o que você pagou da última vez. Veja, use, esqueça.
keywords: memória de preços, preços, lembrar preços, último trabalho, trabalhos anteriores, preço típico, mediana, taxas, sem preço, repreçar, aprender com um levantamento anterior, esquecer, biblioteca
from: 7279f1a1
---

{{ui:Prices}} na barra de ferramentas (o cifrão) abre o que o TakeoffCraft guarda sobre os preços que você usou. É uma lista simples: para cada nome de item, as taxas dos seus últimos trabalhos. Ela fica guardada neste navegador (no Studio, na sua própria visualização web), junto da biblioteca de preços, nunca dentro de um arquivo de levantamento, e nada é enviado para lugar nenhum. Não é um modelo treinado.

## O que é guardado

Quando você salva um levantamento, cada item que tem preço e é usado (tem uma marca, ou uma quantidade digitada acima de zero) é guardado sob o seu nome e tipo: taxa de material, taxa de mão de obra, perda e unidade. Um trabalho são os arquivos de planta de onde o levantamento foi feito, então salvar de novo o mesmo levantamento substitui os próprios preços, em vez de acrescentar outro trabalho. Os últimos 12 trabalhos são mantidos para cada nome.

Para começar com seus trabalhos mais antigos, escolha {{ui:Learn from a past takeoff…}} e selecione um levantamento salvo (.json). Os itens dele que têm preço e são usados são guardados da mesma forma.

Os nomes coincidem quando suas palavras coincidem, independentemente de maiúsculas ou pontuação ("2x4 Stud, 8 ft" e "2x4 stud 8 FT" são iguais). As mesmas palavras para outro tipo de item (um item linear e um item de contagem) não são o mesmo preço.

## Usar em um novo levantamento

1. Crie os itens do novo levantamento.
2. Escolha {{ui:Prices}}. Em {{ui:This takeoff}} você vê cada item que tem um preço lembrado, o que tem nele agora, as taxas do último trabalho, as taxas típicas (o meio dos trabalhos lembrados) e a faixa.
3. Escolha {{ui:Use last}} ou {{ui:Use typical}} em um item, ou {{ui:Price N unpriced items from memory}} para preencher, a partir do último trabalho, todos os itens que ainda não têm preço.

Cada uso é um passo: {{key:Ctrl+Z}} o desfaz. Um item que só tem um nome parecido (um nome contido no outro) informa isso, e os botões usam as taxas do nome parecido. Um preço lembrado por unidade nunca é aplicado a um item por pé: a caixa de diálogo informa que as unidades são diferentes e não altera o item.

## Ver, alterar, esquecer

{{ui:Everything remembered}} lista todos os nomes com suas taxas e o número de trabalhos. O botão de lixeira esquece um nome; {{ui:Clear all prices}} esquece todos. Desligue {{ui:Remember my prices when I save a takeoff}} para parar de guardar; o que já está lá permanece até você esquecer. Seus levantamentos e a biblioteca de preços nunca são alterados.

## Com o seu assistente

Se você permitir assistentes nas Configurações, eles podem ler o que está guardado para os itens do levantamento (prices_list) e precificar itens a partir dele (prices_apply, que pode visualizar antes). É a mesma lista da caixa de diálogo.
