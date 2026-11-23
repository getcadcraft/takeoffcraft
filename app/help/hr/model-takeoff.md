---
title: Izrada predmjera iz modela zgrade
summary: Otvorite IFC model arhitekta, pogledajte ga u 3D-u, odaberite zidove, podove, vrata i ostalo po tipu, materijalu, sloju ili veličini te unesite njihove brojeve, duljine, površine i volumene u predmjer. Noviji primjerak modela ažurira iste količine.
keywords: model, predmjer iz modela, 3D prikaz, klik na dio, pronađi redak, materijal, sloj, slojevi zida, gipskarton, izolacija, veličine vrata, veličine prozora, popis otvora, csv, 3d, bim, ifc, rvt, model zgrade, količine, zidovi, podovi, vrata, prozori, stupovi, prostorije, po tipu, po etaži, ažuriranje, noviji model, razrada projekta
from: 8c4c12c9
---

Ne morate čekati sljedeći set crteža. Kad arhitekt pošalje model zgrade, otvorite ga ovdje i uzmite količine izravno iz njega. Model se čita na vašem računalu; ništa se ne šalje nikamo.

## Koraci

1. Odaberite {{ui:Model}} na alatnoj traci i odaberite datoteku modela `.ifc`, ili je otvorite pomoću {{ui:Otvori nacrte}} kao i svaku drugu datoteku.
2. {{ui:Predmjer iz modela}} se otvara s jednim retkom za svaku kategoriju i tip: zidovi po tipu zida, podovi po tipu poda, vrata po tipu vrata i tako dalje. Svaki redak prikazuje svoj broj i mjeru po kojoj se ta kategorija mjeri.
3. Postavite {{ui:Grupiraj po}} na {{ui:Kategorija}} za brzi zbroj ili na {{ui:Kategorija, tip i razina}} da svaki tip podijelite po etažama.
4. Odznačite retke koje ne želite. {{ui:Pronađi}} sužava popis. Odznačivanje retka također skriva njegove dijelove na 3D slici.
5. Dajte modelu {{ui:Naziv modela}} koji ćete zadržati za cijeli posao, na primjer naziv projekta.
6. Odaberite {{ui:Dodaj u predmjer}}. Svaka količina postaje upisana količina na popisu stavki. Imenujte je, odredite joj cijenu i pridružite sklopove kao i svaku drugu stavku.

## Pogled na model u 3D-u

{{ui:Prikaži model u 3D}} crta model iznad tablice, jednom bojom za svaki redak (boja pored naziva retka). Povucite za okretanje, držite {{key:Shift}} i povucite za pomicanje, koristite kotačić za zumiranje, a za povratak odaberite {{ui:Prilagodi}} ili {{ui:Vrati zadano}}.

- **Kliknite dio** na slici i njegov se redak odabere u tablici, sa svim dijelovima tog retka osvijetljenim, a ostali blijedi. Kliknite isti dio ponovo i, ako se nalazi u više redaka (zid u svojim slojevima), odabire se sljedeći redak.
- **Kliknite redak** u tablici da osvijetlite njegove dijelove. Kliknite ga ponovo ili kliknite prazno mjesto na slici da poništite.
- Prostorije se ne crtaju jer bi njihov volumen zaklonio zgradu.
- Vrlo velik model zadržava samo okvir za neke dijelove kako bi stao u memoriju; ploča kaže koliko ih je. Brojevi se ne mijenjaju.

Ako ovo računalo ne može crtati 3D, tablica radi kao i prije.

## Grupiranje po materijalu, sloju ili veličini

{{ui:Grupiraj po}} ima još tri izbora:

- {{ui:Kategorija i materijal}}: zid, pod ili krov izgrađen od slojeva dobiva zaseban redak za materijal svakog sloja, pa se gipskartonske ploče, profili i izolacija mogu cijeniti odvojeno. Dio zgrade s jednim materijalom dobiva redak tog materijala, a dio bez materijala ostaje u retku pod nazivom „Bez navedenog materijala“.
- {{ui:Kategorija i sloj}}: isto, uz debljinu sloja u retku (na primjer „Izolacija, 100 mm“).
- {{ui:Kategorija, tip i veličina vrata ili prozora}}: vrata i prozori dijele se po širini i visini (na primjer 3'-0" × 6'-8" ili 914 × 2,032 mm).

Za sloj, površina je vlastita ploha zida (ili tlocrtna odnosno površina poda ili krova), a volumen je ta površina pomnožena debljinom sloja. Napomena retka kaže koliko je brojeva došlo iz sloja. Slojevi jednog zida zbrajaju se u volumen koji model navodi za njega.

## Spremanje redaka ili otvora kao CSV

{{ui:Spremi retke kao CSV}} sprema retke koje ste označili, s mjernim jedinicama u svakom zaglavlju, za proračunsku tablicu. {{ui:Spremi popis otvora kao CSV}} (samo kad model ima vrata ili prozore) sprema svaka vrata i prozor po tipu, etaži i veličini s njihovim brojem.

## Što se mjeri

| Kategorija | Količine |
|---|---|
| Zidovi | broj, duljina, površina zida (jedna strana, otvori oduzeti), volumen |
| Podovi, ploče, stropovi i ostali pokrovi | broj, tlocrtna površina, volumen |
| Krovovi | broj, tlocrtna površina, površina krova, volumen |
| Temelji | broj, tlocrtna površina, volumen |
| Stupovi, grede i štapovi | broj, duljina duž štapa, volumen |
| Ograde, cijevi, kanali i kabelske trase | broj, duljina |
| Stubišta | broj, volumen |
| Prostorije | broj, površina poda, volumen |
| Vrata, prozori i sve ostalo | broj |

Ako je autor modela količinu naveo u datoteci, koristi se taj broj. Inače se broj mjeri iz oblika elementa. Svaka količina ima napomenu koja kaže koji je slučaj i koliko je elemenata dalo broj.

:::note
Duljina zida izmjerena iz oblika ide od kraja do kraja, pa oba zida koja se preklapaju na kutu uključuju kut. Volumen zahtijeva zatvoren oblik: element čiji oblik nije zatvoren se broji, ali ne daje volumen. Zakriveni ili kutni zidni element mjeri se kao polovica svih njegovih okomitih ploha, a njegova napomena to kaže.
:::

## Kad stigne noviji model

Otvorite noviju datoteku i upišite isti {{ui:Naziv modela}}. Prije nego što išta dodate, ploča kaže koliko je količina novo, koliko ih se promijenilo i s čega na što, te koje količine iz ranije kopije više nisu u modelu. Odaberite {{ui:Dodaj u predmjer}}: promijenjene količine dobivaju nove brojeve, a vaši nazivi, stope, otpad i sklopovi ostaju. Količine koje su nestale iz modela zadržavaju stare brojeve; uklonite ih sami ako ih je projekt izbacio.

Količina se prepoznaje po nazivu tipa i etaže. Ako arhitekt preimenuje tip zida, on stiže kao nova količina, a stara se navodi kao nestala.

## Datoteke koje se čitaju

IFC datoteke (IFC2x3, IFC4 i IFC4.3). IFC datoteka s cestama, prugama ili mostovima i dalje donosi njihove količine infrastrukture izravno, kao i prije.

TakeoffCraft u ovoj verziji ne čita datoteke `.rvt`. Ako arhitekt radi u Revitu, zatražite IFC izvoz modela (File, Export, IFC) i otvorite taj.

Jedan model može donijeti najviše 500 količina odjednom. Ako ih ima više, odznačite retke ili grupirajte po kategoriji.
