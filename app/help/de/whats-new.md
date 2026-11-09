---
title: Neuerungen in 0.8 und 0.8.1
summary: Eine ganze Symbollegende in einem Durchlauf über alle offenen Blätter zählen, Positionen anhand der Preise Ihrer früheren Aufträge bepreisen, die Mengenermittlung mit Bestand und Lieferzeiten eines Lieferanten prüfen sowie neue Assistenten-Werkzeuge für alle drei, dazu die gemeinsamen Änderungen von 0.8 und die Korrektur für DWG-Dateien in 0.8.1.
keywords: Was ist neu, Neuerungen, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, alles zählen, Legende, Symbollegende, ganzer Satz, Preisgedächtnis, frühere Aufträge, letzter Auftrag, üblicher Preis, Lieferant, Bestand, Lieferzeit, Lieferrückstand, Bestellliste, Fehlmenge, Problembereich, Assistent, Sprachen, Eingabegeräte, Symbolleistenzeilen, dwg
from: a04adef6
---

Dies hat sich in TakeoffCraft 0.8 (veröffentlicht am 2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert. Eine Symbollegende kann jetzt im gesamten Satz auf einmal gezählt werden, eine neue Mengenermittlung kann mit den Preisen Ihrer früheren Aufträge beginnen, und die Mengenermittlung lässt sich mit dem Bestand eines Lieferanten abgleichen. 0.8.1 ist eine Fehlerbehebung.

## Neu

### Alles im Satz zählen

- **Legende einmal einrahmen.** {{ui:Count everything}} in der Symbolleiste liest eine Symbollegende: Ziehen Sie einen Rahmen um die Symbole und die daneben gedruckten Namen. Jedes Symbol wird mit seinem Bild und Namen aufgelistet, und der Name wird zum Namen der Position. Entfernen Sie den Haken bei allem, was Sie nicht wollen, und wählen Sie dann {{ui:Auf N Blättern zählen}}. Ein Balken zeigt das gerade durchsuchte Blatt, {{ui:Cancel}} beendet den Lauf, und die Seite bleibt bedienbar.
- **Alle Blätter in einem Lauf.** Jedes Symbol wird auf jedem offenen Blatt gezählt. Ein Blatt, das in einem anderen Maßstab gezeichnet ist, wird in diesem Maßstab durchsucht, und Symbole werden in jedem rechten Winkel gedreht gefunden. Die eigenen Symbole der Legende werden auf ihrem Blatt nicht gezählt.
- **Vor dem Hinzufügen prüfen.** Jede Summe hat pro Blatt einen Link („E-103: 4“), der zu diesem Blatt führt. Klicken Sie auf ein Feld bei einem Fund, um ihn auszulassen, und erneut, um ihn zurückzuholen. Die Trefferquote (50 % bis 100 %) filtert nur das Gefundene; es wird nichts erneut gesucht.
- **Ein Schritt zum Rückgängigmachen.** {{ui:N Markierungen hinzufügen}} erstellt pro Symbol eine Mengenposition mit einer Markierung auf jedem Fund. Ein Name, der bereits eine Mengenposition von Ihnen ist, wird wiederverwendet. {{key:Ctrl+Z}} nimmt alle Positionen und Markierungen zurück. Was Sie annehmen, fließt auch in {{ui:Gelernt}} ein.
- **Symbole in jedem Winkel.** Setzen Sie vor dem Zählen den Haken bei {{ui:Symbole in beliebigem Winkel}}, damit auch Symbole gefunden werden, die um einen anderen Winkel als einen rechten gedreht sind. Die Suche dreht jedes Symbol dann alle 15 Grad, und ein Symbol, das nicht rund ist, kann bis zu sechsmal so lange dauern.
- **Was es ist.** Einfacher Symbolabgleich auf Ihren eigenen Blättern, ohne trainiertes Modell; nichts verlässt Ihren Computer. Bei einem erfundenen Satz mit 200 Blättern dauerte es 9.4 Sekunden von Anfang bis Ende in Chrome auf einem schnellen Desktop-Rechner; echte Plansätze werden langsamer sein. Siehe [Alles im Satz zählen](topic:count-everything).

### Preisgedächtnis aus Ihren eigenen Aufträgen

- **TakeoffCraft merkt sich Ihre Preise.** Wenn Sie eine Mengenermittlung speichern, wird jede bepreiste Position, die verwendet wird, anhand von Name und Typ gemerkt: Materialpreis, Lohnsatz, Verschnitt und Einheit. Die letzten 12 Aufträge werden je Name gespeichert. Sie werden auf diesem Computer neben der Preisbibliothek gehalten, nie in einer Mengenermittlungsdatei, und nichts wird irgendwohin gesendet.
- **Neue Mengenermittlung damit beginnen.** {{ui:Preise}} in der Symbolleiste zeigt für jede Position die Sätze des letzten Auftrags, die üblichen Sätze und die Spanne. {{ui:Letzten verwenden}} oder {{ui:Üblichen verwenden}} bepreist eine Position, und {{ui:N Positionen ohne Preis aus dem Gemerkten bepreisen}} füllt jede Position, die noch keinen Preis hat. Jede Verwendung ist ein Schritt zum Rückgängigmachen.
- **Älteres Material.** {{ui:Aus einer früheren Mengenermittlung lernen…}} merkt sich die bepreisten Positionen einer gespeicherten Mengenermittlung (.json).
- **Ansehen, ändern, vergessen.** {{ui:Alles Gemerkte}} listet jeden Namen auf; die Papierkorb-Schaltfläche vergisst einen, und {{ui:Alle Preise löschen}} vergisst alle. Entfernen Sie den Haken bei {{ui:Meine Preise beim Speichern einer Mengenermittlung merken}}, um das Merken zu beenden. Ein Preis pro Stück wird nie auf eine Position pro Fuß übertragen. Siehe [Preisgedächtnis aus Ihren eigenen Aufträgen](topic:price-memory).

### Lieferantenbestand und Lieferzeiten

- **Mit der Liste eines Lieferanten prüfen.** {{ui:Lieferung}} in der Symbolleiste nimmt die Bestandsliste eines Lieferanten ({{ui:Lieferantendatei hinzufügen…}}), eine CSV-Datei oder eine Tabelle, und prüft damit, was die Mengenermittlung einschließlich Verschnitt benötigt. Bis zu fünf Dateien werden gespeichert. Nichts wird gesendet, und nichts fragt beim Lieferanten nach: Sie bringen die Datei mit.
- **Was es aussagt.** Knappe Positionen kommen zuerst: „120 EA zu wenig“, „Lieferzeit 21 Tage“, „Auf Lieferrückstand“, „Einheit abweichend“, „Keine Bestandsangabe“ oder „Auf Lager“. {{ui:Längste gewünschte Wartezeit (Tage)}} beginnt bei 14.
- **Bestellliste.** {{ui:Bestellliste (CSV)}} lädt die knappen Positionen mit der fehlenden Menge, dem Lieferanten und der Lieferzeit herunter.
- **Preise in die Bibliothek.** Wenn die Datei Preise enthält, setzt {{ui:Preise in die Bibliothek}} den Materialpreis jedes Bibliothekseintrags mit gleichem Namen und gleicher Einheit. Bepreisen Sie aus der Bibliothek neu, um die Preise in die Mengenermittlung zu übernehmen.
- **Im Problembereich.** Eine Fehlmenge ist eine Warnung, eine lange Wartezeit ist ein Hinweis, beides unter „Lieferantenbestand“. Sie können eine mit Begründung annehmen; die Begründung wird in der Mengenermittlung gespeichert. Siehe [Lieferantenbestand und Lieferzeiten prüfen](topic:supplier-stock).

### KI-Assistenten

- **Werkzeuge für alle drei.** Wenn Assistenten in {{ui:Einstellungen}} erlaubt sind, kann ein Assistent eine Legende lesen (`legend_open`), die Zählung starten (`legend_count_start`, danach `legend_count_status` und `legend_count_result`) und sie hinzufügen (`legend_count_add`, das vorab eine Vorschau zeigen kann). Er kann die gemerkten Preise lesen (`prices_list`) und Positionen anhand von ihnen bepreisen (`prices_apply`, das vorab eine Vorschau zeigen kann) sowie die Prüfung des Lieferanten lesen (`supply_check`). Eine Lieferantendatei hinzuzufügen bleibt Ihre Aufgabe. Siehe [KI-Assistenten mit TakeoffCraft verwenden](topic:use-with-ai-assistants).

### In jeder App

- **Sprachen.** Insgesamt vierundfünfzig Sprachen; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili und Usbekisch). Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine muttersprachliche Person sie gelesen hat.
- **Eingabegeräte.** {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Eingabegeräte}} legt fest, was ein Trackpad, die Seitentasten einer Maus, ein Stift, eine 3D-Maus, ein Game-Controller oder ein MIDI-Controller bewirkt, für alle Apps oder für eine. Siehe [Trackpad, 3D-Maus oder Controller verwenden](common:input-devices).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet {{ui:Umbrechen}} (den Anfang), {{ui:2 Zeilen}} und {{ui:1 Zeile}}; Gruppen, die nicht passen, scrollen seitlich. Siehe [Bereiche anordnen](common:arrange-panels).
- **Problembereich.** Der gemeinsame Bereich mit Warnungen und Hinweisen enthält jetzt die oben beschriebene Prüfung des Lieferantenbestands neben den anderen Prüfungen.
- **Add-ons.** Add-ons folgen Ihrer Kontoliste. Siehe [Add-ons und Ihre Kontoliste](common:addons-basics).
- **KI verbinden.** CadCraft Studio ist die Zentrale: Verbinden Sie Ihren Assistenten einmal für alle acht Apps. Studio hat keine eigene KI.

