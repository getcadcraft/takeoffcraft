---
title: Menu, tasti e mouse
summary: Scegliere uno stile di menu che corrisponda al proprio modo di lavorare, assegnare a un comando un tasto personale, spostare i comandi tra i menu e impostare l'azione della rotella e dei tasti del mouse.
keywords: stile menu, menu, barra dei menu, barra multifunzione, schede della barra multifunzione, barra degli strumenti, scorciatoie da tastiera, tasti di scelta rapida, tasti, personalizza, riassegna, riassegna tasto, mouse, rotella, inverti, direzione dello zoom, tasto centrale, tasto destro, pan, esporta, importa, cambio, familiare, scrivania del computo, condizioni
from: f01f0d6d
---

I comandi di TakeoffCraft sono gli stessi qualunque sia il modo in cui vi si accede. Uno **stile di menu** decide soltanto dove si trovano sullo schermo, come si chiamano e con quali tasti si eseguono. Sceglierne uno in {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menu, tasti e mouse}}; la modifica è immediata, e questo browser la ricorda.

## I tre stili

| Stile | Cosa si ottiene |
|---|---|
| {{ui:TakeoffCraft}} | La barra degli strumenti propria di TakeoffCraft: File, Esporta, Scala, Computo, Modifica e Vista, con i tasti a una lettera degli strumenti. Il punto di partenza. |
| {{ui:Scrivania del computo}} | Una barra dei menu ({{ui:File}}, {{ui:Modifica}}, {{ui:Vista}}, {{ui:Scala}}, {{ui:Computo}}, {{ui:Voci}}, {{ui:Annotazioni}}, {{ui:Esporta}}) sopra una riga di strumenti del computo, come li dispongono i programmi di computo a schermo. Le voci sono chiamate condizioni nella riga. Stessi tasti, più {{key:N}} per una nuova voce. I preset di scala passano sulla barra della tavola, accanto alla scala della tavola. |
| {{ui:Barra multifunzione del computo}} | Schede della barra multifunzione con nomi legati al lavoro: {{ui:Computo}} (misura, forma, scala, dal disegno, condizioni), {{ui:Modifica}}, {{ui:Vista}}, {{ui:Annotazioni}} e {{ui:Computo}} (il foglio di calcolo, i PDF annotati, l'offerta), con un menu {{ui:File}} e una riga rapida per apri, salva, annulla e ripristina. Gli strumenti usati tutto il giorno sono grandi, quelli vicini piccoli e impilati. Stessi tasti; i preset di scala passano sulla barra della tavola. |

Tutti e tre gli stili mantengono i tasti di TakeoffCraft: {{key:V}} seleziona, {{key:L}} lineare, {{key:A}} area, {{key:O}} cerchio, {{key:B}} locale, {{key:P}} percorso (sceglie le linee del PDF), {{key:X}} vuoto, {{key:C}} conteggio, {{key:S}} conteggio automatico, {{key:K}} calibra, {{key:D}} verifica, {{key:R}} modalità arco, {{key:E}} modalità detrazione, {{key:F}} e {{key:W}} per adattare, {{key:3}} la vista 3D di verifica, {{key:F3}} aggancio, e {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Gli strumenti della barra della tavola (note, nuvole, evidenziazioni, Confronta, 3D) restano in attesa finché non è aperto un PDF; se vengono scelti prima, la riga di stato lo indica.

:::tip
Un tasto che appartiene al layout proprio di TakeoffCraft, ma che lo stile assegna a un altro comando, non fa nulla, e la riga di stato indica dove è finito il suo comando ("In I miei tasti, Conteggio è Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e le frecce mantengono sempre il loro significato. Mentre si disegna un tratto o un contorno, si incolla o si revisiona un conteggio automatico, le lettere e le cifre di una lunghezza digitata restano al disegno.
:::

## Personalizzare

1. Scegliere lo stile più vicino a ciò che si desidera, poi fare clic su {{ui:Personalizza…}}.
2. In {{ui:Tasti e menu}}, trovare un comando (la casella di ricerca aiuta). {{ui:Aggiungi un tasto}} e premere il tasto, oppure due tasti di seguito per un tasto a due lettere. Fare clic su un tasto per rimuoverlo.
3. Con la barra dei menu, {{ui:Dove si trova}} sposta il comando in un altro menu, oppure in {{ui:Solo tasti}}.
4. In {{ui:Mouse}}, impostare la rotella e i pulsanti che spostano la vista sulla tavola.
5. Dare un nome e fare clic su {{ui:Salva}}.

Salvare uno stile predefinito crea una copia personale ("La mia Scrivania del computo"); quello predefinito non cambia mai. Un tasto assegnato a due comandi viene mostrato in rosso e va corretto prima di poter salvare.

## Mouse

- **Rotella del mouse**: {{ui:Scorrere in avanti ingrandisce}} (il punto di partenza) oppure {{ui:Scorrere in avanti riduce}}, e quanto velocemente. Il pizzico del trackpad ingrandisce sempre nel verso in cui si muovono le dita.
- **Spostare la vista con**: il pulsante centrale, il pulsante destro, o entrambi. Un trascinamento con il sinistro sulla carta vuota e {{key:Space}} con un trascinamento spostano sempre la vista; un clic destro senza trascinamento termina sempre un tratto o un contorno.
- **Trascinamento nelle viste 3D**: {{ui:Di ogni vista}} mantiene i pulsanti della vista 3D di verifica (sinistro e centrale orbitano, destro sposta la vista). Oppure impostare i pulsanti centrale e destro su orbita, sposta, zoom o nessuna azione; {{key:Shift}} con il pulsante scambia orbita e spostamento. Il pulsante sinistro orbita e seleziona sempre.

## Portarli con sé

{{ui:Esporta}} salva lo stile in uso come un piccolo file `.ccinput.json`; {{ui:Importa…}} ne aggiunge uno, da un altro computer o da un collega. Un file importato può puntare solo ai comandi propri di TakeoffCraft: tutto il resto viene escluso e conteggiato nella riga di stato. {{ui:Elimina questo stile}} rimuove uno dei propri.

:::note
Queste impostazioni restano in questo browser. {{ui:Usa questo stile in ogni app}} sotto le schede di stile fa aprire ogni app nello stile corrispondente (la propria barra degli strumenti, una barra dei menu o una barra multifunzione), con le modifiche fatte in ciascuna app. TakeoffCraft non ha uno stile con una riga di comando: quando ne viene scelto uno per ogni app, TakeoffCraft mantiene la propria barra degli strumenti.
:::

La {{ui:Barra multifunzione del computo}} è anche la barra multifunzione del layout {{ui:Barra multifunzione e browser di progetto}} ({{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Layout}}): vedere [La schermata di TakeoffCraft](topic:workspace).

Vedi anche: [Tastiera e mouse](topic:keyboard) · [Impostazioni di TakeoffCraft](topic:settings) · [Provenienza da altri programmi di computo](topic:coming-from)
