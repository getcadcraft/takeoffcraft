---
title: Salvar e reabrir um levantamento
summary: Salve o levantamento como um projeto .takeoff.json, reabra-o com os mesmos PDFs, e veja o que acontece quando um PDF está ausente ou foi alterado.
keywords: levantamento dentro do PDF, incorporar, anexo, salvar, abrir, reabrir, projeto, takeoff.json, retomar, continuar, PDF revisado, PDF alterado, PDF ausente, backup, salvamento automático, recuperar, travamento
from: bd5080a6
---

Um levantamento é salvo como um pequeno arquivo de projeto, `(nome).takeoff.json`. Ele guarda os seus itens, composições, preços unitários, a escala de cada folha e cada marcação. Ele **não** guarda os PDFs; ele os encontra de novo pelo conteúdo.

## Salvar

1. Escolha {{ui:Salvar levantamento}} no grupo {{ui:Arquivo}}, ou pressione {{key:Mod+S}}.
   Seu navegador baixa `(nome).takeoff.json`. A barra de status diz "Salvo (nome).takeoff.json. Ele reabre sobre os mesmos PDFs (eles são reconhecidos pelo conteúdo)."
2. Mova o arquivo para perto dos PDFs da obra, para que os dois fiquem juntos.

Cada salvamento baixa um arquivo novo. O seu navegador pode nomear o segundo como `(nome) (1).takeoff.json`; fique com o mais recente.

O nome vem do primeiro PDF que você abriu neste levantamento.

:::note
Salvar levantamento continua sendo a única forma de manter um levantamento como arquivo. Enquanto você trabalha, o TakeoffCraft também mantém uma cópia de recuperação neste navegador (veja abaixo), e o salvamento na nuvem ainda não está disponível. Se você tentar fechar a aba com alterações não salvas, o navegador pergunta se você quer sair.
:::

## Manter o levantamento dentro do PDF

{{ui:Exportar}} › {{ui:PDF com o levantamento dentro}} baixa uma cópia de cada PDF aberto, com nomes como `Plans (with takeoff).pdf`, que leva o levantamento inteiro como anexo: itens, marcações, escalas, áreas da proposta, tudo o que o `.takeoff.json` guarda. As páginas não são alteradas, então ele parece e imprime como o original, e outros leitores de PDF listam o levantamento entre os anexos.

Abra esse PDF no TakeoffCraft (de qualquer forma que você abra PDFs) e ele pergunta **Este PDF tem um levantamento dentro**: escolha {{ui:Abrir o levantamento}} para recuperá-lo, ou {{ui:Somente o PDF}} para abrir apenas o desenho. A cópia representa o PDF do qual foi feita, então um `.takeoff.json` salvo a partir de qualquer um dos dois abre nos dois.

Com vários PDFs, cada cópia leva o levantamento inteiro; abra-as juntas. Salvar de novo a partir de uma cópia substitui o levantamento dentro dela, não adiciona um segundo. O `.takeoff.json` continua sendo o arquivo a manter: ele é pequeno, e é o que o salvamento automático e o aplicativo de desktop gravam.

## Se a aba ou o navegador parar

Alguns segundos após cada alteração, o TakeoffCraft guarda uma cópia do levantamento no armazenamento deste navegador, junto com os seus PDFs quando eles somam 64 MB ou menos. Nada é enviado. Quando você salva o levantamento, começa um novo ou abre outro projeto, a cópia é descartada.

Se a aba travar, o navegador ou o computador parar, ou você sair com alterações não salvas, na próxima vez que abrir o TakeoffCraft ele pergunta **Recuperar seu trabalho?** e lista o levantamento pelo nome. Escolha **Recuperar** para tê-lo de volta: os itens, marcações e escalas retornam, e os PDFs abrem de novo se foram mantidos. A barra de status diz "Recuperado (nome). Ainda não foi salvo em arquivo: Salvar levantamento o mantém." Quando os PDFs eram grandes demais para serem mantidos, abra-os de novo; as marcações aparecem nas suas folhas. Mais: [Recuperar seu trabalho](common:recover).

## Reabrir

1. Abra o TakeoffCraft.
2. Solte o arquivo `.takeoff.json` e os seus PDFs juntos na página. Ou escolha {{ui:Abrir plantas}} para os PDFs e {{ui:Abrir levantamento}} para o projeto, em qualquer ordem.
   A barra de status diz "Aberto (nome): 12 itens, 340 marcações." Cada folha recebe a sua escala de volta, e as marcações aparecem nas suas folhas.

A ordem dos PDFs não importa, nem os nomes dos arquivos ou das pastas. O TakeoffCraft reconhece cada PDF por uma impressão digital do seu conteúdo.

Se você abrir um projeto enquanto o levantamento atual tem alterações não salvas, o TakeoffCraft pergunta antes: **Cancelar**, **Descartar alterações** ou **Salvar levantamento primeiro**. Abrir um projeto substitui os itens e as marcações atuais; os PDFs que já estão abertos continuam abertos.

## Quando um PDF está ausente

Se você abrir o projeto sem todos os seus PDFs, a barra de status acrescenta "Abra os PDFs dele para ver as marcações (listados em Folhas)." Abaixo da lista de folhas, uma nota diz:

"Este levantamento também cobre PDFs que não estão abertos. As suas quantidades são contadas; abra-os para ver e editar as marcações:"

seguido dos nomes dos arquivos e dos tamanhos. As marcações deles continuam contando em todos os totais e exportações, com as escalas em que foram medidas. Abra esses PDFs para ver e editar as marcações.

## Quando um PDF foi alterado

Um PDF que foi revisado, ou apenas salvo de novo por outro programa, tem conteúdo diferente, então é um **arquivo diferente** para o TakeoffCraft, mesmo com o mesmo nome. Na nota abaixo da lista de folhas, esse arquivo diz "um arquivo com este nome está aberto, mas o conteúdo é diferente".

- As marcações continuam ligadas à versão antiga. Elas seguem contando, nas suas posições e escalas antigas.
- O PDF revisado abre como folhas novas, sem escala e sem marcações.

Para levar o levantamento para a revisão, abra os dois PDFs e use {{ui:Comparar}} na folha nova: [Comparar uma folha revisada e mover o levantamento](topic:compare-revisions).

## Um arquivo danificado ou estranho

O TakeoffCraft verifica cada arquivo de projeto antes de usá-lo. Mensagens que você pode ver:

- "(arquivo) não é um projeto do TakeoffCraft (não é um JSON válido)."
- "Este não é um arquivo de projeto do TakeoffCraft."
- "Este projeto foi salvo por um TakeoffCraft mais novo. Abra-o lá."
- "3 marcações foram danificadas e deixadas de fora." (o restante abre)

## Histórico de desfazer

O histórico de desfazer começa do zero quando você abre um projeto. Salvar não o apaga.
