---
title: Neuerungen in 0.9
summary: Längen in Metern, Zentimetern oder Millimetern ablesen, metrische Flächen in m2 mit Wandfläche, Maßstabsvoreinstellungen 1:75 und 1:150, Gewichts- und Temperatureinheiten, Bogen mit zehn Methoden sowie Live-Cursor, Folgen und eine Personenliste.
keywords: neuerungen, was ist neu, versionshinweise, änderungsprotokoll, 0.9, längen anzeigen als, meter, zentimeter, millimeter, metrisch, wie global, einheiten, anzeigeeinheiten, m2, quadratmeter, wandfläche, maßstabsvoreinstellungen, 1:75, 1:150, gewicht, kilogramm, kg, tonne, ton, lb, temperatur, celsius, fahrenheit, bogen, bogenmethoden, dreipunktbogen, radius, live, cursor, folgen, personenliste, klasse, tooltips, layout, änderungen, 0.8, 0.8.1, version, neue funktionen, alles zählen, legende, symbollegende, gesamter satz, preisspeicher, frühere aufträge, letzter auftrag, typischer preis, lieferant, bestand, lieferzeit, rückstand, bestellliste, engpass, probleme-bereich, assistent, sprachen, eingabegeräte, symbolleistenzeilen, dwg
from: 6182b998
---

Das hat sich in TakeoffCraft 0.9 gegenüber 0.8.1 geändert. Es ist ein kleines Release für diese App: Längen lassen sich nun in Metern, Zentimetern oder Millimetern ablesen, Flächen und Maßstäbe folgen der metrischen Arbeit richtig, und Bogen hat zehn Zeichenmethoden. Live-Sitzungen zeigen außerdem, wer wo ist.

## Neu

### Längen in Metern, Zentimetern oder Millimetern ablesen

- **Längen anzeigen als.** {{ui:Einstellungen}} › {{ui:TakeoffCraft}} hat {{ui:Längen anzeigen als}} mit {{ui:Wie Global}}, {{ui:Fuß-Zoll}}, m, cm und mm. {{ui:Wie Global}} verwendet die metrische Längeneinheit, die Sie unter {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Einheiten}} markiert haben, und Fuß-Zoll, wenn keine markiert ist. Es ändert, wie Längen auf dem Blatt, in der Statusleiste und in den Bereichen gelesen werden, einschließlich Höhen, Tiefen, Stärken und Geschosse. Eine nackte Zahl, die in einem Höhenfeld eingegeben wird, wird in der angezeigten Einheit gelesen.
- **Nur Anzeige.** Mengen, Kosten und Exporte werden aus den genauen Längen berechnet. Die Auswahl 1/16, 1/8 und 1/4 Zoll erscheint nur bei Fuß-Zoll. Siehe [Längen in Metern anzeigen](topic:show-lengths-in-meters).
- **Gewichtseinheiten.** Eine Position der {{ui:Eingegebene Menge (keine Zeichnung)}} kann nun in lb, TON, kg oder t sein und je Einheit bepreist werden.
- **Temperatur.** Jede Position hat im Positionseditor ein optionales Feld {{ui:Temperatur}}, eingegeben in Grad C oder F. {{ui:Temperaturen anzeigen als}} in {{ui:Einstellungen}} › {{ui:TakeoffCraft}} bietet {{ui:Wie Global}}, °C oder °F an.

### Flächen und Maßstäbe für metrische Arbeit

- **Flächen in m2 auf der Zeichnung.** Eine Fläche, die mit einer metrischen Position gemessen wurde, steht nun auf dem Zeichnungsschild und im Markierungsbereich ebenso wie in der Tabelle in m2 statt SF. Die Regel: m2, wenn die Position metrisch bepreist ist oder Längen in m, cm oder mm angezeigt werden, und sonst SF.
- **Wandfläche.** Eine lineare Position mit Höhe zeigt außerdem ihre Wandfläche (Länge mal Höhe) in der Positionsliste und als Notizzeile unter der Mengentabelle je Position.
- **Maßstabsvoreinstellungen 1:75 und 1:150.** Sie stehen in der Liste {{ui:Voreinstellung}} in der Gruppe {{ui:Maßstab}}, die nun 32 Maßstäbe hat. Siehe [Maßstabsvoreinstellungen](topic:scale-presets).

### Bogen mit zehn Methoden

