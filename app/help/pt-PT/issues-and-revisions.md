---
title: Questões, revisões e registo de alterações do desenho
summary: Mantenha um só histórico de questões com o modelo do arquiteto: leia as questões, registe instruções de obra, desenhos de fabrico e modelos ligados a uma questão, e leia o registo de alterações do desenho.
keywords: questão, questões, revisão, revisões, registo de alterações, registo de alterações do desenho, registo de desenhos, instrução de obra, desenho de fabrico, modelo ligado, concurso, construção, histórico de questões, mapa de quantidades, medição
from: 8d8f6e68
---

## O que vai fazer

Trabalhe com o mesmo histórico de questões que o resto da equipa. Veja que folhas saíram em que revisão e associe o que acontece em obra à questão a que pertence.

## Passos

1. Abra **Questões e revisões**.
2. Escolha **Ler um histórico de questões** e selecione o ficheiro `.issues.json` guardado a partir do BimCraft ou de outra aplicação. As suas questões e registos são acrescentados aos seus. Nada é substituído.
3. Escolha **Adicionar um registo** para uma instrução de obra, um desenho de fabrico, um conjunto de anotações, um modelo ligado ou uma nota. Escolha a questão a que se refere e o respetivo estado. Um ficheiro que escolher fica registado pelo nome, tamanho e SHA-256; o ficheiro mantém-se onde está.
4. **Registo de alterações do desenho** mostra uma linha para cada folha e uma coluna para cada questão. Uma revisão entre parênteses foi emitida de novo sem alterações.
5. **Transferir o registo de alterações (CSV)** guarda as questões, a tabela de folhas e os registos. **Guardar o histórico de questões** escreve um ficheiro que as outras aplicações leem.

## Bom saber

- **Registar uma questão** emite as suas folhas medidas, por exemplo com um mapa de quantidades. **Alterações desde** indica depois quais as folhas que foram medidas de novo após essa questão.
- O histórico é guardado no ficheiro de medição. Cada alteração pode ser anulada com um único {{ui:Anular}}.
- Ler o mesmo ficheiro duas vezes não acrescenta nada em duplicado. Quando duas cópias têm o mesmo registo, é mantida a mais recente.
