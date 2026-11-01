---
title: Ficheiros que o TakeoffCraft abre e guarda
summary: PDF à entrada, um ficheiro de projeto de medição, folhas de cálculo e PDF marcados à saída - o que cada um contém, para onde vai e o que muda online, offline e entre navegadores.
keywords: ficheiros, formatos, pdf, takeoff.json, ficheiro de projeto, xlsx, csv, pdf marcado, transferir, guardar, abrir, offline
from: 1bf9be65
---

## O que abre

| Ficheiro | Como | Notas |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir plantas}}, {{key:Mod+O}}, ou largar na página | Vários de uma vez. Cada página passa a ser uma folha. |
| Projeto de medição (`.takeoff.json`) | {{ui:Abrir medição}}, ou largar na página | Os seus artigos, escalas e marcações. Pode largá-lo juntamente com os respetivos PDF. |

Os outros ficheiros largados na página são ignorados, e a barra de estado nomeia-os.

- **Os PDF protegidos por palavra-passe** não abrem: «(name) está protegido por palavra-passe. Abra uma cópia sem proteção.»
- **O mesmo PDF duas vezes** abre-se uma só vez: «(name) já está aberto.» O TakeoffCraft reconhece os ficheiros pelo seu conteúdo, não pelo nome.
- **Os PDF digitalizados** abrem-se e medem-se como quaisquer outros; o TakeoffCraft não precisa do texto no PDF.
- **Conjuntos de plantas grandes**: cada PDF é lido por inteiro quando abre (para lhe tirar a impressão digital), pelo que um ficheiro muito grande demora um pouco. As miniaturas são desenhadas uma de cada vez à medida que se desloca.

## O que guarda

Cada gravação é uma transferência. Nada é escrito de volta nos seus PDF.

| Escolha | Obtém | O que contém |
|---|---|---|
| {{ui:Guardar medição}} | `(name).takeoff.json` | Artigos, preços compostos, preços, escalas das folhas e todas as marcações, associados a cada PDF pelo seu conteúdo. Sem páginas de PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Quatro folhas de cálculo: Orçamento (com fórmulas vivas), Por folha, Marcações, Escalas. |
| {{ui:CSV}} | `(name).csv` | O orçamento como valores simples, uma linha por artigo e componente. |
| {{ui:PDF marcado}} | `(PDF name) (takeoff).pdf` | Uma cópia de cada PDF aberto que tenha marcações, com a medição desenhada nas páginas e uma legenda. Um ficheiro por PDF. |

O nome é tirado do primeiro PDF que abriu nesta medição. Ainda não há caixa para mudar o nome: mude o nome do ficheiro transferido se quiser outro.

Veja [Exportar o orçamento e um PDF marcado](topic:export-estimate) e [Colunas de exportação](topic:export-columns).

## Para onde vão as transferências

O navegador guarda-as onde guarda todas as transferências, normalmente a pasta Transferências. Encontre-a em {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o seu gestor de ficheiros}}. Se o navegador estiver configurado para perguntar onde guardar cada ficheiro, pergunta.

:::chromium
{{ui:PDF marcado}} com vários PDF marcados transfere vários ficheiros de uma vez. O Chrome e o Edge podem perguntar uma vez se este site pode transferir vários ficheiros. Escolha Permitir.
:::

:::safari
O Safari guarda em Transferências, a menos que tenha mudado a localização das transferências nas Definições do Safari, em Geral.
:::

## Porque é que o ficheiro de projeto e os PDF são separados

O ficheiro `.takeoff.json` contém apenas a sua medição. Volta a encontrar os seus PDF pelo conteúdo deles (uma impressão digital de cada ficheiro), pelo que:

- Mudar o nome ou mover um PDF não importa.
- Um PDF que foi alterado ou guardado de novo por outro programa conta como um ficheiro diferente, mesmo com o mesmo nome.
- As marcações em PDF que não estão abertos continuam a contar nos totais.

Veja [Guardar e reabrir uma medição](topic:save-and-reopen).

## Online e offline

Os seus PDF e medições nunca saem do seu computador, online ou offline. A ligação só importa para carregar o próprio TakeoffCraft.

Para trabalhar sem ligação, guarde primeiro a aplicação, enquanto estiver online:

1. Escolha {{ui:Guardar para offline}} na barra da aplicação no topo.
   O botão conta, «A guardar 12 de 40», enquanto guarda.
2. Aguarde por {{ui:Pronto para offline}}.

Guardar o TakeoffCraft mantém no navegador a aplicação, esta ajuda, o leitor de PDF, o gravador de PDF usado por {{ui:PDF marcado}} e o processo da contagem automática, cerca de 6 MB. Quando disser {{ui:Pronto para offline}}, tudo funciona offline: abrir PDF, medir, {{ui:Contagem automática}}, {{ui:Guardar medição}}, {{ui:XLSX}}, {{ui:CSV}} e {{ui:PDF marcado}}.

| O botão diz | Significado |
|---|---|
| {{ui:Guardar para offline}} | Ainda não guardado neste navegador. Escolha-o para guardar. |
| A guardar (n) de (m) | A guardar neste momento. |
| {{ui:Pronto para offline}} | Guardado. Escolha-o para {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. |
| {{ui:Não foi possível guardar}} | Alguns ficheiros não foram transferidos. Verifique a ligação e escolha-o de novo. |
| {{ui:Offline indisponível}} | Esta janela do navegador não consegue manter uma cópia offline (as janelas privadas e alguns computadores geridos bloqueiam-no). |

Mais, incluindo quanto tempo dura uma cópia guardada em cada navegador: [Trabalhar offline](common:offline).

:::offline
Está offline. Se a barra da aplicação mostrar {{ui:Pronto para offline}}, tudo funciona. Se não mostrar, as partes que o TakeoffCraft ainda não carregou neste separador (o gravador de PDF para {{ui:PDF marcado}}, o processo da contagem automática) não podem carregar agora, e {{ui:PDF marcado}} pára com «Não foi possível escrever o PDF marcado». A sua medição está segura de qualquer forma: {{ui:Guardar medição}}, {{ui:XLSX}} e {{ui:CSV}} não precisam de ligação. Não recarregue o separador até voltar a estar online.
:::

:::online
Está online. Antes de uma visita à obra ou de um voo, escolha {{ui:Guardar para offline}} e aguarde por {{ui:Pronto para offline}}.
:::

## Folhas de cálculo

O XLSX conserva fórmulas vivas, pelo que um programa de folha de cálculo recalcula o orçamento quando abre o ficheiro e o mantém certo quando altera lá um preço ou um desperdício. O livro foi verificado no LibreOffice Calc, que recalculou todos os totais até ao cêntimo. Ainda não foi aberto no Excel.

O CSV são valores simples com uma marca de ordem de bytes, para que os programas de folha de cálculo leiam corretamente carateres como m².

## Computador e nuvem

:::desktop
A partir da 0.5, a aplicação para computador é o CadCraft Studio: o TakeoffCraft e as outras sete aplicações numa só instalação. Não há um instalador separado do TakeoffCraft.
:::

Guardar na nuvem ainda não está disponível. Mantenha os seus ficheiros `.takeoff.json` junto dos PDF da obra e faça cópias de segurança como de qualquer outro ficheiro. Veja [Para onde vão os seus ficheiros](common:your-files).
