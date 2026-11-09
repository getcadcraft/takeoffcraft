---
title: A pantalla de TakeoffCraft
summary: Un percorrido pola xanela polo nome que aparece na pantalla - a barra de ferramentas, a lista de follas, a folla, o panel de Elementos, a táboa de Cantidades e a barra de estado.
keywords: pantalla, disposición, cinta, navegador do proxecto, caixa de ferramentas, caixa de información, barra de ferramentas, paneis, lista de follas, panel de elementos, cantidades, barra de estado, percorrido, interface
from: ab1115e0
---

TakeoffCraft ocupa a xanela do navegador debaixo da barra da aplicación de CadCraft. De arriba abaixo e de esquerda a dereita:

| Parte | Onde | Para que serve |
|---|---|---|
| Barra da aplicación | Enriba de todo | O nome da aplicación, a versión, {{ui:Acerca de TakeoffCraft}}, {{ui:Axuda}} ({{key:F1}}), {{ui:Gardar para usar sen conexión}}, {{ui:Configuración}} ({{key:Mod+,}}), o botón {{ui:Pantalla completa}} e o cambio de tema {{ui:Folla}} / {{ui:Modelo}}. |
| Barra de ferramentas | Debaixo da barra da aplicación | Todos os comandos, en grupos: {{ui:Ficheiro}}, {{ui:Exportar}}, {{ui:Escala}}, {{ui:Medición}}, {{ui:Editar}}, {{ui:Vista}}. |
| Follas | Esquerda | Cada páxina de cada PDF aberto, con miniatura, a súa escala e o número de marcas. |
| A folla | Centro | A páxina aberta. Mide aquí. |
| Elementos | Dereita | Os elementos da medición, os axustes do elemento seleccionado e a marca seleccionada. |
| Cantidades | Abaixo | Cantidades e custos por elemento ou por folla, e o total da obra. |
| Barra de estado | Abaixo de todo | A medición en directo, as mensaxes, a suxestión de 45° e o zoom. |

## A barra de ferramentas

Pase o cursor sobre calquera botón para ver o que fai e a súa tecla.

| Grupo | Botóns |
|---|---|
| {{ui:Ficheiro}} | {{ui:Novo}} (medición baleira), {{ui:Abrir PDF}} ({{key:Mod+O}}), {{ui:Abrir medición}} (un proxecto `.takeoff.json`), {{ui:Gardar medición}} ({{key:Mod+S}}) |
| {{ui:Exportar}} | Un menú: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF marcado}} |
| {{ui:Escala}} | {{ui:Calibrar}} ({{key:K}}), {{ui:Comprobar}} ({{key:D}}) e a lista {{ui:Predefinida}} |
| {{ui:Medición}} | {{ui:Seleccionar}} ({{key:V}}), {{ui:Lineal}} ({{key:L}}), {{ui:Superficie}} ({{key:A}}), {{ui:Círculo}} ({{key:O}}), {{ui:Arco}} ({{key:R}}, un interruptor de activado e desactivado), {{ui:Deducir}} ({{key:E}}, un interruptor), {{ui:Recorte}} ({{key:X}}), {{ui:Contar}} ({{key:C}}), {{ui:Contaxe automática}} ({{key:S}}) |
| {{ui:Editar}} | {{ui:Desfacer}} ({{key:Mod+Z}}), {{ui:Refacer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Pegar}} ({{key:Mod+V}}) e {{ui:Máis}}: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar no mesmo sitio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}}, {{ui:Non seleccionar nada}} |
| {{ui:Vista}} | {{ui:Axustar páxina}} ({{key:F}}), {{ui:Axustar ancho}} ({{key:W}}) |

A ferramenta que está a usar móstrase pulsada. Os botóns {{ui:Arco}} e {{ui:Deducir}} seguen pulsados mentres están activados.

## Follas (esquerda)

- **Buscar follas** filtra a lista polo nome da folla, o nome do ficheiro ou a etiqueta da páxina.
- Cada folla mostra unha miniatura (debuxada ao desprazarse), o seu nome, e ou a súa escala ou **Sen escala**.
- A dereita de cada fila indica cantas marcas ten a folla. Mentres un elemento está resaltado, mostra cantas marcas dese elemento hai na folla.
- Faga clic nunha folla para abrila. {{key:PageDown}} e {{key:PageUp}} pasan á folla seguinte e á anterior da lista.
- Cando unha medición cubre PDF que non están abertos, unha nota debaixo da lista os nomea. Consulte [Gardar e reabrir unha medición](topic:save-and-reopen).

Os nomes das follas proveñen do PDF: unha etiqueta de páxina como `A-101` convértese no nome da folla. Unha páxina sen etiqueta recibe o nome do seu ficheiro e o número de páxina, como "Planos, páxina 3". Cando hai varios PDF abertos, as follas etiquetadas mostran tamén o nome do ficheiro.

## A folla (centro)

- A barra debaixo da folla mostra o nome da folla e a súa escala, ou "Aínda sen escala: escolla un predefinido ou calibre". Os seus botóns: {{ui:MarkupCraft}} (cando esa aplicación pode recibir o PDF; consulte [Iniciar unha medición e abrir un conxunto de planos](topic:open-plan-set)), {{ui:Comparar}} (unha versión anterior da folla sobre esta: [Comparar unha folla revisada](topic:compare-revisions)), "(n) para revisar" (marcas sinaladas, cando as hai) e {{ui:3D}} (a [vista de comprobación 3D](topic:check-in-3d)).
- Antes de que se abra ningún PDF, o centro mostra unha guía breve de cinco pasos.
- A roda do rato fai zoom no punto onde está o punteiro. Arrastre para desprazar. Consulte [Teclado e rato](topic:keyboard).
- Mentres usa {{ui:Contaxe automática}}, aparece arriba da folla unha barra cos seus controis.

