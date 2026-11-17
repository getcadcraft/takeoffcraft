---
title: Guardar e reabrir uma medição
summary: Guardar a medição como projeto .takeoff.json, reabri-la com os mesmos PDF, e o que acontece quando um PDF está em falta ou foi alterado.
keywords: medição dentro do PDF, incorporar, anexo, guardar, abrir, reabrir, projeto, takeoff.json, retomar, continuar, PDF revisto, PDF alterado, PDF em falta, cópia de segurança, gravação automática, recuperar, falha
from: bd5080a6
---

Uma medição é guardada como um pequeno ficheiro de projeto, `(name).takeoff.json`. Contém os seus artigos, preços compostos, preços unitários, a escala de cada folha e cada marca. **Não** contém os PDF; o TakeoffCraft volta a encontrá-los pelo seu conteúdo.

## Guardar

1. Escolha {{ui:Save takeoff}} no grupo {{ui:File}}, ou prima {{key:Mod+S}}.
   O seu navegador transfere `(name).takeoff.json`. A barra de estado diz «Guardado (name).takeoff.json. Reabre-se nos mesmos PDF (são identificados pelo seu conteúdo).»
2. Mova o ficheiro para junto dos PDF do trabalho, para que os dois fiquem juntos.

Cada gravação transfere um novo ficheiro. O navegador pode dar ao segundo o nome `(name) (1).takeoff.json`; guarde o mais recente.

O nome vem do primeiro PDF que abriu nesta medição.

:::note
Guardar a medição continua a ser a única forma de manter uma medição como ficheiro. Enquanto trabalha, o TakeoffCraft também guarda uma cópia de recuperação neste navegador (ver abaixo), e a gravação na nuvem ainda não está disponível. Se tentar fechar o separador com alterações não guardadas, o navegador pergunta se deve sair.
:::

## Manter a medição dentro do PDF

{{ui:Export}} › {{ui:PDF with the takeoff inside}} transfere uma cópia de cada PDF aberto, com um nome como `Plans (with takeoff).pdf`, que traz a medição completa como anexo: artigos, marcas, escalas, áreas de proposta, tudo o que o `.takeoff.json` contém. As suas páginas não são alteradas, por isso aparece e imprime como o original, e outros leitores de PDF listam a medição nos seus anexos.

Abra esse PDF no TakeoffCraft (de qualquer forma que use para abrir PDF) e ele pergunta **Este PDF tem uma medição dentro**: escolha {{ui:Open the takeoff}} para a recuperar, ou {{ui:Just the PDF}} para abrir apenas o desenho. A cópia representa o PDF de que foi feita, por isso um `.takeoff.json` guardado a partir de qualquer um dos dois abre em ambos.

Com vários PDF, cada cópia traz a medição completa; abra-as em conjunto. Guardar de novo a partir de uma cópia substitui a medição dentro dela, não acrescenta uma segunda. O `.takeoff.json` continua a ser o ficheiro a guardar: é pequeno, e é o que a gravação automática e a aplicação de ambiente de trabalho escrevem.

## Se o separador ou o navegador parar

Alguns segundos depois de cada alteração, o TakeoffCraft guarda uma cópia da medição no armazenamento próprio deste navegador, juntamente com os seus PDF quando somam 64 MB ou menos. Nada é enviado. Ao guardar a medição, criar uma nova ou abrir outro projeto, a cópia é apagada.

Se o separador falhar, o navegador ou o computador parar, ou sair com alterações não guardadas, na próxima vez que abrir o TakeoffCraft ele pergunta **Recuperar o seu trabalho?** e lista a medição pelo nome. Escolha **Recuperar** para a recuperar: os artigos, as marcas e as escalas voltam, e os seus PDF abrem de novo se foram guardados. A barra de estado diz «Recuperado (name). Ainda não está guardado num ficheiro: Guardar medição mantém-na.» Quando os PDF eram grandes demais para guardar, abra-os de novo; as marcas aparecem nas respetivas folhas. Mais: [Recuperar o seu trabalho](common:recover).

## Reabrir

1. Abra o TakeoffCraft.
2. Arraste o ficheiro `.takeoff.json` e os seus PDF para a página em conjunto. Ou escolha {{ui:Open plans}} para os PDF e {{ui:Open takeoff}} para o projeto, por qualquer ordem.
   A barra de estado diz «Aberto (name): 12 artigos, 340 marcas.» Cada folha recupera a sua escala e as marcas aparecem nas respetivas folhas.

A ordem dos PDF não importa, nem os seus nomes ou pastas. O TakeoffCraft reconhece cada PDF por uma impressão digital do seu conteúdo.

Se abrir um projeto enquanto a medição atual tem alterações não guardadas, o TakeoffCraft pergunta primeiro: **Cancelar**, **Descartar alterações** ou **Guardar a medição primeiro**. Abrir um projeto substitui os artigos e as marcas atuais; os PDF já abertos continuam abertos.

## Quando falta um PDF

Se abrir o projeto sem todos os seus PDF, a barra de estado acrescenta «Abra os PDF para ver as marcas (listados em Folhas).» Por baixo da lista de folhas, uma nota diz:

«Esta medição também abrange PDF que não estão abertos. As suas quantidades são contadas; abra-os para ver e editar as suas marcas:»

seguido dos nomes e tamanhos dos ficheiros. As suas marcas continuam a contar em todos os totais e exportações, com as escalas em que foram medidas. Abra esses PDF para ver e editar as marcas.

## Quando um PDF foi alterado

Um PDF que foi revisto, ou apenas gravado de novo por outro programa, tem conteúdo diferente, por isso é um **ficheiro diferente** para o TakeoffCraft, mesmo com o mesmo nome. Na nota por baixo da lista de folhas, esse ficheiro diz «um ficheiro com este nome está aberto, mas o conteúdo é diferente».

- As marcas ficam associadas à versão antiga. Continuam a contar, nas suas posições e escalas antigas.
- O PDF revisto abre como folhas novas, sem escala e sem marcas.

Para passar a medição para a revisão, abra os dois PDF e use {{ui:Compare}} na folha nova: [Comparar uma folha revista e mover a medição](topic:compare-revisions).

## Um ficheiro danificado ou estranho

O TakeoffCraft verifica cada ficheiro de projeto antes de o usar. Mensagens que pode ver:

- «(file) não é um projeto do TakeoffCraft (não é JSON válido).»
- «Este não é um ficheiro de projeto do TakeoffCraft.»
- «Este projeto foi guardado por um TakeoffCraft mais recente. Abra-o aí.»
- «3 marcas foram danificadas e deixadas de fora.» (o resto abre)

## Histórico de anulações

O histórico de anulações começa de novo quando abre um projeto. Guardar não o apaga.