## Behoben in 0.8.1

- **Klassenabschnitt einer DWG-Datei.** Der Klassenabschnitt einer DWG-Datei wurde als falscher Typ gelesen. Das ist in TakeoffCraft und in vier weiteren Apps behoben.
- **Studio kann die Sprache während des Laufs wechseln.** Bisher waren Studio und seine gepackten Ausgaben nur auf Englisch verfügbar. Dies wurde in der Desktop-Version nicht auf allen Plattformen getestet; sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.

## Noch nicht in dieser Version

- **Nicht code-signiert.** Windows kann warnen, und auf einem Mac klicken Sie beim ersten Mal mit der rechten Maustaste und wählen {{ui:Offen}}. Die Store-Versionen (Microsoft Store, Google Play, App Store) sind zurückgestellt, und die iPad- und iPhone-Version wurde für 0.8.1 nicht neu erstellt.
- **Studio-Updates.** Das Windows-Installationsprogramm und die Linux-Pakete prüfen einmal täglich und fragen vorher nach. Das portable ZIP-Archiv informiert nur, und macOS und die APK aktualisieren sich nicht selbst. Die macOS-.dmg für 0.8 folgt der Veröffentlichung.
- **KI verbinden.** Die Ein-Klick-Verbindung in Studio, der gehostete Connector für KI im Browser, Ihr eigener API-Schlüssel in Studio und ein veröffentlichtes MCP-Paket sind in dieser Version nicht zugesagt.
- **Alles im Satz zählen.** Es braucht Symbole, die genauso gezeichnet sind wie in der Legende, und ein Symbol mit einer Wand oder einer langen Linie darüber kann übersehen werden. Gespiegelte Symbole werden nicht gefunden, und ein Blatt ohne Maßstab, das in einer anderen Größe gezeichnet ist, wird in der Größe der Legende durchsucht. Prüfen Sie die Funde auf dem ersten Blatt, bevor Sie dem Rest vertrauen.
- **Lieferantenbestand.** Die Bestandszahlen sind nur so aktuell wie die Datei, die Sie hinzufügen. Die Prüfung fragt nie beim Lieferanten nach.
- **Sprachen.** Die App-Leiste für Tamil läuft über.

Alles Weitere finden Sie unter [Noch nicht umgesetzt](topic:not-built-yet). Zur Vorversion siehe [Neuerungen in 0.7](topic:whats-new-0-7).
