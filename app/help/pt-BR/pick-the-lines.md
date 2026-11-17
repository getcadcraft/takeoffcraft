---
title: Selecionar as linhas do PDF
summary: Clique em uma linha de um PDF vetorial para medir todo o seu trajeto conectado, ou clique dentro de um contorno fechado para obter a área, com a tolerância de vão exibida e um desfazer por segmento.
keywords: trajeto, selecionar, linhas, conectado, trecho inteiro, traçar, contorno, perímetro, vão, tolerância, fechar vão, segmentos, tab, vetorial, área a partir de linhas, p
from: c22526ae
---

Em um PDF vetorial, as paredes e as bordas são linhas reais. {{ui:Path}} ({{key:P}}) as usa como estão desenhadas: um clique em uma linha mede tudo o que está unido a ela, de ponta a ponta, para que você não precise traçar uma parede clicando em cada canto. A folha precisa de uma escala. Uma página digitalizada não tem linhas para selecionar; use [Linear](topic:measure-linear) ou [Área](topic:measure-areas) nela.

## Selecionar um trajeto ou um contorno

1. Escolha {{ui:Path}}. A linha sob o ponteiro é contornada, e os outros trajetos em que ela poderia se transformar são desenhados com linhas finas.
2. Clique em uma linha: todo o trajeto conectado é selecionado. A barra sob a barra de ferramentas mostra seus segmentos, o comprimento, a tolerância de vão e quantos vãos foram fechados. Um trajeto que volta ao início é fechado e também informa seu perímetro.
3. Ou clique dentro de um contorno fechado, longe de qualquer linha: o contorno em volta desse ponto é selecionado como uma área. O menor vem primeiro; {{key:Tab}} testa o próximo maior.
4. Pressione {{key:Enter}} (ou clique com o botão direito, ou dê um duplo clique) para adicionar as marcas. Um trajeto selecionado vira uma marca de um item **linear**, e um contorno, uma marca de um item de **área**: o item ativo, se for desse tipo; senão, o mais recente desse tipo. Sem nenhum, o formulário de novo item é aberto e nada é adicionado até você pressionar {{key:Enter}} de novo. Tudo o que foi selecionado é adicionado em um único passo de desfazer.

## A tolerância de vão

Desenhistas deixam pequenos vãos onde as linhas deveriam se encontrar. Duas linhas se unem quando suas pontas estão mais próximas do que a **tolerância de vão**. Ela começa em 1.5 points na folha (mostrada em pés e polegadas na escala da folha), e um anel tracejado dessa largura segue o ponteiro e fica sobre cada ponta do trajeto sob ele. Cada vão fechado é marcado em laranja em um trajeto selecionado, e a barra os conta.

{{key:]}} alarga a tolerância, {{key:[}} a reduz. Um trajeto selecionado é unido de novo imediatamente na nova tolerância. Em uma junção, o trajeto continua em linha reta, pelo caminho que faz a menor curva, e deixa o ramo.

## Teclas

| Tecla ou ação | O que faz |
|---|---|
| Clique | Seleciona o trajeto sob o ponteiro, ou o contorno em volta dele. |
| {{key:Shift}} + clique | Adiciona outro trajeto ou contorno à seleção. |
| {{key:Tab}} | Testa o próximo trajeto sob o ponteiro, ou o próximo contorno maior. |
| {{key:Backspace}} ou {{key:Mod+Z}} | Remove o último segmento do último trajeto selecionado, um segmento por vez. Um trajeto sem segmentos restantes é removido. Sem nada selecionado, {{key:Mod+Z}} é o desfazer comum. |
| {{key:[}} e {{key:]}} | Tolerância de vão mais estreita e mais larga. |
| {{key:Enter}} | Adiciona as marcas. |
| {{key:Esc}} | Limpa a seleção. |

## Bom saber

- Uma curva no desenho é uma sequência de pequenos trechos retos, então seu comprimento fica um pouco abaixo do arco verdadeiro. Para um arco exato, meça o próprio arquivo do desenho ([Medir a partir de um desenho](topic:measure-from-a-drawing)).
- Um vão fechado conta como um salto reto por cima dele, então o perímetro de um contorno fechado o inclui.
- Só traços e preenchimentos dos próprios caminhos da página são linhas. Texto desenhado como letras e imagens não são.
