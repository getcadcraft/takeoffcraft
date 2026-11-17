---
title: Desar i tornar a obrir un amidament
summary: Desar l'amidament com a projecte .takeoff.json, tornar-lo a obrir amb els mateixos PDF i què passa quan falta un PDF o n'ha canviat el contingut.
keywords: amidament dins del PDF, incrustar, adjunt, desar, obrir, reobrir, projecte, takeoff.json, reprendre, continuar, PDF revisat, PDF canviat, PDF que falta, còpia de seguretat, desament automàtic, recuperar, fallada
from: bd5080a6
---

Un amidament es desa com a fitxer de projecte petit, `(nom).takeoff.json`. Conté les partides, els preus descomposts, els preus unitaris, l'escala de cada full i cada marca. **No** conté els PDF; els torna a trobar pel seu contingut.

## Desar

1. Trieu {{ui:Desa l'amidament}} al grup {{ui:Fitxer}}, o premeu {{key:Mod+S}}.
   El navegador baixa `(nom).takeoff.json`. La barra d'estat diu "Desat (nom).takeoff.json. Es reobre sobre els mateixos PDF (es fan coincidir pel seu contingut)."
2. Moveu el fitxer al costat dels PDF de l'obra, perquè els dos quedin junts.

Cada desada baixa un fitxer nou. El navegador pot anomenar el segon `(nom) (1).takeoff.json`; quedeu-vos amb el més recent.

El nom surt del primer PDF que heu obert en aquest amidament.

:::note
Desar l'amidament és encara l'única manera de guardar un amidament com a fitxer. Mentre treballeu, TakeoffCraft també manté una còpia de recuperació en aquest navegador (vegeu a continuació), i el desat al núvol encara no està disponible. Si intenteu tancar la pestanya amb canvis sense desar, el navegador pregunta si voleu sortir.
:::

## Incrustar l'amidament dins del PDF

{{ui:Exporta}} › {{ui:PDF amb l'amidament a dins}} baixa una còpia de cada PDF obert, anomenada `Plans (with takeoff).pdf`, que porta tot l'amidament com a adjunt: partides, marques, escales, àrees de licitació, tot el que conté el `.takeoff.json`. Les seves pàgines no es toquen, de manera que es veu i s'imprimeix com l'original, i altres lectors de PDF mostren l'amidament entre els seus adjunts.

Obriu aquest PDF a TakeoffCraft (de qualsevol manera que obriu PDF) i demanarà **Aquest PDF té un amidament a dins**: trieu {{ui:Obre l'amidament}} per recuperar-lo, o {{ui:Només el PDF}} per obrir només el plànol. La còpia representa el PDF del qual va sortir, de manera que un `.takeoff.json` desat des de qualsevol dels dos s'obre en tots dos.

Amb diversos PDF, cada còpia porta tot l'amidament; obriu-los junts. Si torneu a desar des d'una còpia, es reemplaça l'amidament que hi ha dins, no n'hi afegeix un segon. El `.takeoff.json` és encara el fitxer que cal conservar: és petit, i és el que escriuen el desament automàtic i l'aplicació d'escriptori.

## Si es talla la pestanya o el navegador

Uns segons després de cada canvi, TakeoffCraft guarda una còpia de l'amidament a l'emmagatzematge propi d'aquest navegador, juntament amb els seus PDF quan sumen 64 MB o menys. Res no es puja. Quan deseu l'amidament, en comenceu un de nou o n'obriu un altre projecte, la còpia s'esborra.

Si la pestanya falla, el navegador o l'ordinador s'aturen, o sortiu amb canvis sense desar, la propera vegada que obriu TakeoffCraft pregunta **Recuperar el treball?** i en llista l'amidament pel nom. Trieu **Recupera** per recuperar-lo: les partides, les marques i les escales tornen, i els seus PDF es tornen a obrir si s'havien conservat. La barra d'estat diu "Recuperat (nom). Encara no es desa en un fitxer: Desa l'amidament el conserva." Quan els PDF eren massa grans per conservar-los, torneu a obrir-los; les marques apareixen als seus fulls. Més: [Recuperar el treball](common:recover).

## Reobrir

1. Obriu TakeoffCraft.
2. Arrossegueu el fitxer `.takeoff.json` i els seus PDF a la pàgina junts. O trieu {{ui:Obre plànols}} per als PDF i {{ui:Obre amidament}} per al projecte, en qualsevol ordre.
   La barra d'estat diu "Obert (nom): 12 partides, 340 marques." Cada full recupera la seva escala, i les marques apareixen als seus fulls.

L'ordre dels PDF no importa, ni tampoc els seus noms de fitxer o carpetes. TakeoffCraft reconeix cada PDF per una empremta del seu contingut.

Si obriu un projecte mentre l'amidament actual té canvis sense desar, TakeoffCraft pregunta primer: **Cancel·la**, **Descarta els canvis** o **Desa primer l'amidament**. Obrir un projecte reemplaça les partides i les marques actuals; els PDF que ja són oberts es queden oberts.

## Quan falta un PDF

Si obriu el projecte sense tots els seus PDF, la barra d'estat afegeix "Obriu-ne els PDF per veure les marques (llistats a la llista de fulls)." Sota la llista de fulls, una nota diu:

"Aquest amidament també cobreix PDF que no són oberts. Les seves quantitats es compten; obriu-los per veure i editar les seves marques:"

seguida dels noms de fitxer i les mides. Les seves marques continuen comptant en tots els totals i exportacions, amb les escales amb què es van mesurar. Obriu aquests PDF per veure i editar les marques.

## Quan un PDF ha canviat

Un PDF que s'ha revisat, o que un altre programa ha tornat a desar, té un contingut diferent, de manera que per a TakeoffCraft és un **fitxer diferent**, encara que tingui el mateix nom. A la nota sota la llista de fulls, aquest fitxer diu "hi ha un fitxer amb aquest nom obert, però el contingut és diferent".

- Les marques queden unides a la versió antiga. Continuen comptant, a les seves posicions i escales antigues.
- La versió revisada s'obre com a fulls nous, sense escala ni marques.

Per traslladar l'amidament a la revisió, obriu tots dos PDF i useu {{ui:Compara}} al full nou: [Compara un full revisat i trasllada l'amidament](topic:compare-revisions).

## Un fitxer malmès o estrany

TakeoffCraft comprova cada fitxer de projecte abans d'usar-lo. Missatges que podeu veure:

- "(fitxer) no és un projecte de TakeoffCraft (no és JSON vàlid)."
- "Aquest no és un fitxer de projecte de TakeoffCraft."
- "Aquest projecte s'ha desat amb una versió més nova de TakeoffCraft. Obriu-lo allà."
- "3 marques s'han malmès i s'han deixat fora." (la resta s'obre)

## Historial de desfer

L'historial de desfer comença de nou quan obriu un projecte. Desar no l'esborra.
