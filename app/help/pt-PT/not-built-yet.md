---
title: O que ainda não está implementado
summary: Funcionalidades de medição que esta versão não tem, e o que fazer em alternativa hoje.
keywords: limites, em falta, ainda não, roteiro, previsto, alternativa, por troço, nuvem, ambiente de trabalho
from: 94ff90d0
---

O TakeoffCraft está em desenvolvimento. Esta lista indica o que a versão atual não faz e como concluir o trabalho na mesma.

## Medição

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Inserir um ponto no meio de um troço ou contorno | Elimine a marca e desenhe-a de novo. |
| Seleção por caixa (janela) | {{key:Shift}} + clicar em cada marca, ou {{key:Mod+A}} para todas as marcas da folha. Ver [Copiar, colar e duplicar marcas](topic:copy-paste). |
| Rodar, espelhar ou escalar uma cópia colada | Cole numa folha à mesma escala e com a mesma orientação; desenhe o resto à mão. |
| Ler uma escala de uma folha digitalizada ou de uma barra gráfica de escala | Escolha a predefinição, ou calibre pelo comprimento da barra. |
| Mais de uma escala por folha (áreas de pormenor, plantas ampliadas) | Meça a parte à escala da folha, e faça a medição do pormenor na sua própria folha ampliada, se o conjunto a tiver. |

## Artigos e preços

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Fórmulas do preço composto que usam outros tipos de marcas de um artigo (as portas de um artigo de compartimento nas fórmulas do seu piso) | As fórmulas usam os totais do tipo principal; atribua preço aos outros tipos nas suas próprias linhas. |
| Fórmulas do preço composto calculadas troço a troço | As fórmulas usam os totais do artigo; use `N` para extras por troço. |
| Fórmulas que usam as quantidades de outro artigo | Repita a medição nesse artigo, ou calcule-a na exportação para folha de cálculo. |
| Equipas nos componentes do preço composto, ou um dia de trabalho diferente de 8 horas | Atribua a equipa ao artigo; para outra duração do dia, leia os dias-equipa como horas-equipa ÷ a duração do seu dia. |
| Anotações que não sejam notas, nuvens e realces (setas, cotas, carimbos), ou respostas numa nota | Escreva-o no texto da nota; altere o estado à medida que for resolvido. |
| Uma biblioteca de preços partilhada por uma equipa, ou guardada com a sua conta | A biblioteca fica guardada neste navegador: exporte-a como CSV e importe-a no outro computador. |
| Pacotes da especialidade revistos por orçamentistas em atividade | Cada pacote é um ponto de partida: verifique os seus pressupostos face à sua obra e aos seus produtos antes de atribuir preços. Ver [Pacotes da especialidade](topic:trade-packs). |
| Preços nos pacotes da especialidade | Os pacotes trazem apenas preços compostos: defina os seus próprios valores, ou importe a sua lista de preços como CSV. |
| Mudar o nome da medição | O nome vem do primeiro PDF; mude o nome dos ficheiros transferidos. |
| Dar nome às folhas manualmente | As folhas são nomeadas pelas etiquetas de página do PDF; pesquise pelo nome do ficheiro e pela página. |

## Desenhos (DWG e DXF)

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Tabelas de estilos de impressão, atribuições de canetas e ficheiros CTB nas folhas de um desenho | Um desenho é desenhado a preto, ou nas suas cores escurecidas para papel; as espessuras de linha vêm do próprio desenho. |
| Abrir um DXF binário, ou um DWG anterior ao AutoCAD 2000 | Guarde-o como DXF ASCII ou como DWG mais recente. |
| Encontrar um desenho referenciado (xref) pela pasta onde está | Abra também o ficheiro do desenho referenciado, junto com o principal: é encontrado pelo nome do ficheiro entre os ficheiros abertos. |
| Medir polilinhas 3D, malhas, sólidos e regiões | Conte-os por camada e tipo, ou meça a vista em planta com as ferramentas Linear e Área. |
| Texto num PDF marcado a partir de um desenho em escritas que não sejam latinas | Os caracteres para os quais o Helvetica não tem glifo são impressos como "?" no PDF marcado; o desenho no ecrã não é afetado. |
| Transmitir um desenho a outra aplicação a partir da barra de folhas | Abra o mesmo ficheiro nessa aplicação. |
| Um desenho que leva a medição dentro de si, como faz {{ui:PDF com a medição dentro}} para os PDF | {{ui:Guardar medição}}: o `.takeoff.json` reabre no mesmo desenho, encontrado pelo seu conteúdo. |
| Desenhar ou contar as sobreposições PDF, imagens e objetos OLE colocados num desenho | As imagens aparecem apenas como moldura. Abra o próprio PDF da sobreposição como folha. |

