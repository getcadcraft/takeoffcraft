---
title: Emisións, revisións e rexistro de cambios do debuxo
summary: Manteña un único historial de emisións co modelo do arquitecto: lea as emisións, rexistre instrucións de obra, debuxos de taller e modelos vinculados fronte a unha emisión, e lea o rexistro de cambios do debuxo.
keywords: emisión, revisión, revisións, rexistro de cambios, rexistro de cambios do debuxo, rexistro de debuxos, instrución de obra, debuxo de taller, modelo vinculado, concurso, construción, historial de emisións, cadro de cantidades, medición
from: 8d8f6e68
---

## Que vai facer

Traballe co mesmo historial de emisións que o resto do equipo. Vexa que follas saíron en cada revisión, e rexistre o que ocorre na obra fronte á emisión á que pertence.

## Pasos

1. Abra **Emisións e revisións**.
2. Escolla **Ler un historial de emisións** e seleccione o ficheiro `.issues.json` gardado desde BimCraft ou outra aplicación. As súas emisións e rexistros engádense aos seus. Non se substitúe nada.
3. Escolla **Engadir un rexistro** para unha instrución de obra, un debuxo de taller, un conxunto de anotacións, un modelo vinculado ou unha nota. Seleccione a emisión á que corresponde e o seu estado. Un ficheiro que escolla rexístrase polo seu nome, tamaño e SHA-256; o ficheiro queda onde está.
4. **Rexistro de cambios do debuxo** mostra unha fila por cada folla e unha columna por cada emisión. Unha revisión entre corchetes foi emitida de novo sen cambios.
5. **Descargar o rexistro de cambios (CSV)** garda as emisións, a táboa de follas e os rexistros. **Gardar o historial de emisións** escribe un ficheiro que lean as outras aplicacións.

## Cousas para ter en conta

- **Rexistrar unha emisión** emite as súas follas medidas, por exemplo cun cadro de cantidades. **Cambios desde** indica entón que follas se volveron medir despois desa emisión.
- O historial gárdase no ficheiro de medición. Cada cambio é un paso de Desfacer.
- Ler o mesmo ficheiro dúas veces non engade nada por duplicado. Cando dúas copias conteñen o mesmo rexistro, consérvase a máis recente.
