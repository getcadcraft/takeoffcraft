---
title: Arquivos que o TakeoffCraft abre e salva
summary: PDFs na entrada; arquivo de projeto de levantamento, planilhas e PDFs marcados na saída - o que cada um guarda, para onde vai e o que muda online, offline e entre navegadores.
keywords: arquivos, formatos, pdf, takeoff.json, arquivo de projeto, xlsx, csv, pdf marcado, baixar, salvar, abrir, offline
from: 1bf9be65
---

## O que ele abre

| Arquivo | Como | Observações |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir plantas}}, {{key:Mod+O}}, ou soltar na página | Vários de uma vez. Cada página vira uma folha. |
| Projeto de levantamento (`.takeoff.json`) | {{ui:Abrir levantamento}}, ou soltar na página | Seus itens, escalas e marcações. Você pode soltá-lo junto com seus PDFs. |

Outros arquivos soltos na página são ignorados, e a barra de status os nomeia.

- **PDFs protegidos por senha** não abrem: "(nome) está protegido por senha. Abra uma cópia sem proteção."
- **O mesmo PDF duas vezes** é aberto uma só vez: "(nome) já está aberto." O TakeoffCraft reconhece os arquivos pelo conteúdo, não pelo nome.
- **PDFs digitalizados** abrem e são medidos como qualquer outro; o TakeoffCraft não precisa do texto do PDF.
- **Conjuntos de plantas grandes**: cada PDF é lido por inteiro ao abrir (para calcular sua impressão digital), então um arquivo muito grande leva um momento. As miniaturas são desenhadas uma de cada vez conforme você rola.

## O que ele salva

Todo salvamento é um download. Nada é gravado de volta nos seus PDFs.

| Você escolhe | Você recebe | O que há nele |
|---|---|---|
| {{ui:Salvar levantamento}} | `(nome).takeoff.json` | Itens, composições, preços, escalas das folhas e todas as marcações, ligados a cada PDF pelo conteúdo. Sem páginas de PDF. |
| {{ui:XLSX}} | `(nome).xlsx` | Quatro planilhas: Orçamento (com fórmulas vivas), Por folha, Marcações, Escalas. |
| {{ui:CSV}} | `(nome).csv` | O orçamento em valores simples, uma linha por item e componente. |
| {{ui:PDF marcado}} | `(nome do PDF) (levantamento).pdf` | Uma cópia de cada PDF aberto que tem marcações, com o levantamento desenhado nas páginas e uma legenda. Um arquivo por PDF. |

O nome vem do primeiro PDF que você abriu neste levantamento. Ainda não há campo para renomear: renomeie o arquivo baixado se quiser outro nome.

Veja [Exportar o orçamento e um PDF marcado](topic:export-estimate) e [Colunas da exportação](topic:export-columns).

## Para onde vão os downloads

Seu navegador os salva onde salva todo download, normalmente a pasta Downloads. Encontre-a no {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}}. Se o navegador estiver configurado para perguntar onde salvar cada arquivo, ele pergunta.

:::chromium
{{ui:PDF marcado}} com vários PDFs marcados baixa vários arquivos de uma vez. O Chrome e o Edge podem perguntar uma vez se este site pode baixar vários arquivos. Escolha Permitir.
:::

:::safari
O Safari salva em Downloads, a menos que você tenha mudado o local de download nos Ajustes do Safari, em Geral.
:::

## Por que o arquivo de projeto e os PDFs são separados

O arquivo `.takeoff.json` guarda só o seu levantamento. Ele reencontra seus PDFs pelo conteúdo (uma impressão digital de cada arquivo), então:

- Renomear ou mover um PDF não importa.
- Um PDF alterado ou salvo de novo por outro programa conta como um arquivo diferente, mesmo com o mesmo nome.
- Marcações em PDFs que não estão abertos continuam contando nos totais.

Veja [Salvar e reabrir um levantamento](topic:save-and-reopen).

## Online e offline

Seus PDFs e levantamentos nunca saem do seu computador, online ou offline. A conexão só importa para carregar o próprio TakeoffCraft.

Para trabalhar sem conexão, salve o aplicativo antes, enquanto estiver online:

1. Escolha {{ui:Salvar para uso offline}} na barra do aplicativo, no alto.
   O botão faz a contagem, "Salvando 12 de 40", enquanto salva.
2. Espere {{ui:Pronto para uso offline}}.

Salvar o TakeoffCraft guarda no navegador o aplicativo, esta ajuda, o leitor de PDF, o gravador de PDF usado por {{ui:PDF marcado}} e o processo da contagem automática, cerca de 6 MB. Quando aparecer {{ui:Pronto para uso offline}}, tudo funciona offline: abrir PDFs, medir, {{ui:Contagem automática}}, {{ui:Salvar levantamento}}, {{ui:XLSX}}, {{ui:CSV}} e {{ui:PDF marcado}}.

| O botão diz | Significado |
|---|---|
| {{ui:Salvar para uso offline}} | Ainda não salvo neste navegador. Escolha-o para salvar. |
| Salvando (n) de (m) | Salvando agora. |
| {{ui:Pronto para uso offline}} | Salvo. Escolha-o para {{ui:Salvar de novo (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. |
| {{ui:Não foi possível salvar}} | Alguns arquivos não foram baixados. Verifique sua conexão e escolha o botão de novo. |
| {{ui:Offline indisponível}} | Esta janela do navegador não consegue guardar uma cópia offline (janelas privadas e alguns computadores gerenciados bloqueiam isso). |

Mais, inclusive quanto tempo dura uma cópia salva em cada navegador: [Trabalhar offline](common:offline).

:::offline
Você está offline. Se a barra do aplicativo mostra {{ui:Pronto para uso offline}}, tudo funciona. Se não mostra, as partes que o TakeoffCraft ainda não carregou nesta guia (o gravador de PDF para {{ui:PDF marcado}}, o processo da contagem automática) não podem carregar agora, e {{ui:PDF marcado}} para com "Não foi possível gravar o PDF marcado". Seu levantamento está seguro de qualquer forma: {{ui:Salvar levantamento}}, {{ui:XLSX}} e {{ui:CSV}} não precisam de conexão. Não recarregue a guia até voltar a ficar online.
:::

:::online
Você está online. Antes de uma visita à obra ou de um voo, escolha {{ui:Salvar para uso offline}} e espere {{ui:Pronto para uso offline}}.
:::

## Planilhas

O XLSX mantém fórmulas vivas, então um programa de planilhas recalcula o orçamento ao abrir o arquivo e o mantém correto quando você muda um preço ou uma perda lá. A pasta de trabalho foi verificada no LibreOffice Calc, que recalculou todos os totais até o mesmo centavo. Ela ainda não foi aberta no Excel.

O CSV traz valores simples com uma marca de ordem de bytes, para que os programas de planilhas leiam corretamente caracteres como m².

## Desktop e nuvem

:::desktop
A partir da 0.5, o aplicativo de desktop é o CadCraft Studio: o TakeoffCraft e os outros sete aplicativos em uma só instalação. Não há instalador separado do TakeoffCraft.
:::

O salvamento na nuvem ainda não está disponível. Guarde seus arquivos `.takeoff.json` com os PDFs da obra e faça cópia de segurança deles como de qualquer outro arquivo. Veja [Para onde vão seus arquivos](common:your-files).
