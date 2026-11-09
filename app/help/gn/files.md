---
title: Archivos TakeoffCraft oipe'áva ha oguardáva
summary: PDF oikéva, archivo de proyecto de cómputo, planillas ha PDF marcados oúva - mba'éichapa cada uno oguereko, moõpa oúva, ha mba'épa oikoukáva en línea, sin conexión ha navegadores apytépe.
keywords: archivos, formatos, pdf, takeoff.json, archivo de proyecto, xlsx, csv, pdf marcado, descargar, guardar, abrir, sin conexión
from: 1bf9be65
---

## Mba'épa oipe'a

| Archivo | Cómo | Notas |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open plans}}, {{key:Mod+O}}, térã soltá página-pe | Hetave'ỹre peteĩvo. Cada página ojeheta hoja. |
| Cómputo proyecto (`.takeoff.json`) | {{ui:Open takeoff}}, térã soltá página-pe | Nde ítems, escalas ha marcas. Ikatu soltá ha hendive hi'ã PDF-kuéra. |

Ambue archivo soltáva página-pe oñeheja'ỹ, ha barra de estado omombe'u chupekuéra.

- **PDF protegido con contraseña** ndoipe'aiva: "(name) oprotegíva contraseña-gui. Eipe'a copia sin protección."
- **Mismo PDF mokõi jeýpe** peteĩ jevy oipe'a: "(name) ojeipe'a ja." TakeoffCraft ohechakuaa archivo-kuéra iñe'ẽ-gui ndaha téra-gui.
- **PDF escaneados** oipe'a ha omedi ambue jeguakárõ; TakeoffCraft ndojeikotevẽi texto PDF-pe.
- **Juego de planos guasu**: cada PDF oñeleí entero oipe'ahaguépe (huellа oikuaa haguã), upévare archivo guasu oúva ojeikotevẽ peteĩ tiempo. Miniaturas oñemoĩ peteĩ peteĩ rehe nde ojeĩmby jave.

## Mba'épa oguardáva

Cada guardado ojeguejy. Nada ndojekuaa nde PDF-kuéra-pe.

| Nde ojopy | Oreguereko | Mba'épa oguereko |
|---|---|---|
| {{ui:Save takeoff}} | `(name).takeoff.json` | Ítems, conjuntos, tarifas, escalas de hoja ha opa marca, cada PDF-pe oñeikutu su contenido-gui. Ndaipóri páginas PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Cuatro hoja de cálculo: Presupuesto (fórmulas vivas), Por hoja, Marcas, Escalas. |
| {{ui:CSV}} | `(name).csv` | El presupuesto como valores simples, peteĩ fila peteĩ ítem ha componente rehe. |
| {{ui:Marked PDF}} | `(PDF name) (takeoff).pdf` | Copia de cada PDF abierto oguereko marcas, cómputo oñemoĩva sus páginas-pe, leyenda ha. Peteĩ archivo peteĩ PDF-pe. |

El nombre oúva pe primer PDF oipe'áva kóva cómputo-pe. Ndaipóri todavía casilla para cambiar nombre: cambia nombre el archivo descargado si ndéva ojeguerohory.

Ver [Exportá el presupuesto ha PDF marcado](topic:export-estimate) ha [Columnas de exportación](topic:export-columns).

## Moõpa oúva descargas

Nde navegador oguarda chupe hi'ã cada descarga-pe, usualmente carpeta Descargas. Ohupy {{pick:mac=Finder|windows=Explorador de archivos|linux=tu administrador de archivos}}-pe. Nde navegador oñeporandu cada archivo ojeguardaséva jave, oporandu.

:::chromium
{{ui:Marked PDF}} mokõi térã mayor PDF marcados ojeguejy peteĩ jevy. Chrome ha Edge ikatu oporandu peteĩ jevy ko sitio ikatu ojeguejy archivo hetaiterei. Emboguejy Permitir.
:::

:::safari
Safari oguarda Descargas-pe, ndaha nde ojeporu Safari Configuración-pe General-pe ojemoambue jave ubicación.
:::

## Mba'éichapa archivo de proyecto ha PDF oñemoĩ apártagui