- Solange {{ui:Bogen}} eingeschaltet ist (Werkzeugleisten-Schaltfläche oder {{key:R}}), erscheint in der Blattleiste ein Feld {{ui:Bogenmethode}} mit: 3-Punkt, Start, Mitte, Ende, Start, Mitte, Winkel, Start, Mitte, Länge, Start, Ende, Winkel, Start, Ende, Richtung, Start, Ende, Radius, Mitte, Start, Ende, Mitte, Start, Winkel und Mitte, Start, Länge. Winkel, Länge, Radius und Richtung können angeklickt oder eingegeben werden. Es funktioniert bei linearen Strecken, Flächen und Aussparungen. Vor 0.9 gespeicherte Dateien öffnen sich gleich. Siehe [Bögen mit zehn Methoden zeichnen](topic:draw-arcs-ten-methods).

### Gemeinsam arbeiten

- **Die Cursor der anderen sehen.** In einer Live-Sitzung wird der Zeiger jeder Person auf dem Blatt mit Name und Farbe angezeigt, dazu ein gestrichelter Rahmen um die Markierungen, die sie ausgewählt hat. Personen auf einem anderen Blatt werden mit dem Namen dieses Blatts aufgelistet. Siehe [Mit anderen live arbeiten](topic:work-live).
- **Einer Person folgen, und die Personenliste.** Die Schaltfläche {{ui:Personen}} in einer Live-Sitzung listet jede Person mit dem Werkzeug, das sie verwendet, dem Blatt, auf dem sie ist, und dem Zeitpunkt ihrer letzten Bearbeitung. {{ui:Folgen}} bewegt Ihre Ansicht mit ihrer, und der Host kann {{ui:Alle bitten, mir zu folgen}} verwenden. Siehe [Einem Teammitglied in einer Live-Sitzung folgen](topic:follow-a-teammate).

## In jeder App

