---
title: Escolher as linhas do PDF
summary: Clique numa linha de um PDF vetorial para medir todo o percurso ligado, ou clique dentro de um contorno fechado para medir a sua área, com a tolerância de lacunas indicada e uma anulação por segmento.
keywords: percurso, escolher, traçados, linhas, ligado, troço inteiro, traçar, contorno, perímetro, lacuna, tolerância, preencher, segmentos, tabulação, vetorial, área a partir de linhas, p
from: c22526ae
---

Num PDF vetorial, as paredes e as arestas são linhas reais. {{ui:Percurso}} ({{key:P}}) toma-as tal como estão desenhadas: um clique numa linha mede tudo o que lhe está ligado, de ponta a ponta, por isso não é preciso traçar uma parede clicando nos seus cantos. A folha precisa de uma escala. Uma página digitalizada não tem linhas para escolher; use [Linear](topic:measure-linear) ou [Área](topic:measure-areas) nesse caso.

## Escolher um percurso ou um contorno

1. Escolha {{ui:Percurso}}. A linha sob o ponteiro fica com contorno, e os outros percursos que poderia formar ficam com uma linha fina.
2. Clique numa linha: todo o percurso ligado é escolhido. A barra por baixo da barra de ferramentas indica os seus segmentos, o comprimento, a tolerância de lacunas e quantas lacunas foram preenchidas. Um percurso que volta ao início é fechado e indica também o seu perímetro.
3. Ou clique dentro de um contorno fechado, longe de qualquer linha: o contorno em torno desse ponto é escolhido como área. O menor vem primeiro; {{key:Tab}} experimenta o contorno maior seguinte.
4. Prima {{key:Enter}} (ou clique com o botão direito, ou faça duplo clique) para acrescentar as marcas. Um percurso escolhido torna-se uma marca de um artigo **linear**, e um contorno uma marca de um artigo de **área**: o artigo ativo, se tiver esse tipo, senão o mais recente desse tipo. Sem nenhum, abre-se o formulário de novo artigo e nada é acrescentado até voltar a premir {{key:Enter}}. Tudo o que foi escolhido é acrescentado num só passo de anulação.

## A tolerância de lacunas

Os desenhistas deixam pequenos buracos onde as linhas deviam encontrar-se. Duas linhas juntam-se quando as suas pontas estão mais próximas do que a **tolerância de lacunas**. Começa em 1.5 pontos na folha (indicados em pés e polegadas à escala da folha), e um anel tracejado dessa largura segue o ponteiro e fica sobre cada extremidade do percurso sob ele. Cada lacuna preenchida é assinalada a laranja num percurso escolhido, e a barra conta-as.

{{key:]}} alarga a tolerância, {{key:[}} reduz. Um percurso escolhido volta a ligar-se de imediato com a nova tolerância. Numa junção, o percurso continua em frente, pelo caminho que menos se curva, e deixa o ramo.

## Teclas

| Tecla ou ação | O que faz |
|---|---|
| Clicar | Escolhe o percurso sob o ponteiro, ou o contorno à sua volta. |
| {{key:Shift}} + clique | Acrescenta outro percurso ou contorno ao que está escolhido. |
| {{key:Tab}} | Experimenta o percurso seguinte sob o ponteiro, ou o contorno maior seguinte. |
| {{key:Backspace}} ou {{key:Mod+Z}} | Retira o último segmento do último percurso escolhido, um segmento de cada vez. Um percurso sem segmentos sai. Sem nada escolhido, {{key:Mod+Z}} é a anulação normal. |
| {{key:[}} e {{key:]}} | Tolerância de lacunas mais estreita e mais larga. |
| {{key:Enter}} | Acrescenta as marcas. |
| {{key:Esc}} | Limpa o que está escolhido. |

## Bom saber

- Uma curva do desenho é uma cadeia de pequenos troços retos, por isso o seu comprimento fica um pouco abaixo do arco verdadeiro. Para um arco exato, meça o próprio ficheiro do desenho ([Medir a partir de um desenho](topic:measure-from-a-drawing)).
- Uma lacuna preenchida conta como um salto reto por cima dela, por isso o perímetro de um contorno fechado a inclui.
- Só os traços e os preenchimentos dos próprios percursos da página são linhas. O texto desenhado como letras, e as imagens, não são.
