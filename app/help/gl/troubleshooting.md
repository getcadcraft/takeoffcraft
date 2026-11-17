---
title: Solución de problemas
summary: Síntomas, causas e solucións para as mensaxes e sorpresas que podes atopar en TakeoffCraft, citadas como as mostra a aplicación.
keywords: problemas, erros, non funciona, solución, axuda, rexeitado, non mide, sen escala, marcas que faltan, a exportación fallou, sen conexión, tacto
from: cd319c9b
---

TakeoffCraft explica a maioría das negativas na barra de estado, na parte inferior da xanela. Atopa a mensaxe abaixo.

## Abrir ficheiros

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| O lector de PDF non se puido cargar. Recarga a páxina para intentalo de novo. | O lector de PDF da aplicación non se cargou, normalmente porque estás sen conexión e a aplicación nunca se gardou para uso sen conexión. | Restablece a conexión e recarga. Despois escolle {{ui:Gardar para usar sen conexión}} e agarda por {{ui:Listo sen conexión}}; ver [Traballar sen conexión](common:offline). |
| (nome) está protexido con contrasinal. Abre unha copia sen protección. | O PDF precisa un contrasinal para abrirse. | Pide unha copia sen protección, ou elimina o contrasinal nun programa de PDF de confianza. |
| (nome) non se puido ler como PDF (…) | O ficheiro está danado ou non é realmente un PDF. | Descárgao de novo, ou volve gardalo desde o programa que o creou. |
| (nome) xa está aberto. | Está aberto o mesmo PDF (mesmo contido). | Non hai que facer nada. |
| TakeoffCraft abre PDF e proxectos .takeoff.json. Omitidos: … | Os outros tipos de ficheiro descartáronse. | Converte antes os debuxos a PDF. |
| Non pasa nada cando solto ficheiros | Os ficheiros soltáronse fóra da xanela do navegador, ou o navegador abriu o PDF nunha nova lapela. | Solta sobre a propia páxina de TakeoffCraft; o marco "Soltar PDF ou un .takeoff.json" indica cando funcionará. |
| Abrir un conxunto grande leva un tempo | Cada PDF se lese completo para crearlle unha pegada. | Agarda a que desapareza a mensaxe "Abrindo (nome)…". As miniaturas enchense ao desprazarte. |

## Medir

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| Abre primeiro un PDF. | Non hai ningunha folla aberta. | Abre un PDF. |
| Esta folla aínda non ten escala, así que non se pode medir. Escolle primeiro unha escala predefinida ou calíbrala (os recontos funcionan sen ela). | As ferramentas lineal, superficie, círculo e recorte precisan unha escala. | [Fixar a escala](topic:set-the-scale). |
| Crea primeiro un elemento lineal (nómeao en Elementos) e logo fai clic na folla. | Non existe ningún elemento dese tipo. | Completa o formulario {{ui:Novo elemento}} que se abriu e escolle {{ui:Engadir}}. |
| Escolle primeiro un elemento para medir (panel Elementos). | O elemento actual foi eliminado. | Fai clic nun elemento baixo {{ui:Elementos}}. |
| Un tramo precisa polo menos dous puntos. | Rematácheste despois dun só clic. | Fai clic en polo menos dous puntos. |
| Unha superficie precisa polo menos tres puntos. | Poucos vértices. | Fai clic en polo menos tres vértices. |
| O contorno cruza sobre si mesmo, polo que a súa superficie sería errónea. Debúxao de novo sen cruzarte. | Unha forma de oito. | Debúxao como dúas superficies, ou percorre o bordo en orde. |
| Eses puntos non encerran ningunha superficie. | Todos os puntos están nunha mesma liña. | Fai clic en vértices que encerren un espazo. |
| Selecciona primeiro unha marca de superficie (ferramenta Seleccionar), despois escolle Recorte e debuxa o burato dentro dela. | {{ui:Recorte}} precisa unha superficie seleccionada. | Preme {{key:V}}, fai clic na superficie e despois {{key:X}}. |
| Un recorte ten que estar completamente dentro da superficie. | O burato cruza ou sae do contorno. | Debuxa o burato dentro da superficie. |
| Os recortes non poden solaparse entre si. | Dous buratos solápanse. | Debuxa un burato que rodee os dous, ou sepáraos. |
| … O punto foi devolto. | Un vértice arrastrado faría que o contorno se cruzase sobre si mesmo ou empurraría un burato fóra. | Arrastra a un lugar que manteña a forma válida. |
| Fai clic nun punto da beira do círculo, lonxe do seu centro. | O segundo clic estaba demasiado preto do centro. | Fai clic máis lonxe. |
| Os clics desprazan a folla en vez de engadir puntos | O punteiro moveuse máis de uns píxeles co botón premido; iso conta como arrastre. | Fai clic sen moverte, sobre todo nun trackpad. |
| Shift non engancha | Estás colocando un punto nun arco, ou debuxando un círculo. | O enganche de 45° aplícase só aos segmentos rectos. |
| Os puntos saltan a unha liña próxima | Enganchar ás liñas do debuxo está activado. | Achégate para facer clic entre liñas, ou preme {{key:F3}} para desactivar o enganche. |
| Non aparece ningún marcador de enganche | O enganche está desactivado, a folla é un escaneo, ou a ferramenta non engancha (Contar, Contaxe automática, pegar). | Preme {{key:F3}}; nun escaneo non hai liñas nas que enganchar. |
| A lonxitude é errónea | A escala é errónea (a miúdo un PDF redimensionado cunha predefinida). | Usa {{ui:Comprobar}} sobre unha cota coñecida e despois {{ui:Calibrar}}. |

