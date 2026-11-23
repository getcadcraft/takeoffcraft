---
title: Neuerungen in 0.9 (früher)
summary: Längen in Metern, Zentimetern oder Millimetern lesen, metrische Flächen in m2 mit Wandfläche, Maßstabsvoreinstellungen 1:75 und 1:150, Gewichts- und Temperatureinheiten, Bogen mit zehn Methoden sowie Live-Cursor, Folgen und eine Personenliste.
keywords: Neuerungen 0.9, frühere Version, Neuerungen, Versionshinweise, Änderungsprotokoll, 0.9, Längen anzeigen als, Meter, Zentimeter, Millimeter, metrisch, Wie Global, Einheiten, Anzeigeeinheiten, m2, Quadratmeter, Wandfläche, Maßstabsvoreinstellungen, 1:75, 1:150, Gewicht, Kilogramm, kg, Tonne, t, lb, Temperatur, Celsius, Fahrenheit, Bogen, Bogenmethoden, 3-Punkt-Bogen, Radius, Live, Cursor, Folgen, Personenliste, Klasse, Tooltips, Layout, Neuerungen, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Alles zählen, Legende, Symbollegende, gesamter Satz, Preisgedächtnis, frühere Aufträge, letzter Auftrag, typischer Preis, Lieferant, Bestand, Lieferzeit, Rückstand, Bestellliste, Fehlmenge, Problembereich, Assistent, Sprachen, Eingabegeräte, Symbolleistenzeilen, DWG
from: f4322ba2
---

Dies ist, was sich in TakeoffCraft 0.9 gegenüber 0.8.1 geändert hat. Es ist eine kleine Version für diese App: Längen können jetzt in Metern, Zentimetern oder Millimetern gelesen werden, Flächen und Maßstäbe folgen metrischen Arbeiten richtig, und Bogen hat zehn Arten, gezeichnet zu werden. Live-Sitzungen zeigen außerdem, wer wo ist.

## Neu

### Längen in Metern, Zentimetern oder Millimetern lesen

- **Längen anzeigen als.** {{ui:Einstellungen}} › {{ui:TakeoffCraft}} enthält {{ui:Längen anzeigen als}} mit {{ui:Wie Global}}, {{ui:Fuß-Zoll}}, m, cm und mm. {{ui:Wie Global}} verwendet die metrische Längeneinheit, die Sie unter {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Einheiten}} markiert haben, und Fuß-Zoll, wenn keine markiert ist. Es ändert, wie Längen auf dem Blatt, in der Statusleiste und in den Bereichen gelesen werden, einschließlich Höhen, Tiefe, Stärke und der Geschosse. Eine nackte Zahl, die in ein Höhenfeld eingegeben wird, wird in der angezeigten Einheit gelesen.
- **Nur Anzeige.** Mengen, Kosten und Exporte werden aus den genauen Längen berechnet. Die Wahl 1/16, 1/8 und 1/4 Zoll erscheint nur bei Fuß-Zoll. Siehe [Längen in Metern anzeigen](topic:show-lengths-in-meters).
- **Gewichtseinheiten.** Eine Position {{ui:Eingegebene Menge (keine Zeichnung)}} kann jetzt in lb, TON, kg oder t angegeben und je Einheit bepreist werden.
- **Temperatur.** Jede Position hat im Positionseditor ein optionales Feld {{ui:Temperatur}}, das in Grad C oder F eingegeben wird. {{ui:Temperaturen anzeigen als}} unter {{ui:Einstellungen}} › {{ui:TakeoffCraft}} bietet {{ui:Wie Global}}, °C oder °F.

### Flächen und Maßstäbe für metrische Arbeiten

