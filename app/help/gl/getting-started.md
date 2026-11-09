---
title: Primeiros pasos con TakeoffCraft
summary: Que fai TakeoffCraft, onde funciona e a súa primeira partida medida e con prezo a partir dun conxunto de planos en PDF.
keywords: inicio, primeira medición, inicio rápido, introdución, orzamento, medición de cantidades, conxunto de planos, pdf
from: 3b9da1fb
---

TakeoffCraft mide conxuntos de planos, PDF e debuxos DWG ou DXF, e converte as medicións nun orzamento con prezos. Abre os ficheiros, dálle a cada folla unha escala (un debuxo trae a súa propia), crea **elementos** (un tipo de muro, un acabado de chan, un accesorio) e fai clic nas follas para medilos. As cantidades, os custos e o total da obra actualízanse ao momento. Pode exportar o orzamento como unha folla de cálculo e unha copia dos PDF coa medición debuxada.

Se vén de facer medicións noutros programas, lea a continuación [Dende outro software de medición](topic:coming-from). Algunhas cousas funcionan de forma distinta aquí.

## Onde funciona

TakeoffCraft funciona no seu navegador web. Abra TakeoffCraft e a pantalla está lista de inmediato; non hai nada que instalar.

- **Os seus PDF quedan no seu ordenador.** O navegador ábreos e nunca se envían. Gardar é unha descarga.
- Funciona nas versións actuais de Chrome, Edge, Firefox e Safari. Consulte [Navegadores e ordenadores](common:browsers).
- Funciona sen conexión a internet unha vez que escolla {{ui:Gardar para usar sen conexión}} na barra da aplicación e diga {{ui:Listo sen conexión}}. Consulte [Traballar sen conexión](common:offline).
- O gardado na nube aínda non está dispoñible. Para unha aplicación de escritorio, TakeoffCraft vén en CadCraft Studio, cas outras sete aplicacións.

## A súa primeira medición en dez pasos

Este percorrido mide un tipo de muro e pon prezo. Leva uns minutos con calquera plano que teña.

1. Escolla {{ui:Abrir planos}} no grupo {{ui:Ficheiro}} da barra de ferramentas (ou prema {{key:Mod+O}}), escolla un ou varios PDF e escolla Abrir. Tamén pode soltar os PDF en calquera lugar da páxina.
   As follas aparecen á esquerda e a primeira folla ábrese no centro.
2. Busque a escala impresa da folla no seu bloque de títulos ou debaixo do título do debuxo.
3. Abra a lista {{ui:Predefinida}} do grupo {{ui:Escala}} e escolla esa escala, por exemplo `1/4" = 1'-0"`.
   A barra inferior da folla diz agora "Escala 1/4" = 1'-0"".
4. Escolla {{ui:Comprobar}} (ou prema {{key:D}}) e faga clic nos dous extremos dunha cota impresa no debuxo.
   A lectura na barra de estado, abaixo á esquerda, debe coincidir coa cota impresa. Se non coincide, consulte [Definir a escala](topic:set-the-scale).
5. No panel {{ui:Elementos}} da dereita, escolla {{ui:Novo elemento}}, escriba un nome como `Tipo de muro interior A`, deixe o tipo en {{ui:Lineal (lonxitude)}} e escolla {{ui:Engadir}}.
6. Escolla {{ui:Lineal}} na barra de ferramentas (ou prema {{key:L}}).
7. Faga clic no inicio dun muro e despois en cada esquina ao longo del. Faga dobre clic, prema {{key:Enter}} ou o botón dereito para rematar o tramo.
   O tramo debúxase coa cor do elemento e a súa lonxitude aparece xunto ao elemento.
8. No editor de elementos debaixo de {{ui:Elementos}}, escriba `9'-0"` en {{ui:Altura}}, `0.85` en {{ui:Material $/LF}} e `1.20` en {{ui:Man de obra $/LF}}.
   A táboa {{ui:Cantidades}} da parte inferior mostra a lonxitude, o material e a man de obra estendidos, e o {{ui:Total da obra}}.
9. Escolla {{ui:Gardar medición}} (ou prema {{key:Mod+S}}).
   O navegador descarga un ficheiro `.takeoff.json`. Contén os seus elementos, escalas e marcas, e reábrese sobre os mesmos PDF.
10. Abra o menú {{ui:Exportar}} da barra de ferramentas e escolla {{ui:XLSX}} para descargar o orzamento como folla de cálculo.

:::tip
Prema {{key:Esc}} para deixar o que estea facendo e volver á ferramenta {{ui:Seleccionar}}. {{key:Mod+Z}} desfai calquera cambio.
:::

## Que ler a continuación

- [A pantalla de TakeoffCraft](topic:workspace) nomea cada parte da xanela.
- [Iniciar unha medición e abrir un conxunto de planos](topic:open-plan-set) trata varios PDF e a lista de follas.
- [Crear elementos de medición](topic:create-items) explica tipos, unidades, desperdicio e tarifas.
- [Conxuntos e fórmulas](topic:assemblies) converte unha medida en montantes, follas de taboleiro e máis.
- [Teclado e rato](topic:keyboard) lista todas as teclas.