`.takeoff.json` archivo oguereko tu cómputo nomeʼẽ. Ojekuaa chupe PDF-kuéra hendápe ojeikutu contenido-gui (cada archivo huella), upévare:

- Oñembohéra térã ojehundi PDF ndaha mba'e.
- PDF ojemoambue térã ojeguardáva ambue programa-gui oúva ojehechakuaa archivo ambue, hasta nombre pe mismo.
- Marcas PDF-kuéra ndaipóiva opyta oipe'ahaguépe oikoséva hi'ãite total-pe.

Ver [Guardar ha reabrir un cómputo](topic:save-and-reopen).

## En línea ha sin conexión

Nde PDF ha cómputo ndoho ndaipóri nde computadora-gui, en línea térã sin conexión. Conexión oikotevẽ tenonde TakeoffCraft cargá haguã.

Trabaja sin conexión rehe, emoñe'ẽ vaekue aplicación en línea jave:

1. Eiporu {{ui:Save for offline}} aplicación barra-pe ryépe.
   Botón oinupã, "Saving 12 of 40", ojeguardáva jave.
2. Escucha {{ui:Offline ready}}.

Guardar TakeoffCraft oguardáva aplicación, esta ayuda, lector PDF, escritor PDF oikotevẽva {{ui:Marked PDF}} ha trabajador de conteo automático nde navegador-pe, unos 6 MB. Upe rire oñeĩ {{ui:Offline ready}}, opa ojapo sin conexión: abrir PDF, medir, {{ui:Auto count}}, {{ui:Save takeoff}}, {{ui:XLSX}}, {{ui:CSV}} ha {{ui:Marked PDF}}.

| Botón omombe'u | Mba'épa |
|---|---|
| {{ui:Save for offline}} | Ndaipóri guardado ko navegador-pe. Eiporu guardar haguã. |
| Saving (n) of (m) | Ojeguardáva ko momento. |
| {{ui:Offline ready}} | Guardado. Eiporu {{ui:Save again (get the newest version)}} térã {{ui:Remove the offline copy}} haguã. |
| {{ui:Could not save}} | Archivo sapy'ỹ ojeguejy. Ehecha nde conexión ha eiporu jey. |
| {{ui:Offline not available}} | Ko ventana navegador ndikatúi guardá copia sin conexión (ventana privada ha computadora administrada oipyta). |

Hetaiterei, ha mba'éichapa copia guardada oñemantene cada navegador-pe: [Trabajo sin conexión](common:offline).

:::offline
Nde ndaikatúi conexión. Si aplicación barra omombe'u {{ui:Offline ready}}, opa ojapo. Ndojapói jave, ko pestaña-pe ndojekarga tenonde (PDF escritor {{ui:Marked PDF}} ha conteo automático trabajador), ndaikatúi karga ko momento ha {{ui:Marked PDF}} oñemboty "The marked PDF could not be written". Nde cómputo oñeprotegevéta opa jave: {{ui:Save takeoff}}, {{ui:XLSX}} ha {{ui:CSV}} ndoikotevẽi conexión. Ani emboguejy pestaña ndaha peẽ en línea jey.
:::

:::online
Nde en línea. Antes de visita de sitio térã vuelo, eiporu {{ui:Save for offline}} ha escucha {{ui:Offline ready}}.
:::

## Hojas de cálculo

XLSX oguereko fórmulas vivas, upévare programa de hoja de cálculo ojerecalcula presupuesto oipe'a jave ha omyatyro tarifa térã desperdicio ojemoambue jave. Libro ojehepyme LibreOffice Calc-pe, opa total ojerecalcula centavo mbyte. Excel-pe ndojehepymeí todavía.

CSV valores simples oguereko byte order mark, upévare programa de hoja ojekuaa caracteres tipo m² iporã.

## Escritorio ha nube

:::desktop
0.5 jave aplicación de escritorio es CadCraft Studio: TakeoffCraft ha ambue ocho aplicación peteĩ instalación-pe. Ndaipóri instalador TakeoffCraft apártagui.
:::

Almacenamiento en nube ndaipóri todavía. Eguarda nde `.takeoff.json` archivo-kuéra PDF-kuéra rendápe, ha eguarda ambue archivo ichupe. Ver [Dónde van tus archivos](common:your-files).
