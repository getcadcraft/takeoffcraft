---
title: Envia un paquet per a ofertes
summary: Envieu per correu electrònic un paquet d'ofertes als subcontractistes, deixeu que introdueixin preus en una pàgina que no necessita compte, mantingueu els preus segellats fins a l'hora d'obertura i importeu-los al full de nivellació.
keywords: envia per a ofertes, invitació, invitació a ofertar, licitador, subcontractista, convida, correu electrònic, sol·licitud de preu, ofertes segellades, obertura d'ofertes, dia de l'oferta, oferta tardana, data límit, recordatori, registres de subcontractistes, assegurança, qualificació, csv, connecta, PDF de fulls
from: fb314b2c
---

{{ui:Exporta}} › {{ui:Paquets d'ofertes i nivellació…}} › {{ui:Envia per a ofertes…}} envia un paquet a les persones que trieu. El lloc web envia a cadascuna un enllaç per correu electrònic; obren una pàgina, veuen l'abast i escriuen un preu per a cada línia. Veieu els preus al full de nivellació, a punt per comparar ([Paquets d'ofertes i nivellació](topic:bid-leveling)).

:::note
L'enviament **encara no està obert a tothom.** Mentre la funció és en prova, funciona per als comptes que l'equip de CadCraft ha habilitat; si el vostre no ho és, el diàleg ho indica. La pàgina del licitador funciona per a totes les invitacions que s'han enviat.
:::

## Abans d'enviar

- Cal un compte de CadCraft amb una adreça de correu electrònic verificada. TakeoffCraft al navegador us demana de **connectar-vos**: s'obre una pestanya a getcadcraft.com, premeu **Connecta**, i aquella pestanya obté una sessió que funciona durant 30 dies, només per a paquets d'ofertes, fins que tanqueu la pestanya de TakeoffCraft. La podeu eliminar en qualsevol moment a la vostra pàgina de seguretat. Una finestra de Studio encara no pot enviar.
- Doneu a cada element un número CSI: un paquet són els elements d'una divisió CSI ([Crea elements de l'amidament](topic:create-items)).
- Escaleu els fulls on hi ha les marques del paquet, perquè les quantitats que veuen els licitadors estiguin mesurades.

## Envia un paquet

1. Trieu {{ui:Envia per a ofertes…}} sota el paquet.
2. Ompliu el títol, el projecte i un missatge opcional, i la **data límit** amb el vostre fus horari.
3. Deixeu marcada l'opció **Mantén els preus segellats** per amagar cada preu fins a l'**hora d'obertura** (no abans de la data límit), o desmarqueu-la per veure els preus a mesura que arriben.
4. Deixeu marcada la casella de fulls per enviar un PDF dels fulls que contenen les marques del paquet, amb les marques dibuixades. Els vostres preus mai no són a l'enviament: només els noms dels elements, els números CSI, les quantitats, les unitats i els noms dels fulls.
5. Escriviu les persones a convidar, una per línia, com `Nom <nom@empresa.com>` o només l'adreça, o marqueu persones dels vostres registres de subcontractistes. Fins a 60 cada vegada, 100 per paquet.
6. Trieu {{ui:Envia invitacions}}. Cada persona rep un sol correu electrònic simple amb el vostre nom i la vostra adreça de correu, la data límit i l'enllaç; les respostes us arriben a vosaltres.

El diàleg us indica quantes se n'han enviat i esmenta les que s'han omès: ja convidades a aquest paquet, que han demanat no rebre invitacions a ofertar, adreça no vàlida, o que superen un límit d'enviament.

## Què veu el licitador

Una pàgina amb un enllaç privat llarg, sense inici de sessió. Mostra qui els ha convidat, la data límit, si els preus són segellats, el vostre missatge i el PDF de fulls, i després cada línia amb la seva quantitat. Per a cada línia escriuen un preu o marquen **No inclòs**, i poden afegir una nota; també poden afegir notes per a tot el paquet i fins a 3 fitxers (una cotització, una carta d'abast, un certificat). Poden desar de nou i canviar els seus preus fins a l'obertura, o **rebutjar**, amb una casella per demanar que CadCraft no els torni a enviar invitacions a ofertar.

## Ofertes segellades i l'obertura

Abans de l'hora d'obertura **ningú** no veu cap preu, nota ni fitxer: ni vosaltres, ni a TakeoffCraft, ni a la vostra pàgina de Paquets d'ofertes. Veieu qui ha estat convidat i si ha respost. A l'hora d'obertura totes les ofertes es mostren alhora. Una oferta desada després de la data límit s'accepta i es marca com a **tardana**; la nivellació la continua llistant, i la tardança és una marca, no una resolució. Després de l'obertura un licitador no pot canviar cap preu. Sense segellat, una oferta és definitiva quan venç la data límit.

## Obté els preus

{{ui:Obté els preus}} consulta el lloc web i afegeix cada resposta al paquet com una oferta, marcada amb **web**. TakeoffCraft també consulta en silenci cada vegada que obriu el diàleg mentre hi estigui connectat. Una oferta on el licitador ha desat una versió nova s'actualitza al mateix lloc; una oferta que heu editat es queda com la vau deixar fins que n'envien una de nova. Cada descàrrega és un pas que {{key:Mod+Z}} desfà. Les línies no incloses arriben com l'abast que l'oferta deixa fora, de manera que la nivellació les omple al vostre propi cost.

## Al lloc web

El vostre compte té dues pàgines més quan ja podeu enviar: **Paquets d'ofertes** enumera el que heu enviat, qui ha respost, les ofertes tardanes i els fitxers, i permet enviar un recordatori (un enllaç nou; l'antic deixa de funcionar), tancar, reobrir o cancel·lar un paquet; **Subcontractistes** manté un registre per a cada empresa: contactes, especialitats, respostes de qualificació (anys d'activitat, capacitat d'avalar, EMR, historial de seguretat, sindicat o sense sindicat, referències), dates de venciment de llicència i assegurança, marcades un cop passades o dins dels 30 dies, i les seves ofertes anteriors. Importeu i exporteu els registres en CSV: una fila per contacte, amb les columnes que mostra l'exportació; una empresa que ja teniu s'actualitza, mai no es repeteix.

## Qui veu què, i durant quant temps

Els preus, les notes i els fitxers del licitador van a vosaltres i a l'equip de CadCraft, que gestiona la pàgina. Es conserven durant 24 mesos després de la data límit, i els fitxers durant 180 dies; després se suprimeixen. L'adreça de correu del licitador és la que heu introduït; només s'utilitza per enviar la invitació i els recordatoris corresponents. Una adreça rep com a màxim 3 invitacions al dia entre tots els remitents, i vosaltres podeu enviar fins a 200 al dia.

## Encara no implementat

Les addendes, les cartes d'adjudicació, un full d'abast validat per cada licitador i els recordatoris automàtics abans que venci una assegurança encara no estan implementats. Vegeu [Encara no implementat](topic:not-built-yet).
