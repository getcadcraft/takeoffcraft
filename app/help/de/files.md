---
title: Dateien, die TakeoffCraft öffnet und speichert
summary: PDFs hinein, eine Mengenermittlungsdatei, Tabellen und markierte PDFs heraus - was jede enthält, wohin sie geht und was sich online, offline und zwischen Browsern ändert.
keywords: Dateien, Formate, PDF, takeoff.json, Projektdatei, XLSX, CSV, markiertes PDF, Download, speichern, öffnen, offline
from: 1bf9be65
---

## Was geöffnet wird

| Datei | Wie | Hinweise |
|---|---|---|
| PDF (`.pdf`) | {{ui:PDFs öffnen}}, {{key:Mod+O}} oder auf der Seite ablegen | Mehrere auf einmal. Jede Seite wird zu einem Blatt. |
| Mengenermittlungsprojekt (`.takeoff.json`) | {{ui:Ermittlung öffnen}} oder auf der Seite ablegen | Ihre Positionen, Maßstäbe und Markierungen. Sie können es zusammen mit seinen PDFs ablegen. |

Andere auf der Seite abgelegte Dateien werden übersprungen, und die Statusleiste nennt sie.

- **Kennwortgeschützte PDFs** öffnen sich nicht: „(Name) ist kennwortgeschützt. Öffnen Sie eine ungeschützte Kopie.“
- **Dasselbe PDF zweimal** wird nur einmal geöffnet: „(Name) ist bereits geöffnet.“ TakeoffCraft erkennt Dateien an ihrem Inhalt, nicht an ihrem Namen.
- **Gescannte PDFs** öffnen sich und werden wie jedes andere gemessen; TakeoffCraft braucht den Text im PDF nicht.
- **Große Plansätze**: Jedes PDF wird beim Öffnen vollständig gelesen (um seinen Fingerabdruck zu bilden), daher dauert eine sehr große Datei einen Moment. Miniaturansichten werden beim Scrollen nacheinander gezeichnet.

## Was gespeichert wird

Jedes Speichern ist ein Download. In Ihre PDFs wird nichts zurückgeschrieben.

| Sie wählen | Sie erhalten | Was enthalten ist |
|---|---|---|
| {{ui:Ermittlung speichern}} | `(Name).takeoff.json` | Positionen, Kalkulationsbausteine, Preise, Blattmaßstäbe und jede Markierung, jeweils über den Inhalt dem PDF zugeordnet. Keine PDF-Seiten. |
| {{ui:XLSX}} | `(Name).xlsx` | Vier Arbeitsblätter: Kalkulation (mit lebenden Formeln), Nach Blatt, Markierungen, Maßstäbe. |
| {{ui:CSV}} | `(Name).csv` | Die Kalkulation als reine Werte, eine Zeile je Position und Komponente. |
| {{ui:Markiertes PDF}} | `(PDF-Name) (takeoff).pdf` | Eine Kopie jedes geöffneten PDFs mit Markierungen, mit der auf die Seiten gezeichneten Mengenermittlung und einer Legende. Eine Datei je PDF. |

Der Name stammt vom ersten PDF, das Sie in dieser Mengenermittlung geöffnet haben. Ein Feld zum Umbenennen gibt es noch nicht: Benennen Sie die heruntergeladene Datei um, wenn Sie einen anderen Namen wollen.

Siehe [Die Kalkulation und ein markiertes PDF exportieren](topic:export-estimate) und [Exportspalten](topic:export-columns).

## Wohin Downloads gehen

Ihr Browser speichert sie dort, wo er jeden Download speichert, meist im Ordner „Downloads“. Sie finden ihn in {{pick:mac=dem Finder|windows=dem Datei-Explorer|linux=Ihrem Dateimanager}}. Ist Ihr Browser so eingestellt, dass er bei jeder Datei nach dem Speicherort fragt, fragt er.

:::chromium
{{ui:Markiertes PDF}} mit mehreren markierten PDFs lädt mehrere Dateien auf einmal herunter. Chrome und Edge fragen möglicherweise einmal, ob diese Website mehrere Dateien herunterladen darf. Wählen Sie „Zulassen“.
:::

:::safari
Safari speichert in „Downloads“, sofern Sie den Speicherort nicht in den Safari-Einstellungen unter „Allgemein“ geändert haben.
:::

## Warum Projektdatei und PDFs getrennt sind

Die Datei `.takeoff.json` enthält nur Ihre Mengenermittlung. Sie findet ihre PDFs über deren Inhalt wieder (einen Fingerabdruck jeder Datei), daher gilt:

