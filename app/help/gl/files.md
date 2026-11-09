---
title: Ficheiros que TakeoffCraft abre e garda
summary: PDF de entrada, un ficheiro de proxecto de medición, follas de cálculo e PDF marcados de saída - o que contén cada un, onde vai e o que cambia en liña, sen conexión e entre navegadores.
keywords: ficheiros, formatos, pdf, takeoff.json, ficheiro de proxecto, xlsx, csv, pdf marcado, descarga, gardar, abrir, sen conexión
from: 1bf9be65
---

## Que abre

| Ficheiro | Como | Notas |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir planos}}, {{key:Mod+O}}, ou soltar na páxina | Varios á vez. Cada páxina convértese nunha folla. |
| Proxecto de medición (`.takeoff.json`) | {{ui:Abrir medición}}, ou soltar na páxina | Os seus elementos, escalas e marcas. Pode soltalo xunto cos seus PDF. |

Os outros ficheiros soltados na páxina omítense, e a barra de estado indícaos.

- **Os PDF protexidos con contrasinal** non se abren: "(name) está protexido con contrasinal. Abra unha copia sen protección."
- **O mesmo PDF dúas veces** ábrese unha soa vez: "(name) xa está aberto." TakeoffCraft recoñece os ficheiros polo seu contido, non polo nome.
- **Os PDF escaneados** ábrense e mídense como calquera outro; TakeoffCraft non precisa o texto do PDF.
- **Conxuntos de planos grandes**: cada PDF se le enteiro ao abrirse (para calcular a súa impresión dixital), polo que un ficheiro moi grande tarda un momento. As miniaturas debúxanse unha a unha ao desprazarse.

## Que garda

Cada gardado é unha descarga. Non se escribe nada nos seus PDF.

| Vostede escolle | Obtén | Que contén |
|---|---|---|
| {{ui:Gardar medición}} | `(name).takeoff.json` | Elementos, conxuntos, tarifas, escalas das follas e cada marca, asociadas a cada PDF polo seu contido. Sen páxinas de PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Catro follas de cálculo: Orzamento (con fórmulas activas), Por folla, Marcas, Escalas. |
| {{ui:CSV}} | `(name).csv` | O orzamento como valores simples, unha fila por elemento e compoñente. |
| {{ui:PDF marcado}} | `(PDF name) (takeoff).pdf` | Unha copia de cada PDF aberto que teña marcas, coa medición debuxada nas súas páxinas e cunha lenda. Un ficheiro por PDF. |

O nome tómase do primeiro PDF que abriu nesta medición. Aínda non hai un campo para cambiar o nome: cambie o nome do ficheiro descargado se quere outro.

Consulte [Exportar o orzamento e un PDF marcado](topic:export-estimate) e [Columnas de exportación](topic:export-columns).

## Onde van as descargas

O navegador gárdaas onde garda todas as descargas, normalmente na carpeta Descargas. Atópea en {{pick:mac=Finder|windows=Explorador de ficheiros|linux=o xestor de ficheiros}}. Se o navegador está configurado para preguntar onde gardar cada ficheiro, preguntará.

:::chromium
{{ui:PDF marcado}} con varios PDF marcados descarga varios ficheiros á vez. Chrome e Edge poden preguntar unha vez se este sitio pode descargar varios ficheiros. Escolla Permitir.
:::

:::safari
Safari garda en Descargas, salvo que cambiase a localización das descargas en Preferencias de Safari, na sección Xeral.
:::

## Por que o ficheiro de proxecto e os PDF están separados

O ficheiro `.takeoff.json` contén só a súa medición. Volve atopar os seus PDF polo seu contido (unha impresión dixital de cada ficheiro), así que:

- Cambiar o nome ou mover un PDF non importa.
- Un PDF que outro programa modificou ou volveu gardar conta como un ficheiro distinto, aínda que teña o mesmo nome.
- As marcas dos PDF que non están abertos seguen contando nos totais.

Consulte [Gardar e reabrir unha medición](topic:save-and-reopen).

## En liña e sen conexión

Os seus PDF e as súas medicións nunca saen do seu ordenador, nin en liña nin sen conexión. A conexión só importa para cargar o propio TakeoffCraft.

Para traballar sen conexión, garde primeiro a aplicación, mentres estea en liña:

1. Escolla {{ui:Gardar para usar sen conexión}} na barra da aplicación, na parte superior.
   O botón vai contando, "Gardando 12 de 40", mentres garda.
2. Agarde a que aparezca {{ui:Listo sen conexión}}.

Gardar TakeoffCraft conserva no seu navegador a aplicación, esta axuda, o lector de PDF, o escritor de PDF que usa {{ui:PDF marcado}} e o traballador de contaxe automática, uns 6 MB. Cando diga {{ui:Listo sen conexión}}, todo funciona sen conexión: abrir PDF, medir, {{ui:Contaxe automática}}, {{ui:Gardar medición}}, {{ui:XLSX}}, {{ui:CSV}} e {{ui:PDF marcado}}.

| O botón di | Significado |
|---|---|
| {{ui:Gardar para usar sen conexión}} | Aínda non gardado neste navegador. Escóllao para gardar. |
| Gardando (n) de (m) | Gardando agora. |
| {{ui:Listo sen conexión}} | Gardado. Escóllao para {{ui:Gardar de novo (obter a versión máis recente)}} ou {{ui:Quitar a copia sen conexión}}. |
| {{ui:Non se puido gardar}} | Algúns ficheiros non se descargaron. Comprobe a conexión e escóllao de novo. |
| {{ui:Sen copia sen conexión}} | Esta ventá do navegador non pode conservar unha copia sen conexión (as ventás privadas e algúns ordenadores xestionados bloquéano). |

Máis información, incluído canto dura unha copia gardada en cada navegador: [Traballar sen conexión](common:offline).

:::offline
Está sen conexión. Se a barra da aplicación mostra {{ui:Listo sen conexión}}, todo funciona. Se non o mostra, as partes que TakeoffCraft aínda non cargou nesta lapela (o escritor de PDF para {{ui:PDF marcado}} e o traballador de contaxe automática) non se poden cargar agora, e {{ui:PDF marcado}} detense con "Non se puido escribir o PDF marcado". A súa medición está segura en calquera caso: {{ui:Gardar medición}}, {{ui:XLSX}} e {{ui:CSV}} non precisan conexión. Non recargue a lapela ata que volva estar en liña.
:::

:::online
Está en liña. Antes dunha visita a obra ou dun voo, escolla {{ui:Gardar para usar sen conexión}} e agarde a {{ui:Listo sen conexión}}.
:::

## Follas de cálculo

O XLSX conserva fórmulas activas, así que un programa de follas de cálculo recalcula o orzamento ao abrir o ficheiro e mantén o resultado correcto cando alí cambia unha tarifa ou un desperdicio. O libro comprobouse en LibreOffice Calc, que recalculou cada total co mesmo céntimo. Aínda non se abriu en Excel.

O CSV son valores simples cunha marca de orde de bytes, así que os programas de follas de cálculo len correctamente caracteres como m².

## Escritorio e nube

:::desktop
Desde a versión 0.5, a aplicación de escritorio é CadCraft Studio: TakeoffCraft e as outras sete aplicacións nunha soa instalación. Non hai un instalador de TakeoffCraft por separado.
:::

O gardado na nube aínda non está dispoñible. Garde os seus ficheiros `.takeoff.json` cos PDF da obra e fágalles copia de seguranza como a calquera outro ficheiro. Consulte [Onde van os seus ficheiros](common:your-files).
