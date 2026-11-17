---
title: Contar a partir de um desenho
summary: Conte blocos, objetos de uma camada ou textos diretamente de um DWG ou DXF: exato, com blocos aninhados, variantes de blocos dinâmicos e matrizes de blocos tratados, em um único passo para desfazer.
keywords: contar a partir do desenho, contagem CAD, contagem de blocos, contar blocos, inserir, nome do bloco, blocos aninhados, bloco dinâmico, variante, minsert, matriz, camada, tipo de entidade, círculos, texto, atributo, tag, camadas ocultas, contagem exata, como fazer, portas, luminárias
from: 5060e24e
---

{{ui:Contagem CAD}} na barra da folha (o comando **Contar a partir do desenho** nos outros estilos de menu) conta o que um DWG ou DXF diz que existe. Onde a {{ui:Contagem automática}} procura uma imagem de um símbolo e pode perder um ou encontrar um falso, esta conta os objetos: cada inserção de um bloco chamado `DOOR-36` é uma porta. Abra o desenho primeiro: [Abrir um desenho DWG ou DXF](topic:open-a-drawing).

## Contar um bloco

1. Abra uma folha do desenho. {{ui:Contagem CAD}} está na barra da folha.
2. Escolha-a. A janela lista os blocos com quantos de cada há. Pesquise pelo nome e depois escolha um.
3. Confira a linha abaixo da lista: "22 encontrados, 22 a adicionar."
4. Em {{ui:Adicionar a}}, escolha um item de contagem, ou deixe {{ui:Um novo item de contagem}} e dê um nome.
5. Escolha o botão de adicionar, que informa o número: {{ui:Adicionar 22 marcações}}. As marcações aparecem nos pontos de inserção do bloco, e a quantidade do item é a contagem.

É um único passo para desfazer: {{key:Mod+Z}} remove as marcações (e um item novo) juntos. A estimativa, a planilha e o PDF marcado tratam o item como qualquer outro item de contagem.

### O que é contado

- **Cada inserção do nome do bloco**, qualquer que seja sua escala e ângulo, no espaço modelo ou no espaço papel. Nomes de blocos não diferenciam maiúsculas de minúsculas.
- **Matrizes de blocos** (MINSERT): cada cópia da matriz conta como uma.
- **Blocos aninhados.** Um bloco colocado dentro de outro é contado em qualquer profundidade. A lista diz "6 dentro de outros blocos"; desmarque {{ui:Contar blocos dentro de outros blocos também}} para contar apenas as inserções colocadas diretamente no desenho.
- **Blocos dinâmicos.** Um bloco dinâmico é contado pelo seu próprio nome, não pelas cópias anônimas (`*U12`) que o arquivo mantém. Seus estados são listados à parte ("Simples 12, Duplo 4"): escolha um estado para contar apenas esses, ou {{ui:Todas as variantes}}. Quando um arquivo não diz qual estado uma cópia mostra, elas aparecem como "(estado desconhecido)".
- **Filtro de camada.** Um bloco em várias camadas: escolha uma em {{ui:Na camada}}.

### O que não é

- **Camadas ocultas.** Um objeto em uma camada que está desligada ou congelada no arquivo (ou que você ocultou em {{ui:Camadas}}) fica de fora, e a linha informa quantos: "3 em camadas ocultas ficaram de fora". Marque {{ui:Contar também estes}} para incluí-los.
- **Desenhos vinculados que não estão abertos** não são contados; a janela avisa.
- **Objetos empilhados exatamente sobre outro do mesmo tipo** são contados como dois (são dois objetos), e a janela avisa: geralmente é um descuido de desenho que vale uma conferida.

## O que esta folha mostra, ou o desenho inteiro

- **O que esta folha mostra** conta os objetos que a folha exibe: em um layout, os objetos do modelo dentro das suas viewports (uma camada congelada em uma viewport não é contada ali), mais os do próprio layout.
- **O desenho inteiro, cada objeto uma vez** conta o espaço modelo uma vez, com as marcações na guia Modelo, e não conta de novo o que vários layouts mostram.

Contar o que um layout mostra e contar o que o Modelo mostra dão o mesmo número para os mesmos objetos; não some os dois em um mesmo item.

## Contar de novo

Contar o mesmo bloco de novo com o mesmo item adiciona apenas o que é novo: "22 já contados." Cada marcação representa um objeto.

## Por camada e tipo

Em {{ui:Por camada e tipo}}, escolha uma camada e um tipo de objeto (círculos, polilinhas, hachuras…): "todos os círculos em E-LITE". Marque {{ui:Contar também objetos dentro de blocos}} para incluir os que estão dentro de definições de blocos, em cada lugar onde o bloco é inserido.

## Por texto

Em {{ui:Por texto}}, digite o texto, como `A3`, e diga se ele deve ser exatamente aquele, conter o termo ou ser uma palavra inteira. Objetos de texto, textos de multichamada e **valores de atributos** de blocos são todos contados (um atributo de tag `ITEM = A3` é encontrado); escolha {{ui:No atributo}} para contar apenas um atributo. Os textos mais comuns são listados para clicar.

## Quando usar a Contagem automática

Use {{ui:Contagem automática}} para PDFs e para símbolos de um desenho que não são blocos (desenhados soltos ou explodidos). Desenhados como blocos, conte aqui.
