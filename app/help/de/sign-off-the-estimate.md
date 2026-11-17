---
title: Fehlende Einheitspreise und Freigabe der Kalkulation
summary: Sehen Sie, welche Zeilen der Kalkulation eine Menge, aber keinen Einheitspreis haben, geben Sie die Kalkulation unter Ihrem Namen frei, damit die Datei festhält, wer, wann und für welchen Gesamtbetrag, und klicken Sie auf eine Zahl, um die Markierungen auszuwählen, aus denen sie stammt.
keywords: Kalkulation, Freigabe, freigeben, freigegeben, genehmigen, Genehmigung, fehlender Einheitspreis, kein Einheitspreis, ohne Preis, Einheitspreis, Gesamtbetrag, Kalkulator, Nachweis, Prüfung, Markierungen auswählen, Zahl, nachverfolgen
from: 9acf71ef
---

## Was Sie tun werden

Prüfen Sie, dass jede Zeile der Kalkulation einen Preis hat, und geben Sie sie dann unter Ihrem Namen frei. Die Mengenermittlungsdatei hält fest, wer freigegeben hat, wann und für welchen Gesamtbetrag.

## Zeilen ohne Einheitspreis

In **Mengen › Nach Position** trägt eine Zeile, die eine Menge und keinen Material- oder Lohn-Einheitspreis hat, **Kein Einheitspreis**, und die Leiste über der Tabelle sagt, wie viele es sind. Eine solche Zeile trägt nichts zur Summe bei. Eine Position ohne eigenen Einheitspreis wird nicht markiert, wenn eine ihrer Komponenten bepreist ist: Ein Kalkulationsbaustein wird über seine Teile bepreist. Die exportierte Kalkulation schreibt **Kein Einheitspreis** in die Notizenspalte jeder solchen Zeile und zählt sie.

## Kalkulation freigeben

1. Klicken Sie oberhalb der Mengentabelle auf **Kalkulation freigeben**.
2. Der Dialog nennt den Gesamtbetrag, den Sie freigeben, und listet die Zeilen ohne Einheitspreis auf. Geben Sie Ihren Namen ein und, falls Sie möchten, Ihre Rolle.
3. Klicken Sie auf **Freigeben**. Die Leiste zeigt nun „Freigegeben von … am …“ mit dem Gesamtbetrag. Speichern Sie die Mengenermittlung, um das in der Datei festzuhalten.

Die Freigabe gehört zu den Zahlen, die Sie freigegeben haben. Jede spätere Änderung an einer Menge, einem Einheitspreis oder einer Zeile hebt sie auf, und TakeoffCraft weist Sie darauf hin. Rückgängig stellt die freigegebene Kalkulation wieder her, und mit ihr die Freigabe. Eine Zeile umzubenennen ist keine Änderung einer Zahl. **Freigabe entfernen** nimmt sie weg.

Eine Mengenermittlungsdatei, die außerhalb von TakeoffCraft nach der Freigabe bearbeitet wurde, öffnet sich ohne Freigabe, mit einem Hinweis darauf. Die exportierte Kalkulation (CSV und XLSX) nennt die Freigabe unter den Summen.

Nur eine Person kann freigeben. Ein KI-Assistent kann lesen, ob die Kalkulation freigegeben ist und welche Einheitspreise fehlen; er kann nicht freigeben.

## Auf eine Zahl klicken, um ihre Herkunft zu sehen

Klicken Sie auf eine Menge oder einen Betrag einer Zeile, um die Markierungen auszuwählen, aus denen sie gemessen wurde. Liegen sie auf einem anderen Blatt, öffnet sich dieses Blatt. Klicken Sie auf eine Zahl der Zeile **Gesamtbetrag des Auftrags**, um jede Markierung auf dem Blatt auszuwählen. Eine eingetippte Menge hat keine Markierungen.

## Gut zu wissen

- Die Freigabe hält einen Namen so fest, wie er eingegeben wurde. Sie ist ein Eintrag in der Datei, keine elektronische Signatur.
- Sind in der Ermittlung an Subunternehmer vergebene Angebotspakete oder Alternativen enthalten, ist der freigegebene Gesamtbetrag das Basisangebot, das als **Gesamtbetrag des Auftrags** angezeigt wird.
