---
title: O que ainda não foi implementado
summary: Recursos de levantamento que esta versão não tem e o que fazer hoje.
keywords: limites, faltando, ainda não, roteiro, planejado, alternativa, por trecho, nuvem, desktop
from: 94ff90d0
---

TakeoffCraft está em desenvolvimento. Esta lista mostra o que a versão atual não faz e como concluir o trabalho mesmo assim.

## Medição

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Inserir um ponto no meio de um trecho ou contorno | Exclua a marca e desenhe-a novamente. |
| Seleção por janela (caixa) | {{key:Shift}} + clique em cada marca, ou {{key:Mod+A}} para todas as marcas da folha. Veja [Copiar, colar e duplicar marcas](topic:copy-paste). |
| Girar, espelhar ou redimensionar uma cópia colada | Cole em uma folha na mesma escala e na mesma orientação; desenhe o restante à mão. |
| Ler uma escala de uma folha digitalizada, ou de uma barra de escala gráfica | Escolha a predefinida, ou calibre pelo comprimento da barra. |
| Mais de uma escala por folha (áreas de detalhe, plantas ampliadas) | Meça a parte na escala da folha e faça o levantamento do detalhe na sua própria folha ampliada, se o conjunto tiver uma. |

## Itens e preços

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Fórmulas de composição que usam outros tipos de marcas do item (as portas de um item de ambiente nas fórmulas do pavimento) | As fórmulas usam os totais do tipo principal; precifique os outros tipos em linhas próprias. |
| Fórmulas de composição calculadas trecho a trecho | As fórmulas usam os totais do item; use `N` para extras por trecho. |
| Fórmulas que usam quantitativos de outro item | Repita a medição nesse item, ou calcule na planilha exportada. |
| Equipes em componentes de composição, ou uma jornada diferente de 8 horas | Atribua a equipe ao item; para outra duração de jornada, divida as horas-equipe pela sua jornada para obter os dias-equipe. |
| Marcações além de notas, nuvens e destaques (setas, cotas, carimbos), ou respostas em uma nota | Escreva no texto da nota; altere o status conforme for resolvida. |
| Uma biblioteca de preços compartilhada por uma equipe, ou guardada na sua conta | A biblioteca fica guardada neste navegador: exporte-a como CSV e importe no outro computador. |
| Pacotes de serviço revisados por orçamentistas em atividade | Cada pacote é um ponto de partida: confira as premissas com sua obra e seus produtos antes de precificar. Veja [Pacotes de serviço](topic:trade-packs). |
| Preços nos pacotes de serviço | Os pacotes trazem apenas composições: defina suas próprias taxas, ou importe sua lista de preços como CSV. |
| Renomear o levantamento | O nome vem do primeiro PDF; renomeie os arquivos baixados. |
| Nomear as folhas manualmente | As folhas são nomeadas pelos rótulos de página do PDF; pesquise pelo nome do arquivo e pela página. |

## Desenhos (DWG e DXF)

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Tabelas de estilo de plotagem, atribuições de caneta e arquivos CTB nas folhas de um desenho | Um desenho é traçado em preto, ou em suas cores escurecidas para papel; as espessuras de linha vêm do próprio desenho. |
| Abrir um DXF binário, ou um DWG anterior ao AutoCAD 2000 | Salve como DXF ASCII ou como DWG mais recente. |
| Encontrar um desenho vinculado (xref) pela pasta em que está | Abra também o arquivo do desenho vinculado, junto com o principal: ele é encontrado pelo nome do arquivo entre os arquivos abertos. |
| Medir polilinhas 3D, malhas, sólidos e regiões | Conte-os por camada e tipo, ou meça a vista de planta com as ferramentas Linear e Área. |
| Texto em um PDF marcado, quando o desenho usa scripts que não são latinos | Caracteres sem glifo na Helvetica são impressos como "?" no PDF marcado; o desenho na tela não é afetado. |
| Passar um desenho para outro aplicativo pela barra de folhas | Abra o mesmo arquivo nesse aplicativo. |
| Um desenho que carrega o levantamento dentro dele, como {{ui:PDF with the takeoff inside}} faz para PDFs | {{ui:Save takeoff}}: o `.takeoff.json` reabre no mesmo desenho, encontrado pelo conteúdo. |
| PDFs de fundo (underlays), imagens e objetos OLE colocados em um desenho para medição ou contagem | As imagens aparecem apenas como moldura. Abra o próprio PDF de fundo como uma folha. |