- **Flächen in m2 auf der Zeichnung.** Eine Fläche, die mit einer metrischen Position gemessen wird, zeigt jetzt m2 am Zeichnungsschild und im Markierungsbereich sowie in der Tabelle an, statt SF. Die Regel lautet: m2, wenn die Position metrisch bepreist ist oder Längen in m, cm oder mm angezeigt werden, und sonst SF.
- **Wandfläche.** Eine lineare Position mit einer Höhe zeigt außerdem ihre Wandfläche (Länge mal Höhe) in der Positionsliste und als Hinweiszeile unter der Mengentabelle nach Positionen.
- **Maßstabsvoreinstellungen 1:75 und 1:150.** Sie stehen in der Liste {{ui:Voreinstellung}} in der Gruppe {{ui:Maßstab}}, die jetzt 32 Maßstäbe umfasst. Siehe [Maßstabsvoreinstellungen](topic:scale-presets).

### Bogen mit zehn Methoden

- Solange {{ui:Bogen}} aktiv ist (Symbolleistenschaltfläche oder {{key:R}}), erscheint im Blattbereich ein Feld {{ui:Bogenmethode}}: 3-Punkt, Start, Zentrum, Ende, Start, Zentrum, Winkel, Start, Zentrum, Länge, Start, Ende, Winkel, Start, Ende, Richtung, Start, Ende, Radius, Zentrum, Start, Ende, Zentrum, Start, Winkel und Zentrum, Start, Länge. Winkel, Länge, Radius und Richtung können angeklickt oder eingegeben werden. Es funktioniert bei linearen Strecken, Flächen und Aussparungen. Vor 0.9 gespeicherte Dateien öffnen sich unverändert. Siehe [Bögen mit zehn Methoden zeichnen](topic:draw-arcs-ten-methods).

### Gemeinsam arbeiten

- **Die Cursor der anderen sehen.** In einer Live-Sitzung wird der Zeiger jeder Person mit ihrem Namen und ihrer Farbe auf dem Blatt angezeigt, mit einem gestrichelten Rahmen um die Markierungen, die sie gewählt hat. Personen auf einem anderen Blatt werden mit dem Namen dieses Blatts aufgelistet. Siehe [Live mit anderen arbeiten](topic:work-live).
- **Einer Person folgen und die Personenliste.** Die Schaltfläche {{ui:Personen}} in einer Live-Sitzung listet jede Person mit dem Werkzeug, das sie verwendet, dem Blatt, auf dem sie ist, und dem Zeitpunkt ihrer letzten Bearbeitung auf. {{ui:Folgen}} bewegt Ihre Ansicht mit ihrer, und der Host kann {{ui:Alle bitten, mir zu folgen}} verwenden. Siehe [Einem Teammitglied in einer Live-Sitzung folgen](topic:follow-a-teammate).

## In jeder App

