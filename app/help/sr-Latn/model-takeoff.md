---
title: Uzmi količine iz modela zgrade
summary: Otvori arhitektonski IFC model, pogledaj ga u 3D, izaberi zidove, podove, vrata i ostalo po tipu, materijalu, sloju ili veličini, i prenesi njihove brojeve, dužine, površine i zapremine u predmer. Novija kopija modela ažurira iste količine.
keywords: model, predmer iz modela, 3D prikaz, klik na deo, pronađi red, materijal, sloj, slojevi zida, gips-karton, izolacija, veličine vrata, veličine prozora, specifikacija otvora, csv, 3D, BIM, IFC, RVT, model zgrade, količine, zidovi, podovi, vrata, prozori, stubovi, prostorije, po tipu, po nivou, ažuriranje, novija verzija modela, razrada projekta
from: 8c4c12c9
---

Ne moraš da čekaš sledeći set crteža. Kada arhitekta pošalje model zgrade, otvori ga ovde i uzmi količine direktno iz njega. Model se čita na tvom računaru; ništa se nigde ne šalje.

## Koraci

1. Izaberi {{ui:Model}} na traci alata i izaberi `.ifc` datoteku modela, ili je otvori sa {{ui:Otvori planove}} kao i svaku drugu datoteku.
2. {{ui:Predmer iz modela}} se otvara sa jednim redom po kategoriji i tipu: zidovi po tipu zida, podovi po tipu poda, vrata po tipu vrata, i tako dalje. Svaki red prikazuje svoj broj i u čemu se ta kategorija meri.
3. Postavi {{ui:Grupiši po}} na {{ui:Kategorija}} za brz zbir, ili na {{ui:Kategorija, tip i nivo}} da podeliš svaki tip po spratu.
4. Odznači redove koje ne želiš. {{ui:Traži}} sužava spisak. Odznačavanje reda takođe sakriva njegove delove na 3D slici.
5. Daj modelu {{ui:Naziv modela}} koji ćeš zadržati za ceo posao, na primer naziv projekta.
6. Izaberi {{ui:Dodaj u predmer}}. Svaka količina postaje tipizirana količina na listi stavki. Imenuj je, cenuj i dodaj sklopove kao i svaku drugu stavku.

## Pogled modela u 3D

{{ui:Prikaži model u 3D}} crta model iznad tabele, jednom bojom za svaki red (oznaka boje pored imena reda). Prevuci da ga okreneš, drži {{key:Shift}} i prevuci da ga pomeriš, koristi točkić za zumiranje, a izaberi {{ui:Uklopi}} ili {{ui:Vrati}} da se vratiš.

- **Klikni deo** na slici i njegov red se izabere u tabeli, sa svim delovima tog reda osvetljenim, a ostali su bledi. Klikni isti deo ponovo i, ako je u više redova (zid u svojim slojevima), izabere se sledeći red.
- **Klikni red** u tabeli da osvetliš njegove delove. Klikni ponovo, ili klikni prazan prostor na slici, da ih skloniš.
- Prostorije se ne crtaju, jer bi zapremina prostorije sakrila zgradu.
- Vrlo veliki model zadržava samo kutiju za neke delove da bi stao u memoriju; panel kaže koliko ih je. Brojevi se ne menjaju.

Ako ovaj računar ne može da crta 3D, tabela radi kao i pre.

## Grupisanje po materijalu, sloju ili veličini

{{ui:Grupiši po}} ima još tri izbora:

- {{ui:Kategorija i materijal}}: zid, pod ili krov napravljen od slojeva daje materijalu svakog sloja svoj red, pa gips-karton, nosači i izolacija mogu da se cene odvojeno. Deo zgrade sa jednim materijalom dobija red tog materijala, a deo bez materijala ostaje u redu pod nazivom „Bez imenovanog materijala“.
- {{ui:Kategorija i sloj}}: isto, uz debljinu sloja u redu („Izolacija, 100 mm“).
- {{ui:Kategorija, tip i veličina vrata ili prozora}}: vrata i prozori se dele po širini i visini (na primer 3'-0" × 6'-8" ili 914 × 2,032 mm).

Za sloj, površina je sopstvena površina zida (ili površina poda ili krova u osnovi, odnosno na površini), a zapremina je ta površina puta debljina sloja. Napomena reda kaže koliko je brojeva došlo iz sloja. Slojevi jednog zida zbrajaju se u zapreminu koju model navodi za taj zid.

## Čuvanje redova ili otvora kao CSV

{{ui:Sačuvaj redove kao CSV}} čuva redove koje si označio, sa jedinicama u svakom zaglavlju, za tabelu. {{ui:Sačuvaj specifikaciju otvora kao CSV}} (samo kada model ima vrata ili prozore) čuva svaka vrata i prozor po tipu, nivou i veličini, sa njihovim brojem.

## Šta se meri

| Kategorija | Količine |
|---|---|
| Zidovi | broj, dužina, površina zida (jedna strana, otvori oduzeti), zapremina |
| Podovi, ploče, plafoni i ostali pokrivači | broj, površina u osnovi, zapremina |
| Krovovi | broj, površina u osnovi, površina krova, zapremina |
| Temelji | broj, površina u osnovi, zapremina |
| Stubovi, grede i elementi | broj, dužina duž elementa, zapremina |
| Ograde, cevi, vazdušni kanali i kablovske trase | broj, dužina |
| Stepenice | broj, zapremina |
| Prostorije | broj, površina poda, zapremina |
| Vrata, prozori i sve ostalo | broj |

Kada je autor modela naveo količinu u datoteci, koristi se taj broj. Inače se broj meri iz oblika elementa. Svaka količina ima napomenu koja kaže koje je od toga i koliko je elemenata dalo broj.

:::note
Dužina zida izmerena iz oblika ide od kraja do kraja, pa dva zida koja se preklapaju na uglu oba uključuju ugao. Zapremina zahteva zatvoren oblik: element čiji oblik nije zatvoren se broji, ali ne daje zapreminu. Zakrivljen ili uglast element zida meri se kao polovina svih njegovih vertikalnih strana, a njegova napomena to kaže.
:::

## Kada stigne novi model

Otvori noviju datoteku i upiši isto {{ui:Naziv modela}}. Pre nego što nešto dodaš, panel kaže koliko je količina novo, koliko ih je promenjeno i sa čega na šta, i koje količine iz ranije kopije više nisu u modelu. Izaberi {{ui:Dodaj u predmer}}: promenjene količine dobijaju nove brojeve, a tvoji nazivi, cene, otpad i sklopovi ostaju. Količine koje više nisu u modelu zadržavaju stare brojeve; ukloni ih sam ako ih je projekat izbacio.

Tip i nivo se prepoznaju po nazivima. Ako arhitekta preimenuje tip zida, stiže kao nova količina, a stara se navodi kao nestala.

## Datoteke koje ovo čita

IFC datoteke (IFC2x3, IFC4 i IFC4.3). IFC datoteka sa putevima, prugama ili mostovima i dalje donosi njihove količine infrastrukture direktno, kao i pre.

TakeoffCraft ne čita `.rvt` datoteke u ovom izdanju. Ako arhitekta radi u programu Revit, zatraži IFC izvoz modela (Datoteka, Izvoz, IFC) i otvori taj.

Jedan model može da donese do 500 količina odjednom. Ako ih ima više, odznači redove ili grupiši po kategoriji.