## Escala

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| Escolle dous puntos máis separados. | Os puntos de calibración están case un sobre o outro. | Calibra sobre unha cota máis longa. |
| Unha mensaxe no diálogo de calibración, como "Esa distancia non se puido ler" | A distancia está nun formato que TakeoffCraft non pode ler. | Ver [Introdución de lonxitudes, tarifas e porcentaxes](topic:entry-formats). |
| Esta folla aínda non ten escala, así que non hai nada que comprobar. Calíbrala, ou escolle unha predefinida. | {{ui:Comprobar}} nunha folla sen escala. | Fixa primeiro unha escala. |
| A lista {{ui:Predefinida}} aparece en gris | Non hai ningunha folla aberta. | Abre un PDF. |

## Cantidades e fórmulas

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| Incompleto: … (fóra dos totais) | Un erro de fórmula, ou marcas en follas sen escala. | Ver [Ler cantidades e o orzamento](topic:read-quantities#the-incomplete-warning). |
| +(n) sen escala xunto a un elemento | Algunhas das súas marcas están en follas sen escala. | Dálle unha escala a esas follas. |
| Erro de fórmula: … | A fórmula non se pode calcular. | Ver [Linguaxe de fórmulas](topic:formulas#errors). |
| Este elemento ten marcas, así que o seu tipo non pode cambiar. | O tipo bloquease cando hai marcas. | Crea un novo elemento do outro tipo e volve debuxar as marcas con el. |
| Un elemento precisa un nome. | Baleiouse o campo do nome. | Escribe un nome. |
| Escribe un importe como 12.50. / Escribe unha porcentaxe como 10 ou 7.5. | Non se puido ler unha tarifa ou un desperdicio. | Ver [Introdución de lonxitudes, tarifas e porcentaxes](topic:entry-formats). |
| O total parece duplicado | O elemento ten as súas propias tarifas e compoñentes que levan o mesmo custo. | Pon as tarifas propias do elemento a 0 cando os seus compoñentes levan o custo. |
| As marcas deste elemento están en PDF que non están abertos. | Fixeches clic nun elemento cuxas marcas están todas en PDF que non abriches. | Abre eses PDF; os seus nomes aparecen baixo {{ui:Follas}}. |

## Contaxe automática

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| Esa caixa é demasiado pequena. Debúxaa arredor de todo o símbolo. | A caixa é minúscula. | Achégate e encadra todo o símbolo. |
| Esa caixa está case baleira. Debúxaa arredor dun símbolo. | A caixa só contén papel. | Encadra o propio símbolo. |
| Sen coincidencias. Baixa o control deslizante de coincidencia, ou encadra o símbolo máis axustado. | Ningún resultado obtivo puntuación suficiente. | Encadra o símbolo máis axustado, ou arrastra o control {{ui:Coincidencia}} máis abaixo. |
| Demasiadas coincidencias, incluídos símbolos equivocados | Os símbolos parecidos puntúan preto do real. | Sobe o control {{ui:Coincidencia}} e fai clic nas caixas equivocadas para rexeitalas. |
| Faltan coincidencias noutras follas | Esas follas debuxan o símbolo a outro tamaño, ou nun ángulo que non é un paso de 90°. | Busca nesas follas cunha caixa debuxada alí, ou conta a man. |
| (n) follas eran demasiado grandes para buscar con este tamaño de símbolo. | A folla sería demasiado grande no tamaño de traballo. | Encadra un símbolo máis grande, ou conta esa folla a man. |
| A busca fallou: … | A busca en segundo plano parouse. | Inténtao de novo; recarga a páxina se se repite (garda antes). Sen conexión, funciona só cando a barra da aplicación mostra {{ui:Listo sen conexión}}. |
| Arrastrar debuxa unha caixa en vez de desprazar | Así funciona {{ui:Contaxe automática}}. | Mantén premido {{key:Space}} e arrastra, ou arrastra co botón central. |

## Gardar e exportar

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| Nada que exportar aínda: crea un elemento e mide con el. | Non hai elementos. | Crea primeiro un elemento. |
| Aínda non hai marcas nos PDF abertos. | {{ui:PDF marcado}} non ten onde debuxar nos PDF abertos. | Abre os PDF que teñan marcas. |
| Este PDF está protexido con contrasinal ou cifrado, así que non se pode escribir unha copia marcada. … | O PDF está cifrado. | Exporta {{ui:XLSX}} en vez diso, ou usa unha copia sen cifrar do PDF (entón necesita a súa propia medición, xa que é outro ficheiro). |
| O PDF marcado non se puido escribir: … | Adoita ser: estás sen conexión e a aplicación non se gardou para uso sen conexión, así que falta o escritor de PDF. | Conéctate e escolle {{ui:PDF marcado}} de novo. Para evitalo, escolle {{ui:Gardar para usar sen conexión}} e agarda por {{ui:Listo sen conexión}}. |
| Só se descargou un PDF marcado | O navegador bloqueou varias descargas á vez. | Permite varias descargas para este sitio e exporta de novo. |
| (ficheiro) non é un proxecto de TakeoffCraft (non é JSON válido). / Este non é un ficheiro de proxecto de TakeoffCraft. | Ficheiro equivocado, ou danado. | Escolle o ficheiro `.takeoff.json`. |
| Este proxecto gardouno un TakeoffCraft máis novo. Ábrao alí. | O ficheiro vén dunha versión máis nova. | Ábreo na versión máis nova. |
| (n) marcas estaban danadas e déixanse fóra. | Parte do ficheiro estaba danada ou editada a man. | O resto abriuse. Debuxa de novo as marcas que faltan, ou abre unha copia máis antiga. |
| Marcas que faltan despois de reabrir | Os PDF non están abertos, ou un deles cambiou. | Ver [Gardar e reabrir unha medición](topic:save-and-reopen#when-a-pdf-has-changed). |
| O navegador pregunta "¿Saír do sitio?" | Hai cambios sen gardar. | Quédate e garda con {{key:Mod+S}}. |

## Teclas e rato

| Síntoma | Causa | Solución |
|---|---|---|
| As teclas de letras non fan nada | O cursor está nun campo (busca, editor de elementos, táboa). | Fai clic na folla, ou preme {{key:Tab}} para saír do campo. |
| A roda amplía en vez de desprazar | A roda sempre amplía a folla. | Arrastra para desprazar. |
| Toda a páxina creceu ou diminuíu | Zoom do navegador ({{key:Mod+Plus}} ou {{key:Mod+Minus}}). | Preme {{key:Mod+0}}. Amplía a folla coa roda ou con {{key:Plus}} e {{key:Minus}} sen modificadores. |
| Unha marca desapareceu ao premer Backspace | Backspace elimina a marca seleccionada cando non estás debuxando. | {{key:Mod+Z}} a devolve. |
| O clic dereito non remata nun Mac | O control-clic chega como clic normal. | Usa un clic con dous dedos con clic secundario activado, ou preme {{key:Enter}}. |

## Pantallas táctiles

Nunha pantalla táctil:

- **Tocar** coloca un punto (ou selecciona unha marca con {{ui:Seleccionar}}). Un dedo arrastrando despraza.
- **Dous dedos** pellizcan para ampliar arredor do punto entre eles, e desprazan cando se moven xuntos. Poñer un segundo dedo cancela o que comezou o primeiro, así que un pellizco nunca deixa un punto.
- **Rematar** un tramo ou un contorno cunha **pulsación longa** (o clic dereito), un **dobre toque**, ou {{ui:Rematar}} na barra da parte inferior da folla. A mesma barra ten {{ui:Atrás}} (quita o último punto) e {{ui:Cancelar}}. As superficies tamén se pechan tocando o primeiro punto.
- Os dedos teñen obxectivos máis grandes: os puntos enganchan, pechan e escóllense desde máis lonxe, e os tiradores das esquinas son máis grandes.

Escribir lonxitudes precisa teclado; o teclado en pantalla funciona cando o campo {{ui:Escribir}} está enfocado.

Nunha tableta, un teclado e un rato ou trackpad fan a medición moito máis doada.

## Traballar sen conexión

| Botón ou síntoma | Causa | Solución |
|---|---|---|
| {{ui:Non se puido gardar}} | Algúns ficheiros da aplicación non se descargaron ao gardar para uso sen conexión. | Comproba a conexión e escolle o botón de novo. |
| {{ui:Sen copia sen conexión}} | As xanelas privadas e algúns equipos xestionados bloquean as copias sen conexión. | Usa unha xanela normal, ou outro navegador. |
| "Gardando…" nunca comeza | Estás sen conexión; gardar precisa conexión. | Garda con conexión. |
| A aplicación é antiga despois dunha actualización | A copia sen conexión é dun día anterior. | Con conexión, escolle {{ui:Listo sen conexión}}, despois {{ui:Gardar de novo (obter a versión máis recente)}}. |
| Queres recuperar o espazo | A copia sen conexión ocupa uns 6 MB. | Escolle {{ui:Listo sen conexión}}, despois {{ui:Quitar a copia sen conexión}}. |

Ver [Traballar sen conexión](common:offline).

## Aínda atascado

Recarga a páxina se a aplicación deixa de responder. A túa medición perderase ao recargar, a menos que a gardaras, así que garda primeiro con {{key:Mod+S}} se podes. Para dúbidas do navegador, ver [Navegadores e equipos](common:browsers).
