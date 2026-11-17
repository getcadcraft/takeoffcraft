---
title: Teclado e rato
summary: Cada tecla, rato, panel táctil e acción táctil en TakeoffCraft, agrupados, con as diferenzas por plataforma.
keywords: teclas, atallos, teclas rápidas, teclado, rato, panel táctil, tacto, desprazar, zoom, roda, clic dereito, dobre clic, espazo, shift, copiar, pegar, cortar, duplicar, seleccionar todo
from: 6f2c441d
---

As teclas de letras funcionan cando o punteiro está en calquera parte da páxina e non está a escribir nun campo. Cando hai unha xanela de diálogo aberta, aplícanse as súas propias teclas. As letras funcionan con ou sen {{key:Shift}}.

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (encher un cuarto cun clic) |
| {{key:R}} | {{ui:Arc}} activado ou desactivado (en Lineal, Superficie e Recorte) |
| {{key:E}} | {{ui:Deduct}} activado ou desactivado: os seguintes segmentos dun tramo debúxanse pero non se contan |
| Un díxito, `@` ou `#` mentres debuxa | Abrir a caixa {{ui:Type}}: escriba unha lonxitude ou coordenadas; {{key:Enter}} coloca o punto ([Medir tramos lineais](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (seleccione antes unha superficie) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | {{ui:Check}} a escala |

## Mentres debuxa

| Tecla ou acción | Que fai |
|---|---|
| Clic | Colocar un punto (un punto, con Contar). |
| {{key:P}} | Ruta: escoller todo o trazo conectado dunha liña do PDF, ou o contorno ao redor dun clic ([Escoller as liñas do PDF](topic:pick-the-lines)). |
| {{key:F3}} | Axuste ás liñas do debuxo activado ou desactivado ([Axustar ás liñas do debuxo](topic:snap-to-the-drawing)). |
| {{key:Shift}} mantido mentres fai clic | Axusta o segmento a 0°, 45°, 90° ou 135° desde o último punto. Non vale para puntos de arco nin círculos. |
| Dobre clic | Rematar un tramo, ou pechar unha superficie ou un recorte. |
| {{key:Enter}} | Rematar un tramo, ou pechar unha superficie ou un recorte. |
| Clic dereito (sen mover) | Rematar un tramo, ou pechar unha superficie ou un recorte. |
| Clic no primeiro punto | Pechar unha superficie ou un recorte (desde o terceiro punto). |
| {{key:Backspace}} ou {{key:Delete}} | Eliminar o último punto (primeiro o punto de arco pendente). |
| {{key:Esc}} | Descartar o punto de arco pendente; despois cancelar a marca sen rematar; despois volver a {{ui:Select}}. |

## Seleccionar e editar

| Tecla ou acción | Que fai |
|---|---|
| Clic nunha marca (ferramenta Seleccionar) | Seleccionala e facer actual o seu elemento. |
| {{key:Shift}} + clic nunha marca | Engadila á selección, ou quitala. |
| {{key:Mod+A}} | Seleccionar cada marca da folla aberta. |
| Arrastrar un manexador de esquina | Mover ese punto ({{key:Shift}} axusta a 45°). Funciona cando hai unha marca seleccionada. |
| {{key:Delete}} ou {{key:Backspace}} | Eliminar as marcas seleccionadas (cando non está debuxando). |
| {{key:Esc}} | Non seleccionar nada: borrar a selección e a liña de comprobación. |
| {{key:Mod+Z}} | Desfacer. |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refacer. |

## Copiar e pegar

| Tecla | Que fai |
|---|---|
| {{key:Mod+C}} | Copiar as marcas seleccionadas, cos seus elementos. |
| {{key:Mod+X}} | Cortar: copiar as marcas seleccionadas e despois eliminalas. |
| {{key:Mod+V}} | Pegar: a copia segue o punteiro; faga clic onde debe ir. |
| {{key:Mod+Shift+V}} | Pegar no mesmo sitio: o mesmo lugar na folla aberta. |
| {{key:Mod+D}} | Duplicar as marcas seleccionadas: a copia segue o punteiro; faga clic onde debe ir. |
| {{key:Esc}} | Non deixar nada: cancelar unha pegada ou un duplicado que está no punteiro. |

As letras soas seguen escollendo ferramentas ({{key:C}} é {{ui:Count}}, {{key:D}} é {{ui:Check}}, {{key:X}} é {{ui:Cut-out}}, {{key:V}} é {{ui:Select}}, {{key:A}} é {{ui:Area}}); só {{key:Mod}} con elas copia e pega. Nun campo de texto, estas teclas copian e pegan texto como de costume. Vexa [Copiar, pegar e duplicar marcas](topic:copy-paste).

:::warning
{{key:Backspace}} elimina a marca seleccionada cando non está debuxando. Se pasa por erro, {{key:Mod+Z}} a devolve.
:::

## Ficheiros

| Tecla | Que fai |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Estas dúas funcionan aínda que estea escribindo nun campo.

## Vista e follas

| Tecla ou acción | Que fai |
|---|---|
| Roda do rato | Zoom para dentro e para fóra no punteiro. |
| Arrastrar (botón esquerdo, central ou dereito) | Desprazar. En {{ui:Auto count}}, un arrastre co botón esquerdo debuxa a caixa de busca. |
| {{key:Space}} mantido + arrastre | Desprazar, en calquera ferramenta. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} ou {{key:=}} | Zoom para dentro no centro da vista. |
| {{key:Minus}} | Zoom para fóra no centro da vista. |
| {{key:PageDown}} / {{key:PageUp}} | Folla seguinte ou anterior na lista de follas. |
| {{key:Ctrl+Shift+F}} | Alternar os modos de pantalla completa (Control en todas as plataformas, tamén nun Mac). |
| {{key:F1}} | Abrir ou pechar esta axuda, un panel ao lado. |
| {{key:3}} | A vista de comprobación 3D da folla, activada ou desactivada. |

## Vista 3D

| Tecla ou acción | Que fai |
|---|---|
| Arrastrar, ou arrastrar co botón central | Orbitar. |
| {{key:Shift}} + arrastre, ou arrastrar co botón dereito | Desprazar. |
| Roda do rato | Zoom no punteiro. Nun panel táctil, un desprazamento con dous dedos orbita e un pitido de pinza fai zoom. |
| Clic | Seleccionar a marca baixo o punteiro ({{key:Shift}} + clic engade ou quita). |
| {{key:F}} ou {{key:W}} | Zoom a todo. |
| {{key:3}} | Volver á folla plana. |

Vexa [Comprobar a medición en 3D](topic:check-in-3d).

## Contaxe automática

| Tecla ou acción | Que fai |
|---|---|
| Arrastrar unha caixa | Encerrar o símbolo que buscar (inicia a busca). |
| Clic nunha caixa de coincidencia | Rexeitala, ou restaurala. |
| {{key:Esc}} | Cancelar unha busca en curso, ou descartar a revisión. |

## Axuda

| Tecla | Que fai |
|---|---|
| {{key:F1}} | Abrir ou pechar o panel de axuda (tamén o botón {{ui:Help}} da barra de aplicación). Funciona en todas as ferramentas, aínda que estea escribindo nun campo. |
| {{key:Esc}} | Pechar o panel de axuda. No seu campo de busca, o primeiro Esc borra a busca. Mentres o panel está aberto, un Esc pulsado despois de facer clic na folla pecha primeiro o panel; prema de novo para cancelar en TakeoffCraft. |

:::mac
Nos teclados Mac, a fila superior controla o brillo e o son. Prema fn con F1, ou active «Usar as teclas F1, F2, etc. como teclas de función estándar» en Configuración do sistema, en Teclado.
:::

## Diálogos e campos

| Tecla | Que fai |
|---|---|
| {{key:Enter}} | Nun campo: aplicar o valor. No diálogo de calibrar: {{ui:Set the scale}}. |
| {{key:Esc}} | Pechar un diálogo (como {{ui:Cancel}}); pechar o formulario {{ui:New item}}. |
| {{key:Tab}} | Pasar ao campo seguinte. |

## Notas por plataforma

:::mac
- {{key:Mod}} é a tecla Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. A pantalla completa é a excepción: Control+Shift+F.
- O clic dereito é un clic con dous dedos no trackpad, unha vez activado o clic secundario en Configuración do sistema, en Trackpad. TakeoffCraft lee só o botón secundario; un clic con Control pode contar como clic simple e engadir un punto.
- Desprazar con dous dedos no trackpad fai zoom na folla (non a despraza). Para desprazar, prema e arrastre, ou manteña {{key:Space}} e arrastre.
- Page Up e Page Down son fn coas frechas arriba e abaixo, nos teclados que non as teñen.
- Backspace é a tecla que di delete.
:::

:::windows
- {{key:Mod}} é Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Nun panel táctil de portátil, un desprazamento con dous dedos fai zoom na folla. Para desprazar, prema e arrastre.
:::

:::linux
- {{key:Mod}} é Ctrl. Algúns escritorios usan atallos propios con Ctrl+Alt ou Super; TakeoffCraft non usa ningún deles.
- Nun panel táctil, un desprazamento con dous dedos fai zoom na folla. Para desprazar, prema e arrastre.
:::

:::touch
TakeoffCraft lee o tacto como un único punteiro:

- Tocar coloca un punto, selecciona unha marca ou engade un punto de contaxe.
- Arrastrar cun dedo despraza a folla (en {{ui:Auto count}} debuxa a caixa de busca).
- O zoom con pinza aínda non é compatible. Use {{ui:Fit page}} e {{ui:Fit width}}, ou {{key:Plus}} e {{key:Minus}} nun teclado.
- Para pechar unha superficie, toque o seu primeiro punto. Para rematar un tramo, toque dúas veces onde o navegador converte un dobre toque nun dobre clic, ou prema {{key:Enter}} nun teclado.
- Non hai lectura de lonxitude en directo ata que toque, porque non hai pasar por enriba.

Hoxe, un teclado e rato ou un panel táctil é a mellor forma de facer a medición.
:::

## Teclas que o navegador conserva

Os navegadores reservan algúns atallos para si, e unha páxina non os pode usar: pechar a lapela ({{key:Mod+W}}), nova lapela ou xanela ({{key:Mod+T}}, {{key:Mod+N}}) e zoom do navegador ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Por iso TakeoffCraft fai zoom na folla coa roda e coas teclas {{key:Plus}} e {{key:Minus}} soas. Se preme {{key:Mod+Plus}} por erro, crece toda a páxina; {{key:Mod+0}} a devolve ao tamaño normal. Vexa [Teclas, ratos e panos táctiles](common:keys).

## Onde está Mover

Non hai comando Mover: seleccione un punto de contaxe e arrástreo, ou seleccione unha superficie ou unha liña e arrastre os seus manexadores de esquina.
