---
title: Vergabepakete und Preisspiegel
summary: Die Kalkulation nach Gewerken in Pakete aufteilen, den Leistungsumfang jedes Pakets an Nachunternehmer senden, die zurückkommenden Angebote auf gleichem Leistungsumfang vergleichen und das gewählte Angebot als Preis des Pakets verwenden.
keywords: Preisspiegel, Vergabepaket, Nachunternehmer, Nachunternehmerangebot, Leistungsumfang, Platzhalter, Gewerk, CSI-Division, Angebote vergleichen, niedrigstes Angebot, Angebotstabelle, Bieter, Zuschlag, gewähltes Angebot, Angebot verwenden, Nachunternehmerpreis
from: 856b3088
---

Ein Generalunternehmer sendet den Leistungsumfang jedes Gewerks an Nachunternehmer und vergleicht, was zurückkommt. TakeoffCraft macht beides aus der Mengenermittlung: Öffnen Sie {{ui:Export}} › {{ui:Vergabepakete und Preisspiegel…}}.

## Pakete

Es gibt ein Paket für jede CSI-Division, die Ihre Positionen verwenden (die ersten zwei Ziffern der {{ui:CSI-Nummer}} einer Position, siehe [Mengenermittlungspositionen anlegen](topic:create-items)). Positionen ohne Nummer bilden ein eigenes Paket. Jedes Paket zeigt seine Positionen, auf wie vielen Blättern ihre Markierungen liegen und unsere eigenen Kosten dafür (Material und Lohn vor Zuschlägen, aus dem Basisangebot).

Wählen Sie {{ui:Leistungsumfang-CSV}}, um herunterzuladen, was Sie an einen Nachunternehmer senden: jede Position mit ihrer CSI-Nummer, Menge, Einheit und den Blättern, auf denen sie liegt. Sie enthält keine Preise. Für Materiallieferanten hat die Angebotsanfrage der Arbeitsmappe die Materialliste (siehe [Kalkulation exportieren](topic:export-estimate)).

## Angebote erfassen

1. Geben Sie in der leeren Zeile unter dem Paket den Namen des Bieters und den Betrag des Angebots ein und wählen Sie {{ui:Angebot hinzufügen}}.
2. Lässt ein Angebot einen Teil des Leistungsumfangs aus, öffnen Sie seine Liste {{ui:Ausgelassen}} und setzen Sie Haken bei diesen Positionen.
3. Um einen Namen oder einen Betrag zu korrigieren, überschreiben Sie ihn in der Tabelle; die Schaltfläche × entfernt ein Angebot.

Jede Änderung ist ein Schritt, den {{key:Mod+Z}} zurücknimmt, und die Angebote werden mit der Mengenermittlung gespeichert.

## So werden die Angebote verglichen

Angebote decken selten denselben Leistungsumfang ab. Der Preisspiegel ergänzt jede ausgelassene Position mit einem **Platzhalter** zu unseren eigenen Kosten dafür, sodass jedes Angebot über das ganze Paket verglichen wird:

**Vergleichbar = Angebot + Platzhalter**

Das niedrigste vergleichbare Angebot wird mit **Niedrigst** markiert; bei Gleichstand gilt das zuerst eingegebene. **Gegenüber unseren Kosten** ist das vergleichbare Angebot minus unsere eigenen Kosten für das Paket: negativ heißt darunter. Ein Angebot, das am niedrigsten aussieht, kann verlieren, sobald sein fehlender Leistungsumfang mitgezählt wird.

Die Arbeitsmappe erhält ein Arbeitsblatt **Preisspiegel** mit jedem Paket, das Angebote hat: unsere Kalkulation, jedes Angebot, seine Platzhalter, die vergleichbare Summe und die Differenz als Live-Formeln, und was jedes Angebot ausgelassen hat.

## Ein Angebot als Preis des Pakets verwenden

Wählen Sie bei einem Angebot {{ui:Verwenden}}, und es wird zum Preis des ganzen Pakets in Ihrer Kalkulation. Die eigene Bepreisung des Pakets (die Positionen, ihre Zusatzbedingungen und Kalkulationsbausteine) fällt aus der Auftragssumme heraus. Die Positionen bleiben als Mengen mit Ihren eigenen Sätzen zur Ansicht, und eine Zeile, **Gewähltes Angebot**, trägt den Betrag des Angebots. Vom Angebot ausgelassene Positionen bleiben zu Ihren eigenen Kosten, das ist, was der Preisspiegel bereits als Platzhalter gerechnet hat. Wählen Sie ein anderes Angebot oder wählen Sie dasselbe erneut, um es zurückzunehmen; jeder Schritt wird mit {{key:Mod+Z}} rückgängig gemacht.

In der {{ui:Angebotsübersicht und Angebot…}} sind die Nachunternehmerangebote eine Zeile innerhalb der Kosten: Gemeinkosten, Gewinn und Bürgschaft werden wie bei jeder anderen Kostenart darauf aufgeschlagen; Umsatzsteuer (nur auf Material) und Lohnnebenkosten (auf Lohn) nicht. Das Arbeitsblatt Kalkulation der Arbeitsmappe führt das gewählte Angebot als eigene Zeile, und der Zuschlagsblock addiert sie mit Live-Formeln. Die Materialliste lässt das Material eines vergebenen Pakets weg, weil der Nachunternehmer es liefert.

Ein Paket in einem Angebotsbereich einer Alternative wird nicht neu bepreist: Alternativen und Zwischensummen der Angebotsbereiche verwenden weiterhin Ihre eigenen Preise.

## Angebote, die per E-Mail zurückkommen

Sie müssen die Angebote nicht eintippen. {{ui:Zur Angebotsabgabe senden…}} unter einem Paket sendet jedem Nachunternehmer einen Link zu einer Seite, auf der er einen Preis für jede Zeile eingibt; {{ui:Preise abrufen}} holt, was er gesendet hat, in diese Tabelle. Siehe [Ein Paket zur Angebotsabgabe senden](topic:bid-invitations).

:::note
Ein Angebot von Hand einzutragen funktioniert weiterhin, und ein handeingetragenes Angebot und eines von der Website stehen nebeneinander. Angebote von der Website sind mit **Web** markiert (oder **Web, verspätet**, wenn sie nach dem Abgabetermin eintrafen). Ihr Preis ändert sich nur, wenn der Bieter eine neue Version sendet, sodass Ihre eigenen Änderungen daran bis dahin bestehen bleiben.
:::
