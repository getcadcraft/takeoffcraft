---
title: Definições do TakeoffCraft
summary: Mostrar polegadas até 1/16, 1/8 ou 1/4, iniciar novos artigos com uma percentagem de desperdício, escolher onde começa o cursor de Contagem automática, ajustar ao traçado do desenho ou a 45° sem manter Shift, definir a largura de porta que o Preenchimento de compartimento fecha, e escolher o indicador de canto da vista 3D.
keywords: definições, preferências, opções, precisão, frações, polegadas, arredondamento, desperdício, desperdício predefinido, contagem automática, limiar, semelhança, cursor, snap, 45, ângulo, shift, cubo de vistas, ícone de eixos, indicador de canto, 3d
from: bca3f0ed
---

Abra {{ui:Settings}} com a engrenagem na barra de aplicação ou com {{key:Mod+,}}. O primeiro separador, {{ui:TakeoffCraft}}, contém as definições desta aplicação; {{ui:General}} contém as que todas as aplicações CadCraft partilham (tema, painéis, barra de ferramentas). As definições do TakeoffCraft existem só nesta aplicação: altere-as aqui, e este navegador memoriza-as. {{ui:Reset TakeoffCraft settings}} repõe-nas no início.

## Pés e polegadas

Mostre os comprimentos até ao **1/16"** mais próximo (o inicial), **1/8"** ou **1/4"**. Isto altera a forma como os comprimentos se leem na folha, nos painéis, nas quantidades e na barra de estado.

Só a visualização é arredondada. As quantidades, os custos e as exportações são calculados a partir dos comprimentos exatos, e as exportações mostram sempre 1/16".

## Desperdício inicial

A percentagem de desperdício com que cada artigo novo começa: 0% (o inicial), 2%, 3%, 5%, 7.5%, 10%, 15% ou 20%. Pode escrever outro desperdício para cada artigo, no editor do artigo ou diretamente na tabela de quantidades. Os artigos que já tem mantêm o seu próprio desperdício.

## Contagem automática: onde começa o cursor de semelhança

Onde o cursor {{ui:Match}} fica quando uma pesquisa de [Contagem automática](topic:auto-count) termina, de 50% a 95%; 75% é o inicial. Um valor mais baixo oferece mais semelhantes para rejeitar; um mais alto oferece menos. Pode continuar a mover o cursor durante cada revisão.

## Ajustar ao traçado do próprio desenho

Ativado no início. Enquanto mede ou calibra, um ponto perto de uma linha do PDF salta para a sua extremidade, o seu ponto médio, um cruzamento ou o ponto mais próximo dela. {{key:F3}} e {{ui:Snap}} na barra de estado também a ativam e desativam. Mais: [Ajustar às linhas do desenho](topic:snap-to-the-drawing).

## Preenchimento de compartimento: a largura de abertura que fecha

{{ui:Room fill closes openings up to}} define a largura de uma abertura de porta ou de um vão que a ferramenta {{ui:Room}} considera fechada: de 3'-0" a 8'-0", 4'-0" no início. Mais largo do que a sua porta mais larga faz um compartimento estender-se ao seguinte; mais estreito do que uma porta deixa o compartimento aberto. Ver [Preencher um compartimento com um clique](topic:measure-areas#fill-a-room-with-one-click).

## Ajustar a 45° sem manter Shift

Desativado no início. Quando está ativado, os troços, contornos, recortes e cantos arrastados ficam a 0°, 45°, 90° ou 135° do último ponto sem manter {{key:Shift}}; mantenha {{key:Shift}} para clicar em qualquer ângulo. A barra de estado diz então «Ajusta a 45°; Shift liberta o ângulo». O ponto em que clica na curva de um arco e os círculos nunca são ajustados; a extremidade de um arco é.

## Tamanho do marcador de contagem

O tamanho dos pontos de contagem: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (o inicial: o tamanho que os pontos sempre tiveram) ou {{ui:Large}}. O tamanho mantém-se no ecrã em qualquer zoom, e o PDF marcado desenha cada ponto com o mesmo tamanho no papel, seja qual for o tamanho da folha, por isso o PDF a 100% tem o mesmo aspeto que o ecrã. Mais: [Contar à mão](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicador de canto

Apenas para a [vista de verificação 3D](topic:check-in-3d): {{ui:View cube}} (o inicial: um cubo no canto superior direito para clicar, arrastar e rodar), {{ui:Axis icon}} (um pequeno marcador X, Y, Z no canto inferior direito) ou {{ui:None}}. Muda de imediato e fica guardado neste navegador. A folha plana nunca mostra nenhum.

## Ferramenta de percurso: a maior falha que une

{{ui:Path tool: largest gap to join}} é a distância máxima entre duas extremidades de linha para que contem como um só percurso, em pontos de PDF (de 0.05 a 60; 1.5 no início). As linhas de um desenho costumam parar ligeiramente antes umas das outras. Um valor maior une mais; um menor mantém as linhas separadas. {{key:[}} e {{key:]}} alteram-no enquanto escolhe, e este campo acompanha. Ver [Escolher as linhas](topic:pick-the-lines).