## Contagem automática

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Encontrar símbolos numa folha sem escala, quando estão desenhados com outro tamanho | Atribua à folha a sua escala, ou procure-a com uma caixa desenhada nela. |
| Encontrar símbolos espelhados | Conte-os manualmente, ou volte a procurar com uma caixa à volta de um símbolo espelhado. |

## Ficheiros e partilha

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Um só PDF que mostre as marcas e leve a medição | {{ui:PDF marcado}} para as pessoas verem as marcas; {{ui:PDF com a medição dentro}} para reabrir no TakeoffCraft. |
| Um CSV das quantidades por folha ou das marcas | Use {{ui:XLSX}}: as suas folhas Por folha e Marcas têm esses dados. |
| Guardar na nuvem | Ainda não disponível. Guarde os ficheiros do projeto no seu computador e faça cópias de segurança. |
| Uma aplicação de ambiente de trabalho do TakeoffCraft separada | A partir da versão 0.5, a aplicação de ambiente de trabalho é o CadCraft Studio, com as oito aplicações numa só instalação. O TakeoffCraft também funciona no navegador. |

## Ecrã e entrada

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Um menu do botão direito do rato (ou de toque prolongado) | Use a barra de ferramentas, os painéis e as teclas. Um toque prolongado termina um troço ou um contorno. |
| Rodar a vista | As páginas rodadas no PDF já aparecem na posição correta. |

## Vista 3D

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Desenhar ou editar marcas em 3D | Volte à folha ({{key:3}}) para desenhar; selecionar e eliminar funcionam em 3D. |
| Alinhar pisos sobrepostos desenhados em posições diferentes nas suas páginas | Sobreponha pisos desenhados da mesma forma; verifique os outros uma folha de cada vez. |
| Contar postes com o tamanho do objeto contado | Todos os postes numa folha têm o mesmo tamanho; marcam onde está uma contagem, não o que ela é. |

## Propostas

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Adendas a um pacote já enviado, cartas de adjudicação, uma folha de âmbito que cada concorrente assina | Envie um novo pacote e redija a adjudicação à mão. [Enviar um pacote para propostas](topic:bid-invitations) indica o que está implementado. |
| Envio de convites para propostas a partir de qualquer conta: enquanto está em teste, o correio para concorrentes externos está desativado, exceto para as contas que a equipa do CadCraft ativou | Transfira o {{ui:CSV do âmbito}}, envie-o por e-mail e introduza as propostas manualmente. |
| Envio de pacotes para propostas a partir de uma janela do Studio | Envie a partir do TakeoffCraft no navegador. |
| Recalcular o preço da área de proposta de uma alternativa com uma proposta escolhida | As alternativas e os subtotais das áreas de proposta usam os seus próprios preços; ajuste a alternativa manualmente. |
| Lembretes automáticos antes de expirar a data do seguro ou da licença de um subempreiteiro | A data fica assinalada na página Subempreiteiros quando já passou ou faltam 30 dias ou menos; verifique-a ao convidar. |

## Painéis

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Mover a tabela {{ui:Quantidades}} | Só os painéis {{ui:Folhas}} e {{ui:Artigos}} se movem. Ver [Organizar os painéis](common:arrange-panels). |

## Folhas de cálculo

A folha de cálculo XLSX foi verificada no LibreOffice Calc, que recalculou cada total até ao mesmo cêntimo que o TakeoffCraft. Ainda não foi aberta no Excel. Se um programa de folhas de cálculo mostrar algo inesperado, a exportação CSV contém o mesmo orçamento em valores simples.
