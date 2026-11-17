---
title: Emissões, revisões e histórico de alterações do desenho
summary: Mantenha um único histórico de emissões com o modelo do arquiteto: importe as emissões, registre instruções de obra, desenhos de fabricação e modelos vinculados contra uma emissão e leia o histórico de alterações do desenho.
keywords: emissão, revisão, revisões, histórico de alterações, histórico de alterações do desenho, registro de desenhos, instrução de obra, desenho de fabricação, modelo vinculado, licitação, construção, histórico de emissões, planilha de quantitativos, levantamento
from: 8d8f6e68
---

## O que você vai fazer

Trabalhe com o mesmo histórico de emissões do restante da equipe. Veja quais folhas saíram em qual revisão e registre o que acontece na obra contra a emissão a que pertence.

## Passos

1. Abra **Emissões e revisões**.
2. Escolha **Ler um histórico de emissões** e selecione o arquivo `.issues.json` salvo pelo BimCraft ou outro app. As emissões e os registros dele são adicionados aos seus. Nada é substituído.
3. Escolha **Adicionar um registro** para uma instrução de obra, um desenho de fabricação, um conjunto de marcações, um modelo vinculado ou uma nota. Escolha a emissão a que ele se refere e o status. Um arquivo escolhido é registrado pelo nome, tamanho e SHA-256; o arquivo continua onde está.
4. **Histórico de alterações do desenho** mostra uma linha para cada folha e uma coluna para cada emissão. Uma revisão entre colchetes foi emitida de novo sem alterações.
5. **Baixar o histórico de alterações (CSV)** salva as emissões, a tabela de folhas e os registros. **Salvar o histórico de emissões** grava um arquivo que os outros apps leem.

## Bom saber

- **Registrar uma emissão** emite as suas folhas medidas, por exemplo com uma planilha de quantitativos. **Alterações desde** então mostra quais folhas foram medidas de novo depois dessa emissão.
- O histórico é salvo no arquivo do levantamento. Cada alteração pode ser desfeita com uma única ação de Desfazer.
- Ler o mesmo arquivo duas vezes não adiciona nada em dobro. Quando duas cópias têm o mesmo registro, a mais recente é mantida.
