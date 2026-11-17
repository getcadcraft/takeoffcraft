---
title: Ein Paket zur Angebotsabgabe senden
summary: Ein Angebotspaket per E-Mail an Nachunternehmer senden, Preise auf einer Seite ohne Konto eintragen lassen, die Preise bis zur Öffnungszeit verschlossen halten und in den Preisspiegel übernehmen.
keywords: zur Angebotsabgabe senden, Einladung, Angebotseinladung, Bieter, Nachunternehmer, einladen, E-Mail, Preisanfrage, verschlossene Angebote, Angebotsöffnung, Öffnungstag, verspätetes Angebot, Abgabetermin, Erinnerung, Nachunternehmerdaten, Versicherung, Qualifikation, CSV, verbinden, Blätter-PDF
from: fb314b2c
---

{{ui:Export}} › {{ui:Vergabepakete und Preisspiegel…}} › {{ui:Zur Angebotsabgabe senden…}} sendet ein Paket an die Personen Ihrer Wahl. Die Website schickt jeder von ihnen einen Link per E-Mail; sie öffnen eine Seite, sehen den Leistungsumfang und tragen einen Preis für jede Zeile ein. Die Preise sehen Sie im Preisspiegel, bereit zum Vergleich ([Vergabepakete und Preisspiegel](topic:bid-leveling)).

:::note
**Das Senden ist noch nicht für alle offen.** Solange die Funktion getestet wird, funktioniert sie nur für Konten, die das CadCraft-Team freigeschaltet hat; wenn Ihres nicht dazugehört, sagt der Dialog das. Die Seite für Bieter funktioniert für jede gesendete Einladung.
:::

## Vor dem Senden

- Sie brauchen ein CadCraft-Konto mit bestätigter E-Mail-Adresse. TakeoffCraft im Browser fordert Sie auf, **Verbinden** zu wählen: Ein Tab auf getcadcraft.com öffnet sich, Sie drücken Verbinden, und dieser Tab erhält eine Anmeldung, die 30 Tage gilt, nur für Angebotspakete, bis Sie den TakeoffCraft-Tab schließen. Sie können sie jederzeit auf Ihrer Sicherheitsseite entfernen. Ein Studio-Fenster kann noch nicht senden.
- Geben Sie jeder Position eine CSI-Nummer: Ein Paket besteht aus den Positionen einer CSI-Division ([Mengenermittlungspositionen anlegen](topic:create-items)).
- Skalieren Sie die Blätter, auf denen die Markierungen des Pakets liegen, damit die Mengen, die die Bieter sehen, gemessen sind.

## Ein Paket senden

1. Wählen Sie {{ui:Zur Angebotsabgabe senden…}} unter dem Paket.
2. Füllen Sie Titel, Projekt und optionale Nachricht aus und den **Abgabetermin** in Ihrer eigenen Zeitzone.
3. Lassen Sie **Preise verschlossen halten** angehakt, um jeden Preis bis zur **Öffnungszeit** zu verbergen (nicht vor dem Abgabetermin), oder entfernen Sie den Haken, um Preise zu sehen, sobald sie eingehen.
4. Lassen Sie das Feld für die Blätter angehakt, um ein PDF der Blätter zu senden, die die Markierungen des Pakets enthalten, mit eingezeichneten Markierungen. Ihre Preise sind nie im Versand: nur Positionsnamen, CSI-Nummern, Mengen, Einheiten und Blattnamen.
5. Geben Sie die einzuladenden Personen ein, eine pro Zeile, als `Name <name@company.com>` oder nur die Adresse, oder setzen Sie Haken bei Personen aus Ihren Nachunternehmerdaten. Bis zu 60 auf einmal, 100 je Paket.
6. Wählen Sie {{ui:Einladungen senden}}. Jede Person erhält eine einfache E-Mail mit Ihrem Namen und Ihrer E-Mail-Adresse, dem Abgabetermin und dem Link; Antworten gehen an Sie.

Der Dialog sagt, wie viele gesendet wurden, und nennt alle übersprungenen: bereits zu diesem Paket eingeladen, um keine Angebotseinladungen gebeten, keine gültige Adresse oder über einem Versandlimit.

## Was der Bieter sieht