- **Tooltips und der Starttipp.** Schwebetext ist ein Bootstrap-Tooltip, und der Starttipp kann geschlossen werden.
- **Scrollbare Registerkartenleisten.** Die Registerkartenleiste eines Bereichs, die nicht hineinpasst, scrollt, statt abgeschnitten zu werden.
- **Titel der Registerkarten.** Die Browser-Registerkarte zeigt `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Die Layoutliste unter {{ui:Einstellungen}} ist eine Dropdown-Liste, die das gewählte Layout anzeigt.
- **Sprache.** Die gewählte Sprache erreicht jetzt auch die Wörter, die die Seite selbst ausgibt, etwa Neu, Öffnen und Speichern. Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine Muttersprachlerin oder ein Muttersprachler sie gelesen hat.

## Bekannte Grenzen

- Die Anzeige der Längen, die Gewichts- und Temperatureinheiten und die neuen Voreinstellungen wurden durch Tests und auf der Seite geprüft. Nicht jedes Bedienfeld in jeder Einheit wurde von Hand geprüft.
- Die Personenliste wurde nicht von Hand mit einer echten Klasse aus Lehrkraft und Lernenden geprüft.
- Andere Sprachen als Englisch sind maschinelle Entwürfe.
- Windows-Installationsprogramme sind nicht code-signiert (Weitere Informationen, dann Trotzdem ausführen). Das macOS-Festplattenabbild ist nicht notarisiert (Rechtsklick, dann {{ui:Offen}}).

## Früher: 0.8 und 0.8.1

Dies ist, was sich in TakeoffCraft 0.8 (veröffentlicht 2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert hat. Eine Symbollegende kann jetzt im gesamten Satz auf einmal gezählt werden, eine neue Mengenermittlung kann mit den Preisen Ihrer früheren Aufträge beginnen, und die Mengenermittlung kann mit dem Bestand eines Lieferanten abgeglichen werden. 0.8.1 ist eine Fehlerbehebungsversion.

### Neu

**Alles im Satz zählen**

- **Die Legende einmal einrahmen.** {{ui:Alles zählen}} in der Symbolleiste liest eine Symbollegende: Ziehen Sie einen Rahmen um die Symbole und die daneben gedruckten Namen. Jedes Symbol wird mit seinem Bild und Namen aufgelistet, und der Name wird zum Namen der Position. Entfernen Sie die Markierung bei allem, was Sie nicht wollen, und wählen Sie dann {{ui:Auf N Blättern zählen}}. Eine Leiste zeigt das gerade durchsuchte Blatt, {{ui:Abbrechen}} beendet den Lauf, und die Seite bleibt benutzbar.
- **Jedes Blatt in einem Lauf.** Jedes Symbol wird auf jedem geöffneten Blatt gezählt. Ein Blatt in einem anderen Maßstab wird in diesem Maßstab durchsucht, und Symbole werden in jedem rechten Winkel gedreht gefunden. Die eigenen Symbole der Legende werden auf ihrem Blatt nicht gezählt.
- **Prüfen, bevor etwas hinzugefügt wird.** Jede Summe hat pro Blatt einen Link („E-103: 4“), der zu diesem Blatt führt. Klicken Sie auf ein Feld bei einem Treffer, um ihn auszulassen, und klicken Sie erneut, um ihn zurückzuholen. Die Trefferquote (50 % bis 100 %) filtert nur das Gefundene; es wird nicht erneut gesucht.
- **Ein Schritt Rückgängig.** {{ui:N Markierungen hinzufügen}} erstellt je Symbol eine Zählposition mit einer Markierung bei jedem Treffer. Ein Name, der bereits eine Zählposition von Ihnen ist, wird wiederverwendet. {{key:Ctrl+Z}} nimmt alle Positionen und Markierungen zurück. Was Sie übernehmen, fließt auch in {{ui:Gelernt}} ein.
- **Symbole in beliebigem Winkel.** Aktivieren Sie {{ui:Symbole in beliebigem Winkel}} vor dem Zählen, um auch Symbole zu finden, die um einen Winkel gedreht sind, der kein rechter Winkel ist. Die Suche dreht jedes Symbol dann alle 15 Grad, und ein Symbol, das nicht rund ist, kann bis zu sechsmal so lange dauern.
- **Was es ist.** Einfacher Symbolabgleich auf Ihren eigenen Blättern, ohne trainiertes Modell, und nichts verlässt Ihren Computer. Bei einem erfundenen Satz von 200 Blättern dauerte es 9,4 Sekunden von Anfang bis Ende in Chrome auf einem schnellen Desktop; echte Planssätze werden langsamer sein. Siehe [Alles im Satz zählen](topic:count-everything).

**Preisgedächtnis aus Ihren eigenen Aufträgen**

- **TakeoffCraft merkt sich Ihre Sätze.** Wenn Sie eine Mengenermittlung speichern, wird jede bepreiste Position, die verwendet wird, nach Name und Typ gemerkt: Materialsatz, Lohnsatz, Verschnitt und Einheit. Die letzten 12 Aufträge werden je Name aufbewahrt. Es wird auf diesem Computer neben der Preisbibliothek gespeichert, niemals in einer Mengenermittlungsdatei, und nichts wird irgendwohin gesendet.
- **Eine neue Mengenermittlung daraus beginnen.** {{ui:Preise}} in der Symbolleiste zeigt für jede Position die Sätze des letzten Auftrags, die typischen Sätze und die Spanne. {{ui:Letzten verwenden}} oder {{ui:Üblichen verwenden}} bepreist eine Position, und {{ui:N Positionen ohne Preis aus dem Gedächtnis bepreisen}} füllt jede Position, die noch keinen Preis hat. Jede Verwendung ist ein Schritt Rückgängig.
- **Ältere Arbeiten.** {{ui:Aus einer früheren Mengenermittlung lernen…}} merkt sich die bepreisten Positionen einer gespeicherten Mengenermittlung (.json).
- **Ansehen, ändern, vergessen.** {{ui:Alles Gemerkte}} listet jeden Namen auf; die Papierkorb-Schaltfläche vergisst einen, und {{ui:Alle Preise löschen}} vergisst alle. Deaktivieren Sie {{ui:Meine Preise beim Speichern einer Mengenermittlung merken}}, um es zu stoppen. Ein Preis je Stück wird niemals auf eine Position je Fuß übertragen. Siehe [Preisgedächtnis aus Ihren früheren Aufträgen](topic:price-memory).

**Lieferbestand und Lieferzeiten**

- **Gegen die Liste eines Lieferanten prüfen.** {{ui:Lieferung}} in der Symbolleiste nimmt die Bestandsliste eines Lieferanten ({{ui:Lieferantendatei hinzufügen…}}), eine CSV-Datei oder eine Tabelle, und prüft, was die Mengenermittlung benötigt, einschließlich Verschnitt, dagegen. Bis zu fünf Dateien werden aufbewahrt. Nichts wird gesendet, und nichts fragt einen Lieferanten: Sie bringen die Datei mit.
- **Was es sagt.** Knappe Positionen kommen zuerst: „Kurz um 120 EA“, „Lieferzeit 21 Tage“, „Im Rückstand“, „Einheit weicht ab“, „Kein Bestandswert“ oder „Auf Lager“. {{ui:Längste gewünschte Wartezeit (Tage)}} beginnt bei 14.
- **Bestellliste.** {{ui:Bestellliste (CSV)}} lädt die knappen Positionen mit der fehlenden Menge, dem Lieferanten und der Lieferzeit herunter.
- **Preise in die Bibliothek.** Wenn die Datei Preise enthält, setzt {{ui:Preise in die Bibliothek}} den Materialpreis jedes Bibliothekseintrags mit gleichem Namen und gleicher Einheit. Bepreisen Sie aus der Bibliothek neu, um sie in die Mengenermittlung zu übernehmen.
- **Im Problembereich.** Eine Fehlmenge ist eine Warnung, und eine lange Wartezeit ist ein Hinweis, beide unter „Lieferbestand“. Sie können eine mit einem Grund übernehmen, und der Grund wird in der Mengenermittlung gespeichert. Siehe [Lieferbestand und Lieferzeiten prüfen](topic:supplier-stock).

**KI-Assistenten**

- **Werkzeuge für alle drei.** Wenn KI-Assistenten unter {{ui:Einstellungen}} erlaubt sind, kann ein Assistent eine Legende lesen (`legend_open`), die Zählung ausführen (`legend_count_start`, dann `legend_count_status` und `legend_count_result`) und sie hinzufügen (`legend_count_add`, das vorab eine Vorschau zeigen kann). Er kann die gemerkten Preise lesen (`prices_list`) und Positionen daraus bepreisen (`prices_apply`, das vorab eine Vorschau zeigen kann) sowie die Lieferantenprüfung lesen (`supply_check`). Eine Lieferantendatei hinzufügen bleibt Ihre Aufgabe. Siehe [TakeoffCraft mit KI-Assistenten verwenden](topic:use-with-ai-assistants).

**In jeder App**

- **Sprachen.** Insgesamt vierundfünfzig Sprachen; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Suaheli und Usbekisch). Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine Muttersprachlerin oder ein Muttersprachler sie gelesen hat.
- **Eingabegeräte.** {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Eingabegeräte}} legt fest, was ein Trackpad, die Seitentasten einer Maus, ein Stift, eine 3D-Maus, ein Spielcontroller oder ein MIDI-Controller tut, für jede App oder für eine. Siehe [Trackpad, 3D-Maus oder Controller verwenden](common:input-devices).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet {{ui:Umbrechen}} (der Start), {{ui:2 Zeilen}} und {{ui:1 Zeile}}; Gruppen, die nicht hineinpassen, scrollen seitlich. Siehe [Bereiche anordnen](common:arrange-panels).
- **Problembereich.** Der gemeinsame Bereich mit Warnungen und Hinweisen enthält jetzt die oben beschriebene Lieferbestandsprüfung neben den anderen Prüfungen.
- **Add-ons.** Add-ons folgen Ihrer Kontoliste. Siehe [Add-ons und Ihre Kontoliste](common:addons-basics).
- **Ihre KI verbinden.** CadCraft Studio ist die Zentrale: Verbinden Sie Ihren Assistenten einmal für alle acht Apps. Studio hat keine eigene KI.

### Behoben in 0.8.1

- **Abschnitt der DWG-Klassen.** Der Abschnitt der Klassen einer DWG-Datei wurde als falscher Typ gelesen. Das ist in TakeoffCraft und in vier weiteren Apps behoben.
- **Studio kann die Sprache während des Betriebs ändern.** Zuvor waren Studio und seine gepackten Ausgaben nur auf Englisch. Dies wurde auf der Desktop-Version nicht auf jeder Plattform getestet; sagen Sie uns Bescheid, falls sich die Sprache nicht ändert.

### Noch nicht in dieser Version

- **Nicht code-signiert.** Windows kann warnen, und auf einem Mac klicken Sie beim ersten Mal mit der rechten Maustaste und wählen {{ui:Offen}}. Die Store-Versionen (Microsoft Store, Google Play, App Store) sind zurückgestellt, und die iPad- und iPhone-Version wurde für 0.8.1 nicht neu erstellt.
- **Studio-Updates.** Das Windows-Installationsprogramm und die Linux-Pakete prüfen einmal täglich und fragen vorher. Das portable ZIP-Archiv informiert nur, und macOS und die APK aktualisieren sich nicht selbst. Das macOS-.dmg von 0.8 folgt der Veröffentlichung.
- **Ihre KI verbinden.** Ein Ein-Klick-Verbinden innerhalb von Studio, der gehostete Connector für KI im Browser, ein eigener API-Schlüssel innerhalb von Studio und ein veröffentlichtes MCP-Paket sind in dieser Version nicht zugesagt.
- **Alles zählen.** Es braucht Symbole, die so gezeichnet sind wie in der Legende, und ein Symbol mit einer Wand oder einer langen Linie darüber kann übersehen werden. Gespiegelte Symbole werden nicht gefunden, und ein Blatt ohne Maßstab, das in einer anderen Größe gezeichnet ist, wird in der Größe der Legende durchsucht. Prüfen Sie die Treffer auf dem ersten Blatt, bevor Sie dem Rest vertrauen.
- **Lieferbestand.** Die Bestandszahlen sind nur so aktuell wie die Datei, die Sie hinzufügen. Die Prüfung fragt nie einen Lieferanten.
- **Sprachen.** Die App-Leiste von Tamil läuft über.

Alles Übrige steht unter [Noch nicht umgesetzt](topic:not-built-yet). Für die Version davor siehe [Neuerungen in 0.7](topic:whats-new-0-7).
