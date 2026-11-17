---
title: Eine DWG- oder DXF-Zeichnung öffnen
summary: Eine Zeichnungsdatei als Blätter öffnen (Modellbereich und jedes Layout), mit dem Maßstab beginnen, den die Zeichnung angibt, Layer ein- und ausblenden und externe Referenzen einbinden.
keywords: dwg, dxf, cad, Zeichnung, Zeichnung öffnen, Layouts, Modellbereich, Papierbereich, Blätter, Einheiten, insunits, Ansichtsfenster-Maßstab, xref, verknüpfte Zeichnung, Layer, eingefroren, ohne PDF, Plotten, ohne Plotten
from: d8c3f504
---

TakeoffCraft öffnet eine DWG- oder DXF-Zeichnung wie eine PDF: Sie müssen sie nicht vorher als PDF plotten. Das Zählen direkt aus der Zeichnung ist exakt, weil die Zeichnung weiß, was jedes Objekt ist. Siehe [Aus einer Zeichnung zählen](topic:count-from-a-drawing).

## Die Zeichnung öffnen

1. Wählen Sie {{ui:PDFs öffnen}} in der Gruppe {{ui:Datei}} oder drücken Sie {{key:Mod+O}}.
2. Wählen Sie die DWG- oder DXF-Datei. Sie können mehrere wählen, auch zusammen mit PDFs.
3. Öffnen wählen.

Sie können Zeichnungsdateien auch wie PDFs auf TakeoffCraft ziehen und dort ablegen. Nichts wird hochgeladen: Der Browser liest die Datei auf Ihrem Computer.

TakeoffCraft liest DWG von AutoCAD 2000 bis 2018 und ASCII-DXF von R12 bis 2018. Eine binäre DXF lehnt es ab (speichern Sie sie als ASCII oder als DWG), ebenso eine Datei, die keines von beiden ist, und es nennt den Grund. Eine beschädigte Datei öffnet sich mit dem, was gelesen werden konnte; eine Meldung sagt das, und ihre Zählungen sind möglicherweise unvollständig.

## Blätter

- **Modell** ist der Modellbereich der Zeichnung.
- **Jedes Layout** (Registerkarte Papierbereich) ist ein Blatt, benannt nach seiner Registerkarte, in der Reihenfolge der Registerkarten. Ein Layout zeigt das Modell über seine Ansichtsfenster, so wie es geplottet wird.

Zoom, Pan, Fang auf die eigenen Linien der Zeichnung, Markierungen, Notizen, {{ui:Kalibrieren}} und das Übrige funktionieren wie bei einer PDF. Die Blätter einer Zeichnung werden in der Ermittlung wie bei einer PDF über den Dateinamen und einen Fingerabdruck ihres Inhalts gespeichert: Öffnen Sie dieselbe Datei erneut, und die Markierungen liegen auf ihren Blättern.

## Der Maßstab

Ein Blatt beginnt mit dem Maßstab, den die Zeichnung angibt:

- **Ein Layout** übernimmt den Maßstab seines größten Ansichtsfensters. Ein Maßstab wie 1/2" = 1'-0" wird als die Voreinstellung benannt, die er ist; jeder andere wird als „Aus dem Ansichtsfenster der Zeichnung: 1" = 2.5'“ angezeigt. Haben die Ansichtsfenster eines Layouts andere Maßstäbe, bestimmt das größte den Maßstab des Blatts: Prüfen Sie die anderen mit {{ui:Prüfen}}.
- **Modell** übernimmt die Einheiten der Zeichnung (Zoll, Millimeter, Fuß …) als Maßstab, „Zeichnungseinheiten (Zoll)“.
- **Eine Zeichnung ohne Einheiten** (die Zeichnung sagt nie, ob eine Einheit ein Zoll oder ein Millimeter ist) hat keinen Maßstab: Das Blatt zeigt „Kein Maßstab“, und Messen darauf wird verweigert, wie bei einer PDF ohne Maßstab. Zählen braucht keinen Maßstab. Geben Sie ihr einen mit {{ui:Kalibrieren}}.

{{ui:Kalibrieren}}, {{ui:Prüfen}} und die Liste {{ui:Voreinstellung}} ändern einen Maßstab jederzeit und haben Vorrang vor dem der Zeichnung. Die Voreinstellungsliste ist bei Modell ausgeschaltet, da Modell kein Papierformat hat.

## Layer

{{ui:Layer}} in der Blattleiste listet die Layer der Zeichnung mit der Anzahl ihrer Objekte auf diesem Blatt. Layer, die die Datei ausgeschaltet oder eingefroren hat, beginnen ausgeblendet. Entfernen Sie den Haken bei einem Layer, um ihn auszublenden, oder setzen Sie ihn bei einem ausgeblendeten, um ihn zu zeigen: Das Blatt wird neu gezeichnet, und was ausgeblendet ist, wird aus den Zählungen und aus den Objekten herausgelassen, die {{ui:Zeichnung messen}} angeboten werden, außer Sie bitten darum, ausgeblendete Layer ebenfalls zu zählen. {{ui:Alle anzeigen}} zeigt jeden Layer; {{ui:Zurück zu den Layern der Datei}} macht Ihre Änderungen rückgängig. Die Layerauswahl gilt nur für diese Sitzung, nicht für die Mengenermittlungsdatei.

## Externe Referenzen (Xrefs)

Eine Zeichnung, die andere Zeichnungen verknüpft, zeigt sie an den Stellen, an denen sie eingefügt sind. TakeoffCraft findet eine verknüpfte Zeichnung unter den **geöffneten Dateien** anhand ihres Dateinamens: Öffnen Sie die Hauptzeichnung und die verknüpfte Zeichnung zusammen (oder nacheinander). Bis dahin sagt die Statusleiste, wie viele verknüpfte Zeichnungen nicht gefunden wurden, dass ihre Darstellung fehlt, und die Zählungen weisen darauf hin.

## Grenzen

- Objekte, die TakeoffCraft nicht lesen oder platzieren kann (Proxy-Objekte, unbekannte Klassen), werden im Zählfenster nach Typ aufgelistet; sie werden nie stillschweigend weggelassen.
- Sehr große Zeichnungen werden teilweise gezeichnet, und Zählungen brechen bei einer Obergrenze ab, was angezeigt wird. Öffnen Sie in einem solchen Fall stattdessen eine PDF-Plotdatei der Zeichnung.
- Eine Zeichnung wird schwarz und in ihren eigenen Farben gezeichnet, für weißes Papier abgedunkelt. Plotstiltabellen und Stiftzuweisungen werden nicht angewendet.
