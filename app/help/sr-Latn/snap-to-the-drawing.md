---
title: Hvatanje za linije crteža
summary: Tačke skaču na sopstvene linije PDF-a dok merite ili kalibrišete: krajeve, središnje tačke, preseke ili bilo koju tačku na liniji, uz oznaku koja pokazuje koja je.
keywords: hvatanje, osnap, hvatanje objekta, krajnja tačka, središnja tačka, presek, najbliža, vektor, linije, precizno, tačno, f3, magnet, ugao
from: 41d29e9b
---

Većina setova planova su vektorski PDF-ovi: zidovi i ivice su prave linije, a ne pikseli. Dok merite, TakeoffCraft priljubljuje vaše klikove na te linije, pa tok počinje tačno u uglu zida, a kalibracija očitava kotu koju je projektant nacrtao, a ne piksel na koji ste kliknuli.

Hvatanje je uključeno kada počnete. Uključite ga i isključite pomoću {{ui:Hvatanje}} u statusnoj traci ili tasterom {{key:F3}}; podešavanje se čuva u ovom pregledaču (nalazi se i pod [Podešavanja](topic:settings)).

## Čemu se prilagođava

Kada se pokazivač nađe unutar otprilike 10 piksela ekrana od linije, oznaka pokazuje gde će klik sleteti, uz svoj naziv:

| Oznaka | Naziv | Gde |
|---|---|---|
| Kvadrat | **Kraj** | Kraj linije ili ugao u kome se linije sastaju. Oba kraja krive se računaju; tačke duž nje ne. |
| Trougao | **Središnja tačka** | Sredina prave linije. |
| Krst | **Presek** | Mesto gde se dve linije seku, ili gde jedna završava na drugoj. |
| Peščani sat | **Na liniji** | Najbliža tačka na liniji, kada nijedan kraj, središnja tačka ni presek nisu blizu. |

Najbliži kraj, središnja tačka ili presek ima prednost. Samo kada nijedan nije blizu, tačka pada na samu liniju. Uvećajte prikaz da biste birali između tačaka koje su blizu jedna drugoj: 10 piksela su pikseli ekrana, pa pri većem uvećanju pokrivaju manji deo lista.

## Gde radi

Hvatanje radi u {{ui:Linijski}}, {{ui:Površina}}, {{ui:Krug}}, {{ui:Izrez}}, {{ui:Kalibriši}} i {{ui:Proveri}}, i kada prevlačite ugao izabrane oznake. Koristi se i za tačke luka. {{ui:Prebroj}}, {{ui:Automatsko brojanje}} i nalepljivanje se ne hvataju.

Hvatana tačka ima prednost nad hvatanjem pod 45° pomoću {{key:Shift}}: da biste crtali pod 45° u odnosu na linije, prvo isključite hvatanje tasterom {{key:F3}}.

:::tip
Kalibrišite uz uključeno hvatanje. Kliknite blizu dva kraja kote ili zida čiju dužinu znate: obe tačke padaju tačno na crtež, a razmera ispada precizna (statusna traka tada imenuje unapred podešenu razmeru kojoj odgovara).
:::

## Listovi na kojima hvatanje ne radi

- **Skenirani listovi** su slike bez linija za hvatanje. Statusna traka kaže: „Ovaj list nema linija za hvatanje (skenirana strana je slika).“ i tačke idu tamo gde kliknete.
- **Veoma veliki crteži**: hvatanje čita do 400.000 segmenata linija po listu. Na listu sa više od toga, aplikacija to kaže i hvata se samo za prve.
- **Tekst** se ne hvata, osim ako PDF slova crta kao linije (neki ploteri to rade).

Linije lista čitaju se prvi put kada otvorite list, u pozadini; veliki list može da potraje sekund pre nego što se oznake pojave.
