---
title: Krovovi i nagibi
summary: Dajte površini njen nagib da izmerite površinu krova iz osnove, a kosnike, slemena i žlebove izmerite duž njihovog nagiba.
keywords: krov, nagib, faktor nagiba, uspon, horizontala, 6:12, kosnik, sleme, žleb, zabat, pokrivanje krova, kvadrati, površina na nagibu, prava dužina, površina na osnovi
from: 38225b60
---

Krovni plan prikazuje svaku krovnu ravan ravno, gledano odozgo. Sam krov je veći: ravan na 6:12 ima oko 12% više površine od svoje osnove, a njene kose ivice su duže nego što izgledaju. Dajte stavki njen nagib i TakeoffCraft meri duž nagiba.

## Unos nagiba

Nagib je uspon na svakih 12 horizontale, kao na simbolima nagiba krovnog plana. Unesite ga kao `6:12`, `6/12` ili samo `6`; radi i drugi odnos (`4:10` je 4.8:12). Ugao se unosi sa znakom za stepen: `26.57°`. Prazno ili `0` je ravan krov.

## Krovne površine

1. Napravite stavku površine za pokrivanje ili otvorite postojeću.
2. U njenim podešavanjima unesite **Nagib**, na primer `6:12`.
3. Ocrtajte svaku krovnu ravan na planu alatom {{ui:Površina}}, kao i obično.

Svaka ravan se računa kao površina na osnovi puta faktor nagiba: √(1 + (uspon ÷ 12)²), 1.118 za 6:12 i 1.414 za 12:12. Izaberite ravan da vidite njenu **Površinu** (na nagibu), **Površinu na osnovi** i **Faktor nagiba**.

Ravni sa drugim nagibom: izaberite ravan i unesite njen sopstveni **Nagib** u njenom panelu. Ostavite prazno da se koristi nagib stavke. Prikaz 3D provere, sklopovi (`A` je površina na nagibu), troškovi i izvoz svi koriste površinu na nagibu. Odbici na nagnutoj ravni, kao što su krovni prozori, oduzimaju se pod istim nagibom.

Obim (`P`) ostaje obim na osnovi. Strehe, kosnike, slemena i žlebove merite kao deonice (ispod).

## Kosnici, sleme i žlebovi

1. Napravite linearnu stavku, kao što je „Ivica kosnika” ili „Slemena”.
2. Postavite joj **Vrstu ivice** na **Kosnik** (kosa ivica, kao kod zabata) ili na **Sleme ili žleb** (linija gde se sastaju dve ravni), i unesite **Nagib** krovnih ravni.
3. Nacrtajte deonice na planu alatom {{ui:Linijski}}.

Kosnik se računa kao dužina na osnovi puta faktor nagiba. Sleme ili žleb ide pod uglom od 45° preko plana između dve ravni istog nagiba, pa je njegova prava dužina dužina na osnovi puta √(1 + (uspon ÷ 12)² ÷ 2): 1.061 za 6:12, 1.225 za 12:12.

Jedna deonica može da meša oba. Izaberite je: svaki segment u njenom panelu ima listu vrste ivice — **Stavke** (podešavanje stavke), **Ravno**, **Kosnik** ili **Sleme ili žleb** — i njegovu dužinu duž nagiba. Sopstveni **Nagib** deonice u panelu zamenjuje nagib stavke za sve njene segmente. Panel takođe prikazuje **Dužinu na osnovi**, a oznake na listu prikazuju dužine duž nagiba.

Odbici i dalje rade: odbijeni segment ne broji ništa, bio nagnut ili ne.

:::note
Sleme i žlebovi pretpostavljaju da obe ravni imaju isti nagib. Za ravni različitih nagiba izmerite sleme po njegovoj pravoj dužini na drugom mestu, ili ga nacrtajte kao kosnik sa ekvivalentnim nagibom.
:::