## Elementos (dereita)

Na parte superior, a lista {{ui:Zona de oferta}}: o edificio, planta ou fase onde irán as novas marcas ([Zonas de oferta](topic:bid-areas)).

- {{ui:Novo elemento}} abre un pequeno formulario: un nome, un tipo ({{ui:Lineal (lonxitude)}}, {{ui:Superficie}} ou {{ui:Contar}}) e {{ui:Engadir}}.
- A lista mostra a cor, o icona do tipo, o nome e a cantidade de cada elemento. Faga clic nun elemento para debuxar con el e resaltar as súas marcas en todas as follas. Faga clic de novo para deixar de resaltar.
- Debaixo da lista, **Elemento: (nome)** é o editor de elementos: nome, tipo, cor, unidade, altura ou profundidade, desperdicio, tarifas de material e de man de obra, os valores medidos e o {{ui:Conxunto}}. Consulte [Crear elementos de medición](topic:create-items).
- **Marca seleccionada** aparece cando selecciona unha marca: a que elemento pertence, a súa folla, as súas medidas, e botóns como {{ui:Engadir un recorte}} e {{ui:Eliminar marca}}. Con varias marcas seleccionadas convértese en **Marcas seleccionadas**: cantos de cada elemento hai, e {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Cortar}} e {{ui:Eliminar marcas}}.
- O editor de elementos remata con {{ui:Copiar elemento}} e {{ui:Duplicar elemento}}: un elemento co seu conxunto e custos, sen marcas. Consulte [Copiar, pegar e duplicar marcas](topic:copy-paste).

## Cantidades (abaixo)

- {{ui:Por elemento}} lista cada elemento e os seus compoñentes de conxunto, con cantidade, desperdicio, tarifas e custos estendidos. Pode escribir desperdicio e tarifas directamente na táboa.
- {{ui:Por folla}} lista a cantidade de cada elemento en cada folla.
- Aparece un aviso que comeza por **Incompleto:** cando algo queda fóra dos totais.
- {{ui:Total da obra}} está á dereita da cabeceira.
- O botón de frecha da extrema dereita oculta ou mostra a táboa para dar máis espazo á folla.

Consulte [Ler as cantidades e o orzamento](topic:read-quantities).

## Barra de estado (abaixo)

De esquerda a dereita: a medición en directo mentres debuxa (lonxitude, superficie, raio ou un resultado de comprobación), a caixa {{ui:Escribir}} mentres escribe unha lonxitude, as mensaxes de TakeoffCraft, o recordatorio "Shift engancha a 45°" (ou "Engancha a 45°; Shift libera o ángulo" cando isto está activado en [Configuración](topic:settings)), o botón {{ui:Enganchar}} (enganche ás liñas do debuxo, activo cando está resaltado; {{key:F3}}), e a porcentaxe de zoom.

:::tip
Lea a barra de estado cando algo non suceda. TakeoffCraft explica alí por que rexeitou un clic, por exemplo "Esta folla aínda non ten escala".
:::

## Outras disposicións

Todo o anterior corresponde á disposición {{ui:CadCraft clásico}}, o inicio. {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Disposición}} ofrece outras dúas; as mesmas ferramentas e teclas funcionan nas tres, e escoller de novo {{ui:CadCraft clásico}} devolve cada control ao seu sitio.

| Disposición | En TakeoffCraft |
|---|---|
| {{ui:Cinta e navegador do proxecto}} | A {{ui:Cinta de medición}} na parte superior ([Menús, teclas e rato](topic:menus-keys-and-mouse)), unha barra para a ferramenta en uso, unha lapela para cada folla aberta (o Modelo e as disposicións dun debuxo tamén son follas), cos predefinidos de escala e {{ui:Axustar páxina}} debaixo da folla. O panel esquerdo contén {{ui:Propiedades}} (o elemento, nota ou marca seleccionada) sobre o {{ui:Explorador de medición}}: {{ui:Follas}} (faga clic nunha para abrila nunha lapela), {{ui:Condicións}} (faga clic nunha para debuxar con ela) e {{ui:Orzamento}} (o total de cada elemento e o total da obra); as miniaturas son a súa segunda lapela. |
| {{ui:Caixa de ferramentas e caixa de información}} | A barra de ferramentas sobre a folla, unha caixa de información coa {{ui:Zona de oferta}}, a ferramenta en uso ou a selección e a barra da folla, unha columna coas ferramentas de medición á esquerda, unha lapela para cada folla, e {{ui:Enganchar}} e o zoom debaixo da folla. |

Mentres a [vista de comprobación 3D](topic:check-in-3d) está aberta, as lapelas das follas e a barra debaixo da folla apártanse; peche a vista 3D para volver medir. Nun teléfono sempre se usa a disposición de teléfono.

## Pantalla completa e temas

O botón {{ui:Pantalla completa}} da barra da aplicación, ou {{key:Ctrl+Shift+F}} (Control en todas as plataformas, tamén nun Mac), alterna entre normal, pantalla completa e pantalla completa con as barras ocultas. Con as barras ocultas, mova o punteiro ata a marxe superior para mostralas de novo.

{{ui:Folla}} é o tema claro e {{ui:Modelo}} o escuro. En {{ui:Modelo}} o debuxo móstrase invertido (liñas claras sobre fondo escuro) só na pantalla; as exportacións nunca se cambian.
