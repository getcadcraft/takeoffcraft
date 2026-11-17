---
title: Preisspeicher aus Ihren früheren Aufträgen
summary: TakeoffCraft merkt sich die Preise, die Sie in früheren Mengenermittlungen verwendet haben, nur auf diesem Computer, damit eine neue Mengenermittlung mit dem beginnen kann, was Sie zuletzt bezahlt haben. Ansehen, verwenden, vergessen.
keywords: Preisspeicher, Preise, Preise merken, letzter Auftrag, frühere Aufträge, üblicher Preis, Median, Preise, ohne Preis, neu bepreisen, aus einer früheren Mengenermittlung lernen, vergessen, Bibliothek
from: 7279f1a1
---

{{ui:Preise}} in der Symbolleiste (das Dollarzeichen) öffnet, was TakeoffCraft über die Preise weiß, die Sie verwendet haben. Es ist eine einfache Liste: für jeden Positionsnamen die Preise Ihrer letzten Aufträge. Sie wird in diesem Browser gehalten (in Studio in deren eigener Webansicht) neben der Preisbibliothek, nie in einer Mengenermittlungsdatei, und nichts wird irgendwohin gesendet. Es ist kein trainiertes Modell.

## Was gemerkt wird

Wenn Sie eine Mengenermittlung speichern, wird jede Position, die einen Preis hat und verwendet wird (sie hat eine Markierung oder eine eingegebene Menge über null), unter ihrem Namen und Typ gemerkt: Materialpreis, Lohnpreis, Verschnitt und Einheit. Ein Auftrag ist durch die Plandateien bestimmt, aus denen er erfasst wird; wenn Sie dieselbe Mengenermittlung erneut speichern, ersetzen sich ihre eigenen Preise, statt einen weiteren Auftrag hinzuzufügen. Die letzten 12 Aufträge werden je Name behalten.

Um mit Ihren älteren Arbeiten zu beginnen, wählen Sie {{ui:Aus einer früheren Mengenermittlung lernen…}} und eine gespeicherte Mengenermittlung (.json). Ihre bepreisten, verwendeten Positionen werden auf dieselbe Weise gemerkt.

Namen stimmen überein, wenn ihre Wörter übereinstimmen, unabhängig von Groß- und Kleinschreibung oder Satzzeichen („2x4 Stud, 8 ft“ und „2x4 stud 8 FT“ sind gleich). Dieselben Wörter für eine andere Art Position (eine lineare Position und eine Zählposition) sind nicht derselbe Preis.

## Auf einer neuen Mengenermittlung verwenden

1. Legen Sie die Positionen der neuen Mengenermittlung an.
2. Wählen Sie {{ui:Preise}}. Unter {{ui:Diese Mengenermittlung}} sehen Sie jede Position mit einem gemerkten Preis, was sie jetzt hat, die Preise des letzten Auftrags, die üblichen Preise (die Mitte der gemerkten Aufträge) und die Spanne.
3. Wählen Sie {{ui:Letzten verwenden}} oder {{ui:Üblichen verwenden}} bei einer Position oder {{ui:N Positionen ohne Preis aus dem Speicher bepreisen}}, um jede Position ohne Preis mit dem Preis des letzten Auftrags zu füllen.

Jede Verwendung ist ein Schritt: {{key:Ctrl+Z}} nimmt sie zurück. Eine Position, die nur einen ähnlichen Namen hat (ein Name steckt im anderen), wird genannt, und die Schaltflächen verwenden die Preise des ähnlichen Namens. Ein Preis, der je Stück gemerkt wurde, wird nie einer Position je Fuß zugewiesen: Der Dialog sagt, dass die Einheiten verschieden sind, und lässt ihn unberührt.

## Ansehen, ändern, vergessen

{{ui:Alles Gemerkte}} listet jeden Namen mit seinen Preisen und der Anzahl der Aufträge. Die Papierkorb-Schaltfläche vergisst einen Namen; {{ui:Alle Preise löschen}} vergisst alle. Schalten Sie {{ui:Meine Preise beim Speichern einer Mengenermittlung merken}} aus, um das Merken zu beenden; was schon gespeichert ist, bleibt, bis Sie es vergessen. Ihre Mengenermittlungen und die Preisbibliothek werden nie berührt.

## Mit Ihrem Assistenten

Wenn Sie Assistenten in den Einstellungen erlauben, können sie lesen, was für die Positionen der Mengenermittlung gemerkt ist (prices_list), und Positionen daraus bepreisen (prices_apply, die sich vorher als Vorschau zeigen können). Es ist dieselbe Liste wie im Dialog.
