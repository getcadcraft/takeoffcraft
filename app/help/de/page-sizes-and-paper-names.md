---
title: Seitenformate und Papiernamen
summary: Die Größe jedes Blatts in Millimetern und Zoll sowie seinen Papiernamen (A-, B- und C-Reihe, ANSI, ARCH) ansehen und einen gemischten Satz nach Größe gruppieren, um Ausreißer zu finden.
keywords: Seitengröße, Papierformat, Papiername, A0, A1, A2, A3, A4, B-Reihe, C-Reihe, ANSI, ARCH, Architektur, mm, Zoll, benutzerdefinierte Größe, Nach Größe, Ausreißer-Größe, gemischter Satz, Maßstab, Plansatz, MediaBox, Drehung
from: 9c061c07
---

Ein Maßstab ist nur auf dem richtigen Papier aussagekräftig. {{ui:TakeoffCraft}} liest die Größe jedes PDF-Blatts und benennt das Papier, damit Sie ein Blatt, das in einer anderen Größe gedruckt wurde, erkennen, bevor Sie einer Messung darauf vertrauen.

## Was Sie tun

Sehen Sie sich die Größe des geöffneten Blatts an und gruppieren Sie dann den gesamten Satz nach Größe.

## Schritte

1. Öffnen Sie die Pläne ({{ui:PDFs öffnen}}).
2. Die Blattleiste über der Zeichnung zeigt den Papiernamen und die Größe des geöffneten Blatts, zum Beispiel „A1 · 594 × 841 mm“.
3. Jede Zeile der Liste {{ui:Blätter}} hat unter dem Blattnamen eine Zeile mit der Größe.
4. Wählen Sie {{ui:Nach Größe}} im Kopf von {{ui:Blätter}}. Die Liste fasst die Blätter unter je einer Überschrift pro Größe zusammen, die größte Gruppe zuerst, und markiert eine Größe mit nur wenigen Blättern als Ausreißer.
5. Wählen Sie {{ui:Nach Größe}} erneut, um zur ursprünglichen Reihenfolge des Satzes zurückzukehren.

Ein DWG- oder DXF-Blatt hat kein Papier, daher wird dafür keine Größe angezeigt.

## Wie der Name gewählt wird

- Die Größe stammt aus dem Seitenrahmen (MediaBox) im PDF, unter Berücksichtigung der Drehung.
- Die Namen sind die A- und B-Reihe (ISO 216), die C-Reihe (ISO 269), ANSI A bis E und ARCH A bis E.
- Eine Seite, die höchstens 2 mm von einer benannten Größe abweicht, erhält diesen Namen. Jede andere Seite wird als benutzerdefiniert angegeben, mit der nächstgelegenen benannten Größe und dem Abstand dazu.

## In der Kalkulation

Die Kalkulationsarbeitsmappe hat ein Tabellenblatt {{ui:Seitenformate}} mit der Anzahl jeder Größe.

:::note
Die Zoll-Werte für ANSI und ARCH wurden aus den veröffentlichten Tabellen übernommen und nicht mit den gedruckten Normen verglichen.
:::
