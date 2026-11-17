---
title: Configurações do TakeoffCraft
summary: Mostrar polegadas até 1/16, 1/8 ou 1/4, começar novos itens com uma porcentagem de perda, escolher onde começa o controle deslizante de Contagem automática, encaixar (snap) nas linhas do desenho ou a 45° sem segurar Shift, definir a largura de porta que o Preenchimento de ambiente fecha, e escolher o indicador de canto da vista 3D.
keywords: configurações, preferências, opções, precisão, frações, polegadas, arredondamento, perda, perda padrão, contagem automática, limite, semelhança, controle deslizante, snap, 45, ângulo, shift, cubo de vista, ícone de eixos, indicador de canto, 3d
from: bca3f0ed
---

Abra {{ui:Configurações}} com a engrenagem na barra de aplicativos ou {{key:Mod+,}}. A primeira guia, {{ui:TakeoffCraft}}, reúne as configurações deste aplicativo; {{ui:Geral}} reúne as que todos os aplicativos CadCraft compartilham (tema, painéis, barra de ferramentas). As configurações do TakeoffCraft existem apenas no aplicativo: você as altera aqui, e este navegador as lembra. {{ui:Redefinir configurações do TakeoffCraft}} as devolve ao padrão inicial.

## Pés e polegadas

Mostrar comprimentos até o **1/16"** (o padrão), **1/8"** ou **1/4"** mais próximo. Isso muda como os comprimentos são lidos na folha, nos painéis, nas quantidades e na barra de status.

Somente a exibição é arredondada. Quantidades, custos e exportações são calculados a partir dos comprimentos exatos, e as exportações sempre mostram 1/16".

## Perda inicial

A porcentagem de perda com que todo item novo começa: 0% (o padrão), 2%, 3%, 5%, 7.5%, 10%, 15% ou 20%. Você ainda pode digitar outra perda para cada item, no editor do item ou direto na tabela de Quantitativos. Os itens que você já tem mantêm a própria perda.

## Contagem automática: onde começa o controle de semelhança

Onde o controle deslizante {{ui:Semelhança}} fica quando uma busca de [Contagem automática](topic:auto-count) termina, de 50% a 95%; 75% é o padrão. Valores menores oferecem mais itens parecidos para você rejeitar; valores maiores oferecem menos. Você ainda pode mover o controle durante cada revisão.

## Snap nas linhas do próprio desenho

Ligado no início. Enquanto você mede ou calibra, um ponto próximo a uma linha do PDF salta para a extremidade dela, o seu ponto médio, um cruzamento ou o ponto mais próximo nela. {{key:F3}} e {{ui:Snap}} na barra de status também ligam e desligam isso. Mais: [Snap nas linhas do desenho](topic:snap-to-the-drawing).

## Preenchimento de ambiente: a largura de abertura que ele fecha

{{ui:O preenchimento de ambiente fecha vãos de até}} define a largura de uma abertura ou vão de porta que a ferramenta {{ui:Ambiente}} trata como fechado: de 3'-0" a 8'-0", 4'-0" no início. Mais largo que a sua porta mais larga faz um ambiente avançar para o próximo; mais estreito que uma porta deixa o ambiente aberto. Veja [Preencher um ambiente com um clique](topic:measure-areas#fill-a-room-with-one-click).

## Snap a 45° sem segurar Shift

Desligado no início. Quando ligado, trechos, contornos, recortes e cantos arrastados vão a 0°, 45°, 90° ou 135° a partir do último ponto, sem segurar {{key:Shift}}; segure {{key:Shift}} para clicar em qualquer ângulo. A barra de status então diz "Encaixa a 45°; Shift libera o ângulo". O ponto que você clica na curva de um arco e os círculos nunca são encaixados; a extremidade de um arco é.

## Tamanho do marcador de contagem

O tamanho dos pontos de contagem: {{ui:Extra pequeno}}, {{ui:Pequeno}}, {{ui:Médio}} (o padrão: o tamanho que os pontos sempre tiveram) ou {{ui:Grande}}. O tamanho se mantém na tela em qualquer zoom, e o PDF marcado desenha cada ponto com o mesmo tamanho no papel, qualquer que seja o tamanho da folha, então o PDF a 100% parece com a tela. Mais: [Contar à mão](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicador de canto

Somente para a [vista 3D de conferência](topic:check-in-3d): {{ui:Cubo de vista}} (o padrão: um cubo no canto superior direito para clicar, arrastar e girar), {{ui:Ícone de eixos}} (um pequeno marcador X, Y, Z no canto inferior direito) ou {{ui:Nenhum}}. Muda na hora e fica guardado neste navegador. A folha plana nunca mostra nenhum.

## Ferramenta de caminho: o maior vão que ela une

{{ui:Ferramenta de caminho: maior vão para unir}} é a distância máxima entre duas extremidades de linha para que contem como um único caminho, em pontos de PDF (de 0.05 a 60; 1.5 no início). As linhas de um desenho muitas vezes param um fio antes umas das outras. Um valor maior une mais; um valor menor mantém as linhas separadas. {{key:[}} e {{key:]}} mudam isso enquanto você escolhe, e este campo acompanha. Veja [Escolher as linhas](topic:pick-the-lines).