- **Tooltips und Startnotiz.** Schwebetext ist ein Bootstrap-Tooltip, und die Startnotiz lässt sich schließen.
- **Scrollende Registerleisten.** Eine Registerleiste eines Bereichs, die nicht passt, scrollt, statt abgeschnitten zu werden.
- **Registerkarten-Titel.** Der Browser-Tab zeigt `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Die Layoutliste in {{ui:Einstellungen}} ist ein Auswahlfeld, das das gewählte Layout zeigt.
- **Sprache.** Die gewählte Sprache erreicht jetzt auch die Wörter, die die Seite selbst ausgibt, etwa Neu, Öffnen und Speichern. Andere Sprachen als Englisch sind maschinelle Entwürfe, bis ein Muttersprachler sie geprüft hat.

## Ehrliche Grenzen

- Die Anzeige der Längen, die Gewichts- und Temperatureinheiten und die neuen Voreinstellungen wurden durch Tests und auf der Seite geprüft. Nicht jeder Bereich bei jeder Einheit wurde von Hand geprüft.
- Die Personenliste wurde noch nicht von Hand mit einer echten Klasse aus Lehrkräften und Lernenden erprobt.
- Andere Sprachen als Englisch sind maschinelle Entwürfe.
- Windows-Installationsprogramme sind nicht code-signiert (Weitere Informationen, dann Trotzdem ausführen). Das macOS-Disk-Image ist nicht notariell geprüft (Rechtsklick, dann Öffnen).

## Früher: 0.8 und 0.8.1

Das hat sich in TakeoffCraft 0.8 (veröffentlicht am 2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert. Eine Symbollegende lässt sich nun über den gesamten Satz auf einmal zählen, eine neue Mengenermittlung kann mit den Preisen Ihrer früheren Aufträge starten, und die Mengenermittlung lässt sich mit dem Bestand eines Lieferanten abgleichen. 0.8.1 ist ein Fehlerbehebungs-Release.

### Neu

**Alles im Satz zählen**

- **Die Legende einmal einrahmen.** {{ui:Alles zählen}} in der Werkzeugleiste liest eine Symbollegende: Ziehen Sie einen Rahmen um die Symbole und die daneben gedruckten Namen. Jedes Symbol wird mit seinem Bild und Namen aufgelistet, und der Name wird zum Namen der Position. Entfernen Sie die Häkchen, die Sie nicht wollen, und wählen Sie dann {{ui:Auf N Blättern zählen}}. Eine Leiste zeigt das gerade durchsuchte Blatt, {{ui:Abbrechen}} beendet den Lauf, und die Seite bleibt bedienbar.
- **Jedes Blatt in einem Lauf.** Jedes Symbol wird auf jedem offenen Blatt gezählt. Ein Blatt in einem anderen Maßstab wird in diesem Maßstab durchsucht, und Symbole werden in jedem rechten Winkel gefunden. Die eigenen Symbole der Legende werden auf ihrem Blatt nicht gezählt.
- **Prüfung, bevor etwas hinzugefügt wird.** Jede Summe hat einen Link je Blatt („E-103: 4“), der zu diesem Blatt führt. Klicken Sie auf einen Treffer, um ihn auszuschließen, und erneut, um ihn zurückzuholen. Die Trefferstufe (50% bis 100%) filtert nur das Gefundene; nichts wird erneut gesucht.
- **Ein Schritt im Rückgängig-Verlauf.** {{ui:N Markierungen hinzufügen}} erstellt je Symbol eine Zählposition mit einer Markierung auf jedem Treffer. Ein Name, der schon eine Ihrer Zählpositionen ist, wird wiederverwendet. {{key:Ctrl+Z}} nimmt alle Positionen und Markierungen zurück. Was Sie akzeptieren, fließt auch in {{ui:Gelernt}} ein.
- **Symbole in jedem Winkel.** Setzen Sie vor dem Zählen den Haken bei {{ui:Symbole in beliebigem Winkel}}, um auch Symbole zu finden, die um einen nicht rechten Winkel gedreht sind. Die Suche dreht dann jedes Symbol alle 15 Grad, und ein nicht rundes Symbol kann bis zu sechsmal so lange dauern.
- **Was es ist.** Reiner Symbolabgleich auf Ihren eigenen Blättern, ohne trainiertes Modell, und nichts verlässt Ihren Computer. Auf einem erfundenen Satz von 200 Blättern dauerte es insgesamt 9.4 Sekunden in Chrome auf einem schnellen Desktop; echte Plansätze werden langsamer sein. Siehe [Den gesamten Satz zählen](topic:count-everything).

**Preisspeicher aus Ihren eigenen Aufträgen**

- **TakeoffCraft merkt sich Ihre Sätze.** Wenn Sie eine Mengenermittlung speichern, wird jede bepreiste, verwendete Position nach Name und Typ gemerkt: Materialpreis, Lohnpreis, Verschnitt und Einheit. Die letzten 12 Aufträge werden je Name behalten. Der Speicher liegt auf diesem Computer neben der Preisbibliothek, nie in einer Mengenermittlungsdatei, und nichts wird irgendwohin gesendet.
- **Eine neue Mengenermittlung daraus starten.** {{ui:Preise}} in der Werkzeugleiste zeigt für jede Position die Sätze des letzten Auftrags, die typischen Sätze und die Spanne. {{ui:Letzten verwenden}} oder {{ui:Üblichen verwenden}} bepreist eine Position, und {{ui:N Positionen ohne Preis aus dem Speicher bepreisen}} füllt jede Position, die noch keinen Preis hat. Jede Verwendung ist ein Schritt im Rückgängig-Verlauf.
- **Ältere Arbeit.** {{ui:Aus einer früheren Mengenermittlung lernen…}} merkt sich die bepreisten Positionen einer gespeicherten Mengenermittlung (.json).
- **Ansehen, ändern, vergessen.** {{ui:Alles Gemerkte}} listet jeden Namen; die Papierkorb-Schaltfläche vergisst einen, und {{ui:Alle Preise löschen}} vergisst alle. Schalten Sie {{ui:Meine Preise beim Speichern einer Mengenermittlung merken}} aus, um es zu beenden. Ein Preis je Stück wird nie auf eine Position je Fuß übertragen. Siehe [Preisspeicher aus Ihren früheren Aufträgen](topic:price-memory).

**Lieferbestand und Lieferzeiten**

- **Abgleich mit der Liste eines Lieferanten.** {{ui:Lieferung}} in der Werkzeugleiste nimmt die Bestandsliste eines Lieferanten ({{ui:Lieferantendatei hinzufügen…}}), eine CSV oder eine Tabelle, und prüft, was die Mengenermittlung mit Verschnitt braucht. Bis zu fünf Dateien werden behalten. Nichts wird gesendet, und nichts fragt einen Lieferanten: Die Datei bringen Sie mit.
- **Was es sagt.** Knappe Positionen kommen zuerst: „Knapp um 120 EA“, „Lieferzeit 21 Tage“, „Im Rückstand“, „Einheit abweichend“, „Keine Bestandszahl“ oder „Auf Lager“. {{ui:Längste gewünschte Wartezeit (Tage)}} beginnt bei 14.
- **Bestellliste.** {{ui:Bestellliste (CSV)}} lädt die knappen Positionen herunter, mit dem fehlenden Betrag, dem Lieferanten und der Lieferzeit.
- **Preise in die Bibliothek.** Wenn die Datei Preise enthält, setzt {{ui:Preise in die Bibliothek}} den Materialpreis jedes Bibliothekseintrags mit demselben Namen und derselben Einheit. Neu bepreisen aus der Bibliothek, um sie in die Mengenermittlung zu übernehmen.
- **Im Probleme-Bereich.** Ein Engpass ist eine Warnung, eine lange Wartezeit ein Hinweis, beide unter „Lieferbestand“. Sie können eines mit einem Grund akzeptieren, und der Grund wird in der Mengenermittlung gespeichert. Siehe [Lieferbestand und Lieferzeiten prüfen](topic:supplier-stock).

**KI-Assistenten**

- **Werkzeuge für alle drei.** Mit erlaubten Assistenten in {{ui:Einstellungen}} kann ein Assistent eine Legende lesen (`legend_open`), die Zählung ausführen (`legend_count_start`, dann `legend_count_status` und `legend_count_result`) und sie hinzufügen (`legend_count_add`, das vorher eine Vorschau zeigen kann). Er kann die gemerkten Preise lesen (`prices_list`) und Positionen daraus bepreisen (`prices_apply`, das vorher eine Vorschau zeigen kann) sowie die Lieferantenprüfung lesen (`supply_check`). Das Hinzufügen einer Lieferantendatei bleibt Ihnen überlassen. Siehe [Mengenermittlung mit KI-Assistenten verwenden](topic:use-with-ai-assistants).

**In jeder App**

- **Sprachen.** Vierundfünfzig Sprachen insgesamt; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili und Usbekisch). Andere Sprachen als Englisch sind maschinelle Entwürfe, bis ein Muttersprachler sie geprüft hat.
- **Eingabegeräte.** {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Eingabegeräte}} legt fest, was ein Trackpad, die Seitentasten einer Maus, ein Stift, eine 3D-Maus, ein Gamecontroller oder ein MIDI-Controller tut, für jede App oder für eine einzelne. Siehe [Trackpad, 3D-Maus oder Controller verwenden](common:input-devices).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet {{ui:Umbrechen}} (der Start), {{ui:2 Zeilen}} und {{ui:1 Zeile}} an; Gruppen, die nicht passen, scrollen seitlich. Siehe [Bereiche anordnen](common:arrange-panels).
- **Probleme-Bereich.** Der gemeinsame Bereich für Warnungen und Hinweise enthält jetzt die oben beschriebene Lieferbestandsprüfung neben den anderen Prüfungen.
- **Add-ons.** Add-ons folgen Ihrer Kontoliste. Siehe [Add-ons und Ihre Kontoliste](common:addons-basics).
- **KI-Assistenten anschließen.** CadCraft Studio ist die Zentrale: Verbinden Sie Ihren Assistenten einmal für alle acht Apps. Studio hat keine eigene KI.

### Behoben in 0.8.1

- **DWG-Klassenabschnitt.** Der Klassenabschnitt einer DWG-Datei wurde als falscher Typ gelesen. Das ist in TakeoffCraft und in vier anderen Apps behoben.
- **Studio kann die Sprache während des Laufs wechseln.** Zuvor waren Studio und seine gepackten Ausgaben nur auf Englisch. Das wurde auf der Desktop-Version nicht auf allen Plattformen getestet; sagen Sie uns Bescheid, falls sich die Sprache nicht ändert.

### Noch nicht in dieser Version

- **Nicht code-signiert.** Windows warnt möglicherweise; auf einem Mac klicken Sie beim ersten Mal mit der rechten Maustaste und wählen Öffnen. Die Store-Ausgaben (Microsoft Store, Google Play, App Store) sind auf Eis gelegt, und das iPad- und iPhone-Build wurde für 0.8.1 nicht neu erstellt.
- **Studio-Updates.** Das Windows-Installationsprogramm und die Linux-Pakete prüfen einmal täglich und fragen zuerst. Das portable ZIP weist nur darauf hin, und macOS und die APK aktualisieren sich nicht selbst. Das macOS-.dmg von 0.8 folgt dem Release.
- **KI-Assistenten anschließen.** Ein Ein-Klick-Verbinden in Studio, der gehostete Connector für KI im Browser, ein eigener API-Schlüssel in Studio und ein veröffentlichtes MCP-Paket sind in dieser Version nicht zugesagt.
- **Alles zählen.** Es braucht Symbole, die so gezeichnet sind wie in der Legende, und ein Symbol mit einer Wand oder einer langen Linie darüber kann übersehen werden. Gespiegelte Symbole werden nicht gefunden, und ein Blatt ohne Maßstab, das in anderer Größe gezeichnet ist, wird in der Größe der Legende durchsucht. Prüfen Sie die Treffer auf dem ersten Blatt, bevor Sie dem Rest vertrauen.
- **Lieferbestand.** Die Bestandszahlen sind nur so aktuell wie die Datei, die Sie hinzufügen. Die Prüfung fragt nie einen Lieferanten.
- **Sprachen.** Die App-Leiste auf Tamil läuft über.

Alles Weitere steht unter [Noch nicht umgesetzt](topic:not-built-yet). Für das Release davor siehe [Neuerungen in 0.7](topic:whats-new-0-7).
