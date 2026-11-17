---
title: Začatie výkazu výmer a otvorenie súboru listov
summary: Otvorte jedno alebo viac PDF ako súbor listov, orientujte sa medzi listami a prechádzajte medzi nimi.
keywords: otvoriť, súbor listov, viac pdf, viac súborov, listy, výkresy, označenia strán, zoznam listov, navigácia, presunutie, odovzdanie, otvoriť v inej aplikácii, označovanie
from: ed434468
---

Súbor listov je často viacero PDF: architektonické, konštrukčné, strojné. TakeoffCraft ich otvorí vedľa seba ako jeden zoznam listov a jeden výkaz môže pokryť všetky.

## Otvorenie PDF

1. Vyberte {{ui:Open plans}} v skupine {{ui:File}} alebo stlačte {{key:Mod+O}}. (Iné štýly ponuky to volajú {{ui:Open PDFs…}}.)
2. V dialógu výberu súborov vyberte každé PDF súboru listov. Podržte {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} na výber viacerých, alebo {{key:Shift}} na výber rozsahu.
3. Kliknite na Otvoriť.
   Kým sa každý súbor číta, zobrazuje sa správa „Otváranie (názov)…“. Potom sa každá strana objaví v {{ui:Sheets}} a otvorí sa prvá strana prvého nového PDF.

PDF môžete tiež presunúť z {{pick:mac=Finder|windows=Prieskumník|linux=vášho správcu súborov}} a pustiť kamkoľvek na TakeoffCraft. Počas presúvania sa zobrazí rámik „Presuňte PDF, výkresy DWG alebo DXF, alebo .takeoff.json“.

Ďalšie PDF pridáte neskôr rovnakým spôsobom. PDF, ktoré sú už otvorené, sa preskočia.

Úvodná obrazovka tiež uvádza PDF a výkazy, ktoré ste nedávno otvorili, v prehliadačoch, ktoré dovoľujú stránke znova otvoriť súbor (Chrome a Edge). Kliknutím na ne ich otvoríte; prehliadač môže najprv požiadať o povolenie. Pozri [Vaše súbory](common:your-files).

:::note
Nič sa nenahráva. Prehliadač číta PDF vo vašom počítači a sú preč z TakeoffCraft, keď zatvoríte kartu alebo vyberiete {{ui:New}}.
:::

## Výkresy vedľa PDF

{{ui:Open plans}} prijíma aj výkresy DWG a DXF, samé alebo spolu s PDF: priestor modelu a rozloženia každého výkresu sa stanú listami v tom istom zozname. Pozri [Otvorenie výkresu DWG alebo DXF](topic:open-a-drawing), potom [Počítanie z výkresu](topic:count-from-a-drawing).

## PDF odovzdané z inej aplikácie

Iná aplikácia z radu vám môže odovzdať PDF, ktoré má otvorené: otvorí TakeoffCraft na novej karte a PDF sa tam otvorí, ako keby ste ho pustili. Stavový riadok hovorí „Otvorené (názov), odovzdané z (aplikácia). Pôvodný súbor je nezmenený.“ Nič sa nenahráva; súbor prechádza cez vlastné úložisko tohto prehliadača a po otvorení je z neho preč.

Ak stavový riadok hovorí, že PDF „nedorazilo“, karta čakala príliš dlho alebo už bolo PDF otvorené na inej karte: otvorte ho pomocou {{ui:Open plans}}.

Opačne, keď MarkupCraft beží tam, kde ste, a môže prijať súbor, lišta listu pod výkresom má tlačidlo {{ui:MarkupCraft}}: otvorí PDF listu na obrazovke v MarkupCraft na novej karte, na kontrolu a označenie.

## Nájdenie listu

- Prejdite zoznam {{ui:Sheets}} vľavo a kliknite na list.
- Napíšte do **Hľadať listy** hore v zozname a filtrujte podľa čísla listu, názvu súboru alebo označenia strany. Počet vedľa {{ui:Sheets}} ukazuje „3 z 40“, keď je filter zapnutý.
- Stlačte {{key:PageDown}} pre ďalší list a {{key:PageUp}} pre predchádzajúci. Riadia sa zoznamom tak, ako je filtrovaný.

:::mac
Na klávesnici Macu bez klávesov Page Up a Page Down stlačte fn so šípkou hore alebo dole.
:::

## Pomenovanie listov

- Strana, ktorej PDF dáva označenie, napríklad `A-101`, sa pomenuje týmto označením.
- Strana bez označenia (alebo označenie, ktoré je len jej číslom) sa volá „(názov súboru), strana (n)“.
- Keď je otvorených viac PDF, listy s označením nesú aj názov súboru: „A-101 — Architektúra“.

Názvy listov sa zatiaľ nedajú zadať ručne.

## Orientácia na liste

- Otáčajte kolieskom myši na priblíženie pri ukazovateli.
- Ťahajte ľavým alebo stredným tlačidlom na posun. Pri {{ui:Auto count}} alebo keď začnete na rohu značky, podržte {{key:Space}} počas ťahania, alebo ťahajte stredným tlačidlom.
- Stlačte {{key:F}} alebo vyberte {{ui:Fit page}} na zobrazenie celého listu; {{key:W}} alebo {{ui:Fit width}} prispôsobí jeho šírku.
- Stlačte {{key:Plus}} alebo {{key:=}} na priblíženie a {{key:Minus}} na oddialenie, okolo stredu zobrazenia.

Každý list si pamätá svoje priblíženie a polohu, kým zostáva otvorený.

## Ďalej

Predtým, než môžete merať list, potrebuje mierku: [Nastavenie mierky](topic:set-the-scale).