- Ein PDF umzubenennen oder zu verschieben spielt keine Rolle.
- Ein PDF, das ein anderes Programm geändert oder erneut gespeichert hat, zählt als andere Datei, auch mit gleichem Namen.
- Markierungen auf PDFs, die nicht geöffnet sind, zählen trotzdem in den Summen.

Siehe [Eine Mengenermittlung speichern und wieder öffnen](topic:save-and-reopen).

## Online und offline

Ihre PDFs und Mengenermittlungen verlassen Ihren Computer nie, weder online noch offline. Die Verbindung ist nur zum Laden von TakeoffCraft selbst wichtig.

Um ohne Verbindung zu arbeiten, speichern Sie die App zuerst, solange Sie online sind:

1. Wählen Sie {{ui:Für Offline speichern}} in der App-Leiste oben.
   Die Schaltfläche zählt beim Speichern hoch, „Speichern 12 von 40“.
2. Warten Sie auf {{ui:Offline bereit}}.

Das Speichern von TakeoffCraft legt die App, diese Hilfe, den PDF-Leser, den von {{ui:Markiertes PDF}} genutzten PDF-Schreiber und den Worker der automatischen Zählung in Ihrem Browser ab, etwa 6 MB. Sobald {{ui:Offline bereit}} dasteht, funktioniert alles offline: PDFs öffnen, messen, {{ui:Auto-Zählen}}, {{ui:Ermittlung speichern}}, {{ui:XLSX}}, {{ui:CSV}} und {{ui:Markiertes PDF}}.

| Die Schaltfläche zeigt | Bedeutung |
|---|---|
| {{ui:Für Offline speichern}} | In diesem Browser noch nicht gespeichert. Wählen Sie sie zum Speichern. |
| Speichern (n) von (m) | Wird gerade gespeichert. |
| {{ui:Offline bereit}} | Gespeichert. Wählen Sie sie für {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}}. |
| {{ui:Speichern nicht möglich}} | Einige Dateien wurden nicht heruntergeladen. Prüfen Sie Ihre Verbindung und wählen Sie sie erneut. |
| {{ui:Offline nicht verfügbar}} | Dieses Browserfenster kann keine Offline-Kopie behalten (private Fenster und manche verwalteten Computer blockieren das). |

Mehr, auch dazu, wie lange eine gespeicherte Kopie in jedem Browser hält: [Offline arbeiten](common:offline).

:::offline
Sie sind offline. Wenn die App-Leiste {{ui:Offline bereit}} zeigt, funktioniert alles. Wenn nicht, können die Teile, die TakeoffCraft in diesem Tab noch nicht geladen hat (der PDF-Schreiber für {{ui:Markiertes PDF}}, der Worker der automatischen Zählung), jetzt nicht laden, und {{ui:Markiertes PDF}} bricht mit „Das markierte PDF konnte nicht geschrieben werden“ ab. Ihre Mengenermittlung ist in jedem Fall sicher: {{ui:Ermittlung speichern}}, {{ui:XLSX}} und {{ui:CSV}} brauchen keine Verbindung. Laden Sie den Tab nicht neu, bis Sie wieder online sind.
:::

:::online
Sie sind online. Wählen Sie vor einem Baustellenbesuch oder einem Flug {{ui:Für Offline speichern}} und warten Sie auf {{ui:Offline bereit}}.
:::

## Tabellen

Die XLSX behält lebende Formeln, sodass eine Tabellenkalkulation die Kalkulation beim Öffnen der Datei neu berechnet und sie richtig hält, wenn Sie dort einen Preis oder Verschnitt ändern. Die Arbeitsmappe wurde in LibreOffice Calc geprüft, das jede Summe auf den Cent genau gleich neu berechnet hat. In Excel wurde sie noch nicht geöffnet.

Die CSV enthält reine Werte mit einer Byte-Order-Marke, damit Tabellenkalkulationen Zeichen wie m² richtig lesen.

## Desktop und Cloud

:::desktop
Ab 0.5 ist die Desktop-App CadCraft Studio: TakeoffCraft und die anderen sieben Apps in einer Installation. Es gibt kein eigenes Installationsprogramm für TakeoffCraft.
:::

Speichern in der Cloud ist noch nicht vorhanden. Bewahren Sie Ihre `.takeoff.json`-Dateien bei den PDFs des Auftrags auf und sichern Sie sie wie jede andere Datei. Siehe [Wohin Ihre Dateien gehen](common:your-files).
