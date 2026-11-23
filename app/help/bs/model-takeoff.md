---
title: Uzmite količine iz modela zgrade
summary: Otvorite IFC model arhitekte, pogledajte ga u 3D, odaberite zidove, podove, vrata i ostalo po tipu, materijalu, sloju ili veličini, te prenesite njihove brojeve, dužine, površine i zapremine u predmjer. Novija kopija modela ažurira iste količine.
keywords: model, predmjer iz modela, 3D prikaz, kliknite dio, pronađite red, materijal, sloj, slojevi zida, gips-karton, izolacija, veličine vrata, veličine prozora, raspored otvora, csv, 3d, bim, ifc, rvt, model zgrade, količine, zidovi, podovi, vrata, prozori, stubovi, prostorije, po tipu, po nivou, ažuriranje, noviji model, razrada projekta
from: 8c4c12c9
---

Ne morate čekati sljedeći skup crteža. Kada arhitekta pošalje model zgrade, otvorite ga ovdje i uzmite količine direktno iz njega. Model se čita na vašem računaru; ništa se ne šalje nigdje.

## Koraci

1. Odaberite {{ui:Model}} na traci i izaberite `.ifc` datoteku modela, ili ga otvorite pomoću {{ui:Otvori planove}} kao svaku drugu datoteku.
2. {{ui:Predmjer iz modela}} se otvara s jednim redom po kategoriji i tipu: zidovi po tipu zida, podovi po tipu poda, vrata po tipu vrata, i tako dalje. Svaki red prikazuje svoj broj i u čemu se ta kategorija mjeri.
3. Postavite {{ui:Grupiši po}} na {{ui:Kategorija}} za brz zbir, ili na {{ui:Kategorija, tip i nivo}} da podijelite svaki tip po spratu.
4. Odznačite redove koje ne želite. {{ui:Traži}} sužava listu. Odznačavanje reda također sakriva njegove dijelove na 3D slici.
5. Dajte modelu {{ui:Naziv modela}} koji ćete zadržati za cijeli posao, na primjer naziv projekta.
6. Odaberite {{ui:Dodaj u predmjer}}. Svaka količina postaje stavka s upisanom količinom na listi stavki. Imenujte je, cijenite i pridružite sklopove kao i svaku drugu stavku.

## Pogled na model u 3D

{{ui:Prikaži model u 3D}} crta model iznad tabele, jednu boju za svaki red (boja pored imena reda). Prevucite za okretanje, držite {{key:Shift}} i prevucite za pomjeranje, koristite točkić za zumiranje, a {{ui:Uklopi}} ili {{ui:Vrati}} vraća vas nazad.

- **Kliknite dio** na slici i njegov red se odabere u tabeli, sa svim dijelovima tog reda osvijetljenim, a ostali blijedi. Kliknite isti dio ponovo i, ako se nalazi u više redova (zid u svojim slojevima), odabire se sljedeći red.
- **Kliknite red** u tabeli da osvijetlite njegove dijelove. Kliknite ga ponovo, ili kliknite prazan prostor na slici, da poništite.
- Prostorije se ne crtaju, jer bi zapremina prostorije sakrila zgradu.
- Vrlo veliki model zadržava samo kutiju za neke dijelove da stane u memoriju; panel kaže koliko. Brojevi se ne mijenjaju.

Ako ovaj računar ne može crtati 3D, tabela radi kao i prije.

## Grupiši po materijalu, sloju ili veličini

{{ui:Grupiši po}} ima još tri izbora:

- {{ui:Kategorija i materijal}}: zid, pod ili krov građen od slojeva daje materijalu svakog sloja poseban red, pa se gips-karton, podkonstrukcija i izolacija mogu cijeniti odvojeno. Dio zgrade s jednim materijalom dobija red tog materijala, a dio bez materijala ostaje u redu pod nazivom "Nema naznačenog materijala".
- {{ui:Kategorija i sloj}}: isto, s debljinom sloja u redu ("Izolacija, 100 mm").
- {{ui:Kategorija, tip i veličina vrata ili prozora}}: vrata i prozori dijele se po širini i visini (na primjer 3'-0" × 6'-8" ili 914 × 2,032 mm).

Za sloj, površina je vlastita površina zida (ili površina poda ili krova u planu ili na površini), a zapremina je ta površina puta debljina sloja. Napomena reda kaže koliko je brojeva došlo iz sloja. Slojevi jednog zida zbrajaju se do zapremine koju model navodi za taj zid.

## Spremite redove ili otvore kao CSV

{{ui:Spasi redove kao CSV}} sprema redove koje ste označili, s jedinicama u svakom zaglavlju, za proračunsku tabelu. {{ui:Spasi raspored otvora kao CSV}} (samo kada model ima vrata ili prozore) sprema svaka vrata i prozor po tipu, nivou i veličini, s brojem.

## Šta se mjeri

| Kategorija | Količine |
|---|---|
| Zidovi | broj, dužina, površina zida (jedna strana, otvori izuzeti), zapremina |
| Podovi, ploče, plafoni i ostale obloge | broj, površina u planu, zapremina |
| Krovovi | broj, površina u planu, površina krova, zapremina |
| Temelji | broj, površina u planu, zapremina |
| Stubovi, grede i elementi | broj, dužina duž elementa, zapremina |
| Ograde, cijevi, kanali i kablovske trase | broj, dužina |
| Stepenice | broj, zapremina |
| Prostorije | broj, površina poda, zapremina |
| Vrata, prozori i ostalo | broj |

Gdje je autor modela naveo količinu u datoteci, koristi se taj broj. Inače se broj mjeri iz oblika elementa. Svaka količina ima napomenu koja kaže koji je slučaj i koliko je elemenata dalo broj.

:::note
Dužina zida izmjerena iz njegovog oblika ide od kraja do kraja, pa dva zida koja se preklapaju na uglu oba uključuju ugao. Zapremina zahtijeva zatvoren oblik: element čiji oblik nije zatvoren se broji i ne daje zapreminu. Zakriven ili uglast element zida mjeri se kao polovina svih njegovih uspravnih strana, a njegova napomena to kaže.
:::

## Kada stigne noviji model

Otvorite noviju datoteku i upišite isti {{ui:Naziv modela}}. Prije nego što išta dodate, panel kaže koliko je količina novo, koliko ih je promijenjeno i iz čega u šta, te koje količine iz ranije kopije više nisu u modelu. Odaberite {{ui:Dodaj u predmjer}}: promijenjene količine preuzimaju nove brojeve, a vaši nazivi, cijene, otpad i sklopovi ostaju. Količine koje su nestale iz modela zadržavaju stare brojeve; uklonite ih sami ako ih je projekat izbacio.

Po nazivima tipa i nivoa prepoznaje se količina. Ako arhitekta preimenuje tip zida, stiže kao nova količina, a stara se navodi kao nestala.

## Datoteke koje se čitaju

IFC datoteke (IFC2x3, IFC4 i IFC4.3). IFC datoteka s putevima, prugama ili mostovima i dalje unosi količine infrastrukture direktno, kao i prije.

TakeoffCraft u ovom izdanju ne čita `.rvt` datoteke. Ako arhitekta radi u Revitu, zatražite IFC izvoz modela (File, Export, IFC) i otvorite taj.

Jedan model može unijeti do 500 količina odjednom. Ako ih ima više, odznačite redove ili grupišite po kategoriji.