## Contagem automática

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Encontrar símbolos em uma folha sem escala desenhada em outro tamanho | Informe a escala da folha, ou pesquise com uma caixa desenhada ali. |
| Encontrar símbolos espelhados | Conte-os à mão, ou pesquise de novo com uma caixa em volta de um espelhado. |

## Arquivos e compartilhamento

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Um PDF que mostra as marcas e também carrega o levantamento | {{ui:Marked PDF}} para as pessoas verem as marcas; {{ui:PDF with the takeoff inside}} para reabrir no TakeoffCraft. |
| Um CSV de quantitativos por folha, ou das marcas | Use {{ui:XLSX}}: suas planilhas By sheet e Marks têm esses dados. |
| Salvamento na nuvem | Ainda não disponível. Salve os arquivos do projeto no seu computador e faça backup. |
| Um aplicativo de desktop separado do TakeoffCraft | A partir da versão 0.5, o aplicativo de desktop é o CadCraft Studio, com todos os oito aplicativos em uma só instalação. O TakeoffCraft também roda no navegador. |

## Tela e entrada

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Um menu de clique com o botão direito (ou pressionamento longo) | Use a barra de ferramentas, os painéis e as teclas. Um pressionamento longo finaliza um trecho ou um contorno. |
| Girar a visualização | Páginas giradas no PDF já aparecem na posição correta. |

## Vista 3D

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Desenhar ou editar marcas em 3D | Volte à folha ({{key:3}}) para desenhar; selecionar e excluir funcionam em 3D. |
| Alinhar pavimentos empilhados, plotados em posições diferentes nas suas páginas | Empilhe pavimentos plotados de forma igual; confira os outros uma folha por vez. |
| Contar postes com tamanho igual ao do objeto contado | Todo poste em uma folha tem o mesmo tamanho; ele marca onde está uma contagem, não o que ela é. |

## Propostas

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Adendos a um pacote já enviado, cartas de adjudicação, uma folha de escopo que cada licitante assina | Envie um novo pacote e escreva a adjudicação você mesmo. [Enviar um pacote para propostas](topic:bid-invitations) cobre o que já existe. |
| Enviar convites para propostas a partir de qualquer conta: enquanto está em teste, o envio de e-mails a licitantes externos está desligado, exceto para contas que a equipe CadCraft habilitou | Baixe o {{ui:Scope CSV}}, envie-o por e-mail você mesmo e digite as propostas. |
| Enviar pacotes de propostas a partir de uma janela do Studio | Envie pelo TakeoffCraft no navegador. |
| Recalcular a área de proposta de uma alternativa com uma proposta escolhida | As alternativas e os subtotais das áreas de proposta usam seus próprios preços; ajuste a alternativa à mão. |
| Lembretes automáticos antes do vencimento do seguro ou da licença de um subempreiteiro | A data é sinalizada na página de Subempreiteiros quando já passou ou faltam 30 dias; confira ao convidar. |

## Painéis

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Mover a tabela de {{ui:Quantities}} | Só os painéis {{ui:Sheets}} e {{ui:Items}} podem ser movidos. Veja [Organizar os painéis](common:arrange-panels). |

## Planilhas

A pasta de trabalho XLSX foi conferida no LibreOffice Calc, que recalculou cada total com o mesmo centavo do TakeoffCraft. Ainda não foi aberta no Excel. Se um programa de planilhas mostrar algo inesperado, a exportação em CSV traz o mesmo orçamento como valores simples.
