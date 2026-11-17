---
title: Hvatanje na linije crteža
summary: Tačke skaču na vlastite linije PDF-a dok mjerite ili kalibrirate: krajevi, središta, presjeci ili bilo koje mjesto na liniji, sa oznakom koja pokazuje koje je.
keywords: hvatanje, hvatanje objekta, krajnja tačka, središnja tačka, presjek, najbliža, vektor, linije, precizno, tačno, F3, magnet, ugao
from: 41d29e9b
---

Većina setova planova su vektorski PDF-ovi: zidovi i ivice su prave linije, a ne pikseli. Dok mjerite, TakeoffCraft hvata vaše klikove na te linije, tako da dionica počinje tačno na uglu zida, a kalibracija čita dimenziju koju je projektant nacrtao, a ne piksel na koji ste kliknuli.

{{ui:Hvatanje}} je uključeno kada počnete. Uključite ili isključite ga sa {{ui:Hvatanje}} u statusnoj traci ili {{key:F3}}; postavka se čuva u ovom pregledaču (nalazi se i pod [Postavke](topic:settings)).

## Na šta se hvata

Kada pokazivač dođe unutar otprilike 10 piksela ekrana od linije, oznaka pokazuje gdje će klik pasti, sa svojim nazivom:

| Oznaka | Naziv | Gdje |
|---|---|---|
| Kvadrat | **Kraj** | Kraj linije, ili ugao gdje se linije spajaju. Dva kraja krive se računaju; tačke duž nje ne. |
| Trougao | **Središte** | Sredina prave linije. |
| Krst | **Presjek** | Mjesto gdje se dvije linije ukrštaju, ili gdje jedna završava na drugoj. |
| Pješčani sat | **Na liniji** | Najbliža tačka na liniji, kada nijedan kraj, središte ili presjek nije blizu. |

Najbliži kraj, središte ili presjek ima prednost. Tačka ide na samu liniju tek kada nijedan od njih nije blizu. Uvećajte prikaz da birate između tačaka koje su blizu jedna drugoj: 10 piksela su pikseli ekrana, pa pri većem uvećanju pokrivaju manji dio lista.

## Gdje radi

Hvatanje radi u {{ui:Linijski}}, {{ui:Površina}}, {{ui:Krug}}, {{ui:Izrez}}, {{ui:Kalibriraj}} i {{ui:Provjeri}}, i kada prevučete ugao odabrane oznake. Također postavlja tačke lukova. {{ui:Brojanje}}, {{ui:Auto brojanje}} i lijepljenje se ne hvataju.

Uhvaćena tačka ima prednost nad poravnanjem na 45° sa {{key:Shift}}: da biste crtali pod 45° u odnosu na linije, prvo isključite hvatanje sa {{key:F3}}.

:::tip
Kalibrirajte sa uključenim hvatanjem. Kliknite blizu dva kraja kote ili zida čiju dužinu znate: obje tačke se tačno poklapaju sa crtežom, a razmjera je tačna (statusna traka tada navodi unaprijed zadanu razmjeru s kojom se poklapa).
:::

## Listovi na kojima ne može da hvata

- **Skenirani listovi** su slike bez linija za hvatanje. Statusna traka kaže „Ovaj list nema linija za hvatanje (skenirana stranica je slika).“ i tačke idu tamo gdje kliknete.
- **Vrlo veliki crteži**: hvatanje čita do 400.000 segmenata linija po listu. Na listu sa više njih, aplikacija to kaže i hvata samo na prve.
- **Tekst** se ne hvata, osim ako PDF slova crta kao linije (neki ploteri to rade).

Linije lista se čitaju prvi put kada ga otvorite, u pozadini; veliki list može trebati sekundu prije nego se oznake pojave.
