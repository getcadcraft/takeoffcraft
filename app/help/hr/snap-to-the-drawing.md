---
title: Hvatanje na linije crteža
summary: Točke pri mjerenju ili kalibraciji skaču na vlastite linije PDF-a: krajeve, polovišta, sjecišta ili bilo koju točku na liniji, uz oznaku koja pokazuje o čemu se radi.
keywords: hvatanje, osnap, hvatanje objekata, krajnja točka, polovište, sjecište, najbliže, vektor, linije crteža, linije, precizno, točno, f3, magnet, kut
from: 41d29e9b
---

Većina skupova planova su vektorski PDF-ovi: njihovi zidovi i rubovi su stvarne linije, a ne pikseli. Dok mjerite, TakeoffCraft hvata vaše klikove na te linije, pa trasa počinje točno u kutu zida, a kalibracija očitava kotu koju je projektant nacrtao, a ne piksel na koji ste kliknuli.

Hvatanje je uključeno kad počnete. Uključite ga i isključite pomoću {{ui:Hvatanje}} u statusnoj traci ili pomoću {{key:F3}}; postavka se čuva u ovom pregledniku (nalazi se i pod [Postavke](topic:settings)).

## Na što hvata

Kad se pokazivač nađe unutar otprilike 10 piksela na zaslonu od linije, prikazuje se oznaka koja pokazuje gdje će klik pasti, s njezinim nazivom:

| Oznaka | Naziv | Gdje |
|---|---|---|
| Kvadrat | **Kraj** | Kraj linije ili kut na kojem se linije spajaju. Oba kraja krivulje se broje; točke duž nje ne. |
| Trokut | **Polovište** | Sredina ravne linije. |
| Križ | **Sjecište** | Mjesto gdje se dvije linije sijeku ili gdje jedna završava na drugoj. |
| Pješčani sat | **Na liniji** | Najbliža točka na liniji, kad nijedan kraj, polovište ni sjecište nisu blizu. |

Najbliži kraj, polovište ili sjecište ima prednost. Tek kad nijedan nije blizu, točka se postavlja na samu liniju. Povećajte prikaz da biste odabrali između točaka koje su blizu jedna drugoj: 10 piksela su pikseli na zaslonu, pa pri većem povećanju pokrivaju manji dio lista.

## Gdje radi

Hvatanje radi u {{ui:Linearno}}, {{ui:Površina}}, {{ui:Kružnica}}, {{ui:Otvor}}, {{ui:Kalibriraj}} i {{ui:Provjeri}}, te kad povlačite kut odabrane oznake. Također postavlja točke lukova. {{ui:Broji}}, {{ui:Autobrojanje}} i lijepljenje se ne hvataju.

Točka uhvaćena na liniji ima prednost pred hvatanjem na 45° pomoću {{key:Shift}}: da biste crtali pod 45° izvan linija, prvo isključite hvatanje pomoću {{key:F3}}.

:::tip
Kalibrirajte s uključenim hvatanjem. Kliknite blizu dvaju krajeva kote ili zida čiju duljinu znate: obje točke upadaju točno na crtež, a mjerilo ispada točno (statusna traka tada navodi predložak na koji odgovara).
:::

## Listovi na kojima hvatanje ne radi

- **Skenirani listovi** su slike bez linija za hvatanje. Statusna traka kaže: „Ovaj list nema linija za hvatanje (skenirana stranica je slika).“ i točke idu tamo gdje kliknete.
- **Vrlo veliki crteži**: hvatanje čita do 400,000 segmenata linija po listu. Na listu s više od toga to se kaže i hvata se samo na prve.
- **Tekst** se ne hvata, osim ako PDF crta slova kao linije (neki plotteri to rade).

Linije lista čitaju se prvi put kad ga otvorite, u pozadini; veliki list može potrajati sekundu prije nego se oznake pojave.