Eine Seite unter einem langen privaten Link, ohne Anmeldung. Sie zeigt, wer eingeladen hat, den Abgabetermin, ob die Preise verschlossen sind, Ihre Nachricht und das Blatt-PDF, dann jede Zeile mit ihrer Menge. Für jede Zeile tragen sie einen Preis ein oder setzen einen Haken bei **Nicht enthalten**, und sie können eine Notiz hinzufügen. Notizen gibt es für das ganze Paket und bis zu 3 Dateien (ein Angebot, ein Leistungsschreiben, ein Zertifikat). Sie können erneut speichern und ihre Preise bis zur Öffnung ändern oder **ablehnen**, mit einem Kästchen, um CadCraft zu bitten, ihnen keine Angebotseinladungen mehr zu senden.

## Verschlossene Angebote und die Öffnung

Vor der Öffnungszeit sieht **niemand** einen Preis, eine Notiz oder eine Datei: nicht Sie, nicht in TakeoffCraft, nicht auf Ihrer Seite Angebotspakete. Sie sehen, wer eingeladen wurde und ob er geantwortet hat. Zur Öffnungszeit erscheinen alle Angebote gleichzeitig. Ein Angebot, das nach dem Abgabetermin gespeichert wird, wird angenommen und als **verspätet** markiert; der Preisspiegel listet es weiterhin, und Verspätung ist nur ein Vermerk, keine Wertung. Nach der Öffnung kann ein Bieter keinen Preis mehr ändern. Ohne Verschließen ist ein Angebot nach Fälligkeit endgültig.

## Preise abrufen

{{ui:Preise abrufen}} fragt die Website ab und fügt jede Antwort dem Paket als Angebot hinzu, markiert mit **Web**. TakeoffCraft fragt außerdem jedes Mal leise nach, wenn Sie den Dialog öffnen, solange die Verbindung besteht. Ein Angebot, dessen Bieter eine neue Version gespeichert hat, wird an Ort und Stelle aktualisiert; ein Angebot, das Sie bearbeitet haben, bleibt, wie Sie es hinterlassen haben, bis der Bieter eine neue Version sendet. Jeder Abruf ist ein Schritt, den {{key:Mod+Z}} rückgängig macht. Ausgelassene Zeilen kommen als der Leistungsumfang, den das Angebot ausschließt, herüber, sodass der Preisspiegel sie auf Ihre eigenen Kosten ergänzt.

## Auf der Website

Ihr Konto hat zwei weitere Seiten, sobald Sie senden können: **Angebotspakete** listet, was Sie gesendet haben, wer geantwortet hat, die verspäteten Angebote und die Dateien. Dort können Sie eine Erinnerung senden (einen neuen Link; der alte funktioniert nicht mehr), ein Paket schließen, wieder öffnen oder abbrechen. **Nachunternehmer** führt einen Datensatz je Firma: Ansprechpartner, Gewerke, Qualifikationsangaben (Jahre im Geschäft, Bürgschaftsrahmen, EMR, Sicherheitsbilanz, Tarifbindung oder offener Betrieb, Referenzen), Ablaufdaten für Lizenz und Versicherung, die markiert werden, sobald sie abgelaufen sind oder in 30 Tagen ablaufen, und ihre früheren Angebote. Sie importieren und exportieren die Datensätze als CSV: eine Zeile je Ansprechpartner, mit den Spalten, die der Export zeigt. Eine Firma, die Sie bereits haben, wird aktualisiert und nie doppelt angelegt.

## Wer sieht was, und wie lange

Die Preise, Notizen und Dateien eines Bieters gehen an Sie und an das CadCraft-Team, das die Seite betreibt. Sie werden 24 Monate nach dem Abgabetermin aufbewahrt, die Dateien 180 Tage; danach werden sie gelöscht. Die E-Mail-Adresse des Bieters ist die, die Sie eingegeben haben; sie wird nur für die Einladung und eine Erinnerung dazu verwendet. Eine Adresse erhält höchstens 3 Einladungen am Tag, von allen zusammen, und Sie können bis zu 200 am Tag senden.

## Noch nicht umgesetzt

Nachträge, Zuschlagschreiben, ein unterschriebener Leistungsumfang je Bieter und automatische Erinnerungen vor Ablauf eines Versicherungsdatums sind noch nicht umgesetzt. Siehe [Noch nicht umgesetzt](topic:not-built-yet).
