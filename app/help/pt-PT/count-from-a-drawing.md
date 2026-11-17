---
title: Contar a partir de um desenho
summary: Conte blocos, objetos numa camada ou texto diretamente de um DWG ou DXF: exato, com blocos aninhados, variantes de blocos dinâmicos e matrizes de blocos tratados, num só passo de anulação.
keywords: contar a partir do desenho, contagem CAD, contagem de blocos, contar blocos, inserir, nome do bloco, blocos aninhados, bloco dinâmico, variante, minsert, matriz, camada, tipo de entidade, círculos, texto, atributo, etiqueta, camadas ocultas, contagem exata, como fazer, portas, equipamentos
from: 5060e24e
---

{{ui:Contagem CAD}} na barra da folha (o comando **Contar a partir do desenho** nos outros estilos de menu) conta o que um DWG ou DXF diz que existe. Onde {{ui:Contagem automática}} procura uma imagem de um símbolo e pode falhar um ou encontrar um falso, esta conta os objetos: cada inserção de um bloco com o nome `DOOR-36` é uma porta. Abra primeiro o desenho: [Abrir um desenho DWG ou DXF](topic:open-a-drawing).

## Contar um bloco

1. Abra uma folha do desenho. {{ui:Contagem CAD}} está na barra da folha.
2. Escolha-a. A janela lista os blocos com quantos existem de cada um. Pesquise pelo nome e depois escolha um.
3. Verifique a linha por baixo da lista: « 22 encontrados, 22 a acrescentar. »
4. Em {{ui:Adicionar a}}, escolha um artigo de contagem, ou deixe {{ui:Um novo artigo de contagem}} e dê-lhe um nome.
5. Escolha o botão de adicionar, que indica o número: {{ui:Adicionar 22 marcações}}. As marcações aparecem nos pontos de inserção do bloco, e a quantidade do artigo é a contagem.

É um só passo de anulação: {{key:Mod+Z}} retira as marcações (e um artigo novo) em conjunto. O orçamento, a folha de cálculo e o PDF marcado tratam o artigo como qualquer outro artigo de contagem.

### O que conta

- **Cada inserção do nome do bloco**, qualquer que seja a sua escala e ângulo, no espaço Modelo ou no espaço Papel. Os nomes dos blocos não distinguem maiúsculas de minúsculas.
- **Matrizes de blocos** (MINSERT): cada cópia da matriz conta como uma.
- **Blocos aninhados.** Um bloco colocado dentro de outro bloco conta a todos os níveis de profundidade. A lista diz « 6 dentro de outros blocos »; desmarque {{ui:Contar também os blocos dentro de outros blocos}} para contar apenas as inserções colocadas diretamente no desenho.
- **Blocos dinâmicos.** Um bloco dinâmico conta pelo seu próprio nome, e não pelas cópias anónimas (`*U12`) que o ficheiro guarda. Os seus estados aparecem separados (« Simples 12, Duplo 4 »): escolha um estado para contar apenas esses, ou {{ui:Todas as variantes}}. Quando um ficheiro não indica qual estado uma cópia mostra, essas aparecem como « (estado desconhecido) ».
- **Filtro de camada.** Um bloco em várias camadas: escolha uma em {{ui:Na camada}}.

### O que não conta

- **Camadas ocultas.** Um objeto numa camada que está desligada ou congelada no ficheiro (ou que ocultou em {{ui:Camadas}}) fica de fora, e a linha indica quantos: « 3 em camadas ocultas, deixados de fora. » Marque {{ui:Contar também estes}} para os incluir.
- **Desenhos referenciados que não estão abertos** não são contados; a janela indica-o.
- **Objetos sobrepostos exatamente a outro do mesmo tipo** são contados como dois (são dois objetos), e a janela assinala-o: costuma ser um lapso de desenho que vale a pena verificar.

## O que mostra esta folha, ou o desenho completo

- **O que mostra esta folha** conta os objetos que a folha mostra: numa folha de layout, os objetos do modelo dentro das suas viewports (uma camada congelada numa viewport não é contada aí), mais os próprios objetos do layout.
- **O desenho completo, cada objeto uma vez** conta o espaço modelo uma vez, com as marcações na folha Modelo, e não conta de novo o que vários layouts mostram.

Contar o que um layout mostra e contar o que o Modelo mostra dão o mesmo número para os mesmos objetos; não some ambos num só artigo.

## Contar de novo

Contar o mesmo bloco de novo com o mesmo artigo acrescenta apenas o que é novo: « 22 já contados. » Cada marcação representa um objeto.

## Por camada e tipo

Em {{ui:Por camada e tipo}} escolha uma camada e um tipo de objeto (círculos, polilinhas, tramas…): « todos os círculos em E-LITE ». Marque {{ui:Contar também objetos dentro de blocos}} para incluir os que estão dentro de definições de blocos, em cada sítio onde o bloco é inserido.

## Por texto

Em {{ui:Por texto}} escreva o texto, como `A3`, e indique se é exatamente esse, se o contém, ou se o tem como palavra inteira. Objetos de texto, texto de chamada múltipla e **valores de atributos** de blocos contam todos (um atributo de etiqueta `ITEM = A3` é encontrado); escolha {{ui:No atributo}} para contar apenas um atributo. Os textos mais comuns estão listados para clicar.

## Quando usar a Contagem automática

Use {{ui:Contagem automática}} para PDF e para símbolos num desenho que não são blocos (desenhados soltos, ou decompostos). Desenhados como blocos, conte-os aqui.
