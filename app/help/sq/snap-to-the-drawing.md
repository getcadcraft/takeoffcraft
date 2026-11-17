---
title: Kapja te vijat e vizatimit
summary: Pikat hidhen automatikisht mbi vijat vetjake të PDF-së gjatë matjes ose kalibrimit: skajet, mesi, kryqëzimet ose çdo pikë mbi një vijë, me një shenjë që tregon cila.
keywords: kapje, osnap, kapje objekti, skaj, mes, kryqëzim, më i afërti, vektor, vija, saktë, ekzakt, f3, magnet, cep
from: 41d29e9b
---

Shumica e grupeve të planimetrive janë PDF vektoriale: muret dhe skajet e tyre janë vija reale, jo piksele. Gjatë matjes, TakeoffCraft i kap klikimet tuaja mbi ato vija, kështu që një segment fillon saktësisht te cepi i murit dhe një kalibrim lexon përmasën që hartuesi vizatoi, jo pikselin që keni goditur.

Kapja është e ndezur kur filloni. Ndizeni dhe fikeni me {{ui:Kapje}} në shiritin e gjendjes ose me {{key:F3}}; cilësimi ruhet në këtë shfletues (gjendet edhe te [Cilësimet](topic:settings)).

## Ku kap

Kur treguesi vjen brenda rreth 10 pikselëve të ekranit nga një vijë, një shenjë tregon ku do të bjerë klikimi, me emrin e tij:

| Shenja | Emri | Ku |
|---|---|---|
| Katror | **Skaj** | Skaji i një vije, ose një cep ku takohen vijat. Dy skajet e një kurbe numërohen; pikat përgjatë saj jo. |
| Trekëndësh | **Mes** | Mesi i një vije të drejtë. |
| Kryq | **Kryqëzim** | Ku kryqëzohen dy vija, ose ku një vijë mbaron mbi një tjetër. |
| Klepsidër | **Mbi vijë** | Pika më e afërt në një vijë, kur asnjë skaj, mes ose kryqëzim nuk është afër. |

Skaji, mesi ose kryqëzimi më i afërt fiton. Vetëm kur asnjëri prej tyre nuk është afër, pika vendoset mbi vetë vijën. Zmadhoni për të zgjedhur mes pikave që janë afër njëra-tjetrës: 10 pikselët janë piksela ekrani, kështu që në zmadhim më të lartë mbulojnë më pak të fletës.

## Ku funksionon

Kapja funksionon në {{ui:Lineare}}, {{ui:Sipërfaqe}}, {{ui:Rreth}}, {{ui:Prerje}}, {{ui:Kalibro}} dhe {{ui:Kontrollo}}, dhe kur tërhiqni cepin e një shenje të zgjedhur. Gjithashtu vendos pikat e harkut. {{ui:Numëro}}, {{ui:Numërim automatik}} dhe ngjitjen nuk i kap.

Një pikë e kapur fiton mbi kapjen 45° të {{key:Shift}}: për të vizatuar në 45° larg vijave, fikeni më parë kapjen me {{key:F3}}.

:::tip
Kalibroni me kapjen të ndezur. Klikoni afër dy skajeve të një vije përmase ose të një muri që e njihni: të dy pikat bien saktësisht mbi vizatim, dhe shkalla del e saktë (shiriti i gjendjes emëron atëherë të gatshmen me të cilën përputhet).
:::

## Fletët ku nuk mund të kapet

- **Fletët e skanuara** janë imazhe pa vija për t'u kapur. Shiriti i gjendjes thotë "Kjo fletë nuk ka vija për t'u kapur (një faqe e skanuar është një imazh)." dhe pikat shkojnë aty ku klikoni.
- **Vizatimet shumë të mëdha**: kapja lexon deri në 400,000 segmente vije për fletë. Në një fletë me më shumë, e thotë këtë dhe kap vetëm të parat.
- **Teksti** nuk kapet, përveç rastit kur PDF i vizaton shkronjat si vija (disa printerë e bëjnë këtë).

Vijat e fletës lexohen herën e parë që e hapni, në sfond; një fletë e madhe mund të duhet një sekondë para se të shfaqen shenjat.
