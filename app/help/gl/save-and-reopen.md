---
title: Gardar e reabrir unha medición
summary: Garde a medición como un proxecto .takeoff.json, reábraa cos mesmos PDF, e o que pasa cando falta un PDF ou cambiou.
keywords: medición dentro do PDF, incrustar, anexo, gardar, abrir, reabrir, proxecto, takeoff.json, retomar, continuar, PDF revisado, PDF cambiado, PDF que falta, copia de seguranza, gardado automático, recuperar, fallo
from: bd5080a6
---

Unha medición gárdase como un pequeno ficheiro de proxecto, `(name).takeoff.json`. Contén os seus elementos, conxuntos, tarifas, a escala de cada folla e cada marca. **Non** contén os PDF; atópaos de novo polo seu contido.

## Gardar

1. Escolla {{ui:Save takeoff}} no grupo {{ui:File}}, ou prema {{key:Mod+S}}.
   O seu navegador descarga `(name).takeoff.json`. A barra de estado indica «Gardado (name).takeoff.json. Reábrese sobre os mesmos PDF (coinciden polo seu contido).»
2. Mova o ficheiro xunto aos PDF do traballo, para que os dous queden xuntos.

Cada gardado descarga un ficheiro novo. O seu navegador pode nomear o segundo como `(name) (1).takeoff.json`; quede co máis recente.

O nome procede do primeiro PDF que abriu nesta medición.

:::note
Gardar medición segue sendo a única forma de conservar unha medición como ficheiro. Mentres traballa, TakeoffCraft tamén garda unha copia de recuperación neste navegador (vexa abaixo), e o gardado na nube aínda non está dispoñible. Se tenta pechar a lapela con cambios sen gardar, o navegador pregunta se quere saír.
:::

## Manter a medición dentro do PDF

{{ui:Export}} › {{ui:PDF with the takeoff inside}} descarga unha copia de cada PDF aberto, con nome como `Plans (with takeoff).pdf`, que leva toda a medición como anexo: elementos, marcas, escalas, zonas de oferta, todo o que contén o `.takeoff.json`. As súas páxinas non se modifican, así que se ven e se imprimen como o orixinal, e outros lectores de PDF listan a medición entre os seus anexos.

Abra ese PDF en TakeoffCraft (de calquera maneira que abra PDF) e preguntará **Este PDF ten unha medición dentro**: escolla {{ui:Open the takeoff}} para recuperala, ou {{ui:Just the PDF}} para abrir só o debuxo. A copia representa o PDF do que procede, así que un `.takeoff.json` gardado desde calquera dos dous ábrese en ambos.

Con varios PDF, cada copia leva toda a medición; ábraos xuntos. Gardar de novo desde unha copia substitúe a medición que leva dentro, non engade unha segunda. O `.takeoff.json` segue sendo o ficheiro que hai que conservar: é pequeno, e é o que escriben o gardado automático e a aplicación de escritorio.

## Se a lapela ou o navegador se deteñen

Uns segundos despois de cada cambio, TakeoffCraft garda unha copia da medición no almacenamento propio deste navegador, xunto cos seus PDF cando suman 64 MB ou menos. Non se envía nada. Cando garda a medición, comeza unha nova ou abre outro proxecto, a copia elimínase.

Se a lapela falla, o navegador ou o ordenador se deteñen, ou sae con cambios sen gardar, a próxima vez que abra TakeoffCraft preguntará **Recuperar o seu traballo?** e listará a medición polo nome. Escolla **Recuperar** para recuperala: os elementos, as marcas e as escalas volven, e os seus PDF ábrense de novo se se conservaron. A barra de estado indica «Recuperado (name). Aínda non está gardado nun ficheiro: Gardar medición o conserva.» Cando os PDF eran demasiado grandes para conservarse, ábraos de novo; as marcas aparecen nas súas follas. Máis: [Recuperar o seu traballo](common:recover).

## Reabrir

1. Abra TakeoffCraft.
2. Solte o ficheiro `.takeoff.json` e os seus PDF na páxina á vez. Ou escolla {{ui:Open plans}} para os PDF e {{ui:Open takeoff}} para o proxecto, en calquera orde.
   A barra de estado indica «Aberto (name): 12 elementos, 340 marcas.» Cada folla recupera a súa escala e as marcas aparecen nas súas follas.

A orde dos PDF non importa, nin os seus nomes ou cartafoles. TakeoffCraft recoñece cada PDF por unha pegada do seu contido.

Se abre un proxecto mentres a medición actual ten cambios sen gardar, TakeoffCraft pregunta primeiro: **Cancelar**, **Descartar os cambios** ou **Gardar a medición primeiro**. Abrir un proxecto substitúe os elementos e as marcas actuais; os PDF que xa están abertos seguen abertos.

## Cando falta un PDF

Se abre o proxecto sen todos os seus PDF, a barra de estado engade «Abra os seus PDF para ver as marcas (listados en Follas).» Debaixo da lista de follas, unha nota di:

«Esta medición tamén cobre PDF que non están abertos. As súas cantidades contan; ábraos para ver e editar as súas marcas:»

seguido dos nomes de ficheiro e tamaños. As súas marcas seguen contando en todos os totais e exportacións, coas escalas coas que se midiron. Abra eses PDF para ver e editar as marcas.

## Cando cambiou un PDF

Un PDF que foi revisado, ou que outro programa volveu gardar, ten contidos distintos, así que para TakeoffCraft é un **ficheiro diferente**, aínda que teña o mesmo nome. Na nota debaixo da lista de follas, ese ficheiro di «hai un ficheiro con este nome aberto, pero os seus contidos difiren».

- As marcas quedan unidas á versión antiga. Seguen contando, nas súas posicións e escalas antigas.
- O PDF revisado abre como follas novas, sen escala e sen marcas.

Para mover a medición á revisión, abra os dous PDF e use {{ui:Compare}} na folla nova: [Comparar unha folla revisada e mover a medición](topic:compare-revisions).

## Un ficheiro danado ou allea

TakeoffCraft comproba cada ficheiro de proxecto antes de usalo. Mensaxes que pode ver:

- «(file) non é un proxecto de TakeoffCraft (non é JSON válido).»
- «Este non é un ficheiro de proxecto de TakeoffCraft.»
- «Este proxecto foi gardado por un TakeoffCraft máis novo. Ábraao alí.»
- «3 marcas estaban danadas e déixanse fóra.» (o resto ábrese)

## Historial de desfacer

O historial de desfacer comeza de novo cando abre un proxecto. Gardar non o borra.
